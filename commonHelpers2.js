import"./assets/modulepreload-polyfill-B5Qt9EMX.js";const r="feedback-form-state",n=document.querySelector(".feedback-form"),a=JSON.parse(localStorage.getItem(r));if(a)for(const e of Object.keys(a))document.querySelector(`[name="${e}"]`).value=a[e];n.addEventListener("input",c);n.addEventListener("submit",s);function c(e){const o=e.target.name,t={...JSON.parse(localStorage.getItem(r)),[o]:e.target.value.trim()};localStorage.setItem(r,JSON.stringify(t))}function s(e){e.preventDefault();const o=new FormData(e.target),t=Object.fromEntries(o.entries());l(t)&&(console.log("submit",t),localStorage.removeItem(r),e.target.reset())}function l(e){let o=!0;for(const t in e)e[t]||(m(document.querySelector(`[name="${t}"]`)),console.log(document.querySelector(`[name="${t}"]`)),o=!1),e[t]&&i(document.querySelector(`[name="${t}"]`));return o}function m(e){e.classList.add("error")}function i(e){e.classList.remove("error")}
//# sourceMappingURL=commonHelpers2.js.map
