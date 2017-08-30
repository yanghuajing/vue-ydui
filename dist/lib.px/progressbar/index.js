/*! vue-ydui v0.8.8 by YDCSS (c) 2017 Licensed MIT */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ydui=e():t.ydui=e()}(this,function(){return function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return t[n].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var r={};return e.m=t,e.c=r,e.p="/dist/",e(0)}({0:function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.ProgressBar=void 0;var o=r(96),i=n(o);e.ProgressBar=i.default},1:function(t,e){t.exports=function(t,e,r,n){var o,i=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(o=t,i=t.default);var a="function"==typeof i?i.options:i;if(e&&(a.render=e.render,a.staticRenderFns=e.staticRenderFns),r&&(a._scopeId=r),n){var l=a.computed||(a.computed={});Object.keys(n).forEach(function(t){var e=n[t];l[t]=function(){return e}})}return{esModule:o,exports:i,options:a}}},2:function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var r=this[e];r[2]?t.push("@media "+r[2]+"{"+r[1]+"}"):t.push(r[1])}return t.join("")},t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(n[i]=!0)}for(o=0;o<e.length;o++){var s=e[o];"number"==typeof s[0]&&n[s[0]]||(r&&!s[2]?s[2]=r:r&&(s[2]="("+s[2]+") and ("+r+")"),t.push(s))}},t}},3:function(t,e,r){function n(t){for(var e=0;e<t.length;e++){var r=t[e],n=u[r.id];if(n){n.refs++;for(var o=0;o<n.parts.length;o++)n.parts[o](r.parts[o]);for(;o<r.parts.length;o++)n.parts.push(i(r.parts[o]));n.parts.length>r.parts.length&&(n.parts.length=r.parts.length)}else{for(var s=[],o=0;o<r.parts.length;o++)s.push(i(r.parts[o]));u[r.id]={id:r.id,refs:1,parts:s}}}}function o(){var t=document.createElement("style");return t.type="text/css",c.appendChild(t),t}function i(t){var e,r,n=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(n){if(p)return v;n.parentNode.removeChild(n)}if(g){var i=h++;n=f||(f=o()),e=s.bind(null,n,i,!1),r=s.bind(null,n,i,!0)}else n=o(),e=a.bind(null,n),r=function(){n.parentNode.removeChild(n)};return e(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;e(t=n)}else r()}}function s(t,e,r,n){var o=r?"":n.css;if(t.styleSheet)t.styleSheet.cssText=m(e,o);else{var i=document.createTextNode(o),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(i,s[e]):t.appendChild(i)}}function a(t,e){var r=e.css,n=e.media,o=e.sourceMap;if(n&&t.setAttribute("media",n),o&&(r+="\n/*# sourceURL="+o.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var l="undefined"!=typeof document,d=r(4),u={},c=l&&(document.head||document.getElementsByTagName("head")[0]),f=null,h=0,p=!1,v=function(){},g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,r){p=r;var o=d(t,e);return n(o),function(e){for(var r=[],i=0;i<o.length;i++){var s=o[i],a=u[s.id];a.refs--,r.push(a)}e?(o=d(t,e),n(o)):o=[];for(var i=0;i<r.length;i++){var a=r[i];if(0===a.refs){for(var l=0;l<a.parts.length;l++)a.parts[l]();delete u[a.id]}}}};var m=function(){var t=[];return function(e,r){return t[e]=r,t.filter(Boolean).join("\n")}}()},4:function(t,e){t.exports=function(t,e){for(var r=[],n={},o=0;o<e.length;o++){var i=e[o],s=i[0],a=i[1],l=i[2],d=i[3],u={id:t+":"+o,css:a,media:l,sourceMap:d};n[s]?n[s].parts.push(u):r.push(n[s]={id:s,parts:[u]})}return r}},5:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){var t=function(t){t.preventDefault(),t.stopPropagation()},e=!1;return{lock:function(r){e||(e=!0,(r||document).addEventListener("touchmove",t))},unlock:function(r){e=!1,(r||document).removeEventListener("touchmove",t)}}}(),n=!!(window.navigator&&window.navigator.userAgent||"").match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),o=function(t){var e=/^#([a-fA-F0-9]){3}(([a-fA-F0-9]){3})?$/,r=/^[rR][gG][bB][aA]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){3}\s*(\.|\d+\.)?\d+\s*\)$/,n=/^[rR][gG][bB]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){2}(25[0-5]|2[0-4]\d|1?\d{1,2})\s*\)$/;return e.test(t)||r.test(t)||n.test(t)},i=function(t){for(var e=t;e&&"HTML"!==e.tagName&&"BODY"!==e.tagName&&1===e.nodeType;){var r=document.defaultView.getComputedStyle(e).overflowY;if("scroll"===r||"auto"===r)return e;e=e.parentNode}return window},s=function(t,e){var r=t==window?document.body.offsetHeight:t.offsetHeight,n=t===window?0:t.getBoundingClientRect().top,o=e.getBoundingClientRect().top-n,i=o+e.offsetHeight;return o>=0&&o<r||i>0&&i<=r},a=function(t,e){return e=e||"",0!=e.replace(/\s/g,"").length&&new RegExp(" "+e+" ").test(" "+t.className+" ")},l=function(t,e){a(t,e)||(t.className=""==t.className?e:t.className+" "+e)},d=function(t,e){if(a(t,e)){for(var r=" "+t.className.replace(/[\t\r\n]/g,"")+" ";r.indexOf(" "+e+" ")>=0;)r=r.replace(" "+e+" "," ");t.className=r.replace(/^\s+|\s+$/g,"")}},u=function(t){function e(r,n,o){if(r!==n){var i=r+o>n?n:r+o;r>n&&(i=r-o<n?n:r-o),t===window?window.scrollTo(i,i):t.scrollTop=i,window.requestAnimationFrame(function(){return e(i,n,o)})}}var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments[2],o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500;window.requestAnimationFrame||(window.requestAnimationFrame=window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(t,1e3/60)});var i=Math.abs(r-n),s=Math.ceil(i/o*50);e(r,n,s)};e.pageScroll=r,e.isIOS=n,e.isColor=o,e.getScrollview=i,e.checkInview=s,e.addClass=l,e.removeClass=d,e.scrollTop=u},47:function(t,e,r){e=t.exports=r(2)(),e.push([t.id,".m-progressbar{position:relative;color:#333;width:100%;height:100%}.m-progressbar>svg{width:100%}.m-progressbar>svg>path{-webkit-transition:all 1s linear;transition:all 1s linear}.progressbar-content{position:absolute;top:50%;left:50%;font-size:15px;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}",""])},96:function(t,e,r){r(196);var n=r(1)(r(246),r(155),null,null);t.exports=n.exports},155:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"m-progressbar"},["line"!=t.type?r("div",{staticClass:"progressbar-content"},[t._t("default")],2):t._e(),t._v(" "),r("svg",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],attrs:{viewBox:t.viewBox,preserveAspectRatio:"line"==t.type?"none":""}},[r("path",{attrs:{"fill-opacity":t.fillColor?1:0,d:t.getPathString,fill:t.fillColor,stroke:t.strokeColor,"stroke-width":t.trailWidth}}),t._v(" "),r("path",{ref:"trailPath",style:{strokeDasharray:t.stroke.dasharray,strokeDashoffset:t.stroke.dashoffset},attrs:{"fill-opacity":"0",d:t.getPathString,stroke:t.trailColor,"stroke-width":t.strokeWidth?t.strokeWidth:t.trailWidth}})])])},staticRenderFns:[]}},196:function(t,e,r){var n=r(47);"string"==typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals);r(3)("2136222b",n,!0)},246:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(5);e.default={name:"yd-progressbar",data:function(){return{viewBox:"0 0 100 100",show:!1,stroke:{dasharray:"",dashoffset:""}}},props:{type:{validator:function(t){return["circle","line"].indexOf(t)>-1},default:"circle"},fillColor:{validator:function(t){return!t||(0,n.isColor)(t)}},strokeWidth:{validator:function(t){return/^\d*$/.test(t)},default:0},strokeColor:{validator:function(t){return!t||(0,n.isColor)(t)},default:"#E5E5E5"},trailWidth:{validator:function(t){return/^\d*$/.test(t)},default:0,require:!0},trailColor:{validator:function(t){return!t||(0,n.isColor)(t)},default:"#646464"},progress:{validator:function(t){return/^(0(.\d+)?|1(\.0+)?)$/.test(t)},default:0}},methods:{init:function(){var t=this,e=this.length=this.$refs.trailPath.getTotalLength();this.stroke.dashoffset=e,this.stroke.dasharray=e+","+e,this.scrollview=(0,n.getScrollview)(this.$el),this.show=!0,"line"==this.type&&(this.viewBox="0 0 100 "+(this.strokeWidth?this.strokeWidth:this.trailWidth)),this.$nextTick(function(){t.scrollHandler()}),this.bindEvent()},scrollHandler:function(){(0,n.checkInview)(this.scrollview,this.$el)&&(this.stroke.dashoffset=this.length-this.progress*this.length)},bindEvent:function(){this.scrollview.addEventListener("scroll",this.scrollHandler),window.addEventListener("resize",this.scrollHandler)},unbindEvent:function(){this.scrollview.removeEventListener("scroll",this.scrollHandler),window.removeEventListener("resize",this.scrollHandler)}},watch:{progress:function(t){this.stroke.dashoffset=this.length-t*this.length}},computed:{getPathString:function(){if("line"==this.type)return"M 0,{R} L 100,{R}".replace(/\{R\}/g,this.trailWidth/2);var t=50-(this.strokeWidth?this.strokeWidth:this.trailWidth)/2;return"M 50,50 m 0,-{R} a {R},{R} 0 1 1 0,{2R} a {R},{R} 0 1 1 0,-{2R}".replace(/\{R\}/g,t).replace(/\{2R\}/g,2*t)}},mounted:function(){this.init()},destoryed:function(){this.unbindEvent()}}}})});