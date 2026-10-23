import {expenseStatus,expenseCSV} from './expense-store.js';
// Team suffix normalization only; never infer that different named teams are the same.
export const expenseTeam=value=>String(value??'').trim().replace(/팀$/,'');
export function validateExpenseArchive(data){
 const object=v=>v!==null&&typeof v==='object'&&!Array.isArray(v);
 if(!object(data)||!Array.isArray(data.rows)||!Array.isArray(data.summaries)||!Array.isArray(data.issues)||!data.rows.every(r=>object(r)&&typeof r.id==='string'&&typeof r.month==='string'&&typeof r.item==='string'&&Number.isFinite(r.amount)&&object(r.source)&&typeof r.source.tab==='string'&&Number.isInteger(r.source.row)&&(r.notes==null||object(r.notes)))||!data.issues.every(i=>object(i)&&typeof i.id==='string'&&typeof i.kind==='string'))throw new Error('기존 지출 자료 형식을 확인해 주세요.');
 return data;
}
export function expenseOverview(requests,sourceRows,{month,team='',search=''}={}){
 const query=search.trim(),selected=expenseTeam(team);
 const matches=(r,source)=>((source?r.month:r.date.slice(2,4)+r.date.slice(5,7))===month)&&(!selected||expenseTeam(source?r.rawTeam:r.team)===selected)&&(!query||[r.name,r.item,r.note,r.team,r.rawTeam,r.category,...Object.values(r.notes||{})].some(v=>String(v??'').includes(query)));
 const fresh=requests.filter(r=>matches(r,false)).toSorted((a,b)=>b.submittedAt.localeCompare(a.submittedAt)).map(row=>({kind:'request',row}));
 const imported=sourceRows.filter(r=>matches(r,true)).map(row=>({kind:'source',row}));
 const items=[...fresh,...imported];
 return{items,count:items.length,amount:items.reduce((sum,item)=>sum+item.row.amount,0),pending:fresh.filter(({row})=>row.status==='pending').length,requestCount:fresh.length,sourceCount:imported.length};
}
export function expenseOverviewCSV(items){return expenseCSV(['구분','조회 월','사용일','작성자','팀','물품·사용 목적','분류','단가','수량','금액','카드·결제수단','앱 결재 상태','시트 팀장확인','원본 탭','원본 행','메모'],items.map(({kind,row:r})=>kind==='source'?['시트에서 가져옴',r.month,'','',r.rawTeam,r.item,r.category,r.unitPrice,r.quantity,r.amount,'','기존 기록',r.teamApproval,r.source.tab,r.source.row,Object.values(r.notes||{}).join('\n')]:['새 신청',r.date.slice(2,4)+r.date.slice(5,7),r.date,r.name,r.team,r.item,r.category,r.unitPrice,r.quantity,r.amount,r.payment,expenseStatus(r),'','','',r.note]));}
