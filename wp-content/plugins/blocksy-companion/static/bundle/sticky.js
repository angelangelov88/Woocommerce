!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=2)}([function(t,e){t.exports=window.ctFrontend},function(t,e){t.exports=window.ctEvents},function(t,e,r){"use strict";r.r(e);r(1);var n=r(0),o=function(t,e,r){return Math.max(t,Math.min(e,r))},i=function(t,e,r){return e[0]+(e[1]-e[0])/(t[1]-t[0])*(r-t[0])},a=function(t){if(t.blcInitialHeight)return t.blcInitialHeight;var e=getComputedStyle(t),r=getComputedStyle(t.firstElementChild),n=0;n+=parseFloat(e.borderTopWidth),n+=parseFloat(e.borderBottomWidth),n+=parseFloat(r.borderTopWidth),n+=parseFloat(r.borderBottomWidth);var o=parseFloat(e.getPropertyValue("--height"))+n;return t.blcInitialHeight=o,o},c=function(t){var e=getComputedStyle(t).getPropertyValue("--stickyShrink");return e?parseFloat(e)/100*a(t):a(t)};function s(t){return function(t){if(Array.isArray(t))return u(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return u(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function d(t){return function(t){if(Array.isArray(t))return l(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return l(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var y=function(t){var e=t.stickyContainer,r=t.isSticky,n=t.startPosition,u=t.stickyComponents,l=Array.from(e.querySelectorAll("[data-row]")).reduce((function(t,e){return t+e.getBoundingClientRect().height}),0);if(0===n&&0===window.scrollY&&(e.dataset.sticky=["fixed"].concat(d(u)).join(":"),e.parentNode.style.setProperty("--minHeight","".concat(l,"px"))),r){if(u.indexOf("yes")>-1)return;k(e,"no"),e.parentNode.style.setProperty("--minHeight","".concat(l,"px")),e.dataset.sticky=["yes"].concat(d(u)).join(":"),function(t){var e=t.stickyContainer,r=t.startPosition;s(e.querySelectorAll('[data-row*="middle"]')).map((function(t){if(t.querySelector('[data-id="logo"] .site-logo-container')){var e=t.querySelector('[data-id="logo"] .site-logo-container'),n=parseFloat(getComputedStyle(e).getPropertyValue("--maxHeight")||50),s=parseFloat(getComputedStyle(e).getPropertyValue("--logoStickyShrink").toString().replace(",",".")||1),u=n*s;if(1!==s){var d=a(t),l=c(t);e.style.setProperty("--logo-shrink-height",i([r,r+Math.abs(d===l?n-u:d-l)],[1,s],o(r,r+Math.abs(d===l?n-u:d-l),scrollY)))}}}))}({stickyContainer:e,startPosition:n}),function(t){var e=t.stickyContainer,r=t.containerInitialHeight,n=t.startPosition;Array.from(e.querySelectorAll("[data-row]")).reduce((function(t,e,r){return t+c(e)}),0)!==r&&e.querySelector('[data-row*="middle"]')&&[e.querySelector('[data-row*="middle"]')].map((function(t){var e=a(t),r=c(t);e!==r&&t.style.setProperty("--shrinkHeight","".concat(i([n,n+Math.abs(e-r)],[e,r],o(n,n+Math.abs(e-r),scrollY)),"px"))}))}({stickyContainer:e,containerInitialHeight:l,startPosition:n}),document.body.style.setProperty("--headerStickyHeightAnimated","".concat(parseInt(e.getBoundingClientRect().height),"px"))}else{var y=Array.from(e.querySelectorAll("[data-row]")).reduce((function(t,e){return t+a(e)}),0);document.body.removeAttribute("style"),Array.from(e.querySelectorAll("[data-row]")).map((function(t){return t.removeAttribute("style")})),Array.from(e.querySelectorAll('[data-row*="middle"] .site-logo-container')).map((function(t){return t.removeAttribute("style")})),k(e,"yes"),e.parentNode.style.setProperty("--minHeight","".concat(y,"px")),0===n&&0===window.scrollY?e.dataset.sticky=["fixed"].concat(d(u)).join(":"):(e.parentNode.removeAttribute("style"),e.dataset.sticky=u.join(":"))}};function f(t){return function(t){if(Array.isArray(t))return m(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return m(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return m(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var p=window.scrollY;function h(t){return function(t){if(Array.isArray(t))return b(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return b(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return b(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function g(t){return function(t){if(Array.isArray(t))return A(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return A(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return A(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var k=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yes";Array.from(t.querySelectorAll("[data-row][data-transparent-row]")).map((function(t){t.dataset.transparentRow=e}))},S=function(t){if(-1===t.dataset.sticky.indexOf("shrink")&&-1===t.dataset.sticky.indexOf("auto-hide"))return t.parentNode.getBoundingClientRect().height+200;var e=t.closest("header").getBoundingClientRect().top+scrollY;if(e>0){var r=document.elementFromPoint(0,t.getBoundingClientRect().top-3);r&&function(t){for(var e=[];t&&t!==document;t=t.parentNode)e.push(t);return e}(r).map((function(t){return getComputedStyle(t).position})).indexOf("fixed")>-1&&(e=0)}var n=t.parentNode;return 1===n.parentNode.children.length||n.parentNode.children[0].classList.contains("ct-sticky-container")?e:Array.from(n.parentNode.children).reduce((function(t,e,r){return t.indexOf(0)>-1||!e.dataset.row?[].concat(g(t),[0]):[].concat(g(t),[e.classList.contains("ct-sticky-container")?0:e.getBoundingClientRect().height])}),[]).reduce((function(t,e){return t+e}),e)},v=null,w=function t(){if(v!==scrollY){v=scrollY;var e=document.querySelector('[data-device="'.concat(Object(n.getCurrentScreen)(),'"] [data-sticky]'));if(e){var r=S(e),o=r>0&&Math.abs(window.scrollY-r)<5||window.scrollY>r;o&&-1===document.body.dataset.header.indexOf("shrink")&&(document.body.dataset.header="".concat(document.body.dataset.header,":shrink")),!o&&document.body.dataset.header.indexOf("shrink")>-1&&(document.body.dataset.header=document.body.dataset.header.replace(":shrink",""));var i=e.dataset.sticky.split(":").filter((function(t){return"yes"!==t&&"no"!==t&&"fixed"!==t}));i.indexOf("shrink")>-1&&y({stickyContainer:e,isSticky:o,startPosition:r,stickyComponents:i}),i.indexOf("auto-hide")>-1&&function(t){var e=t.startPosition,r=t.stickyContainer,n=t.isSticky,o=t.stickyComponents,i=Array.from(r.querySelectorAll("[data-row]")).reduce((function(t,e){return t+e.getBoundingClientRect().height}),0);if(window.scrollY<e&&(p=window.scrollY),n&&window.scrollY-p==0&&document.body.style.setProperty("--headerStickyHeightAnimated","0px"),n&&window.scrollY-p<-5)-1===r.dataset.sticky.indexOf("yes")&&(r.dataset.sticky=["yes-start"].concat(f(o)).join(":"),requestAnimationFrame((function(){r.dataset.sticky=r.dataset.sticky.replace("yes-start","yes-end"),setTimeout((function(){r.dataset.sticky=r.dataset.sticky.replace("yes-end","yes")}),200)}))),k(r,"no"),document.body.removeAttribute("style"),r.parentNode.style.setProperty("--minHeight","".concat(i,"px"));else{if(!n)return r.dataset.sticky=o.filter((function(t){return"yes-end"!==t})).join(":"),r.parentNode.removeAttribute("style"),Array.from(r.querySelectorAll("[data-row]")).map((function(t){return t.removeAttribute("style")})),k(r,"yes"),document.body.style.setProperty("--headerStickyHeightAnimated","0px"),void(p=window.scrollY);-1===r.dataset.sticky.indexOf("yes-hide")&&r.dataset.sticky.indexOf("yes:")>-1&&window.scrollY-p>5&&(r.dataset.sticky=["yes-hide-start"].concat(f(o)).join(":"),document.body.style.setProperty("--headerStickyHeightAnimated","0px"),requestAnimationFrame((function(){r.dataset.sticky=r.dataset.sticky.replace("yes-hide-start","yes-hide-end"),setTimeout((function(){r.dataset.sticky=o.join(":"),r.parentNode.removeAttribute("style"),Array.from(r.querySelectorAll("[data-row]")).map((function(t){return t.removeAttribute("style")})),k(r,"yes")}),200)})))}p=window.scrollY}({stickyContainer:e,isSticky:o,startPosition:r,stickyComponents:i}),(i.indexOf("slide")>-1||i.indexOf("fade")>-1)&&function(t){var e=t.stickyContainer,r=t.isSticky,n=t.startPosition,o=t.stickyComponents,i=Array.from(e.querySelectorAll("[data-row]")).reduce((function(t,e){return t+e.getBoundingClientRect().height}),0);r?(-1===e.dataset.sticky.indexOf("yes")&&(e.dataset.sticky=["yes-start"].concat(h(o)).join(":"),requestAnimationFrame((function(){e.dataset.sticky=e.dataset.sticky.replace("yes-start","yes-end"),setTimeout((function(){e.dataset.sticky=e.dataset.sticky.replace("yes-end","yes")}),200)}))),k(e,"no"),e.parentNode.style.setProperty("--minHeight","".concat(i,"px"))):-1===e.dataset.sticky.indexOf("yes-hide")&&e.dataset.sticky.indexOf("yes:")>-1&&(Math.abs(window.scrollY-n)>10?(e.dataset.sticky=o.join(":"),setTimeout((function(){e.parentNode.removeAttribute("style"),Array.from(e.querySelectorAll("[data-row]")).map((function(t){return t.removeAttribute("style")}))}),300),k(e,"yes")):(e.dataset.sticky=["yes-hide-start"].concat(h(o)).join(":"),requestAnimationFrame((function(){e.dataset.sticky=e.dataset.sticky.replace("yes-hide-start","yes-hide-end"),setTimeout((function(){e.dataset.sticky=o.join(":"),setTimeout((function(){e.parentNode.removeAttribute("style"),Array.from(e.querySelectorAll("[data-row]")).map((function(t){return t.removeAttribute("style")}))}),300),k(e,"yes")}),200)}))))}({stickyContainer:e,isSticky:o,startPosition:r,stickyComponents:i}),requestAnimationFrame((function(){t()}))}}else requestAnimationFrame((function(){t()}))};document.querySelector("header [data-sticky]")&&w(),Object(n.registerDynamicChunk)("blocksy_sticky_header",{mount:function(t){}})}]);