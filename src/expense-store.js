// Review prototype. Production identity and approval checks must run on the server.
export const EXPENSE_KEY='bb-staff:public-preview:expenses:v1';
export const EXPENSE_CONFIG_KEY='bb-staff:public-preview:expense-approvers:v1';
export const STAGES=['팀장','총괄실장','대표이사','대표원장'];
// 팀 구분 없이 쓰는 공용 물품(직원 음료·원내 비치 물품·소모품). 결재는 신청자 소속 팀의 1차 담당자부터 진행한다.
export const COMMON_TEAM='공통';
export const EXPENSE_CATEGORIES=['쿠팡','유니폼','무전기','명찰','우체국','기타'];
// Ledger start. Requests before this date or more than a year ahead are rejected.
export const EXPENSE_START='2026-10-01';
const fail=message=>{throw new Error(message);};
const text=(v,max,required=false)=>typeof v==='string'&&v.length<=max&&(!required||v.trim().length>0);
const numeric=v=>Number.isSafeInteger(v)&&v>=0&&v<=100000000;
const teamsOf=people=>[...new Set(people.flatMap(p=>p.teams||[]))];
const one=people=>people.length===1?people[0].personId:'';
export function firstApproverCandidates(people,team){
 const teamPeople=people.filter(p=>p.teams.includes(team));
 for(const titles of [['팀장'],['파트장'],['총괄실장'],['실장']]){const rows=teamPeople.filter(p=>titles.includes(p.jobTitle));if(rows.length)return rows;}
 return [];
}
export function defaultExpenseConfig(people){return{teams:Object.fromEntries(teamsOf(people).map(t=>[t,one(firstApproverCandidates(people,t))])),general:one(people.filter(p=>p.jobTitle==='총괄실장')),ceo:one(people.filter(p=>p.jobTitle==='대표이사')),director:one(people.filter(p=>p.teams.includes('대표')&&p.jobTitle?.startsWith('Dr.')))};}
const shape=config=>{if(!config||typeof config!=='object'||!config.teams||typeof config.teams!=='object'||Array.isArray(config.teams)||['general','ceo','director'].some(k=>typeof config[k]!=='string')||Object.values(config.teams).some(id=>typeof id!=='string'))fail('결재 담당자 설정 형식을 확인해 주세요. 기존 설정은 보존했습니다.');return config;};
function validateConfig(config,people){
 shape(config);
 for(const key of ['general','ceo','director'])if(config[key]&&!people.some(p=>p.personId===config[key]))fail('결재 담당자를 확인해 주세요.');
 for(const [team,id]of Object.entries(config.teams))if(!teamsOf(people).includes(team)||(id&&!people.some(p=>p.personId===id&&p.teams.includes(team))))fail('팀별 결재 담당자를 확인해 주세요.');
 return config;
}
// Stored approvers who left the roster read back as unset so the settings screen stays reachable; storage is untouched until an admin saves.
function currentConfig(config,people){
 shape(config);const known=(id,team)=>people.some(p=>p.personId===id&&(!team||p.teams.includes(team)))?id:'';
 return{teams:Object.fromEntries(teamsOf(people).map(t=>[t,known(config.teams[t]??'',t)])),general:known(config.general),ceo:known(config.ceo),director:known(config.director)};
}
export function readExpenseConfig(storage,people){const raw=storage.getItem(EXPENSE_CONFIG_KEY);return raw===null?defaultExpenseConfig(people):currentConfig(JSON.parse(raw),people);}
const locked=(key,work,locks=globalThis.navigator?.locks)=>locks?locks.request(key,async()=>work()):Promise.resolve().then(work);
export function saveExpenseConfig(storage,people,session,config,expected,{locks,guard=()=>{}}={}){
 return locked(EXPENSE_CONFIG_KEY,()=>{guard();if(session?.role!=='admin')fail('관리자만 결재선을 설정할 수 있습니다.');validateConfig(config,people);if(storage.getItem(EXPENSE_CONFIG_KEY)!==expected)fail('다른 탭에서 결재선이 변경됐습니다. 새로고침해 주세요.');const raw=JSON.stringify(config);storage.setItem(EXPENSE_CONFIG_KEY,raw);return raw;},locks);
}
function validateRecord(r){
 if(!r||!text(r.id,100,true)||!text(r.applicantId,100,true)||!text(r.name,100,true)||!text(r.team,60,true)||!text(r.item,200,true)||!text(r.note,2000)||!text(r.payment,60)||!text(r.category,40,true)||!text(r.date,10,true)||!numeric(r.amount)||!numeric(r.unitPrice)||!Number.isSafeInteger(r.quantity)||r.quantity<1||r.quantity>10000||r.unitPrice*r.quantity!==r.amount||!Number.isInteger(r.revision)||r.revision<1||!['pending','approved','rejected','cancelled'].includes(r.status)||!Number.isInteger(r.step)||r.step<0||r.step>4||!Array.isArray(r.route)||r.route.length!==4||!Array.isArray(r.history)||r.history.length>20)fail('지출결의서 저장 형식을 확인해 주세요. 기존 내용은 보존했습니다.');
 if(r.route.some((s,i)=>!s||s.label!==STAGES[i]||!text(s.personId,100,true)||!text(s.name,100,true))||r.history.some(h=>!h||!text(h.actorId,100,true)||!text(h.at,40,true)||!text(h.note,2000)||!['submit','approve','reject','cancel'].includes(h.action)||!Number.isInteger(h.step)||h.step<0||h.step>4)||!text(r.submittedAt,40,true)||!text(r.updatedAt,40,true))fail('지출결의서 결재 이력을 확인해 주세요.');
 if((r.status==='approved'&&r.step!==4)||(r.status==='pending'&&r.step>=4))fail('지출결의서 결재 순서를 확인해 주세요.');
 return r;
}
export function readExpenses(storage){const raw=storage.getItem(EXPENSE_KEY);if(raw===null)return[];const rows=JSON.parse(raw);if(!Array.isArray(rows)||rows.length>10000)fail('지출결의서 저장 목록을 확인해 주세요.');rows.forEach(validateRecord);if(new Set(rows.map(r=>r.id)).size!==rows.length)fail('중복된 지출결의서 번호를 확인해 주세요.');return rows;}
export function approvalRoute(people,config,team,firstId){
 validateConfig(config,people);const first=config.teams[team]||firstId;
 if(!first||(!config.teams[team]&&!firstApproverCandidates(people,team).some(p=>p.personId===first)))fail('1차 결재 담당자를 선택해 주세요. 담당자가 없으면 관리자에게 결재선 설정을 요청해 주세요.');
 return [first,config.general,config.ceo,config.director].map((id,i)=>{const person=people.find(p=>p.personId===id);if(!person)fail(STAGES[i]+' 결재 담당자를 설정해 주세요.');return{label:STAGES[i],personId:id,name:person.name};});
}
export function submitExpense(storage,people,session,input,{locks,guard=()=>{},now=()=>new Date().toISOString()}={}){
 return locked(EXPENSE_KEY,()=>{
  guard();const person=session?.role==='employee'&&people.find(p=>p.personId===session.personId);if(!person)fail('직원 계정으로 신청해 주세요.');
  if(input.team!==COMMON_TEAM&&!person.teams.includes(input.team))fail('본인이 소속된 팀 또는 공통으로 신청해 주세요.');
  const at=now(),limit=new Date(at);limit.setUTCFullYear(limit.getUTCFullYear()+1);
  if(typeof input.date!=='string'||!/^20\d{2}-\d{2}-\d{2}$/.test(input.date)||!Number.isFinite(Date.parse(input.date+'T12:00:00Z'))||new Date(input.date+'T12:00:00Z').toISOString().slice(0,10)!==input.date||input.date<EXPENSE_START||input.date>limit.toISOString().slice(0,10))fail('2026년 10월 이후, 1년 이내의 올바른 사용일을 입력해 주세요.');
  if(!text(input.item,200,true)||!text(input.note??'',2000)||!text(input.payment??'',60)||!EXPENSE_CATEGORIES.includes(input.category)||!numeric(input.unitPrice)||!Number.isSafeInteger(input.quantity)||input.quantity<1||input.quantity>10000||!numeric(input.unitPrice*input.quantity))fail('물품·사용 목적, 단가와 수량을 확인해 주세요.');
  const route=approvalRoute(people,readExpenseConfig(storage,people),input.team===COMMON_TEAM?person.teams[0]:input.team,input.firstId);
  const selfStage=route.findIndex(s=>s.personId===person.personId);
  if(selfStage>=0)fail(`${STAGES[selfStage]} 결재 담당자가 신청자 본인이라 신청할 수 없습니다. ${selfStage===0?'1차 결재 담당자를 다른 분으로 선택해 주세요. 고를 분이 없으면 관리자에게 결재선 설정에서 이 팀의 1차 담당자 변경을 요청해 주세요.':'관리자에게 결재선 설정에서 대체 담당자 지정을 요청해 주세요.'}`);
  const row={id:crypto.randomUUID(),revision:1,applicantId:person.personId,name:person.name,team:input.team,date:input.date,item:input.item.trim(),category:input.category,unitPrice:input.unitPrice,quantity:input.quantity,amount:input.unitPrice*input.quantity,payment:(input.payment||'').trim(),note:(input.note||'').trim(),status:'pending',step:0,route,submittedAt:at,updatedAt:at,history:[{action:'submit',actorId:person.personId,step:0,at,note:''}]};validateRecord(row);
  const rows=readExpenses(storage);rows.push(row);storage.setItem(EXPENSE_KEY,JSON.stringify(rows));return row;
 },locks);
}
export function canDecide(row,session){return session?.role==='employee'&&row.status==='pending'&&row.applicantId!==session.personId&&row.route[row.step]?.personId===session.personId;}
export function decideExpense(storage,session,{id,revision,action,note=''},{locks,guard=()=>{},now=()=>new Date().toISOString()}={}){
 return locked(EXPENSE_KEY,()=>{
  guard();const rows=readExpenses(storage),row=rows.find(r=>r.id===id);if(!row||row.revision!==revision)fail('다른 탭에서 처리된 신청입니다. 목록을 새로고침해 주세요.');
  if(!['approve','reject','cancel'].includes(action)||!text(note,2000)||(action==='reject'&&!note.trim()))fail('반려 사유를 입력해 주세요.');
  if(action==='cancel'){if(session?.role!=='employee'||row.applicantId!==session.personId||row.status!=='pending')fail('진행 중인 본인 신청만 취소할 수 있습니다.');row.status='cancelled';}
  else{if(!canDecide(row,session))fail('현재 단계의 결재 담당자만 처리할 수 있습니다.');if(action==='reject')row.status='rejected';}
  const at=now();row.history.push({action,actorId:session.personId,step:row.step,at,note:note.trim()});if(action==='approve'){row.step++;if(row.step===4)row.status='approved';}row.revision++;row.updatedAt=at;validateRecord(row);storage.setItem(EXPENSE_KEY,JSON.stringify(rows));return row;
 },locks);
}
export function visibleExpenses(rows,session){return session?.role==='admin'?rows:session?.role==='employee'?rows.filter(r=>r.applicantId===session.personId||r.route.some(s=>s.personId===session.personId)):[];}
export function expenseStatus(row){return({approved:'최종 승인',rejected:'반려',cancelled:'신청 취소'})[row.status]||STAGES[row.step]+' 결재 대기';}
export function expenseCSV(headers,rows){const cell=v=>'"'+String(v??'').replace(/^[\s]*[=+@-]/,m=>"'"+m).replaceAll('"','""')+'"';return '\uFEFF'+[headers,...rows].map(r=>r.map(cell).join(',')).join('\r\n');}
