import {Wheel} from 'spin-wheel';
import {parseLines,uniqueLabels,pickIndex,buildLadder,tracePath,ladderResults,MAX_PLAYERS} from './ladder-game.js';
const esc=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const reducedMotion=()=>matchMedia('(prefers-reduced-motion: reduce)').matches;
// 캔디 팔레트: 토글·휠 조각·토큰·자취가 참가 순서대로 같은 색을 쓴다. 글자는 진한 남색이라 밝은 색 위에서도 읽힌다.
const PALETTE=['#ff8fa3','#ffb86b','#ffe066','#8ce99a','#66d9ef','#74a9ff','#c3a6ff','#ffa8a8'];
// 첫 조각과 마지막 조각이 같은 색이 되지 않도록, 나머지가 1이 되지 않는 가장 긴 팔레트를 고른다.
const palette=n=>{for(const k of [8,7,6,5])if(n<=k||n%k!==1)return PALETTE.slice(0,k);return PALETTE;};
const colorOf=(i,n)=>{const p=palette(n);return p[i%p.length];};
const GAP_X=84,GAP_Y=40,PAD=42,TOP=18,TOKEN_R=16,SPEED=380,SVG='http://www.w3.org/2000/svg';
const shortLabel=name=>name.length>10?name.slice(0,9)+'…':name;
export const defaultOutcomes=count=>['당첨',...Array(Math.max(0,count-1)).fill('통과')].join('\n');
const MERGED=['대표','원장'];
export function mountPicker({root,session,person,teams,people,viewState,toast}){
 let disposed=false,wheel=null,spinning=false,epoch=0;
 const roster=people.filter(p=>p.personId&&p.name);
 const teamList=[...new Set([...teams,...roster.flatMap(p=>p.teams||[])])];
 // 대표·원장은 인원이 적어 한 묶음으로 보여 준다.
 const groups=[];for(const t of teamList){if(MERGED.includes(t)){if(!groups.some(g=>g.teams===MERGED))groups.push({id:MERGED.join('·'),title:MERGED.join('·')+'팀',teams:MERGED});}else groups.push({id:t,title:t+'팀',teams:[t]});}
 const members=group=>roster.filter(p=>p.teams?.some(t=>group.teams.includes(t)));
 if(viewState.selected===undefined){
  const home=session.role==='admin'?teamList[0]||'':person?.teams?.[0]||person?.rawTeam||teamList[0]||'';
  const homeGroup=groups.find(g=>g.teams.includes(home));
  const mine=(homeGroup?members(homeGroup):[]).map(p=>p.personId).slice(0,MAX_PLAYERS);
  Object.assign(viewState,{selected:mine,custom:[],teamTab:homeGroup?homeGroup.id:'all',tab:'wheel',outcomes:defaultOutcomes(mine.length),ladder:null,revealed:[]});
 }
 viewState.custom??=[];
 if(viewState.teamTab!=='all'&&!groups.some(g=>g.id===viewState.teamTab))viewState.teamTab='all';
 // 명부 직원 + 직접 추가한 이름. 동명이인은 순서대로 (2), (3)을 붙인다.
 const entries=()=>[...roster.map(p=>({id:p.personId,name:p.name})),...viewState.custom];
 const labelsOf=()=>{const list=entries();return new Map(uniqueLabels(list.map(e=>e.name)).map((label,i)=>[list[i].id,label]));};
 const selectedIds=()=>entries().filter(e=>viewState.selected.includes(e.id)).map(e=>e.id).slice(0,MAX_PLAYERS);
 const names=()=>{const labels=labelsOf();return selectedIds().map(id=>labels.get(id));};
 root.innerHTML=`<section class="panel picker-panel clay-scene"><div class="panel-heading"><div><h2>뽑기</h2><p>참가할 직원을 누르고 룰렛을 돌리거나 사다리를 타요. 결과는 저장하지 않아요.</p></div></div><nav class="picker-tabs" aria-label="뽑기 방식">${[['wheel','룰렛'],['ladder','사다리타기']].map(([id,title])=>`<button type="button" data-picker-tab="${id}" aria-pressed="${viewState.tab===id}">${title}</button>`).join('')}</nav><div class="picker-body"><div class="picker-people clay-card"><div class="pick-teams" role="group" aria-label="팀 보기">${[['all','전체보기'],...groups.map(g=>[g.id,g.title])].map(([id,title])=>`<button type="button" class="clay-pill" data-pick-team="${esc(id)}" aria-pressed="${viewState.teamTab===id}">${esc(title)}</button>`).join('')}</div><div class="pick-groups"></div><form class="pick-add"><input name="custom" maxlength="20" placeholder="명부에 없는 이름 직접 추가" aria-label="이름 직접 추가" autocomplete="off"><button type="submit" class="clay-pill small">추가</button></form><div class="pick-tools"><p class="picker-count"></p><span><button type="button" class="clay-pill small" data-pick-all>보이는 직원 모두</button><button type="button" class="clay-pill small" data-pick-none>모두 해제</button></span></div><label class="picker-outcomes clay-field" ${viewState.tab==='ladder'?'':'hidden'}><span>결과 <small>한 줄에 하나, 모자라면 통과</small></span><textarea name="outcomes" rows="5" maxlength="2000" spellcheck="false">${esc(viewState.outcomes)}</textarea></label></div><div class="picker-stage"></div></div></section>`;
 const groupsEl=root.querySelector('.pick-groups'),outcomesEl=root.querySelector('[name=outcomes]'),countEl=root.querySelector('.picker-count'),stage=root.querySelector('.picker-stage');
 const visibleGroups=()=>groups.filter(g=>viewState.teamTab==='all'||g.id===viewState.teamTab).map(g=>[g.title,members(g)]);
 function drawPeople(){
  const ids=selectedIds(),n=ids.length,labels=labelsOf(),color=id=>ids.includes(id)?colorOf(ids.indexOf(id),n):'#cfd9ec';
  const toggle=id=>`<button type="button" class="pick-toggle" data-pick-person="${esc(id)}" aria-pressed="${ids.includes(id)}" style="--c:${color(id)}"><span>${esc(labels.get(id))}</span></button>`;
  const groups=visibleGroups().map(([team,list])=>`<section class="pick-group"><h3>${esc(team)} <small>${list.filter(p=>ids.includes(p.personId)).length}/${list.length}명</small></h3><div class="pick-grid">${list.map(p=>toggle(p.personId)).join('')}</div></section>`).join('')||'<p class="empty">명부에 직원이 없습니다.</p>';
  const custom=viewState.custom.length?`<section class="pick-group pick-custom"><h3>직접 추가 <small>${viewState.custom.filter(e=>ids.includes(e.id)).length}/${viewState.custom.length}명</small></h3><div class="pick-grid">${viewState.custom.map(e=>`<span class="pick-item">${toggle(e.id)}<button type="button" class="pick-remove" data-pick-remove="${esc(e.id)}" aria-label="${esc(e.name)} 삭제">×</button></span>`).join('')}</div></section>`:'';
  groupsEl.innerHTML=groups+custom;
  groupsEl.querySelectorAll('[data-pick-person]').forEach(button=>button.addEventListener('click',()=>togglePerson(button.dataset.pickPerson)));
  groupsEl.querySelectorAll('[data-pick-remove]').forEach(button=>button.addEventListener('click',()=>{if(spinning)return;const id=button.dataset.pickRemove;viewState.custom=viewState.custom.filter(e=>e.id!==id);setSelected(viewState.selected.filter(x=>x!==id));}));
 }
 function addCustom(name){
  const trimmed=name.trim().slice(0,20);if(!trimmed||spinning)return;
  const id='custom:'+crypto.randomUUID();viewState.custom=[...viewState.custom,{id,name:trimmed}];
  if(viewState.selected.length>=MAX_PLAYERS){toast(`추가했지만 참가는 최대 ${MAX_PLAYERS}명이라 켜지 않았어요.`);setSelected(viewState.selected);}else setSelected([...viewState.selected,id]);
 }
 function updateCount(){const n=selectedIds().length;countEl.textContent=n<2?`${n}명 · 2명 이상 눌러 주세요`:`${n}명 참가`;}
 function setSelected(list){viewState.selected=list;viewState.ladder=null;viewState.revealed=[];drawPeople();updateCount();drawStage();}
 function togglePerson(id){if(spinning)return;const set=new Set(viewState.selected);if(set.has(id))set.delete(id);else{if(set.size>=MAX_PLAYERS){toast(`최대 ${MAX_PLAYERS}명까지 참가할 수 있어요.`);return;}set.add(id);}setSelected([...set]);}
 function removeName(index){const id=selectedIds()[index];if(id)setSelected(viewState.selected.filter(x=>x!==id));}
 root.querySelectorAll('[data-pick-team]').forEach(button=>button.addEventListener('click',()=>{viewState.teamTab=button.dataset.pickTeam;root.querySelectorAll('[data-pick-team]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));drawPeople();}));
 root.querySelector('.pick-add').addEventListener('submit',event=>{event.preventDefault();const input=event.currentTarget.elements.custom;addCustom(input.value);input.value='';input.focus();});
 root.querySelector('[data-pick-all]').addEventListener('click',()=>{if(spinning)return;const all=[...new Set([...viewState.selected,...visibleGroups().flatMap(([,list])=>list.map(p=>p.personId)),...viewState.custom.map(e=>e.id)])];if(all.length>MAX_PLAYERS)toast(`최대 ${MAX_PLAYERS}명까지라 앞의 ${MAX_PLAYERS}명만 참가해요.`);setSelected(all.slice(0,MAX_PLAYERS));});
 root.querySelector('[data-pick-none]').addEventListener('click',()=>{if(!spinning)setSelected([]);});
 outcomesEl.addEventListener('input',()=>{viewState.outcomes=outcomesEl.value;if(viewState.tab==='ladder')drawStage();});
 root.querySelectorAll('[data-picker-tab]').forEach(button=>button.addEventListener('click',()=>{if(spinning||viewState.tab===button.dataset.pickerTab)return;viewState.tab=button.dataset.pickerTab;root.querySelectorAll('[data-picker-tab]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));root.querySelector('.picker-outcomes').hidden=viewState.tab!=='ladder';drawStage();}));
 function drawStage(){epoch++;if(viewState.tab==='wheel')drawWheel();else{wheel?.remove();wheel=null;drawLadder();}}
 const wheelItems=list=>list.map((label,i)=>({label:shortLabel(label),backgroundColor:colorOf(i,list.length),labelColor:'#1f2a44'}));
 function drawWheel(){
  const list=names(),ready=list.length>=2,items=wheelItems(ready?list:['?','?']);
  if(!wheel){
   stage.innerHTML=`<div class="wheel-stage"><div class="wheel-ring" aria-hidden="true"></div><div class="wheel-box" role="img" aria-label="룰렛"></div><div class="wheel-hub" aria-hidden="true"><span>뽑기</span></div><div class="wheel-pointer" aria-hidden="true"></div></div><div class="picker-actions"><button type="button" class="primary" data-spin>돌리기</button><button type="button" data-spin-drop hidden>당첨자 빼고 다시 돌리기</button></div><p class="picker-result" aria-live="polite"></p>`;
   wheel=new Wheel(stage.querySelector('.wheel-box'),{items,isInteractive:false,pointerAngle:0,radius:0.97,itemLabelAlign:'center',itemLabelRadius:0.68,itemLabelRadiusMax:0.24,itemLabelFont:"'Noto Sans KR Variable','Noto Sans KR',sans-serif",itemLabelFontSizeMax:26,itemLabelColors:['#1f2a44'],lineColor:'#ffffff',lineWidth:4,borderColor:'#ffffff',borderWidth:0});
   stage.querySelector('[data-spin]').addEventListener('click',spin);
   stage.querySelector('[data-spin-drop]').addEventListener('click',event=>{removeName(Number(event.currentTarget.dataset.winner));spin();});
  }else wheel.items=items;
  stage.querySelector('[data-spin]').disabled=!ready||spinning;stage.querySelector('[data-spin]').textContent='돌리기';stage.querySelector('[data-spin-drop]').hidden=true;stage.querySelector('.picker-result').textContent='';
 }
 function spin(){
  const list=names();if(list.length<2||spinning||!wheel)return;
  const index=pickIndex(list.length),spinButton=stage.querySelector('[data-spin]'),dropButton=stage.querySelector('[data-spin-drop]'),result=stage.querySelector('.picker-result'),wheelStage=stage.querySelector('.wheel-stage');
  spinning=true;spinButton.disabled=true;dropButton.hidden=true;result.textContent='돌리는 중';wheelStage.classList.add('is-spinning');
  const finish=current=>{if(disposed)return;spinning=false;spinButton.disabled=false;spinButton.textContent='다시 돌리기';wheelStage.classList.remove('is-spinning');const winner=list[current]??list[index];result.innerHTML=`<strong>${esc(winner)}</strong> 님 당첨`;dropButton.dataset.winner=String(list[current]===undefined?index:current);dropButton.hidden=list.length<=2;};
  if(reducedMotion()){wheel.onRest=null;wheel.spinToItem(index,0,false,0,1);finish(wheel.getCurrentIndex());return;}
  wheel.onRest=event=>{wheel.onRest=null;finish(event.currentIndex);};
  wheel.spinToItem(index,4200,false,4,1);
 }
 function drawLadder(){
  const list=names();
  if(list.length<2){stage.innerHTML='<p class="empty">직원을 2명 이상 누르면 사다리가 만들어져요.</p>';return;}
  if(!viewState.ladder||viewState.ladder.columns!==list.length){viewState.ladder=buildLadder(list.length);viewState.revealed=[];}
  const ladder=viewState.ladder,n=list.length,outcomes=parseLines(viewState.outcomes,Infinity),ends=ladderResults(ladder),revealed=new Set(viewState.revealed),myEpoch=epoch;
  const width=n*GAP_X,height=TOP*2+(ladder.rows+1)*GAP_Y,x=col=>PAD+col*GAP_X,y=row=>TOP+(row+1)*GAP_Y,outcomeOf=col=>outcomes[col]||'통과',color=i=>colorOf(i,n);
  const rails=list.map((_,i)=>`<line x1="${x(i)}" y1="${y(-1)}" x2="${x(i)}" y2="${y(ladder.rows)}"/>`).join(''),rungs=ladder.rungs.map(r=>`<line x1="${x(r.left)}" y1="${y(r.row)}" x2="${x(r.left+1)}" y2="${y(r.row)}"/>`).join('');
  stage.innerHTML=`<div class="picker-actions"><button type="button" data-ladder-new>사다리 새로 만들기</button><button type="button" class="primary" data-ladder-all>모두 타기</button><button type="button" data-ladder-again>한 번 더</button></div><div class="ladder-scroll"><div class="ladder-board" style="width:${width}px"><div class="ladder-tokens" style="grid-template-columns:repeat(${n},${GAP_X}px)">${list.map((name,i)=>`<button type="button" class="ladder-token" data-ladder-start="${i}" style="--c:${color(i)}" aria-pressed="${revealed.has(i)}" title="${esc(name)}"><i>${esc(name[0])}</i><span>${esc(name)}</span></button>`).join('')}</div><svg class="ladder-svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" aria-hidden="true"><defs><filter id="ladder-shadow" x="-50%" y="-50%" width="200%" height="200%"><feDropShadow dx="2" dy="3" stdDeviation="2.5" flood-color="#3f548c" flood-opacity=".35"/></filter></defs><g class="ladder-rails">${rails}</g><g class="ladder-rails-hi" transform="translate(-2 0)">${rails}</g><g class="ladder-rungs">${rungs}</g><g class="ladder-rungs-hi" transform="translate(0 -2)">${rungs}</g><g class="ladder-trails"></g><g class="ladder-runners"></g></svg><div class="ladder-prizes" style="grid-template-columns:repeat(${n},${GAP_X}px)">${list.map((_,i)=>`<span class="ladder-prize ${outcomeOf(i)==='당첨'?'is-win':''}" data-ladder-end="${i}">${esc(outcomeOf(i))}</span>`).join('')}</div></div></div><ol class="ladder-results" aria-live="polite">${list.map((name,i)=>`<li data-ladder-row="${i}"><span><i class="ladder-dot" style="--c:${color(i)}"></i>${esc(name)}</span><strong>${revealed.has(i)?esc(outcomeOf(ends[i])):'?'}</strong></li>`).join('')}</ol>`;
  const trails=stage.querySelector('.ladder-trails'),runners=stage.querySelector('.ladder-runners');
  // 토큰이 레일을 따라 일정한 속도로 내려가고 가로선마다 꺾인다. 자취는 토큰 뒤에 그린다.
  function runRunner(i,animate,done){
   const px=tracePath(ladder,i).points.map(([row,col])=>[x(col),y(row)]),segs=[];let total=0;
   for(let k=1;k<px.length;k++){const d=Math.hypot(px[k][0]-px[k-1][0],px[k][1]-px[k-1][1]);segs.push(d);total+=d;}
   const trail=document.createElementNS(SVG,'polyline');trail.setAttribute('class','ladder-trail');trail.style.stroke=color(i);trails.append(trail);
   const runner=document.createElementNS(SVG,'g');runner.setAttribute('class','ladder-runner');runner.innerHTML=`<circle class="body" r="${TOKEN_R}" fill="${color(i)}" filter="url(#ladder-shadow)"/><circle class="shine" r="5" cx="-5" cy="-6" fill="#fff" opacity=".6"/><text y="5">${esc(list[i][0])}</text>`;runners.append(runner);
   const place=(k,cx,cy)=>{runner.setAttribute('transform',`translate(${cx} ${cy})`);trail.setAttribute('points',[...px.slice(0,k+1),[cx,cy]].map(p=>p.join(',')).join(' '));};
   if(!animate||reducedMotion()){place(px.length-1,...px.at(-1));runner.classList.add('is-done');done();return;}
   const duration=Math.min(4200,Math.max(1300,total/SPEED*1000));let start=0;
   const frame=now=>{if(disposed||myEpoch!==epoch)return;start||=now;const t=Math.min(1,(now-start)/duration),dist=total*t;let acc=0,k=0;while(k<segs.length-1&&acc+segs[k]<dist){acc+=segs[k];k++;}const [ax,ay]=px[k],[bx,by]=px[k+1],f=segs[k]?Math.min(1,(dist-acc)/segs[k]):1;place(k,ax+(bx-ax)*f,ay+(by-ay)*f);if(t<1)requestAnimationFrame(frame);else{runner.classList.add('is-done');done();}};
   requestAnimationFrame(frame);
  }
  const land=i=>{const end=ends[i],prize=stage.querySelector(`[data-ladder-end="${end}"]`);stage.querySelector(`[data-ladder-row="${i}"] strong`).textContent=outcomeOf(end);prize.style.setProperty('--hit',color(i));prize.classList.remove('is-hit');void prize.offsetWidth;prize.classList.add('is-hit');};
  function reveal(i,animate){
   if(revealed.has(i))return;revealed.add(i);viewState.revealed=[...revealed];
   stage.querySelector(`[data-ladder-start="${i}"]`).setAttribute('aria-pressed','true');
   runRunner(i,animate,()=>{if(!disposed&&myEpoch===epoch)land(i);});
  }
  for(const i of revealed)runRunner(i,false,()=>land(i));
  stage.querySelectorAll('[data-ladder-start]').forEach(button=>button.addEventListener('click',()=>reveal(Number(button.dataset.ladderStart),true)));
  stage.querySelector('[data-ladder-all]').addEventListener('click',()=>list.forEach((_,i)=>setTimeout(()=>{if(!disposed&&myEpoch===epoch)reveal(i,true);},i*160)));
  stage.querySelector('[data-ladder-new]').addEventListener('click',()=>{viewState.ladder=null;viewState.revealed=[];drawStage();});
  // 한 번 더: 새 사다리를 만들고 바로 모두 태운다.
  stage.querySelector('[data-ladder-again]').addEventListener('click',()=>{viewState.ladder=null;viewState.revealed=[];drawStage();stage.querySelector('[data-ladder-all]').click();});
 }
 drawPeople();updateCount();drawStage();
 return{dispose(){disposed=true;epoch++;wheel?.remove();wheel=null;}};
}
