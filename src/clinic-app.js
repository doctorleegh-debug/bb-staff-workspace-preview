import '@fontsource-variable/noto-sans-kr';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import koLocale from '@fullcalendar/core/locales/ko';
import { timerState, clockText, MEAL_PREFIX } from './meal-timer.js';
import { openDailyDetail, calendarDays } from './daily-detail.js';
import { mealPeople, mealMonth, buildMealDashboard, demoMealRecords } from './meal-dashboard.js';
import { ACTIVITY_PREFIX, ACTIVITY_TYPES, readStaffState, updateStaffActivity, recordsForActivity } from './staff-activity.js';
import { employeeStatusView, activityDashboardView } from './staff-view.js';
import { mountReceipts } from './receipt-view.js';
import { RECEIPT_SIGNAL } from './receipt-store.js';
import './clinic.css';
import {initializeTheme,themeControl} from './theme.js';
import {rosterDayCell,addedSchedule,schedulePickerDays} from './schedule-view.js';
import {SESSION_KEY,employeeDirectory,restorePreviewSession,allowedRoute,mountPreviewLogin} from './preview-auth.js';
import {mountWorkspaceHelp,mountFeedbackCollection} from './workspace-help.js';
import {mealBudget} from './schedule-context.js';
import {TEAM_SETTINGS_KEY,readTeamEditors,allowedSchedulePeople} from './team-settings.js';
import {mountSchedulePanel} from './schedule-panel.js';
import {SNACK_KEY,mountSnacks} from './team-snacks.js';
import {EXPENSE_KEY,EXPENSE_CONFIG_KEY} from './expense-store.js';
import {mountExpenses} from './expense-view.js';
import {mealStatusEvents} from './status-calendar.js';
import {validDraft,groupOf,scheduleRows,withoutGroup,scheduleGroups,moveGroup,moveOriginal,overrideMap,sourceIdOf,shiftDate} from './schedule-drafts.js';
initializeTheme();

const app=document.querySelector('#app');
const esc=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const number=value=>typeof value==='number'?value.toLocaleString('ko-KR'):String(value??'');
const objectParticle=word=>(word.charCodeAt(word.length-1)-0xAC00)%28?'을':'를';
const display=value=>value===''||value===undefined||value===null?'—':number(value);
const localDate=(date=new Date())=>`${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;
const today=()=>new Intl.DateTimeFormat('sv-SE',{timeZone:'Asia/Seoul'}).format(new Date());
const lastDay=month=>new Date(2000+Number(month.slice(0,2)),Number(month.slice(2)),0).getDate();
const nextDay=date=>new Date(Date.parse(date+'T12:00:00Z')+86400000).toISOString().slice(0,10);
const monthOf=date=>date.slice(2,4)+date.slice(5,7);
const dateOf=(month,day=1)=>`20${month.slice(0,2)}-${month.slice(2)}-${String(day).padStart(2,'0')}`;
const monthText=month=>`20${month.slice(0,2)}년 ${Number(month.slice(2))}월`;
const menus=[['feedback','메모취합','직원·관리자 의견을 한곳에','file'],['admin-dashboard','관리자 대시보드','직원 상태와 월간 기록','chart'],['team-calendar','팀 일정','휴무와 팀 일정을 한눈에','calendar'],['roster','직원별 근무표','직원 × 날짜로 비교','grid'],['meal-timer','내 하루','근무 상태와 내 업무','clock'],['meals','식대','사용 한도와 식대 기록','meal'],['team-snacks','팀 간식비','팀별 간식 주문과 사용 금액','meal'],['expenses','지출결의서','신청과 4단계 결재','file'],['attendance','OT·지각','이월부터 사용·마감까지','chart'],['sources','예시·검증','37개 탭과 예시 기록 확인','file']];
const paths={calendar:'M5 3v4M19 3v4M3 10h18M5 5h14a2 2 0 0 1 2 2v13H3V7a2 2 0 0 1 2-2ZM7 14h2m3 0h2m3 0h1M7 18h2m3 0h2',grid:'M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z',clock:'M12 8v5l3 2M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z',meal:'M4 3v7m3-7v7M2 7h7M5.5 10v11M18 3c-4 4-4 9 0 9V3Zm0 9v9',chart:'M3 3v18h18M7 17v-6m5 6V7m5 10V4',file:'M14 3H5v18h14V8l-5-5Zm0 0v5h5M8 12h8m-8 4h8'};
const icon=key=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${paths[key]||paths.file}"/></svg>`;
const badge=(label,cls='')=>`<span class="badge ${cls}">${esc(label)}</span>`;
const swatch=color=>/^[A-Fa-f0-9]{6}$/.test(color||'')?`<i class="swatch" style="--source-color:#${color}" title="예시 색상 #${color}" aria-label="예시 색상 #${color}"></i>`:'';
let data,calendar,view='team-calendar',month,team='전체',search='',renderVersion=0,dialogVersion=0,sourceBook='schedule',sourceTab='',sourcePage=0,sourceQuery='',calendarTab='leave';
const rawCache=new Map(),pendingMeals=new Set(),receiptViewState={},feedbackViewState={},guideViewState={},dutyViewState={},expenseViewState={};
const LOCAL_KEY='bb-staff:public-preview:v1';
let authSession=null,employees=[],helpController,feedbackController,sessionRevision=0,renderedView='';
let previewMode='employee',mealDemo=false,showAllMealHistory=false,activityKind='meal',signedInPerson,receiptController,snackController,expenseController,mealTransitionFrom='';
function changeSession(session){
 sessionRevision++;clearTimeout(searchTimeout);composing=false;dialogVersion++;undoStack.length=0;
 clearTimeout(toastTimeout);document.querySelector('#toast').classList.remove('visible');document.querySelector('#toast').textContent='';
 document.querySelectorAll('dialog[open]').forEach(dialog=>dialog.close());
 authSession=session;previewMode=session?.role||'employee';signedInPerson=employees.find(p=>p.personId===session?.personId);renderedView='';
 team='전체';search='';mealDemo=false;showAllMealHistory=false;activityKind='meal';sourceQuery='';sourceTab='';sourcePage=0;calendarTab='leave';
 month=data.months.includes(monthOf(today()))?monthOf(today()):data.months.at(-1);
 for(const state of [receiptViewState,feedbackViewState,guideViewState,dutyViewState,expenseViewState])for(const key of Object.keys(state))delete state[key];
 try{if(session)sessionStorage.setItem(SESSION_KEY,JSON.stringify(session));else sessionStorage.removeItem(SESSION_KEY);}catch{toast('이 탭에서만 로그인 상태를 유지합니다.');}
 history.replaceState(null,'','#/'+allowedRoute(session,''));render();
}
const personalView=()=>previewMode==='employee'&&['roster','meals','attendance'].includes(view);

let toastTimeout;
function toast(message){const el=document.querySelector('#toast');el.textContent=message;el.classList.add('visible');clearTimeout(toastTimeout);toastTimeout=setTimeout(()=>el.classList.remove('visible'),5000);}
function matches(row,selectedMonth=month){return row.month===selectedMonth&&(personalView()?row.personId===signedInPerson.personId:((team==='전체'||row.teams?.includes(team))&&(!search||[row.name,row.originalName,row.rawTeam].some(x=>x?.includes(search)))));}
const rosterRows=()=>data.roster.filter(r=>matches(r));

