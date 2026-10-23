import {calendarDays} from './daily-detail.js';
const esc=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export const scheduleDate=(month,day)=>`20${month.slice(0,2)}-${month.slice(2)}-${String(day).padStart(2,'0')}`;
export function addedSchedule(records,row,day){return records.filter(r=>r.kind==='schedule'&&r.personId===row.personId&&r.date===scheduleDate(row.month,day));}
export function rosterDayCell(row,day,records,mobile=false){
 const cell=row.days[day],added=addedSchedule(records,row,day),date=scheduleDate(row.month,day),label=cell?.value||cell?.colorMeaning||cell?.label||'색상 표시';
 const color=/^[A-Fa-f0-9]{6}$/.test(cell?.color||'')?`<i class="swatch" style="--source-color:#${cell.color}" aria-label="원본 색상 #${cell.color}"></i>`:'';
 const details=cell||added.length?`<button class="roster-day-record" data-roster-row="${esc(row.id)}" data-roster-day="${day}" aria-label="${esc(row.name+' '+date+' 일정 보기')}">${cell?`<span class="roster-original">${color}<span>${esc(label)}</span></span>`:''}${added.map(r=>`<span class="roster-added">${esc(r.label)}</span>`).join('')}</button>`:'<span class="roster-day-empty">—</span>';
 return `<div class="roster-calendar-day ${mobile?'':'roster-desktop-day'}"><div class="roster-day-top">${mobile?`<strong>${day}</strong>`:''}<button class="calendar-add" data-schedule-add="${date}" data-schedule-person="${esc(row.personId)}" aria-label="${esc(row.name+' '+date+' 일정 추가')}">+</button></div>${details}</div>`;
}
export function schedulePickerDays(month){return `<div class="daily-weekdays">${['일','월','화','수','목','금','토'].map(d=>`<span>${d}</span>`).join('')}</div><div class="schedule-picker-days">${calendarDays(month).map(day=>day?`<button type="button" data-picker-date="${scheduleDate(month,day)}" aria-label="${scheduleDate(month,day)} 일정 추가"><strong>${day}</strong><span aria-hidden="true">+</span></button>`:'<span></span>').join('')}</div>`;}
