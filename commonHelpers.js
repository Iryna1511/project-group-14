import{a as y,S as h,N as E,K as S,P as q}from"./assets/vendor-cef296b0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const p of s.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&r(p)}).observe(document,{childList:!0,subtree:!0});function o(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(n){if(n.ep)return;n.ep=!0;const s=o(n);fetch(n.href,s)}})();y.defaults.baseURL="https://portfolio-js.b.goit.study/api";async function x(){return(await y.get("/reviews")).data}async function M(e){return(await y.post("/requests",e)).data}const O=document.querySelector(".reviews-list");function B(e,t,o,r){return`
     <li class="reviews-list-items swiper-slide" data-id="${e}">
     <img class="reviews-image" src="${o}" alt="" 
            width="48"
            height="48"
            loading="lazy" />
          <div class="reviews-text-content">
            <h3 class="reviews-name-header">${t}</h3>
            <p class="reviews-main-text">${r}</p>
          </div>
        </li>
  `}function P(){const e='<p class="end-message">Not found</p>';O.insertAdjacentHTML("afterend",e)}function I(e){return e.map(({_id:t,author:o,avatar_url:r,review:n})=>B(t,o,r,n)).join("")}function C(e){const t=I(e);O.insertAdjacentHTML("beforeend",t)}const H=document.querySelector(".swiper"),i=document.querySelector(".button-next"),a=document.querySelector(".button-prev"),R=new h(H,{modules:[E,S,q],navigation:{nextEl:i,prevEl:a},direction:"horizontal",autoHeight:!1,autoWidth:!1,watchOverflow:!0,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},breakpoints:{320:{slidesPerView:"auto",spaceBetween:22},767:{slidesPerView:2,spaceBetween:16},1280:{slidesPerView:3,spaceBetween:42},1440:{slidesPerView:4,spaceBetween:16}}});R.update();async function T(){try{const e=await x();e.length===0?P():C(e)}catch(e){console.error("Error fetching reviews:",e)}}const V=new MutationObserver(e=>{e.forEach(t=>{t.attributeName==="class"&&(i.classList.contains("swiper-button-disabled")?(i.style.opacity="0.5",i.style.cursor="not-allowed"):(i.style.opacity="1",i.style.cursor="pointer"))})});V.observe(i,{attributes:!0});const A=new MutationObserver(e=>{e.forEach(t=>{t.attributeName==="class"&&(a.classList.contains("swiper-button-disabled")?(a.style.opacity="0.5",a.style.cursor="not-allowed"):(a.style.opacity="1",a.style.cursor="pointer"))})});A.observe(a,{attributes:!0});T();document.getElementById("animation");function D(e){let t=e.getBoundingClientRect();return t.top>=0&&t.bottom<=window.innerHeight||t.bottom>=0&&t.top<=window.innerHeight}function N(){let e=document.querySelector(".covers.section");e.querySelectorAll(".marquee-line").forEach(function(o){D(e)?o.classList.add("marquee-line-animation"):o.classList.remove("marquee-line-animation")})}document.addEventListener("DOMContentLoaded",N);window.addEventListener("scroll",N);const c=document.querySelector(".btn-next"),l=document.querySelector(".btn-prev"),$=new h(".swiper-box",{modules:[E,S,q],navigation:{prevEl:l,nextEl:c},direction:"horizontal",autoHeight:!1,autoWidth:!1,loop:!1,watchOverflow:!0,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},breakpoints:{1440:{direction:"horizontal"}}});$.update();const U=new MutationObserver(e=>{e.forEach(t=>{t.attributeName==="class"&&(c.classList.contains("swiper-button-disabled")?(c.style.opacity="0.5",c.style.cursor="not-allowed"):(c.style.opacity="1",c.style.cursor="pointer"))})});U.observe(c,{attributes:!0});const _=new MutationObserver(e=>{e.forEach(t=>{t.attributeName==="class"&&(l.classList.contains("swiper-button-disabled")?(l.style.opacity="0.5",l.style.cursor="not-allowed"):(l.style.opacity="1",l.style.cursor="pointer"))})});_.observe(l,{attributes:!0});const L=document.querySelectorAll(".accordion-title"),j=document.querySelectorAll(".accordion-content");L.forEach(e=>e.addEventListener("click",()=>{const t=document.querySelector("#"+e.dataset.tab);t.classList.contains("active")?(t.classList.remove("active"),t.style.maxHeight=0):(j.forEach(o=>{o.classList.remove("active"),o.style.maxHeight=0}),L.forEach(o=>o.classList.remove("active")),e.classList.add("active"),t.classList.add("active"),t.style.maxHeight=t.scrollHeight+"px")}));function z(){document.querySelector(".backdrop").classList.add("active"),document.querySelector(".modal").classList.add("active"),document.addEventListener("keydown",v),document.querySelector(".backdrop").addEventListener("click",v)}function b(){document.querySelector(".backdrop").classList.remove("active"),document.querySelector(".modal").classList.remove("active"),document.removeEventListener("keydown",v),document.querySelector(".backdrop").removeEventListener("click",v)}function v(e){e.key==="Escape"&&b()}document.querySelector(".modal-close-button").addEventListener("click",b);document.querySelector("body").addEventListener("click",e=>{e.target.classList.contains("backdrop")&&b()});const K=document.getElementById("footer-form");function W(e){e.preventDefault(),z()}K.addEventListener("submit",W);document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".mobile-menu-open-btn"),t=document.querySelector(".mobile-menu-wrapper");e.addEventListener("click",function(){t.classList.toggle("is-open")}),document.querySelectorAll(".dropdown").forEach(function(n){n.addEventListener("click",function(s){window.innerWidth>768&&n.nextElementSibling.classList.toggle("is-open")})}),document.querySelector(".mobile-menu-close-btn").addEventListener("click",function(){t.classList.remove("is-open")})});const f=document.querySelector(".footer-form"),u=f.elements.email,m=f.elements.comment,F=document.querySelector(".modal"),w="form-state";f.addEventListener("submit",async e=>{e.preventDefault();const t={email:u.value,comment:m.value};try{M(t),F.classList.add("is-open"),u.value="",m.value="",console.log(t),localStorage.removeItem(w)}catch(o){alert("Please fill all fields correctly"),console.error("Error:",o.message)}});const d=JSON.parse(localStorage.getItem(w));u.value=d&&d.email?d.email:"";m.value=d&&d.comment?d.comment:"";f.addEventListener("input",e=>{localStorage.setItem(w,JSON.stringify({email:u.value.trim(),comment:m.value.trim()}))});const g=30;u.addEventListener("input",k);m.addEventListener("input",k);function k(e){this.value.length>g&&(this.value=this.value.substring(0,g)+"...")}
//# sourceMappingURL=commonHelpers.js.map