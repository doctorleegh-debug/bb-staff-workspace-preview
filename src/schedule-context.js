const esc=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const COLORS={'휴무':'4285F4','연차':'FF9900','오전 반차':'FCE5CD','오후 반차':'D9D2E9','근무':'D9EAD3'};
export function schedulesOn(roster,records,personId,date){
 const month=date.slice(2,4)+date.slice(5,7),day=Number(date.slice(-2));
 const original=roster.filter(r=>r.personId===personId&&r.month===month).flatMap(r=>{const c=r.days?.[day];return c?[{label:String(c.value??'').trim()||String(c.colorMeaning??'').trim()||String(c.label??'').trim()||'색상 표시',color:c.color||'',original:true}]:[];});
 const added=records.filter(r=>r.kind==='schedule'&&r.personId===personId&&r.date===date).map(r=>({label:r.label,color:COLORS[r.label]||'CBD5E1',original:false}));
 return [...original,...added];
}
export function scheduleChips(items){return items.map(s=>`<span class="meal-schedule-chip"><i class="swatch" style="--source-color:#${/^[\da-f]{6}$/i.test(s.color)?s.color:'CBD5E1'}" aria-hidden="true"></i><span>${esc(s.label)}</span></span>`).join('');}
export function dayAssignment(items){
 const labels=items.map(s=>s.label.trim());
 const off=labels.some(l=>['휴무','연차','무급','휴가(출산)'].includes(l));
 const am=labels.some(l=>['오후 반차','오전출근'].includes(l)),pm=labels.some(l=>['오전 반차','오후출근'].includes(l)),full=labels.includes('근무');
 if((off&&(am||pm||full))||(am&&pm))return'확인 필요';
 if(off)return'휴무·휴가';if(am)return'오전 근무';if(pm)return'오후 근무';if(full)return'근무';return items.length?'일정 확인':'미기재';
}
export function mealBudget(rows,added=[]){
 const total=label=>rows.length&&rows.every(r=>typeof r.totals?.[label]?.value==='number'&&Number.isFinite(r.totals[label].value))?rows.reduce((s,r)=>s+r.totals[label].value,0):null;
 const additional=added.reduce((s,r)=>s+(Number.isSafeInteger(r.amount)?r.amount:0),0),used=total('사용'),limit=total('한도'),remaining=total('잔액');
 return{limit,sourceUsed:used,sourceRemaining:remaining,additional,used:used===null?null:used+additional,remaining:remaining===null?null:remaining-additional};
}
