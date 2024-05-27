(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();function jo(e,t){const n=Object.create(null),i=e.split(",");for(let s=0;s<i.length;s++)n[i[s]]=!0;return t?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const ce={},Pn=[],et=()=>{},id=()=>!1,sd=/^on[^a-z]/,Ys=e=>sd.test(e),Bo=e=>e.startsWith("onUpdate:"),me=Object.assign,Ho=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},rd=Object.prototype.hasOwnProperty,G=(e,t)=>rd.call(e,t),j=Array.isArray,On=e=>Hi(e)==="[object Map]",Qs=e=>Hi(e)==="[object Set]",el=e=>Hi(e)==="[object Date]",K=e=>typeof e=="function",_e=e=>typeof e=="string",Ei=e=>typeof e=="symbol",le=e=>e!==null&&typeof e=="object",zc=e=>le(e)&&K(e.then)&&K(e.catch),qc=Object.prototype.toString,Hi=e=>qc.call(e),od=e=>Hi(e).slice(8,-1),Gc=e=>Hi(e)==="[object Object]",$o=e=>_e(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,gs=jo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Zs=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},ad=/-(\w)/g,gt=Zs(e=>e.replace(ad,(t,n)=>n?n.toUpperCase():"")),ld=/\B([A-Z])/g,Wn=Zs(e=>e.replace(ld,"-$1").toLowerCase()),er=Zs(e=>e.charAt(0).toUpperCase()+e.slice(1)),kr=Zs(e=>e?`on${er(e)}`:""),wi=(e,t)=>!Object.is(e,t),ms=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Ss=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Rs=e=>{const t=parseFloat(e);return isNaN(t)?e:t},cd=e=>{const t=_e(e)?Number(e):NaN;return isNaN(t)?e:t};let tl;const no=()=>tl||(tl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Vo(e){if(j(e)){const t={};for(let n=0;n<e.length;n++){const i=e[n],s=_e(i)?dd(i):Vo(i);if(s)for(const r in s)t[r]=s[r]}return t}else{if(_e(e))return e;if(le(e))return e}}const ud=/;(?![^(]*\))/g,hd=/:([^]+)/,fd=/\/\*[^]*?\*\//g;function dd(e){const t={};return e.replace(fd,"").split(ud).forEach(n=>{if(n){const i=n.split(hd);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function $i(e){let t="";if(_e(e))t=e;else if(j(e))for(let n=0;n<e.length;n++){const i=$i(e[n]);i&&(t+=i+" ")}else if(le(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const pd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",gd=jo(pd);function Jc(e){return!!e||e===""}function md(e,t){if(e.length!==t.length)return!1;let n=!0;for(let i=0;n&&i<e.length;i++)n=tr(e[i],t[i]);return n}function tr(e,t){if(e===t)return!0;let n=el(e),i=el(t);if(n||i)return n&&i?e.getTime()===t.getTime():!1;if(n=Ei(e),i=Ei(t),n||i)return e===t;if(n=j(e),i=j(t),n||i)return n&&i?md(e,t):!1;if(n=le(e),i=le(t),n||i){if(!n||!i)return!1;const s=Object.keys(e).length,r=Object.keys(t).length;if(s!==r)return!1;for(const o in e){const l=e.hasOwnProperty(o),a=t.hasOwnProperty(o);if(l&&!a||!l&&a||!tr(e[o],t[o]))return!1}}return String(e)===String(t)}function _d(e,t){return e.findIndex(n=>tr(n,t))}const hw=e=>_e(e)?e:e==null?"":j(e)||le(e)&&(e.toString===qc||!K(e.toString))?JSON.stringify(e,Xc,2):String(e),Xc=(e,t)=>t&&t.__v_isRef?Xc(e,t.value):On(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[i,s])=>(n[`${i} =>`]=s,n),{})}:Qs(t)?{[`Set(${t.size})`]:[...t.values()]}:le(t)&&!j(t)&&!Gc(t)?String(t):t;let Xe;class vd{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Xe,!t&&Xe&&(this.index=(Xe.scopes||(Xe.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Xe;try{return Xe=this,t()}finally{Xe=n}}}on(){Xe=this}off(){Xe=this.parent}stop(t){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function yd(e,t=Xe){t&&t.active&&t.effects.push(e)}function Ed(){return Xe}const Wo=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Yc=e=>(e.w&Gt)>0,Qc=e=>(e.n&Gt)>0,wd=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Gt},Id=e=>{const{deps:t}=e;if(t.length){let n=0;for(let i=0;i<t.length;i++){const s=t[i];Yc(s)&&!Qc(s)?s.delete(e):t[n++]=s,s.w&=~Gt,s.n&=~Gt}t.length=n}},io=new WeakMap;let oi=0,Gt=1;const so=30;let Ye;const fn=Symbol(""),ro=Symbol("");class Ko{constructor(t,n=null,i){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,yd(this,i)}run(){if(!this.active)return this.fn();let t=Ye,n=Vt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Ye,Ye=this,Vt=!0,Gt=1<<++oi,oi<=so?wd(this):nl(this),this.fn()}finally{oi<=so&&Id(this),Gt=1<<--oi,Ye=this.parent,Vt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ye===this?this.deferStop=!0:this.active&&(nl(this),this.onStop&&this.onStop(),this.active=!1)}}function nl(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Vt=!0;const Zc=[];function Kn(){Zc.push(Vt),Vt=!1}function zn(){const e=Zc.pop();Vt=e===void 0?!0:e}function Be(e,t,n){if(Vt&&Ye){let i=io.get(e);i||io.set(e,i=new Map);let s=i.get(n);s||i.set(n,s=Wo()),eu(s)}}function eu(e,t){let n=!1;oi<=so?Qc(e)||(e.n|=Gt,n=!Yc(e)):n=!e.has(Ye),n&&(e.add(Ye),Ye.deps.push(e))}function Ct(e,t,n,i,s,r){const o=io.get(e);if(!o)return;let l=[];if(t==="clear")l=[...o.values()];else if(n==="length"&&j(e)){const a=Number(i);o.forEach((c,u)=>{(u==="length"||u>=a)&&l.push(c)})}else switch(n!==void 0&&l.push(o.get(n)),t){case"add":j(e)?$o(n)&&l.push(o.get("length")):(l.push(o.get(fn)),On(e)&&l.push(o.get(ro)));break;case"delete":j(e)||(l.push(o.get(fn)),On(e)&&l.push(o.get(ro)));break;case"set":On(e)&&l.push(o.get(fn));break}if(l.length===1)l[0]&&oo(l[0]);else{const a=[];for(const c of l)c&&a.push(...c);oo(Wo(a))}}function oo(e,t){const n=j(e)?e:[...e];for(const i of n)i.computed&&il(i);for(const i of n)i.computed||il(i)}function il(e,t){(e!==Ye||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Td=jo("__proto__,__v_isRef,__isVue"),tu=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ei)),Ad=zo(),Cd=zo(!1,!0),bd=zo(!0),sl=Sd();function Sd(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const i=J(this);for(let r=0,o=this.length;r<o;r++)Be(i,"get",r+"");const s=i[t](...n);return s===-1||s===!1?i[t](...n.map(J)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Kn();const i=J(this)[t].apply(this,n);return zn(),i}}),e}function Rd(e){const t=J(this);return Be(t,"has",e),t.hasOwnProperty(e)}function zo(e=!1,t=!1){return function(i,s,r){if(s==="__v_isReactive")return!e;if(s==="__v_isReadonly")return e;if(s==="__v_isShallow")return t;if(s==="__v_raw"&&r===(e?t?Wd:ou:t?ru:su).get(i))return i;const o=j(i);if(!e){if(o&&G(sl,s))return Reflect.get(sl,s,r);if(s==="hasOwnProperty")return Rd}const l=Reflect.get(i,s,r);return(Ei(s)?tu.has(s):Td(s))||(e||Be(i,"get",s),t)?l:Oe(l)?o&&$o(s)?l:l.value:le(l)?e?lu(l):ir(l):l}}const Pd=nu(),Od=nu(!0);function nu(e=!1){return function(n,i,s,r){let o=n[i];if(Un(o)&&Oe(o)&&!Oe(s))return!1;if(!e&&(!Ps(s)&&!Un(s)&&(o=J(o),s=J(s)),!j(n)&&Oe(o)&&!Oe(s)))return o.value=s,!0;const l=j(n)&&$o(i)?Number(i)<n.length:G(n,i),a=Reflect.set(n,i,s,r);return n===J(r)&&(l?wi(s,o)&&Ct(n,"set",i,s):Ct(n,"add",i,s)),a}}function kd(e,t){const n=G(e,t);e[t];const i=Reflect.deleteProperty(e,t);return i&&n&&Ct(e,"delete",t,void 0),i}function Nd(e,t){const n=Reflect.has(e,t);return(!Ei(t)||!tu.has(t))&&Be(e,"has",t),n}function Dd(e){return Be(e,"iterate",j(e)?"length":fn),Reflect.ownKeys(e)}const iu={get:Ad,set:Pd,deleteProperty:kd,has:Nd,ownKeys:Dd},Ld={get:bd,set(e,t){return!0},deleteProperty(e,t){return!0}},Md=me({},iu,{get:Cd,set:Od}),qo=e=>e,nr=e=>Reflect.getPrototypeOf(e);function ss(e,t,n=!1,i=!1){e=e.__v_raw;const s=J(e),r=J(t);n||(t!==r&&Be(s,"get",t),Be(s,"get",r));const{has:o}=nr(s),l=i?qo:n?Xo:Ii;if(o.call(s,t))return l(e.get(t));if(o.call(s,r))return l(e.get(r));e!==s&&e.get(t)}function rs(e,t=!1){const n=this.__v_raw,i=J(n),s=J(e);return t||(e!==s&&Be(i,"has",e),Be(i,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)}function os(e,t=!1){return e=e.__v_raw,!t&&Be(J(e),"iterate",fn),Reflect.get(e,"size",e)}function rl(e){e=J(e);const t=J(this);return nr(t).has.call(t,e)||(t.add(e),Ct(t,"add",e,e)),this}function ol(e,t){t=J(t);const n=J(this),{has:i,get:s}=nr(n);let r=i.call(n,e);r||(e=J(e),r=i.call(n,e));const o=s.call(n,e);return n.set(e,t),r?wi(t,o)&&Ct(n,"set",e,t):Ct(n,"add",e,t),this}function al(e){const t=J(this),{has:n,get:i}=nr(t);let s=n.call(t,e);s||(e=J(e),s=n.call(t,e)),i&&i.call(t,e);const r=t.delete(e);return s&&Ct(t,"delete",e,void 0),r}function ll(){const e=J(this),t=e.size!==0,n=e.clear();return t&&Ct(e,"clear",void 0,void 0),n}function as(e,t){return function(i,s){const r=this,o=r.__v_raw,l=J(o),a=t?qo:e?Xo:Ii;return!e&&Be(l,"iterate",fn),o.forEach((c,u)=>i.call(s,a(c),a(u),r))}}function ls(e,t,n){return function(...i){const s=this.__v_raw,r=J(s),o=On(r),l=e==="entries"||e===Symbol.iterator&&o,a=e==="keys"&&o,c=s[e](...i),u=n?qo:t?Xo:Ii;return!t&&Be(r,"iterate",a?ro:fn),{next(){const{value:d,done:p}=c.next();return p?{value:d,done:p}:{value:l?[u(d[0]),u(d[1])]:u(d),done:p}},[Symbol.iterator](){return this}}}}function Nt(e){return function(...t){return e==="delete"?!1:this}}function xd(){const e={get(r){return ss(this,r)},get size(){return os(this)},has:rs,add:rl,set:ol,delete:al,clear:ll,forEach:as(!1,!1)},t={get(r){return ss(this,r,!1,!0)},get size(){return os(this)},has:rs,add:rl,set:ol,delete:al,clear:ll,forEach:as(!1,!0)},n={get(r){return ss(this,r,!0)},get size(){return os(this,!0)},has(r){return rs.call(this,r,!0)},add:Nt("add"),set:Nt("set"),delete:Nt("delete"),clear:Nt("clear"),forEach:as(!0,!1)},i={get(r){return ss(this,r,!0,!0)},get size(){return os(this,!0)},has(r){return rs.call(this,r,!0)},add:Nt("add"),set:Nt("set"),delete:Nt("delete"),clear:Nt("clear"),forEach:as(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=ls(r,!1,!1),n[r]=ls(r,!0,!1),t[r]=ls(r,!1,!0),i[r]=ls(r,!0,!0)}),[e,n,t,i]}const[Ud,Fd,jd,Bd]=xd();function Go(e,t){const n=t?e?Bd:jd:e?Fd:Ud;return(i,s,r)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?i:Reflect.get(G(n,s)&&s in i?n:i,s,r)}const Hd={get:Go(!1,!1)},$d={get:Go(!1,!0)},Vd={get:Go(!0,!1)},su=new WeakMap,ru=new WeakMap,ou=new WeakMap,Wd=new WeakMap;function Kd(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function zd(e){return e.__v_skip||!Object.isExtensible(e)?0:Kd(od(e))}function ir(e){return Un(e)?e:Jo(e,!1,iu,Hd,su)}function au(e){return Jo(e,!1,Md,$d,ru)}function lu(e){return Jo(e,!0,Ld,Vd,ou)}function Jo(e,t,n,i,s){if(!le(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const r=s.get(e);if(r)return r;const o=zd(e);if(o===0)return e;const l=new Proxy(e,o===2?i:n);return s.set(e,l),l}function kn(e){return Un(e)?kn(e.__v_raw):!!(e&&e.__v_isReactive)}function Un(e){return!!(e&&e.__v_isReadonly)}function Ps(e){return!!(e&&e.__v_isShallow)}function cu(e){return kn(e)||Un(e)}function J(e){const t=e&&e.__v_raw;return t?J(t):e}function uu(e){return Ss(e,"__v_skip",!0),e}const Ii=e=>le(e)?ir(e):e,Xo=e=>le(e)?lu(e):e;function hu(e){Vt&&Ye&&(e=J(e),eu(e.dep||(e.dep=Wo())))}function fu(e,t){e=J(e);const n=e.dep;n&&oo(n)}function Oe(e){return!!(e&&e.__v_isRef===!0)}function Yo(e){return du(e,!1)}function qd(e){return du(e,!0)}function du(e,t){return Oe(e)?e:new Gd(e,t)}class Gd{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:J(t),this._value=n?t:Ii(t)}get value(){return hu(this),this._value}set value(t){const n=this.__v_isShallow||Ps(t)||Un(t);t=n?t:J(t),wi(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:Ii(t),fu(this))}}function je(e){return Oe(e)?e.value:e}const Jd={get:(e,t,n)=>je(Reflect.get(e,t,n)),set:(e,t,n,i)=>{const s=e[t];return Oe(s)&&!Oe(n)?(s.value=n,!0):Reflect.set(e,t,n,i)}};function pu(e){return kn(e)?e:new Proxy(e,Jd)}class Xd{constructor(t,n,i,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Ko(t,()=>{this._dirty||(this._dirty=!0,fu(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const t=J(this);return hu(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Yd(e,t,n=!1){let i,s;const r=K(e);return r?(i=e,s=et):(i=e.get,s=e.set),new Xd(i,s,r||!s,n)}function Wt(e,t,n,i){let s;try{s=i?e(...i):e()}catch(r){sr(r,t,n)}return s}function qe(e,t,n,i){if(K(e)){const r=Wt(e,t,n,i);return r&&zc(r)&&r.catch(o=>{sr(o,t,n)}),r}const s=[];for(let r=0;r<e.length;r++)s.push(qe(e[r],t,n,i));return s}function sr(e,t,n,i=!0){const s=t?t.vnode:null;if(t){let r=t.parent;const o=t.proxy,l=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](e,o,l)===!1)return}r=r.parent}const a=t.appContext.config.errorHandler;if(a){Wt(a,null,10,[e,o,l]);return}}Qd(e,n,s,i)}function Qd(e,t,n,i=!0){console.error(e)}let Ti=!1,ao=!1;const Se=[];let ct=0;const Nn=[];let Et=null,rn=0;const gu=Promise.resolve();let Qo=null;function mu(e){const t=Qo||gu;return e?t.then(this?e.bind(this):e):t}function Zd(e){let t=ct+1,n=Se.length;for(;t<n;){const i=t+n>>>1;Ai(Se[i])<e?t=i+1:n=i}return t}function Zo(e){(!Se.length||!Se.includes(e,Ti&&e.allowRecurse?ct+1:ct))&&(e.id==null?Se.push(e):Se.splice(Zd(e.id),0,e),_u())}function _u(){!Ti&&!ao&&(ao=!0,Qo=gu.then(yu))}function ep(e){const t=Se.indexOf(e);t>ct&&Se.splice(t,1)}function tp(e){j(e)?Nn.push(...e):(!Et||!Et.includes(e,e.allowRecurse?rn+1:rn))&&Nn.push(e),_u()}function cl(e,t=Ti?ct+1:0){for(;t<Se.length;t++){const n=Se[t];n&&n.pre&&(Se.splice(t,1),t--,n())}}function vu(e){if(Nn.length){const t=[...new Set(Nn)];if(Nn.length=0,Et){Et.push(...t);return}for(Et=t,Et.sort((n,i)=>Ai(n)-Ai(i)),rn=0;rn<Et.length;rn++)Et[rn]();Et=null,rn=0}}const Ai=e=>e.id==null?1/0:e.id,np=(e,t)=>{const n=Ai(e)-Ai(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function yu(e){ao=!1,Ti=!0,Se.sort(np);const t=et;try{for(ct=0;ct<Se.length;ct++){const n=Se[ct];n&&n.active!==!1&&Wt(n,null,14)}}finally{ct=0,Se.length=0,vu(),Ti=!1,Qo=null,(Se.length||Nn.length)&&yu()}}function ip(e,t,...n){if(e.isUnmounted)return;const i=e.vnode.props||ce;let s=n;const r=t.startsWith("update:"),o=r&&t.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:p}=i[u]||ce;p&&(s=n.map(m=>_e(m)?m.trim():m)),d&&(s=n.map(Rs))}let l,a=i[l=kr(t)]||i[l=kr(gt(t))];!a&&r&&(a=i[l=kr(Wn(t))]),a&&qe(a,e,6,s);const c=i[l+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,qe(c,e,6,s)}}function Eu(e,t,n=!1){const i=t.emitsCache,s=i.get(e);if(s!==void 0)return s;const r=e.emits;let o={},l=!1;if(!K(e)){const a=c=>{const u=Eu(c,t,!0);u&&(l=!0,me(o,u))};!n&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}return!r&&!l?(le(e)&&i.set(e,null),null):(j(r)?r.forEach(a=>o[a]=null):me(o,r),le(e)&&i.set(e,o),o)}function rr(e,t){return!e||!Ys(t)?!1:(t=t.slice(2).replace(/Once$/,""),G(e,t[0].toLowerCase()+t.slice(1))||G(e,Wn(t))||G(e,t))}let Ve=null,or=null;function Os(e){const t=Ve;return Ve=e,or=e&&e.type.__scopeId||null,t}function sp(e){or=e}function rp(){or=null}function nn(e,t=Ve,n){if(!t||e._n)return e;const i=(...s)=>{i._d&&wl(-1);const r=Os(t);let o;try{o=e(...s)}finally{Os(r),i._d&&wl(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Nr(e){const{type:t,vnode:n,proxy:i,withProxy:s,props:r,propsOptions:[o],slots:l,attrs:a,emit:c,render:u,renderCache:d,data:p,setupState:m,ctx:T,inheritAttrs:C}=e;let x,O;const D=Os(e);try{if(n.shapeFlag&4){const k=s||i;x=lt(u.call(k,k,d,r,m,p,T)),O=a}else{const k=t;x=lt(k.length>1?k(r,{attrs:a,slots:l,emit:c}):k(r,null)),O=t.props?a:op(a)}}catch(k){gi.length=0,sr(k,e,1),x=ge(tt)}let V=x;if(O&&C!==!1){const k=Object.keys(O),{shapeFlag:ee}=V;k.length&&ee&7&&(o&&k.some(Bo)&&(O=ap(O,o)),V=Jt(V,O))}return n.dirs&&(V=Jt(V),V.dirs=V.dirs?V.dirs.concat(n.dirs):n.dirs),n.transition&&(V.transition=n.transition),x=V,Os(D),x}const op=e=>{let t;for(const n in e)(n==="class"||n==="style"||Ys(n))&&((t||(t={}))[n]=e[n]);return t},ap=(e,t)=>{const n={};for(const i in e)(!Bo(i)||!(i.slice(9)in t))&&(n[i]=e[i]);return n};function lp(e,t,n){const{props:i,children:s,component:r}=e,{props:o,children:l,patchFlag:a}=t,c=r.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return i?ul(i,o,c):!!o;if(a&8){const u=t.dynamicProps;for(let d=0;d<u.length;d++){const p=u[d];if(o[p]!==i[p]&&!rr(c,p))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:i===o?!1:i?o?ul(i,o,c):!0:!!o;return!1}function ul(e,t,n){const i=Object.keys(t);if(i.length!==Object.keys(e).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(t[r]!==e[r]&&!rr(n,r))return!0}return!1}function cp({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const up=e=>e.__isSuspense;function hp(e,t){t&&t.pendingBranch?j(e)?t.effects.push(...e):t.effects.push(e):tp(e)}const cs={};function _s(e,t,n){return wu(e,t,n)}function wu(e,t,{immediate:n,deep:i,flush:s,onTrack:r,onTrigger:o}=ce){var l;const a=Ed()===((l=Ee)==null?void 0:l.scope)?Ee:null;let c,u=!1,d=!1;if(Oe(e)?(c=()=>e.value,u=Ps(e)):kn(e)?(c=()=>e,i=!0):j(e)?(d=!0,u=e.some(k=>kn(k)||Ps(k)),c=()=>e.map(k=>{if(Oe(k))return k.value;if(kn(k))return cn(k);if(K(k))return Wt(k,a,2)})):K(e)?t?c=()=>Wt(e,a,2):c=()=>{if(!(a&&a.isUnmounted))return p&&p(),qe(e,a,3,[m])}:c=et,t&&i){const k=c;c=()=>cn(k())}let p,m=k=>{p=D.onStop=()=>{Wt(k,a,4)}},T;if(bi)if(m=et,t?n&&qe(t,a,3,[c(),d?[]:void 0,m]):c(),s==="sync"){const k=lg();T=k.__watcherHandles||(k.__watcherHandles=[])}else return et;let C=d?new Array(e.length).fill(cs):cs;const x=()=>{if(D.active)if(t){const k=D.run();(i||u||(d?k.some((ee,he)=>wi(ee,C[he])):wi(k,C)))&&(p&&p(),qe(t,a,3,[k,C===cs?void 0:d&&C[0]===cs?[]:C,m]),C=k)}else D.run()};x.allowRecurse=!!t;let O;s==="sync"?O=x:s==="post"?O=()=>Fe(x,a&&a.suspense):(x.pre=!0,a&&(x.id=a.uid),O=()=>Zo(x));const D=new Ko(c,O);t?n?x():C=D.run():s==="post"?Fe(D.run.bind(D),a&&a.suspense):D.run();const V=()=>{D.stop(),a&&a.scope&&Ho(a.scope.effects,D)};return T&&T.push(V),V}function fp(e,t,n){const i=this.proxy,s=_e(e)?e.includes(".")?Iu(i,e):()=>i[e]:e.bind(i,i);let r;K(t)?r=t:(r=t.handler,n=t);const o=Ee;Fn(this);const l=wu(s,r.bind(i),n);return o?Fn(o):dn(),l}function Iu(e,t){const n=t.split(".");return()=>{let i=e;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}function cn(e,t){if(!le(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),Oe(e))cn(e.value,t);else if(j(e))for(let n=0;n<e.length;n++)cn(e[n],t);else if(Qs(e)||On(e))e.forEach(n=>{cn(n,t)});else if(Gc(e))for(const n in e)cn(e[n],t);return e}function fw(e,t){const n=Ve;if(n===null)return e;const i=hr(n)||n.proxy,s=e.dirs||(e.dirs=[]);for(let r=0;r<t.length;r++){let[o,l,a,c=ce]=t[r];o&&(K(o)&&(o={mounted:o,updated:o}),o.deep&&cn(l),s.push({dir:o,instance:i,value:l,oldValue:void 0,arg:a,modifiers:c}))}return e}function Qt(e,t,n,i){const s=e.dirs,r=t&&t.dirs;for(let o=0;o<s.length;o++){const l=s[o];r&&(l.oldValue=r[o].value);let a=l.dir[i];a&&(Kn(),qe(a,n,8,[e.el,l,e,t]),zn())}}function dp(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ea(()=>{e.isMounted=!0}),Ru(()=>{e.isUnmounting=!0}),e}const Ke=[Function,Array],Tu={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ke,onEnter:Ke,onAfterEnter:Ke,onEnterCancelled:Ke,onBeforeLeave:Ke,onLeave:Ke,onAfterLeave:Ke,onLeaveCancelled:Ke,onBeforeAppear:Ke,onAppear:Ke,onAfterAppear:Ke,onAppearCancelled:Ke},pp={name:"BaseTransition",props:Tu,setup(e,{slots:t}){const n=eg(),i=dp();let s;return()=>{const r=t.default&&Cu(t.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const C of r)if(C.type!==tt){o=C;break}}const l=J(e),{mode:a}=l;if(i.isLeaving)return Dr(o);const c=hl(o);if(!c)return Dr(o);const u=lo(c,l,i,n);co(c,u);const d=n.subTree,p=d&&hl(d);let m=!1;const{getTransitionKey:T}=c.type;if(T){const C=T();s===void 0?s=C:C!==s&&(s=C,m=!0)}if(p&&p.type!==tt&&(!on(c,p)||m)){const C=lo(p,l,i,n);if(co(p,C),a==="out-in")return i.isLeaving=!0,C.afterLeave=()=>{i.isLeaving=!1,n.update.active!==!1&&n.update()},Dr(o);a==="in-out"&&c.type!==tt&&(C.delayLeave=(x,O,D)=>{const V=Au(i,p);V[String(p.key)]=p,x._leaveCb=()=>{O(),x._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=D})}return o}}},gp=pp;function Au(e,t){const{leavingVNodes:n}=e;let i=n.get(t.type);return i||(i=Object.create(null),n.set(t.type,i)),i}function lo(e,t,n,i){const{appear:s,mode:r,persisted:o=!1,onBeforeEnter:l,onEnter:a,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:d,onLeave:p,onAfterLeave:m,onLeaveCancelled:T,onBeforeAppear:C,onAppear:x,onAfterAppear:O,onAppearCancelled:D}=t,V=String(e.key),k=Au(n,e),ee=(W,te)=>{W&&qe(W,i,9,te)},he=(W,te)=>{const X=te[1];ee(W,te),j(W)?W.every(ye=>ye.length<=1)&&X():W.length<=1&&X()},ve={mode:r,persisted:o,beforeEnter(W){let te=l;if(!n.isMounted)if(s)te=C||l;else return;W._leaveCb&&W._leaveCb(!0);const X=k[V];X&&on(e,X)&&X.el._leaveCb&&X.el._leaveCb(),ee(te,[W])},enter(W){let te=a,X=c,ye=u;if(!n.isMounted)if(s)te=x||a,X=O||c,ye=D||u;else return;let L=!1;const ne=W._enterCb=Le=>{L||(L=!0,Le?ee(ye,[W]):ee(X,[W]),ve.delayedLeave&&ve.delayedLeave(),W._enterCb=void 0)};te?he(te,[W,ne]):ne()},leave(W,te){const X=String(e.key);if(W._enterCb&&W._enterCb(!0),n.isUnmounting)return te();ee(d,[W]);let ye=!1;const L=W._leaveCb=ne=>{ye||(ye=!0,te(),ne?ee(T,[W]):ee(m,[W]),W._leaveCb=void 0,k[X]===e&&delete k[X])};k[X]=e,p?he(p,[W,L]):L()},clone(W){return lo(W,t,n,i)}};return ve}function Dr(e){if(ar(e))return e=Jt(e),e.children=null,e}function hl(e){return ar(e)?e.children?e.children[0]:void 0:e}function co(e,t){e.shapeFlag&6&&e.component?co(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Cu(e,t=!1,n){let i=[],s=0;for(let r=0;r<e.length;r++){let o=e[r];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===at?(o.patchFlag&128&&s++,i=i.concat(Cu(o.children,t,l))):(t||o.type!==tt)&&i.push(l!=null?Jt(o,{key:l}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}function bu(e,t){return K(e)?(()=>me({name:e.name},t,{setup:e}))():e}const vs=e=>!!e.type.__asyncLoader,ar=e=>e.type.__isKeepAlive;function mp(e,t){Su(e,"a",t)}function _p(e,t){Su(e,"da",t)}function Su(e,t,n=Ee){const i=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(lr(t,i,n),n){let s=n.parent;for(;s&&s.parent;)ar(s.parent.vnode)&&vp(i,t,n,s),s=s.parent}}function vp(e,t,n,i){const s=lr(t,e,i,!0);Pu(()=>{Ho(i[t],s)},n)}function lr(e,t,n=Ee,i=!1){if(n){const s=n[e]||(n[e]=[]),r=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Kn(),Fn(n);const l=qe(t,n,e,o);return dn(),zn(),l});return i?s.unshift(r):s.push(r),r}}const Rt=e=>(t,n=Ee)=>(!bi||e==="sp")&&lr(e,(...i)=>t(...i),n),yp=Rt("bm"),ea=Rt("m"),Ep=Rt("bu"),wp=Rt("u"),Ru=Rt("bum"),Pu=Rt("um"),Ip=Rt("sp"),Tp=Rt("rtg"),Ap=Rt("rtc");function Cp(e,t=Ee){lr("ec",e,t)}const Ou="components",ku=Symbol.for("v-ndc");function bp(e){return _e(e)?Sp(Ou,e,!1)||e:e||ku}function Sp(e,t,n=!0,i=!1){const s=Ve||Ee;if(s){const r=s.type;if(e===Ou){const l=rg(r,!1);if(l&&(l===t||l===gt(t)||l===er(gt(t))))return r}const o=fl(s[e]||r[e],t)||fl(s.appContext[e],t);return!o&&i?r:o}}function fl(e,t){return e&&(e[t]||e[gt(t)]||e[er(gt(t))])}const uo=e=>e?Vu(e)?hr(e)||e.proxy:uo(e.parent):null,pi=me(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>uo(e.parent),$root:e=>uo(e.root),$emit:e=>e.emit,$options:e=>ta(e),$forceUpdate:e=>e.f||(e.f=()=>Zo(e.update)),$nextTick:e=>e.n||(e.n=mu.bind(e.proxy)),$watch:e=>fp.bind(e)}),Lr=(e,t)=>e!==ce&&!e.__isScriptSetup&&G(e,t),Rp={get({_:e},t){const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:l,appContext:a}=e;let c;if(t[0]!=="$"){const m=o[t];if(m!==void 0)switch(m){case 1:return i[t];case 2:return s[t];case 4:return n[t];case 3:return r[t]}else{if(Lr(i,t))return o[t]=1,i[t];if(s!==ce&&G(s,t))return o[t]=2,s[t];if((c=e.propsOptions[0])&&G(c,t))return o[t]=3,r[t];if(n!==ce&&G(n,t))return o[t]=4,n[t];ho&&(o[t]=0)}}const u=pi[t];let d,p;if(u)return t==="$attrs"&&Be(e,"get",t),u(e);if((d=l.__cssModules)&&(d=d[t]))return d;if(n!==ce&&G(n,t))return o[t]=4,n[t];if(p=a.config.globalProperties,G(p,t))return p[t]},set({_:e},t,n){const{data:i,setupState:s,ctx:r}=e;return Lr(s,t)?(s[t]=n,!0):i!==ce&&G(i,t)?(i[t]=n,!0):G(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(r[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:i,appContext:s,propsOptions:r}},o){let l;return!!n[o]||e!==ce&&G(e,o)||Lr(t,o)||(l=r[0])&&G(l,o)||G(i,o)||G(pi,o)||G(s.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:G(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function dl(e){return j(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let ho=!0;function Pp(e){const t=ta(e),n=e.proxy,i=e.ctx;ho=!1,t.beforeCreate&&pl(t.beforeCreate,e,"bc");const{data:s,computed:r,methods:o,watch:l,provide:a,inject:c,created:u,beforeMount:d,mounted:p,beforeUpdate:m,updated:T,activated:C,deactivated:x,beforeDestroy:O,beforeUnmount:D,destroyed:V,unmounted:k,render:ee,renderTracked:he,renderTriggered:ve,errorCaptured:W,serverPrefetch:te,expose:X,inheritAttrs:ye,components:L,directives:ne,filters:Le}=t;if(c&&Op(c,i,null),o)for(const oe in o){const Y=o[oe];K(Y)&&(i[oe]=Y.bind(n))}if(s){const oe=s.call(n,n);le(oe)&&(e.data=ir(oe))}if(ho=!0,r)for(const oe in r){const Y=r[oe],vt=K(Y)?Y.bind(n,n):K(Y.get)?Y.get.bind(n,n):et,kt=!K(Y)&&K(Y.set)?Y.set.bind(n):et,st=Qe({get:vt,set:kt});Object.defineProperty(i,oe,{enumerable:!0,configurable:!0,get:()=>st.value,set:Ue=>st.value=Ue})}if(l)for(const oe in l)Nu(l[oe],i,n,oe);if(a){const oe=K(a)?a.call(n):a;Reflect.ownKeys(oe).forEach(Y=>{ys(Y,oe[Y])})}u&&pl(u,e,"c");function fe(oe,Y){j(Y)?Y.forEach(vt=>oe(vt.bind(n))):Y&&oe(Y.bind(n))}if(fe(yp,d),fe(ea,p),fe(Ep,m),fe(wp,T),fe(mp,C),fe(_p,x),fe(Cp,W),fe(Ap,he),fe(Tp,ve),fe(Ru,D),fe(Pu,k),fe(Ip,te),j(X))if(X.length){const oe=e.exposed||(e.exposed={});X.forEach(Y=>{Object.defineProperty(oe,Y,{get:()=>n[Y],set:vt=>n[Y]=vt})})}else e.exposed||(e.exposed={});ee&&e.render===et&&(e.render=ee),ye!=null&&(e.inheritAttrs=ye),L&&(e.components=L),ne&&(e.directives=ne)}function Op(e,t,n=et){j(e)&&(e=fo(e));for(const i in e){const s=e[i];let r;le(s)?"default"in s?r=At(s.from||i,s.default,!0):r=At(s.from||i):r=At(s),Oe(r)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):t[i]=r}}function pl(e,t,n){qe(j(e)?e.map(i=>i.bind(t.proxy)):e.bind(t.proxy),t,n)}function Nu(e,t,n,i){const s=i.includes(".")?Iu(n,i):()=>n[i];if(_e(e)){const r=t[e];K(r)&&_s(s,r)}else if(K(e))_s(s,e.bind(n));else if(le(e))if(j(e))e.forEach(r=>Nu(r,t,n,i));else{const r=K(e.handler)?e.handler.bind(n):t[e.handler];K(r)&&_s(s,r,e)}}function ta(e){const t=e.type,{mixins:n,extends:i}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=e.appContext,l=r.get(t);let a;return l?a=l:!s.length&&!n&&!i?a=t:(a={},s.length&&s.forEach(c=>ks(a,c,o,!0)),ks(a,t,o)),le(t)&&r.set(t,a),a}function ks(e,t,n,i=!1){const{mixins:s,extends:r}=t;r&&ks(e,r,n,!0),s&&s.forEach(o=>ks(e,o,n,!0));for(const o in t)if(!(i&&o==="expose")){const l=kp[o]||n&&n[o];e[o]=l?l(e[o],t[o]):t[o]}return e}const kp={data:gl,props:ml,emits:ml,methods:ai,computed:ai,beforeCreate:Me,created:Me,beforeMount:Me,mounted:Me,beforeUpdate:Me,updated:Me,beforeDestroy:Me,beforeUnmount:Me,destroyed:Me,unmounted:Me,activated:Me,deactivated:Me,errorCaptured:Me,serverPrefetch:Me,components:ai,directives:ai,watch:Dp,provide:gl,inject:Np};function gl(e,t){return t?e?function(){return me(K(e)?e.call(this,this):e,K(t)?t.call(this,this):t)}:t:e}function Np(e,t){return ai(fo(e),fo(t))}function fo(e){if(j(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Me(e,t){return e?[...new Set([].concat(e,t))]:t}function ai(e,t){return e?me(Object.create(null),e,t):t}function ml(e,t){return e?j(e)&&j(t)?[...new Set([...e,...t])]:me(Object.create(null),dl(e),dl(t??{})):t}function Dp(e,t){if(!e)return t;if(!t)return e;const n=me(Object.create(null),e);for(const i in t)n[i]=Me(e[i],t[i]);return n}function Du(){return{app:null,config:{isNativeTag:id,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Lp=0;function Mp(e,t){return function(i,s=null){K(i)||(i=me({},i)),s!=null&&!le(s)&&(s=null);const r=Du(),o=new Set;let l=!1;const a=r.app={_uid:Lp++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:cg,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&K(c.install)?(o.add(c),c.install(a,...u)):K(c)&&(o.add(c),c(a,...u))),a},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),a},component(c,u){return u?(r.components[c]=u,a):r.components[c]},directive(c,u){return u?(r.directives[c]=u,a):r.directives[c]},mount(c,u,d){if(!l){const p=ge(i,s);return p.appContext=r,u&&t?t(p,c):e(p,c,d),l=!0,a._container=c,c.__vue_app__=a,hr(p.component)||p.component.proxy}},unmount(){l&&(e(null,a._container),delete a._container.__vue_app__)},provide(c,u){return r.provides[c]=u,a},runWithContext(c){Ns=a;try{return c()}finally{Ns=null}}};return a}}let Ns=null;function ys(e,t){if(Ee){let n=Ee.provides;const i=Ee.parent&&Ee.parent.provides;i===n&&(n=Ee.provides=Object.create(i)),n[e]=t}}function At(e,t,n=!1){const i=Ee||Ve;if(i||Ns){const s=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:Ns._context.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&K(t)?t.call(i&&i.proxy):t}}function xp(e,t,n,i=!1){const s={},r={};Ss(r,ur,1),e.propsDefaults=Object.create(null),Lu(e,t,s,r);for(const o in e.propsOptions[0])o in s||(s[o]=void 0);n?e.props=i?s:au(s):e.type.props?e.props=s:e.props=r,e.attrs=r}function Up(e,t,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=e,l=J(s),[a]=e.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let d=0;d<u.length;d++){let p=u[d];if(rr(e.emitsOptions,p))continue;const m=t[p];if(a)if(G(r,p))m!==r[p]&&(r[p]=m,c=!0);else{const T=gt(p);s[T]=po(a,l,T,m,e,!1)}else m!==r[p]&&(r[p]=m,c=!0)}}}else{Lu(e,t,s,r)&&(c=!0);let u;for(const d in l)(!t||!G(t,d)&&((u=Wn(d))===d||!G(t,u)))&&(a?n&&(n[d]!==void 0||n[u]!==void 0)&&(s[d]=po(a,l,d,void 0,e,!0)):delete s[d]);if(r!==l)for(const d in r)(!t||!G(t,d))&&(delete r[d],c=!0)}c&&Ct(e,"set","$attrs")}function Lu(e,t,n,i){const[s,r]=e.propsOptions;let o=!1,l;if(t)for(let a in t){if(gs(a))continue;const c=t[a];let u;s&&G(s,u=gt(a))?!r||!r.includes(u)?n[u]=c:(l||(l={}))[u]=c:rr(e.emitsOptions,a)||(!(a in i)||c!==i[a])&&(i[a]=c,o=!0)}if(r){const a=J(n),c=l||ce;for(let u=0;u<r.length;u++){const d=r[u];n[d]=po(s,a,d,c[d],e,!G(c,d))}}return o}function po(e,t,n,i,s,r){const o=e[n];if(o!=null){const l=G(o,"default");if(l&&i===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&K(a)){const{propsDefaults:c}=s;n in c?i=c[n]:(Fn(s),i=c[n]=a.call(null,t),dn())}else i=a}o[0]&&(r&&!l?i=!1:o[1]&&(i===""||i===Wn(n))&&(i=!0))}return i}function Mu(e,t,n=!1){const i=t.propsCache,s=i.get(e);if(s)return s;const r=e.props,o={},l=[];let a=!1;if(!K(e)){const u=d=>{a=!0;const[p,m]=Mu(d,t,!0);me(o,p),m&&l.push(...m)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!r&&!a)return le(e)&&i.set(e,Pn),Pn;if(j(r))for(let u=0;u<r.length;u++){const d=gt(r[u]);_l(d)&&(o[d]=ce)}else if(r)for(const u in r){const d=gt(u);if(_l(d)){const p=r[u],m=o[d]=j(p)||K(p)?{type:p}:me({},p);if(m){const T=El(Boolean,m.type),C=El(String,m.type);m[0]=T>-1,m[1]=C<0||T<C,(T>-1||G(m,"default"))&&l.push(d)}}}const c=[o,l];return le(e)&&i.set(e,c),c}function _l(e){return e[0]!=="$"}function vl(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function yl(e,t){return vl(e)===vl(t)}function El(e,t){return j(t)?t.findIndex(n=>yl(n,e)):K(t)&&yl(t,e)?0:-1}const xu=e=>e[0]==="_"||e==="$stable",na=e=>j(e)?e.map(lt):[lt(e)],Fp=(e,t,n)=>{if(t._n)return t;const i=nn((...s)=>na(t(...s)),n);return i._c=!1,i},Uu=(e,t,n)=>{const i=e._ctx;for(const s in e){if(xu(s))continue;const r=e[s];if(K(r))t[s]=Fp(s,r,i);else if(r!=null){const o=na(r);t[s]=()=>o}}},Fu=(e,t)=>{const n=na(t);e.slots.default=()=>n},jp=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=J(t),Ss(t,"_",n)):Uu(t,e.slots={})}else e.slots={},t&&Fu(e,t);Ss(e.slots,ur,1)},Bp=(e,t,n)=>{const{vnode:i,slots:s}=e;let r=!0,o=ce;if(i.shapeFlag&32){const l=t._;l?n&&l===1?r=!1:(me(s,t),!n&&l===1&&delete s._):(r=!t.$stable,Uu(t,s)),o=t}else t&&(Fu(e,t),o={default:1});if(r)for(const l in s)!xu(l)&&!(l in o)&&delete s[l]};function go(e,t,n,i,s=!1){if(j(e)){e.forEach((p,m)=>go(p,t&&(j(t)?t[m]:t),n,i,s));return}if(vs(i)&&!s)return;const r=i.shapeFlag&4?hr(i.component)||i.component.proxy:i.el,o=s?null:r,{i:l,r:a}=e,c=t&&t.r,u=l.refs===ce?l.refs={}:l.refs,d=l.setupState;if(c!=null&&c!==a&&(_e(c)?(u[c]=null,G(d,c)&&(d[c]=null)):Oe(c)&&(c.value=null)),K(a))Wt(a,l,12,[o,u]);else{const p=_e(a),m=Oe(a);if(p||m){const T=()=>{if(e.f){const C=p?G(d,a)?d[a]:u[a]:a.value;s?j(C)&&Ho(C,r):j(C)?C.includes(r)||C.push(r):p?(u[a]=[r],G(d,a)&&(d[a]=u[a])):(a.value=[r],e.k&&(u[e.k]=a.value))}else p?(u[a]=o,G(d,a)&&(d[a]=o)):m&&(a.value=o,e.k&&(u[e.k]=o))};o?(T.id=-1,Fe(T,n)):T()}}}const Fe=hp;function Hp(e){return $p(e)}function $p(e,t){const n=no();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:l,createComment:a,setText:c,setElementText:u,parentNode:d,nextSibling:p,setScopeId:m=et,insertStaticContent:T}=e,C=(h,f,g,_=null,y=null,E=null,R=!1,I=null,A=!!f.dynamicChildren)=>{if(h===f)return;h&&!on(h,f)&&(_=v(h),Ue(h,y,E,!0),h=null),f.patchFlag===-2&&(A=!1,f.dynamicChildren=null);const{type:w,ref:U,shapeFlag:N}=f;switch(w){case cr:x(h,f,g,_);break;case tt:O(h,f,g,_);break;case Es:h==null&&D(f,g,_,R);break;case at:L(h,f,g,_,y,E,R,I,A);break;default:N&1?ee(h,f,g,_,y,E,R,I,A):N&6?ne(h,f,g,_,y,E,R,I,A):(N&64||N&128)&&w.process(h,f,g,_,y,E,R,I,A,b)}U!=null&&y&&go(U,h&&h.ref,E,f||h,!f)},x=(h,f,g,_)=>{if(h==null)i(f.el=l(f.children),g,_);else{const y=f.el=h.el;f.children!==h.children&&c(y,f.children)}},O=(h,f,g,_)=>{h==null?i(f.el=a(f.children||""),g,_):f.el=h.el},D=(h,f,g,_)=>{[h.el,h.anchor]=T(h.children,f,g,_,h.el,h.anchor)},V=({el:h,anchor:f},g,_)=>{let y;for(;h&&h!==f;)y=p(h),i(h,g,_),h=y;i(f,g,_)},k=({el:h,anchor:f})=>{let g;for(;h&&h!==f;)g=p(h),s(h),h=g;s(f)},ee=(h,f,g,_,y,E,R,I,A)=>{R=R||f.type==="svg",h==null?he(f,g,_,y,E,R,I,A):te(h,f,y,E,R,I,A)},he=(h,f,g,_,y,E,R,I)=>{let A,w;const{type:U,props:N,shapeFlag:F,transition:$,dirs:z}=h;if(A=h.el=o(h.type,E,N&&N.is,N),F&8?u(A,h.children):F&16&&W(h.children,A,null,_,y,E&&U!=="foreignObject",R,I),z&&Qt(h,null,_,"created"),ve(A,h,h.scopeId,R,_),N){for(const re in N)re!=="value"&&!gs(re)&&r(A,re,null,N[re],E,h.children,_,y,Ce);"value"in N&&r(A,"value",null,N.value),(w=N.onVnodeBeforeMount)&&ot(w,_,h)}z&&Qt(h,null,_,"beforeMount");const ae=(!y||y&&!y.pendingBranch)&&$&&!$.persisted;ae&&$.beforeEnter(A),i(A,f,g),((w=N&&N.onVnodeMounted)||ae||z)&&Fe(()=>{w&&ot(w,_,h),ae&&$.enter(A),z&&Qt(h,null,_,"mounted")},y)},ve=(h,f,g,_,y)=>{if(g&&m(h,g),_)for(let E=0;E<_.length;E++)m(h,_[E]);if(y){let E=y.subTree;if(f===E){const R=y.vnode;ve(h,R,R.scopeId,R.slotScopeIds,y.parent)}}},W=(h,f,g,_,y,E,R,I,A=0)=>{for(let w=A;w<h.length;w++){const U=h[w]=I?Ut(h[w]):lt(h[w]);C(null,U,f,g,_,y,E,R,I)}},te=(h,f,g,_,y,E,R)=>{const I=f.el=h.el;let{patchFlag:A,dynamicChildren:w,dirs:U}=f;A|=h.patchFlag&16;const N=h.props||ce,F=f.props||ce;let $;g&&Zt(g,!1),($=F.onVnodeBeforeUpdate)&&ot($,g,f,h),U&&Qt(f,h,g,"beforeUpdate"),g&&Zt(g,!0);const z=y&&f.type!=="foreignObject";if(w?X(h.dynamicChildren,w,I,g,_,z,E):R||Y(h,f,I,null,g,_,z,E,!1),A>0){if(A&16)ye(I,f,N,F,g,_,y);else if(A&2&&N.class!==F.class&&r(I,"class",null,F.class,y),A&4&&r(I,"style",N.style,F.style,y),A&8){const ae=f.dynamicProps;for(let re=0;re<ae.length;re++){const pe=ae[re],Je=N[pe],In=F[pe];(In!==Je||pe==="value")&&r(I,pe,Je,In,y,h.children,g,_,Ce)}}A&1&&h.children!==f.children&&u(I,f.children)}else!R&&w==null&&ye(I,f,N,F,g,_,y);(($=F.onVnodeUpdated)||U)&&Fe(()=>{$&&ot($,g,f,h),U&&Qt(f,h,g,"updated")},_)},X=(h,f,g,_,y,E,R)=>{for(let I=0;I<f.length;I++){const A=h[I],w=f[I],U=A.el&&(A.type===at||!on(A,w)||A.shapeFlag&70)?d(A.el):g;C(A,w,U,null,_,y,E,R,!0)}},ye=(h,f,g,_,y,E,R)=>{if(g!==_){if(g!==ce)for(const I in g)!gs(I)&&!(I in _)&&r(h,I,g[I],null,R,f.children,y,E,Ce);for(const I in _){if(gs(I))continue;const A=_[I],w=g[I];A!==w&&I!=="value"&&r(h,I,w,A,R,f.children,y,E,Ce)}"value"in _&&r(h,"value",g.value,_.value)}},L=(h,f,g,_,y,E,R,I,A)=>{const w=f.el=h?h.el:l(""),U=f.anchor=h?h.anchor:l("");let{patchFlag:N,dynamicChildren:F,slotScopeIds:$}=f;$&&(I=I?I.concat($):$),h==null?(i(w,g,_),i(U,g,_),W(f.children,g,U,y,E,R,I,A)):N>0&&N&64&&F&&h.dynamicChildren?(X(h.dynamicChildren,F,g,y,E,R,I),(f.key!=null||y&&f===y.subTree)&&ju(h,f,!0)):Y(h,f,g,U,y,E,R,I,A)},ne=(h,f,g,_,y,E,R,I,A)=>{f.slotScopeIds=I,h==null?f.shapeFlag&512?y.ctx.activate(f,g,_,R,A):Le(f,g,_,y,E,R,A):_t(h,f,A)},Le=(h,f,g,_,y,E,R)=>{const I=h.component=Zp(h,_,y);if(ar(h)&&(I.ctx.renderer=b),tg(I),I.asyncDep){if(y&&y.registerDep(I,fe),!h.el){const A=I.subTree=ge(tt);O(null,A,f,g)}return}fe(I,h,f,g,y,E,R)},_t=(h,f,g)=>{const _=f.component=h.component;if(lp(h,f,g))if(_.asyncDep&&!_.asyncResolved){oe(_,f,g);return}else _.next=f,ep(_.update),_.update();else f.el=h.el,_.vnode=f},fe=(h,f,g,_,y,E,R)=>{const I=()=>{if(h.isMounted){let{next:U,bu:N,u:F,parent:$,vnode:z}=h,ae=U,re;Zt(h,!1),U?(U.el=z.el,oe(h,U,R)):U=z,N&&ms(N),(re=U.props&&U.props.onVnodeBeforeUpdate)&&ot(re,$,U,z),Zt(h,!0);const pe=Nr(h),Je=h.subTree;h.subTree=pe,C(Je,pe,d(Je.el),v(Je),h,y,E),U.el=pe.el,ae===null&&cp(h,pe.el),F&&Fe(F,y),(re=U.props&&U.props.onVnodeUpdated)&&Fe(()=>ot(re,$,U,z),y)}else{let U;const{el:N,props:F}=f,{bm:$,m:z,parent:ae}=h,re=vs(f);if(Zt(h,!1),$&&ms($),!re&&(U=F&&F.onVnodeBeforeMount)&&ot(U,ae,f),Zt(h,!0),N&&Q){const pe=()=>{h.subTree=Nr(h),Q(N,h.subTree,h,y,null)};re?f.type.__asyncLoader().then(()=>!h.isUnmounted&&pe()):pe()}else{const pe=h.subTree=Nr(h);C(null,pe,g,_,h,y,E),f.el=pe.el}if(z&&Fe(z,y),!re&&(U=F&&F.onVnodeMounted)){const pe=f;Fe(()=>ot(U,ae,pe),y)}(f.shapeFlag&256||ae&&vs(ae.vnode)&&ae.vnode.shapeFlag&256)&&h.a&&Fe(h.a,y),h.isMounted=!0,f=g=_=null}},A=h.effect=new Ko(I,()=>Zo(w),h.scope),w=h.update=()=>A.run();w.id=h.uid,Zt(h,!0),w()},oe=(h,f,g)=>{f.component=h;const _=h.vnode.props;h.vnode=f,h.next=null,Up(h,f.props,_,g),Bp(h,f.children,g),Kn(),cl(),zn()},Y=(h,f,g,_,y,E,R,I,A=!1)=>{const w=h&&h.children,U=h?h.shapeFlag:0,N=f.children,{patchFlag:F,shapeFlag:$}=f;if(F>0){if(F&128){kt(w,N,g,_,y,E,R,I,A);return}else if(F&256){vt(w,N,g,_,y,E,R,I,A);return}}$&8?(U&16&&Ce(w,y,E),N!==w&&u(g,N)):U&16?$&16?kt(w,N,g,_,y,E,R,I,A):Ce(w,y,E,!0):(U&8&&u(g,""),$&16&&W(N,g,_,y,E,R,I,A))},vt=(h,f,g,_,y,E,R,I,A)=>{h=h||Pn,f=f||Pn;const w=h.length,U=f.length,N=Math.min(w,U);let F;for(F=0;F<N;F++){const $=f[F]=A?Ut(f[F]):lt(f[F]);C(h[F],$,g,null,y,E,R,I,A)}w>U?Ce(h,y,E,!0,!1,N):W(f,g,_,y,E,R,I,A,N)},kt=(h,f,g,_,y,E,R,I,A)=>{let w=0;const U=f.length;let N=h.length-1,F=U-1;for(;w<=N&&w<=F;){const $=h[w],z=f[w]=A?Ut(f[w]):lt(f[w]);if(on($,z))C($,z,g,null,y,E,R,I,A);else break;w++}for(;w<=N&&w<=F;){const $=h[N],z=f[F]=A?Ut(f[F]):lt(f[F]);if(on($,z))C($,z,g,null,y,E,R,I,A);else break;N--,F--}if(w>N){if(w<=F){const $=F+1,z=$<U?f[$].el:_;for(;w<=F;)C(null,f[w]=A?Ut(f[w]):lt(f[w]),g,z,y,E,R,I,A),w++}}else if(w>F)for(;w<=N;)Ue(h[w],y,E,!0),w++;else{const $=w,z=w,ae=new Map;for(w=z;w<=F;w++){const He=f[w]=A?Ut(f[w]):lt(f[w]);He.key!=null&&ae.set(He.key,w)}let re,pe=0;const Je=F-z+1;let In=!1,Ya=0;const ei=new Array(Je);for(w=0;w<Je;w++)ei[w]=0;for(w=$;w<=N;w++){const He=h[w];if(pe>=Je){Ue(He,y,E,!0);continue}let rt;if(He.key!=null)rt=ae.get(He.key);else for(re=z;re<=F;re++)if(ei[re-z]===0&&on(He,f[re])){rt=re;break}rt===void 0?Ue(He,y,E,!0):(ei[rt-z]=w+1,rt>=Ya?Ya=rt:In=!0,C(He,f[rt],g,null,y,E,R,I,A),pe++)}const Qa=In?Vp(ei):Pn;for(re=Qa.length-1,w=Je-1;w>=0;w--){const He=z+w,rt=f[He],Za=He+1<U?f[He+1].el:_;ei[w]===0?C(null,rt,g,Za,y,E,R,I,A):In&&(re<0||w!==Qa[re]?st(rt,g,Za,2):re--)}}},st=(h,f,g,_,y=null)=>{const{el:E,type:R,transition:I,children:A,shapeFlag:w}=h;if(w&6){st(h.component.subTree,f,g,_);return}if(w&128){h.suspense.move(f,g,_);return}if(w&64){R.move(h,f,g,b);return}if(R===at){i(E,f,g);for(let N=0;N<A.length;N++)st(A[N],f,g,_);i(h.anchor,f,g);return}if(R===Es){V(h,f,g);return}if(_!==2&&w&1&&I)if(_===0)I.beforeEnter(E),i(E,f,g),Fe(()=>I.enter(E),y);else{const{leave:N,delayLeave:F,afterLeave:$}=I,z=()=>i(E,f,g),ae=()=>{N(E,()=>{z(),$&&$()})};F?F(E,z,ae):ae()}else i(E,f,g)},Ue=(h,f,g,_=!1,y=!1)=>{const{type:E,props:R,ref:I,children:A,dynamicChildren:w,shapeFlag:U,patchFlag:N,dirs:F}=h;if(I!=null&&go(I,null,g,h,!0),U&256){f.ctx.deactivate(h);return}const $=U&1&&F,z=!vs(h);let ae;if(z&&(ae=R&&R.onVnodeBeforeUnmount)&&ot(ae,f,h),U&6)is(h.component,g,_);else{if(U&128){h.suspense.unmount(g,_);return}$&&Qt(h,null,f,"beforeUnmount"),U&64?h.type.remove(h,f,g,y,b,_):w&&(E!==at||N>0&&N&64)?Ce(w,f,g,!1,!0):(E===at&&N&384||!y&&U&16)&&Ce(A,f,g),_&&En(h)}(z&&(ae=R&&R.onVnodeUnmounted)||$)&&Fe(()=>{ae&&ot(ae,f,h),$&&Qt(h,null,f,"unmounted")},g)},En=h=>{const{type:f,el:g,anchor:_,transition:y}=h;if(f===at){wn(g,_);return}if(f===Es){k(h);return}const E=()=>{s(g),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(h.shapeFlag&1&&y&&!y.persisted){const{leave:R,delayLeave:I}=y,A=()=>R(g,E);I?I(h.el,E,A):A()}else E()},wn=(h,f)=>{let g;for(;h!==f;)g=p(h),s(h),h=g;s(f)},is=(h,f,g)=>{const{bum:_,scope:y,update:E,subTree:R,um:I}=h;_&&ms(_),y.stop(),E&&(E.active=!1,Ue(R,h,f,g)),I&&Fe(I,f),Fe(()=>{h.isUnmounted=!0},f),f&&f.pendingBranch&&!f.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===f.pendingId&&(f.deps--,f.deps===0&&f.resolve())},Ce=(h,f,g,_=!1,y=!1,E=0)=>{for(let R=E;R<h.length;R++)Ue(h[R],f,g,_,y)},v=h=>h.shapeFlag&6?v(h.component.subTree):h.shapeFlag&128?h.suspense.next():p(h.anchor||h.el),P=(h,f,g)=>{h==null?f._vnode&&Ue(f._vnode,null,null,!0):C(f._vnode||null,h,f,null,null,null,g),cl(),vu(),f._vnode=h},b={p:C,um:Ue,m:st,r:En,mt:Le,mc:W,pc:Y,pbc:X,n:v,o:e};let M,Q;return t&&([M,Q]=t(b)),{render:P,hydrate:M,createApp:Mp(P,M)}}function Zt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function ju(e,t,n=!1){const i=e.children,s=t.children;if(j(i)&&j(s))for(let r=0;r<i.length;r++){const o=i[r];let l=s[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[r]=Ut(s[r]),l.el=o.el),n||ju(o,l)),l.type===cr&&(l.el=o.el)}}function Vp(e){const t=e.slice(),n=[0];let i,s,r,o,l;const a=e.length;for(i=0;i<a;i++){const c=e[i];if(c!==0){if(s=n[n.length-1],e[s]<c){t[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,e[n[l]]<c?r=l+1:o=l;c<e[n[r]]&&(r>0&&(t[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=t[o];return n}const Wp=e=>e.__isTeleport,at=Symbol.for("v-fgt"),cr=Symbol.for("v-txt"),tt=Symbol.for("v-cmt"),Es=Symbol.for("v-stc"),gi=[];let Ze=null;function bn(e=!1){gi.push(Ze=e?null:[])}function Kp(){gi.pop(),Ze=gi[gi.length-1]||null}let Ci=1;function wl(e){Ci+=e}function Bu(e){return e.dynamicChildren=Ci>0?Ze||Pn:null,Kp(),Ci>0&&Ze&&Ze.push(e),e}function ws(e,t,n,i,s,r){return Bu($e(e,t,n,i,s,r,!0))}function Hu(e,t,n,i,s){return Bu(ge(e,t,n,i,s,!0))}function mo(e){return e?e.__v_isVNode===!0:!1}function on(e,t){return e.type===t.type&&e.key===t.key}const ur="__vInternal",$u=({key:e})=>e??null,Is=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?_e(e)||Oe(e)||K(e)?{i:Ve,r:e,k:t,f:!!n}:e:null);function $e(e,t=null,n=null,i=0,s=null,r=e===at?0:1,o=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&$u(t),ref:t&&Is(t),scopeId:or,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ve};return l?(ia(a,n),r&128&&e.normalize(a)):n&&(a.shapeFlag|=_e(n)?8:16),Ci>0&&!o&&Ze&&(a.patchFlag>0||r&6)&&a.patchFlag!==32&&Ze.push(a),a}const ge=zp;function zp(e,t=null,n=null,i=0,s=null,r=!1){if((!e||e===ku)&&(e=tt),mo(e)){const l=Jt(e,t,!0);return n&&ia(l,n),Ci>0&&!r&&Ze&&(l.shapeFlag&6?Ze[Ze.indexOf(e)]=l:Ze.push(l)),l.patchFlag|=-2,l}if(og(e)&&(e=e.__vccOpts),t){t=qp(t);let{class:l,style:a}=t;l&&!_e(l)&&(t.class=$i(l)),le(a)&&(cu(a)&&!j(a)&&(a=me({},a)),t.style=Vo(a))}const o=_e(e)?1:up(e)?128:Wp(e)?64:le(e)?4:K(e)?2:0;return $e(e,t,n,i,s,o,r,!0)}function qp(e){return e?cu(e)||ur in e?me({},e):e:null}function Jt(e,t,n=!1){const{props:i,ref:s,patchFlag:r,children:o}=e,l=t?Xp(i||{},t):i;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&$u(l),ref:t&&t.ref?n&&s?j(s)?s.concat(Is(t)):[s,Is(t)]:Is(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==at?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Jt(e.ssContent),ssFallback:e.ssFallback&&Jt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function li(e=" ",t=0){return ge(cr,null,e,t)}function Gp(e,t){const n=ge(Es,null,e);return n.staticCount=t,n}function Jp(e="",t=!1){return t?(bn(),Hu(tt,null,e)):ge(tt,null,e)}function lt(e){return e==null||typeof e=="boolean"?ge(tt):j(e)?ge(at,null,e.slice()):typeof e=="object"?Ut(e):ge(cr,null,String(e))}function Ut(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Jt(e)}function ia(e,t){let n=0;const{shapeFlag:i}=e;if(t==null)t=null;else if(j(t))n=16;else if(typeof t=="object")if(i&65){const s=t.default;s&&(s._c&&(s._d=!1),ia(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!(ur in t)?t._ctx=Ve:s===3&&Ve&&(Ve.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else K(t)?(t={default:t,_ctx:Ve},n=32):(t=String(t),i&64?(n=16,t=[li(t)]):n=8);e.children=t,e.shapeFlag|=n}function Xp(...e){const t={};for(let n=0;n<e.length;n++){const i=e[n];for(const s in i)if(s==="class")t.class!==i.class&&(t.class=$i([t.class,i.class]));else if(s==="style")t.style=Vo([t.style,i.style]);else if(Ys(s)){const r=t[s],o=i[s];o&&r!==o&&!(j(r)&&r.includes(o))&&(t[s]=r?[].concat(r,o):o)}else s!==""&&(t[s]=i[s])}return t}function ot(e,t,n,i=null){qe(e,t,7,[n,i])}const Yp=Du();let Qp=0;function Zp(e,t,n){const i=e.type,s=(t?t.appContext:e.appContext)||Yp,r={uid:Qp++,vnode:e,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new vd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Mu(i,s),emitsOptions:Eu(i,s),emit:null,emitted:null,propsDefaults:ce,inheritAttrs:i.inheritAttrs,ctx:ce,data:ce,props:ce,attrs:ce,slots:ce,refs:ce,setupState:ce,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=ip.bind(null,r),e.ce&&e.ce(r),r}let Ee=null;const eg=()=>Ee||Ve;let sa,Tn,Il="__VUE_INSTANCE_SETTERS__";(Tn=no()[Il])||(Tn=no()[Il]=[]),Tn.push(e=>Ee=e),sa=e=>{Tn.length>1?Tn.forEach(t=>t(e)):Tn[0](e)};const Fn=e=>{sa(e),e.scope.on()},dn=()=>{Ee&&Ee.scope.off(),sa(null)};function Vu(e){return e.vnode.shapeFlag&4}let bi=!1;function tg(e,t=!1){bi=t;const{props:n,children:i}=e.vnode,s=Vu(e);xp(e,n,s,t),jp(e,i);const r=s?ng(e,t):void 0;return bi=!1,r}function ng(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=uu(new Proxy(e.ctx,Rp));const{setup:i}=n;if(i){const s=e.setupContext=i.length>1?sg(e):null;Fn(e),Kn();const r=Wt(i,e,0,[e.props,s]);if(zn(),dn(),zc(r)){if(r.then(dn,dn),t)return r.then(o=>{Tl(e,o,t)}).catch(o=>{sr(o,e,0)});e.asyncDep=r}else Tl(e,r,t)}else Wu(e,t)}function Tl(e,t,n){K(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:le(t)&&(e.setupState=pu(t)),Wu(e,n)}let Al;function Wu(e,t,n){const i=e.type;if(!e.render){if(!t&&Al&&!i.render){const s=i.template||ta(e).template;if(s){const{isCustomElement:r,compilerOptions:o}=e.appContext.config,{delimiters:l,compilerOptions:a}=i,c=me(me({isCustomElement:r,delimiters:l},o),a);i.render=Al(s,c)}}e.render=i.render||et}Fn(e),Kn(),Pp(e),zn(),dn()}function ig(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return Be(e,"get","$attrs"),t[n]}}))}function sg(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return ig(e)},slots:e.slots,emit:e.emit,expose:t}}function hr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(pu(uu(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in pi)return pi[n](e)},has(t,n){return n in t||n in pi}}))}function rg(e,t=!0){return K(e)?e.displayName||e.name:e.name||t&&e.__name}function og(e){return K(e)&&"__vccOpts"in e}const Qe=(e,t)=>Yd(e,t,bi);function ra(e,t,n){const i=arguments.length;return i===2?le(t)&&!j(t)?mo(t)?ge(e,null,[t]):ge(e,t):ge(e,null,t):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&mo(n)&&(n=[n]),ge(e,t,n))}const ag=Symbol.for("v-scx"),lg=()=>At(ag),cg="3.3.4",ug="http://www.w3.org/2000/svg",an=typeof document<"u"?document:null,Cl=an&&an.createElement("template"),hg={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,i)=>{const s=t?an.createElementNS(ug,e):an.createElement(e,n?{is:n}:void 0);return e==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:e=>an.createTextNode(e),createComment:e=>an.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>an.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,i,s,r){const o=n?n.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{Cl.innerHTML=i?`<svg>${e}</svg>`:e;const l=Cl.content;if(i){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}t.insertBefore(l,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function fg(e,t,n){const i=e._vtc;i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function dg(e,t,n){const i=e.style,s=_e(n);if(n&&!s){if(t&&!_e(t))for(const r in t)n[r]==null&&_o(i,r,"");for(const r in n)_o(i,r,n[r])}else{const r=i.display;s?t!==n&&(i.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(i.display=r)}}const bl=/\s*!important$/;function _o(e,t,n){if(j(n))n.forEach(i=>_o(e,t,i));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const i=pg(e,t);bl.test(n)?e.setProperty(Wn(i),n.replace(bl,""),"important"):e[i]=n}}const Sl=["Webkit","Moz","ms"],Mr={};function pg(e,t){const n=Mr[t];if(n)return n;let i=gt(t);if(i!=="filter"&&i in e)return Mr[t]=i;i=er(i);for(let s=0;s<Sl.length;s++){const r=Sl[s]+i;if(r in e)return Mr[t]=r}return t}const Rl="http://www.w3.org/1999/xlink";function gg(e,t,n,i,s){if(i&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Rl,t.slice(6,t.length)):e.setAttributeNS(Rl,t,n);else{const r=gd(t);n==null||r&&!Jc(n)?e.removeAttribute(t):e.setAttribute(t,r?"":n)}}function mg(e,t,n,i,s,r,o){if(t==="innerHTML"||t==="textContent"){i&&o(i,s,r),e[t]=n??"";return}const l=e.tagName;if(t==="value"&&l!=="PROGRESS"&&!l.includes("-")){e._value=n;const c=l==="OPTION"?e.getAttribute("value"):e.value,u=n??"";c!==u&&(e.value=u),n==null&&e.removeAttribute(t);return}let a=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Jc(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{e[t]=n}catch{}a&&e.removeAttribute(t)}function ln(e,t,n,i){e.addEventListener(t,n,i)}function _g(e,t,n,i){e.removeEventListener(t,n,i)}function vg(e,t,n,i,s=null){const r=e._vei||(e._vei={}),o=r[t];if(i&&o)o.value=i;else{const[l,a]=yg(t);if(i){const c=r[t]=Ig(i,s);ln(e,l,c,a)}else o&&(_g(e,l,o,a),r[t]=void 0)}}const Pl=/(?:Once|Passive|Capture)$/;function yg(e){let t;if(Pl.test(e)){t={};let i;for(;i=e.match(Pl);)e=e.slice(0,e.length-i[0].length),t[i[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Wn(e.slice(2)),t]}let xr=0;const Eg=Promise.resolve(),wg=()=>xr||(Eg.then(()=>xr=0),xr=Date.now());function Ig(e,t){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;qe(Tg(i,n.value),t,5,[i])};return n.value=e,n.attached=wg(),n}function Tg(e,t){if(j(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(i=>s=>!s._stopped&&i&&i(s))}else return t}const Ol=/^on[a-z]/,Ag=(e,t,n,i,s=!1,r,o,l,a)=>{t==="class"?fg(e,i,s):t==="style"?dg(e,n,i):Ys(t)?Bo(t)||vg(e,t,n,i,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Cg(e,t,i,s))?mg(e,t,i,r,o,l,a):(t==="true-value"?e._trueValue=i:t==="false-value"&&(e._falseValue=i),gg(e,t,i,s))};function Cg(e,t,n,i){return i?!!(t==="innerHTML"||t==="textContent"||t in e&&Ol.test(t)&&K(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Ol.test(t)&&_e(n)?!1:t in e}const Dt="transition",ti="animation",oa=(e,{slots:t})=>ra(gp,bg(e),t);oa.displayName="Transition";const Ku={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};oa.props=me({},Tu,Ku);const en=(e,t=[])=>{j(e)?e.forEach(n=>n(...t)):e&&e(...t)},kl=e=>e?j(e)?e.some(t=>t.length>1):e.length>1:!1;function bg(e){const t={};for(const L in e)L in Ku||(t[L]=e[L]);if(e.css===!1)return t;const{name:n="v",type:i,duration:s,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:a=r,appearActiveClass:c=o,appearToClass:u=l,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=e,T=Sg(s),C=T&&T[0],x=T&&T[1],{onBeforeEnter:O,onEnter:D,onEnterCancelled:V,onLeave:k,onLeaveCancelled:ee,onBeforeAppear:he=O,onAppear:ve=D,onAppearCancelled:W=V}=t,te=(L,ne,Le)=>{tn(L,ne?u:l),tn(L,ne?c:o),Le&&Le()},X=(L,ne)=>{L._isLeaving=!1,tn(L,d),tn(L,m),tn(L,p),ne&&ne()},ye=L=>(ne,Le)=>{const _t=L?ve:D,fe=()=>te(ne,L,Le);en(_t,[ne,fe]),Nl(()=>{tn(ne,L?a:r),Lt(ne,L?u:l),kl(_t)||Dl(ne,i,C,fe)})};return me(t,{onBeforeEnter(L){en(O,[L]),Lt(L,r),Lt(L,o)},onBeforeAppear(L){en(he,[L]),Lt(L,a),Lt(L,c)},onEnter:ye(!1),onAppear:ye(!0),onLeave(L,ne){L._isLeaving=!0;const Le=()=>X(L,ne);Lt(L,d),Og(),Lt(L,p),Nl(()=>{L._isLeaving&&(tn(L,d),Lt(L,m),kl(k)||Dl(L,i,x,Le))}),en(k,[L,Le])},onEnterCancelled(L){te(L,!1),en(V,[L])},onAppearCancelled(L){te(L,!0),en(W,[L])},onLeaveCancelled(L){X(L),en(ee,[L])}})}function Sg(e){if(e==null)return null;if(le(e))return[Ur(e.enter),Ur(e.leave)];{const t=Ur(e);return[t,t]}}function Ur(e){return cd(e)}function Lt(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e._vtc||(e._vtc=new Set)).add(t)}function tn(e,t){t.split(/\s+/).forEach(i=>i&&e.classList.remove(i));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function Nl(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Rg=0;function Dl(e,t,n,i){const s=e._endId=++Rg,r=()=>{s===e._endId&&i()};if(n)return setTimeout(r,n);const{type:o,timeout:l,propCount:a}=Pg(e,t);if(!o)return i();const c=o+"end";let u=0;const d=()=>{e.removeEventListener(c,p),r()},p=m=>{m.target===e&&++u>=a&&d()};setTimeout(()=>{u<a&&d()},l+1),e.addEventListener(c,p)}function Pg(e,t){const n=window.getComputedStyle(e),i=T=>(n[T]||"").split(", "),s=i(`${Dt}Delay`),r=i(`${Dt}Duration`),o=Ll(s,r),l=i(`${ti}Delay`),a=i(`${ti}Duration`),c=Ll(l,a);let u=null,d=0,p=0;t===Dt?o>0&&(u=Dt,d=o,p=r.length):t===ti?c>0&&(u=ti,d=c,p=a.length):(d=Math.max(o,c),u=d>0?o>c?Dt:ti:null,p=u?u===Dt?r.length:a.length:0);const m=u===Dt&&/\b(transform|all)(,|$)/.test(i(`${Dt}Property`).toString());return{type:u,timeout:d,propCount:p,hasTransform:m}}function Ll(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,i)=>Ml(n)+Ml(e[i])))}function Ml(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function Og(){return document.body.offsetHeight}const Ds=e=>{const t=e.props["onUpdate:modelValue"]||!1;return j(t)?n=>ms(t,n):t};function kg(e){e.target.composing=!0}function xl(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const dw={created(e,{modifiers:{lazy:t,trim:n,number:i}},s){e._assign=Ds(s);const r=i||s.props&&s.props.type==="number";ln(e,t?"change":"input",o=>{if(o.target.composing)return;let l=e.value;n&&(l=l.trim()),r&&(l=Rs(l)),e._assign(l)}),n&&ln(e,"change",()=>{e.value=e.value.trim()}),t||(ln(e,"compositionstart",kg),ln(e,"compositionend",xl),ln(e,"change",xl))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:i,number:s}},r){if(e._assign=Ds(r),e.composing||document.activeElement===e&&e.type!=="range"&&(n||i&&e.value.trim()===t||(s||e.type==="number")&&Rs(e.value)===t))return;const o=t??"";e.value!==o&&(e.value=o)}},pw={deep:!0,created(e,{value:t,modifiers:{number:n}},i){const s=Qs(t);ln(e,"change",()=>{const r=Array.prototype.filter.call(e.options,o=>o.selected).map(o=>n?Rs(Ls(o)):Ls(o));e._assign(e.multiple?s?new Set(r):r:r[0])}),e._assign=Ds(i)},mounted(e,{value:t}){Ul(e,t)},beforeUpdate(e,t,n){e._assign=Ds(n)},updated(e,{value:t}){Ul(e,t)}};function Ul(e,t){const n=e.multiple;if(!(n&&!j(t)&&!Qs(t))){for(let i=0,s=e.options.length;i<s;i++){const r=e.options[i],o=Ls(r);if(n)j(t)?r.selected=_d(t,o)>-1:r.selected=t.has(o);else if(tr(Ls(r),t)){e.selectedIndex!==i&&(e.selectedIndex=i);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function Ls(e){return"_value"in e?e._value:e.value}const Ng=me({patchProp:Ag},hg);let Fl;function Dg(){return Fl||(Fl=Hp(Ng))}const Lg=(...e)=>{const t=Dg().createApp(...e),{mount:n}=t;return t.mount=i=>{const s=Mg(i);if(!s)return;const r=t._component;!K(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function Mg(e){return _e(e)?document.querySelector(e):e}const xg="/assets/logo0-9d45fb96.png";/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Cn=typeof window<"u";function Ug(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const ie=Object.assign;function Fr(e,t){const n={};for(const i in t){const s=t[i];n[i]=nt(s)?s.map(e):e(s)}return n}const mi=()=>{},nt=Array.isArray,Fg=/\/$/,jg=e=>e.replace(Fg,"");function jr(e,t,n="/"){let i,s={},r="",o="";const l=t.indexOf("#");let a=t.indexOf("?");return l<a&&l>=0&&(a=-1),a>-1&&(i=t.slice(0,a),r=t.slice(a+1,l>-1?l:t.length),s=e(r)),l>-1&&(i=i||t.slice(0,l),o=t.slice(l,t.length)),i=Vg(i??t,n),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:o}}function Bg(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function jl(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Hg(e,t,n){const i=t.matched.length-1,s=n.matched.length-1;return i>-1&&i===s&&jn(t.matched[i],n.matched[s])&&zu(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function jn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function zu(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!$g(e[n],t[n]))return!1;return!0}function $g(e,t){return nt(e)?Bl(e,t):nt(t)?Bl(t,e):e===t}function Bl(e,t){return nt(t)?e.length===t.length&&e.every((n,i)=>n===t[i]):e.length===1&&e[0]===t}function Vg(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),i=e.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=n.length-1,o,l;for(o=0;o<i.length;o++)if(l=i[o],l!==".")if(l==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+i.slice(o-(o===i.length?1:0)).join("/")}var Si;(function(e){e.pop="pop",e.push="push"})(Si||(Si={}));var _i;(function(e){e.back="back",e.forward="forward",e.unknown=""})(_i||(_i={}));function Wg(e){if(!e)if(Cn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),jg(e)}const Kg=/^[^#]+#/;function zg(e,t){return e.replace(Kg,"#")+t}function qg(e,t){const n=document.documentElement.getBoundingClientRect(),i=e.getBoundingClientRect();return{behavior:t.behavior,left:i.left-n.left-(t.left||0),top:i.top-n.top-(t.top||0)}}const fr=()=>({left:window.pageXOffset,top:window.pageYOffset});function Gg(e){let t;if("el"in e){const n=e.el,i=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=qg(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Hl(e,t){return(history.state?history.state.position-t:-1)+e}const vo=new Map;function Jg(e,t){vo.set(e,t)}function Xg(e){const t=vo.get(e);return vo.delete(e),t}let Yg=()=>location.protocol+"//"+location.host;function qu(e,t){const{pathname:n,search:i,hash:s}=t,r=e.indexOf("#");if(r>-1){let l=s.includes(e.slice(r))?e.slice(r).length:1,a=s.slice(l);return a[0]!=="/"&&(a="/"+a),jl(a,"")}return jl(n,e)+i+s}function Qg(e,t,n,i){let s=[],r=[],o=null;const l=({state:p})=>{const m=qu(e,location),T=n.value,C=t.value;let x=0;if(p){if(n.value=m,t.value=p,o&&o===T){o=null;return}x=C?p.position-C.position:0}else i(m);s.forEach(O=>{O(n.value,T,{delta:x,type:Si.pop,direction:x?x>0?_i.forward:_i.back:_i.unknown})})};function a(){o=n.value}function c(p){s.push(p);const m=()=>{const T=s.indexOf(p);T>-1&&s.splice(T,1)};return r.push(m),m}function u(){const{history:p}=window;p.state&&p.replaceState(ie({},p.state,{scroll:fr()}),"")}function d(){for(const p of r)p();r=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:a,listen:c,destroy:d}}function $l(e,t,n,i=!1,s=!1){return{back:e,current:t,forward:n,replaced:i,position:window.history.length,scroll:s?fr():null}}function Zg(e){const{history:t,location:n}=window,i={value:qu(e,n)},s={value:t.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(a,c,u){const d=e.indexOf("#"),p=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+a:Yg()+e+a;try{t[u?"replaceState":"pushState"](c,"",p),s.value=c}catch(m){console.error(m),n[u?"replace":"assign"](p)}}function o(a,c){const u=ie({},t.state,$l(s.value.back,a,s.value.forward,!0),c,{position:s.value.position});r(a,u,!0),i.value=a}function l(a,c){const u=ie({},s.value,t.state,{forward:a,scroll:fr()});r(u.current,u,!0);const d=ie({},$l(i.value,a,null),{position:u.position+1},c);r(a,d,!1),i.value=a}return{location:i,state:s,push:l,replace:o}}function em(e){e=Wg(e);const t=Zg(e),n=Qg(e,t.state,t.location,t.replace);function i(r,o=!0){o||n.pauseListeners(),history.go(r)}const s=ie({location:"",base:e,go:i,createHref:zg.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function tm(e){return typeof e=="string"||e&&typeof e=="object"}function Gu(e){return typeof e=="string"||typeof e=="symbol"}const Mt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ju=Symbol("");var Vl;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Vl||(Vl={}));function Bn(e,t){return ie(new Error,{type:e,[Ju]:!0},t)}function yt(e,t){return e instanceof Error&&Ju in e&&(t==null||!!(e.type&t))}const Wl="[^/]+?",nm={sensitive:!1,strict:!1,start:!0,end:!0},im=/[.+*?^${}()[\]/\\]/g;function sm(e,t){const n=ie({},nm,t),i=[];let s=n.start?"^":"";const r=[];for(const c of e){const u=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let d=0;d<c.length;d++){const p=c[d];let m=40+(n.sensitive?.25:0);if(p.type===0)d||(s+="/"),s+=p.value.replace(im,"\\$&"),m+=40;else if(p.type===1){const{value:T,repeatable:C,optional:x,regexp:O}=p;r.push({name:T,repeatable:C,optional:x});const D=O||Wl;if(D!==Wl){m+=10;try{new RegExp(`(${D})`)}catch(k){throw new Error(`Invalid custom RegExp for param "${T}" (${D}): `+k.message)}}let V=C?`((?:${D})(?:/(?:${D}))*)`:`(${D})`;d||(V=x&&c.length<2?`(?:/${V})`:"/"+V),x&&(V+="?"),s+=V,m+=20,x&&(m+=-8),C&&(m+=-20),D===".*"&&(m+=-50)}u.push(m)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(c){const u=c.match(o),d={};if(!u)return null;for(let p=1;p<u.length;p++){const m=u[p]||"",T=r[p-1];d[T.name]=m&&T.repeatable?m.split("/"):m}return d}function a(c){let u="",d=!1;for(const p of e){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const m of p)if(m.type===0)u+=m.value;else if(m.type===1){const{value:T,repeatable:C,optional:x}=m,O=T in c?c[T]:"";if(nt(O)&&!C)throw new Error(`Provided param "${T}" is an array but it is not repeatable (* or + modifiers)`);const D=nt(O)?O.join("/"):O;if(!D)if(x)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${T}"`);u+=D}}return u||"/"}return{re:o,score:i,keys:r,parse:l,stringify:a}}function rm(e,t){let n=0;for(;n<e.length&&n<t.length;){const i=t[n]-e[n];if(i)return i;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function om(e,t){let n=0;const i=e.score,s=t.score;for(;n<i.length&&n<s.length;){const r=rm(i[n],s[n]);if(r)return r;n++}if(Math.abs(s.length-i.length)===1){if(Kl(i))return 1;if(Kl(s))return-1}return s.length-i.length}function Kl(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const am={type:0,value:""},lm=/[a-zA-Z0-9_]/;function cm(e){if(!e)return[[]];if(e==="/")return[[am]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${c}": ${m}`)}let n=0,i=n;const s=[];let r;function o(){r&&s.push(r),r=[]}let l=0,a,c="",u="";function d(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(a==="*"||a==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):t("Invalid state to consume buffer"),c="")}function p(){c+=a}for(;l<e.length;){if(a=e[l++],a==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:a==="/"?(c&&d(),o()):a===":"?(d(),n=1):p();break;case 4:p(),n=i;break;case 1:a==="("?n=2:lm.test(a)?p():(d(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&l--);break;case 2:a===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:d(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&l--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${c}"`),d(),o(),s}function um(e,t,n){const i=sm(cm(e.path),n),s=ie(i,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function hm(e,t){const n=[],i=new Map;t=Gl({strict:!1,end:!0,sensitive:!1},t);function s(u){return i.get(u)}function r(u,d,p){const m=!p,T=fm(u);T.aliasOf=p&&p.record;const C=Gl(t,u),x=[T];if("alias"in u){const V=typeof u.alias=="string"?[u.alias]:u.alias;for(const k of V)x.push(ie({},T,{components:p?p.record.components:T.components,path:k,aliasOf:p?p.record:T}))}let O,D;for(const V of x){const{path:k}=V;if(d&&k[0]!=="/"){const ee=d.record.path,he=ee[ee.length-1]==="/"?"":"/";V.path=d.record.path+(k&&he+k)}if(O=um(V,d,C),p?p.alias.push(O):(D=D||O,D!==O&&D.alias.push(O),m&&u.name&&!ql(O)&&o(u.name)),T.children){const ee=T.children;for(let he=0;he<ee.length;he++)r(ee[he],O,p&&p.children[he])}p=p||O,(O.record.components&&Object.keys(O.record.components).length||O.record.name||O.record.redirect)&&a(O)}return D?()=>{o(D)}:mi}function o(u){if(Gu(u)){const d=i.get(u);d&&(i.delete(u),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(u);d>-1&&(n.splice(d,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function l(){return n}function a(u){let d=0;for(;d<n.length&&om(u,n[d])>=0&&(u.record.path!==n[d].record.path||!Xu(u,n[d]));)d++;n.splice(d,0,u),u.record.name&&!ql(u)&&i.set(u.record.name,u)}function c(u,d){let p,m={},T,C;if("name"in u&&u.name){if(p=i.get(u.name),!p)throw Bn(1,{location:u});C=p.record.name,m=ie(zl(d.params,p.keys.filter(D=>!D.optional).map(D=>D.name)),u.params&&zl(u.params,p.keys.map(D=>D.name))),T=p.stringify(m)}else if("path"in u)T=u.path,p=n.find(D=>D.re.test(T)),p&&(m=p.parse(T),C=p.record.name);else{if(p=d.name?i.get(d.name):n.find(D=>D.re.test(d.path)),!p)throw Bn(1,{location:u,currentLocation:d});C=p.record.name,m=ie({},d.params,u.params),T=p.stringify(m)}const x=[];let O=p;for(;O;)x.unshift(O.record),O=O.parent;return{name:C,path:T,params:m,matched:x,meta:pm(x)}}return e.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:l,getRecordMatcher:s}}function zl(e,t){const n={};for(const i of t)i in e&&(n[i]=e[i]);return n}function fm(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:dm(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function dm(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const i in e.components)t[i]=typeof n=="object"?n[i]:n;return t}function ql(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function pm(e){return e.reduce((t,n)=>ie(t,n.meta),{})}function Gl(e,t){const n={};for(const i in e)n[i]=i in t?t[i]:e[i];return n}function Xu(e,t){return t.children.some(n=>n===e||Xu(e,n))}const Yu=/#/g,gm=/&/g,mm=/\//g,_m=/=/g,vm=/\?/g,Qu=/\+/g,ym=/%5B/g,Em=/%5D/g,Zu=/%5E/g,wm=/%60/g,eh=/%7B/g,Im=/%7C/g,th=/%7D/g,Tm=/%20/g;function aa(e){return encodeURI(""+e).replace(Im,"|").replace(ym,"[").replace(Em,"]")}function Am(e){return aa(e).replace(eh,"{").replace(th,"}").replace(Zu,"^")}function yo(e){return aa(e).replace(Qu,"%2B").replace(Tm,"+").replace(Yu,"%23").replace(gm,"%26").replace(wm,"`").replace(eh,"{").replace(th,"}").replace(Zu,"^")}function Cm(e){return yo(e).replace(_m,"%3D")}function bm(e){return aa(e).replace(Yu,"%23").replace(vm,"%3F")}function Sm(e){return e==null?"":bm(e).replace(mm,"%2F")}function Ms(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Rm(e){const t={};if(e===""||e==="?")return t;const i=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(Qu," "),o=r.indexOf("="),l=Ms(o<0?r:r.slice(0,o)),a=o<0?null:Ms(r.slice(o+1));if(l in t){let c=t[l];nt(c)||(c=t[l]=[c]),c.push(a)}else t[l]=a}return t}function Jl(e){let t="";for(let n in e){const i=e[n];if(n=Cm(n),i==null){i!==void 0&&(t+=(t.length?"&":"")+n);continue}(nt(i)?i.map(r=>r&&yo(r)):[i&&yo(i)]).forEach(r=>{r!==void 0&&(t+=(t.length?"&":"")+n,r!=null&&(t+="="+r))})}return t}function Pm(e){const t={};for(const n in e){const i=e[n];i!==void 0&&(t[n]=nt(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return t}const Om=Symbol(""),Xl=Symbol(""),la=Symbol(""),nh=Symbol(""),Eo=Symbol("");function ni(){let e=[];function t(i){return e.push(i),()=>{const s=e.indexOf(i);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Ft(e,t,n,i,s){const r=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((o,l)=>{const a=d=>{d===!1?l(Bn(4,{from:n,to:t})):d instanceof Error?l(d):tm(d)?l(Bn(2,{from:t,to:d})):(r&&i.enterCallbacks[s]===r&&typeof d=="function"&&r.push(d),o())},c=e.call(i&&i.instances[s],t,n,a);let u=Promise.resolve(c);e.length<3&&(u=u.then(a)),u.catch(d=>l(d))})}function Br(e,t,n,i){const s=[];for(const r of e)for(const o in r.components){let l=r.components[o];if(!(t!=="beforeRouteEnter"&&!r.instances[o]))if(km(l)){const c=(l.__vccOpts||l)[t];c&&s.push(Ft(c,n,i,r,o))}else{let a=l();s.push(()=>a.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=Ug(c)?c.default:c;r.components[o]=u;const p=(u.__vccOpts||u)[t];return p&&Ft(p,n,i,r,o)()}))}}return s}function km(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Yl(e){const t=At(la),n=At(nh),i=Qe(()=>t.resolve(je(e.to))),s=Qe(()=>{const{matched:a}=i.value,{length:c}=a,u=a[c-1],d=n.matched;if(!u||!d.length)return-1;const p=d.findIndex(jn.bind(null,u));if(p>-1)return p;const m=Ql(a[c-2]);return c>1&&Ql(u)===m&&d[d.length-1].path!==m?d.findIndex(jn.bind(null,a[c-2])):p}),r=Qe(()=>s.value>-1&&Lm(n.params,i.value.params)),o=Qe(()=>s.value>-1&&s.value===n.matched.length-1&&zu(n.params,i.value.params));function l(a={}){return Dm(a)?t[je(e.replace)?"replace":"push"](je(e.to)).catch(mi):Promise.resolve()}return{route:i,href:Qe(()=>i.value.href),isActive:r,isExactActive:o,navigate:l}}const Nm=bu({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Yl,setup(e,{slots:t}){const n=ir(Yl(e)),{options:i}=At(la),s=Qe(()=>({[Zl(e.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Zl(e.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=t.default&&t.default(n);return e.custom?r:ra("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}}),ci=Nm;function Dm(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Lm(e,t){for(const n in t){const i=t[n],s=e[n];if(typeof i=="string"){if(i!==s)return!1}else if(!nt(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function Ql(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Zl=(e,t,n)=>e??t??n,Mm=bu({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const i=At(Eo),s=Qe(()=>e.route||i.value),r=At(Xl,0),o=Qe(()=>{let c=je(r);const{matched:u}=s.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),l=Qe(()=>s.value.matched[o.value]);ys(Xl,Qe(()=>o.value+1)),ys(Om,l),ys(Eo,s);const a=Yo();return _s(()=>[a.value,l.value,e.name],([c,u,d],[p,m,T])=>{u&&(u.instances[d]=c,m&&m!==u&&c&&c===p&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),c&&u&&(!m||!jn(u,m)||!p)&&(u.enterCallbacks[d]||[]).forEach(C=>C(c))},{flush:"post"}),()=>{const c=s.value,u=e.name,d=l.value,p=d&&d.components[u];if(!p)return ec(n.default,{Component:p,route:c});const m=d.props[u],T=m?m===!0?c.params:typeof m=="function"?m(c):m:null,x=ra(p,ie({},T,t,{onVnodeUnmounted:O=>{O.component.isUnmounted&&(d.instances[u]=null)},ref:a}));return ec(n.default,{Component:x,route:c})||x}}});function ec(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const ih=Mm;function xm(e){const t=hm(e.routes,e),n=e.parseQuery||Rm,i=e.stringifyQuery||Jl,s=e.history,r=ni(),o=ni(),l=ni(),a=qd(Mt);let c=Mt;Cn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Fr.bind(null,v=>""+v),d=Fr.bind(null,Sm),p=Fr.bind(null,Ms);function m(v,P){let b,M;return Gu(v)?(b=t.getRecordMatcher(v),M=P):M=v,t.addRoute(M,b)}function T(v){const P=t.getRecordMatcher(v);P&&t.removeRoute(P)}function C(){return t.getRoutes().map(v=>v.record)}function x(v){return!!t.getRecordMatcher(v)}function O(v,P){if(P=ie({},P||a.value),typeof v=="string"){const g=jr(n,v,P.path),_=t.resolve({path:g.path},P),y=s.createHref(g.fullPath);return ie(g,_,{params:p(_.params),hash:Ms(g.hash),redirectedFrom:void 0,href:y})}let b;if("path"in v)b=ie({},v,{path:jr(n,v.path,P.path).path});else{const g=ie({},v.params);for(const _ in g)g[_]==null&&delete g[_];b=ie({},v,{params:d(g)}),P.params=d(P.params)}const M=t.resolve(b,P),Q=v.hash||"";M.params=u(p(M.params));const h=Bg(i,ie({},v,{hash:Am(Q),path:M.path})),f=s.createHref(h);return ie({fullPath:h,hash:Q,query:i===Jl?Pm(v.query):v.query||{}},M,{redirectedFrom:void 0,href:f})}function D(v){return typeof v=="string"?jr(n,v,a.value.path):ie({},v)}function V(v,P){if(c!==v)return Bn(8,{from:P,to:v})}function k(v){return ve(v)}function ee(v){return k(ie(D(v),{replace:!0}))}function he(v){const P=v.matched[v.matched.length-1];if(P&&P.redirect){const{redirect:b}=P;let M=typeof b=="function"?b(v):b;return typeof M=="string"&&(M=M.includes("?")||M.includes("#")?M=D(M):{path:M},M.params={}),ie({query:v.query,hash:v.hash,params:"path"in M?{}:v.params},M)}}function ve(v,P){const b=c=O(v),M=a.value,Q=v.state,h=v.force,f=v.replace===!0,g=he(b);if(g)return ve(ie(D(g),{state:typeof g=="object"?ie({},Q,g.state):Q,force:h,replace:f}),P||b);const _=b;_.redirectedFrom=P;let y;return!h&&Hg(i,M,b)&&(y=Bn(16,{to:_,from:M}),st(M,M,!0,!1)),(y?Promise.resolve(y):X(_,M)).catch(E=>yt(E)?yt(E,2)?E:kt(E):Y(E,_,M)).then(E=>{if(E){if(yt(E,2))return ve(ie({replace:f},D(E.to),{state:typeof E.to=="object"?ie({},Q,E.to.state):Q,force:h}),P||_)}else E=L(_,M,!0,f,Q);return ye(_,M,E),E})}function W(v,P){const b=V(v,P);return b?Promise.reject(b):Promise.resolve()}function te(v){const P=wn.values().next().value;return P&&typeof P.runWithContext=="function"?P.runWithContext(v):v()}function X(v,P){let b;const[M,Q,h]=Um(v,P);b=Br(M.reverse(),"beforeRouteLeave",v,P);for(const g of M)g.leaveGuards.forEach(_=>{b.push(Ft(_,v,P))});const f=W.bind(null,v,P);return b.push(f),Ce(b).then(()=>{b=[];for(const g of r.list())b.push(Ft(g,v,P));return b.push(f),Ce(b)}).then(()=>{b=Br(Q,"beforeRouteUpdate",v,P);for(const g of Q)g.updateGuards.forEach(_=>{b.push(Ft(_,v,P))});return b.push(f),Ce(b)}).then(()=>{b=[];for(const g of h)if(g.beforeEnter)if(nt(g.beforeEnter))for(const _ of g.beforeEnter)b.push(Ft(_,v,P));else b.push(Ft(g.beforeEnter,v,P));return b.push(f),Ce(b)}).then(()=>(v.matched.forEach(g=>g.enterCallbacks={}),b=Br(h,"beforeRouteEnter",v,P),b.push(f),Ce(b))).then(()=>{b=[];for(const g of o.list())b.push(Ft(g,v,P));return b.push(f),Ce(b)}).catch(g=>yt(g,8)?g:Promise.reject(g))}function ye(v,P,b){l.list().forEach(M=>te(()=>M(v,P,b)))}function L(v,P,b,M,Q){const h=V(v,P);if(h)return h;const f=P===Mt,g=Cn?history.state:{};b&&(M||f?s.replace(v.fullPath,ie({scroll:f&&g&&g.scroll},Q)):s.push(v.fullPath,Q)),a.value=v,st(v,P,b,f),kt()}let ne;function Le(){ne||(ne=s.listen((v,P,b)=>{if(!is.listening)return;const M=O(v),Q=he(M);if(Q){ve(ie(Q,{replace:!0}),M).catch(mi);return}c=M;const h=a.value;Cn&&Jg(Hl(h.fullPath,b.delta),fr()),X(M,h).catch(f=>yt(f,12)?f:yt(f,2)?(ve(f.to,M).then(g=>{yt(g,20)&&!b.delta&&b.type===Si.pop&&s.go(-1,!1)}).catch(mi),Promise.reject()):(b.delta&&s.go(-b.delta,!1),Y(f,M,h))).then(f=>{f=f||L(M,h,!1),f&&(b.delta&&!yt(f,8)?s.go(-b.delta,!1):b.type===Si.pop&&yt(f,20)&&s.go(-1,!1)),ye(M,h,f)}).catch(mi)}))}let _t=ni(),fe=ni(),oe;function Y(v,P,b){kt(v);const M=fe.list();return M.length?M.forEach(Q=>Q(v,P,b)):console.error(v),Promise.reject(v)}function vt(){return oe&&a.value!==Mt?Promise.resolve():new Promise((v,P)=>{_t.add([v,P])})}function kt(v){return oe||(oe=!v,Le(),_t.list().forEach(([P,b])=>v?b(v):P()),_t.reset()),v}function st(v,P,b,M){const{scrollBehavior:Q}=e;if(!Cn||!Q)return Promise.resolve();const h=!b&&Xg(Hl(v.fullPath,0))||(M||!b)&&history.state&&history.state.scroll||null;return mu().then(()=>Q(v,P,h)).then(f=>f&&Gg(f)).catch(f=>Y(f,v,P))}const Ue=v=>s.go(v);let En;const wn=new Set,is={currentRoute:a,listening:!0,addRoute:m,removeRoute:T,hasRoute:x,getRoutes:C,resolve:O,options:e,push:k,replace:ee,go:Ue,back:()=>Ue(-1),forward:()=>Ue(1),beforeEach:r.add,beforeResolve:o.add,afterEach:l.add,onError:fe.add,isReady:vt,install(v){const P=this;v.component("RouterLink",ci),v.component("RouterView",ih),v.config.globalProperties.$router=P,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>je(a)}),Cn&&!En&&a.value===Mt&&(En=!0,k(s.location).catch(Q=>{}));const b={};for(const Q in Mt)Object.defineProperty(b,Q,{get:()=>a.value[Q],enumerable:!0});v.provide(la,P),v.provide(nh,au(b)),v.provide(Eo,a);const M=v.unmount;wn.add(v),v.unmount=function(){wn.delete(v),wn.size<1&&(c=Mt,ne&&ne(),ne=null,a.value=Mt,En=!1,oe=!1),M()}}};function Ce(v){return v.reduce((P,b)=>P.then(()=>te(b)),Promise.resolve())}return is}function Um(e,t){const n=[],i=[],s=[],r=Math.max(t.matched.length,e.matched.length);for(let o=0;o<r;o++){const l=t.matched[o];l&&(e.matched.find(c=>jn(c,l))?i.push(l):n.push(l));const a=e.matched[o];a&&(t.matched.find(c=>jn(c,a))||s.push(a))}return[n,i,s]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sh=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let s=e.charCodeAt(i);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&i+1<e.length&&(e.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++i)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},Fm=function(e){const t=[];let n=0,i=0;for(;n<e.length;){const s=e[n++];if(s<128)t[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=e[n++];t[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=e[n++],o=e[n++],l=e[n++],a=((s&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;t[i++]=String.fromCharCode(55296+(a>>10)),t[i++]=String.fromCharCode(56320+(a&1023))}else{const r=e[n++],o=e[n++];t[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return t.join("")},rh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<e.length;s+=3){const r=e[s],o=s+1<e.length,l=o?e[s+1]:0,a=s+2<e.length,c=a?e[s+2]:0,u=r>>2,d=(r&3)<<4|l>>4;let p=(l&15)<<2|c>>6,m=c&63;a||(m=64,o||(p=64)),i.push(n[u],n[d],n[p],n[m])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(sh(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Fm(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<e.length;){const r=n[e.charAt(s++)],l=s<e.length?n[e.charAt(s)]:0;++s;const c=s<e.length?n[e.charAt(s)]:64;++s;const d=s<e.length?n[e.charAt(s)]:64;if(++s,r==null||l==null||c==null||d==null)throw new jm;const p=r<<2|l>>4;if(i.push(p),c!==64){const m=l<<4&240|c>>2;if(i.push(m),d!==64){const T=c<<6&192|d;i.push(T)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class jm extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Bm=function(e){const t=sh(e);return rh.encodeByteArray(t,!0)},xs=function(e){return Bm(e).replace(/\./g,"")},oh=function(e){try{return rh.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $m=()=>Hm().__FIREBASE_DEFAULTS__,Vm=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Wm=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&oh(e[1]);return t&&JSON.parse(t)},ca=()=>{try{return $m()||Vm()||Wm()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},ah=e=>{var t,n;return(n=(t=ca())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Km=e=>{const t=ah(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),i]:[t.substring(0,n),i]},lh=()=>{var e;return(e=ca())===null||e===void 0?void 0:e.config},ch=e=>{var t;return(t=ca())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qm(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=t||"demo-project",s=e.iat||0,r=e.sub||e.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},e),l="";return[xs(JSON.stringify(n)),xs(JSON.stringify(o)),l].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Gm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(De())}function Jm(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Xm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ym(){const e=De();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Qm(){try{return typeof indexedDB=="object"}catch{return!1}}function Zm(){return new Promise((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;t(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e_="FirebaseError";class Pt extends Error{constructor(t,n,i){super(n),this.code=t,this.customData=i,this.name=e_,Object.setPrototypeOf(this,Pt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Vi.prototype.create)}}class Vi{constructor(t,n,i){this.service=t,this.serviceName=n,this.errors=i}create(t,...n){const i=n[0]||{},s=`${this.service}/${t}`,r=this.errors[t],o=r?t_(r,i):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Pt(s,l,i)}}function t_(e,t){return e.replace(n_,(n,i)=>{const s=t[i];return s!=null?String(s):`<${i}?>`})}const n_=/\{\$([^}]+)}/g;function i_(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Us(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const s of n){if(!i.includes(s))return!1;const r=e[s],o=t[s];if(tc(r)&&tc(o)){if(!Us(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function tc(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wi(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach(s=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function ui(e){const t={};return e.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,r]=i.split("=");t[decodeURIComponent(s)]=decodeURIComponent(r)}}),t}function hi(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function s_(e,t){const n=new r_(e,t);return n.subscribe.bind(n)}class r_{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(i=>{this.error(i)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,i){let s;if(t===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");o_(t,["next","error","complete"])?s=t:s={next:t,error:n,complete:i},s.next===void 0&&(s.next=Hr),s.error===void 0&&(s.error=Hr),s.complete===void 0&&(s.complete=Hr);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function o_(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Hr(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(e){return e&&e._delegate?e._delegate:e}class mn{constructor(t,n,i){this.name=t,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const i=new zm;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const i=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(c_(t))try{this.getOrInitializeService({instanceIdentifier:sn})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(t=sn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=sn){return this.instances.has(t)}getOptions(t=sn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);i===l&&o.resolve(s)}return s}onInit(t,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(t),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&t(o,s),()=>{r.delete(t)}}invokeOnInitCallbacks(t,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:l_(t),options:n}),this.instances.set(t,i),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch{}return i||null}normalizeInstanceIdentifier(t=sn){return this.component?this.component.multipleInstances?t:sn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function l_(e){return e===sn?void 0:e}function c_(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new a_(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Z;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(Z||(Z={}));const h_={debug:Z.DEBUG,verbose:Z.VERBOSE,info:Z.INFO,warn:Z.WARN,error:Z.ERROR,silent:Z.SILENT},f_=Z.INFO,d_={[Z.DEBUG]:"log",[Z.VERBOSE]:"log",[Z.INFO]:"info",[Z.WARN]:"warn",[Z.ERROR]:"error"},p_=(e,t,...n)=>{if(t<e.logLevel)return;const i=new Date().toISOString(),s=d_[t];if(s)console[s](`[${i}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ua{constructor(t){this.name=t,this._logLevel=f_,this._logHandler=p_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Z))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?h_[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Z.DEBUG,...t),this._logHandler(this,Z.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Z.VERBOSE,...t),this._logHandler(this,Z.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Z.INFO,...t),this._logHandler(this,Z.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Z.WARN,...t),this._logHandler(this,Z.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Z.ERROR,...t),this._logHandler(this,Z.ERROR,...t)}}const g_=(e,t)=>t.some(n=>e instanceof n);let nc,ic;function m_(){return nc||(nc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function __(){return ic||(ic=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const uh=new WeakMap,wo=new WeakMap,hh=new WeakMap,$r=new WeakMap,ha=new WeakMap;function v_(e){const t=new Promise((n,i)=>{const s=()=>{e.removeEventListener("success",r),e.removeEventListener("error",o)},r=()=>{n(Kt(e.result)),s()},o=()=>{i(e.error),s()};e.addEventListener("success",r),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&uh.set(n,e)}).catch(()=>{}),ha.set(t,e),t}function y_(e){if(wo.has(e))return;const t=new Promise((n,i)=>{const s=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",o),e.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",r),e.addEventListener("error",o),e.addEventListener("abort",o)});wo.set(e,t)}let Io={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return wo.get(e);if(t==="objectStoreNames")return e.objectStoreNames||hh.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Kt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function E_(e){Io=e(Io)}function w_(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const i=e.call(Vr(this),t,...n);return hh.set(i,t.sort?t.sort():[t]),Kt(i)}:__().includes(e)?function(...t){return e.apply(Vr(this),t),Kt(uh.get(this))}:function(...t){return Kt(e.apply(Vr(this),t))}}function I_(e){return typeof e=="function"?w_(e):(e instanceof IDBTransaction&&y_(e),g_(e,m_())?new Proxy(e,Io):e)}function Kt(e){if(e instanceof IDBRequest)return v_(e);if($r.has(e))return $r.get(e);const t=I_(e);return t!==e&&($r.set(e,t),ha.set(t,e)),t}const Vr=e=>ha.get(e);function T_(e,t,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(e,t),l=Kt(o);return i&&o.addEventListener("upgradeneeded",a=>{i(Kt(o.result),a.oldVersion,a.newVersion,Kt(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{r&&a.addEventListener("close",()=>r()),s&&a.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const A_=["get","getKey","getAll","getAllKeys","count"],C_=["put","add","delete","clear"],Wr=new Map;function sc(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Wr.get(t))return Wr.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,s=C_.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||A_.includes(n)))return;const r=async function(o,...l){const a=this.transaction(o,s?"readwrite":"readonly");let c=a.store;return i&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),s&&a.done]))[0]};return Wr.set(t,r),r}E_(e=>({...e,get:(t,n,i)=>sc(t,n)||e.get(t,n,i),has:(t,n)=>!!sc(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(S_(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function S_(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const To="@firebase/app",rc="0.9.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _n=new ua("@firebase/app"),R_="@firebase/app-compat",P_="@firebase/analytics-compat",O_="@firebase/analytics",k_="@firebase/app-check-compat",N_="@firebase/app-check",D_="@firebase/auth",L_="@firebase/auth-compat",M_="@firebase/database",x_="@firebase/database-compat",U_="@firebase/functions",F_="@firebase/functions-compat",j_="@firebase/installations",B_="@firebase/installations-compat",H_="@firebase/messaging",$_="@firebase/messaging-compat",V_="@firebase/performance",W_="@firebase/performance-compat",K_="@firebase/remote-config",z_="@firebase/remote-config-compat",q_="@firebase/storage",G_="@firebase/storage-compat",J_="@firebase/firestore",X_="@firebase/firestore-compat",Y_="firebase",Q_="10.3.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ao="[DEFAULT]",Z_={[To]:"fire-core",[R_]:"fire-core-compat",[O_]:"fire-analytics",[P_]:"fire-analytics-compat",[N_]:"fire-app-check",[k_]:"fire-app-check-compat",[D_]:"fire-auth",[L_]:"fire-auth-compat",[M_]:"fire-rtdb",[x_]:"fire-rtdb-compat",[U_]:"fire-fn",[F_]:"fire-fn-compat",[j_]:"fire-iid",[B_]:"fire-iid-compat",[H_]:"fire-fcm",[$_]:"fire-fcm-compat",[V_]:"fire-perf",[W_]:"fire-perf-compat",[K_]:"fire-rc",[z_]:"fire-rc-compat",[q_]:"fire-gcs",[G_]:"fire-gcs-compat",[J_]:"fire-fst",[X_]:"fire-fst-compat","fire-js":"fire-js",[Y_]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fs=new Map,Co=new Map;function ev(e,t){try{e.container.addComponent(t)}catch(n){_n.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Hn(e){const t=e.name;if(Co.has(t))return _n.debug(`There were multiple attempts to register component ${t}.`),!1;Co.set(t,e);for(const n of Fs.values())ev(n,e);return!0}function fa(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tv={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},zt=new Vi("app","Firebase",tv);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{constructor(t,n,i){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new mn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw zt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qn=Q_;function fh(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const i=Object.assign({name:Ao,automaticDataCollectionEnabled:!1},t),s=i.name;if(typeof s!="string"||!s)throw zt.create("bad-app-name",{appName:String(s)});if(n||(n=lh()),!n)throw zt.create("no-options");const r=Fs.get(s);if(r){if(Us(n,r.options)&&Us(i,r.config))return r;throw zt.create("duplicate-app",{appName:s})}const o=new u_(s);for(const a of Co.values())o.addComponent(a);const l=new nv(n,i,o);return Fs.set(s,l),l}function dh(e=Ao){const t=Fs.get(e);if(!t&&e===Ao&&lh())return fh();if(!t)throw zt.create("no-app",{appName:e});return t}function qt(e,t,n){var i;let s=(i=Z_[e])!==null&&i!==void 0?i:e;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=t.match(/\s|\//);if(r||o){const l=[`Unable to register library "${s}" with version "${t}":`];r&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),_n.warn(l.join(" "));return}Hn(new mn(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iv="firebase-heartbeat-database",sv=1,Ri="firebase-heartbeat-store";let Kr=null;function ph(){return Kr||(Kr=T_(iv,sv,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Ri)}}}).catch(e=>{throw zt.create("idb-open",{originalErrorMessage:e.message})})),Kr}async function rv(e){try{return await(await ph()).transaction(Ri).objectStore(Ri).get(gh(e))}catch(t){if(t instanceof Pt)_n.warn(t.message);else{const n=zt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});_n.warn(n.message)}}}async function oc(e,t){try{const i=(await ph()).transaction(Ri,"readwrite");await i.objectStore(Ri).put(t,gh(e)),await i.done}catch(n){if(n instanceof Pt)_n.warn(n.message);else{const i=zt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});_n.warn(i.message)}}}function gh(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ov=1024,av=30*24*60*60*1e3;class lv{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new uv(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ac();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const r=new Date(s.date).valueOf();return Date.now()-r<=av}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ac(),{heartbeatsToSend:n,unsentEntries:i}=cv(this._heartbeatsCache.heartbeats),s=xs(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function ac(){return new Date().toISOString().substring(0,10)}function cv(e,t=ov){const n=[];let i=e.slice();for(const s of e){const r=n.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),lc(n)>t){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),lc(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class uv{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Qm()?Zm().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await rv(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return oc(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return oc(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function lc(e){return xs(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hv(e){Hn(new mn("platform-logger",t=>new b_(t),"PRIVATE")),Hn(new mn("heartbeat",t=>new lv(t),"PRIVATE")),qt(To,rc,e),qt(To,rc,"esm2017"),qt("fire-js","")}hv("");var fv="firebase",dv="10.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qt(fv,dv,"app");var pv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},S,da=da||{},H=pv||self;function dr(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Ki(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function gv(e){return Object.prototype.hasOwnProperty.call(e,zr)&&e[zr]||(e[zr]=++mv)}var zr="closure_uid_"+(1e9*Math.random()>>>0),mv=0;function _v(e,t,n){return e.call.apply(e.bind,arguments)}function vv(e,t,n){if(!e)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,i),e.apply(t,s)}}return function(){return e.apply(t,arguments)}}function ke(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ke=_v:ke=vv,ke.apply(null,arguments)}function us(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),e.apply(this,i)}}function Ie(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(i,s,r){for(var o=Array(arguments.length-2),l=2;l<arguments.length;l++)o[l-2]=arguments[l];return t.prototype[s].apply(i,o)}}function Xt(){this.s=this.s,this.o=this.o}var yv=0;Xt.prototype.s=!1;Xt.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),yv!=0)&&gv(this)};Xt.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const mh=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function pa(e){const t=e.length;if(0<t){const n=Array(t);for(let i=0;i<t;i++)n[i]=e[i];return n}return[]}function cc(e,t){for(let n=1;n<arguments.length;n++){const i=arguments[n];if(dr(i)){const s=e.length||0,r=i.length||0;e.length=s+r;for(let o=0;o<r;o++)e[s+o]=i[o]}else e.push(i)}}function Ne(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Ne.prototype.h=function(){this.defaultPrevented=!0};var Ev=function(){if(!H.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{H.addEventListener("test",()=>{},t),H.removeEventListener("test",()=>{},t)}catch{}return e}();function Pi(e){return/^[\s\xa0]*$/.test(e)}function pr(){var e=H.navigator;return e&&(e=e.userAgent)?e:""}function ut(e){return pr().indexOf(e)!=-1}function ga(e){return ga[" "](e),e}ga[" "]=function(){};function wv(e,t){var n=py;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var Iv=ut("Opera"),Oi=ut("Trident")||ut("MSIE"),_h=ut("Edge"),bo=_h||Oi,vh=ut("Gecko")&&!(pr().toLowerCase().indexOf("webkit")!=-1&&!ut("Edge"))&&!(ut("Trident")||ut("MSIE"))&&!ut("Edge"),Tv=pr().toLowerCase().indexOf("webkit")!=-1&&!ut("Edge");function yh(){var e=H.document;return e?e.documentMode:void 0}e:{var uc="",qr=function(){var e=pr();if(vh)return/rv:([^\);]+)(\)|;)/.exec(e);if(_h)return/Edge\/([\d\.]+)/.exec(e);if(Oi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(Tv)return/WebKit\/(\S+)/.exec(e);if(Iv)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(qr&&(uc=qr?qr[1]:""),Oi){var hc=yh();if(hc!=null&&hc>parseFloat(uc))break e}}H.document&&Oi&&yh();function ki(e,t){if(Ne.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,i=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(vh){e:{try{ga(t.nodeName);var s=!0;break e}catch{}s=!1}s||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:Av[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&ki.$.h.call(this)}}Ie(ki,Ne);var Av={2:"touch",3:"pen",4:"mouse"};ki.prototype.h=function(){ki.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var zi="closure_listenable_"+(1e6*Math.random()|0),Cv=0;function bv(e,t,n,i,s){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!i,this.la=s,this.key=++Cv,this.fa=this.ia=!1}function gr(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function ma(e,t,n){for(const i in e)t.call(n,e[i],i,e)}function Sv(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function Eh(e){const t={};for(const n in e)t[n]=e[n];return t}const fc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function wh(e,t){let n,i;for(let s=1;s<arguments.length;s++){i=arguments[s];for(n in i)e[n]=i[n];for(let r=0;r<fc.length;r++)n=fc[r],Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}}function mr(e){this.src=e,this.g={},this.h=0}mr.prototype.add=function(e,t,n,i,s){var r=e.toString();e=this.g[r],e||(e=this.g[r]=[],this.h++);var o=Ro(e,t,i,s);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new bv(t,this.src,r,!!i,s),t.ia=n,e.push(t)),t};function So(e,t){var n=t.type;if(n in e.g){var i=e.g[n],s=mh(i,t),r;(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(gr(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Ro(e,t,n,i){for(var s=0;s<e.length;++s){var r=e[s];if(!r.fa&&r.listener==t&&r.capture==!!n&&r.la==i)return s}return-1}var _a="closure_lm_"+(1e6*Math.random()|0),Gr={};function Ih(e,t,n,i,s){if(i&&i.once)return Ah(e,t,n,i,s);if(Array.isArray(t)){for(var r=0;r<t.length;r++)Ih(e,t[r],n,i,s);return null}return n=Ea(n),e&&e[zi]?e.O(t,n,Ki(i)?!!i.capture:!!i,s):Th(e,t,n,!1,i,s)}function Th(e,t,n,i,s,r){if(!t)throw Error("Invalid event type");var o=Ki(s)?!!s.capture:!!s,l=ya(e);if(l||(e[_a]=l=new mr(e)),n=l.add(t,n,i,o,r),n.proxy)return n;if(i=Rv(),n.proxy=i,i.src=e,i.listener=n,e.addEventListener)Ev||(s=o),s===void 0&&(s=!1),e.addEventListener(t.toString(),i,s);else if(e.attachEvent)e.attachEvent(bh(t.toString()),i);else if(e.addListener&&e.removeListener)e.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Rv(){function e(n){return t.call(e.src,e.listener,n)}const t=Pv;return e}function Ah(e,t,n,i,s){if(Array.isArray(t)){for(var r=0;r<t.length;r++)Ah(e,t[r],n,i,s);return null}return n=Ea(n),e&&e[zi]?e.P(t,n,Ki(i)?!!i.capture:!!i,s):Th(e,t,n,!0,i,s)}function Ch(e,t,n,i,s){if(Array.isArray(t))for(var r=0;r<t.length;r++)Ch(e,t[r],n,i,s);else i=Ki(i)?!!i.capture:!!i,n=Ea(n),e&&e[zi]?(e=e.i,t=String(t).toString(),t in e.g&&(r=e.g[t],n=Ro(r,n,i,s),-1<n&&(gr(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete e.g[t],e.h--)))):e&&(e=ya(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Ro(t,n,i,s)),(n=-1<e?t[e]:null)&&va(n))}function va(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[zi])So(t.i,e);else{var n=e.type,i=e.proxy;t.removeEventListener?t.removeEventListener(n,i,e.capture):t.detachEvent?t.detachEvent(bh(n),i):t.addListener&&t.removeListener&&t.removeListener(i),(n=ya(t))?(So(n,e),n.h==0&&(n.src=null,t[_a]=null)):gr(e)}}}function bh(e){return e in Gr?Gr[e]:Gr[e]="on"+e}function Pv(e,t){if(e.fa)e=!0;else{t=new ki(t,this);var n=e.listener,i=e.la||e.src;e.ia&&va(e),e=n.call(i,t)}return e}function ya(e){return e=e[_a],e instanceof mr?e:null}var Jr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ea(e){return typeof e=="function"?e:(e[Jr]||(e[Jr]=function(t){return e.handleEvent(t)}),e[Jr])}function we(){Xt.call(this),this.i=new mr(this),this.S=this,this.J=null}Ie(we,Xt);we.prototype[zi]=!0;we.prototype.removeEventListener=function(e,t,n,i){Ch(this,e,t,n,i)};function Ae(e,t){var n,i=e.J;if(i)for(n=[];i;i=i.J)n.push(i);if(e=e.S,i=t.type||t,typeof t=="string")t=new Ne(t,e);else if(t instanceof Ne)t.target=t.target||e;else{var s=t;t=new Ne(i,e),wh(t,s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=t.g=n[r];s=hs(o,i,!0,t)&&s}if(o=t.g=e,s=hs(o,i,!0,t)&&s,s=hs(o,i,!1,t)&&s,n)for(r=0;r<n.length;r++)o=t.g=n[r],s=hs(o,i,!1,t)&&s}we.prototype.N=function(){if(we.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],i=0;i<n.length;i++)gr(n[i]);delete e.g[t],e.h--}}this.J=null};we.prototype.O=function(e,t,n,i){return this.i.add(String(e),t,!1,n,i)};we.prototype.P=function(e,t,n,i){return this.i.add(String(e),t,!0,n,i)};function hs(e,t,n,i){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var s=!0,r=0;r<t.length;++r){var o=t[r];if(o&&!o.fa&&o.capture==n){var l=o.listener,a=o.la||o.src;o.ia&&So(e.i,o),s=l.call(a,i)!==!1&&s}}return s&&!i.defaultPrevented}var wa=H.JSON.stringify;class Ov{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function kv(){var e=Ia;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Nv{constructor(){this.h=this.g=null}add(t,n){const i=Sh.get();i.set(t,n),this.h?this.h.next=i:this.g=i,this.h=i}}var Sh=new Ov(()=>new Dv,e=>e.reset());class Dv{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Lv(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function Mv(e){H.setTimeout(()=>{throw e},0)}let Ni,Di=!1,Ia=new Nv,Rh=()=>{const e=H.Promise.resolve(void 0);Ni=()=>{e.then(xv)}};var xv=()=>{for(var e;e=kv();){try{e.h.call(e.g)}catch(n){Mv(n)}var t=Sh;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Di=!1};function _r(e,t){we.call(this),this.h=e||1,this.g=t||H,this.j=ke(this.qb,this),this.l=Date.now()}Ie(_r,we);S=_r.prototype;S.ga=!1;S.T=null;S.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ae(this,"tick"),this.ga&&(Ta(this),this.start()))}};S.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ta(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}S.N=function(){_r.$.N.call(this),Ta(this),delete this.g};function Aa(e,t,n){if(typeof e=="function")n&&(e=ke(e,n));else if(e&&typeof e.handleEvent=="function")e=ke(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:H.setTimeout(e,t||0)}function Ph(e){e.g=Aa(()=>{e.g=null,e.i&&(e.i=!1,Ph(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class Uv extends Xt{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Ph(this)}N(){super.N(),this.g&&(H.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Li(e){Xt.call(this),this.h=e,this.g={}}Ie(Li,Xt);var dc=[];function Oh(e,t,n,i){Array.isArray(n)||(n&&(dc[0]=n.toString()),n=dc);for(var s=0;s<n.length;s++){var r=Ih(t,n[s],i||e.handleEvent,!1,e.h||e);if(!r)break;e.g[r.key]=r}}function kh(e){ma(e.g,function(t,n){this.g.hasOwnProperty(n)&&va(t)},e),e.g={}}Li.prototype.N=function(){Li.$.N.call(this),kh(this)};Li.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function vr(){this.g=!0}vr.prototype.Ea=function(){this.g=!1};function Fv(e,t,n,i,s,r){e.info(function(){if(e.g)if(r)for(var o="",l=r.split("&"),a=0;a<l.length;a++){var c=l[a].split("=");if(1<c.length){var u=c[0];c=c[1];var d=u.split("_");o=2<=d.length&&d[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+t+`
`+n+`
`+o})}function jv(e,t,n,i,s,r,o){e.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+t+`
`+n+`
`+r+" "+o})}function Sn(e,t,n,i){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+Hv(e,n)+(i?" "+i:"")})}function Bv(e,t){e.info(function(){return"TIMEOUT: "+t})}vr.prototype.info=function(){};function Hv(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var i=n[e];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return wa(n)}catch{return t}}var Gn={},pc=null;function Ca(){return pc=pc||new we}Gn.Ta="serverreachability";function Nh(e){Ne.call(this,Gn.Ta,e)}Ie(Nh,Ne);function Mi(e){const t=Ca();Ae(t,new Nh(t))}Gn.STAT_EVENT="statevent";function Dh(e,t){Ne.call(this,Gn.STAT_EVENT,e),this.stat=t}Ie(Dh,Ne);function xe(e){const t=Ca();Ae(t,new Dh(t,e))}Gn.Ua="timingevent";function Lh(e,t){Ne.call(this,Gn.Ua,e),this.size=t}Ie(Lh,Ne);function qi(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return H.setTimeout(function(){e()},t)}var ba={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},$v={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Sa(){}Sa.prototype.h=null;function gc(e){return e.h||(e.h=e.i())}function Vv(){}var Gi={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Ra(){Ne.call(this,"d")}Ie(Ra,Ne);function Pa(){Ne.call(this,"c")}Ie(Pa,Ne);var Po;function yr(){}Ie(yr,Sa);yr.prototype.g=function(){return new XMLHttpRequest};yr.prototype.i=function(){return{}};Po=new yr;function Ji(e,t,n,i){this.l=e,this.j=t,this.m=n,this.W=i||1,this.U=new Li(this),this.P=Wv,e=bo?125:void 0,this.V=new _r(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Mh}function Mh(){this.i=null,this.g="",this.h=!1}var Wv=45e3,Oo={},js={};S=Ji.prototype;S.setTimeout=function(e){this.P=e};function ko(e,t,n){e.L=1,e.v=wr(bt(t)),e.s=n,e.S=!0,xh(e,null)}function xh(e,t){e.G=Date.now(),Xi(e),e.A=bt(e.v);var n=e.A,i=e.W;Array.isArray(i)||(i=[String(i)]),Wh(n.i,"t",i),e.C=0,n=e.l.J,e.h=new Mh,e.g=ff(e.l,n?t:null,!e.s),0<e.O&&(e.M=new Uv(ke(e.Pa,e,e.g),e.O)),Oh(e.U,e.g,"readystatechange",e.nb),t=e.I?Eh(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),Mi(),Fv(e.j,e.u,e.A,e.m,e.W,e.s)}S.nb=function(e){e=e.target;const t=this.M;t&&ht(e)==3?t.l():this.Pa(e)};S.Pa=function(e){try{if(e==this.g)e:{const u=ht(this.g);var t=this.g.Ia();const d=this.g.da();if(!(3>u)&&(u!=3||bo||this.g&&(this.h.h||this.g.ja()||yc(this.g)))){this.J||u!=4||t==7||(t==8||0>=d?Mi(3):Mi(2)),Er(this);var n=this.g.da();this.ca=n;t:if(Uh(this)){var i=yc(this.g);e="";var s=i.length,r=ht(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){un(this),vi(this);var o="";break t}this.h.i=new H.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,e+=this.h.i.decode(i[t],{stream:r&&t==s-1});i.splice(0,s),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,jv(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var l,a=this.g;if((l=a.g?a.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Pi(l)){var c=l;break t}}c=null}if(n=c)Sn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,No(this,n);else{this.i=!1,this.o=3,xe(12),un(this),vi(this);break e}}this.S?(Fh(this,u,o),bo&&this.i&&u==3&&(Oh(this.U,this.V,"tick",this.mb),this.V.start())):(Sn(this.j,this.m,o,null),No(this,o)),u==4&&un(this),this.i&&!this.J&&(u==4?lf(this.l,this):(this.i=!1,Xi(this)))}else hy(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,xe(12)):(this.o=0,xe(13)),un(this),vi(this)}}}catch{}finally{}};function Uh(e){return e.g?e.u=="GET"&&e.L!=2&&e.l.Ha:!1}function Fh(e,t,n){let i=!0,s;for(;!e.J&&e.C<n.length;)if(s=Kv(e,n),s==js){t==4&&(e.o=4,xe(14),i=!1),Sn(e.j,e.m,null,"[Incomplete Response]");break}else if(s==Oo){e.o=4,xe(15),Sn(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}else Sn(e.j,e.m,s,null),No(e,s);Uh(e)&&s!=js&&s!=Oo&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,xe(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ma(t),t.M=!0,xe(11))):(Sn(e.j,e.m,n,"[Invalid Chunked Response]"),un(e),vi(e))}S.mb=function(){if(this.g){var e=ht(this.g),t=this.g.ja();this.C<t.length&&(Er(this),Fh(this,e,t),this.i&&e!=4&&Xi(this))}};function Kv(e,t){var n=e.C,i=t.indexOf(`
`,n);return i==-1?js:(n=Number(t.substring(n,i)),isNaN(n)?Oo:(i+=1,i+n>t.length?js:(t=t.slice(i,i+n),e.C=i+n,t)))}S.cancel=function(){this.J=!0,un(this)};function Xi(e){e.Y=Date.now()+e.P,jh(e,e.P)}function jh(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=qi(ke(e.lb,e),t)}function Er(e){e.B&&(H.clearTimeout(e.B),e.B=null)}S.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(Bv(this.j,this.A),this.L!=2&&(Mi(),xe(17)),un(this),this.o=2,vi(this)):jh(this,this.Y-e)};function vi(e){e.l.H==0||e.J||lf(e.l,e)}function un(e){Er(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,Ta(e.V),kh(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function No(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||Do(n.i,e))){if(!e.K&&Do(n.i,e)&&n.H==3){try{var i=n.Ja.g.parse(t)}catch{i=null}if(Array.isArray(i)&&i.length==3){var s=i;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)$s(n),Cr(n);else break e;La(n),xe(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=qi(ke(n.ib,n),6e3));if(1>=qh(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else hn(n,11)}else if((e.K||n.g==e)&&$s(n),!Pi(t))for(s=n.Ja.g.parse(t),t=0;t<s.length;t++){let c=s[t];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const d=c[4];d!=null&&(n.Ga=d,n.l.info("SVER="+n.Ga));const p=c[5];p!=null&&typeof p=="number"&&0<p&&(i=1.5*p,n.L=i,n.l.info("backChannelRequestTimeoutMs_="+i)),i=n;const m=e.g;if(m){const T=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(T){var r=i.i;r.g||T.indexOf("spdy")==-1&&T.indexOf("quic")==-1&&T.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(Oa(r,r.h),r.h=null))}if(i.F){const C=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;C&&(i.Da=C,ue(i.I,i.F,C))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),i=n;var o=e;if(i.wa=hf(i,i.J?i.pa:null,i.Y),o.K){Gh(i.i,o);var l=o,a=i.L;a&&l.setTimeout(a),l.B&&(Er(l),Xi(l)),i.g=o}else of(i);0<n.j.length&&br(n)}else c[0]!="stop"&&c[0]!="close"||hn(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?hn(n,7):Da(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}Mi(4)}catch{}}function zv(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(dr(e)){for(var t=[],n=e.length,i=0;i<n;i++)t.push(e[i]);return t}t=[],n=0;for(i in e)t[n++]=e[i];return t}function qv(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(dr(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const i in e)t[n++]=i;return t}}}function Bh(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(dr(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=qv(e),i=zv(e),s=i.length,r=0;r<s;r++)t.call(void 0,i[r],n&&n[r],e)}var Hh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Gv(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var i=e[n].indexOf("="),s=null;if(0<=i){var r=e[n].substring(0,i);s=e[n].substring(i+1)}else r=e[n];t(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function pn(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof pn){this.h=e.h,Bs(this,e.j),this.s=e.s,this.g=e.g,Hs(this,e.m),this.l=e.l;var t=e.i,n=new xi;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),mc(this,n),this.o=e.o}else e&&(t=String(e).match(Hh))?(this.h=!1,Bs(this,t[1]||"",!0),this.s=fi(t[2]||""),this.g=fi(t[3]||"",!0),Hs(this,t[4]),this.l=fi(t[5]||"",!0),mc(this,t[6]||"",!0),this.o=fi(t[7]||"")):(this.h=!1,this.i=new xi(null,this.h))}pn.prototype.toString=function(){var e=[],t=this.j;t&&e.push(di(t,_c,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(di(t,_c,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(di(n,n.charAt(0)=="/"?Yv:Xv,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",di(n,Zv)),e.join("")};function bt(e){return new pn(e)}function Bs(e,t,n){e.j=n?fi(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Hs(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function mc(e,t,n){t instanceof xi?(e.i=t,ey(e.i,e.h)):(n||(t=di(t,Qv)),e.i=new xi(t,e.h))}function ue(e,t,n){e.i.set(t,n)}function wr(e){return ue(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function fi(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function di(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,Jv),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Jv(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var _c=/[#\/\?@]/g,Xv=/[#\?:]/g,Yv=/[#\?]/g,Qv=/[#\?@]/g,Zv=/#/g;function xi(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Yt(e){e.g||(e.g=new Map,e.h=0,e.i&&Gv(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}S=xi.prototype;S.add=function(e,t){Yt(this),this.i=null,e=Jn(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function $h(e,t){Yt(e),t=Jn(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Vh(e,t){return Yt(e),t=Jn(e,t),e.g.has(t)}S.forEach=function(e,t){Yt(this),this.g.forEach(function(n,i){n.forEach(function(s){e.call(t,s,i,this)},this)},this)};S.ta=function(){Yt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let i=0;i<t.length;i++){const s=e[i];for(let r=0;r<s.length;r++)n.push(t[i])}return n};S.Z=function(e){Yt(this);let t=[];if(typeof e=="string")Vh(this,e)&&(t=t.concat(this.g.get(Jn(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};S.set=function(e,t){return Yt(this),this.i=null,e=Jn(this,e),Vh(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};S.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function Wh(e,t,n){$h(e,t),0<n.length&&(e.i=null,e.g.set(Jn(e,t),pa(n)),e.h+=n.length)}S.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var i=t[n];const r=encodeURIComponent(String(i)),o=this.Z(i);for(i=0;i<o.length;i++){var s=r;o[i]!==""&&(s+="="+encodeURIComponent(String(o[i]))),e.push(s)}}return this.i=e.join("&")};function Jn(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function ey(e,t){t&&!e.j&&(Yt(e),e.i=null,e.g.forEach(function(n,i){var s=i.toLowerCase();i!=s&&($h(this,i),Wh(this,s,n))},e)),e.j=t}var ty=class{constructor(e,t){this.g=e,this.map=t}};function Kh(e){this.l=e||ny,H.PerformanceNavigationTiming?(e=H.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(H.g&&H.g.Ka&&H.g.Ka()&&H.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var ny=10;function zh(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function qh(e){return e.h?1:e.g?e.g.size:0}function Do(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Oa(e,t){e.g?e.g.add(t):e.h=t}function Gh(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Kh.prototype.cancel=function(){if(this.i=Jh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Jh(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return pa(e.i)}var iy=class{stringify(e){return H.JSON.stringify(e,void 0)}parse(e){return H.JSON.parse(e,void 0)}};function sy(){this.g=new iy}function ry(e,t,n){const i=n||"";try{Bh(e,function(s,r){let o=s;Ki(s)&&(o=wa(s)),t.push(i+r+"="+encodeURIComponent(o))})}catch(s){throw t.push(i+"type="+encodeURIComponent("_badmap")),s}}function oy(e,t){const n=new vr;if(H.Image){const i=new Image;i.onload=us(fs,n,i,"TestLoadImage: loaded",!0,t),i.onerror=us(fs,n,i,"TestLoadImage: error",!1,t),i.onabort=us(fs,n,i,"TestLoadImage: abort",!1,t),i.ontimeout=us(fs,n,i,"TestLoadImage: timeout",!1,t),H.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=e}else t(!1)}function fs(e,t,n,i,s){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,s(i)}catch{}}function Ir(e){this.l=e.fc||null,this.j=e.ob||!1}Ie(Ir,Sa);Ir.prototype.g=function(){return new Tr(this.l,this.j)};Ir.prototype.i=function(e){return function(){return e}}({});function Tr(e,t){we.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=ka,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ie(Tr,we);var ka=0;S=Tr.prototype;S.open=function(e,t){if(this.readyState!=ka)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Ui(this)};S.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||H).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};S.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Yi(this)),this.readyState=ka};S.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Ui(this)),this.g&&(this.readyState=3,Ui(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof H.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Xh(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function Xh(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}S.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Yi(this):Ui(this),this.readyState==3&&Xh(this)}};S.Za=function(e){this.g&&(this.response=this.responseText=e,Yi(this))};S.Ya=function(e){this.g&&(this.response=e,Yi(this))};S.ka=function(){this.g&&Yi(this)};function Yi(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Ui(e)}S.setRequestHeader=function(e,t){this.v.append(e,t)};S.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};S.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Ui(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Tr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var ay=H.JSON.parse;function de(e){we.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Yh,this.L=this.M=!1}Ie(de,we);var Yh="",ly=/^https?$/i,cy=["POST","PUT"];S=de.prototype;S.Oa=function(e){this.M=e};S.ha=function(e,t,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Po.g(),this.C=this.u?gc(this.u):gc(Po),this.g.onreadystatechange=ke(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(r){vc(this,r);return}if(e=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)n.set(s,i[s]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const r of i.keys())n.set(r,i.get(r));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),s=H.FormData&&e instanceof H.FormData,!(0<=mh(cy,t))||i||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{ef(this),0<this.B&&((this.L=uy(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ke(this.ua,this)):this.A=Aa(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(r){vc(this,r)}};function uy(e){return Oi&&typeof e.timeout=="number"&&e.ontimeout!==void 0}S.ua=function(){typeof da<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ae(this,"timeout"),this.abort(8))};function vc(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Qh(e),Ar(e)}function Qh(e){e.F||(e.F=!0,Ae(e,"complete"),Ae(e,"error"))}S.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Ae(this,"complete"),Ae(this,"abort"),Ar(this))};S.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ar(this,!0)),de.$.N.call(this)};S.La=function(){this.s||(this.G||this.v||this.l?Zh(this):this.kb())};S.kb=function(){Zh(this)};function Zh(e){if(e.h&&typeof da<"u"&&(!e.C[1]||ht(e)!=4||e.da()!=2)){if(e.v&&ht(e)==4)Aa(e.La,0,e);else if(Ae(e,"readystatechange"),ht(e)==4){e.h=!1;try{const o=e.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var i;if(i=o===0){var s=String(e.I).match(Hh)[1]||null;!s&&H.self&&H.self.location&&(s=H.self.location.protocol.slice(0,-1)),i=!ly.test(s?s.toLowerCase():"")}n=i}if(n)Ae(e,"complete"),Ae(e,"success");else{e.m=6;try{var r=2<ht(e)?e.g.statusText:""}catch{r=""}e.j=r+" ["+e.da()+"]",Qh(e)}}finally{Ar(e)}}}}function Ar(e,t){if(e.g){ef(e);const n=e.g,i=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||Ae(e,"ready");try{n.onreadystatechange=i}catch{}}}function ef(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(H.clearTimeout(e.A),e.A=null)}S.isActive=function(){return!!this.g};function ht(e){return e.g?e.g.readyState:0}S.da=function(){try{return 2<ht(this)?this.g.status:-1}catch{return-1}};S.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};S.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),ay(t)}};function yc(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case Yh:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function hy(e){const t={};e=(e.g&&2<=ht(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let i=0;i<e.length;i++){if(Pi(e[i]))continue;var n=Lv(e[i]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const r=t[s]||[];t[s]=r,r.push(n)}Sv(t,function(i){return i.join(", ")})}S.Ia=function(){return this.m};S.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function tf(e){let t="";return ma(e,function(n,i){t+=i,t+=":",t+=n,t+=`\r
`}),t}function Na(e,t,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=tf(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):ue(e,t,n))}function ii(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function nf(e){this.Ga=0,this.j=[],this.l=new vr,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ii("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ii("baseRetryDelayMs",5e3,e),this.hb=ii("retryDelaySeedMs",1e4,e),this.eb=ii("forwardChannelMaxRetries",2,e),this.xa=ii("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new Kh(e&&e.concurrentRequestLimit),this.Ja=new sy,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}S=nf.prototype;S.ra=8;S.H=1;function Da(e){if(sf(e),e.H==3){var t=e.W++,n=bt(e.I);if(ue(n,"SID",e.K),ue(n,"RID",t),ue(n,"TYPE","terminate"),Qi(e,n),t=new Ji(e,e.l,t),t.L=2,t.v=wr(bt(n)),n=!1,H.navigator&&H.navigator.sendBeacon)try{n=H.navigator.sendBeacon(t.v.toString(),"")}catch{}!n&&H.Image&&(new Image().src=t.v,n=!0),n||(t.g=ff(t.l,null),t.g.ha(t.v)),t.G=Date.now(),Xi(t)}uf(e)}function Cr(e){e.g&&(Ma(e),e.g.cancel(),e.g=null)}function sf(e){Cr(e),e.u&&(H.clearTimeout(e.u),e.u=null),$s(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&H.clearTimeout(e.m),e.m=null)}function br(e){if(!zh(e.i)&&!e.m){e.m=!0;var t=e.Na;Ni||Rh(),Di||(Ni(),Di=!0),Ia.add(t,e),e.C=0}}function fy(e,t){return qh(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=qi(ke(e.Na,e,t),cf(e,e.C)),e.C++,!0)}S.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const s=new Ji(this,this.l,e);let r=this.s;if(this.U&&(r?(r=Eh(r),wh(r,this.U)):r=this.U),this.o!==null||this.O||(s.I=r,r=null),this.P)e:{for(var t=0,n=0;n<this.j.length;n++){t:{var i=this.j[n];if("__data__"in i.map&&(i=i.map.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(t+=i,4096<t){t=n;break e}if(t===4096||n===this.j.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=rf(this,s,t),n=bt(this.I),ue(n,"RID",e),ue(n,"CVER",22),this.F&&ue(n,"X-HTTP-Session-Id",this.F),Qi(this,n),r&&(this.O?t="headers="+encodeURIComponent(String(tf(r)))+"&"+t:this.o&&Na(n,this.o,r)),Oa(this.i,s),this.bb&&ue(n,"TYPE","init"),this.P?(ue(n,"$req",t),ue(n,"SID","null"),s.aa=!0,ko(s,n,null)):ko(s,n,t),this.H=2}}else this.H==3&&(e?Ec(this,e):this.j.length==0||zh(this.i)||Ec(this))};function Ec(e,t){var n;t?n=t.m:n=e.W++;const i=bt(e.I);ue(i,"SID",e.K),ue(i,"RID",n),ue(i,"AID",e.V),Qi(e,i),e.o&&e.s&&Na(i,e.o,e.s),n=new Ji(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=rf(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Oa(e.i,n),ko(n,i,t)}function Qi(e,t){e.na&&ma(e.na,function(n,i){ue(t,i,n)}),e.h&&Bh({},function(n,i){ue(t,i,n)})}function rf(e,t,n){n=Math.min(e.j.length,n);var i=e.h?ke(e.h.Va,e.h,e):null;e:{var s=e.j;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=s[0].g,o.push("ofs="+r)):r=0:o.push("ofs="+r);let l=!0;for(let a=0;a<n;a++){let c=s[a].g;const u=s[a].map;if(c-=r,0>c)r=Math.max(0,s[a].g-100),l=!1;else try{ry(u,o,"req"+c+"_")}catch{i&&i(u)}}if(l){i=o.join("&");break e}}}return e=e.j.splice(0,n),t.F=e,i}function of(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;Ni||Rh(),Di||(Ni(),Di=!0),Ia.add(t,e),e.A=0}}function La(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=qi(ke(e.Ma,e),cf(e,e.A)),e.A++,!0)}S.Ma=function(){if(this.u=null,af(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=qi(ke(this.jb,this),e)}};S.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,xe(10),Cr(this),af(this))};function Ma(e){e.B!=null&&(H.clearTimeout(e.B),e.B=null)}function af(e){e.g=new Ji(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=bt(e.wa);ue(t,"RID","rpc"),ue(t,"SID",e.K),ue(t,"AID",e.V),ue(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&ue(t,"TO",e.qa),ue(t,"TYPE","xmlhttp"),Qi(e,t),e.o&&e.s&&Na(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=wr(bt(t)),n.s=null,n.S=!0,xh(n,e)}S.ib=function(){this.v!=null&&(this.v=null,Cr(this),La(this),xe(19))};function $s(e){e.v!=null&&(H.clearTimeout(e.v),e.v=null)}function lf(e,t){var n=null;if(e.g==t){$s(e),Ma(e),e.g=null;var i=2}else if(Do(e.i,t))n=t.F,Gh(e.i,t),i=1;else return;if(e.H!=0){if(t.i)if(i==1){n=t.s?t.s.length:0,t=Date.now()-t.G;var s=e.C;i=Ca(),Ae(i,new Lh(i,n)),br(e)}else of(e);else if(s=t.o,s==3||s==0&&0<t.ca||!(i==1&&fy(e,t)||i==2&&La(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),s){case 1:hn(e,5);break;case 4:hn(e,10);break;case 3:hn(e,6);break;default:hn(e,2)}}}function cf(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function hn(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var i=ke(e.pb,e);n||(n=new pn("//www.google.com/images/cleardot.gif"),H.location&&H.location.protocol=="http"||Bs(n,"https"),wr(n)),oy(n.toString(),i)}else xe(2);e.H=0,e.h&&e.h.za(t),uf(e),sf(e)}S.pb=function(e){e?(this.l.info("Successfully pinged google.com"),xe(2)):(this.l.info("Failed to ping google.com"),xe(1))};function uf(e){if(e.H=0,e.ma=[],e.h){const t=Jh(e.i);(t.length!=0||e.j.length!=0)&&(cc(e.ma,t),cc(e.ma,e.j),e.i.i.length=0,pa(e.j),e.j.length=0),e.h.ya()}}function hf(e,t,n){var i=n instanceof pn?bt(n):new pn(n);if(i.g!="")t&&(i.g=t+"."+i.g),Hs(i,i.m);else{var s=H.location;i=s.protocol,t=t?t+"."+s.hostname:s.hostname,s=+s.port;var r=new pn(null);i&&Bs(r,i),t&&(r.g=t),s&&Hs(r,s),n&&(r.l=n),i=r}return n=e.F,t=e.Da,n&&t&&ue(i,n,t),ue(i,"VER",e.ra),Qi(e,i),i}function ff(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new de(new Ir({ob:!0})):new de(e.va),t.Oa(e.J),t}S.isActive=function(){return!!this.h&&this.h.isActive(this)};function df(){}S=df.prototype;S.Ba=function(){};S.Aa=function(){};S.za=function(){};S.ya=function(){};S.isActive=function(){return!0};S.Va=function(){};function Ge(e,t){we.call(this),this.g=new nf(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!Pi(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Pi(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Xn(this)}Ie(Ge,we);Ge.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;xe(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=hf(e,null,e.Y),br(e)};Ge.prototype.close=function(){Da(this.g)};Ge.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=wa(e),e=n);t.j.push(new ty(t.fb++,e)),t.H==3&&br(t)};Ge.prototype.N=function(){this.g.h=null,delete this.j,Da(this.g),delete this.g,Ge.$.N.call(this)};function pf(e){Ra.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}Ie(pf,Ra);function gf(){Pa.call(this),this.status=1}Ie(gf,Pa);function Xn(e){this.g=e}Ie(Xn,df);Xn.prototype.Ba=function(){Ae(this.g,"a")};Xn.prototype.Aa=function(e){Ae(this.g,new pf(e))};Xn.prototype.za=function(e){Ae(this.g,new gf)};Xn.prototype.ya=function(){Ae(this.g,"b")};function dy(){this.blockSize=-1}function mt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Ie(mt,dy);mt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Xr(e,t,n){n||(n=0);var i=Array(16);if(typeof t=="string")for(var s=0;16>s;++s)i[s]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(s=0;16>s;++s)i[s]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],s=e.g[2];var r=e.g[3],o=t+(r^n&(s^r))+i[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=r+(s^t&(n^s))+i[1]+3905402710&4294967295,r=t+(o<<12&4294967295|o>>>20),o=s+(n^r&(t^n))+i[2]+606105819&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(t^s&(r^t))+i[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(r^n&(s^r))+i[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=r+(s^t&(n^s))+i[5]+1200080426&4294967295,r=t+(o<<12&4294967295|o>>>20),o=s+(n^r&(t^n))+i[6]+2821735955&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(t^s&(r^t))+i[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(r^n&(s^r))+i[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=r+(s^t&(n^s))+i[9]+2336552879&4294967295,r=t+(o<<12&4294967295|o>>>20),o=s+(n^r&(t^n))+i[10]+4294925233&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(t^s&(r^t))+i[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(r^n&(s^r))+i[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=r+(s^t&(n^s))+i[13]+4254626195&4294967295,r=t+(o<<12&4294967295|o>>>20),o=s+(n^r&(t^n))+i[14]+2792965006&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(t^s&(r^t))+i[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(s^r&(n^s))+i[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(t^n))+i[6]+3225465664&4294967295,r=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(r^t))+i[11]+643717713&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^t&(s^r))+i[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^r&(n^s))+i[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(t^n))+i[10]+38016083&4294967295,r=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(r^t))+i[15]+3634488961&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^t&(s^r))+i[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^r&(n^s))+i[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(t^n))+i[14]+3275163606&4294967295,r=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(r^t))+i[3]+4107603335&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^t&(s^r))+i[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^r&(n^s))+i[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(t^n))+i[2]+4243563512&4294967295,r=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(r^t))+i[7]+1735328473&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^t&(s^r))+i[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(n^s^r)+i[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=r+(t^n^s)+i[8]+2272392833&4294967295,r=t+(o<<11&4294967295|o>>>21),o=s+(r^t^n)+i[11]+1839030562&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^t)+i[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^r)+i[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=r+(t^n^s)+i[4]+1272893353&4294967295,r=t+(o<<11&4294967295|o>>>21),o=s+(r^t^n)+i[7]+4139469664&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^t)+i[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^r)+i[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=r+(t^n^s)+i[0]+3936430074&4294967295,r=t+(o<<11&4294967295|o>>>21),o=s+(r^t^n)+i[3]+3572445317&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^t)+i[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^r)+i[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=r+(t^n^s)+i[12]+3873151461&4294967295,r=t+(o<<11&4294967295|o>>>21),o=s+(r^t^n)+i[15]+530742520&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^t)+i[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(s^(n|~r))+i[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=r+(n^(t|~s))+i[7]+1126891415&4294967295,r=t+(o<<10&4294967295|o>>>22),o=s+(t^(r|~n))+i[14]+2878612391&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~t))+i[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~r))+i[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=r+(n^(t|~s))+i[3]+2399980690&4294967295,r=t+(o<<10&4294967295|o>>>22),o=s+(t^(r|~n))+i[10]+4293915773&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~t))+i[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~r))+i[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=r+(n^(t|~s))+i[15]+4264355552&4294967295,r=t+(o<<10&4294967295|o>>>22),o=s+(t^(r|~n))+i[6]+2734768916&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~t))+i[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~r))+i[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=r+(n^(t|~s))+i[11]+3174756917&4294967295,r=t+(o<<10&4294967295|o>>>22),o=s+(t^(r|~n))+i[2]+718787259&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~t))+i[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+s&4294967295,e.g[3]=e.g[3]+r&4294967295}mt.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,i=this.m,s=this.h,r=0;r<t;){if(s==0)for(;r<=n;)Xr(this,e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<t;)if(i[s++]=e.charCodeAt(r++),s==this.blockSize){Xr(this,i),s=0;break}}else for(;r<t;)if(i[s++]=e[r++],s==this.blockSize){Xr(this,i),s=0;break}}this.h=s,this.i+=t};mt.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var i=0;32>i;i+=8)e[n++]=this.g[t]>>>i&255;return e};function se(e,t){this.h=t;for(var n=[],i=!0,s=e.length-1;0<=s;s--){var r=e[s]|0;i&&r==t||(n[s]=r,i=!1)}this.g=n}var py={};function xa(e){return-128<=e&&128>e?wv(e,function(t){return new se([t|0],0>t?-1:0)}):new se([e|0],0>e?-1:0)}function ft(e){if(isNaN(e)||!isFinite(e))return Dn;if(0>e)return Te(ft(-e));for(var t=[],n=1,i=0;e>=n;i++)t[i]=e/n|0,n*=Lo;return new se(t,0)}function mf(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return Te(mf(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=ft(Math.pow(t,8)),i=Dn,s=0;s<e.length;s+=8){var r=Math.min(8,e.length-s),o=parseInt(e.substring(s,s+r),t);8>r?(r=ft(Math.pow(t,r)),i=i.R(r).add(ft(o))):(i=i.R(n),i=i.add(ft(o)))}return i}var Lo=4294967296,Dn=xa(0),Mo=xa(1),wc=xa(16777216);S=se.prototype;S.ea=function(){if(ze(this))return-Te(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var i=this.D(n);e+=(0<=i?i:Lo+i)*t,t*=Lo}return e};S.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(wt(this))return"0";if(ze(this))return"-"+Te(this).toString(e);for(var t=ft(Math.pow(e,6)),n=this,i="";;){var s=Ws(n,t).g;n=Vs(n,s.R(t));var r=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=s,wt(n))return r+i;for(;6>r.length;)r="0"+r;i=r+i}};S.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function wt(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function ze(e){return e.h==-1}S.X=function(e){return e=Vs(this,e),ze(e)?-1:wt(e)?0:1};function Te(e){for(var t=e.g.length,n=[],i=0;i<t;i++)n[i]=~e.g[i];return new se(n,~e.h).add(Mo)}S.abs=function(){return ze(this)?Te(this):this};S.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0,s=0;s<=t;s++){var r=i+(this.D(s)&65535)+(e.D(s)&65535),o=(r>>>16)+(this.D(s)>>>16)+(e.D(s)>>>16);i=o>>>16,r&=65535,o&=65535,n[s]=o<<16|r}return new se(n,n[n.length-1]&-2147483648?-1:0)};function Vs(e,t){return e.add(Te(t))}S.R=function(e){if(wt(this)||wt(e))return Dn;if(ze(this))return ze(e)?Te(this).R(Te(e)):Te(Te(this).R(e));if(ze(e))return Te(this.R(Te(e)));if(0>this.X(wc)&&0>e.X(wc))return ft(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],i=0;i<2*t;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var s=0;s<e.g.length;s++){var r=this.D(i)>>>16,o=this.D(i)&65535,l=e.D(s)>>>16,a=e.D(s)&65535;n[2*i+2*s]+=o*a,ds(n,2*i+2*s),n[2*i+2*s+1]+=r*a,ds(n,2*i+2*s+1),n[2*i+2*s+1]+=o*l,ds(n,2*i+2*s+1),n[2*i+2*s+2]+=r*l,ds(n,2*i+2*s+2)}for(i=0;i<t;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=t;i<2*t;i++)n[i]=0;return new se(n,0)};function ds(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function si(e,t){this.g=e,this.h=t}function Ws(e,t){if(wt(t))throw Error("division by zero");if(wt(e))return new si(Dn,Dn);if(ze(e))return t=Ws(Te(e),t),new si(Te(t.g),Te(t.h));if(ze(t))return t=Ws(e,Te(t)),new si(Te(t.g),t.h);if(30<e.g.length){if(ze(e)||ze(t))throw Error("slowDivide_ only works with positive integers.");for(var n=Mo,i=t;0>=i.X(e);)n=Ic(n),i=Ic(i);var s=An(n,1),r=An(i,1);for(i=An(i,2),n=An(n,2);!wt(i);){var o=r.add(i);0>=o.X(e)&&(s=s.add(n),r=o),i=An(i,1),n=An(n,1)}return t=Vs(e,s.R(t)),new si(s,t)}for(s=Dn;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),i=Math.ceil(Math.log(n)/Math.LN2),i=48>=i?1:Math.pow(2,i-48),r=ft(n),o=r.R(t);ze(o)||0<o.X(e);)n-=i,r=ft(n),o=r.R(t);wt(r)&&(r=Mo),s=s.add(r),e=Vs(e,o)}return new si(s,e)}S.gb=function(e){return Ws(this,e).h};S.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.D(i)&e.D(i);return new se(n,this.h&e.h)};S.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.D(i)|e.D(i);return new se(n,this.h|e.h)};S.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.D(i)^e.D(i);return new se(n,this.h^e.h)};function Ic(e){for(var t=e.g.length+1,n=[],i=0;i<t;i++)n[i]=e.D(i)<<1|e.D(i-1)>>>31;return new se(n,e.h)}function An(e,t){var n=t>>5;t%=32;for(var i=e.g.length-n,s=[],r=0;r<i;r++)s[r]=0<t?e.D(r+n)>>>t|e.D(r+n+1)<<32-t:e.D(r+n);return new se(s,e.h)}Ge.prototype.send=Ge.prototype.u;Ge.prototype.open=Ge.prototype.m;Ge.prototype.close=Ge.prototype.close;ba.NO_ERROR=0;ba.TIMEOUT=8;ba.HTTP_ERROR=6;$v.COMPLETE="complete";Vv.EventType=Gi;Gi.OPEN="a";Gi.CLOSE="b";Gi.ERROR="c";Gi.MESSAGE="d";we.prototype.listen=we.prototype.O;de.prototype.listenOnce=de.prototype.P;de.prototype.getLastError=de.prototype.Sa;de.prototype.getLastErrorCode=de.prototype.Ia;de.prototype.getStatus=de.prototype.da;de.prototype.getResponseJson=de.prototype.Wa;de.prototype.getResponseText=de.prototype.ja;de.prototype.send=de.prototype.ha;de.prototype.setWithCredentials=de.prototype.Oa;mt.prototype.digest=mt.prototype.l;mt.prototype.reset=mt.prototype.reset;mt.prototype.update=mt.prototype.j;se.prototype.add=se.prototype.add;se.prototype.multiply=se.prototype.R;se.prototype.modulo=se.prototype.gb;se.prototype.compare=se.prototype.X;se.prototype.toNumber=se.prototype.ea;se.prototype.toString=se.prototype.toString;se.prototype.getBits=se.prototype.D;se.fromNumber=ft;se.fromString=mf;var gy=se;const Tc="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}be.UNAUTHENTICATED=new be(null),be.GOOGLE_CREDENTIALS=new be("google-credentials-uid"),be.FIRST_PARTY=new be("first-party-uid"),be.MOCK_USER=new be("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zi="10.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $n=new ua("@firebase/firestore");function We(e,...t){if($n.logLevel<=Z.DEBUG){const n=t.map(Fa);$n.debug(`Firestore (${Zi}): ${e}`,...n)}}function Ua(e,...t){if($n.logLevel<=Z.ERROR){const n=t.map(Fa);$n.error(`Firestore (${Zi}): ${e}`,...n)}}function my(e,...t){if($n.logLevel<=Z.WARN){const n=t.map(Fa);$n.warn(`Firestore (${Zi}): ${e}`,...n)}}function Fa(e){if(typeof e=="string")return e;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ja(e="Unexpected state"){const t=`FIRESTORE (${Zi}) INTERNAL ASSERTION FAILED: `+e;throw Ua(t),new Error(t)}function xo(e,t){e||ja()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Re={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Pe extends Pt{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class _y{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(be.UNAUTHENTICATED))}shutdown(){}}class vy{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class yy{constructor(t){this.t=t,this.currentUser=be.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let i=this.i;const s=a=>this.i!==i?(i=this.i,n(a)):Promise.resolve();let r=new Ln;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Ln,t.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const a=r;t.enqueueRetryable(async()=>{await a.promise,await s(this.currentUser)})},l=a=>{We("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=a,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(a=>l(a)),setTimeout(()=>{if(!this.auth){const a=this.t.getImmediate({optional:!0});a?l(a):(We("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Ln)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==t?(We("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(xo(typeof i.accessToken=="string"),new _f(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return xo(t===null||typeof t=="string"),new be(t)}}class Ey{constructor(t,n,i){this.l=t,this.h=n,this.P=i,this.type="FirstParty",this.user=be.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class wy{constructor(t,n,i){this.l=t,this.h=n,this.P=i}getToken(){return Promise.resolve(new Ey(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(be.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Iy{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ty{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const i=r=>{r.error!=null&&We("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.R;return this.R=r.token,We("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{t.enqueueRetryable(()=>i(r))};const s=r=>{We("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.A.onInit(r=>s(r)),setTimeout(()=>{if(!this.appCheck){const r=this.A.getImmediate({optional:!0});r?s(r):We("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(xo(typeof n.token=="string"),this.R=n.token,new Iy(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ay(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let i=0;i<e;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cy{static V(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let i="";for(;i.length<20;){const s=Ay(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<n&&(i+=t.charAt(s[r]%t.length))}return i}}function vf(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{constructor(t,n,i,s,r,o,l,a,c){this.databaseId=t,this.appId=n,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=a,this.useFetchStreams=c}}class Ks{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Ks("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Ks&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ac,q;(q=Ac||(Ac={}))[q.OK=0]="OK",q[q.CANCELLED=1]="CANCELLED",q[q.UNKNOWN=2]="UNKNOWN",q[q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",q[q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",q[q.NOT_FOUND=5]="NOT_FOUND",q[q.ALREADY_EXISTS=6]="ALREADY_EXISTS",q[q.PERMISSION_DENIED=7]="PERMISSION_DENIED",q[q.UNAUTHENTICATED=16]="UNAUTHENTICATED",q[q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",q[q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",q[q.ABORTED=10]="ABORTED",q[q.OUT_OF_RANGE=11]="OUT_OF_RANGE",q[q.UNIMPLEMENTED=12]="UNIMPLEMENTED",q[q.INTERNAL=13]="INTERNAL",q[q.UNAVAILABLE=14]="UNAVAILABLE",q[q.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new gy([4294967295,4294967295],0);function Yr(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{constructor(t,n,i=1e3,s=1.5,r=6e4){this.oi=t,this.timerId=n,this.Do=i,this.vo=s,this.Co=r,this.Fo=0,this.Mo=null,this.xo=Date.now(),this.reset()}reset(){this.Fo=0}Oo(){this.Fo=this.Co}No(t){this.cancel();const n=Math.floor(this.Fo+this.Bo()),i=Math.max(0,Date.now()-this.xo),s=Math.max(0,n-i);s>0&&We("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Fo} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.Mo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.xo=Date.now(),t())),this.Fo*=this.vo,this.Fo<this.Do&&(this.Fo=this.Do),this.Fo>this.Co&&(this.Fo=this.Co)}Lo(){this.Mo!==null&&(this.Mo.skipDelay(),this.Mo=null)}cancel(){this.Mo!==null&&(this.Mo.cancel(),this.Mo=null)}Bo(){return(Math.random()-.5)*this.Fo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(t,n,i,s,r){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new Ln,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,i,s,r){const o=Date.now()+i,l=new Ba(t,n,o,s,r);return l.start(i),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Pe(Re.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ry(e,t){if(Ua("AsyncQueue",`${t}: ${e}`),vf(e))return new Pe(Re.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py{constructor(t,n,i,s){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=s,this.user=be.UNAUTHENTICATED,this.clientId=Cy.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async r=>{We("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(i,r=>(We("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Pe(Re.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Ln;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const i=Ry(n,"Failed to shutdown persistence");t.reject(i)}}),t.promise}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yf(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cc=new Map;function Oy(e,t,n,i){if(t===!0&&i===!0)throw new Pe(Re.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function ky(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(i){return i.constructor?i.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":ja()}function Ny(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Pe(Re.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ky(e);throw new Pe(Re.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(t){var n,i;if(t.host===void 0){if(t.ssl!==void 0)throw new Pe(Re.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new Pe(Re.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Oy("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=yf((i=t.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new Pe(Re.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new Pe(Re.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new Pe(Re.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(i,s){return i.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Ef{constructor(t,n,i,s){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new bc({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Pe(Re.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new Pe(Re.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new bc(t),t.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new _y;switch(i.type){case"firstParty":return new wy(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new Pe(Re.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const i=Cc.get(n);i&&(We("ComponentProvider","Removing Datastore"),Cc.delete(n),i.terminate())}(this),Promise.resolve()}}function Dy(e,t,n,i={}){var s;const r=(e=Ny(e,Ef))._getSettings(),o=`${t}:${n}`;if(r.host!=="firestore.googleapis.com"&&r.host!==o&&my("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},r),{host:o,ssl:!1})),i.mockUserToken){let l,a;if(typeof i.mockUserToken=="string")l=i.mockUserToken,a=be.MOCK_USER;else{l=qm(i.mockUserToken,(s=e._app)===null||s===void 0?void 0:s.options.projectId);const c=i.mockUserToken.sub||i.mockUserToken.user_id;if(!c)throw new Pe(Re.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new be(c)}e._authCredentials=new vy(new _f(l,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ly{constructor(){this.za=Promise.resolve(),this.ja=[],this.Ha=!1,this.Ja=[],this.Ya=null,this.Za=!1,this.Xa=!1,this.eu=[],this.Uo=new Sy(this,"async_queue_retry"),this.tu=()=>{const n=Yr();n&&We("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Uo.Lo()};const t=Yr();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.tu)}get isShuttingDown(){return this.Ha}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.nu(),this.ru(t)}enterRestrictedMode(t){if(!this.Ha){this.Ha=!0,this.Xa=t||!1;const n=Yr();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.tu)}}enqueue(t){if(this.nu(),this.Ha)return new Promise(()=>{});const n=new Ln;return this.ru(()=>this.Ha&&this.Xa?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.ja.push(t),this.iu()))}async iu(){if(this.ja.length!==0){try{await this.ja[0](),this.ja.shift(),this.Uo.reset()}catch(t){if(!vf(t))throw t;We("AsyncQueue","Operation failed with retryable error: "+t)}this.ja.length>0&&this.Uo.No(()=>this.iu())}}ru(t){const n=this.za.then(()=>(this.Za=!0,t().catch(i=>{this.Ya=i,this.Za=!1;const s=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(i);throw Ua("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.Za=!1,i))));return this.za=n,n}enqueueAfterDelay(t,n,i){this.nu(),this.eu.indexOf(t)>-1&&(n=0);const s=Ba.createAndSchedule(this,t,n,i,r=>this.su(r));return this.Ja.push(s),s}nu(){this.Ya&&ja()}verifyOperationInProgress(){}async ou(){let t;do t=this.za,await t;while(t!==this.za)}_u(t){for(const n of this.Ja)if(n.timerId===t)return!0;return!1}au(t){return this.ou().then(()=>{this.Ja.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.Ja)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.ou()})}uu(t){this.eu.push(t)}su(t){const n=this.Ja.indexOf(t);this.Ja.splice(n,1)}}class My extends Ef{constructor(t,n,i,s){super(t,n,i,s),this.type="firestore",this._queue=function(){return new Ly}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Uy(this),this._firestoreClient.terminate()}}function xy(e,t){const n=typeof e=="object"?e:dh(),i=typeof e=="string"?e:t||"(default)",s=fa(n,"firestore").getImmediate({identifier:i});if(!s._initialized){const r=Km("firestore");r&&Dy(s,...r)}return s}function Uy(e){var t,n,i;const s=e._freezeSettings(),r=function(l,a,c,u){return new by(l,a,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,yf(u.experimentalLongPollingOptions),u.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,s);e._firestoreClient=new Py(e._authCredentials,e._appCheckCredentials,e._queue,r),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((i=s.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}(function(t,n=!0){(function(s){Zi=s})(qn),Hn(new mn("firestore",(i,{instanceIdentifier:s,options:r})=>{const o=i.getProvider("app").getImmediate(),l=new My(new yy(i.getProvider("auth-internal")),new Ty(i.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new Pe(Re.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ks(c.options.projectId,u)}(o,s),o);return r=Object.assign({useFetchStreams:n},r),l._setSettings(r),l},"PUBLIC").setMultipleInstances(!0)),qt(Tc,"4.1.2",t),qt(Tc,"4.1.2","esm2017")})();function Ha(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(e);s<i.length;s++)t.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(e,i[s])&&(n[i[s]]=e[i[s]]);return n}function Sc(e){return e!==void 0&&e.enterprise!==void 0}class Fy{constructor(t){if(this.siteKey="",this.emailPasswordEnabled=!1,t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.emailPasswordEnabled=t.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}function wf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const jy=wf,If=new Vi("auth","Firebase",wf());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zs=new ua("@firebase/auth");function By(e,...t){zs.logLevel<=Z.WARN&&zs.warn(`Auth (${qn}): ${e}`,...t)}function Ts(e,...t){zs.logLevel<=Z.ERROR&&zs.error(`Auth (${qn}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(e,...t){throw $a(e,...t)}function dt(e,...t){return $a(e,...t)}function Hy(e,t,n){const i=Object.assign(Object.assign({},jy()),{[t]:n});return new Vi("auth","Firebase",i).create(t,{appName:e.name})}function $a(e,...t){if(typeof e!="string"){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return If.create(e,...t)}function B(e,t,...n){if(!e)throw $a(t,...n)}function It(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Ts(t),new Error(t)}function St(e,t){e||It(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uo(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function $y(){return Rc()==="http:"||Rc()==="https:"}function Rc(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vy(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&($y()||Jm()||"connection"in navigator)?navigator.onLine:!0}function Wy(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(t,n){this.shortDelay=t,this.longDelay=n,St(n>t,"Short delay should be less than long delay!"),this.isMobile=Gm()||Xm()}get(){return Vy()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Va(e,t){St(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{static initialize(t,n,i){this.fetchImpl=t,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;It("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;It("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;It("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ky={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zy=new es(3e4,6e4);function Yn(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function yn(e,t,n,i,s={}){return Af(e,s,async()=>{let r={},o={};i&&(t==="GET"?o=i:r={body:JSON.stringify(i)});const l=Wi(Object.assign({key:e.config.apiKey},o)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),Tf.fetch()(Cf(e,e.config.apiHost,n,l),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},r))})}async function Af(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},Ky),t);try{const s=new qy(e),r=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw ps(e,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const l=r.ok?o.errorMessage:o.error.message,[a,c]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw ps(e,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw ps(e,"email-already-in-use",o);if(a==="USER_DISABLED")throw ps(e,"user-disabled",o);const u=i[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Hy(e,u,c);it(e,u)}}catch(s){if(s instanceof Pt)throw s;it(e,"network-request-failed",{message:String(s)})}}async function Sr(e,t,n,i,s={}){const r=await yn(e,t,n,i,s);return"mfaPendingCredential"in r&&it(e,"multi-factor-auth-required",{_serverResponse:r}),r}function Cf(e,t,n,i){const s=`${t}${n}?${i}`;return e.config.emulator?Va(e.config,s):`${e.config.apiScheme}://${s}`}class qy{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(dt(this.auth,"network-request-failed")),zy.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ps(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=dt(e,t,i);return s.customData._tokenResponse=n,s}async function Gy(e,t){return yn(e,"GET","/v2/recaptchaConfig",Yn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jy(e,t){return yn(e,"POST","/v1/accounts:delete",t)}async function Xy(e,t){return yn(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yi(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function Yy(e,t=!1){const n=Ot(e),i=await n.getIdToken(t),s=Wa(i);B(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:yi(Qr(s.auth_time)),issuedAtTime:yi(Qr(s.iat)),expirationTime:yi(Qr(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Qr(e){return Number(e)*1e3}function Wa(e){const[t,n,i]=e.split(".");if(t===void 0||n===void 0||i===void 0)return Ts("JWT malformed, contained fewer than 3 sections"),null;try{const s=oh(n);return s?JSON.parse(s):(Ts("Failed to decode base64 JWT payload"),null)}catch(s){return Ts("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Qy(e){const t=Wa(e);return B(t,"internal-error"),B(typeof t.exp<"u","internal-error"),B(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fi(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof Pt&&Zy(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function Zy({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eE{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=yi(this.lastLoginAt),this.creationTime=yi(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qs(e){var t;const n=e.auth,i=await e.getIdToken(),s=await Fi(e,Xy(n,{idToken:i}));B(s==null?void 0:s.users.length,n,"internal-error");const r=s.users[0];e._notifyReloadListener(r);const o=!((t=r.providerUserInfo)===null||t===void 0)&&t.length?iE(r.providerUserInfo):[],l=nE(e.providerData,o),a=e.isAnonymous,c=!(e.email&&r.passwordHash)&&!(l!=null&&l.length),u=a?c:!1,d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:l,metadata:new bf(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(e,d)}async function tE(e){const t=Ot(e);await qs(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function nE(e,t){return[...e.filter(i=>!t.some(s=>s.providerId===i.providerId)),...t]}function iE(e){return e.map(t=>{var{providerId:n}=t,i=Ha(t,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sE(e,t){const n=await Af(e,{},async()=>{const i=Wi({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:r}=e.config,o=Cf(e,s,"/v1/token",`key=${r}`),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Tf.fetch()(o,{method:"POST",headers:l,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){B(t.idToken,"internal-error"),B(typeof t.idToken<"u","internal-error"),B(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Qy(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return B(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:i,refreshToken:s,expiresIn:r}=await sE(t,n);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(t,n,i){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(t,n){const{refreshToken:i,accessToken:s,expirationTime:r}=n,o=new ji;return i&&(B(typeof i=="string","internal-error",{appName:t}),o.refreshToken=i),s&&(B(typeof s=="string","internal-error",{appName:t}),o.accessToken=s),r&&(B(typeof r=="number","internal-error",{appName:t}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new ji,this.toJSON())}_performRefresh(){return It("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(e,t){B(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class gn{constructor(t){var{uid:n,auth:i,stsTokenManager:s}=t,r=Ha(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new eE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new bf(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(t){const n=await Fi(this,this.stsTokenManager.getToken(this.auth,t));return B(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return Yy(this,t)}reload(){return tE(this)}_assign(t){this!==t&&(B(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new gn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){B(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let i=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),i=!0),n&&await qs(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Fi(this,Jy(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var i,s,r,o,l,a,c,u;const d=(i=n.displayName)!==null&&i!==void 0?i:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,m=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,T=(o=n.photoURL)!==null&&o!==void 0?o:void 0,C=(l=n.tenantId)!==null&&l!==void 0?l:void 0,x=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,O=(c=n.createdAt)!==null&&c!==void 0?c:void 0,D=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:V,emailVerified:k,isAnonymous:ee,providerData:he,stsTokenManager:ve}=n;B(V&&ve,t,"internal-error");const W=ji.fromJSON(this.name,ve);B(typeof V=="string",t,"internal-error"),xt(d,t.name),xt(p,t.name),B(typeof k=="boolean",t,"internal-error"),B(typeof ee=="boolean",t,"internal-error"),xt(m,t.name),xt(T,t.name),xt(C,t.name),xt(x,t.name),xt(O,t.name),xt(D,t.name);const te=new gn({uid:V,auth:t,email:p,emailVerified:k,displayName:d,isAnonymous:ee,photoURL:T,phoneNumber:m,tenantId:C,stsTokenManager:W,createdAt:O,lastLoginAt:D});return he&&Array.isArray(he)&&(te.providerData=he.map(X=>Object.assign({},X))),x&&(te._redirectEventId=x),te}static async _fromIdTokenResponse(t,n,i=!1){const s=new ji;s.updateFromServerResponse(n);const r=new gn({uid:n.localId,auth:t,stsTokenManager:s,isAnonymous:i});return await qs(r),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pc=new Map;function Tt(e){St(e instanceof Function,"Expected a class definition");let t=Pc.get(e);return t?(St(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Pc.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Sf.type="NONE";const Oc=Sf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function As(e,t,n){return`firebase:${e}:${t}:${n}`}class Mn{constructor(t,n,i){this.persistence=t,this.auth=n,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=As(this.userKey,s.apiKey,r),this.fullPersistenceKey=As("persistence",s.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?gn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,i="authUser"){if(!n.length)return new Mn(Tt(Oc),t,i);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=s[0]||Tt(Oc);const o=As(i,t.config.apiKey,t.name);let l=null;for(const c of n)try{const u=await c._get(o);if(u){const d=gn._fromJSON(t,u);c!==r&&(l=d),r=c;break}}catch{}const a=s.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!a.length?new Mn(r,t,i):(r=a[0],l&&await r._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new Mn(r,t,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kc(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Of(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Rf(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Nf(t))return"Blackberry";if(Df(t))return"Webos";if(Ka(t))return"Safari";if((t.includes("chrome/")||Pf(t))&&!t.includes("edge/"))return"Chrome";if(kf(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=e.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Rf(e=De()){return/firefox\//i.test(e)}function Ka(e=De()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Pf(e=De()){return/crios\//i.test(e)}function Of(e=De()){return/iemobile/i.test(e)}function kf(e=De()){return/android/i.test(e)}function Nf(e=De()){return/blackberry/i.test(e)}function Df(e=De()){return/webos/i.test(e)}function Rr(e=De()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function rE(e=De()){var t;return Rr(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function oE(){return Ym()&&document.documentMode===10}function Lf(e=De()){return Rr(e)||kf(e)||Df(e)||Nf(e)||/windows phone/i.test(e)||Of(e)}function aE(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mf(e,t=[]){let n;switch(e){case"Browser":n=kc(De());break;case"Worker":n=`${kc(De())}-${e}`;break;default:n=e}const i=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${qn}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const i=r=>new Promise((o,l)=>{try{const a=t(r);o(a)}catch(a){l(a)}});i.onAbort=n,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const i of this.queue)await i(t),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cE(e,t={}){return yn(e,"GET","/v2/passwordPolicy",Yn(e,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uE=6;class hE{constructor(t){var n,i,s,r;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:uE,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(i=t.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(r=t.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,i,s,r,o,l;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,a),this.validatePasswordCharacterOptions(t,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(i=a.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(s=a.containsLowercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(r=a.containsUppercaseLetter)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(l=a.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),a}validatePasswordLengthOptions(t,n){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=t.length>=i),s&&(n.meetsMaxPasswordLength=t.length<=s)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let s=0;s<t.length;s++)i=t.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(t,n,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fE{constructor(t,n,i,s){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Nc(this),this.idTokenSubscription=new Nc(this),this.beforeStateQueue=new lE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=If,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Tt(n)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await Mn.create(this,t),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,a=await this.tryRedirectSignIn(t);(!o||o===l)&&(a!=null&&a.user)&&(s=a.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return B(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await qs(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=Wy()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?Ot(t):null;return n&&B(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&B(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Tt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await cE(this),n=new hE(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Vi("auth","Firebase",t())}onAuthStateChanged(t,n,i){return this.registerStateListener(this.authStateSubscription,t,n,i)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,i){return this.registerStateListener(this.idTokenSubscription,t,n,i)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const i=this.onAuthStateChanged(()=>{i(),t()},n)}})}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const i=await this.getOrInitRedirectPersistenceManager(n);return t===null?i.removeCurrentUser():i.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Tt(t)||this._popupRedirectResolver;B(n,this,"argument-error"),this.redirectPersistenceManager=await Mn.create(this,[Tt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,i,s){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(B(l,this,"internal-error"),l.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const a=t.addObserver(n,i,s);return()=>{o=!0,a()}}else{const a=t.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return B(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Mf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&By(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Qn(e){return Ot(e)}class Nc{constructor(t){this.auth=t,this.observer=null,this.addObserver=s_(n=>this.observer=n)}get next(){return B(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dE(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function xf(e){return new Promise((t,n)=>{const i=document.createElement("script");i.setAttribute("src",e),i.onload=t,i.onerror=s=>{const r=dt("internal-error");r.customData=s,n(r)},i.type="text/javascript",i.charset="UTF-8",dE().appendChild(i)})}function pE(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const gE="https://www.google.com/recaptcha/enterprise.js?render=",mE="recaptcha-enterprise",_E="NO_RECAPTCHA";class vE{constructor(t){this.type=mE,this.auth=Qn(t)}async verify(t="verify",n=!1){async function i(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,l)=>{Gy(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new Fy(a);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(a=>{l(a)})})}function s(r,o,l){const a=window.grecaptcha;Sc(a)?a.enterprise.ready(()=>{a.enterprise.execute(r,{action:t}).then(c=>{o(c)}).catch(()=>{o(_E)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{i(this.auth).then(l=>{if(!n&&Sc(window.grecaptcha))s(l,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}xf(gE+l).then(()=>{s(l,r,o)}).catch(a=>{o(a)})}}).catch(l=>{o(l)})})}}async function Dc(e,t,n,i=!1){const s=new vE(e);let r;try{r=await s.verify(n)}catch{r=await s.verify(n,!0)}const o=Object.assign({},t);return i?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yE(e,t){const n=fa(e,"auth");if(n.isInitialized()){const s=n.getImmediate(),r=n.getOptions();if(Us(r,t??{}))return s;it(s,"already-initialized")}return n.initialize({options:t})}function EE(e,t){const n=(t==null?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Tt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,t==null?void 0:t.popupRedirectResolver)}function wE(e,t,n){const i=Qn(e);B(i._canInitEmulator,i,"emulator-config-failed"),B(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),r=Uf(t),{host:o,port:l}=IE(t),a=l===null?"":`:${l}`;i.config.emulator={url:`${r}//${o}${a}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:l,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||TE()}function Uf(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function IE(e){const t=Uf(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:Lc(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:Lc(o)}}}function Lc(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function TE(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return It("not implemented")}_getIdTokenResponse(t){return It("not implemented")}_linkToIdToken(t,n){return It("not implemented")}_getReauthenticationResolver(t){return It("not implemented")}}async function AE(e,t){return yn(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zr(e,t){return Sr(e,"POST","/v1/accounts:signInWithPassword",Yn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CE(e,t){return Sr(e,"POST","/v1/accounts:signInWithEmailLink",Yn(e,t))}async function bE(e,t){return Sr(e,"POST","/v1/accounts:signInWithEmailLink",Yn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi extends za{constructor(t,n,i,s=null){super("password",i),this._email=t,this._password=n,this._tenantId=s}static _fromEmailAndPassword(t,n){return new Bi(t,n,"password")}static _fromEmailAndCode(t,n,i=null){return new Bi(t,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){var n;switch(this.signInMethod){case"password":const i={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=t._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const s=await Dc(t,i,"signInWithPassword");return Zr(t,s)}else return Zr(t,i).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const r=await Dc(t,i,"signInWithPassword");return Zr(t,r)}else return Promise.reject(s)});case"emailLink":return CE(t,{email:this._email,oobCode:this._password});default:it(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":return AE(t,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return bE(t,{idToken:n,email:this._email,oobCode:this._password});default:it(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xn(e,t){return Sr(e,"POST","/v1/accounts:signInWithIdp",Yn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SE="http://localhost";class vn extends za{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new vn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):it("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:i,signInMethod:s}=n,r=Ha(n,["providerId","signInMethod"]);if(!i||!s)return null;const o=new vn(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return xn(t,n)}_linkToIdToken(t,n){const i=this.buildRequest();return i.idToken=n,xn(t,i)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,xn(t,n)}buildRequest(){const t={requestUri:SE,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Wi(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RE(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function PE(e){const t=ui(hi(e)).link,n=t?ui(hi(t)).deep_link_id:null,i=ui(hi(e)).deep_link_id;return(i?ui(hi(i)).link:null)||i||n||t||e}class qa{constructor(t){var n,i,s,r,o,l;const a=ui(hi(t)),c=(n=a.apiKey)!==null&&n!==void 0?n:null,u=(i=a.oobCode)!==null&&i!==void 0?i:null,d=RE((s=a.mode)!==null&&s!==void 0?s:null);B(c&&u&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=u,this.continueUrl=(r=a.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=a.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=a.tenantId)!==null&&l!==void 0?l:null}static parseLink(t){const n=PE(t);try{return new qa(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(){this.providerId=Zn.PROVIDER_ID}static credential(t,n){return Bi._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const i=qa.parseLink(n);return B(i,"argument-error"),Bi._fromEmailAndCode(t,i.code,i.tenantId)}}Zn.PROVIDER_ID="password";Zn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Zn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts extends Ff{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt extends ts{constructor(){super("facebook.com")}static credential(t){return vn._fromParams({providerId:jt.PROVIDER_ID,signInMethod:jt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return jt.credentialFromTaggedObject(t)}static credentialFromError(t){return jt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return jt.credential(t.oauthAccessToken)}catch{return null}}}jt.FACEBOOK_SIGN_IN_METHOD="facebook.com";jt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt extends ts{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return vn._fromParams({providerId:Bt.PROVIDER_ID,signInMethod:Bt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Bt.credentialFromTaggedObject(t)}static credentialFromError(t){return Bt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:i}=t;if(!n&&!i)return null;try{return Bt.credential(n,i)}catch{return null}}}Bt.GOOGLE_SIGN_IN_METHOD="google.com";Bt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht extends ts{constructor(){super("github.com")}static credential(t){return vn._fromParams({providerId:Ht.PROVIDER_ID,signInMethod:Ht.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ht.credentialFromTaggedObject(t)}static credentialFromError(t){return Ht.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Ht.credential(t.oauthAccessToken)}catch{return null}}}Ht.GITHUB_SIGN_IN_METHOD="github.com";Ht.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t extends ts{constructor(){super("twitter.com")}static credential(t,n){return vn._fromParams({providerId:$t.PROVIDER_ID,signInMethod:$t.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return $t.credentialFromTaggedObject(t)}static credentialFromError(t){return $t.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=t;if(!n||!i)return null;try{return $t.credential(n,i)}catch{return null}}}$t.TWITTER_SIGN_IN_METHOD="twitter.com";$t.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,i,s=!1){const r=await gn._fromIdTokenResponse(t,i,s),o=Mc(i);return new Vn({user:r,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(t,n,i){await t._updateTokensIfNecessary(i,!0);const s=Mc(i);return new Vn({user:t,providerId:s,_tokenResponse:i,operationType:n})}}function Mc(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs extends Pt{constructor(t,n,i,s){var r;super(n.code,n.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,Gs.prototype),this.customData={appName:t.name,tenantId:(r=t.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(t,n,i,s){return new Gs(t,n,i,s)}}function jf(e,t,n,i){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Gs._fromErrorAndOperation(e,r,t,i):r})}async function OE(e,t,n=!1){const i=await Fi(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Vn._forOperation(e,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kE(e,t,n=!1){const{auth:i}=e,s="reauthenticate";try{const r=await Fi(e,jf(i,s,t,e),n);B(r.idToken,i,"internal-error");const o=Wa(r.idToken);B(o,i,"internal-error");const{sub:l}=o;return B(e.uid===l,i,"user-mismatch"),Vn._forOperation(e,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&it(i,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bf(e,t,n=!1){const i="signIn",s=await jf(e,i,t),r=await Vn._fromIdTokenResponse(e,i,s);return n||await e._updateCurrentUser(r.user),r}async function NE(e,t){return Bf(Qn(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DE(e){const t=Qn(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}function gw(e,t,n){return NE(Ot(e),Zn.credential(t,n)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&DE(e),i})}function LE(e,t,n,i){return Ot(e).onIdTokenChanged(t,n,i)}function ME(e,t,n){return Ot(e).beforeAuthStateChanged(t,n)}function Hf(e,t,n,i){return Ot(e).onAuthStateChanged(t,n,i)}function xE(e){return Ot(e).signOut()}const Js="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Js,"1"),this.storage.removeItem(Js),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UE(){const e=De();return Ka(e)||Rr(e)}const FE=1e3,jE=10;class Vf extends $f{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=UE()&&aE(),this.fallbackToPolling=Lf(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),s=this.localCache[n];i!==s&&t(n,s,i)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const i=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(i,t.newValue):this.storage.removeItem(i);else if(this.localCache[i]===t.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);oE()&&r!==t.newValue&&t.newValue!==t.oldValue?setTimeout(s,jE):s()}notifyListeners(t,n){this.localCache[t]=n;const i=this.listeners[t];if(i)for(const s of Array.from(i))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:i}),!0)})},FE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Vf.type="LOCAL";const BE=Vf;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf extends $f{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Wf.type="SESSION";const Kf=Wf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HE(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(s=>s.isListeningto(t));if(n)return n;const i=new Pr(t);return this.receivers.push(i),i}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:i,eventType:s,data:r}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const l=Array.from(o).map(async c=>c(n.origin,r)),a=await HE(l);n.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:a})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Pr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ga(e="",t=10){let n="";for(let i=0;i<t;i++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $E{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((l,a)=>{const c=Ga("",20);s.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(d){const p=d;if(p.data.eventId===c)switch(p.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),l(p.data.response);break;default:clearTimeout(u),clearTimeout(r),a(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(){return window}function VE(e){pt().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zf(){return typeof pt().WorkerGlobalScope<"u"&&typeof pt().importScripts=="function"}async function WE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function KE(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function zE(){return zf()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qf="firebaseLocalStorageDb",qE=1,Xs="firebaseLocalStorage",Gf="fbase_key";class ns{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Or(e,t){return e.transaction([Xs],t?"readwrite":"readonly").objectStore(Xs)}function GE(){const e=indexedDB.deleteDatabase(qf);return new ns(e).toPromise()}function Fo(){const e=indexedDB.open(qf,qE);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const i=e.result;try{i.createObjectStore(Xs,{keyPath:Gf})}catch(s){n(s)}}),e.addEventListener("success",async()=>{const i=e.result;i.objectStoreNames.contains(Xs)?t(i):(i.close(),await GE(),t(await Fo()))})})}async function xc(e,t,n){const i=Or(e,!0).put({[Gf]:t,value:n});return new ns(i).toPromise()}async function JE(e,t){const n=Or(e,!1).get(t),i=await new ns(n).toPromise();return i===void 0?null:i.value}function Uc(e,t){const n=Or(e,!0).delete(t);return new ns(n).toPromise()}const XE=800,YE=3;class Jf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Fo(),this.db)}async _withRetries(t){let n=0;for(;;)try{const i=await this._openDb();return await t(i)}catch(i){if(n++>YE)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return zf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Pr._getInstance(zE()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await WE(),!this.activeServiceWorker)return;this.sender=new $E(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((t=i[0])===null||t===void 0)&&t.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||KE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Fo();return await xc(t,Js,"1"),await Uc(t,Js),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>xc(i,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(i=>JE(i,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Uc(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(s=>{const r=Or(s,!1).getAll();return new ns(r).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;for(const{fbase_key:s,value:r}of t)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(t,n){this.localCache[t]=n;const i=this.listeners[t];if(i)for(const s of Array.from(i))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),XE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Jf.type="LOCAL";const QE=Jf;new es(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZE(e,t){return t?Tt(t):(B(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja extends za{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return xn(t,this._buildIdpRequest())}_linkToIdToken(t,n){return xn(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return xn(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function e0(e){return Bf(e.auth,new Ja(e),e.bypassAuthState)}function t0(e){const{auth:t,user:n}=e;return B(n,t,"internal-error"),kE(n,new Ja(e),e.bypassAuthState)}async function n0(e){const{auth:t,user:n}=e;return B(n,t,"internal-error"),OE(n,new Ja(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(t,n,i,s,r=!1){this.auth=t,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:i,postBody:s,tenantId:r,error:o,type:l}=t;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(c){this.reject(c)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return e0;case"linkViaPopup":case"linkViaRedirect":return n0;case"reauthViaPopup":case"reauthViaRedirect":return t0;default:it(this.auth,"internal-error")}}resolve(t){St(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){St(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i0=new es(2e3,1e4);class Rn extends Xf{constructor(t,n,i,s,r){super(t,n,s,r),this.provider=i,this.authWindow=null,this.pollId=null,Rn.currentPopupAction&&Rn.currentPopupAction.cancel(),Rn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return B(t,this.auth,"internal-error"),t}async onExecution(){St(this.filter.length===1,"Popup operations only handle one event");const t=Ga();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(dt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(dt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Rn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(dt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,i0.get())};t()}}Rn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s0="pendingRedirect",Cs=new Map;class r0 extends Xf{constructor(t,n,i=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let t=Cs.get(this.auth._key());if(!t){try{const i=await o0(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(i)}catch(n){t=()=>Promise.reject(n)}Cs.set(this.auth._key(),t)}return this.bypassAuthState||Cs.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function o0(e,t){const n=c0(t),i=l0(e);if(!await i._isAvailable())return!1;const s=await i._get(n)==="true";return await i._remove(n),s}function a0(e,t){Cs.set(e._key(),t)}function l0(e){return Tt(e._redirectPersistence)}function c0(e){return As(s0,e.config.apiKey,e.name)}async function u0(e,t,n=!1){const i=Qn(e),s=ZE(i,t),o=await new r0(i,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,t)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h0=10*60*1e3;class f0{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(t,i)&&(n=!0,this.sendToConsumer(t,i),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!d0(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var i;if(t.error&&!Yf(t)){const s=((i=t.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(dt(this.auth,s))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const i=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&i}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=h0&&this.cachedEventUids.clear(),this.cachedEventUids.has(Fc(t))}saveEventToCache(t){this.cachedEventUids.add(Fc(t)),this.lastProcessedEventTime=Date.now()}}function Fc(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Yf({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function d0(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Yf(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function p0(e,t={}){return yn(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,m0=/^https?/;async function _0(e){if(e.config.emulator)return;const{authorizedDomains:t}=await p0(e);for(const n of t)try{if(v0(n))return}catch{}it(e,"unauthorized-domain")}function v0(e){const t=Uo(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&i===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!m0.test(n))return!1;if(g0.test(e))return i===e;const s=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y0=new es(3e4,6e4);function jc(){const e=pt().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function E0(e){return new Promise((t,n)=>{var i,s,r;function o(){jc(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{jc(),n(dt(e,"network-request-failed"))},timeout:y0.get()})}if(!((s=(i=pt().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)t(gapi.iframes.getContext());else if(!((r=pt().gapi)===null||r===void 0)&&r.load)o();else{const l=pE("iframefcb");return pt()[l]=()=>{gapi.load?o():n(dt(e,"network-request-failed"))},xf(`https://apis.google.com/js/api.js?onload=${l}`).catch(a=>n(a))}}).catch(t=>{throw bs=null,t})}let bs=null;function w0(e){return bs=bs||E0(e),bs}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I0=new es(5e3,15e3),T0="__/auth/iframe",A0="emulator/auth/iframe",C0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},b0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function S0(e){const t=e.config;B(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Va(t,A0):`https://${e.config.authDomain}/${T0}`,i={apiKey:t.apiKey,appName:e.name,v:qn},s=b0.get(e.config.apiHost);s&&(i.eid=s);const r=e._getFrameworks();return r.length&&(i.fw=r.join(",")),`${n}?${Wi(i).slice(1)}`}async function R0(e){const t=await w0(e),n=pt().gapi;return B(n,e,"internal-error"),t.open({where:document.body,url:S0(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:C0,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=dt(e,"network-request-failed"),l=pt().setTimeout(()=>{r(o)},I0.get());function a(){pt().clearTimeout(l),s(i)}i.ping(a).then(a,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},O0=500,k0=600,N0="_blank",D0="http://localhost";class Bc{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function L0(e,t,n,i=O0,s=k0){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let l="";const a=Object.assign(Object.assign({},P0),{width:i.toString(),height:s.toString(),top:r,left:o}),c=De().toLowerCase();n&&(l=Pf(c)?N0:n),Rf(c)&&(t=t||D0,a.scrollbars="yes");const u=Object.entries(a).reduce((p,[m,T])=>`${p}${m}=${T},`,"");if(rE(c)&&l!=="_self")return M0(t||"",l),new Bc(null);const d=window.open(t||"",l,u);B(d,e,"popup-blocked");try{d.focus()}catch{}return new Bc(d)}function M0(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x0="__/auth/handler",U0="emulator/auth/handler",F0=encodeURIComponent("fac");async function Hc(e,t,n,i,s,r){B(e.config.authDomain,e,"auth-domain-config-required"),B(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:qn,eventId:s};if(t instanceof Ff){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",i_(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[u,d]of Object.entries(r||{}))o[u]=d}if(t instanceof ts){const u=t.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}e.tenantId&&(o.tid=e.tenantId);const l=o;for(const u of Object.keys(l))l[u]===void 0&&delete l[u];const a=await e._getAppCheckToken(),c=a?`#${F0}=${encodeURIComponent(a)}`:"";return`${j0(e)}?${Wi(l).slice(1)}${c}`}function j0({config:e}){return e.emulator?Va(e,U0):`https://${e.authDomain}/${x0}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eo="webStorageSupport";class B0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Kf,this._completeRedirectFn=u0,this._overrideRedirectResult=a0}async _openPopup(t,n,i,s){var r;St((r=this.eventManagers[t._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Hc(t,n,i,Uo(),s);return L0(t,o,Ga())}async _openRedirect(t,n,i,s){await this._originValidation(t);const r=await Hc(t,n,i,Uo(),s);return VE(r),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:s,promise:r}=this.eventManagers[n];return s?Promise.resolve(s):(St(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(t);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(t){const n=await R0(t),i=new f0(t);return n.register("authEvent",s=>(B(s==null?void 0:s.authEvent,t,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:i},this.iframes[t._key()]=n,i}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(eo,{type:eo},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[eo];o!==void 0&&n(!!o),it(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=_0(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Lf()||Ka()||Rr()}}const H0=B0;var $c="@firebase/auth",Vc="1.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $0{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(i=>{t((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){B(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V0(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function W0(e){Hn(new mn("auth",(t,{options:n})=>{const i=t.getProvider("app").getImmediate(),s=t.getProvider("heartbeat"),r=t.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=i.options;B(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const a={apiKey:o,authDomain:l,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Mf(e)},c=new fE(i,s,r,a);return EE(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,i)=>{t.getProvider("auth-internal").initialize()})),Hn(new mn("auth-internal",t=>{const n=Qn(t.getProvider("auth").getImmediate());return(i=>new $0(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),qt($c,Vc,V0(e)),qt($c,Vc,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K0=5*60,z0=ch("authIdTokenMaxAge")||K0;let Wc=null;const q0=e=>async t=>{const n=t&&await t.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>z0)return;const s=n==null?void 0:n.token;Wc!==s&&(Wc=s,await fetch(e,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Qf(e=dh()){const t=fa(e,"auth");if(t.isInitialized())return t.getImmediate();const n=yE(e,{popupRedirectResolver:H0,persistence:[QE,BE,Kf]}),i=ch("authTokenSyncURL");if(i){const r=q0(i);ME(n,r,()=>r(n.currentUser)),LE(n,o=>r(o))}const s=ah("auth");return s&&wE(n,`http://${s}`),n}W0("Browser");const G0={apiKey:"AIzaSyCBqxMWsyK5ysK-sKGqKMqpfPRw2wCrSLg",authDomain:"remedy-964f6.firebaseapp.com",projectId:"remedy-964f6",storageBucket:"remedy-964f6.appspot.com",messagingSenderId:"748143205763",appId:"1:748143205763:web:cc40bc3306a4414016aab6"},Zf=fh(G0),ri=Qf(Zf);xy(Zf);const J0="modulepreload",X0=function(e){return"/"+e},Kc={},to=function(t,n,i){if(!n||n.length===0)return t();const s=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=X0(r),r in Kc)return;Kc[r]=!0;const o=r.endsWith(".css"),l=o?'[rel="stylesheet"]':"";if(!!i)for(let u=s.length-1;u>=0;u--){const d=s[u];if(d.href===r&&(!o||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${l}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":J0,o||(c.as="script",c.crossOrigin=""),c.href=r,document.head.appendChild(c),o)return new Promise((u,d)=>{c.addEventListener("load",u),c.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>t()).catch(r=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r})},Y0="/assets/logo1-a40fd937.png",Q0={class:"background-hero"},Z0=$e("span",{class:"line"},null,-1),ew=[Z0],tw=Gp('<div class="rotate"><div class="btn btn-icon"><img src="'+Y0+'" alt=""></div></div><div class="rotate"><div class="btn btn-icon"><i class="fa fa-facebook"></i></div></div><div class="rotate"><div class="btn btn-icon"><i class="fa fa-google-plus"></i></div></div><div class="rotate"><div class="btn btn-icon"><i class="fa fa-twitter"></i></div></div><div class="rotate"><div class="btn btn-icon"><i class="fa fa-linkedin"></i></div></div><div class="rotate"><div class="btn btn-icon"><i class="fa fa-github"></i></div></div><div class="rotate"><div class="btn btn-icon"><i class="fa fa-behance"></i></div></div>',7),nw={__name:"HomeView",setup(e){const t=Yo(!1),n=()=>{t.value=!t.value};return(i,s)=>(bn(),ws("div",Q0,[$e("div",{class:$i(["menu",{active:t.value}])},[$e("div",{class:"btn trigger",onClick:n},ew),tw],2)]))}},Xa=xm({history:em("/"),routes:[{path:"/",name:"home",component:nw},{path:"/chatgpt",name:"chatgpt",component:()=>to(()=>import("./ChatgptView-b7a01d69.js"),["assets/ChatgptView-b7a01d69.js","assets/ChatgptView-caed24d6.css"])},{path:"/navguard",name:"navguard",component:()=>to(()=>import("./NavGuardView-92b57a3d.js"),[]),meta:{requiresAuth:!0}},{path:"/login",name:"login",component:()=>to(()=>import("./LoginView-7a06cc27.js"),[])}]});Xa.beforeEach(async(e,t,n)=>{e.matched.some(i=>i.meta.requiresAuth)?await ed()?n():n({path:"/login"}):n()});const ed=()=>new Promise((e,t)=>{console.log("test currentUser",ed);const n=Hf(Qf(),i=>{n(),e(i)},t)});const iw=(e,t)=>{const n=e.__vccOpts||e;for(const[i,s]of t)n[i]=s;return n},td=e=>(sp("data-v-aa33b208"),e=e(),rp(),e),sw={class:"Prompt-1"},rw=td(()=>$e("img",{alt:"remedy",class:"logo",src:xg,width:"125",height:"125"},null,-1)),ow={class:"wrapper"},aw=td(()=>$e("span",{class:"line"},null,-1)),lw=[aw],cw={__name:"App",setup(e){let t=Yo(!1);ea(()=>{Hf(ri,i=>{i?(t.value=!0,console.log("User logged in",ri.currentUser)):(t.value=!1,console.log("User logged out",ri.currentUser))})});let n=()=>{xE(ri).then(()=>{console.log("User logged out",ri.currentUser),Xa.push("/login")}).catch(i=>{console.log(i)})};return(i,s)=>(bn(),ws("div",sw,[$e("header",null,[rw,$e("div",ow,[$e("nav",null,[ge(je(ci),{to:"/"},{default:nn(()=>[li("Home")]),_:1}),ge(je(ci),{to:"/navguard"},{default:nn(()=>[li("NavGuard")]),_:1}),ge(je(ci),{to:"/login"},{default:nn(()=>[li("Login")]),_:1}),ge(je(ci),{to:"/chatgpt"},{default:nn(()=>[li("chatgpt")]),_:1})]),je(t)?(bn(),ws("button",{key:0,onClick:s[0]||(s[0]=(...r)=>je(n)&&je(n)(...r))},"Log Out")):Jp("",!0)])]),$e("main",null,[ge(je(ih),null,{default:nn(({Component:r,route:o})=>[ge(oa,{name:"fade",mode:"out-in"},{default:nn(()=>[(bn(),ws("div",{key:o.name},[(bn(),Hu(bp(r)))]))]),_:2},1024)]),_:1}),$e("div",{class:$i(["menu",{active:i.isActive}])},[$e("div",{class:"btn trigger",onClick:s[1]||(s[1]=(...r)=>i.toggleMenu&&i.toggleMenu(...r))},lw)],2)])]))}},uw=iw(cw,[["__scopeId","data-v-aa33b208"]]);const nd=Lg(uw);nd.use(Xa);nd.mount("#app");export{iw as _,ws as a,$e as b,Qe as c,pw as d,Gp as e,li as f,Jp as g,ri as h,Oe as i,Xa as j,bn as o,Yo as r,gw as s,hw as t,je as u,dw as v,fw as w};
