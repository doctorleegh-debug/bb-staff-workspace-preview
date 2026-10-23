import {FEEDBACK_PREFIX,FEEDBACK_MAX_BYTES,readFeedback,saveFeedback,parseFeedbackFile,feedbackFile} from './preview-feedback.js';
const esc=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const titles={'meal-timer':'내 하루',roster:'근무표','team-calendar':'팀 일정',meals:'식대·영수증',attendance:'OT·지각','admin-dashboard':'관리자 대시보드',sources:'검수 자료',feedback:'메모취합'};
const drafts=new Map();
const mine=(note,session)=>note.role===session.role&&(session.role==='admin'||note.personId===session.personId);
const guide={
 employee:[['내 하루','식사중·휴식중·외출중·외근중을 누르고 돌아오면 종료를 눌러 주세요. 시작·종료 이력은 관리자 기록에 남습니다.'],['내 근무표 / 팀 일정','내 근무표에서 휴무·연차·반차를 확인하세요. 날짜의 + 버튼으로 내 일정을 등록하고, 팀 일정에서는 팀을 선택해 함께 볼 수 있어요.'],['내 식대 / 영수증','영수증 등록에서 날짜·금액과 사진을 넣고 저장하세요. 달력의 등록 표시를 눌러 사진을 확인하고, 일별 보기에서 사용 내역을 볼 수 있어요.'],['내 OT·지각','조회 월을 선택하고 일별 보기를 누르면 날짜별 기록이 오른쪽 달력에 열립니다.'],['검수 메모','각 화면의 피드백·요청사항에 의견을 저장하세요. 다른 기기에서 작성했다면 메모 파일을 내려받아 관리자에게 전달해 주세요.']],
 admin:[['관리자 대시보드','직원 현재 상태와 경과 시간, 식사·휴식·외출·외근 월별 통계를 확인하세요. 조회 월·팀·직원으로 기록을 좁힐 수 있어요.'],['일정 / 직원 휴무','직원 휴무 등록에서 직원과 월을 선택한 뒤 달력의 + 버튼으로 등록하세요. 팀 일정·직원별 근무표에서도 날짜별 등록이 가능합니다.'],['영수증 취합','대시보드와 식대·영수증에서 제출 사진을 달력으로 확인하세요. 월·팀·직원을 선택한 뒤 ZIP 다운로드로 해당 사진과 목록을 받을 수 있어요.'],['메모취합','직원과 관리자 의견을 작성자·화면별로 확인하세요. 다른 기기에서 받은 메모 파일을 가져오면 함께 볼 수 있어요. 같은 메모를 다시 가져와도 중복되지 않습니다.'],['초안 저장 범위','현재 데이터는 이 브라우저에 저장됩니다. 서버 공유·실제 권한·영수증 자동삭제는 아직 연결되지 않았고, 보관 기간은 설정만 저장됩니다.']]
};
const guidance={
 'meal-timer':'업무 상태를 시작하고 복귀할 때 종료해 주세요.',roster:'월을 고르고 날짜를 눌러 일정·휴무를 확인하세요. + 버튼으로 등록할 수 있어요.',
 'team-calendar':'팀 선택으로 일정을 필터하고, 날짜의 + 버튼으로 등록하세요.',meals:'날짜별 영수증 등록 여부를 확인하고 사진을 등록하세요.',attendance:'조회 월을 고르고 일별 보기로 날짜별 내역을 확인하세요.',
 'admin-dashboard':'상태·소요 시간·월별 통계와 영수증 제출을 확인하세요.',sources:'가져온 자료와 셀별 내용을 확인하는 검수 화면입니다.',feedback:'화면별 의견을 찾고 다른 기기에서 받은 메모 파일을 가져오세요.'
};
function download(notes){
 const blob=new Blob([feedbackFile(notes)],{type:'application/json;charset=utf-8'});if(blob.size>FEEDBACK_MAX_BYTES)throw new Error('메모가 20MB를 넘습니다. 작성자·화면별로 나누어 내려받아 주세요.');const url=URL.createObjectURL(blob),a=document.createElement('a');
 a.href=url;a.download=`뷰티블라썸-검수메모-${new Date().toISOString().slice(0,10)}.json`;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
}
function noteCards(notes){return notes.map(note=>`<article class="feedback-card"><div><strong>${esc(note.name)} · ${esc(note.team)}</strong><span>${note.role==='admin'?'관리자':'직원'} · ${esc(titles[note.view])}</span><time>${esc(new Date(note.createdAt).toLocaleString('ko-KR'))}</time></div><p class="prewrap">${esc(note.text)}</p></article>`).join('');}

