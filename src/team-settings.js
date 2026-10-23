export const TEAM_SETTINGS_KEY='bb-staff:public-preview:team-schedule-editors:v1';
const editorTitles=new Set(['주임','팀장','파트장','실장','총괄실장','대표이사']);
export function defaultTeamEditors(people=[]){
 return [...new Set(people.filter(p=>typeof p.personId==='string'&&p.personId&&editorTitles.has(p.jobTitle)).map(p=>p.personId))];
}
export function readTeamEditors(storage,people=[]){
 const raw=storage.getItem(TEAM_SETTINGS_KEY);if(raw===null)return defaultTeamEditors(people);
 const value=JSON.parse(raw);if(!Array.isArray(value)||value.some(id=>typeof id!=='string'||!id))throw new Error('팀 일정 담당자 설정을 확인해 주세요. 기존 설정은 보존했습니다.');return [...new Set(value)];
}
export async function saveTeamEditors(storage,ids,people,expected,locks=globalThis.navigator?.locks){
 if(!Array.isArray(ids)||ids.some(id=>!people.some(p=>p.personId===id)))throw new Error('팀 일정 담당자를 다시 선택해 주세요.');
 const work=()=>{if(expected!==undefined&&storage.getItem(TEAM_SETTINGS_KEY)!==expected)throw new Error('다른 탭에서 담당자 설정이 변경됐습니다. 새로고침 후 다시 확인해 주세요.');const saved=JSON.stringify([...new Set(ids)]);storage.setItem(TEAM_SETTINGS_KEY,saved);return saved;};
 return locks?locks.request(TEAM_SETTINGS_KEY,work):work();
}
export function allowedSchedulePeople({session,person,people,editors=[]}){
 if(session?.role==='admin')return people;
 if(session?.role!=='employee'||!person||session.personId!==person.personId)return[];
 return people.filter(p=>p.personId===person.personId||(editors.includes(person.personId)&&p.teams?.some(t=>person.teams?.includes(t))));
}
