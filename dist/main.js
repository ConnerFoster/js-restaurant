!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);var o=function(){const t=document.querySelector("#content"),e=document.createElement("button");e.textContent="Reserve Now",e.classList.add("btn"),e.classList.add("btn-light"),e.style.marginTop="12em",e.classList.add("mr-1"),t.appendChild(e);const n=document.createElement("button");n.textContent="Contact Us",n.classList.add("btn"),n.classList.add("btn-outline-light"),n.style.marginTop="12em",t.appendChild(n)};(function(){const t=document.querySelector("#content"),e=document.createElement("h1");e.textContent="Lorem Café",t.appendChild(e),e.style.color="white",e.classList.add("float-left"),e.style.marginTop="1em";const n=document.createElement("div");n.innerHTML='<ul class="tabs float-right text-light">\n    <li>Home</li>\n    <li>Menu</li>\n    <li>Contact</li>\n    </ul>\n    <div class="clearfix"></div>\n    ',t.appendChild(n)})(),o()}]);