function readDraft(){const value=localStorage.getItem(LOCAL_KEY);if(value===null)return[];const rows=JSON.parse(value);if(!Array.isArray(rows)||!rows.every(validDraft))throw new Error('추가 기록 형식을 확인해야 합니다. 기존 기록은 보존했습니다.');return rows;}
function localRows(kind){try{return readDraft().filter(r=>r.kind===kind&&matches(r));}catch(error){toast(error.message);return[];}}
async function saveDraft(rows,validate=()=>{},replaceGroup=''){const work=()=>{validate();if(!rows.length||!rows.every(validDraft))throw new Error('추가 기록 형식을 확인해 주세요. 저장하지 않았습니다.');const kept=replaceGroup?withoutGroup(readDraft(),replaceGroup):readDraft();localStorage.setItem(LOCAL_KEY,JSON.stringify([...kept,...rows]));};return navigator.locks?navigator.locks.request(LOCAL_KEY,work):work();}
async function moveDraftGroup(groupId,newStart,validate=()=>{}){const work=()=>{validate();const rows=readDraft(),next=moveGroup(rows,groupId,newStart);if(next===rows)return false;if(next.some(r=>r.kind==='schedule'&&groupOf(r)===groupId&&!data.months.includes(r.month)))throw new Error('조회 가능한 월 안으로만 옮길 수 있습니다.');localStorage.setItem(LOCAL_KEY,JSON.stringify(next));return true;};return navigator.locks?navigator.locks.request(LOCAL_KEY,work):work();}
async function moveOriginalDraft(entry,newDate,validate=()=>{}){const work=()=>{validate();if(newDate!==entry.from&&!data.months.includes(monthOf(newDate)))throw new Error('조회 가능한 월 안으로만 옮길 수 있습니다.');localStorage.setItem(LOCAL_KEY,JSON.stringify(moveOriginal(readDraft(),entry,newDate,new Date().toISOString(),()=>crypto.randomUUID())));};return navigator.locks?navigator.locks.request(LOCAL_KEY,work):work();}
async function removeDraftGroup(groupId,validate=()=>{}){const work=()=>{validate();const rows=readDraft(),kept=withoutGroup(rows,groupId);if(kept.length===rows.length)throw new Error('이미 삭제된 일정입니다.');localStorage.setItem(LOCAL_KEY,JSON.stringify(kept));};return navigator.locks?navigator.locks.request(LOCAL_KEY,work):work();}
function sourceButton(source,label='예시 보기'){return source?`<button class="text-button" data-source="${esc(JSON.stringify(source))}">${esc(label)} ↗</button>`:'';}
function metric(label,value,detail=''){return `<div class="metric"><span>${esc(label)}</span><strong>${esc(value)}</strong><small>${esc(detail)}</small></div>`;}
function empty(message='선택한 조건의 기록이 없습니다.'){return `<div class="empty">${esc(message)}</div>`;}
function teamOptions(){return [...new Set([...data.roster,...data.mealRows,...data.otRows].filter(r=>r.month===month).flatMap(r=>r.teams))];}
function shell(){
 const personal=previewMode==='employee',titles={roster:['내 근무표','나의 휴무와 근무 일정'],meals:['내 식대','사용 한도와 잔액, 식대 기록'],attendance:['내 OT·지각','나의 월별 기록']};
 const shownMenus=menus.map(m=>personal&&titles[m[0]]?[m[0],...titles[m[0]],m[3]]:m),current=shownMenus.find(m=>m[0]===view),teams=teamOptions(),visibleMenus=shownMenus.filter(m=>personal?!['admin-dashboard','sources','feedback'].includes(m[0]):m[0]!=='meal-timer');
 if(personal){const order=['meal-timer','roster','team-calendar','meals','team-snacks','expenses','attendance'];visibleMenus.sort((a,b)=>order.indexOf(a[0])-order.indexOf(b[0]));}
 app.innerHTML=`<aside class="sidebar"><a class="brand" href="#/${personal?'meal-timer':'admin-dashboard'}"><img class="brand-mark" src="./assets/clinic-logo.png" width="52" height="52" alt="뷰티블라썸 로고"><span>뷰티블라썸<small>함께하는 하루</small></span></a><div class="nav-caption">${personal?'나의 업무':'직원 업무 관리'}</div><nav aria-label="직원 업무 메뉴">${visibleMenus.map(([id,title,desc,key])=>`<a class="nav-card ${view===id?'selected':''}" href="#/${id}" ${view===id?'aria-current="page"':''}>${icon(key)}<span><strong>${title}</strong><small>${desc}</small></span><span class="nav-arrow">›</span></a>`).join('')}</nav><div class="sidebar-note"><span class="status-dot"></span>${personal?esc(signedInPerson.name)+' 님':'관리자 화면'}<small>${personal?esc(signedInPerson.rawTeam)+' · 테스트 로그인':'직원 상태 · 기록 · 영수증'}</small></div></aside><div class="main"><header class="topbar"><span class="login-role-badge">${personal?'직원 화면':'관리자 화면'}</span><span class="signed-in-person">${personal?esc(signedInPerson.name)+' 님 · '+esc(signedInPerson.rawTeam):'뷰티블라썸 관리자'}</span>${themeControl()}<span class="date-label">${new Intl.DateTimeFormat('ko-KR',{timeZone:'Asia/Seoul',month:'long',day:'numeric',weekday:'long'}).format(new Date())}</span><span id="help-launcher" class="help-launcher-slot"></span><button type="button" class="logout-button" data-action="logout"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 4H4v16h5M14 8l4 4-4 4M8 12h12"/></svg><span>로그아웃</span></button></header><main><div id="workspace-help"></div><div class="page-heading"><div><h1>${current[1]}</h1><p>${current[2]}</p></div>${view==='admin-dashboard'?'<button class="primary" data-action="staff-leave">+ 직원 휴무 등록</button>':['sources','meal-timer','feedback','team-snacks','expenses'].includes(view)?'':`<button class="primary" data-action="${personal&&view==='meals'?'receipt-new':'new'}">+ ${view==='meals'?'식대':view==='attendance'?'OT·지각':'일정'} 등록</button>`}</div>${['meal-timer','feedback','expenses'].includes(view)?'':`<section class="filters" aria-label="조회 필터"><div class="filter-top"><label class="month-field">조회 월<select id="month-filter">${data.months.map(m=>`<option value="${m}" ${m===month?'selected':''}>${monthText(m)}</option>`).join('')}</select></label>${personalView()?`<p class="personal-filter-note">${esc(signedInPerson.name)} 님의 기록입니다.</p>`:`<label class="search-field">직원 찾기<input id="staff-search" type="search" value="${esc(search)}" placeholder="직원 이름 또는 팀" maxlength="100"></label><label class="team-field">팀 선택<select id="team-filter">${['전체',...teams].map(t=>`<option value="${esc(t)}" ${team===t?'selected':''}>${esc(t)}${t==='전체'?'':'팀'}</option>`).join('')}</select></label><span class="filter-note">화면을 바꿔도 월과 팀이 유지돼요.</span>`}</div></section>`}<div id="content" aria-live="polite"></div></main><footer>뷰티블라썸 직원 업무 · 예시 가져온 날짜 ${esc(data.importedAt?.slice(0,10))}<span>추가한 기록과 사진은 이 브라우저에 저장됩니다.</span></footer></div>`;
}

