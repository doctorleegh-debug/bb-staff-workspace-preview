export const MEAL_LIMIT_MS=60*60*1000;
export const MEAL_PREFIX='bb-staff:public-preview:meal:v1:';
const paused=active=>Number.isFinite(active?.pausedAt);
export function timerState(record,now=Date.now()){
  const active=record?.active;
  if(!active)return {active:false,paused:false,elapsed:0,remaining:MEAL_LIMIT_MS,over:0};
  // A paused meal stops counting at pausedAt; time already paused is excluded.
  const elapsed=Math.max(0,(paused(active)?active.pausedAt:now)-active.startedAt-(active.pausedMs||0));
  return {active:true,paused:paused(active),elapsed,remaining:Math.max(0,MEAL_LIMIT_MS-elapsed),over:Math.max(0,elapsed-MEAL_LIMIT_MS)};
}
export function clockText(ms){const sec=Math.floor(Math.max(0,ms)/1000);return `${String(Math.floor(sec/60)).padStart(2,'0')}:${String(sec%60).padStart(2,'0')}`;}
export function readMeal(storage,personId){
  const raw=storage.getItem(MEAL_PREFIX+personId);if(raw===null)return{active:null,history:[]};
  const value=JSON.parse(raw);
  const validStart=record=>record&&Number.isFinite(record.startedAt)&&record.startedAt>=0&&record.startedAt<=8640000000000000&&typeof record.id==='string'&&(record.pausedMs===undefined||(Number.isFinite(record.pausedMs)&&record.pausedMs>=0));
  const validActive=record=>validStart(record)&&(record.pausedAt==null||(Number.isFinite(record.pausedAt)&&record.pausedAt>=record.startedAt));
  if(!value||!Array.isArray(value.history)||(value.active&&!validActive(value.active))||value.history.some(record=>!validStart(record)||!Number.isFinite(record.endedAt)||record.endedAt<record.startedAt||record.endedAt>8640000000000000||!Number.isFinite(record.elapsed)||record.elapsed!==record.endedAt-record.startedAt-(record.pausedMs||0)))throw new Error('식사 기록 형식을 확인해야 합니다. 기존 자료는 보존했습니다.');
  return value;
}
export function transitionMeal(record,action,now,id){
  if(!['start','end','pause','resume'].includes(action)||!Number.isFinite(now)||now<0)throw new Error('식사 기록 요청을 확인해 주세요.');
  if(action==='start'){
    if(record.active)return record;
    return {...record,active:{id,startedAt:now}};
  }
  const active=record.active;if(!active)return record;
  const pausedMs=active.pausedMs||0;
  if(action==='pause'){if(paused(active))return record;return {...record,active:{...active,pausedAt:Math.max(active.startedAt,now),pausedMs}};}
  if(action==='resume'){if(!paused(active))return record;return {...record,active:{...active,pausedAt:null,pausedMs:pausedMs+Math.max(0,now-active.pausedAt)}};}
  const endedAt=Math.max(active.startedAt,now),totalPaused=Math.min(endedAt-active.startedAt,pausedMs+(paused(active)?Math.max(0,endedAt-active.pausedAt):0));
  return {active:null,history:[...record.history,{id:active.id,startedAt:active.startedAt,endedAt,pausedMs:totalPaused,elapsed:endedAt-active.startedAt-totalPaused}]};
}
