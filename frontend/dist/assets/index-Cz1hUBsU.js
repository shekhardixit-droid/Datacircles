var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,o)=>(o=n==null?{}:e(i(n)),s(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var ee=Array.isArray;function S(){}var C={H:null,A:null,T:null,S:null},te=Object.prototype.hasOwnProperty;function ne(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function re(e,t){return ne(e.type,t,e.props)}function w(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ie(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ae=/\/+/g;function oe(e,t){return typeof e==`object`&&e&&e.key!=null?ie(``+e.key):t.toString(36)}function se(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(S,S):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function ce(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,ce(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+oe(e,0):a,ee(o)?(i=``,c!=null&&(i=c.replace(ae,`$&/`)+`/`),ce(o,r,i,``,function(e){return e})):o!=null&&(w(o)&&(o=re(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ae,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(ee(e))for(var u=0;u<e.length;u++)a=e[u],s=l+oe(a,u),c+=ce(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+oe(a,u++),c+=ce(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return ce(se(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function le(e,t,n){if(e==null)return e;var r=[],i=0;return ce(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ue(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var T=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},E={map:le,forEach:function(e,t,n){le(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return le(e,function(){t++}),t},toArray:function(e){return le(e,function(e){return e})||[]},only:function(e){if(!w(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=E,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=C,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return C.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!te.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return ne(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)te.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return ne(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=w,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:ue}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=C.T,n={};C.T=n;try{var r=e(),i=C.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(S,T)}catch(e){T(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),C.T=t}},e.unstable_useCacheRefresh=function(){return C.H.useCacheRefresh()},e.use=function(e){return C.H.use(e)},e.useActionState=function(e,t,n){return C.H.useActionState(e,t,n)},e.useCallback=function(e,t){return C.H.useCallback(e,t)},e.useContext=function(e){return C.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return C.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return C.H.useEffect(e,t)},e.useEffectEvent=function(e){return C.H.useEffectEvent(e)},e.useId=function(){return C.H.useId()},e.useImperativeHandle=function(e,t,n){return C.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return C.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return C.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return C.H.useMemo(e,t)},e.useOptimistic=function(e,t){return C.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return C.H.useReducer(e,t,n)},e.useRef=function(e){return C.H.useRef(e)},e.useState=function(e){return C.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return C.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return C.H.useTransition()},e.version=`19.2.8`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m){if(n(c)!==null)m=!0,ee||(ee=!0,w());else{var t=n(l);t!==null&&oe(x,t.startTime-e)}}}var ee=!1,S=-1,C=5,te=-1;function ne(){return g?!0:!(e.unstable_now()-te<C)}function re(){if(g=!1,ee){var t=e.unstable_now();te=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(S),S=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&ne());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&oe(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?w():ee=!1}}}var w;if(typeof y==`function`)w=function(){y(re)};else if(typeof MessageChannel<`u`){var ie=new MessageChannel,ae=ie.port2;ie.port1.onmessage=re,w=function(){ae.postMessage(null)}}else w=function(){_(re,0)};function oe(t,n){S=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):C=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(S),S=-1):h=!0,oe(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,ee||(ee=!0,w()))),r},e.unstable_shouldYield=ne,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`){if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)}},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`){if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)}},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.8`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),ee=Symbol.for(`react.consumer`),S=Symbol.for(`react.context`),C=Symbol.for(`react.forward_ref`),te=Symbol.for(`react.suspense`),ne=Symbol.for(`react.suspense_list`),re=Symbol.for(`react.memo`),w=Symbol.for(`react.lazy`),ie=Symbol.for(`react.activity`),ae=Symbol.for(`react.memo_cache_sentinel`),oe=Symbol.iterator;function se(e){return typeof e!=`object`||!e?null:(e=oe&&e[oe]||e[`@@iterator`],typeof e==`function`?e:null)}var ce=Symbol.for(`react.client.reference`);function le(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===ce?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case te:return`Suspense`;case ne:return`SuspenseList`;case ie:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case S:return e.displayName||`Context`;case ee:return(e._context.displayName||`Context`)+`.Consumer`;case C:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case re:return t=e.displayName||null,t===null?le(e.type)||`Memo`:t;case w:t=e._payload,e=e._init;try{return le(e(t))}catch{}}return null}var ue=Array.isArray,T=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,E=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,de={pending:!1,data:null,method:null,action:null},fe=[],pe=-1;function me(e){return{current:e}}function he(e){0>pe||(e.current=fe[pe],fe[pe]=null,pe--)}function D(e,t){pe++,fe[pe]=e.current,e.current=t}var ge=me(null),_e=me(null),ve=me(null),ye=me(null);function be(e,t){switch(D(ve,t),D(_e,e),D(ge,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}he(ge),D(ge,e)}function xe(){he(ge),he(_e),he(ve)}function Se(e){e.memoizedState!==null&&D(ye,e);var t=ge.current,n=Hd(t,e.type);t!==n&&(D(_e,e),D(ge,n))}function Ce(e){_e.current===e&&(he(ge),he(_e)),ye.current===e&&(he(ye),Qf._currentValue=de)}var we,Te;function Ee(e){if(we===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);we=t&&t[1]||``,Te=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+we+e+Te}var De=!1;function Oe(e,t){if(!e||De)return``;De=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{De=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Ee(n):``}function ke(e,t){switch(e.tag){case 26:case 27:case 5:return Ee(e.type);case 16:return Ee(`Lazy`);case 13:return e.child!==t&&t!==null?Ee(`Suspense Fallback`):Ee(`Suspense`);case 19:return Ee(`SuspenseList`);case 0:case 15:return Oe(e.type,!1);case 11:return Oe(e.type.render,!1);case 1:return Oe(e.type,!0);case 31:return Ee(`Activity`);default:return``}}function Ae(e){try{var t=``,n=null;do t+=ke(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var je=Object.prototype.hasOwnProperty,Me=t.unstable_scheduleCallback,Ne=t.unstable_cancelCallback,Pe=t.unstable_shouldYield,Fe=t.unstable_requestPaint,Ie=t.unstable_now,Le=t.unstable_getCurrentPriorityLevel,Re=t.unstable_ImmediatePriority,ze=t.unstable_UserBlockingPriority,Be=t.unstable_NormalPriority,Ve=t.unstable_LowPriority,He=t.unstable_IdlePriority,Ue=t.log,We=t.unstable_setDisableYieldValue,Ge=null,Ke=null;function qe(e){if(typeof Ue==`function`&&We(e),Ke&&typeof Ke.setStrictMode==`function`)try{Ke.setStrictMode(Ge,e)}catch{}}var Je=Math.clz32?Math.clz32:Ze,Ye=Math.log,Xe=Math.LN2;function Ze(e){return e>>>=0,e===0?32:31-(Ye(e)/Xe|0)|0}var Qe=256,$e=262144,et=4194304;function tt(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function nt(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=tt(n))):i=tt(o):i=tt(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=tt(n))):i=tt(o)):i=tt(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function rt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function it(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function at(){var e=et;return et<<=1,!(et&62914560)&&(et=4194304),e}function ot(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function st(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ct(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Je(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&lt(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function lt(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Je(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function ut(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Je(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function dt(e,t){var n=t&-t;return n=n&42?1:ft(n),(n&(e.suspendedLanes|t))===0?n:0}function ft(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function pt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function mt(){var e=E.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function ht(e,t){var n=E.p;try{return E.p=e,t()}finally{E.p=n}}var gt=Math.random().toString(36).slice(2),_t=`__reactFiber$`+gt,vt=`__reactProps$`+gt,yt=`__reactContainer$`+gt,bt=`__reactEvents$`+gt,xt=`__reactListeners$`+gt,St=`__reactHandles$`+gt,Ct=`__reactResources$`+gt,wt=`__reactMarker$`+gt;function Tt(e){delete e[_t],delete e[vt],delete e[bt],delete e[xt],delete e[St]}function Et(e){var t=e[_t];if(t)return t;for(var n=e.parentNode;n;){if(t=n[yt]||n[_t]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[_t])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function Dt(e){if(e=e[_t]||e[yt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ot(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function kt(e){var t=e[Ct];return t||=e[Ct]={hoistableStyles:new Map,hoistableScripts:new Map},t}function O(e){e[wt]=!0}var At=new Set,jt={};function Mt(e,t){Nt(e,t),Nt(e+`Capture`,t)}function Nt(e,t){for(jt[e]=t,e=0;e<t.length;e++)At.add(t[e])}var Pt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Ft={},It={};function Lt(e){return je.call(It,e)?!0:je.call(Ft,e)?!1:Pt.test(e)?It[e]=!0:(Ft[e]=!0,!1)}function Rt(e,t,n){if(Lt(t)){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}}function zt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function k(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Bt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Vt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Ht(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ut(e){if(!e._valueTracker){var t=Vt(e)?`checked`:`value`;e._valueTracker=Ht(e,t,``+e[t])}}function Wt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Vt(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}function Gt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Kt=/[\n"\\]/g;function qt(e){return e.replace(Kt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Jt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Bt(t)):e.value!==``+Bt(t)&&(e.value=``+Bt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Xt(e,o,Bt(n)):Xt(e,o,Bt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Bt(s):e.removeAttribute(`name`)}function Yt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Ut(e);return}n=n==null?``:``+Bt(n),t=t==null?n:``+Bt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Ut(e)}function Xt(e,t,n){t===`number`&&Gt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Zt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Bt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Qt(e,t,n){if(t!=null&&(t=``+Bt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Bt(n)}function $t(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(ue(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Bt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Ut(e)}function en(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var tn=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function nn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||tn.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function rn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&nn(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&nn(e,o,t[o])}function an(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var on=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),sn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function cn(e){return sn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function ln(){}var un=null;function dn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fn=null,pn=null;function mn(e){var t=Dt(e);if(t&&(e=t.stateNode)){var n=e[vt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Jt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+qt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[vt]||null;if(!a)throw Error(i(90));Jt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Wt(r)}break a;case`textarea`:Qt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Zt(e,!!n.multiple,t,!1)}}}var hn=!1;function gn(e,t,n){if(hn)return e(t,n);hn=!0;try{return e(t)}finally{if(hn=!1,(fn!==null||pn!==null)&&(bu(),fn&&(t=fn,e=pn,pn=fn=null,mn(t),e)))for(t=0;t<e.length;t++)mn(e[t])}}function _n(e,t){var n=e.stateNode;if(n===null)return null;var r=n[vt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var vn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),yn=!1;if(vn)try{var bn={};Object.defineProperty(bn,"passive",{get:function(){yn=!0}}),window.addEventListener(`test`,bn,bn),window.removeEventListener(`test`,bn,bn)}catch{yn=!1}var xn=null,Sn=null,Cn=null;function wn(){if(Cn)return Cn;var e,t=Sn,n=t.length,r,i=`value`in xn?xn.value:xn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Cn=i.slice(e,1<r?1-r:void 0)}function Tn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function En(){return!0}function Dn(){return!1}function On(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?En:Dn,this.isPropagationStopped=Dn,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=En)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=En)},persist:function(){},isPersistent:En}),t}var kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},An=On(kn),jn=h({},kn,{view:0,detail:0}),Mn=On(jn),Nn,Pn,Fn,In=h({},jn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Fn&&(Fn&&e.type===`mousemove`?(Nn=e.screenX-Fn.screenX,Pn=e.screenY-Fn.screenY):Pn=Nn=0,Fn=e),Nn)},movementY:function(e){return`movementY`in e?e.movementY:Pn}}),Ln=On(In),Rn=On(h({},In,{dataTransfer:0})),zn=On(h({},jn,{relatedTarget:0})),Bn=On(h({},kn,{animationName:0,elapsedTime:0,pseudoElement:0})),Vn=On(h({},kn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Hn=On(h({},kn,{data:0})),Un={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Wn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Gn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Kn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Gn[e])?!!t[e]:!1}function qn(){return Kn}var Jn=On(h({},jn,{key:function(e){if(e.key){var t=Un[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Tn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Wn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qn,charCode:function(e){return e.type===`keypress`?Tn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Tn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Yn=On(h({},In,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Xn=On(h({},jn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qn})),Zn=On(h({},kn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Qn=On(h({},In,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),A=On(h({},kn,{newState:0,oldState:0})),$n=[9,13,27,32],er=vn&&`CompositionEvent`in window,tr=null;vn&&`documentMode`in document&&(tr=document.documentMode);var nr=vn&&`TextEvent`in window&&!tr,rr=vn&&(!er||tr&&8<tr&&11>=tr),ir=` `,ar=!1;function or(e,t){switch(e){case`keyup`:return $n.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function sr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var cr=!1;function lr(e,t){switch(e){case`compositionend`:return sr(t);case`keypress`:return t.which===32?(ar=!0,ir):null;case`textInput`:return e=t.data,e===ir&&ar?null:e;default:return null}}function ur(e,t){if(cr)return e===`compositionend`||!er&&or(e,t)?(e=wn(),Cn=Sn=xn=null,cr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return rr&&t.locale!==`ko`?null:t.data;default:return null}}var dr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!dr[e.type]:t===`textarea`}function pr(e,t,n,r){fn?pn?pn.push(r):pn=[r]:fn=r,t=Ed(t,`onChange`),0<t.length&&(n=new An(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var mr=null,hr=null;function gr(e){yd(e,0)}function _r(e){if(Wt(Ot(e)))return e}function vr(e,t){if(e===`change`)return t}var yr=!1;if(vn){var br;if(vn){var xr=`oninput`in document;if(!xr){var Sr=document.createElement(`div`);Sr.setAttribute(`oninput`,`return;`),xr=typeof Sr.oninput==`function`}br=xr}else br=!1;yr=br&&(!document.documentMode||9<document.documentMode)}function Cr(){mr&&(mr.detachEvent(`onpropertychange`,wr),hr=mr=null)}function wr(e){if(e.propertyName===`value`&&_r(hr)){var t=[];pr(t,hr,e,dn(e)),gn(gr,t)}}function Tr(e,t,n){e===`focusin`?(Cr(),mr=t,hr=n,mr.attachEvent(`onpropertychange`,wr)):e===`focusout`&&Cr()}function Er(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return _r(hr)}function Dr(e,t){if(e===`click`)return _r(t)}function Or(e,t){if(e===`input`||e===`change`)return _r(t)}function kr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Ar=typeof Object.is==`function`?Object.is:kr;function jr(e,t){if(Ar(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!je.call(t,i)||!Ar(e[i],t[i]))return!1}return!0}function Mr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Nr(e,t){var n=Mr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Mr(n)}}function Pr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Pr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Fr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Gt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Gt(e.document)}return t}function Ir(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Lr=vn&&`documentMode`in document&&11>=document.documentMode,Rr=null,zr=null,Br=null,Vr=!1;function Hr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Vr||Rr==null||Rr!==Gt(r)||(r=Rr,`selectionStart`in r&&Ir(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Br&&jr(Br,r)||(Br=r,r=Ed(zr,`onSelect`),0<r.length&&(t=new An(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Rr)))}function Ur(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Wr={animationend:Ur(`Animation`,`AnimationEnd`),animationiteration:Ur(`Animation`,`AnimationIteration`),animationstart:Ur(`Animation`,`AnimationStart`),transitionrun:Ur(`Transition`,`TransitionRun`),transitionstart:Ur(`Transition`,`TransitionStart`),transitioncancel:Ur(`Transition`,`TransitionCancel`),transitionend:Ur(`Transition`,`TransitionEnd`)},Gr={},Kr={};vn&&(Kr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Wr.animationend.animation,delete Wr.animationiteration.animation,delete Wr.animationstart.animation),`TransitionEvent`in window||delete Wr.transitionend.transition);function qr(e){if(Gr[e])return Gr[e];if(!Wr[e])return e;var t=Wr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Kr)return Gr[e]=t[n];return e}var Jr=qr(`animationend`),Yr=qr(`animationiteration`),Xr=qr(`animationstart`),Zr=qr(`transitionrun`),Qr=qr(`transitionstart`),$r=qr(`transitioncancel`),ei=qr(`transitionend`),ti=new Map,ni=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);ni.push(`scrollEnd`);function ri(e,t){ti.set(e,t),Mt(t,[e])}var ii=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ai=[],oi=0,si=0;function ci(){for(var e=oi,t=si=oi=0;t<e;){var n=ai[t];ai[t++]=null;var r=ai[t];ai[t++]=null;var i=ai[t];ai[t++]=null;var a=ai[t];if(ai[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&fi(n,i,a)}}function li(e,t,n,r){ai[oi++]=e,ai[oi++]=t,ai[oi++]=n,ai[oi++]=r,si|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function ui(e,t,n,r){return li(e,t,n,r),pi(e)}function di(e,t){return li(e,null,null,t),pi(e)}function fi(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Je(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function pi(e){if(50<du)throw du=0,fu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var mi={};function hi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gi(e,t,n,r){return new hi(e,t,n,r)}function _i(e){return e=e.prototype,!(!e||!e.isReactComponent)}function vi(e,t){var n=e.alternate;return n===null?(n=gi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function yi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function bi(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)_i(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,ge.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case ie:return e=gi(31,n,t,a),e.elementType=ie,e.lanes=o,e;case y:return xi(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=gi(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case te:return e=gi(13,n,t,a),e.elementType=te,e.lanes=o,e;case ne:return e=gi(19,n,t,a),e.elementType=ne,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case S:s=10;break a;case ee:s=9;break a;case C:s=11;break a;case re:s=14;break a;case w:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=gi(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function xi(e,t,n,r){return e=gi(7,e,r,t),e.lanes=n,e}function Si(e,t,n){return e=gi(6,e,null,t),e.lanes=n,e}function Ci(e){var t=gi(18,null,null,0);return t.stateNode=e,t}function wi(e,t,n){return t=gi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ti=new WeakMap;function Ei(e,t){if(typeof e==`object`&&e){var n=Ti.get(e);return n===void 0?(t={value:e,source:t,stack:Ae(t)},Ti.set(e,t),t):n}return{value:e,source:t,stack:Ae(t)}}var Di=[],Oi=0,ki=null,Ai=0,ji=[],Mi=0,Ni=null,Pi=1,Fi=``;function Ii(e,t){Di[Oi++]=Ai,Di[Oi++]=ki,ki=e,Ai=t}function j(e,t,n){ji[Mi++]=Pi,ji[Mi++]=Fi,ji[Mi++]=Ni,Ni=e;var r=Pi;e=Fi;var i=32-Je(r)-1;r&=~(1<<i),n+=1;var a=32-Je(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Pi=1<<32-Je(t)+i|n<<i|r,Fi=a+e}else Pi=1<<a|n<<i|r,Fi=e}function Li(e){e.return!==null&&(Ii(e,1),j(e,1,0))}function Ri(e){for(;e===ki;)ki=Di[--Oi],Di[Oi]=null,Ai=Di[--Oi],Di[Oi]=null;for(;e===Ni;)Ni=ji[--Mi],ji[Mi]=null,Fi=ji[--Mi],ji[Mi]=null,Pi=ji[--Mi],ji[Mi]=null}function zi(e,t){ji[Mi++]=Pi,ji[Mi++]=Fi,ji[Mi++]=Ni,Pi=t.id,Fi=t.overflow,Ni=e}var Bi=null,M=null,N=!1,Vi=null,Hi=!1,Ui=Error(i(519));function Wi(e){throw Xi(Ei(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Ui}function Gi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[_t]=e,t[vt]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Yt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),$t(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=ln),t=!0):t=!1,t||Wi(e,!0)}function Ki(e){for(Bi=e.return;Bi;)switch(Bi.tag){case 5:case 31:case 13:Hi=!1;return;case 27:case 3:Hi=!0;return;default:Bi=Bi.return}}function qi(e){if(e!==Bi)return!1;if(!N)return Ki(e),N=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||Ud(e.type,e.memoizedProps)),n=!n),n&&M&&Wi(e),Ki(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));M=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));M=uf(e)}else t===27?(t=M,Zd(e.type)?(e=lf,lf=null,M=e):M=t):M=Bi?cf(e.stateNode.nextSibling):null;return!0}function Ji(){M=Bi=null,N=!1}function Yi(){var e=Vi;return e!==null&&(Zl===null?Zl=e:Zl.push.apply(Zl,e),Vi=null),e}function Xi(e){Vi===null?Vi=[e]:Vi.push(e)}var Zi=me(null),Qi=null,$i=null;function ea(e,t,n){D(Zi,t._currentValue),t._currentValue=n}function ta(e){e._currentValue=Zi.current,he(Zi)}function na(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function ra(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),na(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),na(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function ia(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Ar(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===ye.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&ra(t,e,n,r),t.flags|=262144}function aa(e){for(e=e.firstContext;e!==null;){if(!Ar(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function oa(e){Qi=e,$i=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function sa(e){return la(Qi,e)}function ca(e,t){return Qi===null&&oa(e),la(e,t)}function la(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},$i===null){if(e===null)throw Error(i(308));$i=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else $i=$i.next=t;return n}var ua=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},da=t.unstable_scheduleCallback,fa=t.unstable_NormalPriority,P={$$typeof:S,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function pa(){return{controller:new ua,data:new Map,refCount:0}}function ma(e){e.refCount--,e.refCount===0&&da(fa,function(){e.controller.abort()})}var ha=null,ga=0,_a=0,va=null;function ya(e,t){if(ha===null){var n=ha=[];ga=0,_a=dd(),va={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return ga++,t.then(ba,ba),t}function ba(){if(--ga===0&&ha!==null){va!==null&&(va.status=`fulfilled`);var e=ha;ha=null,_a=0,va=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function xa(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var Sa=T.S;T.S=function(e,t){eu=Ie(),typeof t==`object`&&t&&typeof t.then==`function`&&ya(e,t),Sa!==null&&Sa(e,t)};var Ca=me(null);function wa(){var e=Ca.current;return e===null?K.pooledCache:e}function Ta(e,t){t===null?D(Ca,Ca.current):D(Ca,t.pool)}function Ea(){var e=wa();return e===null?null:{parent:P._currentValue,pool:e}}var Da=Error(i(460)),Oa=Error(i(474)),ka=Error(i(542)),Aa={then:function(){}};function ja(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Ma(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(ln,ln),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ia(e),e;default:if(typeof t.status==`string`)t.then(ln,ln);else{if(e=K,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ia(e),e}throw Pa=t,Da}}function Na(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Pa=e,Da):e}}var Pa=null;function Fa(){if(Pa===null)throw Error(i(459));var e=Pa;return Pa=null,e}function Ia(e){if(e===Da||e===ka)throw Error(i(483))}var La=null,Ra=0;function za(e){var t=Ra;return Ra+=1,La===null&&(La=[]),Ma(La,e,t)}function Ba(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Va(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Ha(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=vi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=Si(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===w&&Na(i)===t.type)?(t=a(t,n.props),Ba(t,n),t.return=e,t):(t=bi(n.type,n.key,n.props,null,e.mode,r),Ba(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=wi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=xi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=Si(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=bi(t.type,t.key,t.props,null,e.mode,n),Ba(n,t),n.return=e,n;case v:return t=wi(t,e.mode,n),t.return=e,t;case w:return t=Na(t),f(e,t,n)}if(ue(t)||se(t))return t=xi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,za(t),n);if(t.$$typeof===S)return f(e,ca(e,t),n);Va(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case w:return n=Na(n),p(e,t,n,r)}if(ue(n)||se(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,za(n),r);if(n.$$typeof===S)return p(e,t,ca(e,n),r);Va(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case w:return r=Na(r),m(e,t,n,r,i)}if(ue(r)||se(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,za(r),i);if(r.$$typeof===S)return m(e,t,n,ca(t,r),i);Va(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),N&&Ii(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return N&&Ii(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),N&&Ii(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),N&&Ii(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return N&&Ii(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),N&&Ii(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===w&&Na(l)===r.type){n(e,r.sibling),c=a(r,o.props),Ba(c,o),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}o.type===y?(c=xi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=bi(o.type,o.key,o.props,null,e.mode,c),Ba(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}c=wi(o,e.mode,c),c.return=e,e=c}return s(e);case w:return o=Na(o),b(e,r,o,c)}if(ue(o))return h(e,r,o,c);if(se(o)){if(l=se(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,za(o),c);if(o.$$typeof===S)return b(e,r,ca(e,o),c);Va(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=Si(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Ra=0;var i=b(e,t,n,r);return La=null,i}catch(t){if(t===Da||t===ka)throw t;var a=gi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Ua=Ha(!0),Wa=Ha(!1),Ga=!1;function Ka(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function qa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ja(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ya(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=pi(e),fi(e,null,n),t}return li(e,r,t,n),pi(e)}function Xa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ut(e,n)}}function Za(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Qa=!1;function $a(){if(Qa){var e=va;if(e!==null)throw e}}function eo(e,t,n,r){Qa=!1;var i=e.updateQueue;Ga=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(J&f)===f:(r&f)===f){f!==0&&f===_a&&(Qa=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Ga=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Gl|=o,e.lanes=o,e.memoizedState=d}}function to(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function no(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)to(n[e],t)}var ro=me(null),io=me(0);function ao(e,t){e=Wl,D(io,e),D(ro,t),Wl=e|t.baseLanes}function oo(){D(io,Wl),D(ro,ro.current)}function so(){Wl=io.current,he(ro),he(io)}var co=me(null),lo=null;function uo(e){var t=e.alternate;D(F,F.current&1),D(co,e),lo===null&&(t===null||ro.current!==null||t.memoizedState!==null)&&(lo=e)}function fo(e){D(F,F.current),D(co,e),lo===null&&(lo=e)}function po(e){e.tag===22?(D(F,F.current),D(co,e),lo===null&&(lo=e)):mo(e)}function mo(){D(F,F.current),D(co,co.current)}function ho(e){he(co),lo===e&&(lo=null),he(F)}var F=me(0);function go(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var _o=0,I=null,L=null,R=null,vo=!1,yo=!1,bo=!1,xo=0,So=0,Co=null,wo=0;function z(){throw Error(i(321))}function To(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ar(e[n],t[n]))return!1;return!0}function Eo(e,t,n,r,i,a){return _o=a,I=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,T.H=e===null||e.memoizedState===null?Hs:Us,bo=!1,a=n(r,i),bo=!1,yo&&(a=Oo(t,n,r,i)),Do(e),a}function Do(e){T.H=Vs;var t=L!==null&&L.next!==null;if(_o=0,R=L=I=null,vo=!1,So=0,Co=null,t)throw Error(i(300));e===null||V||(e=e.dependencies,e!==null&&aa(e)&&(V=!0))}function Oo(e,t,n,r){I=e;var a=0;do{if(yo&&(Co=null),So=0,yo=!1,25<=a)throw Error(i(301));if(a+=1,R=L=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}T.H=Ws,o=t(n,r)}while(yo);return o}function ko(){var e=T.H,t=e.useState()[0];return t=typeof t.then==`function`?Fo(t):t,e=e.useState()[0],(L===null?null:L.memoizedState)!==e&&(I.flags|=1024),t}function Ao(){var e=xo!==0;return xo=0,e}function jo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Mo(e){if(vo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}vo=!1}_o=0,R=L=I=null,yo=!1,So=xo=0,Co=null}function No(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return R===null?I.memoizedState=R=e:R=R.next=e,R}function B(){if(L===null){var e=I.alternate;e=e===null?null:e.memoizedState}else e=L.next;var t=R===null?I.memoizedState:R.next;if(t!==null)R=t,L=e;else{if(e===null)throw I.alternate===null?Error(i(467)):Error(i(310));L=e,e={memoizedState:L.memoizedState,baseState:L.baseState,baseQueue:L.baseQueue,queue:L.queue,next:null},R===null?I.memoizedState=R=e:R=R.next=e}return R}function Po(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Fo(e){var t=So;return So+=1,Co===null&&(Co=[]),e=Ma(Co,e,t),t=I,(R===null?t.memoizedState:R.next)===null&&(t=t.alternate,T.H=t===null||t.memoizedState===null?Hs:Us),e}function Io(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Fo(e);if(e.$$typeof===S)return sa(e)}throw Error(i(438,String(e)))}function Lo(e){var t=null,n=I.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=I.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Po(),I.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ae;return t.index++,n}function Ro(e,t){return typeof t==`function`?t(e):t}function zo(e){return Bo(B(),L,e)}function Bo(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(_o&f)===f:(J&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===_a&&(d=!0);else if((_o&p)===p){u=u.next,p===_a&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,I.lanes|=p,Gl|=p;f=u.action,bo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,I.lanes|=f,Gl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Ar(o,e.memoizedState)&&(V=!0,d&&(n=va,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Vo(e){var t=B(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Ar(o,t.memoizedState)||(V=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Ho(e,t,n){var r=I,a=B(),o=N;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Ar((L||a).memoizedState,n);if(s&&(a.memoizedState=n,V=!0),a=a.queue,ps(Go.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||R!==null&&R.memoizedState.tag&1){if(r.flags|=2048,cs(9,{destroy:void 0},Wo.bind(null,r,a,n,t),null),K===null)throw Error(i(349));o||_o&127||Uo(r,t,n)}return n}function Uo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=I.updateQueue,t===null?(t=Po(),I.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Wo(e,t,n,r){t.value=n,t.getSnapshot=r,Ko(t)&&qo(e)}function Go(e,t,n){return n(function(){Ko(t)&&qo(e)})}function Ko(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ar(e,n)}catch{return!0}}function qo(e){var t=di(e,2);t!==null&&hu(t,e,2)}function Jo(e){var t=No();if(typeof e==`function`){var n=e;if(e=n(),bo){qe(!0);try{n()}finally{qe(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:e},t}function Yo(e,t,n,r){return e.baseState=n,Bo(e,L,typeof r==`function`?r:Ro)}function Xo(e,t,n,r,a){if(Rs(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};T.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Zo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Zo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=T.T,o={};T.T=o;try{var s=n(i,r),c=T.S;c!==null&&c(o,s),Qo(e,t,s)}catch(n){es(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),T.T=a}}else try{a=n(i,r),Qo(e,t,a)}catch(n){es(e,t,n)}}function Qo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){$o(e,t,n)},function(n){return es(e,t,n)}):$o(e,t,n)}function $o(e,t,n){t.status=`fulfilled`,t.value=n,ts(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Zo(e,n)))}function es(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,ts(t),t=t.next;while(t!==r)}e.action=null}function ts(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ns(e,t){return t}function rs(e,t){if(N){var n=K.formState;if(n!==null){a:{var r=I;if(N){if(M){b:{for(var i=M,a=Hi;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){M=cf(i.nextSibling),r=i.data===`F!`;break a}}Wi(r)}r=!1}r&&(t=n[0])}}return n=No(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ns,lastRenderedState:t},n.queue=r,n=Fs.bind(null,I,r),r.dispatch=n,r=Jo(!1),a=Ls.bind(null,I,!1,r.queue),r=No(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Xo.bind(null,I,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function is(e){return as(B(),L,e)}function as(e,t,n){if(t=Bo(e,t,ns)[0],e=zo(Ro)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Fo(t)}catch(e){throw e===Da?ka:e}else r=t;t=B();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(I.flags|=2048,cs(9,{destroy:void 0},os.bind(null,i,n),null)),[r,a,e]}function os(e,t){e.action=t}function ss(e){var t=B(),n=L;if(n!==null)return as(t,n,e);B(),t=t.memoizedState,n=B();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function cs(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=I.updateQueue,t===null&&(t=Po(),I.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ls(){return B().memoizedState}function us(e,t,n,r){var i=No();I.flags|=e,i.memoizedState=cs(1|t,{destroy:void 0},n,r===void 0?null:r)}function ds(e,t,n,r){var i=B();r=r===void 0?null:r;var a=i.memoizedState.inst;L!==null&&r!==null&&To(r,L.memoizedState.deps)?i.memoizedState=cs(t,a,n,r):(I.flags|=e,i.memoizedState=cs(1|t,a,n,r))}function fs(e,t){us(8390656,8,e,t)}function ps(e,t){ds(2048,8,e,t)}function ms(e){I.flags|=4;var t=I.updateQueue;if(t===null)t=Po(),I.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function hs(e){var t=B().memoizedState;return ms({ref:t,nextImpl:e}),function(){if(G&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function gs(e,t){return ds(4,2,e,t)}function _s(e,t){return ds(4,4,e,t)}function vs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ys(e,t,n){n=n==null?null:n.concat([e]),ds(4,4,vs.bind(null,t,e),n)}function bs(){}function xs(e,t){var n=B();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&To(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ss(e,t){var n=B();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&To(t,r[1]))return r[0];if(r=e(),bo){qe(!0);try{e()}finally{qe(!1)}}return n.memoizedState=[r,t],r}function Cs(e,t,n){return n===void 0||_o&1073741824&&!(J&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),I.lanes|=e,Gl|=e,n)}function ws(e,t,n,r){return Ar(n,t)?n:ro.current===null?!(_o&42)||_o&1073741824&&!(J&261930)?(V=!0,e.memoizedState=n):(e=mu(),I.lanes|=e,Gl|=e,t):(e=Cs(e,n,r),Ar(e,t)||(V=!0),e)}function Ts(e,t,n,r,i){var a=E.p;E.p=a!==0&&8>a?a:8;var o=T.T,s={};T.T=s,Ls(e,!1,t,n);try{var c=i(),l=T.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Is(e,t,xa(c,r),pu(e)):Is(e,t,r,pu(e))}catch(n){Is(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{E.p=a,o!==null&&s.types!==null&&(o.types=s.types),T.T=o}}function Es(){}function Ds(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Os(e).queue;Ts(e,a,t,de,n===null?Es:function(){return ks(e),n(r)})}function Os(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:de,baseState:de,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:de},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function ks(e){var t=Os(e);t.next===null&&(t=e.alternate.memoizedState),Is(e,t.next.queue,{},pu())}function As(){return sa(Qf)}function js(){return B().memoizedState}function Ms(){return B().memoizedState}function Ns(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Ja(n);var r=Ya(t,e,n);r!==null&&(hu(r,t,n),Xa(r,t,n)),t={cache:pa()},e.payload=t;return}t=t.return}}function Ps(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Rs(e)?zs(t,n):(n=ui(e,t,n,r),n!==null&&(hu(n,e,r),Bs(n,t,r)))}function Fs(e,t,n){Is(e,t,n,pu())}function Is(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Rs(e))zs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Ar(s,o))return li(e,t,i,0),K===null&&ci(),!1}catch{}if(n=ui(e,t,i,r),n!==null)return hu(n,e,r),Bs(n,t,r),!0}return!1}function Ls(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Rs(e)){if(t)throw Error(i(479))}else t=ui(e,n,r,2),t!==null&&hu(t,e,2)}function Rs(e){var t=e.alternate;return e===I||t!==null&&t===I}function zs(e,t){yo=vo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Bs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ut(e,n)}}var Vs={readContext:sa,use:Io,useCallback:z,useContext:z,useEffect:z,useImperativeHandle:z,useLayoutEffect:z,useInsertionEffect:z,useMemo:z,useReducer:z,useRef:z,useState:z,useDebugValue:z,useDeferredValue:z,useTransition:z,useSyncExternalStore:z,useId:z,useHostTransitionStatus:z,useFormState:z,useActionState:z,useOptimistic:z,useMemoCache:z,useCacheRefresh:z};Vs.useEffectEvent=z;var Hs={readContext:sa,use:Io,useCallback:function(e,t){return No().memoizedState=[e,t===void 0?null:t],e},useContext:sa,useEffect:fs,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),us(4194308,4,vs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return us(4194308,4,e,t)},useInsertionEffect:function(e,t){us(4,2,e,t)},useMemo:function(e,t){var n=No();t=t===void 0?null:t;var r=e();if(bo){qe(!0);try{e()}finally{qe(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=No();if(n!==void 0){var i=n(t);if(bo){qe(!0);try{n(t)}finally{qe(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Ps.bind(null,I,e),[r.memoizedState,e]},useRef:function(e){var t=No();return e={current:e},t.memoizedState=e},useState:function(e){e=Jo(e);var t=e.queue,n=Fs.bind(null,I,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:bs,useDeferredValue:function(e,t){return Cs(No(),e,t)},useTransition:function(){var e=Jo(!1);return e=Ts.bind(null,I,e.queue,!0,!1),No().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=I,a=No();if(N){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),K===null)throw Error(i(349));J&127||Uo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,fs(Go.bind(null,r,o,e),[e]),r.flags|=2048,cs(9,{destroy:void 0},Wo.bind(null,r,o,n,t),null),n},useId:function(){var e=No(),t=K.identifierPrefix;if(N){var n=Fi,r=Pi;n=(r&~(1<<32-Je(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=xo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=wo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:As,useFormState:rs,useActionState:rs,useOptimistic:function(e){var t=No();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ls.bind(null,I,!0,n),n.dispatch=t,[e,t]},useMemoCache:Lo,useCacheRefresh:function(){return No().memoizedState=Ns.bind(null,I)},useEffectEvent:function(e){var t=No(),n={impl:e};return t.memoizedState=n,function(){if(G&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Us={readContext:sa,use:Io,useCallback:xs,useContext:sa,useEffect:ps,useImperativeHandle:ys,useInsertionEffect:gs,useLayoutEffect:_s,useMemo:Ss,useReducer:zo,useRef:ls,useState:function(){return zo(Ro)},useDebugValue:bs,useDeferredValue:function(e,t){return ws(B(),L.memoizedState,e,t)},useTransition:function(){var e=zo(Ro)[0],t=B().memoizedState;return[typeof e==`boolean`?e:Fo(e),t]},useSyncExternalStore:Ho,useId:js,useHostTransitionStatus:As,useFormState:is,useActionState:is,useOptimistic:function(e,t){return Yo(B(),L,e,t)},useMemoCache:Lo,useCacheRefresh:Ms};Us.useEffectEvent=hs;var Ws={readContext:sa,use:Io,useCallback:xs,useContext:sa,useEffect:ps,useImperativeHandle:ys,useInsertionEffect:gs,useLayoutEffect:_s,useMemo:Ss,useReducer:Vo,useRef:ls,useState:function(){return Vo(Ro)},useDebugValue:bs,useDeferredValue:function(e,t){var n=B();return L===null?Cs(n,e,t):ws(n,L.memoizedState,e,t)},useTransition:function(){var e=Vo(Ro)[0],t=B().memoizedState;return[typeof e==`boolean`?e:Fo(e),t]},useSyncExternalStore:Ho,useId:js,useHostTransitionStatus:As,useFormState:ss,useActionState:ss,useOptimistic:function(e,t){var n=B();return L===null?(n.baseState=e,[e,n.queue.dispatch]):Yo(n,L,e,t)},useMemoCache:Lo,useCacheRefresh:Ms};Ws.useEffectEvent=hs;function Gs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ks={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ja(r);i.payload=t,n!=null&&(i.callback=n),t=Ya(e,i,r),t!==null&&(hu(t,e,r),Xa(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ja(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ya(e,i,r),t!==null&&(hu(t,e,r),Xa(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Ja(n);r.tag=2,t!=null&&(r.callback=t),t=Ya(e,r,n),t!==null&&(hu(t,e,n),Xa(t,e,n))}};function qs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!jr(n,r)||!jr(i,a):!0}function Js(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ks.enqueueReplaceState(t,t.state,null)}function Ys(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Xs(e){ii(e)}function Zs(e){console.error(e)}function Qs(e){ii(e)}function $s(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function ec(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function tc(e,t,n){return n=Ja(n),n.tag=3,n.payload={element:null},n.callback=function(){$s(e,t)},n}function nc(e){return e=Ja(e),e.tag=3,e}function rc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){ec(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){ec(t,n,r),typeof i!=`function`&&(ru===null?ru=new Set([this]):ru.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function ic(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&ia(t,n,a,!0),n=co.current,n!==null){switch(n.tag){case 31:case 13:return lo===null?Du():n.alternate===null&&X===0&&(X=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Aa?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===Aa?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Du(),!1}if(N)return t=co.current,t===null?(r!==Ui&&(t=Error(i(423),{cause:r}),Xi(Ei(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Ei(r,n),a=tc(e.stateNode,r,a),Za(e,a),X!==4&&(X=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Ui&&(e=Error(i(422),{cause:r}),Xi(Ei(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=Ei(o,n),Xl===null?Xl=[o]:Xl.push(o),X!==4&&(X=2),t===null)return!0;r=Ei(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=tc(n.stateNode,r,e),Za(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(ru===null||!ru.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=nc(a),rc(a,e,n,r),Za(n,a),!1}n=n.return}while(n!==null);return!1}var ac=Error(i(461)),V=!1;function oc(e,t,n,r){t.child=e===null?Wa(t,null,n,r):Ua(t,e.child,n,r)}function sc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return oa(t),r=Eo(e,t,n,o,a,i),s=Ao(),e!==null&&!V?(jo(e,t,i),jc(e,t,i)):(N&&s&&Li(t),t.flags|=1,oc(e,t,r,i),t.child)}function cc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!_i(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,lc(e,t,a,r,i)):(e=bi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Mc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?jr:n,n(o,r)&&e.ref===t.ref)return jc(e,t,i)}return t.flags|=1,e=vi(a,r),e.ref=t.ref,e.return=t,t.child=e}function lc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(jr(a,r)&&e.ref===t.ref){if(V=!1,t.pendingProps=r=a,Mc(e,i))e.flags&131072&&(V=!0);else return t.lanes=e.lanes,jc(e,t,i)}}return _c(e,t,n,r,i)}function uc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return fc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ta(t,a===null?null:a.cachePool),a===null?oo():ao(t,a),po(t);else return r=t.lanes=536870912,fc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Ta(t,null),oo(),mo(t)):(Ta(t,a.cachePool),ao(t,a),mo(t),t.memoizedState=null);return oc(e,t,i,n),t.child}function dc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function fc(e,t,n,r,i){var a=wa();return a=a===null?null:{parent:P._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Ta(t,null),oo(),po(t),e!==null&&ia(e,t,r,!0),t.childLanes=i,null}function pc(e,t){return t=Ec({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function mc(e,t,n){return Ua(t,e.child,null,n),e=pc(t,t.pendingProps),e.flags|=2,ho(t),t.memoizedState=null,e}function hc(e,t,n){var r=t.pendingProps,a=!!(t.flags&128);if(t.flags&=-129,e===null){if(N){if(r.mode===`hidden`)return e=pc(t,r),t.lanes=536870912,dc(null,e);if(fo(t),(e=M)?(e=rf(e,Hi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ni===null?null:{id:Pi,overflow:Fi},retryLane:536870912,hydrationErrors:null},n=Ci(e),n.return=t,t.child=n,Bi=t,M=null)):e=null,e===null)throw Wi(t);return t.lanes=536870912,null}return pc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(fo(t),a){if(t.flags&256)t.flags&=-257,t=mc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558))}else if(V||ia(e,t,n,!1),a=(n&e.childLanes)!==0,V||a){if(r=K,r!==null&&(s=dt(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,di(e,s),hu(r,e,s),ac;Du(),t=mc(e,t,n)}else e=o.treeContext,M=cf(s.nextSibling),Bi=t,N=!0,Vi=null,Hi=!1,e!==null&&zi(t,e),t=pc(t,r),t.flags|=4096;return t}return e=vi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function gc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function _c(e,t,n,r,i){return oa(t),n=Eo(e,t,n,r,void 0,i),r=Ao(),e!==null&&!V?(jo(e,t,i),jc(e,t,i)):(N&&r&&Li(t),t.flags|=1,oc(e,t,n,i),t.child)}function vc(e,t,n,r,i,a){return oa(t),t.updateQueue=null,n=Oo(t,r,n,i),Do(e),r=Ao(),e!==null&&!V?(jo(e,t,a),jc(e,t,a)):(N&&r&&Li(t),t.flags|=1,oc(e,t,n,a),t.child)}function yc(e,t,n,r,i){if(oa(t),t.stateNode===null){var a=mi,o=n.contextType;typeof o==`object`&&o&&(a=sa(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Ks,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ka(t),o=n.contextType,a.context=typeof o==`object`&&o?sa(o):mi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Gs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Ks.enqueueReplaceState(a,a.state,null),eo(t,r,a,i),$a(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Ys(n,s);a.props=c;var l=a.context,u=n.contextType;o=mi,typeof u==`object`&&u&&(o=sa(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Js(t,a,r,o),Ga=!1;var f=t.memoizedState;a.state=f,eo(t,r,a,i),$a(),l=t.memoizedState,s||f!==l||Ga?(typeof d==`function`&&(Gs(t,n,d,r),l=t.memoizedState),(c=Ga||qs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,qa(e,t),o=t.memoizedProps,u=Ys(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=mi,typeof l==`object`&&l&&(c=sa(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Js(t,a,r,c),Ga=!1,f=t.memoizedState,a.state=f,eo(t,r,a,i),$a();var p=t.memoizedState;o!==d||f!==p||Ga||e!==null&&e.dependencies!==null&&aa(e.dependencies)?(typeof s==`function`&&(Gs(t,n,s,r),p=t.memoizedState),(u=Ga||qs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&aa(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,gc(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Ua(t,e.child,null,i),t.child=Ua(t,null,n,i)):oc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=jc(e,t,i),e}function bc(e,t,n,r){return Ji(),t.flags|=256,oc(e,t,n,r),t.child}var xc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Sc(e){return{baseLanes:e,cachePool:Ea()}}function Cc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Jl),e}function wc(e,t,n){var r=t.pendingProps,a=!1,o=!!(t.flags&128),s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:!!(F.current&2)),s&&(a=!0,t.flags&=-129),s=!!(t.flags&32),t.flags&=-33,e===null){if(N){if(a?uo(t):mo(t),(e=M)?(e=rf(e,Hi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ni===null?null:{id:Pi,overflow:Fi},retryLane:536870912,hydrationErrors:null},n=Ci(e),n.return=t,t.child=n,Bi=t,M=null)):e=null,e===null)throw Wi(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(mo(t),a=t.mode,c=Ec({mode:`hidden`,children:c},a),r=xi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=Sc(n),r.childLanes=Cc(e,s,n),t.memoizedState=xc,dc(null,r)):(uo(t),Tc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(uo(t),t.flags&=-257,t=Dc(e,t,n)):t.memoizedState===null?(mo(t),c=r.fallback,a=t.mode,r=Ec({mode:`visible`,children:r.children},a),c=xi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Ua(t,e.child,null,n),r=t.child,r.memoizedState=Sc(n),r.childLanes=Cc(e,s,n),t.memoizedState=xc,t=dc(null,r)):(mo(t),t.child=e.child,t.flags|=128,t=null);else if(uo(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Xi({value:r,source:null,stack:null}),t=Dc(e,t,n)}else if(V||ia(e,t,n,!1),s=(n&e.childLanes)!==0,V||s){if(s=K,s!==null&&(r=dt(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,di(e,r),hu(s,e,r),ac;af(c)||Du(),t=Dc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,M=cf(c.nextSibling),Bi=t,N=!0,Vi=null,Hi=!1,e!==null&&zi(t,e),t=Tc(t,r.children),t.flags|=4096);return t}return a?(mo(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=vi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=xi(c,a,n,null),c.flags|=2):c=vi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,dc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=Sc(n):(a=c.cachePool,a===null?a=Ea():(l=P._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=Cc(e,s,n),t.memoizedState=xc,dc(e.child,r)):(uo(t),n=e.child,e=n.sibling,n=vi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function Tc(e,t){return t=Ec({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Ec(e,t){return e=gi(22,e,null,t),e.lanes=0,e}function Dc(e,t,n){return Ua(t,e.child,null,n),e=Tc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Oc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),na(e.return,t,n)}function kc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Ac(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=F.current,s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,D(F,o),oc(e,t,r,n),r=N?Ai:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Oc(e,n,t);else if(e.tag===19)Oc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&go(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),kc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&go(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}kc(t,!0,n,null,a,r);break;case`together`:kc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function jc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gl|=t.lanes,(n&t.childLanes)===0){if(e!==null){if(ia(e,t,n,!1),(n&t.childLanes)===0)return null}else return null}if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=vi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=vi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Mc(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&aa(e)))}function Nc(e,t,n){switch(t.tag){case 3:be(t,t.stateNode.containerInfo),ea(t,P,e.memoizedState.cache),Ji();break;case 27:case 5:Se(t);break;case 4:be(t,t.stateNode.containerInfo);break;case 10:ea(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,fo(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(uo(t),e=jc(e,t,n),e===null?null:e.sibling):wc(e,t,n):(uo(t),t.flags|=128,null);uo(t);break;case 19:var i=!!(e.flags&128);if(r=(n&t.childLanes)!==0,r||=(ia(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Ac(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),D(F,F.current),r)break;return null;case 22:return t.lanes=0,uc(e,t,n,t.pendingProps);case 24:ea(t,P,e.memoizedState.cache)}return jc(e,t,n)}function Pc(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps)V=!0;else{if(!Mc(e,n)&&!(t.flags&128))return V=!1,Nc(e,t,n);V=!!(e.flags&131072)}}else V=!1,N&&t.flags&1048576&&j(t,Ai,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Na(t.elementType),t.type=e,typeof e==`function`)_i(e)?(r=Ys(e,r),t.tag=1,t=yc(null,t,e,r,n)):(t.tag=0,t=_c(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===C){t.tag=11,t=sc(null,t,e,r,n);break a}if(a===re){t.tag=14,t=cc(null,t,e,r,n);break a}}throw t=le(e)||e,Error(i(306,t,``))}}return t;case 0:return _c(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Ys(r,t.pendingProps),yc(e,t,r,a,n);case 3:a:{if(be(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,qa(e,t),eo(t,r,null,n);var s=t.memoizedState;if(r=s.cache,ea(t,P,r),r!==o.cache&&ra(t,[P],n,!0),$a(),r=s.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=bc(e,t,r,n);break a}if(r!==a){a=Ei(Error(i(424)),t),Xi(a),t=bc(e,t,r,n);break a}switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(M=cf(e.firstChild),Bi=t,N=!0,Vi=null,Hi=!0,n=Wa(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ji(),r===a){t=jc(e,t,n);break a}oc(e,t,r,n)}t=t.child}return t;case 26:return gc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:N||(n=t.type,e=t.pendingProps,r=Bd(ve.current).createElement(n),r[_t]=t,r[vt]=e,Pd(r,n,e),O(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Se(t),e===null&&N&&(r=t.stateNode=ff(t.type,t.pendingProps,ve.current),Bi=t,Hi=!0,a=M,Zd(t.type)?(lf=a,M=cf(r.firstChild)):M=a),oc(e,t,t.pendingProps.children,n),gc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&N&&((a=r=M)&&(r=tf(r,t.type,t.pendingProps,Hi),r===null?a=!1:(t.stateNode=r,Bi=t,M=cf(r.firstChild),Hi=!1,a=!0)),a||Wi(t)),Se(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Eo(e,t,ko,null,null,n),Qf._currentValue=a),gc(e,t),oc(e,t,r,n),t.child;case 6:return e===null&&N&&((e=n=M)&&(n=nf(n,t.pendingProps,Hi),n===null?e=!1:(t.stateNode=n,Bi=t,M=null,e=!0)),e||Wi(t)),null;case 13:return wc(e,t,n);case 4:return be(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ua(t,null,r,n):oc(e,t,r,n),t.child;case 11:return sc(e,t,t.type,t.pendingProps,n);case 7:return oc(e,t,t.pendingProps,n),t.child;case 8:return oc(e,t,t.pendingProps.children,n),t.child;case 12:return oc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,ea(t,t.type,r.value),oc(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,oa(t),a=sa(a),r=r(a),t.flags|=1,oc(e,t,r,n),t.child;case 14:return cc(e,t,t.type,t.pendingProps,n);case 15:return lc(e,t,t.type,t.pendingProps,n);case 19:return Ac(e,t,n);case 31:return hc(e,t,n);case 22:return uc(e,t,n,t.pendingProps);case 24:return oa(t),r=sa(P),e===null?(a=wa(),a===null&&(a=K,o=pa(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Ka(t),ea(t,P,a)):((e.lanes&n)!==0&&(qa(e,t),eo(t,null,null,n),$a()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,ea(t,P,r),r!==a.cache&&ra(t,[P],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),ea(t,P,r))),oc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Fc(e){e.flags|=4}function Ic(e,t,n,r,i){if((t=!!(e.mode&32))&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i){if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Pa=Aa,Oa}}else e.flags&=-16777217}function Lc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t)){if(wu())e.flags|=8192;else throw Pa=Aa,Oa}}function Rc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:at(),e.lanes|=t,Yl|=t)}function zc(e,t){if(!N)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function H(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Bc(e,t,n){var r=t.pendingProps;switch(Ri(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return H(t),null;case 1:return H(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),ta(P),xe(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(qi(t)?Fc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Yi())),H(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Fc(t),o===null?(H(t),Ic(t,a,null,r,n)):(H(t),Lc(t,o))):o?o===e.memoizedState?(H(t),t.flags&=-16777217):(Fc(t),H(t),Lc(t,o)):(e=e.memoizedProps,e!==r&&Fc(t),H(t),Ic(t,a,e,r,n)),null;case 27:if(Ce(t),n=ve.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Fc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return H(t),null}e=ge.current,qi(t)?Gi(t,e):(e=ff(a,r,n),t.stateNode=e,Fc(t))}return H(t),null;case 5:if(Ce(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Fc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return H(t),null}if(o=ge.current,qi(t))Gi(t,o);else{var s=Bd(ve.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[_t]=t,o[vt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Fc(t)}}return H(t),Ic(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Fc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=ve.current,qi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Bi,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[_t]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Wi(t,!0)}else e=Bd(e).createTextNode(r),e[_t]=t,t.stateNode=e}return H(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=qi(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[_t]=t}else Ji(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;H(t),e=!1}else n=Yi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(ho(t),t):(ho(t),null);if(t.flags&128)throw Error(i(558))}return H(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=qi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[_t]=t}else Ji(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;H(t),a=!1}else a=Yi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(ho(t),t):(ho(t),null)}return ho(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Rc(t,t.updateQueue),H(t),null);case 4:return xe(),e===null&&Sd(t.stateNode.containerInfo),H(t),null;case 10:return ta(t.type),H(t),null;case 19:if(he(F),r=t.memoizedState,r===null)return H(t),null;if(a=!!(t.flags&128),o=r.rendering,o===null){if(a)zc(r,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=go(e),o!==null){for(t.flags|=128,zc(r,!1),e=o.updateQueue,t.updateQueue=e,Rc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)yi(n,e),n=n.sibling;return D(F,F.current&1|2),N&&Ii(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Ie()>tu&&(t.flags|=128,a=!0,zc(r,!1),t.lanes=4194304)}}else{if(!a){if(e=go(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Rc(t,e),zc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!N)return H(t),null}else 2*Ie()-r.renderingStartTime>tu&&n!==536870912&&(t.flags|=128,a=!0,zc(r,!1),t.lanes=4194304)}r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(H(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Ie(),e.sibling=null,n=F.current,D(F,a?n&1|2:n&1),N&&Ii(t,r.treeForkCount),e);case 22:case 23:return ho(t),so(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(H(t),t.subtreeFlags&6&&(t.flags|=8192)):H(t),n=t.updateQueue,n!==null&&Rc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&he(Ca),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ta(P),H(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Vc(e,t){switch(Ri(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ta(P),xe(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ce(t),null;case 31:if(t.memoizedState!==null){if(ho(t),t.alternate===null)throw Error(i(340));Ji()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(ho(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Ji()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return he(F),null;case 4:return xe(),null;case 10:return ta(t.type),null;case 22:case 23:return ho(t),so(),e!==null&&he(Ca),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ta(P),null;case 25:return null;default:return null}}function Hc(e,t){switch(Ri(t),t.tag){case 3:ta(P),xe();break;case 26:case 27:case 5:Ce(t);break;case 4:xe();break;case 31:t.memoizedState!==null&&ho(t);break;case 13:ho(t);break;case 19:he(F);break;case 10:ta(t.type);break;case 22:case 23:ho(t),so(),e!==null&&he(Ca);break;case 24:ta(P)}}function Uc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Wc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Gc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{no(t,n)}catch(t){Z(e,e.return,t)}}}function Kc(e,t,n){n.props=Ys(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function qc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Jc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null){if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}}function Yc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Xc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[vt]=t}catch(t){Z(e,e.return,t)}}function Zc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Qc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Zc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $c(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ln));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for($c(e,t,n),e=e.sibling;e!==null;)$c(e,t,n),e=e.sibling}function el(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(el(e,t,n),e=e.sibling;e!==null;)el(e,t,n),e=e.sibling}function tl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[_t]=e,t[vt]=n}catch(t){Z(e,e.return,t)}}var nl=!1,U=!1,rl=!1,il=typeof WeakSet==`function`?WeakSet:Set,al=null;function ol(e,t){if(e=e.containerInfo,Rd=sp,e=Fr(e),Ir(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,al=t;al!==null;)if(t=al,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,al=e;else for(;al!==null;){switch(t=al,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Ys(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,al=e;break}al=t.return}}function sl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:xl(e,n),r&4&&Uc(5,n);break;case 1:if(xl(e,n),r&4){if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Ys(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}}r&64&&Gc(n),r&512&&qc(n,n.return);break;case 3:if(xl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{no(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&tl(n);case 26:case 5:xl(e,n),t===null&&r&4&&Yc(n),r&512&&qc(n,n.return);break;case 12:xl(e,n);break;case 31:xl(e,n),r&4&&fl(e,n);break;case 13:xl(e,n),r&4&&pl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||nl,!r){t=t!==null&&t.memoizedState!==null||U,i=nl;var a=U;nl=r,(U=t)&&!a?Cl(e,n,!!(n.subtreeFlags&8772)):xl(e,n),nl=i,U=a}break;case 30:break;default:xl(e,n)}}function cl(e){var t=e.alternate;t!==null&&(e.alternate=null,cl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Tt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var W=null,ll=!1;function ul(e,t,n){for(n=n.child;n!==null;)dl(e,t,n),n=n.sibling}function dl(e,t,n){if(Ke&&typeof Ke.onCommitFiberUnmount==`function`)try{Ke.onCommitFiberUnmount(Ge,n)}catch{}switch(n.tag){case 26:U||Jc(n,t),ul(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:U||Jc(n,t);var r=W,i=ll;Zd(n.type)&&(W=n.stateNode,ll=!1),ul(e,t,n),pf(n.stateNode),W=r,ll=i;break;case 5:U||Jc(n,t);case 6:if(r=W,i=ll,W=null,ul(e,t,n),W=r,ll=i,W!==null){if(ll)try{(W.nodeType===9?W.body:W.nodeName===`HTML`?W.ownerDocument.body:W).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{W.removeChild(n.stateNode)}catch(e){Z(n,t,e)}}break;case 18:W!==null&&(ll?(e=W,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(W,n.stateNode));break;case 4:r=W,i=ll,W=n.stateNode.containerInfo,ll=!0,ul(e,t,n),W=r,ll=i;break;case 0:case 11:case 14:case 15:Wc(2,n,t),U||Wc(4,n,t),ul(e,t,n);break;case 1:U||(Jc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Kc(n,t,r)),ul(e,t,n);break;case 21:ul(e,t,n);break;case 22:U=(r=U)||n.memoizedState!==null,ul(e,t,n),U=r;break;default:ul(e,t,n)}}function fl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function pl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function ml(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new il),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new il),t;default:throw Error(i(435,e.tag))}}function hl(e,t){var n=ml(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function gl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){W=c.stateNode,ll=!1;break a}break;case 5:W=c.stateNode,ll=!1;break a;case 3:case 4:W=c.stateNode.containerInfo,ll=!0;break a}c=c.return}if(W===null)throw Error(i(160));dl(o,s,a),W=null,ll=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)vl(t,e),t=t.sibling}var _l=null;function vl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:gl(t,e),yl(e),r&4&&(Wc(3,e,e.return),Uc(3,e),Wc(5,e,e.return));break;case 1:gl(t,e),yl(e),r&512&&(U||n===null||Jc(n,n.return)),r&64&&nl&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=_l;if(gl(t,e),yl(e),r&512&&(U||n===null||Jc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null){if(r===null){if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[wt]||o[_t]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[_t]=e,O(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[_t]=e,O(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode)}else e.stateNode=If(a,r,e.memoizedProps)}else o===r?r===null&&e.stateNode!==null&&Xc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:gl(t,e),yl(e),r&512&&(U||n===null||Jc(n,n.return)),n!==null&&r&4&&Xc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(gl(t,e),yl(e),r&512&&(U||n===null||Jc(n,n.return)),e.flags&32){a=e.stateNode;try{en(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Xc(e,a,n===null?a:n.memoizedProps)),r&1024&&(rl=!0);break;case 6:if(gl(t,e),yl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,a=_l,_l=gf(t.containerInfo),gl(t,e),_l=a,yl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}rl&&(rl=!1,bl(e));break;case 4:r=_l,_l=gf(e.stateNode.containerInfo),gl(t,e),yl(e),_l=r;break;case 12:gl(t,e),yl(e);break;case 31:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 13:gl(t,e),yl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&($l=Ie()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=nl,d=U;if(nl=u||a,U=d||l,gl(t,e),U=d,nl=u,yl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||nl||U||Sl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,hl(e,n))));break;case 19:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 30:break;case 21:break;default:gl(t,e),yl(e)}}function yl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Zc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;el(e,Qc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(en(o,``),n.flags&=-33),el(e,Qc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;$c(e,Qc(e),s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;bl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function xl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)sl(e,t.alternate,t),t=t.sibling}function Sl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Wc(4,t,t.return),Sl(t);break;case 1:Jc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Kc(t,t.return,n),Sl(t);break;case 27:pf(t.stateNode);case 26:case 5:Jc(t,t.return),Sl(t);break;case 22:t.memoizedState===null&&Sl(t);break;case 30:Sl(t);break;default:Sl(t)}e=e.sibling}}function Cl(e,t,n){for(n&&=!!(t.subtreeFlags&8772),t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Cl(i,a,n),Uc(4,a);break;case 1:if(Cl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)to(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Gc(a),qc(a,a.return);break;case 27:tl(a);case 26:case 5:Cl(i,a,n),n&&r===null&&o&4&&Yc(a),qc(a,a.return);break;case 12:Cl(i,a,n);break;case 31:Cl(i,a,n),n&&o&4&&fl(i,a);break;case 13:Cl(i,a,n),n&&o&4&&pl(i,a);break;case 22:a.memoizedState===null&&Cl(i,a,n),qc(a,a.return);break;case 30:break;default:Cl(i,a,n)}t=t.sibling}}function wl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ma(n))}function Tl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ma(e))}function El(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Dl(e,t,n,r),t=t.sibling}function Dl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:El(e,t,n,r),i&2048&&Uc(9,t);break;case 1:El(e,t,n,r);break;case 3:El(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ma(e)));break;case 12:if(i&2048){El(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else El(e,t,n,r);break;case 31:El(e,t,n,r);break;case 13:El(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?El(e,t,n,r):(a._visibility|=2,Ol(e,t,n,r,!!(t.subtreeFlags&10256)||!1)):a._visibility&2?El(e,t,n,r):kl(e,t),i&2048&&wl(o,t);break;case 24:El(e,t,n,r),i&2048&&Tl(t.alternate,t);break;default:El(e,t,n,r)}}function Ol(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Ol(a,o,s,c,i),Uc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Ol(a,o,s,c,i)):u._visibility&2?Ol(a,o,s,c,i):kl(a,o),i&&l&2048&&wl(o.alternate,o);break;case 24:Ol(a,o,s,c,i),i&&l&2048&&Tl(o.alternate,o);break;default:Ol(a,o,s,c,i)}t=t.sibling}}function kl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:kl(n,r),i&2048&&wl(r.alternate,r);break;case 24:kl(n,r),i&2048&&Tl(r.alternate,r);break;default:kl(n,r)}t=t.sibling}}var Al=8192;function jl(e,t,n){if(e.subtreeFlags&Al)for(e=e.child;e!==null;)Ml(e,t,n),e=e.sibling}function Ml(e,t,n){switch(e.tag){case 26:jl(e,t,n),e.flags&Al&&e.memoizedState!==null&&Gf(n,_l,e.memoizedState,e.memoizedProps);break;case 5:jl(e,t,n);break;case 3:case 4:var r=_l;_l=gf(e.stateNode.containerInfo),jl(e,t,n),_l=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Al,Al=16777216,jl(e,t,n),Al=r):jl(e,t,n));break;default:jl(e,t,n)}}function Nl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Pl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Ll(r,e)}Nl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Fl(e),e=e.sibling}function Fl(e){switch(e.tag){case 0:case 11:case 15:Pl(e),e.flags&2048&&Wc(9,e,e.return);break;case 3:Pl(e);break;case 12:Pl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Il(e)):Pl(e);break;default:Pl(e)}}function Il(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Ll(r,e)}Nl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Wc(8,t,t.return),Il(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Il(t));break;default:Il(t)}e=e.sibling}}function Ll(e,t){for(;al!==null;){var n=al;switch(n.tag){case 0:case 11:case 15:Wc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ma(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,al=r;else a:for(n=e;al!==null;){r=al;var i=r.sibling,a=r.return;if(cl(r),r===n){al=null;break a}if(i!==null){i.return=a,al=i;break a}al=a}}}var Rl={getCacheForType:function(e){var t=sa(P),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return sa(P).controller.signal}},zl=typeof WeakMap==`function`?WeakMap:Map,G=0,K=null,q=null,J=0,Y=0,Bl=null,Vl=!1,Hl=!1,Ul=!1,Wl=0,X=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=null,Zl=null,Ql=!1,$l=0,eu=0,tu=1/0,nu=null,ru=null,iu=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return G&2&&J!==0?J&-J:T.T===null?mt():dd()}function mu(){if(Jl===0){if(!(J&536870912)||N){var e=$e;$e<<=1,!($e&3932160)&&($e=262144),Jl=e}else Jl=536870912}return e=co.current,e!==null&&(e.flags|=32),Jl}function hu(e,t,n){(e===K&&(Y===2||Y===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,J,Jl,!1)),st(e,n),(!(G&2)||e!==K)&&(e===K&&(!(G&2)&&(Kl|=n),X===4&&yu(e,J,Jl,!1)),rd(e))}function gu(e,t,n){if(G&6)throw Error(i(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||rt(e,t),a=r?Au(e,t):Ou(e,t,!0),o=r;do{if(a===0){Hl&&!r&&yu(e,t,0,!1);break}if(n=e.current.alternate,o&&!vu(n)){a=Ou(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Xl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Ul&&!l){c.errorRecoveryDisabledLanes|=o,Kl|=o,a=4;break a}o=Zl,Zl=a,o!==null&&(Zl===null?Zl=o:Zl.push.apply(Zl,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Jl,!Vl);break a;case 2:Zl=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=$l+300-Ie(),10<a)){if(yu(r,t,Jl,!Vl),nt(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Vl,o,`Throttled`,-0,0),a);break a}_u(r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Vl,o,null,-0,0)}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ln},Ml(t,a,d);var m=(a&62914560)===a?$l-Ie():(a&4194048)===a?eu-Ie():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Ar(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~ql,t&=~Kl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Je(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&lt(e,n,t)}function bu(){return G&6?!0:(id(0,!1),!1)}function xu(){if(q!==null){if(Y===0)var e=q.return;else e=q,$i=Qi=null,Mo(e),La=null,Ra=0,e=q;for(;e!==null;)Hc(e.alternate,e),e=e.return;q=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),K=e,q=n=vi(e.current,null),J=t,Y=0,Bl=null,Vl=!1,Hl=rt(e,t),Ul=!1,Yl=Jl=ql=Kl=Gl=X=0,Zl=Xl=null,Ql=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Je(r),a=1<<i;t|=e[i],r&=~a}return Wl=t,ci(),n}function Cu(e,t){I=null,T.H=Vs,t===Da||t===ka?(t=Fa(),Y=3):t===Oa?(t=Fa(),Y=4):Y=t===ac?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Bl=t,q===null&&(X=1,$s(e,Ei(t,e.current)))}function wu(){var e=co.current;return e===null?!0:(J&4194048)===J?lo===null:(J&62914560)===J||J&536870912?e===lo:!1}function Tu(){var e=T.H;return T.H=Vs,e===null?Vs:e}function Eu(){var e=T.A;return T.A=Rl,e}function Du(){X=4,Vl||(J&4194048)!==J&&co.current!==null||(Hl=!0),!(Gl&134217727)&&!(Kl&134217727)||K===null||yu(K,J,Jl,!1)}function Ou(e,t,n){var r=G;G|=2;var i=Tu(),a=Eu();(K!==e||J!==t)&&(nu=null,Su(e,t)),t=!1;var o=X;a:do try{if(Y!==0&&q!==null){var s=q,c=Bl;switch(Y){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:co.current===null&&(t=!0);var l=Y;if(Y=0,Bl=null,Pu(e,s,c,l),n&&Hl){o=0;break a}break;default:l=Y,Y=0,Bl=null,Pu(e,s,c,l)}}ku(),o=X;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,$i=Qi=null,G=r,T.H=i,T.A=a,q===null&&(K=null,J=0,ci()),o}function ku(){for(;q!==null;)Mu(q)}function Au(e,t){var n=G;G|=2;var r=Tu(),a=Eu();K!==e||J!==t?(nu=null,tu=Ie()+500,Su(e,t)):Hl=rt(e,t);a:do try{if(Y!==0&&q!==null){t=q;var o=Bl;b:switch(Y){case 1:Y=0,Bl=null,Pu(e,t,o,1);break;case 2:case 9:if(ja(o)){Y=0,Bl=null,Nu(t);break}t=function(){Y!==2&&Y!==9||K!==e||(Y=7),rd(e)},o.then(t,t);break a;case 3:Y=7;break a;case 4:Y=5;break a;case 7:ja(o)?(Y=0,Bl=null,Nu(t)):(Y=0,Bl=null,Pu(e,t,o,7));break;case 5:var s=null;switch(q.tag){case 26:s=q.memoizedState;case 5:case 27:var c=q;if(s?Wf(s):c.stateNode.complete){Y=0,Bl=null;var l=c.sibling;if(l!==null)q=l;else{var u=c.return;u===null?q=null:(q=u,Fu(u))}break b}}Y=0,Bl=null,Pu(e,t,o,5);break;case 6:Y=0,Bl=null,Pu(e,t,o,6);break;case 8:xu(),X=6;break a;default:throw Error(i(462))}}ju();break}catch(t){Cu(e,t)}while(1);return $i=Qi=null,T.H=r,T.A=a,G=n,q===null?(K=null,J=0,ci(),X):0}function ju(){for(;q!==null&&!Pe();)Mu(q)}function Mu(e){var t=Pc(e.alternate,e,Wl);e.memoizedProps=e.pendingProps,t===null?Fu(e):q=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=vc(n,t,t.pendingProps,t.type,void 0,J);break;case 11:t=vc(n,t,t.pendingProps,t.type.render,t.ref,J);break;case 5:Mo(t);default:Hc(n,t),t=q=yi(t,Wl),t=Pc(n,t,Wl)}e.memoizedProps=e.pendingProps,t===null?Fu(e):q=t}function Pu(e,t,n,r){$i=Qi=null,Mo(t),La=null,Ra=0;var i=t.return;try{if(ic(e,i,t,n,J)){X=1,$s(e,Ei(n,e.current)),q=null;return}}catch(t){if(i!==null)throw q=i,t;X=1,$s(e,Ei(n,e.current)),q=null;return}t.flags&32768?(N||r===1?e=!0:Hl||J&536870912?e=!1:(Vl=e=!0,(r===2||r===9||r===3||r===6)&&(r=co.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Vl);return}e=t.return;var n=Bc(t.alternate,t,Wl);if(n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);X===0&&(X=5)}function Iu(e,t){do{var n=Vc(e.alternate,e);if(n!==null){n.flags&=32767,q=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){q=e;return}q=e=n}while(e!==null);X=6,q=null}function Lu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Hu();while(iu!==0);if(G&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=si,ct(e,n,o,s,c,l),e===K&&(q=K=null,J=0),ou=t,au=e,su=n,cu=o,lu=a,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(Be,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=T.T,T.T=null,a=E.p,E.p=2,s=G,G|=4;try{ol(e,t,n)}finally{G=s,E.p=a,T.T=r}}iu=1,Ru(),zu(),Bu()}}function Ru(){if(iu===1){iu=0;var e=au,t=ou,n=!!(t.flags&13878);if(t.subtreeFlags&13878||n){n=T.T,T.T=null;var r=E.p;E.p=2;var i=G;G|=4;try{vl(t,e);var a=zd,o=Fr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Pr(s.ownerDocument.documentElement,s)){if(c!==null&&Ir(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Nr(s,h),v=Nr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{G=i,E.p=r,T.T=n}}e.current=t,iu=2}}function zu(){if(iu===2){iu=0;var e=au,t=ou,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=T.T,T.T=null;var r=E.p;E.p=2;var i=G;G|=4;try{sl(e,t.alternate,t)}finally{G=i,E.p=r,T.T=n}}iu=3}}function Bu(){if(iu===4||iu===3){iu=0,Fe();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?iu=5:(iu=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ru=null),pt(n),t=t.stateNode,Ke&&typeof Ke.onCommitFiberRoot==`function`)try{Ke.onCommitFiberRoot(Ge,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=T.T,i=E.p,E.p=2,T.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{T.T=t,E.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ma(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(iu!==5)return!1;var e=au,t=cu;cu=0;var n=pt(su),r=T.T,a=E.p;try{E.p=32>n?32:n,T.T=null,n=lu,lu=null;var o=au,s=su;if(iu=0,ou=au=null,su=0,G&6)throw Error(i(331));var c=G;if(G|=4,Fl(o.current),Dl(o,o.current,s,n),G=c,id(0,!1),Ke&&typeof Ke.onPostCommitFiberRoot==`function`)try{Ke.onPostCommitFiberRoot(Ge,o)}catch{}return!0}finally{E.p=a,T.T=r,Vu(e,t)}}function Wu(e,t,n){t=Ei(n,t),t=tc(e.stateNode,t,2),e=Ya(e,t,2),e!==null&&(st(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ru===null||!ru.has(r))){e=Ei(n,e),n=nc(2),r=Ya(t,n,2),r!==null&&(rc(n,r,t,e),st(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new zl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Ul=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,K===e&&(J&n)===n&&(X===4||X===3&&(J&62914560)===J&&300>Ie()-$l?!(G&2)&&Su(e,0):ql|=n,Yl===J&&(Yl=0)),rd(e)}function qu(e,t){t===0&&(t=at()),e=di(e,t),e!==null&&(st(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return Me(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t){if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Je(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=J,a=nt(r,r===K?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||rt(r,a)||(n=!0,ld(r,a))}r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=Ie(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}iu!==0&&iu!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Je(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=it(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=K,n=J,n=nt(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Y===2||Y===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Ne(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||rt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Ne(r),pt(n)){case 2:case 8:n=ze;break;case 32:n=Be;break;case 268435456:n=He;break;default:n=Be}return r=cd.bind(null,e),n=Me(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Ne(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(iu!==0&&iu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=J;return r=nt(e,e===K?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,Ie()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){G&6?Me(Re,ad):od()})}function dd(){if(nd===0){var e=_a;e===0&&(e=Qe,Qe<<=1,!(Qe&261888)&&(Qe=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:cn(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[vt]||null).action),o=r.submitter;o&&(t=(t=o[vt]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new An(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);Ds(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),Ds(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<ni.length;hd++){var gd=ni[hd];ri(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}ri(Jr,`onAnimationEnd`),ri(Yr,`onAnimationIteration`),ri(Xr,`onAnimationStart`),ri(`dblclick`,`onDoubleClick`),ri(`focusin`,`onFocus`),ri(`focusout`,`onBlur`),ri(Zr,`onTransitionRun`),ri(Qr,`onTransitionStart`),ri($r,`onTransitionCancel`),ri(ei,`onTransitionEnd`),Nt(`onMouseEnter`,[`mouseout`,`mouseover`]),Nt(`onMouseLeave`,[`mouseout`,`mouseover`]),Nt(`onPointerEnter`,[`pointerout`,`pointerover`]),Nt(`onPointerLeave`,[`pointerout`,`pointerover`]),Mt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Mt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Mt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Mt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Mt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Mt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ii(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ii(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[bt];n===void 0&&(n=t[bt]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,At.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!yn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=Et(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}gn(function(){var r=a,i=dn(n),s=[];a:{var c=ti.get(e);if(c!==void 0){var l=An,u=e;switch(e){case`keypress`:if(Tn(n)===0)break a;case`keydown`:case`keyup`:l=Jn;break;case`focusin`:u=`focus`,l=zn;break;case`focusout`:u=`blur`,l=zn;break;case`beforeblur`:case`afterblur`:l=zn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Ln;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Rn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Xn;break;case Jr:case Yr:case Xr:l=Bn;break;case ei:l=Zn;break;case`scroll`:case`scrollend`:l=Mn;break;case`wheel`:l=Qn;break;case`copy`:case`cut`:case`paste`:l=Vn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Yn;break;case`toggle`:case`beforetoggle`:l=A}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=_n(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==un&&(u=n.relatedTarget||n.fromElement)&&(Et(u)||u[yt]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?Et(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=Ln,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Yn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:Ot(l),h=u==null?c:Ot(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,Et(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?Ot(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=vr;else if(fr(c)){if(yr)v=Or;else{v=Er;var y=Tr}}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&an(r.elementType)&&(v=vr):v=Dr;if(v&&=v(e,r)){pr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Xt(c,`number`,c.value)}switch(y=r?Ot(r):window,e){case`focusin`:(fr(y)||y.contentEditable===`true`)&&(Rr=y,zr=r,Br=null);break;case`focusout`:Br=zr=Rr=null;break;case`mousedown`:Vr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Vr=!1,Hr(s,n,i);break;case`selectionchange`:if(Lr)break;case`keydown`:case`keyup`:Hr(s,n,i)}var b;if(er)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else cr?or(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(rr&&n.locale!==`ko`&&(cr||x!==`onCompositionStart`?x===`onCompositionEnd`&&cr&&(b=wn()):(xn=i,Sn=`value`in xn?xn.value:xn.textContent,cr=!0)),y=Ed(r,x),0<y.length&&(x=new Hn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=sr(n),b!==null&&(x.data=b)))),(b=nr?lr(e,n):ur(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Hn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=_n(e,n),i!=null&&r.unshift(Td(e,i,a)),i=_n(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=_n(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=_n(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||en(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&en(e,``+r);break;case`className`:zt(e,`class`,r);break;case`tabIndex`:zt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:zt(e,n,r);break;case`style`:rn(e,r,o);break;case`data`:if(t!==`object`){zt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=cn(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=cn(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=ln);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=cn(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),Rt(e,`popover`,r);break;case`xlinkActuate`:k(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:k(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:k(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:k(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:k(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:k(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:k(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:k(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:k(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Rt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=on.get(n)||n,Rt(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:rn(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?en(e,r):(typeof r==`number`||typeof r==`bigint`)&&en(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=ln);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!jt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[vt]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Rt(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}Yt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Zt(e,!!r,n,!0):Zt(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}$t(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(an(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Jt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Zt(e,!!n,n?[]:``,!1):Zt(e,!!n,t,!0)):Zt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}Qt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(an(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e!==Wd&&(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[wt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body)}n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8){if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++}n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),Tt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r){if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e}else if(!e[wt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Tt(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=E.d;E.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=Dt(e);t!==null&&t.tag===5&&t.type===`form`?ks(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=qt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),O(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+qt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+qt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+qt(n.imageSizes)+`"]`)):i+=`[href="`+qt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),O(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+qt(r)+`"][href="`+qt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),O(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=kt(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);O(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=kt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),O(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=kt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),O(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=ve.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=kt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=kt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=kt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+qt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),O(t),e.head.appendChild(t))}function Pf(e){return`[src="`+qt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+qt(n.href)+`"]`);if(r)return t.instance=r,O(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),O(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,O(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),O(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,O(a),a):(r=n,(a=mf.get(o))&&(r=h({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),O(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[wt]||a[_t]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,O(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),O(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:S,Provider:null,Consumer:null,_currentValue:de,_currentValue2:de,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ot(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ot(0),this.hiddenUpdates=ot(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=gi(3,null,null,t),e.current=a,a.stateNode=e,t=pa(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ka(a),e}function tp(e){return e?(e=mi,e):mi}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Ja(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Ya(e,r,t),n!==null&&(hu(n,e,t),Xa(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=di(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=ft(t);var n=di(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=T.T;T.T=null;var a=E.p;try{E.p=2,up(e,t,n,r)}finally{E.p=a,T.T=i}}function lp(e,t,n,r){var i=T.T;T.T=null;var a=E.p;try{E.p=8,up(e,t,n,r)}finally{E.p=a,T.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=Dt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=tt(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Je(o);s.entanglements[1]|=c,o&=~c}rd(a),!(G&6)&&(tu=Ie()+500,id(0,!1))}}break;case 31:case 13:s=di(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=dn(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=Et(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Le()){case Re:return 2;case ze:return 8;case Be:case Ve:return 32;case He:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Dt(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=Et(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,ht(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,ht(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);un=r,n.target.dispatchEvent(r),un=null}else return t=Dt(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=Dt(n);a!==null&&(e.splice(t,3),t-=3,Ds(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[vt]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[vt]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[yt]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=mt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.8`)throw Error(i(527,Lp,`19.2.8`));E.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.8`,rendererPackageName:`react-dom`,currentDispatcherRef:T,reconcilerVersion:`19.2.8`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{Ge=zp.inject(Rp),Ke=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Xs,s=Zs,c=Qs;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[yt]=t.current,Sd(e),new Fp(t)}})),g=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=`modulepreload`,v=function(e){return`/`+e},y={},b=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=v(t,n),t=s(t),t in y)return;y[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:_,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},x=c(u(),1),ee=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,S=/^[\\/]{2}/;function C(e,t){return t+e.replace(/\\/g,`/`)}var te=`popstate`;function ne(e){return typeof e==`object`&&!!e&&`pathname`in e&&`search`in e&&`hash`in e&&`state`in e&&`key`in e}function re(e={}){function t(e,t){let n=t.state?.masked,{pathname:r,search:i,hash:a}=n||e.location;return se(``,{pathname:r,search:i,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||`default`,n?{pathname:e.location.pathname,search:e.location.search,hash:e.location.hash}:void 0)}function n(e,t){return typeof t==`string`?t:ce(t)}return ue(t,n,null,e)}function w(e,t){if(e===!1||e==null)throw Error(t)}function ie(e,t){if(!e){typeof console<`u`&&console.warn(t);try{throw Error(t)}catch{}}}function ae(){return Math.random().toString(36).substring(2,10)}function oe(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function se(e,t,n=null,r,i){return{pathname:typeof e==`string`?e:e.pathname,search:``,hash:``,...typeof t==`string`?le(t):t,state:n,key:t&&t.key||r||ae(),mask:i}}function ce({pathname:e=`/`,search:t=``,hash:n=``}){return t&&t!==`?`&&(e+=t.charAt(0)===`?`?t:`?`+t),n&&n!==`#`&&(e+=n.charAt(0)===`#`?n:`#`+n),e}function le(e){let t={};if(e){let n=e.indexOf(`#`);n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf(`?`);r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function ue(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=`POP`,c=null,l=u();l??(l=0,o.replaceState({...o.state,idx:l},``));function u(){return(o.state||{idx:null}).idx}function d(){s=`POP`;let e=u(),t=e==null?null:e-l;l=e,c&&c({action:s,location:h.location,delta:t})}function f(e,t){s=`PUSH`;let r=ne(e)?e:se(h.location,e,t);n&&n(r,e),l=u()+1;let d=oe(r,l),f=h.createHref(r.mask||r);try{o.pushState(d,``,f)}catch(e){if(e instanceof DOMException&&e.name===`DataCloneError`)throw e;i.location.assign(f)}a&&c&&c({action:s,location:h.location,delta:1})}function p(e,t){s=`REPLACE`;let r=ne(e)?e:se(h.location,e,t);n&&n(r,e),l=u();let i=oe(r,l),d=h.createHref(r.mask||r);o.replaceState(i,``,d),a&&c&&c({action:s,location:h.location,delta:0})}function m(e){return T(i,e)}let h={get action(){return s},get location(){return e(i,o)},listen(e){if(c)throw Error(`A history only accepts one active listener`);return i.addEventListener(te,d),c=e,()=>{i.removeEventListener(te,d),c=null}},createHref(e){return t(i,e)},createURL:m,encodeLocation(e){let t=m(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:f,replace:p,go(e){return o.go(e)}};return h}function T(e,t,n=!1){let r=`http://localhost`;e&&(r=e.location.origin===`null`?e.location.href:e.location.origin),w(r,`No window.location.(origin|href) available to create URL`);let i=typeof t==`string`?t:ce(t);return i=i.replace(/ $/,`%20`),!n&&S.test(i)&&(i=r+i),new URL(i,r)}function E(e,t,n=`/`){return de(e,t,n,!1)}function de(e,t,n,r,i){let a=ke((typeof t==`string`?le(t):t).pathname||`/`,n);if(a==null)return null;let o=i??fe(e),s=null,c=Oe(a);for(let e=0;s==null&&e<o.length;++e)s=we(o[e],c,r);return s}function fe(e){let t=pe(e);return he(t),t}function pe(e,t=[],n=[],r=``,i=!1){let a=(e,a,o=i,s)=>{let c={relativePath:s===void 0?e.path||``:s,caseSensitive:e.caseSensitive===!0,childrenIndex:a,route:e};if(c.relativePath.startsWith(`/`)){if(!c.relativePath.startsWith(r)&&o)return;w(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length)}let l=Le([r,c.relativePath]),u=n.concat(c);e.children&&e.children.length>0&&(w(e.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),pe(e.children,t,u,l,o)),!(e.path==null&&!e.index)&&t.push({path:l,score:Se(l,e.index),routesMeta:u.map((e,t)=>{let[n,r]=De(e.relativePath,e.caseSensitive,t===u.length-1);return{...e,matcher:n,compiledParams:r}})})};return e.forEach((e,t)=>{if(e.path===``||!e.path?.includes(`?`))a(e,t);else for(let n of me(e.path))a(e,t,!0,n)}),t}function me(e){let t=e.split(`/`);if(t.length===0)return[];let[n,...r]=t,i=n.endsWith(`?`),a=n.replace(/\?$/,``);if(r.length===0)return i?[a,``]:[a];let o=me(r.join(`/`)),s=[];return s.push(...o.map(e=>e===``?a:[a,e].join(`/`))),i&&s.push(...o),s.map(t=>e.startsWith(`/`)&&t===``?`/`:t)}function he(e){e.sort((e,t)=>e.score===t.score?Ce(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)):t.score-e.score)}var D=/^:[\w-]+$/,ge=3,_e=2,ve=1,ye=10,be=-2,xe=e=>e===`*`;function Se(e,t){let n=e.split(`/`),r=n.length;return n.some(xe)&&(r+=be),t&&(r+=_e),n.filter(e=>!xe(e)).reduce((e,t)=>e+(D.test(t)?ge:t===``?ve:ye),r)}function Ce(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}function we(e,t,n=!1){let{routesMeta:r}=e,i={},a=`/`,o=[];for(let e=0;e<r.length;++e){let s=r[e],c=e===r.length-1,l=a===`/`?t:t.slice(a.length)||`/`,u={path:s.relativePath,caseSensitive:s.caseSensitive,end:c},d=s.matcher&&s.compiledParams?Ee(u,l,s.matcher,s.compiledParams):Te(u,l),f=s.route;if(!d&&c&&n&&!r[r.length-1].route.index&&(d=Te({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},l)),!d)return null;Object.assign(i,d.params),o.push({params:i,pathname:Le([a,d.pathname]),pathnameBase:ze(Le([a,d.pathnameBase])),route:f}),d.pathnameBase!==`/`&&(a=Le([a,d.pathnameBase]))}return o}function Te(e,t){typeof e==`string`&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=De(e.path,e.caseSensitive,e.end);return Ee(e,t,n,r)}function Ee(e,t,n,r){let i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,`$1`),s=i.slice(1);return{params:r.reduce((e,{paramName:t,isOptional:n},r)=>{if(t===`*`){let e=s[r]||``;o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,`$1`)}let i=s[r];return e[t]=n&&!i?void 0:(i||``).replace(/%2F/g,`/`),e},{}),pathname:a,pathnameBase:o,pattern:e}}function De(e,t=!1,n=!0){ie(e===`*`||!e.endsWith(`*`)||e.endsWith(`/*`),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,`/*`)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,`/*`)}".`);let r=[],i=`^`+e.replace(/\/*\*?$/,``).replace(/^\/*/,`/`).replace(/[\\.*+^${}|()[\]]/g,`\\$&`).replace(/\/:([\w-]+)(\?)?/g,(e,t,n,i,a)=>{if(r.push({paramName:t,isOptional:n!=null}),n){let t=a.charAt(i+e.length);return t&&t!==`/`?`/([^\\/]*)`:`(?:/([^\\/]*))?`}return`/([^\\/]+)`}).replace(/\/([\w-]+)\?(\/|$)/g,`(/$1)?$2`);return e.endsWith(`*`)?(r.push({paramName:`*`}),i+=e===`*`||e===`/*`?`(.*)$`:`(?:\\/(.+)|\\/*)$`):n?i+=`\\/*$`:e!==``&&e!==`/`&&(i+=`(?:(?=\\/|$))`),[new RegExp(i,t?void 0:`i`),r]}function Oe(e){try{return e.split(`/`).map(e=>decodeURIComponent(e).replace(/\//g,`%2F`)).join(`/`)}catch(t){return ie(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function ke(e,t){if(t===`/`)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith(`/`)?t.length-1:t.length,r=e.charAt(n);return r&&r!==`/`?null:e.slice(n)||`/`}function Ae(e,t=`/`){let{pathname:n,search:r=``,hash:i=``}=typeof e==`string`?le(e):e,a;return n?(n=Ie(n),a=n.startsWith(`/`)?je(n.substring(1),`/`):je(n,t)):a=t,{pathname:a,search:Be(r),hash:Ve(i)}}function je(e,t){let n=Re(t).split(`/`);return e.split(`/`).forEach(e=>{e===`..`?n.length>1&&n.pop():e!==`.`&&n.push(e)}),n.length>1?n.join(`/`):`/`}function Me(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Ne(e){return e.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Pe(e){let t=Ne(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function Fe(e,t,n,r=!1){let i;typeof e==`string`?i=le(e):(i={...e},w(!i.pathname||!i.pathname.includes(`?`),Me(`?`,`pathname`,`search`,i)),w(!i.pathname||!i.pathname.includes(`#`),Me(`#`,`pathname`,`hash`,i)),w(!i.search||!i.search.includes(`#`),Me(`#`,`search`,`hash`,i)));let a=e===``||i.pathname===``,o=a?`/`:i.pathname,s;if(o==null)s=n;else{let e=t.length-1;if(!r&&o.startsWith(`..`)){let t=o.split(`/`);for(;t[0]===`..`;)t.shift(),--e;i.pathname=t.join(`/`)}s=e>=0?t[e]:`/`}let c=Ae(i,s),l=o&&o!==`/`&&o.endsWith(`/`),u=(a||o===`.`)&&n.endsWith(`/`);return!c.pathname.endsWith(`/`)&&(l||u)&&(c.pathname+=`/`),c}var Ie=e=>e.replace(/[\\/]{2,}/g,`/`),Le=e=>Ie(e.join(`/`)),Re=e=>e.replace(/\/+$/,``),ze=e=>Re(e).replace(/^\/*/,`/`),Be=e=>!e||e===`?`?``:e.startsWith(`?`)?e:`?`+e,Ve=e=>!e||e===`#`?``:e.startsWith(`#`)?e:`#`+e,He=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||``,this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function Ue(e){return e!=null&&typeof e.status==`number`&&typeof e.statusText==`string`&&typeof e.internal==`boolean`&&`data`in e}function We(e){return Le(e.map(e=>e.route.path).filter(Boolean))||`/`}var Ge=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;function Ke(e,t){let n=e;if(typeof n!=`string`||!ee.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(Ge)try{let e=new URL(window.location.href),r=S.test(n)?new URL(C(n,e.protocol)):new URL(n),a=ke(r.pathname,t);r.origin===e.origin&&a!=null?n=a+r.search+r.hash:i=!0}catch{ie(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var qe=[`POST`,`PUT`,`PATCH`,`DELETE`];new Set(qe);var Je=[`GET`,...qe];new Set(Je);var Ye=[`about:`,`blob:`,`chrome:`,`chrome-untrusted:`,`content:`,`data:`,`devtools:`,`file:`,`filesystem:`,`javascript:`];function Xe(e){try{return Ye.includes(new URL(e).protocol)}catch{return!1}}var Ze=x.createContext(null);Ze.displayName=`DataRouter`;var Qe=x.createContext(null);Qe.displayName=`DataRouterState`;var $e=x.createContext(!1);function et(){return x.useContext($e)}var tt=x.createContext({isTransitioning:!1});tt.displayName=`ViewTransition`;var nt=x.createContext(new Map);nt.displayName=`Fetchers`;var rt=x.createContext(null);rt.displayName=`Await`;var it=x.createContext(null);it.displayName=`Navigation`;var at=x.createContext(null);at.displayName=`Location`;var ot=x.createContext({outlet:null,matches:[],isDataRoute:!1});ot.displayName=`Route`;var st=x.createContext(null);st.displayName=`RouteError`;var ct=`REACT_ROUTER_ERROR`,lt=`REDIRECT`,ut=`ROUTE_ERROR_RESPONSE`;function dt(e){if(e.startsWith(`${ct}:${lt}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`&&typeof t.location==`string`&&typeof t.reloadDocument==`boolean`&&typeof t.replace==`boolean`)return t}catch{}}function ft(e){if(e.startsWith(`${ct}:${ut}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`)return new He(t.status,t.statusText,t.data)}catch{}}function pt(e,{relative:t}={}){w(mt(),`useHref() may be used only in the context of a <Router> component.`);let{basename:n,navigator:r}=x.useContext(it),{hash:i,pathname:a,search:o}=bt(e,{relative:t}),s=a;return n!==`/`&&(s=a===`/`?n:Le([n,a])),r.createHref({pathname:s,search:o,hash:i})}function mt(){return x.useContext(at)!=null}function ht(){return w(mt(),`useLocation() may be used only in the context of a <Router> component.`),x.useContext(at).location}var gt=`You should call navigate() in a React.useEffect(), not when your component is first rendered.`;function _t(e){x.useContext(it).static||x.useLayoutEffect(e)}function vt(){let{isDataRoute:e}=x.useContext(ot);return e?It():yt()}function yt(){w(mt(),`useNavigate() may be used only in the context of a <Router> component.`);let e=x.useContext(Ze),{basename:t,navigator:n}=x.useContext(it),{matches:r}=x.useContext(ot),{pathname:i}=ht(),a=JSON.stringify(Pe(r)),o=x.useRef(!1);return _t(()=>{o.current=!0}),x.useCallback((r,s={})=>{if(ie(o.current,gt),!o.current)return;if(typeof r==`number`){n.go(r);return}let c=Fe(r,JSON.parse(a),i,s.relative===`path`);e==null&&t!==`/`&&(c.pathname=c.pathname===`/`?t:Le([t,c.pathname])),(s.replace?n.replace:n.push)(c,s.state,s)},[t,n,a,i,e])}x.createContext(null);function bt(e,{relative:t}={}){let{matches:n}=x.useContext(ot),{pathname:r}=ht(),i=JSON.stringify(Pe(n));return x.useMemo(()=>Fe(e,JSON.parse(i),r,t===`path`),[e,i,r,t])}function xt(e,t){return St(e,t)}function St(e,t,n){w(mt(),`useRoutes() may be used only in the context of a <Router> component.`);let{navigator:r}=x.useContext(it),{matches:i}=x.useContext(ot),a=i[i.length-1],o=a?a.params:{},s=a?a.pathname:`/`,c=a?a.pathnameBase:`/`,l=a&&a.route;{let e=l&&l.path||``;Rt(s,!l||e.endsWith(`*`)||e.endsWith(`*?`),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e===`/`?`*`:`${e}/*`}">.`)}let u=ht(),d;if(t){let e=typeof t==`string`?le(t):t;w(c===`/`||e.pathname?.startsWith(c),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`),d=e}else d=u;let f=d.pathname||`/`,p=f;if(c!==`/`){let e=c.replace(/^\//,``).split(`/`);p=`/`+f.replace(/^\//,``).split(`/`).slice(e.length).join(`/`)}let m=n&&n.state.matches.length?n.state.matches.map(e=>Object.assign(e,{route:n.manifest[e.route.id]||e.route})):E(e,{pathname:p});ie(l||m!=null,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),ie(m==null||m[m.length-1].route.element!==void 0||m[m.length-1].route.Component!==void 0||m[m.length-1].route.lazy!==void 0,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let h=kt(m&&m.map(e=>Object.assign({},e,{params:Object.assign({},o,e.params),pathname:Le([c,r.encodeLocation?r.encodeLocation(e.pathname.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathname]),pathnameBase:e.pathnameBase===`/`?c:Le([c,r.encodeLocation?r.encodeLocation(e.pathnameBase.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathnameBase])})),i,n);return t&&h?x.createElement(at.Provider,{value:{location:{pathname:`/`,search:``,hash:``,state:null,key:`default`,mask:void 0,...d},navigationType:`POP`}},h):h}function Ct(){let e=Ft(),t=Ue(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r=`rgba(200,200,200, 0.5)`,i={padding:`0.5rem`,backgroundColor:r},a={padding:`2px 4px`,backgroundColor:r},o=null;return console.error(`Error handled by React Router default ErrorBoundary:`,e),o=x.createElement(x.Fragment,null,x.createElement(`p`,null,`💿 Hey developer 👋`),x.createElement(`p`,null,`You can provide a way better UX than this when your app throws errors by providing your own `,x.createElement(`code`,{style:a},`ErrorBoundary`),` or`,` `,x.createElement(`code`,{style:a},`errorElement`),` prop on your route.`)),x.createElement(x.Fragment,null,x.createElement(`h2`,null,`Unexpected Application Error!`),x.createElement(`h3`,{style:{fontStyle:`italic`}},t),n?x.createElement(`pre`,{style:i},n):null,o)}var wt=x.createElement(Ct,null),Tt=class extends x.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!==`idle`&&e.revalidation===`idle`?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error===void 0?t.error:e.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error(`React Router caught the following error during render`,e)}render(){let e=this.state.error;if(this.context&&typeof e==`object`&&e&&`digest`in e&&typeof e.digest==`string`){let t=ft(e.digest);t&&(e=t)}let t=e===void 0?this.props.children:x.createElement(ot.Provider,{value:this.props.routeContext},x.createElement(st.Provider,{value:e,children:this.props.component}));return this.context?x.createElement(Dt,{error:e},t):t}};Tt.contextType=$e;var Et=new WeakMap;function Dt({children:e,error:t}){let{basename:n}=x.useContext(it);if(typeof t==`object`&&t&&`digest`in t&&typeof t.digest==`string`){let e=dt(t.digest);if(e){let r=Et.get(t);if(r)throw r;let i=Ke(e.location,n),a=i.absoluteURL||i.to;if(Xe(a))throw Error(`Invalid redirect location`);if(Ge&&!Et.get(t)){if(i.isExternal||e.reloadDocument)window.location.href=a;else{let n=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(i.to,{replace:e.replace}));throw Et.set(t,n),n}}return x.createElement(`meta`,{httpEquiv:`refresh`,content:`0;url=${a}`})}}return e}function Ot({routeContext:e,match:t,children:n}){let r=x.useContext(Ze);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),x.createElement(ot.Provider,{value:e},n)}function kt(e,t=[],n){let r=n?.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,a=r?.errors;if(a!=null){let e=i.findIndex(e=>e.route.id&&a?.[e.route.id]!==void 0);w(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(`,`)}`),i=i.slice(0,Math.min(i.length,e+1))}let o=!1,s=-1;if(n&&r){o=r.renderFallback;for(let e=0;e<i.length;e++){let t=i[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:a}=r,c=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!a||a[t.route.id]===void 0);if(t.route.lazy||c){n.isStatic&&(o=!0),i=s>=0?i.slice(0,s+1):[i[0]];break}}}}let c=n?.onError,l=r&&c?(e,t)=>{c(e,{location:r.location,params:r.matches?.[0]?.params??{},pattern:We(r.matches),errorInfo:t})}:void 0;return i.reduceRight((e,n,c)=>{let u,d=!1,f=null,p=null;r&&(u=a&&n.route.id?a[n.route.id]:void 0,f=n.route.errorElement||wt,o&&(s<0&&c===0?(Rt(`route-fallback`,!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,p=null):s===c&&(d=!0,p=n.route.hydrateFallbackElement||null)));let m=t.concat(i.slice(0,c+1)),h=()=>{let t;return t=u?f:d?p:n.route.Component?x.createElement(n.route.Component,null):n.route.element?n.route.element:e,x.createElement(Ot,{match:n,routeContext:{outlet:e,matches:m,isDataRoute:r!=null},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||c===0)?x.createElement(Tt,{location:r.location,revalidation:r.revalidation,component:f,error:u,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0},onError:l}):h()},null)}function O(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function At(e){let t=x.useContext(Ze);return w(t,O(e)),t}function jt(e){let t=x.useContext(Qe);return w(t,O(e)),t}function Mt(e){let t=x.useContext(ot);return w(t,O(e)),t}function Nt(e){let t=Mt(e),n=t.matches[t.matches.length-1];return w(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function Pt(){return Nt(`useRouteId`)}function Ft(){let e=x.useContext(st),t=jt(`useRouteError`),n=Nt(`useRouteError`);return e===void 0?t.errors?.[n]:e}function It(){let{router:e}=At(`useNavigate`),t=Nt(`useNavigate`),n=x.useRef(!1);return _t(()=>{n.current=!0}),x.useCallback(async(r,i={})=>{ie(n.current,gt),n.current&&(typeof r==`number`?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...i}))},[e,t])}var Lt={};function Rt(e,t,n){!t&&!Lt[e]&&(Lt[e]=!0,ie(!1,n))}x.memo(zt);function zt({routes:e,manifest:t,future:n,state:r,isStatic:i,onError:a}){return St(e,void 0,{manifest:t,state:r,isStatic:i,onError:a,future:n})}function k(e){w(!1,`A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`)}function Bt({basename:e=`/`,children:t=null,location:n,navigationType:r=`POP`,navigator:i,static:a=!1,useTransitions:o}){w(!mt(),`You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`);let s=e.replace(/^\/*/,`/`),c=x.useMemo(()=>({basename:s,navigator:i,static:a,useTransitions:o,future:{}}),[s,i,a,o]);typeof n==`string`&&(n=le(n));let{pathname:l=`/`,search:u=``,hash:d=``,state:f=null,key:p=`default`,mask:m}=n,h=x.useMemo(()=>{let e=ke(l,s);return e==null?null:{location:{pathname:e,search:u,hash:d,state:f,key:p,mask:m},navigationType:r}},[s,l,u,d,f,p,r,m]);return ie(h!=null,`<Router basename="${s}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`),h==null?null:x.createElement(it.Provider,{value:c},x.createElement(at.Provider,{children:t,value:h}))}function Vt({children:e,location:t}){return xt(Ht(e),t)}x.Component;function Ht(e,t=[]){let n=[];return x.Children.forEach(e,(e,r)=>{if(!x.isValidElement(e))return;let i=[...t,r];if(e.type===x.Fragment){n.push.apply(n,Ht(e.props.children,i));return}w(e.type===k,`[${typeof e.type==`string`?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),w(!e.props.index||!e.props.children,`An index route cannot have child routes.`);let a={id:e.props.id||i.join(`-`),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,middleware:e.props.middleware,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:e.props.hasErrorBoundary===!0||e.props.ErrorBoundary!=null||e.props.errorElement!=null,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=Ht(e.props.children,i)),n.push(a)}),n}var Ut=`get`,Wt=`application/x-www-form-urlencoded`;function Gt(e){return typeof HTMLElement<`u`&&e instanceof HTMLElement}function Kt(e){return Gt(e)&&e.tagName.toLowerCase()===`button`}function qt(e){return Gt(e)&&e.tagName.toLowerCase()===`form`}function Jt(e){return Gt(e)&&e.tagName.toLowerCase()===`input`}function Yt(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Xt(e,t){return e.button===0&&(!t||t===`_self`)&&!Yt(e)}var Zt=null;function Qt(){if(Zt===null)try{new FormData(document.createElement(`form`),0),Zt=!1}catch{Zt=!0}return Zt}var $t=new Set([`application/x-www-form-urlencoded`,`multipart/form-data`,`text/plain`]);function en(e){return e!=null&&!$t.has(e)?(ie(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Wt}"`),null):e}function tn(e,t){let n,r,i,a,o;if(qt(e)){let o=e.getAttribute(`action`);r=o?ke(o,t):null,n=e.getAttribute(`method`)||Ut,i=en(e.getAttribute(`enctype`))||Wt,a=new FormData(e)}else if(Kt(e)||Jt(e)&&(e.type===`submit`||e.type===`image`)){let o=e.form;if(o==null)throw Error(`Cannot submit a <button> or <input type="submit"> without a <form>`);let s=e.getAttribute(`formaction`)||o.getAttribute(`action`);if(r=s?ke(s,t):null,n=e.getAttribute(`formmethod`)||o.getAttribute(`method`)||Ut,i=en(e.getAttribute(`formenctype`))||en(o.getAttribute(`enctype`))||Wt,a=new FormData(o,e),!Qt()){let{name:t,type:n,value:r}=e;if(n===`image`){let e=t?`${t}.`:``;a.append(`${e}x`,`0`),a.append(`${e}y`,`0`)}else t&&a.append(t,r)}}else if(Gt(e))throw Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);else n=Ut,r=null,i=Wt,o=e;return a&&i===`text/plain`&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);function nn(e,t){if(e===!1||e==null)throw Error(t)}function rn(e,t,n,r){let i=typeof e==`string`?new URL(e,typeof window>`u`?`server://singlefetch/`:window.location.origin):e;return i.pathname=n?i.pathname.endsWith(`/`)?`${i.pathname}_.${r}`:`${i.pathname}.${r}`:i.pathname===`/`?`_root.${r}`:t&&ke(i.pathname,t)===`/`?`${Re(t)}/_root.${r}`:`${Re(i.pathname)}.${r}`,i}async function an(e,t){if(e.id in t)return t[e.id];try{let n=await b(()=>import(e.module),[]);return t[e.id]=n,n}catch(t){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function on(e){return e!=null&&typeof e.page==`string`}function sn(e){return e==null?!1:e.href==null?e.rel===`preload`&&typeof e.imageSrcSet==`string`&&typeof e.imageSizes==`string`:typeof e.rel==`string`&&typeof e.href==`string`}async function cn(e,t,n){return pn((await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await an(r,n);return e.links?e.links():[]}return[]}))).flat(1).filter(sn).filter(e=>e.rel===`stylesheet`||e.rel===`preload`).map(e=>e.rel===`stylesheet`?{...e,rel:`prefetch`,as:`style`}:{...e,rel:`prefetch`}))}function ln(e,t,n,r,i,a){let o=(e,t)=>!n[t]||e.route.id!==n[t].route.id,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith(`*`)&&n[t].params[`*`]!==e.params[`*`];return a===`assets`?t.filter((e,t)=>o(e,t)||s(e,t)):a===`data`?t.filter((t,a)=>{let c=r.routes[t.route.id];if(!c||!c.hasLoader)return!1;if(o(t,a)||s(t,a))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if(typeof r==`boolean`)return r}return!0}):[]}function un(e,t,{includeHydrateFallback:n}={}){return dn(e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function dn(e){return[...new Set(e)]}function fn(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function pn(e,t){let n=new Set,r=new Set(t);return e.reduce((e,i)=>{if(t&&!on(i)&&i.as===`script`&&i.href&&r.has(i.href))return e;let a=JSON.stringify(fn(i));return n.has(a)||(n.add(a),e.push({key:a,link:i})),e},[])}function mn(){let e=x.useContext(Ze);return nn(e,`You must render this element inside a <DataRouterContext.Provider> element`),e}function hn(){let e=x.useContext(Qe);return nn(e,`You must render this element inside a <DataRouterStateContext.Provider> element`),e}var gn=x.createContext(void 0);gn.displayName=`FrameworkContext`;function _n(){let e=x.useContext(gn);return nn(e,`You must render this element inside a <HydratedRouter> element`),e}function vn(e,t){let n=x.useContext(gn),[r,i]=x.useState(!1),[a,o]=x.useState(!1),{onFocus:s,onBlur:c,onMouseEnter:l,onMouseLeave:u,onTouchStart:d}=t,f=x.useRef(null);x.useEffect(()=>{if(e===`render`&&o(!0),e===`viewport`){let e=new IntersectionObserver(e=>{e.forEach(e=>{o(e.isIntersecting)})},{threshold:.5});return f.current&&e.observe(f.current),()=>{e.disconnect()}}},[e]),x.useEffect(()=>{if(r){let e=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(e)}}},[r]);let p=()=>{i(!0)},m=()=>{i(!1),o(!1)};return n?e===`intent`?[a,f,{onFocus:yn(s,p),onBlur:yn(c,m),onMouseEnter:yn(l,p),onMouseLeave:yn(u,m),onTouchStart:yn(d,p)}]:[a,f,{}]:[!1,f,{}]}function yn(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function bn({page:e,...t}){let n=et(),{nonce:r}=_n(),{router:i}=mn(),a=x.useMemo(()=>E(i.routes,e,i.basename),[i.routes,e,i.basename]);return a?(t.nonce==null&&r&&(t={...t,nonce:r}),n?x.createElement(Sn,{page:e,matches:a,...t}):x.createElement(Cn,{page:e,matches:a,...t})):null}function xn(e){let{manifest:t,routeModules:n}=_n(),[r,i]=x.useState([]);return x.useEffect(()=>{let r=!1;return cn(e,t,n).then(e=>{r||i(e)}),()=>{r=!0}},[e,t,n]),r}function Sn({page:e,matches:t,...n}){let r=ht(),{future:i}=_n(),{basename:a}=mn(),o=x.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=rn(e,a,i.v8_trailingSlashAwareDataRequests,`rsc`),o=!1,s=[];for(let e of t)typeof e.route.shouldRevalidate==`function`?o=!0:s.push(e.route.id);return o&&s.length>0&&n.searchParams.set(`_routes`,s.join(`,`)),[n.pathname+n.search]},[a,i.v8_trailingSlashAwareDataRequests,e,r,t]);return x.createElement(x.Fragment,null,o.map(e=>x.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})))}function Cn({page:e,matches:t,...n}){let r=ht(),{future:i,manifest:a,routeModules:o}=_n(),{basename:s}=mn(),{loaderData:c,matches:l}=hn(),u=x.useMemo(()=>ln(e,t,l,a,r,`data`),[e,t,l,a,r]),d=x.useMemo(()=>ln(e,t,l,a,r,`assets`),[e,t,l,a,r]),f=x.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=new Set,l=!1;if(t.forEach(e=>{let t=a.routes[e.route.id];!t||!t.hasLoader||(!u.some(t=>t.route.id===e.route.id)&&e.route.id in c&&o[e.route.id]?.shouldRevalidate||t.hasClientLoader?l=!0:n.add(e.route.id))}),n.size===0)return[];let d=rn(e,s,i.v8_trailingSlashAwareDataRequests,`data`);return l&&n.size>0&&d.searchParams.set(`_routes`,t.filter(e=>n.has(e.route.id)).map(e=>e.route.id).join(`,`)),[d.pathname+d.search]},[s,i.v8_trailingSlashAwareDataRequests,c,r,a,u,t,e,o]),p=x.useMemo(()=>un(d,a),[d,a]),m=xn(d);return x.createElement(x.Fragment,null,f.map(e=>x.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})),p.map(e=>x.createElement(`link`,{key:e,rel:`modulepreload`,href:e,...n})),m.map(({key:e,link:t})=>x.createElement(`link`,{key:e,nonce:n.nonce,...t,crossOrigin:t.crossOrigin??n.crossOrigin})))}function wn(...e){return t=>{e.forEach(e=>{typeof e==`function`?e(t):e!=null&&(e.current=t)})}}x.Component;var Tn=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;try{Tn&&(window.__reactRouterVersion=`7.18.2`)}catch{}function En({basename:e,children:t,useTransitions:n,window:r}){let i=x.useRef();i.current??=re({window:r,v5Compat:!0});let a=i.current,[o,s]=x.useState({action:a.action,location:a.location}),c=x.useCallback(e=>{n===!1?s(e):x.startTransition(()=>s(e))},[n]);return x.useLayoutEffect(()=>a.listen(c),[a,c]),x.createElement(Bt,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:a,useTransitions:n})}var Dn=x.forwardRef(function({onClick:e,discover:t=`render`,prefetch:n=`none`,relative:r,reloadDocument:i,replace:a,mask:o,state:s,target:c,to:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m){let{basename:h,navigator:g,useTransitions:_}=x.useContext(it),v=typeof l==`string`&&ee.test(l),y=Ke(l,h);l=y.to;let b=pt(l,{relative:r}),S=ht(),C=null;if(o){let e=Fe(o,[],S.mask?S.mask.pathname:`/`,!0);h!==`/`&&(e.pathname=e.pathname===`/`?h:Le([h,e.pathname])),C=g.createHref(e)}let[te,ne,re]=vn(n,p),w=Mn(l,{replace:a,mask:o,state:s,target:c,preventScrollReset:u,relative:r,viewTransition:d,defaultShouldRevalidate:f,useTransitions:_});function ie(t){e&&e(t),t.defaultPrevented||w(t)}let ae=!(y.isExternal||i),oe=x.createElement(`a`,{...p,...re,href:(ae?C:void 0)||y.absoluteURL||b,onClick:ae?ie:e,ref:wn(m,ne),target:c,"data-discover":!v&&t===`render`?`true`:void 0});return te&&!v?x.createElement(x.Fragment,null,oe,x.createElement(bn,{page:b})):oe});Dn.displayName=`Link`;var On=x.forwardRef(function({"aria-current":e=`page`,caseSensitive:t=!1,className:n=``,end:r=!1,style:i,to:a,viewTransition:o,children:s,...c},l){let u=bt(a,{relative:c.relative}),d=ht(),f=x.useContext(Qe),{navigator:p,basename:m}=x.useContext(it),h=f!=null&&Ln(u)&&o===!0,g=p.encodeLocation?p.encodeLocation(u).pathname:u.pathname,_=d.pathname,v=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;t||(_=_.toLowerCase(),v=v?v.toLowerCase():null,g=g.toLowerCase()),v&&m&&(v=ke(v,m)||v);let y=g!==`/`&&g.endsWith(`/`)?g.length-1:g.length,b=_===g||!r&&_.startsWith(g)&&_.charAt(y)===`/`,ee=v!=null&&(v===g||!r&&v.startsWith(g)&&v.charAt(g.length)===`/`),S={isActive:b,isPending:ee,isTransitioning:h},C=b?e:void 0,te;te=typeof n==`function`?n(S):[n,b?`active`:null,ee?`pending`:null,h?`transitioning`:null].filter(Boolean).join(` `);let ne=typeof i==`function`?i(S):i;return x.createElement(Dn,{...c,"aria-current":C,className:te,ref:l,style:ne,to:a,viewTransition:o},typeof s==`function`?s(S):s)});On.displayName=`NavLink`;var kn=x.forwardRef(({discover:e=`render`,fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:a,method:o=Ut,action:s,onSubmit:c,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m)=>{let{useTransitions:h}=x.useContext(it),g=Fn(),_=In(s,{relative:l}),v=o.toLowerCase()===`get`?`get`:`post`,y=typeof s==`string`&&ee.test(s);return x.createElement(`form`,{ref:m,method:v,action:_,onSubmit:r?c:e=>{if(c&&c(e),e.defaultPrevented)return;e.preventDefault();let r=e.nativeEvent.submitter,s=r?.getAttribute(`formmethod`)||o,p=()=>g(r||e.currentTarget,{fetcherKey:t,method:s,navigate:n,replace:i,state:a,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f});h&&n!==!1?x.startTransition(()=>p()):p()},...p,"data-discover":!y&&e===`render`?`true`:void 0})});kn.displayName=`Form`;function An(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function jn(e){let t=x.useContext(Ze);return w(t,An(e)),t}function Mn(e,{target:t,replace:n,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c,useTransitions:l}={}){let u=vt(),d=ht(),f=bt(e,{relative:o});return x.useCallback(p=>{if(Xt(p,t)){p.preventDefault();let t=n===void 0?ce(d)===ce(f):n,m=()=>u(e,{replace:t,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c});l?x.startTransition(()=>m()):m()}},[d,u,f,n,r,i,t,e,a,o,s,c,l])}var Nn=0,Pn=()=>`__${String(++Nn)}__`;function Fn(){let{router:e}=jn(`useSubmit`),{basename:t}=x.useContext(it),n=Pt(),r=e.fetch,i=e.navigate;return x.useCallback(async(e,a={})=>{let{action:o,method:s,encType:c,formData:l,body:u}=tn(e,t);if(a.navigate===!1){let e=a.fetcherKey||Pn();await r(e,n,a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,flushSync:a.flushSync})}else await i(a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,i,t,n])}function In(e,{relative:t}={}){let{basename:n}=x.useContext(it),r=x.useContext(ot);w(r,`useFormAction must be used inside a RouteContext`);let[i]=r.matches.slice(-1),a={...bt(e||`.`,{relative:t})},o=ht();if(e==null){a.search=o.search;let e=new URLSearchParams(a.search),t=e.getAll(`index`);if(t.some(e=>e===``)){e.delete(`index`),t.filter(e=>e).forEach(t=>e.append(`index`,t));let n=e.toString();a.search=n?`?${n}`:``}}return(!e||e===`.`)&&i.route.index&&(a.search=a.search?a.search.replace(/^\?/,`?index&`):`?index`),n!==`/`&&(a.pathname=a.pathname===`/`?n:Le([n,a.pathname])),ce(a)}function Ln(e,{relative:t}={}){let n=x.useContext(tt);w(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=jn(`useViewTransitionState`),i=bt(e,{relative:t});if(!n.isTransitioning)return!1;let a=ke(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=ke(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Te(i.pathname,o)!=null||Te(i.pathname,a)!=null}var Rn=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),zn=e=>e.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase(),Bn=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase()),Vn=e=>{let t=Bn(e);return t.charAt(0).toUpperCase()+t.slice(1)},Hn={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`,strokeLinejoin:`round`},Un=e=>{for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0;return!1},Wn=(0,x.createContext)({}),Gn=()=>(0,x.useContext)(Wn),Kn=(0,x.forwardRef)(({color:e,size:t,strokeWidth:n,absoluteStrokeWidth:r,className:i=``,children:a,iconNode:o,...s},c)=>{let{size:l=24,strokeWidth:u=2,absoluteStrokeWidth:d=!1,color:f=`currentColor`,className:p=``}=Gn()??{},m=r??d?Number(n??u)*24/Number(t??l):n??u;return(0,x.createElement)(`svg`,{ref:c,...Hn,width:t??l??Hn.width,height:t??l??Hn.height,stroke:e??f,strokeWidth:m,className:Rn(`lucide`,p,i),...!a&&!Un(s)&&{"aria-hidden":`true`},...s},[...o.map(([e,t])=>(0,x.createElement)(e,t)),...Array.isArray(a)?a:[a]])}),qn=(e,t)=>{let n=(0,x.forwardRef)(({className:n,...r},i)=>(0,x.createElement)(Kn,{ref:i,iconNode:t,className:Rn(`lucide-${zn(Vn(e))}`,`lucide-${e}`,n),...r}));return n.displayName=Vn(e),n},Jn=qn(`arrow-right`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`m12 5 7 7-7 7`,key:`xquz4c`}]]),Yn=qn(`chevron-down`,[[`path`,{d:`m6 9 6 6 6-6`,key:`qrunsl`}]]),Xn=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),Zn=o(((e,t)=>{t.exports=Xn()})),Qn=g(),A=Zn(),$n=`https://res.cloudinary.com/tpxo8m6a/image/upload/v1787721139/36b813d8bb9bc0141c6a096a0d4f0ae45d345450.png`;function er(){return(0,A.jsxs)(`nav`,{className:`mx-auto flex h-[56px] w-[720px] items-center rounded-full bg-black px-[4px] font-inter`,children:[(0,A.jsx)(`a`,{href:`/`,className:`ml-[8px] flex w-[190px] shrink-0 items-center`,children:(0,A.jsx)(`img`,{src:$n,alt:`DataCircles`,className:`\r
            h-auto\r
            w-[180px]\r
            object-contain\r
            brightness-0\r
            invert\r
            opacity-[0.22]\r
          `,fetchPriority:`high`,decoding:`async`})}),(0,A.jsxs)(`div`,{className:`flex h-full flex-1 items-center justify-center gap-[21px]`,children:[(0,A.jsx)(`a`,{href:`/`,className:`whitespace-nowrap text-[14px] font-normal leading-none text-white`,children:`Home`}),(0,A.jsx)(`a`,{href:`/about`,className:`whitespace-nowrap text-[14px] font-normal leading-none text-white`,children:`About`}),(0,A.jsxs)(`button`,{type:`button`,className:`flex items-center gap-[5px] whitespace-nowrap text-[14px] font-normal leading-none text-white`,children:[(0,A.jsx)(`span`,{children:`Data Vault`}),(0,A.jsx)(Yn,{size:13,strokeWidth:1.8})]}),(0,A.jsx)(`a`,{href:`/features`,className:`whitespace-nowrap text-[14px] font-normal leading-none text-white`,children:`Features`}),(0,A.jsx)(`a`,{href:`/pricing`,className:`whitespace-nowrap text-[14px] font-normal leading-none text-white`,children:`Pricing`})]}),(0,A.jsxs)(`a`,{href:`/signup`,className:`\r
          mr-[2px]\r
          flex\r
          h-[44px]\r
          w-[126px]\r
          shrink-0\r
          items-center\r
          justify-center\r
          gap-[7px]\r
          rounded-full\r
          bg-[#1683F7]\r
          text-[14px]\r
          font-semibold\r
          leading-none\r
          text-white\r
        `,children:[(0,A.jsx)(`span`,{children:`Sign Up/In`}),(0,A.jsx)(Jn,{size:17,strokeWidth:2})]})]})}function tr(){let e=[{src:`https://res.cloudinary.com/tpxo8m6a/image/upload/v1787749787/6e8ca7c3e53836b10aab3e36b1c5f152347111a5.png`,alt:`Codecrafter`},{src:`https://res.cloudinary.com/tpxo8m6a/image/upload/v1787749800/77d17fd71ccd171c93a6b9ea1612c2bb49ba7d84.png`,alt:`3Portals`},{src:`https://res.cloudinary.com/tpxo8m6a/image/upload/v1787749813/96cd453112652b053c531a8b50744142de4f8157.png`,alt:`Watchtower`},{src:`https://res.cloudinary.com/tpxo8m6a/image/upload/v1787749824/e70fa1d06917acd1f0823a31d3e0f3afc7a25309.png`,alt:`Foresight`},{src:`https://res.cloudinary.com/tpxo8m6a/image/upload/v1787749851/7045ca502fa906344a3c06ce9a4b1ad9f91d3e50.png`,alt:`Cons`}];return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(`style`,{children:`
        /* =========================================================
           TRUSTED AND USED BY
           ========================================================= */

        .trusted-section {
          width: 100%;
          margin-top: 32px;
          background: #ffffff;
        }

        .trusted-title {
          display: flex;
          align-items: center;
          justify-content: center;

          margin-bottom: 14px;

          font-family: Inter, Arial, Helvetica, sans-serif;
          font-size: 14px;
          line-height: 18px;
          font-weight: 400;

          letter-spacing: 0.5px;
          text-transform: uppercase;

          color: #666666;
        }

        /* =========================================================
           MARQUEE
           EXACT DESKTOP SIZE: 820px × 40px
           ========================================================= */

        .trusted-marquee {
          position: relative;

          width: 820px;
          height: 40px;

          margin: 0 auto;

          overflow: hidden;

          background: #ffffff;
        }

        /* =========================================================
           MOVING TRACK
           RIGHT → LEFT
           
           Runs permanently.
           ========================================================= */

        .trusted-track {
          position: absolute;

          top: 0;
          left: 0;

          width: max-content;
          height: 40px;

          display: flex;
          align-items: center;

          animation: trustedMoveLeft 18s linear infinite;

          will-change: transform;
        }

        /* =========================================================
           LOGO
           ========================================================= */

        .trusted-logo {
          width: 130px;
          height: 32px;

          flex: 0 0 130px;

          display: flex;
          align-items: center;
          justify-content: center;

          margin-right: 34px;
        }

        .trusted-logo img {
          display: block;

          width: auto;
          height: auto;

          max-width: 120px;
          max-height: 24px;

          object-fit: contain;
        }

        /* =========================================================
           RIGHT → LEFT
           ========================================================= */

        @keyframes trustedMoveLeft {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        /* =========================================================
           SOFT LEFT FADE
           
           No border.
           No hard clipping line.
           ========================================================= */

        .trusted-fade-left {
          position: absolute;

          top: 0;
          left: 0;

          z-index: 10;

          width: 105px;
          height: 40px;

          pointer-events: none;

          background: linear-gradient(
            to right,
            #ffffff 0%,
            rgba(255, 255, 255, 0.96) 18%,
            rgba(255, 255, 255, 0.72) 45%,
            rgba(255, 255, 255, 0.35) 70%,
            rgba(255, 255, 255, 0) 100%
          );
        }

        /* =========================================================
           SOFT RIGHT FADE
           
           No border.
           No hard clipping line.
           ========================================================= */

        .trusted-fade-right {
          position: absolute;

          top: 0;
          right: 0;

          z-index: 10;

          width: 105px;
          height: 40px;

          pointer-events: none;

          background: linear-gradient(
            to left,
            #ffffff 0%,
            rgba(255, 255, 255, 0.96) 18%,
            rgba(255, 255, 255, 0.72) 45%,
            rgba(255, 255, 255, 0.35) 70%,
            rgba(255, 255, 255, 0) 100%
          );
        }

        /* =========================================================
           PERMANENT MARQUEE
           
           No hover pause.
           ========================================================= */

        .trusted-marquee:hover .trusted-track {
          animation-play-state: running;
        }

        /* =========================================================
           RESPONSIVE
           ========================================================= */

        @media (max-width: 900px) {
          .trusted-marquee {
            width: calc(100% - 32px);
          }
        }

        @media (max-width: 700px) {
          .trusted-title {
            font-size: 12px;
          }

          .trusted-marquee {
            width: calc(100% - 32px);
            height: 40px;
          }

          .trusted-logo {
            width: 110px;
            flex-basis: 110px;
            margin-right: 24px;
          }

          .trusted-logo img {
            max-width: 100px;
            max-height: 22px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .trusted-track {
            animation: trustedMoveLeft 18s linear infinite;
          }
        }
      `}),(0,A.jsxs)(`section`,{className:`trusted-section`,children:[(0,A.jsx)(`div`,{className:`trusted-title`,children:`Trusted and used by`}),(0,A.jsxs)(`div`,{className:`trusted-marquee`,children:[(0,A.jsxs)(`div`,{className:`trusted-track`,children:[e.map(e=>(0,A.jsx)(`div`,{className:`trusted-logo`,children:(0,A.jsx)(`img`,{src:e.src,alt:e.alt,loading:`lazy`,decoding:`async`})},`first-${e.src}`)),e.map(e=>(0,A.jsx)(`div`,{className:`trusted-logo`,"aria-hidden":`true`,children:(0,A.jsx)(`img`,{src:e.src,alt:``,loading:`lazy`,decoding:`async`})},`second-${e.src}`))]}),(0,A.jsx)(`div`,{className:`trusted-fade-left`}),(0,A.jsx)(`div`,{className:`trusted-fade-right`})]})]})]})}var nr=[{name:`Starter`,price:`₹199`,features:[`Full CRM and invoicing`,`Unlimited invoices`,`1 pipeline`,`24x7 Support`,`Tasks and follow-ups`,`GST-ready invoicing`]},{name:`Growth`,price:`₹399`,features:[`Full CRM and invoicing`,`Unlimited invoices`,`Multiple pipelines`,`24x7 Support`,`Advanced deal tracking`,`Team collaboration`]},{name:`Business`,price:`₹599`,features:[`Full CRM and invoicing`,`Unlimited invoices`,`Multiple pipelines`,`24x7 Support`,`Advanced reporting`,`Priority support`]}],rr=`https://www.figma.com/api/mcp/asset/dded33c0-9508-44ef-97d2-c45407d62b29.svg`;function ir({plan:e}){return(0,A.jsxs)(`div`,{className:`\r
        group\r
        relative\r
        flex\r
        w-full\r
        flex-col\r
        rounded-[20px]\r
        border\r
        border-[rgba(0,0,0,0.12)]\r
        bg-white\r
        p-3\r
        pb-12\r
        transition-all\r
        duration-300\r
        hover:-translate-y-1\r
        hover:border-[#0085ff]\r
        hover:shadow-[0_15px_40px_rgba(0,133,255,0.10)]\r
      `,children:[(0,A.jsxs)(`div`,{className:`\r
          rounded-xl\r
          bg-[#fafafa]\r
          p-5\r
          transition-all\r
          duration-300\r
          group-hover:bg-[#f8fbff]\r
        `,children:[(0,A.jsx)(`h3`,{className:`\r
            text-[20px]\r
            font-semibold\r
            text-[#1e1e1e]\r
          `,children:e.name}),(0,A.jsxs)(`div`,{className:`mt-4 flex items-end gap-1.5`,children:[(0,A.jsx)(`span`,{className:`\r
              text-[44px]\r
              font-medium\r
              leading-[1.2]\r
              tracking-[-0.72px]\r
              text-[#1e1e1e]\r
            `,children:e.price}),(0,A.jsx)(`span`,{className:`\r
              mb-1\r
              text-[16px]\r
              text-[#252525]\r
            `,children:`/User/Month`})]}),(0,A.jsx)(`button`,{type:`button`,className:`\r
            mt-4\r
            flex\r
            h-10\r
            w-full\r
            items-center\r
            justify-center\r
            rounded-lg\r
            bg-[#0085ff]\r
            text-[14px]\r
            font-semibold\r
            text-white\r
            transition-all\r
            duration-300\r
            hover:-translate-y-[1px]\r
            hover:bg-[#087ce8]\r
            hover:shadow-[0_7px_18px_rgba(0,133,255,0.2)]\r
          `,children:`Get Started`})]}),(0,A.jsx)(`div`,{className:`flex flex-col gap-4 px-5 pt-8`,children:e.features.map(e=>(0,A.jsxs)(`div`,{className:`flex items-center gap-2.5`,children:[(0,A.jsx)(`img`,{src:rr,alt:``,className:`h-6 w-6 shrink-0`}),(0,A.jsx)(`span`,{className:`\r
                text-[16px]\r
                font-medium\r
                text-[#252525]\r
              `,children:e})]},e))})]})}function ar(){let[e,t]=(0,x.useState)(`Monthly`);return(0,A.jsxs)(`section`,{id:`pricing`,className:`\r
        relative\r
        overflow-hidden\r
        bg-gradient-to-b\r
        from-white\r
        via-[#f7fbff]\r
        to-white\r
        px-6\r
        py-24\r
      `,children:[(0,A.jsx)(`div`,{className:`\r
          pointer-events-none\r
          absolute\r
          left-[5%]\r
          top-[25%]\r
          h-[420px]\r
          w-[420px]\r
          rounded-full\r
          bg-[#0085ff]/10\r
          blur-[100px]\r
        `}),(0,A.jsx)(`div`,{className:`\r
          pointer-events-none\r
          absolute\r
          bottom-[10%]\r
          right-[5%]\r
          h-[320px]\r
          w-[320px]\r
          rounded-full\r
          bg-[#0085ff]/10\r
          blur-[100px]\r
        `}),(0,A.jsxs)(`div`,{className:`\r
          relative\r
          mx-auto\r
          flex\r
          max-w-[1180px]\r
          flex-col\r
          items-center\r
        `,children:[(0,A.jsxs)(`div`,{className:`text-center`,children:[(0,A.jsx)(`h2`,{className:`\r
              mx-auto\r
              max-w-[550px]\r
              text-[32px]\r
              font-medium\r
              leading-[1.13]\r
              tracking-[-1.08px]\r
              text-[#2b2c30]\r
              md:text-[35px]\r
            `,children:`One price for CRM and invoicing together.`}),(0,A.jsx)(`p`,{className:`\r
              mt-3\r
              text-[15px]\r
              leading-6\r
              text-[#707173]\r
            `,children:`Per user, per month, billed yearly. Plus 18% GST. No setup fee, no lock-in.`})]}),(0,A.jsx)(`div`,{className:`\r
            mt-10\r
            flex\r
            items-center\r
            gap-1.5\r
            rounded-[10px]\r
            bg-white\r
            p-1.5\r
            shadow-[0_3px_4px_-1.5px_rgba(0,0,0,0.14),0_0_0_1px_rgba(0,0,0,0.06)]\r
          `,children:[`Monthly`,`Yearly`].map(n=>(0,A.jsx)(`button`,{type:`button`,onClick:()=>t(n),className:`
                rounded-lg
                px-3.5
                py-2
                text-[14px]
                transition-all
                duration-300
                ${e===n?`bg-[#0085ff] font-semibold text-white`:`font-medium text-[#1e1e1e] hover:bg-[#f5f5f5]`}
              `,children:n},n))}),(0,A.jsx)(`div`,{className:`\r
            mt-10\r
            grid\r
            w-full\r
            grid-cols-1\r
            gap-6\r
            md:grid-cols-3\r
          `,children:nr.map(e=>(0,A.jsx)(ir,{plan:e},e.name))}),(0,A.jsx)(`p`,{className:`\r
            mt-10\r
            text-center\r
            text-[15px]\r
            leading-6\r
            text-[#707173]\r
          `,children:`Every plan starts with a 7-day free trial at full limits. No credit card needed.`})]})]})}var or=`https://res.cloudinary.com/tpxo8m6a/image/upload/v1787977676/Dashboard_IMG.png`,sr=`https://res.cloudinary.com/tpxo8m6a/image/upload/v1787762725/e1b401cb4e4c9b406541ebaf104107c3180075c3.png`,cr=``,lr=``,ur=``,dr=``,fr=``,pr=``,mr=``,hr=``,gr=``,_r=sr;function vr(){return(0,A.jsxs)(`section`,{className:`section7`,style:{position:`relative`,width:`100%`,height:`2121px`,overflow:`hidden`,background:`#000000`,color:`#FFFFFF`,fontFamily:`Inter, Arial, Helvetica, sans-serif`},children:[(0,A.jsxs)(`div`,{style:{position:`relative`,width:`1440px`,height:`2121px`,margin:`0 auto`},children:[(0,A.jsxs)(`div`,{style:{position:`absolute`,left:`108px`,top:`126px`,width:`620px`},children:[(0,A.jsx)(`h2`,{style:{margin:0,color:`#FFFFFF`,fontSize:`34px`,lineHeight:`40px`,fontWeight:400,letterSpacing:`-1.2px`},children:`One Flow from Enquiry to Paid`}),(0,A.jsx)(`p`,{style:{margin:`10px 0 0`,width:`520px`,color:`#8E8E8E`,fontSize:`14px`,lineHeight:`18px`,fontWeight:400},children:`Each step carries the last one forward. Nothing is retyped, and nothing falls through the gap between two apps.`})]}),(0,A.jsx)(`button`,{type:`button`,style:{position:`absolute`,left:`1111px`,top:`180.13px`,width:`221px`,height:`52px`,border:`none`,borderRadius:`26px`,background:`#0085FF`,color:`#FFFFFF`,fontFamily:`Inter, Arial, Helvetica, sans-serif`,fontSize:`13px`,lineHeight:`16px`,fontWeight:400,cursor:`pointer`},children:`CTA BUTTON HERE`}),(0,A.jsxs)(`div`,{style:{position:`absolute`,left:`108px`,top:`285.13px`,width:`392px`,height:`512px`,borderRadius:`16px`,overflow:`hidden`,background:`#3A3A3A`},children:[dr,(0,A.jsxs)(`div`,{style:{position:`absolute`,left:`16px`,right:`16px`,bottom:`28px`},children:[(0,A.jsx)(`h3`,{style:{margin:0,color:`#FFFFFF`,fontSize:`16px`,lineHeight:`20px`,fontWeight:600},children:`Bring your data across`}),(0,A.jsx)(`p`,{style:{margin:`5px 0 0`,color:`#D0D0D0`,fontSize:`11px`,lineHeight:`15px`,fontWeight:400},children:`Send us your client list from Excel or Tally, and our team helps you import it properly.`})]})]}),(0,A.jsxs)(`div`,{style:{position:`absolute`,left:`524px`,top:`285.13px`,width:`392px`,height:`512px`,borderRadius:`16px`,overflow:`hidden`,background:`#3A3A3A`},children:[fr,(0,A.jsxs)(`div`,{style:{position:`absolute`,left:`16px`,right:`16px`,bottom:`28px`},children:[(0,A.jsx)(`h3`,{style:{margin:0,color:`#FFFFFF`,fontSize:`16px`,lineHeight:`20px`,fontWeight:600},children:`Set up your pipeline`}),(0,A.jsx)(`p`,{style:{margin:`5px 0 0`,color:`#D0D0D0`,fontSize:`11px`,lineHeight:`15px`,fontWeight:400},children:`Use the stages your business actually works in, and add your team when you're ready.`})]})]}),(0,A.jsxs)(`div`,{style:{position:`absolute`,left:`940px`,top:`285.13px`,width:`392px`,height:`512px`,borderRadius:`16px`,overflow:`hidden`,background:`#3A3A3A`},children:[pr,(0,A.jsxs)(`div`,{style:{position:`absolute`,left:`16px`,right:`16px`,bottom:`28px`},children:[(0,A.jsx)(`h3`,{style:{margin:0,color:`#FFFFFF`,fontSize:`16px`,lineHeight:`20px`,fontWeight:600},children:`Start winning and billing`}),(0,A.jsx)(`p`,{style:{margin:`5px 0 0`,color:`#D0D0D0`,fontSize:`11px`,lineHeight:`15px`,fontWeight:400},children:`Chase leads, send GST invoices, and watch the payments land in one place.`})]})]}),(0,A.jsxs)(`div`,{style:{position:`absolute`,left:`131px`,top:`962px`,width:`760px`},children:[(0,A.jsx)(`div`,{style:{color:`#0085FF`,fontSize:`12px`,lineHeight:`16px`,fontWeight:500},children:`Real Businesses. Real Results.`}),(0,A.jsxs)(`h2`,{style:{margin:`20px 0 0`,width:`500px`,color:`#FFFFFF`,fontSize:`34px`,lineHeight:`39px`,fontWeight:400,letterSpacing:`-1.4px`},children:[`Datacircles Replaced`,(0,A.jsx)(`br`,{}),`3 Tools for Us`]}),(0,A.jsx)(`p`,{style:{margin:`17px 0 0`,width:`610px`,color:`#858585`,fontSize:`14px`,lineHeight:`19px`,fontWeight:400},children:`Founders, accountants, and agency owners trust DataCircles to stay on top of sales and money without the stress of complex software.`})]}),(0,A.jsx)(`div`,{style:{position:`absolute`,left:`-1102px`,top:`1249.13px`,width:`1177.33px`,height:`685px`,borderRadius:`8px`,overflow:`hidden`,background:`#111216`,opacity:.72},children:mr}),(0,A.jsxs)(`div`,{style:{position:`absolute`,left:`131.333px`,top:`1249.13px`,width:`1177.33px`,height:`685px`,borderRadius:`8px`,overflow:`hidden`,background:`#111216`},children:[hr,(0,A.jsxs)(`div`,{style:{position:`absolute`,left:`32px`,right:`32px`,bottom:`29px`,pointerEvents:`none`},children:[(0,A.jsx)(`div`,{style:{color:`#FFFFFF`,fontSize:`16px`,lineHeight:`20px`,fontWeight:600},children:`Pradhyumn Dhondi, Creative Director`}),(0,A.jsx)(`p`,{style:{margin:`5px 0 0`,width:`560px`,color:`rgba(255,255,255,0.72)`,fontSize:`11px`,lineHeight:`15px`,fontWeight:400},children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`})]})]}),(0,A.jsx)(`div`,{style:{position:`absolute`,left:`1364.67px`,top:`1249.13px`,width:`1177.33px`,height:`685px`,borderRadius:`8px`,overflow:`hidden`,background:`#111216`,opacity:.72},children:gr}),(0,A.jsx)(`button`,{type:`button`,"aria-label":`Previous story`,style:{position:`absolute`,left:`1218px`,top:`1990.13px`,width:`38px`,height:`38px`,padding:0,border:`none`,borderRadius:`50%`,background:`#111216`,color:`#F4F3EA`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:`20px`,lineHeight:1,cursor:`pointer`},children:`←`}),(0,A.jsx)(`button`,{type:`button`,"aria-label":`Next story`,style:{position:`absolute`,left:`1272px`,top:`1990.13px`,width:`38px`,height:`38px`,padding:0,border:`none`,borderRadius:`50%`,background:`#111216`,color:`#F4F3EA`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:`20px`,lineHeight:1,cursor:`pointer`},children:`→`})]}),(0,A.jsx)(`style`,{children:`
        @media (max-width: 1439px) {
          .section7 {
            height: calc(2121px * (100vw / 1440));
            min-height: 0;
          }

          .section7 > div {
            transform-origin: top center;
            transform: scale(
              calc(100vw / 1440)
            );
          }
        }

        @media (max-width: 700px) {
          .section7 {
            height: calc(2121px * (100vw / 1440));
          }
        }
      `})]})}function yr(){return(0,A.jsxs)(`main`,{className:`min-h-screen w-full bg-white font-inter`,children:[(0,A.jsx)(`style`,{children:`
          /* Responsive layout only — existing content, copy, images and desktop
             sizing are preserved. These rules only take effect below desktop widths. */

          @media (max-width: 1200px) {
            main > section:nth-of-type(3) {
              max-width: calc(100% - 32px) !important;
              padding-left: 24px !important;
              padding-right: 24px !important;
            }

            main > section:nth-of-type(4) {
              padding-left: 40px !important;
              padding-right: 40px !important;
            }

            main > section:nth-of-type(7) {
              grid-template-columns: minmax(0, 520px) minmax(0, 1fr) !important;
              column-gap: 48px !important;
              padding-left: 24px !important;
              padding-right: 24px !important;
            }
          }

          @media (max-width: 1024px) {
            /* Hero */
            main > section:nth-of-type(1) {
              aspect-ratio: auto !important;
              min-height: 720px;
            }

            main > section:nth-of-type(1) > div:nth-of-type(2) {
              width: 48% !important;
            }

            main > section:nth-of-type(1) > div:nth-of-type(3) {
              left: 43% !important;
              width: 68% !important;
            }

            /* Trusted logos */
            main > section:nth-of-type(2) {
              max-width: calc(100% - 32px) !important;
            }

            main > section:nth-of-type(2) > div:nth-of-type(2) > div {
              width: min(820px, 100%) !important;
            }

            /* Business value */
            main > section:nth-of-type(3) > div:nth-of-type(2) {
              flex-wrap: wrap !important;
              gap: 24px !important;
              justify-content: center !important;
            }

            main > section:nth-of-type(3) > div:nth-of-type(2) > div {
              width: min(300px, 30%) !important;
            }

            /* One system section */
            main > section:nth-of-type(4) {
              flex-direction: column !important;
              gap: 48px !important;
              padding-left: 40px !important;
              padding-right: 40px !important;
            }

            main > section:nth-of-type(4) > div:first-child {
              width: 100% !important;
              height: auto !important;
              max-height: 720px;
            }

            main > section:nth-of-type(4) > div:first-child img {
              width: 100% !important;
              height: auto !important;
              object-fit: contain !important;
            }

            main > section:nth-of-type(4) > div:last-child {
              width: 100% !important;
            }

            /* Section 4 — flow */
            main > section:nth-of-type(5) > div {
              max-width: 100% !important;
              padding-left: 24px;
              padding-right: 24px;
              box-sizing: border-box;
            }

            main > section:nth-of-type(5) .grid-cols-3 {
              grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
            }

            main > section:nth-of-type(5) .grid-cols-2 {
              width: 66.6667% !important;
            }

            /* Section 5 — company/dashboard */
            main > section:nth-of-type(6) {
              max-width: calc(100% - 48px) !important;
            }

            main > section:nth-of-type(6) > div {
              height: auto !important;
              min-height: 660px;
              flex-direction: column !important;
            }

            main > section:nth-of-type(6) > div > div:first-child {
              width: 100% !important;
              height: auto !important;
              min-height: 360px;
              padding: 40px !important;
            }

            main > section:nth-of-type(6) > div > div:first-child h2,
            main > section:nth-of-type(6) > div > div:first-child p {
              width: 100% !important;
              max-width: 520px;
            }

            main > section:nth-of-type(6) > div > div:last-child {
              width: 100% !important;
              height: 520px !important;
              flex: none !important;
            }

            main > section:nth-of-type(6) > div > div:last-child img {
              width: min(600px, 100%) !important;
              max-width: 600px !important;
            }

            /* Section 6 */
            main > section:nth-of-type(7) {
              display: block !important;
              width: calc(100% - 48px) !important;
              max-width: 1216px !important;
              padding-left: 0 !important;
              padding-right: 0 !important;
              box-sizing: border-box !important;
            }

            main > section:nth-of-type(7) > div:first-child {
              width: 100% !important;
            }

            main > section:nth-of-type(7) > div:first-child > div {
              width: 100% !important;
            }

            main > section:nth-of-type(7) > div:first-child > div:nth-child(3),
            main > section:nth-of-type(7) > div:first-child > div:nth-child(3) > div {
              width: 100% !important;
            }

            main > section:nth-of-type(7) > div:last-child {
              width: 100% !important;
              margin-top: 48px;
            }
          }

          @media (max-width: 768px) {
            /* Hero */
            main > section:nth-of-type(1) {
              width: calc(100% - 24px) !important;
              min-height: 680px;
              border-radius: 18px !important;
            }

            main > section:nth-of-type(1) > div:nth-of-type(2) {
              left: 6% !important;
              top: 24% !important;
              width: 88% !important;
            }

            main > section:nth-of-type(1) > div:nth-of-type(3) {
              left: 6% !important;
              top: 54% !important;
              width: 90% !important;
            }

            /* Business value */
            main > section:nth-of-type(3) {
              padding: 32px 16px !important;
            }

            main > section:nth-of-type(3) > div:nth-of-type(2) {
              flex-direction: column !important;
            }

            main > section:nth-of-type(3) > div:nth-of-type(2) > div {
              width: 100% !important;
            }

            /* One system */
            main > section:nth-of-type(4) {
              padding: 40px 20px !important;
            }

            main > section:nth-of-type(4) > div:last-child h2 {
              font-size: 28px !important;
            }

            /* Section 4 — flow */
            main > section:nth-of-type(5) > div {
              padding-left: 16px;
              padding-right: 16px;
            }

            main > section:nth-of-type(5) > div > div:first-child {
              width: 100% !important;
            }

            main > section:nth-of-type(5) .grid-cols-3 {
              grid-template-columns: 1fr !important;
              gap: 28px !important;
            }

            main > section:nth-of-type(5) .grid-cols-2 {
              width: 100% !important;
              grid-template-columns: 1fr !important;
              gap: 28px !important;
              margin-top: 28px !important;
            }

            main > section:nth-of-type(5) .relative.flex.min-h-\\[175px\\] {
              min-height: auto !important;
            }

            /* Section 5 */
            main > section:nth-of-type(6) {
              max-width: calc(100% - 24px) !important;
            }

            main > section:nth-of-type(6) > div > div:first-child {
              padding: 32px 24px !important;
              min-height: 320px;
            }

            main > section:nth-of-type(6) > div > div:last-child {
              height: 420px !important;
            }

            /* Section 6 */
            main > section:nth-of-type(7) {
              width: calc(100% - 32px) !important;
              margin-top: 40px !important;
            }

            main > section:nth-of-type(7) > div:first-child > div:first-child {
              height: auto !important;
              white-space: normal !important;
              font-size: 30px !important;
              line-height: 34px !important;
              letter-spacing: -0.8px !important;
            }

            main > section:nth-of-type(7) > div:first-child > div:nth-child(2) {
              width: 100% !important;
              font-size: 15px !important;
              line-height: 20px !important;
            }

            main > section:nth-of-type(7) > div:first-child > div:nth-child(3) > div {
              height: 56px !important;
              font-size: 15px !important;
            }

            main > section:nth-of-type(7) > div:first-child > button {
              min-width: 174px !important;
            }
          }

          @media (max-width: 480px) {
            /* Keep all existing content; only reduce layout dimensions for narrow screens. */
            main > section:nth-of-type(1) {
              min-height: 620px;
            }

            main > section:nth-of-type(1) > div:nth-of-type(2) h1 {
              font-size: 28px !important;
            }

            main > section:nth-of-type(4) {
              gap: 32px !important;
            }

            main > section:nth-of-type(6) > div > div:first-child {
              padding: 28px 20px !important;
            }

            main > section:nth-of-type(6) > div > div:last-child {
              height: 320px !important;
            }

            main > section:nth-of-type(7) > div:first-child > div:first-child {
              font-size: 27px !important;
              line-height: 32px !important;
            }

            main > section:nth-of-type(7) > div:first-child > div:nth-child(3) > div {
              height: 52px !important;
            }

            main > section:nth-of-type(7) > div:first-child > button {
              width: auto !important;
              max-width: 100% !important;
              font-size: 15px !important;
            }
          }
        `}),(0,A.jsxs)(`section`,{className:`\r
          relative\r
          mx-auto\r
          aspect-[1392/890]\r
          w-[calc(100%-32px)]\r
          max-w-[1392px]\r
          overflow-hidden\r
          rounded-[24px]\r
          bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FBFF_23%,#BADEFF_70%,#BADEFF_100%)]\r
        `,children:[(0,A.jsx)(`div`,{className:`\r
            absolute\r
            left-1/2\r
            top-[0.7%]\r
            z-50\r
            -translate-x-1/2\r
            scale-[0.5]\r
            min-[1000px]:scale-[0.75]\r
            min-[1400px]:scale-100\r
          `,children:(0,A.jsx)(er,{})}),(0,A.jsxs)(`div`,{className:`\r
            absolute\r
            left-[6.75%]\r
            top-[29.9%]\r
            z-30\r
            w-[45.83%]\r
          `,children:[(0,A.jsxs)(`div`,{className:`\r
              flex\r
              h-[24.8px]\r
              w-fit\r
              items-center\r
              gap-[5px]\r
              rounded-[999px]\r
              bg-[#EBE6E0]/20\r
              px-[10px]\r
              py-[4px]\r
            `,children:[(0,A.jsx)(`span`,{className:`\r
                h-[5px]\r
                w-[5px]\r
                shrink-0\r
                rounded-full\r
                bg-[#1683F7]\r
              `}),(0,A.jsx)(`span`,{className:`\r
                whitespace-nowrap\r
                text-[9px]\r
                font-normal\r
                leading-[17px]\r
                text-[#444444]\r
              `,children:`CRM + Invoicing Infrastructure`})]}),(0,A.jsxs)(`h1`,{className:`\r
              mt-[18px]\r
              w-full\r
              text-[clamp(28px,3.45vw,48px)]\r
              font-semibold\r
              leading-[1.08]\r
              tracking-[-0.045em]\r
              text-[#171717]\r
            `,children:[`Win customers and get paid,`,(0,A.jsx)(`br`,{}),`all in once place`]}),(0,A.jsx)(`p`,{className:`\r
              mt-[15px]\r
              w-full\r
              max-w-[638px]\r
              text-[clamp(9px,0.95vw,13.2px)]\r
              font-normal\r
              leading-[1.48]\r
              text-[#635557]\r
            `,children:`CRM and GST invoicing in a single app, built for Indian businesses. The lead you chase today becomes the invoice you send tomorrow, without switching between tools.`}),(0,A.jsxs)(`div`,{className:`\r
              mt-[16px]\r
              flex\r
              h-[49px]\r
              w-[307px]\r
              items-center\r
              gap-[8px]\r
              origin-left\r
              scale-[0.7]\r
              min-[900px]:scale-[0.85]\r
              min-[1200px]:scale-100\r
            `,children:[(0,A.jsx)(`a`,{href:`/signup`,className:`\r
                flex\r
                h-[49px]\r
                w-[144px]\r
                items-center\r
                justify-center\r
                rounded-[999px]\r
                bg-[#1683F7]\r
                text-[13px]\r
                font-medium\r
                leading-none\r
                text-white\r
                transition-colors\r
                hover:bg-[#0878E8]\r
              `,children:`Start Free`}),(0,A.jsx)(`a`,{href:`/demo`,className:`\r
                flex\r
                h-[49px]\r
                w-[155px]\r
                items-center\r
                justify-center\r
                rounded-[999px]\r
                bg-white\r
                text-[13px]\r
                font-medium\r
                leading-none\r
                text-[#171717]\r
                shadow-[0_1px_5px_rgba(0,0,0,0.04)]\r
                transition-shadow\r
                hover:shadow-[0_4px_15px_rgba(0,0,0,0.08)]\r
              `,children:`Book a Demo`})]}),(0,A.jsx)(`p`,{className:`\r
              mt-[1px]\r
              text-[8px]\r
              font-normal\r
              leading-[12px]\r
              text-[#635557]\r
              min-[900px]:mt-[9px]\r
            `,children:`7-day free trial · No card required · GST-ready · Works on any device`})]}),(0,A.jsx)(`div`,{className:`\r
            absolute\r
            left-[48.7%]\r
            top-[8.1%]\r
            z-20\r
            w-[60%]\r
            overflow-hidden\r
            rounded-[24px]\r
            border\r
            border-white\r
            bg-white\r
            shadow-[0_12px_40px_rgba(80,140,210,0.10)]\r
          `,children:(0,A.jsx)(`img`,{src:or,alt:`DataCircles dashboard`,className:`\r
              block\r
              w-full\r
              rounded-[23px]\r
              object-contain\r
            `,fetchPriority:`high`,decoding:`async`})})]}),(0,A.jsx)(tr,{}),(0,A.jsxs)(`section`,{className:`\r
    mx-auto\r
    mt-[32px]\r
    w-[calc(100%-32px)]\r
    max-w-[1280px]\r
    px-[30px]\r
    py-[50px]\r
  `,children:[(0,A.jsxs)(`div`,{className:`flex w-full flex-col items-center`,children:[(0,A.jsxs)(`div`,{className:`\r
        flex\r
        h-[24px]\r
        w-[118px]\r
        items-center\r
        justify-center\r
        gap-[5px]\r
        rounded-[999px]\r
        bg-[#F7F5F3]\r
        px-[10px]\r
        py-[4px]\r
      `,children:[(0,A.jsx)(`span`,{className:`\r
          h-[5px]\r
          w-[5px]\r
          rounded-full\r
          bg-[#1683F7]\r
        `}),(0,A.jsx)(`span`,{className:`\r
          whitespace-nowrap\r
          text-[8px]\r
          font-normal\r
          leading-[16px]\r
          text-[#666666]\r
        `,children:`Built for Growth`})]}),(0,A.jsx)(`h2`,{className:`\r
        mt-[16px]\r
        w-full\r
        text-center\r
        text-[clamp(24px,2.43vw,33.8px)]\r
        font-medium\r
        leading-[1.17]\r
        tracking-[-1.08px]\r
        text-[#231014]\r
      `,children:`One system. Every moving part of your business.`})]}),(0,A.jsxs)(`div`,{className:`\r
      mt-[20px]\r
      flex\r
      w-full\r
      items-center\r
      justify-between\r
    `,children:[(0,A.jsxs)(`div`,{className:`\r
        flex\r
        h-[68px]\r
        w-[300px]\r
        flex-col\r
        items-center\r
        justify-center\r
      `,children:[(0,A.jsx)(`div`,{className:`\r
          text-center\r
          text-[clamp(32px,4vw,56px)]\r
          font-medium\r
          leading-[1.2]\r
          tracking-[-0.56px]\r
          text-black\r
        `,children:`1× Platform`}),(0,A.jsx)(`span`,{className:`\r
          mt-[-2px]\r
          text-center\r
          text-[7px]\r
          font-normal\r
          leading-[10px]\r
          text-[#666666]\r
        `,children:`CRM + Billing`})]}),(0,A.jsxs)(`div`,{className:`\r
        flex\r
        h-[68px]\r
        w-[300px]\r
        flex-col\r
        items-center\r
        justify-center\r
      `,children:[(0,A.jsx)(`div`,{className:`\r
          text-center\r
          text-[clamp(32px,4vw,56px)]\r
          font-medium\r
          leading-[1.2]\r
          tracking-[-0.56px]\r
          text-black\r
        `,children:`100%`}),(0,A.jsx)(`span`,{className:`\r
          mt-[-2px]\r
          text-center\r
          text-[7px]\r
          font-normal\r
          leading-[10px]\r
          text-[#666666]\r
        `,children:`GST Ready`})]}),(0,A.jsxs)(`div`,{className:`\r
        flex\r
        h-[68px]\r
        w-[300px]\r
        flex-col\r
        items-center\r
        justify-center\r
      `,children:[(0,A.jsx)(`div`,{className:`\r
          whitespace-nowrap\r
          text-center\r
          text-[clamp(32px,4vw,56px)]\r
          font-medium\r
          leading-[1.2]\r
          tracking-[-0.56px]\r
          text-black\r
        `,children:`₹0 Upfront`}),(0,A.jsx)(`span`,{className:`\r
          mt-[-2px]\r
          text-center\r
          text-[7px]\r
          font-normal\r
          leading-[10px]\r
          text-[#666666]\r
        `,children:`7-Day Free Trial`})]})]}),(0,A.jsx)(`div`,{className:`mt-[70px]`})]}),(0,A.jsxs)(`section`,{className:`\r
    mx-auto\r
    flex\r
    w-full\r
    max-w-[1440px]\r
    flex-row\r
    items-start\r
    gap-[80px]\r
    bg-white\r
    px-[112px]\r
    py-[80px]\r
  `,children:[(0,A.jsx)(`div`,{className:`\r
      h-[720px]\r
      w-[600px]\r
      shrink-0\r
      overflow-hidden\r
      rounded-[16px]\r
      bg-[#F7F7F7]\r
    `,children:(0,A.jsx)(`img`,{src:`https://res.cloudinary.com/tpxo8m6a/image/upload/v1787752478/d6f257d56522395c4acc1a366f2bc996ca30f77b.png`,alt:`DataCircles platform dashboard`,width:`600`,height:`720`,loading:`eager`,fetchPriority:`high`,decoding:`async`,className:`\r
        block\r
        h-full\r
        w-full\r
        rounded-[16px]\r
        object-cover\r
      `,onError:e=>{console.error(`Cloudinary image failed to load:`,e.currentTarget.src)}})}),(0,A.jsxs)(`div`,{className:`\r
      flex\r
      w-[536px]\r
      shrink-0\r
      flex-col\r
      gap-[32px]\r
    `,children:[(0,A.jsxs)(`div`,{className:`\r
        flex\r
        w-full\r
        flex-col\r
        gap-[14px]\r
      `,children:[(0,A.jsx)(`h2`,{className:`\r
          m-0\r
          w-full\r
          text-[32px]\r
          font-medium\r
          leading-[110%]\r
          tracking-[-2px]\r
          text-[#2B2C30]\r
        `,children:`Your business shouldn't live in two systems that never talk.`}),(0,A.jsx)(`p`,{className:`\r
          m-0\r
          w-full\r
          text-[16px]\r
          font-normal\r
          leading-[120%]\r
          tracking-[0]\r
          text-[#666666]\r
        `,children:`Leads in one app, invoices in another, and you in the middle copying details from one to the other. Every win deal means retyping what you already typed once, and answering "has this client paid?" means opening two tabs.`})]}),(0,A.jsxs)(`div`,{className:`flex w-full flex-col`,children:[(0,A.jsx)(`div`,{className:`\r
          flex\r
          min-h-[40px]\r
          w-full\r
          items-center\r
          border-b\r
          border-[#E0E0E1]\r
        `,children:(0,A.jsx)(`p`,{className:`\r
            m-0\r
            w-full\r
            py-[10px]\r
            text-[16px]\r
            font-normal\r
            leading-[120%]\r
            tracking-[0]\r
            text-[#2B2C30]\r
          `,children:`•\xA0\xA0The same client details entered twice, in two different tools`})}),(0,A.jsx)(`div`,{className:`\r
          flex\r
          min-h-[40px]\r
          w-full\r
          items-center\r
          border-b\r
          border-[#E0E0E1]\r
        `,children:(0,A.jsx)(`p`,{className:`\r
            m-0\r
            w-full\r
            py-[10px]\r
            text-[16px]\r
            font-normal\r
            leading-[120%]\r
            tracking-[0]\r
            text-[#2B2C30]\r
          `,children:`•\xA0\xA0Leads going cold because follow-ups live in someone's memory`})}),(0,A.jsx)(`div`,{className:`\r
          flex\r
          min-h-[40px]\r
          w-full\r
          items-center\r
          border-b\r
          border-[#E0E0E1]\r
        `,children:(0,A.jsx)(`p`,{className:`\r
            m-0\r
            w-full\r
            py-[10px]\r
            text-[16px]\r
            font-normal\r
            leading-[120%]\r
            tracking-[0]\r
            text-[#2B2C30]\r
          `,children:`•\xA0\xA0No single view of who owes you what`})}),(0,A.jsx)(`div`,{className:`\r
          flex\r
          min-h-[40px]\r
          w-full\r
          items-center\r
          border-b\r
          border-[#E0E0E1]\r
        `,children:(0,A.jsx)(`p`,{className:`\r
            m-0\r
            w-full\r
            py-[10px]\r
            text-[16px]\r
            font-normal\r
            leading-[120%]\r
            tracking-[0]\r
            text-[#2B2C30]\r
          `,children:`•\xA0\xA0Two subscriptions, and still no full picture of a client`})})]}),(0,A.jsxs)(`button`,{type:`button`,className:`\r
        flex\r
        h-[40px]\r
        w-fit\r
        items-center\r
        justify-center\r
        gap-[8px]\r
        rounded-[999px]\r
        bg-[#1683F7]\r
        px-[16px]\r
        text-[12px]\r
        font-medium\r
        leading-[16px]\r
        text-white\r
        transition-opacity\r
        hover:opacity-90\r
      `,children:[`Start Your Project`,(0,A.jsx)(`span`,{className:`text-[14px] leading-none`,children:`→`})]})]})]}),(0,A.jsx)(`section`,{className:`w-full bg-white`,children:(0,A.jsxs)(`div`,{className:`mx-auto w-full max-w-[1216px] pt-[80px] pb-[80px]`,children:[(0,A.jsxs)(`div`,{className:`mx-auto flex w-[444px] flex-col items-center text-center`,children:[(0,A.jsx)(`h2`,{className:`m-0 text-[35.2px] font-medium leading-[39.6px] tracking-[-1.08px] text-[#2B2C30]`,children:`One Flow from Enquiry to Paid`}),(0,A.jsx)(`p`,{className:`m-0 mt-[4px] text-[16px] font-normal leading-[19.2px] text-[#707173]`,children:`Each step carries the last one forward. Nothing is retyped, and nothing falls through the gap between two apps.`})]}),(0,A.jsxs)(`div`,{className:`mx-auto mt-[32px] w-full max-w-[1216px]`,children:[(0,A.jsxs)(`div`,{className:`grid grid-cols-3 gap-x-[24px]`,children:[(0,A.jsxs)(`div`,{className:`relative flex min-h-[175px] flex-col items-center text-center`,children:[(0,A.jsx)(`div`,{className:`relative flex h-[64px] w-full items-center justify-center`,children:(0,A.jsx)(`div`,{className:`relative z-10 flex h-[64px] w-[64px] items-center justify-center rounded-full bg-[#0A5AFE] text-[20px] font-semibold text-white`,children:`1`})}),(0,A.jsx)(`div`,{className:`mt-[8px] text-[20px] font-semibold leading-[22px] text-[#2B2C30]`,children:`Enquiry`}),(0,A.jsx)(`p`,{className:`m-0 mt-[8px] w-[384px] max-w-full text-center text-[16px] font-normal leading-[19.2px] text-[#707173]`,children:`We understand your business goals, study your audience behavior, and analyze existing data to uncover real growth opportunities.`})]}),(0,A.jsxs)(`div`,{className:`relative flex min-h-[175px] flex-col items-center text-center`,children:[(0,A.jsx)(`div`,{className:`relative flex h-[64px] w-full items-center justify-center`,children:(0,A.jsx)(`div`,{className:`relative z-10 flex h-[64px] w-[64px] items-center justify-center rounded-full bg-[#0A5AFE] text-[20px] font-semibold text-white`,children:`2`})}),(0,A.jsx)(`div`,{className:`mt-[8px] text-[20px] font-semibold leading-[22px] text-[#2B2C30]`,children:`Follow-Up`}),(0,A.jsx)(`p`,{className:`m-0 mt-[8px] w-[384px] max-w-full text-center text-[16px] font-normal leading-[19.2px] text-[#707173]`,children:`We understand your business goals, study your audience behavior, and analyze existing data to uncover real growth opportunities.`})]}),(0,A.jsxs)(`div`,{className:`relative flex min-h-[175px] flex-col items-center text-center`,children:[(0,A.jsx)(`div`,{className:`relative flex h-[64px] w-full items-center justify-center`,children:(0,A.jsx)(`div`,{className:`relative z-10 flex h-[64px] w-[64px] items-center justify-center rounded-full bg-[#0A5AFE] text-[20px] font-semibold text-white`,children:`3`})}),(0,A.jsx)(`div`,{className:`mt-[8px] text-[20px] font-semibold leading-[22px] text-[#2B2C30]`,children:`Quote`}),(0,A.jsx)(`p`,{className:`m-0 mt-[8px] w-[384px] max-w-full text-center text-[16px] font-normal leading-[19.2px] text-[#707173]`,children:`We understand your business goals, study your audience behavior, and analyze existing data to uncover real growth opportunities.`})]})]}),(0,A.jsxs)(`div`,{className:`mx-auto mt-[40px] grid w-[816px] grid-cols-2 gap-x-[24px]`,children:[(0,A.jsxs)(`div`,{className:`relative flex min-h-[175px] flex-col items-center text-center`,children:[(0,A.jsx)(`div`,{className:`relative flex h-[64px] w-full items-center justify-center`,children:(0,A.jsx)(`div`,{className:`relative z-10 flex h-[64px] w-[64px] items-center justify-center rounded-full bg-[#0A5AFE] text-[20px] font-semibold text-white`,children:`4`})}),(0,A.jsx)(`div`,{className:`mt-[8px] text-[20px] font-semibold leading-[22px] text-[#2B2C30]`,children:`Invoice`}),(0,A.jsx)(`p`,{className:`m-0 mt-[8px] w-[384px] max-w-full text-center text-[16px] font-normal leading-[19.2px] text-[#707173]`,children:`We understand your business goals, study your audience behavior, and analyze existing data to uncover real growth opportunities.`})]}),(0,A.jsxs)(`div`,{className:`relative flex min-h-[175px] flex-col items-center text-center`,children:[(0,A.jsx)(`div`,{className:`relative flex h-[64px] w-full items-center justify-center`,children:(0,A.jsx)(`div`,{className:`relative z-10 flex h-[64px] w-[64px] items-center justify-center rounded-full bg-[#0A5AFE] text-[20px] font-semibold text-white`,children:`5`})}),(0,A.jsx)(`div`,{className:`mt-[8px] text-[20px] font-semibold leading-[22px] text-[#2B2C30]`,children:`Get Paid`}),(0,A.jsx)(`p`,{className:`m-0 mt-[8px] w-[384px] max-w-full text-center text-[16px] font-normal leading-[19.2px] text-[#707173]`,children:`We understand your business goals, study your audience behavior, and analyze existing data to uncover real growth opportunities.`})]})]})]})]})}),(0,A.jsx)(`section`,{className:`\r
    mx-auto\r
    w-full\r
    max-w-[1216px]\r
    overflow-hidden\r
    rounded-[8px]\r
    border\r
    border-[#C4C4C5]\r
    bg-white\r
  `,children:(0,A.jsxs)(`div`,{className:`\r
      flex\r
      h-[660.48px]\r
      w-full\r
    `,children:[(0,A.jsxs)(`div`,{className:`\r
        flex\r
        h-full\r
        w-[550px]\r
        shrink-0\r
        flex-col\r
        justify-between\r
        px-[50px]\r
        py-[50px]\r
      `,children:[(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`h2`,{className:`\r
            m-0\r
            w-[340px]\r
            text-[16px]\r
            font-medium\r
            leading-[120%]\r
            tracking-[0]\r
            text-[#231014]\r
          `,children:`Keep every company, relationship, and interaction organized in one place.`}),(0,A.jsx)(`p`,{className:`\r
            m-0\r
            mt-[12px]\r
            w-[340px]\r
            text-[11.4px]\r
            font-normal\r
            leading-[16.8px]\r
            tracking-[0]\r
            text-[#635557]\r
          `,children:`Create a complete business profile for every company you work with. Centralize contacts, deals, invoices, notes, tasks, meetings, and activity history so your team always has the full context before making the next move.`})]}),(0,A.jsxs)(`div`,{className:`\r
          w-[329px]\r
        `,children:[(0,A.jsx)(`p`,{className:`\r
            m-0\r
            w-[329px]\r
            text-[13.3px]\r
            font-normal\r
            leading-[19.6px]\r
            tracking-[0]\r
            text-[#231014]\r
          `,children:`“We wanted businesses to stop searching across five different places just to understand what’s happening with one customer. DataCircles brings that entire relationship together.”`}),(0,A.jsx)(`p`,{className:`\r
            m-0\r
            mt-[8px]\r
            text-[11px]\r
            font-normal\r
            leading-[16px]\r
            tracking-[0]\r
            text-[#635557]\r
          `,children:`— Yash Mishra, CEO & Founder`})]})]}),(0,A.jsx)(`div`,{className:`\r
        relative\r
        h-full\r
        flex-1\r
        overflow-hidden\r
        bg-[#F7F5F3]\r
      `,children:(0,A.jsx)(`img`,{src:sr,alt:`DataCircles dashboard`,loading:`lazy`,decoding:`async`,className:`\r
          absolute\r
          bottom-0\r
          left-0\r
          h-auto\r
          w-[600px]\r
          max-w-none\r
          object-contain\r
        `})})]})}),(0,A.jsxs)(`section`,{style:{width:`100%`,maxWidth:`1216px`,margin:`0 auto`,marginTop:`56px`,display:`grid`,gridTemplateColumns:`520px 1fr`,columnGap:`80px`,alignItems:`start`,boxSizing:`border-box`},children:[(0,A.jsxs)(`div`,{style:{width:`520px`,display:`flex`,flexDirection:`column`,alignItems:`flex-start`,boxSizing:`border-box`},children:[(0,A.jsx)(`div`,{style:{width:`520px`,height:`40px`,fontFamily:`Inter, sans-serif`,fontSize:`35.2px`,lineHeight:`39.6px`,fontWeight:500,letterSpacing:`-1.08px`,color:`#2B2C30`,whiteSpace:`nowrap`,boxSizing:`border-box`},children:`One Flow from Enquiry to Paid`}),(0,A.jsx)(`div`,{style:{width:`520px`,marginTop:`0px`,fontFamily:`Inter, sans-serif`,fontSize:`16px`,lineHeight:`19.2px`,fontWeight:400,letterSpacing:`0px`,color:`#707173`,boxSizing:`border-box`},children:`Each step carries the last one forward. Nothing is retyped, and nothing falls through the gap between two apps.`}),(0,A.jsxs)(`div`,{style:{width:`520px`,marginTop:`22px`,display:`flex`,flexDirection:`column`,boxSizing:`border-box`},children:[(0,A.jsxs)(`div`,{style:{width:`520px`,height:`60px`,display:`flex`,alignItems:`center`,justifyContent:`space-between`,borderBottom:`1px solid #E0E0E1`,boxSizing:`border-box`,fontFamily:`Inter, sans-serif`,fontSize:`16px`,lineHeight:`24px`,fontWeight:600,color:`#1E1E1E`},children:[(0,A.jsx)(`span`,{style:{opacity:.5},children:`CRM`}),(0,A.jsx)(`span`,{style:{fontSize:`22px`,lineHeight:`24px`,fontWeight:400,opacity:.5},children:`→`})]}),(0,A.jsxs)(`div`,{style:{width:`520px`,height:`60px`,display:`flex`,alignItems:`center`,justifyContent:`space-between`,borderBottom:`1px solid #E0E0E1`,boxSizing:`border-box`,fontFamily:`Inter, sans-serif`,fontSize:`16px`,lineHeight:`24px`,fontWeight:600,color:`#1E1E1E`},children:[(0,A.jsx)(`span`,{style:{opacity:.5},children:`Invoicing`}),(0,A.jsx)(`span`,{style:{fontSize:`22px`,lineHeight:`24px`,fontWeight:400,opacity:.5},children:`→`})]}),(0,A.jsxs)(`div`,{style:{width:`520px`,height:`60px`,display:`flex`,alignItems:`center`,justifyContent:`space-between`,borderBottom:`1px solid #E0E0E1`,boxSizing:`border-box`,fontFamily:`Inter, sans-serif`,fontSize:`16px`,lineHeight:`24px`,fontWeight:600,color:`#1E1E1E`},children:[(0,A.jsx)(`span`,{style:{opacity:.5},children:`Payments`}),(0,A.jsx)(`span`,{style:{fontSize:`22px`,lineHeight:`24px`,fontWeight:400,opacity:.5},children:`→`})]})]}),(0,A.jsxs)(`button`,{type:`button`,style:{marginTop:`20px`,height:`48px`,minWidth:`174px`,padding:`0 20px`,display:`inline-flex`,alignItems:`center`,justifyContent:`center`,gap:`10px`,border:`none`,borderRadius:`999px`,background:`#0A5AFE`,color:`#FFFFFF`,fontFamily:`Inter, sans-serif`,fontSize:`16px`,lineHeight:`24px`,fontWeight:600,cursor:`pointer`,boxSizing:`border-box`},children:[(0,A.jsx)(`span`,{children:`Start Your Project`}),(0,A.jsx)(`span`,{style:{fontSize:`20px`,lineHeight:`20px`,fontWeight:400},children:`→`})]})]}),(0,A.jsxs)(`section`,{className:`\r
    mx-auto\r
    w-full\r
    max-w-[523px]\r
    bg-white\r
    font-inter\r
  `,children:[(0,A.jsx)(`div`,{className:`\r
      h-[300px]\r
      w-full\r
      overflow-hidden\r
      rounded-[8px]\r
      bg-[#EAEAEA]\r
    `,children:cr}),(0,A.jsxs)(`div`,{className:`w-full pt-[21px]`,children:[(0,A.jsx)(`h2`,{className:`\r
        m-0\r
        text-[24px]\r
        font-semibold\r
        leading-[29px]\r
        tracking-[-0.6px]\r
        text-[#242424]\r
      `,children:`Never lose a lead again.`}),(0,A.jsx)(`p`,{className:`\r
        m-0\r
        mt-[12px]\r
        w-full\r
        text-[16px]\r
        font-normal\r
        leading-[24px]\r
        text-[#303030]\r
      `,children:`Every enquiry in one pipeline, every follow-up on time, and every client's full history in one record. Tasks, meetings and notes sit where they belong.`}),(0,A.jsxs)(`div`,{className:`\r
        mt-[18px]\r
        flex\r
        w-full\r
        flex-wrap\r
        gap-[8px]\r
      `,children:[(0,A.jsx)(`span`,{className:`\r
          rounded-full\r
          border\r
          border-[#75B9FF]\r
          bg-[#EAF5FF]\r
          px-[16px]\r
          py-[7px]\r
          text-[12px]\r
          font-medium\r
          leading-[16px]\r
          text-[#0069D9]\r
        `,children:`Deal pipeline`}),(0,A.jsx)(`span`,{className:`\r
          rounded-full\r
          border\r
          border-[#75B9FF]\r
          bg-[#EAF5FF]\r
          px-[16px]\r
          py-[7px]\r
          text-[12px]\r
          font-medium\r
          leading-[16px]\r
          text-[#0069D9]\r
        `,children:`Contacts & companies`}),(0,A.jsx)(`span`,{className:`\r
          rounded-full\r
          border\r
          border-[#75B9FF]\r
          bg-[#EAF5FF]\r
          px-[16px]\r
          py-[7px]\r
          text-[12px]\r
          font-medium\r
          leading-[16px]\r
          text-[#0069D9]\r
        `,children:`Tasks & meetings`}),(0,A.jsx)(`span`,{className:`\r
          rounded-full\r
          border\r
          border-[#75B9FF]\r
          bg-[#EAF5FF]\r
          px-[16px]\r
          py-[7px]\r
          text-[12px]\r
          font-medium\r
          leading-[16px]\r
          text-[#0069D9]\r
        `,children:`Activity timeline`})]})]}),(0,A.jsx)(`div`,{className:`\r
      mt-[42px]\r
      h-[300px]\r
      w-full\r
      overflow-hidden\r
      rounded-[8px]\r
      bg-[#EAEAEA]\r
    `,children:lr}),(0,A.jsxs)(`div`,{className:`w-full pt-[21px]`,children:[(0,A.jsx)(`h2`,{className:`\r
        m-0\r
        text-[24px]\r
        font-semibold\r
        leading-[29px]\r
        tracking-[-0.6px]\r
        text-[#242424]\r
      `,children:`GST invoices in seconds, from the deal you just won.`}),(0,A.jsx)(`p`,{className:`\r
        m-0\r
        mt-[12px]\r
        w-full\r
        text-[16px]\r
        font-normal\r
        leading-[24px]\r
        text-[#303030]\r
      `,children:`The client details and line items are already there. Quotations, proforma invoices, delivery challans and credit notes too, with unlimited invoices on every plan.`}),(0,A.jsxs)(`div`,{className:`\r
        mt-[18px]\r
        flex\r
        w-full\r
        flex-wrap\r
        gap-[8px]\r
      `,children:[(0,A.jsx)(`span`,{className:`\r
          rounded-full\r
          border\r
          border-[#75B9FF]\r
          bg-[#EAF5FF]\r
          px-[16px]\r
          py-[7px]\r
          text-[12px]\r
          font-medium\r
          leading-[16px]\r
          text-[#0069D9]\r
        `,children:`GST handled`}),(0,A.jsx)(`span`,{className:`\r
          rounded-full\r
          border\r
          border-[#75B9FF]\r
          bg-[#EAF5FF]\r
          px-[16px]\r
          py-[7px]\r
          text-[12px]\r
          font-medium\r
          leading-[16px]\r
          text-[#0069D9]\r
        `,children:`Unlimited invoices`}),(0,A.jsx)(`span`,{className:`\r
          rounded-full\r
          border\r
          border-[#75B9FF]\r
          bg-[#EAF5FF]\r
          px-[16px]\r
          py-[7px]\r
          text-[12px]\r
          font-medium\r
          leading-[16px]\r
          text-[#0069D9]\r
        `,children:`Your branding`}),(0,A.jsx)(`span`,{className:`\r
          rounded-full\r
          border\r
          border-[#75B9FF]\r
          bg-[#EAF5FF]\r
          px-[16px]\r
          py-[7px]\r
          text-[12px]\r
          font-medium\r
          leading-[16px]\r
          text-[#0069D9]\r
        `,children:`Every document type`})]})]}),(0,A.jsx)(`div`,{className:`\r
      mt-[42px]\r
      h-[300px]\r
      w-full\r
      overflow-hidden\r
      rounded-[8px]\r
      bg-[#EAEAEA]\r
    `,children:ur}),(0,A.jsxs)(`div`,{className:`w-full pt-[21px] pb-[40px]`,children:[(0,A.jsx)(`h2`,{className:`\r
        m-0\r
        text-[24px]\r
        font-semibold\r
        leading-[29px]\r
        tracking-[-0.6px]\r
        text-[#242424]\r
      `,children:`Know exactly who owes you what.`}),(0,A.jsx)(`p`,{className:`\r
        m-0\r
        mt-[12px]\r
        w-full\r
        text-[16px]\r
        font-normal\r
        leading-[24px]\r
        text-[#303030]\r
      `,children:`Invoiced, pending, overdue and collected, on one screen. Late invoices flag themselves, and reminders do the chasing you'd rather not do.`}),(0,A.jsxs)(`div`,{className:`\r
        mt-[18px]\r
        flex\r
        w-full\r
        flex-wrap\r
        gap-[8px]\r
      `,children:[(0,A.jsx)(`span`,{className:`\r
          rounded-full\r
          border\r
          border-[#75B9FF]\r
          bg-[#EAF5FF]\r
          px-[16px]\r
          py-[7px]\r
          text-[12px]\r
          font-medium\r
          leading-[16px]\r
          text-[#0069D9]\r
        `,children:`Payment status`}),(0,A.jsx)(`span`,{className:`\r
          rounded-full\r
          border\r
          border-[#75B9FF]\r
          bg-[#EAF5FF]\r
          px-[16px]\r
          py-[7px]\r
          text-[12px]\r
          font-medium\r
          leading-[16px]\r
          text-[#0069D9]\r
        `,children:`Overdue alerts`}),(0,A.jsx)(`span`,{className:`\r
          rounded-full\r
          border\r
          border-[#75B9FF]\r
          bg-[#EAF5FF]\r
          px-[16px]\r
          py-[7px]\r
          text-[12px]\r
          font-medium\r
          leading-[16px]\r
          text-[#0069D9]\r
        `,children:`Reminders`}),(0,A.jsx)(`span`,{className:`\r
          rounded-full\r
          border\r
          border-[#75B9FF]\r
          bg-[#EAF5FF]\r
          px-[16px]\r
          py-[7px]\r
          text-[12px]\r
          font-medium\r
          leading-[16px]\r
          text-[#0069D9]\r
        `,children:`Cash flow reports`})]})]})]})]}),(0,A.jsx)(vr,{}),(0,A.jsx)(ar,{}),(0,A.jsxs)(`section`,{style:{position:`relative`,width:`100%`,height:`708px`,background:`#FFFFFF`,overflow:`hidden`,fontFamily:`Inter, Arial, sans-serif`},children:[(0,A.jsxs)(`div`,{style:{position:`relative`,width:`1440px`,height:`708px`,margin:`0 auto`},children:[(0,A.jsxs)(`div`,{style:{position:`absolute`,left:`122px`,top:`109px`,width:`500px`},children:[(0,A.jsx)(`div`,{style:{fontSize:`14px`,lineHeight:`18px`,fontWeight:500,color:`#0085FF`},children:`Lorem ipsum`}),(0,A.jsxs)(`h2`,{style:{width:`410px`,margin:`28px 0 0`,fontSize:`34px`,lineHeight:`32px`,fontWeight:500,letterSpacing:`-1.5px`,color:`#171717`},children:[`Lorem ipsum dolor`,(0,A.jsx)(`br`,{}),`self amet consectetyr alit`]}),(0,A.jsx)(`p`,{style:{width:`500px`,margin:`26px 0 0`,fontSize:`16px`,lineHeight:`24px`,fontWeight:400,color:`#6E7079`},children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`})]}),(0,A.jsxs)(`div`,{style:{position:`absolute`,left:`720px`,top:`96px`,width:`603px`},children:[(0,A.jsxs)(`details`,{open:!0,style:{width:`603px`,borderTop:`1px solid #A8A8A8`,borderBottom:`1px solid #A8A8A8`},children:[(0,A.jsxs)(`summary`,{style:{height:`72px`,display:`flex`,alignItems:`center`,justifyContent:`space-between`,padding:`0 16px`,cursor:`pointer`,listStyle:`none`,fontSize:`15px`,lineHeight:`20px`,fontWeight:400,color:`#171717`},children:[(0,A.jsx)(`span`,{children:`Lorem ipsum dolor self amet, consectetur`}),(0,A.jsx)(`span`,{style:{fontSize:`22px`,lineHeight:`22px`,fontWeight:300,color:`#171717`},children:`−`})]}),(0,A.jsxs)(`div`,{style:{width:`100%`,height:`160px`,padding:`19px 16px 18px`,borderTop:`1px solid #A8A8A8`},children:[(0,A.jsx)(`p`,{style:{width:`550px`,margin:0,fontSize:`13px`,lineHeight:`18px`,fontWeight:400,color:`#7C7E87`},children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`}),(0,A.jsx)(`a`,{href:`#`,style:{display:`inline-block`,marginTop:`12px`,fontSize:`12px`,lineHeight:`16px`,fontWeight:400,color:`#0085FF`,textDecoration:`underline`},children:`Learn More`})]})]}),(0,A.jsx)(`details`,{style:{width:`603px`,height:`72px`,borderBottom:`1px solid #A8A8A8`},children:(0,A.jsxs)(`summary`,{style:{width:`100%`,height:`72px`,display:`flex`,alignItems:`center`,justifyContent:`space-between`,padding:`0 16px`,cursor:`pointer`,listStyle:`none`,fontSize:`15px`,lineHeight:`20px`,fontWeight:400,color:`#171717`},children:[(0,A.jsx)(`span`,{children:`Lorem ipsum dolor self amet, consectetur`}),(0,A.jsx)(`span`,{style:{fontSize:`22px`,lineHeight:`22px`,fontWeight:300},children:`+`})]})}),(0,A.jsx)(`details`,{style:{width:`603px`,height:`72px`,borderBottom:`1px solid #A8A8A8`},children:(0,A.jsxs)(`summary`,{style:{width:`100%`,height:`72px`,display:`flex`,alignItems:`center`,justifyContent:`space-between`,padding:`0 16px`,cursor:`pointer`,listStyle:`none`,fontSize:`15px`,lineHeight:`20px`,fontWeight:400,color:`#171717`},children:[(0,A.jsx)(`span`,{children:`Lorem ipsum dolor self amet, consectetur`}),(0,A.jsx)(`span`,{style:{fontSize:`22px`,lineHeight:`22px`,fontWeight:300},children:`+`})]})}),(0,A.jsx)(`details`,{style:{width:`603px`,height:`72px`,borderBottom:`1px solid #A8A8A8`},children:(0,A.jsxs)(`summary`,{style:{width:`100%`,height:`72px`,display:`flex`,alignItems:`center`,justifyContent:`space-between`,padding:`0 16px`,cursor:`pointer`,listStyle:`none`,fontSize:`15px`,lineHeight:`20px`,fontWeight:400,color:`#171717`},children:[(0,A.jsx)(`span`,{children:`Lorem ipsum dolor self amet, consectetur`}),(0,A.jsx)(`span`,{style:{fontSize:`22px`,lineHeight:`22px`,fontWeight:300},children:`+`})]})}),(0,A.jsx)(`details`,{style:{width:`603px`,height:`72px`,borderBottom:`1px solid #A8A8A8`},children:(0,A.jsxs)(`summary`,{style:{width:`100%`,height:`72px`,display:`flex`,alignItems:`center`,justifyContent:`space-between`,padding:`0 16px`,cursor:`pointer`,listStyle:`none`,fontSize:`15px`,lineHeight:`20px`,fontWeight:400,color:`#171717`},children:[(0,A.jsx)(`span`,{children:`Lorem ipsum dolor self amet, consectetur`}),(0,A.jsx)(`span`,{style:{fontSize:`22px`,lineHeight:`22px`,fontWeight:300},children:`+`})]})})]})]}),(0,A.jsx)(`style`,{children:`
    @media (max-width: 1439px) {
      .section9-scale {
        transform-origin: top left;
      }
    }

    @media (max-width: 900px) {
      .section9 {
        height: auto !important;
        min-height: 708px;
      }
    }
  `})]}),(0,A.jsxs)(`section`,{style:{position:`relative`,width:`100%`,height:`1072px`,overflow:`hidden`,background:`#000000`,fontFamily:`Inter, Arial, sans-serif`},children:[(0,A.jsxs)(`div`,{style:{position:`relative`,width:`1440px`,height:`1072px`,margin:`0 auto`},children:[(0,A.jsx)(`h2`,{style:{position:`absolute`,top:`8px`,left:`50%`,transform:`translateX(-50%)`,width:`850px`,margin:0,textAlign:`center`,color:`#FFFFFF`,fontSize:`50px`,lineHeight:`58px`,fontWeight:400,letterSpacing:`-2.2px`},children:`Stop switching between apps.`}),(0,A.jsxs)(`p`,{style:{position:`absolute`,top:`91px`,left:`50%`,transform:`translateX(-50%)`,width:`600px`,margin:0,textAlign:`center`,color:`#8F8F8F`,fontSize:`14px`,lineHeight:`19px`,fontWeight:400},children:[`Try DataCircles free for 7 days at full limits and see your leads,`,(0,A.jsx)(`br`,{}),`invoices and payments in one place. No credit card needed.`]}),(0,A.jsxs)(`div`,{style:{position:`absolute`,top:`178px`,left:`50%`,transform:`translateX(-50%)`,display:`flex`,alignItems:`center`,gap:`12px`},children:[(0,A.jsx)(`a`,{href:`/signup`,style:{width:`134px`,height:`40px`,display:`flex`,alignItems:`center`,justifyContent:`center`,borderRadius:`5px`,background:`#0085FF`,color:`#FFFFFF`,fontSize:`12px`,lineHeight:`16px`,fontWeight:400,textDecoration:`none`},children:`Get Start Now`}),(0,A.jsx)(`a`,{href:`/demo`,style:{width:`117px`,height:`40px`,display:`flex`,alignItems:`center`,justifyContent:`center`,borderRadius:`5px`,border:`1px solid #33343B`,background:`#171720`,color:`#FFFFFF`,fontSize:`12px`,lineHeight:`16px`,fontWeight:400,textDecoration:`none`},children:`Book Demo`})]}),(0,A.jsxs)(`div`,{style:{position:`absolute`,left:0,top:`287px`,width:`1440px`,height:`785px`,overflow:`hidden`,borderTopLeftRadius:`14px`,borderTopRightRadius:`14px`,background:`#F7F7F7`},children:[(0,A.jsx)(`img`,{src:_r,alt:`DataCircles dashboard`,style:{position:`absolute`,left:`0`,top:`0`,width:`1440px`,height:`785px`,display:`block`,objectFit:`cover`}}),(0,A.jsx)(`div`,{style:{position:`absolute`,inset:0,pointerEvents:`none`,background:`linear-gradient(to bottom, rgba(255,255,255,0) 38%, rgba(255,255,255,0.18) 58%, rgba(255,255,255,0.72) 82%, rgba(255,255,255,1) 100%)`}}),(0,A.jsx)(`div`,{style:{position:`absolute`,left:0,top:0,width:`120px`,height:`100%`,pointerEvents:`none`,background:`linear-gradient(to right, rgba(255,255,255,0.88), rgba(255,255,255,0))`}}),(0,A.jsx)(`div`,{style:{position:`absolute`,right:0,top:0,width:`120px`,height:`100%`,pointerEvents:`none`,background:`linear-gradient(to left, rgba(255,255,255,0.88), rgba(255,255,255,0))`}})]})]}),(0,A.jsx)(`style`,{children:`
    @media (max-width: 1439px) {
      .section10-canvas {
        transform-origin: top left;
      }
    }

    @media (max-width: 800px) {
      .section10 {
        height: 900px !important;
      }
    }
  `})]})]})}function br(){return(0,A.jsxs)(`section`,{className:`\r
        flex\r
        h-auto\r
        w-full\r
        flex-col\r
        items-center\r
        justify-center\r
        gap-[28px]\r
        sm:gap-[34px]\r
        md:gap-[42px]\r
        overflow-hidden\r
        bg-gradient-to-r\r
        from-[#0a55af]\r
        to-[#0085ff]\r
        px-6\r
        sm:px-12\r
        md:px-24\r
        lg:px-[160px]\r
        xl:px-[320px]\r
        py-[48px]\r
        sm:py-[64px]\r
        md:py-[80px]\r
      `,children:[(0,A.jsxs)(`div`,{className:`flex flex-col items-center gap-[14px] sm:gap-[18px] text-center text-white`,children:[(0,A.jsx)(`h2`,{className:`\r
            m-0\r
            whitespace-normal\r
            sm:whitespace-nowrap\r
            text-[28px]\r
            sm:text-[34px]\r
            md:text-[42px]\r
            font-medium\r
            leading-[1.1]\r
            text-white\r
          `,children:`See it on your own Business`}),(0,A.jsx)(`p`,{className:`\r
            m-0\r
            w-full\r
            max-w-[662px]\r
            text-center\r
            text-[15px]\r
            sm:text-[16px]\r
            md:text-[18px]\r
            font-normal\r
            leading-[1.4]\r
            text-white\r
          `,children:`Start free for 7 days at full limits. No credit card needed, and our team will help you bring your data across.`})]}),(0,A.jsxs)(`div`,{className:`flex flex-col sm:flex-row items-center gap-[10px] sm:gap-[8px] w-full sm:w-auto px-4 sm:px-0`,children:[(0,A.jsx)(`button`,{type:`button`,className:`\r
            flex\r
            h-[42px]\r
            w-full\r
            sm:w-[142px]\r
            items-center\r
            justify-center\r
            overflow-hidden\r
            rounded-full\r
            border\r
            border-white\r
            bg-transparent\r
            px-[12px]\r
            text-center\r
            text-[14px]\r
            font-medium\r
            leading-[1.2]\r
            text-white\r
            transition-all\r
            duration-200\r
            hover:bg-white\r
            hover:text-[#014c6c]\r
          `,children:`Create Account`}),(0,A.jsx)(`button`,{type:`button`,className:`\r
            flex\r
            h-[42px]\r
            w-full\r
            sm:w-[136px]\r
            items-center\r
            justify-center\r
            overflow-hidden\r
            rounded-full\r
            border\r
            border-white\r
            bg-transparent\r
            px-[12px]\r
            text-center\r
            text-[14px]\r
            font-medium\r
            leading-[1.2]\r
            text-white\r
            transition-all\r
            duration-200\r
            hover:bg-white\r
            hover:text-[#014c6c]\r
          `,children:`Book a Demo`})]})]})}var xr=`https://res.cloudinary.com/tpxo8m6a/image/upload/v1787985998/b785b93f10ee527292fd9e6b3cba9c838587764b_1.png`,Sr=`https://res.cloudinary.com/tpxo8m6a/image/upload/v1787986192/7318c219e2b5c2c73ed078df153915c50d9cc106_2.png`,Cr=`https://www.figma.com/api/mcp/asset/660b337f-7ddf-4840-b081-24b11063395c.png`,wr=`https://www.figma.com/api/mcp/asset/e8fa4a3f-18eb-4f14-9c86-87ca7e4a9324.png`,Tr=`https://res.cloudinary.com/tpxo8m6a/image/upload/v1787917181/e1b401cb4e4c9b406541ebaf104107c3180075c3_5.png`,Er=`https://www.figma.com/api/mcp/asset/af560372-12d0-4da2-9b06-70b1012c6d3f.svg`,Dr=`https://www.figma.com/api/mcp/asset/3723193f-cbcb-4762-82df-38ae8f908d84.svg`,Or=`https://www.figma.com/api/mcp/asset/97787264-fe83-4295-8892-1b7a706fe5ed.svg`,kr=`https://www.figma.com/api/mcp/asset/b9288a23-a5b6-4068-909a-9ffea9306416.svg`,Ar=`https://www.figma.com/api/mcp/asset/744ec614-49c7-4486-b622-d0895a1bf8f2.svg`,jr=`https://www.figma.com/api/mcp/asset/34fcee76-c4ea-4ac1-850f-3a3dad4b3444.svg`,Mr=`https://www.figma.com/api/mcp/asset/aa77ee8e-e281-4dfc-9390-c2f9974370dd.svg`,Nr=`https://www.figma.com/api/mcp/asset/57cd47d7-b834-439a-95aa-c16be80d4baf.svg`,Pr=`
  transition-all
  duration-200
  ease-out
  hover:-translate-y-[2px]
  hover:scale-[1.03]
  active:translate-y-0
  active:scale-[0.98]
`,Fr=`
  drop-shadow-[0px_44.21px_6px_rgba(150,186,232,0.18)]
  drop-shadow-[0px_19.342px_4.5px_rgba(150,186,232,0.30)]
  drop-shadow-[0px_5.526px_2.5px_rgba(150,186,232,0.34)]
`;function Ir(){return(0,A.jsxs)(`section`,{id:`home`,className:`\r
        absolute\r
        left-0\r
        top-0\r
        h-[1325px]\r
        w-[1440px]\r
        overflow-hidden\r
        bg-white\r
      `,children:[(0,A.jsxs)(`div`,{className:`\r
          absolute\r
          left-[-240px]\r
          top-[379.94px]\r
          h-[945px]\r
          w-[1920px]\r
          overflow-hidden\r
        `,style:{background:`linear-gradient(180deg, rgb(255,255,255) 9.4595%, rgb(156,208,255) 45.045%, rgb(255,255,255) 89.631%, rgb(255,255,255) 100%)`},children:[(0,A.jsx)(`div`,{className:`\r
            absolute\r
            left-[290px]\r
            top-[-67px]\r
            h-[1078px]\r
            w-[1340px]\r
            overflow-hidden\r
          `,style:{maskImage:`url("${Er}")`,WebkitMaskImage:`url("${Er}")`,maskSize:`1340px 1078px`,WebkitMaskSize:`1340px 1078px`,maskRepeat:`no-repeat`,WebkitMaskRepeat:`no-repeat`},children:(0,A.jsx)(`div`,{className:`\r
              absolute\r
              left-0\r
              top-[139px]\r
              h-[800px]\r
              w-[1340px]\r
            `,children:(0,A.jsx)(`img`,{src:Dr,alt:``,className:`\r
                absolute\r
                inset-[0.06%_0.04%]\r
                h-auto\r
                w-full\r
                max-w-none\r
              `})})}),(0,A.jsx)(`div`,{className:`\r
            absolute\r
            left-1/2\r
            top-[160px]\r
            flex\r
            h-[733px]\r
            w-[1360px]\r
            -translate-x-1/2\r
            items-center\r
            justify-center\r
            overflow-clip\r
          `,children:(0,A.jsxs)(`div`,{className:`\r
              relative\r
              h-[733px]\r
              w-[1060px]\r
              rounded-[7px]\r
            `,children:[(0,A.jsx)(`div`,{className:`\r
                absolute\r
                inset-0\r
                overflow-hidden\r
                rounded-[7px]\r
              `,children:(0,A.jsx)(`img`,{src:xr,alt:`DataCircles dashboard`,className:`\r
                  absolute\r
                  left-[-0.04%]\r
                  top-[0.03%]\r
                  h-[126.85%]\r
                  w-full\r
                  max-w-none\r
                `})}),(0,A.jsx)(`div`,{className:`
                absolute
                bottom-[128px]
                left-[-33px]
                z-30
                flex
                w-[233px]
                flex-col
                items-start
                justify-center
                ${Fr}
              `,children:(0,A.jsx)(`div`,{className:`\r
                  relative\r
                  h-[230.22px]\r
                  w-full\r
                  shrink-0\r
                  overflow-hidden\r
                `,children:(0,A.jsx)(`img`,{src:Sr,alt:``,className:`\r
                    absolute\r
                    left-[-5.65%]\r
                    top-[-0.02%]\r
                    h-full\r
                    w-[111.31%]\r
                    max-w-none\r
                  `})})})]})})]}),(0,A.jsxs)(`div`,{className:`\r
          absolute\r
          left-1/2\r
          top-[164px]\r
          flex\r
          w-[1600px]\r
          -translate-x-1/2\r
          flex-col\r
          items-center\r
          justify-center\r
          gap-[20px]\r
          px-[20px]\r
        `,children:[(0,A.jsxs)(`div`,{className:`\r
            flex\r
            h-[24.8px]\r
            items-center\r
            justify-center\r
            rounded-[999px]\r
            bg-[#ebe6e0]\r
            px-[10px]\r
            py-[4px]\r
          `,children:[(0,A.jsx)(`span`,{className:`mr-[5px] h-[6px] w-[6px] rounded-full bg-[#0085ff]`}),(0,A.jsx)(`span`,{className:`text-center text-[11.4px] leading-[16.8px] text-[#231014]`,children:`CRM + Invoicing Infrastructure`})]}),(0,A.jsx)(`div`,{className:`flex h-[108px] w-[635px] flex-col items-center`,children:(0,A.jsxs)(`h1`,{className:`\r
              m-0\r
              w-full\r
              whitespace-nowrap\r
              text-center\r
              text-[51px]\r
              font-medium\r
              leading-[54px]\r
              tracking-[-2.7px]\r
              text-[#231014]\r
            `,children:[`From first enquiry to final payment,`,(0,A.jsx)(`br`,{}),`all in once place`]})}),(0,A.jsx)(`div`,{className:`flex h-[39.19px] w-[685px] flex-col items-center`,children:(0,A.jsxs)(`p`,{className:`\r
              m-0\r
              w-full\r
              whitespace-nowrap\r
              text-center\r
              text-[13.2px]\r
              font-normal\r
              leading-[19.6px]\r
              text-[#635557]\r
            `,children:[`DataCircles brings your leads, follow-ups, invoices and payments into`,(0,A.jsx)(`br`,{}),`a single connected system, so nothing gets lost between apps.`]})}),(0,A.jsxs)(`div`,{className:`\r
            flex\r
            w-full\r
            flex-col\r
            items-center\r
            justify-center\r
            gap-[10px]\r
            pt-[10px]\r
          `,children:[(0,A.jsxs)(`div`,{className:`flex items-center gap-[10px]`,children:[(0,A.jsx)(`button`,{type:`button`,className:`
                flex
                h-[49px]
                w-[149px]
                items-center
                justify-center
                rounded-[999px]
                bg-[#0085ff]
                text-[15.1px]
                font-medium
                leading-[22.4px]
                text-white
                ${Pr}
              `,children:`Start Free`}),(0,A.jsx)(`button`,{type:`button`,className:`
                flex
                h-[49px]
                w-[148px]
                items-center
                justify-center
                rounded-[999px]
                bg-[#e5edf5]
                text-[15.3px]
                font-medium
                leading-[22.4px]
                text-[#231014]
                ${Pr}
              `,children:`Book a Demo`})]}),(0,A.jsx)(`p`,{className:`m-0 whitespace-nowrap text-center text-[9px] leading-[19.6px] text-[#635557]`,children:`7-day free trial · No card required · GST-ready · Works on any device`})]})]})]})}function Lr(){return(0,A.jsxs)(`section`,{id:`about`,className:`\r
        absolute\r
        left-1/2\r
        top-[1537px]\r
        flex\r
        h-[880px]\r
        w-[1440px]\r
        -translate-x-1/2\r
        items-center\r
        gap-[80px]\r
        px-[112px]\r
        py-[80px]\r
      `,children:[(0,A.jsxs)(`div`,{className:`\r
          relative\r
          h-[720px]\r
          w-[600px]\r
          shrink-0\r
          overflow-hidden\r
          rounded-[16px]\r
        `,children:[(0,A.jsx)(`img`,{src:Cr,alt:``,className:`\r
            absolute\r
            left-[-13.83%]\r
            top-0\r
            h-full\r
            w-[127.67%]\r
            max-w-none\r
          `}),(0,A.jsx)(`img`,{src:wr,alt:``,className:`\r
            absolute\r
            inset-0\r
            h-full\r
            w-full\r
            rounded-[16px]\r
            object-cover\r
          `})]}),(0,A.jsxs)(`div`,{className:`\r
          flex\r
          h-[585px]\r
          min-w-0\r
          flex-1\r
          flex-col\r
          gap-[32px]\r
        `,children:[(0,A.jsxs)(`div`,{className:`flex flex-col gap-[14px]`,children:[(0,A.jsx)(`h2`,{className:`\r
              m-0\r
              w-full\r
              text-[32px]\r
              font-medium\r
              leading-[1.1]\r
              tracking-[-2px]\r
              text-[#2b2c30]\r
            `,children:`Most businesses run on two systems that never talk.`}),(0,A.jsx)(`p`,{className:`m-0 text-[16px] leading-[1.2] text-[#707173]`,children:`Your leads live in one place, your invoices in another. Every won deal means retyping the same client details into a billing app, and every payment question means opening two tabs to answer it. Nothing is wrong with either tool. The gap between them is what costs you.`})]}),(0,A.jsxs)(`div`,{className:`flex flex-col gap-[20px]`,children:[(0,A.jsx)(`div`,{className:`h-px w-full bg-[#e0e0e1]`}),(0,A.jsx)(`ul`,{className:`m-0 list-disc pl-[30px] text-[20px] leading-[1.2] tracking-[-1px] text-[#2b2c30]`,children:(0,A.jsx)(`li`,{children:`Client details typed twice, once in the CRM and again in the billing app`})}),(0,A.jsx)(`div`,{className:`h-px w-full bg-[#e0e0e1]`}),(0,A.jsx)(`ul`,{className:`m-0 list-disc pl-[30px] text-[20px] leading-[1.2] tracking-[-1px] text-[#2b2c30]`,children:(0,A.jsx)(`li`,{children:`No single answer to "has this client paid us yet?"`})}),(0,A.jsx)(`div`,{className:`h-px w-full bg-[#e0e0e1]`}),(0,A.jsx)(`ul`,{className:`m-0 list-disc pl-[30px] text-[20px] leading-[1.2] tracking-[-1px] text-[#2b2c30]`,children:(0,A.jsx)(`li`,{children:`Follow-ups forgotten because they live in WhatsApp and memory`})}),(0,A.jsx)(`div`,{className:`h-px w-full bg-[#e0e0e1]`}),(0,A.jsx)(`ul`,{className:`m-0 list-disc pl-[30px] text-[20px] leading-[1.2] tracking-[-1px] text-[#2b2c30]`,children:(0,A.jsx)(`li`,{children:`Two subscriptions, two logins, and still no full picture`})}),(0,A.jsx)(`div`,{className:`h-px w-full bg-[#e0e0e1]`})]}),(0,A.jsxs)(`button`,{type:`button`,className:`
            flex
            h-[52px]
            w-[206px]
            items-center
            justify-center
            gap-[10px]
            rounded-[32px]
            bg-[#0085ff]
            px-[20px]
            py-[16px]
            text-[16px]
            font-medium
            text-white
            ${Pr}
          `,children:[`Start Your Project`,(0,A.jsx)(`img`,{src:Or,alt:``,className:`h-[20px] w-[20px]`})]})]})]})}var Rr=[{number:`1`,title:`Enquiry`,image:kr},{number:`2`,title:`Follow-Up`,image:Ar},{number:`3`,title:`Quote`,image:jr},{number:`4`,title:`Invoice`,image:jr},{number:`5`,title:`Paid`,image:jr}];function zr({number:e,title:t,image:n}){return(0,A.jsxs)(`div`,{className:`\r
        flex\r
        h-[110px]\r
        flex-1\r
        flex-col\r
        items-center\r
        gap-[24px]\r
      `,children:[(0,A.jsxs)(`div`,{className:`relative h-[64px] w-[64px]`,children:[(0,A.jsx)(`img`,{src:n,alt:``,className:`\r
            absolute\r
            inset-[3.13%]\r
            h-[93.74%]\r
            w-[93.74%]\r
          `}),(0,A.jsx)(`p`,{className:`\r
            absolute\r
            left-1/2\r
            top-1/2\r
            m-0\r
            -translate-x-1/2\r
            -translate-y-1/2\r
            text-[24px]\r
            font-semibold\r
            leading-[1.2]\r
            text-white\r
          `,children:e})]}),(0,A.jsx)(`span`,{className:`\r
          text-center\r
          text-[20px]\r
          font-semibold\r
          leading-[1.1]\r
          text-[#2b2c30]\r
        `,children:t})]})}function Br(){return(0,A.jsxs)(`section`,{className:`\r
        absolute\r
        left-1/2\r
        top-[2417px]\r
        h-[350px]\r
        w-[1440px]\r
        -translate-x-1/2\r
      `,children:[(0,A.jsxs)(`div`,{className:`\r
          absolute\r
          left-[112px]\r
          right-[112px]\r
          top-0\r
          flex\r
          flex-col\r
          items-center\r
          gap-[14px]\r
          text-center\r
        `,children:[(0,A.jsx)(`h2`,{className:`\r
            m-0\r
            text-[35.2px]\r
            font-medium\r
            leading-[39.6px]\r
            tracking-[-1.08px]\r
            text-[#2b2c30]\r
          `,children:`One flow, start to finish.`}),(0,A.jsx)(`p`,{className:`\r
            m-0\r
            w-[444px]\r
            text-center\r
            text-[16px]\r
            leading-[1.2]\r
            text-[#707173]\r
          `,children:`Each step carries the last one forward, so nothing is retyped and nothing falls through.`})]}),(0,A.jsxs)(`div`,{className:`\r
          absolute\r
          left-[112px]\r
          right-[112px]\r
          top-[172px]\r
          grid\r
          h-[110px]\r
          grid-cols-5\r
          gap-x-[32px]\r
        `,children:[Rr.map(e=>(0,A.jsx)(zr,{number:e.number,title:e.title,image:e.image},e.number)),(0,A.jsx)(`img`,{src:Mr,alt:``,className:`\r
            absolute\r
            left-[141px]\r
            top-[32px]\r
            h-[12px]\r
            w-[185px]\r
          `}),(0,A.jsx)(`img`,{src:Mr,alt:``,className:`\r
            absolute\r
            left-[393px]\r
            top-[32px]\r
            h-[12px]\r
            w-[185px]\r
          `}),(0,A.jsx)(`img`,{src:Mr,alt:``,className:`\r
            absolute\r
            left-[640px]\r
            top-[32px]\r
            h-[12px]\r
            w-[185px]\r
          `}),(0,A.jsx)(`img`,{src:Mr,alt:``,className:`\r
            absolute\r
            left-[890px]\r
            top-[32px]\r
            h-[12px]\r
            w-[185px]\r
          `})]}),(0,A.jsx)(`p`,{className:`\r
          absolute\r
          left-1/2\r
          top-[321px]\r
          m-0\r
          w-[723px]\r
          -translate-x-1/2\r
          text-center\r
          text-[16px]\r
          leading-[1.2]\r
          text-[#707173]\r
        `,children:`The enquiry becomes a deal, the deal becomes a quote, the quote becomes an invoice, and the payment closes the loop against the same client record.`})]})}function Vr({children:e}){return(0,A.jsx)(`span`,{className:`\r
        inline-flex\r
        h-[31px]\r
        items-center\r
        justify-center\r
        rounded-[100px]\r
        border\r
        border-[rgba(0,133,255,0.3)]\r
        bg-[rgba(0,133,255,0.1)]\r
        px-[16px]\r
        py-[8px]\r
        text-[12px]\r
        font-semibold\r
        text-[#0a55af]\r
      `,children:e})}function Hr({reverse:e=!1,label:t,title:n,description:r,tags:i,link:a}){return(0,A.jsxs)(`article`,{className:`
        absolute
        left-1/2
        flex
        h-[588px]
        w-[1216px]
        -translate-x-1/2
        overflow-hidden
        rounded-[8px]
        bg-white
        ${e?`flex-row-reverse`:``}
      `,children:[(0,A.jsx)(`div`,{className:`\r
          relative\r
          flex\r
          h-[588px]\r
          flex-1\r
          items-center\r
          justify-center\r
          overflow-hidden\r
        `,children:(0,A.jsx)(`div`,{className:`\r
            relative\r
            h-[658.48px]\r
            w-full\r
          `,children:(0,A.jsx)(`img`,{src:Tr,alt:``,className:`\r
              absolute\r
              left-0\r
              top-[0.11%]\r
              h-[158.82%]\r
              w-full\r
              max-w-none\r
            `})})}),(0,A.jsxs)(`div`,{className:`\r
          flex\r
          h-full\r
          w-[550px]\r
          shrink-0\r
          flex-col\r
          items-start\r
          justify-between\r
          overflow-hidden\r
        `,children:[(0,A.jsxs)(`div`,{className:`
            flex
            w-full
            flex-col
            gap-[14px]
            pt-0
            ${e?`pr-[32px]`:`px-[32px]`}
          `,children:[(0,A.jsx)(`p`,{className:`\r
              m-0\r
              text-[16px]\r
              font-medium\r
              leading-[24px]\r
              tracking-[-0.16px]\r
              text-[#0085ff]\r
            `,children:t}),(0,A.jsx)(`h3`,{className:`\r
              m-0\r
              text-[24px]\r
              font-semibold\r
              leading-[28px]\r
              tracking-[-0.72px]\r
              text-[#1e1e1e]\r
            `,children:n}),(0,A.jsx)(`p`,{className:`\r
              m-0\r
              text-[16px]\r
              font-normal\r
              leading-[24px]\r
              tracking-[-0.16px]\r
              text-[#252525]\r
            `,children:r})]}),(0,A.jsxs)(`div`,{className:`
            flex
            flex-col
            gap-[32px]
            pb-0
            ${e?`pr-[32px]`:`px-[32px]`}
          `,children:[(0,A.jsx)(`div`,{className:`flex max-w-[486px] flex-wrap gap-[8px]`,children:i.map(e=>(0,A.jsx)(Vr,{children:e},e))}),(0,A.jsxs)(`span`,{className:`\r
              text-[16px]\r
              font-bold\r
              leading-[24px]\r
              tracking-[-0.16px]\r
              text-[#0085ff]\r
            `,children:[a,` →`]})]})]})]})}function Ur(){return(0,A.jsxs)(`section`,{id:`features`,className:`\r
        absolute\r
        left-0\r
        top-0\r
        h-[5422px]\r
        w-[1440px]\r
      `,children:[(0,A.jsx)(`div`,{className:`\r
          absolute\r
          left-0\r
          top-[2863px]\r
          h-[588px]\r
          w-full\r
        `,children:(0,A.jsx)(Hr,{label:`WIN The Work`,title:`Every lead, every follow-up, one pipeline.`,description:`Track deals through your own stages, keep contacts and companies together, and see exactly what needs a follow-up today. Tasks, meetings and notes sit against the client they belong to, so context never goes missing.`,tags:[`Deal pipeline`,`Contacts & companies`,`Tasks`,`Meetings`,`Activity timeline`,`Notes`],link:`Explore the CRM`})}),(0,A.jsx)(`div`,{className:`\r
          absolute\r
          left-0\r
          top-[3520px]\r
          h-[588px]\r
          w-full\r
        `,children:(0,A.jsx)(Hr,{reverse:!0,label:`Bill without the busywork`,title:`GST invoices in seconds, from the deal you just won.`,description:`Turn a won deal into a quote or an invoice without retyping anything. Full GST handling, professional formats, and every document filed against the right client.`,tags:[`GST invoices`,`Quotations`,`Proforma`,`Unlimited invoices`,`Professional formats`],link:`Explore invoicing`})}),(0,A.jsx)(`div`,{className:`\r
          absolute\r
          left-0\r
          top-[4177px]\r
          h-[588px]\r
          w-full\r
        `,children:(0,A.jsx)(Hr,{label:`Get Paid`,title:`Know what's collected, what's pending, what's overdue.`,description:`See your money at a glance and let reminders do the chasing. Clients pay on UPI, cards or net banking, and the payment lands against the invoice on its own.`,tags:[`Payment status`,`Overdue alerts`,`Automatic reminders`,`UPI & cards`,`Financial overview`],link:`Explore Payments`})}),(0,A.jsx)(`div`,{className:`\r
          absolute\r
          left-0\r
          top-[4834px]\r
          h-[588px]\r
          w-full\r
        `,children:(0,A.jsx)(Hr,{reverse:!0,label:`Everything else is Connected`,title:`Files, vendors, meetings and calendar, all in context.`,description:`Store contracts and documents against the company they belong to. Track vendors and purchases. Keep meetings and tasks on one calendar. It's the day-to-day glue that usually lives in five other apps.`,tags:[`File storage`,`Vendors`,`Purchases`,`Calender`,`Meetings`],link:`Explore CRM`})})]})}function Wr(){return(0,A.jsxs)(`section`,{className:`\r
        absolute\r
        left-1/2\r
        top-[5572px]\r
        h-[1316px]\r
        w-[1440px]\r
        -translate-x-1/2\r
        overflow-hidden\r
        bg-black\r
      `,children:[(0,A.jsx)(`div`,{className:`\r
          absolute\r
          left-1/2\r
          top-[77px]\r
          flex\r
          w-[1180px]\r
          -translate-x-1/2\r
          flex-col\r
          items-center\r
          justify-center\r
          border-t\r
          border-[rgba(0,0,0,0.2)]\r
          pt-[46px]\r
        `,children:(0,A.jsx)(`div`,{className:`flex w-[1178px] flex-col items-center`,children:(0,A.jsxs)(`div`,{className:`\r
              flex\r
              w-full\r
              flex-col\r
              items-center\r
              justify-center\r
              text-center\r
            `,children:[(0,A.jsx)(`p`,{className:`\r
                m-0\r
                w-[493px]\r
                text-[18px]\r
                font-medium\r
                leading-[26px]\r
                tracking-[-0.72px]\r
                text-[#0085ff]\r
              `,children:`One Dashboard`}),(0,A.jsx)(`h2`,{className:`\r
                m-0\r
                mt-[24px]\r
                whitespace-nowrap\r
                text-[45px]\r
                font-medium\r
                leading-[52px]\r
                tracking-[-2px]\r
                text-white\r
              `,children:`Your whole business on one screen.`}),(0,A.jsx)(`p`,{className:`\r
                m-0\r
                mt-[24px]\r
                w-[571px]\r
                text-[18px]\r
                font-normal\r
                leading-[26px]\r
                tracking-[-0.72px]\r
                text-[#b5b6b7]\r
              `,children:`Overview, CRM and invoices sit side by side, so you can see revenue, pipeline and outstanding money without leaving the page. Reports and dashboards come as standard, on every plan.`})]})})}),(0,A.jsxs)(`div`,{className:`\r
          absolute\r
          left-[190px]\r
          top-[406px]\r
          h-[733px]\r
          w-[1060px]\r
          rounded-[7px]\r
        `,children:[(0,A.jsx)(`div`,{className:`\r
            absolute\r
            inset-0\r
            overflow-hidden\r
            rounded-[7px]\r
          `,children:(0,A.jsx)(`img`,{src:xr,alt:``,className:`\r
              absolute\r
              left-[-0.04%]\r
              top-[0.03%]\r
              h-[126.85%]\r
              w-full\r
              max-w-none\r
            `})}),(0,A.jsx)(`div`,{className:`
            absolute
            bottom-[128px]
            left-[-33px]
            z-30
            flex
            w-[233px]
            flex-col
            items-start
            justify-center
            ${Fr}
          `,children:(0,A.jsx)(`div`,{className:`\r
              relative\r
              h-[230.22px]\r
              w-full\r
              shrink-0\r
              overflow-hidden\r
            `,children:(0,A.jsx)(`img`,{src:Sr,alt:``,className:`\r
                absolute\r
                left-[-5.65%]\r
                top-[-0.02%]\r
                h-full\r
                w-[111.31%]\r
                max-w-none\r
              `})})})]}),(0,A.jsx)(`div`,{className:`
          absolute
          bottom-[542.78px]
          left-[1111px]
          z-40
          flex
          w-[233px]
          flex-col
          items-start
          justify-center
          ${Fr}
        `,children:(0,A.jsx)(`div`,{className:`\r
            relative\r
            h-[230.22px]\r
            w-full\r
            shrink-0\r
            overflow-hidden\r
          `,children:(0,A.jsx)(`img`,{src:Sr,alt:``,className:`\r
              absolute\r
              left-[-5.65%]\r
              top-[-0.02%]\r
              h-full\r
              w-[111.31%]\r
              max-w-none\r
            `})})})]})}var Gr=[[[`Lorem ipsum dolor sit amet`,314],[`Lorem ipsum dolor sit`,254],[`Lorem ipsum dolor sit amet consec`,357],[`Lorem ipsum dolor`,227]],[[`Lorem ipsum dolor sit`,248],[`Lorem ipsum dolor sit`,264],[`Lorem ipsum dolor sit amet`,274],[`Lorem ipsum dolor sit amet con`,312]],[[`Lorem ipsum dolor sit`,270],[`Lorem ipsum dolor sit`,250],[`Lorem ipsum dolor sit amet`,274],[`Lorem ipsum dolor sit amet con`,312]],[[`Lorem ipsum dolor sit amet`,296],[`Lorem ipsum dolor sit`,232],[`Lorem ipsum dolor sit amet`,310],[`Lorem ipsum dolor sit amet con`,312]],[[`Lorem ipsum dolor sit`,312],[`Lorem ipsum dolor sit amet`,310],[`Lorem ipsum dolor sit amet con`,300]]];function Kr({text:e,width:t}){return(0,A.jsxs)(`div`,{className:`\r
        flex\r
        h-[51px]\r
        shrink-0\r
        items-center\r
        gap-[10px]\r
        rounded-[47px]\r
        border\r
        border-dashed\r
        border-[#ececec]\r
        bg-[#f8f8f8]\r
        px-[20px]\r
        py-[16px]\r
      `,style:{width:`${t}px`},children:[(0,A.jsx)(`div`,{className:`relative h-[18px] w-[18px] shrink-0`,children:(0,A.jsx)(`img`,{src:Nr,alt:``,className:`absolute inset-0 h-full w-full`})}),(0,A.jsx)(`p`,{className:`\r
          m-0\r
          whitespace-nowrap\r
          text-[16px]\r
          font-normal\r
          leading-[1.2]\r
          text-[#1c1c1d]\r
        `,children:e})]})}function qr(){return(0,A.jsxs)(`section`,{id:`pricing`,className:`\r
        absolute\r
        left-1/2\r
        top-[6930px]\r
        flex\r
        w-[1920px]\r
        -translate-x-1/2\r
        flex-col\r
        items-center\r
        gap-[62px]\r
        bg-white\r
        px-[320px]\r
        py-[80px]\r
      `,children:[(0,A.jsx)(`div`,{className:`\r
          flex\r
          w-[876px]\r
          flex-col\r
          items-center\r
        `,children:(0,A.jsxs)(`div`,{className:`\r
            flex\r
            w-full\r
            flex-col\r
            items-center\r
            gap-[14px]\r
            text-center\r
          `,children:[(0,A.jsx)(`h2`,{className:`\r
              m-0\r
              w-full\r
              text-center\r
              text-[32px]\r
              font-medium\r
              leading-[1.1]\r
              tracking-[-2px]\r
              text-[#2b2c30]\r
            `,children:`Built for how Indian businesses actually work.`}),(0,A.jsx)(`p`,{className:`\r
              m-0\r
              w-full\r
              text-center\r
              text-[16px]\r
              font-normal\r
              leading-[1.2]\r
              text-[#707173]\r
            `,children:`Not a global tool with a rupee sign added on.`})]})}),(0,A.jsx)(`div`,{className:`\r
          flex\r
          w-[1200px]\r
          flex-col\r
          items-center\r
          justify-center\r
          gap-[16px]\r
        `,children:Gr.map((e,t)=>(0,A.jsx)(`div`,{className:`\r
              flex\r
              w-full\r
              items-center\r
              justify-center\r
              gap-[16px]\r
            `,children:e.map(([e,n],r)=>(0,A.jsx)(Kr,{text:e,width:n},`${t}-${r}`))},t))})]})}function Jr(){return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(`style`,{children:`
        .guide-final-frame {
          width: 1280px;
          height: 543px;
          margin: 0 auto;

          display: grid;
          grid-template-columns: 818px 437px;
          column-gap: 25px;

          background: #ffffff;

          font-family: Inter, Arial, Helvetica, sans-serif;
          box-sizing: border-box;
        }

        /* =========================================
           LEFT IMAGE
           ========================================= */

        .guide-final-left {
          width: 818px;
          height: 543px;

          border: 1px solid #e8e8e8;
          border-radius: 10px;

          background: #f8f8f8;

          overflow: hidden;
          position: relative;

          box-sizing: border-box;
        }

        .guide-final-left img {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: cover;
        }

        /* =========================================
           IMAGE SLOT
           ========================================= */

        .guide-final-image-slot {
          position: absolute;
          inset: 0;

          width: 100%;
          height: 100%;

          background: #f8f8f8;
        }

        /* =========================================
           RIGHT COLUMN
           ========================================= */

        .guide-final-right {
          width: 437px;
          height: 543px;

          display: flex;
          flex-direction: column;

          gap: 16px;

          box-sizing: border-box;
        }

        /* =========================================
           CONTENT CARDS
           ========================================= */

        .guide-final-card {
          width: 437px;
          height: 170.33px;

          flex: 0 0 170.33px;

          background: #ffffff;

          border: 1px solid #e5e5e5;

          border-radius: 16px;

          position: relative;

          padding: 24px 30px;

          box-sizing: border-box;

          overflow: hidden;
        }

        /* =========================================
           CARD NUMBERS
           ========================================= */

        .guide-final-number {
          margin: 0;

          color: #0085ff;

          font-size: 52px;
          line-height: 56px;

          font-weight: 500;

          letter-spacing: -2px;
        }

        /* =========================================
           MADE IN INDIA
           ========================================= */

        .guide-final-made {
          margin: 0;

          color: #0085ff;

          font-size: 40px;
          line-height: 46px;

          font-weight: 500;

          letter-spacing: -1.8px;
        }

        /* =========================================
           CARD DESCRIPTION
           ========================================= */

        .guide-final-card-text {
          width: 100%;

          margin: 14px 0 0;

          color: #78788d;

          font-size: 14px;
          line-height: 20px;

          font-weight: 400;
        }

        /* =========================================
           RESPONSIVE
           ========================================= */

        @media (max-width: 1350px) {
          .guide-final-frame {
            transform-origin: top center;

            transform: scale(
              min(1, calc((100vw - 32px) / 1280))
            );
          }
        }

        @media (max-width: 800px) {
          .guide-final-frame {
            width: 100%;
            height: auto;

            transform: none;

            display: flex;
            flex-direction: column;

            gap: 20px;
          }

          .guide-final-left {
            width: 100%;
            height: 400px;
          }

          .guide-final-right {
            width: 100%;
            height: auto;

            display: flex;
            flex-direction: column;

            gap: 16px;
          }

          .guide-final-card {
            width: 100%;
            height: 170.33px;

            flex: 0 0 170.33px;
          }
        }
      `}),(0,A.jsxs)(`section`,{className:`guide-final-frame`,children:[(0,A.jsx)(`div`,{className:`guide-final-left`,children:(0,A.jsx)(`div`,{className:`guide-final-image-slot`})}),(0,A.jsxs)(`div`,{className:`guide-final-right`,children:[(0,A.jsxs)(`div`,{className:`guide-final-card`,children:[(0,A.jsx)(`h3`,{className:`guide-final-number`,children:`100+`}),(0,A.jsx)(`p`,{className:`guide-final-card-text`,children:`Businesses run on Datacircles`})]}),(0,A.jsxs)(`div`,{className:`guide-final-card`,children:[(0,A.jsx)(`h3`,{className:`guide-final-number`,children:`1,00,000+`}),(0,A.jsx)(`p`,{className:`guide-final-card-text`,children:`Invoices Raised`})]}),(0,A.jsxs)(`div`,{className:`guide-final-card`,children:[(0,A.jsx)(`h3`,{className:`guide-final-made`,children:`Made in India`}),(0,A.jsx)(`p`,{className:`guide-final-card-text`,children:`Built in Mumbai, hosted in India`})]})]})]})]})}function Yr(){return(0,A.jsxs)(`div`,{className:`\r
        w-full\r
        min-w-[1440px]\r
        overflow-x-hidden\r
        overflow-y-hidden\r
      `,children:[(0,A.jsxs)(`main`,{className:`\r
          relative\r
          mx-auto\r
          h-[8200px]\r
          w-[1440px]\r
          bg-white\r
        `,children:[(0,A.jsx)(`div`,{className:`\r
            absolute\r
            left-1/2\r
            top-[30px]\r
            z-[100]\r
            -translate-x-1/2\r
          `,children:(0,A.jsx)(er,{})}),(0,A.jsx)(Ir,{}),(0,A.jsx)(Lr,{}),(0,A.jsx)(Br,{}),(0,A.jsx)(Ur,{}),(0,A.jsx)(Wr,{}),(0,A.jsx)(qr,{}),(0,A.jsx)(`div`,{className:`\r
            absolute\r
            left-1/2\r
            top-[7650px]\r
            z-[20]\r
            -translate-x-1/2\r
          `,children:(0,A.jsx)(Jr,{})})]}),(0,A.jsx)(br,{})]})}var Xr=`https://www.figma.com/api/mcp/asset/74e28dcd-28bc-4e8c-8ce4-b739298a049c.png`,Zr=`https://www.figma.com/api/mcp/asset/a89476bf-1cf4-4a50-9043-c19293a361ef.png`,Qr=`https://www.figma.com/api/mcp/asset/a619252d-e5b8-4c20-8952-8fb52abc4c6d.png`,$r=`https://www.figma.com/api/mcp/asset/385a9a88-7e6b-4f6b-bc6c-420024e495ef.png`,ei=`https://www.figma.com/api/mcp/asset/de5e423f-5c97-46a1-bc85-092d405eba9c.png`,ti=`https://www.figma.com/api/mcp/asset/9db8c0ba-c310-497e-983a-dd0f8f99f222.png`,ni=`https://www.figma.com/api/mcp/asset/11a68835-9c2f-46e1-8d25-30712ad366ee.svg`,ri=`https://www.figma.com/api/mcp/asset/38f5bfe1-ebbb-47b5-9497-12286e64ff5c.svg`,ii=`https://www.figma.com/api/mcp/asset/8ab2ce43-6a7e-4901-93b0-2514c1474a7a.svg`,ai=`https://www.figma.com/api/mcp/asset/b0477281-96c0-4e66-892d-0c8a4f1d87e8.svg`,oi=`https://www.figma.com/api/mcp/asset/25f01bb5-d7ae-4d07-aedd-149a2d9e13ec.svg`,si=`https://www.figma.com/api/mcp/asset/6248b1ed-6c9c-4545-8e73-fadc1481bbb8.svg`,ci=`https://www.figma.com/api/mcp/asset/a753caf9-f5f8-486f-a45d-31222a0b4c0a.svg`,li=`
  transition-all
  duration-200
  ease-out
  hover:-translate-y-[2px]
  hover:scale-[1.03]
  active:translate-y-0
  active:scale-[0.98]
`;function ui({className:e=``}){return(0,A.jsx)(`svg`,{className:e,width:`20`,height:`20`,viewBox:`0 0 20 20`,fill:`none`,children:(0,A.jsx)(`path`,{d:`M4 10H15M10 5L15 10L10 15`,stroke:`currentColor`,strokeWidth:`1.7`,strokeLinecap:`round`,strokeLinejoin:`round`})})}function di({children:e,width:t=`auto`,arrow:n=!1,className:r=``,onClick:i}){return(0,A.jsxs)(`button`,{type:`button`,onClick:i,style:{width:t},className:`
        group relative flex h-12 items-center justify-center
        gap-2 overflow-hidden rounded-full
        bg-[#0085ff] px-5
        text-[16px] font-medium text-white
        shadow-[0_4px_12px_rgba(0,133,255,0.18)]
        transition-all duration-300
        hover:-translate-y-[2px]
        hover:shadow-[0_10px_24px_rgba(0,133,255,0.25)]
        active:translate-y-0
        ${r}
      `,children:[(0,A.jsx)(`span`,{className:`\r
          pointer-events-none absolute inset-0\r
          -translate-x-full\r
          bg-gradient-to-r\r
          from-transparent via-white/20 to-transparent\r
          transition-transform duration-700\r
          group-hover:translate-x-full\r
        `}),(0,A.jsx)(`span`,{className:`relative z-10 whitespace-nowrap`,children:e}),n&&(0,A.jsx)(ui,{className:`relative z-10 transition-transform duration-300 group-hover:translate-x-1`})]})}function fi(){return(0,A.jsxs)(`section`,{id:`home`,className:`\r
        relative overflow-hidden\r
        bg-white\r
        pt-[155px]\r
        md:pt-[175px]\r
      `,children:[(0,A.jsx)(`div`,{className:`\r
          absolute\r
          left-1/2\r
          top-[0.7%]\r
          z-50\r
          -translate-x-1/2\r
          scale-[0.5]\r
          min-[1000px]:scale-[0.75]\r
          min-[1400px]:scale-100\r
        `,children:(0,A.jsx)(er,{})}),(0,A.jsx)(`div`,{className:`\r
          pointer-events-none\r
          absolute\r
          left-1/2\r
          top-[-260px]\r
          h-[700px]\r
          w-[1000px]\r
          -translate-x-1/2\r
          rounded-full\r
          bg-[#0085ff]/[0.045]\r
          blur-[90px]\r
        `}),(0,A.jsxs)(`div`,{className:`\r
          relative\r
          mx-auto\r
          flex\r
          max-w-[1600px]\r
          flex-col\r
          items-center\r
          px-5\r
        `,children:[(0,A.jsxs)(`div`,{className:`\r
            flex\r
            items-center\r
            gap-[5px]\r
            rounded-full\r
            bg-[#ebe6e0]\r
            px-[10px]\r
            py-[4px]\r
          `,children:[(0,A.jsx)(`span`,{className:`h-[6px] w-[6px] rounded-full bg-[#0085ff]`}),(0,A.jsx)(`span`,{className:`\r
              text-center\r
              text-[11.4px]\r
              leading-[16.8px]\r
              text-[#231014]\r
            `,children:`CRM + Invoicing Infrastructure`})]}),(0,A.jsx)(`h1`,{className:`\r
            mt-8\r
            max-w-[850px]\r
            text-center\r
            text-[42px]\r
            font-medium\r
            leading-[1.05]\r
            tracking-[-2.7px]\r
            text-[#231014]\r
            sm:text-[48px]\r
            md:text-[51px]\r
          `,children:`Never lose a lead again`}),(0,A.jsxs)(`p`,{className:`\r
            mt-6\r
            max-w-[685px]\r
            text-center\r
            text-[14px]\r
            leading-[1.48]\r
            text-[#635557]\r
            md:text-[13.2px]\r
          `,children:[`Capture every enquiry, follow up on time, and move deals through your own pipeline.`,(0,A.jsx)(`br`,{}),`When you win, the invoice is one click away.`]}),(0,A.jsxs)(`div`,{className:`mt-7 flex flex-col items-center`,children:[(0,A.jsxs)(`div`,{className:`flex flex-col gap-[10px] sm:flex-row`,children:[(0,A.jsx)(di,{width:`149px`,children:`Start Free`}),(0,A.jsx)(`button`,{type:`button`,className:`
                flex
                h-[49px]
                w-[148px]
                items-center
                justify-center
                rounded-full
                bg-[#e5edf5]
                text-[15.3px]
                font-medium
                text-[#231014]
                ${li}
              `,children:`Book a Demo`})]}),(0,A.jsx)(`p`,{className:`\r
              mt-2\r
              text-center\r
              text-[9px]\r
              leading-[19.6px]\r
              text-[#635557]\r
            `,children:`7-day free trial · No card required · GST-ready · Works on any device`})]}),(0,A.jsxs)(`div`,{className:`\r
            relative\r
            mt-14\r
            w-full\r
            max-w-[1258px]\r
            overflow-hidden\r
            rounded-[30px]\r
            border\r
            border-white\r
            bg-white\r
            shadow-[0_20px_70px_rgba(0,133,255,0.10)]\r
          `,children:[(0,A.jsx)(`img`,{src:Xr,alt:`DataCircles CRM dashboard`,className:`\r
              block\r
              h-auto\r
              w-full\r
              object-cover\r
              object-top\r
            `}),(0,A.jsx)(`div`,{className:`\r
              pointer-events-none\r
              absolute\r
              inset-x-0\r
              bottom-0\r
              h-[35%]\r
              bg-gradient-to-b\r
              from-transparent\r
              to-white\r
            `})]})]}),(0,A.jsx)(tr,{})]})}function pi(){let e=[`Enquiries scattered across WhatsApp, email and phone calls`,`No record of who promised what, and when`,`Follow-ups that depend entirely on somebody's memory`,`No clear view of which deals are actually close to closing`];return(0,A.jsxs)(`section`,{className:`\r
        mx-auto\r
        flex\r
        max-w-[1216px]\r
        flex-col\r
        gap-10\r
        px-6\r
        py-20\r
        md:flex-row\r
        md:items-center\r
        md:gap-20\r
        md:px-0\r
      `,children:[(0,A.jsxs)(`div`,{className:`\r
          relative\r
          h-[460px]\r
          w-full\r
          shrink-0\r
          overflow-hidden\r
          rounded-[16px]\r
          md:h-[720px]\r
          md:w-[600px]\r
        `,children:[(0,A.jsx)(`img`,{src:Zr,alt:``,className:`\r
            absolute\r
            inset-0\r
            h-full\r
            w-full\r
            object-cover\r
          `}),(0,A.jsx)(`img`,{src:Qr,alt:``,className:`\r
            absolute\r
            inset-0\r
            h-full\r
            w-full\r
            rounded-[16px]\r
            object-cover\r
          `})]}),(0,A.jsxs)(`div`,{className:`\r
          flex\r
          min-w-0\r
          flex-1\r
          flex-col\r
          gap-8\r
        `,children:[(0,A.jsxs)(`div`,{className:`flex flex-col gap-[14px]`,children:[(0,A.jsx)(`h2`,{className:`\r
              text-[30px]\r
              font-medium\r
              leading-[1.1]\r
              tracking-[-2px]\r
              text-[#2b2c30]\r
              md:text-[32px]\r
            `,children:`Leads don't go cold on purpose.`}),(0,A.jsx)(`p`,{className:`\r
              text-[16px]\r
              leading-[1.2]\r
              text-[#707173]\r
            `,children:`They slip. An enquiry comes in on WhatsApp, someone means to call back on Thursday, and by Monday it's buried under twenty newer messages. The lead was never lost because the work was bad. It was lost because nobody remembered.`})]}),(0,A.jsx)(`div`,{className:`flex flex-col`,children:e.map((t,n)=>(0,A.jsxs)(x.Fragment,{children:[(0,A.jsx)(`div`,{className:`h-px w-full bg-[#e0e0e1]`}),(0,A.jsxs)(`div`,{className:`flex items-start gap-4 py-5`,children:[(0,A.jsx)(`span`,{className:`mt-1 text-[18px] text-[#2b2c30]`,children:`•`}),(0,A.jsx)(`p`,{className:`\r
                    text-[18px]\r
                    leading-[1.2]\r
                    tracking-[-1px]\r
                    text-[#2b2c30]\r
                  `,children:t})]}),n===e.length-1&&(0,A.jsx)(`div`,{className:`h-px w-full bg-[#e0e0e1]`})]},t))}),(0,A.jsx)(di,{width:`174px`,arrow:!0,children:`Explore CRM`})]})]})}var mi=[`Capture`,`Convert`,`Remember`,`Followup`],hi={Capture:{pill:`Capture`,badge:`Lead Capture`,title:`Every enquiry, in one list.`,description:`Add leads yourself, bring them in from your website forms, or import your existing list from Excel. However the enquiry arrives, it lands in the same place, with the details you need attached.`,bullets:[`Website Forms`,`Manual Entry`,`CSV & Excel Import`,`Custom Fields`,`Tags`],button:`Explore Product`},Convert:{pill:`Convert`,badge:`The core CRM Promise`,title:`Your pipeline, Your Stages`,description:`Set the stages your business actually uses, then drag deals across as they progress. See deal values by stage, so you know what's real and what's still hopeful.`,bullets:[`Custom Stages`,`Deal Values`,`Multiple Pipelines`,`Won & Lost Tracking`],button:`Explore Deal Management`},Remember:{pill:`Remember`,badge:`Contact & Companies`,title:`One record per client, not five scattered notes.`,description:`Every contact sits under the company they work for, with their deals, invoices, tasks, meetings, notes and files in the same place. Anyone on your team can pick up a client cold and know exactly where things stand.`,bullets:[`Companies`,`Contacts`,`Files & Notes`,`Full History`],button:`View Company Management`},Followup:{pill:`Followup`,badge:`Growth & Business`,title:`The system remembers, so you don't have to.`,description:`Set tasks with priorities, schedule meetings, and see everything due today on one calendar. Rotten deal alerts flag the deals that have gone quiet, before they go cold for good.`,bullets:[`Tasks & Priorities`,`Meetings`,`Shared Calendar`,`Rotten Deal Alerts`],button:`Explore CRM`}};function gi(){let[e,t]=(0,x.useState)(`Capture`),n=hi[e];return(0,A.jsxs)(`section`,{className:`\r
        mx-auto\r
        flex\r
        max-w-[1216px]\r
        flex-col\r
        items-center\r
        gap-14\r
        px-6\r
        py-20\r
        md:px-0\r
      `,children:[(0,A.jsxs)(`div`,{className:`\r
          flex\r
          w-full\r
          max-w-[1000px]\r
          flex-col\r
          items-center\r
          gap-8\r
        `,children:[(0,A.jsxs)(`div`,{className:`text-center`,children:[(0,A.jsx)(`h2`,{className:`\r
              text-[30px]\r
              font-medium\r
              tracking-[-2px]\r
              text-[#2b2c30]\r
              md:text-[32px]\r
            `,children:`Capture every opportunity.`}),(0,A.jsx)(`p`,{className:`\r
              mt-[14px]\r
              text-[16px]\r
              leading-[1.2]\r
              text-[#707173]\r
            `,children:`However the enquiry arrives, it lands in the same place.`})]}),(0,A.jsx)(`div`,{className:`\r
            flex\r
            flex-wrap\r
            items-center\r
            justify-center\r
            rounded-full\r
            border\r
            border-[#ececec]\r
            bg-[#f8f8f8]\r
            p-1\r
          `,children:mi.map(n=>(0,A.jsx)(`button`,{type:`button`,onClick:()=>t(n),"aria-pressed":e===n,className:`
                h-10
                min-w-[130px]
                rounded-full
                px-4
                text-[14px]
                transition-all
                duration-300
                ${e===n?`bg-[#0085ff] font-medium text-white shadow-[0_3px_10px_rgba(0,133,255,0.18)]`:`text-[#78788d] hover:bg-white hover:text-[#1c1c1d]`}
              `,children:n},n))})]}),(0,A.jsxs)(`div`,{className:`\r
          flex\r
          w-full\r
          flex-col\r
          items-center\r
          gap-10\r
          md:flex-row\r
          md:gap-12\r
        `,children:[(0,A.jsxs)(`div`,{className:`flex flex-1 flex-col gap-8`,children:[(0,A.jsxs)(`div`,{className:`flex flex-col gap-6`,children:[(0,A.jsxs)(`div`,{className:`\r
                flex\r
                w-fit\r
                items-center\r
                gap-2\r
                rounded-full\r
                border\r
                border-[#ececec]\r
                bg-[#f8f8f8]\r
                px-3\r
                py-1.5\r
              `,children:[(0,A.jsx)(`img`,{src:ni,alt:``,className:`h-5 w-5`}),(0,A.jsx)(`span`,{className:`\r
                  text-[14px]\r
                  font-medium\r
                  text-[#78788d]\r
                `,children:n.badge})]}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`h3`,{className:`\r
                  max-w-[570px]\r
                  text-[34px]\r
                  font-medium\r
                  leading-[1.1]\r
                  tracking-[-1.5px]\r
                  text-[#1c1c1d]\r
                  md:text-[40px]\r
                `,children:n.title}),(0,A.jsx)(`p`,{className:`\r
                  mt-4\r
                  max-w-[569px]\r
                  text-[16px]\r
                  leading-[1.4]\r
                  text-[#78788d]\r
                `,children:n.description})]})]}),(0,A.jsx)(`div`,{className:`flex flex-col gap-4`,children:n.bullets.map(t=>(0,A.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,A.jsx)(_i,{}),(0,A.jsx)(`span`,{className:`\r
                    text-[16px]\r
                    font-medium\r
                    text-[#1c1c1d]\r
                  `,children:t})]},`${e}-${t}`))}),(0,A.jsx)(di,{width:`auto`,arrow:!0,className:`self-start px-5`,children:n.button})]}),(0,A.jsx)(`div`,{className:`\r
            relative\r
            h-[320px]\r
            w-full\r
            shrink-0\r
            overflow-hidden\r
            rounded-lg\r
            border\r
            border-[#ececec]\r
            bg-[#f8f8f8]\r
            md:h-[468px]\r
            md:w-[620px]\r
          `,children:(0,A.jsx)(`div`,{className:`\r
              absolute\r
              inset-0\r
              bg-gradient-to-br\r
              from-[#fafafa]\r
              via-[#f7f7f7]\r
              to-[#f3f3f3]\r
            `})})]},e)]})}function _i(){return(0,A.jsx)(`img`,{src:ri,alt:``,className:`h-[22px] w-[22px]`})}function vi(){return(0,A.jsxs)(`section`,{className:`\r
        mx-auto\r
        flex\r
        max-w-[1216px]\r
        flex-col\r
        items-center\r
        gap-14\r
        px-6\r
        py-20\r
        md:px-0\r
      `,children:[(0,A.jsxs)(`div`,{className:`max-w-[728px] text-center`,children:[(0,A.jsx)(`h2`,{className:`\r
            text-[30px]\r
            font-medium\r
            tracking-[-2px]\r
            text-[#2b2c30]\r
            md:text-[32px]\r
          `,children:`The full history, in order.`}),(0,A.jsx)(`p`,{className:`\r
            mt-[14px]\r
            text-[16px]\r
            leading-[1.2]\r
            text-[#707173]\r
          `,children:`Every call logged, deal moved, invoice raised and payment received shows up on one timeline against the client.`})]}),(0,A.jsx)(`div`,{className:`\r
          w-full\r
          overflow-hidden\r
          rounded-lg\r
          border\r
          border-[#ececec]\r
          bg-white\r
        `,children:(0,A.jsx)(`img`,{src:$r,alt:`CRM activity timeline`,className:`\r
            block\r
            h-auto\r
            w-full\r
            object-cover\r
          `})})]})}function yi(){return(0,A.jsx)(`section`,{className:`\r
        mx-auto\r
        max-w-[1216px]\r
        px-6\r
        py-20\r
        md:px-0\r
      `,children:(0,A.jsxs)(`div`,{className:`\r
          flex\r
          min-h-[588px]\r
          flex-col\r
          overflow-hidden\r
          rounded-lg\r
          bg-white\r
          md:flex-row\r
        `,children:[(0,A.jsxs)(`div`,{className:`\r
            flex\r
            w-full\r
            flex-col\r
            justify-between\r
            py-10\r
            pr-8\r
            md:w-[550px]\r
          `,children:[(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`p`,{className:`text-[16px] font-medium text-[#0085ff]`,children:`Measure`}),(0,A.jsx)(`h2`,{className:`\r
                mt-2\r
                text-[24px]\r
                font-semibold\r
                tracking-[-0.72px]\r
                text-[#1e1e1e]\r
              `,children:`Know what's working`}),(0,A.jsx)(`p`,{className:`\r
                mt-3\r
                text-[16px]\r
                leading-6\r
                text-[#252525]\r
              `,children:`Dashboards show revenue, deals closed, average deal size and what's sitting in your pipeline. Included on every plan.`})]}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`div`,{className:`flex flex-wrap gap-2`,children:[`Revenue`,`Deals won & lost`,`Average deal size`,`Pipeline value`].map(e=>(0,A.jsx)(`span`,{className:`\r
                    rounded-full\r
                    border\r
                    border-[rgba(0,133,255,0.3)]\r
                    bg-[rgba(0,133,255,0.1)]\r
                    px-4\r
                    py-2\r
                    text-[12px]\r
                    font-semibold\r
                    text-[#0a55af]\r
                  `,children:e},e))}),(0,A.jsx)(`button`,{type:`button`,className:`\r
                mt-8\r
                text-[16px]\r
                font-bold\r
                text-[#0085ff]\r
                transition-transform\r
                duration-300\r
                hover:translate-x-1\r
              `,children:`Explore CRM →`})]})]}),(0,A.jsx)(`div`,{className:`\r
            min-h-[500px]\r
            flex-1\r
            overflow-hidden\r
          `,children:(0,A.jsxs)(`div`,{className:`relative h-full w-full`,children:[(0,A.jsx)(`img`,{src:ei,alt:``,className:`\r
                absolute\r
                inset-0\r
                h-full\r
                w-full\r
                object-cover\r
              `}),(0,A.jsx)(`img`,{src:ti,alt:``,className:`\r
                absolute\r
                left-0\r
                top-1/2\r
                w-full\r
                -translate-y-1/2\r
                object-cover\r
              `})]})})]})})}var bi=[{icon:ai,title:`Negotiations`,description:`Keep the client, deal and commercial details together.`},{icon:oi,title:`Deal Won`,description:`Move the successful deal straight into invoicing.`},{icon:ci,title:`Quote or Invoice`,description:`Turn the deal into the next step without retyping information.`},{icon:si,title:`Payment Received`,description:`Keep the payment status connected to the original deal.`}];function xi(){return(0,A.jsx)(`section`,{className:`\r
        mx-auto\r
        max-w-[1280px]\r
        px-6\r
        py-20\r
        md:px-0\r
      `,children:(0,A.jsxs)(`div`,{className:`\r
          flex\r
          flex-col\r
          gap-12\r
          rounded-xl\r
          bg-[#f3f9fc]\r
          p-8\r
          lg:flex-row\r
          lg:items-center\r
        `,children:[(0,A.jsxs)(`div`,{className:`w-full lg:w-[580px]`,children:[(0,A.jsx)(`h2`,{className:`\r
              max-w-[480px]\r
              text-[30px]\r
              font-medium\r
              leading-[1.2]\r
              tracking-[-2px]\r
              text-[#1c1c1d]\r
              md:text-[32px]\r
            `,children:`Won the deal? The invoice is already half written.`}),(0,A.jsxs)(`div`,{className:`mt-6 flex flex-col gap-[18px]`,children:[(0,A.jsx)(`p`,{className:`\r
                text-[18px]\r
                leading-[1.4]\r
                text-[#78788d]\r
              `,children:`This is what a CRM bolted onto a separate billing app can never do. The client details, the amount and the line items are already in the deal.`}),(0,A.jsx)(`div`,{className:`h-px w-full bg-[#bedeef]`}),(0,A.jsx)(`p`,{className:`\r
                text-[18px]\r
                leading-[1.4]\r
                text-[#78788d]\r
              `,children:`Turn it into a quote or a GST invoice without typing any of it twice.`})]}),(0,A.jsx)(`button`,{type:`button`,className:`\r
              mt-8\r
              text-[16px]\r
              font-bold\r
              text-[#0085ff]\r
              transition-transform\r
              duration-300\r
              hover:translate-x-1\r
            `,children:`See How Invoicing Works →`})]}),(0,A.jsx)(`div`,{className:`\r
            grid\r
            flex-1\r
            grid-cols-1\r
            gap-5\r
            sm:grid-cols-2\r
          `,children:bi.map((e,t)=>(0,A.jsxs)(`div`,{className:`
                rounded-2xl
                border
                border-[#ececec]
                bg-white
                p-6
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_12px_30px_rgba(0,0,0,0.07)]
                ${t%2==1?`sm:translate-y-[60px]`:``}
              `,children:[(0,A.jsx)(`div`,{className:`\r
                  flex\r
                  h-10\r
                  w-10\r
                  items-center\r
                  justify-center\r
                  rounded-[27px]\r
                  bg-[rgba(0,133,255,0.08)]\r
                `,children:(0,A.jsx)(`img`,{src:e.icon,alt:``,className:`h-5 w-5`})}),(0,A.jsx)(`h3`,{className:`\r
                  mt-[18px]\r
                  text-[20px]\r
                  font-medium\r
                  text-[#1c1c1d]\r
                `,children:e.title}),(0,A.jsx)(`p`,{className:`\r
                  mt-2\r
                  text-[14px]\r
                  leading-[1.3]\r
                  text-[#78788d]\r
                `,children:e.description})]},e.title))})]})})}var Si=[`Works on Any Phone`,`WhatsApp Enquiries`,`Website Leads`,`Excel Import`,`Custom Pipelines`,`Tasks & Priorities`,`Meetings`,`Shared Calendar`,`GST Invoices`,`Payment Tracking`,`Deal Tracking`,`Team Collaboration`,`Client History`,`Files & Notes`];function Ci(){return(0,A.jsxs)(`section`,{className:`\r
        mx-auto\r
        flex\r
        max-w-[1200px]\r
        flex-col\r
        items-center\r
        px-6\r
        py-20\r
      `,children:[(0,A.jsx)(`h2`,{className:`\r
          text-center\r
          text-[30px]\r
          font-medium\r
          tracking-[-2px]\r
          text-[#2b2c30]\r
          md:text-[32px]\r
        `,children:`Made for how you already work`}),(0,A.jsx)(`div`,{className:`\r
          mt-14\r
          flex\r
          max-w-[1100px]\r
          flex-wrap\r
          justify-center\r
          gap-4\r
        `,children:Si.map((e,t)=>(0,A.jsxs)(`div`,{className:`\r
              flex\r
              items-center\r
              gap-2.5\r
              rounded-full\r
              border\r
              border-dashed\r
              border-[#ececec]\r
              bg-[#f8f8f8]\r
              px-5\r
              py-4\r
              transition-all\r
              duration-300\r
              hover:-translate-y-1\r
              hover:border-[#0085ff]/30\r
              hover:bg-white\r
              hover:shadow-[0_8px_20px_rgba(0,133,255,0.07)]\r
            `,children:[(0,A.jsx)(`img`,{src:ii,alt:``,className:`h-[18px] w-[18px]`}),(0,A.jsx)(`span`,{className:`\r
                whitespace-nowrap\r
                text-[16px]\r
                text-[#1c1c1d]\r
              `,children:e})]},`${e}-${t}`))})]})}function wi(){return(0,A.jsxs)(`main`,{className:`min-h-screen overflow-x-hidden bg-white`,children:[(0,A.jsx)(fi,{}),(0,A.jsx)(pi,{}),(0,A.jsx)(gi,{}),(0,A.jsx)(vi,{}),(0,A.jsx)(yi,{}),(0,A.jsx)(xi,{}),(0,A.jsx)(Ci,{}),(0,A.jsx)(ar,{}),(0,A.jsx)(br,{})]})}var Ti=[{icon:`dist/assets/apartment.svg`,label:`Total Invoiced`,amount:`₹17,28,339`,change:`12.4%`,changeText:`vs prev. 30 days`,description:`Everything you've billed`,positive:!0},{icon:`dist/assets/corporate_fare.svg`,label:`Pending`,amount:`₹82,93,898`,change:`in the last 30 days`,description:`Sent, not yet due`,positive:!0},{icon:`dist/assets/domain_add.svg`,label:`Overdue`,amount:`₹12,93,898`,change:`7.3%`,changeText:`vs prev. 30 days`,description:`Past the date`,positive:!1},{icon:`dist/assets/update.svg`,label:`Collected`,amount:`₹2,93,898`,change:`12.4%`,changeText:`vs prev. 30 days`,description:`Money in the bank`,positive:!0}],Ei=()=>(0,A.jsxs)(`section`,{className:`mx-auto mt-12 sm:mt-16 md:mt-24 h-auto w-full max-w-[1280px] rounded-[20px] bg-[#F3F9FC] pt-[28px] sm:pt-[33px] pb-[28px] sm:pb-[33px] px-4 sm:px-6 md:px-0`,children:[(0,A.jsx)(`div`,{className:`mx-auto flex h-auto w-full max-w-[480px] items-center justify-center text-center`,children:(0,A.jsx)(`h2`,{className:`whitespace-normal sm:whitespace-nowrap font-inter text-[24px] sm:text-[28px] md:text-[32px] font-medium leading-[1.2] md:leading-[38px] tracking-[-1px] md:tracking-[-2px] text-black`,children:`Invoiced, pending, overdue, collected.`})}),(0,A.jsx)(`div`,{className:`mx-auto mt-[12px] flex h-auto w-full max-w-[848px] items-center justify-center text-center`,children:(0,A.jsx)(`p`,{className:`font-inter text-[15px] sm:text-[16px] md:text-[18px] font-normal leading-[22px] md:leading-[25px] text-[#78788D]`,children:`Four numbers that tell you where your business actually stands. Open the dashboard and you know what's come in, what's still out there, and what's late enough to worry about.`})}),(0,A.jsx)(`div`,{className:`mx-auto mt-[18px] flex h-auto w-full max-w-[1216px] flex-col sm:flex-row sm:flex-wrap md:flex-nowrap justify-between gap-3 sm:gap-3 md:gap-0`,children:Ti.map(e=>(0,A.jsxs)(`div`,{className:`flex h-auto min-h-[112px] w-full sm:w-[calc(50%-6px)] md:w-[279px] items-center rounded-[10px] border border-[#E0E0E1] bg-white px-[12px] py-3 md:py-0`,children:[(0,A.jsx)(`div`,{className:`flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-[5px] border border-[#E0E0E1]`,children:(0,A.jsx)(`img`,{src:e.icon,alt:``,className:`h-[40px] w-[40px] object-contain`})}),(0,A.jsxs)(`div`,{className:`ml-[12px] flex h-auto flex-1 flex-col justify-center`,children:[(0,A.jsx)(`p`,{className:`font-inter text-[12px] font-normal leading-[14px] text-[#707173]`,children:e.label}),(0,A.jsx)(`p`,{className:`font-inter text-[18px] font-medium leading-[20px] ${e.positive===!1?`text-[#FF3B30]`:e.label===`Collected`?`text-[#00B956]`:`text-black`}`,children:e.amount}),(0,A.jsxs)(`div`,{className:`flex items-center flex-wrap gap-[4px]`,children:[e.positive!==void 0&&(0,A.jsxs)(`span`,{className:`font-inter text-[10px] font-medium ${e.positive?`text-[#00B956]`:`text-[#FF3B30]`}`,children:[e.positive?`▲`:`▼`,` `,e.change]}),e.changeText&&(0,A.jsx)(`span`,{className:`font-inter text-[10px] font-normal text-[#707173]`,children:e.changeText})]}),(0,A.jsx)(`p`,{className:`mt-[2px] font-inter text-[12px] font-normal leading-[14px] text-[#707173]`,children:e.description})]})]},e.label))})]}),Di=({image:e,imageAlt:t=`Explore`,label:n,heading:r,paragraph:i,pills:a=[],linkText:o})=>(0,A.jsxs)(`section`,{className:`mx-auto mt-12 sm:mt-16 md:mt-24 flex h-auto w-full max-w-[1216px] flex-col md:flex-row overflow-hidden rounded-[20px] bg-white px-4 sm:px-6 md:px-0`,children:[(0,A.jsx)(`div`,{className:`h-[220px] sm:h-[320px] md:h-[588px] w-full md:w-[666px] shrink-0`,children:(0,A.jsx)(`img`,{src:e,alt:t,className:`h-full w-full object-cover`})}),(0,A.jsxs)(`div`,{className:`flex h-auto w-full md:w-[550px] flex-col`,children:[(0,A.jsxs)(`div`,{className:`h-auto w-full`,children:[(0,A.jsx)(`div`,{className:`ml-0 sm:ml-6 md:ml-8 mt-6 md:mt-0 pt-0 md:pt-8`,children:(0,A.jsx)(`p`,{className:`font-inter text-[15px] sm:text-[16px] font-medium leading-[24px] text-[#0085FF]`,children:n})}),(0,A.jsx)(`div`,{className:`ml-0 sm:ml-6 md:ml-8 mt-2`,children:(0,A.jsx)(`h2`,{className:`font-inter text-[20px] sm:text-[22px] md:text-[24px] font-semibold leading-[1.25] md:leading-[28px] text-black`,children:r})}),(0,A.jsx)(`div`,{className:`ml-0 sm:ml-6 md:ml-8 mt-2 w-full md:w-[490px]`,children:(0,A.jsx)(`p`,{className:`font-inter text-[15px] sm:text-[16px] font-normal leading-[24px] text-[#252525]`,children:i})})]}),(0,A.jsxs)(`div`,{className:`mt-6 md:mt-auto mb-6 md:mb-8 ml-0 sm:ml-6 md:ml-8 h-auto w-full md:w-[324px]`,children:[(0,A.jsx)(`div`,{className:`flex flex-wrap gap-x-1 gap-y-1`,children:a.map((e,t)=>(0,A.jsx)(`div`,{className:`flex w-max items-center rounded-full border border-[#0085FF4D] bg-[#0085FF1A] px-4 py-2`,children:(0,A.jsx)(`span`,{className:`whitespace-nowrap font-inter text-[13px] font-semibold text-[#0085FF]`,children:e})},t))}),(0,A.jsxs)(`button`,{type:`button`,className:`mt-4 ml-2 flex items-center gap-2 font-inter text-[14px] font-semibold text-[#0085FF]`,children:[(0,A.jsx)(`span`,{children:o}),(0,A.jsx)(`span`,{className:`text-[18px] leading-none`,children:`→`})]})]})]})]}),Oi=()=>(0,A.jsxs)(`div`,{className:`min-h-screen w-full bg-white overflow-x-hidden`,children:[(0,A.jsx)(`div`,{className:`mb-5 h-[18px] w-full bg-[#ABABAB]`}),(0,A.jsx)(er,{}),(0,A.jsxs)(`main`,{className:`w-full`,children:[(0,A.jsxs)(`section`,{className:`flex h-auto w-full flex-col items-center mt-12 md:mt-16 lg:mt-20 px-4 sm:px-6`,children:[(0,A.jsxs)(`div`,{className:`flex h-[25px] w-[160px] items-center justify-start gap-2 rounded-full px-3 bg-[#EBE6E033]`,children:[(0,A.jsx)(`span`,{className:`h-[7px] w-[7px] rounded-full bg-[#0085FF]`}),(0,A.jsx)(`span`,{className:`font-inter text-[11px] font-normal text-black`,children:`Payment Infrastructure`})]}),(0,A.jsx)(`div`,{className:`mt-6 flex h-auto w-full max-w-[635px] items-center justify-center text-center`,children:(0,A.jsxs)(`h1`,{className:`font-inter text-[32px] sm:text-[40px] md:text-[48px] font-semibold leading-[1.1] text-black`,children:[`Know exactly who`,(0,A.jsx)(`br`,{}),`owes you what.`]})}),(0,A.jsx)(`div`,{className:`mt-3 flex h-auto w-full max-w-[635px] items-center justify-center text-center`,children:(0,A.jsxs)(`p`,{className:`font-inter text-[14px] sm:text-[15px] md:text-[16px] font-normal leading-[20px] text-black/60`,children:[`Track every invoice from sent to settled, let reminders do the chasing,`,(0,A.jsx)(`br`,{className:`hidden sm:block`}),`and see your money at a glance instead of guessing.`]})}),(0,A.jsxs)(`div`,{className:`mt-5 flex h-auto w-full max-w-[307px] flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0`,children:[(0,A.jsx)(`button`,{className:`flex h-[49px] w-full sm:w-[149px] items-center justify-center rounded-full bg-[#E5EDF5] font-inter text-[14px] font-medium text-black transition-colors duration-200 hover:bg-[#0085FF] hover:text-white`,children:`Get Started`}),(0,A.jsx)(`button`,{className:`flex h-[49px] w-full sm:w-[149px] items-center justify-center rounded-full bg-[#E5EDF5] font-inter text-[14px] font-medium text-black transition-colors duration-200 hover:bg-[#0085FF] hover:text-white`,children:`Learn More`})]}),(0,A.jsx)(`div`,{className:`mt-5 flex h-auto w-full max-w-[291px] items-center justify-center text-center`,children:(0,A.jsx)(`p`,{className:`font-inter text-[11px] sm:text-[12px] whitespace-normal sm:whitespace-nowrap font-normal text-black/50`,children:`7-day free trial · No card required · GST-ready · Works on any device`})})]}),(0,A.jsx)(`div`,{className:`mt-8 w-full`,children:(0,A.jsx)(`img`,{src:`https://ik.imagekit.io/qiap0iq38/DATACIRCLES_PROJECT/PAYMENTS/Hero%20Sction%20(1).png`,alt:`Payment`,className:`h-auto w-full object-cover`})}),(0,A.jsx)(tr,{}),(0,A.jsxs)(`section`,{className:`mx-auto mt-16 md:mt-20 flex h-auto w-full max-w-[1200px] flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-0 gap-8 lg:gap-0`,children:[(0,A.jsx)(`div`,{className:`h-[300px] sm:h-[420px] lg:h-[720px] w-full lg:w-[600px] overflow-hidden rounded-[24px]`,children:(0,A.jsx)(`img`,{src:`https://ik.imagekit.io/qiap0iq38/DATACIRCLES_PROJECT/PAYMENTS/Rectangle%20147943%20(1).png`,alt:`Invoicing`,className:`h-full w-full object-cover`})}),(0,A.jsxs)(`div`,{className:`flex h-auto w-full lg:w-[536px] flex-col`,children:[(0,A.jsx)(`div`,{className:`flex h-auto w-full lg:w-[438px] items-start`,children:(0,A.jsxs)(`h2`,{className:`font-inter text-[24px] sm:text-[28px] md:text-[32px] font-medium leading-[1.2] md:leading-[35px] text-black`,children:[`Sending the invoice was the easy part.`,(0,A.jsx)(`br`,{})]})}),(0,A.jsx)(`div`,{className:`mt-6 flex h-auto w-full`,children:(0,A.jsx)(`p`,{className:`font-inter text-[15px] sm:text-[16px] font-normal leading-[24px] text-[#707173]`,children:`Then comes the awkward bit. Was that one paid? Did anyone follow up? You don't want to annoy a good client by asking twice, and you don't want to write off money because nobody asked at all. So the chasing gets delayed, and the cash comes in later than it should.`})}),(0,A.jsxs)(`div`,{className:`mt-8 flex h-auto w-full flex-col`,children:[(0,A.jsxs)(`div`,{className:`flex h-auto min-h-[60px] sm:h-[77px] w-full items-center border-b border-[#E0E0E1] py-3 sm:py-0`,children:[(0,A.jsx)(`span`,{className:`mr-4 h-[8px] w-[8px] shrink-0 rounded-full bg-[#0085FF]`}),(0,A.jsx)(`p`,{className:`font-inter text-[16px] sm:text-[18px] md:text-[20px] font-normal text-black`,children:`No single view of what's still outstanding`})]}),(0,A.jsxs)(`div`,{className:`flex h-auto min-h-[60px] sm:h-[77px] w-full items-center border-b border-[#E0E0E1] py-3 sm:py-0`,children:[(0,A.jsx)(`span`,{className:`mr-4 h-[8px] w-[8px] shrink-0 rounded-full bg-[#0085FF]`}),(0,A.jsx)(`p`,{className:`font-inter text-[16px] sm:text-[18px] md:text-[20px] font-normal text-black`,children:`Payments chased from memory, or not chased at all`})]}),(0,A.jsxs)(`div`,{className:`flex h-auto min-h-[60px] sm:h-[77px] w-full items-center border-b border-[#E0E0E1] py-3 sm:py-0`,children:[(0,A.jsx)(`span`,{className:`mr-4 h-[8px] w-[8px] shrink-0 rounded-full bg-[#0085FF]`}),(0,A.jsx)(`p`,{className:`font-inter text-[16px] sm:text-[18px] md:text-[20px] font-normal text-black`,children:`Awkward reminder messages nobody wants to write`})]}),(0,A.jsxs)(`div`,{className:`flex h-auto min-h-[60px] sm:h-[77px] w-full items-center py-3 sm:py-0`,children:[(0,A.jsx)(`span`,{className:`mr-4 h-[8px] w-[8px] shrink-0 rounded-full bg-[#0085FF]`}),(0,A.jsx)(`p`,{className:`font-inter text-[16px] sm:text-[18px] md:text-[20px] font-normal text-black`,children:`Cash flow you can only guess at until the month ends`})]})]}),(0,A.jsx)(`div`,{className:`mt-8 lg:mt-auto flex h-[52px] w-full sm:w-[200px]`,children:(0,A.jsxs)(`button`,{className:`flex h-[52px] w-full sm:w-[200px] items-center justify-center gap-3 rounded-full bg-[#0085FF] font-inter text-[16px] font-medium text-white transition-colors duration-200 hover:bg-black`,children:[(0,A.jsx)(`span`,{children:`Explore Payments`}),(0,A.jsx)(`span`,{className:`text-[20px] leading-none`,children:`→`})]})})]})]}),(0,A.jsx)(Ei,{}),(0,A.jsx)(Di,{image:`https://ik.imagekit.io/qiap0iq38/DATACIRCLES_PROJECT/PAYMENTS/Explore1`,imageAlt:`Payment tracking`,label:`Catch it`,heading:`The late ones surface themselves.`,paragraph:`Overdue invoices are flagged the moment they cross the line, so late payments get noticed in days rather than discovered at the end of the quarter.`,pills:[`Overdue dates`,`Due-date tracking`,`Activity timeline entries`],linkText:`Explore Payments`}),(0,A.jsx)(Di,{image:`https://ik.imagekit.io/qiap0iq38/DATACIRCLES_PROJECT/PAYMENTS/Explore1`,imageAlt:`Automation reminders`,label:`Chase it`,heading:`Polite, on time, and not from you.`,paragraph:`Reminders go out on schedule so you don't have to write the uncomfortable message. Most clients aren't refusing to pay, they've just forgotten, and a nudge from a system feels like process rather than pressure.`,pills:[`Scheduled reminders`,`Email`,`WhatsApp`,`Notifications`],linkText:`Explore Automations`}),(0,A.jsx)(Di,{image:`https://ik.imagekit.io/qiap0iq38/DATACIRCLES_PROJECT/PAYMENTS/Explore1`,imageAlt:`CRM records`,label:`Close the Loop`,heading:`Paid, and filed where it belongs.`,paragraph:`When a payment comes in, it sits against the invoice, the client and the deal it came from. The full story of that client, from first enquiry to money in the bank, stays in one place.`,pills:[`Against the invoice`,`Against the client`,`On the timeline`,`Back to the CRM record`],linkText:`Explore CMS`}),(0,A.jsxs)(`section`,{className:`mx-auto mt-16 md:mt-24 mb-10 flex h-auto w-full max-w-[1300px] flex-col lg:flex-row overflow-hidden rounded-[20px] bg-[#F3F9FC] px-4 sm:px-6 lg:px-0`,children:[(0,A.jsxs)(`div`,{className:`lg:ml-10 flex h-auto w-full lg:w-[580px] shrink-0 flex-col pt-10 pb-8 lg:pb-0`,children:[(0,A.jsx)(`div`,{className:`mt-2 h-auto w-full lg:w-[480px]`,children:(0,A.jsxs)(`h2`,{className:`font-inter text-[24px] sm:text-[28px] md:text-[32px] font-bold leading-[1.25] md:leading-[38px] tracking-[-1px] text-black`,children:[`Cashflow you can see`,(0,A.jsx)(`br`,{}),`it coming`]})}),(0,A.jsx)(`div`,{className:`mt-3 w-full lg:w-[580px]`,children:(0,A.jsx)(`p`,{className:`font-inter text-[15px] sm:text-[16px] md:text-[18px] font-normal leading-[25px] text-black/40`,children:`Collected against pending over time, so you can tell the difference between a good month and a month that only looked good on paper. Reports are included on every plan.`})}),(0,A.jsxs)(`div`,{className:`mt-8 lg:mt-auto h-auto w-full lg:w-[400px]`,children:[(0,A.jsx)(`div`,{className:`flex w-full flex-wrap gap-x-1 gap-y-1`,children:[`against the invoice`,`Against the clients`,`On the Timeline`,`Back to the CRM record`].map((e,t)=>(0,A.jsx)(`div`,{className:`flex w-max items-center rounded-full border border-[#0085FF4D] bg-[#0085FF1A] px-4 py-2`,children:(0,A.jsx)(`span`,{className:`whitespace-nowrap font-inter text-[13px] font-semibold text-[#0085FF]`,children:e})},t))}),(0,A.jsxs)(`button`,{type:`button`,className:`mt-4 ml-2 flex items-center gap-2 font-inter text-[14px] font-semibold text-[#0085FF]`,children:[(0,A.jsx)(`span`,{children:`Explore Payments`}),(0,A.jsx)(`span`,{className:`text-[18px] leading-none`,children:`→`})]})]})]}),(0,A.jsxs)(`div`,{className:`relative h-[280px] sm:h-[350px] lg:h-[416px] w-full lg:flex-1 lg:mr-5`,children:[(0,A.jsx)(`img`,{src:`https://ik.imagekit.io/qiap0iq38/DATACIRCLES_PROJECT/PAYMENTS/image%2016.png`,alt:``,className:`absolute right-[10%] sm:right-[15%] lg:right-[135px] top-[16px] sm:top-[24px] lg:top-[32px] h-[240px] sm:h-[300px] lg:h-[352px] w-[260px] sm:w-[320px] lg:w-[375px] object-cover`}),(0,A.jsx)(`img`,{src:`https://ik.imagekit.io/qiap0iq38/DATACIRCLES_PROJECT/PAYMENTS/image%2017.png`,alt:``,className:`absolute right-0 top-[80px] sm:top-[95px] lg:top-[105px] z-10 h-[150px] sm:h-[180px] lg:h-[206px] w-[210px] sm:w-[260px] lg:w-[298px] object-cover`})]})]}),(0,A.jsx)(br,{})]})]}),ki=[{title:`Send us your file`,description:`Export from Excel, Tally or whatever you use today. A plain CSV is fine.`,active:!0},{title:`We map it together`,description:`We help match your columns to the right fields, so nothing lands in the wrong place.`,active:!1},{title:`Check & Go`,description:`You review the imported data, and start working. Your old files stay exactly where they are.`,active:!1}],Ai=()=>(0,A.jsxs)(`section`,{className:`mx-auto mt-24 flex w-full max-w-[1216px] px-6`,children:[(0,A.jsxs)(`div`,{className:`w-full max-w-[430px] shrink-0`,children:[(0,A.jsx)(`h2`,{className:`font-inter text-[28px] font-medium leading-[34px] tracking-[-1px] text-black`,children:`Moving your data across`}),(0,A.jsx)(`p`,{className:`mt-2 max-w-[390px] font-inter text-[15px] font-normal leading-[21px] text-[#78788D]`,children:`It's a guided import, not a magic button. Our team does it with you, and most businesses are up and running the same week.`})]}),(0,A.jsxs)(`div`,{className:`relative ml-25 flex-1`,children:[(0,A.jsx)(`div`,{className:`absolute left-[8px] top-[8px] h-[305px] w-[1px] bg-gradient-to-b from-[#0085FF] via-[#B9DFFF] to-transparent`}),(0,A.jsx)(`div`,{className:`relative flex flex-col gap-[60px]`,children:ki.map((e,t)=>(0,A.jsxs)(`div`,{className:`relative flex min-h-[64px]`,children:[(0,A.jsx)(`div`,{className:`relative z-10 mt-[3px] h-[13px] w-[13px] shrink-0 rounded-full ${e.active?`bg-[#0085FF]`:`bg-[#E8E8E8]`}`}),(0,A.jsxs)(`div`,{className:`ml-[9px]`,children:[(0,A.jsx)(`h3`,{className:`font-inter text-[20px] font-medium leading-[24px] text-[#252525]`,children:e.title}),(0,A.jsx)(`p`,{className:`mt-2 max-w-[500px] font-inter text-[14px] font-normal leading-[18px] text-[#78788D]`,children:e.description})]})]},t))})]})]}),ji=()=>(0,A.jsxs)(`section`,{className:`mx-auto mt-24 mb-24 flex h-[220px] w-full max-w-[1280px] items-center rounded-[12px] bg-[#F3F9FC] px-8`,children:[(0,A.jsx)(`div`,{className:`flex h-[120px] w-[120px] shrink-0 items-center justify-center overflow-hidden rounded-[8px]`,children:(0,A.jsx)(`img`,{src:`https://ik.imagekit.io/qiap0iq38/DATACIRCLES_PROJECT/PAYMENTS/image%2017%20(1).png`,alt:``,className:`h-full w-full object-cover`})}),(0,A.jsxs)(`div`,{className:`ml-6 flex h-[120px] flex-1 flex-col justify-center`,children:[(0,A.jsxs)(`h2`,{className:`max-w-[550px] font-inter text-[26px] font-medium leading-[31px] tracking-[-1px] text-black`,children:[`Need something we don't connect`,(0,A.jsx)(`br`,{}),`to yet?`]}),(0,A.jsx)(`p`,{className:`mt-4 max-w-[600px] font-inter text-[15px] font-normal leading-[21px] text-[#78788D]`,children:`We're a small team building fast, and what our customers ask for is what gets built next. Tell us what you use, and we'll tell you honestly whether it's on the way.`})]}),(0,A.jsxs)(`div`,{className:`mr-8 flex h-[120px] w-[190px] flex-col items-center justify-center gap-5`,children:[(0,A.jsx)(`button`,{type:`button`,className:`flex h-[48px] w-[190px] items-center justify-center rounded-full bg-white font-inter text-[14px] font-medium text-[#0085FF] transition-colors duration-200 hover:bg-[#0085FF] hover:text-white`,children:`Book a Call`}),(0,A.jsxs)(`button`,{type:`button`,className:`flex items-center gap-2 font-inter text-[14px] font-medium text-[#0085FF]`,children:[(0,A.jsx)(`span`,{children:`Start Now`}),(0,A.jsx)(`span`,{className:`text-[18px] leading-none`,children:`→`})]})]})]}),Mi=()=>(0,A.jsxs)(`div`,{className:`min-h-screen w-full bg-white overflow-x-hidden`,children:[(0,A.jsx)(`div`,{className:`mb-5 h-[18px] w-full bg-[#ABABAB]`}),(0,A.jsx)(er,{}),(0,A.jsxs)(`main`,{className:`w-full`,children:[(0,A.jsxs)(`section`,{className:`flex h-auto w-full flex-col items-center mt-12 md:mt-16 lg:mt-20 px-4 sm:px-6`,children:[(0,A.jsxs)(`div`,{className:`flex w-fit items-center justify-center gap-2 rounded-full bg-[#EBE6E033] px-3 py-1`,children:[(0,A.jsx)(`span`,{className:`h-[7px] w-[7px] shrink-0 rounded-full bg-[#0085FF]`}),(0,A.jsx)(`span`,{className:`font-inter text-[11px] font-normal leading-none text-black`,children:`Integrations`})]}),(0,A.jsx)(`div`,{className:`mt-6 flex h-auto w-full max-w-[635px] items-center justify-center text-center`,children:(0,A.jsxs)(`h1`,{className:`font-inter text-[32px] sm:text-[40px] md:text-[48px] font-semibold leading-[1.1] text-black`,children:[`Fewer tools to`,(0,A.jsx)(`br`,{}),`connect in the first place.`]})}),(0,A.jsx)(`div`,{className:`mt-3 flex h-auto w-full max-w-[850px] items-center justify-center text-center`,children:(0,A.jsxs)(`p`,{className:`w-[850px] font-inter text-[14px] font-normal leading-[20px] text-black/60 sm:text-[15px] md:text-[16px]`,children:[`Most software needs a dozen integrations because it only does one job. DataCircles already holds your leads,`,(0,A.jsx)(`br`,{}),`invoices and payments together, so the connections you need are the ones that touch the outside world.`]})}),(0,A.jsxs)(`div`,{className:`mt-5 flex h-auto w-full max-w-[307px] flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0`,children:[(0,A.jsx)(`button`,{className:`flex h-[49px] w-full sm:w-[149px] items-center justify-center rounded-full bg-[#E5EDF5] font-inter text-[14px] font-medium text-black transition-colors duration-200 hover:bg-[#0085FF] hover:text-white`,children:`Start Free`}),(0,A.jsx)(`button`,{className:`flex h-[49px] w-full sm:w-[149px] items-center justify-center rounded-full bg-[#E5EDF5] font-inter text-[14px] font-medium text-black transition-colors duration-200 hover:bg-[#0085FF] hover:text-white`,children:`Book a Demo`})]}),(0,A.jsx)(`div`,{className:`mt-5 flex h-auto w-full max-w-[291px] items-center justify-center text-center`,children:(0,A.jsx)(`p`,{className:`font-inter text-[11px] sm:text-[12px] whitespace-normal sm:whitespace-nowrap font-normal text-black/50`,children:`7-day free trial · No card required · GST-ready · Works on any device`})})]}),(0,A.jsx)(`div`,{className:`mt-8 w-full`,children:(0,A.jsx)(`img`,{src:`https://ik.imagekit.io/qiap0iq38/DATACIRCLES_PROJECT/PAYMENTS/Hero%20Sction%20(2).png`,alt:`Payment`,className:`h-auto w-full object-cover`})}),(0,A.jsx)(`div`,{className:`mx-auto flex h-auto w-full max-w-[480px] items-center justify-center text-center`,children:(0,A.jsx)(`h2`,{className:`whitespace-normal sm:whitespace-nowrap font-inter text-[24px] sm:text-[28px] md:text-[32px] font-medium leading-[1.2] md:leading-[38px] tracking-[-1px] md:tracking-[-2px] text-black`,children:`What connects today`})}),(0,A.jsx)(`div`,{className:`mx-auto mt-[12px] flex h-auto w-full max-w-[1000px] items-center justify-center text-center`,children:(0,A.jsx)(`p`,{className:`font-inter text-[15px] sm:text-[16px] md:text-[18px] font-normal leading-[22px] md:leading-[25px] text-[#78788D]`,children:`Then comes the awkward bit. Was that one paid? Did anyone follow up? You don't want to annoy a good client by asking twice, and you don't want to write off money because nobody asked at all. So the chasing gets delayed, and the cash comes in later than it should.`})}),(0,A.jsx)(`section`,{className:`mx-auto mt-20 h-auto min-h-[978px] w-full max-w-[1216px] rounded-[20px] bg-[#F3F9FC] px-6 py-10 md:px-10`,children:[{icon:`dist/assets/pic.svg`,label:`BRINGING YOUR DATA IN`,cards:[{icon:`dist/assets/pic2.svg`,title:`Excel & CSV import`,description:`Bring your existing clients, leads and items across, with our team helping map the columns.`},{icon:`dist/assets/pic2.svg`,title:`Website forms`,description:`Enquiries from your site land straight in your pipeline as new leads.`},{icon:`dist/assets/pic2.svg`,title:`Export to Excel`,description:`Your data is yours. Take it out whenever you want, in a standard format.`}]},{icon:`dist/assets/pic.svg`,label:`MEETINGS & COMMUNICATION`,cards:[{icon:`dist/assets/pic2.svg`,title:`Google Meet`,description:`Meetings in your screens show Google Meet as a location. Confirm whether this is a live link-generating integration or a text field.`},{icon:`dist/assets/pic2.svg`,title:`Zoom`,description:`Enquiries from your site land straight in your pipeline as new leads.`},{icon:`dist/assets/pic2.svg`,title:`WhatsApp Sharing`,description:`Your data is yours. Take it out whenever you want, in a standard format.`}]},{icon:`dist/assets/pic.svg`,label:`RUNNING THE PLATFORM`,cards:[{icon:`dist/assets/pic2.svg`,title:`Razorpay`,description:`Powers your DataCircles subscription payments, on UPI, cards and net banking. Card details never touch our servers.`},{icon:`dist/assets/pic2.svg`,title:`Auth0`,description:`Handles secure logins and user roles, so account security is managed by specialists.`},{icon:`dist/assets/pic2.svg`,title:`Intercom`,description:`The in-app chat that connects you to a real person, 24×7.`}]}].map((e,t)=>(0,A.jsxs)(`div`,{className:`flex flex-col items-center`,children:[(0,A.jsxs)(`div`,{className:`flex h-[32px] w-max items-center justify-center gap-2 whitespace-nowrap rounded-full bg-white px-4`,children:[(0,A.jsx)(`img`,{src:e.icon,alt:``,className:`h-[18px] w-[18px] shrink-0 object-contain`}),(0,A.jsx)(`span`,{className:`font-inter text-[14px] font-normal text-[#0085FF]`,children:e.label})]}),(0,A.jsx)(`div`,{className:`mt-8 mb-8 grid h-auto w-full max-w-[1216px] grid-cols-1 gap-5 md:grid-cols-3`,children:e.cards.map((e,t)=>(0,A.jsxs)(`div`,{className:`flex h-[228px] w-full flex-col items-center rounded-[20px] border border-[#E0E0E1] bg-white p-6 text-center`,children:[(0,A.jsx)(`div`,{className:`flex h-[52px] w-[52px] shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#E0E0E1] bg-[#F3F9FC] shadow-[0_4px_12px_rgba(0,0,0,0.10)]`,children:(0,A.jsx)(`img`,{src:e.icon,alt:``,className:`mt-3 h-[82px] w-[82px] max-w-none object-cover`})}),(0,A.jsxs)(`div`,{className:`mt-12 flex w-full flex-col items-center text-center`,children:[(0,A.jsx)(`h3`,{className:`font-inter text-[20px] font-medium leading-[26px] text-black`,children:e.title}),(0,A.jsx)(`p`,{className:`mt-2 max-w-[310px] font-inter text-[14px] font-normal leading-[20px] text-[#78788D]`,children:e.description})]})]},t))})]},t))}),(0,A.jsx)(Ai,{}),(0,A.jsx)(ji,{}),(0,A.jsx)(br,{})]})]}),Ni=`https://res.cloudinary.com/tpxo8m6a/image/upload/v1787762725/e1b401cb4e4c9b406541ebaf104107c3180075c3.png`,Pi=`https://res.cloudinary.com/tpxo8m6a/image/upload/v1787917128/e1b401cb4e4c9b406541ebaf104107c3180075c3_4.png`,Fi=`https://res.cloudinary.com/tpxo8m6a/image/upload/v1787917181/e1b401cb4e4c9b406541ebaf104107c3180075c3_5.png`,Ii=`https://res.cloudinary.com/tpxo8m6a/image/upload/v1787918010/5de050cbe28eed0966420b6f6655576e9eadfad2.png`,j=`Inter, Arial, sans-serif`,Li=`#0085FF`,Ri=`#0A55AF`,zi=`#2B2C30`,Bi=`#707173`,M=`#78788D`,N=`#E0E0E1`;function Vi({src:e,label:t,style:n={},imageStyle:r={}}){return(0,A.jsx)(`div`,{style:{width:`100%`,height:`100%`,overflow:`hidden`,background:`#F8FAFC`,display:`flex`,alignItems:`center`,justifyContent:`center`,boxSizing:`border-box`,...n},children:e?(0,A.jsx)(`img`,{src:e,alt:``,style:{display:`block`,width:`100%`,height:`100%`,objectFit:`cover`,objectPosition:`center`,...r}}):(0,A.jsx)(`span`,{style:{fontFamily:j,fontSize:`14px`,fontWeight:400,color:`#B8B8B8`,userSelect:`none`},children:t})})}function Hi(){return(0,A.jsxs)(`section`,{id:`home`,style:{position:`relative`,width:`100%`,minHeight:`1325px`,overflow:`hidden`,background:`#FFFFFF`,fontFamily:j,boxSizing:`border-box`},children:[(0,A.jsx)(`div`,{style:{position:`absolute`,top:`30px`,left:`50%`,transform:`translateX(-50%)`,zIndex:100,width:`720px`,maxWidth:`calc(100% - 40px)`},children:(0,A.jsx)(er,{})}),(0,A.jsxs)(`div`,{style:{position:`relative`,zIndex:10,width:`100%`,maxWidth:`1600px`,margin:`0 auto`,paddingTop:`164px`,paddingLeft:`20px`,paddingRight:`20px`,boxSizing:`border-box`,display:`flex`,flexDirection:`column`,alignItems:`center`},children:[(0,A.jsxs)(`div`,{style:{height:`25px`,minWidth:`160px`,padding:`4px 10px`,borderRadius:`999px`,background:`rgba(235, 230, 224, 0.2)`,display:`flex`,alignItems:`center`,justifyContent:`center`,gap:`5px`,boxSizing:`border-box`},children:[(0,A.jsx)(`span`,{style:{width:`6px`,height:`6px`,borderRadius:`50%`,background:Li,display:`block`,flexShrink:0}}),(0,A.jsx)(`span`,{style:{fontSize:`11.4px`,lineHeight:`17px`,fontWeight:400,color:`#231014`,whiteSpace:`nowrap`},children:`Invoicing Infrastructure`})]}),(0,A.jsxs)(`h1`,{style:{margin:`14px 0 0 0`,padding:0,width:`100%`,maxWidth:`952px`,textAlign:`center`,fontSize:`51px`,lineHeight:`54px`,fontWeight:500,letterSpacing:`-2.7px`,color:`#231014`,boxSizing:`border-box`},children:[`GST invoices in seconds, not spreadsheets.`,(0,A.jsx)(`br`,{}),`not spreadsheets.`]}),(0,A.jsx)(`div`,{style:{marginTop:`7px`,width:`100%`,maxWidth:`685px`,display:`flex`,flexDirection:`column`,alignItems:`center`,textAlign:`center`},children:(0,A.jsxs)(`p`,{style:{margin:0,padding:0,fontSize:`13.2px`,lineHeight:`20px`,fontWeight:400,color:`#635557`,textAlign:`center`},children:[`Turn a won deal into a professional invoice without retyping a thing,`,(0,A.jsx)(`br`,{}),`then send it and track it, all from the same place your client already lives.`]})}),(0,A.jsxs)(`div`,{style:{marginTop:`17px`,display:`flex`,alignItems:`center`,justifyContent:`center`,gap:`10px`},children:[(0,A.jsx)(`button`,{type:`button`,style:{width:`149px`,height:`49px`,border:`none`,borderRadius:`999px`,background:Li,color:`#FFFFFF`,fontSize:`15.1px`,lineHeight:`22px`,fontWeight:500,fontFamily:j,cursor:`pointer`,display:`flex`,alignItems:`center`,justifyContent:`center`,transition:`transform 180ms ease`},onMouseEnter:e=>{e.currentTarget.style.transform=`translateY(-2px)`},onMouseLeave:e=>{e.currentTarget.style.transform=`translateY(0)`},children:`Start Free`}),(0,A.jsx)(`button`,{type:`button`,style:{width:`148px`,height:`49px`,border:`none`,borderRadius:`999px`,background:`#E5EDF5`,color:`#231014`,fontSize:`15.3px`,lineHeight:`22px`,fontWeight:500,fontFamily:j,cursor:`pointer`,display:`flex`,alignItems:`center`,justifyContent:`center`,transition:`transform 180ms ease`},onMouseEnter:e=>{e.currentTarget.style.transform=`translateY(-2px)`},onMouseLeave:e=>{e.currentTarget.style.transform=`translateY(0)`},children:`Book a Demo`})]}),(0,A.jsx)(`p`,{style:{margin:`5px 0 0 0`,padding:0,fontSize:`9px`,lineHeight:`20px`,fontWeight:400,color:`#635557`,textAlign:`center`},children:`7-day free trial · No card required · GST-ready · Works on any device`}),(0,A.jsxs)(`div`,{className:`product-crm-hero-dashboard`,style:{position:`relative`,width:`100%`,maxWidth:`1280px`,height:`720px`,marginTop:`17px`,boxSizing:`border-box`},children:[(0,A.jsx)(`div`,{style:{position:`absolute`,inset:0,borderRadius:`18px`,background:`linear-gradient(180deg, #EAF7FF 0%, #DCEFFF 42%, #F7FBFE 100%)`,overflow:`hidden`}}),(0,A.jsx)(`div`,{style:{position:`absolute`,left:`7%`,top:`80px`,width:`250px`,height:`150px`,borderRadius:`12px`,background:`rgba(255,255,255,0.28)`,border:`1px solid rgba(255,255,255,0.45)`,pointerEvents:`none`}}),(0,A.jsx)(`div`,{style:{position:`absolute`,right:`7%`,top:`120px`,width:`280px`,height:`180px`,borderRadius:`12px`,background:`rgba(255,255,255,0.24)`,border:`1px solid rgba(255,255,255,0.42)`,pointerEvents:`none`}}),(0,A.jsx)(`div`,{style:{position:`absolute`,left:`4%`,bottom:`100px`,width:`300px`,height:`170px`,borderRadius:`12px`,background:`rgba(255,255,255,0.26)`,border:`1px solid rgba(255,255,255,0.45)`,pointerEvents:`none`}}),(0,A.jsx)(`div`,{style:{position:`absolute`,right:`4%`,bottom:`90px`,width:`280px`,height:`170px`,borderRadius:`12px`,background:`rgba(255,255,255,0.26)`,border:`1px solid rgba(255,255,255,0.45)`,pointerEvents:`none`}}),(0,A.jsx)(`div`,{className:`product-crm-hero-center`,style:{position:`absolute`,left:`50%`,top:`12px`,transform:`translateX(-50%)`,width:`calc(100% - 150px)`,maxWidth:`1100px`,height:`590px`,borderRadius:`8px`,overflow:`hidden`,background:`#FFFFFF`,boxShadow:`0 18px 45px rgba(0, 74, 140, 0.10)`,zIndex:3},children:(0,A.jsx)(Vi,{src:`https://res.cloudinary.com/tpxo8m6a/image/upload/v1787914893/4f6fdab536cdc21b0ea49f7910ec5ec64636b08b.png`,label:`CENTER IMAGE`})}),(0,A.jsx)(`div`,{className:`product-crm-hero-left`,style:{position:`absolute`,left:`3%`,top:`350px`,width:`270px`,height:`190px`,borderRadius:`8px`,overflow:`hidden`,background:`#FFFFFF`,boxShadow:`0 15px 35px rgba(0, 70, 130, 0.16)`,zIndex:10},children:(0,A.jsx)(Vi,{src:`https://res.cloudinary.com/tpxo8m6a/image/upload/v1787914890/7318c219e2b5c2c73ed078df153915c50d9cc106_1.png`,label:`LEFT IMAGE`})}),(0,A.jsx)(`div`,{className:`product-crm-hero-right`,style:{position:`absolute`,right:`3%`,top:`260px`,width:`270px`,height:`190px`,borderRadius:`8px`,overflow:`hidden`,background:`#FFFFFF`,boxShadow:`0 15px 35px rgba(0, 70, 130, 0.16)`,zIndex:10},children:(0,A.jsx)(Vi,{src:`https://res.cloudinary.com/tpxo8m6a/image/upload/v1787914889/4d01db93f799a415806872a98c98c53edf0d83db.png`,label:`RIGHT IMAGE`})}),(0,A.jsx)(`div`,{style:{position:`absolute`,left:0,right:0,bottom:0,height:`150px`,zIndex:20,pointerEvents:`none`,background:`linear-gradient(to bottom, rgba(255,255,255,0), #FFFFFF)`}})]})]})]})}function Ui(){return(0,A.jsxs)(`section`,{style:{width:`100%`,minHeight:`880px`,display:`flex`,flexDirection:`row`,alignItems:`center`,justifyContent:`center`,gap:`80px`,padding:`80px 112px`,boxSizing:`border-box`,background:`#FFFFFF`},children:[(0,A.jsx)(`div`,{style:{width:`600px`,height:`720px`,flexShrink:0,borderRadius:`16px`,overflow:`hidden`,background:`#F8FAFC`},children:(0,A.jsx)(Vi,{src:Ni,label:`IMAGE 1`,imageStyle:{objectFit:`cover`}})}),(0,A.jsxs)(`div`,{style:{width:`536px`,minHeight:`585px`,display:`flex`,flexDirection:`column`,alignItems:`flex-start`,gap:`32px`,boxSizing:`border-box`},children:[(0,A.jsxs)(`div`,{style:{width:`536px`,display:`flex`,flexDirection:`column`,alignItems:`flex-start`,gap:`14px`},children:[(0,A.jsx)(`h2`,{style:{width:`438px`,margin:0,padding:0,fontFamily:j,fontSize:`32px`,lineHeight:`110%`,fontWeight:500,letterSpacing:`-2px`,color:zi},children:`Billing is the tax you pay on winning work.`}),(0,A.jsx)(`p`,{style:{width:`536px`,margin:0,padding:0,fontFamily:j,fontSize:`16px`,lineHeight:`120%`,fontWeight:400,color:Bi},children:`The deal closes, and then the real chore begins. Open the other app, retype the client's name, address and GSTIN, rebuild the line items, work out the tax split, fix the format, send it, and note it down somewhere so you remember to chase it. Every invoice, every time.`})]}),(0,A.jsxs)(`div`,{style:{width:`536px`,display:`flex`,flexDirection:`column`,alignItems:`flex-start`},children:[(0,A.jsx)(`div`,{style:{width:`536px`,height:`1px`,background:N}}),(0,A.jsx)(`div`,{style:{width:`536px`,minHeight:`58px`,display:`flex`,alignItems:`center`,boxSizing:`border-box`},children:(0,A.jsx)(`p`,{style:{width:`536px`,margin:0,fontFamily:j,fontSize:`20px`,lineHeight:`120%`,fontWeight:400,letterSpacing:`-0.05em`,color:zi},children:`The same client details entered twice, in two different tools`})}),(0,A.jsx)(`div`,{style:{width:`536px`,height:`1px`,background:N}}),(0,A.jsx)(`div`,{style:{width:`536px`,minHeight:`72px`,display:`flex`,alignItems:`center`,boxSizing:`border-box`},children:(0,A.jsx)(`p`,{style:{width:`536px`,margin:0,fontFamily:j,fontSize:`20px`,lineHeight:`120%`,fontWeight:400,letterSpacing:`-0.05em`,color:zi},children:`GST worked out by hand, and sometimes worked out wrong`})}),(0,A.jsx)(`div`,{style:{width:`536px`,height:`1px`,background:N}}),(0,A.jsx)(`div`,{style:{width:`536px`,minHeight:`58px`,display:`flex`,alignItems:`center`,boxSizing:`border-box`},children:(0,A.jsx)(`p`,{style:{width:`536px`,margin:0,fontFamily:j,fontSize:`20px`,lineHeight:`120%`,fontWeight:400,letterSpacing:`-0.05em`,color:zi},children:`Invoices that look slightly different every single time`})}),(0,A.jsx)(`div`,{style:{width:`536px`,height:`1px`,background:N}}),(0,A.jsx)(`div`,{style:{width:`536px`,minHeight:`72px`,display:`flex`,alignItems:`center`,boxSizing:`border-box`},children:(0,A.jsx)(`p`,{style:{width:`536px`,margin:0,fontFamily:j,fontSize:`20px`,lineHeight:`120%`,fontWeight:400,letterSpacing:`-0.05em`,color:zi},children:`No link between the invoice and everything else about that client`})}),(0,A.jsx)(`div`,{style:{width:`536px`,height:`1px`,background:N}})]}),(0,A.jsxs)(`button`,{type:`button`,style:{width:`200px`,height:`52px`,padding:`16px 20px`,border:`none`,borderRadius:`32px`,background:Li,color:`#FFFFFF`,fontFamily:j,fontSize:`16px`,lineHeight:`120%`,fontWeight:500,display:`flex`,alignItems:`center`,justifyContent:`center`,gap:`10px`,cursor:`pointer`},children:[(0,A.jsx)(`span`,{children:`Explore Invoicing`}),(0,A.jsx)(`span`,{style:{fontSize:`18px`,lineHeight:`1`},children:`→`})]})]})]})}function Wi(){return(0,A.jsxs)(`section`,{style:{width:`1280px`,maxWidth:`calc(100% - 40px)`,minHeight:`433px`,margin:`0 auto`,padding:`32px`,boxSizing:`border-box`,borderRadius:`12px`,background:`#F3F9FC`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`62px`},children:[(0,A.jsxs)(`div`,{style:{width:`580px`,maxWidth:`100%`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`24px`},children:[(0,A.jsx)(`h2`,{style:{margin:0,width:`480px`,maxWidth:`100%`,fontFamily:j,fontSize:`32px`,lineHeight:`120%`,fontWeight:500,letterSpacing:`-2px`,textAlign:`center`,color:`#1C1C1D`},children:`The tax maths, handled.`}),(0,A.jsx)(`p`,{style:{margin:0,width:`848px`,maxWidth:`100%`,fontFamily:j,fontSize:`18px`,lineHeight:`140%`,fontWeight:400,textAlign:`center`,color:M},children:`CGST and SGST when your client is in your state, IGST when they aren't. HSN and SAC codes, tax-inclusive or exclusive pricing, and a format that carries every field a valid GST invoice needs, so your client never loses their input credit because of your paperwork.`})]}),(0,A.jsx)(`div`,{style:{width:`1216px`,maxWidth:`100%`,display:`flex`,flexDirection:`row`,alignItems:`stretch`,justifyContent:`center`,gap:`20px`},children:[{title:`Same State`,text:`CGST and SGST, split automatically at the right rate.`},{title:`Different State`,text:`IGST applied instead, with nothing extra required.`},{title:`Every Field Covered`,text:`GSTIN, HSN and SAC codes, invoice numbering in sequence.`}].map((e,t)=>(0,A.jsxs)(`div`,{style:{boxSizing:`border-box`,width:`392px`,minHeight:`170px`,flex:`1 1 0`,padding:`24px`,borderRadius:`16px`,border:`1px solid #ECECEC`,background:`#FFFFFF`,display:`flex`,flexDirection:`column`,alignItems:`flex-start`,gap:`18px`},children:[(0,A.jsxs)(`div`,{style:{width:`40px`,height:`40px`,borderRadius:`27px`,background:`rgba(0,133,255,0.08)`,display:`flex`,alignItems:`center`,justifyContent:`center`,color:Li,fontSize:`17px`,fontFamily:j},children:[t===0&&`◉`,t===1&&`◇`,t===2&&`✧`]}),(0,A.jsxs)(`div`,{style:{width:`100%`,display:`flex`,flexDirection:`column`,alignItems:`flex-start`,gap:`8px`},children:[(0,A.jsx)(`h3`,{style:{margin:0,fontFamily:j,fontSize:`20px`,lineHeight:`110%`,fontWeight:500,color:`#1C1C1D`},children:e.title}),(0,A.jsx)(`p`,{style:{margin:0,fontFamily:j,fontSize:`14px`,lineHeight:`120%`,fontWeight:400,color:M},children:e.text})]})]},e.title))})]})}function Gi(){return(0,A.jsxs)(`section`,{style:{width:`100%`,minHeight:`704px`,padding:`78px 40px 72px`,boxSizing:`border-box`,background:`#FFFFFF`,display:`flex`,flexDirection:`column`,alignItems:`center`},children:[(0,A.jsx)(`h2`,{style:{margin:0,padding:0,fontFamily:j,fontSize:`32px`,lineHeight:`110%`,fontWeight:500,letterSpacing:`-1.7px`,textAlign:`center`,color:`#2B2C30`},children:`Not just Invoices`}),(0,A.jsx)(`p`,{style:{width:`680px`,maxWidth:`100%`,margin:`14px 0 0 0`,padding:0,fontFamily:j,fontSize:`16px`,lineHeight:`140%`,fontWeight:400,letterSpacing:`-0.15px`,textAlign:`center`,color:`#78788D`},children:`Quotations before the work, proforma invoices when the sale isn't final, delivery challans when goods move, and debit or credit notes when things change. All in one system, numbered in sequence.`}),(0,A.jsx)(`div`,{style:{width:`1040px`,maxWidth:`100%`,marginTop:`42px`,display:`grid`,gridTemplateColumns:`repeat(4, 1fr)`,columnGap:`30px`,rowGap:`42px`,boxSizing:`border-box`},children:[{icon:`▣`,title:`Quotation`},{icon:`✣`,title:`Proforma Invoice`},{icon:`▤`,title:`GST Invoice`},{icon:`♟`,title:`Delivery Challan`},{icon:`▤`,title:`Debit Note`},{icon:`◆`,title:`Credit Note`},{icon:`➜`,title:`Purchase Order`},{icon:`◖`,title:`Receipts`}].map((e,t)=>(0,A.jsxs)(`div`,{style:{width:`100%`,minHeight:`118px`,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`flex-start`,boxSizing:`border-box`},children:[(0,A.jsx)(`div`,{style:{width:`42px`,height:`42px`,borderRadius:`50%`,background:`#FFFFFF`,border:`1px solid #E7EEF5`,boxShadow:`0 4px 12px rgba(34, 89, 130, 0.08)`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontFamily:j,fontSize:`16px`,fontWeight:500,color:Li,boxSizing:`border-box`},children:e.icon}),(0,A.jsx)(`h3`,{style:{margin:`13px 0 0 0`,padding:0,fontFamily:j,fontSize:`15px`,lineHeight:`20px`,fontWeight:500,color:`#2B2C30`,textAlign:`center`},children:e.title}),(0,A.jsxs)(`p`,{style:{width:`190px`,maxWidth:`100%`,margin:`6px 0 0 0`,padding:0,fontFamily:j,fontSize:`9px`,lineHeight:`12px`,fontWeight:400,color:`#A0A0A7`,textAlign:`center`},children:[`Lorem ipsum dolor sit amet consectetur`,(0,A.jsx)(`br`,{}),`Sagittis eu nibh at`]})]},e.title))})]})}function Ki(){return(0,A.jsxs)(`section`,{style:{width:`100%`,minHeight:`576px`,padding:`74px 40px 80px`,boxSizing:`border-box`,background:`#FFFFFF`,display:`flex`,flexDirection:`column`,alignItems:`center`},children:[(0,A.jsx)(`h2`,{style:{margin:0,padding:0,fontFamily:j,fontSize:`32px`,lineHeight:`110%`,fontWeight:500,letterSpacing:`-1.7px`,color:`#2B2C30`,textAlign:`center`},children:`Made for Indian Billing, not Adapted to it`}),(0,A.jsx)(`div`,{style:{width:`1100px`,maxWidth:`100%`,marginTop:`34px`,display:`flex`,flexDirection:`row`,flexWrap:`wrap`,alignItems:`center`,justifyContent:`center`,columnGap:`10px`,rowGap:`12px`,boxSizing:`border-box`},children:[`Lorem ipsum dolor sit amet`,`Lorem ipsum dolor sit`,`Lorem ipsum dolor sit amet consectetur`,`Lorem ipsum dolor`,`Lorem ipsum dolor sit amet`,`Lorem ipsum dolor sit amet`,`Lorem ipsum dolor sit`,`Lorem ipsum dolor sit amet consectetur`,`Lorem ipsum dolor sit amet`,`Lorem ipsum dolor sit`,`Lorem ipsum dolor sit amet consectetur`,`Lorem ipsum dolor sit amet`,`Lorem ipsum dolor sit`,`Lorem ipsum dolor sit amet`,`Lorem ipsum dolor sit amet consectetur`,`Lorem ipsum dolor sit amet`,`Lorem ipsum dolor sit`,`Lorem ipsum dolor sit amet`,`Lorem ipsum dolor sit amet consectetur`,`Lorem ipsum dolor sit`,`Lorem ipsum dolor sit amet`,`Lorem ipsum dolor sit`,`Lorem ipsum dolor sit amet consectetur`,`Lorem ipsum dolor sit amet`].map((e,t)=>(0,A.jsxs)(`div`,{style:{minWidth:t%3==0?`180px`:t%3==1?`160px`:`205px`,height:`34px`,padding:`0 16px`,borderRadius:`999px`,background:`#F7F7F8`,border:`1px solid #EEEEEF`,display:`flex`,alignItems:`center`,justifyContent:`center`,boxSizing:`border-box`,fontFamily:j,fontSize:`11px`,lineHeight:`14px`,fontWeight:400,color:`#707173`,whiteSpace:`nowrap`},children:[(0,A.jsx)(`span`,{style:{width:`8px`,height:`8px`,borderRadius:`50%`,border:`1px solid #8A8A8D`,marginRight:`7px`,flexShrink:0,boxSizing:`border-box`}}),e]},`${e}-${t}`))})]})}function qi(){return(0,A.jsxs)(`section`,{style:{width:`1216px`,maxWidth:`calc(100% - 40px)`,height:`588px`,margin:`0 auto`,display:`flex`,flexDirection:`row`,justifyContent:`center`,alignItems:`center`,overflow:`hidden`,borderRadius:`8px`,background:`#FFFFFF`,boxSizing:`border-box`},children:[(0,A.jsx)(`div`,{className:`product-crm-card-image`,style:{width:`666px`,height:`658.48px`,flex:`1 1 0`,display:`flex`,alignItems:`center`,justifyContent:`center`,overflow:`hidden`},children:(0,A.jsx)(Vi,{src:Pi,label:`IMAGE 2`})}),(0,A.jsxs)(`div`,{className:`product-crm-card-content`,style:{width:`550px`,height:`588px`,display:`flex`,flexDirection:`column`,justifyContent:`space-between`,alignItems:`flex-start`,padding:0,boxSizing:`border-box`},children:[(0,A.jsxs)(`div`,{style:{width:`550px`,padding:`0 32px`,boxSizing:`border-box`,display:`flex`,flexDirection:`column`,alignItems:`flex-start`,gap:`14px`},children:[(0,A.jsx)(`span`,{style:{fontFamily:j,fontSize:`16px`,lineHeight:`24px`,fontWeight:500,color:Li},children:`Your Brand`}),(0,A.jsx)(`h2`,{style:{margin:0,fontFamily:j,fontSize:`24px`,lineHeight:`28px`,fontWeight:600,letterSpacing:`-0.72px`,color:`#1E1E1E`},children:`Documents that look like you, not like software.`}),(0,A.jsx)(`p`,{style:{margin:0,fontFamily:j,fontSize:`16px`,lineHeight:`24px`,fontWeight:400,letterSpacing:`-0.16px`,color:`#252525`},children:`Your logo, your details, clean professional layouts. The invoice a client receives should make your business look as good as your work does.`})]}),(0,A.jsxs)(`div`,{style:{width:`324px`,padding:`0 32px`,boxSizing:`border-box`,display:`flex`,flexDirection:`column`,alignItems:`flex-start`,gap:`32px`},children:[(0,A.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`8px`},children:[(0,A.jsxs)(`div`,{style:{display:`flex`,flexDirection:`row`,alignItems:`flex-start`,gap:`8px`},children:[(0,A.jsx)(`span`,{style:{boxSizing:`border-box`,padding:`8px 16px`,height:`31px`,borderRadius:`100px`,background:`rgba(0,133,255,0.1)`,border:`1px solid rgba(0,133,255,0.3)`,fontFamily:j,fontSize:`12px`,lineHeight:`15px`,fontWeight:600,color:Ri,whiteSpace:`nowrap`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:`Your logo`}),(0,A.jsx)(`span`,{style:{boxSizing:`border-box`,padding:`8px 16px`,height:`31px`,borderRadius:`100px`,background:`rgba(0,133,255,0.1)`,border:`1px solid rgba(0,133,255,0.3)`,fontFamily:j,fontSize:`12px`,lineHeight:`15px`,fontWeight:600,color:Ri,whiteSpace:`nowrap`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:`Clean layouts`})]}),(0,A.jsxs)(`div`,{style:{display:`flex`,flexDirection:`row`,alignItems:`flex-start`,gap:`8px`},children:[(0,A.jsx)(`span`,{style:{boxSizing:`border-box`,padding:`8px 16px`,height:`31px`,borderRadius:`100px`,background:`rgba(0,133,255,0.1)`,border:`1px solid rgba(0,133,255,0.3)`,fontFamily:j,fontSize:`12px`,lineHeight:`15px`,fontWeight:600,color:Ri,whiteSpace:`nowrap`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:`Bank & UPI details`}),(0,A.jsx)(`span`,{style:{boxSizing:`border-box`,padding:`8px 16px`,height:`31px`,borderRadius:`100px`,background:`rgba(0,133,255,0.1)`,border:`1px solid rgba(0,133,255,0.3)`,fontFamily:j,fontSize:`12px`,lineHeight:`15px`,fontWeight:600,color:Ri,whiteSpace:`nowrap`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:`Terms & notes`})]})]}),(0,A.jsx)(`a`,{href:`#payments`,style:{width:`260px`,height:`24px`,display:`flex`,alignItems:`center`,fontFamily:j,fontSize:`16px`,lineHeight:`24px`,fontWeight:700,letterSpacing:`-0.16px`,color:Li,textDecoration:`none`},children:`Explore Payments →`})]})]})]})}function Ji(){return(0,A.jsxs)(`section`,{style:{width:`1216px`,maxWidth:`calc(100% - 40px)`,height:`588px`,margin:`80px auto 0`,display:`flex`,flexDirection:`row`,justifyContent:`center`,alignItems:`center`,overflow:`hidden`,borderRadius:`8px`,background:`#FFFFFF`,boxSizing:`border-box`},children:[(0,A.jsxs)(`div`,{style:{width:`550px`,height:`588px`,display:`flex`,flexDirection:`column`,justifyContent:`space-between`,alignItems:`flex-start`,boxSizing:`border-box`},children:[(0,A.jsxs)(`div`,{style:{width:`550px`,paddingRight:`32px`,boxSizing:`border-box`,display:`flex`,flexDirection:`column`,alignItems:`flex-start`,gap:`14px`},children:[(0,A.jsx)(`span`,{style:{fontFamily:j,fontSize:`16px`,lineHeight:`24px`,fontWeight:500,color:Li},children:`Deliver`}),(0,A.jsx)(`h2`,{style:{margin:0,fontFamily:j,fontSize:`24px`,lineHeight:`28px`,fontWeight:600,letterSpacing:`-0.72px`,color:`#1E1E1E`},children:`Out the door and on the record.`}),(0,A.jsx)(`p`,{style:{margin:0,fontFamily:j,fontSize:`16px`,lineHeight:`24px`,fontWeight:400,letterSpacing:`-0.16px`,color:`#252525`},children:`Send by email or share it on WhatsApp, the way your clients actually work. Every document files itself against the right client, so the full history sits in one place instead of your sent folder.`})]}),(0,A.jsxs)(`div`,{style:{width:`320px`,paddingRight:`32px`,boxSizing:`border-box`,display:`flex`,flexDirection:`column`,alignItems:`flex-start`,gap:`32px`},children:[(0,A.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`8px`},children:[(0,A.jsxs)(`div`,{style:{display:`flex`,flexDirection:`row`,alignItems:`flex-start`,gap:`8px`},children:[(0,A.jsx)(`span`,{style:{boxSizing:`border-box`,padding:`8px 16px`,height:`31px`,borderRadius:`100px`,background:`rgba(0,133,255,0.1)`,border:`1px solid rgba(0,133,255,0.3)`,fontFamily:j,fontSize:`12px`,lineHeight:`15px`,fontWeight:600,color:Ri,whiteSpace:`nowrap`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:`Email`}),(0,A.jsx)(`span`,{style:{boxSizing:`border-box`,padding:`8px 16px`,height:`31px`,borderRadius:`100px`,background:`rgba(0,133,255,0.1)`,border:`1px solid rgba(0,133,255,0.3)`,fontFamily:j,fontSize:`12px`,lineHeight:`15px`,fontWeight:600,color:Ri,whiteSpace:`nowrap`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:`WhatsApp`})]}),(0,A.jsxs)(`div`,{style:{display:`flex`,flexDirection:`row`,alignItems:`flex-start`,gap:`8px`},children:[(0,A.jsx)(`span`,{style:{boxSizing:`border-box`,padding:`8px 16px`,height:`31px`,borderRadius:`100px`,background:`rgba(0,133,255,0.1)`,border:`1px solid rgba(0,133,255,0.3)`,fontFamily:j,fontSize:`12px`,lineHeight:`15px`,fontWeight:600,color:Ri,whiteSpace:`nowrap`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:`PDF download`}),(0,A.jsx)(`span`,{style:{boxSizing:`border-box`,padding:`8px 16px`,height:`31px`,borderRadius:`100px`,background:`rgba(0,133,255,0.1)`,border:`1px solid rgba(0,133,255,0.3)`,fontFamily:j,fontSize:`12px`,lineHeight:`15px`,fontWeight:600,color:Ri,whiteSpace:`nowrap`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:`Filed against the client`})]})]}),(0,A.jsx)(`a`,{href:`#payments`,style:{width:`288px`,height:`24px`,display:`flex`,alignItems:`center`,fontFamily:j,fontSize:`16px`,lineHeight:`24px`,fontWeight:700,letterSpacing:`-0.16px`,color:Li,textDecoration:`none`},children:`Explore Contact Management →`})]})]}),(0,A.jsx)(`div`,{className:`product-crm-card-image`,style:{width:`666px`,height:`658.48px`,flex:`1 1 0`,display:`flex`,alignItems:`center`,justifyContent:`center`,overflow:`hidden`},children:(0,A.jsx)(Vi,{src:Fi,label:`IMAGE 3`})})]})}function Yi(){return(0,A.jsxs)(`section`,{id:`payments`,style:{width:`100%`,minHeight:`1008px`,padding:`80px 40px`,boxSizing:`border-box`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`62px`,background:`#FFFFFF`},children:[(0,A.jsxs)(`div`,{style:{width:`696px`,maxWidth:`100%`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`14px`,textAlign:`center`},children:[(0,A.jsx)(`h2`,{style:{margin:0,fontFamily:j,fontSize:`32px`,lineHeight:`110%`,fontWeight:500,letterSpacing:`-2px`,color:zi},children:`An invoice is only half the job.`}),(0,A.jsx)(`p`,{style:{margin:0,width:`655px`,maxWidth:`100%`,fontFamily:j,fontSize:`16px`,lineHeight:`120%`,fontWeight:400,color:Bi},children:`Sending it is easy. Getting paid is the part that keeps you up at night. Payment status, overdue alerts and automatic reminders pick up from here.`}),(0,A.jsx)(`a`,{href:`#payments`,style:{fontFamily:j,fontSize:`16px`,lineHeight:`120%`,fontWeight:700,color:Li,textDecoration:`none`},children:`See how payments work →`})]}),(0,A.jsx)(`div`,{className:`product-crm-payment-card`,style:{boxSizing:`border-box`,width:`1216px`,maxWidth:`100%`,height:`666px`,padding:`28px`,border:`1px solid #ECECEC`,borderRadius:`8px`,background:`#FFFFFF`,display:`flex`,flexDirection:`column`,justifyContent:`flex-end`,alignItems:`center`,overflow:`hidden`},children:(0,A.jsx)(Vi,{src:Ii,label:`IMAGE 4`})})]})}function Xi(){return(0,A.jsx)(`style`,{children:`

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          padding: 0;
          background: #FFFFFF;
          font-family: Inter, Arial, sans-serif;
        }


        /* =================================================
           LARGE TABLET
           ================================================= */

        @media (max-width: 1200px) {

          .product-crm-billing {
            padding-left: 40px !important;
            padding-right: 40px !important;
            gap: 40px !important;
          }

          .product-crm-billing-image {
            width: 48% !important;
          }

          .product-crm-billing-content {
            width: 48% !important;
          }

          .product-crm-not-invoices-grid {
            width: 900px !important;
          }

          .product-crm-india-tags {
            width: 900px !important;
          }

        }


        /* =================================================
           TABLET
           ================================================= */

        @media (max-width: 1000px) {

          .product-crm-wide-section {
            width: calc(100% - 40px) !important;
          }

          .product-crm-card-section {
            height: auto !important;
            min-height: 588px !important;
          }

          .product-crm-not-invoices-grid {
            width: 760px !important;
          }

          .product-crm-india-tags {
            width: 760px !important;
          }

        }


        /* =================================================
           MOBILE
           ================================================= */

        @media (max-width: 800px) {

          .product-crm-billing {
            min-height: auto !important;
            flex-direction: column !important;
            padding: 60px 20px !important;
          }

          .product-crm-billing-image {
            width: 100% !important;
            height: 500px !important;
          }

          .product-crm-billing-content {
            width: 100% !important;
            min-height: auto !important;
          }

          .product-crm-billing-title,
          .product-crm-billing-description,
          .product-crm-problem {
            width: 100% !important;
          }


          /* TAX */

          .product-crm-tax {
            width: calc(100% - 40px) !important;
            padding: 24px !important;
          }

          .product-crm-tax-cards {
            flex-direction: column !important;
          }

          .product-crm-tax-card {
            width: 100% !important;
          }


          /* NOT JUST INVOICES */

          .product-crm-not-invoices {
            min-height: auto !important;
            padding: 70px 20px !important;
          }

          .product-crm-not-invoices-grid {
            width: 100% !important;
            grid-template-columns: repeat(2, 1fr) !important;
            column-gap: 20px !important;
            row-gap: 35px !important;
          }


          /* INDIAN BILLING */

          .product-crm-india {
            min-height: auto !important;
            padding: 70px 20px !important;
          }

          .product-crm-india-tags {
            width: 100% !important;
          }


          /* CARDS */

          .product-crm-card-section {
            width: calc(100% - 40px) !important;
            height: auto !important;
            min-height: auto !important;
            flex-direction: column !important;
            padding: 30px 0 !important;
          }

          .product-crm-card-image {
            width: 100% !important;
            height: 420px !important;
          }

          .product-crm-card-content {
            width: 100% !important;
            height: auto !important;
            min-height: 450px !important;
            padding: 30px !important;
          }


          /* PAYMENTS */

          .product-crm-payments {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }

          .product-crm-payment-card {
            height: 450px !important;
          }


          /* FINAL */

          .product-crm-final-title {
            font-size: 32px !important;
          }

        }


        /* =================================================
           SMALL MOBILE
           ================================================= */

        @media (max-width: 520px) {

          .product-crm-hero-dashboard {
            height: 500px !important;
          }

          .product-crm-hero-center {
            width: calc(100% - 30px) !important;
            height: 330px !important;
          }

          .product-crm-hero-left,
          .product-crm-hero-right {
            width: 140px !important;
            height: 100px !important;
          }

          .product-crm-hero-left {
            left: 2% !important;
            top: 240px !important;
          }

          .product-crm-hero-right {
            right: 2% !important;
            top: 200px !important;
          }


          .product-crm-not-invoices-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            column-gap: 10px !important;
          }


          .product-crm-not-invoices-grid h3 {
            font-size: 13px !important;
          }


          .product-crm-india h2 {
            font-size: 27px !important;
          }


          .product-crm-final {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }

        }

      `})}function Zi(){return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)(`main`,{style:{width:`100%`,minHeight:`100vh`,margin:0,padding:0,overflowX:`hidden`,background:`#FFFFFF`,fontFamily:j},children:[(0,A.jsx)(Hi,{}),(0,A.jsx)(tr,{}),(0,A.jsx)(`div`,{className:`product-crm-billing`,children:(0,A.jsx)(Ui,{})}),(0,A.jsx)(`div`,{className:`product-crm-tax`,children:(0,A.jsx)(Wi,{})}),(0,A.jsx)(`div`,{className:`product-crm-not-invoices`,children:(0,A.jsx)(Gi,{})}),(0,A.jsx)(`div`,{className:`product-crm-wide-section`,children:(0,A.jsx)(`div`,{className:`product-crm-card-section`,children:(0,A.jsx)(qi,{})})}),(0,A.jsx)(`div`,{className:`product-crm-wide-section`,children:(0,A.jsx)(`div`,{className:`product-crm-card-section`,children:(0,A.jsx)(Ji,{})})}),(0,A.jsx)(`div`,{className:`product-crm-payments`,children:(0,A.jsx)(Yi,{})}),(0,A.jsx)(`div`,{className:`product-crm-india`,children:(0,A.jsx)(Ki,{})}),(0,A.jsx)(`div`,{className:`product-crm-final`,children:(0,A.jsx)(br,{})})]}),(0,A.jsx)(Xi,{})]})}function Qi(){return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(`style`,{children:`
        /* ============================================================
           GLOBAL
           ============================================================ */

        * {
          box-sizing: border-box;
        }

        html {
          margin: 0;
          padding: 0;
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          padding: 0;
          background: #ffffff;
          color: #242424;
          font-family: "Inter", Arial, Helvetica, sans-serif;
        }

        button,
        input {
          font-family: inherit;
        }

        button {
          cursor: pointer;
        }

        a {
          text-decoration: none;
        }

        /* ============================================================
           MAIN PAGE
           ============================================================ */

        .blog-page {
          width: 100%;
          min-height: unset;
          height: auto;
          background: #ffffff;
          overflow-x: hidden;
          position: relative;
        }

        .blog-canvas {
          width: 1440px;
          min-height: unset;
          height: auto;
          margin: 0 auto;
          position: relative;
          background: #ffffff;
        }

        /* ============================================================
           HERO BACKGROUND
           ============================================================ */

        .blog-hero-background {
          position: absolute;
          top: 379.939px;
          left: 50%;
          transform: translateX(-50%);
          width: 1920px;
          height: 945px;

          background: linear-gradient(
            to bottom,
            #ffffff 9.46%,
            #9cd0ff 45.045%,
            #ffffff 89.631%,
            #ffffff 100%
          );

          opacity: 0.5;
          pointer-events: none;
        }

        /* ============================================================
           HERO GRID
           ============================================================ */

        .blog-hero-grid {
          position: absolute;
          top: 313px;
          left: 50%;
          transform: translateX(-50%);

          width: 1340px;
          height: 1078px;

          pointer-events: none;
          opacity: 0.25;

          background-image:
            linear-gradient(
              rgba(255, 255, 255, 0.9) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.9) 1px,
              transparent 1px
            );

          background-size: 135px 135px;

          mask-image: linear-gradient(
            to bottom,
            #000000 0%,
            #000000 80%,
            transparent 100%
          );

          -webkit-mask-image: linear-gradient(
            to bottom,
            #000000 0%,
            #000000 80%,
            transparent 100%
          );
        }

        /* ============================================================
           HERO
           ============================================================ */

        .blog-hero {
          position: relative;
          width: 1440px;
          height: 313px;
          z-index: 2;
        }

        .blog-hero-content {
          position: absolute;
          top: 164px;
          left: 50%;
          transform: translateX(-50%);

          width: 1600px;
          max-width: 1600px;

          display: flex;
          flex-direction: column;
          align-items: center;

          text-align: center;
        }

        /* ============================================================
           HERO LABEL
           ============================================================ */

        .blog-hero-label {
          width: 146px;
          height: 25.8px;

          display: flex;
          align-items: center;
          justify-content: center;

          gap: 5px;

          border-radius: 12.9px;

          background: rgba(235, 230, 224, 0.2);

          margin-bottom: 28px;
        }

        .blog-hero-label-dot {
          width: 6px;
          height: 6px;

          flex: none;

          border-radius: 50%;

          background: #0085ff;
        }

        .blog-hero-label-text {
          color: #231014;

          font-size: 11.4px;
          line-height: 17px;
          font-weight: 400;

          white-space: nowrap;
        }

        /* ============================================================
           HERO TITLE
           ============================================================ */

        .blog-hero-title {
          width: 760px;
          max-width: 90%;

          margin: 0;
          padding: 0;

          color: #231014;

          font-size: 51px;
          line-height: 54px;

          font-weight: 500;

          letter-spacing: -2.7px;
        }

        /* ============================================================
           HERO DESCRIPTION
           ============================================================ */

        .blog-hero-description {
          width: 685px;

          margin: 18px 0 0;

          color: #635557;

          font-size: 13.2px;
          line-height: 20px;

          font-weight: 400;

          text-align: center;
        }

        .blog-hero-description-line {
          display: block;
        }

        /* ============================================================
           CONTENT AREA
           ============================================================ */

        .blog-main {
          position: relative;

          width: 1216px;

          margin-left: auto;
          margin-right: auto;

          z-index: 5;
        }

        /* ============================================================
           CATEGORY TABS
           ============================================================ */

        .blog-category-row {
          width: 100%;
          height: 40px;

          display: flex;
          align-items: center;
          justify-content: center;

          gap: 12px;

          margin-top: 98px;
          margin-bottom: 32px;
        }

        .blog-category-button {
          height: 40px;

          padding: 0;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 20px;

          border: 0.6px solid #dce7f0;

          background: #ffffff;

          color: #242424;

          font-size: 11px;
          line-height: 17px;

          font-weight: 400;

          box-shadow: 0 2px 3px rgba(0, 0, 0, 0.04);
        }

        .blog-category-button.active {
          background: #0085ff;
          border-color: #0085ff;
          color: #ffffff;
        }

        .blog-category-button.crm {
          width: 144px;
        }

        .blog-category-button.invoicing {
          width: 168px;
        }

        .blog-category-button.videos {
          width: 88px;
        }

        .blog-category-button.testimonials {
          width: 122px;
        }

        .blog-category-button.support {
          width: 135px;
        }

        /* ============================================================
           SEARCH + FILTERS
           ============================================================ */

        .blog-toolbar {
          width: 1216px;
          height: 42px;

          display: flex;
          align-items: center;

          gap: 12px;

          margin-bottom: 32px;
        }

        .blog-search {
          width: 917px;
          height: 41px;

          display: flex;
          align-items: center;

          border-radius: 20.5px;

          border: 1px solid #e0e0e1;

          background: #ffffff;

          padding: 0 16px;
        }

        .blog-search-icon {
          width: 16px;
          height: 16px;

          position: relative;

          flex: none;

          margin-right: 7px;
        }

        .blog-search-icon::before {
          content: "";

          position: absolute;

          width: 9px;
          height: 9px;

          left: 1px;
          top: 1px;

          border: 1.5px solid #48494c;

          border-radius: 50%;
        }

        .blog-search-icon::after {
          content: "";

          position: absolute;

          width: 6px;
          height: 1.5px;

          left: 9px;
          top: 11px;

          background: #48494c;

          transform: rotate(45deg);

          transform-origin: left center;
        }

        .blog-search-input {
          flex: 1;

          width: 100%;

          border: 0;
          outline: none;

          background: transparent;

          color: #242424;

          font-size: 11px;
          line-height: 17px;

          font-weight: 400;
        }

        .blog-search-input::placeholder {
          color: #777777;
        }

        .blog-filter {
          height: 42px;

          display: flex;
          align-items: center;
          justify-content: center;

          gap: 6px;

          border-radius: 21px;

          border: 1px solid #e5e5ec;

          background: #ffffff;

          color: #48494c;

          font-size: 10px;
          line-height: 15px;

          font-weight: 400;
        }

        .blog-filter.category {
          width: 120px;
        }

        .blog-filter.sort {
          width: 118px;
        }

        .blog-filter-icon {
          font-size: 10px;
          line-height: 1;
        }

        /* ============================================================
           ARTICLE LIST
           ============================================================ */

        .blog-list {
          width: 1216px;

          display: flex;
          flex-direction: column;

          gap: 32px;
        }

        /* ============================================================
           ARTICLE CARD
           ============================================================ */

        .blog-card {
          width: 1216px;
          height: 373.59px;

          padding: 14px;

          display: flex;
          flex-direction: row;

          align-items: stretch;

          gap: 32px;

          border-radius: 5px;

          background: #f3f9fc;

          overflow: hidden;
        }

        /* ============================================================
           ARTICLE IMAGE
           ============================================================ */

        .blog-card-image {
          width: 447.02px;
          height: 345.59px;

          flex: none;

          border-radius: 4px;

          overflow: hidden;

          background: #000000;

          position: relative;
        }

        .blog-card-image img {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: cover;
        }

        /* ============================================================
           ARTICLE CONTENT
           ============================================================ */

        .blog-card-content {
          width: 652.61px;
          height: 345.59px;

          flex: none;

          display: flex;
          flex-direction: column;

          padding-top: 12px;
          padding-right: 0;
        }

        /* ============================================================
           TAGS
           ============================================================ */

        .blog-card-tags {
          height: 17px;

          display: flex;
          align-items: center;

          color: #635557;

          font-size: 10px;
          line-height: 17px;

          font-weight: 400;

          margin-bottom: 8px;
        }

        /* ============================================================
           ARTICLE TITLE
           ============================================================ */

        .blog-card-title {
          width: 100%;

          margin: 0 0 8px;
          padding: 0;

          color: #242424;

          font-size: 28.1px;
          line-height: 36.86px;

          font-weight: 500;

          letter-spacing: -2px;
        }

        /* ============================================================
           ARTICLE DESCRIPTION
           ============================================================ */

        .blog-card-description {
          width: 100%;
          max-width: 631.81px;

          margin: 0;

          color: #635557;

          font-size: 13.2px;
          line-height: 19.6px;

          font-weight: 400;
        }

        /* ============================================================
           ARTICLE BUTTON AREA
           ============================================================ */

        .blog-card-actions {
          width: 100%;

          display: flex;

          align-items: center;
          justify-content: space-between;

          margin-top: auto;

          padding-bottom: 8px;
        }

        .blog-card-cta {
          width: 346.5px;
          height: 48px;

          border: 0;

          border-radius: 24px;

          background: #ffffff;

          color: #0085ff;

          font-size: 11px;
          line-height: 17px;

          font-weight: 500;

          display: flex;
          align-items: center;
          justify-content: center;
        }

        .blog-card-read {
          width: 120px;

          color: #0085ff;

          background: transparent;

          border: 0;

          font-size: 11px;
          line-height: 17px;

          font-weight: 500;

          text-align: right;
        }

        /* ============================================================
           GOOD THINGS BANNER
           ============================================================ */

        .blog-good-things {
          width: 1216px;
          height: 220px;

          margin-top: 85px;

          border-radius: 12px;

          background: #f3f9fc;

          position: relative;

          display: flex;
          align-items: center;

          padding: 38px;
        }

        /* ============================================================
           GOOD THINGS IMAGE
           ============================================================ */

        .blog-good-things-image {
          width: 120px;
          height: 120px;

          flex: none;

          border-radius: 8px;

          overflow: hidden;

          background: transparent;
        }

        .blog-good-things-image img {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: cover;
        }

        /* ============================================================
           GOOD THINGS CONTENT
           ============================================================ */

        .blog-good-things-content {
          width: 650px;

          margin-left: 32px;

          display: flex;
          flex-direction: column;
        }

        .blog-good-things-title {
          margin: 0 0 12px;

          color: #242424;

          font-size: 20px;
          line-height: 26px;

          font-weight: 500;
        }

        .blog-good-things-text {
          width: 620px;

          margin: 0;

          color: #707173;

          font-size: 12px;
          line-height: 18px;

          font-weight: 400;
        }

        /* ============================================================
           GOOD THINGS BUTTON
           ============================================================ */

        .blog-good-things-button {
          width: 190px;
          height: 48px;

          position: absolute;

          right: 38px;
          top: 86px;

          border: 0;

          border-radius: 24px;

          background: #ffffff;

          color: #0085ff;

          font-size: 11px;
          line-height: 17px;

          font-weight: 500;
        }

        /* ============================================================
           BLUE CTA FOOTER
           ============================================================ */

        .blog-footer {
          position: absolute;

          left: 0;
          top: 2139px;

          width: 1440px;
          height: 404px;

          background: linear-gradient(
            90deg,
            #0a55af 0%,
            #0085ff 100%
          );

          display: flex;
          flex-direction: column;

          align-items: center;
          justify-content: center;

          text-align: center;
        }

        /* ============================================================
           FOOTER TITLE
           ============================================================ */

        .blog-footer-title {
          margin: 0;

          color: #ffffff;

          font-size: 42px;
          line-height: 46px;

          font-weight: 500;

          letter-spacing: -2px;
        }

        /* ============================================================
           FOOTER DESCRIPTION
           ============================================================ */

        .blog-footer-description {
          width: 662px;

          margin: 18px 0 0;

          color: #ffffff;

          font-size: 13px;
          line-height: 20px;

          font-weight: 400;
        }

        /* ============================================================
           FOOTER BUTTONS
           ============================================================ */

        .blog-footer-buttons {
          display: flex;

          align-items: center;
          justify-content: center;

          gap: 8px;

          margin-top: 28px;
        }

        .blog-footer-button {
          height: 42px;

          padding: 0 20px;

          border-radius: 21px;

          font-size: 11px;
          line-height: 17px;

          font-weight: 500;
        }

        .blog-footer-button.primary {
          width: 142px;

          border: 0;

          background: #ffffff;

          color: #014c6c;
        }

        .blog-footer-button.secondary {
          width: 135px;

          border: 1px solid #ffffff;

          background: transparent;

          color: #ffffff;
        }

        /* ============================================================
           RESPONSIVE
           ============================================================ */

        @media (max-width: 1439px) {
          .blog-canvas {
            width: 100%;
            min-width: 0;
          }

          .blog-hero {
            width: 100%;
          }

          .blog-hero-content {
            width: 100%;
          }

          .blog-main {
            width: calc(100% - 48px);
          }

          .blog-category-row {
            width: 100%;
          }

          .blog-toolbar {
            width: 100%;
          }

          .blog-list {
            width: 100%;
          }

          .blog-card {
            width: 100%;
          }

          .blog-good-things {
            width: 100%;
          }

          .blog-footer {
            width: 100%;
          }
        }

        /* ============================================================
           TABLET
           ============================================================ */

        @media (max-width: 1000px) {
          .blog-hero-title {
            width: 720px;

            font-size: 43px;
            line-height: 48px;
          }

          .blog-category-row {
            overflow-x: auto;
            justify-content: flex-start;
            padding-bottom: 4px;
          }

          .blog-toolbar {
            flex-wrap: wrap;

            height: auto;
          }

          .blog-search {
            flex: 1;
            min-width: 300px;
          }

          .blog-card {
            height: auto;
            min-height: 373.59px;
          }

          .blog-card-image {
            width: 40%;
          }

          .blog-card-content {
            width: auto;
            flex: 1;
          }

          .blog-card-title {
            font-size: 24px;
            line-height: 31px;
          }

          .blog-card-description {
            font-size: 12px;
            line-height: 18px;
          }

          .blog-good-things-content {
            width: auto;
            flex: 1;
          }

          .blog-good-things-text {
            width: 100%;
          }
        }

        /* ============================================================
           MOBILE
           ============================================================ */

        @media (max-width: 700px) {
          .blog-page {
            min-height: unset;
            height: auto;
          }

          .blog-hero {
            height: 390px;
          }

          .blog-hero-content {
            top: 130px;
            padding: 0 20px;
          }

          .blog-hero-title {
            width: 100%;
            max-width: 600px;

            font-size: 34px;
            line-height: 39px;

            letter-spacing: -1.8px;
          }

          .blog-hero-description {
            width: 100%;

            font-size: 12px;
            line-height: 18px;
          }

          .blog-hero-description-line {
            display: inline;
          }

          .blog-main {
            width: calc(100% - 32px);
          }

          .blog-category-row {
            margin-top: 30px;
            margin-bottom: 20px;
          }

          .blog-toolbar {
            display: grid;

            grid-template-columns: 1fr 100px;

            gap: 8px;
          }

          .blog-search {
            width: 100%;

            grid-column: 1 / 3;
          }

          .blog-filter.category,
          .blog-filter.sort {
            width: 100%;
          }

          .blog-card {
            flex-direction: column;

            height: auto;

            min-height: 0;

            padding: 10px;

            gap: 16px;
          }

          .blog-card-image {
            width: 100%;
            height: 250px;
          }

          .blog-card-content {
            width: 100%;
            height: auto;
            min-height: 280px;

            padding: 5px 8px 8px;
          }

          .blog-card-title {
            font-size: 23px;
            line-height: 29px;
            letter-spacing: -1px;
          }

          .blog-card-description {
            font-size: 12px;
            line-height: 18px;
          }

          .blog-card-actions {
            margin-top: 30px;
          }

          .blog-card-cta {
            width: 65%;
            height: 42px;
          }

          .blog-good-things {
            height: auto;
            min-height: 180px;

            margin-top: 40px;

            padding: 20px;
          }

          .blog-good-things-image {
            width: 75px;
            height: 75px;
          }

          .blog-good-things-content {
            margin-left: 16px;
          }

          .blog-good-things-title {
            font-size: 16px;
            line-height: 21px;
          }

          .blog-good-things-text {
            font-size: 10px;
            line-height: 15px;
          }

          .blog-good-things-button {
            display: none;
          }

          .blog-footer {
            position: relative;

            top: auto;
            left: auto;

            width: 100%;
            height: 330px;

            margin-top: 50px;

            padding: 40px 20px;
          }

          .blog-footer-title {
            font-size: 30px;
            line-height: 34px;
          }

          .blog-footer-description {
            width: 100%;

            font-size: 12px;
            line-height: 18px;
          }
        }
      `}),(0,A.jsxs)(`div`,{className:`blog-page`,children:[(0,A.jsxs)(`div`,{className:`blog-canvas`,children:[(0,A.jsx)(`div`,{className:`blog-hero-background`}),(0,A.jsx)(`div`,{className:`blog-hero-grid`}),(0,A.jsxs)(`section`,{className:`blog-hero`,children:[(0,A.jsx)(`div`,{className:`\r
                absolute\r
                left-1/2\r
                top-[0.7%]\r
                z-50\r
                -translate-x-1/2\r
                scale-[0.5]\r
                min-[1000px]:scale-[0.75]\r
                min-[1400px]:scale-100\r
              `,children:(0,A.jsx)(er,{})}),(0,A.jsxs)(`div`,{className:`blog-hero-content`,children:[(0,A.jsxs)(`div`,{className:`blog-hero-label`,children:[(0,A.jsx)(`span`,{className:`blog-hero-label-dot`}),(0,A.jsx)(`span`,{className:`blog-hero-label-text`,children:`DataCircles Blog`})]}),(0,A.jsxs)(`h1`,{className:`blog-hero-title`,children:[`Practical advice for`,(0,A.jsx)(`br`,{}),`winning customers and getting paid.`]}),(0,A.jsxs)(`p`,{className:`blog-hero-description`,children:[(0,A.jsx)(`span`,{className:`blog-hero-description-line`,children:`Straightforward guides on sales, follow-ups, GST and getting paid on`}),(0,A.jsx)(`span`,{className:`blog-hero-description-line`,children:`time, written for the people actually running Indian businesses.`})]})]})]}),(0,A.jsxs)(`main`,{className:`blog-main`,children:[(0,A.jsxs)(`nav`,{className:`blog-category-row`,children:[(0,A.jsx)(`button`,{type:`button`,className:`blog-category-button crm active`,children:`CRM Resources`}),(0,A.jsx)(`button`,{type:`button`,className:`blog-category-button invoicing`,children:`Invoicing Resources`}),(0,A.jsx)(`button`,{type:`button`,className:`blog-category-button videos`,children:`Videos`}),(0,A.jsx)(`button`,{type:`button`,className:`blog-category-button testimonials`,children:`Testimonials`}),(0,A.jsx)(`button`,{type:`button`,className:`blog-category-button support`,children:`Support Guide`})]}),(0,A.jsxs)(`div`,{className:`blog-toolbar`,children:[(0,A.jsxs)(`label`,{className:`blog-search`,children:[(0,A.jsx)(`span`,{className:`blog-search-icon`}),(0,A.jsx)(`input`,{className:`blog-search-input`,type:`text`,placeholder:`Lorem ipsum dolor self amet consectetur`,"aria-label":`Search blog`})]}),(0,A.jsxs)(`button`,{type:`button`,className:`blog-filter category`,children:[(0,A.jsx)(`span`,{className:`blog-filter-icon`,children:`◉`}),`Category`]}),(0,A.jsxs)(`button`,{type:`button`,className:`blog-filter sort`,children:[(0,A.jsx)(`span`,{className:`blog-filter-icon`,children:`⇅`}),`Sort by`]})]}),(0,A.jsx)(`section`,{className:`blog-list`,children:[{image:`https://res.cloudinary.com/tpxo8m6a/image/upload/v1787925586/b53ad774db53413711aeb21c7fda31ba77fde6ed_1.jpg`},{image:`https://res.cloudinary.com/tpxo8m6a/image/upload/v1787925586/b53ad774db53413711aeb21c7fda31ba77fde6ed_1.jpg`},{image:`https://res.cloudinary.com/tpxo8m6a/image/upload/v1787925586/b53ad774db53413711aeb21c7fda31ba77fde6ed_1.jpg`}].map((e,t)=>(0,A.jsxs)(`article`,{className:`blog-card`,children:[(0,A.jsx)(`div`,{className:`blog-card-image`,children:e.image&&(0,A.jsx)(`img`,{src:e.image,alt:``})}),(0,A.jsxs)(`div`,{className:`blog-card-content`,children:[(0,A.jsx)(`div`,{className:`blog-card-tags`,children:`Tag 1 · Tag 2 · Tag 3`}),(0,A.jsx)(`h2`,{className:`blog-card-title`,children:`Lorem ipsum dolor self amet`}),(0,A.jsx)(`p`,{className:`blog-card-description`,children:`Straightforward guides on sales, follow-ups, GST and getting paid on time, written for the people actually running Indian businesses.`}),(0,A.jsxs)(`div`,{className:`blog-card-actions`,children:[(0,A.jsx)(`button`,{type:`button`,className:`blog-card-cta`,children:`CTA 1`}),(0,A.jsx)(`button`,{type:`button`,className:`blog-card-read`,children:`CTA 2 →`})]})]})]},t))}),(0,A.jsxs)(`section`,{className:`blog-good-things`,children:[(0,A.jsx)(`div`,{className:`blog-good-things-image`,children:(0,A.jsx)(`img`,{src:`https://res.cloudinary.com/tpxo8m6a/image/upload/v1787925572/9ceea6c9995cc123e0a4b3b50ef9ac054933cbda_1.png`,alt:``})}),(0,A.jsxs)(`div`,{className:`blog-good-things-content`,children:[(0,A.jsx)(`h2`,{className:`blog-good-things-title`,children:`Good things are on the way!`}),(0,A.jsx)(`p`,{className:`blog-good-things-text`,children:`We're a small team, and we'd rather publish something genuinely useful than fill this page for the sake of it. Our first guides are coming soon. In the meantime, our free tools are ready for you today.`})]}),(0,A.jsx)(`button`,{type:`button`,className:`blog-good-things-button`,children:`Try our Free Tools`})]})]})]}),(0,A.jsx)(br,{})]})]})}function $i(){let e=[{image:`https://res.cloudinary.com/tpxo8m6a/image/upload/v1787925586/b53ad774db53413711aeb21c7fda31ba77fde6ed_1.jpg`,title:`Lorem ipsum dolor self amet`},{image:`https://res.cloudinary.com/tpxo8m6a/image/upload/v1787925586/b53ad774db53413711aeb21c7fda31ba77fde6ed_1.jpg`,title:`Lorem ipsum dolor self amet`},{image:`https://res.cloudinary.com/tpxo8m6a/image/upload/v1787925586/b53ad774db53413711aeb21c7fda31ba77fde6ed_1.jpg`,title:`Lorem ipsum dolor self amet`}],[t,n]=(0,x.useState)(0);return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(`style`,{children:`

        /* ============================================================
           GLOBAL
           ============================================================ */

        * {
          box-sizing: border-box;
        }

        html {
          margin: 0;
          padding: 0;
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          padding: 0;
          background: #ffffff;
          color: #242424;
          font-family: "Inter", Arial, Helvetica, sans-serif;
        }

        button,
        input {
          font-family: inherit;
        }

        button {
          cursor: pointer;
        }

        /* ============================================================
           PAGE
           ============================================================ */

        .guide-page {
          width: 100%;
          min-height: 4412px;
          overflow-x: hidden;
          background: #ffffff;
        }

        .guide-canvas {
          position: relative;
          width: 1440px;
          min-height: 4412px;
          margin: 0 auto;
          overflow: hidden;
          background: #ffffff;
        }

        /* ============================================================
           BACKGROUND
           ============================================================ */

        .guide-background {
          position: absolute;
          z-index: 0;
          top: 269.939px;
          left: 50%;
          width: 1920px;
          height: 945px;
          transform: translateX(-50%);
          pointer-events: none;
          opacity: 0.5;

          background:
            linear-gradient(
              to bottom,
              #ffffff 9.46%,
              #9cd0ff 45.045%,
              #ffffff 89.631%,
              #ffffff 100%
            );
        }

        .guide-grid {
          position: absolute;
          z-index: 0;
          top: 203px;
          left: 50%;
          width: 1340px;
          height: 1078px;
          transform: translateX(-50%);
          pointer-events: none;
          opacity: 0.25;

          background-image:
            linear-gradient(
              rgba(255,255,255,0.9) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,0.9) 1px,
              transparent 1px
            );

          background-size: 135px 135px;

          mask-image: linear-gradient(
            to bottom,
            #000 0%,
            #000 80%,
            transparent 100%
          );

          -webkit-mask-image: linear-gradient(
            to bottom,
            #000 0%,
            #000 80%,
            transparent 100%
          );
        }

        /* ============================================================
           HEADER
           ============================================================ */

        .guide-header {
          position: relative;
          z-index: 5;
          width: 100%;
          height: 570px;

          padding-top: 168px;
        }

        /* ============================================================
           NAVBAR
           ============================================================ */

        .guide-navbar-wrapper {
          position: absolute;
          z-index: 50;
          top: 0.7%;
          left: 50%;
          transform: translateX(-50%);
          transform-origin: top center;
        }

        /* ============================================================
           ARTICLE CATEGORY
           ============================================================ */

        .guide-category {
          width: 760px;
          margin: 0 auto;
          padding-top: 0;
        }

        .guide-category-pill {
          width: 112px;
          height: 36px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 18px;

          background: #0085ff;
          color: #ffffff;

          font-size: 13px;
          line-height: 19px;
          font-weight: 500;
        }

        /* ============================================================
           ARTICLE TITLE
           ============================================================ */

        .guide-title {
          width: 760px;

          margin: 32px 0 0;
          padding: 0;

          color: #242424;

          font-size: 36px;
          line-height: 43px;

          font-weight: 500;

          letter-spacing: -1.5px;
        }

        /* ============================================================
           ARTICLE SUBTITLE
           ============================================================ */

        .guide-subtitle {
          width: 760px;

          margin: 10px 0 0;

          color: #78788d;

          font-size: 16px;
          line-height: 23px;

          font-weight: 400;
        }

        /* ============================================================
           AUTHOR
           ============================================================ */

        .guide-author {
          display: flex;
          align-items: center;

          gap: 12px;

          margin-top: 28px;
        }

        .guide-author-avatar {
          width: 40px;
          height: 40px;

          flex: none;

          border-radius: 50%;

          background: #d9d9d9;

          overflow: hidden;
        }

        .guide-author-avatar img {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: cover;
        }

        .guide-author-info {
          display: flex;
          flex-direction: column;

          gap: 2px;
        }

        .guide-author-name {
          color: #242424;

          font-size: 12px;
          line-height: 16px;

          font-weight: 600;
        }

        .guide-author-meta {
          color: #a2a2a8;

          font-size: 10px;
          line-height: 14px;

          font-weight: 400;
        }

        /* ============================================================
           HEADER RULE
           ============================================================ */

        .guide-header-rule {
          width: 760px;
          height: 1px;

          margin: 28px auto 0;

          background: #d9d9d9;
        }

        /* ============================================================
           PREVIOUS / NEXT RESOURCE
           ============================================================ */

        .guide-prev,
        .guide-next {
          position: absolute;

          top: 177px;

          color: #999aa2;

          font-size: 11px;
          line-height: 17px;

          font-weight: 400;

          white-space: nowrap;

          border: 0;
          background: transparent;

          padding: 0;
        }

        .guide-prev {
          left: 20px;
        }

        .guide-next {
          right: 20px;
        }

        /* ============================================================
           ARTICLE BODY
           ============================================================ */

        .guide-body {
          position: relative;
          z-index: 5;

          width: 760px;

          margin: 0 auto;
        }

        /* ============================================================
           HERO IMAGE
           ============================================================ */

        .guide-hero-image {
          width: 760px;
          height: 424px;

          overflow: hidden;

          border-radius: 8px;

          background: #d9d9d9;
        }

        .guide-hero-image img {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: cover;
        }

        /* ============================================================
           ARTICLE COPY
           ============================================================ */

        .guide-copy {
          width: 760px;

          margin-top: 48px;
        }

        .guide-section {
          margin: 0 0 28px;
        }

        .guide-section-title {
          margin: 0 0 5px;

          color: #242424;

          font-size: 16px;
          line-height: 21px;

          font-weight: 600;
        }

        .guide-section-text {
          margin: 0;

          color: #78788d;

          font-size: 16px;
          line-height: 22px;

          font-weight: 400;
        }

        /* ============================================================
           IN THIS RESOURCE
           ============================================================ */

        .guide-resource-box {
          width: 760px;
          min-height: 170px;

          margin: 32px 0;

          padding: 28px 30px;

          border-radius: 12px;

          background: #f1f8fc;
        }

        .guide-resource-title {
          margin: 0 0 16px;

          color: #242424;

          font-size: 17px;
          line-height: 22px;

          font-weight: 600;
        }

        .guide-resource-list {
          display: grid;

          grid-template-columns: 1fr 1fr;

          column-gap: 80px;
          row-gap: 12px;
        }

        .guide-resource-item {
          display: flex;

          align-items: center;

          gap: 8px;

          color: #78788d;

          font-size: 12px;
          line-height: 17px;
        }

        .guide-resource-check {
          color: #8b8d96;

          font-size: 14px;
          line-height: 1;
        }

        /* ============================================================
           ARTICLE CTA
           ============================================================ */

        .guide-article-cta {
          width: 760px;
          height: 260px;

          margin-top: 32px;

          display: flex;

          flex-direction: column;

          align-items: center;
          justify-content: center;

          border-radius: 10px;

          background:
            linear-gradient(
              90deg,
              #0a55af 0%,
              #0085ff 100%
            );

          text-align: center;
        }

        .guide-article-cta-title {
          margin: 0;

          color: #ffffff;

          font-size: 28px;
          line-height: 35px;

          font-weight: 500;

          letter-spacing: -1px;
        }

        .guide-article-cta-text {
          width: 620px;

          margin: 16px 0 0;

          color: rgba(255,255,255,0.75);

          font-size: 14px;
          line-height: 20px;

          font-weight: 400;
        }

        .guide-article-cta-button {
          width: 180px;
          height: 48px;

          margin-top: 22px;

          border: 0;

          border-radius: 24px;

          background: #ffffff;

          color: #0085ff;

          font-size: 12px;
          line-height: 17px;

          font-weight: 500;
        }

        .guide-article-cta-button:hover {
          transform: translateY(-2px);
        }

        /* ============================================================
           ARTICLE ACTIONS
           ============================================================ */

        .guide-actions {
          width: 760px;
          min-height: 116px;

          display: flex;

          align-items: center;
          justify-content: center;

          gap: 12px;

          border-top: 1px solid #d9d9d9;
          border-bottom: 1px solid #d9d9d9;
        }

        .guide-action {
          height: 32px;

          padding: 0 15px;

          border: 0;

          border-radius: 16px;

          background: #11151a;

          color: #ffffff;

          font-size: 11px;
          line-height: 16px;

          font-weight: 500;
        }

        /* ============================================================
           MORE READS
           ============================================================ */

        .guide-more {
          position: relative;

          z-index: 5;

          width: 1304px;

          margin: 48px auto 0;
        }

        .guide-more-title {
          margin: 0 0 30px;

          color: #242424;

          font-size: 32px;
          line-height: 40px;

          font-weight: 500;

          letter-spacing: -1.5px;
        }

        /* ============================================================
           MORE READS TRACK
           ============================================================ */

        .guide-more-track {
          display: flex;

          gap: 20px;

          width: max-content;
        }

        /* ============================================================
           MORE READ CARD
           ============================================================ */

        .guide-more-card {
          width: 438px;
          height: 456px;

          padding: 14px;

          border-radius: 5px;

          background: #f1f8fc;

          overflow: hidden;
        }

        .guide-more-image {
          width: 410px;
          height: 315px;

          overflow: hidden;

          border-radius: 4px;

          background: #d9d9d9;
        }

        .guide-more-image img {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: cover;
        }

        .guide-more-tags {
          margin-top: 14px;

          color: #707173;

          font-size: 12px;
          line-height: 17px;
        }

        .guide-more-card-title {
          margin: 7px 0 0;

          color: #242424;

          font-size: 22px;
          line-height: 27px;

          font-weight: 500;

          letter-spacing: -0.7px;
        }

        .guide-more-card-text {
          margin: 7px 0 0;

          color: #635557;

          font-size: 12px;
          line-height: 17px;
        }

        /* ============================================================
           MORE READ ARROWS
           ============================================================ */

        .guide-more-arrows {
          display: flex;

          justify-content: flex-end;

          gap: 14px;

          margin-top: 30px;

          padding-right: 4px;
        }

        .guide-more-arrow {
          width: 38px;
          height: 38px;

          border: 0;

          border-radius: 50%;

          background: #11151a;

          color: #ffffff;

          font-size: 21px;
          line-height: 38px;

          text-align: center;
        }

        /* ============================================================
           BLACK PRACTICE SECTION
           ============================================================ */

        .guide-practice {
          position: absolute;

          z-index: 4;

          left: 0;
          top: 3090px;

          width: 1440px;
          height: 1322px;

          background: #000000;

          text-align: center;

          color: #ffffff;

          padding-top: 78px;
        }

        /* ============================================================
           PRACTICE LABEL
           ============================================================ */

        .guide-practice-label {
          margin: 0;

          color: #0085ff;

          font-size: 13px;
          line-height: 19px;

          font-weight: 500;
        }

        /* ============================================================
           PRACTICE TITLE
           ============================================================ */

        .guide-practice-title {
          margin: 18px 0 0;

          color: #ffffff;

          font-size: 42px;
          line-height: 50px;

          font-weight: 500;

          letter-spacing: -1.8px;
        }

        /* ============================================================
           PRACTICE DESCRIPTION
           ============================================================ */

        .guide-practice-text {
          width: 620px;

          margin: 20px auto 0;

          color: #b7b7b7;

          font-size: 14px;
          line-height: 20px;
        }

        /* ============================================================
           PRACTICE BUTTONS
           ============================================================ */

        .guide-practice-buttons {
          display: flex;

          justify-content: center;

          gap: 10px;

          margin-top: 24px;
        }

        .guide-practice-button {
          height: 40px;

          padding: 0 22px;

          border-radius: 20px;

          font-size: 11px;
          line-height: 16px;

          font-weight: 500;
        }

        .guide-practice-button.primary {
          border: 0;

          background: #ffffff;

          color: #00538a;
        }

        .guide-practice-button.secondary {
          border: 1px solid #ffffff;

          background: transparent;

          color: #ffffff;
        }

        /* ============================================================
           PRACTICE IMAGE CAROUSEL
           ============================================================ */

        .guide-practice-carousel {
          position: absolute;

          left: 0;
          top: 0;

          width: 1440px;
          height: 1012px;

          overflow: visible;
          background: transparent;

          pointer-events: none;
        }

        /* ============================================================
           MAIN IMAGE
           ============================================================ */

        .guide-practice-slide {
          position: absolute;

          box-sizing: border-box;

          overflow: hidden;

          border-radius: 7px;

          background: #ffffff;

          transform-origin: center center;

          transition:
            left 650ms cubic-bezier(0.22, 1, 0.36, 1),
            top 650ms cubic-bezier(0.22, 1, 0.36, 1),
            width 650ms cubic-bezier(0.22, 1, 0.36, 1),
            height 650ms cubic-bezier(0.22, 1, 0.36, 1),
            opacity 500ms ease,
            filter 500ms ease,
            box-shadow 500ms ease;

          will-change:
            left,
            top,
            width,
            height,
            opacity,
            filter;

          pointer-events: none;
        }

        .guide-practice-slide img {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: contain;

          background: #ffffff;
        }

        /* ============================================================
           ACTIVE / CENTER IMAGE
           ============================================================ */

        .guide-practice-slide.active {
          z-index: 10;

          left: 50%;
          top: 360px;

          width: 942px;
          height: 652px;

          opacity: 1;

          filter: none;

          box-shadow:
            0 26px 65px rgba(255, 255, 255, 0.05),
            0 18px 40px rgba(0, 0, 0, 0.20);

          transform: translateX(-50%);
        }

        /* ============================================================
           PREVIOUS / LOWER-LEFT IMAGE
           ============================================================ */

        .guide-practice-slide.previous {
          z-index: 20;

          left: 139px;
          top: 757px;

          width: 206px;
          height: 191px;

          opacity: 0.72;

          filter: none;

          box-shadow:
            0 16px 30px rgba(0, 0, 0, 0.35);

          transform: none;
        }

        /* ============================================================
           NEXT / UPPER-RIGHT IMAGE
           ============================================================ */

        .guide-practice-slide.next {
          z-index: 20;

          left: 1040px;
          top: 546px;

          width: 206px;
          height: 191px;

          opacity: 0.72;

          filter: none;

          box-shadow:
            0 16px 30px rgba(0, 0, 0, 0.35);

          transform: none;
        }

        .guide-practice-slide-empty {
          width: 100%;
          height: 100%;

          background: #ffffff;
        }

        /* ============================================================
           PRACTICE CONTROLS
           ============================================================ */

        .guide-practice-controls {
          position: absolute;

          left: 50%;
          bottom: 42px;

          transform: translateX(-50%);

          z-index: 50;

          display: flex;
          align-items: center;
          justify-content: center;

          gap: 12px;
        }

        .guide-practice-control {
          width: 38px;
          height: 38px;

          border: 1px solid rgba(255,255,255,0.35);

          border-radius: 50%;

          background: rgba(255,255,255,0.08);

          color: #ffffff;

          font-size: 18px;
          line-height: 38px;

          display: flex;
          align-items: center;
          justify-content: center;
        }

        .guide-practice-control:hover {
          background: rgba(255,255,255,0.16);
        }

        /* ============================================================
           PRACTICE DOTS
           ============================================================ */

        .guide-practice-dots {
          position: absolute;

          left: 50%;
          bottom: 28px;

          transform: translateX(-50%);

          z-index: 50;

          display: flex;
          align-items: center;

          gap: 6px;
        }

        .guide-practice-dot {
          width: 6px;
          height: 6px;

          padding: 0;

          border: 0;

          border-radius: 50%;

          background: rgba(255,255,255,0.35);
        }

        .guide-practice-dot.active {
          background: #ffffff;
        }

        /* ============================================================
           RESPONSIVE
           ============================================================ */

        @media (max-width: 1439px) {

          .guide-canvas {
            width: 100%;
            min-width: 0;
          }

          .guide-header {
            width: 100%;
          }

          .guide-category,
          .guide-title,
          .guide-subtitle,
          .guide-header-rule,
          .guide-body {
            width: calc(100% - 48px);
          }

          .guide-title {
            max-width: 760px;
          }

          .guide-subtitle {
            max-width: 760px;
          }

          .guide-header-rule {
            max-width: 760px;
          }

          .guide-hero-image,
          .guide-copy,
          .guide-resource-box,
          .guide-article-cta,
          .guide-actions {
            width: 100%;
          }

          .guide-more {
            width: calc(100% - 48px);
          }

          .guide-practice {
            width: 100%;
          }

          .guide-practice-carousel {
            left: 50%;
            width: 1440px;
            height: 1012px;

            transform:
              translateX(-50%)
              scale(
                min(
                  1,
                  calc((100vw - 48px) / 1440)
                )
              );

            transform-origin: top center;
          }
        }

        /* ============================================================
           TABLET
           ============================================================ */

        @media (max-width: 1000px) {

          .guide-navbar-wrapper {
            transform:
              translateX(-50%)
              scale(0.75);

            transform-origin: top center;
          }

          .guide-header {
            padding-top: 155px;
          }

          .guide-title {
            font-size: 32px;
            line-height: 39px;
          }

          .guide-subtitle {
            font-size: 15px;
            line-height: 22px;
          }

          .guide-resource-list {
            grid-template-columns: 1fr;
          }

          .guide-practice-title {
            font-size: 36px;
            line-height: 44px;
          }

          .guide-practice-text {
            width: 80%;
          }
        }

        /* ============================================================
           MOBILE
           ============================================================ */

        @media (max-width: 700px) {

          .guide-page {
            min-height: 100vh;
          }

          .guide-canvas {
            min-height: 3500px;
          }

          .guide-navbar-wrapper {
            transform:
              translateX(-50%)
              scale(0.5);

            transform-origin: top center;
          }

          .guide-header {
            height: 520px;

            padding-top: 145px;
          }

          .guide-prev,
          .guide-next {
            display: none;
          }

          .guide-category,
          .guide-title,
          .guide-subtitle,
          .guide-header-rule,
          .guide-body {
            width: calc(100% - 32px);
          }

          .guide-title {
            margin-top: 28px;

            font-size: 30px;
            line-height: 36px;
          }

          .guide-subtitle {
            font-size: 14px;
            line-height: 20px;
          }

          .guide-hero-image {
            height: 260px;
          }

          .guide-copy {
            margin-top: 32px;
          }

          .guide-section-text {
            font-size: 14px;
            line-height: 20px;
          }

          .guide-resource-list {
            grid-template-columns: 1fr;
          }

          .guide-article-cta {
            height: 230px;

            padding: 20px;
          }

          .guide-article-cta-title {
            font-size: 24px;
            line-height: 30px;
          }

          .guide-article-cta-text {
            width: 100%;

            font-size: 12px;
          }

          .guide-more {
            width: calc(100% - 32px);
          }

          .guide-more-track {
            width: 100%;

            flex-direction: column;
          }

          .guide-more-card {
            width: 100%;

            height: auto;
          }

          .guide-more-image {
            width: 100%;

            height: 250px;
          }

          .guide-practice {
            position: relative;

            top: auto;

            height: 700px;

            margin-top: 70px;

            padding: 60px 20px;
          }

          .guide-practice-title {
            font-size: 32px;
            line-height: 38px;
          }

          .guide-practice-text {
            width: 100%;
          }

          .guide-practice-carousel {
            top: 330px;

            width: calc(100% - 32px);

            height: 300px;
          }

          .guide-practice-controls {
            bottom: 18px;
          }

          .guide-practice-dots {
            bottom: 33px;
          }
        }

      `}),(0,A.jsx)(`div`,{className:`guide-page`,children:(0,A.jsxs)(`div`,{className:`guide-canvas`,children:[(0,A.jsx)(`div`,{className:`guide-background`}),(0,A.jsx)(`div`,{className:`guide-grid`}),(0,A.jsx)(`div`,{className:`guide-navbar-wrapper`,children:(0,A.jsx)(er,{})}),(0,A.jsxs)(`header`,{className:`guide-header`,children:[(0,A.jsx)(`button`,{type:`button`,className:`guide-prev`,children:`‹ Previous Resource`}),(0,A.jsx)(`button`,{type:`button`,className:`guide-next`,children:`Next Resource ›`}),(0,A.jsxs)(`div`,{className:`guide-category`,children:[(0,A.jsx)(`div`,{className:`guide-category-pill`,children:`Getting Paid`}),(0,A.jsx)(`h1`,{className:`guide-title`,children:`How to get clients to pay on time`}),(0,A.jsx)(`p`,{className:`guide-subtitle`,children:`Late payments choke small businesses. Here's a practical, no-drama way to get paid when you're supposed to be.`}),(0,A.jsxs)(`div`,{className:`guide-author`,children:[(0,A.jsx)(`div`,{className:`guide-author-avatar`}),(0,A.jsxs)(`div`,{className:`guide-author-info`,children:[(0,A.jsx)(`div`,{className:`guide-author-name`,children:`Author Name`}),(0,A.jsx)(`div`,{className:`guide-author-meta`,children:`22 Jul 2026 · 6 min read`})]})]}),(0,A.jsx)(`div`,{className:`guide-header-rule`})]})]}),(0,A.jsxs)(`main`,{className:`guide-body`,children:[(0,A.jsx)(`div`,{className:`guide-hero-image`,children:null}),(0,A.jsxs)(`div`,{className:`guide-copy`,children:[(0,A.jsxs)(`section`,{className:`guide-section`,children:[(0,A.jsx)(`h2`,{className:`guide-section-title`,children:`Lorem ipsum`}),(0,A.jsx)(`p`,{className:`guide-section-text`,children:`dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.`})]}),(0,A.jsxs)(`section`,{className:`guide-section`,children:[(0,A.jsx)(`h2`,{className:`guide-section-title`,children:`Lorem ipsum`}),(0,A.jsx)(`p`,{className:`guide-section-text`,children:`Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.`})]}),(0,A.jsxs)(`section`,{className:`guide-resource-box`,children:[(0,A.jsx)(`h2`,{className:`guide-resource-title`,children:`In this Resource`}),(0,A.jsxs)(`div`,{className:`guide-resource-list`,children:[(0,A.jsxs)(`div`,{className:`guide-resource-item`,children:[(0,A.jsx)(`span`,{className:`guide-resource-check`,children:`✓`}),(0,A.jsx)(`span`,{children:`Lorem ipsum dolor`})]}),(0,A.jsxs)(`div`,{className:`guide-resource-item`,children:[(0,A.jsx)(`span`,{className:`guide-resource-check`,children:`✓`}),(0,A.jsx)(`span`,{children:`Lorem ipsum dolor`})]}),(0,A.jsxs)(`div`,{className:`guide-resource-item`,children:[(0,A.jsx)(`span`,{className:`guide-resource-check`,children:`✓`}),(0,A.jsx)(`span`,{children:`Lorem ipsum dolor`})]}),(0,A.jsxs)(`div`,{className:`guide-resource-item`,children:[(0,A.jsx)(`span`,{className:`guide-resource-check`,children:`✓`}),(0,A.jsx)(`span`,{children:`Lorem ipsum dolor`})]}),(0,A.jsxs)(`div`,{className:`guide-resource-item`,children:[(0,A.jsx)(`span`,{className:`guide-resource-check`,children:`✓`}),(0,A.jsx)(`span`,{children:`Lorem ipsum dolor`})]}),(0,A.jsxs)(`div`,{className:`guide-resource-item`,children:[(0,A.jsx)(`span`,{className:`guide-resource-check`,children:`✓`}),(0,A.jsx)(`span`,{children:`Lorem ipsum dolor`})]})]})]}),(0,A.jsxs)(`section`,{className:`guide-section`,children:[(0,A.jsx)(`h2`,{className:`guide-section-title`,children:`Lorem ipsum`}),(0,A.jsx)(`p`,{className:`guide-section-text`,children:`dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.`})]}),(0,A.jsxs)(`section`,{className:`guide-section`,children:[(0,A.jsx)(`h2`,{className:`guide-section-title`,children:`Lorem ipsum`}),(0,A.jsx)(`p`,{className:`guide-section-text`,children:`Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.`})]}),(0,A.jsxs)(`section`,{className:`guide-article-cta`,children:[(0,A.jsx)(`h2`,{className:`guide-article-cta-title`,children:`DataCircles chases payments for you.`}),(0,A.jsx)(`p`,{className:`guide-article-cta-text`,children:`Send an invoice, and automatic reminders do the follow-up so you don't have to. Everything in one place, from lead to paid.`}),(0,A.jsx)(`button`,{type:`button`,className:`guide-article-cta-button`,children:`Start Free`})]}),(0,A.jsxs)(`div`,{className:`guide-actions`,children:[(0,A.jsx)(`button`,{type:`button`,className:`guide-action`,children:`↓ Download PDF`}),(0,A.jsx)(`button`,{type:`button`,className:`guide-action`,children:`♧ Share`}),(0,A.jsx)(`button`,{type:`button`,className:`guide-action`,children:`♧ Set Alert`})]})]})]}),(0,A.jsxs)(`section`,{className:`guide-more`,children:[(0,A.jsx)(`h2`,{className:`guide-more-title`,children:`More Reads`}),(0,A.jsx)(`div`,{className:`guide-more-track`,children:e.map((e,t)=>(0,A.jsxs)(`article`,{className:`guide-more-card`,children:[(0,A.jsx)(`div`,{className:`guide-more-image`,children:e.image?(0,A.jsx)(`img`,{src:e.image,alt:``}):null}),(0,A.jsx)(`div`,{className:`guide-more-tags`,children:`Tag 1 · Tag 2 · Tag 3`}),(0,A.jsx)(`h3`,{className:`guide-more-card-title`,children:e.title}),(0,A.jsx)(`p`,{className:`guide-more-card-text`,children:`Straightforward guides on sales, follow-ups, GST and getting paid on time, written for the people actually running Indian businesses.`})]},t))}),(0,A.jsxs)(`div`,{className:`guide-more-arrows`,children:[(0,A.jsx)(`button`,{type:`button`,className:`guide-more-arrow`,children:`←`}),(0,A.jsx)(`button`,{type:`button`,className:`guide-more-arrow`,children:`→`})]})]}),(0,A.jsxs)(`section`,{className:`guide-practice`,children:[(0,A.jsx)(`p`,{className:`guide-practice-label`,children:`One Dashboard`}),(0,A.jsx)(`h2`,{className:`guide-practice-title`,children:`Put this into Practice`}),(0,A.jsx)(`p`,{className:`guide-practice-text`,children:`DataCircles keeps your leads, follow-ups, invoices and payments in one place. Start free, no credit card needed.`}),(0,A.jsxs)(`div`,{className:`guide-practice-buttons`,children:[(0,A.jsx)(`button`,{type:`button`,className:`guide-practice-button primary`,children:`Create Account`}),(0,A.jsx)(`button`,{type:`button`,className:`guide-practice-button secondary`,children:`Book a Demo`})]}),(0,A.jsxs)(`div`,{className:`guide-practice-carousel`,children:[(0,A.jsx)(`div`,{className:`guide-practice-slide ${t===0?`active`:t===1?`previous`:`next`}`,children:(0,A.jsx)(`img`,{src:`https://res.cloudinary.com/tpxo8m6a/image/upload/v1787832876/b785b93f10ee527292fd9e6b3cba9c838587764b.png`,alt:``})}),(0,A.jsx)(`div`,{className:`guide-practice-slide ${t===1?`active`:t===2?`previous`:`next`}`,children:(0,A.jsx)(`img`,{src:`https://res.cloudinary.com/tpxo8m6a/image/upload/v1787832856/7318c219e2b5c2c73ed078df153915c50d9cc106.png`,alt:``})}),(0,A.jsx)(`div`,{className:`guide-practice-slide ${t===2?`active`:t===0?`previous`:`next`}`,children:(0,A.jsx)(`img`,{src:`https://res.cloudinary.com/tpxo8m6a/image/upload/v1787832856/7318c219e2b5c2c73ed078df153915c50d9cc106.png`,alt:``})})]})]})]})})]})}var ea=()=>{let e=[{image:`YOUR_QUOTES_IMAGE`,title:`Quotes`,description:`Create and manage quotes effortlessly. Customize pricing, terms, and conditions to win more deals.`,button:`Explore Quotes`},{image:`YOUR_SALES_ORDERS_IMAGE`,title:`Sales Orders`,description:`Convert quotes into sales orders seamlessly. Track orders and manage fulfillment with ease.`,button:`Explore Sales Orders`},{image:`YOUR_INVOICES_IMAGE`,title:`Invoices`,description:`Generate professional invoices in seconds. Send, track, and get paid faster.`,button:`Explore Invoices`},{image:`YOUR_CREDIT_NOTES_IMAGE`,title:`Credit Notes`,description:`Issue credit notes and manage refunds smoothly. Maintain transparency with your customers.`,button:`Explore Credit Notes`}];return(0,A.jsxs)(`div`,{className:`min-h-screen w-full overflow-x-hidden bg-white`,children:[(0,A.jsx)(`div`,{className:`mb-5 h-[18px] w-full bg-[#ABABAB]`}),(0,A.jsx)(er,{}),(0,A.jsxs)(`main`,{className:`w-full`,children:[(0,A.jsxs)(`section`,{className:`mt-12 flex h-auto w-full flex-col items-center px-4 sm:mt-16 sm:px-6 lg:mt-20`,children:[(0,A.jsxs)(`div`,{className:`flex w-fit items-center justify-center gap-2 rounded-full bg-[#EBE6E033] px-3 py-1`,children:[(0,A.jsx)(`span`,{className:`h-[7px] w-[7px] shrink-0 rounded-full bg-[#0085FF]`}),(0,A.jsx)(`span`,{className:`font-inter text-[11px] font-normal leading-none text-black`,children:`Free Tools`})]}),(0,A.jsx)(`div`,{className:`mt-6 flex h-auto w-full max-w-[635px] items-center justify-center text-center`,children:(0,A.jsxs)(`h1`,{className:`font-inter text-[32px] font-semibold leading-[1.1] text-black sm:text-[40px] md:text-[48px]`,children:[`Free Tools to help`,(0,A.jsx)(`br`,{}),`Indian businesses to Grow`]})}),(0,A.jsx)(`div`,{className:`mt-3 flex h-auto w-full max-w-[850px] items-center justify-center text-center`,children:(0,A.jsxs)(`p`,{className:`w-[850px] font-inter text-[14px] font-normal leading-[20px] text-black/60 sm:text-[15px] md:text-[16px]`,children:[`Make professional invoices, quotations and more, genuinely free.`,(0,A.jsx)(`br`,{}),`No sign-up, no watermark, no catch. It's our small way of backing the businesses building India.`]})}),(0,A.jsxs)(`div`,{className:`mt-5 flex h-auto w-full max-w-[307px] flex-col items-center justify-between gap-3 sm:flex-row sm:gap-0`,children:[(0,A.jsx)(`button`,{className:`flex h-[49px] w-full items-center justify-center rounded-full bg-[#E5EDF5] font-inter text-[14px] font-medium text-black transition-colors duration-200 hover:bg-[#0085FF] hover:text-white sm:w-[149px]`,children:`Explore Tools`}),(0,A.jsx)(`button`,{className:`flex h-[49px] w-full items-center justify-center rounded-full bg-[#E5EDF5] font-inter text-[14px] font-medium text-black transition-colors duration-200 hover:bg-[#0085FF] hover:text-white sm:w-[149px]`,children:`Book a Demo`})]}),(0,A.jsx)(`div`,{className:`mt-5 flex h-auto w-full max-w-[291px] items-center justify-center text-center`,children:(0,A.jsx)(`p`,{className:`whitespace-normal font-inter text-[11px] font-normal text-black/50 sm:whitespace-nowrap sm:text-[12px]`,children:`100% Free · No Sign Up · No Watermark · Your Branding Your Document`})})]}),(0,A.jsxs)(`div`,{className:`relative -mt-8 w-full pb-[1050px]`,children:[(0,A.jsx)(`img`,{src:`https://ik.imagekit.io/qiap0iq38/DATACIRCLES_PROJECT/Platform2/Hero%20Sction%20(3).png`,alt:`Sales Document`,className:`h-auto w-full object-contain`}),(0,A.jsx)(`button`,{type:`button`,className:`absolute left-[8%] top-[8%] flex h-[32px] w-max items-center justify-center rounded-full bg-[#0085FF] px-4 font-inter text-[14px] ml-15 font-normal leading-[16px] text-white`,children:`Sales Document`}),(0,A.jsx)(`section`,{className:`absolute left-1/2 top-[25%] z-10 w-full max-w-[1216px] -mt-80 -translate-x-1/2 p-4 sm:p-6 md:p-8`,children:(0,A.jsx)(`div`,{className:`grid w-full grid-cols-1 gap-6 md:grid-cols-2`,children:e.map((e,t)=>(0,A.jsx)(`div`,{className:`relative h-[518.5px] w-full overflow-hidden rounded-[20px] border border-[#E0E0E1] bg-cover bg-center`,style:{backgroundImage:`url(${e.image})`},children:(0,A.jsxs)(`div`,{className:`absolute bottom-0 left-0 flex h-[128px] w-full flex-col bg-white px-4 py-4`,children:[(0,A.jsxs)(`div`,{className:`w-full`,children:[(0,A.jsx)(`h3`,{className:`font-inter text-[16px] font-semibold leading-[22px] text-black`,children:e.title}),(0,A.jsx)(`p`,{className:`mt-1 font-inter text-[14px] font-normal leading-[20px] text-black/40`,children:e.description})]}),(0,A.jsx)(`button`,{type:`button`,className:`mt-auto flex translate-y-1 h-[34px]  w-full shrink-0 items-center justify-center rounded-[8px] border border-[#0085FF] bg-white font-inter text-[14px] font-normal text-[#0085FF] transition-colors duration-200 hover:bg-[#0085FF] hover:text-white`,children:e.button})]})},t))})})]}),(0,A.jsxs)(`section`,{className:`mx-auto w-full max-w-[1216px] px-4 sm:px-6 md:px-8 -mt-170`,children:[(0,A.jsx)(`div`,{className:`mb-4 flex`,children:(0,A.jsx)(`button`,{type:`button`,className:`flex h-[32px] w-max items-center justify-center rounded-full bg-[#0085FF] px-4 font-inter text-[14px] font-normal leading-[16px] text-white`,children:`Sales Document`})}),(0,A.jsx)(`div`,{className:`grid w-full grid-cols-1 gap-6 md:grid-cols-2`,children:e.map((e,t)=>(0,A.jsx)(`div`,{className:`relative h-[518.5px] w-full overflow-hidden rounded-[20px] border border-[#E0E0E1] bg-cover bg-center`,style:{backgroundImage:`url(${e.image})`},children:(0,A.jsxs)(`div`,{className:`absolute bottom-0 left-0 flex h-[128px] w-full flex-col bg-white px-4 py-4`,children:[(0,A.jsxs)(`div`,{className:`w-full`,children:[(0,A.jsx)(`h3`,{className:`font-inter text-[16px] font-semibold leading-[22px] text-black`,children:e.title}),(0,A.jsx)(`p`,{className:`mt-1 font-inter text-[14px] font-normal leading-[20px] text-black/40`,children:e.description})]}),(0,A.jsx)(`button`,{type:`button`,className:`mt-auto flex h-[36px] translate-y-1 w-full shrink-0 items-center justify-center rounded-[8px] border border-[#0085FF] bg-white font-inter text-[14px] font-normal text-[#0085FF] transition-colors duration-200 hover:bg-[#0085FF] hover:text-white`,children:e.button})]})},t))})]}),(0,A.jsx)(`div`,{className:`mx-auto mt-30 flex h-[35px] w-[306px] items-center justify-center`,children:(0,A.jsx)(`h2`,{className:`font-inter text-[32px] font-medium leading-[35px] text-black`,children:`3 Steps, No Sign Up`})}),(0,A.jsx)(`section`,{className:`mx-auto mt-6 h-auto w-full max-w-[1216px]`,children:(0,A.jsx)(`div`,{className:`grid w-full grid-cols-1 gap-6 md:grid-cols-3`,children:[{icon:`dist/assets/i1.svg`,number:`01`,title:`Fill in your details`,description:`Add your business, your client, and what you're billing for. Watch it come together live as you type.`},{icon:`dist/assets/i2.svg`,number:`02`,title:`Make it Yours`,description:`Pick a theme and colour that fits your brand. No design skills needed.`},{icon:`dist/assets/i3.svg`,number:`03`,title:`Download and Share`,description:`Save it as a PDF, or share it straight away. It's yours to keep, with your name on it, not ours.`}].map((e,t)=>(0,A.jsxs)(`div`,{className:`h-[154px] w-full rounded-[20px] bg-[#ECECEC] p-4`,children:[(0,A.jsxs)(`div`,{className:`flex h-[44px] w-full items-center justify-between`,children:[(0,A.jsx)(`div`,{className:`h-[44px] w-[44px] shrink-0`,children:(0,A.jsx)(`img`,{src:e.icon,alt:``,className:`h-[44px] w-[44px] object-contain`})}),(0,A.jsx)(`span`,{className:`font-inter text-[24px] font-bold leading-[26px] text-black opacity-[0.08]`,children:e.number})]}),(0,A.jsxs)(`div`,{className:`mt-4 flex h-[62px] w-full flex-col items-start text-left`,children:[(0,A.jsx)(`h3`,{className:`font-inter text-[18px] font-medium leading-[22px] text-black`,children:e.title}),(0,A.jsx)(`p`,{className:`mt-1 font-inter text-[14px] font-normal leading-[20px] text-[#78788D]`,children:e.description})]})]},t))})}),(0,A.jsxs)(`section`,{className:`mx-auto mt-20 mb-20 flex h-[588px] w-full max-w-[1216px]`,children:[(0,A.jsx)(`div`,{className:`flex h-[588px] w-[550px] items-center justify-center`,children:(0,A.jsxs)(`div`,{className:`flex h-[311px] w-[550px] flex-col justify-center px-4`,children:[(0,A.jsx)(`div`,{className:`flex h-[24px] w-[518px] items-start justify-start`,children:(0,A.jsx)(`span`,{className:`font-inter text-[16px] font-medium leading-[24px] text-[#0085FF]`,children:`Reason behind Resources`})}),(0,A.jsx)(`div`,{className:`mt-3 flex h-[29px] w-[518px] items-start justify-start`,children:(0,A.jsx)(`h2`,{className:`font-inter text-[24px] font-semibold leading-[29px] text-black`,children:`Why we give these away`})}),(0,A.jsxs)(`div`,{className:`mt-6 w-[518px]`,children:[(0,A.jsx)(`p`,{className:`font-inter text-[16px] font-normal leading-[24px] text-black`,children:`We're building DataCircles for the long run, for a growing India and the businesses driving it. Not every business is ready for a full CRM and invoicing app yet, and that's completely fine. If a free tool helps you send a better invoice today and get paid a little faster, we've done something worth doing.`}),(0,A.jsx)(`br`,{}),(0,A.jsx)(`p`,{className:`font-inter text-[16px] font-normal leading-[24px] text-black`,children:`So use these as much as you like. No account, no cost, no strings. When your business grows to the point where you want everything in one place, your leads, your follow-ups, your invoices and your payments, we'll be right here.`})]})]})}),(0,A.jsx)(`div`,{className:`flex h-[588px] flex-1 items-center justify-center overflow-hidden`,children:(0,A.jsx)(`img`,{src:`https://ik.imagekit.io/qiap0iq38/DATACIRCLES_PROJECT/PAYMENTS/Explore1?updatedAt=1787913088733`,alt:`Professional document`,className:`h-auto w-full object-contain`})})]}),(0,A.jsx)(br,{})]})]})},ta=()=>{let[e,t]=(0,x.useState)(0),n=[{question:`Lorem ipsum dolor self amet, consectetur`,answer:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,link:`Learn More`},{question:`Lorem ipsum dolor self amet, consectetur`,answer:``},{question:`Lorem ipsum dolor self amet, consectetur`,answer:``},{question:`Lorem ipsum dolor self amet, consectetur`,answer:``},{question:`Lorem ipsum dolor self amet, consectetur`,answer:``}],r=n=>{t(e===n?null:n)};return(0,A.jsx)(`div`,{className:`flex h-[556px] w-full max-w-[608px] flex-col`,children:n.map((t,n)=>{let i=e===n;return(0,A.jsxs)(`div`,{className:`w-full border-b border-[#48494C66]`,children:[(0,A.jsxs)(`button`,{type:`button`,onClick:()=>r(n),className:`flex min-h-[72px] w-full items-center justify-between px-4 text-left`,children:[(0,A.jsx)(`span`,{className:`font-inter text-[16px] font-normal leading-[24px] text-black`,children:t.question}),(0,A.jsx)(`span`,{className:`ml-4 flex h-[24px] w-[24px] shrink-0 items-center justify-center font-inter text-[24px] font-normal leading-none text-black`,children:i?`−`:`+`})]}),(0,A.jsx)(`div`,{className:`grid overflow-hidden transition-all duration-500 ease-in-out ${i?`grid-rows-[1fr] opacity-100`:`grid-rows-[0fr] opacity-0`}`,children:(0,A.jsx)(`div`,{className:`min-h-0 overflow-hidden px-4`,children:t.answer&&(0,A.jsxs)(`div`,{className:`pb-6`,children:[(0,A.jsx)(`p`,{className:`font-inter text-[16px] font-normal leading-[20px] text-[#78788D]`,children:t.answer}),t.link&&(0,A.jsx)(`button`,{type:`button`,className:`mt-5 font-inter text-[14px] font-normal text-[#0085FF] underline underline-offset-2`,children:t.link})]})})})]},n)})})},na=()=>(0,A.jsxs)(`div`,{className:`min-h-screen w-full overflow-x-hidden bg-white`,children:[(0,A.jsx)(`div`,{className:`mb-5 h-[18px] w-full bg-[#ABABAB]`}),(0,A.jsx)(er,{}),(0,A.jsxs)(`main`,{className:`w-full`,children:[(0,A.jsxs)(`section`,{className:`mx-auto mt-16 h-auto min-h-[981px] w-full max-w-[1216px] px-4 sm:px-6 md:px-0`,children:[(0,A.jsxs)(`div`,{className:`flex h-[164px] w-full max-w-[493px] flex-col`,children:[(0,A.jsx)(`div`,{className:`flex h-[26px] w-full items-start justify-start`,children:(0,A.jsx)(`span`,{className:`font-inter text-[18px] font-medium leading-[26px] text-[#0085FF]`,children:`Free tools`})}),(0,A.jsx)(`div`,{className:`mt-3 flex h-[64px] w-[233px] items-start justify-start whitespace-nowrap`,children:(0,A.jsxs)(`h1`,{className:`font-inter text-[32px] font-medium leading-[38px] text-black`,children:[`More free tools`,(0,A.jsx)(`br`,{}),`for your business`]})}),(0,A.jsx)(`div`,{className:`mt-3 flex h-[26px] w-full items-start justify-start`,children:(0,A.jsx)(`p`,{className:`font-inter text-[18px] font-normal leading-[26px] text-black/40`,children:`All free, all yours. No Sign-Up needed`})})]}),(0,A.jsx)(`div`,{className:`mt-10 h-auto min-h-[779px] w-full`,children:(0,A.jsx)(`div`,{className:`grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3`,children:[{image:`YOUR_GST_INVOICE_IMAGE`,title:`GST Invoice Generator`,description:`Create a clean, GST-ready invoice in seconds and send it to your client.`,button:`Explore`},{image:`YOUR_GST_INVOICE_IMAGE`,title:`GST Invoice Generator`,description:`Create a clean, GST-ready invoice in seconds and send it to your client.`,button:`Explore`},{image:`YOUR_GST_INVOICE_IMAGE`,title:`GST Invoice Generator`,description:`Create a clean, GST-ready invoice in seconds and send it to your client.`,button:`Explore`},{image:`YOUR_QUOTATION_IMAGE`,title:`Quotation Generator`,description:`Send a professional quote that wins the deal.`,button:`Explore`},{image:`YOUR_PRO_FORMA_INVOICE_IMAGE`,title:`Pro-Forma Invoice Generator`,description:`Share an estimated invoice before the sale is final.`,button:`Explore`},{image:`YOUR_DELIVERY_CHALLAN_IMAGE`,title:`Delivery Challan Generator`,description:`Send goods with a proper challan, every detail in place.`,button:`Explore`}].map((e,t)=>(0,A.jsxs)(`div`,{className:`flex h-[382px] w-full flex-col overflow-hidden rounded-[20px] border border-[#E0E0E1] bg-white`,children:[(0,A.jsx)(`div`,{className:`h-[245px] w-full shrink-0 overflow-hidden`,children:(0,A.jsx)(`img`,{src:e.image,alt:e.title,className:`h-full w-full object-cover`})}),(0,A.jsxs)(`div`,{className:`flex h-[137px] w-full flex-col px-4 py-3`,children:[(0,A.jsxs)(`div`,{className:`flex h-[61px] w-full flex-col`,children:[(0,A.jsx)(`h2`,{className:`font-inter text-[16px] font-medium leading-[22px] text-black`,children:e.title}),(0,A.jsx)(`p`,{className:`mt-1 font-inter text-[14px] font-normal leading-[19px] text-black/40`,children:e.description})]}),(0,A.jsx)(`button`,{type:`button`,className:`mt-auto flex h-[32px] w-full items-center justify-center rounded-[8px] border border-[#0085FF] bg-white font-inter text-[14px] font-normal leading-[18px] text-[#0085FF] transition-colors duration-200 hover:bg-[#0085FF] hover:text-white`,children:e.button})]})]},t))})})]}),(0,A.jsxs)(`section`,{className:`mx-auto mt-25 flex h-auto min-h-[556px] w-full max-w-[1216px] flex-col md:flex-row`,children:[(0,A.jsx)(`div`,{className:`flex h-[556px] w-full flex-col justify-start md:w-[608px]`,children:(0,A.jsxs)(`div`,{className:`flex w-full max-w-[493px] flex-col`,children:[(0,A.jsx)(`div`,{className:`flex h-[26px] w-full items-start justify-start`,children:(0,A.jsx)(`span`,{className:`font-inter text-[18px] font-medium leading-[26px] text-[#0085FF]`,children:`Questions? We’ve Got You.`})}),(0,A.jsx)(`div`,{className:`mt-3 flex h-[64px] w-[233px] items-start justify-start whitespace-nowrap`,children:(0,A.jsxs)(`h2`,{className:`font-inter text-[32px] font-semibold leading-[32px] tracking-[-2px] text-black`,children:[`Everything You Want to Know`,(0,A.jsx)(`br`,{}),`Before You Start`]})}),(0,A.jsx)(`div`,{className:`mt-3 flex h-auto w-full items-start justify-start`,children:(0,A.jsx)(`p`,{className:`font-inter text-[18px] font-normal leading-[26px] text-black/40`,children:`Clear answers to common doubts no hidden terms.`})})]})}),(0,A.jsx)(ta,{})]})]})]}),ra=``,ia=``,aa=``,oa=``,sa=``,ca=``,la=``,ua=``,da=``;function fa(){return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(`style`,{children:`
        * {
          box-sizing: border-box;
        }

        html {
          margin: 0;
          padding: 0;
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          padding: 0;
          background: #ffffff;
          color: #231014;
          font-family: Inter, Arial, Helvetica, sans-serif;
        }

        button {
          font-family: inherit;
          cursor: pointer;
        }

        a {
          text-decoration: none;
        }

        /* =========================================================
           PAGE
           ========================================================= */

        .customer-stories-page {
          width: 100%;
          min-height: 0;
          background: #ffffff;
          overflow-x: hidden;
        }

        .customer-stories-canvas {
          width: 1440px;
          min-height: 0;
          margin: 0 auto;
          position: relative;
          background: #ffffff;
        }

        /* =========================================================
           NAVBAR
           ========================================================= */

        .customer-stories-navbar {
          padding-top: 24px;
          position: relative;
          z-index: 20;
        }

        /* =========================================================
           HERO
           ========================================================= */

        .customer-stories-hero {
          width: 1440px;
          height: 470px;
          position: relative;
          background: #ffffff;
        }

        .customer-stories-hero-content {
          position: absolute;
          top: 166px;
          left: 50%;
          transform: translateX(-50%);

          width: 650px;

          display: flex;
          flex-direction: column;
          align-items: center;

          text-align: center;
        }

        .customer-stories-label {
          height: 26px;
          min-width: 132px;

          display: inline-flex;
          align-items: center;
          justify-content: center;

          gap: 7px;

          padding: 0 12px;

          border-radius: 14px;

          background: rgba(235, 230, 224, 0.24);

          color: #635557;

          font-size: 11px;
          line-height: 17px;
          font-weight: 400;

          margin-bottom: 28px;
        }

        .customer-stories-label-dot {
          width: 6px;
          height: 6px;

          flex: none;

          border-radius: 50%;

          background: #0085ff;
        }

        .customer-stories-hero-title {
          width: 650px;

          margin: 0;
          padding: 0;

          color: #231014;

          font-size: 51px;
          line-height: 53px;

          font-weight: 500;

          letter-spacing: -2.7px;
        }

        .customer-stories-hero-description {
          width: 520px;

          margin: 19px 0 0;

          color: #635557;

          font-size: 13px;
          line-height: 20px;

          font-weight: 400;
        }

        /* =========================================================
           TESTIMONIAL BACKGROUND
           ========================================================= */

        .customer-stories-testimonials-background {
          position: absolute;

          top: 470px;
          left: 50%;

          transform: translateX(-50%);

          width: 1920px;
          height: 1220px;

          pointer-events: none;

          background:
            linear-gradient(
              to bottom,
              #ffffff 0%,
              #dcefff 27%,
              #b6ddff 48%,
              #eaf6ff 70%,
              #ffffff 100%
            );

          opacity: 0.78;
        }

        .customer-stories-testimonials-grid {
          position: absolute;

          top: 450px;
          left: 50%;

          transform: translateX(-50%);

          width: 1340px;
          height: 1150px;

          pointer-events: none;

          opacity: 0.17;

          background-image:
            linear-gradient(
              rgba(255, 255, 255, 0.9) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.9) 1px,
              transparent 1px
            );

          background-size: 135px 135px;

          mask-image:
            linear-gradient(
              to bottom,
              #000 0%,
              #000 70%,
              transparent 100%
            );

          -webkit-mask-image:
            linear-gradient(
              to bottom,
              #000 0%,
              #000 70%,
              transparent 100%
            );
        }

        /* =========================================================
           MAIN CONTENT
           ========================================================= */

        .customer-stories-main {
          position: relative;

          width: 1236px;

          margin: 0 auto;

          z-index: 5;
        }

        /* =========================================================
           FEATURED STORY
           ========================================================= */

        .customer-stories-featured {
          width: 1236px;
          height: 454px;

          display: grid;

          grid-template-columns: 548px 660px;

          column-gap: 28px;

          padding: 0;

          border-radius: 14px;

          background: #ffffff;

          overflow: hidden;
        }

        .customer-stories-featured-content {
          width: 548px;
          height: 454px;

          display: flex;
          flex-direction: column;

          justify-content: center;

          padding: 38px 20px 38px 27px;
        }

        .customer-stories-featured-label {
          margin: 0 0 22px;

          color: #0085ff;

          font-size: 12px;
          line-height: 17px;

          font-weight: 500;
        }

        .customer-stories-featured-quote {
          width: 500px;

          margin: 0;

          color: #242424;

          font-size: 20px;
          line-height: 24px;

          font-weight: 500;

          letter-spacing: -0.5px;
        }

        .customer-stories-featured-description {
          width: 500px;

          margin: 18px 0 0;

          color: #48494c;

          font-size: 12px;
          line-height: 18px;

          font-weight: 400;
        }

        /* =========================================================
           FEATURED PERSON
           ========================================================= */

        .customer-stories-person {
          display: flex;
          align-items: center;

          gap: 10px;

          margin-top: 20px;
        }

        .customer-stories-avatar {
          width: 31px;
          height: 31px;

          flex: none;

          border-radius: 50%;

          background: #dddddd;

          overflow: hidden;
        }

        .customer-stories-avatar img {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: cover;
        }

        .customer-stories-person-details {
          display: flex;
          flex-direction: column;

          gap: 3px;
        }

        .customer-stories-person-name {
          margin: 0;

          color: #242424;

          font-size: 11px;
          line-height: 15px;

          font-weight: 500;
        }

        .customer-stories-person-role {
          margin: 0;

          color: #635557;

          font-size: 10px;
          line-height: 14px;

          font-weight: 400;
        }

        /* =========================================================
           FEATURED MAIN IMAGE
           ========================================================= */

        .customer-stories-featured-media {
          width: 660px;
          height: 454px;

          margin: 0;

          border-radius: 10px;

          background: #d9d9d9;

          overflow: hidden;

          position: relative;
        }

        .customer-stories-featured-media img {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: cover;
        }

        /* =========================================================
           STORY GRID
           ========================================================= */

        .customer-stories-grid {
          width: 1236px;

          display: grid;

          grid-template-columns: 610px 610px;

          column-gap: 16px;
          row-gap: 16px;

          margin-top: 16px;
        }

        /* =========================================================
           STORY CARD
           ========================================================= */

        .customer-stories-card {
          width: 610px;
          height: 177px;

          padding: 28px 28px 24px;

          border-radius: 10px;

          background: rgba(255, 255, 255, 0.72);

          display: flex;
          flex-direction: column;

          position: relative;

          overflow: hidden;
        }

        .customer-stories-card-person {
          display: flex;
          align-items: center;

          gap: 10px;
        }

        .customer-stories-card-avatar {
          width: 31px;
          height: 31px;

          flex: none;

          border-radius: 50%;

          background: #dddddd;

          overflow: hidden;
        }

        .customer-stories-card-avatar img {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: cover;
        }

        .customer-stories-card-person-info {
          display: flex;
          flex-direction: column;

          gap: 3px;
        }

        .customer-stories-card-name {
          margin: 0;

          color: #242424;

          font-size: 11px;
          line-height: 15px;

          font-weight: 500;
        }

        .customer-stories-card-role {
          margin: 0;

          color: #635557;

          font-size: 10px;
          line-height: 14px;

          font-weight: 400;
        }

        .customer-stories-card-description {
          width: 540px;

          margin: 16px 0 0;

          color: #48494c;

          font-size: 11px;
          line-height: 16px;

          font-weight: 400;
        }

        .customer-stories-card-link {
          margin-top: auto;

          color: #0085ff;

          font-size: 11px;
          line-height: 17px;

          font-weight: 500;
        }

        /* =========================================================
           USING DATACIRCLES SECTION
           ========================================================= */

        .customer-stories-share {
          width: 1236px;
          height: 220px;

          margin-top: 58px;

          border-radius: 12px;

          background: #f1f9fd;

          display: flex;

          align-items: center;

          padding: 32px 38px;
        }

        .customer-stories-share-image {
          width: 120px;
          height: 120px;

          flex: none;

          border-radius: 8px;

          background: #d9d9d9;

          overflow: hidden;
        }

        .customer-stories-share-image img {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: cover;
        }

        .customer-stories-share-content {
          margin-left: 32px;

          width: 700px;

          display: flex;
          flex-direction: column;
        }

        .customer-stories-share-title {
          margin: 0;

          color: #242424;

          font-size: 22px;
          line-height: 28px;

          font-weight: 500;

          letter-spacing: -0.7px;
        }

        .customer-stories-share-description {
          width: 610px;

          margin: 13px 0 0;

          color: #707173;

          font-size: 12px;
          line-height: 18px;

          font-weight: 400;
        }

        .customer-stories-share-button {
          width: 190px;
          height: 48px;

          margin-left: auto;

          border: 0;

          border-radius: 24px;

          background: #ffffff;

          color: #0085ff;

          font-size: 11px;
          line-height: 17px;

          font-weight: 500;
        }

        /* =========================================================
           CTA
           ========================================================= */

        .customer-stories-cta {
          position: relative;

          width: 100vw;

          margin-top: 42px;
          margin-left: calc(50% - 50vw);

          z-index: 10;
        }

        /* =========================================================
           RESPONSIVE
           ========================================================= */

        @media (max-width: 1439px) {

          .customer-stories-canvas {
            width: 100%;
          }

          .customer-stories-hero {
            width: 100%;
          }

          .customer-stories-main {
            width: calc(100% - 48px);
          }

          .customer-stories-featured {
            width: 100%;

            grid-template-columns:
              minmax(0, 0.83fr)
              minmax(0, 1fr);
          }

          .customer-stories-featured-content,
          .customer-stories-featured-media {
            width: 100%;
          }

          .customer-stories-grid {
            width: 100%;

            grid-template-columns:
              minmax(0, 1fr)
              minmax(0, 1fr);
          }

          .customer-stories-card {
            width: 100%;
          }

          .customer-stories-share {
            width: 100%;
          }

          .customer-stories-share-content {
            width: auto;
            flex: 1;
          }
        }

        @media (max-width: 900px) {

          .customer-stories-hero-content {
            width: calc(100% - 40px);
          }

          .customer-stories-hero-title {
            width: 100%;

            font-size: 43px;
            line-height: 47px;
          }

          .customer-stories-hero-description {
            width: 100%;
          }

          .customer-stories-featured {
            height: auto;

            grid-template-columns: 1fr;

            row-gap: 20px;

            padding: 16px;
          }

          .customer-stories-featured-content {
            width: 100%;
            height: auto;

            padding: 24px;
          }

          .customer-stories-featured-media {
            width: 100%;
            height: 420px;
          }

          .customer-stories-grid {
            grid-template-columns: 1fr;
          }

          .customer-stories-card {
            width: 100%;
            height: auto;
            min-height: 177px;
          }

          .customer-stories-share {
            height: auto;
            min-height: 200px;

            padding: 25px;
          }

          .customer-stories-share-content {
            margin-left: 20px;
          }

          .customer-stories-share-description {
            width: 100%;
          }
        }

        @media (max-width: 600px) {

          .customer-stories-page {
            min-height: 100vh;
          }

          .customer-stories-hero {
            height: 390px;
          }

          .customer-stories-hero-content {
            top: 135px;
          }

          .customer-stories-hero-title {
            font-size: 34px;
            line-height: 39px;
            letter-spacing: -1.8px;
          }

          .customer-stories-hero-description {
            font-size: 12px;
            line-height: 18px;
          }

          .customer-stories-main {
            width: calc(100% - 32px);
          }

          .customer-stories-featured {
            width: 100%;

            padding: 10px;

            border-radius: 10px;
          }

          .customer-stories-featured-content {
            padding: 20px 10px;
          }

          .customer-stories-featured-quote {
            width: 100%;

            font-size: 18px;
            line-height: 23px;
          }

          .customer-stories-featured-description {
            width: 100%;
          }

          .customer-stories-featured-media {
            width: 100%;
            height: 270px;
          }

          .customer-stories-card {
            padding: 22px;
          }

          .customer-stories-card-description {
            width: 100%;
          }

          .customer-stories-share {
            flex-direction: column;

            align-items: flex-start;

            gap: 18px;

            padding: 24px;
          }

          .customer-stories-share-image {
            width: 80px;
            height: 80px;
          }

          .customer-stories-share-content {
            width: 100%;
            margin-left: 0;
          }

          .customer-stories-share-title {
            font-size: 18px;
            line-height: 24px;
          }

          .customer-stories-share-button {
            width: 180px;
            margin-left: 0;
          }

          .customer-stories-cta {
            margin-top: 30px;
          }
        }
      `}),(0,A.jsx)(`div`,{className:`customer-stories-page`,children:(0,A.jsxs)(`div`,{className:`customer-stories-canvas`,children:[(0,A.jsx)(`div`,{className:`customer-stories-navbar`,children:(0,A.jsx)(er,{})}),(0,A.jsx)(`div`,{className:`customer-stories-testimonials-background`}),(0,A.jsx)(`div`,{className:`customer-stories-testimonials-grid`}),(0,A.jsx)(`section`,{className:`customer-stories-hero`,children:(0,A.jsxs)(`div`,{className:`customer-stories-hero-content`,children:[(0,A.jsxs)(`div`,{className:`customer-stories-label`,children:[(0,A.jsx)(`span`,{className:`customer-stories-label-dot`}),(0,A.jsx)(`span`,{children:`CUSTOMER STORIES`})]}),(0,A.jsxs)(`h1`,{className:`customer-stories-hero-title`,children:[`Real Businesses,`,(0,A.jsx)(`br`,{}),`in their own words`]}),(0,A.jsx)(`p`,{className:`customer-stories-hero-description`,children:`Hear from the Indian businesses using DataCircles to keep their leads and invoices in one place, and get paid without the chaos.`})]})}),(0,A.jsxs)(`main`,{className:`customer-stories-main`,children:[(0,A.jsxs)(`section`,{className:`customer-stories-featured`,children:[(0,A.jsxs)(`div`,{className:`customer-stories-featured-content`,children:[(0,A.jsx)(`p`,{className:`customer-stories-featured-label`,children:`Customer Testimonial`}),(0,A.jsx)(`h2`,{className:`customer-stories-featured-quote`,children:`"[Pulled quote from the video, e.g. "We used to juggle a CRM and a separate billing app. Now it's all in one place."]"`}),(0,A.jsx)(`p`,{className:`customer-stories-featured-description`,children:`[2 to 3 line summary in the DataCircles voice, so the point lands even for people who don't press play. Describe the before and after.]`}),(0,A.jsxs)(`div`,{className:`customer-stories-person`,children:[(0,A.jsx)(`div`,{className:`customer-stories-avatar`,children:ra}),(0,A.jsxs)(`div`,{className:`customer-stories-person-details`,children:[(0,A.jsx)(`p`,{className:`customer-stories-person-name`,children:`[ Customer Name ]`}),(0,A.jsx)(`p`,{className:`customer-stories-person-role`,children:`[ Role ] · [ Business Name ]`})]})]})]}),(0,A.jsx)(`div`,{className:`customer-stories-featured-media`,children:ua})]}),(0,A.jsxs)(`section`,{className:`customer-stories-grid`,children:[(0,A.jsxs)(`article`,{className:`customer-stories-card`,children:[(0,A.jsxs)(`div`,{className:`customer-stories-card-person`,children:[(0,A.jsx)(`div`,{className:`customer-stories-card-avatar`,children:ia}),(0,A.jsxs)(`div`,{className:`customer-stories-card-person-info`,children:[(0,A.jsx)(`p`,{className:`customer-stories-card-name`,children:`[ Customer Name ]`}),(0,A.jsx)(`p`,{className:`customer-stories-card-role`,children:`[ Role ] · [ Business Name ]`})]})]}),(0,A.jsx)(`p`,{className:`customer-stories-card-description`,children:`[2 to 3 line summary in the DataCircles voice, so the point lands even for people who don't press play. Describe the before and after.]`}),(0,A.jsx)(`a`,{href:`#`,className:`customer-stories-card-link`,children:`Watch / Read Story`})]}),(0,A.jsxs)(`article`,{className:`customer-stories-card`,children:[(0,A.jsxs)(`div`,{className:`customer-stories-card-person`,children:[(0,A.jsx)(`div`,{className:`customer-stories-card-avatar`,children:aa}),(0,A.jsxs)(`div`,{className:`customer-stories-card-person-info`,children:[(0,A.jsx)(`p`,{className:`customer-stories-card-name`,children:`[ Customer Name ]`}),(0,A.jsx)(`p`,{className:`customer-stories-card-role`,children:`[ Role ] · [ Business Name ]`})]})]}),(0,A.jsx)(`p`,{className:`customer-stories-card-description`,children:`[2 to 3 line summary in the DataCircles voice, so the point lands even for people who don't press play. Describe the before and after.]`}),(0,A.jsx)(`a`,{href:`#`,className:`customer-stories-card-link`,children:`Watch / Read Story`})]}),(0,A.jsxs)(`article`,{className:`customer-stories-card`,children:[(0,A.jsxs)(`div`,{className:`customer-stories-card-person`,children:[(0,A.jsx)(`div`,{className:`customer-stories-card-avatar`,children:oa}),(0,A.jsxs)(`div`,{className:`customer-stories-card-person-info`,children:[(0,A.jsx)(`p`,{className:`customer-stories-card-name`,children:`[ Customer Name ]`}),(0,A.jsx)(`p`,{className:`customer-stories-card-role`,children:`[ Role ] · [ Business Name ]`})]})]}),(0,A.jsx)(`p`,{className:`customer-stories-card-description`,children:`[2 to 3 line summary in the DataCircles voice, so the point lands even for people who don't press play. Describe the before and after.]`}),(0,A.jsx)(`a`,{href:`#`,className:`customer-stories-card-link`,children:`Watch / Read Story`})]}),(0,A.jsxs)(`article`,{className:`customer-stories-card`,children:[(0,A.jsxs)(`div`,{className:`customer-stories-card-person`,children:[(0,A.jsx)(`div`,{className:`customer-stories-card-avatar`,children:sa}),(0,A.jsxs)(`div`,{className:`customer-stories-card-person-info`,children:[(0,A.jsx)(`p`,{className:`customer-stories-card-name`,children:`[ Customer Name ]`}),(0,A.jsx)(`p`,{className:`customer-stories-card-role`,children:`[ Role ] · [ Business Name ]`})]})]}),(0,A.jsx)(`p`,{className:`customer-stories-card-description`,children:`[2 to 3 line summary in the DataCircles voice, so the point lands even for people who don't press play. Describe the before and after.]`}),(0,A.jsx)(`a`,{href:`#`,className:`customer-stories-card-link`,children:`Watch / Read Story`})]}),(0,A.jsxs)(`article`,{className:`customer-stories-card`,children:[(0,A.jsxs)(`div`,{className:`customer-stories-card-person`,children:[(0,A.jsx)(`div`,{className:`customer-stories-card-avatar`,children:ca}),(0,A.jsxs)(`div`,{className:`customer-stories-card-person-info`,children:[(0,A.jsx)(`p`,{className:`customer-stories-card-name`,children:`[ Customer Name ]`}),(0,A.jsx)(`p`,{className:`customer-stories-card-role`,children:`[ Role ] · [ Business Name ]`})]})]}),(0,A.jsx)(`p`,{className:`customer-stories-card-description`,children:`[2 to 3 line summary in the DataCircles voice, so the point lands even for people who don't press play. Describe the before and after.]`}),(0,A.jsx)(`a`,{href:`#`,className:`customer-stories-card-link`,children:`Watch / Read Story`})]}),(0,A.jsxs)(`article`,{className:`customer-stories-card`,children:[(0,A.jsxs)(`div`,{className:`customer-stories-card-person`,children:[(0,A.jsx)(`div`,{className:`customer-stories-card-avatar`,children:la}),(0,A.jsxs)(`div`,{className:`customer-stories-card-person-info`,children:[(0,A.jsx)(`p`,{className:`customer-stories-card-name`,children:`[ Customer Name ]`}),(0,A.jsx)(`p`,{className:`customer-stories-card-role`,children:`[ Role ] · [ Business Name ]`})]})]}),(0,A.jsx)(`p`,{className:`customer-stories-card-description`,children:`[2 to 3 line summary in the DataCircles voice, so the point lands even for people who don't press play. Describe the before and after.]`}),(0,A.jsx)(`a`,{href:`#`,className:`customer-stories-card-link`,children:`Watch / Read Story`})]})]}),(0,A.jsxs)(`section`,{className:`customer-stories-share`,children:[(0,A.jsx)(`div`,{className:`customer-stories-share-image`,children:da}),(0,A.jsxs)(`div`,{className:`customer-stories-share-content`,children:[(0,A.jsx)(`h2`,{className:`customer-stories-share-title`,children:`Using DataCircles and happy with it?`}),(0,A.jsx)(`p`,{className:`customer-stories-share-description`,children:`We'd love to hear your story. It takes a few minutes, and it helps other businesses like yours.`})]}),(0,A.jsx)(`button`,{type:`button`,className:`customer-stories-share-button`,children:`Share Your Story`})]})]}),(0,A.jsx)(`section`,{className:`customer-stories-cta`,children:(0,A.jsx)(br,{})})]})})]})}var P=``,pa=``;function ma(){return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(`style`,{children:`
        * {
          box-sizing: border-box;
        }

        html {
          margin: 0;
          padding: 0;
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          padding: 0;
          background: #ffffff;
          color: #242424;
          font-family: Inter, Arial, Helvetica, sans-serif;
        }

        a {
          text-decoration: none;
        }

        /* =====================================================
           PAGE
           ===================================================== */

        .sub-details-page {
          width: 100%;
          min-height: 0;
          background: #ffffff;
          overflow-x: hidden;
        }

        .sub-details-canvas {
          width: 1440px;
          min-height: 0;
          margin: 0 auto;
          position: relative;
          background: #ffffff;
        }

        /* =====================================================
           NAVBAR
           ===================================================== */

        .sub-details-navbar {
          position: relative;
          z-index: 20;
          padding-top: 24px;
        }

        /* =====================================================
           STORY HEADER
           ===================================================== */

        .sub-details-header {
          position: relative;
          width: 1440px;
          height: 335px;
          background: #ffffff;
        }

        .sub-details-previous {
          position: absolute;

          left: 22px;
          top: 102px;

          display: flex;
          align-items: center;

          gap: 8px;

          color: #888b96;

          font-size: 12px;
          line-height: 18px;

          font-weight: 400;
        }

        .sub-details-previous-arrow {
          font-size: 18px;
          line-height: 1;

          color: #9a9ca5;
        }

        .sub-details-next {
          position: absolute;

          right: 23px;
          top: 102px;

          display: flex;
          align-items: center;

          gap: 8px;

          color: #242424;

          font-size: 12px;
          line-height: 18px;

          font-weight: 400;
        }

        .sub-details-next-arrow {
          font-size: 18px;
          line-height: 1;
        }

        /* =====================================================
           HEADER CONTENT

           IMPORTANT:
           760px centered on 1440px canvas
           = starts at x 340px.
           Main image below is also 760px centered.
           ===================================================== */

        .sub-details-header-content {
          position: absolute;

          top: 83px;

          left: 50%;

          transform: translateX(-50%);

          width: 760px;
        }

        .sub-details-tag {
          width: 94px;
          height: 29px;

          display: flex;

          align-items: center;
          justify-content: center;

          border-radius: 16px;

          background: #0085ff;

          color: #ffffff;

          font-size: 11px;
          line-height: 16px;

          font-weight: 400;

          margin-bottom: 27px;
        }

        .sub-details-title {
          width: 760px;

          margin: 0;
          padding: 0;

          color: #242424;

          font-size: 28px;
          line-height: 32px;

          font-weight: 500;

          letter-spacing: -1.2px;
        }

        .sub-details-summary {
          width: 760px;

          margin: 20px 0 0;

          color: #77798a;

          font-size: 13px;
          line-height: 19px;

          font-weight: 400;
        }

        /* =====================================================
           BLUE BACKGROUND
           ===================================================== */

        .sub-details-background {
          position: absolute;

          top: 380px;
          left: 50%;

          transform: translateX(-50%);

          width: 1920px;
          height: 945px;

          pointer-events: none;

          background:
            linear-gradient(
              to bottom,
              #ffffff 0%,
              #e4f3ff 19%,
              #c5e5ff 45%,
              #dcefff 66%,
              #ffffff 100%
            );
        }

        /* =====================================================
           BACKGROUND GRID
           ===================================================== */

        .sub-details-grid-background {
          position: absolute;

          top: 313px;
          left: 50%;

          transform: translateX(-50%);

          width: 1340px;
          height: 1078px;

          pointer-events: none;

          opacity: 0.26;

          background-image:
            linear-gradient(
              rgba(255, 255, 255, 0.95) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.95) 1px,
              transparent 1px
            );

          background-size: 135px 135px;

          mask-image:
            linear-gradient(
              to bottom,
              transparent 0%,
              #000 10%,
              #000 70%,
              transparent 100%
            );

          -webkit-mask-image:
            linear-gradient(
              to bottom,
              transparent 0%,
              #000 10%,
              #000 70%,
              transparent 100%
            );
        }

        /* =====================================================
           MAIN CONTENT
           ===================================================== */

        .sub-details-content {
          position: relative;

          z-index: 5;

          width: 1008px;

          margin: 0 auto;
        }

        /* =====================================================
           MAIN STORY IMAGE

           760px wide and centered:
           (1440 - 760) / 2 = 340px
           ===================================================== */

        .sub-details-main-image {
          width: 760px;
          height: 455px;

          margin: 0 auto;

          border-radius: 9px;

          overflow: hidden;

          background: #d9d9d9;

          position: relative;
        }

        .sub-details-main-image img {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: cover;
        }

        /* =====================================================
           CUSTOMER INFORMATION CARD
           ===================================================== */

        .sub-details-info-card {
          width: 760px;
          height: 248px;

          margin: 49px auto 0;

          padding: 33px 34px 29px;

          border-radius: 10px;

          background: rgba(247, 252, 255, 0.9);

          border: 1px solid rgba(255, 255, 255, 0.45);

          position: relative;
        }

        .sub-details-customer {
          display: flex;

          align-items: center;

          height: 44px;

          padding-bottom: 13px;

          border-bottom: 1px solid #d7dce1;
        }

        .sub-details-customer-avatar {
          width: 42px;
          height: 42px;

          border-radius: 50%;

          flex: none;

          overflow: hidden;

          background: #d9d9d9;
        }

        .sub-details-customer-avatar img {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: cover;
        }

        .sub-details-customer-text {
          margin-left: 10px;
        }

        .sub-details-customer-name {
          margin: 0;

          color: #242424;

          font-size: 12px;
          line-height: 16px;

          font-weight: 500;
        }

        .sub-details-customer-role {
          margin: 2px 0 0;

          color: #9294a0;

          font-size: 9px;
          line-height: 12px;

          font-weight: 400;
        }

        /* =====================================================
           INFO ROWS
           ===================================================== */

        .sub-details-info-rows {
          width: 100%;

          margin-top: 14px;
        }

        .sub-details-info-row {
          width: 100%;

          height: 32px;

          display: grid;

          grid-template-columns: 20px 100px 1fr;

          align-items: center;
        }

        .sub-details-info-icon {
          color: #777c87;

          font-size: 13px;

          text-align: center;
        }

        .sub-details-info-label {
          color: #777c87;

          font-size: 11px;
          line-height: 16px;

          font-weight: 400;
        }

        .sub-details-info-value {
          color: #242424;

          font-size: 11px;
          line-height: 16px;

          font-weight: 500;

          text-align: right;
        }

        /* =====================================================
           ARTICLE
           ===================================================== */

        .sub-details-article {
          width: 760px;

          margin: 38px auto 0;
        }

        .sub-details-article-title {
          margin: 0;

          color: #242424;

          font-size: 21px;
          line-height: 27px;

          font-weight: 500;

          letter-spacing: -0.6px;
        }

        .sub-details-article-intro {
          margin: 22px 0 0;

          color: #77798a;

          font-size: 13px;
          line-height: 19px;

          font-weight: 400;
        }

        .sub-details-article-block {
          margin-top: 30px;
        }

        .sub-details-article-heading {
          margin: 0 0 4px;

          color: #242424;

          font-size: 15px;
          line-height: 21px;

          font-weight: 600;
        }

        .sub-details-article-text {
          margin: 0;

          color: #858798;

          font-size: 13px;
          line-height: 18px;

          font-weight: 400;
        }

        /* =====================================================
           PULL QUOTE
           ===================================================== */

        .sub-details-pullquote {
          width: 100%;

          min-height: 77px;

          margin-top: 28px;

          padding: 11px 0 11px 25px;

          border-left: 5px solid #0085ff;

          display: flex;

          align-items: center;
        }

        .sub-details-pullquote-text {
          width: 600px;

          margin: 0;

          color: #242424;

          font-size: 15px;
          line-height: 19px;

          font-weight: 500;
        }

        /* =====================================================
           FEATURE LIST
           ===================================================== */

        .sub-details-features {
          margin-top: 31px;
        }

        .sub-details-feature-title {
          margin: 0 0 17px;

          color: #242424;

          font-size: 15px;
          line-height: 20px;

          font-weight: 600;
        }

        .sub-details-pills {
          display: flex;

          flex-wrap: wrap;

          gap: 8px;
        }

        .sub-details-pill {
          height: 28px;

          padding: 0 14px;

          display: inline-flex;

          align-items: center;
          justify-content: center;

          border-radius: 15px;

          border: 1px solid #8cc8ff;

          background: #eaf5ff;

          color: #0879df;

          font-size: 10px;
          line-height: 15px;

          font-weight: 500;
        }

        /* =====================================================
           FINAL BLUE SECTION
           ===================================================== */

        .sub-details-final-card {
          width: 760px;
          height: 279px;

          margin: 29px auto 0;

          border-radius: 10px;

          overflow: hidden;

          background:
            linear-gradient(
              110deg,
              #095bb9 0%,
              #007df1 52%,
              #0b8cff 100%
            );

          display: flex;

          flex-direction: column;

          align-items: center;

          justify-content: center;

          text-align: center;
        }

        .sub-details-final-title {
          margin: 0;

          color: #ffffff;

          font-size: 25px;
          line-height: 31px;

          font-weight: 500;

          letter-spacing: -0.7px;
        }

        .sub-details-final-description {
          width: 610px;

          margin: 24px 0 0;

          color: rgba(255, 255, 255, 0.75);

          font-size: 13px;
          line-height: 19px;

          font-weight: 400;
        }

        .sub-details-final-button {
          width: 190px;
          height: 48px;

          margin-top: 24px;

          border: none;

          border-radius: 25px;

          background: #ffffff;

          color: #0085ff;

          font-size: 11px;
          line-height: 17px;

          font-weight: 500;
        }

        /* =====================================================
           RESPONSIVE
           ===================================================== */

        @media (max-width: 1439px) {

          .sub-details-canvas {
            width: 100%;
          }

          .sub-details-header {
            width: 100%;
          }

          .sub-details-content {
            width: calc(100% - 48px);
          }

          .sub-details-header-content {
            width: min(760px, calc(100% - 48px));
          }

          .sub-details-title,
          .sub-details-summary {
            width: 100%;
          }

          .sub-details-main-image,
          .sub-details-info-card,
          .sub-details-article,
          .sub-details-final-card {
            width: min(760px, 100%);
          }

          .sub-details-main-image {
            height: min(455px, 60vw);
          }

          .sub-details-info-card {
            height: auto;
            min-height: 248px;
          }

          .sub-details-article {
            width: min(760px, 100%);
          }

          .sub-details-final-card {
            width: min(760px, 100%);
          }

          .sub-details-background {
            width: 1920px;
          }

          .sub-details-grid-background {
            width: min(1340px, 100%);
          }
        }

        @media (max-width: 800px) {

          .sub-details-navbar {
            padding-top: 16px;
          }

          .sub-details-header {
            height: 350px;
          }

          .sub-details-previous {
            left: 16px;
            top: 92px;
          }

          .sub-details-next {
            right: 16px;
            top: 92px;
          }

          .sub-details-header-content {
            width: calc(100% - 48px);
            top: 85px;
          }

          .sub-details-title {
            width: 100%;

            font-size: 24px;
            line-height: 29px;
          }

          .sub-details-summary {
            width: 100%;

            font-size: 12px;
            line-height: 18px;
          }

          .sub-details-main-image {
            height: 300px;
          }

          .sub-details-info-card {
            padding: 24px 20px;
          }

          .sub-details-info-row {
            grid-template-columns: 20px 90px 1fr;
          }

          .sub-details-info-value {
            font-size: 10px;
          }

          .sub-details-article-title {
            font-size: 19px;
            line-height: 25px;
          }

          .sub-details-article-intro,
          .sub-details-article-text {
            font-size: 12px;
            line-height: 18px;
          }

          .sub-details-pullquote-text {
            width: 100%;
            font-size: 14px;
          }

          .sub-details-final-card {
            height: 260px;
          }

          .sub-details-final-description {
            width: calc(100% - 60px);
          }
        }

        @media (max-width: 520px) {

          .sub-details-header {
            height: 370px;
          }

          .sub-details-previous,
          .sub-details-next {
            top: 78px;
          }

          .sub-details-header-content {
            top: 112px;
          }

          .sub-details-title {
            font-size: 22px;
            line-height: 27px;
          }

          .sub-details-main-image {
            height: 230px;
          }

          .sub-details-info-card {
            padding: 20px 15px;
          }

          .sub-details-info-row {
            grid-template-columns: 18px 75px 1fr;
          }

          .sub-details-info-value {
            font-size: 9px;
          }

          .sub-details-feature-title {
            font-size: 14px;
          }

          .sub-details-final-title {
            font-size: 21px;
          }

          .sub-details-final-description {
            width: calc(100% - 40px);
          }
        }
      `}),(0,A.jsx)(`div`,{className:`sub-details-page`,children:(0,A.jsxs)(`div`,{className:`sub-details-canvas`,children:[(0,A.jsx)(`div`,{className:`sub-details-navbar`,children:(0,A.jsx)(er,{})}),(0,A.jsx)(`div`,{className:`sub-details-background`}),(0,A.jsx)(`div`,{className:`sub-details-grid-background`}),(0,A.jsxs)(`header`,{className:`sub-details-header`,children:[(0,A.jsxs)(`a`,{href:`#`,className:`sub-details-previous`,children:[(0,A.jsx)(`span`,{className:`sub-details-previous-arrow`,children:`‹`}),(0,A.jsx)(`span`,{children:`Previous Story`})]}),(0,A.jsxs)(`a`,{href:`#`,className:`sub-details-next`,children:[(0,A.jsx)(`span`,{children:`Next Story`}),(0,A.jsx)(`span`,{className:`sub-details-next-arrow`,children:`›`})]}),(0,A.jsxs)(`div`,{className:`sub-details-header-content`,children:[(0,A.jsx)(`div`,{className:`sub-details-tag`,children:`Customer Story`}),(0,A.jsx)(`h1`,{className:`sub-details-title`,children:`[ Headline: the change, e.g. "How [Business] put CRM and invoicing in one place" ]`}),(0,A.jsx)(`p`,{className:`sub-details-summary`,children:`[ One-line summary of who they are and what changed. ]`})]})]}),(0,A.jsxs)(`main`,{className:`sub-details-content`,children:[(0,A.jsx)(`div`,{className:`sub-details-main-image`,children:pa}),(0,A.jsxs)(`section`,{className:`sub-details-info-card`,children:[(0,A.jsxs)(`div`,{className:`sub-details-customer`,children:[(0,A.jsx)(`div`,{className:`sub-details-customer-avatar`,children:P}),(0,A.jsxs)(`div`,{className:`sub-details-customer-text`,children:[(0,A.jsx)(`p`,{className:`sub-details-customer-name`,children:`Client Name`}),(0,A.jsx)(`p`,{className:`sub-details-customer-role`,children:`Industry · Designation`})]})]}),(0,A.jsxs)(`div`,{className:`sub-details-info-rows`,children:[(0,A.jsxs)(`div`,{className:`sub-details-info-row`,children:[(0,A.jsx)(`span`,{className:`sub-details-info-icon`,children:`♜`}),(0,A.jsx)(`span`,{className:`sub-details-info-label`,children:`Business`}),(0,A.jsx)(`span`,{className:`sub-details-info-value`,children:`[Name]`})]}),(0,A.jsxs)(`div`,{className:`sub-details-info-row`,children:[(0,A.jsx)(`span`,{className:`sub-details-info-icon`,children:`◈`}),(0,A.jsx)(`span`,{className:`sub-details-info-label`,children:`Type`}),(0,A.jsx)(`span`,{className:`sub-details-info-value`,children:`[Agency / Studio / etc.]`})]}),(0,A.jsxs)(`div`,{className:`sub-details-info-row`,children:[(0,A.jsx)(`span`,{className:`sub-details-info-icon`,children:`♧`}),(0,A.jsx)(`span`,{className:`sub-details-info-label`,children:`Location`}),(0,A.jsx)(`span`,{className:`sub-details-info-value`,children:`[City]`})]}),(0,A.jsxs)(`div`,{className:`sub-details-info-row`,children:[(0,A.jsx)(`span`,{className:`sub-details-info-icon`,children:`◉`}),(0,A.jsx)(`span`,{className:`sub-details-info-label`,children:`Before`}),(0,A.jsx)(`span`,{className:`sub-details-info-value`,children:`[ Separate CRM + Billing App ]`})]})]})]}),(0,A.jsxs)(`article`,{className:`sub-details-article`,children:[(0,A.jsx)(`h2`,{className:`sub-details-article-title`,children:`[The headline result or change]`}),(0,A.jsx)(`p`,{className:`sub-details-article-intro`,children:`[A line of context for it]`}),(0,A.jsxs)(`section`,{className:`sub-details-article-block`,children:[(0,A.jsx)(`h3`,{className:`sub-details-article-heading`,children:`What they do`}),(0,A.jsx)(`p`,{className:`sub-details-article-text`,children:`dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.`})]}),(0,A.jsxs)(`section`,{className:`sub-details-article-block`,children:[(0,A.jsx)(`h3`,{className:`sub-details-article-heading`,children:`The mess before`}),(0,A.jsx)(`p`,{className:`sub-details-article-text`,children:`Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.`})]}),(0,A.jsx)(`div`,{className:`sub-details-pullquote`,children:(0,A.jsx)(`p`,{className:`sub-details-pullquote-text`,children:`“[Strong pull-quote in their own words, lifted from the video.]”`})}),(0,A.jsxs)(`section`,{className:`sub-details-article-block`,children:[(0,A.jsx)(`h3`,{className:`sub-details-article-heading`,children:`Switching to DataCircles`}),(0,A.jsx)(`p`,{className:`sub-details-article-text`,children:`dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.`})]}),(0,A.jsxs)(`section`,{className:`sub-details-article-block`,children:[(0,A.jsx)(`h3`,{className:`sub-details-article-heading`,children:`How it works for them now`}),(0,A.jsx)(`p`,{className:`sub-details-article-text`,children:`Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.`})]}),(0,A.jsxs)(`section`,{className:`sub-details-features`,children:[(0,A.jsx)(`h3`,{className:`sub-details-feature-title`,children:`What they use in DataCircles`}),(0,A.jsxs)(`div`,{className:`sub-details-pills`,children:[(0,A.jsx)(`span`,{className:`sub-details-pill`,children:`Lead Pipeline`}),(0,A.jsx)(`span`,{className:`sub-details-pill`,children:`Follow-Ups`}),(0,A.jsx)(`span`,{className:`sub-details-pill`,children:`GST Invoicing`}),(0,A.jsx)(`span`,{className:`sub-details-pill`,children:`Payment Reminders`})]})]})]}),(0,A.jsxs)(`section`,{className:`sub-details-final-card`,children:[(0,A.jsx)(`h2`,{className:`sub-details-final-title`,children:`Your Business could be next`}),(0,A.jsx)(`p`,{className:`sub-details-final-description`,children:`Send an invoice, and automatic reminders do the follow-up so you don't have to. Everything in one place, from lead to paid.`}),(0,A.jsx)(`button`,{type:`button`,className:`sub-details-final-button`,children:`Start Free`})]})]})]})})]})}function ha(){return(0,A.jsxs)(Vt,{children:[(0,A.jsx)(k,{path:`/`,element:(0,A.jsx)(yr,{})}),(0,A.jsx)(k,{path:`/platform-overview`,element:(0,A.jsx)(Yr,{})}),(0,A.jsx)(k,{path:`/product-crm`,element:(0,A.jsx)(wi,{})}),(0,A.jsx)(k,{path:`/payment1`,element:(0,A.jsx)(Oi,{})}),(0,A.jsx)(k,{path:`/payment2`,element:(0,A.jsx)(Mi,{})}),(0,A.jsx)(k,{path:`/invoicing-billing`,element:(0,A.jsx)(Zi,{})}),(0,A.jsx)(k,{path:`/blogs`,element:(0,A.jsx)(Qi,{})}),(0,A.jsx)(k,{path:`/how-to-guide`,element:(0,A.jsx)($i,{})}),(0,A.jsx)(k,{path:`/platform-overview2`,element:(0,A.jsx)(ea,{})}),(0,A.jsx)(k,{path:`/freetools`,element:(0,A.jsx)(na,{})}),(0,A.jsx)(k,{path:`/customer-stories`,element:(0,A.jsx)(fa,{})}),(0,A.jsx)(k,{path:`/sub-details`,element:(0,A.jsx)(ma,{})})]})}(0,Qn.createRoot)(document.getElementById(`root`)).render((0,A.jsx)(x.StrictMode,{children:(0,A.jsx)(En,{children:(0,A.jsx)(ha,{})})}));