function render(){
 hideMorePeek();
 // Captured before anything is torn down: destroying the calendar shrinks the page and would clamp scrollY first.
 const scrollTop=scrollY,pageHeight=document.documentElement.scrollHeight;
 if(!data)return;
 const retainedFeedback=authSession?.role==='admin'&&view==='admin-dashboard'&&location.hash.split('?')[0]==='#/admin-dashboard'&&document.querySelector('#dashboard-feedback')?{node:document.querySelector('#dashboard-feedback'),controller:feedbackController}:null;
 renderVersion++;receiptController?.dispose();receiptController=null;snackController?.dispose();snackController=null;expenseController?.dispose();expenseController=null;helpController?.dispose();helpController=null;if(!retainedFeedback)feedbackController?.dispose();feedbackController=null;calendar?.destroy();calendar=null;
 if(!authSession){mountPreviewLogin(app,{people:employees,themeControl,onLogin:changeSession});return;}
 const requested=location.hash.slice(2).split('?')[0];view=allowedRoute(authSession,requested);
 if(view!==requested)history.replaceState(null,'','#/'+view);
 // Re-rendering the same screen (after a save, move or status change) must not jump back to the top: hold the page height while async views (IndexedDB-backed 식대 등) redraw, then restore the scroll.
 const keepScroll=renderedView===view;renderedView=view;if(keepScroll)document.body.style.minHeight=pageHeight+'px';
 shell();document.querySelector('main').insertAdjacentHTML('afterbegin','<div class="notice" role="note"><strong>공개 초안 검수용</strong> · 미리 채워진 일정·식대·OT·지출은 예시입니다. 직접 입력한 기록과 검수 메모는 이 브라우저에 저장됩니다.</div>');const content=document.querySelector('#content');
 helpController=mountWorkspaceHelp(document.querySelector('#workspace-help'),{session:authSession,view,people:employees,toast,guideState:guideViewState,onSaved:()=>feedbackController?.refresh()});
 try{({ feedback:root=>{feedbackController=mountFeedbackCollection(root,{people:employees,toast,viewState:feedbackViewState});},'admin-dashboard':root=>renderMealManager(root,retainedFeedback),'team-calendar':renderCalendar,roster:renderRoster,'meal-timer':renderTimers,meals:renderMeals,'team-snacks':renderSnacks,expenses:renderExpenses,attendance:renderAttendance,sources:renderSources }[view])(content);labelMobileTables(content);}catch(error){retainedFeedback?.controller?.dispose();content.innerHTML=empty('화면을 불러오지 못했습니다. 새로고침 후 다시 확인해 주세요.');toast(error.message);console.error(error);}
 if(keepScroll){scrollTo(0,scrollTop);setTimeout(()=>{document.body.style.minHeight='';},800);}
}
function calendarRows(){const visibleIds=new Set(rosterRows().map(r=>r.personId)),overrides=overrideMap(allDrafts());const imported=data.scheduleEvents.filter(e=>monthOf(e.date)===month&&(!e.personId||visibleIds.has(e.personId))&&!overrides.has(e.id));return [...imported,...scheduleGroups(localRows('schedule'))];}
function allDrafts(){try{return readDraft();}catch(error){toast(error.message);return[];}}
function scheduleCandidates(targetMonth){
 let editors=[];try{editors=readTeamEditors(localStorage,employees);}catch(error){toast(error.message);}
 return allowedSchedulePeople({session:authSession,person:signedInPerson,people:schedulePeople(targetMonth),editors});
}
function attachDutyPanel(content,people){
 const tabs=content.querySelector('.calendar-tabs');if(tabs)tabs.insertAdjacentHTML('afterend','<div id="duty-area"></div>');else content.insertAdjacentHTML('afterbegin','<div id="duty-area"></div>');mountSchedulePanel({root:content.querySelector('#duty-area'),people,roster:data.roster,records:allDrafts,month,session:authSession,employees,person:signedInPerson,toast,viewState:dutyViewState});
}
function renderExpenses(content){const revision=sessionRevision;expenseController=mountExpenses({root:content,session:authSession,people:employees,month,toast,viewState:expenseViewState,guard:()=>{if(revision!==sessionRevision)throw new Error('로그인 정보가 변경됐습니다. 다시 확인해 주세요.');}});}
function renderSnacks(content){snackController=mountSnacks({root:content,session:authSession,person:signedInPerson,teams:teamOptions(),months:data.months,month,team,search,toast});}
const calendarTabs=()=>`<nav class="calendar-tabs" aria-label="캘린더 선택">${[['leave','휴무 캘린더'],['status','상태 캘린더']].map(([id,title])=>`<button data-calendar-tab="${id}" aria-pressed="${calendarTab===id}">${title}</button>`).join('')}</nav>`;
function renderCalendar(content){
 if(calendarTab==='status'){renderStatusCalendar(content);return;}
 const events=calendarRows(),people=rosterRows();
 content.innerHTML=calendarTabs()+`<div class="metrics">${metric('조회 직원',`${new Set(people.map(r=>r.personId)).size}명`,team==='전체'?'이달 스케줄 명부':`${team}팀`)}${metric('일정 표시',`${events.length}건`,'공통 일정 포함')}${metric('예시 색상',`${events.filter(r=>r.unresolved).length}건`,'의미 확인 전에도 예시 색상 보존')}</div><section class="panel calendar-panel"><div class="panel-heading"><div><h2>${team==='전체'?'모든 팀':`${esc(team)}팀`}의 일정</h2><p>날짜를 누르면 일정 등록, 기록을 누르면 상세 내용을 볼 수 있어요.</p></div><span class="legend-dot">● 휴무·휴가　<span>● 예시 색상</span></span></div><div id="calendar"></div></section>`;
 calendar=new Calendar(document.querySelector('#calendar'),{
  plugins:[dayGridPlugin,interactionPlugin,listPlugin],locale:koLocale,initialDate:dateOf(month),initialView:innerWidth<700?'listMonth':'dayGridMonth',height:'auto',fixedWeekCount:false,dayMaxEvents:3,
  headerToolbar:{left:'',center:'title',right:'dayGridMonth,listMonth'},buttonText:{month:'월간',list:'목록'},displayEventTime:false,editable:true,eventDurationEditable:false,longPressDelay:350,selectable:false,noEventsText:'선택한 조건에 일정이 없습니다.',moreLinkText:n=>`${n}건 더 보기`,
  events:events.map(e=>({id:e.id,title:`${e.name||'공통'} · ${e.label}`,start:e.date,end:e.end&&e.end>e.date?nextDay(e.end):undefined,allDay:true,startEditable:movableEvent(e),classNames:[e.unresolved?'source-event':e.personId?'staff-event':'common-event'],extendedProps:{record:e}})),
  eventDrop:onCalendarDrop,
  moreLinkDidMount:info=>{const el=info.el;el.addEventListener('pointerenter',e=>{if(e.pointerType!=='touch')showMorePeek(el,events);});el.addEventListener('focus',()=>showMorePeek(el,events));for(const type of['pointerleave','blur','click'])el.addEventListener(type,hideMorePeek);},
  dayCellDidMount:info=>{if(info.isOther||!info.el.querySelector('.fc-daygrid-day-top'))return;const button=document.createElement('button');button.type='button';button.className='calendar-add';button.textContent='+';const date=localDate(info.date);button.setAttribute('aria-label',date+' 일정 추가');button.addEventListener('click',event=>{event.stopPropagation();openEntry('schedule',date);});info.el.querySelector('.fc-daygrid-day-top').append(button);},
  dateClick:info=>openEntry('schedule',info.dateStr),eventClick:info=>showSchedule(info.event.extendedProps.record),
  eventContent:arg=>{const el=document.createElement('span');el.className='calendar-event-text';const record=arg.event.extendedProps.record;const color=record.color||findDayColor(record);if(color){const dot=document.createElement('i');dot.className='swatch';dot.style.setProperty('--source-color',`#${color}`);el.append(dot);}el.append(document.createTextNode(arg.event.title));return{domNodes:[el]};}
 });calendar.render();attachDutyPanel(content,people);
}
function statusPeople(){return employees.filter(p=>(team==='전체'||p.teams?.includes(team))&&(!search||[p.name,p.rawTeam].some(x=>x?.includes(search))));}
function renderStatusCalendar(content){
 const events=mealStatusEvents(statusPeople(),localStorage);
 content.innerHTML=calendarTabs()+`<div class="metrics">${metric('지금 식사중',`${events.length}명`,team==='전체'?'모든 팀':`${team}팀`)}${metric('표시 기준','오늘',`${today()} · 식사 시작 시각`)}${metric('기록 위치','이 브라우저','식사 버튼을 누른 기기의 기록')}</div><section class="panel calendar-panel"><div class="panel-heading"><div><h2>${team==='전체'?'모든 팀':`${esc(team)}팀`}의 식사 상태</h2><p>식사 버튼을 누른 직원이 시작 시각과 함께 오늘 칸에 표시됩니다. 식사를 종료하면 사라집니다.</p></div><span class="legend-dot">● 식사중</span></div>${events.length?'':'<p class="empty">지금 식사중인 직원이 없습니다.</p>'}<div id="calendar"></div></section>`;
 calendar=new Calendar(document.querySelector('#calendar'),{
  plugins:[dayGridPlugin,listPlugin],locale:koLocale,initialDate:today(),initialView:innerWidth<700?'listMonth':'dayGridMonth',height:'auto',fixedWeekCount:false,dayMaxEvents:4,
  headerToolbar:{left:'',center:'title',right:'dayGridMonth,listMonth'},buttonText:{month:'월간',list:'목록'},displayEventTime:false,editable:false,selectable:false,noEventsText:'지금 식사중인 직원이 없습니다.',moreLinkText:n=>`${n}명 더 보기`,
  events:events.map(e=>({id:e.id,title:`${e.name} · ${e.label}`,start:e.date,allDay:true,classNames:['status-event'],extendedProps:{record:e}})),
  eventClick:info=>{const r=info.event.extendedProps.record;openDialog(`${r.name} · 식사중`,`<dl><dt>팀</dt><dd>${esc(r.rawTeam)}</dd><dt>시작 시각</dt><dd>${esc(r.date)} ${esc(r.time)}</dd></dl><p class="notice">식사를 종료하면 상태 캘린더에서 사라집니다.</p>`);}
 });calendar.render();
}
// Dragging in the team calendar: app groups move as a whole; sheet entries get an on-screen override; common (no person) events stay put.
const movableEvent=e=>!!e.personId&&(e.local?canEditSchedule(e):scheduleCandidates(monthOf(e.date)).some(p=>p.personId===e.personId));
async function onCalendarDrop(info){
 const record=info.event.extendedProps.record,days=info.delta?.days||0,revision=sessionRevision;
 if(!days){info.revert();return;}
 const guard=()=>{if(revision!==sessionRevision||!authSession)throw new Error('로그인 상태가 변경됐습니다. 다시 로그인해 주세요.');};
 try{
  if(record.local){
   const group=scheduleGroups(allDrafts()).find(g=>g.groupId===groupOf(record));if(!group||!canEditSchedule(group))throw new Error('옮길 수 있는 일정이 아닙니다.');
   const target=shiftDate(group.start,days),revert=group.override&&target===group.from;
   if(revert){await removeDraftGroup(group.groupId,guard);recordMove(group.label,g=>moveOriginalDraft(overrideEntry(group),group.start,g));}else{await moveDraftGroup(group.groupId,target,guard);recordMove(group.label,g=>moveDraftGroup(group.groupId,group.start,g));}
   if(revision!==sessionRevision)return;render();toast(revert?'원래 날짜로 되돌렸습니다.':`${group.label} 일정을 ${target}${group.days>1?' 시작':''}으로 옮겼습니다. ${UNDO_HINT}`);return;
  }
  const person=data.roster.find(r=>r.personId===record.personId&&r.month===monthOf(record.date))||employees.find(p=>p.personId===record.personId);
  if(!person||!scheduleCandidates(monthOf(record.date)).some(p=>p.personId===record.personId))throw new Error('옮길 수 있는 일정이 아닙니다.');
  const target=shiftDate(record.date,days);
  const entry={sourceId:record.id,from:record.date,label:record.label,color:findDayColor(record)||'',note:record.note||'',personId:record.personId,name:person.name,teams:person.teams,rawTeam:person.rawTeam};
  await moveOriginalDraft(entry,target,guard);recordMove(record.label,g=>moveOriginalDraft(entry,record.date,g));
  if(revision!==sessionRevision)return;render();toast(`${record.label} 일정을 ${target}으로 옮겼습니다. 시트는 그대로예요. ${UNDO_HINT}`);
 }catch(e){info.revert();if(revision===sessionRevision)toast(e.message);}
}
function findDayColor(event){if(!event.source)return'';const r=data.roster.find(r=>r.personId===event.personId&&r.month===monthOf(event.date));return r?.days[Number(event.date.slice(-2))]?.color||'';}
// Ctrl+Z undoes the last drag move in any calendar. Each move records its own inverse; the stack clears on logout.
const undoStack=[],UNDO_HINT='Ctrl+Z로 되돌릴 수 있어요.';
const overrideEntry=g=>({sourceId:g.sourceId,from:g.from,label:g.label,color:g.color||'',note:g.note||'',personId:g.personId,name:g.name,teams:g.teams,rawTeam:g.rawTeam});
function recordMove(label,undo){undoStack.push({label,undo});if(undoStack.length>20)undoStack.shift();}
async function undoLastMove(){
 const entry=undoStack.pop();if(!entry)return;const revision=sessionRevision;
 const guard=()=>{if(revision!==sessionRevision||!authSession)throw new Error('로그인 상태가 변경됐습니다. 다시 로그인해 주세요.');};
 try{await entry.undo(guard);if(revision!==sessionRevision)return;render();toast(`${entry.label} 일정 이동을 되돌렸습니다.`);}catch(e){if(revision===sessionRevision)toast(e.message);}
}
document.addEventListener('keydown',event=>{
 if(!(event.ctrlKey||event.metaKey)||event.shiftKey||event.altKey||event.repeat||event.key.toLowerCase()!=='z')return;
 if(!authSession||!undoStack.length||event.target.closest?.('input,textarea,select,[contenteditable]')||document.querySelector('dialog[open]'))return;
 event.preventDefault();undoLastMove();
});
// Hovering "N건 더 보기" lists that whole day in a glass panel. Click keeps FullCalendar's own popover; touch has no hover, so it keeps the click path.
let morePeek=null;
function hideMorePeek(){morePeek?.remove();morePeek=null;}
function showMorePeek(link,events){
 hideMorePeek();const date=link.closest('.fc-daygrid-day')?.dataset.date;if(!date)return;
 const items=events.filter(e=>e.date<=date&&(e.end||e.date)>=date);if(!items.length)return;
 const panel=document.createElement('div');panel.className='more-peek';panel.setAttribute('role','tooltip');
 panel.innerHTML=`<p>${esc(date)} · ${items.length}건</p><ul>${items.map(e=>{const color=e.color||findDayColor(e);return`<li><i class="swatch ${color?'':e.personId?'is-staff':'is-common'}"${color?` style="--source-color:#${esc(color)}"`:''}></i><strong>${esc(e.name||'공통')}</strong><span>${esc(e.label)}</span></li>`;}).join('')}</ul>`;
 document.body.append(panel);
 const r=link.getBoundingClientRect(),w=panel.offsetWidth,h=panel.offsetHeight,below=r.bottom+8;
 panel.style.left=Math.max(12,Math.min(r.left,innerWidth-w-12))+'px';panel.style.top=(below+h>innerHeight-12?Math.max(12,r.top-h-8):below)+'px';morePeek=panel;
}
addEventListener('scroll',hideMorePeek,{passive:true});
const canEditSchedule=record=>!!record.local&&scheduleCandidates(monthOf(record.date)).some(p=>p.personId===record.personId);
const scheduleActions=record=>!canEditSchedule(record)?'':record.override?`<span class="schedule-actions"><button type="button" data-schedule-revert="${esc(groupOf(record))}">원래 날짜로 되돌리기</button></span>`:`<span class="schedule-actions"><button type="button" data-schedule-edit="${esc(groupOf(record))}">편집</button><button type="button" data-schedule-delete="${esc(groupOf(record))}">삭제</button></span>`;
const scheduleSpan=group=>group.days>1?`${group.start} ~ ${group.end} (${group.days}일)`:group.date;
function showSchedule(record){
 const group=record.local?scheduleGroups(allDrafts()).find(g=>g.groupId===groupOf(record))||{...record,days:1}:{...record,days:1};
 openDialog(`${record.name||'공통'} · ${record.label}`,`<dl><dt>${group.days>1?'기간':'날짜'}</dt><dd>${esc(scheduleSpan(group))}</dd>${record.override?`<dt>원래 날짜</dt><dd>${esc(record.from)}</dd>`:''}<dt>팀</dt><dd>${esc(record.teams?.join(' · ')||'공통')}</dd><dt>예시 표시</dt><dd>${swatch(record.color||findDayColor(record))} ${esc(record.rawValue||record.label)}</dd><dt>메모</dt><dd class="prewrap">${esc(record.note||'메모 없음')}</dd></dl>${record.unresolved?'<p class="notice">예시 색상을 보존했습니다. 의미는 아직 지정하지 않았습니다.</p>':''}${sourceButton(record.source)}${record.local?`<p class="notice">${record.override?'시트 일정을 앱에서 옮겨 표시합니다. 시트는 바뀌지 않습니다.':'이 브라우저에서 추가한 일정입니다.'}</p>`+scheduleActions(record):''}`);
}
function renderRoster(content){
 if(previewMode==='employee'){const people=rosterRows();content.innerHTML=`<section class="panel personal-roster"><div class="panel-heading"><div><h2>${monthText(month)} 내 근무표</h2><p>${esc(signedInPerson.name)} 님 · 날짜를 누르면 상세 내용을 확인할 수 있어요.</p></div></div>${people.length?mobileRoster(people):empty('이달의 근무표가 없습니다.')}</section>${localRecords('schedule')}`;attachDutyPanel(content,rosterRows());return;}
 const people=rosterRows(),added=allDrafts(),count=new Date(2000+Number(month.slice(0,2)),Number(month.slice(2)),0).getDate(),days=Array.from({length:count},(_,i)=>i+1);
 content.innerHTML=`<section class="panel"><div class="panel-heading"><div><h2>${monthText(month)} 근무표</h2><p>${people.length}명 · 예시 색상을 그대로 보존했어요. 빈칸은 미기재 상태입니다.</p></div><span class="desktop-roster-hint">${badge('가로로 스크롤')}</span><span class="mobile-roster-hint">직원을 눌러 월간 근무표 확인</span></div><div class="table-scroll roster-scroll"><table class="roster-table"><thead><tr><th class="sticky-cell">직원 / 팀</th>${days.map(d=>`<th>${d}<small>${new Intl.DateTimeFormat('ko-KR',{weekday:'short'}).format(new Date(dateOf(month,d)+'T12:00:00'))}</small></th>`).join('')}</tr></thead><tbody>${people.map(r=>`<tr><th class="sticky-cell"><strong>${esc(r.name)}</strong><small>${esc(r.rawTeam)}${r.role?' · '+esc(r.role):''}</small></th>${days.map(d=>`<td>${rosterDayCell(r,d,added)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>${mobileRoster(people)}${people.length?'':empty()}</section>${localRecords('schedule')}`;attachDutyPanel(content,people);
}

function labelMobileTables(root){
 root.querySelectorAll('.table-scroll table:not(.roster-table)').forEach(table=>{
  table.classList.add('mobile-card-table');const labels=[...table.querySelectorAll('thead th')].map(th=>th.textContent);
  table.querySelectorAll('tbody tr').forEach(row=>[...row.children].forEach((cell,i)=>{cell.dataset.label=labels[i]||'';if(cell.querySelector('[data-detail]'))cell.classList.add('mobile-card-action');}));
 });
}
function mobileRoster(people){
 const added=allDrafts();
 return '<div class="mobile-roster">'+people.map((r,i)=>`<details class="mobile-roster-person" ${i===0?'open':''}><summary><strong>${esc(r.name)}</strong><span>${esc(r.rawTeam)}${r.role?' · '+esc(r.role):''}</span></summary><div class="mobile-roster-month"><div class="daily-weekdays">${['일','월','화','수','목','금','토'].map(w=>'<span>'+w+'</span>').join('')}</div><div class="mobile-roster-days">${calendarDays(month).map(day=>day?rosterDayCell(r,day,added,true):'<span class="mobile-roster-blank"></span>').join('')}</div></div></details>`).join('')+'</div>';
}
function showRosterDay(row,day){
 const records=allDrafts(),cell=row.days[day],added=addedSchedule(records,row,day),moved=cell?overrideMap(records).get(sourceIdOf(cell.source)):null;
 openDialog(esc(row.name)+' · '+dateOf(row.month,day),`${cell?'<section class="notice"><h3>가져온 일정</h3><p>'+swatch(cell.color)+' '+esc(cell.value||cell.colorMeaning||cell.label||'색상 표시')+'</p><p class="prewrap">'+esc(cell.note||'')+'</p>'+(moved?'<p>앱에서 <strong>'+esc(moved.date)+'</strong>로 옮겨 표시 중입니다. 시트는 그대로입니다.</p>'+scheduleActions(moved):'')+sourceButton(cell.source)+'</section>':''}${added.map(r=>'<section class="daily-record"><h3>'+(r.override?swatch(r.color)+' ':'')+esc(r.label)+'</h3><p class="prewrap">'+esc(r.note||'메모 없음')+'</p><small>'+(r.override?'시트 일정 · 원래 '+esc(r.from):'이 브라우저에서 등록한 일정')+'</small>'+scheduleActions(r)+'</section>').join('')}`);
}
function schedulePeople(targetMonth){return [...new Map(data.roster.filter(p=>p.month===targetMonth).map(p=>[p.personId,p])).values()];}
function openSchedulePicker(leaveOnly=false){
 let pickerMonth=month,selectedPerson=previewMode==='employee'?signedInPerson.personId:'';
 openDialog(leaveOnly?'직원 휴무 등록':'일정 등록','<div class="schedule-picker"></div>');const dialog=document.querySelector('dialog'),area=dialog.querySelector('.schedule-picker');
 function paint(){const people=scheduleCandidates(pickerMonth);if(!people.some(p=>p.personId===selectedPerson))selectedPerson=people[0]?.personId||'';
  area.innerHTML=`<div class="schedule-picker-fields"><label>조회 월<select data-picker-month>${data.months.map(m=>'<option value="'+m+'" '+(m===pickerMonth?'selected':'')+'>'+monthText(m)+'</option>').join('')}</select></label>${previewMode==='employee'&&people.length===1?'<p>'+esc(signedInPerson.name)+' 님의 일정</p>':'<label>직원<select data-picker-person>'+people.map(p=>'<option value="'+esc(p.personId)+'" '+(p.personId===selectedPerson?'selected':'')+'>'+esc(p.name)+' · '+esc(p.rawTeam)+'</option>').join('')+'</select></label>'}</div><p>등록할 날짜의 + 버튼을 눌러 주세요.</p><div class="schedule-picker-calendar">${schedulePickerDays(pickerMonth)}</div>`;
 }
 dialog.addEventListener('change',event=>{if(event.target.hasAttribute('data-picker-month')){pickerMonth=event.target.value;paint();}if(event.target.hasAttribute('data-picker-person'))selectedPerson=event.target.value;});
 dialog.addEventListener('click',event=>{const button=event.target.closest('[data-picker-date]');if(!button)return;event.stopPropagation();openEntry('schedule',button.dataset.pickerDate,selectedPerson,leaveOnly);});paint();
}

function renderTimers(content){const live=employees.flatMap(p=>{const active=readStaffState(localStorage,p.personId).active.find(r=>r.kind==='meal');return active?[{...p,startedAt:active.startedAt,pausedAt:active.pausedAt}]:[];}).sort((a,b)=>a.startedAt-b.startedAt);content.innerHTML=employeeStatusView({person:signedInPerson,state:readStaffState(localStorage,signedInPerson.personId),mealPeople:live,transitionFrom:mealTransitionFrom});mealTransitionFrom='';}
function renderMealManager(content,retainedFeedback=null){
 const now=Date.now(),ids=[...new Set(data.roster.map(r=>r.personId))];let states=Object.fromEntries(ids.map(id=>[id,readStaffState(localStorage,id)]));
 if(mealDemo){const base=demoMealRecords(data.roster,month,now);states=Object.fromEntries(Object.entries(base).map(([id,record],index)=>{
  const meal={...record,active:index===0?{id:'demo-meal',startedAt:now-67*60000}:null};
  const other={active:index>0&&index<4?{id:'demo-'+index,kind:['meal','rest','outing','offsite'][index],startedAt:now-[0,12,25,83][index]*60000}:null,history:['rest','outing','offsite'].flatMap((kind,i)=>record.history.map((r,n)=>{const elapsed=([12,25,83][i]+n)*60000;return{...r,id:r.id+'-'+kind,kind,endedAt:r.startedAt+elapsed,elapsed};}))};return[id,{meal,other,errors:[]}];
 }));}
 const statsByKind=Object.fromEntries(Object.keys(ACTIVITY_TYPES).map(kind=>[kind,buildMealDashboard({roster:data.roster,records:recordsForActivity(states,kind),month,team,search,now})]));
 const live=Object.entries(statsByKind).flatMap(([kind,stats])=>stats.active.map(r=>({...r,kind}))).sort((a,b)=>a.startedAt-b.startedAt);
 const errors=mealPeople(data.roster,month).flatMap(p=>(states[p.personId]?.errors||[]).map(message=>p.name+': '+message));
 content.innerHTML=activityDashboardView({stats:statsByKind[activityKind],month,kind:activityKind,live,demo:mealDemo,showAll:showAllMealHistory,errors});
 content.insertAdjacentHTML('afterbegin','<div id="dashboard-feedback"></div>');
 if(retainedFeedback){content.querySelector('#dashboard-feedback').replaceWith(retainedFeedback.node);feedbackController=retainedFeedback.controller;}
 else feedbackController=mountFeedbackCollection(content.querySelector('#dashboard-feedback'),{people:employees,toast,dashboard:true,viewState:feedbackViewState});
 content.querySelector('.meal-live-panel').insertAdjacentHTML('afterend','<div id="dashboard-receipts"></div>');
 receiptController=mountReceipts({root:content.querySelector('#dashboard-receipts'),month,months:data.months,person:signedInPerson,admin:true,people:mealPeople(data.roster,month),team,search,toast,viewState:receiptViewState,compact:true,roster:data.roster,scheduleRecords:allDrafts,onTeamChange:value=>{team=value;render();}});
}
function tickTimers(){
 if(!authSession||previewMode!=='admin'||view!=='admin-dashboard'||mealDemo)return;
 for(const el of document.querySelectorAll('[data-live-person]')){
  const active=readStaffState(localStorage,el.dataset.livePerson).active.find(r=>r.kind===el.dataset.liveKind);if(!active){render();return;}
  const state=timerState({active});el.querySelector('.meal-live-elapsed').textContent=clockText(state.elapsed);
  el.querySelector('.meal-live-over').textContent=active.kind==='meal'?(state.over?'60분 초과 '+clockText(state.over):'식사 기준 60분 이내'):'시간 제한 없음';
  el.classList.toggle('is-over',active.kind==='meal'&&state.over>0);
 }
}

function renderMeals(content){
 const rows=data.mealRows.filter(r=>matches(r));
 content.innerHTML=`<section class="panel"><div class="panel-heading"><div><h2>${previewMode==='employee'?'가져온 내 식대 내역':'가져온 직원별 식대 내역'}</h2><p>가져온 자료의 일별 보기입니다. 추가 입력까지 합친 현재 사용액·잔액은 맨 위에서 확인해요. 0원과 빈칸은 구분합니다.</p></div></div><div class="table-scroll"><table><thead><tr><th>직원</th><th>예시 팀</th><th>사용</th><th>한도</th><th>잔액</th><th>근무일수</th><th>입금 여부</th><th>상세</th></tr></thead><tbody>${rows.map(r=>`<tr><th>${esc(r.name)}${r.identityNeedsReview?badge('이름·팀 확인','subtle'):''}</th><td>${esc(r.rawTeam)}</td>${['사용','한도','잔액','근무일자','입금여부'].map(label=>`<td>${esc(display(r.totals[label]?.value))}</td>`).join('')}<td><button data-detail="${esc(r.id)}" data-kind="meals">일별 보기</button></td></tr>`).join('')}</tbody></table></div>${rows.length?'':empty()}</section>${localRecords('meals')}`;
 content.insertAdjacentHTML('afterbegin','<div id="meal-budget"></div><div id="receipt-area"></div>');
 const budgetRoot=content.querySelector('#meal-budget');
 function updateBudget(receipts,unavailable=false){const selectedId=previewMode==='admin'?receiptViewState.staffId:'',sourceRows=selectedId?rows.filter(r=>r.personId===selectedId):rows,legacy=localRows('meals').filter(r=>!selectedId||r.personId===selectedId),budget=mealBudget(sourceRows,[...legacy,...receipts]),money=v=>v===null?'확인 필요':number(v)+'원';budgetRoot.innerHTML=`<div class="metrics meal-budget">${metric(previewMode==='employee'?'이번 달 내 한도':'조회 직원 한도',money(budget.limit))}${metric('사용액',unavailable?'불러오기 필요':money(budget.used),'가져온 내역 + 추가 기록')}${metric('남은 잔액',unavailable?'불러오기 필요':money(budget.remaining),'기준 잔액에서 추가 사용액 차감')}</div><p class="budget-note">가져온 사용액 ${money(budget.sourceUsed)} · 추가 입력 ${number(budget.additional)}원. 사용 한도가 없는 월은 확인 필요로 표시합니다.</p>`;}
 updateBudget([],true);
 receiptController=mountReceipts({root:content.querySelector('#receipt-area'),month,months:data.months,person:signedInPerson,admin:previewMode==='admin',people:mealPeople(data.roster,month),team,search,toast,viewState:receiptViewState,roster:data.roster,scheduleRecords:allDrafts,onRows:rows=>updateBudget(rows),onLoadError:()=>updateBudget([],true),onTeamChange:value=>{team=value;render();}});
}
function renderAttendance(content){
 const rows=data.otRows.filter(r=>matches(r)),labels=[...new Set(rows.flatMap(r=>r.categories.map(c=>c.label)))];
 content.innerHTML=`<section class="panel"><div class="panel-heading"><div><h2>OT·지각 현황</h2><p>${rows.length}명 · 시간 단위는 분입니다. 이월·사용·지각·마감의 예시 부호를 그대로 유지합니다.</p></div>${badge('단위: 분')}</div><div class="table-scroll"><table><thead><tr><th>직원 / 예시 팀</th>${labels.map(l=>`<th>${esc(l)}</th>`).join('')}<th>상세</th></tr></thead><tbody>${rows.map(r=>`<tr><th>${esc(r.name)}<small>${esc(r.rawTeam)}</small>${r.identityNeedsReview?badge('이름·팀 확인','subtle'):''}</th>${labels.map(l=>`<td>${esc(display(r.categories.find(c=>c.label===l)?.total))}</td>`).join('')}<td><button data-detail="${esc(r.id)}" data-kind="attendance">일별 보기</button></td></tr>`).join('')}</tbody></table></div>${rows.length?'':empty()}</section>${localRecords('attendance')}`;
}
function localRecords(kind){const rows=kind==='schedule'?scheduleGroups(localRows(kind)):localRows(kind);return `<section class="panel local-records"><div class="panel-heading"><div><h2>이 브라우저에서 추가한 기록</h2><p>가져온 예시 합계와 구분해 표시합니다.</p></div>${badge(`${rows.length}건`)}</div>${rows.length?`<div class="table-scroll"><table><thead><tr><th>날짜</th><th>직원</th><th>내용</th><th>메모</th>${kind==='schedule'?'<th>관리</th>':''}</tr></thead><tbody>${rows.map(r=>`<tr><td>${esc(kind==='schedule'?(r.override?`${r.from} → ${r.date}`:scheduleSpan(r)):r.date)}</td><th>${esc(r.name)}</th><td>${esc(r.label)}${r.override?' · 시트 일정 옮김':''}${r.amount!==undefined?' · '+esc(number(r.amount))+(kind==='meals'?'원':'분'):''}</td><td class="prewrap">${esc(r.note)}</td>${kind==='schedule'?`<td>${scheduleActions(r)||'—'}</td>`:''}</tr>`).join('')}</tbody></table></div>`:empty('추가한 기록이 없습니다.')}</section>`;}
function showDetail(kind,id){
 const rows=(kind==='meals'?data.mealRows:data.otRows).filter(r=>previewMode==='admin'||r.personId===signedInPerson.personId),initialRow=rows.find(r=>r.id===id);if(!initialRow)return;
 let localRecords=[];try{localRecords=readDraft();}catch(error){toast(error.message);}
 dialogVersion++;openDailyDetail({kind,initialRow,rows,months:data.months,localRecords,readRecords:readDraft,storageKey:LOCAL_KEY});
}
function openDialog(title,body){
 dialogVersion++;const container=document.querySelector('#overlays');container.querySelector('dialog')?.close();container.innerHTML=`<dialog aria-labelledby="dialog-title"><div class="dialog-heading"><h2 id="dialog-title">${esc(title)}</h2><button data-action="close" aria-label="닫기">닫기 ✕</button></div><div class="dialog-body">${body}</div></dialog>`;const dialog=container.querySelector('dialog');dialog.showModal();dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});return dialog;
}
async function rawData(source){const key=`${source.book}-${source.tab}`;if(rawCache.has(key))return rawCache.get(key);const meta=data.sources.find(s=>s.book===source.book&&s.tab===source.tab);if(!meta)throw new Error('해당 예시 탭을 찾을 수 없습니다.');const response=await fetch(`./source-data/${encodeURIComponent(meta.file)}`);if(!response.ok)throw new Error(`예시 자료를 불러오지 못했습니다 (${response.status}).`);const raw=await response.json();rawCache.set(key,raw);return raw;}
function rawColor(raw,coord){const cell=raw.cells[coord],style=raw.styles[raw.colored[coord]??cell?.s];return raw.effectiveColors?.[coord]||style?.resolvedFill||style?.fill?.rgb?.slice(-6)||'';}
async function showSource(source){
 openDialog(`${source.tab} · ${source.cell}`, '<p>예시 셀을 불러오는 중입니다…</p>');const version=dialogVersion;
 try{const raw=await rawData(source);if(version!==dialogVersion)return;const cell=raw.cells[source.cell],color=rawColor(raw,source.cell),meta=data.sources.find(s=>s.book===source.book&&s.tab===source.tab);document.querySelector('.dialog-body').innerHTML=`<p>${esc(meta.label)} / ${esc(source.tab)} / ${esc(source.cell)}</p><dl><dt>예시 값</dt><dd class="prewrap">${esc(display(cell?.v))}</dd><dt>예시 색상</dt><dd>${swatch(color)} ${esc(color?'#'+color:'지정 없음')}</dd><dt>수식</dt><dd class="prewrap">${esc(cell?.f||'없음')}</dd><dt>메모</dt><dd class="prewrap">${esc(cell?.note||'없음')}</dd></dl><a class="button" href="${esc(meta.url)}" target="_blank" rel="noopener noreferrer">검수 안내 보기 ↗</a>`;}catch(error){if(version===dialogVersion)document.querySelector('.dialog-body').textContent=error.message;}
}
function renderSources(content){
 const review=[...data.mealRows,...data.otRows].filter(r=>r.identityNeedsReview&&matches(r)),issues=data.issues.filter(issue=>data.mealRows.some(r=>matches(r)&&r.source.book===issue.source.book&&r.source.tab===issue.source.tab&&r.source.cell===issue.source.cell));
 content.innerHTML=`<div class="metrics">${metric('예시 전체',`${data.audit.tabs}개 탭`,'스케줄 12 · 식대 13 · OT/지각 12')}${metric('보존한 셀',`${number(data.audit.importedCells)}개`,'예시와 셀 값 일치 검사 완료')}${metric('메모 / 수식',`${number(data.audit.notes)} / ${number(data.audit.formulas)}`,'예시 XLSX와 출처 좌표 보존')}</div><section class="panel"><div class="panel-heading"><div><h2>연결·합계 확인</h2><p>선택한 월·팀의 확인 항목입니다. 확인 전에는 예시을 그대로 유지합니다.</p></div></div>${issues.map(i=>`<div class="notice">${esc(i.name)} · ${esc(i.kind)}: 예시 ${number(i.sourceTotal)}원 / 일별 합 ${number(i.dailySum)}원 ${sourceButton(i.source)}</div>`).join('')}${review.length?`<div class="review-list">${review.map(r=>`<span>${esc(r.name)} · ${esc(r.rawTeam)} ${sourceButton(r.source,'이름·팀 확인')}</span>`).join('')}</div>`:empty('이 조건에서 이름·팀 연결 확인 항목이 없습니다.')}<p class="panel-foot">예시 색상은 모두 보존했습니다. 범례와 일치하지 않는 색은 의미를 임의 지정하지 않았습니다.</p></section><section class="panel"><div class="panel-heading"><div><h2>예시 탭 전체 보기</h2><p>이 영역은 팀 필터 없이 선택한 탭 전체를 보여줍니다. 표 아래의 추가 기록도 포함합니다.</p></div></div><div class="source-controls"><label>예시<select id="source-book">${[['schedule','스케줄'],['meals','식대'],['attendance','OT/지각']].map(([k,l])=>`<option value="${k}" ${sourceBook===k?'selected':''}>${l}</option>`).join('')}</select></label><label>탭<select id="source-tab">${data.sources.filter(s=>s.book===sourceBook).map(s=>`<option value="${s.tab}" ${(sourceTab||month)===s.tab?'selected':''}>${esc(s.tab==='참고용'?'참고용':monthText(s.tab))}</option>`).join('')}</select></label><label>셀·내용 검색<input id="source-query" value="${esc(sourceQuery)}" placeholder="예: A320 또는 직원 이름" maxlength="100"></label><button data-action="source-search">검색</button></div><div id="raw-table">예시을 불러오는 중입니다…</div></section>`;
 loadRawTable();
}
function coordSort(a,b){const row=s=>Number(s.match(/\d+$/)?.[0]),col=s=>s.match(/^[A-Z]+/)?.[0]||'';return row(a)-row(b)||col(a).length-col(b).length||col(a).localeCompare(col(b));}
async function loadRawTable(){const version=renderVersion,source={book:sourceBook,tab:sourceTab||month},token=++loadRawTable.token;try{const raw=await rawData(source);if(version!==renderVersion||token!==loadRawTable.token)return;
 const coords=[...new Set([...Object.keys(raw.cells),...Object.keys(raw.colored),...Object.keys(raw.effectiveColors||{})])].sort(coordSort).filter(coord=>!sourceQuery||coord.toLowerCase()===sourceQuery.toLowerCase()||[raw.cells[coord]?.v,raw.cells[coord]?.f,raw.cells[coord]?.note].some(value=>String(value??'').includes(sourceQuery)));
 const pageSize=60,pages=Math.max(1,Math.ceil(coords.length/pageSize));sourcePage=Math.min(sourcePage,pages-1);
 document.querySelector('#raw-table').innerHTML=`<div class="raw-summary"><span>검색 ${number(coords.length)}셀 · ${sourcePage+1} / ${pages}쪽</span><div><button data-action="raw-prev" ${sourcePage===0?'disabled':''}>이전</button><button data-action="raw-next" ${sourcePage+1>=pages?'disabled':''}>다음</button></div></div><div class="table-scroll"><table class="raw-table"><thead><tr><th>셀</th><th>예시 값</th><th>색상</th><th>수식</th><th>메모</th></tr></thead><tbody>${coords.slice(sourcePage*pageSize,(sourcePage+1)*pageSize).map(coord=>{const c=raw.cells[coord];return`<tr><th>${sourceButton({...source,cell:coord},coord)}</th><td class="prewrap">${esc(display(c?.v))}</td><td>${swatch(rawColor(raw,coord))}</td><td class="prewrap">${esc(c?.f||'—')}</td><td class="prewrap">${esc(c?.note||'—')}</td></tr>`;}).join('')}</tbody></table></div>${coords.length?'':empty()}`;labelMobileTables(document.querySelector('#raw-table'));
 }catch(error){if(version===renderVersion&&token===loadRawTable.token)document.querySelector('#raw-table').textContent=error.message;}}
