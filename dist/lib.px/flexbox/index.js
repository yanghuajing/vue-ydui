/*! vue-ydui v0.6.5 by YDCSS (c) 2017 Licensed MIT */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ydui=t():e.ydui=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="/dist/",t(0)}({0:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.FlexBoxItem=t.FlexBox=void 0;var o=n(58),i=r(o),s=n(57),a=r(s);t.FlexBox=i.default,t.FlexBoxItem=a.default},1:function(e,t){e.exports=function(e,t,n,r){var o,i=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(o=e,i=e.default);var a="function"==typeof i?i.options:i;if(t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),n&&(a._scopeId=n),r){var l=a.computed||(a.computed={});Object.keys(r).forEach(function(e){var t=r[e];l[e]=function(){return t}})}return{esModule:o,exports:i,options:a}}},2:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var s=t[o];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},3:function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=u[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(i(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var s=[],o=0;o<n.parts.length;o++)s.push(i(n.parts[o]));u[n.id]={id:n.id,refs:1,parts:s}}}}function o(){var e=document.createElement("style");return e.type="text/css",c.appendChild(e),e}function i(e){var t,n,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(r){if(x)return v;r.parentNode.removeChild(r)}if(h){var i=p++;r=d||(d=o()),t=s.bind(null,r,i,!1),n=s.bind(null,r,i,!0)}else r=o(),t=a.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function s(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=m(t,o);else{var i=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function a(e,t){var n=t.css,r=t.media,o=t.sourceMap;if(r&&e.setAttribute("media",r),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var l="undefined"!=typeof document,f=n(4),u={},c=l&&(document.head||document.getElementsByTagName("head")[0]),d=null,p=0,x=!1,v=function(){},h="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){x=n;var o=f(e,t);return r(o),function(t){for(var n=[],i=0;i<o.length;i++){var s=o[i],a=u[s.id];a.refs--,n.push(a)}t?(o=f(e,t),r(o)):o=[];for(var i=0;i<n.length;i++){var a=n[i];if(0===a.refs){for(var l=0;l<a.parts.length;l++)a.parts[l]();delete u[a.id]}}}};var m=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},4:function(e,t){e.exports=function(e,t){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],s=i[0],a=i[1],l=i[2],f=i[3],u={id:e+":"+o,css:a,media:l,sourceMap:f};r[s]?r[s].parts.push(u):n.push(r[s]={id:s,parts:[u]})}return n}},28:function(e,t,n){t=e.exports=n(2)(),t.push([e.id,".m-flexbox{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.m-flexbox.flexbox-vertical{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:100%}.m-flexbox.flexbox-vertical .flexbox-item{width:100%}.m-flexbox .flexbox-item{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}",""])},57:function(e,t,n){var r=n(1)(n(189),n(135),null,null);e.exports=r.exports},58:function(e,t,n){n(159);var r=n(1)(n(190),n(119),null,null);e.exports=r.exports},119:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"m-flexbox",class:"vertical"==e.direction?"flexbox-vertical":"flexbox-horizontal"},[e._t("default")],2)},staticRenderFns:[]}},135:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flexbox-item"},[e._t("default")],2)},staticRenderFns:[]}},159:function(e,t,n){var r=n(28);"string"==typeof r&&(r=[[e.id,r,""]]),r.locals&&(e.exports=r.locals);n(3)("93a58c3e",r,!0)},189:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"yd-flexbox-item"}},190:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"yd-flexbox",props:{direction:{validator:function(e){return["horizontal","vertical"].indexOf(e)>-1},default:"horizontal"}}}}})});