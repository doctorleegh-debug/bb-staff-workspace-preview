import {MEAL_LIMIT_MS,timerState} from './meal-timer.js';

export function mealDate(timestamp){
 const date=new Date(timestamp+9*60*60*1000);
 return Number.isFinite(date.getTime())?date.toISOString().slice(0,10):'';
}
export const mealMonth=timestamp=>{const day=mealDate(timestamp);return day.slice(2,4)+day.slice(5,7);};
export function mealPeople(roster,month){
 const groups=new Map();
 for(const row of roster){if(!groups.has(row.personId))groups.set(row.personId,[]);groups.get(row.personId).push(row);}
 return [...groups.values()].map(rows=>rows.find(r=>r.month===month)||rows.filter(r=>r.month<=month).sort((a,b)=>b.month.localeCompare(a.month))[0]||rows[0]);
}
const freshSummary=()=>({count:0,total:0,average:0,longest:0,overCount:0,overTotal:0});
export function employeeMealPeople(roster,records,month){
 const latest=[...new Set(roster.map(r=>r.month))].sort().at(-1);
 const rosterMonth=roster.some(r=>r.month===month)?month:latest;
 const current=mealPeople(roster.filter(r=>r.month===rosterMonth),rosterMonth),ids=new Set(current.map(r=>r.personId));
 // Preserve an explicit way to finish an older identity; never merge names.
 const recovery=mealPeople(roster,month).filter(r=>!ids.has(r.personId)&&records[r.personId]?.active&&!records[r.personId]?.error).map(r=>({...r,recoveryOnly:true}));
 return [...current,...recovery];
}
function accumulate(summary,record){
 summary.count++;summary.total+=record.elapsed;summary.average=summary.total/summary.count;
 summary.longest=Math.max(summary.longest,record.elapsed);
 if(record.elapsed>MEAL_LIMIT_MS){summary.overCount++;summary.overTotal+=record.elapsed-MEAL_LIMIT_MS;}
}
export function buildMealDashboard({roster,records,month,team='전체',search='',now=Date.now()}){
 const matches=p=>(team==='전체'||p.teams?.includes(team))&&(!search||[p.name,p.rawTeam,p.originalName].some(s=>s?.includes(search)));
 const people=mealPeople(roster,month).filter(matches),currentPeople=mealPeople(roster,mealMonth(now)).filter(matches);
 const completed=[],staff=[],days=new Map(),totals=freshSummary(),errors=[];
 for(const person of people){
  const record=records[person.personId];if(record?.error){errors.push({person,error:record.error});continue;}
  const summary={...freshSummary(),person};
  for(const entry of record?.history||[]){
   if(mealMonth(entry.startedAt)!==month)continue;
   const item={...entry,person,date:mealDate(entry.startedAt)};completed.push(item);accumulate(summary,item);accumulate(totals,item);
   if(!days.has(item.date))days.set(item.date,{...freshSummary(),date:item.date});accumulate(days.get(item.date),item);
  }
  // Keep zero-record staff visible; they are not included in average duration.
  staff.push(summary);
 }
 const active=currentPeople.flatMap(person=>{
  const record=records[person.personId];if(!record?.active||record.error)return[];
  return [{person,...record.active,...timerState(record,now)}];
 }).sort((a,b)=>a.startedAt-b.startedAt);
 return {completed:completed.sort((a,b)=>b.startedAt-a.startedAt),staff,days:[...days.values()].sort((a,b)=>a.date.localeCompare(b.date)),totals,active,errors,peopleCount:staff.filter(s=>s.count>0).length};
}

// Explicit preview only. Never writes or seeds staff storage.
export function demoMealRecords(roster,month,now=Date.now()){
 const people=mealPeople(roster,month),records={};
 people.forEach((person,index)=>{
  const history=[2,7,14,19].map((day,n)=>{
   const startedAt=Date.parse(`20${month.slice(0,2)}-${month.slice(2)}-${String(day).padStart(2,'0')}T${index%2?'13':'12'}:00:00+09:00`);
   const elapsed=[45,52,58,64,71][(index+n)%5]*60000;
   return {id:`demo-${person.personId}-${n}`,startedAt,endedAt:startedAt+elapsed,elapsed};
  });
  records[person.personId]={history,active:index<3?{id:`demo-active-${index}`,startedAt:now-[22,47,67][index]*60000}:null};
 });
 return records;
}
