!function(e){var t={};function n(r){if(t[r])return t[r].exports;var c=t[r]={i:r,l:!1,exports:{}};return e[r].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(r,c,function(t){return e[t]}.bind(null,c));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r=function(){const e=document.querySelector("#content"),t=document.createElement("div");t.id="page-div",e.appendChild(t);const n=document.createElement("h4");n.textContent="Call Us: 812-555-5555",n.style.color="white",t.appendChild(n);const r=document.createElement("h4");r.textContent="Email Address: lorembake@notanaddress.com",r.style.color="white",t.appendChild(r);const c=document.createElement("h4");c.textContent="Mailing Address: 123 E Lorem Rd ",c.style.color="white",t.appendChild(c)};var c=function(){const e=document.querySelector("#content"),t=document.createElement("div");t.id="page-div",e.appendChild(t);const n=document.createElement("button");n.textContent="Reserve Now",n.classList.add("btn"),n.classList.add("btn-light"),n.style.marginTop="12em",n.classList.add("mr-1"),t.appendChild(n),n.id="reserve-button";const c=document.createElement("button");c.textContent="Contact Us",c.classList.add("btn"),c.classList.add("btn-outline-light"),c.style.marginTop="12em",t.appendChild(c),c.id="contact-button";const o=document.querySelector("#home"),a=document.querySelector("#menuA"),d=document.querySelector("#contact");function i(){document.querySelector("#page-div").remove(),r(),d.classList.add("current"),a.classList.remove("current"),o.classList.remove("current")}n.addEventListener("click",i),c.addEventListener("click",i)};var o=function(){const e=document.querySelector("#content"),t=document.createElement("div");function n(e,n){const r=document.createElement("div");r.textContent=e,r.classList.add("menu-name"),r.classList.add("text-center"),t.appendChild(r);const c=document.createElement("p");c.textContent=n,c.classList.add("menu-desc"),r.appendChild(c)}t.id="page-div",e.appendChild(t),n("Cookies","Your choice of Chocolate Chip, Oatmeal Raisin, or Macadamia Nut."),n("Cheesecake","New York Style, or Cherry Cheesecake"),n("Cakes","Chocolate, Wedding Cake, or our specialty Lorem Swirl Cake")};(function(){const e=document.querySelector("#content"),t=document.createElement("h1");t.textContent="Lorem Bakery",e.appendChild(t),t.style.color="white",t.classList.add("float-left"),t.style.marginTop="1em";const n=document.createElement("div");n.innerHTML='<ul class="tabs float-right text-light">\n    <li id="navbar-home"> <a id="home" href="#">Home</a> </li>\n    <li id="navbar-menu"> <a id="menuA" href="#">Menu</a> </li>\n    <li id="navbar-contact"> <a id="contact" href="#">Contact</a> </li>\n    </ul>\n    <div class="clearfix"></div>\n    ',e.appendChild(n)})(),c();const a=document.querySelector("#navbar-home"),d=document.querySelector("#navbar-menu"),i=document.querySelector("#navbar-contact"),l=(document.querySelector("#content"),document.querySelector("#home")),s=document.querySelector("#menuA"),u=document.querySelector("#contact");l.classList.add("current"),d.addEventListener("click",()=>{document.querySelector("#page-div").remove(),o(),s.classList.add("current"),l.classList.remove("current"),u.classList.remove("current")}),a.addEventListener("click",()=>{document.querySelector("#page-div").remove(),c(),l.classList.add("current"),u.classList.remove("current"),s.classList.remove("current")}),i.addEventListener("click",(function(){document.querySelector("#page-div").remove(),r(),u.classList.add("current"),s.classList.remove("current"),l.classList.remove("current")}))}]);