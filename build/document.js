(function(f){typeof define==="function"?define("document",f):f()})(function(require,exports,module){!function(e){"use strict";function t(){var e=!s.ieVersion&&o.atrules.indexOf("document")>=0;if(!e){var t=i.createElement("style");u.appendChild(t),t.textContent='@document regexp(".*") {}',e=t.sheet.cssRules.length,u.removeChild(t)}return e}function r(){for(var e=!0,t=arguments.length-1;t>=0;t--)e=e&&n(arguments[t]);return e}function n(e){var t,r,n,i=a.href;if(e){switch(r=e.substr(0,e.indexOf("(")),n=e.match(/\((.*?)\)/)[1],r){case"url":i===n&&(t=!0);break;case"url-prefix":var u=i.substr(0,i.lastIndexOf("/")+1);u===n&&(t=!0);break;case"domain":var s=a.hostname;s.match(n)&&(t=!0);break;case"regexp":n=n.substr(1,n.length-2),i.match(n)&&(t=!0);break;default:console.log("there no document solution like you write!")}return t||!1}}var a=e.location,i=e.document,u=i.documentElement,s=e.stylefix||require("stylefix"),o=e.prefixfree||require("prefixfree");t()||s.register(function(e,t){return t?e.replace(/@document\s+([^\{]+)/g,function(e,t){try{t&&r(t)&&(e="@media all ")}catch(n){}return e}):void 0})}(window);});