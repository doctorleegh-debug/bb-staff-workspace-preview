import {clockText,MEAL_LIMIT_MS} from './meal-timer.js';
import {mealDate} from './meal-dashboard.js';
const esc=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const time=timestamp=>new Date(timestamp).toLocaleTimeString('ko-KR',{timeZone:'Asia/Seoul',hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:false});
const duration=ms=>ms===null?'—':clockText(ms);
const monthLabel=month=>`20${month.slice(0,2)}년 ${Number(month.slice(2))}월`;
const metric=(label,value,detail)=>`<div class="meal-stat"><span>${esc(label)}</span><strong>${esc(value)}</strong><small>${esc(detail)}</small></div>`;

export function employeeMealView({people,selectedPerson,record}){
 const person=people.find(p=>p.personId===selectedPerson),active=!!record?.active;
 return `<section class="employee-meal panel"><div class="panel-heading"><div><h2>내 식사 상태</h2><p>식사를 시작할 때 누르고, 돌아오면 종료해 주세요.</p></div></div>
  <div class="employee-meal-body"><label>직원 선택 <span class="field-hint">화면 검수용</span><select id="meal-self"><option value="">본인을 선택해 주세요</option>${people.map(p=>`<option value="${esc(p.personId)}" ${p.personId===selectedPerson?'selected':''}>${esc(p.name)} · ${esc(p.rawTeam)}${p.recoveryOnly?' · 이전 명부 식사 종료':''}</option>`).join('')}</select></label>
  ${person?.recoveryOnly?'<p class="notice">이전 명부에서 시작한 식사가 있습니다. 이 기록을 종료한 뒤 현재 명부의 본인을 선택해 주세요.</p>':''}
  ${person?`<div class="employee-meal-state ${active?'is-eating':''}"><span class="meal-state-symbol" aria-hidden="true">${active?'◌':'✓'}</span><h3>${esc(person.name)} 님</h3><p role="status">${active?'식사중입니다.':record?.history.length?'복귀 상태입니다.':'식사 전입니다.'}</p><button class="${active?'end-meal':'primary'} meal-button" data-meal="${active?'end':'start'}" data-person-id="${esc(person.personId)}" ${record?.error?'disabled':''}>${active?'식사종료':'식사중'}</button>${record?.error?`<p class="form-error" role="alert">${esc(record.error)}</p>`:''}</div>`:'<div class="empty">직원을 선택하면 식사 버튼이 나타납니다.</div>'}
  <p class="meal-record-notice">식사 시작·종료 이력은 관리자에게 기록됩니다.</p></div></section>`;
}

