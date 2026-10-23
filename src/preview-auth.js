// Prototype navigation only. Production authentication must run on the server.
export const SESSION_KEY='bb-staff:public-preview:test-session:v1';
const normalize=value=>typeof value==='string'?value.normalize('NFC').trim().replace(/\s+/g,''):'';
const esc=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function employeeDirectory(roster,rosterMonth='2610'){
 const people=new Map();
 for(const row of roster){if(row.month!==rosterMonth||!row.personId||!row.name)continue;if(!people.has(row.personId))people.set(row.personId,{personId:row.personId,name:row.name,rawTeam:row.rawTeam||'',teams:[...(row.teams||[])],jobTitle:typeof row.role==='string'?row.role.trim():''});}
 return [...people.values()];
}
export function authenticatePreview(people,{role,name,password,personId=''}){
 if(role==='admin')return normalize(name)==='뷰티블라썸'&&password==='4321'?{session:{version:1,role:'admin'}}:{error:'관리자 아이디 또는 비밀번호를 확인해 주세요.'};
 if(role!=='employee'||password!=='1111'||!normalize(name))return{error:'이름과 비밀번호를 확인해 주세요.'};
 const candidates=people.filter(p=>normalize(p.name)===normalize(name));
 if(!candidates.length)return{error:'명부에서 이름을 찾지 못했습니다. 이름을 확인해 주세요.'};
 const person=candidates.length===1?candidates[0]:candidates.find(p=>p.personId===personId);
 if(!person)return{candidates};
 return{session:{version:1,role:'employee',personId:person.personId}};
}
export function restorePreviewSession(storage,people){
 try{const value=JSON.parse(storage.getItem(SESSION_KEY));if(value?.version!==1)return null;if(value.role==='admin')return{version:1,role:'admin'};if(value.role==='employee'&&people.some(p=>p.personId===value.personId))return{version:1,role:'employee',personId:value.personId};}catch{}
 return null;
}
export function allowedRoute(session,route){
 if(!session)return'login';
 const employee=['meal-timer','roster','team-calendar','meals','team-snacks','attendance'];
 const admin=['admin-dashboard','roster','team-calendar','meals','team-snacks','attendance','sources','feedback'];
 const routes=session.role==='admin'?admin:employee;
 return routes.includes(route)?route:routes[0];
}
export function mountPreviewLogin(root,{people,themeControl,onLogin}){
 let role='employee';
 function paint(){
  root.innerHTML=`<main class="login-page"><div class="login-theme">${themeControl()}</div><section class="login-card"><img src="./assets/clinic-logo.png" width="68" height="68" alt="뷰티블라썸 로고"><p class="login-eyebrow">함께하는 하루</p><h1>뷰티블라썸</h1><p>내 이름으로 시작하는 직원 업무 공간</p><div class="login-tabs" role="group" aria-label="로그인 유형"><button type="button" data-login-role="employee" aria-pressed="${role==='employee'}">직원 로그인</button><button type="button" data-login-role="admin" aria-pressed="${role==='admin'}">관리자 로그인</button></div><form id="preview-login"><label>${role==='employee'?'이름':'관리자 아이디'}<input name="name" required maxlength="80" autocomplete="username" placeholder="${role==='employee'?'명부에 있는 본인 이름':'관리자 아이디'}"></label><label>비밀번호<input name="password" type="password" required maxlength="80" autocomplete="current-password" inputmode="numeric"></label><div id="login-identity"></div><p class="form-error" role="alert"></p><button type="submit" class="primary">로그인</button></form>${role==='employee'?'<p class="login-tip">직원 테스트 비밀번호: <strong>1111</strong><br>동명이인은 팀을 선택해 주세요.</p>':''}<p class="login-notice">화면 체험용 테스트 로그인입니다.<br>입력 기록은 이 브라우저에만 저장되며 다른 기기와 자동 공유되지 않습니다.</p></section></main>`;
  for(const button of root.querySelectorAll('[data-login-role]'))button.addEventListener('click',()=>{role=button.dataset.loginRole;paint();root.querySelector('[name=name]').focus();});
  const form=root.querySelector('form');
  form.addEventListener('input',event=>{if(event.target.name==='name')form.querySelector('#login-identity').replaceChildren();form.querySelector('.form-error').textContent='';});
  form.addEventListener('submit',event=>{
   event.preventDefault();const values=new FormData(form),result=authenticatePreview(people,{role,name:values.get('name'),password:values.get('password'),personId:values.get('personId')});
   if(result.error){form.querySelector('.form-error').textContent=result.error;return;}
   if(result.candidates){form.querySelector('#login-identity').innerHTML=`<label>동명이인 · 본인 팀 선택<select name="personId" required><option value="">팀을 선택해 주세요</option>${result.candidates.map(p=>`<option value="${esc(p.personId)}">${esc(p.name)} · ${esc(p.rawTeam)}</option>`).join('')}</select></label>`;form.querySelector('[name=personId]').focus();return;}
   form.querySelector('[name=password]').value='';onLogin(result.session);
  });
 }
 paint();
}
