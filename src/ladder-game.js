// 뽑기 화면의 순수 로직. DOM 없이 참가자 파싱, 당첨 번호, 사다리 생성·경로 추적만 다룬다.
export const MAX_PLAYERS=20,MAX_NAME=20;
export const secureRandom=()=>crypto.getRandomValues(new Uint32Array(1))[0]/2**32;
export function parseLines(text,max=MAX_PLAYERS){return String(text??'').split(/\r?\n/).map(s=>s.trim()).filter(Boolean).slice(0,max).map(s=>s.slice(0,MAX_NAME));}
export function uniqueLabels(names){const seen=new Map();return names.map(n=>{const c=(seen.get(n)||0)+1;seen.set(n,c);return c===1?n:`${n} (${c})`;});}
export function pickIndex(count,rng=secureRandom){if(!(count>=1))throw new Error('참가자를 입력해 주세요.');return Math.min(count-1,Math.floor(rng()*count));}
// 같은 행에서 이웃한 틈에 가로선을 함께 두지 않는다(어느 쪽으로 갈지 모호해지므로). 틈마다 먼저 하나씩 심어 빈 틈이 없게 한다.
export function buildLadder(columns,rng=secureRandom,rows=Math.min(16,Math.max(8,2*columns))){
 if(!(columns>=2))throw new Error('2명 이상 입력해 주세요.');
 const rungs=[],has=(row,left)=>rungs.some(r=>r.row===row&&r.left===left);
 for(let left=0;left<columns-1;left++){let row;do{row=Math.min(rows-1,Math.floor(rng()*rows));}while(has(row,left-1));rungs.push({row,left});}
 for(let row=0;row<rows;row++)for(let left=0;left<columns-1;left++){if(has(row,left)||has(row,left-1)||has(row,left+1))continue;if(rng()<0.35)rungs.push({row,left});}
 rungs.sort((a,b)=>a.row-b.row||a.left-b.left);
 return{columns,rows,rungs};
}
export function tracePath(ladder,start){
 const has=(row,left)=>ladder.rungs.some(r=>r.row===row&&r.left===left);
 let col=start;const points=[[-1,col]];
 for(let row=0;row<ladder.rows;row++){const step=has(row,col)?1:has(row,col-1)?-1:0;if(!step)continue;points.push([row,col]);col+=step;points.push([row,col]);}
 points.push([ladder.rows,col]);
 return{end:col,points};
}
export const ladderResults=ladder=>Array.from({length:ladder.columns},(_,i)=>tracePath(ladder,i).end);
