import {readStaffState} from './staff-activity.js';
import {mealDate} from './meal-dashboard.js';
const time=value=>new Date(value).toLocaleTimeString('ko-KR',{timeZone:'Asia/Seoul',hour:'2-digit',minute:'2-digit',hourCycle:'h23'});
// Employees whose meal is in progress, placed on the Asia/Seoul day the meal started. Other activities and unreadable records are left out; no end time is exposed.
export function mealStatusEvents(people,storage){
 return people.flatMap(p=>{const active=readStaffState(storage,p.personId).active.find(r=>r.kind==='meal');if(!active)return[];const at=time(active.startedAt),paused=Number.isFinite(active.pausedAt);return[{id:'status:'+p.personId,personId:p.personId,name:p.name,rawTeam:p.rawTeam,teams:p.teams,startedAt:active.startedAt,paused,date:mealDate(active.startedAt),time:at,label:(paused?'식사 중단':'식사중')+' · 시작 '+at}];}).sort((a,b)=>a.startedAt-b.startedAt);
}
