const esc=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const monthLabel=month=>`20${month.slice(0,2)}년 ${Number(month.slice(2))}월`;
const format=value=>value===''||value===null||value===undefined?'미기재':typeof value==='number'?value.toLocaleString('ko-KR'):String(value);
const dateKey=(month,day)=>`20${month.slice(0,2)}-${month.slice(2)}-${String(day).padStart(2,'0')}`;
export function calendarDays(month){
 const year=2000+Number(month.slice(0,2)),index=Number(month.slice(2))-1;
 const count=new Date(year,index+1,0).getDate(),offset=new Date(year,index,1).getDay();
 return Array.from({length:Math.ceil((offset+count)/7)*7},(_,i)=>i<offset||i>=offset+count?null:i-offset+1);
}
export function selectDetailRow(rows,initialRow,month,selectedId){
 const candidates=rows.filter(r=>r.month===month&&r.personId===initialRow.personId);
 // A confirmed alias can have multiple source rows. Never silently substitute one.
 const row=selectedId?candidates.find(r=>r.id===selectedId):month===initialRow.month?initialRow:candidates.length===1?candidates[0]:undefined;
 return {row,candidates};
}
export function dailyEntries(kind,row,localRecords,month,personId){
 const days={},lastDay=Math.max(...calendarDays(month).filter(Boolean));
 const add=(day,entry)=>{if(Number.isInteger(Number(day))&&Number(day)>=1&&Number(day)<=lastDay)(days[Number(day)]??=[]).push(entry);};
 if(kind==='meals')for(const [day,cell]of Object.entries(row?.days||{}))add(day,{...cell,label:'식대',local:false});
 else for(const category of row?.categories||[])for(const [day,cell]of Object.entries(category.days||{}))add(day,{...cell,label:category.label,local:false});
 for(const record of localRecords)if(record.kind===kind&&record.personId===personId&&record.month===month&&record.date?.startsWith(`20${month.slice(0,2)}-${month.slice(2)}-`))add(Number(record.date.slice(-2)),{value:record.amount,label:record.label,note:record.note,local:true});
 return days;
}
function entryText(entry,kind){return typeof entry.value==='number'?`${format(entry.value)}${kind==='meals'?'원':'분'}`:format(entry.value);}
function entryClass(entry){return entry.local?'added':typeof entry.value==='number'&&entry.value<0?'deducted':'';}

