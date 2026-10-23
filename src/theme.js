const THEME_KEY='bb-staff:public-preview:theme:v1';
let preference=null,media;
const readPreference=()=>{try{const value=localStorage.getItem(THEME_KEY);return ['light','dark'].includes(value)?value:null;}catch{return null;}};
const dark=()=>document.documentElement.dataset.theme==='dark';
function buttonContents(){
 const path=dark()?'M12 3v2m0 14v2M3 12h2m14 0h2M5.6 5.6 7 7m10 10 1.4 1.4M5.6 18.4 7 17M17 7l1.4-1.4M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z':'M20 15.5A8.5 8.5 0 0 1 8.5 4 8.5 8.5 0 1 0 20 15.5Z';
 return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" aria-hidden="true"><path d="${path}"/></svg><span>${dark()?'라이트 모드':'다크 모드'}</span>`;
}
export function themeControl(){return `<button class="theme-toggle" data-theme-toggle type="button" aria-label="${dark()?'라이트':'다크'} 모드로 전환">${buttonContents()}</button>`;}
function applyTheme(){
 document.documentElement.dataset.theme=preference||(media.matches?'dark':'light');
 for(const button of document.querySelectorAll('[data-theme-toggle]')){button.innerHTML=buttonContents();button.setAttribute('aria-label',`${dark()?'라이트':'다크'} 모드로 전환`);}
}
export function initializeTheme(){
 media=matchMedia('(prefers-color-scheme: dark)');preference=readPreference();applyTheme();
 media.addEventListener('change',()=>{if(!preference)applyTheme();});
 addEventListener('storage',event=>{if(event.key===THEME_KEY||event.key===null){preference=readPreference();applyTheme();}});
 document.addEventListener('click',event=>{if(!event.target.closest('[data-theme-toggle]'))return;preference=dark()?'light':'dark';try{localStorage.setItem(THEME_KEY,preference);}catch{}applyTheme();});
}