loadRawTable.token=0;
function openEntry(kind=view==='meals'?'meals':view==='attendance'?'attendance':'schedule',date,personId='',leaveOnly=false,editing=null){
 const defaultDate=date||(monthOf(today())===month?today():dateOf(month)),people=kind==='schedule'?scheduleCandidates(monthOf(defaultDate)):previewMode==='employee'?[signedInPerson]:schedulePeople(monthOf(defaultDate));
 if(!people.length){toast('선택한 조건의 스케줄 명부에 직원이 없습니다. 팀·검색 조건을 변경해 주세요.');return;}
 const fixed=editing?people.find(p=>p.personId===editing.personId):previewMode==='employee'&&(kind!=='schedule'||people.length===1)?signedInPerson:null;
 if(editing&&!fixed){toast('이 일정을 수정할 권한이 없습니다.');return;}
 const minDate=dateOf(data.months[0]),maxDate=dateOf(data.months.at(-1),lastDay(data.months.at(-1))),labels=leaveOnly?['휴무','연차','오전 반차','오후 반차']:['휴무','연차','오전 반차','오후 반차','근무','팀 일정','기타'];
 openDialog(editing?'일정 수정':`${leaveOnly?'직원 휴무':kind==='schedule'?'일정':kind==='meals'?'식대':'OT·지각'} 등록`,`<form id="entry-form" data-kind="${kind}" data-group="${esc(editing?.groupId||'')}"><div class="form-grid">${fixed?`<label>직원<input value="${esc(fixed.name)}" readonly><input type="hidden" name="person" value="${esc(fixed.personId)}"></label>`:`<label>직원<select name="person" required>${people.map(r=>`<option value="${esc(r.personId)}">${esc(r.name)} · ${esc(r.rawTeam)}</option>`).join('')}</select></label>`}<label>${kind==='schedule'?'시작일':'날짜'}<input name="date" type="date" value="${defaultDate}" required min="${minDate}" max="${maxDate}"></label>${kind==='schedule'?`<label>종료일<input name="end" type="date" value="${editing?.end||defaultDate}" required min="${defaultDate}" max="${maxDate}"></label><label>일정<select name="label">${labels.map(l=>`<option ${l===editing?.label?'selected':''}>${l}</option>`).join('')}</select></label>`:kind==='attendance'?'<label>구분<select name="label"><option>OT</option><option>공휴일 OT</option><option>OT 사용</option><option>지각</option><option>조정</option></select></label>':''}${kind!=='schedule'?`<label>${kind==='meals'?'금액 (원)':'시간 (분)'}<input name="amount" type="number" required min="${kind==='meals'?0:-1000000}" max="100000000" step="1" inputmode="numeric"></label>`:''}<label class="full">메모<textarea name="note" rows="3" maxlength="2000" placeholder="필요한 내용을 남겨 주세요.">${esc(editing?.note||'')}</textarea></label></div><p class="notice">${kind==='schedule'?'하루만 등록하려면 종료일을 시작일과 같게 두세요. ':''}가져온 예시와 구분해 이 브라우저에 저장합니다.${kind==='attendance'?' OT 사용·지각은 양수로 입력해도 음수로 기록합니다.':''}</p><div class="form-actions"><button type="button" data-action="close">취소</button><button class="primary" type="submit">${editing?'저장하기':'등록하기'}</button></div><p class="form-error" role="alert"></p></form>`);
 if(personId&&people.some(p=>p.personId===personId)){const field=document.querySelector('#entry-form [name=person]');if(field)field.value=personId;}
}
document.addEventListener('submit',async event=>{
 if(event.target.id!=='entry-form'||!authSession)return;const revision=sessionRevision;event.preventDefault();const form=event.target,button=form.querySelector('[type=submit]');if(button.disabled)return;button.disabled=true;
 try{const values=new FormData(form),kind=form.dataset.kind,date=String(values.get('date'));if(!/^20\d{2}-\d{2}-\d{2}$/.test(date)||localDate(new Date(date+'T12:00:00'))!==date)throw new Error('날짜를 확인해 주세요.');if(!data.months.includes(monthOf(date)))throw new Error('조회 가능한 월의 날짜로 등록해 주세요.');const person=kind==='schedule'?scheduleCandidates(monthOf(date)).find(p=>p.personId===values.get('person')):previewMode==='employee'?(values.get('person')===signedInPerson.personId?signedInPerson:null):schedulePeople(monthOf(date)).find(p=>p.personId===values.get('person'));if(!person)throw new Error('해당 월의 직원을 다시 선택해 주세요.');const label=String(values.get('label')||(kind==='meals'?'식대':''));let amount=kind==='schedule'?undefined:Number(values.get('amount'));if(kind!=='schedule'&&(!Number.isSafeInteger(amount)||Math.abs(amount)>100000000||(kind==='meals'&&amount<0)))throw new Error('금액 또는 시간을 확인해 주세요.');if(kind==='attendance'&&['OT 사용','지각'].includes(label))amount=-Math.abs(amount);
 const end=kind==='schedule'?String(values.get('end')||date):date;if(kind==='schedule'){if(!/^20\d{2}-\d{2}-\d{2}$/.test(end)||localDate(new Date(end+'T12:00:00'))!==end||end<date)throw new Error('종료일은 시작일과 같거나 이후여야 합니다.');if(!data.months.includes(monthOf(end)))throw new Error('조회 가능한 월의 날짜로 등록해 주세요.');}
 const group=form.dataset.group||'',note=String(values.get('note')).trim(),createdAt=new Date().toISOString();
 const rows=kind==='schedule'?scheduleRows({person,start:date,end,label,note,groupId:group||crypto.randomUUID(),createdAt},()=>crypto.randomUUID()):[{id:crypto.randomUUID(),kind,personId:person.personId,name:person.name,teams:person.teams,rawTeam:person.rawTeam,date,month:monthOf(date),label,note,amount,local:true,createdAt}];
 await saveDraft(rows,()=>{if(revision!==sessionRevision||!authSession)throw new Error('로그인 상태가 변경됐습니다. 다시 로그인해 주세요.');if(kind==='schedule'&&!scheduleCandidates(monthOf(date)).some(p=>p.personId===person.personId))throw new Error('팀 일정 등록 권한이 변경됐습니다. 직원을 다시 확인해 주세요.');},group);if(revision!==sessionRevision)return;month=monthOf(date);document.querySelector('dialog')?.close();render();toast(group?'일정을 수정했습니다.':'등록했습니다.');
 }catch(error){form.querySelector('.form-error').textContent=error.message;}finally{button.disabled=false;}
});
document.addEventListener('click',async event=>{
 const target=event.target.closest('button');if(!target)return;
 if(target.dataset.action==='retry'){location.reload();return;}
 if(target.dataset.action==='logout'){changeSession(null);return;}
 if(!authSession)return;
 const revision=sessionRevision;
 if(target.dataset.scheduleAdd){openEntry('schedule',target.dataset.scheduleAdd,target.dataset.schedulePerson);return;}
 if(target.dataset.scheduleEdit){const group=scheduleGroups(allDrafts()).find(g=>g.groupId===target.dataset.scheduleEdit);if(!group||!canEditSchedule(group)){toast('수정할 수 있는 일정이 아닙니다.');return;}openEntry('schedule',group.start,group.personId,false,group);return;}
 if(target.dataset.scheduleDelete){const group=scheduleGroups(allDrafts()).find(g=>g.groupId===target.dataset.scheduleDelete);if(!group||!canEditSchedule(group)){toast('삭제할 수 있는 일정이 아닙니다.');return;}openDialog('일정 삭제',`<p>${esc(group.name)} · ${esc(group.label)} · ${esc(scheduleSpan(group))}</p><p>이 일정을 삭제할까요? 삭제한 일정은 되돌릴 수 없습니다.</p><div class="form-actions"><button type="button" data-action="close">취소</button><button type="button" class="primary" data-schedule-delete-confirm="${esc(group.groupId)}">삭제하기</button></div>`);return;}
 if(target.dataset.scheduleRevert){const id=target.dataset.scheduleRevert;target.disabled=true;try{await removeDraftGroup(id,()=>{if(revision!==sessionRevision||!authSession)throw new Error('로그인 상태가 변경됐습니다. 다시 로그인해 주세요.');const g=scheduleGroups(readDraft()).find(x=>x.groupId===id);if(g&&!canEditSchedule(g))throw new Error('되돌릴 권한이 변경됐습니다.');});if(revision!==sessionRevision)return;document.querySelector('dialog')?.close();render();toast('원래 날짜로 되돌렸습니다.');}catch(e){if(revision===sessionRevision)toast(e.message);}finally{target.disabled=false;}return;}
 if(target.dataset.scheduleDeleteConfirm){const id=target.dataset.scheduleDeleteConfirm;target.disabled=true;try{await removeDraftGroup(id,()=>{if(revision!==sessionRevision||!authSession)throw new Error('로그인 상태가 변경됐습니다. 다시 로그인해 주세요.');const g=scheduleGroups(readDraft()).find(x=>x.groupId===id);if(g&&!canEditSchedule(g))throw new Error('일정 삭제 권한이 변경됐습니다.');});if(revision!==sessionRevision)return;document.querySelector('dialog')?.close();render();toast('일정을 삭제했습니다.');}catch(e){if(revision===sessionRevision)toast(e.message);}finally{target.disabled=false;}return;}
 if(target.dataset.rosterRow){const row=data.roster.find(r=>r.id===target.dataset.rosterRow);if(row&&(!personalView()||row.personId===signedInPerson.personId))showRosterDay(row,Number(target.dataset.rosterDay));return;}
 if(target.dataset.source){await showSource(JSON.parse(target.dataset.source));return;}
 if(target.dataset.detail){showDetail(target.dataset.kind,target.dataset.detail);return;}
 if(target.dataset.staffKind||target.dataset.adminEndConfirm){
  const admin=!!target.dataset.adminEndConfirm,id=admin?target.dataset.personId:signedInPerson.personId,kind=admin?target.dataset.adminEndConfirm:target.dataset.staffKind,action=admin?'end':target.dataset.staffAction;
  if(admin?(previewMode!=='admin'||view!=='admin-dashboard'||mealDemo||!data.roster.some(p=>p.personId===id)):(view!=='meal-timer'||previewMode!=='employee'))return;
  if(!admin&&kind!=='meal'&&action!=='end')return;
  if(pendingMeals.has(id))return;pendingMeals.add(id);target.disabled=true;
  if(!admin&&kind==='meal'){const before=readStaffState(localStorage,id).active.find(r=>r.kind==='meal');mealTransitionFrom=!before?'off':Number.isFinite(before.pausedAt)?'paused':'on';}
  try{await updateStaffActivity(localStorage,id,kind,action,navigator.locks,()=>Date.now(),action!=='start'?target.dataset.expectedActive:undefined);if(revision!==sessionRevision)return;mealDemo=false;if(admin)document.querySelector('dialog')?.close();if(['meal-timer','admin-dashboard'].includes(view))render();toast(ACTIVITY_TYPES[kind].label+objectParticle(ACTIVITY_TYPES[kind].label)+({start:' 시작했습니다.',end:' 종료했습니다.',pause:' 중단했습니다.',resume:' 다시 시작했습니다.'})[action]);}catch(e){mealTransitionFrom='';if(revision===sessionRevision)toast(e.message);}finally{pendingMeals.delete(id);target.disabled=false;}return;
 }
 if(target.dataset.adminEnd){if(previewMode!=='admin'||mealDemo)return;const p=mealPeople(data.roster,month).find(r=>r.personId===target.dataset.personId),kind=target.dataset.adminEnd;if(!p||!ACTIVITY_TYPES[kind])return;openDialog('상태 종료 처리',`<p>${esc(p.name)} 님의 ${ACTIVITY_TYPES[kind].label}을 지금 시각으로 종료할까요?</p><div class="form-actions"><button data-action="close">취소</button><button class="primary" data-admin-end-confirm="${kind}" data-expected-active="${esc(target.dataset.activeId)}" data-person-id="${esc(p.personId)}">종료 기록하기</button></div>`);return;}
 if(target.dataset.calendarTab){if(['leave','status'].includes(target.dataset.calendarTab)){calendarTab=target.dataset.calendarTab;render();}return;}
 if(target.dataset.activityTab){if(ACTIVITY_TYPES[target.dataset.activityTab]){activityKind=target.dataset.activityTab;showAllMealHistory=false;render();}return;}
 switch(target.dataset.action){case'receipt-new':receiptController?.newEntry();break;case'meal-demo':mealDemo=!mealDemo;showAllMealHistory=false;render();break;case'meal-history-all':showAllMealHistory=!showAllMealHistory;render();break;case'retry':location.reload();break;case'close':document.querySelector('dialog')?.close();dialogVersion++;break;case'staff-leave':openSchedulePicker(true);break;case'new':if(['team-calendar','roster'].includes(view))openSchedulePicker();else openEntry();break;case'source-search':sourceQuery=document.querySelector('#source-query').value.trim();sourcePage=0;loadRawTable();break;case'raw-prev':sourcePage=Math.max(0,sourcePage-1);loadRawTable();break;case'raw-next':sourcePage++;loadRawTable();break;}
});
document.addEventListener('change',event=>{
 if(!authSession)return;
 if(event.target.matches('#entry-form [name=date]')){const end=document.querySelector('#entry-form [name=end]');if(end){end.min=event.target.value;if(end.value<event.target.value)end.value=event.target.value;}}
 if(event.target.matches('#entry-form [name=date]')&&document.querySelector('#entry-form select[name=person]')){const select=document.querySelector('#entry-form [name=person]'),selected=select.value,people=document.querySelector('#entry-form').dataset.kind==='schedule'?scheduleCandidates(monthOf(event.target.value)):schedulePeople(monthOf(event.target.value));select.innerHTML='<option value="">직원을 선택해 주세요</option>'+people.map(p=>'<option value="'+esc(p.personId)+'">'+esc(p.name)+' · '+esc(p.rawTeam)+'</option>').join('');select.value=people.some(p=>p.personId===selected)?selected:'';return;}
 const {id,value}=event.target;if(id==='month-filter'){month=value;sourceTab='';sourcePage=0;if(team!=='전체'&&!teamOptions().includes(team))team='전체';render();}if(id==='team-filter'){team=value;render();}if(id==='source-book'){sourceBook=value;sourceTab='';sourcePage=0;render();}if(id==='source-tab'){sourceTab=value;sourcePage=0;loadRawTable();}});
