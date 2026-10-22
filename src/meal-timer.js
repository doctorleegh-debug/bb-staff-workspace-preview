export const MEAL_LIMIT_MS=60*60*1000;
export const MEAL_PREFIX='bb-staff:public-preview:meal:v1:';
export function timerState(record,now=Date.now()){
  const active=record?.active;
  if(!active)return {active:false,elapsed:0,remaining:MEAL_LIMIT_MS,over:0};
  const elapsed=Math.max(0,now-active.startedAt);
  return {active:true,elapsed,remaining:Math.max(0,MEAL_LIMIT_MS-elapsed),over:Math.max(0,elapsed-MEAL_LIMIT_MS)};
}
export function clockText(ms){const sec=Math.floor(Math.max(0,ms)/1000);return `${String(Math.floor(sec/60)).padStart(2,'0')}:${String(sec%60).padStart(2,'0')}`;}
export function readMeal(storage,personId){
  const raw=storage.getItem(MEAL_PREFIX+personId);if(raw===null)return{active:null,history:[]};
  const value=JSON.parse(raw);
  const validStart=record=>record&&Number.isFinite(record.startedAt)&&record.startedAt>=0&&record.startedAt<=8640000000000000&&typeof record.id==='string';
  if(!value||!Array.isArray(value.history)||(value.active&&!validStart(value.active))||value.history.some(record=>!validStart(record)||!Number.isFinite(record.endedAt)||record.endedAt<record.startedAt||record.endedAt>8640000000000000||!Number.isFinite(record.elapsed)||record.elapsed!==record.endedAt-record.startedAt))throw new Error('식사 기록 형식을 확인해야 합니다. 기존 자료는 보존했습니다.');
  return value;
}
export function transitionMeal(record,action,now,id){
  if(!['start','end'].includes(action)||!Number.isFinite(now)||now<0)throw new Error('식사 기록 요청을 확인해 주세요.');
  if(action==='start'){
    if(record.active)return record;
    return {...record,active:{id,startedAt:now}};
  }
  if(!record.active)return record;
  const endedAt=Math.max(record.active.startedAt,now);
  return {active:null,history:[...record.history,{...record.active,endedAt,elapsed:endedAt-record.active.startedAt}]};
}
export async function updateMeal(storage,personId,action,locks=globalThis.navigator?.locks,now=()=>Date.now()){
  const work=()=>{
    const current=readMeal(storage,personId),next=transitionMeal(current,action,now(),globalThis.crypto.randomUUID());
    if(next!==current)storage.setItem(MEAL_PREFIX+personId,JSON.stringify(next));
    return next;
  };
  return locks?locks.request(MEAL_PREFIX+personId,work):work();
}
