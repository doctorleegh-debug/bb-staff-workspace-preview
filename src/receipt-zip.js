// Uncompressed ZIP with UTF-8 names; no external service or library.
const encoder=new TextEncoder();
const crcTable=Array.from({length:256},(_,i)=>{let c=i;for(let n=0;n<8;n++)c=c&1?0xedb88320^(c>>>1):c>>>1;return c>>>0;});
export const crc32=bytes=>{let c=0xffffffff;for(const b of bytes)c=crcTable[(c^b)&255]^(c>>>8);return(c^0xffffffff)>>>0;};
export function safeFilename(name){return String(name).replace(/[\\/:*?"<>|\x00-\x1f\x7f]/g,'_').replace(/\.+/g,'_').slice(0,90)||'영수증';}
export async function makeZip(files){
 const chunks=[],central=[];let offset=0;
 for(const file of files){
  const name=encoder.encode(file.name),data=new Uint8Array(await file.blob.arrayBuffer()),crc=crc32(data);
  const header=new Uint8Array(30+name.length),view=new DataView(header.buffer);
  view.setUint32(0,0x04034b50,true);view.setUint16(4,20,true);view.setUint16(6,0x800,true);view.setUint16(12,33,true);view.setUint32(14,crc,true);view.setUint32(18,data.length,true);view.setUint32(22,data.length,true);view.setUint16(26,name.length,true);header.set(name,30);
  const row=new Uint8Array(46+name.length),v=new DataView(row.buffer);v.setUint32(0,0x02014b50,true);v.setUint16(4,20,true);v.setUint16(6,20,true);v.setUint16(8,0x800,true);v.setUint16(14,33,true);v.setUint32(16,crc,true);v.setUint32(20,data.length,true);v.setUint32(24,data.length,true);v.setUint16(28,name.length,true);v.setUint32(42,offset,true);row.set(name,46);
  chunks.push(header,data);central.push(row);offset+=header.length+data.length;
 }
 const size=central.reduce((s,r)=>s+r.length,0),end=new Uint8Array(22),v=new DataView(end.buffer);v.setUint32(0,0x06054b50,true);v.setUint16(8,files.length,true);v.setUint16(10,files.length,true);v.setUint32(12,size,true);v.setUint32(16,offset,true);
 return new Blob([...chunks,...central,end],{type:'application/zip'});
}
const csv=value=>'"'+String(value??'').replace(/^(?:\s*[=+@\-]|[\t\r\n])/u,"'$&").replaceAll('"','""')+'"';
export async function receiptArchive(rows){
 const files=[],manifest=[['사용일','직원','직원 ID','금액','메모','사진 파일']];
 const total=rows.reduce((sum,r)=>sum+r.files.reduce((s,f)=>s+f.blob.size,0),0);
 if(total>200*1024*1024)throw new Error('사진이 200MB를 넘습니다. 직원이나 기간을 좁혀 다운로드해 주세요.');
 for(const r of rows){const names=r.files.map((f,i)=>{
  const ext={'image/jpeg':'jpg','image/png':'png','image/webp':'webp'}[f.type]||'bin';
  const name=`${r.date}/${safeFilename(r.name)}_${safeFilename(r.personId)}/${r.id}_${i+1}.${ext}`;files.push({name,blob:f.blob});return name;
 });manifest.push([r.date,r.name,r.personId,r.amount,r.note,names.join(' | ')]);}
 files.push({name:'영수증_목록.csv',blob:new Blob(['\uFEFF'+manifest.map(row=>row.map(csv).join(',')).join('\r\n')],{type:'text/csv;charset=utf-8'})});
 if(files.length>65535)throw new Error('사진이 너무 많습니다. 조회 조건을 좁혀 주세요.');
 return makeZip(files);
}
