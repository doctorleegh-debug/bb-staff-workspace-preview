import {calendarDays} from './daily-detail.js';
import {schedulesOn,scheduleChips} from './schedule-context.js';
import {listReceipts,saveReceipt,receiptRows,retentionDays,setRetentionDays} from './receipt-store.js';
import {receiptArchive,safeFilename} from './receipt-zip.js';
const esc=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const won=value=>Number(value).toLocaleString('ko-KR')+'원';
const dateOf=(month,day)=>`20${month.slice(0,2)}-${month.slice(2)}-${String(day).padStart(2,'0')}`;
export function receiptCalendar(rows,month,selectedDate,photoURL,scheduleForDate=()=>[],dragPerson='',canAdd=false){
 const grouped=rows.reduce((groups,r)=>((groups[r.date]??=[]).push(r),groups),Object.create(null));
 return `<div class="receipt-weekdays">${['일','월','화','수','목','금','토'].map(d=>`<span>${d}</span>`).join('')}</div><div class="receipt-days">${calendarDays(month).map(day=>{
  if(!day)return'<span class="receipt-blank"></span>';const date=dateOf(month,day),entries=grouped[date]||[],count=entries.reduce((s,r)=>s+r.files.length,0),sum=entries.reduce((s,r)=>s+r.amount,0);
  const schedule=scheduleForDate(date);
  const photo=entries.flatMap(r=>r.files)[0],preview=photoURL&&photo?.blob?photoURL(photo.blob):'';
  return `<div class="receipt-day-cell ${date===selectedDate?'selected':''}"><button type="button" data-receipt-day="${date}"${dragPerson?` data-drop-date="${date}" data-drop-person="${esc(dragPerson)}"`:''} class="receipt-day ${entries.length?'has-receipts':'no-receipts'} ${date===selectedDate?'selected':''}" aria-pressed="${date===selectedDate}" aria-label="${day}일 ${esc(schedule.map(s=>s.label).join(' · '))} ${entries.length?(count?'내용 저장됨 · 기존 영수증 있음':'내용 저장됨 · 사진 없음')+' · 식대 '+entries.length+'건 사진 '+count+'장 · '+won(sum):'식대 미등록'}"><strong>${day}</strong><span class="meal-schedule-chips">${scheduleChips(schedule,dragPerson?{personId:dragPerson}:null)}</span>${entries.length?`<span class="receipt-day-status"><span class="receipt-status-label">${'기록'} · </span>${entries.length}건</span><span class="receipt-calendar-entry">${preview?`<img src="${esc(preview)}" alt="" loading="lazy">`:''}<span class="receipt-calendar-meta"><strong>${won(sum)}</strong>${count?`<small>사진 ${count}장</small>`:''}</span></span>`:'<span class="receipt-missing"><span class="receipt-missing-full">미등록</span><span class="receipt-missing-short" aria-hidden="true">—</span></span>'}</button>${canAdd?`<button type="button" class="receipt-add" data-receipt-add="${date}" aria-label="${day}일 식대 입력">+</button>`:''}</div>`;
 }).join('')}</div>`;
}
export function mountReceipts({root,month,months,person,admin,people,team,search,toast,compact=false,onTeamChange,viewState={},roster=[],scheduleRecords=[],onRows,onLoadError}){
 let editing=null,saving=false;
 let all=[],selectedDate=dateOf(month,1),staffId=admin?(viewState.staffId||''):'',urls=[],viewer=null,disposed=false,loading=0,expanded=compact&&!!viewState.expanded;
 const now=new Date(),today=new Intl.DateTimeFormat('sv-SE',{timeZone:'Asia/Seoul'}).format(now);
 if(today.startsWith('20'+month.slice(0,2)+'-'+month.slice(2)))selectedDate=today;
 if(admin&&staffId&&!people.some(p=>p.personId===staffId&&(team==='전체'||p.teams?.includes(team))))staffId='';
 if(admin)viewState.staffId=staffId;
 viewState.dates||={};if(viewState.dates[month])selectedDate=viewState.dates[month];
 const filtered=()=>receiptRows(all,{month,personId:admin?staffId:person.personId,team:admin?team:'전체',search:admin?search:''});
 const release=()=>{urls.forEach(URL.revokeObjectURL);urls=[];};
 const blobURL=blob=>{const url=URL.createObjectURL(blob);urls.push(url);return url;};
 let drafts=[];const scheduleForDate=date=>{const id=admin?staffId:person.personId;return id?schedulesOn(roster,drafts,id,date):[];};
 let days=30,policyError='';try{days=retentionDays(localStorage);}catch(e){policyError=e.message;}
 root.innerHTML=`<section class="panel receipt-panel ${compact?'is-compact':''} ${expanded?'is-expanded':''}"><div class="panel-heading"><div><h2>${admin?(compact?'식대 제출 기록':'직원 식대 모아보기'):'내 식대 달력'}</h2><p>날짜별 사용 내역과 휴무·연차·반차를 함께 확인해요.</p></div>${admin?`<div class="receipt-actions">${compact?`<button data-receipt-expand aria-expanded="${expanded}">${expanded?'달력 접기':'식대 모아보기'}</button>`:''}<button data-receipt-export>조회 영수증 ZIP 다운로드</button></div>`:''}</div>
 <p class="receipt-local-note">현재 사진과 기록은 이 브라우저에 저장됩니다. 다른 기기와의 공유는 운영 서버 연결 후 적용됩니다.</p>
 ${admin?`<div class="receipt-controls"><label>팀별 보기<select data-receipt-team>${['전체',...new Set(people.flatMap(p=>p.teams||[]))].map(t=>`<option value="${esc(t)}" ${team===t?'selected':''}>${esc(t==='전체'?'전체 팀':t+'팀')}</option>`).join('')}</select></label><label>직원별 보기<select data-receipt-person><option value="">전체 직원</option>${people.filter(p=>team==='전체'||p.teams?.includes(team)).map(p=>`<option value="${esc(p.personId)}" ${staffId===p.personId?'selected':''}>${esc(p.name)} · ${esc(p.rawTeam)}</option>`).join('')}</select></label><p>상단 조회 월과 이름 검색, 선택한 팀·직원에 해당하는 전체 영수증을 다운로드합니다.</p></div><details class="receipt-policy"><summary>사진 보관 기간 설정 · <span data-retention-label>${days}일</span></summary><form data-retention-form><label>업로드 후 보관 기간 (일)<input name="days" type="number" min="1" max="365" value="${days}" required></label><button type="submit">설정 저장</button><p>기본 30일, 1~365일로 설정할 수 있습니다. 기간이 지난 사진만 삭제하고 직원·사용일·금액·메모는 남깁니다.</p><p class="notice">초안에서는 설정만 저장합니다. 실제 자동삭제는 운영 서버 연결 후 적용되며, 지금 올린 사진은 자동으로 지워지지 않습니다.</p><p class="form-error" role="alert">${esc(policyError)}</p></form></details>`:
 `<details class="receipt-upload" id="receipt-upload"><summary>+ 식대 사용 기록</summary><form id="receipt-form"><div class="form-grid"><label>사용일<input name="date" type="date" required min="${dateOf(months[0],1)}" max="${dateOf(months.at(-1),new Date(2000+Number(months.at(-1).slice(0,2)),Number(months.at(-1).slice(2)),0).getDate())}" value="${selectedDate}"></label><label>식대 금액 (원)<input name="amount" type="number" min="0" max="100000000" step="1" required inputmode="numeric" placeholder="예: 12000"></label><label class="full">메모 (선택)<textarea name="note" maxlength="2000" rows="2" placeholder="예: 쿠팡 주문, 배달 식대"></textarea></label></div><p class="receipt-editing" hidden></p><p class="receipt-save-hint">영수증 없이 사용일과 금액만 입력하면 됩니다.</p><div class="form-actions receipt-save-actions"><button type="submit" class="primary">내용 저장</button></div><p class="form-error" role="alert"></p></form></details>`}
 <p class="receipt-error" role="alert"></p><div class="receipt-body"><p class="empty">식대 기록을 불러오는 중입니다…</p></div></section>`;
 const error=message=>{if(!disposed)root.querySelector('.receipt-error').textContent=message;};
 function draw(){
  if(disposed)return;viewState.dates[month]=selectedDate;release();drafts=typeof scheduleRecords==='function'?scheduleRecords():scheduleRecords;const rows=filtered();onRows?.(rows);const dayRows=rows.filter(r=>r.date===selectedDate),photos=rows.reduce((s,r)=>s+r.files.length,0);
  root.querySelector('.receipt-body').innerHTML=`<div class="receipt-summary"><span>식대 기록 <strong>${rows.length}건</strong> · 사진 ${photos}장</span><span>제출 금액 <strong>${won(rows.reduce((s,r)=>s+r.amount,0))}</strong></span></div>${onRows?'<p class="receipt-local-note">아래 제출 기록은 상단 사용액·잔액에 반영됩니다.</p>':''}<div class="receipt-calendar-legend"><span><b>기록</b> 식대 사용 내역</span><span><b>—</b> 미등록</span><span>휴무·연차·반차는 근무표의 색상과 이름으로 표시합니다.</span>${admin?'':'<span><b>+</b> 그날 식대 입력</span>'}</div><div class="receipt-calendar" aria-label="식대와 휴무 월간 달력">${receiptCalendar(rows,month,selectedDate,blobURL,scheduleForDate,admin?staffId:person.personId,!admin)}</div><section class="receipt-selected"><div class="receipt-selected-heading"><h3>${esc(selectedDate)} 식대 내역</h3>${admin?'':`<button type="button" class="receipt-add-day" data-receipt-add="${esc(selectedDate)}">+ 식대 입력</button>`}</div><div class="meal-schedule-chips">${scheduleChips(scheduleForDate(selectedDate))}</div>${dayRows.length?dayRows.map(r=>`<article class="receipt-entry"><div class="receipt-entry-heading"><div><strong>${esc(r.name)}</strong><span>${esc(r.rawTeam)}</span></div><strong>${won(r.amount)}</strong></div><p class="receipt-note">${esc(r.note||'메모 없음')}</p><p class="receipt-record-status">${r.files.length?'영수증 등록됨 · 사진 '+r.files.length+'장':'내용 저장됨'}</p>${!admin?`<button type="button" data-receipt-edit="${esc(r.id)}">내용 수정</button>`:''}<div class="receipt-thumbnails">${r.files.map((f,i)=>`<button data-receipt-view="${esc(r.id)}" data-photo-index="${i}" aria-label="${esc(r.name)} 영수증 사진 ${i+1} 크게 보기"><img src="${blobURL(f.blob)}" alt="${esc(r.name)} ${esc(r.date)} 영수증 ${i+1}"><span>사진 ${i+1} 크게 보기</span></button>`).join('')}</div></article>`).join(''):'<p class="empty">이 날짜에 등록된 식대가 없습니다.</p>'}</section>`;
  if(compact){
   const recent=[...rows].sort((a,b)=>b.createdAt-a.createdAt).slice(0,5);
   root.querySelector('.receipt-summary').insertAdjacentHTML('afterend',`<div class="receipt-submissions"><p>최근 제출 ${recent.length}건 · 조회된 전체 ${rows.length}건</p>${recent.length?recent.map(r=>`<article class="receipt-submission"><div><strong>${esc(r.name)}</strong><span>${esc(r.rawTeam)} · 사용일 ${esc(r.date)}</span><small>제출 ${esc(new Date(r.createdAt).toLocaleString('ko-KR',{timeZone:'Asia/Seoul'}))}</small></div><div class="receipt-submission-total"><strong>${won(r.amount)}</strong><span>사진 ${r.files.length}장</span></div>${r.files.length?`<button data-receipt-view="${esc(r.id)}" data-photo-index="0">사진 보기</button>`:'<span class="badge">내용만 저장</span>'}</article>`).join(''):'<p class="empty">선택한 조건에 제출된 식대가 없습니다.</p>'}</div>`);
  }
  const exportButton=root.querySelector('[data-receipt-export]');if(exportButton)exportButton.disabled=!rows.length;
 }
 async function reload(preferredDate){const version=++loading;try{const rows=await listReceipts();if(disposed||version!==loading)return;all=rows;if(preferredDate)selectedDate=preferredDate;else if(!all.some(r=>r.date===selectedDate)){const first=filtered()[0];if(first)selectedDate=first.date;}error('');draw();}catch(e){if(disposed||version!==loading)return;error(e.message);onLoadError?.();root.querySelector('.receipt-body').innerHTML='<p class="empty">식대 기록을 표시하지 못했습니다. 새로고침 후 다시 확인해 주세요.</p>';}}
 root.addEventListener('change',event=>{
  if(event.target.matches('[data-receipt-team]')){onTeamChange?.(event.target.value);return;}
  if(event.target.matches('[data-receipt-person]')){staffId=event.target.value;viewState.staffId=staffId;selectedDate=filtered()[0]?.date||selectedDate;draw();}
 });
 root.addEventListener('submit',async event=>{
  event.preventDefault();const form=event.target,button=form.querySelector('[type=submit]');if(saving)return;saving=true;button.disabled=true;root.querySelectorAll('[data-receipt-edit]').forEach(b=>b.disabled=true);form.querySelector('.form-error').textContent='';
  try{
   if(form.matches('[data-retention-form]')){const value=Number(new FormData(form).get('days'));setRetentionDays(localStorage,value);root.querySelector('[data-retention-label]').textContent=value+'일';toast('보관 기간 설정을 저장했습니다. 자동삭제는 운영 연결 후 적용됩니다.');}
   else{
    const values=new FormData(form),files=[];
    const saved=await saveReceipt({id:editing?.id,expectedUpdatedAt:editing?.updatedAt||editing?.createdAt,personId:person.personId,name:person.name,teams:person.teams,rawTeam:person.rawTeam,date:String(values.get('date')),amount:Number(values.get('amount')),note:String(values.get('note')).trim(),files,allowedMonths:months});
    if(disposed)return;editing=null;form.reset();root.querySelector('.receipt-editing').hidden=true;form.elements.date.value=saved.date;root.querySelector('#receipt-upload').open=false;
    const savedMonth=saved.date.slice(2,4)+saved.date.slice(5,7);await reload(savedMonth===month?saved.date:undefined);toast('식대 내용을 저장했습니다.'+(savedMonth===month?'':` ${saved.date.slice(0,7)} 조회 월에서 확인해 주세요.`));
   }
  }catch(e){if(!disposed)form.querySelector('.form-error').textContent=e.message;}finally{saving=false;button.disabled=false;if(!disposed){root.querySelectorAll('[data-receipt-edit]').forEach(b=>b.disabled=false);}}
 });
 root.addEventListener('click',async event=>{
  const button=event.target.closest('button');if(!button)return;
  if(button.dataset.receiptEdit){
   if(saving||admin)return;const record=filtered().find(r=>r.id===button.dataset.receiptEdit&&r.personId===person.personId);if(!record)return;
   editing=record;const form=root.querySelector('#receipt-form');form.reset();form.elements.date.value=record.date;form.elements.amount.value=record.amount;form.elements.note.value=record.note;
   const hint=root.querySelector('.receipt-editing');hint.hidden=false;hint.textContent=record.date+' 저장 내역 수정 · 금액은 한 번만 합산됩니다.';
   root.querySelector('#receipt-upload').open=true;form.elements.amount.focus();return;
  }
  if(button.hasAttribute('data-receipt-expand')){expanded=!expanded;viewState.expanded=expanded;root.querySelector('.receipt-panel').classList.toggle('is-expanded',expanded);button.setAttribute('aria-expanded',String(expanded));button.textContent=expanded?'달력 접기':'식대 모아보기';return;}
  if(button.dataset.receiptDay){if(saving)return;if(editing){editing=null;const form=root.querySelector('#receipt-form');form?.reset();root.querySelector('.receipt-editing').hidden=true;}selectedDate=button.dataset.receiptDay;const dateInput=root.querySelector('input[name=date]');if(dateInput)dateInput.value=selectedDate;draw();return;}
  if(button.dataset.receiptAdd){newEntry(button.dataset.receiptAdd,'amount');return;}
  if(button.hasAttribute('data-receipt-export')){button.disabled=true;try{const rows=filtered(),zip=await receiptArchive(rows);if(!disposed)downloadBlob(zip,`식대영수증_${month}_${safeFilename(team==='전체'?'전체팀':team+'팀')}_${staffId?safeFilename(people.find(p=>p.personId===staffId)?.name):'전체직원'}.zip`);}catch(e){error(e.message);}finally{if(!disposed)button.disabled=!filtered().length;}return;}
  if(button.dataset.receiptView){const record=filtered().find(r=>r.id===button.dataset.receiptView);if(!record)return;showPhotos(record,Number(button.dataset.photoIndex));}
 });
 function showPhotos(record,index){
  if(!record.files.length)return;
  viewer?.close();const dialog=document.createElement('dialog');dialog.className='receipt-viewer';let photoURL='';
  function paint(){if(photoURL)URL.revokeObjectURL(photoURL);const file=record.files[index];photoURL=URL.createObjectURL(file.blob);dialog.innerHTML=`<div class="dialog-heading"><div><h2>${esc(record.name)} 영수증</h2><p>${esc(record.date)} · ${won(record.amount)} · ${index+1}/${record.files.length}장</p></div><button data-photo-close aria-label="영수증 사진 닫기">닫기 ✕</button></div><div class="receipt-photo"><img src="${photoURL}" alt="${esc(record.date)} ${esc(record.name)} 영수증"></div><div class="receipt-photo-actions"><button data-photo-prev ${index===0?'disabled':''}>이전 사진</button><a class="button" href="${photoURL}" download="${esc(safeFilename(record.name)+'_'+record.date+'_'+(index+1)+'.'+({'image/jpeg':'jpg','image/png':'png','image/webp':'webp'}[file.type]||'bin'))}">사진 다운로드</a><button data-photo-next ${index===record.files.length-1?'disabled':''}>다음 사진</button></div>`;}
  dialog.addEventListener('click',event=>{if(event.target.closest('[data-photo-close]'))dialog.close();if(event.target.closest('[data-photo-prev]')&&index>0){index--;paint();}if(event.target.closest('[data-photo-next]')&&index<record.files.length-1){index++;paint();}});
  dialog.addEventListener('close',()=>{URL.revokeObjectURL(photoURL);dialog.remove();if(viewer===dialog)viewer=null;});root.append(dialog);viewer=dialog;paint();dialog.showModal();
 }
 // + on a calendar day: select that day, open the form on it and go straight to the amount.
 function newEntry(date='',field='date'){
  if(disposed||admin)return;if(saving){toast('저장 중입니다. 완료 후 새 내역을 등록해 주세요.');return;}
  if(date&&date!==selectedDate){selectedDate=date;draw();}
  editing=null;const form=root.querySelector('#receipt-form');form.reset();form.elements.date.value=selectedDate;
  root.querySelector('.receipt-editing').hidden=true;
  form.querySelector('.form-error').textContent='';root.querySelector('#receipt-upload').open=true;form.elements[field].focus();
 }
 reload();return{refresh:reload,newEntry,dispose(){disposed=true;release();viewer?.close();}};
}
function downloadBlob(blob,name){const url=URL.createObjectURL(blob),link=document.createElement('a');link.href=url;link.download=name;link.click();setTimeout(()=>URL.revokeObjectURL(url),60000);}