function historyTable(records){
 return `<div class="table-scroll"><table><thead><tr><th>직원 / 팀</th><th>시작일</th><th>시작 시각</th><th>종료 시각</th><th>식사 시간</th><th>60분 초과</th></tr></thead><tbody>${records.map(r=>`<tr><th>${esc(r.person.name)}<small>${esc(r.person.rawTeam)}</small></th><td>${esc(r.date)}</td><td>${time(r.startedAt)}</td><td>${mealDate(r.endedAt)!==r.date?esc(mealDate(r.endedAt))+'<br>':''}${time(r.endedAt)}</td><td>${duration(r.elapsed)}</td><td>${r.elapsed>MEAL_LIMIT_MS?`<span class="meal-over">${duration(r.elapsed-MEAL_LIMIT_MS)}</span>`:'—'}</td></tr>`).join('')}</tbody></table></div>`;
}
export function managerMealView({stats,month,demo,showAll}){
 const {active,completed,totals,staff,days}=stats,maxDaily=Math.max(MEAL_LIMIT_MS,...days.map(d=>d.average));
 return `<div class="meal-admin-toolbar"><p>식사 현황과 기록을 한곳에서 확인합니다.</p><button data-action="meal-demo">${demo?'브라우저 기록으로 돌아가기':'예시 통계 보기'}</button></div>
 ${demo?'<div class="notice"><strong>예시 통계</strong> · 화면 검수용으로 만든 기록입니다. 직원의 실제 식사 시간이나 저장된 기록을 변경하지 않습니다.</div>':'<p class="meal-preview-note">현재는 이 브라우저에서 기록한 내역만 표시됩니다. 기기 간 공유와 관리자 접근 권한은 로그인 연결 후 적용됩니다.</p>'}
 ${stats.errors.length?`<div class="notice" role="alert">식사 기록을 확인해야 하는 직원 ${stats.errors.length}명이 있습니다. 해당 직원의 기존 저장값은 보존했고 통계에서 제외했습니다.<ul>${stats.errors.map(e=>`<li>${esc(e.person.name)}: ${esc(e.error)}</li>`).join('')}</ul></div>`:''}
 <section class="panel meal-live-panel"><div class="panel-heading"><div><h2>지금 식사중 <span class="meal-live-count">${active.length}명</span></h2><p>선택한 팀·직원 기준의 현재 상태입니다. 조회 월과 관계없이 표시합니다.</p></div><span class="badge">기준 60분</span></div>
 ${active.length?`<div class="meal-live-grid">${active.map(r=>`<article class="meal-live-card ${r.over?'is-over':''}" data-live-person="${esc(r.person.personId)}"><div class="meal-live-staff"><div><h3>${esc(r.person.name)}</h3><p>${esc(r.person.rawTeam)}</p></div><span class="badge">식사중</span></div><span class="meal-live-label">경과 시간</span><strong class="meal-live-elapsed">${duration(r.elapsed)}</strong><p class="meal-live-start">시작 ${mealDate(r.startedAt)} ${time(r.startedAt)}</p><p class="meal-live-over">${r.over?'60분 초과 '+duration(r.over):'기준 시간 이내'}</p></article>`).join('')}</div>`:'<p class="empty">현재 식사중인 직원이 없습니다.</p>'}</section>
 <div class="meal-section-heading"><h2>${monthLabel(month)} 식사 통계</h2><p>완료한 식사만 집계합니다. 시간은 분:초, 월은 한국 시각의 시작일 기준입니다.</p></div>
 <div class="meal-stats">${metric('완료한 식사',`${totals.count}회`,`${stats.peopleCount}명 기록`)}${metric('평균 식사시간',duration(totals.count?totals.average:null),'완료 기록 전체 평균')}${metric('누적 식사시간',duration(totals.count?totals.total:null),'분:초')}${metric('60분 초과',`${totals.overCount}회`,'정확히 60분은 제외')}${metric('초과 시간 합계',duration(totals.overTotal),'60분을 넘은 부분만 합산')}${metric('최장 식사시간',duration(totals.count?totals.longest:null),'완료 기록 기준')}</div>
 <section class="panel"><div class="panel-heading"><div><h2>직원별 월간 기록</h2><p>같은 직원은 한 번만 집계하며, 기록이 없으면 평균을 표시하지 않습니다.</p></div></div>
 ${staff.length?`<div class="table-scroll"><table><thead><tr><th>직원 / 팀</th><th>완료 횟수</th><th>평균 시간</th><th>누적 시간</th><th>최장 시간</th><th>60분 초과</th></tr></thead><tbody>${staff.map(r=>`<tr><th>${esc(r.person.name)}<small>${esc(r.person.rawTeam)}</small></th><td>${r.count}회</td><td>${duration(r.count?r.average:null)}</td><td>${duration(r.count?r.total:null)}</td><td>${duration(r.count?r.longest:null)}</td><td>${r.overCount}회</td></tr>`).join('')}</tbody></table></div>`:'<p class="empty">선택한 조건의 직원이 없습니다.</p>'}</section>
 <section class="panel meal-daily-panel"><div class="panel-heading"><div><h2>일별 평균 식사시간</h2><p>막대 길이로 비교하고 날짜 옆에서 정확한 시간을 확인하세요.</p></div></div>${days.length?`<div class="meal-day-bars">${days.map(d=>`<div class="meal-day-bar"><span>${Number(d.date.slice(5,7))}/${Number(d.date.slice(8))}</span><div class="meal-bar-track" aria-hidden="true"><i style="width:${d.average/maxDaily*100}%"></i></div><strong>${duration(d.average)}</strong><small>${d.count}회</small></div>`).join('')}</div>`:'<p class="empty">완료 기록이 생기면 일별 평균이 표시됩니다.</p>'}</section>
 <section class="panel"><div class="panel-heading"><div><h2>식사 시작·종료 기록</h2><p>${monthLabel(month)} · ${completed.length}건 · 최근 시작 순</p></div></div>${completed.length?historyTable(showAll?completed:completed.slice(0,20)):'<p class="empty">선택한 월에 완료된 식사 기록이 없습니다.</p>'}${completed.length>20?`<div class="meal-history-more"><button data-action="meal-history-all">${showAll?'최근 20건만 보기':`전체 ${completed.length}건 보기`}</button></div>`:''}</section>`;
}
