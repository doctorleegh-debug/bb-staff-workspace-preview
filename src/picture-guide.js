const esc=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const step=(image,title,text)=>({image,title,text});
const common={
 login:{title:'로그인·로그아웃',steps:[step('login','내 계정으로 들어가기','직원은 본인 이름과 테스트 비밀번호를 입력해요. 같은 이름이 있으면 본인 팀을 선택하세요.'),step('logout','사용 후 로그아웃','오른쪽 위 로그아웃을 누르면 로그인 화면으로 돌아갑니다.')]},
 feedback:{title:'의견 남기기',steps:[step('feedback-write','피드백·요청사항 열기','불편했던 화면 위쪽의 피드백·요청사항을 펼쳐 내용을 적어요.'),step('feedback-saved','메모 저장 확인','메모 저장을 누르고 아래 저장 내역을 확인해요. 다른 기기로 전달하려면 내 메모 파일을 내려받아 관리자에게 보내 주세요.')]}
};
const expenseApplication={title:'지출결의서 신청 방법',steps:[
 step('expense-request-fields','사용일·물품·단가·수량 입력','직원 계정으로 지출결의서 → 내 신청 → + 지출결의서 신청을 열어요. 사용일과 팀, 분류, 물품 또는 목적을 적고 단가·수량을 입력하세요. 사진은 채민지 직원의 12,000원 × 2개 모의 신청입니다.'),
 step('expense-request-submit','합계와 4단계 결재선 확인 후 신청','24,000원처럼 계산된 합계를 확인해요. 팀장 → 총괄실장 → 대표이사 → 대표원장 담당자가 모두 맞으면 신청하기를 누르세요. 담당자가 없거나 본인이 포함되면 관리자에게 결재선 수정을 요청하세요.'),
 step('expense-request-saved','내 신청에 등록됐는지 확인','아래 내 신청에 물품과 금액, 팀장 결재 대기가 표시되면 제출된 상태예요. 신청 내용·결재 이력을 펼치면 등록 시각과 이후 처리 결과를 확인할 수 있어요. 진행 중인 본인 신청은 취소할 수 있습니다.'),
 step('expense-approve-current','담당자 계정에서 순서대로 승인','담당자는 자신의 직원 계정으로 로그인하고 내 결재함을 열어요. 내 결재 차례에만 승인·반려 버튼이 보여요. 반려할 때는 사유가 필요합니다. 현재 초안은 같은 브라우저에서 계정을 바꿔 체험하며, 다른 기기로 전달되지는 않아요.'),
 step('expense-final-status','4단계가 끝나면 최종 승인 확인','대표원장까지 승인하면 내 신청에 최종 승인이 표시돼요. 사진의 모의 신청은 각 담당자 계정에서 차례대로 승인한 결과입니다. 최종 승인은 결재 상태이며 실제 지급을 실행하지는 않습니다.'),
 step('expense-final-history','처리자·순서·의견 확인','신청 내용·결재 이력에는 최초 신청과 4단계 승인 기록이 남아요. 각 처리자의 이름, 처리 시각과 의견을 확인하세요.')
]};
const topics={
 employee:{
  expenses:expenseApplication,
  status:{title:'식사 시작·다른 팀 현황',steps:[step('status-start','식사하러 갈 때 시작','내 하루에서 식사중을 눌러요. 시작하면 식사 시작 시각이 표시됩니다.'),step('status-end','식사 현황 확인·복귀','아래에서 다른 팀의 식사 현황도 볼 수 있어요. 현재 식사종료 버튼은 유지됩니다. 복귀하면 눌러 주세요.')]},
  schedule:{title:'내 근무표·휴무 등록',steps:[step('schedule-calendar','날짜의 + 누르기','내 근무표에서 휴무·연차·반차를 확인해요. 일정을 추가할 날짜의 + 버튼을 눌러요.'),step('schedule-form','내용을 고르고 등록','일정 종류와 메모를 입력하고 등록하기를 누르면 내 근무표와 팀 일정에 표시됩니다.')]},
  team:{title:'팀 일정 보기',steps:[step('team-filter','볼 팀 선택','팀 일정에서 조회 월과 팀을 선택해요. 직원 찾기를 함께 쓰면 더 좁혀 볼 수 있어요.'),step('duty-workers','위쪽에서 근무자 확인','확인할 날짜를 고르면 근무·오전 근무·오후 근무·휴무 인원을 볼 수 있어요. 일정이 비어 있으면 미기재로 남습니다.'),step('team-calendar','달력에서 일정 확인','선택한 팀의 일정만 보입니다. 시트 직책 기준으로 권한이 적용된 주임 이상 직원은 본인 팀원 일정도 등록할 수 있어요. 관리자에게 권한을 확인할 수 있습니다.')]},
  receipt:{title:'식대 한도·금액 기록',steps:[step('receipt-budget','한도와 잔액 먼저 확인','내 식대 맨 위에서 이달 한도·사용액·잔액을 확인해요. 추가 사용액도 잔액에 반영됩니다.'),step('receipt-content','금액만 입력해서 저장','사용일과 금액을 적고 내용 저장을 누르세요. 영수증 첨부는 필요 없고 메모는 선택입니다.'),step('receipt-calendar','달력에서 식대와 휴무 확인','사용 내역과 함께 본인의 휴무·연차·반차를 색상으로 확인해요. 날짜를 누르면 상세 내역이 보입니다.')]},
  snacks:{title:'팀 간식비 기록',steps:[step('snack-form','간식 주문 금액 저장','팀 간식비에서 사용일·사용 팀·금액을 입력해요. 쿠팡 주문 내용은 메모로 남길 수 있어요.'),step('snack-list','월별 사용 내역 보기','조회 월·팀을 고르면 해당 간식비 합계가 표시됩니다. 조회 내역 다운로드로 파일을 받을 수 있어요.') ]},
  daily:{title:'식대·OT 일별 보기',steps:[step('daily-button','일별 보기 누르기','내 식대 또는 내 OT·지각에서 조회 월을 고르고 일별 보기를 눌러요.'),step('daily-drawer','오른쪽 달력에서 확인','화면을 바꾸지 않고 개인 내역이 열립니다. 날짜를 누르면 그날의 금액·시간·메모를 볼 수 있어요.')]},
  ...common
 },
 admin:{
  expenses:{title:'전체 지출·결재 관리',steps:[step('expense-all-requests','전체 신청에서 기존 자료와 새 신청 함께 보기','전체 신청에 시트 자료와 앞으로 등록하는 신청이 함께 표시됩니다. 새 신청이 먼저 나오며 건수·금액에 모두 반영돼요. 월·팀·내용으로 좁혀 보고 조회 내역 다운로드로 현재 조건의 전체 목록을 받을 수 있어요.'),step('expense-source-record','기존 시트 기록 구분하기','시트에서 가져옴 표시는 기존 장부입니다. 시트의 팀장확인과 새 신청의 4단계 결재 상태는 별개예요. 원본에 없는 사용일·작성자는 미기재로 유지합니다. 공개 검수 화면은 예시 자료입니다.'),step('expense-settings-final','결재 담당자 설정','결재선 설정에서 팀별 1차 담당자와 총괄실장·대표이사·대표원장을 선택하고 결재선 저장을 눌러요. 변경은 새 신청부터 적용됩니다. 실제 승인은 지정된 담당자의 직원 계정에서 진행합니다.'),step('expense-final-history','승인 이력 확인','새 신청의 신청 내용·결재 이력을 펼쳐 담당자, 처리 시각과 의견을 확인해요. 신청 방법도 보고 싶으면 위 사용 방법 선택에서 지출결의서 신청 방법을 고르세요.')]},
  expenseApplication,
  dashboard:{title:'직원 상태·월별 통계',steps:[step('admin-live','현재 상태 확인','관리자 대시보드에서 식사·휴식·외출·외근 중인 직원과 경과 시간을 확인해요. 현재 상태는 조회 월과 관계없이 표시됩니다.'),step('admin-stats','월·종류별 통계 확인','조회 월·팀·직원 검색을 정하고 식사 기록 등 종류를 선택해요. 완료된 기록과 월별 소요 시간을 볼 수 있습니다.')]},
  schedule:{title:'직원 휴무·담당자 설정',steps:[step('team-permission','팀 일정 담당자 지정','팀 일정 또는 직원별 근무표의 팀원 휴무 등록 권한을 펼쳐요. 시트 직책 기준으로 적용된 직원과 직책을 확인할 수 있습니다. 선택을 바꾸고 저장하거나 직책 기준으로 다시 적용할 수 있어요.'),step('duty-workers','날짜별 근무자 확인','조회 날짜의 근무·반차·휴무 등록을 확인해요. 미기재를 근무로 자동 처리하지 않으며 눌러서 명단을 볼 수 있습니다.'),step('admin-schedule-picker','직원·날짜 선택','직원 휴무 등록에서 직원과 월을 선택하고 날짜의 + 버튼을 눌러요.'),step('admin-schedule-form','휴무 종류 등록','휴무·연차·반차 등 종류와 메모를 확인하고 등록하기를 누르세요. 선택한 직원의 근무표에도 반영됩니다.')]},
  receipt:{title:'식대 취합·다운로드',steps:[step('admin-receipts','월·팀·직원으로 찾기','대시보드의 식대 제출 기록에서 팀·직원을 선택해요. 식대 모아보기로 달력을 펼치고 날짜별 사진을 확인하세요.'),step('admin-receipt-calendar','날짜별 등록 확인','날짜를 누르면 해당 날짜의 내역이 아래에 표시됩니다. 사진 보기를 누르면 크게 볼 수 있어요.'),step('admin-receipt-download','조회 조건으로 다운로드','조회 영수증 ZIP 다운로드를 누르면 선택한 월·팀·직원의 사진과 식대 목록을 받습니다. 금액만 저장한 내역도 목록에 포함됩니다.')]},
  notes:{title:'직원 메모 한곳에 보기',steps:[step('admin-notes','대시보드에서 바로 보기','직원 요청사항·메모취합에 모든 화면·전체 기간의 의견이 모입니다. 작성자·작성 화면·내용으로 찾아보세요.'),step('admin-notes-import','다른 기기 메모 가져오기','현재는 브라우저별로 저장됩니다. 직원에게 받은 메모 파일을 가져오면 같은 목록에 취합되고, 조회한 메모를 내려받을 수 있어요.')]},
  snacks:{title:'팀 간식비 보기',steps:[step('snack-form','간식비 등록','사용 팀·사용일·금액을 기록합니다. 영수증 없이 저장할 수 있어요.'),step('snack-list','월·팀별 내역 확인','조회 월·팀·검색 조건에 맞는 합계와 내역을 확인하고 다운로드하세요.')]},
  ...common,
  login:{title:'로그인·로그아웃',steps:[step('admin-login','관리자로 들어가기','관리자 로그인을 선택한 뒤 관리자 아이디와 비밀번호로 들어가세요.'),step('logout','사용 후 로그아웃','오른쪽 위 로그아웃으로 세션을 종료하세요. 직원 계정으로 바꿀 때에도 먼저 로그아웃합니다.')]}
 }
};
const routeTopic={expenses:'expenses','meal-timer':'status',roster:'schedule','team-calendar':'team',meals:'receipt','team-snacks':'snacks',attendance:'daily','admin-dashboard':'dashboard',feedback:'notes'};
export const guideAssets=[...new Set(Object.values(topics).flatMap(role=>Object.values(role).flatMap(topic=>topic.steps.map(s=>s.image+'.png'))))];
export function mountPictureGuide({role,view,state={}}){
 const available=topics[role],initial=routeTopic[view],sameView=state.role===role&&state.view===view;
 let selected=sameView&&available[state.selected]?state.selected:available[initial]?initial:Object.keys(available)[0];
 let stepIndex=sameView?Math.min(state.stepIndex||0,available[selected].steps.length-1):0,viewer=null,disposed=false;
 Object.assign(state,{role,view,selected,stepIndex});if(!sameView)state.scrollTop=0;
 const bookIcon='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M12 5c-3-2-6-2-10-1v15c4-1 7-1 10 1 3-2 6-2 10-1V4c-4-1-7-1-10 1Z"/><path d="M12 5v15"/></svg>',chevron='<svg class="guide-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>';
 // In the top bar (slot) the launcher is a quiet secondary button; floating fallback keeps the pill with a chevron.
 const launcher=slot=>`<button type="button" class="guide-launcher" data-guide-toggle aria-expanded="false" aria-controls="floating-guide-panel" aria-haspopup="dialog">${bookIcon}<span>사용설명서</span>${slot?'':chevron}</button>`;
 const slot=document.querySelector('#help-launcher');
 const dock=document.createElement('section');dock.className='guide-dock';dock.setAttribute('aria-label','사용설명서 바로가기');
 dock.innerHTML=`${slot?'':launcher(false)}<div id="floating-guide-panel" class="guide-popup" role="dialog" aria-modal="false" aria-label="${role==='admin'?'관리자':'직원'} 사용설명서"><header class="guide-popup-heading"><div><strong>${role==='admin'?'관리자':'직원'} 사용설명서</strong><span>설명을 보면서 화면을 사용해 보세요.</span></div><button type="button" data-guide-dismiss aria-label="사용설명서 접기">접기 ✕</button></header><div class="guide-popup-body"><div class="picture-guide"><label class="guide-topic-label">사용 방법 선택<select data-guide-topic>${Object.entries(available).map(([id,t])=>`<option value="${id}" ${id===selected?'selected':''}>${t.title}</option>`).join('')}</select></label><p class="guide-caption">사진을 누르면 크게 볼 수 있어요. 설명용 예시 화면입니다.</p><ol class="picture-guide-steps"></ol><nav class="guide-step-navigation" aria-label="사용설명서 단계"><button type="button" data-guide-prev>← 이전</button><span data-guide-progress aria-live="polite"></span><button type="button" data-guide-next>다음 →</button></nav></div></div></div>`;
 if(slot)slot.innerHTML=launcher(true);
 const launcherHost=slot||dock,buttons=()=>[...launcherHost.querySelectorAll('[data-guide-toggle]')],visibleButton=()=>buttons().find(b=>b.offsetParent!==null)||buttons()[0];
 const panel=dock.querySelector('.guide-popup'),body=dock.querySelector('.guide-popup-body'),select=dock.querySelector('select');
 const nativePopover=typeof panel.showPopover==='function';if(nativePopover)panel.setAttribute('popover','manual');else panel.hidden=true;
 function paint(){
  const steps=available[selected].steps,s=steps[stepIndex];Object.assign(state,{selected,stepIndex});
  dock.querySelector('ol').innerHTML=`<li><button type="button" class="guide-image-button" data-guide-image aria-label="${esc(s.title)} 화면 크게 보기"><img src="./assets/guide/${s.image}.png" alt="${esc(s.title)} 실제 화면" decoding="async"><span>사진 크게 보기 ↗</span></button><h3><span>${stepIndex+1}</span> ${esc(s.title)}</h3><p>${esc(s.text)}</p></li>`;
  dock.querySelector('[data-guide-prev]').disabled=stepIndex===0;dock.querySelector('[data-guide-next]').disabled=stepIndex===steps.length-1;dock.querySelector('[data-guide-progress]').textContent=`${stepIndex+1} / ${steps.length}`;
 }
 function setOpen(open,focus=false){
  if(disposed)return;state.open=open;buttons().forEach(b=>b.setAttribute('aria-expanded',String(open)));dock.classList.toggle('is-open',open);launcherHost.classList.toggle('is-open',open);
  if(open&&slot){const r=visibleButton().getBoundingClientRect();panel.style.top=Math.round(r.bottom+10)+'px';panel.style.right=Math.max(12,Math.round(innerWidth-r.right))+'px';}
  if(nativePopover){if(open&&!panel.matches(':popover-open'))panel.showPopover();if(!open&&panel.matches(':popover-open'))panel.hidePopover();}else panel.hidden=!open;
  if(focus)(open?select:visibleButton()).focus({preventScroll:true});
 }
 function syncHost(){
  if(disposed)return;const modal=[...document.querySelectorAll('dialog[open]')].filter(d=>d!==viewer&&!d.classList.contains('guide-viewer')).at(-1),host=modal||document.body;
  if(dock.parentElement===host)return;const wasOpen=!!state.open;if(nativePopover&&panel.matches(':popover-open'))panel.hidePopover();host.append(dock);if(wasOpen)setOpen(true);
 }
 function showPhoto(){
  const s=available[selected].steps[stepIndex];viewer?.close();const dialog=document.createElement('dialog');dialog.className='guide-viewer';dialog.setAttribute('aria-label',s.title);
  dialog.innerHTML=`<div class="dialog-heading"><h2>${esc(s.title)}</h2><button type="button" data-guide-close>닫기 ✕</button></div><img src="./assets/guide/${s.image}.png" alt="${esc(s.title)} 실제 화면"><p>${esc(s.text)}</p>`;
  dialog.querySelector('button').onclick=()=>dialog.close();dialog.addEventListener('close',()=>{dialog.remove();if(viewer===dialog)viewer=null;});document.body.append(dialog);viewer=dialog;dialog.showModal();
 }
 launcherHost.addEventListener('click',event=>{if(event.target.closest('[data-guide-toggle]'))setOpen(!state.open,true);});dock.querySelector('[data-guide-dismiss]').addEventListener('click',()=>setOpen(false,true));
 select.addEventListener('change',()=>{selected=select.value;stepIndex=0;state.scrollTop=0;paint();body.scrollTop=0;});
 dock.addEventListener('click',event=>{if(event.target.closest('[data-guide-image]'))showPhoto();const prev=event.target.closest('[data-guide-prev]'),next=event.target.closest('[data-guide-next]');if((prev&&stepIndex>0)||(next&&stepIndex<available[selected].steps.length-1)){stepIndex+=next?1:-1;paint();state.scrollTop=0;body.scrollTop=0;}});
 const keydown=event=>{if(event.key==='Escape'&&state.open&&!viewer){event.preventDefault();event.stopPropagation();setOpen(false,dock.contains(document.activeElement)||launcherHost.contains(document.activeElement));}};
 document.addEventListener('keydown',keydown,true);body.addEventListener('scroll',()=>{if(!disposed)state.scrollTop=body.scrollTop;},{passive:true});
 document.body.append(dock);paint();syncHost();setOpen(!!state.open);body.scrollTop=state.scrollTop||0;
 const observer=new MutationObserver(syncHost);observer.observe(document.body,{childList:true,subtree:true,attributes:true,attributeFilter:['open']});
 return{dispose(){disposed=true;observer.disconnect();document.removeEventListener('keydown',keydown,true);viewer?.close();if(nativePopover&&panel.matches(':popover-open'))panel.hidePopover();dock.remove();if(slot)slot.replaceChildren();}};
}