let searchTimeout,composing=false;
function scheduleSearch(event){if(event.target.id!=='staff-search')return;clearTimeout(searchTimeout);if(composing||event.isComposing)return;const value=event.target.value,caret=event.target.selectionStart;searchTimeout=setTimeout(()=>{search=value.trim();const focused=document.activeElement?.id==='staff-search';render();if(focused){const el=document.querySelector('#staff-search');el.focus();el.setSelectionRange(caret,caret);}},250);}
// Press-and-drag an app-registered chip in the roster to another day of the same person. Pointer events cover mouse and touch.
let drag=null,swallowClick=false;
document.addEventListener('pointerdown',event=>{
 const chip=event.target.closest('[data-drag-group],[data-drag-source]');if(!chip||!authSession||!['roster','meals'].includes(view)||event.button!==0)return;
 drag={chip,groupId:chip.dataset.dragGroup||'',source:chip.dataset.dragSource?JSON.parse(chip.dataset.dragSource):null,personId:chip.dataset.dragPerson,startX:event.clientX,startY:event.clientY,pointerId:event.pointerId,active:false,ghost:null,target:null};
 try{chip.setPointerCapture(event.pointerId);}catch{}
});
document.addEventListener('pointermove',event=>{
 if(!drag||event.pointerId!==drag.pointerId)return;
 if(!drag.active){if(Math.hypot(event.clientX-drag.startX,event.clientY-drag.startY)<6)return;drag.active=true;drag.chip.classList.add('is-dragging');document.body.classList.add('is-dragging-schedule');getSelection()?.removeAllRanges();const ghost=drag.chip.cloneNode(true);ghost.classList.remove('is-dragging');ghost.classList.add('drag-ghost');document.body.append(ghost);drag.ghost=ghost;}
 drag.ghost.style.left=event.clientX+'px';drag.ghost.style.top=event.clientY+'px';
 const cell=document.elementFromPoint(event.clientX,event.clientY)?.closest('[data-drop-date]'),ok=!!cell&&cell.dataset.dropPerson===drag.personId;
 if(drag.target&&drag.target!==cell)drag.target.classList.remove('is-drop-target');
 if(ok)cell.classList.add('is-drop-target');drag.target=ok?cell:null;
 event.preventDefault();
});
async function finishDrag(event){
 if(!drag||event.pointerId!==drag.pointerId)return;const d=drag;drag=null;
 d.chip.classList.remove('is-dragging');document.body.classList.remove('is-dragging-schedule');d.ghost?.remove();d.target?.classList.remove('is-drop-target');
 if(!d.active)return;swallowClick=true;setTimeout(()=>{swallowClick=false;},0);
 if(event.type==='pointercancel'||!d.target)return;
 const revision=sessionRevision,newStart=d.target.dataset.dropDate;
 const guard=()=>{if(revision!==sessionRevision||!authSession)throw new Error('로그인 상태가 변경됐습니다. 다시 로그인해 주세요.');};
 try{
  if(d.source){
   const person=data.roster.find(r=>r.personId===d.personId&&r.month===monthOf(d.source.from))||employees.find(p=>p.personId===d.personId);
   if(!person||!scheduleCandidates(monthOf(d.source.from)).some(p=>p.personId===d.personId))throw new Error('옮길 수 있는 일정이 아닙니다.');
   const entry={...d.source,personId:d.personId,name:person.name,teams:person.teams,rawTeam:person.rawTeam};
   await moveOriginalDraft(entry,newStart,guard);if(newStart!==d.source.from)recordMove(d.source.label,g=>moveOriginalDraft(entry,d.source.from,g));
   if(revision!==sessionRevision)return;render();toast(newStart===d.source.from?'원래 날짜로 되돌렸습니다.':`${d.source.label} 일정을 ${newStart}으로 옮겼습니다. 시트는 그대로예요. ${UNDO_HINT}`);return;
  }
  const group=scheduleGroups(allDrafts()).find(g=>g.groupId===d.groupId);if(!group||!canEditSchedule(group))throw new Error('옮길 수 있는 일정이 아닙니다.');
  if(group.override&&newStart===group.from){await removeDraftGroup(group.groupId,guard);recordMove(group.label,g=>moveOriginalDraft(overrideEntry(group),group.start,g));if(revision!==sessionRevision)return;render();toast('원래 날짜로 되돌렸습니다.');return;}
  const moved=await moveDraftGroup(d.groupId,newStart,guard);if(moved)recordMove(group.label,g=>moveDraftGroup(d.groupId,group.start,g));
  if(revision!==sessionRevision)return;if(moved){render();toast(`${group.label} 일정을 ${newStart}${group.days>1?' 시작':''}으로 옮겼습니다. ${UNDO_HINT}`);}
 }catch(e){if(revision===sessionRevision)toast(e.message);}
}
document.addEventListener('pointerup',finishDrag);document.addEventListener('pointercancel',finishDrag);
document.addEventListener('click',event=>{if(swallowClick){event.stopPropagation();event.preventDefault();}},true);
document.addEventListener('compositionstart',event=>{if(event.target.id==='staff-search'){composing=true;clearTimeout(searchTimeout);}});
document.addEventListener('compositionend',event=>{if(event.target.id==='staff-search'){composing=false;scheduleSearch(event);}});
document.addEventListener('input',scheduleSearch);
document.addEventListener('keydown',event=>{if(event.key==='Enter'&&event.target.id==='source-query'){event.preventDefault();sourceQuery=event.target.value.trim();sourcePage=0;loadRawTable();}});
addEventListener('hashchange',render);addEventListener('storage',event=>{
 if(!data||!authSession)return;
 if(event.key===RECEIPT_SIGNAL){receiptController?.refresh();return;}
 if([EXPENSE_KEY,EXPENSE_CONFIG_KEY].includes(event.key)){expenseController?.refresh();return;}
 if(event.key===SNACK_KEY){snackController?.refresh();return;}
 if(event.key===TEAM_SETTINGS_KEY){const form=document.querySelector('[data-team-editor-form]');if(form)form.querySelector('.form-error').textContent='다른 탭에서 담당자 설정이 변경됐습니다. 새로고침 후 확인해 주세요.';return;}
 if(event.key===LOCAL_KEY){if(['team-snacks','expenses'].includes(view))return;if(view==='meals'){receiptController?.refresh();const area=document.querySelector('.local-records');if(area){area.outerHTML=localRecords('meals');labelMobileTables(document.querySelector('.local-records'));}return;}render();return;}
 if((event.key?.startsWith(MEAL_PREFIX)||event.key?.startsWith(ACTIVITY_PREFIX))&&(['meal-timer','admin-dashboard'].includes(view)||(view==='team-calendar'&&calendarTab==='status')))render();
});
setInterval(tickTimers,1000);
async function start(){try{const response=await fetch('./clinic-data.json');if(!response.ok)throw new Error(`자료 응답 ${response.status}`);data=await response.json();employees=employeeDirectory(data.roster);try{authSession=restorePreviewSession(sessionStorage,employees);}catch{}previewMode=authSession?.role||'employee';signedInPerson=employees.find(p=>p.personId===authSession?.personId);month=data.months.includes(monthOf(today()))?monthOf(today()):data.months.at(-1);document.title='뷰티블라썸 · 직원 업무';render();}catch(error){app.innerHTML=`<main class="load-error"><h1>직원 자료를 불러오지 못했습니다.</h1><p>${esc(error.message)}</p><button data-action="retry">다시 불러오기</button></main>`;}}
start();
