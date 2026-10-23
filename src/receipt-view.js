import {calendarDays} from './daily-detail.js';
import {listReceipts,saveReceipt,receiptRows,retentionDays,setRetentionDays} from './receipt-store.js';
import {receiptArchive,safeFilename} from './receipt-zip.js';
const esc=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const won=value=>Number(value).toLocaleString('ko-KR')+'원';
const dateOf=(month,day)=>`20${month.slice(0,2)}-${month.slice(2)}-${String(day).padStart(2,'0')}`;
export function receiptCalendar(rows,month,selectedDate,photoURL){
 const grouped=Object.groupBy(rows,r=>r.date);
 return `<div class="receipt-weekdays">${['일','월','화','수','목','금','토'].map(d=>`<span>${d}</span>`).join('')}</div><div class="receipt-days">${calendarDays(month).map(day=>{
  if(!day)return'<span class="receipt-blank"></span>';const date=dateOf(month,day),entries=grouped[date]||[],count=entries.reduce((s,r)=>s+r.files.length,0),sum=entries.reduce((s,r)=>s+r.amount,0);
  const photo=entries.flatMap(r=>r.files)[0],preview=photoURL&&photo?.blob?photoURL(photo.blob):'';
  return `<button type="button" data-receipt-day="${date}" class="${entries.length?'has-receipts':'no-receipts'} ${date===selectedDate?'selected':''}" aria-pressed="${date===selectedDate}" aria-label="${day}일 ${entries.length?(count?'영수증 등록됨':'내용 저장됨 · 사진 없음')+' · 영수증 '+entries.length+'건 사진 '+count+'장 · '+won(sum):'영수증 미등록'}"><strong>${day}</strong>${entries.length?`<span class="receipt-day-status"><span class="receipt-status-label">${count?'영수증':'내용 저장'} · </span>${entries.length}건</span><span class="receipt-calendar-entry">${preview?`<img src="${esc(preview)}" alt="" loading="lazy">`:''}<span class="receipt-calendar-meta"><strong>${won(sum)}</strong><small>${count?'사진 '+count+'장':'사진 없음'}</small></span></span>`:'<span class="receipt-missing"><span class="receipt-missing-full">미등록</span><span class="receipt-missing-short" aria-hidden="true">—</span></span>'}</button>`;
 }).join('')}</div>`;
}
export function mountReceipts({root,month,months,person,admin,people,team,search,toast,compact=false,onTeamChange,viewState={}}){
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
 let days=30,policyError='';try{days=retentionDays(localStorage);}catch(e){policyError=e.message;}
 root.innerHTML=`<section class="panel receipt-panel ${compact?'is-compact':''} ${expanded?'is-expanded':''}"><div class="panel-heading"><div><h2>${admin?(compact?'영수증 제출 기록':'직원 영수증 모아보기'):'내 식대 영수증'}</h2><p>날짜를 누르면 사진과 사용 내역을 확인할 수 있어요.</p></div>${admin?`<div class="receipt-actions">${compact?`<button data-receipt-expand aria-expanded="${expanded}">${expanded?'달력 접기':'영수증 모아보기'}</button>`:''}<button data-receipt-export>조회 영수증 ZIP 다운로드</button></div>`:''}</div>
 <p class="receipt-local-note">현재 사진과 기록은 이 브라우저에 저장됩니다. 다른 기기와의 공유는 운영 서버 연결 후 적용됩니다.</p>
 ${admin?`<div class="receipt-controls"><label>팀별 보기<select data-receipt-team>${['전체',...new Set(people.flatMap(p=>p.teams||[]))].map(t=>`<option value="${esc(t)}" ${team===t?'selected':''}>${esc(t==='전체'?'전체 팀':t+'팀')}</option>`).join('')}</select></label><label>직원별 보기<select data-receipt-person><option value="">전체 직원</option>${people.filter(p=>team==='전체'||p.teams?.includes(team)).map(p=>`<option value="${esc(p.personId)}" ${staffId===p.personId?'selected':''}>${esc(p.name)} · ${esc(p.rawTeam)}</option>`).join('')}</select></label><p>상단 조회 월과 이름 검색, 선택한 팀·직원에 해당하는 전체 영수증을 다운로드합니다.</p></div><details class="receipt-policy"><summary>사진 보관 기간 설정 · <span data-retention-label>${days}일</span></summary><form data-retention-form><label>업로드 후 보관 기간 (일)<input name="days" type="number" min="1" max="365" value="${days}" required></label><button type="submit">설정 저장</button><p>기본 30일, 1~365일로 설정할 수 있습니다. 기간이 지난 사진만 삭제하고 직원·사용일·금액·메모는 남깁니다.</p><p class="notice">초안에서는 설정만 저장합니다. 실제 자동삭제는 운영 서버 연결 후 적용되며, 지금 올린 사진은 자동으로 지워지지 않습니다.</p><p class="form-error" role="alert">${esc(policyError)}</p></form></details>`:
 `<details class="receipt-upload" id="receipt-upload"><summary>+ 식대 내용 / 영수증 등록</summary><form id="receipt-form"><div class="form-grid"><label>사용일<input name="date" type="date" required min="${dateOf(months[0],1)}" max="${dateOf(months.at(-1),new Date(2000+Number(months.at(-1).slice(0,2)),Number(months.at(-1).slice(2)),0).getDate())}" value="${selectedDate}"></label><label>식대 금액 (원)<input name="amount" type="number" min="0" max="100000000" step="1" required inputmode="numeric" placeholder="예: 12000"></label><label class="full">메모<textarea name="note" maxlength="2000" rows="2" placeholder="가게명 등 필요한 내용을 적어 주세요."></textarea></label></div><p class="receipt-editing" hidden></p><div class="receipt-photo-input" hidden><div class="receipt-file-controls"><label class="receipt-file-card"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M4 6h4l2-3h4l2 3h4v14H4z"/><circle cx="12" cy="12" r="4"/></svg><strong>사진 촬영</strong><span>카메라로 찍기</span><input name="camera" type="file" accept="image/jpeg,image/png,image/webp" capture="environment"></label><label class="receipt-file-card"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8" cy="8" r="1.5"/><path d="m3 17 5-5 4 4 4-6 5 7"/></svg><strong>사진 파일 선택</strong><span>앨범에서 고르기</span><input name="photos" type="file" accept="image/jpeg,image/png,image/webp" multiple></label></div><p>한 건에 최대 5장 · 장당 10MB · JPG, PNG, WEBP</p><p data-file-selection role="status">선택한 사진이 없습니다.</p></div><p class="receipt-save-hint">영수증이 없어도 날짜·금액·메모를 저장할 수 있어요. 사진을 선택한 뒤에도 ‘내용 저장’을 눌러 주세요.</p><div class="form-actions receipt-save-actions"><button type="submit" class="primary">내용 저장</button><button type="button" data-choose-receipt aria-expanded="false">영수증 등록하기</button></div><p class="form-error" role="alert"></p></form></details>`}
 <p class="receipt-error" role="alert"></p><div class="receipt-body"><p class="empty">영수증을 불러오는 중입니다…</p></div></section>`;
 const error=message=>{if(!disposed)root.querySelector('.receipt-error').textContent=message;};
 function draw(){
  if(disposed)return;viewState.dates[month]=selectedDate;release();const rows=filtered(),dayRows=rows.filter(r=>r.date===selectedDate),photos=rows.reduce((s,r)=>s+r.files.length,0);
  root.querySelector('.receipt-body').innerHTML=`<div class="receipt-summary"><span>식대 기록 <strong>${rows.length}건</strong> · 사진 ${photos}장</span><span>제출 금액 <strong>${won(rows.reduce((s,r)=>s+r.amount,0))}</strong></span></div><p class="receipt-local-note">제출 금액은 아래 가져온 식대 합계와 별도로 표시합니다.</p><div class="receipt-calendar-legend"><span><b>영수증</b> 사진 등록됨</span><span><b>내용 저장</b> 사진 없이 저장됨</span><span><b>—</b> 미등록</span><span>날짜를 누르면 아래에서 내역을 확인할 수 있어요.</span></div><div class="receipt-calendar" aria-label="영수증 월간 달력">${receiptCalendar(rows,month,selectedDate,blobURL)}</div><section class="receipt-selected"><h3>${esc(selectedDate)} 식대 내역</h3>${dayRows.length?dayRows.map(r=>`<article class="receipt-entry"><div class="receipt-entry-heading"><div><strong>${esc(r.name)}</strong><span>${esc(r.rawTeam)}</span></div><strong>${won(r.amount)}</strong></div><p class="receipt-note">${esc(r.note||'메모 없음')}</p><p class="receipt-record-status">${r.files.length?'영수증 등록됨 · 사진 '+r.files.length+'장':'내용 저장됨 · 사진 없음'}</p>${!admin?`<button type="button" data-receipt-attach="${esc(r.id)}" ${r.files.length>=5?'disabled':''}>영수증 등록하기</button>`:''}<div class="receipt-thumbnails">${r.files.map((f,i)=>`<button data-receipt-view="${esc(r.id)}" data-photo-index="${i}" aria-label="${esc(r.name)} 영수증 사진 ${i+1} 크게 보기"><img src="${blobURL(f.blob)}" alt="${esc(r.name)} ${esc(r.date)} 영수증 ${i+1}"><span>사진 ${i+1} 크게 보기</span></button>`).join('')}</div></article>`).join(''):'<p class="empty">이 날짜에 등록된 영수증이 없습니다.</p>'}</section>`;
  if(compact){
   const recent=rows.toSorted((a,b)=>b.createdAt-a.createdAt).slice(0,5);
   root.querySelector('.receipt-summary').insertAdjacentHTML('afterend',`<div class="receipt-submissions"><p>최근 제출 ${recent.length}건 · 조회된 전체 ${rows.length}건</p>${recent.length?recent.map(r=>`<article class="receipt-submission"><div><strong>${esc(r.name)}</strong><span>${esc(r.rawTeam)} · 사용일 ${esc(r.date)}</span><small>제출 ${esc(new Date(r.createdAt).toLocaleString('ko-KR',{timeZone:'Asia/Seoul'}))}</small></div><div class="receipt-submission-total"><strong>${won(r.amount)}</strong><span>사진 ${r.files.length}장</span></div>${r.files.length?`<button data-receipt-view="${esc(r.id)}" data-photo-index="0">사진 보기</button>`:'<span class="badge">내용만 저장</span>'}</article>`).join(''):'<p class="empty">선택한 조건에 제출된 영수증이 없습니다.</p>'}</div>`);
  }
  const exportButton=root.querySelector('[data-receipt-export]');if(exportButton)exportButton.disabled=!rows.length;
 }
 async function reload(preferredDate){const version=++loading;try{const rows=await listReceipts();if(disposed||version!==loading)return;all=rows;if(preferredDate)selectedDate=preferredDate;else if(!all.some(r=>r.date===selectedDate)){const first=filtered()[0];if(first)selectedDate=first.date;}error('');draw();}catch(e){if(disposed||version!==loading)return;error(e.message);root.querySelector('.receipt-body').innerHTML='<p class="empty">영수증을 표시하지 못했습니다. 새로고침 후 다시 확인해 주세요.</p>';}}
 root.addEventListener('change',event=>{
  if(event.target.matches('[data-receipt-team]')){onTeamChange?.(event.target.value);return;}
  if(event.target.matches('[data-receipt-person]')){staffId=event.target.value;viewState.staffId=staffId;selectedDate=filtered()[0]?.date||selectedDate;draw();}
  if(event.target.type==='file'){const files=[...root.querySelectorAll('input[type=file]')].flatMap(el=>[...el.files]);root.querySelector('[data-file-selection]').textContent=files.length?files.map(f=>f.name).join(' · '):'선택한 사진이 없습니다.';}
 });
 root.addEventListener('submit',async event=>{
  event.preventDefault();const form=event.target,button=form.querySelector('[type=submit]');if(saving)return;saving=true;button.disabled=true;root.querySelectorAll('[data-choose-receipt],[data-receipt-attach]').forEach(b=>b.disabled=true);form.querySelector('.form-error').textContent='';
  try{
   if(form.matches('[data-retention-form]')){const value=Number(new FormData(form).get('days'));setRetentionDays(localStorage,value);root.querySelector('[data-retention-label]').textContent=value+'일';toast('보관 기간 설정을 저장했습니다. 자동삭제는 운영 연결 후 적용됩니다.');}
   else{
    const values=new FormData(form),files=[...form.querySelectorAll('input[type=file]')].flatMap(el=>[...el.files]);
    const saved=await saveReceipt({id:editing?.id,expectedUpdatedAt:editing?.updatedAt||editing?.createdAt,personId:person.personId,name:person.name,teams:person.teams,rawTeam:person.rawTeam,date:String(values.get('date')),amount:Number(values.get('amount')),note:String(values.get('note')).trim(),files,allowedMonths:months});
    if(disposed)return;editing=null;form.reset();root.querySelector('.receipt-photo-input').hidden=true;root.querySelector('.receipt-editing').hidden=true;root.querySelector('[data-choose-receipt]').setAttribute('aria-expanded','false');form.elements.date.value=saved.date;root.querySelector('[data-file-selection]').textContent='선택한 사진이 없습니다.';root.querySelector('#receipt-upload').open=false;
    const savedMonth=saved.date.slice(2,4)+saved.date.slice(5,7);await reload(savedMonth===month?saved.date:undefined);toast((saved.files.length?'내용과 영수증을 저장했습니다.':'내용을 저장했습니다. 영수증은 나중에 추가할 수 있어요.')+(savedMonth===month?'':` ${saved.date.slice(0,7)} 조회 월에서 확인해 주세요.`));
   }
  }catch(e){if(!disposed)form.querySelector('.form-error').textContent=e.message;}finally{saving=false;button.disabled=false;if(!disposed){root.querySelectorAll('[data-choose-receipt],[data-receipt-attach]').forEach(b=>b.disabled=b.dataset.receiptAttach?all.find(r=>r.id===b.dataset.receiptAttach)?.files.length>=5:false);}}
 });
 root.addEventListener('click',async event=>{
  const button=event.target.closest('button');if(!button)return;
  if(button.hasAttribute('data-choose-receipt')||button.hasAttribute('data-receipt-attach')){
   if(saving)return;
   const form=root.querySelector('#receipt-form');
   if(button.dataset.receiptAttach){const record=filtered().find(r=>r.id===button.dataset.receiptAttach&&r.personId===person.personId);if(!record)return;editing=record;form.reset();form.elements.date.value=record.date;form.elements.amount.value=record.amount;form.elements.note.value=record.note;root.querySelector('[data-file-selection]').textContent='저장된 사진 '+record.files.length+'장 · 추가할 사진을 선택해 주세요.';const hint=root.querySelector('.receipt-editing');hint.hidden=false;hint.textContent=record.date+' 저장 내역에 사진을 추가합니다. 금액은 한 번만 합산됩니다.';}
   root.querySelector('#receipt-upload').open=true;root.querySelector('.receipt-photo-input').hidden=false;root.querySelector('[data-choose-receipt]').setAttribute('aria-expanded','true');root.querySelector('.receipt-photo-input').scrollIntoView({block:'center',behavior:'smooth'});return;
  }
  if(button.hasAttribute('data-receipt-expand')){expanded=!expanded;viewState.expanded=expanded;root.querySelector('.receipt-panel').classList.toggle('is-expanded',expanded);button.setAttribute('aria-expanded',String(expanded));button.textContent=expanded?'달력 접기':'영수증 모아보기';return;}
  if(button.dataset.receiptDay){if(saving)return;if(editing){editing=null;const form=root.querySelector('#receipt-form');form?.reset();root.querySelector('.receipt-editing').hidden=true;root.querySelector('[data-file-selection]').textContent='선택한 사진이 없습니다.';}selectedDate=button.dataset.receiptDay;const dateInput=root.querySelector('input[name=date]');if(dateInput)dateInput.value=selectedDate;draw();return;}
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
 function newEntry(){
  if(disposed||admin)return;if(saving){toast('저장 중입니다. 완료 후 새 내역을 등록해 주세요.');return;}
  editing=null;const form=root.querySelector('#receipt-form');form.reset();form.elements.date.value=selectedDate;
  root.querySelector('.receipt-editing').hidden=true;root.querySelector('.receipt-photo-input').hidden=true;
  root.querySelector('[data-file-selection]').textContent='선택한 사진이 없습니다.';root.querySelector('[data-choose-receipt]').setAttribute('aria-expanded','false');
  form.querySelector('.form-error').textContent='';root.querySelector('#receipt-upload').open=true;form.elements.date.focus();
 }
 reload();return{refresh:reload,newEntry,dispose(){disposed=true;release();viewer?.close();}};
}
function downloadBlob(blob,name){const url=URL.createObjectURL(blob),link=document.createElement('a');link.href=url;link.download=name;link.click();setTimeout(()=>URL.revokeObjectURL(url),60000);}
