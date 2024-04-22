import{a as b,S as w,N as g,K as L,P as k,A as P,M as A}from"./assets/vendor-7026dc98.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function s(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=s(n);fetch(n.href,r)}})();b.defaults.baseURL="https://portfolio-js.b.goit.study/api";async function I(){return(await b.get("/reviews")).data}async function V(e){return(await b.post("/requests",e)).data}const x=document.querySelector(".reviews-list");function T(e,t,s,i){return`
     <li class="reviews-list-items swiper-slide" data-id="${e}">
     <img class="reviews-image" src="${s}" alt="" 
            width="48"
            height="48"
            loading="lazy" />
          <div class="reviews-text-content">
            <h3 class="reviews-name-header">${t}</h3>
            <p class="reviews-main-text">${i}</p>
          </div>
        </li>
  `}function C(){const e='<p class="end-message">Not found</p>';x.insertAdjacentHTML("afterend",e)}function H(e){return e.map(({_id:t,author:s,avatar_url:i,review:n})=>T(t,s,i,n)).join("")}function R(e){const t=H(e);x.insertAdjacentHTML("beforeend",t)}const D=document.querySelector(".swiper"),a=document.querySelector(".button-next"),c=document.querySelector(".button-prev"),$=new w(D,{modules:[g,L,k],navigation:{nextEl:a,prevEl:c},direction:"horizontal",autoHeight:!1,autoWidth:!1,watchOverflow:!0,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},breakpoints:{320:{slidesPerView:"auto",spaceBetween:22},767:{slidesPerView:2,spaceBetween:16},1280:{slidesPerView:3,spaceBetween:42},1440:{slidesPerView:4,spaceBetween:16}}});$.update();async function W(){try{const e=await I();e.length===0?C():R(e)}catch(e){console.error("Error fetching reviews:",e)}}const _=new MutationObserver(e=>{e.forEach(t=>{t.attributeName==="class"&&(a.classList.contains("swiper-button-disabled")?(a.style.opacity="0.5",a.style.cursor="not-allowed"):(a.style.opacity="1",a.style.cursor="pointer"))})});_.observe(a,{attributes:!0});const z=new MutationObserver(e=>{e.forEach(t=>{t.attributeName==="class"&&(c.classList.contains("swiper-button-disabled")?(c.style.opacity="0.5",c.style.cursor="not-allowed"):(c.style.opacity="1",c.style.cursor="pointer"))})});z.observe(c,{attributes:!0});W();document.getElementById("animation");function U(e){let t=e.getBoundingClientRect();return t.top>=0&&t.bottom<=window.innerHeight||t.bottom>=0&&t.top<=window.innerHeight}function M(){let e=document.querySelector(".covers.section");e.querySelectorAll(".marquee-line").forEach(function(s){U(e)?s.classList.add("marquee-line-animation"):s.classList.remove("marquee-line-animation")})}document.addEventListener("DOMContentLoaded",M);window.addEventListener("scroll",M);const l=document.querySelector(".btn-next"),u=document.querySelector(".btn-prev"),j=new w(".swiper-box",{modules:[g,L,k],navigation:{prevEl:u,nextEl:l},direction:"horizontal",autoHeight:!1,autoWidth:!1,loop:!1,watchOverflow:!0,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},breakpoints:{1440:{direction:"horizontal"}}});j.update();const K=new MutationObserver(e=>{e.forEach(t=>{t.attributeName==="class"&&(l.classList.contains("swiper-button-disabled")?(l.style.opacity="0.5",l.style.cursor="not-allowed"):(l.style.opacity="1",l.style.cursor="pointer"))})});K.observe(l,{attributes:!0});const F=new MutationObserver(e=>{e.forEach(t=>{t.attributeName==="class"&&(u.classList.contains("swiper-button-disabled")?(u.style.opacity="0.5",u.style.cursor="not-allowed"):(u.style.opacity="1",u.style.cursor="pointer"))})});F.observe(u,{attributes:!0});const J=Array.from(document.querySelectorAll(".accordion-container"));new P(J,{duration:600,showMultiple:!0,openOnInit:[0]});const X=document.querySelectorAll(".ac-trigger");X.forEach(function(e){e.addEventListener("click",function(){this.classList.toggle("rotated")})});document.querySelector(".btn-right");const G=new w(".swiper-skills",{loop:!0,setWrapperSize:!0,modules:[g,L,A],spaceBetween:0,simulateTouch:!0,grabCursor:!0,slideActiveClass:"active",pagination:!0,oneWayMovement:!1,navigation:{nextEl:".btn-right"},keyboard:{enabled:!0,onlyInViewport:!1},breakpoints:{320:{slidesPerView:2},375:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}}});G.update();const q=document.querySelectorAll(".accordion-title"),Q=document.querySelectorAll(".accordion-content");q.forEach(e=>e.addEventListener("click",()=>{const t=document.querySelector("#"+e.dataset.tab);t.classList.contains("active")?(t.classList.remove("active"),t.style.maxHeight=0):(Q.forEach(s=>{s.classList.remove("active"),s.style.maxHeight=0}),q.forEach(s=>s.classList.remove("active")),e.classList.add("active"),t.classList.add("active"),t.style.maxHeight=t.scrollHeight+"px")}));function Y(){document.querySelector(".backdrop").classList.add("active"),document.querySelector(".modal").classList.add("active"),document.addEventListener("keydown",f),document.querySelector(".backdrop").addEventListener("click",f)}function h(){document.querySelector(".backdrop").classList.remove("active"),document.querySelector(".modal").classList.remove("active"),document.removeEventListener("keydown",f),document.querySelector(".backdrop").removeEventListener("click",f)}function f(e){e.key==="Escape"&&h()}document.querySelector(".modal-close-button").addEventListener("click",h);document.querySelector("body").addEventListener("click",e=>{e.target.classList.contains("backdrop")&&h()});const Z=document.getElementById("footer-form");function ee(e){e.preventDefault(),Y()}Z.addEventListener("submit",ee);document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".mobile-menu-open-btn"),t=document.querySelector(".mobile-menu-wrapper"),s=document.querySelector("body"),i=document.querySelectorAll('.mobile-menu-wrapper a[href^="#"]');e.addEventListener("click",function(){t.classList.toggle("is-open"),s.classList.toggle("modal-open"),s.scrollIntoView()}),document.querySelector(".mobile-menu-close-btn").addEventListener("click",function(){t.classList.remove("is-open"),s.classList.toggle("modal-open")}),i.forEach(r=>{r.addEventListener("click",function(d){const y=d.target.getAttribute("href");if(y&&y.startsWith("#")){d.preventDefault(),t.classList.remove("is-open"),s.classList.remove("modal-open");const B=y.slice(1),S=document.getElementById(B);S&&S.scrollIntoView({behavior:"smooth"})}})})});const te=document.querySelectorAll(".submenu-link");document.querySelector(".navbar-menu").addEventListener("click",function(){te.forEach(function(e,t){setTimeout(function(){e.classList.toggle("is-active")},100*t)})});const p=document.querySelector(".footer-form"),o=p.elements.email,v=p.elements.comment,se=document.querySelector(".modal"),E="form-state";p.addEventListener("submit",async e=>{e.preventDefault();const t={email:o.value,comment:v.value};try{V(t),se.classList.add("is-open"),o.value="",v.value="",localStorage.removeItem(E),o.classList.remove("success","failure")}catch(s){alert("Please fill all fields correctly"),console.error("Error:",s.message)}});const m=JSON.parse(localStorage.getItem(E));o.value=m&&m.email?m.email:"";v.value=m&&m.comment?m.comment:"";p.addEventListener("input",e=>{localStorage.setItem(E,JSON.stringify({email:o.value.trim(),comment:v.value.trim()})),e.target.value!==""?e.target.classList.add("entered-text"):e.target.classList.remove("entered-text"),console.log(o.value.indexOf("."),o.value.length),o.value.match("@")&&(o.value.indexOf(".")===o.value.length-3||o.value.indexOf(".")===o.value.length-4)?(o.classList.add("success"),o.classList.remove("failure")):o.value!==""?(o.classList.remove("success"),o.classList.add("failure")):o.classList.remove("failure")});const O=30;o.addEventListener("input",N);v.addEventListener("input",N);function N(e){this.value.length>O&&(this.value=this.value.substring(0,O)+"...")}
//# sourceMappingURL=commonHelpers.js.map