export function mountWorkspaceHelp(root,{session,view,people,toast,onSaved}){
 const key=session.role+':'+(session.personId||'admin')+':'+view;let disposed=false;
 root.innerHTML=`<section class="workspace-support" aria-label="사용 안내와 검수 메모"><details class="workspace-guide"><summary><strong>${session.role==='admin'?'관리자':'직원'} 사용설명서</strong><span>${esc(guidance[view])}</span></summary><div class="guide-steps">${guide[session.role].map(([title,text])=>`<div><h3>${title}</h3><p>${text}</p></div>`).join('')}</div></details><details class="workspace-feedback"><summary><strong>피드백·요청사항</strong><span>이 화면에 대한 의견 남기기 · 검수용</span></summary><form class="feedback-form"><label>메모<textarea name="feedback" rows="4" maxlength="4000" required placeholder="불편한 점이나 바꾸고 싶은 내용을 적어 주세요.">${esc(drafts.get(key)||'')}</textarea></label><p>저장하면 이 브라우저의 관리자 ‘메모취합’에 표시됩니다. 다른 기기에는 자동 전송되지 않습니다.</p><div class="feedback-actions"><button type="submit" class="primary">메모 저장</button><button type="button" data-note-export>내 메모 파일 내려받기</button></div><p class="feedback-status" role="status"></p></form><div class="my-feedback"></div><p class="review-only-note">검수용 메모장은 최종 배포 때 제거됩니다.</p></details></section>`;
 const form=root.querySelector('form'),status=root.querySelector('.feedback-status'),input=form.querySelector('textarea');
 function update(){try{const {notes,errors}=readFeedback(localStorage,people),own=notes.filter(n=>mine(n,session)&&n.view===view);root.querySelector('.my-feedback').innerHTML=`<h3>이 화면에 남긴 내 메모 · ${own.length}건</h3>${noteCards(own.slice(0,3))}${own.length>3?'<p>전체 내역은 메모 파일에 포함됩니다.</p>':''}`;if(errors.length)status.textContent='읽지 못한 기존 메모가 있습니다. 기존 내용은 보존했습니다.';}catch{status.textContent='이 브라우저에서 메모 저장소를 사용할 수 없습니다.';}}
 input.addEventListener('input',()=>{drafts.set(key,input.value);status.textContent='';});
 form.addEventListener('submit',event=>{event.preventDefault();if(disposed)return;try{saveFeedback(localStorage,people,{id:'note-'+crypto.randomUUID(),role:session.role,personId:session.personId,view,text:input.value,createdAt:new Date().toISOString()});input.value='';drafts.delete(key);update();status.textContent='메모를 저장했습니다. 이 브라우저의 관리자 메모취합에서 확인할 수 있어요.';onSaved?.();}catch(error){status.textContent=error.message;}});
 root.querySelector('[data-note-export]').addEventListener('click',()=>{try{const notes=readFeedback(localStorage,people).notes.filter(n=>mine(n,session));if(!notes.length){toast('저장된 메모가 없습니다. 먼저 메모 저장을 눌러 주세요.');return;}download(notes);}catch(error){toast(error.message);}});
 const changed=event=>{if(event.key?.startsWith(FEEDBACK_PREFIX))update();};addEventListener('storage',changed);update();
 return{dispose(){disposed=true;removeEventListener('storage',changed);}};
}

