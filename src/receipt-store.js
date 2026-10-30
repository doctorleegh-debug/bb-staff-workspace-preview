export const RECEIPT_DB='bb-staff:public-preview:receipts:v1';
import {expandDates} from './schedule-drafts.js';
export const RECEIPT_SIGNAL='bb-staff:public-preview:receipts:changed:v1';
export const RETENTION_KEY='bb-staff:public-preview:receipt-retention:v1';
const TYPES=['image/jpeg','image/png','image/webp'];
export function validReceiptDate(date){if(!/^20\d{2}-\d{2}-\d{2}$/.test(date))return false;const value=new Date(date+'T12:00:00Z');return Number.isFinite(value.getTime())&&value.toISOString().slice(0,10)===date;}
// 종료일을 넣으면 사용일부터 종료일까지 매일 한 건씩, 한 번에 최대 31일.
export function receiptDates(date,end=''){if(!end||end===date)return[date];const dates=expandDates(date,end);if(dates.length>31)throw new Error('한 번에 31일까지 등록할 수 있어요. 종료일을 줄여 주세요.');return dates;}
export function validateReceipt({personId,date,amount,note='',files=[],allowedMonths}){
 if(!personId||!validReceiptDate(date))throw new Error('직원과 사용일을 확인해 주세요.');
 if(allowedMonths&&!allowedMonths.includes(date.slice(2,4)+date.slice(5,7)))throw new Error('현재 조회 가능한 월의 사용일로 등록해 주세요.');
 if(!Number.isSafeInteger(amount)||amount<0||amount>100000000)throw new Error('금액은 0원부터 1억원까지 정수로 입력해 주세요.');
 if(typeof note!=='string'||note.length>2000)throw new Error('메모는 2,000자까지 입력할 수 있습니다.');
 if(!Array.isArray(files)||files.length>5)throw new Error('한 건에 사진은 최대 5장까지 등록할 수 있습니다.');
 for(const file of files)if(!TYPES.includes(file.type)||file.size<=0||file.size>10*1024*1024)throw new Error('사진은 장당 10MB 이하의 JPG·PNG·WEBP 파일로 선택해 주세요.');
}
function openDB(){return new Promise((resolve,reject)=>{
 const request=indexedDB.open(RECEIPT_DB,1);
 request.onupgradeneeded=()=>{const db=request.result;if(!db.objectStoreNames.contains('receipts'))db.createObjectStore('receipts',{keyPath:'id'});};
 request.onsuccess=()=>{const db=request.result;db.onversionchange=()=>db.close();resolve(db);};
 request.onerror=()=>reject(new Error('영수증 저장소를 열지 못했습니다. 브라우저 저장 권한을 확인해 주세요.'));
 request.onblocked=()=>reject(new Error('다른 탭에서 영수증 저장소를 사용 중입니다. 해당 탭을 새로고침해 주세요.'));
});}
export async function listReceipts(){
 const db=await openDB();return new Promise((resolve,reject)=>{
  const tx=db.transaction('receipts','readonly'),request=tx.objectStore('receipts').getAll();let result=[];
  request.onsuccess=()=>{result=request.result;};
  tx.oncomplete=()=>{db.close();resolve(result.sort((a,b)=>b.date.localeCompare(a.date)||b.createdAt-a.createdAt));};
  tx.onabort=tx.onerror=()=>{db.close();reject(new Error('영수증을 불러오지 못했습니다. 새로고침해 주세요.'));};
 });
}
export async function saveReceipt(input){
 validateReceipt(input);
 const files=input.files||[];
 for(const file of files){let bitmap;try{bitmap=await createImageBitmap(file);if(bitmap.width*bitmap.height>50000000)throw new Error();}catch{throw new Error('사진을 열지 못했습니다. 5천만 화소 이하의 JPG·PNG·WEBP 사진을 선택해 주세요.');}finally{bitmap?.close();}}
 let record={id:input.id||crypto.randomUUID(),personId:input.personId,name:input.name,teams:input.teams,rawTeam:input.rawTeam,date:input.date,amount:input.amount,note:input.note||'',createdAt:Date.now(),files:files.map(f=>({name:f.name,type:f.type,blob:f}))};
 const db=await openDB();await new Promise((resolve,reject)=>{
  const tx=db.transaction('receipts','readwrite'),store=tx.objectStore('receipts');let conflict='';
  if(input.id){
   const request=store.get(input.id);request.onsuccess=()=>{
    const previous=request.result;
    if(!previous||previous.personId!==input.personId||(previous.updatedAt||previous.createdAt)!==input.expectedUpdatedAt){conflict='저장 내역이 변경되었습니다. 새로고침 후 다시 선택해 주세요.';tx.abort();return;}
    if(previous.files.length+record.files.length>5){conflict='기존 사진을 포함해 한 건에 최대 5장까지 등록할 수 있습니다.';tx.abort();return;}
    record={...record,createdAt:previous.createdAt,updatedAt:Math.max(Date.now(),(previous.updatedAt||previous.createdAt)+1),files:[...previous.files,...record.files]};store.put(record);
   };
  }else store.add(record);
  tx.oncomplete=()=>{db.close();resolve();};tx.onabort=tx.onerror=()=>{db.close();reject(new Error(conflict||'내용을 저장하지 못했습니다. 저장 공간을 확인하고 다시 저장해 주세요. 기존 기록은 보존했습니다.'));};
 });
 try{localStorage.setItem(RECEIPT_SIGNAL,record.id+':'+(record.updatedAt||record.createdAt));}catch{}return record;
}
export function receiptRows(rows,{month,personId,team='전체',search=''}){
 return rows.filter(r=>r.date.slice(2,4)+r.date.slice(5,7)===month&&(!personId||r.personId===personId)&&(team==='전체'||r.teams?.includes(team))&&(!search||[r.name,r.rawTeam].some(v=>v?.includes(search))));
}
export function retentionDays(storage){const raw=storage.getItem(RETENTION_KEY);if(raw===null)return 30;const value=Number(raw);if(!Number.isInteger(value)||value<1||value>365)throw new Error('사진 보관 기간 설정을 확인해 주세요.');return value;}
export function setRetentionDays(storage,value){if(!Number.isInteger(value)||value<1||value>365)throw new Error('보관 기간은 1~365일로 입력해 주세요.');storage.setItem(RETENTION_KEY,String(value));}
export function photoExpiry(createdAt,days){return createdAt+days*86400000;}