export function openDailyDetail({kind,initialRow,rows,months,localRecords,readRecords,storageKey}){
 const opener=document.activeElement,scroll={x:window.scrollX,y:window.scrollY};
 const host=document.querySelector('#overlays');host.querySelectorAll('dialog[open]').forEach(el=>el.close());
 const dialog=document.createElement('dialog');dialog.className='daily-drawer';dialog.setAttribute('aria-labelledby','daily-title');host.replaceChildren(dialog);
 let selectedMonth=initialRow.month,selectedDay=null,selectedId=initialRow.id,closing=false,closeTimeout,currentEntries={};
 function close(){
  if(closing)return;closing=true;dialog.classList.add('is-closing');
  const finish=()=>{clearTimeout(closeTimeout);if(dialog.open)dialog.close();};
  dialog.addEventListener('animationend',event=>{if(event.target===dialog)finish();},{once:true});
  closeTimeout=setTimeout(finish,matchMedia('(prefers-reduced-motion: reduce)').matches?160:340);
 }
 dialog.addEventListener('cancel',event=>{event.preventDefault();close();});
 dialog.addEventListener('close',()=>{
  clearTimeout(closeTimeout);removeEventListener('storage',refreshRecords);dialog.remove();
  if(!document.querySelector('dialog[open]')){if(opener?.isConnected)opener.focus({preventScroll:true});window.scrollTo(scroll.x,scroll.y);}
 },{once:true});
 function render(){
  const {row,candidates}=selectDetailRow(rows,initialRow,selectedMonth,selectedId);
  currentEntries=dailyEntries(kind,row,localRecords,selectedMonth,initialRow.personId);
  const recordedDays=Object.keys(currentEntries).map(Number).sort((a,b)=>a-b),today=new Date();
  if(!selectedDay)selectedDay=recordedDays[0]||1;
  const totals=kind==='meals'?Object.entries(row?.totals||{}).map(([label,c])=>[label,c.value]):(row?.categories||[]).map(c=>[c.label,c.total,c.carry]);
  const index=months.indexOf(selectedMonth);
  dialog.innerHTML=`
   <header class="daily-heading"><div><p>${esc(row?.rawTeam??initialRow.rawTeam)} · 개인별 월간 내역</p><h2 id="daily-title">${esc(initialRow.name)} <span>${kind==='meals'?'식대':'OT·지각'}</span></h2></div><button data-daily-close aria-label="개인 내역 닫기">닫기 ✕</button></header>
   <div class="daily-scroll">
    <div class="daily-month-nav"><button data-daily-month="${index-1}" ${index<=0?'disabled':''} aria-label="이전 달">‹</button><label>조회 월<select id="daily-month" aria-label="개인 내역 조회 월">${months.map(m=>`<option value="${m}" ${m===selectedMonth?'selected':''}>${monthLabel(m)}</option>`).join('')}</select></label><button data-daily-month="${index+1}" ${index>=months.length-1?'disabled':''} aria-label="다음 달">›</button></div>
    ${candidates.length>1?`<label class="daily-row-field">가져온 기록 선택<select id="daily-row"><option value="" ${!row?'selected':''}>확인할 기록을 선택해 주세요</option>${candidates.map(r=>`<option value="${esc(r.id)}" ${row?.id===r.id?'selected':''}>${esc(r.originalName||r.name)} · ${esc(r.rawTeam)} · ${esc(r.source?.tab)} / ${esc(r.source?.cell)}</option>`).join('')}</select></label>`:''}
    ${row?.identityNeedsReview?'<p class="notice">스케줄 명부와의 이름·팀 연결은 확인 중입니다. 선택한 기록을 그대로 보여줍니다.</p>':''}
    ${!row?`<p class="notice">${candidates.length>1?'이 직원의 기록이 여러 행에 있습니다. 위에서 확인할 기록을 선택해 주세요.':'이 직원의 해당 월 가져온 기록은 없습니다.'}</p>`:''}
    <div class="daily-calendar-heading"><h3>${monthLabel(selectedMonth)}</h3><span>내역 ${recordedDays.length}일</span></div>
    <p class="daily-help"><span class="daily-desktop-help">날짜를 누르면 아래에서 금액·시간과 메모를 볼 수 있어요.</span><span class="daily-mobile-help">표시된 날짜를 누르면 상세 내역이 보여요.</span></p>
    <div class="daily-calendar-scroll"><div class="daily-calendar" aria-label="${esc(initialRow.name)} ${monthLabel(selectedMonth)} 내역 달력">
     <div class="daily-weekdays">${['일','월','화','수','목','금','토'].map(w=>`<span>${w}</span>`).join('')}</div>
     <div class="daily-grid">${calendarDays(selectedMonth).map(day=>{
      if(!day)return'<div class="daily-blank" aria-hidden="true"></div>';
      const items=currentEntries[day]||[],isToday=dateKey(selectedMonth,day)===`${today.getFullYear()}-${String(today.getMonth()+1).padStart(2,'0')}-${String(today.getDate()).padStart(2,'0')}`;
      return `<button class="daily-day ${day===selectedDay?'selected':''} ${isToday?'today':''}" data-daily-day="${day}" aria-pressed="${day===selectedDay}" aria-label="${esc(`${Number(selectedMonth.slice(2))}월 ${day}일, ${items.length?items.map(e=>`${e.label} ${entryText(e,kind)}`).join(', '):'내역 없음'}`)}">
       <span class="daily-day-number">${day}${isToday?'<small>오늘</small>':''}</span>
       <span class="daily-desktop-entries">${items.slice(0,2).map(entry=>`<span class="daily-entry ${entryClass(entry)}">${kind==='attendance'?`<span>${esc(entry.label)}</span>`:''}<strong>${esc(entryText(entry,kind))}</strong>${entry.local?'<span>추가 기록</span>':''}</span>`).join('')}${items.length>2?`<span class="daily-more">+${items.length-2}건</span>`:''}${items.some(e=>e.note)?'<span class="daily-note-dot">메모</span>':''}</span>
       ${items.length?`<span class="daily-mobile-count" aria-hidden="true"><i class="${items.some(e=>e.local)?'added':''}"></i>${items.length}건</span>`:''}
      </button>`;
     }).join('')}</div>
    </div></div>
    <section class="daily-selection" aria-live="polite"></section>
    <div class="daily-key"><span><i></i> 가져온 내역</span><span><i class="added"></i> 브라우저 추가</span></div>
    ${kind==='meals'?'<p class="daily-help">0원과 미기재는 구분해 표시합니다.</p>':''}
    ${totals.length?'<h3 class="daily-totals-heading">가져온 월별 합계</h3>':''}
    <div class="daily-summary">${totals.map(([label,value,carry])=>`<div><span>${esc(label)}</span><strong>${esc(format(value))}${typeof value==='number'?(kind==='attendance'?'분':['사용','한도','잔액'].includes(label)?'원':''):''}</strong>${carry!==undefined&&carry!==''?`<small>이월 ${esc(format(carry))}분</small>`:''}</div>`).join('')}</div>
   </div>`;
  renderDay();
 }
 function renderDay(){
  const items=currentEntries[selectedDay]||[];
  dialog.querySelectorAll('[data-daily-day]').forEach(el=>{const active=Number(el.dataset.dailyDay)===selectedDay;el.classList.toggle('selected',active);el.setAttribute('aria-pressed',String(active));});
  dialog.querySelector('.daily-selection').innerHTML=`<div class="daily-selection-heading"><h3>${Number(selectedMonth.slice(2))}월 ${selectedDay}일 내역</h3><span>${items.length}건</span></div>${items.length?items.map(entry=>`<article class="daily-record"><div><strong>${esc(entry.label)}</strong><strong class="${entryClass(entry)}">${esc(entryText(entry,kind))}</strong></div>${entry.note?`<p class="daily-memo">${esc(entry.note)}</p>`:'<p>메모 없음</p>'}<small>${entry.local?'이 브라우저에서 추가한 기록':`가져온 기록${entry.source?' · '+esc(entry.source.tab)+' / '+esc(entry.source.cell):''}`}</small></article>`).join(''):'<p class="empty">기재된 내역이 없습니다.</p>'}`;
 }
 function changeMonth(next){selectedMonth=next;selectedId=null;selectedDay=null;render();dialog.querySelector('#daily-month').focus({preventScroll:true});}
 function refreshRecords(event){
  if(event.key!==storageKey||!readRecords||!dialog.open||closing)return;
  try{
   localRecords=readRecords();const y=dialog.querySelector('.daily-scroll').scrollTop,active=document.activeElement;
   const focus=active?.dataset.dailyDay?`[data-daily-day="${active.dataset.dailyDay}"]`:active?.hasAttribute('data-daily-close')?'[data-daily-close]':active?.id?`#${active.id}`:null;
   render();if(focus)dialog.querySelector(focus)?.focus({preventScroll:true});dialog.querySelector('.daily-scroll').scrollTop=y;
  }catch{/* Preserve the already displayed records when another tab stores malformed data. */}
 }
 addEventListener('storage',refreshRecords);
 dialog.addEventListener('click',event=>{
  if(event.target===dialog){const bounds=dialog.getBoundingClientRect();if(event.clientX<bounds.left||event.clientX>bounds.right||event.clientY<bounds.top||event.clientY>bounds.bottom)close();return;}
  const button=event.target.closest('button');if(!button)return;
  if(button.hasAttribute('data-daily-close')){close();return;}
  if(button.dataset.dailyMonth!==undefined){const next=months[Number(button.dataset.dailyMonth)];if(next)changeMonth(next);return;}
  if(button.dataset.dailyDay){selectedDay=Number(button.dataset.dailyDay);renderDay();}
 });
 dialog.addEventListener('change',event=>{
  if(event.target.id==='daily-month')changeMonth(event.target.value);
  if(event.target.id==='daily-row'){selectedId=event.target.value;selectedDay=null;render();dialog.querySelector('#daily-row').focus({preventScroll:true});}
 });
 render();dialog.showModal();return dialog;
}
