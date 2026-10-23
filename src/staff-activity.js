import {MEAL_PREFIX,readMeal,transitionMeal} from './meal-timer.js';
export const ACTIVITY_PREFIX='bb-staff:public-preview:activity:v1:';
export const ACTIVITY_TYPES={meal:{label:'식사',status:'식사중'},rest:{label:'휴식',status:'휴식중'},outing:{label:'외출',status:'외출중'},offsite:{label:'외근',status:'외근중'}};
export function previewPerson(roster){
 const rows=roster.filter(p=>p.name==='유병호'),ids=[...new Set(rows.map(p=>p.personId))];
 if(ids.length!==1)throw new Error('유병호의 직원 연결을 확인해야 합니다.');
 return [...rows].sort((a,b)=>b.month.localeCompare(a.month))[0];
}
export function readActivity(storage,id){
 const raw=storage.getItem(ACTIVITY_PREFIX+id);if(raw===null)return{active:null,history:[]};
 const record=JSON.parse(raw),valid=r=>r&&['rest','outing','offsite'].includes(r.kind)&&typeof r.id==='string'&&Number.isFinite(r.startedAt)&&r.startedAt>=0&&r.startedAt<=8640000000000000;
 if(!record||!Array.isArray(record.history)||(record.active&&!valid(record.active))||record.history.some(r=>!valid(r)||!Number.isFinite(r.endedAt)||r.endedAt<r.startedAt||r.endedAt>8640000000000000||r.elapsed!==r.endedAt-r.startedAt))throw new Error('상태 기록 형식을 확인해야 합니다. 기존 기록은 보존했습니다.');
 return record;
}
export function readStaffState(storage,id){
 const result={meal:null,other:null,active:[],errors:[]};
 try{result.meal=readMeal(storage,id);if(result.meal.active)result.active.push({...result.meal.active,kind:'meal'});}catch(e){result.errors.push(e.message);}
 try{result.other=readActivity(storage,id);if(result.other.active)result.active.push(result.other.active);}catch(e){result.errors.push(e.message);}
 return result;
}
export async function updateStaffActivity(storage,id,kind,action,locks=globalThis.navigator?.locks,now=()=>Date.now(),expectedActiveId){
 if(!ACTIVITY_TYPES[kind]||!['start','end'].includes(action))throw new Error('상태 변경 요청을 확인해 주세요.');
 const work=()=>{
  const time=now();if(!Number.isFinite(time)||time<0||time>8640000000000000)throw new Error('기기 시간을 확인해 주세요.');
  if(action==='start'){
   const state=readStaffState(storage,id);if(state.errors.length)throw new Error(state.errors.join(' '));
   if(state.active.some(r=>r.kind!==kind))throw new Error('진행 중인 상태를 먼저 종료해 주세요.');
  }
  if(kind==='meal'){
   const record=readMeal(storage,id);
   if(action==='end'&&expectedActiveId!==undefined&&record.active?.id!==expectedActiveId)throw new Error('현재 상태가 변경됐습니다. 화면을 새로고침해 다시 확인해 주세요.');
   const next=transitionMeal(record,action,time,crypto.randomUUID());
   if(next!==record)storage.setItem(MEAL_PREFIX+id,JSON.stringify(next));return next;
  }
  const record=readActivity(storage,id);let next=record;
  if(action==='end'&&expectedActiveId!==undefined&&record.active?.id!==expectedActiveId)throw new Error('현재 상태가 변경됐습니다. 화면을 새로고침해 다시 확인해 주세요.');
  if(action==='start'&&!record.active)next={...record,active:{id:crypto.randomUUID(),kind,startedAt:time}};
  if(action==='end'&&record.active){
   if(record.active.kind!==kind)throw new Error('현재 상태가 변경됐습니다. 다시 확인해 주세요.');
   const endedAt=Math.max(time,record.active.startedAt);next={active:null,history:[...record.history,{...record.active,endedAt,elapsed:endedAt-record.active.startedAt}]};
  }
  if(next!==record)storage.setItem(ACTIVITY_PREFIX+id,JSON.stringify(next));return next;
 };
 // Same lock as legacy meals prevents overlap across tabs and old meal controls.
 return locks?locks.request(MEAL_PREFIX+id,work):work();
}
export function recordsForActivity(states,kind){
 return Object.fromEntries(Object.entries(states).map(([id,state])=>{
  if(kind==='meal')return[id,state.meal||{error:state.errors.join(' '),history:[]}];
  return[id,state.other?{active:state.other.active?.kind===kind?state.other.active:null,history:state.other.history.filter(r=>r.kind===kind)}:{error:state.errors.join(' '),history:[]}];
 }));
}
