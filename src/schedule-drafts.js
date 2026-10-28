// Schedule drafts are stored one row per day. A multi-day leave shares a groupId so it can be shown, edited and removed as one.
export const DRAFT_KINDS=['schedule','meals','attendance'];
export const MAX_RANGE_DAYS=62;
const DAY_MS=86400000;
export const validDraft=r=>!!r&&typeof r.id==='string'&&Array.isArray(r.teams)&&DRAFT_KINDS.includes(r.kind)&&typeof r.date==='string'&&(r.groupId===undefined||typeof r.groupId==='string');
export const groupOf=r=>r.groupId||r.id;
export const validDate=d=>typeof d==='string'&&/^20\d{2}-\d{2}-\d{2}$/.test(d)&&Number.isFinite(Date.parse(d+'T12:00:00Z'))&&new Date(d+'T12:00:00Z').toISOString().slice(0,10)===d;
export function expandDates(start,end=start){
 if(!validDate(start)||!validDate(end)||end<start)throw new Error('시작일과 종료일을 확인해 주세요.');
 const first=Date.parse(start+'T12:00:00Z'),count=Math.round((Date.parse(end+'T12:00:00Z')-first)/DAY_MS)+1;
 if(count>MAX_RANGE_DAYS)throw new Error(`기간은 최대 ${MAX_RANGE_DAYS}일까지 등록할 수 있습니다.`);
 return Array.from({length:count},(_,i)=>new Date(first+i*DAY_MS).toISOString().slice(0,10));
}
export function scheduleRows({person,start,end,label,note,groupId,createdAt},newId){
 return expandDates(start,end).map(date=>({id:newId(),groupId,kind:'schedule',personId:person.personId,name:person.name,teams:person.teams,rawTeam:person.rawTeam,date,month:date.slice(2,4)+date.slice(5,7),label,note,local:true,createdAt}));
}
export function withoutGroup(rows,groupId){return rows.filter(r=>!(r.kind==='schedule'&&groupOf(r)===groupId));}
// Sheet entries never change. Moving one on screen stores an override row that hides it on its own day and shows it (with its colour) on the new day.
export const sourceIdOf=source=>source?`schedule:${source.tab}:${source.cell}`:'';
export const overrideMap=rows=>new Map(rows.filter(r=>r.kind==='schedule'&&r.override&&r.sourceId).map(r=>[r.sourceId,r]));
export function moveOriginal(rows,entry,newDate,createdAt,newId){
 if(!validDate(newDate))throw new Error('옮길 날짜를 확인해 주세요.');
 const kept=rows.filter(r=>!(r.kind==='schedule'&&r.override&&r.sourceId===entry.sourceId));
 if(newDate===entry.from)return kept;
 return [...kept,{id:newId(),kind:'schedule',override:true,sourceId:entry.sourceId,from:entry.from,personId:entry.personId,name:entry.name,teams:entry.teams,rawTeam:entry.rawTeam,date:newDate,month:newDate.slice(2,4)+newDate.slice(5,7),label:entry.label,color:entry.color||'',note:entry.note||'',local:true,createdAt}];
}
export const shiftDate=(date,days)=>new Date(Date.parse(date+'T12:00:00Z')+days*DAY_MS).toISOString().slice(0,10);
export const dayDiff=(from,to)=>Math.round((Date.parse(to+'T12:00:00Z')-Date.parse(from+'T12:00:00Z'))/DAY_MS);
// Moves a whole group so it starts on newStart, keeping its length, ids and group id. Returns the same array when nothing changes.
export function moveGroup(rows,groupId,newStart){
 if(!validDate(newStart))throw new Error('옮길 날짜를 확인해 주세요.');
 const group=scheduleGroups(rows).find(g=>g.groupId===groupId);if(!group)throw new Error('옮길 일정을 찾지 못했습니다.');
 const offset=dayDiff(group.start,newStart);if(offset===0)return rows;
 return rows.map(r=>{if(r.kind!=='schedule'||groupOf(r)!==groupId)return r;const date=shiftDate(r.date,offset);return {...r,date,month:date.slice(2,4)+date.slice(5,7)};});
}
export function scheduleGroups(rows){
 const groups=new Map();
 for(const r of rows){
  if(r.kind!=='schedule')continue;
  const key=groupOf(r),g=groups.get(key);
  if(!g)groups.set(key,{...r,groupId:key,start:r.date,end:r.date,days:1});
  else{if(r.date<g.start)g.start=r.date;if(r.date>g.end)g.end=r.date;g.days++;}
 }
 return [...groups.values()].map(g=>({...g,date:g.start}));
}
