(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const i="/http-app/assets/javascript-8dac5379.svg",c=async()=>{const n=await fetch("https://api.breakingbadquotes.xyz/v1/quotes");console.log(n);const o=await n.json();return console.log(o),console.log(o[0]),o[0]},l=async n=>{document.querySelector("#title-app").innerHTML="Breaking Bad App",n.innerHTML="Loading...";const o=document.createElement("blockquote"),a=document.createElement("h4"),r=document.createElement("button");r.innerText="NEXT QUOTE";const e=t=>{o.innerHTML=t.quote,a.innerHTML=t.author,n.replaceChildren(o,a,r)};r.addEventListener("click",async()=>{n.innerHTML="Loading...";const t=await c();e(t)}),c().then(t=>e(t))},d="/http-app/";document.querySelector("#app").innerHTML=`
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${d}vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${i}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1 id="title-app"></h1>
    <div class="card">
    </div>
  </div>
`;const u=document.querySelector(".card");l(u);
