(function(f){typeof define==="function"?define("posfixed",f):f()})(function(require,exports,module){"use strict";!function(e,t,i){function o(e,t){return t=t||"auto",e+':expression((window.posfixed || seajs.require)("posfixed")(this,"'+e+'","'+t+'"))'}function s(e,t,i){function o(t,i){var s,f;return t&&(t=t.match(/^([\d\.]+)(.*)$/))?(s=parseFloat(t[1]),f=t[2],f&&"px"!==f&&("%"===f?s*=n[i?"offsetWidth":"offsetHeight"]/100:f&&c[f]?s*=72/c[f]:"rem"===f&&e!==n?s*=o(n.currentStyle.fontSize):"em"===f&&(s*=o(e.currentStyle.fontSize)))):s=0/0,s}var s,f=e.uniqueID,r=p[f];if(t=t.toLowerCase(),i=i.toLowerCase(),r||(p[f]=r={},r.fixedright=r.fixedbottom="auto"),r[t]=i,"position"===t){if("fixed"===i){if(r.fixed){var u=o(r.left,!0),a=o(r.top),x=o(r.right,!0),h=o(r.bottom);r.fixedleft=d(u)?d(x)?r.left:n.scrollLeft+n.clientWidth-e.offsetWidth-x:n.scrollLeft+u,r.fixedtop=d(a)?d(h)?r.top:n.scrollTop+n.clientHeight-e.offsetHeight-h:n.scrollTop+a}else setTimeout(function(){r.top&&r.left||(e.className+=" "+l)},1),r.fixed=!0;s="absolute"}}else"fixed"===r.position&&(s=r["fixed"+t]);return s||i}var f=o("$1","$2")+"$3",r=e.document,n=r.documentElement,l="fixed_helper_"+r.uniqueID,u=t.ieVersion,d=e.isNaN,p={},c={cm:2.54,mm:25.4,q:101.6,pt:72,pc:6,"in":1};if(7>u){i.push([/^(position)\s*:\s*(\w+)([\};]|$)/i,f]),i.push([/^(left|top|right|bottom)\s*:\s*([\d\.]+[\w\%]*)([\s\}\/;]|$)/i,f]);try{module.exports=s}catch(a){e.posfixed=s}t.ready(function(){t.addRestCss("html{background: url(about:blank) no-repeat fixed}."+l+"{"+o("top")+";"+o("left")+"}")})}}(window,window.stylefix||require("stylefix"),window.cssprops||require("cssprops"));});