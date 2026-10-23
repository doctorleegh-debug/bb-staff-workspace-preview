// Review-only notes. Remove the UI and this module from the production build.
export const FEEDBACK_PREFIX='bb-staff:public-preview:review-note:v1:';
export const FEEDBACK_MAX_BYTES=20000000;
export const FEEDBACK_VIEWS=['meal-timer','roster','team-calendar','meals','team-snacks','attendance','admin-dashboard','sources','feedback'];
export function validateFeedback(value,people){
 if(!value||typeof value!=='object'||typeof value.id!=='string'||!/^note-[a-zA-Z0-9-]{1,80}$/.test(value.id)||!['employee','admin'].includes(value.role)||!FEEDBACK_VIEWS.includes(value.view)||typeof value.text!=='string'||!value.text.trim()||value.text.length>4000||typeof value.createdAt!=='string'||!Number.isFinite(Date.parse(value.createdAt)))throw new Error('메모 파일의 형식 또는 내용을 확인해 주세요.');
 const person=value.role==='employee'?people.find(p=>p.personId===value.personId):null;
 if(value.role==='employee'&&!person)throw new Error('현재 명부에 없는 직원의 메모가 있습니다.');
 return{id:value.id,role:value.role,personId:person?.personId||'admin',name:person?.name||'관리자',team:person?.rawTeam||'관리자',view:value.view,text:value.text.trim(),createdAt:new Date(value.createdAt).toISOString()};
}
export function readFeedback(storage,people){
 const notes=[],errors=[];
 for(let i=0;i<storage.length;i++){const key=storage.key(i);if(!key?.startsWith(FEEDBACK_PREFIX))continue;try{const note=validateFeedback(JSON.parse(storage.getItem(key)),people);if(key!==FEEDBACK_PREFIX+note.id)throw new Error('저장 키 불일치');notes.push(note);}catch{errors.push(key);}}
 return{notes:notes.sort((a,b)=>b.createdAt.localeCompare(a.createdAt)||a.id.localeCompare(b.id)),errors};
}
export function saveFeedback(storage,people,value){
 const note=validateFeedback(value,people),key=FEEDBACK_PREFIX+note.id,existing=storage.getItem(key);
 if(existing!==null){let same=false;try{same=JSON.stringify(validateFeedback(JSON.parse(existing),people))===JSON.stringify(note);}catch{}if(!same)throw new Error('같은 번호의 다른 메모가 있습니다. 기존 메모는 보존했습니다.');return false;}
 storage.setItem(key,JSON.stringify(note));return true;
}
export function parseFeedbackFile(text,people){
 if(typeof text!=='string'||new TextEncoder().encode(text).byteLength>FEEDBACK_MAX_BYTES)throw new Error('메모 파일은 20MB 이내로 가져와 주세요.');
 let file;try{file=JSON.parse(text);}catch{throw new Error('올바른 메모 JSON 파일을 선택해 주세요.');}
 if(file?.format!=='bb-staff-review-notes'||file.version!==1||!Array.isArray(file.notes))throw new Error('이 화면에서 내려받은 메모 파일을 선택해 주세요.');
 const notes=file.notes.map(note=>validateFeedback(note,people));
 if(new Set(notes.map(n=>n.id)).size!==notes.length)throw new Error('파일 안에 중복된 메모 번호가 있습니다.');
 return notes;
}
export function feedbackFile(notes){return JSON.stringify({format:'bb-staff-review-notes',version:1,notes},null,2);}
