(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const a of l)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const a={};return l.integrity&&(a.integrity=l.integrity),l.referrerPolicy&&(a.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?a.credentials="include":l.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(l){if(l.ep)return;l.ep=!0;const a=n(l);fetch(l.href,a)}})();function Ec(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var tu={exports:{}},O={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rr=Symbol.for("react.element"),xc=Symbol.for("react.portal"),kc=Symbol.for("react.fragment"),Sc=Symbol.for("react.strict_mode"),Nc=Symbol.for("react.profiler"),Cc=Symbol.for("react.provider"),Pc=Symbol.for("react.context"),_c=Symbol.for("react.forward_ref"),zc=Symbol.for("react.suspense"),Lc=Symbol.for("react.memo"),Tc=Symbol.for("react.lazy"),Vi=Symbol.iterator;function Mc(e){return e===null||typeof e!="object"?null:(e=Vi&&e[Vi]||e["@@iterator"],typeof e=="function"?e:null)}var nu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ru=Object.assign,lu={};function mn(e,t,n){this.props=e,this.context=t,this.refs=lu,this.updater=n||nu}mn.prototype.isReactComponent={};mn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};mn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function au(){}au.prototype=mn.prototype;function Ka(e,t,n){this.props=e,this.context=t,this.refs=lu,this.updater=n||nu}var Ya=Ka.prototype=new au;Ya.constructor=Ka;ru(Ya,mn.prototype);Ya.isPureReactComponent=!0;var $i=Array.isArray,iu=Object.prototype.hasOwnProperty,Ga={current:null},ou={key:!0,ref:!0,__self:!0,__source:!0};function uu(e,t,n){var r,l={},a=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(a=""+t.key),t)iu.call(t,r)&&!ou.hasOwnProperty(r)&&(l[r]=t[r]);var u=arguments.length-2;if(u===1)l.children=n;else if(1<u){for(var s=Array(u),d=0;d<u;d++)s[d]=arguments[d+2];l.children=s}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)l[r]===void 0&&(l[r]=u[r]);return{$$typeof:rr,type:e,key:a,ref:o,props:l,_owner:Ga.current}}function Oc(e,t){return{$$typeof:rr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Xa(e){return typeof e=="object"&&e!==null&&e.$$typeof===rr}function Dc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Wi=/\/+/g;function Pl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Dc(""+e.key):t.toString(36)}function Pr(e,t,n,r,l){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case rr:case xc:o=!0}}if(o)return o=e,l=l(o),e=r===""?"."+Pl(o,0):r,$i(l)?(n="",e!=null&&(n=e.replace(Wi,"$&/")+"/"),Pr(l,t,n,"",function(d){return d})):l!=null&&(Xa(l)&&(l=Oc(l,n+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(Wi,"$&/")+"/")+e)),t.push(l)),1;if(o=0,r=r===""?".":r+":",$i(e))for(var u=0;u<e.length;u++){a=e[u];var s=r+Pl(a,u);o+=Pr(a,t,n,s,l)}else if(s=Mc(e),typeof s=="function")for(e=s.call(e),u=0;!(a=e.next()).done;)a=a.value,s=r+Pl(a,u++),o+=Pr(a,t,n,s,l);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function sr(e,t,n){if(e==null)return e;var r=[],l=0;return Pr(e,r,"","",function(a){return t.call(n,a,l++)}),r}function Rc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var de={current:null},_r={transition:null},Ac={ReactCurrentDispatcher:de,ReactCurrentBatchConfig:_r,ReactCurrentOwner:Ga};function su(){throw Error("act(...) is not supported in production builds of React.")}O.Children={map:sr,forEach:function(e,t,n){sr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return sr(e,function(){t++}),t},toArray:function(e){return sr(e,function(t){return t})||[]},only:function(e){if(!Xa(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};O.Component=mn;O.Fragment=kc;O.Profiler=Nc;O.PureComponent=Ka;O.StrictMode=Sc;O.Suspense=zc;O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ac;O.act=su;O.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ru({},e.props),l=e.key,a=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,o=Ga.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(s in t)iu.call(t,s)&&!ou.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&u!==void 0?u[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){u=Array(s);for(var d=0;d<s;d++)u[d]=arguments[d+2];r.children=u}return{$$typeof:rr,type:e.type,key:l,ref:a,props:r,_owner:o}};O.createContext=function(e){return e={$$typeof:Pc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Cc,_context:e},e.Consumer=e};O.createElement=uu;O.createFactory=function(e){var t=uu.bind(null,e);return t.type=e,t};O.createRef=function(){return{current:null}};O.forwardRef=function(e){return{$$typeof:_c,render:e}};O.isValidElement=Xa;O.lazy=function(e){return{$$typeof:Tc,_payload:{_status:-1,_result:e},_init:Rc}};O.memo=function(e,t){return{$$typeof:Lc,type:e,compare:t===void 0?null:t}};O.startTransition=function(e){var t=_r.transition;_r.transition={};try{e()}finally{_r.transition=t}};O.unstable_act=su;O.useCallback=function(e,t){return de.current.useCallback(e,t)};O.useContext=function(e){return de.current.useContext(e)};O.useDebugValue=function(){};O.useDeferredValue=function(e){return de.current.useDeferredValue(e)};O.useEffect=function(e,t){return de.current.useEffect(e,t)};O.useId=function(){return de.current.useId()};O.useImperativeHandle=function(e,t,n){return de.current.useImperativeHandle(e,t,n)};O.useInsertionEffect=function(e,t){return de.current.useInsertionEffect(e,t)};O.useLayoutEffect=function(e,t){return de.current.useLayoutEffect(e,t)};O.useMemo=function(e,t){return de.current.useMemo(e,t)};O.useReducer=function(e,t,n){return de.current.useReducer(e,t,n)};O.useRef=function(e){return de.current.useRef(e)};O.useState=function(e){return de.current.useState(e)};O.useSyncExternalStore=function(e,t,n){return de.current.useSyncExternalStore(e,t,n)};O.useTransition=function(){return de.current.useTransition()};O.version="18.3.1";tu.exports=O;var R=tu.exports;const i=Ec(R);var Zl={},cu={exports:{}},Se={},du={exports:{}},fu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(k,L){var T=k.length;k.push(L);e:for(;0<T;){var V=T-1>>>1,Y=k[V];if(0<l(Y,L))k[V]=L,k[T]=Y,T=V;else break e}}function n(k){return k.length===0?null:k[0]}function r(k){if(k.length===0)return null;var L=k[0],T=k.pop();if(T!==L){k[0]=T;e:for(var V=0,Y=k.length,jt=Y>>>1;V<jt;){var We=2*(V+1)-1,yn=k[We],He=We+1,bt=k[He];if(0>l(yn,T))He<Y&&0>l(bt,yn)?(k[V]=bt,k[He]=T,V=He):(k[V]=yn,k[We]=T,V=We);else if(He<Y&&0>l(bt,T))k[V]=bt,k[He]=T,V=He;else break e}}return L}function l(k,L){var T=k.sortIndex-L.sortIndex;return T!==0?T:k.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,u=o.now();e.unstable_now=function(){return o.now()-u}}var s=[],d=[],h=1,v=null,p=3,y=!1,g=!1,x=!1,I=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(k){for(var L=n(d);L!==null;){if(L.callback===null)r(d);else if(L.startTime<=k)r(d),L.sortIndex=L.expirationTime,t(s,L);else break;L=n(d)}}function w(k){if(x=!1,m(k),!g)if(n(s)!==null)g=!0,je(S);else{var L=n(d);L!==null&&vn(w,L.startTime-k)}}function S(k,L){g=!1,x&&(x=!1,f(_),_=-1),y=!0;var T=p;try{for(m(L),v=n(s);v!==null&&(!(v.expirationTime>L)||k&&!X());){var V=v.callback;if(typeof V=="function"){v.callback=null,p=v.priorityLevel;var Y=V(v.expirationTime<=L);L=e.unstable_now(),typeof Y=="function"?v.callback=Y:v===n(s)&&r(s),m(L)}else r(s);v=n(s)}if(v!==null)var jt=!0;else{var We=n(d);We!==null&&vn(w,We.startTime-L),jt=!1}return jt}finally{v=null,p=T,y=!1}}var P=!1,C=null,_=-1,U=5,M=-1;function X(){return!(e.unstable_now()-M<U)}function kt(){if(C!==null){var k=e.unstable_now();M=k;var L=!0;try{L=C(!0,k)}finally{L?Ft():(P=!1,C=null)}}else P=!1}var Ft;if(typeof c=="function")Ft=function(){c(kt)};else if(typeof MessageChannel<"u"){var ur=new MessageChannel,Nl=ur.port2;ur.port1.onmessage=kt,Ft=function(){Nl.postMessage(null)}}else Ft=function(){I(kt,0)};function je(k){C=k,P||(P=!0,Ft())}function vn(k,L){_=I(function(){k(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(k){k.callback=null},e.unstable_continueExecution=function(){g||y||(g=!0,je(S))},e.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<k?Math.floor(1e3/k):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(k){switch(p){case 1:case 2:case 3:var L=3;break;default:L=p}var T=p;p=L;try{return k()}finally{p=T}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(k,L){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var T=p;p=k;try{return L()}finally{p=T}},e.unstable_scheduleCallback=function(k,L,T){var V=e.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?V+T:V):T=V,k){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=T+Y,k={id:h++,callback:L,priorityLevel:k,startTime:T,expirationTime:Y,sortIndex:-1},T>V?(k.sortIndex=T,t(d,k),n(s)===null&&k===n(d)&&(x?(f(_),_=-1):x=!0,vn(w,T-V))):(k.sortIndex=Y,t(s,k),g||y||(g=!0,je(S))),k},e.unstable_shouldYield=X,e.unstable_wrapCallback=function(k){var L=p;return function(){var T=p;p=L;try{return k.apply(this,arguments)}finally{p=T}}}})(fu);du.exports=fu;var Ic=du.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fc=R,ke=Ic;function E(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var pu=new Set,Bn={};function At(e,t){on(e,t),on(e+"Capture",t)}function on(e,t){for(Bn[e]=t,e=0;e<t.length;e++)pu.add(t[e])}var qe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Jl=Object.prototype.hasOwnProperty,jc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Hi={},Qi={};function bc(e){return Jl.call(Qi,e)?!0:Jl.call(Hi,e)?!1:jc.test(e)?Qi[e]=!0:(Hi[e]=!0,!1)}function Bc(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Uc(e,t,n,r){if(t===null||typeof t>"u"||Bc(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function fe(e,t,n,r,l,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var le={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){le[e]=new fe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];le[t]=new fe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){le[e]=new fe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){le[e]=new fe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){le[e]=new fe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){le[e]=new fe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){le[e]=new fe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){le[e]=new fe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){le[e]=new fe(e,5,!1,e.toLowerCase(),null,!1,!1)});var qa=/[\-:]([a-z])/g;function Za(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(qa,Za);le[t]=new fe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(qa,Za);le[t]=new fe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(qa,Za);le[t]=new fe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){le[e]=new fe(e,1,!1,e.toLowerCase(),null,!1,!1)});le.xlinkHref=new fe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){le[e]=new fe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ja(e,t,n,r){var l=le.hasOwnProperty(t)?le[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Uc(t,n,l,r)&&(n=null),r||l===null?bc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var tt=Fc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,cr=Symbol.for("react.element"),Ut=Symbol.for("react.portal"),Vt=Symbol.for("react.fragment"),ei=Symbol.for("react.strict_mode"),ea=Symbol.for("react.profiler"),mu=Symbol.for("react.provider"),gu=Symbol.for("react.context"),ti=Symbol.for("react.forward_ref"),ta=Symbol.for("react.suspense"),na=Symbol.for("react.suspense_list"),ni=Symbol.for("react.memo"),rt=Symbol.for("react.lazy"),hu=Symbol.for("react.offscreen"),Ki=Symbol.iterator;function wn(e){return e===null||typeof e!="object"?null:(e=Ki&&e[Ki]||e["@@iterator"],typeof e=="function"?e:null)}var H=Object.assign,_l;function _n(e){if(_l===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);_l=t&&t[1]||""}return`
`+_l+e}var zl=!1;function Ll(e,t){if(!e||zl)return"";zl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var l=d.stack.split(`
`),a=r.stack.split(`
`),o=l.length-1,u=a.length-1;1<=o&&0<=u&&l[o]!==a[u];)u--;for(;1<=o&&0<=u;o--,u--)if(l[o]!==a[u]){if(o!==1||u!==1)do if(o--,u--,0>u||l[o]!==a[u]){var s=`
`+l[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=o&&0<=u);break}}}finally{zl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?_n(e):""}function Vc(e){switch(e.tag){case 5:return _n(e.type);case 16:return _n("Lazy");case 13:return _n("Suspense");case 19:return _n("SuspenseList");case 0:case 2:case 15:return e=Ll(e.type,!1),e;case 11:return e=Ll(e.type.render,!1),e;case 1:return e=Ll(e.type,!0),e;default:return""}}function ra(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Vt:return"Fragment";case Ut:return"Portal";case ea:return"Profiler";case ei:return"StrictMode";case ta:return"Suspense";case na:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case gu:return(e.displayName||"Context")+".Consumer";case mu:return(e._context.displayName||"Context")+".Provider";case ti:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ni:return t=e.displayName||null,t!==null?t:ra(e.type)||"Memo";case rt:t=e._payload,e=e._init;try{return ra(e(t))}catch{}}return null}function $c(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ra(t);case 8:return t===ei?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function vt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function vu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Wc(e){var t=vu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function dr(e){e._valueTracker||(e._valueTracker=Wc(e))}function yu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=vu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function jr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function la(e,t){var n=t.checked;return H({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Yi(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=vt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function wu(e,t){t=t.checked,t!=null&&Ja(e,"checked",t,!1)}function aa(e,t){wu(e,t);var n=vt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ia(e,t.type,n):t.hasOwnProperty("defaultValue")&&ia(e,t.type,vt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Gi(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ia(e,t,n){(t!=="number"||jr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var zn=Array.isArray;function en(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+vt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function oa(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(E(91));return H({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Xi(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(E(92));if(zn(n)){if(1<n.length)throw Error(E(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:vt(n)}}function Eu(e,t){var n=vt(t.value),r=vt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function qi(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function xu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ua(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?xu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var fr,ku=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(fr=fr||document.createElement("div"),fr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=fr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Un(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Mn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Hc=["Webkit","ms","Moz","O"];Object.keys(Mn).forEach(function(e){Hc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Mn[t]=Mn[e]})});function Su(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Mn.hasOwnProperty(e)&&Mn[e]?(""+t).trim():t+"px"}function Nu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Su(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Qc=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function sa(e,t){if(t){if(Qc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(E(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(E(61))}if(t.style!=null&&typeof t.style!="object")throw Error(E(62))}}function ca(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var da=null;function ri(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fa=null,tn=null,nn=null;function Zi(e){if(e=ir(e)){if(typeof fa!="function")throw Error(E(280));var t=e.stateNode;t&&(t=pl(t),fa(e.stateNode,e.type,t))}}function Cu(e){tn?nn?nn.push(e):nn=[e]:tn=e}function Pu(){if(tn){var e=tn,t=nn;if(nn=tn=null,Zi(e),t)for(e=0;e<t.length;e++)Zi(t[e])}}function _u(e,t){return e(t)}function zu(){}var Tl=!1;function Lu(e,t,n){if(Tl)return e(t,n);Tl=!0;try{return _u(e,t,n)}finally{Tl=!1,(tn!==null||nn!==null)&&(zu(),Pu())}}function Vn(e,t){var n=e.stateNode;if(n===null)return null;var r=pl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(E(231,t,typeof n));return n}var pa=!1;if(qe)try{var En={};Object.defineProperty(En,"passive",{get:function(){pa=!0}}),window.addEventListener("test",En,En),window.removeEventListener("test",En,En)}catch{pa=!1}function Kc(e,t,n,r,l,a,o,u,s){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(h){this.onError(h)}}var On=!1,br=null,Br=!1,ma=null,Yc={onError:function(e){On=!0,br=e}};function Gc(e,t,n,r,l,a,o,u,s){On=!1,br=null,Kc.apply(Yc,arguments)}function Xc(e,t,n,r,l,a,o,u,s){if(Gc.apply(this,arguments),On){if(On){var d=br;On=!1,br=null}else throw Error(E(198));Br||(Br=!0,ma=d)}}function It(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Tu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ji(e){if(It(e)!==e)throw Error(E(188))}function qc(e){var t=e.alternate;if(!t){if(t=It(e),t===null)throw Error(E(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var a=l.alternate;if(a===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===a.child){for(a=l.child;a;){if(a===n)return Ji(l),e;if(a===r)return Ji(l),t;a=a.sibling}throw Error(E(188))}if(n.return!==r.return)n=l,r=a;else{for(var o=!1,u=l.child;u;){if(u===n){o=!0,n=l,r=a;break}if(u===r){o=!0,r=l,n=a;break}u=u.sibling}if(!o){for(u=a.child;u;){if(u===n){o=!0,n=a,r=l;break}if(u===r){o=!0,r=a,n=l;break}u=u.sibling}if(!o)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?e:t}function Mu(e){return e=qc(e),e!==null?Ou(e):null}function Ou(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ou(e);if(t!==null)return t;e=e.sibling}return null}var Du=ke.unstable_scheduleCallback,eo=ke.unstable_cancelCallback,Zc=ke.unstable_shouldYield,Jc=ke.unstable_requestPaint,K=ke.unstable_now,ed=ke.unstable_getCurrentPriorityLevel,li=ke.unstable_ImmediatePriority,Ru=ke.unstable_UserBlockingPriority,Ur=ke.unstable_NormalPriority,td=ke.unstable_LowPriority,Au=ke.unstable_IdlePriority,sl=null,Ve=null;function nd(e){if(Ve&&typeof Ve.onCommitFiberRoot=="function")try{Ve.onCommitFiberRoot(sl,e,void 0,(e.current.flags&128)===128)}catch{}}var Ae=Math.clz32?Math.clz32:ad,rd=Math.log,ld=Math.LN2;function ad(e){return e>>>=0,e===0?32:31-(rd(e)/ld|0)|0}var pr=64,mr=4194304;function Ln(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Vr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var u=o&~l;u!==0?r=Ln(u):(a&=o,a!==0&&(r=Ln(a)))}else o=n&~l,o!==0?r=Ln(o):a!==0&&(r=Ln(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,a=t&-t,l>=a||l===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ae(t),l=1<<n,r|=e[n],t&=~l;return r}function id(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function od(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-Ae(a),u=1<<o,s=l[o];s===-1?(!(u&n)||u&r)&&(l[o]=id(u,t)):s<=t&&(e.expiredLanes|=u),a&=~u}}function ga(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Iu(){var e=pr;return pr<<=1,!(pr&4194240)&&(pr=64),e}function Ml(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function lr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ae(t),e[t]=n}function ud(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Ae(n),a=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~a}}function ai(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ae(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var A=0;function Fu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ju,ii,bu,Bu,Uu,ha=!1,gr=[],st=null,ct=null,dt=null,$n=new Map,Wn=new Map,at=[],sd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function to(e,t){switch(e){case"focusin":case"focusout":st=null;break;case"dragenter":case"dragleave":ct=null;break;case"mouseover":case"mouseout":dt=null;break;case"pointerover":case"pointerout":$n.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wn.delete(t.pointerId)}}function xn(e,t,n,r,l,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[l]},t!==null&&(t=ir(t),t!==null&&ii(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function cd(e,t,n,r,l){switch(t){case"focusin":return st=xn(st,e,t,n,r,l),!0;case"dragenter":return ct=xn(ct,e,t,n,r,l),!0;case"mouseover":return dt=xn(dt,e,t,n,r,l),!0;case"pointerover":var a=l.pointerId;return $n.set(a,xn($n.get(a)||null,e,t,n,r,l)),!0;case"gotpointercapture":return a=l.pointerId,Wn.set(a,xn(Wn.get(a)||null,e,t,n,r,l)),!0}return!1}function Vu(e){var t=Ct(e.target);if(t!==null){var n=It(t);if(n!==null){if(t=n.tag,t===13){if(t=Tu(n),t!==null){e.blockedOn=t,Uu(e.priority,function(){bu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function zr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=va(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);da=r,n.target.dispatchEvent(r),da=null}else return t=ir(n),t!==null&&ii(t),e.blockedOn=n,!1;t.shift()}return!0}function no(e,t,n){zr(e)&&n.delete(t)}function dd(){ha=!1,st!==null&&zr(st)&&(st=null),ct!==null&&zr(ct)&&(ct=null),dt!==null&&zr(dt)&&(dt=null),$n.forEach(no),Wn.forEach(no)}function kn(e,t){e.blockedOn===t&&(e.blockedOn=null,ha||(ha=!0,ke.unstable_scheduleCallback(ke.unstable_NormalPriority,dd)))}function Hn(e){function t(l){return kn(l,e)}if(0<gr.length){kn(gr[0],e);for(var n=1;n<gr.length;n++){var r=gr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(st!==null&&kn(st,e),ct!==null&&kn(ct,e),dt!==null&&kn(dt,e),$n.forEach(t),Wn.forEach(t),n=0;n<at.length;n++)r=at[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<at.length&&(n=at[0],n.blockedOn===null);)Vu(n),n.blockedOn===null&&at.shift()}var rn=tt.ReactCurrentBatchConfig,$r=!0;function fd(e,t,n,r){var l=A,a=rn.transition;rn.transition=null;try{A=1,oi(e,t,n,r)}finally{A=l,rn.transition=a}}function pd(e,t,n,r){var l=A,a=rn.transition;rn.transition=null;try{A=4,oi(e,t,n,r)}finally{A=l,rn.transition=a}}function oi(e,t,n,r){if($r){var l=va(e,t,n,r);if(l===null)Ul(e,t,r,Wr,n),to(e,r);else if(cd(l,e,t,n,r))r.stopPropagation();else if(to(e,r),t&4&&-1<sd.indexOf(e)){for(;l!==null;){var a=ir(l);if(a!==null&&ju(a),a=va(e,t,n,r),a===null&&Ul(e,t,r,Wr,n),a===l)break;l=a}l!==null&&r.stopPropagation()}else Ul(e,t,r,null,n)}}var Wr=null;function va(e,t,n,r){if(Wr=null,e=ri(r),e=Ct(e),e!==null)if(t=It(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Tu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Wr=e,null}function $u(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ed()){case li:return 1;case Ru:return 4;case Ur:case td:return 16;case Au:return 536870912;default:return 16}default:return 16}}var ot=null,ui=null,Lr=null;function Wu(){if(Lr)return Lr;var e,t=ui,n=t.length,r,l="value"in ot?ot.value:ot.textContent,a=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===l[a-r];r++);return Lr=l.slice(e,1<r?1-r:void 0)}function Tr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function hr(){return!0}function ro(){return!1}function Ne(e){function t(n,r,l,a,o){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(a):a[u]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?hr:ro,this.isPropagationStopped=ro,this}return H(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=hr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=hr)},persist:function(){},isPersistent:hr}),t}var gn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},si=Ne(gn),ar=H({},gn,{view:0,detail:0}),md=Ne(ar),Ol,Dl,Sn,cl=H({},ar,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ci,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Sn&&(Sn&&e.type==="mousemove"?(Ol=e.screenX-Sn.screenX,Dl=e.screenY-Sn.screenY):Dl=Ol=0,Sn=e),Ol)},movementY:function(e){return"movementY"in e?e.movementY:Dl}}),lo=Ne(cl),gd=H({},cl,{dataTransfer:0}),hd=Ne(gd),vd=H({},ar,{relatedTarget:0}),Rl=Ne(vd),yd=H({},gn,{animationName:0,elapsedTime:0,pseudoElement:0}),wd=Ne(yd),Ed=H({},gn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),xd=Ne(Ed),kd=H({},gn,{data:0}),ao=Ne(kd),Sd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Cd[e])?!!t[e]:!1}function ci(){return Pd}var _d=H({},ar,{key:function(e){if(e.key){var t=Sd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Tr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Nd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ci,charCode:function(e){return e.type==="keypress"?Tr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Tr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),zd=Ne(_d),Ld=H({},cl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),io=Ne(Ld),Td=H({},ar,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ci}),Md=Ne(Td),Od=H({},gn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Dd=Ne(Od),Rd=H({},cl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ad=Ne(Rd),Id=[9,13,27,32],di=qe&&"CompositionEvent"in window,Dn=null;qe&&"documentMode"in document&&(Dn=document.documentMode);var Fd=qe&&"TextEvent"in window&&!Dn,Hu=qe&&(!di||Dn&&8<Dn&&11>=Dn),oo=" ",uo=!1;function Qu(e,t){switch(e){case"keyup":return Id.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ku(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var $t=!1;function jd(e,t){switch(e){case"compositionend":return Ku(t);case"keypress":return t.which!==32?null:(uo=!0,oo);case"textInput":return e=t.data,e===oo&&uo?null:e;default:return null}}function bd(e,t){if($t)return e==="compositionend"||!di&&Qu(e,t)?(e=Wu(),Lr=ui=ot=null,$t=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Hu&&t.locale!=="ko"?null:t.data;default:return null}}var Bd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function so(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Bd[e.type]:t==="textarea"}function Yu(e,t,n,r){Cu(r),t=Hr(t,"onChange"),0<t.length&&(n=new si("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Rn=null,Qn=null;function Ud(e){as(e,0)}function dl(e){var t=Qt(e);if(yu(t))return e}function Vd(e,t){if(e==="change")return t}var Gu=!1;if(qe){var Al;if(qe){var Il="oninput"in document;if(!Il){var co=document.createElement("div");co.setAttribute("oninput","return;"),Il=typeof co.oninput=="function"}Al=Il}else Al=!1;Gu=Al&&(!document.documentMode||9<document.documentMode)}function fo(){Rn&&(Rn.detachEvent("onpropertychange",Xu),Qn=Rn=null)}function Xu(e){if(e.propertyName==="value"&&dl(Qn)){var t=[];Yu(t,Qn,e,ri(e)),Lu(Ud,t)}}function $d(e,t,n){e==="focusin"?(fo(),Rn=t,Qn=n,Rn.attachEvent("onpropertychange",Xu)):e==="focusout"&&fo()}function Wd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return dl(Qn)}function Hd(e,t){if(e==="click")return dl(t)}function Qd(e,t){if(e==="input"||e==="change")return dl(t)}function Kd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Fe=typeof Object.is=="function"?Object.is:Kd;function Kn(e,t){if(Fe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!Jl.call(t,l)||!Fe(e[l],t[l]))return!1}return!0}function po(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function mo(e,t){var n=po(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=po(n)}}function qu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?qu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Zu(){for(var e=window,t=jr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=jr(e.document)}return t}function fi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Yd(e){var t=Zu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&qu(n.ownerDocument.documentElement,n)){if(r!==null&&fi(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,a=Math.min(r.start,l);r=r.end===void 0?a:Math.min(r.end,l),!e.extend&&a>r&&(l=r,r=a,a=l),l=mo(n,a);var o=mo(n,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Gd=qe&&"documentMode"in document&&11>=document.documentMode,Wt=null,ya=null,An=null,wa=!1;function go(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;wa||Wt==null||Wt!==jr(r)||(r=Wt,"selectionStart"in r&&fi(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),An&&Kn(An,r)||(An=r,r=Hr(ya,"onSelect"),0<r.length&&(t=new si("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Wt)))}function vr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ht={animationend:vr("Animation","AnimationEnd"),animationiteration:vr("Animation","AnimationIteration"),animationstart:vr("Animation","AnimationStart"),transitionend:vr("Transition","TransitionEnd")},Fl={},Ju={};qe&&(Ju=document.createElement("div").style,"AnimationEvent"in window||(delete Ht.animationend.animation,delete Ht.animationiteration.animation,delete Ht.animationstart.animation),"TransitionEvent"in window||delete Ht.transitionend.transition);function fl(e){if(Fl[e])return Fl[e];if(!Ht[e])return e;var t=Ht[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ju)return Fl[e]=t[n];return e}var es=fl("animationend"),ts=fl("animationiteration"),ns=fl("animationstart"),rs=fl("transitionend"),ls=new Map,ho="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wt(e,t){ls.set(e,t),At(t,[e])}for(var jl=0;jl<ho.length;jl++){var bl=ho[jl],Xd=bl.toLowerCase(),qd=bl[0].toUpperCase()+bl.slice(1);wt(Xd,"on"+qd)}wt(es,"onAnimationEnd");wt(ts,"onAnimationIteration");wt(ns,"onAnimationStart");wt("dblclick","onDoubleClick");wt("focusin","onFocus");wt("focusout","onBlur");wt(rs,"onTransitionEnd");on("onMouseEnter",["mouseout","mouseover"]);on("onMouseLeave",["mouseout","mouseover"]);on("onPointerEnter",["pointerout","pointerover"]);on("onPointerLeave",["pointerout","pointerover"]);At("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));At("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));At("onBeforeInput",["compositionend","keypress","textInput","paste"]);At("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));At("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));At("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Tn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zd=new Set("cancel close invalid load scroll toggle".split(" ").concat(Tn));function vo(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Xc(r,t,void 0,e),e.currentTarget=null}function as(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var u=r[o],s=u.instance,d=u.currentTarget;if(u=u.listener,s!==a&&l.isPropagationStopped())break e;vo(l,u,d),a=s}else for(o=0;o<r.length;o++){if(u=r[o],s=u.instance,d=u.currentTarget,u=u.listener,s!==a&&l.isPropagationStopped())break e;vo(l,u,d),a=s}}}if(Br)throw e=ma,Br=!1,ma=null,e}function j(e,t){var n=t[Na];n===void 0&&(n=t[Na]=new Set);var r=e+"__bubble";n.has(r)||(is(t,e,2,!1),n.add(r))}function Bl(e,t,n){var r=0;t&&(r|=4),is(n,e,r,t)}var yr="_reactListening"+Math.random().toString(36).slice(2);function Yn(e){if(!e[yr]){e[yr]=!0,pu.forEach(function(n){n!=="selectionchange"&&(Zd.has(n)||Bl(n,!1,e),Bl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[yr]||(t[yr]=!0,Bl("selectionchange",!1,t))}}function is(e,t,n,r){switch($u(t)){case 1:var l=fd;break;case 4:l=pd;break;default:l=oi}n=l.bind(null,t,n,e),l=void 0,!pa||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Ul(e,t,n,r,l){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var u=r.stateNode.containerInfo;if(u===l||u.nodeType===8&&u.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===l||s.nodeType===8&&s.parentNode===l))return;o=o.return}for(;u!==null;){if(o=Ct(u),o===null)return;if(s=o.tag,s===5||s===6){r=a=o;continue e}u=u.parentNode}}r=r.return}Lu(function(){var d=a,h=ri(n),v=[];e:{var p=ls.get(e);if(p!==void 0){var y=si,g=e;switch(e){case"keypress":if(Tr(n)===0)break e;case"keydown":case"keyup":y=zd;break;case"focusin":g="focus",y=Rl;break;case"focusout":g="blur",y=Rl;break;case"beforeblur":case"afterblur":y=Rl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=lo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=hd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Md;break;case es:case ts:case ns:y=wd;break;case rs:y=Dd;break;case"scroll":y=md;break;case"wheel":y=Ad;break;case"copy":case"cut":case"paste":y=xd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=io}var x=(t&4)!==0,I=!x&&e==="scroll",f=x?p!==null?p+"Capture":null:p;x=[];for(var c=d,m;c!==null;){m=c;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,f!==null&&(w=Vn(c,f),w!=null&&x.push(Gn(c,w,m)))),I)break;c=c.return}0<x.length&&(p=new y(p,g,null,n,h),v.push({event:p,listeners:x}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",p&&n!==da&&(g=n.relatedTarget||n.fromElement)&&(Ct(g)||g[Ze]))break e;if((y||p)&&(p=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,y?(g=n.relatedTarget||n.toElement,y=d,g=g?Ct(g):null,g!==null&&(I=It(g),g!==I||g.tag!==5&&g.tag!==6)&&(g=null)):(y=null,g=d),y!==g)){if(x=lo,w="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(x=io,w="onPointerLeave",f="onPointerEnter",c="pointer"),I=y==null?p:Qt(y),m=g==null?p:Qt(g),p=new x(w,c+"leave",y,n,h),p.target=I,p.relatedTarget=m,w=null,Ct(h)===d&&(x=new x(f,c+"enter",g,n,h),x.target=m,x.relatedTarget=I,w=x),I=w,y&&g)t:{for(x=y,f=g,c=0,m=x;m;m=Bt(m))c++;for(m=0,w=f;w;w=Bt(w))m++;for(;0<c-m;)x=Bt(x),c--;for(;0<m-c;)f=Bt(f),m--;for(;c--;){if(x===f||f!==null&&x===f.alternate)break t;x=Bt(x),f=Bt(f)}x=null}else x=null;y!==null&&yo(v,p,y,x,!1),g!==null&&I!==null&&yo(v,I,g,x,!0)}}e:{if(p=d?Qt(d):window,y=p.nodeName&&p.nodeName.toLowerCase(),y==="select"||y==="input"&&p.type==="file")var S=Vd;else if(so(p))if(Gu)S=Qd;else{S=Wd;var P=$d}else(y=p.nodeName)&&y.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(S=Hd);if(S&&(S=S(e,d))){Yu(v,S,n,h);break e}P&&P(e,p,d),e==="focusout"&&(P=p._wrapperState)&&P.controlled&&p.type==="number"&&ia(p,"number",p.value)}switch(P=d?Qt(d):window,e){case"focusin":(so(P)||P.contentEditable==="true")&&(Wt=P,ya=d,An=null);break;case"focusout":An=ya=Wt=null;break;case"mousedown":wa=!0;break;case"contextmenu":case"mouseup":case"dragend":wa=!1,go(v,n,h);break;case"selectionchange":if(Gd)break;case"keydown":case"keyup":go(v,n,h)}var C;if(di)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else $t?Qu(e,n)&&(_="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(Hu&&n.locale!=="ko"&&($t||_!=="onCompositionStart"?_==="onCompositionEnd"&&$t&&(C=Wu()):(ot=h,ui="value"in ot?ot.value:ot.textContent,$t=!0)),P=Hr(d,_),0<P.length&&(_=new ao(_,e,null,n,h),v.push({event:_,listeners:P}),C?_.data=C:(C=Ku(n),C!==null&&(_.data=C)))),(C=Fd?jd(e,n):bd(e,n))&&(d=Hr(d,"onBeforeInput"),0<d.length&&(h=new ao("onBeforeInput","beforeinput",null,n,h),v.push({event:h,listeners:d}),h.data=C))}as(v,t)})}function Gn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Hr(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,a=l.stateNode;l.tag===5&&a!==null&&(l=a,a=Vn(e,n),a!=null&&r.unshift(Gn(e,a,l)),a=Vn(e,t),a!=null&&r.push(Gn(e,a,l))),e=e.return}return r}function Bt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function yo(e,t,n,r,l){for(var a=t._reactName,o=[];n!==null&&n!==r;){var u=n,s=u.alternate,d=u.stateNode;if(s!==null&&s===r)break;u.tag===5&&d!==null&&(u=d,l?(s=Vn(n,a),s!=null&&o.unshift(Gn(n,s,u))):l||(s=Vn(n,a),s!=null&&o.push(Gn(n,s,u)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Jd=/\r\n?/g,ef=/\u0000|\uFFFD/g;function wo(e){return(typeof e=="string"?e:""+e).replace(Jd,`
`).replace(ef,"")}function wr(e,t,n){if(t=wo(t),wo(e)!==t&&n)throw Error(E(425))}function Qr(){}var Ea=null,xa=null;function ka(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Sa=typeof setTimeout=="function"?setTimeout:void 0,tf=typeof clearTimeout=="function"?clearTimeout:void 0,Eo=typeof Promise=="function"?Promise:void 0,nf=typeof queueMicrotask=="function"?queueMicrotask:typeof Eo<"u"?function(e){return Eo.resolve(null).then(e).catch(rf)}:Sa;function rf(e){setTimeout(function(){throw e})}function Vl(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Hn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Hn(t)}function ft(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function xo(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var hn=Math.random().toString(36).slice(2),Ue="__reactFiber$"+hn,Xn="__reactProps$"+hn,Ze="__reactContainer$"+hn,Na="__reactEvents$"+hn,lf="__reactListeners$"+hn,af="__reactHandles$"+hn;function Ct(e){var t=e[Ue];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ze]||n[Ue]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=xo(e);e!==null;){if(n=e[Ue])return n;e=xo(e)}return t}e=n,n=e.parentNode}return null}function ir(e){return e=e[Ue]||e[Ze],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Qt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function pl(e){return e[Xn]||null}var Ca=[],Kt=-1;function Et(e){return{current:e}}function b(e){0>Kt||(e.current=Ca[Kt],Ca[Kt]=null,Kt--)}function F(e,t){Kt++,Ca[Kt]=e.current,e.current=t}var yt={},ue=Et(yt),ge=Et(!1),Tt=yt;function un(e,t){var n=e.type.contextTypes;if(!n)return yt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},a;for(a in n)l[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function he(e){return e=e.childContextTypes,e!=null}function Kr(){b(ge),b(ue)}function ko(e,t,n){if(ue.current!==yt)throw Error(E(168));F(ue,t),F(ge,n)}function os(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(E(108,$c(e)||"Unknown",l));return H({},n,r)}function Yr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||yt,Tt=ue.current,F(ue,e),F(ge,ge.current),!0}function So(e,t,n){var r=e.stateNode;if(!r)throw Error(E(169));n?(e=os(e,t,Tt),r.__reactInternalMemoizedMergedChildContext=e,b(ge),b(ue),F(ue,e)):b(ge),F(ge,n)}var Ke=null,ml=!1,$l=!1;function us(e){Ke===null?Ke=[e]:Ke.push(e)}function of(e){ml=!0,us(e)}function xt(){if(!$l&&Ke!==null){$l=!0;var e=0,t=A;try{var n=Ke;for(A=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ke=null,ml=!1}catch(l){throw Ke!==null&&(Ke=Ke.slice(e+1)),Du(li,xt),l}finally{A=t,$l=!1}}return null}var Yt=[],Gt=0,Gr=null,Xr=0,Ce=[],Pe=0,Mt=null,Ye=1,Ge="";function St(e,t){Yt[Gt++]=Xr,Yt[Gt++]=Gr,Gr=e,Xr=t}function ss(e,t,n){Ce[Pe++]=Ye,Ce[Pe++]=Ge,Ce[Pe++]=Mt,Mt=e;var r=Ye;e=Ge;var l=32-Ae(r)-1;r&=~(1<<l),n+=1;var a=32-Ae(t)+l;if(30<a){var o=l-l%5;a=(r&(1<<o)-1).toString(32),r>>=o,l-=o,Ye=1<<32-Ae(t)+l|n<<l|r,Ge=a+e}else Ye=1<<a|n<<l|r,Ge=e}function pi(e){e.return!==null&&(St(e,1),ss(e,1,0))}function mi(e){for(;e===Gr;)Gr=Yt[--Gt],Yt[Gt]=null,Xr=Yt[--Gt],Yt[Gt]=null;for(;e===Mt;)Mt=Ce[--Pe],Ce[Pe]=null,Ge=Ce[--Pe],Ce[Pe]=null,Ye=Ce[--Pe],Ce[Pe]=null}var xe=null,Ee=null,B=!1,Re=null;function cs(e,t){var n=_e(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function No(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,xe=e,Ee=ft(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,xe=e,Ee=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Mt!==null?{id:Ye,overflow:Ge}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=_e(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,xe=e,Ee=null,!0):!1;default:return!1}}function Pa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function _a(e){if(B){var t=Ee;if(t){var n=t;if(!No(e,t)){if(Pa(e))throw Error(E(418));t=ft(n.nextSibling);var r=xe;t&&No(e,t)?cs(r,n):(e.flags=e.flags&-4097|2,B=!1,xe=e)}}else{if(Pa(e))throw Error(E(418));e.flags=e.flags&-4097|2,B=!1,xe=e}}}function Co(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;xe=e}function Er(e){if(e!==xe)return!1;if(!B)return Co(e),B=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ka(e.type,e.memoizedProps)),t&&(t=Ee)){if(Pa(e))throw ds(),Error(E(418));for(;t;)cs(e,t),t=ft(t.nextSibling)}if(Co(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ee=ft(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ee=null}}else Ee=xe?ft(e.stateNode.nextSibling):null;return!0}function ds(){for(var e=Ee;e;)e=ft(e.nextSibling)}function sn(){Ee=xe=null,B=!1}function gi(e){Re===null?Re=[e]:Re.push(e)}var uf=tt.ReactCurrentBatchConfig;function Nn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,e));var l=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(o){var u=l.refs;o===null?delete u[a]:u[a]=o},t._stringRef=a,t)}if(typeof e!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,e))}return e}function xr(e,t){throw e=Object.prototype.toString.call(t),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Po(e){var t=e._init;return t(e._payload)}function fs(e){function t(f,c){if(e){var m=f.deletions;m===null?(f.deletions=[c],f.flags|=16):m.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function l(f,c){return f=ht(f,c),f.index=0,f.sibling=null,f}function a(f,c,m){return f.index=m,e?(m=f.alternate,m!==null?(m=m.index,m<c?(f.flags|=2,c):m):(f.flags|=2,c)):(f.flags|=1048576,c)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function u(f,c,m,w){return c===null||c.tag!==6?(c=Xl(m,f.mode,w),c.return=f,c):(c=l(c,m),c.return=f,c)}function s(f,c,m,w){var S=m.type;return S===Vt?h(f,c,m.props.children,w,m.key):c!==null&&(c.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===rt&&Po(S)===c.type)?(w=l(c,m.props),w.ref=Nn(f,c,m),w.return=f,w):(w=Fr(m.type,m.key,m.props,null,f.mode,w),w.ref=Nn(f,c,m),w.return=f,w)}function d(f,c,m,w){return c===null||c.tag!==4||c.stateNode.containerInfo!==m.containerInfo||c.stateNode.implementation!==m.implementation?(c=ql(m,f.mode,w),c.return=f,c):(c=l(c,m.children||[]),c.return=f,c)}function h(f,c,m,w,S){return c===null||c.tag!==7?(c=Lt(m,f.mode,w,S),c.return=f,c):(c=l(c,m),c.return=f,c)}function v(f,c,m){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Xl(""+c,f.mode,m),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case cr:return m=Fr(c.type,c.key,c.props,null,f.mode,m),m.ref=Nn(f,null,c),m.return=f,m;case Ut:return c=ql(c,f.mode,m),c.return=f,c;case rt:var w=c._init;return v(f,w(c._payload),m)}if(zn(c)||wn(c))return c=Lt(c,f.mode,m,null),c.return=f,c;xr(f,c)}return null}function p(f,c,m,w){var S=c!==null?c.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return S!==null?null:u(f,c,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case cr:return m.key===S?s(f,c,m,w):null;case Ut:return m.key===S?d(f,c,m,w):null;case rt:return S=m._init,p(f,c,S(m._payload),w)}if(zn(m)||wn(m))return S!==null?null:h(f,c,m,w,null);xr(f,m)}return null}function y(f,c,m,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return f=f.get(m)||null,u(c,f,""+w,S);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case cr:return f=f.get(w.key===null?m:w.key)||null,s(c,f,w,S);case Ut:return f=f.get(w.key===null?m:w.key)||null,d(c,f,w,S);case rt:var P=w._init;return y(f,c,m,P(w._payload),S)}if(zn(w)||wn(w))return f=f.get(m)||null,h(c,f,w,S,null);xr(c,w)}return null}function g(f,c,m,w){for(var S=null,P=null,C=c,_=c=0,U=null;C!==null&&_<m.length;_++){C.index>_?(U=C,C=null):U=C.sibling;var M=p(f,C,m[_],w);if(M===null){C===null&&(C=U);break}e&&C&&M.alternate===null&&t(f,C),c=a(M,c,_),P===null?S=M:P.sibling=M,P=M,C=U}if(_===m.length)return n(f,C),B&&St(f,_),S;if(C===null){for(;_<m.length;_++)C=v(f,m[_],w),C!==null&&(c=a(C,c,_),P===null?S=C:P.sibling=C,P=C);return B&&St(f,_),S}for(C=r(f,C);_<m.length;_++)U=y(C,f,_,m[_],w),U!==null&&(e&&U.alternate!==null&&C.delete(U.key===null?_:U.key),c=a(U,c,_),P===null?S=U:P.sibling=U,P=U);return e&&C.forEach(function(X){return t(f,X)}),B&&St(f,_),S}function x(f,c,m,w){var S=wn(m);if(typeof S!="function")throw Error(E(150));if(m=S.call(m),m==null)throw Error(E(151));for(var P=S=null,C=c,_=c=0,U=null,M=m.next();C!==null&&!M.done;_++,M=m.next()){C.index>_?(U=C,C=null):U=C.sibling;var X=p(f,C,M.value,w);if(X===null){C===null&&(C=U);break}e&&C&&X.alternate===null&&t(f,C),c=a(X,c,_),P===null?S=X:P.sibling=X,P=X,C=U}if(M.done)return n(f,C),B&&St(f,_),S;if(C===null){for(;!M.done;_++,M=m.next())M=v(f,M.value,w),M!==null&&(c=a(M,c,_),P===null?S=M:P.sibling=M,P=M);return B&&St(f,_),S}for(C=r(f,C);!M.done;_++,M=m.next())M=y(C,f,_,M.value,w),M!==null&&(e&&M.alternate!==null&&C.delete(M.key===null?_:M.key),c=a(M,c,_),P===null?S=M:P.sibling=M,P=M);return e&&C.forEach(function(kt){return t(f,kt)}),B&&St(f,_),S}function I(f,c,m,w){if(typeof m=="object"&&m!==null&&m.type===Vt&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case cr:e:{for(var S=m.key,P=c;P!==null;){if(P.key===S){if(S=m.type,S===Vt){if(P.tag===7){n(f,P.sibling),c=l(P,m.props.children),c.return=f,f=c;break e}}else if(P.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===rt&&Po(S)===P.type){n(f,P.sibling),c=l(P,m.props),c.ref=Nn(f,P,m),c.return=f,f=c;break e}n(f,P);break}else t(f,P);P=P.sibling}m.type===Vt?(c=Lt(m.props.children,f.mode,w,m.key),c.return=f,f=c):(w=Fr(m.type,m.key,m.props,null,f.mode,w),w.ref=Nn(f,c,m),w.return=f,f=w)}return o(f);case Ut:e:{for(P=m.key;c!==null;){if(c.key===P)if(c.tag===4&&c.stateNode.containerInfo===m.containerInfo&&c.stateNode.implementation===m.implementation){n(f,c.sibling),c=l(c,m.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=ql(m,f.mode,w),c.return=f,f=c}return o(f);case rt:return P=m._init,I(f,c,P(m._payload),w)}if(zn(m))return g(f,c,m,w);if(wn(m))return x(f,c,m,w);xr(f,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,c!==null&&c.tag===6?(n(f,c.sibling),c=l(c,m),c.return=f,f=c):(n(f,c),c=Xl(m,f.mode,w),c.return=f,f=c),o(f)):n(f,c)}return I}var cn=fs(!0),ps=fs(!1),qr=Et(null),Zr=null,Xt=null,hi=null;function vi(){hi=Xt=Zr=null}function yi(e){var t=qr.current;b(qr),e._currentValue=t}function za(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ln(e,t){Zr=e,hi=Xt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(me=!0),e.firstContext=null)}function Le(e){var t=e._currentValue;if(hi!==e)if(e={context:e,memoizedValue:t,next:null},Xt===null){if(Zr===null)throw Error(E(308));Xt=e,Zr.dependencies={lanes:0,firstContext:e}}else Xt=Xt.next=e;return t}var Pt=null;function wi(e){Pt===null?Pt=[e]:Pt.push(e)}function ms(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,wi(t)):(n.next=l.next,l.next=n),t.interleaved=n,Je(e,r)}function Je(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var lt=!1;function Ei(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function gs(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Xe(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function pt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,D&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Je(e,n)}return l=r.interleaved,l===null?(t.next=t,wi(r)):(t.next=l.next,l.next=t),r.interleaved=t,Je(e,n)}function Mr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ai(e,n)}}function _o(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?l=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?l=a=t:a=a.next=t}else l=a=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Jr(e,t,n,r){var l=e.updateQueue;lt=!1;var a=l.firstBaseUpdate,o=l.lastBaseUpdate,u=l.shared.pending;if(u!==null){l.shared.pending=null;var s=u,d=s.next;s.next=null,o===null?a=d:o.next=d,o=s;var h=e.alternate;h!==null&&(h=h.updateQueue,u=h.lastBaseUpdate,u!==o&&(u===null?h.firstBaseUpdate=d:u.next=d,h.lastBaseUpdate=s))}if(a!==null){var v=l.baseState;o=0,h=d=s=null,u=a;do{var p=u.lane,y=u.eventTime;if((r&p)===p){h!==null&&(h=h.next={eventTime:y,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var g=e,x=u;switch(p=t,y=n,x.tag){case 1:if(g=x.payload,typeof g=="function"){v=g.call(y,v,p);break e}v=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=x.payload,p=typeof g=="function"?g.call(y,v,p):g,p==null)break e;v=H({},v,p);break e;case 2:lt=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,p=l.effects,p===null?l.effects=[u]:p.push(u))}else y={eventTime:y,lane:p,tag:u.tag,payload:u.payload,callback:u.callback,next:null},h===null?(d=h=y,s=v):h=h.next=y,o|=p;if(u=u.next,u===null){if(u=l.shared.pending,u===null)break;p=u,u=p.next,p.next=null,l.lastBaseUpdate=p,l.shared.pending=null}}while(!0);if(h===null&&(s=v),l.baseState=s,l.firstBaseUpdate=d,l.lastBaseUpdate=h,t=l.shared.interleaved,t!==null){l=t;do o|=l.lane,l=l.next;while(l!==t)}else a===null&&(l.shared.lanes=0);Dt|=o,e.lanes=o,e.memoizedState=v}}function zo(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(E(191,l));l.call(r)}}}var or={},$e=Et(or),qn=Et(or),Zn=Et(or);function _t(e){if(e===or)throw Error(E(174));return e}function xi(e,t){switch(F(Zn,t),F(qn,e),F($e,or),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ua(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ua(t,e)}b($e),F($e,t)}function dn(){b($e),b(qn),b(Zn)}function hs(e){_t(Zn.current);var t=_t($e.current),n=ua(t,e.type);t!==n&&(F(qn,e),F($e,n))}function ki(e){qn.current===e&&(b($e),b(qn))}var $=Et(0);function el(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Wl=[];function Si(){for(var e=0;e<Wl.length;e++)Wl[e]._workInProgressVersionPrimary=null;Wl.length=0}var Or=tt.ReactCurrentDispatcher,Hl=tt.ReactCurrentBatchConfig,Ot=0,W=null,q=null,ee=null,tl=!1,In=!1,Jn=0,sf=0;function ae(){throw Error(E(321))}function Ni(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Fe(e[n],t[n]))return!1;return!0}function Ci(e,t,n,r,l,a){if(Ot=a,W=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Or.current=e===null||e.memoizedState===null?pf:mf,e=n(r,l),In){a=0;do{if(In=!1,Jn=0,25<=a)throw Error(E(301));a+=1,ee=q=null,t.updateQueue=null,Or.current=gf,e=n(r,l)}while(In)}if(Or.current=nl,t=q!==null&&q.next!==null,Ot=0,ee=q=W=null,tl=!1,t)throw Error(E(300));return e}function Pi(){var e=Jn!==0;return Jn=0,e}function Be(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ee===null?W.memoizedState=ee=e:ee=ee.next=e,ee}function Te(){if(q===null){var e=W.alternate;e=e!==null?e.memoizedState:null}else e=q.next;var t=ee===null?W.memoizedState:ee.next;if(t!==null)ee=t,q=e;else{if(e===null)throw Error(E(310));q=e,e={memoizedState:q.memoizedState,baseState:q.baseState,baseQueue:q.baseQueue,queue:q.queue,next:null},ee===null?W.memoizedState=ee=e:ee=ee.next=e}return ee}function er(e,t){return typeof t=="function"?t(e):t}function Ql(e){var t=Te(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=q,l=r.baseQueue,a=n.pending;if(a!==null){if(l!==null){var o=l.next;l.next=a.next,a.next=o}r.baseQueue=l=a,n.pending=null}if(l!==null){a=l.next,r=r.baseState;var u=o=null,s=null,d=a;do{var h=d.lane;if((Ot&h)===h)s!==null&&(s=s.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var v={lane:h,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};s===null?(u=s=v,o=r):s=s.next=v,W.lanes|=h,Dt|=h}d=d.next}while(d!==null&&d!==a);s===null?o=r:s.next=u,Fe(r,t.memoizedState)||(me=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do a=l.lane,W.lanes|=a,Dt|=a,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Kl(e){var t=Te(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,a=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do a=e(a,o.action),o=o.next;while(o!==l);Fe(a,t.memoizedState)||(me=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function vs(){}function ys(e,t){var n=W,r=Te(),l=t(),a=!Fe(r.memoizedState,l);if(a&&(r.memoizedState=l,me=!0),r=r.queue,_i(xs.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||ee!==null&&ee.memoizedState.tag&1){if(n.flags|=2048,tr(9,Es.bind(null,n,r,l,t),void 0,null),te===null)throw Error(E(349));Ot&30||ws(n,t,l)}return l}function ws(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=W.updateQueue,t===null?(t={lastEffect:null,stores:null},W.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Es(e,t,n,r){t.value=n,t.getSnapshot=r,ks(t)&&Ss(e)}function xs(e,t,n){return n(function(){ks(t)&&Ss(e)})}function ks(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Fe(e,n)}catch{return!0}}function Ss(e){var t=Je(e,1);t!==null&&Ie(t,e,1,-1)}function Lo(e){var t=Be();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:er,lastRenderedState:e},t.queue=e,e=e.dispatch=ff.bind(null,W,e),[t.memoizedState,e]}function tr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=W.updateQueue,t===null?(t={lastEffect:null,stores:null},W.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ns(){return Te().memoizedState}function Dr(e,t,n,r){var l=Be();W.flags|=e,l.memoizedState=tr(1|t,n,void 0,r===void 0?null:r)}function gl(e,t,n,r){var l=Te();r=r===void 0?null:r;var a=void 0;if(q!==null){var o=q.memoizedState;if(a=o.destroy,r!==null&&Ni(r,o.deps)){l.memoizedState=tr(t,n,a,r);return}}W.flags|=e,l.memoizedState=tr(1|t,n,a,r)}function To(e,t){return Dr(8390656,8,e,t)}function _i(e,t){return gl(2048,8,e,t)}function Cs(e,t){return gl(4,2,e,t)}function Ps(e,t){return gl(4,4,e,t)}function _s(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function zs(e,t,n){return n=n!=null?n.concat([e]):null,gl(4,4,_s.bind(null,t,e),n)}function zi(){}function Ls(e,t){var n=Te();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ni(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ts(e,t){var n=Te();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ni(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ms(e,t,n){return Ot&21?(Fe(n,t)||(n=Iu(),W.lanes|=n,Dt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,me=!0),e.memoizedState=n)}function cf(e,t){var n=A;A=n!==0&&4>n?n:4,e(!0);var r=Hl.transition;Hl.transition={};try{e(!1),t()}finally{A=n,Hl.transition=r}}function Os(){return Te().memoizedState}function df(e,t,n){var r=gt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ds(e))Rs(t,n);else if(n=ms(e,t,n,r),n!==null){var l=ce();Ie(n,e,r,l),As(n,t,r)}}function ff(e,t,n){var r=gt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ds(e))Rs(t,l);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,u=a(o,n);if(l.hasEagerState=!0,l.eagerState=u,Fe(u,o)){var s=t.interleaved;s===null?(l.next=l,wi(t)):(l.next=s.next,s.next=l),t.interleaved=l;return}}catch{}finally{}n=ms(e,t,l,r),n!==null&&(l=ce(),Ie(n,e,r,l),As(n,t,r))}}function Ds(e){var t=e.alternate;return e===W||t!==null&&t===W}function Rs(e,t){In=tl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function As(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ai(e,n)}}var nl={readContext:Le,useCallback:ae,useContext:ae,useEffect:ae,useImperativeHandle:ae,useInsertionEffect:ae,useLayoutEffect:ae,useMemo:ae,useReducer:ae,useRef:ae,useState:ae,useDebugValue:ae,useDeferredValue:ae,useTransition:ae,useMutableSource:ae,useSyncExternalStore:ae,useId:ae,unstable_isNewReconciler:!1},pf={readContext:Le,useCallback:function(e,t){return Be().memoizedState=[e,t===void 0?null:t],e},useContext:Le,useEffect:To,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Dr(4194308,4,_s.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Dr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Dr(4,2,e,t)},useMemo:function(e,t){var n=Be();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Be();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=df.bind(null,W,e),[r.memoizedState,e]},useRef:function(e){var t=Be();return e={current:e},t.memoizedState=e},useState:Lo,useDebugValue:zi,useDeferredValue:function(e){return Be().memoizedState=e},useTransition:function(){var e=Lo(!1),t=e[0];return e=cf.bind(null,e[1]),Be().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=W,l=Be();if(B){if(n===void 0)throw Error(E(407));n=n()}else{if(n=t(),te===null)throw Error(E(349));Ot&30||ws(r,t,n)}l.memoizedState=n;var a={value:n,getSnapshot:t};return l.queue=a,To(xs.bind(null,r,a,e),[e]),r.flags|=2048,tr(9,Es.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=Be(),t=te.identifierPrefix;if(B){var n=Ge,r=Ye;n=(r&~(1<<32-Ae(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Jn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=sf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},mf={readContext:Le,useCallback:Ls,useContext:Le,useEffect:_i,useImperativeHandle:zs,useInsertionEffect:Cs,useLayoutEffect:Ps,useMemo:Ts,useReducer:Ql,useRef:Ns,useState:function(){return Ql(er)},useDebugValue:zi,useDeferredValue:function(e){var t=Te();return Ms(t,q.memoizedState,e)},useTransition:function(){var e=Ql(er)[0],t=Te().memoizedState;return[e,t]},useMutableSource:vs,useSyncExternalStore:ys,useId:Os,unstable_isNewReconciler:!1},gf={readContext:Le,useCallback:Ls,useContext:Le,useEffect:_i,useImperativeHandle:zs,useInsertionEffect:Cs,useLayoutEffect:Ps,useMemo:Ts,useReducer:Kl,useRef:Ns,useState:function(){return Kl(er)},useDebugValue:zi,useDeferredValue:function(e){var t=Te();return q===null?t.memoizedState=e:Ms(t,q.memoizedState,e)},useTransition:function(){var e=Kl(er)[0],t=Te().memoizedState;return[e,t]},useMutableSource:vs,useSyncExternalStore:ys,useId:Os,unstable_isNewReconciler:!1};function Oe(e,t){if(e&&e.defaultProps){t=H({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function La(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:H({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var hl={isMounted:function(e){return(e=e._reactInternals)?It(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ce(),l=gt(e),a=Xe(r,l);a.payload=t,n!=null&&(a.callback=n),t=pt(e,a,l),t!==null&&(Ie(t,e,l,r),Mr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ce(),l=gt(e),a=Xe(r,l);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=pt(e,a,l),t!==null&&(Ie(t,e,l,r),Mr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ce(),r=gt(e),l=Xe(n,r);l.tag=2,t!=null&&(l.callback=t),t=pt(e,l,r),t!==null&&(Ie(t,e,r,n),Mr(t,e,r))}};function Mo(e,t,n,r,l,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Kn(n,r)||!Kn(l,a):!0}function Is(e,t,n){var r=!1,l=yt,a=t.contextType;return typeof a=="object"&&a!==null?a=Le(a):(l=he(t)?Tt:ue.current,r=t.contextTypes,a=(r=r!=null)?un(e,l):yt),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=hl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=a),t}function Oo(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&hl.enqueueReplaceState(t,t.state,null)}function Ta(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},Ei(e);var a=t.contextType;typeof a=="object"&&a!==null?l.context=Le(a):(a=he(t)?Tt:ue.current,l.context=un(e,a)),l.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(La(e,t,a,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&hl.enqueueReplaceState(l,l.state,null),Jr(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function fn(e,t){try{var n="",r=t;do n+=Vc(r),r=r.return;while(r);var l=n}catch(a){l=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:l,digest:null}}function Yl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ma(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var hf=typeof WeakMap=="function"?WeakMap:Map;function Fs(e,t,n){n=Xe(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ll||(ll=!0,Ua=r),Ma(e,t)},n}function js(e,t,n){n=Xe(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Ma(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){Ma(e,t),typeof r!="function"&&(mt===null?mt=new Set([this]):mt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Do(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new hf;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Tf.bind(null,e,t,n),t.then(e,e))}function Ro(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ao(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Xe(-1,1),t.tag=2,pt(n,t,1))),n.lanes|=1),e)}var vf=tt.ReactCurrentOwner,me=!1;function se(e,t,n,r){t.child=e===null?ps(t,null,n,r):cn(t,e.child,n,r)}function Io(e,t,n,r,l){n=n.render;var a=t.ref;return ln(t,l),r=Ci(e,t,n,r,a,l),n=Pi(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,et(e,t,l)):(B&&n&&pi(t),t.flags|=1,se(e,t,r,l),t.child)}function Fo(e,t,n,r,l){if(e===null){var a=n.type;return typeof a=="function"&&!Ii(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,bs(e,t,a,r,l)):(e=Fr(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&l)){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:Kn,n(o,r)&&e.ref===t.ref)return et(e,t,l)}return t.flags|=1,e=ht(a,r),e.ref=t.ref,e.return=t,t.child=e}function bs(e,t,n,r,l){if(e!==null){var a=e.memoizedProps;if(Kn(a,r)&&e.ref===t.ref)if(me=!1,t.pendingProps=r=a,(e.lanes&l)!==0)e.flags&131072&&(me=!0);else return t.lanes=e.lanes,et(e,t,l)}return Oa(e,t,n,r,l)}function Bs(e,t,n){var r=t.pendingProps,l=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},F(Zt,we),we|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,F(Zt,we),we|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,F(Zt,we),we|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,F(Zt,we),we|=r;return se(e,t,l,n),t.child}function Us(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Oa(e,t,n,r,l){var a=he(n)?Tt:ue.current;return a=un(t,a),ln(t,l),n=Ci(e,t,n,r,a,l),r=Pi(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,et(e,t,l)):(B&&r&&pi(t),t.flags|=1,se(e,t,n,l),t.child)}function jo(e,t,n,r,l){if(he(n)){var a=!0;Yr(t)}else a=!1;if(ln(t,l),t.stateNode===null)Rr(e,t),Is(t,n,r),Ta(t,n,r,l),r=!0;else if(e===null){var o=t.stateNode,u=t.memoizedProps;o.props=u;var s=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=Le(d):(d=he(n)?Tt:ue.current,d=un(t,d));var h=n.getDerivedStateFromProps,v=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";v||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==r||s!==d)&&Oo(t,o,r,d),lt=!1;var p=t.memoizedState;o.state=p,Jr(t,r,o,l),s=t.memoizedState,u!==r||p!==s||ge.current||lt?(typeof h=="function"&&(La(t,n,h,r),s=t.memoizedState),(u=lt||Mo(t,n,u,r,p,s,d))?(v||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),o.props=r,o.state=s,o.context=d,r=u):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,gs(e,t),u=t.memoizedProps,d=t.type===t.elementType?u:Oe(t.type,u),o.props=d,v=t.pendingProps,p=o.context,s=n.contextType,typeof s=="object"&&s!==null?s=Le(s):(s=he(n)?Tt:ue.current,s=un(t,s));var y=n.getDerivedStateFromProps;(h=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==v||p!==s)&&Oo(t,o,r,s),lt=!1,p=t.memoizedState,o.state=p,Jr(t,r,o,l);var g=t.memoizedState;u!==v||p!==g||ge.current||lt?(typeof y=="function"&&(La(t,n,y,r),g=t.memoizedState),(d=lt||Mo(t,n,d,r,p,g,s)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,g,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,g,s)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),o.props=r,o.state=g,o.context=s,r=d):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Da(e,t,n,r,a,l)}function Da(e,t,n,r,l,a){Us(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return l&&So(t,n,!1),et(e,t,a);r=t.stateNode,vf.current=t;var u=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=cn(t,e.child,null,a),t.child=cn(t,null,u,a)):se(e,t,u,a),t.memoizedState=r.state,l&&So(t,n,!0),t.child}function Vs(e){var t=e.stateNode;t.pendingContext?ko(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ko(e,t.context,!1),xi(e,t.containerInfo)}function bo(e,t,n,r,l){return sn(),gi(l),t.flags|=256,se(e,t,n,r),t.child}var Ra={dehydrated:null,treeContext:null,retryLane:0};function Aa(e){return{baseLanes:e,cachePool:null,transitions:null}}function $s(e,t,n){var r=t.pendingProps,l=$.current,a=!1,o=(t.flags&128)!==0,u;if((u=o)||(u=e!==null&&e.memoizedState===null?!1:(l&2)!==0),u?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),F($,l&1),e===null)return _a(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:"hidden",children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=wl(o,r,0,null),e=Lt(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Aa(n),t.memoizedState=Ra,e):Li(t,o));if(l=e.memoizedState,l!==null&&(u=l.dehydrated,u!==null))return yf(e,t,o,r,u,l,n);if(a){a=r.fallback,o=t.mode,l=e.child,u=l.sibling;var s={mode:"hidden",children:r.children};return!(o&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=ht(l,s),r.subtreeFlags=l.subtreeFlags&14680064),u!==null?a=ht(u,a):(a=Lt(a,o,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?Aa(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=Ra,r}return a=e.child,e=a.sibling,r=ht(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Li(e,t){return t=wl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function kr(e,t,n,r){return r!==null&&gi(r),cn(t,e.child,null,n),e=Li(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function yf(e,t,n,r,l,a,o){if(n)return t.flags&256?(t.flags&=-257,r=Yl(Error(E(422))),kr(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,l=t.mode,r=wl({mode:"visible",children:r.children},l,0,null),a=Lt(a,l,o,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&cn(t,e.child,null,o),t.child.memoizedState=Aa(o),t.memoizedState=Ra,a);if(!(t.mode&1))return kr(e,t,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var u=r.dgst;return r=u,a=Error(E(419)),r=Yl(a,r,void 0),kr(e,t,o,r)}if(u=(o&e.childLanes)!==0,me||u){if(r=te,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|o)?0:l,l!==0&&l!==a.retryLane&&(a.retryLane=l,Je(e,l),Ie(r,e,l,-1))}return Ai(),r=Yl(Error(E(421))),kr(e,t,o,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Mf.bind(null,e),l._reactRetry=t,null):(e=a.treeContext,Ee=ft(l.nextSibling),xe=t,B=!0,Re=null,e!==null&&(Ce[Pe++]=Ye,Ce[Pe++]=Ge,Ce[Pe++]=Mt,Ye=e.id,Ge=e.overflow,Mt=t),t=Li(t,r.children),t.flags|=4096,t)}function Bo(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),za(e.return,t,n)}function Gl(e,t,n,r,l){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=l)}function Ws(e,t,n){var r=t.pendingProps,l=r.revealOrder,a=r.tail;if(se(e,t,r.children,n),r=$.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Bo(e,n,t);else if(e.tag===19)Bo(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(F($,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&el(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Gl(t,!1,l,n,a);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&el(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Gl(t,!0,n,null,a);break;case"together":Gl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Rr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function et(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Dt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(E(153));if(t.child!==null){for(e=t.child,n=ht(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ht(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function wf(e,t,n){switch(t.tag){case 3:Vs(t),sn();break;case 5:hs(t);break;case 1:he(t.type)&&Yr(t);break;case 4:xi(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;F(qr,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(F($,$.current&1),t.flags|=128,null):n&t.child.childLanes?$s(e,t,n):(F($,$.current&1),e=et(e,t,n),e!==null?e.sibling:null);F($,$.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Ws(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),F($,$.current),r)break;return null;case 22:case 23:return t.lanes=0,Bs(e,t,n)}return et(e,t,n)}var Hs,Ia,Qs,Ks;Hs=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ia=function(){};Qs=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,_t($e.current);var a=null;switch(n){case"input":l=la(e,l),r=la(e,r),a=[];break;case"select":l=H({},l,{value:void 0}),r=H({},r,{value:void 0}),a=[];break;case"textarea":l=oa(e,l),r=oa(e,r),a=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Qr)}sa(n,r);var o;n=null;for(d in l)if(!r.hasOwnProperty(d)&&l.hasOwnProperty(d)&&l[d]!=null)if(d==="style"){var u=l[d];for(o in u)u.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Bn.hasOwnProperty(d)?a||(a=[]):(a=a||[]).push(d,null));for(d in r){var s=r[d];if(u=l!=null?l[d]:void 0,r.hasOwnProperty(d)&&s!==u&&(s!=null||u!=null))if(d==="style")if(u){for(o in u)!u.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in s)s.hasOwnProperty(o)&&u[o]!==s[o]&&(n||(n={}),n[o]=s[o])}else n||(a||(a=[]),a.push(d,n)),n=s;else d==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,u=u?u.__html:void 0,s!=null&&u!==s&&(a=a||[]).push(d,s)):d==="children"?typeof s!="string"&&typeof s!="number"||(a=a||[]).push(d,""+s):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Bn.hasOwnProperty(d)?(s!=null&&d==="onScroll"&&j("scroll",e),a||u===s||(a=[])):(a=a||[]).push(d,s))}n&&(a=a||[]).push("style",n);var d=a;(t.updateQueue=d)&&(t.flags|=4)}};Ks=function(e,t,n,r){n!==r&&(t.flags|=4)};function Cn(e,t){if(!B)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ie(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ef(e,t,n){var r=t.pendingProps;switch(mi(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ie(t),null;case 1:return he(t.type)&&Kr(),ie(t),null;case 3:return r=t.stateNode,dn(),b(ge),b(ue),Si(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Er(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Re!==null&&(Wa(Re),Re=null))),Ia(e,t),ie(t),null;case 5:ki(t);var l=_t(Zn.current);if(n=t.type,e!==null&&t.stateNode!=null)Qs(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(E(166));return ie(t),null}if(e=_t($e.current),Er(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[Ue]=t,r[Xn]=a,e=(t.mode&1)!==0,n){case"dialog":j("cancel",r),j("close",r);break;case"iframe":case"object":case"embed":j("load",r);break;case"video":case"audio":for(l=0;l<Tn.length;l++)j(Tn[l],r);break;case"source":j("error",r);break;case"img":case"image":case"link":j("error",r),j("load",r);break;case"details":j("toggle",r);break;case"input":Yi(r,a),j("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},j("invalid",r);break;case"textarea":Xi(r,a),j("invalid",r)}sa(n,a),l=null;for(var o in a)if(a.hasOwnProperty(o)){var u=a[o];o==="children"?typeof u=="string"?r.textContent!==u&&(a.suppressHydrationWarning!==!0&&wr(r.textContent,u,e),l=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(a.suppressHydrationWarning!==!0&&wr(r.textContent,u,e),l=["children",""+u]):Bn.hasOwnProperty(o)&&u!=null&&o==="onScroll"&&j("scroll",r)}switch(n){case"input":dr(r),Gi(r,a,!0);break;case"textarea":dr(r),qi(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=Qr)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=xu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Ue]=t,e[Xn]=r,Hs(e,t,!1,!1),t.stateNode=e;e:{switch(o=ca(n,r),n){case"dialog":j("cancel",e),j("close",e),l=r;break;case"iframe":case"object":case"embed":j("load",e),l=r;break;case"video":case"audio":for(l=0;l<Tn.length;l++)j(Tn[l],e);l=r;break;case"source":j("error",e),l=r;break;case"img":case"image":case"link":j("error",e),j("load",e),l=r;break;case"details":j("toggle",e),l=r;break;case"input":Yi(e,r),l=la(e,r),j("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=H({},r,{value:void 0}),j("invalid",e);break;case"textarea":Xi(e,r),l=oa(e,r),j("invalid",e);break;default:l=r}sa(n,l),u=l;for(a in u)if(u.hasOwnProperty(a)){var s=u[a];a==="style"?Nu(e,s):a==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&ku(e,s)):a==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Un(e,s):typeof s=="number"&&Un(e,""+s):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Bn.hasOwnProperty(a)?s!=null&&a==="onScroll"&&j("scroll",e):s!=null&&Ja(e,a,s,o))}switch(n){case"input":dr(e),Gi(e,r,!1);break;case"textarea":dr(e),qi(e);break;case"option":r.value!=null&&e.setAttribute("value",""+vt(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?en(e,!!r.multiple,a,!1):r.defaultValue!=null&&en(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Qr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ie(t),null;case 6:if(e&&t.stateNode!=null)Ks(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(E(166));if(n=_t(Zn.current),_t($e.current),Er(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ue]=t,(a=r.nodeValue!==n)&&(e=xe,e!==null))switch(e.tag){case 3:wr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&wr(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ue]=t,t.stateNode=r}return ie(t),null;case 13:if(b($),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(B&&Ee!==null&&t.mode&1&&!(t.flags&128))ds(),sn(),t.flags|=98560,a=!1;else if(a=Er(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(E(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(E(317));a[Ue]=t}else sn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ie(t),a=!1}else Re!==null&&(Wa(Re),Re=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||$.current&1?Z===0&&(Z=3):Ai())),t.updateQueue!==null&&(t.flags|=4),ie(t),null);case 4:return dn(),Ia(e,t),e===null&&Yn(t.stateNode.containerInfo),ie(t),null;case 10:return yi(t.type._context),ie(t),null;case 17:return he(t.type)&&Kr(),ie(t),null;case 19:if(b($),a=t.memoizedState,a===null)return ie(t),null;if(r=(t.flags&128)!==0,o=a.rendering,o===null)if(r)Cn(a,!1);else{if(Z!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=el(e),o!==null){for(t.flags|=128,Cn(a,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return F($,$.current&1|2),t.child}e=e.sibling}a.tail!==null&&K()>pn&&(t.flags|=128,r=!0,Cn(a,!1),t.lanes=4194304)}else{if(!r)if(e=el(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Cn(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!B)return ie(t),null}else 2*K()-a.renderingStartTime>pn&&n!==1073741824&&(t.flags|=128,r=!0,Cn(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(n=a.last,n!==null?n.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=K(),t.sibling=null,n=$.current,F($,r?n&1|2:n&1),t):(ie(t),null);case 22:case 23:return Ri(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?we&1073741824&&(ie(t),t.subtreeFlags&6&&(t.flags|=8192)):ie(t),null;case 24:return null;case 25:return null}throw Error(E(156,t.tag))}function xf(e,t){switch(mi(t),t.tag){case 1:return he(t.type)&&Kr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return dn(),b(ge),b(ue),Si(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ki(t),null;case 13:if(b($),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(E(340));sn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return b($),null;case 4:return dn(),null;case 10:return yi(t.type._context),null;case 22:case 23:return Ri(),null;case 24:return null;default:return null}}var Sr=!1,oe=!1,kf=typeof WeakSet=="function"?WeakSet:Set,N=null;function qt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Q(e,t,r)}else n.current=null}function Fa(e,t,n){try{n()}catch(r){Q(e,t,r)}}var Uo=!1;function Sf(e,t){if(Ea=$r,e=Zu(),fi(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var o=0,u=-1,s=-1,d=0,h=0,v=e,p=null;t:for(;;){for(var y;v!==n||l!==0&&v.nodeType!==3||(u=o+l),v!==a||r!==0&&v.nodeType!==3||(s=o+r),v.nodeType===3&&(o+=v.nodeValue.length),(y=v.firstChild)!==null;)p=v,v=y;for(;;){if(v===e)break t;if(p===n&&++d===l&&(u=o),p===a&&++h===r&&(s=o),(y=v.nextSibling)!==null)break;v=p,p=v.parentNode}v=y}n=u===-1||s===-1?null:{start:u,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(xa={focusedElem:e,selectionRange:n},$r=!1,N=t;N!==null;)if(t=N,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,N=e;else for(;N!==null;){t=N;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var x=g.memoizedProps,I=g.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?x:Oe(t.type,x),I);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(w){Q(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,N=e;break}N=t.return}return g=Uo,Uo=!1,g}function Fn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var a=l.destroy;l.destroy=void 0,a!==void 0&&Fa(t,n,a)}l=l.next}while(l!==r)}}function vl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ja(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ys(e){var t=e.alternate;t!==null&&(e.alternate=null,Ys(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ue],delete t[Xn],delete t[Na],delete t[lf],delete t[af])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Gs(e){return e.tag===5||e.tag===3||e.tag===4}function Vo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Gs(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ba(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Qr));else if(r!==4&&(e=e.child,e!==null))for(ba(e,t,n),e=e.sibling;e!==null;)ba(e,t,n),e=e.sibling}function Ba(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ba(e,t,n),e=e.sibling;e!==null;)Ba(e,t,n),e=e.sibling}var ne=null,De=!1;function nt(e,t,n){for(n=n.child;n!==null;)Xs(e,t,n),n=n.sibling}function Xs(e,t,n){if(Ve&&typeof Ve.onCommitFiberUnmount=="function")try{Ve.onCommitFiberUnmount(sl,n)}catch{}switch(n.tag){case 5:oe||qt(n,t);case 6:var r=ne,l=De;ne=null,nt(e,t,n),ne=r,De=l,ne!==null&&(De?(e=ne,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ne.removeChild(n.stateNode));break;case 18:ne!==null&&(De?(e=ne,n=n.stateNode,e.nodeType===8?Vl(e.parentNode,n):e.nodeType===1&&Vl(e,n),Hn(e)):Vl(ne,n.stateNode));break;case 4:r=ne,l=De,ne=n.stateNode.containerInfo,De=!0,nt(e,t,n),ne=r,De=l;break;case 0:case 11:case 14:case 15:if(!oe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var a=l,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&Fa(n,t,o),l=l.next}while(l!==r)}nt(e,t,n);break;case 1:if(!oe&&(qt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){Q(n,t,u)}nt(e,t,n);break;case 21:nt(e,t,n);break;case 22:n.mode&1?(oe=(r=oe)||n.memoizedState!==null,nt(e,t,n),oe=r):nt(e,t,n);break;default:nt(e,t,n)}}function $o(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new kf),t.forEach(function(r){var l=Of.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Me(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var a=e,o=t,u=o;e:for(;u!==null;){switch(u.tag){case 5:ne=u.stateNode,De=!1;break e;case 3:ne=u.stateNode.containerInfo,De=!0;break e;case 4:ne=u.stateNode.containerInfo,De=!0;break e}u=u.return}if(ne===null)throw Error(E(160));Xs(a,o,l),ne=null,De=!1;var s=l.alternate;s!==null&&(s.return=null),l.return=null}catch(d){Q(l,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)qs(t,e),t=t.sibling}function qs(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Me(t,e),be(e),r&4){try{Fn(3,e,e.return),vl(3,e)}catch(x){Q(e,e.return,x)}try{Fn(5,e,e.return)}catch(x){Q(e,e.return,x)}}break;case 1:Me(t,e),be(e),r&512&&n!==null&&qt(n,n.return);break;case 5:if(Me(t,e),be(e),r&512&&n!==null&&qt(n,n.return),e.flags&32){var l=e.stateNode;try{Un(l,"")}catch(x){Q(e,e.return,x)}}if(r&4&&(l=e.stateNode,l!=null)){var a=e.memoizedProps,o=n!==null?n.memoizedProps:a,u=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{u==="input"&&a.type==="radio"&&a.name!=null&&wu(l,a),ca(u,o);var d=ca(u,a);for(o=0;o<s.length;o+=2){var h=s[o],v=s[o+1];h==="style"?Nu(l,v):h==="dangerouslySetInnerHTML"?ku(l,v):h==="children"?Un(l,v):Ja(l,h,v,d)}switch(u){case"input":aa(l,a);break;case"textarea":Eu(l,a);break;case"select":var p=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!a.multiple;var y=a.value;y!=null?en(l,!!a.multiple,y,!1):p!==!!a.multiple&&(a.defaultValue!=null?en(l,!!a.multiple,a.defaultValue,!0):en(l,!!a.multiple,a.multiple?[]:"",!1))}l[Xn]=a}catch(x){Q(e,e.return,x)}}break;case 6:if(Me(t,e),be(e),r&4){if(e.stateNode===null)throw Error(E(162));l=e.stateNode,a=e.memoizedProps;try{l.nodeValue=a}catch(x){Q(e,e.return,x)}}break;case 3:if(Me(t,e),be(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Hn(t.containerInfo)}catch(x){Q(e,e.return,x)}break;case 4:Me(t,e),be(e);break;case 13:Me(t,e),be(e),l=e.child,l.flags&8192&&(a=l.memoizedState!==null,l.stateNode.isHidden=a,!a||l.alternate!==null&&l.alternate.memoizedState!==null||(Oi=K())),r&4&&$o(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(oe=(d=oe)||h,Me(t,e),oe=d):Me(t,e),be(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!h&&e.mode&1)for(N=e,h=e.child;h!==null;){for(v=N=h;N!==null;){switch(p=N,y=p.child,p.tag){case 0:case 11:case 14:case 15:Fn(4,p,p.return);break;case 1:qt(p,p.return);var g=p.stateNode;if(typeof g.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(x){Q(r,n,x)}}break;case 5:qt(p,p.return);break;case 22:if(p.memoizedState!==null){Ho(v);continue}}y!==null?(y.return=p,N=y):Ho(v)}h=h.sibling}e:for(h=null,v=e;;){if(v.tag===5){if(h===null){h=v;try{l=v.stateNode,d?(a=l.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(u=v.stateNode,s=v.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,u.style.display=Su("display",o))}catch(x){Q(e,e.return,x)}}}else if(v.tag===6){if(h===null)try{v.stateNode.nodeValue=d?"":v.memoizedProps}catch(x){Q(e,e.return,x)}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===e)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===e)break e;for(;v.sibling===null;){if(v.return===null||v.return===e)break e;h===v&&(h=null),v=v.return}h===v&&(h=null),v.sibling.return=v.return,v=v.sibling}}break;case 19:Me(t,e),be(e),r&4&&$o(e);break;case 21:break;default:Me(t,e),be(e)}}function be(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Gs(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Un(l,""),r.flags&=-33);var a=Vo(e);Ba(e,a,l);break;case 3:case 4:var o=r.stateNode.containerInfo,u=Vo(e);ba(e,u,o);break;default:throw Error(E(161))}}catch(s){Q(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Nf(e,t,n){N=e,Zs(e)}function Zs(e,t,n){for(var r=(e.mode&1)!==0;N!==null;){var l=N,a=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||Sr;if(!o){var u=l.alternate,s=u!==null&&u.memoizedState!==null||oe;u=Sr;var d=oe;if(Sr=o,(oe=s)&&!d)for(N=l;N!==null;)o=N,s=o.child,o.tag===22&&o.memoizedState!==null?Qo(l):s!==null?(s.return=o,N=s):Qo(l);for(;a!==null;)N=a,Zs(a),a=a.sibling;N=l,Sr=u,oe=d}Wo(e)}else l.subtreeFlags&8772&&a!==null?(a.return=l,N=a):Wo(e)}}function Wo(e){for(;N!==null;){var t=N;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:oe||vl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!oe)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Oe(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&zo(t,a,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}zo(t,o,n)}break;case 5:var u=t.stateNode;if(n===null&&t.flags&4){n=u;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var h=d.memoizedState;if(h!==null){var v=h.dehydrated;v!==null&&Hn(v)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}oe||t.flags&512&&ja(t)}catch(p){Q(t,t.return,p)}}if(t===e){N=null;break}if(n=t.sibling,n!==null){n.return=t.return,N=n;break}N=t.return}}function Ho(e){for(;N!==null;){var t=N;if(t===e){N=null;break}var n=t.sibling;if(n!==null){n.return=t.return,N=n;break}N=t.return}}function Qo(e){for(;N!==null;){var t=N;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{vl(4,t)}catch(s){Q(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(s){Q(t,l,s)}}var a=t.return;try{ja(t)}catch(s){Q(t,a,s)}break;case 5:var o=t.return;try{ja(t)}catch(s){Q(t,o,s)}}}catch(s){Q(t,t.return,s)}if(t===e){N=null;break}var u=t.sibling;if(u!==null){u.return=t.return,N=u;break}N=t.return}}var Cf=Math.ceil,rl=tt.ReactCurrentDispatcher,Ti=tt.ReactCurrentOwner,ze=tt.ReactCurrentBatchConfig,D=0,te=null,G=null,re=0,we=0,Zt=Et(0),Z=0,nr=null,Dt=0,yl=0,Mi=0,jn=null,pe=null,Oi=0,pn=1/0,Qe=null,ll=!1,Ua=null,mt=null,Nr=!1,ut=null,al=0,bn=0,Va=null,Ar=-1,Ir=0;function ce(){return D&6?K():Ar!==-1?Ar:Ar=K()}function gt(e){return e.mode&1?D&2&&re!==0?re&-re:uf.transition!==null?(Ir===0&&(Ir=Iu()),Ir):(e=A,e!==0||(e=window.event,e=e===void 0?16:$u(e.type)),e):1}function Ie(e,t,n,r){if(50<bn)throw bn=0,Va=null,Error(E(185));lr(e,n,r),(!(D&2)||e!==te)&&(e===te&&(!(D&2)&&(yl|=n),Z===4&&it(e,re)),ve(e,r),n===1&&D===0&&!(t.mode&1)&&(pn=K()+500,ml&&xt()))}function ve(e,t){var n=e.callbackNode;od(e,t);var r=Vr(e,e===te?re:0);if(r===0)n!==null&&eo(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&eo(n),t===1)e.tag===0?of(Ko.bind(null,e)):us(Ko.bind(null,e)),nf(function(){!(D&6)&&xt()}),n=null;else{switch(Fu(r)){case 1:n=li;break;case 4:n=Ru;break;case 16:n=Ur;break;case 536870912:n=Au;break;default:n=Ur}n=ic(n,Js.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Js(e,t){if(Ar=-1,Ir=0,D&6)throw Error(E(327));var n=e.callbackNode;if(an()&&e.callbackNode!==n)return null;var r=Vr(e,e===te?re:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=il(e,r);else{t=r;var l=D;D|=2;var a=tc();(te!==e||re!==t)&&(Qe=null,pn=K()+500,zt(e,t));do try{zf();break}catch(u){ec(e,u)}while(!0);vi(),rl.current=a,D=l,G!==null?t=0:(te=null,re=0,t=Z)}if(t!==0){if(t===2&&(l=ga(e),l!==0&&(r=l,t=$a(e,l))),t===1)throw n=nr,zt(e,0),it(e,r),ve(e,K()),n;if(t===6)it(e,r);else{if(l=e.current.alternate,!(r&30)&&!Pf(l)&&(t=il(e,r),t===2&&(a=ga(e),a!==0&&(r=a,t=$a(e,a))),t===1))throw n=nr,zt(e,0),it(e,r),ve(e,K()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(E(345));case 2:Nt(e,pe,Qe);break;case 3:if(it(e,r),(r&130023424)===r&&(t=Oi+500-K(),10<t)){if(Vr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ce(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Sa(Nt.bind(null,e,pe,Qe),t);break}Nt(e,pe,Qe);break;case 4:if(it(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var o=31-Ae(r);a=1<<o,o=t[o],o>l&&(l=o),r&=~a}if(r=l,r=K()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Cf(r/1960))-r,10<r){e.timeoutHandle=Sa(Nt.bind(null,e,pe,Qe),r);break}Nt(e,pe,Qe);break;case 5:Nt(e,pe,Qe);break;default:throw Error(E(329))}}}return ve(e,K()),e.callbackNode===n?Js.bind(null,e):null}function $a(e,t){var n=jn;return e.current.memoizedState.isDehydrated&&(zt(e,t).flags|=256),e=il(e,t),e!==2&&(t=pe,pe=n,t!==null&&Wa(t)),e}function Wa(e){pe===null?pe=e:pe.push.apply(pe,e)}function Pf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],a=l.getSnapshot;l=l.value;try{if(!Fe(a(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function it(e,t){for(t&=~Mi,t&=~yl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ae(t),r=1<<n;e[n]=-1,t&=~r}}function Ko(e){if(D&6)throw Error(E(327));an();var t=Vr(e,0);if(!(t&1))return ve(e,K()),null;var n=il(e,t);if(e.tag!==0&&n===2){var r=ga(e);r!==0&&(t=r,n=$a(e,r))}if(n===1)throw n=nr,zt(e,0),it(e,t),ve(e,K()),n;if(n===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Nt(e,pe,Qe),ve(e,K()),null}function Di(e,t){var n=D;D|=1;try{return e(t)}finally{D=n,D===0&&(pn=K()+500,ml&&xt())}}function Rt(e){ut!==null&&ut.tag===0&&!(D&6)&&an();var t=D;D|=1;var n=ze.transition,r=A;try{if(ze.transition=null,A=1,e)return e()}finally{A=r,ze.transition=n,D=t,!(D&6)&&xt()}}function Ri(){we=Zt.current,b(Zt)}function zt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,tf(n)),G!==null)for(n=G.return;n!==null;){var r=n;switch(mi(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Kr();break;case 3:dn(),b(ge),b(ue),Si();break;case 5:ki(r);break;case 4:dn();break;case 13:b($);break;case 19:b($);break;case 10:yi(r.type._context);break;case 22:case 23:Ri()}n=n.return}if(te=e,G=e=ht(e.current,null),re=we=t,Z=0,nr=null,Mi=yl=Dt=0,pe=jn=null,Pt!==null){for(t=0;t<Pt.length;t++)if(n=Pt[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=l,r.next=o}n.pending=r}Pt=null}return e}function ec(e,t){do{var n=G;try{if(vi(),Or.current=nl,tl){for(var r=W.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}tl=!1}if(Ot=0,ee=q=W=null,In=!1,Jn=0,Ti.current=null,n===null||n.return===null){Z=1,nr=t,G=null;break}e:{var a=e,o=n.return,u=n,s=t;if(t=re,u.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var d=s,h=u,v=h.tag;if(!(h.mode&1)&&(v===0||v===11||v===15)){var p=h.alternate;p?(h.updateQueue=p.updateQueue,h.memoizedState=p.memoizedState,h.lanes=p.lanes):(h.updateQueue=null,h.memoizedState=null)}var y=Ro(o);if(y!==null){y.flags&=-257,Ao(y,o,u,a,t),y.mode&1&&Do(a,d,t),t=y,s=d;var g=t.updateQueue;if(g===null){var x=new Set;x.add(s),t.updateQueue=x}else g.add(s);break e}else{if(!(t&1)){Do(a,d,t),Ai();break e}s=Error(E(426))}}else if(B&&u.mode&1){var I=Ro(o);if(I!==null){!(I.flags&65536)&&(I.flags|=256),Ao(I,o,u,a,t),gi(fn(s,u));break e}}a=s=fn(s,u),Z!==4&&(Z=2),jn===null?jn=[a]:jn.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var f=Fs(a,s,t);_o(a,f);break e;case 1:u=s;var c=a.type,m=a.stateNode;if(!(a.flags&128)&&(typeof c.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(mt===null||!mt.has(m)))){a.flags|=65536,t&=-t,a.lanes|=t;var w=js(a,u,t);_o(a,w);break e}}a=a.return}while(a!==null)}rc(n)}catch(S){t=S,G===n&&n!==null&&(G=n=n.return);continue}break}while(!0)}function tc(){var e=rl.current;return rl.current=nl,e===null?nl:e}function Ai(){(Z===0||Z===3||Z===2)&&(Z=4),te===null||!(Dt&268435455)&&!(yl&268435455)||it(te,re)}function il(e,t){var n=D;D|=2;var r=tc();(te!==e||re!==t)&&(Qe=null,zt(e,t));do try{_f();break}catch(l){ec(e,l)}while(!0);if(vi(),D=n,rl.current=r,G!==null)throw Error(E(261));return te=null,re=0,Z}function _f(){for(;G!==null;)nc(G)}function zf(){for(;G!==null&&!Zc();)nc(G)}function nc(e){var t=ac(e.alternate,e,we);e.memoizedProps=e.pendingProps,t===null?rc(e):G=t,Ti.current=null}function rc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=xf(n,t),n!==null){n.flags&=32767,G=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Z=6,G=null;return}}else if(n=Ef(n,t,we),n!==null){G=n;return}if(t=t.sibling,t!==null){G=t;return}G=t=e}while(t!==null);Z===0&&(Z=5)}function Nt(e,t,n){var r=A,l=ze.transition;try{ze.transition=null,A=1,Lf(e,t,n,r)}finally{ze.transition=l,A=r}return null}function Lf(e,t,n,r){do an();while(ut!==null);if(D&6)throw Error(E(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(ud(e,a),e===te&&(G=te=null,re=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Nr||(Nr=!0,ic(Ur,function(){return an(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=ze.transition,ze.transition=null;var o=A;A=1;var u=D;D|=4,Ti.current=null,Sf(e,n),qs(n,e),Yd(xa),$r=!!Ea,xa=Ea=null,e.current=n,Nf(n),Jc(),D=u,A=o,ze.transition=a}else e.current=n;if(Nr&&(Nr=!1,ut=e,al=l),a=e.pendingLanes,a===0&&(mt=null),nd(n.stateNode),ve(e,K()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(ll)throw ll=!1,e=Ua,Ua=null,e;return al&1&&e.tag!==0&&an(),a=e.pendingLanes,a&1?e===Va?bn++:(bn=0,Va=e):bn=0,xt(),null}function an(){if(ut!==null){var e=Fu(al),t=ze.transition,n=A;try{if(ze.transition=null,A=16>e?16:e,ut===null)var r=!1;else{if(e=ut,ut=null,al=0,D&6)throw Error(E(331));var l=D;for(D|=4,N=e.current;N!==null;){var a=N,o=a.child;if(N.flags&16){var u=a.deletions;if(u!==null){for(var s=0;s<u.length;s++){var d=u[s];for(N=d;N!==null;){var h=N;switch(h.tag){case 0:case 11:case 15:Fn(8,h,a)}var v=h.child;if(v!==null)v.return=h,N=v;else for(;N!==null;){h=N;var p=h.sibling,y=h.return;if(Ys(h),h===d){N=null;break}if(p!==null){p.return=y,N=p;break}N=y}}}var g=a.alternate;if(g!==null){var x=g.child;if(x!==null){g.child=null;do{var I=x.sibling;x.sibling=null,x=I}while(x!==null)}}N=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,N=o;else e:for(;N!==null;){if(a=N,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Fn(9,a,a.return)}var f=a.sibling;if(f!==null){f.return=a.return,N=f;break e}N=a.return}}var c=e.current;for(N=c;N!==null;){o=N;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,N=m;else e:for(o=c;N!==null;){if(u=N,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:vl(9,u)}}catch(S){Q(u,u.return,S)}if(u===o){N=null;break e}var w=u.sibling;if(w!==null){w.return=u.return,N=w;break e}N=u.return}}if(D=l,xt(),Ve&&typeof Ve.onPostCommitFiberRoot=="function")try{Ve.onPostCommitFiberRoot(sl,e)}catch{}r=!0}return r}finally{A=n,ze.transition=t}}return!1}function Yo(e,t,n){t=fn(n,t),t=Fs(e,t,1),e=pt(e,t,1),t=ce(),e!==null&&(lr(e,1,t),ve(e,t))}function Q(e,t,n){if(e.tag===3)Yo(e,e,n);else for(;t!==null;){if(t.tag===3){Yo(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(mt===null||!mt.has(r))){e=fn(n,e),e=js(t,e,1),t=pt(t,e,1),e=ce(),t!==null&&(lr(t,1,e),ve(t,e));break}}t=t.return}}function Tf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ce(),e.pingedLanes|=e.suspendedLanes&n,te===e&&(re&n)===n&&(Z===4||Z===3&&(re&130023424)===re&&500>K()-Oi?zt(e,0):Mi|=n),ve(e,t)}function lc(e,t){t===0&&(e.mode&1?(t=mr,mr<<=1,!(mr&130023424)&&(mr=4194304)):t=1);var n=ce();e=Je(e,t),e!==null&&(lr(e,t,n),ve(e,n))}function Mf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),lc(e,n)}function Of(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(t),lc(e,n)}var ac;ac=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ge.current)me=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return me=!1,wf(e,t,n);me=!!(e.flags&131072)}else me=!1,B&&t.flags&1048576&&ss(t,Xr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Rr(e,t),e=t.pendingProps;var l=un(t,ue.current);ln(t,n),l=Ci(null,t,r,e,l,n);var a=Pi();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,he(r)?(a=!0,Yr(t)):a=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Ei(t),l.updater=hl,t.stateNode=l,l._reactInternals=t,Ta(t,r,e,n),t=Da(null,t,r,!0,a,n)):(t.tag=0,B&&a&&pi(t),se(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Rr(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Rf(r),e=Oe(r,e),l){case 0:t=Oa(null,t,r,e,n);break e;case 1:t=jo(null,t,r,e,n);break e;case 11:t=Io(null,t,r,e,n);break e;case 14:t=Fo(null,t,r,Oe(r.type,e),n);break e}throw Error(E(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Oe(r,l),Oa(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Oe(r,l),jo(e,t,r,l,n);case 3:e:{if(Vs(t),e===null)throw Error(E(387));r=t.pendingProps,a=t.memoizedState,l=a.element,gs(e,t),Jr(t,r,null,n);var o=t.memoizedState;if(r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){l=fn(Error(E(423)),t),t=bo(e,t,r,n,l);break e}else if(r!==l){l=fn(Error(E(424)),t),t=bo(e,t,r,n,l);break e}else for(Ee=ft(t.stateNode.containerInfo.firstChild),xe=t,B=!0,Re=null,n=ps(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(sn(),r===l){t=et(e,t,n);break e}se(e,t,r,n)}t=t.child}return t;case 5:return hs(t),e===null&&_a(t),r=t.type,l=t.pendingProps,a=e!==null?e.memoizedProps:null,o=l.children,ka(r,l)?o=null:a!==null&&ka(r,a)&&(t.flags|=32),Us(e,t),se(e,t,o,n),t.child;case 6:return e===null&&_a(t),null;case 13:return $s(e,t,n);case 4:return xi(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=cn(t,null,r,n):se(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Oe(r,l),Io(e,t,r,l,n);case 7:return se(e,t,t.pendingProps,n),t.child;case 8:return se(e,t,t.pendingProps.children,n),t.child;case 12:return se(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,a=t.memoizedProps,o=l.value,F(qr,r._currentValue),r._currentValue=o,a!==null)if(Fe(a.value,o)){if(a.children===l.children&&!ge.current){t=et(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var u=a.dependencies;if(u!==null){o=a.child;for(var s=u.firstContext;s!==null;){if(s.context===r){if(a.tag===1){s=Xe(-1,n&-n),s.tag=2;var d=a.updateQueue;if(d!==null){d=d.shared;var h=d.pending;h===null?s.next=s:(s.next=h.next,h.next=s),d.pending=s}}a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),za(a.return,n,t),u.lanes|=n;break}s=s.next}}else if(a.tag===10)o=a.type===t.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(E(341));o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),za(o,n,t),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}se(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,ln(t,n),l=Le(l),r=r(l),t.flags|=1,se(e,t,r,n),t.child;case 14:return r=t.type,l=Oe(r,t.pendingProps),l=Oe(r.type,l),Fo(e,t,r,l,n);case 15:return bs(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Oe(r,l),Rr(e,t),t.tag=1,he(r)?(e=!0,Yr(t)):e=!1,ln(t,n),Is(t,r,l),Ta(t,r,l,n),Da(null,t,r,!0,e,n);case 19:return Ws(e,t,n);case 22:return Bs(e,t,n)}throw Error(E(156,t.tag))};function ic(e,t){return Du(e,t)}function Df(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _e(e,t,n,r){return new Df(e,t,n,r)}function Ii(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Rf(e){if(typeof e=="function")return Ii(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ti)return 11;if(e===ni)return 14}return 2}function ht(e,t){var n=e.alternate;return n===null?(n=_e(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Fr(e,t,n,r,l,a){var o=2;if(r=e,typeof e=="function")Ii(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Vt:return Lt(n.children,l,a,t);case ei:o=8,l|=8;break;case ea:return e=_e(12,n,t,l|2),e.elementType=ea,e.lanes=a,e;case ta:return e=_e(13,n,t,l),e.elementType=ta,e.lanes=a,e;case na:return e=_e(19,n,t,l),e.elementType=na,e.lanes=a,e;case hu:return wl(n,l,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case mu:o=10;break e;case gu:o=9;break e;case ti:o=11;break e;case ni:o=14;break e;case rt:o=16,r=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return t=_e(o,n,t,l),t.elementType=e,t.type=r,t.lanes=a,t}function Lt(e,t,n,r){return e=_e(7,e,r,t),e.lanes=n,e}function wl(e,t,n,r){return e=_e(22,e,r,t),e.elementType=hu,e.lanes=n,e.stateNode={isHidden:!1},e}function Xl(e,t,n){return e=_e(6,e,null,t),e.lanes=n,e}function ql(e,t,n){return t=_e(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Af(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ml(0),this.expirationTimes=Ml(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ml(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Fi(e,t,n,r,l,a,o,u,s){return e=new Af(e,t,n,u,s),t===1?(t=1,a===!0&&(t|=8)):t=0,a=_e(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ei(a),e}function If(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ut,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function oc(e){if(!e)return yt;e=e._reactInternals;e:{if(It(e)!==e||e.tag!==1)throw Error(E(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(he(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(E(171))}if(e.tag===1){var n=e.type;if(he(n))return os(e,n,t)}return t}function uc(e,t,n,r,l,a,o,u,s){return e=Fi(n,r,!0,e,l,a,o,u,s),e.context=oc(null),n=e.current,r=ce(),l=gt(n),a=Xe(r,l),a.callback=t??null,pt(n,a,l),e.current.lanes=l,lr(e,l,r),ve(e,r),e}function El(e,t,n,r){var l=t.current,a=ce(),o=gt(l);return n=oc(n),t.context===null?t.context=n:t.pendingContext=n,t=Xe(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=pt(l,t,o),e!==null&&(Ie(e,l,o,a),Mr(e,l,o)),o}function ol(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Go(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ji(e,t){Go(e,t),(e=e.alternate)&&Go(e,t)}function Ff(){return null}var sc=typeof reportError=="function"?reportError:function(e){console.error(e)};function bi(e){this._internalRoot=e}xl.prototype.render=bi.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(E(409));El(e,t,null,null)};xl.prototype.unmount=bi.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Rt(function(){El(null,e,null,null)}),t[Ze]=null}};function xl(e){this._internalRoot=e}xl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Bu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<at.length&&t!==0&&t<at[n].priority;n++);at.splice(n,0,e),n===0&&Vu(e)}};function Bi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function kl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Xo(){}function jf(e,t,n,r,l){if(l){if(typeof r=="function"){var a=r;r=function(){var d=ol(o);a.call(d)}}var o=uc(t,r,e,0,null,!1,!1,"",Xo);return e._reactRootContainer=o,e[Ze]=o.current,Yn(e.nodeType===8?e.parentNode:e),Rt(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var u=r;r=function(){var d=ol(s);u.call(d)}}var s=Fi(e,0,!1,null,null,!1,!1,"",Xo);return e._reactRootContainer=s,e[Ze]=s.current,Yn(e.nodeType===8?e.parentNode:e),Rt(function(){El(t,s,n,r)}),s}function Sl(e,t,n,r,l){var a=n._reactRootContainer;if(a){var o=a;if(typeof l=="function"){var u=l;l=function(){var s=ol(o);u.call(s)}}El(t,o,e,l)}else o=jf(n,t,e,l,r);return ol(o)}ju=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ln(t.pendingLanes);n!==0&&(ai(t,n|1),ve(t,K()),!(D&6)&&(pn=K()+500,xt()))}break;case 13:Rt(function(){var r=Je(e,1);if(r!==null){var l=ce();Ie(r,e,1,l)}}),ji(e,1)}};ii=function(e){if(e.tag===13){var t=Je(e,134217728);if(t!==null){var n=ce();Ie(t,e,134217728,n)}ji(e,134217728)}};bu=function(e){if(e.tag===13){var t=gt(e),n=Je(e,t);if(n!==null){var r=ce();Ie(n,e,t,r)}ji(e,t)}};Bu=function(){return A};Uu=function(e,t){var n=A;try{return A=e,t()}finally{A=n}};fa=function(e,t,n){switch(t){case"input":if(aa(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=pl(r);if(!l)throw Error(E(90));yu(r),aa(r,l)}}}break;case"textarea":Eu(e,n);break;case"select":t=n.value,t!=null&&en(e,!!n.multiple,t,!1)}};_u=Di;zu=Rt;var bf={usingClientEntryPoint:!1,Events:[ir,Qt,pl,Cu,Pu,Di]},Pn={findFiberByHostInstance:Ct,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Bf={bundleType:Pn.bundleType,version:Pn.version,rendererPackageName:Pn.rendererPackageName,rendererConfig:Pn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:tt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Mu(e),e===null?null:e.stateNode},findFiberByHostInstance:Pn.findFiberByHostInstance||Ff,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Cr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cr.isDisabled&&Cr.supportsFiber)try{sl=Cr.inject(Bf),Ve=Cr}catch{}}Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bf;Se.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bi(t))throw Error(E(200));return If(e,t,null,n)};Se.createRoot=function(e,t){if(!Bi(e))throw Error(E(299));var n=!1,r="",l=sc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Fi(e,1,!1,null,null,n,!1,r,l),e[Ze]=t.current,Yn(e.nodeType===8?e.parentNode:e),new bi(t)};Se.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=Mu(t),e=e===null?null:e.stateNode,e};Se.flushSync=function(e){return Rt(e)};Se.hydrate=function(e,t,n){if(!kl(t))throw Error(E(200));return Sl(null,e,t,!0,n)};Se.hydrateRoot=function(e,t,n){if(!Bi(e))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,l=!1,a="",o=sc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=uc(t,null,e,1,n??null,l,!1,a,o),e[Ze]=t.current,Yn(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new xl(t)};Se.render=function(e,t,n){if(!kl(t))throw Error(E(200));return Sl(null,e,t,!1,n)};Se.unmountComponentAtNode=function(e){if(!kl(e))throw Error(E(40));return e._reactRootContainer?(Rt(function(){Sl(null,null,e,!1,function(){e._reactRootContainer=null,e[Ze]=null})}),!0):!1};Se.unstable_batchedUpdates=Di;Se.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!kl(n))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return Sl(e,t,n,!1,r)};Se.version="18.3.1-next-f1338f8080-20240426";function cc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(cc)}catch(e){console.error(e)}}cc(),cu.exports=Se;var Uf=cu.exports,qo=Uf;Zl.createRoot=qo.createRoot,Zl.hydrateRoot=qo.hydrateRoot;const Vf={daywise:{label:"Today",profile:[6,18,14,20,17,24,22,21],artwork:[2,4,5,6,5,8,7,9],profileTotal:142,artworkTotal:46},weekwise:{label:"This Week",profile:[28,34,39,31,42,48,44],artwork:[12,16,14,19,23,27,24],profileTotal:266,artworkTotal:135},monthwise:{label:"This Month",profile:[92,110,104,128,134,140,152,148],artwork:[38,44,48,54,61,66,72,78],profileTotal:1008,artworkTotal:461}},$f=["Dashboard","My Profile","Add Awards And Exhibition","My Artwork","Order Offer Enquiry","Refund Orders","Remark View","My Order Detail","Blog","Logout"],Wf=[{label:"Exhibitions",value:"07"},{label:"Collectors",value:"58"},{label:"Open Queries",value:"11"}],Jt=["Basic Information","Contact Details","Country","Address","Creative Role","Online Presence","Artist Bio","Achievements","Profile Image","Review Profile"],Hf=["India","United States","United Kingdom","Canada","Australia"],Qf=["Delhi","Meghalaya","Maharashtra","Rajasthan","Karnataka","Uttar Pradesh","Punjab","Other"],Kf=["Painter","Mixed Media Artist","Digital Artist","Sculptor","Photographer"],Yf=["Female","Male","Non-binary","Prefer not to say"],Zo={fullName:"Riya Rohilla",email:"riyarohilla112@gmail.com",mobile:"",gender:"",dateOfBirth:"",country:"India",state:"",city:"",postalCode:"",specialty:"Painter",yearsExperience:"",website:"",instagram:"",bio:"",achievements:"",profileImage:""},Ha="ziguratss_admin_panel_state",Jo={awards:[],solo:[],group:[]},Gf=[{id:1,artworkName:"Monsoon Reverie I",customerName:"Aarav Mehta",offerPrice:98e3,date:"2026-04-21",isNew:!0},{id:2,artworkName:"Silent Tides",customerName:"Naina Sharma",offerPrice:64e3,date:"2026-04-18",isNew:!1},{id:3,artworkName:"Earthline Studies",customerName:"Kabir Singh",offerPrice:121e3,date:"2026-04-22",isNew:!0},{id:4,artworkName:"Blue Archive",customerName:"Anika Das",offerPrice:57e3,date:"2026-04-15",isNew:!1}],Xf=[{id:1,orderId:"RF-1041",artworkName:"Cobalt Horizon",customerName:"Rhea Jain",reason:"Packaging damage during transit.",status:"Pending"},{id:2,orderId:"RF-1034",artworkName:"Autumn Script",customerName:"Vikram Khanna",reason:"Size mismatch with approved framing request.",status:"Approved"},{id:3,orderId:"RF-1019",artworkName:"Muted Bloom",customerName:"Sara Kapoor",reason:"Return request exceeded policy window.",status:"Rejected"}],qf=[{id:1,author:"Gallery Curator",title:"Presentation quality",message:"Strong visual storytelling. The profile now feels premium and much easier to browse.",rating:5},{id:2,author:"Collector Review",title:"Artwork detail clarity",message:"Collectors would benefit from one extra close-up image, but the composition is excellent.",rating:4},{id:3,author:"Studio Team",title:"Response time",message:"Enquiry follow-up has improved, though commission FAQs could still be clearer.",rating:4}],eu=[{id:1,orderId:"ZG-2401",artworkName:"Monsoon Reverie I",customerName:"Aarav Mehta",amount:98e3,date:"2026-04-20",status:"In Transit",address:"12 Residency Road, New Delhi",notes:"Collector requested a handwritten authenticity note.",items:["Original canvas","Certificate of authenticity","Premium crate packaging"]},{id:2,orderId:"ZG-2394",artworkName:"Silent Tides",customerName:"Naina Sharma",amount:64e3,date:"2026-04-14",status:"Processing",address:"77 Lake View, Bengaluru",notes:"Frame selection pending client confirmation.",items:["Framed artwork","Wall-hanging kit"]},{id:3,orderId:"ZG-2380",artworkName:"Earthline Studies",customerName:"Kabir Singh",amount:121e3,date:"2026-04-10",status:"Delivered",address:"21 Civil Lines, Jaipur",notes:"Delivery confirmed by collector on April 12.",items:["Original mixed media work","Insurance document","Gallery invoice"]}];function Zf(){if(typeof window>"u")return{};try{return JSON.parse(window.localStorage.getItem(Ha)||"{}")}catch{return{}}}function dc(e){return new Promise((t,n)=>{const r=new FileReader;r.onload=()=>t(r.result),r.onerror=()=>n(new Error("Unable to read file")),r.readAsDataURL(e)})}function fc(e,t,n,r){const l=Math.max(...e),a=Math.min(...e),o=l-a||1,u=(t-r*2)/Math.max(e.length-1,1);return e.map((s,d)=>{const h=r+d*u,v=n-r-(s-a)/o*(n-r*2);return`${d===0?"M":"L"} ${h} ${v}`}).join(" ")}function Jf(e,t,n,r){const l=fc(e,t,n,r),a=(t-r*2)/Math.max(e.length-1,1),o=r+a*(e.length-1);return`${l} L ${o} ${n-r} L ${r} ${n-r} Z`}function ep({values:e,accent:t}){const a=Math.max(...e),o=Math.min(...e),u=a-o||1,s=(520-24*2)/Math.max(e.length-1,1);return i.createElement("svg",{viewBox:"0 0 520 240",role:"img","aria-label":"Visitor chart",className:"chart-svg"},[0,1,2,3].map(d=>{const h=24+64*d;return i.createElement("line",{key:d,x1:24,y1:h,x2:496,y2:h,className:"chart-grid"})}),e.map((d,h)=>{const v=24+h*s,p=216-(d-o)/u*(240-24*2);return i.createElement("g",{key:`${d}-${h}`},i.createElement("line",{x1:v,y1:24,x2:v,y2:216,className:"chart-grid vertical"}),i.createElement("circle",{cx:v,cy:p,r:"4",fill:t,stroke:"#ffffff",strokeWidth:"2"}))}),i.createElement("path",{d:Jf(e,520,240,24),fill:t,fillOpacity:"0.16"}),i.createElement("path",{d:fc(e,520,240,24),fill:"none",stroke:t,strokeWidth:"4",strokeLinecap:"round"}))}function tp({value:e}){const n=2*Math.PI*58,r=n-e/100*n;return i.createElement("div",{className:"donut-wrap"},i.createElement("svg",{viewBox:"0 0 160 160",className:"donut-chart","aria-hidden":"true"},i.createElement("circle",{cx:"80",cy:"80",r:58,className:"donut-track"}),i.createElement("circle",{cx:"80",cy:"80",r:58,className:"donut-value",style:{strokeDasharray:n,strokeDashoffset:r}})),i.createElement("div",{className:"donut-copy"},i.createElement("strong",null,e,"%")))}function np({className:e=""}){return i.createElement("div",{className:`portrait-shell ${e}`.trim(),"aria-hidden":"true"},i.createElement("svg",{viewBox:"0 0 180 180",className:"portrait-svg"},i.createElement("defs",null,i.createElement("linearGradient",{id:"portraitBg",x1:"0%",y1:"0%",x2:"100%",y2:"100%"},i.createElement("stop",{offset:"0%",stopColor:"#fff4d7"}),i.createElement("stop",{offset:"100%",stopColor:"#ffe0cc"})),i.createElement("linearGradient",{id:"portraitHair",x1:"0%",y1:"0%",x2:"100%",y2:"100%"},i.createElement("stop",{offset:"0%",stopColor:"#23324a"}),i.createElement("stop",{offset:"100%",stopColor:"#4258a8"}))),i.createElement("rect",{x:"10",y:"10",width:"160",height:"160",rx:"36",fill:"url(#portraitBg)"}),i.createElement("circle",{cx:"90",cy:"72",r:"34",fill:"#f8caa9"}),i.createElement("path",{d:"M51 74c0-25 16-43 39-43 24 0 40 18 40 41 0 8-1 14-4 20-9-8-18-13-36-13-16 0-28 4-35 14-3-5-4-12-4-19Z",fill:"url(#portraitHair)"}),i.createElement("path",{d:"M56 141c8-23 24-35 46-35 23 0 39 12 47 35",fill:"none",stroke:"#ffffff",strokeWidth:"22",strokeLinecap:"round"}),i.createElement("path",{d:"M58 142c9-22 23-34 44-34s36 12 45 34",fill:"none",stroke:"#d9af37",strokeWidth:"18",strokeLinecap:"round"}),i.createElement("circle",{cx:"77",cy:"73",r:"3.8",fill:"#24324a"}),i.createElement("circle",{cx:"103",cy:"73",r:"3.8",fill:"#24324a"}),i.createElement("path",{d:"M80 91c5 6 15 6 20 0",fill:"none",stroke:"#b96b5a",strokeWidth:"3.5",strokeLinecap:"round"})),i.createElement("div",{className:"portrait-badge"},"Artist"))}function ul({image:e,name:t,className:n=""}){return e?i.createElement("div",{className:`portrait-shell ${n}`.trim()},i.createElement("img",{src:e,alt:`${t||"Artist"} profile`,className:"portrait-image"}),i.createElement("div",{className:"portrait-badge"},"Artist")):i.createElement(np,{className:n})}function rp({draft:e,error:t,isOpen:n,onClose:r,onFieldChange:l,onImageChange:a,onNext:o,onPrev:u,onSkip:s,onSubmit:d,stepIndex:h}){if(!n)return null;const v=h===Jt.length-1,p=(h+1)/Jt.length*100,y=[{label:"Full Name",value:e.fullName||"Not added yet"},{label:"Email",value:e.email||"Not added yet"},{label:"Mobile",value:e.mobile||"Not added yet"},{label:"Gender",value:e.gender||"Not added yet"},{label:"Date of Birth",value:e.dateOfBirth||"Not added yet"},{label:"Country",value:e.country||"Not added yet"},{label:"State",value:e.state||"Not added yet"},{label:"City",value:e.city||"Not added yet"},{label:"Postal Code",value:e.postalCode||"Not added yet"},{label:"Medium",value:e.specialty||"Not added yet"},{label:"Experience",value:e.yearsExperience||"Not added yet"},{label:"Website",value:e.website||"Not added yet"},{label:"Instagram",value:e.instagram||"Not added yet"},{label:"Achievements",value:e.achievements||"Not added yet"}];return i.createElement("div",{className:"profile-modal-overlay",onClick:g=>{g.target===g.currentTarget&&r()}},i.createElement("div",{className:"profile-modal"},i.createElement("div",{className:"profile-modal-header"},i.createElement("div",null,i.createElement("h3",null,Jt[h]),i.createElement("p",null,"Step ",h+1," of ",Jt.length)),i.createElement("button",{type:"button",className:"modal-close",onClick:r,"aria-label":"Close profile setup"},"Close")),i.createElement("div",{className:"profile-progress-track","aria-hidden":"true"},i.createElement("span",{className:"profile-progress-value",style:{width:`${p}%`}})),i.createElement("div",{className:"profile-modal-body"},h===0&&i.createElement("div",{className:"profile-form-grid"},i.createElement("label",{className:"form-field"},i.createElement("span",null,"Full Name"),i.createElement("input",{type:"text",value:e.fullName,onChange:g=>l("fullName",g.target.value),placeholder:"Enter your full name"})),i.createElement("label",{className:"form-field"},i.createElement("span",null,"Email Address"),i.createElement("input",{type:"email",value:e.email,onChange:g=>l("email",g.target.value),placeholder:"Enter your email"}))),h===1&&i.createElement("div",{className:"profile-form-grid"},i.createElement("label",{className:"form-field"},i.createElement("span",null,"Mobile Number"),i.createElement("input",{type:"tel",value:e.mobile,onChange:g=>l("mobile",g.target.value),placeholder:"Enter your mobile number"})),i.createElement("label",{className:"form-field"},i.createElement("span",null,"Gender"),i.createElement("select",{value:e.gender,onChange:g=>l("gender",g.target.value)},i.createElement("option",{value:""},"Select gender"),Yf.map(g=>i.createElement("option",{key:g,value:g},g)))),i.createElement("label",{className:"form-field form-field-full"},i.createElement("span",null,"Date of Birth"),i.createElement("input",{type:"date",value:e.dateOfBirth,onChange:g=>l("dateOfBirth",g.target.value)}))),h===2&&i.createElement("div",{className:"profile-form-grid"},i.createElement("label",{className:"form-field form-field-full"},i.createElement("span",null,"Country"),i.createElement("select",{value:e.country,onChange:g=>l("country",g.target.value)},Hf.map(g=>i.createElement("option",{key:g,value:g},g)))),i.createElement("label",{className:"form-field form-field-full"},i.createElement("span",null,"State"),i.createElement("select",{value:e.state,onChange:g=>l("state",g.target.value)},i.createElement("option",{value:""},"Select state"),Qf.map(g=>i.createElement("option",{key:g,value:g},g))))),h===3&&i.createElement("div",{className:"profile-form-grid"},i.createElement("label",{className:"form-field"},i.createElement("span",null,"City"),i.createElement("input",{type:"text",value:e.city,onChange:g=>l("city",g.target.value),placeholder:"Enter your city"})),i.createElement("label",{className:"form-field"},i.createElement("span",null,"Postal Code"),i.createElement("input",{type:"text",value:e.postalCode,onChange:g=>l("postalCode",g.target.value),placeholder:"Enter postal code"}))),h===4&&i.createElement("div",{className:"profile-form-grid"},i.createElement("label",{className:"form-field"},i.createElement("span",null,"Art Medium"),i.createElement("select",{value:e.specialty,onChange:g=>l("specialty",g.target.value)},Kf.map(g=>i.createElement("option",{key:g,value:g},g)))),i.createElement("label",{className:"form-field"},i.createElement("span",null,"Years of Experience"),i.createElement("input",{type:"text",value:e.yearsExperience,onChange:g=>l("yearsExperience",g.target.value),placeholder:"e.g. 6 years"}))),h===5&&i.createElement("div",{className:"profile-form-grid"},i.createElement("label",{className:"form-field"},i.createElement("span",null,"Website"),i.createElement("input",{type:"url",value:e.website,onChange:g=>l("website",g.target.value),placeholder:"https://yourwebsite.com"})),i.createElement("label",{className:"form-field"},i.createElement("span",null,"Instagram"),i.createElement("input",{type:"text",value:e.instagram,onChange:g=>l("instagram",g.target.value),placeholder:"@yourhandle"}))),h===6&&i.createElement("div",{className:"profile-form-grid"},i.createElement("label",{className:"form-field form-field-full"},i.createElement("span",null,"Artist Bio"),i.createElement("textarea",{rows:"4",value:e.bio,onChange:g=>l("bio",g.target.value),placeholder:"Tell visitors about your practice, exhibitions, and creative approach."}))),h===7&&i.createElement("div",{className:"profile-form-grid"},i.createElement("label",{className:"form-field form-field-full"},i.createElement("span",null,"Awards, Exhibitions, or Highlights"),i.createElement("textarea",{rows:"4",value:e.achievements,onChange:g=>l("achievements",g.target.value),placeholder:"Add exhibitions, awards, gallery features, or key milestones."}))),h===8&&i.createElement("div",{className:"image-step"},i.createElement(ul,{image:e.profileImage,name:e.fullName,className:"profile-image-preview"}),i.createElement("div",{className:"image-step-copy"},i.createElement("h4",null,"Upload Profile Image"),i.createElement("p",null,"Add a portrait or studio photo now, and you can change it again anytime from your profile page."),i.createElement("label",{className:"upload-button"},e.profileImage?"Change Image":"Upload Image",i.createElement("input",{type:"file",accept:"image/*",onChange:g=>{var x;return a(((x=g.target.files)==null?void 0:x[0])||null)}})))),h===9&&i.createElement("div",{className:"review-layout"},i.createElement("div",{className:"review-hero"},i.createElement(ul,{image:e.profileImage,name:e.fullName,className:"review-avatar"}),i.createElement("div",null,i.createElement("strong",null,e.fullName||"Artist Profile"),i.createElement("span",null,e.specialty||"Creative field not selected yet"),i.createElement("p",null,e.bio||"Your artist bio will appear here after you write it."))),i.createElement("div",{className:"review-grid"},y.map(g=>i.createElement("div",{key:g.label,className:"review-card"},i.createElement("span",null,g.label),i.createElement("strong",null,g.value)))))),t?i.createElement("p",{className:"profile-error"},t):null,i.createElement("div",{className:"profile-modal-actions"},i.createElement("button",{type:"button",className:"profile-action secondary",onClick:u,disabled:h===0},"Previous"),v?i.createElement("button",{type:"button",className:"profile-action primary",onClick:d},"Complete Profile"):i.createElement("div",{className:"profile-modal-actions-right"},i.createElement("button",{type:"button",className:"profile-action secondary",onClick:s},"Skip"),i.createElement("button",{type:"button",className:"profile-action primary",onClick:o},"Save & Next")))))}function lp({onOpen:e}){return i.createElement("section",{className:"profile-empty"},i.createElement("div",{className:"section-heading"},i.createElement("div",null,i.createElement("h3",null,"My Profile"),i.createElement("p",null,"Build your artist profile in guided steps, then review the finished version in one clean place."))),i.createElement("div",{className:"profile-empty-card"},i.createElement("strong",null,"Profile setup has not been completed yet."),i.createElement("p",null,"Start the profile wizard to add personal details, location, creative bio, and your profile image."),i.createElement("button",{type:"button",className:"profile-action primary profile-empty-button",onClick:e},"Start Profile Setup")))}function ap({profile:e,onEdit:t,onImageChange:n}){const r=[{title:"Personal Details",items:[["Full Name",e.fullName||"-"],["Email",e.email||"-"],["Mobile",e.mobile||"-"],["Gender",e.gender||"-"],["Date of Birth",e.dateOfBirth||"-"]]},{title:"Location",items:[["Country",e.country||"-"],["State",e.state||"-"],["City",e.city||"-"],["Postal Code",e.postalCode||"-"]]},{title:"Artist Details",items:[["Medium",e.specialty||"-"],["Experience",e.yearsExperience||"-"],["Website",e.website||"-"],["Instagram",e.instagram||"-"]]},{title:"Achievements",items:[["Highlights",e.achievements||"-"]]}];return i.createElement("section",{className:"profile-overview"},i.createElement("div",{className:"section-heading"},i.createElement("div",null,i.createElement("h3",null,"My Profile"),i.createElement("p",null,"Review the completed artist profile and update any details whenever you need."))),i.createElement("div",{className:"profile-hero-card"},i.createElement(ul,{image:e.profileImage,name:e.fullName,className:"profile-hero-avatar"}),i.createElement("div",{className:"profile-hero-copy"},i.createElement("span",{className:"panel-label"},"Artist Profile"),i.createElement("h4",null,e.fullName),i.createElement("p",null,e.bio||"Add your artist bio to describe your practice and style."),i.createElement("div",{className:"profile-hero-tags"},i.createElement("span",null,e.specialty||"Creative Medium"),i.createElement("span",null,e.city||"City",", ",e.state||"State")),i.createElement("div",{className:"profile-hero-actions"},i.createElement("button",{type:"button",className:"profile-action primary",onClick:t},"Edit Profile"),i.createElement("label",{className:"profile-action secondary upload-inline"},"Change Image",i.createElement("input",{type:"file",accept:"image/*",onChange:l=>{var a;return n(((a=l.target.files)==null?void 0:a[0])||null)}}))))),i.createElement("div",{className:"profile-info-grid"},r.map(l=>i.createElement("article",{key:l.title,className:"profile-info-card"},i.createElement("h5",null,l.title),i.createElement("div",{className:"profile-facts"},l.items.map(([a,o])=>i.createElement("div",{key:a,className:"profile-fact"},i.createElement("span",null,a),i.createElement("strong",null,o))))))))}function Qa(e){return new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:0}).format(e)}function Ui({status:e}){const t=e.toLowerCase().replace(/\s+/g,"-");return i.createElement("span",{className:`status-badge ${t}`},e)}function ip({toasts:e}){return i.createElement("div",{className:"toast-stack","aria-live":"polite","aria-atomic":"true"},e.map(t=>i.createElement("div",{key:t.id,className:`toast-item ${t.type||"success"}`},t.message)))}function op({entries:e,onAddEntry:t,showToast:n}){const[r,l]=R.useState({awards:!0,solo:!1,group:!1}),[a,o]=R.useState({awards:{title:"",subtitle:"",year:""},solo:{title:"",subtitle:"",year:""},group:{title:"",subtitle:"",year:""}}),[u,s]=R.useState({}),d=[{key:"awards",title:"Awards & Prizes",titleLabel:"Award / Prize",subtitleLabel:"Presented By"},{key:"solo",title:"Solo Exhibitions",titleLabel:"Exhibition Name",subtitleLabel:"Venue / City"},{key:"group",title:"Group Exhibitions",titleLabel:"Exhibition Name",subtitleLabel:"Venue / City"}];function h(p,y,g){o(x=>({...x,[p]:{...x[p],[y]:g}})),s(x=>({...x,[p]:""}))}function v(p,y){const g=a[p];if(!g.title.trim()||!g.subtitle.trim()||!g.year.trim()){s(x=>({...x,[p]:"Please complete all fields before adding a new entry."}));return}t(p,{id:Date.now()+Math.random(),title:g.title.trim(),subtitle:g.subtitle.trim(),year:g.year.trim()}),o(x=>({...x,[p]:{title:"",subtitle:"",year:""}})),s(x=>({...x,[p]:""})),n(`${y} entry added successfully.`)}return i.createElement("section",{className:"module-section"},i.createElement("div",{className:"section-heading"},i.createElement("div",null,i.createElement("h3",null,"Add Awards And Exhibition"),i.createElement("p",null,"Capture your recognitions and exhibition history with collapsible sections and quick add actions."))),i.createElement("div",{className:"module-stack"},d.map(p=>i.createElement("article",{key:p.key,className:"module-card accordion-card"},i.createElement("button",{type:"button",className:"accordion-toggle",onClick:()=>l(y=>({...y,[p.key]:!y[p.key]}))},i.createElement("strong",null,p.title),i.createElement("span",null,r[p.key]?"Hide":"Show")),r[p.key]?i.createElement("div",{className:"accordion-body"},i.createElement("div",{className:"profile-form-grid module-form-grid"},i.createElement("label",{className:"form-field animated-field"},i.createElement("span",null,p.titleLabel),i.createElement("input",{type:"text",value:a[p.key].title,onChange:y=>h(p.key,"title",y.target.value),placeholder:`Add ${p.titleLabel.toLowerCase()}`})),i.createElement("label",{className:"form-field animated-field"},i.createElement("span",null,p.subtitleLabel),i.createElement("input",{type:"text",value:a[p.key].subtitle,onChange:y=>h(p.key,"subtitle",y.target.value),placeholder:`Add ${p.subtitleLabel.toLowerCase()}`})),i.createElement("label",{className:"form-field animated-field"},i.createElement("span",null,"Year"),i.createElement("input",{type:"text",value:a[p.key].year,onChange:y=>h(p.key,"year",y.target.value),placeholder:"2026"})),i.createElement("div",{className:"module-action-row"},i.createElement("button",{type:"button",className:"profile-action primary",onClick:()=>v(p.key,p.title)},"Add Entry"))),u[p.key]?i.createElement("p",{className:"inline-error"},u[p.key]):null,e[p.key].length>0?i.createElement("div",{className:"table-shell"},i.createElement("table",{className:"data-table"},i.createElement("thead",null,i.createElement("tr",null,i.createElement("th",null,p.titleLabel),i.createElement("th",null,p.subtitleLabel),i.createElement("th",null,"Year"))),i.createElement("tbody",null,e[p.key].map(y=>i.createElement("tr",{key:y.id},i.createElement("td",null,y.title),i.createElement("td",null,y.subtitle),i.createElement("td",null,y.year)))))):i.createElement("div",{className:"inline-empty"},"No entries added in this section yet.")):null))))}function up({items:e,onAddArtwork:t,onRemoveArtwork:n,showToast:r}){const[l,a]=R.useState(e.length===0),[o,u]=R.useState({category:"Painting",type:"Original",name:"",image:""}),[s,d]=R.useState("");async function h(y){if(y)try{const g=await dc(y);u(x=>({...x,image:g})),d("")}catch{d("Artwork image could not be uploaded. Please try again.")}}function v(){u({category:"Painting",type:"Original",name:"",image:""}),d("")}function p(){if(!o.category.trim()||!o.type.trim()||!o.name.trim()||!o.image){d("Please complete the artwork form and upload an image before adding it.");return}t({id:Date.now()+Math.random(),category:o.category.trim(),type:o.type.trim(),name:o.name.trim(),image:o.image}),v(),a(!1),r("Artwork added successfully.")}return i.createElement("section",{className:"module-section"},i.createElement("div",{className:"section-heading section-heading-spread"},i.createElement("div",null,i.createElement("h3",null,"My Artwork"),i.createElement("p",null,"Manage your portfolio inventory with artwork previews, hover interactions, and quick creation controls.")),i.createElement("button",{type:"button",className:"profile-action primary",onClick:()=>a(!0)},"Add Artwork")),l?i.createElement("article",{className:"module-card form-card"},i.createElement("div",{className:"profile-form-grid module-form-grid"},i.createElement("label",{className:"form-field animated-field"},i.createElement("span",null,"Category"),i.createElement("input",{type:"text",value:o.category,onChange:y=>u(g=>({...g,category:y.target.value})),placeholder:"Painting"})),i.createElement("label",{className:"form-field animated-field"},i.createElement("span",null,"Type"),i.createElement("input",{type:"text",value:o.type,onChange:y=>u(g=>({...g,type:y.target.value})),placeholder:"Original"})),i.createElement("label",{className:"form-field form-field-full animated-field"},i.createElement("span",null,"Artwork Name"),i.createElement("input",{type:"text",value:o.name,onChange:y=>u(g=>({...g,name:y.target.value})),placeholder:"Enter artwork title"})),i.createElement("div",{className:"artwork-upload-row"},i.createElement("label",{className:"upload-button"},o.image?"Change Image":"Upload Image",i.createElement("input",{type:"file",accept:"image/*",onChange:y=>{var g;return h(((g=y.target.files)==null?void 0:g[0])||null)}})),o.image?i.createElement("img",{src:o.image,alt:"Artwork preview",className:"artwork-form-preview"}):i.createElement("div",{className:"artwork-form-placeholder"},"No preview yet")),i.createElement("div",{className:"module-action-row"},i.createElement("button",{type:"button",className:"profile-action secondary",onClick:()=>{v(),a(!1)}},"Cancel"),i.createElement("button",{type:"button",className:"profile-action primary",onClick:p},"Save Artwork"))),s?i.createElement("p",{className:"inline-error"},s):null):null,e.length>0?i.createElement("div",{className:"table-shell"},i.createElement("table",{className:"data-table artwork-table"},i.createElement("thead",null,i.createElement("tr",null,i.createElement("th",null,"Category"),i.createElement("th",null,"Type"),i.createElement("th",null,"Name"),i.createElement("th",null,"Images"),i.createElement("th",null,"Action"))),i.createElement("tbody",null,e.map(y=>i.createElement("tr",{key:y.id,className:"interactive-row"},i.createElement("td",null,y.category),i.createElement("td",null,y.type),i.createElement("td",null,y.name),i.createElement("td",null,i.createElement("div",{className:"artwork-thumb-wrap"},i.createElement("img",{src:y.image,alt:y.name,className:"artwork-thumb"}),i.createElement("div",{className:"artwork-hover-preview"},i.createElement("img",{src:y.image,alt:`${y.name} enlarged preview`})))),i.createElement("td",null,i.createElement("button",{type:"button",className:"table-action danger",onClick:()=>{n(y.id),r("Artwork removed from your list.","info")}},"Remove"))))))):i.createElement("div",{className:"empty-state-card"},i.createElement("div",{className:"empty-state-illustration","aria-hidden":"true"},i.createElement("span",null),i.createElement("span",null),i.createElement("span",null)),i.createElement("strong",null,"No artwork has been added yet."),i.createElement("p",null,"Start by adding your first artwork to populate the portfolio table and preview interactions.")))}function sp({offers:e}){const[t,n]=R.useState("all"),[r,l]=R.useState("all"),a=new Date("2026-04-22"),o=[...e].filter(u=>{const s=new Date(u.date);return t==="today"?u.date==="2026-04-22":t==="week"?(a-s)/(1e3*60*60*24)<=7:!0}).sort((u,s)=>r==="low-high"?u.offerPrice-s.offerPrice:r==="high-low"?s.offerPrice-u.offerPrice:0);return i.createElement("section",{className:"module-section"},i.createElement("div",{className:"section-heading section-heading-spread"},i.createElement("div",null,i.createElement("h3",null,"Order Offer Enquiry"),i.createElement("p",null,"Review incoming offers, filter them quickly, and spot newly arrived interest at a glance.")),i.createElement("div",{className:"filter-row"},i.createElement("select",{className:"range-select",value:t,onChange:u=>n(u.target.value)},i.createElement("option",{value:"all"},"All Dates"),i.createElement("option",{value:"today"},"Today"),i.createElement("option",{value:"week"},"Last 7 Days")),i.createElement("select",{className:"range-select",value:r,onChange:u=>l(u.target.value)},i.createElement("option",{value:"all"},"Default Price"),i.createElement("option",{value:"low-high"},"Low to High"),i.createElement("option",{value:"high-low"},"High to Low")))),i.createElement("div",{className:"table-shell"},i.createElement("table",{className:"data-table"},i.createElement("thead",null,i.createElement("tr",null,i.createElement("th",null,"Artwork Name"),i.createElement("th",null,"Customer Name"),i.createElement("th",null,"Offer Price"),i.createElement("th",null,"Date"))),i.createElement("tbody",null,o.map(u=>i.createElement("tr",{key:u.id,className:u.isNew?"new-row":""},i.createElement("td",null,u.artworkName,u.isNew?i.createElement("span",{className:"row-chip"},"New"):null),i.createElement("td",null,u.customerName),i.createElement("td",null,Qa(u.offerPrice)),i.createElement("td",null,u.date)))))))}function cp({refunds:e}){return i.createElement("section",{className:"module-section"},i.createElement("div",{className:"section-heading"},i.createElement("div",null,i.createElement("h3",null,"Refund Orders"),i.createElement("p",null,"Track refund requests with clear status badges and color-coded decisions across the list."))),i.createElement("div",{className:"module-grid"},e.map(t=>i.createElement("article",{key:t.id,className:"module-card request-card"},i.createElement("div",{className:"request-card-top"},i.createElement("strong",null,t.artworkName),i.createElement(Ui,{status:t.status})),i.createElement("span",{className:"request-meta"},t.orderId," • ",t.customerName),i.createElement("p",null,t.reason)))))}function dp({rating:e}){return i.createElement("div",{className:"rating-stars","aria-label":`${e} out of 5 stars`},Array.from({length:5},(t,n)=>i.createElement("span",{key:n,className:n<e?"filled":""},"★")))}function fp({remarks:e}){return i.createElement("section",{className:"module-section"},i.createElement("div",{className:"section-heading"},i.createElement("div",null,i.createElement("h3",null,"Remark View"),i.createElement("p",null,"Read curator and collector feedback in a more visual card layout with quick star-based sentiment."))),i.createElement("div",{className:"module-grid"},e.map(t=>i.createElement("article",{key:t.id,className:"module-card remark-card"},i.createElement("span",{className:"request-meta"},t.author),i.createElement("strong",null,t.title),i.createElement(dp,{rating:t.rating}),i.createElement("p",null,t.message)))))}function pp({orders:e}){const[t,n]=R.useState(null),[r,l]=R.useState(null);return i.createElement("section",{className:"module-section"},i.createElement("div",{className:"section-heading"},i.createElement("div",null,i.createElement("h3",null,"My Order Detail"),i.createElement("p",null,"Expand rows for quick delivery context or open the full modal for a complete order summary."))),i.createElement("div",{className:"table-shell"},i.createElement("table",{className:"data-table"},i.createElement("thead",null,i.createElement("tr",null,i.createElement("th",null,"Order ID"),i.createElement("th",null,"Artwork"),i.createElement("th",null,"Customer"),i.createElement("th",null,"Amount"),i.createElement("th",null,"Status"),i.createElement("th",null,"Action"))),i.createElement("tbody",null,e.map(a=>i.createElement(i.Fragment,{key:a.id},i.createElement("tr",{className:"interactive-row"},i.createElement("td",null,a.orderId),i.createElement("td",null,a.artworkName),i.createElement("td",null,a.customerName),i.createElement("td",null,Qa(a.amount)),i.createElement("td",null,i.createElement(Ui,{status:a.status})),i.createElement("td",null,i.createElement("div",{className:"table-action-group"},i.createElement("button",{type:"button",className:"table-action",onClick:()=>n(o=>o===a.id?null:a.id)},t===a.id?"Collapse":"Expand"),i.createElement("button",{type:"button",className:"table-action",onClick:()=>l(a)},"Details")))),t===a.id?i.createElement("tr",{className:"expanded-row"},i.createElement("td",{colSpan:"6"},i.createElement("div",{className:"expanded-order-card"},i.createElement("div",null,i.createElement("span",{className:"request-meta"},"Shipping Address"),i.createElement("strong",null,a.address)),i.createElement("div",null,i.createElement("span",{className:"request-meta"},"Order Notes"),i.createElement("strong",null,a.notes))))):null))))),r?i.createElement("div",{className:"detail-modal-overlay",onClick:()=>l(null)},i.createElement("div",{className:"detail-modal",onClick:a=>a.stopPropagation()},i.createElement("div",{className:"profile-modal-header"},i.createElement("div",null,i.createElement("h3",null,"Order Details"),i.createElement("p",null,r.orderId," • ",r.customerName)),i.createElement("button",{type:"button",className:"modal-close",onClick:()=>l(null)},"Close")),i.createElement("div",{className:"detail-grid"},i.createElement("div",{className:"detail-card"},i.createElement("span",{className:"request-meta"},"Artwork"),i.createElement("strong",null,r.artworkName)),i.createElement("div",{className:"detail-card"},i.createElement("span",{className:"request-meta"},"Amount"),i.createElement("strong",null,Qa(r.amount))),i.createElement("div",{className:"detail-card"},i.createElement("span",{className:"request-meta"},"Status"),i.createElement("strong",null,r.status)),i.createElement("div",{className:"detail-card"},i.createElement("span",{className:"request-meta"},"Date"),i.createElement("strong",null,r.date))),i.createElement("div",{className:"detail-list-card"},i.createElement("span",{className:"request-meta"},"Included Items"),i.createElement("ul",{className:"detail-list"},r.items.map(a=>i.createElement("li",{key:a},a)))),i.createElement("div",{className:"detail-list-card"},i.createElement("span",{className:"request-meta"},"Shipping Address"),i.createElement("strong",null,r.address),i.createElement("p",null,r.notes)))):null)}function mp({blogs:e,onAddBlog:t,onDeleteBlog:n,showToast:r}){const[l,a]=R.useState(e.length===0),[o,u]=R.useState({title:"",status:"Draft"}),[s,d]=R.useState("");function h(){if(!o.title.trim()){d("Please add a blog title before creating the entry.");return}t({id:Date.now()+Math.random(),title:o.title.trim(),status:o.status,updatedAt:"2026-04-22"}),u({title:"",status:"Draft"}),a(!1),d(""),r("Blog entry created successfully.")}return i.createElement("section",{className:"module-section"},i.createElement("div",{className:"section-heading section-heading-spread"},i.createElement("div",null,i.createElement("h3",null,"Blog"),i.createElement("p",null,"Create and manage blog entries with a simple composer and a cleaner empty-state experience.")),i.createElement("button",{type:"button",className:"profile-action primary",onClick:()=>a(!0)},"Create Blog")),l?i.createElement("article",{className:"module-card form-card"},i.createElement("div",{className:"profile-form-grid module-form-grid"},i.createElement("label",{className:"form-field form-field-full animated-field"},i.createElement("span",null,"Blog Title"),i.createElement("input",{type:"text",value:o.title,onChange:v=>{u(p=>({...p,title:v.target.value})),d("")},placeholder:"Enter blog title"})),i.createElement("label",{className:"form-field animated-field"},i.createElement("span",null,"Status"),i.createElement("select",{value:o.status,onChange:v=>u(p=>({...p,status:v.target.value}))},i.createElement("option",{value:"Draft"},"Draft"),i.createElement("option",{value:"Published"},"Published")))),s?i.createElement("p",{className:"inline-error"},s):null,i.createElement("div",{className:"module-action-row blog-action-row"},i.createElement("button",{type:"button",className:"profile-action secondary",onClick:()=>a(!1)},"Cancel"),i.createElement("button",{type:"button",className:"profile-action primary",onClick:h},"Save Blog"))):null,e.length>0?i.createElement("div",{className:"table-shell"},i.createElement("table",{className:"data-table"},i.createElement("thead",null,i.createElement("tr",null,i.createElement("th",null,"Title"),i.createElement("th",null,"Status"),i.createElement("th",null,"Updated"),i.createElement("th",null,"Action"))),i.createElement("tbody",null,e.map(v=>i.createElement("tr",{key:v.id,className:"interactive-row"},i.createElement("td",null,v.title),i.createElement("td",null,i.createElement(Ui,{status:v.status})),i.createElement("td",null,v.updatedAt),i.createElement("td",null,i.createElement("button",{type:"button",className:"table-action danger",onClick:()=>{n(v.id),r("Blog removed.","info")}},"Delete"))))))):i.createElement("div",{className:"empty-state-card"},i.createElement("div",{className:"empty-state-illustration blog-illustration","aria-hidden":"true"},i.createElement("span",null),i.createElement("span",null),i.createElement("span",null)),i.createElement("strong",null,"No blog posts yet."),i.createElement("p",null,"Create your first article to start building the blog section.")))}function gp({message:e,onLogin:t}){return i.createElement("div",{className:"logged-out-screen"},i.createElement("div",{className:"logged-out-card"},i.createElement("span",{className:"panel-label"},"Login Page"),i.createElement("h1",null,"Ziguratss Admin Panel"),i.createElement("p",null,e||"You have been logged out successfully."),i.createElement("button",{type:"button",className:"profile-action primary",onClick:t},"Go To Dashboard")))}function hp({title:e}){return i.createElement("section",{className:"profile-empty"},i.createElement("div",{className:"section-heading"},i.createElement("div",null,i.createElement("h3",null,e),i.createElement("p",null,"This area is ready for the next dashboard module when you want to expand it."))),i.createElement("div",{className:"profile-empty-card"},i.createElement("strong",null,e," is not set up yet."),i.createElement("p",null,"The main interaction added right now is the guided `My Profile` workflow with step-by-step details and image upload.")))}function vp(){const[e]=R.useState(Zf),[t,n]=R.useState(e.activeSection||"Dashboard"),[r,l]=R.useState("daywise"),[a,o]=R.useState(e.profileData||Zo),[u,s]=R.useState(!!e.isProfileComplete),[d,h]=R.useState(!1),[v,p]=R.useState(0),[y,g]=R.useState(""),[x,I]=R.useState(e.awardsData||Jo),[f,c]=R.useState(e.artworkItems||[]),[m,w]=R.useState(e.blogItems||[]),[S,P]=R.useState([]),[C,_]=R.useState(typeof window<"u"&&window.location.hash==="#/login"),[U,M]=R.useState(typeof window<"u"&&window.location.hash==="#/login"?"You have been logged out successfully.":""),X=Vf[r],kt=Math.max(...X.profile),ur=[{title:"My Profile",value:`${Math.round([a.fullName,a.email,a.mobile,a.gender,a.dateOfBirth,a.country,a.state,a.city,a.postalCode,a.specialty,a.yearsExperience,a.website,a.instagram,a.bio,a.achievements,a.profileImage].filter(Boolean).length/16*100)}%`,detail:u?"Profile complete":"Profile setup",accent:"gold"},{title:"My Artwork",value:`${f.length}`,detail:f.length===1?"Portfolio piece":"Curated pieces",accent:"indigo"},{title:"My Orders Detail",value:`${eu.length}`,detail:"Tracked orders",accent:"coral"}],Nl={Dashboard:`${X.label} snapshot for the Ziguratss studio`,"My Profile":"Complete your details step by step and review the finished profile.","Add Awards And Exhibition":"Organize awards and exhibitions with guided entry blocks.","My Artwork":"Manage portfolio pieces, previews, and quick actions.","Order Offer Enquiry":"Review new offers with filters and highlight states.","Refund Orders":"Track refund requests with color-coded status badges.","Remark View":"Read collector and curator feedback in a richer card layout.","My Order Detail":"Expand orders or open full detail popups for deeper context.",Blog:"Create and manage blog entries from one clean content panel.",Logout:"You are being redirected to the login page."};R.useEffect(()=>{typeof window>"u"||C||window.localStorage.setItem(Ha,JSON.stringify({profileData:a,isProfileComplete:u,awardsData:x,artworkItems:f,blogItems:m}))},[C,a,u,x,f,m]);function je(z,J="success"){const ye=Date.now()+Math.random();P(Cl=>[...Cl,{id:ye,message:z,type:J}]),window.setTimeout(()=>{P(Cl=>Cl.filter(wc=>wc.id!==ye))},2600)}function vn(z,J){o(ye=>({...ye,[z]:J})),g("")}async function k(z){if(z)try{const J=await dc(z);o(ye=>({...ye,profileImage:J})),g("")}catch{g("Profile image could not be uploaded. Please try another file.")}}function L(z){return z===0&&(!a.fullName.trim()||!a.email.trim())?"Please complete your name and email.":z===1&&(!a.mobile.trim()||!a.gender.trim()||!a.dateOfBirth.trim())?"Please complete your contact details before continuing.":z===2&&(!a.country.trim()||!a.state.trim())?"Please select your country and state.":z===3&&(!a.city.trim()||!a.postalCode.trim())?"Please complete your city and postal code.":z===4&&(!a.specialty.trim()||!a.yearsExperience.trim())?"Please add your art medium and experience before continuing.":z===6&&!a.bio.trim()?"Please add your artist bio before continuing.":""}function T(z=0){n("My Profile"),p(z),g(""),h(!0)}function V(){const z=L(v);if(z){g(z);return}p(J=>Math.min(J+1,Jt.length-1)),g("")}function Y(){p(z=>Math.min(z+1,Jt.length-1)),g("")}function jt(){p(z=>Math.max(z-1,0)),g("")}function We(){s(!0),n("My Profile"),h(!1),g(""),je("Profile completed successfully.")}function yn(z,J){I(ye=>({...ye,[z]:[J,...ye[z]]}))}function He(z){c(J=>[z,...J])}function bt(z){c(J=>J.filter(ye=>ye.id!==z))}function pc(z){w(J=>[z,...J])}function mc(z){w(J=>J.filter(ye=>ye.id!==z))}function gc(){_(!1),M(""),n("Dashboard"),typeof window<"u"&&(window.location.hash="#/dashboard"),je("Welcome back to Ziguratss studio.")}function hc(){M("You have been logged out successfully."),_(!0),n("Dashboard"),o(Zo),s(!1),h(!1),p(0),g(""),I(Jo),c([]),w([]),typeof window<"u"&&(window.sessionStorage.clear(),window.localStorage.removeItem(Ha),window.location.hash="#/login"),je("You have been logged out successfully.")}function vc(z){if(z==="Logout"){hc();return}n(z),z==="My Profile"&&!u&&T(0)}function yc(){return t==="Dashboard"?i.createElement(i.Fragment,null,i.createElement("div",{className:"section-heading"},i.createElement("div",null,i.createElement("h3",null,"My Dashboard"),i.createElement("p",null,"A refined artist workspace with a warmer editorial feel and a more premium presentation than the original layout."))),i.createElement("div",{className:"card-row"},ur.map(z=>i.createElement("article",{key:z.title,className:`dash-card ${z.accent}`},i.createElement("small",null,z.title),i.createElement("strong",null,z.value),i.createElement("span",null,z.detail)))),i.createElement("div",{className:"signal-row"},Wf.map(z=>i.createElement("article",{key:z.label,className:"signal-card"},i.createElement("span",null,z.label),i.createElement("strong",null,z.value)))),i.createElement("section",{className:"analytics-panel"},i.createElement("div",{className:"analytics-topbar"},i.createElement("div",null,i.createElement("h4",null,"Visitor Insights"),i.createElement("p",null,"Track how collectors are discovering your profile and artwork across different time windows.")),i.createElement("select",{className:"range-select","aria-label":"Select visitor range",value:r,onChange:z=>l(z.target.value)},i.createElement("option",{value:"daywise"},"Daywise"),i.createElement("option",{value:"weekwise"},"Weekwise"),i.createElement("option",{value:"monthwise"},"Monthwise"))),i.createElement("div",{className:"analytics-grid"},i.createElement("section",{className:"chart-panel"},i.createElement("div",{className:"panel-topline"},i.createElement("div",null,i.createElement("h5",null,"Profile Visitors Chart"),i.createElement("span",null,"Peak engagement: ",kt," visitors")),i.createElement("span",null,"Total Profile Visitors - ",X.profileTotal)),i.createElement(ep,{values:X.profile,accent:"#49a7df"}),i.createElement("div",{className:"chart-legend","aria-hidden":"true"},i.createElement("span",{className:"legend-dot",style:{color:"#49a7df"}},"Total Visitors"),i.createElement("span",{className:"legend-dot",style:{color:"#3f4a94"}},"Returning Viewers"),i.createElement("span",{className:"legend-dot",style:{color:"#d9af37"}},"New Visitors"))),i.createElement("aside",{className:"insight-panel"},i.createElement("div",{className:"panel-topline"},i.createElement("div",null,i.createElement("h5",null,"Artwork Visitors Chart"),i.createElement("span",null,"Portfolio conversion overview")),i.createElement("span",null,"Total Artwork Visitors - ",X.artworkTotal)),i.createElement("div",{className:"insight-content"},i.createElement(tp,{value:Math.min(94,Math.round(X.artworkTotal/X.profileTotal*100))})))),i.createElement("div",{className:"footer-line"},i.createElement("span",null,"Dashboard tuned for both desktop and mobile screens."),i.createElement("span",null,"Freshened with glassmorphism panels, editorial typography, and custom SVG analytics.")))):t==="My Profile"?u?i.createElement(ap,{profile:a,onEdit:()=>T(0),onImageChange:k}):i.createElement(lp,{onOpen:()=>T(v)}):t==="Add Awards And Exhibition"?i.createElement(op,{entries:x,onAddEntry:yn,showToast:je}):t==="My Artwork"?i.createElement(up,{items:f,onAddArtwork:He,onRemoveArtwork:bt,showToast:je}):t==="Order Offer Enquiry"?i.createElement(sp,{offers:Gf}):t==="Refund Orders"?i.createElement(cp,{refunds:Xf}):t==="Remark View"?i.createElement(fp,{remarks:qf}):t==="My Order Detail"?i.createElement(pp,{orders:eu}):t==="Blog"?i.createElement(mp,{blogs:m,onAddBlog:pc,onDeleteBlog:mc,showToast:je}):i.createElement(hp,{title:t})}return i.createElement(i.Fragment,null,i.createElement("style",null,`
        :root {
          color-scheme: light;
          --bg: #f6efe6;
          --paper: rgba(255, 255, 255, 0.84);
          --paper-strong: rgba(255, 255, 255, 0.96);
          --ink: #24324a;
          --muted: #7b8394;
          --gold: #d9af37;
          --gold-deep: #bf8d1f;
          --indigo: #3f4a94;
          --coral: #ff7b52;
          --line: rgba(36, 50, 74, 0.12);
          --glow: 0 28px 60px rgba(69, 50, 24, 0.12);
        }

        * {
          box-sizing: border-box;
        }

        html, body, #root {
          margin: 0;
          height: 100%;
          min-height: 100%;
        }

        body {
          font-family: "Avenir Next", "Trebuchet MS", "Geneva", sans-serif;
          color: var(--ink);
          background:
            radial-gradient(circle at top left, rgba(217, 175, 55, 0.14), transparent 28%),
            radial-gradient(circle at right 15% top 18%, rgba(63, 74, 148, 0.12), transparent 24%),
            linear-gradient(160deg, #fbf6ee 0%, #f3ebe2 42%, #eef2f7 100%);
          overflow-x: hidden;
        }

        button, input, select, textarea {
          font: inherit;
        }

        .app-shell {
          position: relative;
          min-height: 100dvh;
          overflow: hidden;
          padding: 22px 22px 30px;
          display: flex;
        }

        .app-shell::before,
        .app-shell::after {
          content: "";
          position: absolute;
          border-radius: 999px;
          filter: blur(10px);
          pointer-events: none;
        }

        .app-shell::before {
          width: 320px;
          height: 320px;
          top: -120px;
          left: -80px;
          background: radial-gradient(circle, rgba(255, 123, 82, 0.18), transparent 70%);
        }

        .app-shell::after {
          width: 360px;
          height: 360px;
          right: -120px;
          bottom: -140px;
          background: radial-gradient(circle, rgba(63, 74, 148, 0.16), transparent 72%);
        }
         
        .dashboard-frame {
          position: relative;
          z-index: 1;
          width: 100%;
          margin: 0;
          display: flex;
          flex-direction: column;
        }

        .topbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
          color: var(--muted);
          font-size: 0.95rem;
        }

        .topbar strong {
          color: var(--ink);
          font-weight: 700;
        }

        .hero {
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.64), rgba(255, 255, 255, 0.36));
          border: 1px solid rgba(255, 255, 255, 0.72);
          box-shadow: var(--glow);
          border-radius: 32px;
          padding: 34px 30px 28px;
          backdrop-filter: blur(20px);
          min-height: calc(100dvh - 94px);
          display: flex;
          flex-direction: column;
        }

        .hero-title {
          margin: 0;
          text-align: center;
          font-family: Baskerville, "Palatino Linotype", "Book Antiqua", serif;
          font-size: clamp(2.2rem, 5vw, 4.2rem);
          font-weight: 500;
          letter-spacing: 0.05em;
          color: #18243d;
        }

        .hero-divider {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          gap: 18px;
          margin: 16px auto 30px;
          max-width: 940px;
        }

        .hero-divider span {
          font-size: 0.92rem;
          text-transform: uppercase;
          letter-spacing: 0.28em;
          color: #f3a109;
          font-weight: 800;
          text-align: center;
          white-space: nowrap;
        }

        .hero-divider::before,
        .hero-divider::after {
          content: "";
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(36, 50, 74, 0.28), transparent);
        }

        .content-grid {
          display: grid;
          grid-template-columns: minmax(280px, 320px) minmax(0, 1fr);
          gap: 22px;
          align-items: stretch;
          flex: 1;
        }

        .sidebar {
          background: var(--paper-strong);
          border: 1px solid rgba(255, 255, 255, 0.85);
          border-radius: 28px;
          padding: 22px 18px;
          box-shadow: 0 22px 42px rgba(21, 32, 53, 0.08);
          height: 100%;
        }

        .profile-card {
          background:
            radial-gradient(circle at top right, rgba(217, 175, 55, 0.14), transparent 42%),
            linear-gradient(180deg, #ffffff 0%, #f8f2e8 100%);
          border-radius: 24px;
          padding: 18px;
          border: 1px solid rgba(36, 50, 74, 0.08);
        }

        .portrait-shell {
          position: relative;
          width: 132px;
          margin-bottom: 12px;
        }

        .portrait-svg {
          display: block;
          width: 100%;
          height: auto;
          border-radius: 28px;
          box-shadow: 0 18px 28px rgba(63, 74, 148, 0.16);
        }

        .portrait-image {
          display: block;
          width: 100%;
          aspect-ratio: 1 / 1;
          object-fit: cover;
          border-radius: 28px;
          box-shadow: 0 18px 28px rgba(63, 74, 148, 0.16);
        }

        .portrait-badge {
          position: absolute;
          right: -8px;
          bottom: -8px;
          padding: 7px 12px;
          border-radius: 999px;
          background: #24324a;
          color: #ffffff;
          font-size: 0.74rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          box-shadow: 0 12px 20px rgba(36, 50, 74, 0.24);
        }

        .profile-card h2 {
          margin: 16px 0 6px;
          font-size: 1.2rem;
        }

        .profile-card p {
          margin: 0;
          color: var(--muted);
          line-height: 1.5;
        }

        .status-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 14px;
          padding: 8px 12px;
          border-radius: 999px;
          background: rgba(217, 175, 55, 0.13);
          color: var(--gold-deep);
          font-size: 0.88rem;
          font-weight: 700;
        }

        .status-pill::before {
          content: "";
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: currentColor;
        }

        .quick-links {
          margin-top: 20px;
        }

        .panel-label {
          margin: 0 0 14px;
          font-size: 0.82rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--muted);
        }

        .quick-links nav {
          display: grid;
          gap: 10px;
        }

        .quick-link {
          text-align: left;
          border: 0;
          padding: 12px 14px;
          border-radius: 14px;
          background: transparent;
          color: var(--ink);
          transition: transform 180ms ease, background 180ms ease, color 180ms ease;
          cursor: pointer;
        }

        .quick-link:hover {
          transform: translateX(4px);
          background: rgba(36, 50, 74, 0.06);
        }

        .quick-link.active {
          background: linear-gradient(135deg, var(--gold), #e8c86d);
          color: #fff;
          box-shadow: 0 14px 24px rgba(217, 175, 55, 0.28);
        }

        .profile-empty,
        .profile-overview {
          display: grid;
          gap: 18px;
        }

        .profile-empty-card,
        .profile-hero-card,
        .profile-info-card {
          background: rgba(255, 255, 255, 0.82);
          border: 1px solid rgba(255, 255, 255, 0.88);
          box-shadow: 0 24px 40px rgba(21, 32, 53, 0.08);
        }

        .profile-empty-card {
          width: min(520px, 100%);
          margin: 0 auto;
          padding: 26px;
          border-radius: 28px;
          text-align: center;
        }

        .profile-empty-card strong {
          display: block;
          font-size: 1.18rem;
        }

        .profile-empty-card p {
          margin: 10px 0 0;
          color: var(--muted);
          line-height: 1.6;
          max-width: 420px;
          margin-left: auto;
          margin-right: auto;
        }

        .profile-empty-button {
          margin-top: 22px;
          min-width: 210px;
        }

        .profile-hero-card {
          display: grid;
          grid-template-columns: minmax(220px, 260px) minmax(0, 1fr);
          gap: 24px;
          padding: 26px;
          border-radius: 30px;
        }

        .profile-hero-avatar {
          width: min(240px, 100%);
          margin: 0;
        }

        .profile-hero-copy h4 {
          margin: 4px 0 10px;
          font-size: clamp(1.8rem, 3vw, 2.5rem);
          font-family: Baskerville, "Palatino Linotype", "Book Antiqua", serif;
          font-weight: 500;
        }

        .profile-hero-copy p {
          margin: 0;
          color: var(--muted);
          line-height: 1.7;
          max-width: 700px;
        }

        .profile-hero-tags {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 18px;
        }

        .profile-hero-tags span {
          padding: 9px 14px;
          border-radius: 999px;
          background: rgba(36, 50, 74, 0.06);
          color: var(--ink);
          font-size: 0.9rem;
          font-weight: 700;
        }

        .profile-hero-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 22px;
        }

        .profile-action {
          border: 0;
          border-radius: 14px;
          padding: 13px 18px;
          cursor: pointer;
          font-weight: 700;
          transition: transform 180ms ease, box-shadow 180ms ease, background 180ms ease;
          text-align: center;
        }

        .profile-action:hover:not(:disabled) {
          transform: translateY(-1px);
        }

        .profile-action:disabled {
          cursor: not-allowed;
          opacity: 0.45;
        }

        .profile-action.primary,
        .upload-button {
          background: linear-gradient(135deg, #d2a92f, #e4bd42);
          color: #ffffff;
          box-shadow: 0 14px 24px rgba(217, 175, 55, 0.24);
        }

        .profile-action.secondary {
          background: rgba(36, 50, 74, 0.08);
          color: var(--ink);
        }

        .upload-inline,
        .upload-button {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .upload-inline input,
        .upload-button input {
          position: absolute;
          inset: 0;
          opacity: 0;
          cursor: pointer;
        }

        .profile-info-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
        }

        .profile-info-card {
          padding: 22px;
          border-radius: 26px;
        }

        .profile-info-card h5 {
          margin: 0 0 18px;
          font-size: 1.06rem;
        }

        .profile-facts {
          display: grid;
          gap: 14px;
        }

        .profile-fact {
          padding-top: 14px;
          border-top: 1px solid rgba(36, 50, 74, 0.08);
        }

        .profile-fact:first-child {
          padding-top: 0;
          border-top: 0;
        }

        .profile-fact span,
        .review-card span,
        .review-hero span {
          display: block;
          color: var(--muted);
          font-size: 0.82rem;
          text-transform: uppercase;
          letter-spacing: 0.12em;
        }

        .profile-fact strong,
        .review-card strong,
        .review-hero strong {
          display: block;
          margin-top: 8px;
          font-size: 1rem;
          line-height: 1.45;
        }

        .profile-modal-overlay {
          position: fixed;
          inset: 0;
          z-index: 30;
          display: grid;
          place-items: center;
          padding: 24px;
          background: rgba(15, 18, 24, 0.58);
          backdrop-filter: blur(6px);
          overflow-y: auto;
        }

        .profile-modal {
          width: min(760px, 100%);
          max-height: none;
          overflow: visible;
          padding: 28px;
          border-radius: 28px;
          background: rgba(255, 255, 255, 0.97);
          box-shadow: 0 40px 80px rgba(12, 18, 30, 0.28);
        }

        .profile-modal-header {
          display: flex;
          justify-content: space-between;
          align-items: start;
          gap: 16px;
        }

        .profile-modal-header h3 {
          margin: 0;
          font-size: clamp(1.6rem, 3vw, 2rem);
        }

        .profile-modal-header p {
          margin: 6px 0 0;
          color: var(--muted);
        }

        .modal-close {
          border: 0;
          background: transparent;
          color: var(--muted);
          cursor: pointer;
          font-weight: 700;
        }

        .profile-progress-track {
          margin: 18px 0 24px;
          width: 100%;
          height: 6px;
          border-radius: 999px;
          background: rgba(36, 50, 74, 0.1);
          overflow: hidden;
        }

        .profile-progress-value {
          display: block;
          height: 100%;
          border-radius: inherit;
          background: linear-gradient(135deg, #d2a92f, #e4bd42);
        }

        .profile-modal-body {
          min-height: 240px;
        }

        .profile-form-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
          align-items: start;
        }

        .form-field {
          display: grid;
          gap: 8px;
        }

        .form-field span {
          font-size: 0.9rem;
          font-weight: 700;
        }

        .form-field input,
        .form-field select,
        .form-field textarea {
          width: 100%;
          border: 1px solid rgba(36, 50, 74, 0.14);
          border-radius: 14px;
          background: rgba(248, 249, 252, 0.96);
          padding: 14px 15px;
          color: var(--ink);
        }

        .form-field textarea {
          resize: vertical;
          min-height: 112px;
        }

        .form-field-full {
          grid-column: 1 / -1;
        }

        .image-step {
          display: grid;
          grid-template-columns: minmax(180px, 220px) minmax(0, 1fr);
          gap: 24px;
          align-items: center;
        }

        .profile-image-preview,
        .review-avatar {
          width: min(210px, 100%);
          margin: 0;
        }

        .image-step-copy h4 {
          margin: 0;
          font-size: 1.25rem;
        }

        .image-step-copy p {
          margin: 10px 0 18px;
          color: var(--muted);
          line-height: 1.6;
        }

        .review-layout {
          display: grid;
          gap: 20px;
        }

        .review-hero {
          display: grid;
          grid-template-columns: minmax(180px, 220px) minmax(0, 1fr);
          gap: 22px;
          align-items: center;
          padding: 18px;
          border-radius: 24px;
          background: rgba(36, 50, 74, 0.04);
        }

        .review-hero p {
          margin: 10px 0 0;
          color: var(--muted);
          line-height: 1.6;
        }

        .review-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
        }

        .review-card {
          padding: 16px;
          border-radius: 18px;
          background: rgba(36, 50, 74, 0.04);
        }

        .profile-error {
          margin: 20px 0 0;
          color: #b54f2b;
          font-weight: 700;
        }

        .profile-modal-actions {
          display: flex;
          justify-content: space-between;
          gap: 14px;
          margin-top: 22px;
        }

        .profile-modal-actions-right {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          justify-content: end;
        }

        .profile-modal-actions .profile-action {
          min-width: 160px;
        }

        .main-column {
          display: grid;
          gap: 18px;
          align-content: start;
        }

        .section-heading {
          display: flex;
          justify-content: space-between;
          align-items: end;
          gap: 14px;
        }

        .section-heading h3 {
          margin: 0;
          font-size: clamp(1.8rem, 3vw, 2.8rem);
          font-family: Baskerville, "Palatino Linotype", "Book Antiqua", serif;
          font-weight: 500;
        }

        .section-heading p {
          margin: 0;
          color: var(--muted);
          max-width: 360px;
        }

        .card-row {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }

        .dash-card {
          position: relative;
          overflow: hidden;
          min-height: 168px;
          padding: 24px;
          border-radius: 30px;
          color: #fff;
          display: flex;
          flex-direction: column;
          justify-content: end;
          box-shadow: 0 24px 36px rgba(28, 36, 55, 0.18);
          isolation: isolate;
        }

        .dash-card::before {
          content: "";
          position: absolute;
          inset: auto -10% 55% auto;
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.18);
          z-index: -1;
        }

        .dash-card::after {
          content: "";
          position: absolute;
          inset: 16px 16px auto auto;
          width: 52px;
          height: 52px;
          border-radius: 18px;
          border: 1px solid rgba(255, 255, 255, 0.28);
          background: rgba(255, 255, 255, 0.08);
          z-index: -1;
        }

        .dash-card.gold {
          background: linear-gradient(145deg, #c69b18, #e4be46);
        }

        .dash-card.indigo {
          background: linear-gradient(145deg, #2f3c87, #5966b9);
        }

        .dash-card.coral {
          background: linear-gradient(145deg, #f56b46, #ff9868);
        }

        .dash-card small {
          font-size: 0.88rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          opacity: 0.86;
        }

        .dash-card strong {
          margin-top: 12px;
          font-size: 2rem;
          font-weight: 800;
        }

        .dash-card span {
          margin-top: 6px;
          font-size: 1rem;
        }

        .signal-row {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
        }

        .signal-card {
          padding: 18px 20px;
          border-radius: 22px;
          background: rgba(255, 255, 255, 0.72);
          border: 1px solid rgba(36, 50, 74, 0.08);
          box-shadow: 0 16px 24px rgba(21, 32, 53, 0.06);
        }

        .signal-card span {
          display: block;
          color: var(--muted);
          font-size: 0.9rem;
          margin-bottom: 8px;
        }

        .signal-card strong {
          font-size: 1.6rem;
        }

        .analytics-panel {
          display: grid;
          gap: 22px;
          padding: 24px;
          border-radius: 30px;
          background: rgba(255, 255, 255, 0.82);
          border: 1px solid rgba(255, 255, 255, 0.86);
          box-shadow: 0 28px 40px rgba(21, 32, 53, 0.08);
        }

        .analytics-topbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        .analytics-topbar h4 {
          margin: 0;
          font-size: 1.2rem;
        }

        .analytics-topbar p {
          margin: 4px 0 0;
          color: var(--muted);
        }

        .range-select {
          padding: 12px 14px;
          border-radius: 14px;
          border: 1px solid rgba(36, 50, 74, 0.12);
          background: rgba(255, 255, 255, 0.94);
          color: var(--ink);
          min-width: 168px;
        }

        .analytics-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px;
          align-items: stretch;
        }

        .chart-panel,
        .insight-panel {
          background: linear-gradient(180deg, rgba(250, 251, 255, 0.96), rgba(245, 241, 236, 0.92));
          border-radius: 24px;
          padding: 20px;
          border: 1px solid rgba(36, 50, 74, 0.08);
          height: 100%;
        }

        .chart-panel {
          display: flex;
          flex-direction: column;
        }

        .panel-topline {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          margin-bottom: 14px;
        }

        .panel-topline h5 {
          margin: 0;
          font-size: 1.08rem;
        }

        .panel-topline span {
          color: var(--muted);
          font-size: 0.92rem;
        }

        .chart-svg {
          display: block;
          width: 100%;
          height: auto;
        }

        .chart-grid {
          stroke: rgba(36, 50, 74, 0.08);
          stroke-width: 1;
        }

        .chart-grid.vertical {
          stroke-dasharray: 3 6;
        }

        .chart-legend {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          margin-top: 12px;
          color: var(--muted);
          font-size: 0.88rem;
        }

        .legend-dot {
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .legend-dot::before {
          content: "";
          width: 12px;
          height: 12px;
          border-radius: 999px;
          background: currentColor;
        }

        .insight-panel {
          display: flex;
          flex-direction: column;
        }

        .insight-content {
          display: flex;
          flex: 1;
          flex-direction: column;
          justify-content: center;
        }

        .donut-wrap {
          position: relative;
          width: min(210px, 100%);
          margin: 0 auto;
        }

        .donut-chart {
          width: 100%;
          height: auto;
          transform: rotate(-90deg);
        }

        .donut-track,
        .donut-value {
          fill: none;
          stroke-width: 14;
        }

        .donut-track {
          stroke: rgba(36, 50, 74, 0.08);
        }

        .donut-value {
          stroke: url(#donutGradient);
          stroke-linecap: round;
          transform-origin: 50% 50%;
        }

        .donut-copy {
          position: absolute;
          inset: 0;
          display: grid;
          place-items: center;
          text-align: center;
        }

        .donut-copy strong {
          display: block;
          font-size: 2rem;
        }

        .content-stage {
          display: grid;
          gap: 18px;
          animation: sectionReveal 260ms ease;
        }

        @keyframes sectionReveal {
          from {
            opacity: 0;
            transform: translateY(8px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .module-section,
        .module-stack {
          display: grid;
          gap: 18px;
        }

        .module-card {
          padding: 22px;
          border-radius: 28px;
          background: rgba(255, 255, 255, 0.84);
          border: 1px solid rgba(255, 255, 255, 0.9);
          box-shadow: 0 22px 38px rgba(21, 32, 53, 0.08);
        }

        .accordion-card {
          padding: 0;
          overflow: hidden;
        }

        .accordion-toggle {
          width: 100%;
          border: 0;
          background: transparent;
          padding: 20px 22px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          text-align: left;
          cursor: pointer;
          color: var(--ink);
        }

        .accordion-toggle strong {
          font-size: 1.06rem;
        }

        .accordion-toggle span {
          color: var(--gold-deep);
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          font-size: 0.76rem;
        }

        .accordion-body {
          padding: 0 22px 22px;
          border-top: 1px solid rgba(36, 50, 74, 0.08);
        }

        .module-form-grid {
          margin-top: 18px;
        }

        .animated-field input,
        .animated-field select,
        .animated-field textarea {
          transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
        }

        .animated-field input:focus,
        .animated-field select:focus,
        .animated-field textarea:focus {
          outline: 0;
          transform: translateY(-1px);
          border-color: rgba(217, 175, 55, 0.68);
          box-shadow: 0 10px 20px rgba(217, 175, 55, 0.12);
        }

        .module-action-row {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          align-items: center;
        }

        .blog-action-row {
          margin-top: 20px;
          padding-top: 8px;
          justify-content: flex-end;
        }

        .inline-error {
          margin: 16px 0 0;
          color: #b54f2b;
          font-weight: 700;
        }

        .inline-empty {
          margin-top: 18px;
          padding: 16px;
          border-radius: 18px;
          background: rgba(36, 50, 74, 0.04);
          color: var(--muted);
        }

        .section-heading-spread {
          justify-content: space-between;
          align-items: start;
        }

        .table-shell {
          overflow-x: auto;
          border-radius: 22px;
          border: 1px solid rgba(36, 50, 74, 0.08);
          background: rgba(255, 255, 255, 0.72);
        }

        .data-table {
          width: 100%;
          border-collapse: collapse;
          min-width: 680px;
        }

        .data-table th,
        .data-table td {
          padding: 15px 16px;
          text-align: left;
          border-bottom: 1px solid rgba(36, 50, 74, 0.08);
          vertical-align: middle;
        }

        .data-table th {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--muted);
          background: rgba(36, 50, 74, 0.03);
        }

        .data-table tbody tr:last-child td {
          border-bottom: 0;
        }

        .interactive-row {
          transition: background 180ms ease, transform 180ms ease;
        }

        .interactive-row:hover {
          background: rgba(36, 50, 74, 0.04);
        }

        .artwork-upload-row {
          display: flex;
          gap: 18px;
          align-items: center;
          flex-wrap: wrap;
        }

        .artwork-form-preview,
        .artwork-form-placeholder {
          width: 120px;
          height: 120px;
          border-radius: 18px;
        }

        .artwork-form-preview {
          object-fit: cover;
          box-shadow: 0 14px 24px rgba(36, 50, 74, 0.12);
        }

        .artwork-form-placeholder {
          display: grid;
          place-items: center;
          background: rgba(36, 50, 74, 0.06);
          color: var(--muted);
          font-size: 0.9rem;
        }

        .artwork-thumb-wrap {
          position: relative;
          width: 60px;
          height: 60px;
        }

        .artwork-thumb {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 14px;
          box-shadow: 0 10px 18px rgba(36, 50, 74, 0.12);
        }

        .artwork-hover-preview {
          position: absolute;
          left: calc(100% + 12px);
          top: 50%;
          width: 160px;
          padding: 8px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.98);
          box-shadow: 0 18px 34px rgba(21, 32, 53, 0.18);
          transform: translateY(-50%) scale(0.96);
          opacity: 0;
          pointer-events: none;
          transition: opacity 180ms ease, transform 180ms ease;
          z-index: 5;
        }

        .artwork-hover-preview img {
          width: 100%;
          display: block;
          border-radius: 12px;
        }

        .interactive-row:hover .artwork-hover-preview {
          opacity: 1;
          transform: translateY(-50%) scale(1);
        }

        .table-action {
          border: 0;
          background: rgba(36, 50, 74, 0.08);
          color: var(--ink);
          border-radius: 12px;
          padding: 10px 12px;
          cursor: pointer;
          font-weight: 700;
          transition: background 180ms ease, transform 180ms ease;
        }

        .table-action:hover {
          transform: translateY(-1px);
          background: rgba(36, 50, 74, 0.12);
        }

        .table-action.danger {
          background: rgba(255, 123, 82, 0.12);
          color: #b54f2b;
        }

        .table-action-group {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .empty-state-card {
          display: grid;
          gap: 12px;
          place-items: center;
          text-align: center;
          padding: 34px 26px;
          border-radius: 28px;
          background: rgba(255, 255, 255, 0.84);
          border: 1px solid rgba(255, 255, 255, 0.9);
          box-shadow: 0 24px 40px rgba(21, 32, 53, 0.08);
        }

        .empty-state-card strong {
          font-size: 1.1rem;
        }

        .empty-state-card p {
          max-width: 460px;
          margin: 0;
          color: var(--muted);
          line-height: 1.6;
        }

        .empty-state-illustration {
          position: relative;
          width: 110px;
          height: 110px;
        }

        .empty-state-illustration span {
          position: absolute;
          border-radius: 50%;
          background: linear-gradient(145deg, rgba(217, 175, 55, 0.7), rgba(63, 74, 148, 0.35));
        }

        .empty-state-illustration span:nth-child(1) {
          width: 84px;
          height: 84px;
          inset: 14px auto auto 12px;
        }

        .empty-state-illustration span:nth-child(2) {
          width: 34px;
          height: 34px;
          top: 10px;
          right: 8px;
        }

        .empty-state-illustration span:nth-child(3) {
          width: 22px;
          height: 22px;
          bottom: 8px;
          right: 24px;
        }

        .filter-row {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .new-row {
          background: rgba(217, 175, 55, 0.08);
        }

        .row-chip,
        .request-meta {
          display: inline-block;
          color: var(--muted);
          font-size: 0.8rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .row-chip {
          margin-left: 10px;
          padding: 4px 8px;
          border-radius: 999px;
          background: rgba(217, 175, 55, 0.18);
          color: var(--gold-deep);
          font-weight: 800;
        }

        .module-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
        }

        .request-card,
        .remark-card {
          display: grid;
          gap: 12px;
        }

        .request-card-top {
          display: flex;
          justify-content: space-between;
          align-items: start;
          gap: 12px;
        }

        .request-card p,
        .remark-card p,
        .detail-list-card p {
          margin: 0;
          color: var(--muted);
          line-height: 1.6;
        }

        .status-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 7px 12px;
          border-radius: 999px;
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .status-badge.pending,
        .status-badge.draft,
        .status-badge.processing {
          background: rgba(217, 175, 55, 0.16);
          color: #a07000;
        }

        .status-badge.approved,
        .status-badge.published,
        .status-badge.delivered {
          background: rgba(29, 155, 97, 0.14);
          color: #13734a;
        }

        .status-badge.rejected {
          background: rgba(255, 123, 82, 0.14);
          color: #b54f2b;
        }

        .status-badge.in-transit {
          background: rgba(63, 74, 148, 0.14);
          color: #34418d;
        }

        .rating-stars {
          display: flex;
          gap: 4px;
          font-size: 1.1rem;
          color: rgba(36, 50, 74, 0.18);
        }

        .rating-stars .filled {
          color: var(--gold);
        }

        .expanded-row td {
          background: rgba(36, 50, 74, 0.03);
        }

        .expanded-order-card {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
          padding: 6px 0;
        }

        .expanded-order-card strong,
        .detail-card strong,
        .detail-list-card strong {
          display: block;
          margin-top: 6px;
          line-height: 1.5;
        }

        .detail-modal-overlay {
          position: fixed;
          inset: 0;
          z-index: 26;
          display: grid;
          place-items: center;
          padding: 24px;
          background: rgba(15, 18, 24, 0.5);
          backdrop-filter: blur(6px);
        }

        .detail-modal {
          width: min(720px, 100%);
          padding: 24px;
          border-radius: 28px;
          background: rgba(255, 255, 255, 0.98);
          box-shadow: 0 34px 64px rgba(12, 18, 30, 0.28);
        }

        .detail-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
          margin-top: 20px;
        }

        .detail-card,
        .detail-list-card {
          padding: 18px;
          border-radius: 20px;
          background: rgba(36, 50, 74, 0.04);
        }

        .detail-list-card {
          margin-top: 14px;
        }

        .detail-list {
          margin: 10px 0 0;
          padding-left: 18px;
          color: var(--muted);
          line-height: 1.7;
        }

        .toast-stack {
          position: fixed;
          top: 22px;
          right: 22px;
          z-index: 60;
          display: grid;
          gap: 10px;
        }

        .toast-item {
          min-width: 240px;
          max-width: 340px;
          padding: 14px 16px;
          border-radius: 16px;
          color: #ffffff;
          font-weight: 700;
          box-shadow: 0 18px 28px rgba(21, 32, 53, 0.18);
          animation: sectionReveal 220ms ease;
        }

        .toast-item.success {
          background: linear-gradient(135deg, #24324a, #4258a8);
        }

        .toast-item.info {
          background: linear-gradient(135deg, #d2a92f, #e4bd42);
        }

        .logged-out-screen {
          position: relative;
          z-index: 1;
          width: 100%;
          display: grid;
          place-items: center;
        }

        .logged-out-card {
          width: min(520px, 100%);
          padding: 34px 28px;
          border-radius: 32px;
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(255, 255, 255, 0.9);
          box-shadow: 0 30px 60px rgba(21, 32, 53, 0.12);
          text-align: center;
        }

        .logged-out-card h1 {
          margin: 6px 0 12px;
          font-size: clamp(2rem, 4vw, 3rem);
          font-family: Baskerville, "Palatino Linotype", "Book Antiqua", serif;
          font-weight: 500;
        }

        .logged-out-card p {
          margin: 0 auto 20px;
          max-width: 420px;
          color: var(--muted);
          line-height: 1.7;
        }

        .footer-line {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
          color: var(--muted);
          font-size: 0.92rem;
        }

        @media (max-width: 1080px) {
          .content-grid,
          .analytics-grid,
          .card-row,
          .profile-info-grid,
          .profile-hero-card,
          .image-step,
          .review-hero,
          .module-grid,
          .detail-grid,
          .expanded-order-card {
            grid-template-columns: 1fr;
          }

          .signal-row {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        @media (max-width: 720px) {
          .app-shell {
            padding: 14px 14px 24px;
          }

          .hero {
            padding: 24px 16px 18px;
            border-radius: 24px;
            min-height: auto;
          }

          .hero-divider {
            grid-template-columns: 1fr;
            gap: 10px;
          }

          .hero-divider::before,
          .hero-divider::after {
            display: none;
          }

          .section-heading,
          .topbar,
          .analytics-topbar,
          .panel-topline,
          .footer-line,
          .profile-modal-header,
          .profile-modal-actions,
          .profile-modal-actions-right,
          .filter-row {
            align-items: start;
            flex-direction: column;
          }

          .signal-row {
            grid-template-columns: 1fr;
          }

          .profile-form-grid,
          .review-grid {
            grid-template-columns: 1fr;
          }

          .sidebar,
          .analytics-panel,
          .chart-panel,
          .insight-panel {
            padding-left: 16px;
            padding-right: 16px;
          }

          .profile-modal {
            padding: 20px 16px;
          }

          .toast-stack {
            left: 14px;
            right: 14px;
            top: 14px;
          }

          .toast-item {
            min-width: 0;
            max-width: none;
          }
        }
      `),i.createElement("div",{className:"app-shell"},i.createElement("svg",{width:"0",height:"0","aria-hidden":"true",focusable:"false"},i.createElement("defs",null,i.createElement("linearGradient",{id:"donutGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%"},i.createElement("stop",{offset:"0%",stopColor:"#ff7b52"}),i.createElement("stop",{offset:"55%",stopColor:"#d9af37"}),i.createElement("stop",{offset:"100%",stopColor:"#3f4a94"})))),C?i.createElement(gp,{message:U,onLogin:gc}):i.createElement(i.Fragment,null,i.createElement("main",{className:"dashboard-frame"},i.createElement("div",{className:"topbar"},i.createElement("span",null,"Home / ",i.createElement("strong",null,t)),i.createElement("span",null,Nl[t]||`${t} workspace`)),i.createElement("section",{className:"hero"},i.createElement("h1",{className:"hero-title"},"WELCOME TO ZIGURATSS!"),i.createElement("div",{className:"hero-divider"},i.createElement("span",null,"Dive Into The Sea Of Artworks")),i.createElement("div",{className:"content-grid"},i.createElement("aside",{className:"sidebar"},i.createElement("div",{className:"profile-card"},i.createElement(ul,{image:a.profileImage,name:a.fullName}),i.createElement("h2",null,"Welcome ",a.fullName),i.createElement("p",null,a.email),i.createElement("div",{className:"status-pill"},u?"Creative portfolio live":"Profile setup in progress")),i.createElement("div",{className:"quick-links"},i.createElement("p",{className:"panel-label"},"Quick Links"),i.createElement("nav",{"aria-label":"Quick links"},$f.map(z=>i.createElement("button",{key:z,type:"button",className:`quick-link ${t===z?"active":""}`,onClick:()=>vc(z)},z))))),i.createElement("section",{className:"main-column"},i.createElement("div",{key:t,className:"content-stage"},yc()))))),i.createElement(rp,{draft:a,error:y,isOpen:d,onClose:()=>h(!1),onFieldChange:vn,onImageChange:k,onNext:V,onPrev:jt,onSkip:Y,onSubmit:We,stepIndex:v})),i.createElement(ip,{toasts:S})))}Zl.createRoot(document.getElementById("root")).render(i.createElement(i.StrictMode,null,i.createElement(vp,null)));
