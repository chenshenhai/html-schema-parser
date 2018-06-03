!function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=0)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){var n=r(2),a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();var o=Symbol("_schema_"),i=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this[o]=t}return a(e,[{key:"getHtml",value:function(){return n.a.parseSchema(this[o])}}]),e}();window&&!window.HtmlSchemaParser&&(window.HtmlSchemaParser=i),window&&"function"==typeof window.define&&window.define.amd?window.define("HtmlSchemaParser",function(){return i}):e&&e.exports&&(e.exports=i),t.default=i}.call(t,r(1)(e))},function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},function(e,t,r){"use strict";var n={legalTags:["html","head","title","base","link","meta","style","script","noscript","body","section","nav","article","aside","h1","h2","h3","h4","h5","h6","hgroup","header","footer","address","main","p","hr","pre","blockquote","ol","ul","li","dl","dt","dd","figure","figcaption","div","a","em","strong","small","s","cite","q","dfn","abbr","data","time","code","var","samp","kbd","sub","sup","i","b","u","mark","ruby","rt","rp","bdi","bdo","span","br","wbr","ins","del","img","iframe","embed","object","param","video","audio","source","track","canvas","map","area","svg","math","table","caption","colgroup","col","tbody","thead","tfoot","tr","td","th","form","fieldset","legend","label","input","button","select","datalist","optgroup","option","textarea","keygen","output","progress","meter","details","summary","command","menu"],notClosingTags:{area:!0,base:!0,br:!0,col:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0,embed:!0}};function a(e){var t=Object.prototype.toString.call(e),r=(t=t.replace(/\[/gi,"").replace(/\]/gi,"")).split(/\s/),n=void 0;return r&&r[1]&&(n=r[1]),n}function o(e){return"Array"===a(e)}function i(e){return"Object"===a(e)}function u(e){return"String"===a(e)}var c={escape:function(e){return e=(e=(e=(e=(e=(e=""+e).replace(/&/g,"&amp;")).replace(/</g,"&lt;")).replace(/>/g,"&gt;")).replace(/"/g,"&quot;")).replace(/'/g,"&#39;")}};function l(e){var t="";if(!0!==o(e))return t;for(var r=0;r<e.length;r++){var n=e[r];!0===i(n)?t+=s(n):u(n)&&(t+=n)}return t}function s(e){var t="";if(!0!==i(e))return t;var r=e.tag||"div",a=e.content;n.legalTags.indexOf(r)<0&&(r="div");var o=function(e){var t="";if(!0!==i(e))return t;for(var r=Object.keys(e),n=[],a=0;a<r.length;a++){var o=r[a],l=e[o];!0===u(l)&&n.push(o+'="'+c.escape(l)+'"')}return t=n.join("  ")}(e.attribute);return t=!0===n.notClosingTags[r]?"<"+r+" "+o+" />":"<"+r+" "+o+" >"+l(a)+"</"+r+">"}var f={parseSchema:function(e){var t="";return i(e)?t=s(e):o(e)&&(t=l(e)),t}};t.a=f}]);
//# sourceMappingURL=index.js.map