export function mountFeedbackCollection(root,{people,toast}){
 let disposed=false,rows=[];
 root.innerHTML=`<section class="panel feedback-collection"><div class="panel-heading"><div><h2>메모취합</h2><p>이 브라우저에 저장되거나 파일로 가져온 직원·관리자 의견입니다.</p></div><span class="badge" data-note-count></span></div><div class="feedback-filters"><label>작성자<select data-note-person><option value="">전체 작성자</option></select></label><label>작성 화면<select data-note-view><option value="">모든 화면</option>${Object.entries(titles).map(([id,title])=>`<option value="${id}">${title}</option>`).join('')}</select></label><label>내용 찾기<input type="search" data-note-search maxlength="100" placeholder="요청 내용 검색"></label></div><div class="feedback-actions"><button data-notes-download>조회한 메모 내려받기</button><label class="button feedback-import">메모 파일 가져오기<input type="file" accept="application/json,.json" data-notes-import></label></div><p class="notice">다른 기기의 의견은 직원이 내려받은 메모 파일을 가져와 주세요.</p><p class="feedback-status" role="status"></p><div class="feedback-list"></div></section>`;
 const person=root.querySelector('[data-note-person]'),screen=root.querySelector('[data-note-view]'),search=root.querySelector('[data-note-search]'),status=root.querySelector('.feedback-status');
 const filtered=()=>rows.filter(n=>(!person.value||(n.role+':'+n.personId)===person.value)&&(!screen.value||n.view===screen.value)&&(!search.value.trim()||[n.name,n.team,n.text].some(v=>v.includes(search.value.trim()))));
 function paint(){const notes=filtered();root.querySelector('[data-note-count]').textContent=`${notes.length} / ${rows.length}건`;root.querySelector('.feedback-list').innerHTML=notes.length?noteCards(notes):'<div class="empty">선택한 조건의 메모가 없습니다.</div>';}
 function refresh(){if(disposed)return;try{const result=readFeedback(localStorage,people);rows=result.notes;const selected=person.value,authors=[...new Map(rows.map(n=>[n.role+':'+n.personId,n])).entries()];person.innerHTML='<option value="">전체 작성자</option>'+authors.map(([id,n])=>`<option value="${esc(id)}">${esc(n.name)} · ${esc(n.team)}</option>`).join('');person.value=authors.some(([id])=>id===selected)?selected:'';if(result.errors.length)status.textContent=`읽지 못한 메모 ${result.errors.length}건은 보존했습니다.`;paint();}catch(error){status.textContent=error.message;}}
 person.addEventListener('change',paint);screen.addEventListener('change',paint);search.addEventListener('input',paint);
 root.querySelector('[data-notes-download]').addEventListener('click',()=>{try{const notes=filtered();if(!notes.length){toast('내려받을 메모가 없습니다.');return;}download(notes);}catch(error){toast(error.message);}});
 root.querySelector('[data-notes-import]').addEventListener('change',async event=>{
  const input=event.target,file=input.files?.[0];if(!file)return;input.disabled=true;let added=0;
  try{if(file.size>FEEDBACK_MAX_BYTES)throw new Error('메모 파일은 20MB 이내로 가져와 주세요.');const notes=parseFeedbackFile(await file.text(),people);if(disposed)return;
   for(const note of notes)if(saveFeedback(localStorage,people,note))added++;
   refresh();status.textContent=`${added}건을 가져왔습니다. 기존 메모 ${notes.length-added}건은 중복 저장하지 않았습니다.`;
  }catch(error){if(!disposed){refresh();status.textContent=`${error.message}${added?' '+added+'건은 가져왔습니다.':''}`;}}finally{input.value='';input.disabled=false;}
 });
 const changed=event=>{if(event.key?.startsWith(FEEDBACK_PREFIX))refresh();};addEventListener('storage',changed);refresh();
 return{refresh,dispose(){disposed=true;removeEventListener('storage',changed);}};
}
