function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,u=/^0o[0-7]+$/i,f=parseInt,a="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=a||c||Function("return this")(),d=Object.prototype.toString,s=Math.max,p=Math.min,m=function(){return l.Date.now()};function v(e,t,n){var i,r,o,u,f,a,c=0,l=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=i,o=r;return i=r=void 0,c=t,u=e.apply(o,n)}function j(e){return c=e,f=setTimeout(T,t),l?b(e):u}function w(e){var n=e-a;return void 0===a||n>=t||n<0||d&&e-c>=o}function T(){var e=m();if(w(e))return h(e);f=setTimeout(T,function(e){var n=t-(e-a);return d?p(n,o-(e-c)):n}(e))}function h(e){return f=void 0,v&&i?b(e):(i=r=void 0,u)}function x(){var e=m(),n=w(e);if(i=arguments,r=this,a=e,n){if(void 0===f)return j(a);if(d)return f=setTimeout(T,t),b(a)}return void 0===f&&(f=setTimeout(T,t)),u}return t=g(t)||0,y(n)&&(l=!!n.leading,o=(d="maxWait"in n)?s(g(n.maxWait)||0,t):o,v="trailing"in n?!!n.trailing:v),x.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=a=r=f=void 0},x.flush=function(){return void 0===f?u:h(m())},x}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=o.test(e);return n||u.test(e)?f(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return y(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),v(e,t,{leading:i,maxWait:t,trailing:r})};const b=document.querySelector("iframe"),j=new Vimeo.Player(b);j.on("timeupdate",e(t)((function({seconds:e}){localStorage.setItem("videoplayer-current-time",e)}),1e3)),localStorage.getItem("videoplayer-current-time")&&(j.setCurrentTime(Number(localStorage.getItem("videoplayer-current-time"))),console.log(localStorage.getItem("videoplayer-current-time")));
//# sourceMappingURL=02-video.a53d5b97.js.map
