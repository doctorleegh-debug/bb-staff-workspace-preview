import {schedulesOn,dayAssignment,scheduleChips} from './schedule-context.js';
import {defaultTeamEditors,readTeamEditors,saveTeamEditors,TEAM_SETTINGS_KEY} from './team-settings.js';
const esc=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function mountSchedulePanel({root,people,roster,records,month,session,employees,person,toast,viewState}){
 const prefix=`20${month.slice(0,2)}-${month.slice(2)}`,today=new Intl.DateTimeFormat('sv-SE',{timeZone:'Asia/Seoul'}).format(new Date());
 let date=viewState[month]||(today.startsWith(prefix)?today:prefix+'-01');
 root.innerHTML=`<section class="panel duty-panel"><div class="panel-heading"><div><h2>날짜별 근무자</h2><p>근무·반차 등록을 기준으로 표시합니다. 빈 일정은 미기재로 구분합니다.</p></div><label>확인할 날짜<input data-duty-date type="date" min="${prefix}-01" max="${prefix}-${new Date(2000+Number(month.slice(0,2)),Number(month.slice(2)),0).getDate()}" value="${date}"></label></div><div class="duty-groups"></div></section>${session.role==='admin'?`<details class="panel team-editor-panel"><summary>팀원 휴무 등록 권한 · 주임 이상 담당자 지정</summary><p>2026년 10월 명부의 주임·팀장·파트장·실장·총괄실장·대표이사에게 본인 팀원의 휴무·연차·반차 등록 권한을 기본 적용했습니다. 일반 팀원은 본인 일정만 등록합니다.</p><p data-editor-status role="status"></p><form data-team-editor-form><div class="team-editor-list">${employees.map(p=>`<label><input type="checkbox" name="editor" value="${esc(p.personId)}"><span><strong>${esc(p.name)}</strong><small>${esc(p.rawTeam)} · ${esc(p.jobTitle||'직책 미등록')}</small></span></label>`).join('')}</div><div class="form-actions"><button type="button" data-editor-defaults>직책 기준으로 다시 적용</button><button type="submit" class="primary">담당자 설정 저장</button></div><p class="form-error" role="alert"></p></form></details>`:''}`;
 function paint(){
  viewState[month]=date;const entries=people.map(p=>{const schedule=schedulesOn(roster,records(),p.personId,date);return{...p,schedule,group:dayAssignment(schedule)};});
  const groups=['근무','오전 근무','오후 근무','휴무·휴가','일정 확인','확인 필요','미기재'];
  root.querySelector('.duty-groups').innerHTML=groups.map(group=>{const rows=entries.filter(r=>r.group===group);return rows.length?`${group==='미기재'?`<details class="duty-group duty-unknown"><summary>미기재 ${rows.length}명</summary>`:`<div class="duty-group"><h3>${group} <span>${rows.length}명</span></h3>`}<div>${rows.map(p=>`<span class="duty-person"><strong>${esc(p.name)}</strong><small>${esc(p.rawTeam)}</small>${group==='일정 확인'||group==='확인 필요'?scheduleChips(p.schedule):''}</span>`).join('')}</div>${group==='미기재'?'</details>':'</div>'}`:'';}).join('')||'<p class="empty">선택한 직원이 없습니다.</p>';
 }
 root.querySelector('[data-duty-date]').addEventListener('change',event=>{if(event.target.validity.valid&&event.target.value.startsWith(prefix+'-')){date=event.target.value;paint();}});
 const form=root.querySelector('[data-team-editor-form]');let expectedSettings,saving=false;
 if(form){
  const controls=[...form.querySelectorAll('button')],baseline=defaultTeamEditors(employees);
  function showSettings(ids){
   for(const checkbox of form.querySelectorAll('input'))checkbox.checked=ids.includes(checkbox.value);
   const count=employees.filter(p=>ids.includes(p.personId)).length;
   root.querySelector('[data-editor-status]').textContent=`${expectedSettings===null?'시트 직책 기준 적용 중':'관리자가 저장한 설정 적용 중'} · ${count}명 · 직책 기준 ${baseline.length}명`;
  }
  try{expectedSettings=localStorage.getItem(TEAM_SETTINGS_KEY);showSettings(readTeamEditors(localStorage,employees));}catch(e){form.querySelector('.form-error').textContent=e.message;controls.forEach(button=>button.disabled=true);}
  async function save(ids){
   if(saving)return;saving=true;controls.forEach(button=>button.disabled=true);
   try{expectedSettings=await saveTeamEditors(localStorage,ids,employees,expectedSettings);if(root.isConnected){showSettings(ids);form.querySelector('.form-error').textContent='';toast('팀 일정 담당자를 저장했습니다.');}}
   catch(e){if(root.isConnected)form.querySelector('.form-error').textContent=e.message;}
   finally{saving=false;controls.forEach(button=>button.disabled=false);}
  }
  form.addEventListener('submit',event=>{event.preventDefault();save(new FormData(form).getAll('editor'));});
  form.querySelector('[data-editor-defaults]').addEventListener('click',()=>save(baseline));
 }
 paint();
}
