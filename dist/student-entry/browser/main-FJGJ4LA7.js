import{$ as ce,$a as ot,$b as cm,A as zu,Aa as P,Ab as he,Ac as Aa,B as Uu,Ba as cn,Bb as fe,Bc as Ae,C as at,Ca as xa,Cb as Ll,Cc as fm,D as be,Da as Z,Db as ei,Dc as K,E as Ca,Ea as Zn,Eb as ti,Ec as Mi,F as dn,Fa as Ju,Fb as B,Fc as Ul,G as qn,Ga as wi,Gb as f,Gc as oo,H as Kt,Ha as Di,Hb as g,Hc as ni,I as yt,Ia as Qn,Ib as le,J as Hu,Ja as em,Jb as Le,K as $u,Ka as vt,Kb as Be,L as Gu,La as Xt,Lb as kt,M as wa,Ma as Il,Mb as st,N as qr,Na as Me,Nb as lt,O as Kr,Oa as ye,Ob as _t,P as Cn,Pa as O,Pb as Sn,Q as El,Qa as Nl,Qb as Lt,R as Ml,Ra as j,Rb as ue,S as Wu,Sa as Ea,Sb as eo,T as Rl,Ta as tm,Tb as oe,U as Yu,Ua as Zr,Ub as je,V as Xr,Va as Si,Vb as se,W as qu,Wa as nm,Wb as Vt,X as kl,Xa as Qr,Xb as qe,Y as wn,Ya as Tl,Yb as H,Z as nt,Za as Ne,Zb as $,_ as Qe,_a as v,_b as dm,a as b,aa as pt,ab as Je,ac as Vl,b as G,ba as Kn,bb as Ie,bc as xn,ca as ne,cb as Fe,cc as un,d as Ee,da as Da,db as Pe,dc as ee,e as Dl,ea as Mt,eb as Ma,ec as At,f as Oe,fa as U,fb as pe,fc as E,g as Pu,ga as X,gb as Ra,gc as ke,h as N,ha as Ku,hb as Ue,hc as En,i as ze,ia as y,ib as Jn,ic as Bl,j as Lu,ja as A,jb as im,jc as to,k as Sl,ka as d,kb as Jr,kc as no,l as $r,la as it,lb as am,lc as io,m as xl,ma as Xn,mb as Ol,mc as ve,n as Ze,na as Xu,nb as L,nc as um,o as Gr,oa as Zu,ob as Q,oc as ao,p as bt,pa as rt,pb as R,pc as ro,q as V,qa as ht,qb as rm,qc as mm,r as Vu,ra as We,rb as Fl,rc as pm,s as Ci,sa as Ye,sb as ie,sc as jl,t as Bu,ta as Sa,tb as Re,tc as Ke,u as ju,ua as Al,ub as Pl,uc as ge,v as Y,va as re,vb as om,vc as xi,w as qt,wa as q,wb as sm,wc as zl,x as Pt,xa as Rt,xb as Dn,xc as Ei,y as Wr,ya as Qu,yb as lm,yc as ka,z as Yr,za as T,zb as Se,zc as hm}from"./chunk-RXWFOL27.js";var gm=null;function It(){return gm}function Hl(n){gm??=n}var Ia=class{},Ri=(()=>{class n{historyGo(e){throw new Error("")}static \u0275fac=function(t){return new(t||n)};static \u0275prov=U({token:n,factory:()=>d(bm),providedIn:"platform"})}return n})();var bm=(()=>{class n extends Ri{_location;_history;_doc=d(q);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return It().getBaseHref(this._doc)}onPopState(e){let t=It().getGlobalEventTarget(this._doc,"window");return t.addEventListener("popstate",e,!1),()=>t.removeEventListener("popstate",e)}onHashChange(e){let t=It().getGlobalEventTarget(this._doc,"window");return t.addEventListener("hashchange",e,!1),()=>t.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,t,a){this._history.pushState(e,t,a)}replaceState(e,t,a){this._history.replaceState(e,t,a)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(t){return new(t||n)};static \u0275prov=U({token:n,factory:()=>new n,providedIn:"platform"})}return n})();function _m(n,i){return n?i?n.endsWith("/")?i.startsWith("/")?n+i.slice(1):n+i:i.startsWith("/")?n+i:`${n}/${i}`:n:i}function ym(n){let i=n.search(/#|\?|$/);return n[i-1]==="/"?n.slice(0,i-1)+n.slice(i):n}function Mn(n){return n&&n[0]!=="?"?`?${n}`:n}var so=(()=>{class n{historyGo(e){throw new Error("")}static \u0275fac=function(t){return new(t||n)};static \u0275prov=U({token:n,factory:()=>d(ay),providedIn:"root"})}return n})(),iy=new y(""),ay=(()=>{class n extends so{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,t){super(),this._platformLocation=e,this._baseHref=t??this._platformLocation.getBaseHrefFromDOM()??d(q).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return _m(this._baseHref,e)}path(e=!1){let t=this._platformLocation.pathname+Mn(this._platformLocation.search),a=this._platformLocation.hash;return a&&e?`${t}${a}`:t}pushState(e,t,a,r){let o=this.prepareExternalUrl(a+Mn(r));this._platformLocation.pushState(e,t,o)}replaceState(e,t,a,r){let o=this.prepareExternalUrl(a+Mn(r));this._platformLocation.replaceState(e,t,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(t){return new(t||n)(A(Ri),A(iy,8))};static \u0275prov=U({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Rn=(()=>{class n{_subject=new N;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let t=this._locationStrategy.getBaseHref();this._basePath=sy(ym(vm(t))),this._locationStrategy.onPopState(a=>{let r={url:this.path(!0),pop:!0,state:a.state,type:a.type};a.hasUAVisualTransition&&(r.hasUAVisualTransition=!0),this._subject.next(r)})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,t=""){return this.path()==this.normalize(e+Mn(t))}normalize(e){return n.stripTrailingSlash(oy(this._basePath,vm(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,t="",a=null){this._locationStrategy.pushState(a,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Mn(t)),a)}replaceState(e,t="",a=null){this._locationStrategy.replaceState(a,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Mn(t)),a)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(t=>{this._notifyUrlChangeListeners(t.url,t.state)}),()=>{let t=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(t,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",t){this._urlChangeListeners.forEach(a=>a(e,t))}subscribe(e,t,a){return this._subject.subscribe({next:e,error:t??void 0,complete:a??void 0})}static normalizeQueryParams=Mn;static joinWithSlash=_m;static stripTrailingSlash=ym;static \u0275fac=function(t){return new(t||n)(A(so))};static \u0275prov=U({token:n,factory:()=>ry(),providedIn:"root"})}return n})();function ry(){return new Rn(A(so))}function oy(n,i){if(!n||!i.startsWith(n))return i;let e=i.substring(n.length);return e===""||["/",";","?","#"].includes(e[0])?e:i}function vm(n){return n.replace(/\/index\.html$/,"")}function sy(n){if(new RegExp("^(https?:)?//").test(n)){let[,e]=n.split(/\/\/[^\/]+/);return e}return n}var Wl=(()=>{class n{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=d(re);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let t=this._viewContainerRef;if(this._viewRef&&t.remove(t.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let a=this._createContextForwardProxy();this._viewRef=t.createEmbeddedView(this.ngTemplateOutlet,a,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,t,a)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,t,a):!1,get:(e,t,a)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,t,a)}})}static \u0275fac=function(t){return new(t||n)(pe(Ue))};static \u0275dir=R({type:n,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[Me]})}return n})();function ly(n,i){return new ne(2100,!1)}var $l=class{createSubscription(i,e,t){return ge(()=>i.subscribe({next:e,error:t}))}dispose(i){ge(()=>i.unsubscribe())}},Gl=class{createSubscription(i,e,t){return i.then(a=>e?.(a),a=>t?.(a)),{unsubscribe:()=>{e=null,t=null}}}dispose(i){i.unsubscribe()}},dy=new Gl,cy=new $l,Yl=(()=>{class n{_ref;_latestValue=null;markForCheckOnValueUpdate=!0;_subscription=null;_obj=null;_strategy=null;applicationErrorHandler=d(xa);constructor(e){this._ref=e}ngOnDestroy(){this._subscription&&this._dispose(),this._ref=null}transform(e){if(!this._obj){if(e)try{this.markForCheckOnValueUpdate=!1,this._subscribe(e)}finally{this.markForCheckOnValueUpdate=!0}return this._latestValue}return e!==this._obj?(this._dispose(),this.transform(e)):this._latestValue}_subscribe(e){this._obj=e,this._strategy=this._selectStrategy(e),this._subscription=this._strategy.createSubscription(e,t=>this._updateLatestValue(e,t),t=>this.applicationErrorHandler(t))}_selectStrategy(e){if(Jn(e))return dy;if(im(e))return cy;throw ly(n,e)}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(e,t){e===this._obj&&(this._latestValue=t,this.markForCheckOnValueUpdate&&this._ref?.markForCheck())}static \u0275fac=function(t){return new(t||n)(pe(Ae,16))};static \u0275pipe=rm({name:"async",type:n,pure:!1})}return n})();var ki=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=Q({type:n});static \u0275inj=X({})}return n})();function Na(n,i){i=encodeURIComponent(i);for(let e of n.split(";")){let t=e.indexOf("="),[a,r]=t==-1?[e,""]:[e.slice(0,t),e.slice(t+1)];if(a.trim()!==i)continue;let o=r;try{o=decodeURIComponent(r)}catch{}return o.length>1&&o[0]==='"'&&o[o.length-1]==='"'&&(o=o.slice(1,-1)),o}return null}var ql="browser";function Cm(n){return n===ql}var Ta=class{_doc;constructor(i){this._doc=i}manager},lo=(()=>{class n extends Ta{constructor(e){super(e)}supports(e){return!0}addEventListener(e,t,a,r){return e.addEventListener(t,a,r),()=>this.removeEventListener(e,t,a,r)}removeEventListener(e,t,a,r){return e.removeEventListener(t,a,r)}static \u0275fac=function(t){return new(t||n)(A(q))};static \u0275prov=U({token:n,factory:n.\u0275fac})}return n})(),mo=new y(""),Ql=(()=>{class n{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,t){this._zone=t,e.forEach(o=>{o.manager=this});let a=e.filter(o=>!(o instanceof lo));this._plugins=a.slice().reverse();let r=e.find(o=>o instanceof lo);r&&this._plugins.push(r)}addEventListener(e,t,a,r){return this._findPluginFor(t).addEventListener(e,t,a,r)}getZone(){return this._zone}_findPluginFor(e){let t=this._eventNameToPlugin.get(e);if(t)return t;if(t=this._plugins.find(r=>r.supports(e)),!t)throw new ne(-5101,!1);return this._eventNameToPlugin.set(e,t),t}static \u0275fac=function(t){return new(t||n)(A(mo),A(P))};static \u0275prov=U({token:n,factory:n.\u0275fac})}return n})(),Kl="ng-app-id";function wm(n){for(let i of n)i.remove()}function Dm(n,i){let e=i.createElement("style");return e.textContent=n,e}function py(n,i,e,t){let a=n.head?.querySelectorAll(`style[${Kl}="${i}"],link[${Kl}="${i}"]`);if(!a||a.length===0)return!1;for(let r of a)r.removeAttribute(Kl),r instanceof HTMLLinkElement?t.set(r.href.slice(r.href.lastIndexOf("/")+1),{usage:0,elements:[r]}):r.textContent&&e.set(r.textContent,{usage:0,elements:[r]});return!0}function Zl(n,i){let e=i.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",n),e}var Jl=(()=>{class n{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,t,a,r={}){this.doc=e,this.appId=t,this.nonce=a,py(e,t,this.inline,this.external)&&this.hosts.add(e.head)}addStyles(e,t){for(let a of e)this.addUsage(a,this.inline,Dm);t?.forEach(a=>this.addUsage(a,this.external,Zl))}removeStyles(e,t){for(let a of e)this.removeUsage(a,this.inline);t?.forEach(a=>this.removeUsage(a,this.external))}addUsage(e,t,a){let r=t.get(e);r?r.usage++:t.set(e,{usage:1,elements:[...this.hosts].map(o=>this.addElement(o,a(e,this.doc)))})}removeUsage(e,t){let a=t.get(e);a&&(a.usage--,a.usage<=0&&(wm(a.elements),t.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])wm(e);this.hosts.clear()}addHost(e){if(!this.hosts.has(e)){this.hosts.add(e);for(let[t,{elements:a}]of this.inline)a.push(this.addElement(e,Dm(t,this.doc)));for(let[t,{elements:a}]of this.external)a.push(this.addElement(e,Zl(t,this.doc)))}}removeHost(e){this.hosts.delete(e);for(let t of[...this.inline.values(),...this.external.values()]){let a=[];for(let r of t.elements)r.parentNode===e?r.remove():a.push(r);t.elements=a}}addElement(e,t){return this.nonce&&t.setAttribute("nonce",this.nonce),e.appendChild(t)}static \u0275fac=function(t){return new(t||n)(A(q),A(Zn),A(Qn,8),A(wi))};static \u0275prov=U({token:n,factory:n.\u0275fac})}return n})(),Xl={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},ed=/%COMP%/g;var xm="%COMP%",hy=`_nghost-${xm}`,fy=`_ngcontent-${xm}`,gy=!0,by=new y("",{factory:()=>gy}),yy=new y("");function vy(n){return fy.replace(ed,n)}function _y(n){return hy.replace(ed,n)}function Em(n,i){return i.map(e=>e.replace(ed,n))}var Pa=(()=>{class n{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;cssVarNamespace;constructor(e,t,a,r,o,l,s=null,u=null,c=null){this.eventManager=e,this.sharedStylesHost=t,this.appId=a,this.removeStylesOnCompDestroy=r,this.doc=o,this.ngZone=l,this.nonce=s,this.tracingService=u,this.cssVarNamespace=c??"",this.defaultRenderer=new Oa(e,o,l,this.tracingService,this.cssVarNamespace)}createRenderer(e,t){if(!e||!t)return this.defaultRenderer;let a=this.getOrCreateRenderer(e,t);return a instanceof uo?a.applyToHost(e):a instanceof Fa&&a.applyStyles(),a}getOrCreateRenderer(e,t){let a=this.rendererByCompId,r=a.get(t.id);if(!r){let o=this.doc,l=this.ngZone,s=this.eventManager,u=this.sharedStylesHost,c=this.removeStylesOnCompDestroy,m=this.tracingService;switch(t.encapsulation){case Zr.Emulated:r=new uo(s,u,t,this.appId,c,o,l,m,this.cssVarNamespace);break;case Zr.ShadowDom:return new co(s,e,t,o,l,this.nonce,m,this.cssVarNamespace,u);case Zr.ExperimentalIsolatedShadowDom:return new co(s,e,t,o,l,this.nonce,m,this.cssVarNamespace);default:r=new Fa(s,u,t,c,o,l,m,this.cssVarNamespace);break}a.set(t.id,r)}return r}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(t){return new(t||n)(A(Ql),A(Ma),A(Zn),A(by),A(q),A(P),A(Qn),A(Qr,8),A(yy,8))};static \u0275prov=U({token:n,factory:n.\u0275fac})}return n})(),Oa=class{eventManager;doc;ngZone;tracingService;cssVarNamespace;data=Object.create(null);throwOnSyntheticProps=!0;constructor(i,e,t,a,r=""){this.eventManager=i,this.doc=e,this.ngZone=t,this.tracingService=a,this.cssVarNamespace=r}destroy(){}destroyNode=null;createElement(i,e){return e?this.doc.createElementNS(Xl[e]||e,i):this.doc.createElement(i)}createComment(i){return this.doc.createComment(i)}createText(i){return this.doc.createTextNode(i)}appendChild(i,e){(Sm(i)?i.content:i).appendChild(e)}insertBefore(i,e,t){if(i){let a=Sm(i)?i.content:i;if(t!=null&&t.parentNode!==a)throw new ne(-5106,!1);a.insertBefore(e,t)}}removeChild(i,e){e.remove()}selectRootElement(i,e){let t=typeof i=="string"?this.doc.querySelector(i):i;if(!t)throw new ne(-5104,!1);return e||(t.textContent=""),t}parentNode(i){return i.parentNode}nextSibling(i){return i.nextSibling}setAttribute(i,e,t,a){if(a){e=a+":"+e;let r=Xl[a];r?i.setAttributeNS(r,e,t):i.setAttribute(e,t)}else i.setAttribute(e,t)}removeAttribute(i,e,t){if(t){let a=Xl[t];a?i.removeAttributeNS(a,e):i.removeAttribute(`${t}:${e}`)}else i.removeAttribute(e)}addClass(i,e){i.classList.add(e)}removeClass(i,e){i.classList.remove(e)}setStyle(i,e,t,a){let r=e.startsWith("--");r&&(e=e.replace("%NS%",this.cssVarNamespace)),r||a&(Si.DashCase|Si.Important)?i.style.setProperty(e,t,a&Si.Important?"important":""):i.style[e]=t}removeStyle(i,e,t){let a=e.startsWith("--");a&&(e=e.replace("%NS%",this.cssVarNamespace)),a||t&Si.DashCase?i.style.removeProperty(e):i.style[e]=""}setProperty(i,e,t){i!=null&&(i[e]=t)}setValue(i,e){i.nodeValue=e}listen(i,e,t,a){if(typeof i=="string"&&(i=It().getGlobalEventTarget(this.doc,i),!i))throw new ne(-5102,!1);let r=this.decoratePreventDefault(t);return this.tracingService?.wrapEventListener&&(r=this.tracingService.wrapEventListener(i,e,r)),this.eventManager.addEventListener(i,e,r,a)}decoratePreventDefault(i){return e=>{if(e==="__ngUnwrap__")return i;i(e)===!1&&e.preventDefault()}}};function Sm(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var co=class extends Oa{hostEl;sharedStylesHost;shadowRoot;constructor(i,e,t,a,r,o,l,s,u){super(i,a,r,l,s),this.hostEl=e,this.sharedStylesHost=u,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let c=t.styles;c=Em(t.id,c).map(p=>p.replace(/%NS%/g,s));for(let p of c){let h=document.createElement("style");o&&h.setAttribute("nonce",o),h.textContent=p,this.shadowRoot.appendChild(h)}let m=t.getExternalStyles?.();if(m)for(let p of m){let h=Zl(p,a);o&&h.setAttribute("nonce",o),this.shadowRoot.appendChild(h)}}nodeOrShadowRoot(i){return i===this.hostEl?this.shadowRoot:i}appendChild(i,e){return super.appendChild(this.nodeOrShadowRoot(i),e)}insertBefore(i,e,t){return super.insertBefore(this.nodeOrShadowRoot(i),e,t)}removeChild(i,e){return super.removeChild(null,e)}parentNode(i){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(i)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},Fa=class extends Oa{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(i,e,t,a,r,o,l,s,u){super(i,r,o,l,s),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=a;let c=t.styles,m=u?Em(u,c):c;this.styles=m.map(p=>p.replace(/%NS%/g,s)),this.styleUrls=t.getExternalStyles?.(u)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&nm.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},uo=class extends Fa{contentAttr;hostAttr;constructor(i,e,t,a,r,o,l,s,u){let c=a+"-"+t.id;super(i,e,t,r,o,l,s,u,c),this.contentAttr=vy(c),this.hostAttr=_y(c)}applyToHost(i){this.applyStyles(),this.setAttribute(i,this.hostAttr,"")}createElement(i,e){let t=super.createElement(i,e);return super.setAttribute(t,this.contentAttr,""),t}};var po=class n extends Ia{supportsDOMEvents=!0;static makeCurrent(){Hl(new n)}onAndCancel(i,e,t,a){return i.addEventListener(e,t,a),()=>{i.removeEventListener(e,t,a)}}dispatchEvent(i,e){i.dispatchEvent(e)}remove(i){i.remove()}createElement(i,e){return e=e||this.getDefaultDocument(),e.createElement(i)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(i){return i.nodeType===Node.ELEMENT_NODE}isShadowRoot(i){return i instanceof DocumentFragment}getGlobalEventTarget(i,e){return e==="window"?window:e==="document"?i:e==="body"?i.body:null}getBaseHref(i){let e=Cy();return e==null?null:wy(e)}resetBaseElement(){La=null}getUserAgent(){return window.navigator.userAgent}getCookie(i){return Na(document.cookie,i)}},La=null;function Cy(){return La=La||document.head.querySelector("base"),La?La.getAttribute("href"):null}function wy(n){return new URL(n,document.baseURI).pathname}var Mm=["alt","control","meta","shift"],Dy={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Sy={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},Rm=(()=>{class n extends Ta{constructor(e){super(e)}supports(e){return n.parseEventName(e)!=null}addEventListener(e,t,a,r){let o=n.parseEventName(t),l=n.eventCallback(o.fullKey,a,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>It().onAndCancel(e,o.domEventName,l,r))}static parseEventName(e){let t=e.toLowerCase().split("."),a=t.shift();if(t.length===0||!(a==="keydown"||a==="keyup"))return null;let r=n._normalizeKey(t.pop()),o="",l=t.indexOf("code");if(l>-1&&(t.splice(l,1),o="code."),Mm.forEach(u=>{let c=t.indexOf(u);c>-1&&(t.splice(c,1),o+=u+".")}),o+=r,t.length!=0||r.length===0)return null;let s={};return s.domEventName=a,s.fullKey=o,s}static matchEventFullKeyCode(e,t){let a=Dy[e.key]||e.key,r="";return t.indexOf("code.")>-1&&(a=e.code,r="code."),a==null||!a?!1:(a=a.toLowerCase(),a===" "?a="space":a==="."&&(a="dot"),Mm.forEach(o=>{if(o!==a){let l=Sy[o];l(e)&&(r+=o+".")}}),r+=a,r===t)}static eventCallback(e,t,a){return r=>{n.matchEventFullKeyCode(r,e)&&a.runGuarded(()=>t(r))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(t){return new(t||n)(A(q))};static \u0275prov=U({token:n,factory:n.\u0275fac})}return n})();async function td(n,i,e){let t=b({rootComponent:n},xy(i,e));return fm(t)}function xy(n,i){return{platformRef:i?.platformRef,appProviders:[...Ay,...n?.providers??[]],platformProviders:ky}}function Ey(){po.makeCurrent()}function My(){return new cn}function Ry(){return tm(document),document}var ky=[{provide:wi,useValue:ql},{provide:Ju,useValue:Ey,multi:!0},{provide:q,useFactory:Ry}];var Ay=[{provide:Zu,useValue:"root"},{provide:cn,useFactory:My},{provide:mo,useClass:lo,multi:!0},{provide:mo,useClass:Rm,multi:!0},Pa,{provide:Ma,useClass:Jl},{provide:Jl,useExisting:Ma},Ql,{provide:Je,useExisting:Pa},[]];var pn=class n{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(i){i?typeof i=="string"?this.lazyInit=()=>{this.headers=new Map,i.split(`
`).forEach(e=>{let t=e.indexOf(":");if(t>0){let a=e.slice(0,t),r=e.slice(t+1).trim();this.addHeaderEntry(a,r)}})}:typeof Headers<"u"&&i instanceof Headers?(this.headers=new Map,i.forEach((e,t)=>{this.addHeaderEntry(t,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(i).forEach(([e,t])=>{this.setHeaderEntries(e,t)})}:this.headers=new Map}has(i){return this.init(),this.headers.has(i.toLowerCase())}get(i){this.init();let e=this.headers.get(i.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(i){return this.init(),this.headers.get(i.toLowerCase())||null}append(i,e){return this.clone({name:i,value:e,op:"a"})}set(i,e){return this.clone({name:i,value:e,op:"s"})}delete(i,e){return this.clone({name:i,value:e,op:"d"})}maybeSetNormalizedName(i,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,i)}init(){this.lazyInit&&(this.lazyInit instanceof n?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(i=>this.applyUpdate(i)),this.lazyUpdate=null))}copyFrom(i){i.init();for(let[e,t]of i.headers.entries())this.headers.set(e,t),this.normalizedNames.set(e,i.normalizedNames.get(e))}clone(i){let e=new n;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof n?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([i]),e}applyUpdate(i){let e=i.name.toLowerCase();switch(i.op){case"a":case"s":let t=i.value;if(typeof t=="string"&&(t=[t]),t.length===0)return;this.maybeSetNormalizedName(i.name,e);let a=i.op==="a"?(this.headers.get(e)||[]).slice():[];a.push(...t),this.headers.set(e,a);break;case"d":let r=i.value;if(r===void 0)this.headers.delete(e),this.normalizedNames.delete(e);else{let o=Array.isArray(r)?r:[r],l=this.headers.get(e);if(!l)return;l=l.filter(s=>o.indexOf(s)===-1),l.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,l)}break}}addHeaderEntry(i,e){let t=i.toLowerCase();this.maybeSetNormalizedName(i,t),this.headers.has(t)?this.headers.get(t).push(e):this.headers.set(t,[e])}setHeaderEntries(i,e){let t=(Array.isArray(e)?e:[e]).map(r=>r.toString()),a=i.toLowerCase();this.headers.set(a,t),this.maybeSetNormalizedName(i,a)}forEach(i){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>i(this.normalizedNames.get(e),this.headers.get(e)))}};var fo=class{map=new Map;set(i,e){return this.map.set(i,e),this}get(i){return this.map.has(i)||this.map.set(i,i.defaultValue()),this.map.get(i)}delete(i){return this.map.delete(i),this}has(i){return this.map.has(i)}keys(){return this.map.keys()}},go=class{encodeKey(i){return km(i)}encodeValue(i){return km(i)}decodeKey(i){return decodeURIComponent(i)}decodeValue(i){return decodeURIComponent(i)}};function Iy(n,i){let e=new Map;return n.length>0&&n.replace(/^\?/,"").split("&").forEach(a=>{let r=a.indexOf("="),[o,l]=r==-1?[i.decodeKey(a),""]:[i.decodeKey(a.slice(0,r)),i.decodeValue(a.slice(r+1))],s=e.get(o)||[];s.push(l),e.set(o,s)}),e}var Ny=/%(\d[a-f0-9])/gi,Ty={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function km(n){return encodeURIComponent(n).replace(Ny,(i,e)=>Ty[e]??i)}function ho(n){return`${n}`}var mn=class n{map;encoder;updates=null;cloneFrom=null;constructor(i={}){if(this.encoder=i.encoder||new go,i.fromString){if(i.fromObject)throw new ne(2805,!1);this.map=Iy(i.fromString,this.encoder)}else i.fromObject?(this.map=new Map,Object.keys(i.fromObject).forEach(e=>{let t=i.fromObject[e],a=Array.isArray(t)?t.map(ho):[ho(t)];this.map.set(e,a)})):this.map=null}has(i){return this.init(),this.map.has(i)}get(i){this.init();let e=this.map.get(i);return e?e[0]:null}getAll(i){return this.init(),this.map.get(i)||null}keys(){return this.init(),Array.from(this.map.keys())}append(i,e){return this.clone({param:i,value:e,op:"a"})}appendAll(i){let e=[];return Object.keys(i).forEach(t=>{let a=i[t];Array.isArray(a)?a.forEach(r=>{e.push({param:t,value:r,op:"a"})}):e.push({param:t,value:a,op:"a"})}),this.clone(e)}set(i,e){return this.clone({param:i,value:e,op:"s"})}delete(i,e){return this.clone({param:i,value:e,op:"d"})}toString(){return this.init(),this.keys().map(i=>{let e=this.encoder.encodeKey(i);return this.map.get(i).map(t=>e+"="+this.encoder.encodeValue(t)).join("&")}).filter(i=>i!=="").join("&")}clone(i){let e=new n({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(i),e}init(){if(this.map===null&&(this.map=new Map),this.cloneFrom!==null){this.cloneFrom.init();for(let[i,e]of this.cloneFrom.map.entries())this.map.set(i,e);this.updates.forEach(i=>{switch(i.op){case"a":case"s":let e=i.op==="a"?(this.map.get(i.param)||[]).slice():[];e.push(ho(i.value)),this.map.set(i.param,e);break;case"d":if(i.value!==void 0){let t=(this.map.get(i.param)||[]).slice(),a=t.indexOf(ho(i.value));a!==-1&&t.splice(a,1),t.length>0?this.map.set(i.param,t):this.map.delete(i.param)}else{this.map.delete(i.param);break}}}),this.cloneFrom=this.updates=null}}};function Oy(n){switch(n){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function Am(n){return typeof ArrayBuffer<"u"&&n instanceof ArrayBuffer}function Im(n){return typeof Blob<"u"&&n instanceof Blob}function Nm(n){return typeof FormData<"u"&&n instanceof FormData}function Fy(n){return typeof URLSearchParams<"u"&&n instanceof URLSearchParams}var nd="Content-Type",Tm="Accept",Pm="text/plain",Lm="application/json",Py=`${Lm}, ${Pm}, */*`,Ai=class n{url;body=null;headers;context;reportProgress=!1;reportUploadProgress=!1;reportDownloadProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(i,e,t,a){this.url=e,this.method=i.toUpperCase();let r;if(Oy(this.method)||a?(this.body=t!==void 0?t:null,r=a):r=t,r){if(this.reportProgress=!!r.reportProgress,this.reportUploadProgress=!!r.reportUploadProgress,this.reportDownloadProgress=!!r.reportDownloadProgress,this.withCredentials=!!r.withCredentials,this.keepalive=!!r.keepalive,r.responseType&&(this.responseType=r.responseType),r.headers&&(this.headers=r.headers),r.context&&(this.context=r.context),r.params&&(this.params=r.params),r.priority&&(this.priority=r.priority),r.cache&&(this.cache=r.cache),r.credentials&&(this.credentials=r.credentials),typeof r.timeout=="number"){if(r.timeout<1||!Number.isInteger(r.timeout))throw new ne(2822,"");this.timeout=r.timeout}r.mode&&(this.mode=r.mode),r.redirect&&(this.redirect=r.redirect),r.integrity&&(this.integrity=r.integrity),r.referrer!==void 0&&(this.referrer=r.referrer),r.referrerPolicy&&(this.referrerPolicy=r.referrerPolicy),this.transferCache=r.transferCache}if(this.headers??=new pn,this.context??=new fo,!this.params)this.params=new mn,this.urlWithParams=e;else{let o=this.params.toString();if(o.length===0)this.urlWithParams=e;else{let l=e,s="",u=e.indexOf("#");u!==-1&&(s=e.substring(u),l=e.substring(0,u));let c=l.indexOf("?"),m=c===-1?"?":c<l.length-1?"&":"";this.urlWithParams=l+m+o+s}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||Am(this.body)||Im(this.body)||Nm(this.body)||Fy(this.body)?this.body:this.body instanceof mn?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||Nm(this.body)?null:Im(this.body)?this.body.type||null:Am(this.body)?null:typeof this.body=="string"?Pm:this.body instanceof mn?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?Lm:null}clone(i={}){let e=i.method||this.method,t=i.url||this.url,a=i.responseType||this.responseType,r=i.keepalive??this.keepalive,o=i.priority||this.priority,l=i.cache||this.cache,s=i.mode||this.mode,u=i.redirect||this.redirect,c=i.credentials||this.credentials,m=i.referrer??this.referrer,p=i.integrity||this.integrity,h=i.referrerPolicy||this.referrerPolicy,_=i.transferCache??this.transferCache,D=i.timeout??this.timeout,C=i.body!==void 0?i.body:this.body,w=i.withCredentials??this.withCredentials,x=i.reportProgress??this.reportProgress,S=i.reportUploadProgress??this.reportUploadProgress,k=i.reportDownloadProgress??this.reportDownloadProgress,I=i.headers||this.headers,F=i.params||this.params,me=i.context??this.context;return i.setHeaders!==void 0&&(I=Object.keys(i.setHeaders).reduce((_e,Ve)=>_e.set(Ve,i.setHeaders[Ve]),I)),i.setParams&&(F=Object.keys(i.setParams).reduce((_e,Ve)=>_e.set(Ve,i.setParams[Ve]),F)),new n(e,t,C,{params:F,headers:I,context:me,reportProgress:x,reportUploadProgress:S,reportDownloadProgress:k,responseType:a,withCredentials:w,transferCache:_,keepalive:r,cache:l,priority:o,timeout:D,mode:s,redirect:u,credentials:c,referrer:m,integrity:p,referrerPolicy:h})}},ai=(function(n){return n[n.Sent=0]="Sent",n[n.UploadProgress=1]="UploadProgress",n[n.ResponseHeader=2]="ResponseHeader",n[n.DownloadProgress=3]="DownloadProgress",n[n.Response=4]="Response",n[n.User=5]="User",n})(ai||{}),Ii=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(i,e=200,t="OK"){this.headers=i.headers||new pn,this.status=i.status!==void 0?i.status:e,this.statusText=i.statusText||t,this.url=i.url||null,this.redirected=i.redirected,this.responseType=i.responseType,this.ok=this.status>=200&&this.status<300}},bo=class n extends Ii{constructor(i={}){super(i)}type=ai.ResponseHeader;clone(i={}){return new n({headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0})}},Va=class n extends Ii{body;constructor(i={}){super(i),this.body=i.body!==void 0?i.body:null}type=ai.Response;clone(i={}){return new n({body:i.body!==void 0?i.body:this.body,headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0,redirected:i.redirected??this.redirected,responseType:i.responseType??this.responseType})}},ii=class extends Ii{name="HttpErrorResponse";message;error;ok=!1;constructor(i){super(i,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${i.url||"(unknown url)"}`:this.message=`Http failure response for ${i.url||"(unknown url)"}: ${i.status} ${i.statusText}`,this.error=i.error||null}},Ly=200;var Vy=/^\)\]\}',?\n/,YE=1024*1024,Vm=new y("",{factory:()=>null}),yo=(()=>{class n{fetchImpl=d(ad,{optional:!0})?.fetch??((...e)=>globalThis.fetch(...e));ngZone=d(P);destroyRef=d(Rt);maxResponseSize=d(Vm);handle(e){return new Oe(t=>{let a=new AbortController,r=!1,o={next:s=>{s.type===ai.Response&&(r=!0),t.next(s)},error:s=>{r=!0,t.error(s)},complete:()=>{r=!0,t.complete()}};this.doRequest(e,a.signal,o).then(rd,s=>o.error(new ii({error:s})));let l;return e.timeout&&(l=this.ngZone.runOutsideAngular(()=>setTimeout(()=>{a.signal.aborted||a.abort(new DOMException("signal timed out","TimeoutError"))},e.timeout))),()=>{l!==void 0&&clearTimeout(l),!r&&!a.signal.aborted&&a.abort()}})}async doRequest(e,t,a){let r=this.createRequestInit(e),o;try{let C=this.ngZone.runOutsideAngular(()=>this.fetchImpl(e.urlWithParams,b({signal:t},r)));By(C),a.next({type:ai.Sent}),o=await C}catch(C){a.error(new ii({error:C,status:C.status??0,statusText:C.statusText,url:e.urlWithParams,headers:C.headers}));return}let l=new pn(o.headers),s=o.statusText,u=o.url||e.urlWithParams,c=o.status,m=null,p=e.reportProgress||e.reportDownloadProgress;if(p&&a.next(new bo({headers:l,status:c,statusText:s,url:u})),o.body){let C=o.headers.get(nd)??"",w=o.headers.get("content-length"),x=w!==null?Number(w):NaN;this.maxResponseSize!==null&&Number.isFinite(x)&&x>this.maxResponseSize&&(await o.body.cancel(),Om(this.maxResponseSize));let S=[],k=o.body.getReader(),I=0,F,me,_e=typeof Zone<"u"&&Zone.current,Ve=!1;if(await this.ngZone.runOutsideAngular(async()=>{for(;;){if(this.destroyRef.destroyed){await k.cancel(),Ve=!0;break}let{done:Ce,value:M}=await k.read();if(Ce)break;if(S.push(M),I+=M.length,this.maxResponseSize!==null&&I>this.maxResponseSize&&(await k.cancel(),Om(this.maxResponseSize)),p){me=e.responseType==="text"?(me??"")+(F??=Fm(C)).decode(M,{stream:!0}):void 0;let De=()=>a.next({type:ai.DownloadProgress,total:Number.isFinite(x)?x:void 0,loaded:I,partialText:me});_e?_e.run(De):De()}}}),Ve){a.complete();return}let J=this.concatChunks(S,I);try{m=this.parseBody(e,J,C,c)}catch(Ce){a.error(new ii({error:Ce,headers:new pn(o.headers),status:o.status,statusText:o.statusText,url:o.url||e.urlWithParams}));return}}c===0&&(c=m?Ly:0);let h=c>=200&&c<300,_=o.redirected,D=o.type;h?(a.next(new Va({body:m,headers:l,status:c,statusText:s,url:u,redirected:_,responseType:D})),a.complete()):a.error(new ii({error:m,headers:l,status:c,statusText:s,url:u,redirected:_,responseType:D}))}parseBody(e,t,a,r){switch(e.responseType){case"json":let o=new TextDecoder().decode(t).replace(Vy,"");if(o==="")return null;try{return JSON.parse(o)}catch(l){if(r<200||r>=300)return o;throw l}case"text":return Fm(a).decode(t);case"blob":return new Blob([t],{type:a});case"arraybuffer":return t.buffer}}createRequestInit(e){if(e.reportUploadProgress)throw new ne(2824,!1);let t={},a;if(a=e.credentials,e.withCredentials&&(a="include"),e.headers.forEach((r,o)=>t[r]=o.join(",")),e.headers.has(Tm)||(t[Tm]=Py),!e.headers.has(nd)){let r=e.detectContentTypeHeader();r!==null&&(t[nd]=r)}return{body:e.serializeBody(),method:e.method,headers:t,credentials:a,keepalive:e.keepalive,cache:e.cache,priority:e.priority,mode:e.mode,redirect:e.redirect,referrer:e.referrer,integrity:e.integrity,referrerPolicy:e.referrerPolicy}}concatChunks(e,t){let a=new Uint8Array(t),r=0;for(let o of e)a.set(o,r),r+=o.length;return a}static \u0275fac=function(t){return new(t||n)};static \u0275prov=O({token:n,factory:n.\u0275fac})}return n})(),ad=class{};function rd(){}function By(n){n.then(rd,rd)}function Om(n){throw new ne(-2825,!1)}var jy=/charset=\s*["']?([^;"'\s]+)["']?/i;function Fm(n){let i=n.match(jy);if(i!==null)try{return new TextDecoder(i[1])}catch{}return new TextDecoder}var zy=new y("",{factory:()=>!0}),Uy="XSRF-TOKEN",Hy=new y("",{factory:()=>Uy}),$y="X-XSRF-TOKEN",Gy=new y("",{factory:()=>$y}),Wy=(()=>{class n{cookieName=d(Hy);doc=d(q);lastCookieString="";lastToken=null;parseCount=0;getToken(){let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=Na(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(t){return new(t||n)};static \u0275prov=O({token:n,factory:n.\u0275fac})}return n})(),Bm=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=U({token:n,factory:function(t){let a=null;return t?a=new(t||n):a=A(Wy),a},providedIn:"root"})}return n})();function jm(n,i){if(!d(zy)||n.method==="GET"||n.method==="HEAD")return i(n);try{let a=d(Ri).href,{origin:r}=new URL(a),{origin:o}=new URL(n.url,r);if(r!==o)return i(n)}catch{return i(n)}let e=d(Bm).getToken(),t=d(Gy);return e!=null&&!n.headers.has(t)&&(n=n.clone({headers:n.headers.set(t,e)})),i(n)}function Yy(n,i){return i(n)}function qy(n,i,e){return(t,a)=>ht(e,()=>i(t,r=>n(r,a)))}var zm=new y("",{factory:()=>[jm]}),Um=new y(""),Hm=new y("",{factory:()=>!0});var od=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=U({token:n,factory:function(t){let a=null;return t?a=new(t||n):a=A(yo),a},providedIn:"root"})}return n})();var vo=(()=>{class n{backend;injector;chain=null;pendingTasks=d(Il);contributeToStability=d(Hm);constructor(e,t){this.backend=e,this.injector=t}handle(e){if(this.chain===null){let a=this.injector.get(_o,null,{skipSelf:!0}),r=a!==null&&this.backend===a,o=this.injector.get(Um,[],r?{self:!0}:void 0),l=Array.from(new Set([...this.injector.get(zm),...o]));this.chain=l.reduceRight((s,u)=>qy(s,u,this.injector),Yy)}let t=this.chain;if(this.contributeToStability){let a=this.pendingTasks.add();return ge(()=>t(e,r=>this.backend.handle(r))).pipe(Kr(a))}else return ge(()=>t(e,a=>this.backend.handle(a)))}static \u0275fac=function(t){return new(t||n)(A(od),A(rt))};static \u0275prov=U({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),_o=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=U({token:n,factory:function(t){let a=null;return t?a=new(t||n):a=A(vo),a},providedIn:"root"})}return n})();function id(n,i){return b({body:i},n)}var Co=(()=>{class n{handler;constructor(e){this.handler=e}request(e,t,a={}){let r;if(e instanceof Ai)r=e;else{let s;a.headers instanceof pn?s=a.headers:s=new pn(a.headers);let u;a.params&&(a.params instanceof mn?u=a.params:u=new mn({fromObject:a.params})),r=new Ai(e,t,a.body!==void 0?a.body:null,{headers:s,context:a.context,params:u,reportProgress:a.reportProgress,reportUploadProgress:a.reportUploadProgress,reportDownloadProgress:a.reportDownloadProgress,responseType:a.responseType||"json",withCredentials:a.withCredentials,transferCache:a.transferCache,keepalive:a.keepalive,priority:a.priority,cache:a.cache,mode:a.mode,redirect:a.redirect,credentials:a.credentials,referrer:a.referrer,referrerPolicy:a.referrerPolicy,integrity:a.integrity,timeout:a.timeout})}let o=V(r).pipe(qn(s=>this.handler.handle(s)));if(e instanceof Ai||a.observe==="events")return o;let l=o.pipe(be(s=>s instanceof Va));switch(a.observe||"body"){case"body":switch(r.responseType){case"arraybuffer":return l.pipe(Y(s=>{if(s.body!==null&&!(s.body instanceof ArrayBuffer))throw new ne(2806,!1);return s.body}));case"blob":return l.pipe(Y(s=>{if(s.body!==null&&!(s.body instanceof Blob))throw new ne(2807,!1);return s.body}));case"text":return l.pipe(Y(s=>{if(s.body!==null&&typeof s.body!="string")throw new ne(2808,!1);return s.body}));default:return l.pipe(Y(s=>s.body))}case"response":return l;default:throw new ne(2809,!1)}}delete(e,t={}){return this.request("DELETE",e,t)}get(e,t={}){return this.request("GET",e,t)}head(e,t={}){return this.request("HEAD",e,t)}jsonp(e,t){return this.request("JSONP",e,{params:new mn().append(t,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,t={}){return this.request("OPTIONS",e,t)}patch(e,t,a={}){return this.request("PATCH",e,id(a,t))}post(e,t,a={}){return this.request("POST",e,id(a,t))}put(e,t,a={}){return this.request("PUT",e,id(a,t))}static \u0275fac=function(t){return new(t||n)(A(_o))};static \u0275prov=U({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function sd(...n){let i=[Co,yo,vo,{provide:_o,useExisting:vo},{provide:od,useFactory:()=>d(yo)},{provide:zm,useValue:jm,multi:!0}];for(let e of n)i.push(...e.\u0275providers);return it(i)}var $m=(()=>{class n{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(t){return new(t||n)(A(q))};static \u0275prov=U({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var ae="primary",Qa=Symbol("RouteTitle"),pd=class{params;constructor(i){this.params=i||{}}has(i){return Object.hasOwn(this.params,i)}get(i){if(this.has(i)){let e=this.params[i];return Array.isArray(e)?e[0]:e}return null}getAll(i){if(this.has(i)){let e=this.params[i];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function oi(n){return new pd(n)}function ld(n,i,e){for(let t=0;t<n.length;t++){let a=n[t],r=i[t];if(a[0]===":")e[a.substring(1)]=r;else if(a!==r.path)return!1}return!0}function Zm(n,i,e){let t=e.path.split("/"),a=t.indexOf("**");if(a===-1){if(t.length>n.length||e.pathMatch==="full"&&(i.hasChildren()||t.length<n.length))return null;let s={},u=n.slice(0,t.length);return ld(t,u,s)?{consumed:u,posParams:s}:null}if(a!==t.lastIndexOf("**"))return null;let r=t.slice(0,a),o=t.slice(a+1);if(r.length+o.length>n.length||e.pathMatch==="full"&&i.hasChildren()&&e.path!=="**")return null;let l={};return!ld(r,n.slice(0,r.length),l)||!ld(o,n.slice(n.length-o.length),l)?null:{consumed:n,posParams:l}}function Mo(n){return new Promise((i,e)=>{n.pipe(Cn()).subscribe({next:t=>i(t),error:t=>e(t)})})}function Jy(n,i){if(n.length!==i.length)return!1;for(let e=0;e<n.length;++e)if(!Qt(n[e],i[e]))return!1;return!0}function Qt(n,i){let e=n?hd(n):void 0,t=i?hd(i):void 0;if(!e||!t||e.length!=t.length)return!1;let a;for(let r=0;r<e.length;r++)if(a=e[r],!Qm(n[a],i[a]))return!1;return!0}function hd(n){return[...Object.keys(n),...Object.getOwnPropertySymbols(n)]}function Qm(n,i){if(Array.isArray(n)&&Array.isArray(i)){if(n.length!==i.length)return!1;let e=[...n].sort(),t=[...i].sort();return e.every((a,r)=>t[r]===a)}else return n===i}function ev(n){return n.length>0?n[n.length-1]:null}function di(n){return Ci(n)?n:Jn(n)?bt(Promise.resolve(n)):V(n)}function Jm(n){return Ci(n)?Mo(n):Promise.resolve(n)}var tv={exact:np,subset:ip},ep={exact:nv,subset:iv,ignored:()=>!0},tp={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},Ro={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function fd(n,i,e){let t=b(b({},Ro),e||{});return tv[t.paths](n.root,i.root,t.matrixParams)&&ep[t.queryParams](n.queryParams,i.queryParams)&&!(t.fragment==="exact"&&n.fragment!==i.fragment)}function nv(n,i){return Qt(n,i)}function np(n,i,e){if(!ri(n.segments,i.segments)||!So(n.segments,i.segments,e)||n.numberOfChildren!==i.numberOfChildren)return!1;for(let t in i.children)if(!n.children[t]||!np(n.children[t],i.children[t],e))return!1;return!0}function iv(n,i){return Object.keys(i).length<=Object.keys(n).length&&Object.keys(i).every(e=>Qm(n[e],i[e]))}function ip(n,i,e){return ap(n,i,i.segments,e)}function ap(n,i,e,t){if(n.segments.length>e.length){let a=n.segments.slice(0,e.length);return!(!ri(a,e)||i.hasChildren()||!So(a,e,t))}else if(n.segments.length===e.length){if(!ri(n.segments,e)||!So(n.segments,e,t))return!1;for(let a in i.children)if(!n.children[a]||!ip(n.children[a],i.children[a],t))return!1;return!0}else{let a=e.slice(0,n.segments.length),r=e.slice(n.segments.length);return!ri(n.segments,a)||!So(n.segments,a,t)||!n.children[ae]?!1:ap(n.children[ae],i,r,t)}}function So(n,i,e){return i.every((t,a)=>ep[e](n[a].parameters,t.parameters))}var Nt=class{root;queryParams;fragment;_queryParamMap;constructor(i=new we([],{}),e={},t=null){this.root=i,this.queryParams=e,this.fragment=t}get queryParamMap(){return this._queryParamMap??=oi(this.queryParams),this._queryParamMap}toString(){return ov.serialize(this)}},we=class{segments;children;parent=null;constructor(i,e){this.segments=i,this.children=e,Object.values(e).forEach(t=>t.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return xo(this)}},kn=class{path;parameters;_parameterMap;constructor(i,e){this.path=i,this.parameters=e}get parameterMap(){return this._parameterMap??=oi(this.parameters),this._parameterMap}toString(){return op(this)}};function av(n,i){return ri(n,i)&&n.every((e,t)=>Qt(e.parameters,i[t].parameters))}function ri(n,i){return n.length!==i.length?!1:n.every((e,t)=>e.path===i[t].path)}function rv(n,i){let e=[];return Object.entries(n.children).forEach(([t,a])=>{t===ae&&(e=e.concat(i(a,t)))}),Object.entries(n.children).forEach(([t,a])=>{t!==ae&&(e=e.concat(i(a,t)))}),e}var Ja=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=O({token:n,factory:()=>new An})}return n})(),An=class{parse(i){let e=new bd(i);return new Nt(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(i){let e=`/${Ba(i.root,!0)}`,t=dv(i.queryParams),a=typeof i.fragment=="string"?`#${sv(i.fragment)}`:"";return`${e}${t}${a}`}},ov=new An;function xo(n){return n.segments.map(i=>op(i)).join("/")}function Ba(n,i){if(!n.hasChildren())return xo(n);if(i){let e=n.children[ae]?Ba(n.children[ae],!1):"",t=[];return Object.entries(n.children).forEach(([a,r])=>{a!==ae&&t.push(`${a}:${Ba(r,!1)}`)}),t.length>0?`${e}(${t.join("//")})`:e}else{let e=rv(n,(t,a)=>a===ae?[Ba(n.children[ae],!1)]:[`${a}:${Ba(t,!1)}`]);return Object.keys(n.children).length===1&&n.children[ae]!=null?`${xo(n)}/${e[0]}`:`${xo(n)}/(${e.join("//")})`}}function rp(n){return encodeURIComponent(n).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function wo(n){return rp(n).replace(/%3B/gi,";")}function sv(n){return encodeURI(n)}function gd(n){return rp(n).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Eo(n){return decodeURIComponent(n)}function Gm(n){return Eo(n.replace(/\+/g,"%20"))}function op(n){return`${gd(n.path)}${lv(n.parameters)}`}function lv(n){return Object.entries(n).map(([i,e])=>`;${gd(i)}=${gd(e)}`).join("")}function dv(n){let i=Object.entries(n).map(([e,t])=>Array.isArray(t)?t.map(a=>`${wo(e)}=${wo(a)}`).join("&"):`${wo(e)}=${wo(t)}`).filter(e=>e);return i.length?`?${i.join("&")}`:""}var dd=1073741824;function ko(n,i,e){Number(i)>=32&&!Object.hasOwn(n,dd)&&(n[dd]=e,delete n[dd]),n[i]=e}var cv=/^[^\/()?;#]+/;function cd(n){let i=n.match(cv);return i?i[0]:""}var uv=/^[^\/()?;=#]+/;function mv(n){let i=n.match(uv);return i?i[0]:""}var pv=/^[^=?&#]+/;function hv(n){let i=n.match(pv);return i?i[0]:""}var fv=/^[^&#]+/;function gv(n){let i=n.match(fv);return i?i[0]:""}var bd=class{url;remaining;constructor(i){this.url=i,this.remaining=i}parseRootSegment(){for(;this.consumeOptional("/"););return this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new we([],{}):new we([],this.parseChildren())}parseQueryParams(){let i={};if(this.consumeOptional("?"))do this.parseQueryParam(i);while(this.consumeOptional("&"));return i}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(i=0){if(i>50)throw new ne(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0,i));let a={};return this.peekStartsWith("(")&&(a=this.parseParens(!1,i)),(e.length>0||Object.keys(t).length>0)&&(a[ae]=new we(e,t)),a}parseSegment(){let i=cd(this.remaining);if(i===""&&this.peekStartsWith(";"))throw new ne(4009,!1);return this.capture(i),new kn(Eo(i),this.parseMatrixParams())}parseMatrixParams(){let i={};for(;this.consumeOptional(";");)this.parseParam(i);return i}parseParam(i){let e=mv(this.remaining);if(!e)return;this.capture(e);let t="";if(this.consumeOptional("=")){let a=cd(this.remaining);a&&(t=a,this.capture(t))}ko(i,Eo(e),Eo(t))}parseQueryParam(i){let e=hv(this.remaining);if(!e)return;this.capture(e);let t="";if(this.consumeOptional("=")){let o=gv(this.remaining);o&&(t=o,this.capture(t))}let a=Gm(e),r=Gm(t);if(Object.hasOwn(i,a)){let o=i[a];Array.isArray(o)||(o=[o],i[a]=o),o.push(r)}else i[a]=r}parseParens(i,e){let t=Object.create(null);for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let a=cd(this.remaining),r=this.remaining[a.length];if(r!=="/"&&r!==")"&&r!==";")throw new ne(4010,!1);let o;a.indexOf(":")>-1?(o=a.slice(0,a.indexOf(":")),this.capture(o),this.capture(":")):i&&(o=ae);let l=this.parseChildren(e+1),s=Object.keys(l).length===1&&l[ae]?l[ae]:new we([],l);ko(t,o??ae,s),this.consumeOptional("//")}return t}peekStartsWith(i){return this.remaining.startsWith(i)}consumeOptional(i){return this.peekStartsWith(i)?(this.remaining=this.remaining.substring(i.length),!0):!1}capture(i){if(!this.consumeOptional(i))throw new ne(4011,!1)}};function sp(n){return n.segments.length>0?new we([],{[ae]:n}):n}function lp(n){let i=Object.create(null);for(let[t,a]of Object.entries(n.children)){let r=lp(a);if(t===ae&&r.segments.length===0&&r.hasChildren())for(let[o,l]of Object.entries(r.children))ko(i,o,l);else(r.segments.length>0||r.hasChildren())&&ko(i,t,r)}let e=new we(n.segments,i);return bv(e)}function bv(n){if(n.numberOfChildren===1&&n.children[ae]){let i=n.children[ae];return new we(n.segments.concat(i.segments),i.children)}return n}function Fi(n){return n instanceof Nt}function dp(n,i,e=null,t=null,a=new An){let r=cp(n);return up(r,i,e,t,a)}function cp(n){let i;function e(r){let o={};for(let s of r.children){let u=e(s);o[s.outlet]=u}let l=new we(r.url,o);return r===n&&(i=l),l}let t=e(n.root),a=sp(t);return i??a}function up(n,i,e,t,a){let r=n;for(;r.parent;)r=r.parent;if(i.length===0)return ud(r,r,r,e,t,a);let o=yv(i);if(o.toRoot())return ud(r,r,new we([],{}),e,t,a);let l=vv(o,r,n),s=l.processChildren?za(l.segmentGroup,l.index,o.commands):pp(l.segmentGroup,l.index,o.commands);return ud(r,l.segmentGroup,s,e,t,a)}function Ao(n){return typeof n=="object"&&n!=null&&!n.outlets&&!n.segmentPath}function Ga(n){return typeof n=="object"&&n!=null&&n.outlets}function Wm(n,i,e){n||="\u0275";let t=new Nt;return t.queryParams={[n]:i},e.parse(e.serialize(t)).queryParams[n]}function ud(n,i,e,t,a,r){let o={};for(let[u,c]of Object.entries(t??{}))o[u]=Array.isArray(c)?c.map(m=>Wm(u,m,r)):Wm(u,c,r);let l;n===i?l=e:l=mp(n,i,e);let s=sp(lp(l));return new Nt(s,o,a)}function mp(n,i,e){let t=Object.create(null);return Object.entries(n.children).forEach(([a,r])=>{r===i?t[a]=e:t[a]=mp(r,i,e)}),new we(n.segments,t)}var Io=class{isAbsolute;numberOfDoubleDots;commands;constructor(i,e,t){if(this.isAbsolute=i,this.numberOfDoubleDots=e,this.commands=t,i&&t.length>0&&Ao(t[0]))throw new ne(4003,!1);let a=t.find(Ga);if(a&&a!==ev(t))throw new ne(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function yv(n){if(typeof n[0]=="string"&&n.length===1&&n[0]==="/")return new Io(!0,0,n);let i=0,e=!1,t=n.reduce((a,r,o)=>{if(typeof r=="object"&&r!=null){if(r.outlets){let l={};return Object.entries(r.outlets).forEach(([s,u])=>{l[s]=typeof u=="string"?u.split("/"):u}),[...a,{outlets:l}]}if(r.segmentPath)return[...a,r.segmentPath]}return typeof r!="string"?[...a,r]:o===0?(r.split("/").forEach((l,s)=>{s==0&&l==="."||(s==0&&l===""?e=!0:l===".."?i++:l!=""&&a.push(l))}),a):[...a,r]},[]);return new Io(e,i,t)}var Ti=class{segmentGroup;processChildren;index;constructor(i,e,t){this.segmentGroup=i,this.processChildren=e,this.index=t}};function vv(n,i,e){if(n.isAbsolute)return new Ti(i,!0,0);if(!e)return new Ti(i,!1,NaN);if(e.parent===null)return new Ti(e,!0,0);let t=Ao(n.commands[0])?0:1,a=e.segments.length-1+t;return _v(e,a,n.numberOfDoubleDots)}function _v(n,i,e){let t=n,a=i,r=e;for(;r>a;){if(r-=a,t=t.parent,!t)throw new ne(4005,!1);a=t.segments.length}return new Ti(t,!1,a-r)}function Cv(n){return Ga(n[0])?n[0].outlets:{[ae]:n}}function pp(n,i,e){if(n??=new we([],{}),n.segments.length===0&&n.hasChildren())return za(n,i,e);let t=wv(n,i,e),a=e.slice(t.commandIndex);if(t.match&&t.pathIndex<n.segments.length){let r=new we(n.segments.slice(0,t.pathIndex),{});return r.children[ae]=new we(n.segments.slice(t.pathIndex),n.children),za(r,0,a)}else return t.match&&a.length===0?new we(n.segments,{}):t.match&&!n.hasChildren()?yd(n,i,e):t.match?za(n,0,a):yd(n,i,e)}function za(n,i,e){if(e.length===0)return new we(n.segments,{});{let t=Cv(e),a=Object.create(null);if(Object.keys(t).some(r=>r!==ae)&&n.children[ae]&&n.numberOfChildren===1&&n.children[ae].segments.length===0){let r=za(n.children[ae],i,e);return new we(n.segments,r.children)}return Object.entries(t).forEach(([r,o])=>{typeof o=="string"&&(o=[o]),o!==null&&(a[r]=pp(n.children[r],i,o))}),Object.entries(n.children).forEach(([r,o])=>{t[r]===void 0&&(a[r]=o)}),new we(n.segments,a)}}function wv(n,i,e){let t=0,a=i,r={match:!1,pathIndex:0,commandIndex:0};for(;a<n.segments.length;){if(t>=e.length)return r;let o=n.segments[a],l=e[t];if(Ga(l))break;let s=`${l}`,u=t<e.length-1?e[t+1]:null;if(a>0&&s===void 0)break;if(s&&u&&typeof u=="object"&&u.outlets===void 0){if(!qm(s,u,o))return r;t+=2}else{if(!qm(s,{},o))return r;t++}a++}return{match:!0,pathIndex:a,commandIndex:t}}function yd(n,i,e){let t=n.segments.slice(0,i),a=0;for(;a<e.length;){let r=e[a];if(Ga(r)){let s=Dv(r.outlets);return new we(t,s)}if(a===0&&Ao(e[0])){let s=n.segments[i];t.push(new kn(s.path,Ym(e[0]))),a++;continue}let o=Ga(r)?r.outlets[ae]:`${r}`,l=a<e.length-1?e[a+1]:null;o&&l&&Ao(l)?(t.push(new kn(o,Ym(l))),a+=2):(t.push(new kn(o,{})),a++)}return new we(t,{})}function Dv(n){let i={};return Object.entries(n).forEach(([e,t])=>{typeof t=="string"&&(t=[t]),t!==null&&(i[e]=yd(new we([],{}),0,t))}),i}function Ym(n){let i={};return Object.entries(n).forEach(([e,t])=>i[e]=`${t}`),i}function qm(n,i,e){return n==e.path&&Qt(i,e.parameters)}var No=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(i){this.rootInjector=i,this.children=new si(this.rootInjector)}resetChildren(){this.children=new si(this.rootInjector)}},si=(()=>{class n{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,t){let a=this.getOrCreateContext(e);a.outlet=t,this.contexts.set(e,a)}onChildOutletDestroyed(e){let t=this.getContext(e);t&&(t.outlet=null,t.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let t=this.getContext(e);return t||(t=new No(this.rootInjector),this.contexts.set(e,t)),t}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(t){return new(t||n)(A(rt))};static \u0275prov=U({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),To=class{_root;constructor(i){this._root=i}get root(){return this._root.value}parent(i){let e=this.pathFromRoot(i);return e.length>1?e[e.length-2]:null}children(i){let e=vd(i,this._root);return e?e.children.map(t=>t.value):[]}firstChild(i){let e=vd(i,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(i){let e=_d(i,this._root);return e.length<2?[]:e[e.length-2].children.map(a=>a.value).filter(a=>a!==i)}pathFromRoot(i){return _d(i,this._root).map(e=>e.value)}};function vd(n,i){if(n===i.value)return i;for(let e of i.children){let t=vd(n,e);if(t)return t}return null}function _d(n,i){if(n===i.value)return[i];for(let e of i.children){let t=_d(n,e);if(t.length)return t.unshift(i),t}return[]}var ft=class{value;children;constructor(i,e){this.value=i,this.children=e}toString(){return`TreeNode(${this.value})`}};function Ni(n){let i={};return n&&n.children.forEach(e=>i[e.value.outlet]=e),i}var Wa=class extends To{snapshot;constructor(i,e){super(i),this.snapshot=e,Ad(this,i)}toString(){return this.snapshot.toString()}};function hp(n,i){let e=Sv(n,i),t=new ze([new kn("",{})]),a=new ze({}),r=new ze({}),o=new ze({}),l=new ze(""),s=new In(t,a,o,l,r,ae,n,e.root);return s.snapshot=e.root,new Wa(new ft(s,[]),e)}function Sv(n,i){let e={},t={},a={},o=new Pi([],e,a,"",t,ae,n,null,{},i);return new Ya("",new ft(o,[]))}var In=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;resources;_localInjector;pending;paramsSignal;queryParamsSignal;paramMapSignal;queryParamMapSignal;fragmentSignal;dataSignal;constructor(i,e,t,a,r,o,l,s){this.urlSubject=i,this.paramsSubject=e,this.queryParamsSubject=t,this.fragmentSubject=a,this.dataSubject=r,this.outlet=o,this.component=l,this._futureSnapshot=s,this.title=this.dataSubject?.pipe(Y(u=>u[Qa]))??V(void 0),this.url=i,this.params=e,this.queryParams=t,this.fragment=a,this.data=r}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(Y(i=>oi(i))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(Y(i=>oi(i))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}_setPending(i){this._futureSnapshot=i,this.pending?.set(!0)}},xv="always";function kd(n,i,e){let t,{routeConfig:a}=n;return i!==null&&(e==="always"||a?.path===""||!i.component&&!i.routeConfig?.loadComponent)?t={params:Object.keys(n.params).length===0?i.params:Object.freeze(b(b({},i.params),n.params)),data:Object.freeze(b(b({},i.data),n.data)),resolve:b(b(b(b({},n.data),i.data),a?.data),n._resolvedData)}:t={params:Object.freeze(b({},n.params)),data:Object.freeze(b({},n.data)),resolve:b(b({},n.data),n._resolvedData??{})},a&&gp(a)&&(t.resolve[Qa]=a.title),t}var Pi=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;resources;get title(){return this.data?.[Qa]}constructor(i,e,t,a,r,o,l,s,u,c){this.url=i,this.params=e,this.queryParams=t,this.fragment=a,this.data=r,this.outlet=o,this.component=l,this.routeConfig=s,this._resolve=u,this._environmentInjector=c}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=oi(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=oi(this.queryParams),this._queryParamMap}toString(){let i=this.url.map(t=>t.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${i}', path:'${e}')`}},Ya=class extends To{url;constructor(i,e){super(e),this.url=i,Ad(this,e)}toString(){return fp(this._root)}};function Ad(n,i){i.value._routerState=n,i.children.forEach(e=>Ad(n,e))}function fp(n){let i=n.children.length>0?` { ${n.children.map(fp).join(", ")} } `:"";return`${n.value}${i}`}function md(n){if(n.snapshot){let i=n.snapshot,e=n._futureSnapshot;n.snapshot=e,Qt(i.queryParams,e.queryParams)||n.queryParamsSubject.next(e.queryParams),i.fragment!==e.fragment&&n.fragmentSubject.next(e.fragment),Qt(i.params,e.params)||n.paramsSubject.next(e.params),Jy(i.url,e.url)||n.urlSubject.next(e.url),Qt(i.data,e.data)||n.dataSubject.next(e.data)}else n.snapshot=n._futureSnapshot,n.dataSubject.next(n._futureSnapshot.data)}function Cd(n,i){let e=Qt(n.params,i.params)&&av(n.url,i.url),t=!n.parent!=!i.parent;return e&&!t&&(!n.parent||Cd(n.parent,i.parent))}function gp(n){return typeof n.title=="string"||n.title===null}var bp=new y(""),er=(()=>{class n{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=ae;activateEvents=new T;deactivateEvents=new T;attachEvents=new T;detachEvents=new T;routerOutletData=Ei();parentContexts=d(si);location=d(Ue);changeDetector=d(Ae);inputBinder=d(Wo,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:t,previousValue:a}=e.name;if(t)return;this.isTrackedInParentContexts(a)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(a)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new ne(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new ne(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new ne(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,t){this.activated=e,this._activatedRoute=t,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this,this.location.injector),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,t){if(this.isActivated)throw new ne(4013,!1);this._activatedRoute=e;let a=this.location,o=e.snapshot.component,l=this.parentContexts.getOrCreateContext(this.name).children,s=new wd(e,l,a.injector,this.routerOutletData);this.activated=a.createComponent(o,{index:a.length,injector:s,environmentInjector:t}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this,this.location.injector),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[Me]})}return n})(),wd=class{route;childContexts;parent;outletData;constructor(i,e,t,a){this.route=i,this.childContexts=e,this.parent=t,this.outletData=a}get(i,e){return i===In?this.route:i===si?this.childContexts:i===bp?this.outletData:this.parent.get(i,e)}},Wo=new y("");var Id=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=L({type:n,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(t,a){t&1&&le(0,"router-outlet")},dependencies:[er],encapsulation:2,changeDetection:1})}return n})();function Nd(n){let i=n.children&&n.children.map(Nd),e=i?G(b({},n),{children:i}):b({},n);return!e.component&&!e.loadComponent&&(i||e.loadChildren)&&e.outlet&&e.outlet!==ae&&(e.component=Id),e}var Ua="imperative",et=(function(n){return n[n.NavigationStart=0]="NavigationStart",n[n.NavigationEnd=1]="NavigationEnd",n[n.NavigationCancel=2]="NavigationCancel",n[n.NavigationError=3]="NavigationError",n[n.RoutesRecognized=4]="RoutesRecognized",n[n.ResolveStart=5]="ResolveStart",n[n.ResolveEnd=6]="ResolveEnd",n[n.GuardsCheckStart=7]="GuardsCheckStart",n[n.GuardsCheckEnd=8]="GuardsCheckEnd",n[n.RouteConfigLoadStart=9]="RouteConfigLoadStart",n[n.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",n[n.ChildActivationStart=11]="ChildActivationStart",n[n.ChildActivationEnd=12]="ChildActivationEnd",n[n.ActivationStart=13]="ActivationStart",n[n.ActivationEnd=14]="ActivationEnd",n[n.Scroll=15]="Scroll",n[n.NavigationSkipped=16]="NavigationSkipped",n})(et||{}),Dt=class{id;url;constructor(i,e){this.id=i,this.url=e}},Jt=class extends Dt{type=et.NavigationStart;navigationTrigger;restoredState;constructor(i,e,t="imperative",a=null){super(i,e),this.navigationTrigger=t,this.restoredState=a}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},jt=class extends Dt{urlAfterRedirects;type=et.NavigationEnd;constructor(i,e,t){super(i,e),this.urlAfterRedirects=t}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},dt=(function(n){return n[n.Redirect=0]="Redirect",n[n.SupersededByNewNavigation=1]="SupersededByNewNavigation",n[n.NoDataFromResolver=2]="NoDataFromResolver",n[n.GuardRejected=3]="GuardRejected",n[n.Aborted=4]="Aborted",n})(dt||{}),qa=(function(n){return n[n.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",n[n.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",n})(qa||{}),Ct=class extends Dt{reason;code;type=et.NavigationCancel;constructor(i,e,t,a){super(i,e),this.reason=t,this.code=a}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function yp(n){return n instanceof Ct&&(n.code===dt.Redirect||n.code===dt.SupersededByNewNavigation)}var hn=class extends Dt{reason;code;type=et.NavigationSkipped;constructor(i,e,t,a){super(i,e),this.reason=t,this.code=a}},en=class extends Dt{error;target;type=et.NavigationError;constructor(i,e,t,a){super(i,e),this.error=t,this.target=a}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Nn=class extends Dt{urlAfterRedirects;state;type=et.RoutesRecognized;constructor(i,e,t,a){super(i,e),this.urlAfterRedirects=t,this.state=a}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Oo=class extends Dt{urlAfterRedirects;state;type=et.GuardsCheckStart;constructor(i,e,t,a){super(i,e),this.urlAfterRedirects=t,this.state=a}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Fo=class extends Dt{urlAfterRedirects;state;shouldActivate;type=et.GuardsCheckEnd;constructor(i,e,t,a,r){super(i,e),this.urlAfterRedirects=t,this.state=a,this.shouldActivate=r}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Po=class extends Dt{urlAfterRedirects;state;type=et.ResolveStart;constructor(i,e,t,a){super(i,e),this.urlAfterRedirects=t,this.state=a}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Lo=class extends Dt{urlAfterRedirects;state;type=et.ResolveEnd;constructor(i,e,t,a){super(i,e),this.urlAfterRedirects=t,this.state=a}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Vo=class{route;type=et.RouteConfigLoadStart;constructor(i){this.route=i}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},Bo=class{route;type=et.RouteConfigLoadEnd;constructor(i){this.route=i}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},jo=class{snapshot;type=et.ChildActivationStart;constructor(i){this.snapshot=i}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},zo=class{snapshot;type=et.ChildActivationEnd;constructor(i){this.snapshot=i}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Uo=class{snapshot;type=et.ActivationStart;constructor(i){this.snapshot=i}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Ho=class{snapshot;type=et.ActivationEnd;constructor(i){this.snapshot=i}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var Li=class{},Ka=class{},Vi=class{url;navigationBehaviorOptions;constructor(i,e){this.url=i,this.navigationBehaviorOptions=e}};function Ev(n){return!(n instanceof Li)&&!(n instanceof Vi)&&!(n instanceof Ka)}function Mv(n,i,e){let t=new Set,a=Xa(n,i._root,e?e._root:void 0,t);return{newlyCreatedRoutes:t,state:new Wa(a,i)}}function Xa(n,i,e,t){if(e&&n.shouldReuseRoute(i.value,e.value.snapshot)){let a=e.value;a._setPending(i.value);let r=Rv(n,i,e,t);return new ft(a,r)}else{if(n.shouldAttach(i.value)){let o=n.retrieve(i.value);if(o!==null){let l=o.route;return l.value._setPending(i.value),l.children=i.children.map(s=>Xa(n,s,void 0,t)),l}}let a=kv(i.value);a._setPending(i.value),t.add(a);let r=i.children.map(o=>Xa(n,o,void 0,t));return new ft(a,r)}}function Rv(n,i,e,t){return i.children.map(a=>{for(let r of e.children)if(n.shouldReuseRoute(a.value,r.value.snapshot))return Xa(n,a,r,t);return Xa(n,a,void 0,t)})}function kv(n){return new In(new ze(n.url),new ze(n.params),new ze(n.queryParams),new ze(n.fragment),new ze(n.data),n.outlet,n.component,n)}var li=class n extends Error{redirectTo;navigationBehaviorOptions;constructor(i,e){super(),this.redirectTo=i,this.navigationBehaviorOptions=e,Object.setPrototypeOf(this,n.prototype)}},vp="ngNavigationCancelingError";function Ha(n,i){let{redirectTo:e,navigationBehaviorOptions:t}=Fi(i)?{redirectTo:i,navigationBehaviorOptions:void 0}:i,a=_p(!1,dt.Redirect);return a.url=e,a.navigationBehaviorOptions=t,a}function _p(n,i){let e=new Error(`NavigationCancelingError: ${n||""}`);return e[vp]=!0,e.cancellationCode=i,e}function Av(n){return Cp(n)&&Fi(n.url)}function Cp(n){return!!n&&n[vp]}var Dd=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(i,e,t,a,r){this.routeReuseStrategy=i,this.futureState=e,this.currState=t,this.forwardEvent=a,this.inputBindingEnabled=r}activate(i){let e=this.futureState._root,t=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,t,i),md(this.futureState.root),this.activateChildRoutes(e,t,i)}deactivateChildRoutes(i,e,t){let a=Ni(e);i.children.forEach(r=>{let o=r.value.outlet;this.deactivateRoutes(r,a[o],t),delete a[o]}),Object.values(a).forEach(r=>{this.deactivateRouteAndItsChildren(r,t)})}deactivateRoutes(i,e,t){let a=i.value,r=e?e.value:null;if(a===r)if(a.component){let o=t.getContext(a.outlet);o&&this.deactivateChildRoutes(i,e,o.children)}else this.deactivateChildRoutes(i,e,t);else r&&this.deactivateRouteAndItsChildren(e,t)}deactivateRouteAndItsChildren(i,e){i.value.component&&this.routeReuseStrategy.shouldDetach(i.value.snapshot)?this.detachAndStoreRouteSubtree(i,e):this.deactivateRouteAndOutlet(i,e)}detachAndStoreRouteSubtree(i,e){let t=e.getContext(i.value.outlet),a=t&&i.value.component?t.children:e,r=Ni(i);for(let o of Object.values(r))this.deactivateRouteAndItsChildren(o,a);if(t&&t.outlet){let o=t.outlet.detach(),l=t.children.contexts;t.resetChildren(),this.routeReuseStrategy.store(i.value.snapshot,{componentRef:o,route:i,contexts:l})}}deactivateRouteAndOutlet(i,e){let t=e.getContext(i.value.outlet),a=t&&i.value.component?t.children:e,r=Ni(i);for(let o of Object.values(r))this.deactivateRouteAndItsChildren(o,a);t&&(t.outlet&&(t.outlet.deactivate(),t.children.onOutletDeactivated()),t.attachRef=null,t.route=null),i.value._localInjector?.destroy()}activateChildRoutes(i,e,t){let a=Ni(e);i.children.forEach(r=>{this.activateRoutes(r,a[r.value.outlet],t),this.forwardEvent(new Ho(r.value.snapshot))}),i.children.length&&this.forwardEvent(new zo(i.value.snapshot))}activateRoutes(i,e,t){let a=i.value,r=e?e.value:null;if(md(a),a===r)if(a.component){let o=t.getOrCreateContext(a.outlet);this.activateChildRoutes(i,e,o.children)}else this.activateChildRoutes(i,e,t);else if(a.component){let o=t.getOrCreateContext(a.outlet);if(this.routeReuseStrategy.shouldAttach(a.snapshot)){let l=this.routeReuseStrategy.retrieve(a.snapshot);this.routeReuseStrategy.store(a.snapshot,null),o.children.onOutletReAttached(l.contexts),o.attachRef=l.componentRef,o.route=l.route.value,o.outlet&&o.outlet.attach(l.componentRef,l.route.value),md(l.route.value),this.activateChildRoutes(i,null,o.children)}else o.attachRef=null,o.route=a,o.outlet&&o.outlet.activateWith(a,o.injector),this.activateChildRoutes(i,null,o.children)}else this.activateChildRoutes(i,null,t)}},$o=class{path;route;constructor(i){this.path=i,this.route=this.path[this.path.length-1]}},Oi=class{component;route;constructor(i,e){this.component=i,this.route=e}};function Iv(n,i,e){let t=n._root,a=i?i._root:null;return ja(t,a,e,[t.value])}function Nv(n){let i=n.routeConfig?n.routeConfig.canActivateChild:null;return!i||i.length===0?null:{node:n,guards:i}}function ji(n,i){let e=Symbol(),t=i.get(n,e);return t===e?typeof n=="function"&&!Ku(n)?n:i.get(n):t}function ja(n,i,e,t,a={canDeactivateChecks:[],canActivateChecks:[]}){let r=Ni(i);return n.children.forEach(o=>{Tv(o,r[o.value.outlet],e,t.concat([o.value]),a),delete r[o.value.outlet]}),Object.entries(r).forEach(([o,l])=>$a(l,e.getContext(o),e,a)),a}function Tv(n,i,e,t,a={canDeactivateChecks:[],canActivateChecks:[]}){let r=n.value,o=i?i.value:null,l=e?e.getContext(n.value.outlet):null;if(o&&r.routeConfig===o.routeConfig){let s=Ov(o,r,r.routeConfig.runGuardsAndResolvers);s?a.canActivateChecks.push(new $o(t)):(r.data=o.data,r._resolvedData=o._resolvedData),r.component?ja(n,i,l?l.children:null,t,a):ja(n,i,e,t,a),s&&l&&l.outlet&&l.outlet.isActivated&&a.canDeactivateChecks.push(new Oi(l.outlet.component,o))}else o&&$a(i,l,e,a),a.canActivateChecks.push(new $o(t)),r.component?ja(n,null,l?l.children:null,t,a):ja(n,null,e,t,a);return a}function Ov(n,i,e){if(typeof e=="function")return ht(i._environmentInjector,()=>e(n,i));switch(e){case"pathParamsChange":return!ri(n.url,i.url);case"pathParamsOrQueryParamsChange":return!ri(n.url,i.url)||!Qt(n.queryParams,i.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Cd(n,i)||!Qt(n.queryParams,i.queryParams);default:return!Cd(n,i)}}function $a(n,i,e,t){let a=Ni(n),r=n.value;Object.entries(a).forEach(([o,l])=>{r.component?i?$a(l,i.children.getContext(o),i.children,t):$a(l,null,null,t):$a(l,e?e.getContext(o):null,e,t)}),r.component?i&&i.outlet&&i.outlet.isActivated?t.canDeactivateChecks.push(new Oi(i.outlet.component,r)):t.canDeactivateChecks.push(new Oi(null,r)):t.canDeactivateChecks.push(new Oi(null,r))}function tr(n){return typeof n=="function"}function Fv(n){return typeof n=="boolean"}function Pv(n){return n&&tr(n.canLoad)}function Lv(n){return n&&tr(n.canActivate)}function Vv(n){return n&&tr(n.canActivateChild)}function Bv(n){return n&&tr(n.canDeactivate)}function jv(n){return n&&tr(n.canMatch)}function wp(n){return n instanceof Bu||n?.name==="EmptyError"}var Do=Symbol("INITIAL_VALUE");function Bi(){return Qe(n=>qt(n.map(i=>i.pipe(yt(1),nt(Do)))).pipe(Y(i=>{for(let e of i)if(e!==!0){if(e===Do)return Do;if(e===!1||zv(e))return e}return!0}),be(i=>i!==Do),yt(1)))}function zv(n){return Fi(n)||n instanceof li}function Dp(n){return n.aborted?V(void 0).pipe(yt(1)):new Oe(i=>{let e=()=>{i.next(),i.complete()};return n.addEventListener("abort",e),()=>n.removeEventListener("abort",e)})}function Sp(n){return ce(Dp(n))}function Uv(n){return Pt(i=>{let{targetSnapshot:e,currentSnapshot:t,guards:{canActivateChecks:a,canDeactivateChecks:r}}=i;return r.length===0&&a.length===0?V(G(b({},i),{guardsResult:!0})):Hv(r,e,t).pipe(Pt(o=>o&&Fv(o)?$v(e,a,n):V(o)),Y(o=>G(b({},i),{guardsResult:o})))})}function Hv(n,i,e){return bt(n).pipe(Pt(t=>Kv(t.component,t.route,e,i)),Cn(t=>t!==!0,!0))}function $v(n,i,e){return bt(i).pipe(qn(t=>Wr(Wv(t.route.parent,e),Gv(t.route,e),qv(n,t.path),Yv(n,t.route))),Cn(t=>t!==!0,!0))}function Gv(n,i){return n!==null&&i&&i(new Uo(n)),V(!0)}function Wv(n,i){return n!==null&&i&&i(new jo(n)),V(!0)}function Yv(n,i){let e=i.routeConfig?i.routeConfig.canActivate:null;if(!e||e.length===0)return V(!0);let t=e.map(a=>Yr(()=>{let r=i._environmentInjector,o=ji(a,r),l=Lv(o)?o.canActivate(i,n):ht(r,()=>o(i,n));return di(l).pipe(Cn())}));return V(t).pipe(Bi())}function qv(n,i){let e=i[i.length-1],a=i.slice(0,i.length-1).reverse().map(r=>Nv(r)).filter(r=>r!==null).map(r=>Yr(()=>{let o=r.guards.map(l=>{let s=r.node._environmentInjector,u=ji(l,s),c=Vv(u)?u.canActivateChild(e,n):ht(s,()=>u(e,n));return di(c).pipe(Cn())});return V(o).pipe(Bi())}));return V(a).pipe(Bi())}function Kv(n,i,e,t){let a=i&&i.routeConfig?i.routeConfig.canDeactivate:null;if(!a||a.length===0)return V(!0);let r=a.map(o=>{let l=i._environmentInjector,s=ji(o,l),u=Bv(s)?s.canDeactivate(n,i,e,t):ht(l,()=>s(n,i,e,t));return di(u).pipe(Cn())});return V(r).pipe(Bi())}function Xv(n,i,e,t,a){let r=i.canLoad;if(r===void 0||r.length===0)return V(!0);let o=r.map(l=>{let s=ji(l,n),u=Pv(s)?s.canLoad(i,e):ht(n,()=>s(i,e)),c=di(u);return a?c.pipe(Sp(a)):c});return V(o).pipe(Bi(),xp(t))}function xp(n){return Dl(pt(i=>{if(typeof i!="boolean")throw Ha(n,i)}),Y(i=>i===!0))}function Zv(n,i,e,t,a,r){let o=i.canMatch;if(!o||o.length===0)return V(!0);let l=o.map(s=>{let u=ji(s,n),c=jv(u)?u.canMatch(i,e,a):ht(n,()=>u(i,e,a));return di(c).pipe(Sp(r))});return V(l).pipe(Bi(),xp(t))}var Zt=class n extends Error{name="NoMatch";segmentGroup;constructor(i){super(),this.segmentGroup=i||null,Object.setPrototypeOf(this,n.prototype)}},Za=class n extends Error{urlTree;name="AbsoluteRedirect";constructor(i){super(),this.urlTree=i,Object.setPrototypeOf(this,n.prototype)}};function Qv(n){throw new ne(4e3,!1)}function Jv(n){throw _p(!1,dt.GuardRejected)}var Sd=class{urlSerializer;urlTree;constructor(i,e){this.urlSerializer=i,this.urlTree=e}async lineralizeSegments(i,e){let t=[],a=e.root;for(;;){if(t=t.concat(a.segments),a.numberOfChildren===0)return t;if(a.numberOfChildren>1||!a.children[ae])throw Qv(`${i.redirectTo}`);a=a.children[ae]}}async applyRedirectCommands(i,e,t,a,r){let o=await e_(e,a,r);if(o instanceof Nt)throw new Za(o);let l=this.applyRedirectCreateUrlTree(o,this.urlSerializer.parse(o),i,t);if(o[0]==="/")throw new Za(l);return l}applyRedirectCreateUrlTree(i,e,t,a){let r=this.createSegmentGroup(i,e.root,t,a);return new Nt(r,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(i,e){let t={};return Object.entries(i).forEach(([a,r])=>{if(typeof r=="string"&&r[0]===":"){let l=r.substring(1);t[a]=e[l]}else t[a]=r}),t}createSegmentGroup(i,e,t,a){let r=this.createSegments(i,e.segments,t,a),o=Object.create(null);return Object.entries(e.children).forEach(([l,s])=>{o[l]=this.createSegmentGroup(i,s,t,a)}),new we(r,o)}createSegments(i,e,t,a){return e.map(r=>r.path[0]===":"?this.findPosParam(i,r,a):this.findOrReturn(r,t))}findPosParam(i,e,t){let a=t[e.path.substring(1)];if(!a)throw new ne(4001,!1);return a}findOrReturn(i,e){let t=0;for(let a of e){if(a.path===i.path)return e.splice(t),a;t++}return i}};function e_(n,i,e){if(typeof n=="string")return Promise.resolve(n);let t=n;return Mo(di(ht(e,()=>t(i))))}function t_(n,i){return n.providers&&!n._injector&&(n._injector=Ol(n.providers,i,`Route: ${n.path}`)),n._injector??i}function Bt(n){return n.outlet||ae}function n_(n,i){let e=n.filter(t=>Bt(t)===i);return e.push(...n.filter(t=>Bt(t)!==i)),e}var xd={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function Ep(n){return{routeConfig:n.routeConfig,url:n.url,params:n.params,queryParams:n.queryParams,fragment:n.fragment,data:n.data,outlet:n.outlet,title:n.title,paramMap:n.paramMap,queryParamMap:n.queryParamMap}}function i_(n,i,e,t,a,r,o){let l=Mp(n,i,e);if(!l.matched)return V(l);let s=Ep(r(l));return t=t_(i,t),Zv(t,i,e,a,s,o).pipe(Y(u=>u===!0?l:b({},xd)))}function Mp(n,i,e){if(i.path==="")return i.pathMatch==="full"&&(n.hasChildren()||e.length>0)?b({},xd):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let a=(i.matcher||Zm)(e,n,i);if(!a)return b({},xd);let r={};Object.entries(a.posParams??{}).forEach(([l,s])=>{r[l]=s.path});let o=a.consumed.length>0?b(b({},r),a.consumed[a.consumed.length-1].parameters):r;return{matched:!0,consumedSegments:a.consumed,remainingSegments:e.slice(a.consumed.length),parameters:o,positionalParamSegments:a.posParams??{}}}function Km(n,i,e,t,a){return e.length>0&&o_(n,e,t,a)?{segmentGroup:new we(i,r_(t,new we(e,n.children))),slicedSegments:[]}:e.length===0&&s_(n,e,t)?{segmentGroup:new we(n.segments,a_(n,e,t,n.children)),slicedSegments:e}:{segmentGroup:new we(n.segments,n.children),slicedSegments:e}}function a_(n,i,e,t){let a={};for(let r of e)if(Yo(n,i,r)&&!t[Bt(r)]){let o=new we([],{});a[Bt(r)]=o}return b(b({},t),a)}function r_(n,i){let e={};e[ae]=i;for(let t of n)if(t.path===""&&Bt(t)!==ae){let a=new we([],{});e[Bt(t)]=a}return e}function o_(n,i,e,t){return e.some(a=>!Yo(n,i,a)||!(Bt(a)!==ae)?!1:!(t!==void 0&&Bt(a)===t))}function s_(n,i,e){return e.some(t=>Yo(n,i,t))}function Yo(n,i,e){return(n.hasChildren()||i.length>0)&&e.pathMatch==="full"?!1:e.path===""}function l_(n,i,e){return i.length===0&&!n.hasChildren()}var Ed=class{};async function d_(n,i,e,t,a,r,o,l){return new Md(n,i,e,t,a,o,r,l).recognize()}var c_=31,Md=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;queryParams;constructor(i,e,t,a,r,o,l,s){this.injector=i,this.configLoader=e,this.rootComponentType=t,this.config=a,this.urlTree=r,this.paramsInheritanceStrategy=o,this.urlSerializer=l,this.abortSignal=s,this.applyRedirects=new Sd(this.urlSerializer,this.urlTree),this.queryParams=Object.freeze(b({},this.urlTree.queryParams))}noMatchError(i){return new ne(4002,`'${i.segmentGroup}'`)}async recognize(){let i=Km(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:t}=await this.match(i),a=new ft(t,e),r=new Ya("",a),o=dp(t,[],this.urlTree.queryParams,this.urlTree.fragment);return o.queryParams=this.urlTree.queryParams,r.url=this.urlSerializer.serialize(o),{state:r,tree:o}}async match(i){let e=new Pi([],Object.freeze({}),this.queryParams,this.urlTree.fragment,Object.freeze({}),ae,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,i,ae,e),rootSnapshot:e}}catch(t){if(t instanceof Za)return this.absoluteRedirectCount++,this.absoluteRedirectCount>c_&&(this.allowRedirects=!1),this.urlTree=t.urlTree,this.queryParams=Object.freeze(b({},this.urlTree.queryParams)),this.match(t.urlTree.root);throw t instanceof Zt?this.noMatchError(t):t}}async processSegmentGroup(i,e,t,a,r){if(t.segments.length===0&&t.hasChildren())return this.processChildren(i,e,t,r);let o=await this.processSegment(i,e,t,t.segments,a,!0,r);return o instanceof ft?[o]:[]}async processChildren(i,e,t,a){let r=[];for(let s of Object.keys(t.children))s==="primary"?r.unshift(s):r.push(s);let o=[];for(let s of r){let u=t.children[s],c=n_(e,s),m=await this.processSegment(i,c,u,u.segments,s,!0,a);m instanceof ft&&o.push(m)}let l=Rp(o);return u_(l),l}async processSegment(i,e,t,a,r,o,l){for(let s of e)try{return await this.processSegmentAgainstRoute(s._injector??i,e,s,t,a,r,o,l)}catch(u){if(u instanceof Zt||wp(u))continue;throw u}if(l_(t,a))return new Ed;throw new Zt(t)}async processSegmentAgainstRoute(i,e,t,a,r,o,l,s){if(Bt(t)!==o&&(o===ae||!Yo(a,r,t)||!t.children?.length&&!t.loadChildren||r.length===0&&!a.hasChildren()))throw new Zt(a);if(t.redirectTo===void 0)return this.matchSegmentAgainstRoute(i,a,t,r,o,s);if(this.allowRedirects&&l)return this.expandSegmentAgainstRouteUsingRedirect(i,a,e,t,r,o,s);throw new Zt(a)}async expandSegmentAgainstRouteUsingRedirect(i,e,t,a,r,o,l){let{matched:s,parameters:u,consumedSegments:c,positionalParamSegments:m,remainingSegments:p}=Mp(e,a,r);if(!s)throw new Zt(e);let h=this.createSnapshot(i,a,r,u,l);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let _=await this.applyRedirects.applyRedirectCommands(c,a.redirectTo,m,Ep(h),i),D=await this.applyRedirects.lineralizeSegments(a,_);return this.processSegment(i,t,e,D.concat(p),o,!1,l)}createSnapshot(i,e,t,a,r){let o=new Pi(t,a,this.queryParams,this.urlTree.fragment,h_(e),Bt(e),e.component??e._loadedComponent??null,e,f_(e),i),l=kd(o,r,this.paramsInheritanceStrategy);return o.params=l.params,o.data=l.data,o}async matchSegmentAgainstRoute(i,e,t,a,r,o){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let l=S=>this.createSnapshot(i,t,S.consumedSegments,S.parameters,o),s=await Mo(i_(e,t,a,i,this.urlSerializer,l,this.abortSignal));if(t.path==="**"&&(e.children={}),!s?.matched)throw new Zt(e);i=t._injector??i;let{routes:u}=await this.getChildConfig(i,t,a),c=t._loadedInjector??i,{parameters:m,consumedSegments:p,remainingSegments:h}=s,_=this.createSnapshot(i,t,p,m,o),{segmentGroup:D,slicedSegments:C}=Km(e,p,h,u,r),w=Bt(t)===r;if(w&&C.length===0&&D.hasChildren()){let S=await this.processChildren(c,u,D,_);return new ft(_,S)}if(w&&u.length===0&&C.length===0)return new ft(_,[]);let x=await this.processSegment(c,u,D,C,w?ae:r,!0,_);if(!w&&!(x instanceof ft))throw new Zt(e);return new ft(_,x instanceof ft?[x]:[])}async getChildConfig(i,e,t){if(e.children)return{routes:e.children,injector:i};if(e.loadChildren){if(e._loadedRoutes!==void 0){let r=e._loadedNgModuleFactory;return r&&!e._loadedInjector&&(e._loadedInjector=r.create(i).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await Mo(Xv(i,e,t,this.urlSerializer,this.abortSignal))){let r=await this.configLoader.loadChildren(i,e);return e._loadedRoutes=r.routes,e._loadedInjector=r.injector,e._loadedNgModuleFactory=r.factory,r}throw Jv(e)}return{routes:[],injector:i}}};function u_(n){n.sort((i,e)=>i.value.outlet===ae?-1:e.value.outlet===ae?1:i.value.outlet.localeCompare(e.value.outlet))}function m_(n){let i=n.value.routeConfig;return i&&i.path===""}function Rp(n){let i=[],e=new Set;for(let a of n){if(!m_(a)){i.push(a);continue}let r=i.find(o=>a.value.routeConfig===o.value.routeConfig);r!==void 0?(r.children.push(...a.children),e.add(r)):i.push(a)}for(let a of e){let r=Rp(a.children);i.push(new ft(a.value,r))}let t=i.filter(a=>!e.has(a));return p_(t),t}function p_(n){let i=Object.create(null);n.forEach(e=>{let t=i[e.value.outlet];if(t){let a=t.url.map(o=>o.toString()).join("/"),r=e.value.url.map(o=>o.toString()).join("/");throw new ne(4006,!1)}i[e.value.outlet]=e.value})}function h_(n){return n.data||{}}function f_(n){return n.resolve||{}}function g_(n,i,e,t,a,r,o){return Pt(async l=>{let{state:s,tree:u}=await d_(n,i,e,t,l.extractedUrl,a,r,o);return G(b({},l),{targetSnapshot:s,urlAfterRedirects:u})})}function b_(n){return Pt(i=>{let{targetSnapshot:e,guards:{canActivateChecks:t}}=i;if(!t.length)return V(i);let a=new Set(t.map(l=>l.route)),r=new Set;for(let l of a)if(!r.has(l))for(let s of kp(l))r.add(s);let o=0;return bt(r).pipe(qn(l=>a.has(l)?y_(l,e,n):(l.data=kd(l,l.parent,n).resolve,V(void 0))),pt(()=>o++),Ml(1),Pt(l=>o===r.size?V(i):Ze))})}function kp(n){let i=n.children.map(e=>kp(e)).flat();return[n,...i]}function y_(n,i,e){let t=n.routeConfig,a=n._resolve;return t?.title!==void 0&&!gp(t)&&(a[Qa]=t.title),Yr(()=>(n.data=kd(n,n.parent,e).resolve,v_(a,n,i).pipe(Y(r=>(n._resolvedData=r,n.data=b(b({},n.data),r),null)))))}function v_(n,i,e){let t=hd(n);if(t.length===0)return V({});let a={};return bt(t).pipe(Pt(r=>__(n[r],i,e).pipe(Cn(),pt(o=>{if(o instanceof li)throw Ha(new An,o);a[r]=o}))),Ml(1),Y(()=>a),dn(r=>wp(r)?Ze:Vu(r)))}function __(n,i,e){let t=i._environmentInjector,a=ji(n,t),r=a.resolve?a.resolve(i,e):ht(t,()=>a(i,e));return di(r)}var Ap=new y("");function Rd(n){return Qe(i=>{let e=n(i);return e?bt(e).pipe(Y(()=>i)):V(i)})}var Td=(()=>{class n{buildTitle(e){let t,a=e.root;for(;a!==void 0;)t=this.getResolvedTitleForRoute(a)??t,a=a.children.find(r=>r.outlet===ae);return t}getResolvedTitleForRoute(e){return e.data[Qa]}static \u0275fac=function(t){return new(t||n)};static \u0275prov=O({token:n,factory:()=>d(Ip)})}return n})(),Ip=(()=>{class n extends Td{title;constructor(e){super(),this.title=e}updateTitle(e){let t=this.buildTitle(e);t!==void 0&&this.title.setTitle(t)}static \u0275fac=function(t){return new(t||n)(A($m))};static \u0275prov=U({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),nr=new y("",{factory:()=>({})}),ir=new y(""),Np=(()=>{class n{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=d(pm);async loadComponent(e,t){if(this.componentLoaders.get(t))return this.componentLoaders.get(t);if(t._loadedComponent)return Promise.resolve(t._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(t);let a=(async()=>{try{let r=await Jm(ht(e,()=>t.loadComponent())),o=await Op(zl(r));return this.onLoadEndListener&&this.onLoadEndListener(t),t._loadedComponent=o,o}finally{this.componentLoaders.delete(t)}})();return this.componentLoaders.set(t,a),a}loadChildren(e,t){if(this.childrenLoaders.get(t))return this.childrenLoaders.get(t);if(t._loadedRoutes)return Promise.resolve({routes:t._loadedRoutes,injector:t._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(t);let a=(async()=>{try{let r=await Tp(t,this.compiler,e,this.onLoadEndListener);return t._loadedRoutes=r.routes,t._loadedInjector=r.injector,t._loadedNgModuleFactory=r.factory,r}finally{this.childrenLoaders.delete(t)}})();return this.childrenLoaders.set(t,a),a}static \u0275fac=function(t){return new(t||n)};static \u0275prov=O({token:n,factory:n.\u0275fac})}return n})();async function Tp(n,i,e,t){let a=await Jm(ht(e,()=>n.loadChildren())),r=await Op(zl(a)),o;r instanceof am||Array.isArray(r)?o=r:o=await i.compileModuleAsync(r),t&&t(n);let l,s,u=!1,c;return Array.isArray(o)?(s=o,u=!0):(l=o.create(e).injector,c=o,s=l.get(ir,[],{optional:!0,self:!0}).flat()),{routes:s.map(Nd),injector:l,factory:c}}async function Op(n){return n}var qo=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=O({token:n,factory:()=>d(C_)})}return n})(),C_=(()=>{class n{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,t){return e}static \u0275fac=function(t){return new(t||n)};static \u0275prov=O({token:n,factory:n.\u0275fac})}return n})(),Fp=new y("");var w_=()=>{},Pp=new y(""),Lp=(()=>{class n{currentNavigation=Z(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=Z(null);events=new N;transitionAbortWithErrorSubject=new N;configLoader=d(Np);environmentInjector=d(rt);destroyRef=d(Rt);urlSerializer=d(Ja);rootContexts=d(si);location=d(Rn);inputBindingEnabled=d(Wo,{optional:!0})!==null;titleStrategy=d(Td);options=d(nr,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||xv;urlHandlingStrategy=d(qo);createViewTransition=d(Fp,{optional:!0});navigationErrorHandler=d(Pp,{optional:!0});routerResourcesFeature=d(Ap,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>V(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=a=>this.events.next(new Vo(a)),t=a=>this.events.next(new Bo(a));this.configLoader.onLoadEndListener=t,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let t=++this.navigationId;ge(()=>{this.transitions?.next(G(b({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:t,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new ze(null),this.transitions.pipe(be(t=>t!==null),Qe(t=>{let a=!0,r=!1,o=new AbortController,l=()=>!r&&this.currentTransition?.id===t.id;return V(t).pipe(Qe(s=>{if(this.navigationId>t.id)return this.cancelNavigationTransition(t,"",dt.SupersededByNewNavigation),Ze;this.currentTransition=t;let u=this.lastSuccessfulNavigation();this.currentNavigation.set({id:s.id,initialUrl:s.rawUrl,extractedUrl:s.extractedUrl,targetBrowserUrl:typeof s.extras.browserUrl=="string"?this.urlSerializer.parse(s.extras.browserUrl):s.extras.browserUrl,trigger:s.source,extras:s.extras,previousNavigation:u?G(b({},u),{previousNavigation:null}):null,abort:()=>o.abort(),routesRecognizeHandler:s.routesRecognizeHandler,beforeActivateHandler:s.beforeActivateHandler});let c=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),m=s.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!c&&m!=="reload")return this.events.next(new hn(s.id,this.urlSerializer.serialize(s.rawUrl),"",qa.IgnoredSameUrlNavigation)),s.resolve(!1),Ze;if(this.urlHandlingStrategy.shouldProcessUrl(s.rawUrl))return V(s).pipe(Qe(p=>(this.events.next(new Jt(p.id,this.urlSerializer.serialize(p.extractedUrl),p.source,p.restoredState)),p.id!==this.navigationId?Ze:Promise.resolve(p))),g_(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,o.signal),pt(p=>{t.targetSnapshot=p.targetSnapshot,t.urlAfterRedirects=p.urlAfterRedirects,this.currentNavigation.update(h=>(h.finalUrl=p.urlAfterRedirects,h)),this.events.next(new Ka)}),Qe(p=>bt(t.routesRecognizeHandler.deferredHandle??V(void 0)).pipe(Y(()=>p))),pt(()=>{let p=new Nn(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(p)}));if(c&&this.urlHandlingStrategy.shouldProcessUrl(s.currentRawUrl)){let{id:p,extractedUrl:h,source:_,restoredState:D,extras:C}=s,w=new Jt(p,this.urlSerializer.serialize(h),_,D);this.events.next(w);let x=hp(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=t=G(b({},s),{targetSnapshot:x,urlAfterRedirects:h,extras:G(b({},C),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(S=>(S.finalUrl=h,S)),V(t)}else return this.events.next(new hn(s.id,this.urlSerializer.serialize(s.extractedUrl),"",qa.IgnoredByUrlHandlingStrategy)),s.resolve(!1),Ze}),Y(s=>{let u=new Oo(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);return this.events.next(u),this.currentTransition=t=G(b({},s),{guards:Iv(s.targetSnapshot,s.currentSnapshot,this.rootContexts)}),t}),Uv(s=>this.events.next(s)),Qe(s=>{if(t.guardsResult=s.guardsResult,s.guardsResult&&typeof s.guardsResult!="boolean")throw Ha(this.urlSerializer,s.guardsResult);let u=new Fo(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot,!!s.guardsResult);if(this.events.next(u),!l())return Ze;if(!s.guardsResult)return this.cancelNavigationTransition(s,"",dt.GuardRejected),Ze;if(s.guards.canActivateChecks.length===0)return V(s);let c=new Po(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);if(this.events.next(c),!l())return Ze;let m=!1;return V(s).pipe(b_(this.paramsInheritanceStrategy),pt({next:()=>{m=!0;let p=new Lo(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(p)},complete:()=>{m||this.cancelNavigationTransition(s,"",dt.NoDataFromResolver)}}))}),Rd(s=>{let u=m=>{let p=[];if(m.routeConfig?._loadedComponent)m.component=m.routeConfig?._loadedComponent;else if(m.routeConfig?.loadComponent){let h=m._environmentInjector;p.push(this.configLoader.loadComponent(h,m.routeConfig).then(_=>{m.component=_}))}for(let h of m.children)p.push(...u(h));return p},c=u(s.targetSnapshot.root);return c.length===0?V(s):bt(Promise.all(c).then(()=>s))}),Qe(s=>{let{newlyCreatedRoutes:u,state:c}=Mv(e.routeReuseStrategy,s.targetSnapshot,s.currentRouterState);return this.currentTransition=t=s=G(b({},s),{targetRouterState:c,newlyCreatedRoutes:u}),this.currentNavigation.update(m=>(m.targetRouterState=c,m)),V(s)}),this.routerResourcesFeature?.setupAndRunResources(o.signal)??(s=>s),Rd(()=>this.afterPreactivation()),Qe(()=>{let{currentSnapshot:s,targetSnapshot:u}=t,c=this.createViewTransition?.(this.environmentInjector,s.root,u.root,t.hasUAVisualTransition);return c?bt(c).pipe(Y(()=>t)):V(t)}),yt(1),Qe(s=>{a=!1,this.events.next(new Li);let u=t.beforeActivateHandler.deferredHandle;return u?bt(u.then(()=>s)):V(s)}),pt(s=>{new Dd(e.routeReuseStrategy,t.targetRouterState,t.currentRouterState,u=>this.events.next(u),this.inputBindingEnabled).activate(this.rootContexts),s.newlyCreatedRoutes?.clear(),l()&&(Vp(s.targetRouterState),r=!0,this.currentNavigation.update(u=>(u.abort=w_,u)),this.lastSuccessfulNavigation.set(ge(this.currentNavigation)),this.events.next(new jt(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects))),this.titleStrategy?.updateTitle(s.targetRouterState.snapshot),s.resolve(!0))}),ce(Dp(o.signal).pipe(be(()=>!r&&a),pt(()=>{this.cancelNavigationTransition(t,o.signal.reason+"",dt.Aborted)}))),pt({complete:()=>{r=!0}}),ce(this.transitionAbortWithErrorSubject.pipe(pt(s=>{throw s}))),Kr(()=>{o.abort(),r||this.cancelNavigationTransition(t,"",dt.SupersededByNewNavigation),this.currentTransition?.id===t.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),dn(s=>{if(r=!0,Xm(t),this.destroyed)return t.resolve(!1),Ze;if(s instanceof li&&(s=Ha(this.urlSerializer,s)),Cp(s))this.events.next(new Ct(t.id,this.urlSerializer.serialize(t.extractedUrl),s.message,s.cancellationCode)),Av(s)?this.events.next(new Vi(s.url,s.navigationBehaviorOptions)):t.resolve(!1);else{let u=new en(t.id,this.urlSerializer.serialize(t.extractedUrl),s,t.targetSnapshot??void 0);try{let c=ht(this.environmentInjector,()=>this.navigationErrorHandler?.(u));if(c instanceof li){let{message:m,cancellationCode:p}=Ha(this.urlSerializer,c);this.events.next(new Ct(t.id,this.urlSerializer.serialize(t.extractedUrl),m,p)),this.events.next(new Vi(c.redirectTo,c.navigationBehaviorOptions))}else throw this.events.next(u),s}catch(c){this.options.resolveNavigationPromiseOnError?t.resolve(!1):t.reject(c)}}return Ze}))}))}cancelNavigationTransition(e,t,a){Xm(e);let r=new Ct(e.id,this.urlSerializer.serialize(e.extractedUrl),t,a);this.events.next(r),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),t=ge(this.currentNavigation),a=t?.targetBrowserUrl??t?.extractedUrl;return e.toString()!==a?.toString()&&!t?.extras.skipLocationChange}static \u0275fac=function(t){return new(t||n)};static \u0275prov=O({token:n,factory:n.\u0275fac})}return n})();function D_(n){return n!==Ua}function Xm(n){for(let i of n.newlyCreatedRoutes??[])i._localInjector?.destroy(),i._localInjector=void 0;Vp(n.targetRouterState)}function Vp(n){if(!n)return;let i=e=>{e.value.pending?.set(!1),e.children.forEach(i)};i(n._root)}var Bp=new y("");var jp=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=O({token:n,factory:()=>d(S_)})}return n})(),Go=class{shouldDetach(i){return!1}store(i,e){}shouldAttach(i){return!1}retrieve(i){return null}shouldReuseRoute(i,e){return i.routeConfig===e.routeConfig}shouldDestroyInjector(i){return!0}},S_=(()=>{class n extends Go{static \u0275fac=function(t){return new(t||n)};static \u0275prov=O({token:n,factory:n.\u0275fac})}return n})(),Od=(()=>{class n{urlSerializer=d(Ja);options=d(nr,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=d(Rn);urlHandlingStrategy=d(qo);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new Nt;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:t,targetBrowserUrl:a}){let r=e!==void 0?this.urlHandlingStrategy.merge(e,t):t,o=a??r;return o instanceof Nt?this.urlSerializer.serialize(o):o}routerUrlState(e){return e?.targetBrowserUrl===void 0||e?.finalUrl===void 0?{}:{\u0275routerUrl:this.urlSerializer.serialize(e.finalUrl)}}commitTransition({targetRouterState:e,finalUrl:t,initialUrl:a}){t&&e?(this.currentUrlTree=t,this.rawUrlTree=this.urlHandlingStrategy.merge(t,a),this.routerState=e):this.rawUrlTree=a}routerState=hp(null,d(rt));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(t){return new(t||n)};static \u0275prov=O({token:n,factory:()=>d(x_)})}return n})(),x_=(()=>{class n extends Od{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(t=>{t.type==="popstate"&&setTimeout(()=>{e(t.url,t.state,"popstate",{replaceUrl:!0},t.hasUAVisualTransition)})})}handleRouterEvent(e,t){e instanceof Jt?this.updateStateMemento():e instanceof hn?this.commitTransition(t):e instanceof Nn?this.urlUpdateStrategy==="eager"&&(t.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(t),t)):e instanceof Li?(this.commitTransition(t),this.urlUpdateStrategy==="deferred"&&!t.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(t),t)):e instanceof Ct&&!yp(e)?this.restoreHistory(t):e instanceof en?this.restoreHistory(t,!0):e instanceof jt&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,t){let{extras:a,id:r}=t,{replaceUrl:o,state:l}=a;if(this.location.isCurrentPathEqualTo(e)||o){let s=this.browserPageId,u=b(b({},l),this.generateNgRouterState(r,s,t));this.location.replaceState(e,"",u)}else{let s=b(b({},l),this.generateNgRouterState(r,this.browserPageId+1,t));this.location.go(e,"",s)}}restoreHistory(e,t=!1){if(this.canceledNavigationResolution==="computed"){let a=this.browserPageId,r=this.currentPageId-a;r!==0?this.location.historyGo(r):this.getCurrentUrlTree()===e.finalUrl&&r===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(t&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,t,a){return this.canceledNavigationResolution==="computed"?b({navigationId:e,\u0275routerPageId:t},this.routerUrlState(a)):b({navigationId:e},this.routerUrlState(a))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=O({token:n,factory:n.\u0275fac})}return n})();function Fd(n,i){n.events.pipe(be(e=>e instanceof jt||e instanceof Ct||e instanceof en||e instanceof hn),Y(e=>e instanceof jt||e instanceof hn?0:(e instanceof Ct?e.code===dt.Redirect||e.code===dt.SupersededByNewNavigation:!1)?2:1),be(e=>e!==2),yt(1)).subscribe(()=>{i()})}var tn=(()=>{class n{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=d(om);stateManager=d(Od);options=d(nr,{optional:!0})||{};pendingTasks=d(Qu);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=d(Lp);urlSerializer=d(Ja);location=d(Rn);urlHandlingStrategy=d(qo);injector=d(rt);_events=new N;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=d(jp);injectorCleanup=d(Bp,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=d(ir,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!d(Wo,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new Ee;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(t=>{try{let a=this.navigationTransitions.currentTransition,r=ge(this.navigationTransitions.currentNavigation);if(a!==null&&r!==null){if(this.stateManager.handleRouterEvent(t,r),t instanceof Ct&&t.code!==dt.Redirect&&t.code!==dt.SupersededByNewNavigation)this.navigated=!0;else if(t instanceof jt)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(t instanceof Vi){let o=t.navigationBehaviorOptions,l=this.urlHandlingStrategy.merge(t.url,a.currentRawUrl),s=b({scroll:a.extras.scroll,browserUrl:a.extras.browserUrl,info:a.extras.info,skipLocationChange:a.extras.skipLocationChange,replaceUrl:a.extras.replaceUrl||this.urlUpdateStrategy==="eager"||D_(a.source)},o);this.scheduleNavigation(l,Ua,null,s,a.hasUAVisualTransition,{resolve:a.resolve,reject:a.reject,promise:a.promise})}}Ev(t)&&this._events.next(t)}catch(a){this.navigationTransitions.transitionAbortWithErrorSubject.next(a)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Ua,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,t,a,r,o)=>{this.navigateToSyncWithBrowser(e,a,t,r,o)})}navigateToSyncWithBrowser(e,t,a,r,o){let l=a?.navigationId?a:null,s=a?.\u0275routerUrl??e;if(a?.\u0275routerUrl&&(r=G(b({},r),{browserUrl:e})),a){let c=b({},a);delete c.navigationId,delete c.\u0275routerPageId,delete c.\u0275routerUrl,Object.keys(c).length!==0&&(r.state=c)}let u=this.parseUrl(s);this.scheduleNavigation(u,t,l,r,o).catch(c=>{this.disposed||this.injector.get(xa)(c)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return ge(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(Nd),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,t={}){let{relativeTo:a,queryParams:r,fragment:o,queryParamsHandling:l,preserveFragment:s}=t,u=s?this.currentUrlTree.fragment:o,c=null;switch(l??this.options.defaultQueryParamsHandling){case"merge":c=b(b({},this.currentUrlTree.queryParams),r);break;case"preserve":c=this.currentUrlTree.queryParams;break;default:c=r||null}c!==null&&(c=this.removeEmptyProps(c));let m;try{let p=a?a.snapshot:this.routerState.snapshot.root;m=cp(p)}catch{(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),m=this.currentUrlTree.root}return up(m,e,c,u??null,this.urlSerializer)}navigateByUrl(e,t={skipLocationChange:!1}){let a=Fi(e)?e:this.parseUrl(e),r=this.urlHandlingStrategy.merge(a,this.rawUrlTree);return this.scheduleNavigation(r,Ua,null,t)}navigate(e,t={skipLocationChange:!1}){return E_(e),this.navigateByUrl(this.createUrlTree(e,t),t)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.console.warn(Da(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,t){let a;if(t===!0?a=b({},tp):t===!1?a=b({},Ro):a=b(b({},Ro),t),Fi(e))return fd(this.currentUrlTree,e,a);let r=this.parseUrl(e);return fd(this.currentUrlTree,r,a)}removeEmptyProps(e){return Object.entries(e).reduce((t,[a,r])=>(r!=null&&(t[a]=r),t),{})}scheduleNavigation(e,t,a,r,o,l){if(this.disposed)return Promise.resolve(!1);let s,u,c;l?(s=l.resolve,u=l.reject,c=l.promise):c=new Promise((p,h)=>{s=p,u=h});let m=this.pendingTasks.add();return Fd(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(m))}),this.navigationTransitions.handleNavigationRequest({source:t,restoredState:a,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:r,hasUAVisualTransition:o,resolve:s,reject:u,promise:c,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),c.catch(Promise.reject.bind(Promise))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=O({token:n,factory:n.\u0275fac})}return n})();function E_(n){for(let i=0;i<n.length;i++)if(n[i]==null)throw new ne(4008,!1)}var I_=new y("");function Pd(n,...i){return it([{provide:ir,multi:!0,useValue:n},{provide:In,useFactory:N_},{provide:sm,multi:!0,useFactory:T_},i.map(e=>e.\u0275providers)])}function N_(){return d(tn).routerState.root}function T_(){let n=d(re);return i=>{let e=n.get(Dn);if(i!==e.components[0])return;let t=n.get(tn),a=n.get(O_);n.get(F_)===1&&t.initialNavigation(),n.get(P_,null,{optional:!0})?.setUpPreloading(),n.get(I_,null,{optional:!0})?.init(),t.resetRootComponentType(e.componentTypes[0]),a.closed||(a.next(),a.complete(),a.unsubscribe())}}var O_=new y("",{factory:()=>new N}),F_=new y("",{factory:()=>1});var P_=new y("");var V_="@",B_=(()=>{class n{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=d(re);loadingSchedulerFn=d(j_,{optional:!0});_engine;constructor(e,t,a,r,o){this.doc=e,this.delegate=t,this.zone=a,this.animationType=r,this.moduleImpl=o}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-X3JOF7KD.js").then(a=>a),t;return this.loadingSchedulerFn?t=this.loadingSchedulerFn(e):t=e(),t.catch(a=>{throw new ne(5300,!1)}).then(({\u0275createEngine:a,\u0275AnimationRendererFactory:r})=>{this._engine=a(this.animationType,this.doc);let o=new r(this.delegate,this._engine,this.zone);return this.delegate=o,o})}createRenderer(e,t){let a=this.delegate.createRenderer(e,t);if(a.\u0275type===0)return a;typeof a.throwOnSyntheticProps=="boolean"&&(a.throwOnSyntheticProps=!1);let r=new Ld(a);return t?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(o=>{let l=o.createRenderer(e,t);r.use(l),this.scheduler??=this.injector.get(em,null,{optional:!0}),this.scheduler?.notify(10)}).catch(o=>{r.use(a)}),r}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}componentReplaced(e){this._engine?.flush(),this.delegate.componentReplaced?.(e)}static \u0275fac=function(t){Ra()};static \u0275prov=U({token:n,factory:n.\u0275fac})}return n})(),Ld=class{delegate;replay=[];\u0275type=1;constructor(i){this.delegate=i}use(i){if(this.delegate=i,this.replay!==null){for(let e of this.replay)e(i);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(i,e){return this.delegate.createElement(i,e)}createComment(i){return this.delegate.createComment(i)}createText(i){return this.delegate.createText(i)}get destroyNode(){return this.delegate.destroyNode}appendChild(i,e){this.delegate.appendChild(i,e)}insertBefore(i,e,t,a){this.delegate.insertBefore(i,e,t,a)}removeChild(i,e,t,a){this.delegate.removeChild(i,e,t,a)}selectRootElement(i,e){return this.delegate.selectRootElement(i,e)}parentNode(i){return this.delegate.parentNode(i)}nextSibling(i){return this.delegate.nextSibling(i)}setAttribute(i,e,t,a){this.delegate.setAttribute(i,e,t,a)}removeAttribute(i,e,t){this.delegate.removeAttribute(i,e,t)}addClass(i,e){this.delegate.addClass(i,e)}removeClass(i,e){this.delegate.removeClass(i,e)}setStyle(i,e,t,a){this.delegate.setStyle(i,e,t,a)}removeStyle(i,e,t){this.delegate.removeStyle(i,e,t)}setProperty(i,e,t){this.shouldReplay(e)&&this.replay.push(a=>a.setProperty(i,e,t)),this.delegate.setProperty(i,e,t)}setValue(i,e){this.delegate.setValue(i,e)}listen(i,e,t,a){return this.shouldReplay(e)&&this.replay.push(r=>r.listen(i,e,t,a)),this.delegate.listen(i,e,t,a)}shouldReplay(i){return this.replay!==null&&i.startsWith(V_)}},j_=new y("");function Up(n="animations"){return Tl("NgAsyncAnimations"),it([{provide:Je,useFactory:()=>new B_(d(q),d(Pa),d(P),n)},{provide:Di,useValue:n==="noop"?"NoopAnimations":"BrowserAnimations"}])}function Ko(n,i){let t=!i?.manualCleanup?i?.injector?.get(Rt)??d(Rt):null,a=U_(i?.equal),r;i?.requireSync?r=Z({kind:0},{equal:a}):r=Z({kind:1,value:i?.initialValue},{equal:a});let o,l=n.subscribe({next:s=>r.set({kind:1,value:s}),error:s=>{r.set({kind:2,error:s}),o?.()},complete:()=>{o?.()}});if(i?.requireSync&&r().kind===0)throw new ne(601,!1);return o=t?.onDestroy(l.unsubscribe.bind(l)),Ke(()=>{let s=r();switch(s.kind){case 1:return s.value;case 2:throw s.error;case 0:throw new ne(601,!1)}},{equal:i?.equal})}function U_(n=Object.is){return(i,e)=>i.kind===1&&e.kind===1&&n(i.value,e.value)}var zd={};function Tt(n,i){if(zd[n]=(zd[n]||0)+1,typeof i=="function")return Vd(n,(...t)=>G(b({},i(...t)),{type:n}));switch(i?i._as:"empty"){case"empty":return Vd(n,()=>({type:n}));case"props":return Vd(n,t=>G(b({},t),{type:n}));default:throw new Error("Unexpected config.")}}function fn(){return{_as:"props",_p:void 0}}function Vd(n,i){return Object.defineProperty(i,"type",{value:n,writable:!1})}function H_(n,i){if(n==null)throw new Error(`${i} must be defined.`)}var rr="@ngrx/store/init",nn=(()=>{class n extends ze{constructor(){super({type:rr})}next(e){if(typeof e=="function")throw new TypeError(`
        Dispatch expected an object, instead it received a function.
        If you're using the createAction function, make sure to invoke the function
        before dispatching the action. For example, someAction should be someAction().`);if(typeof e>"u")throw new TypeError("Actions must be objects");if(typeof e.type>"u")throw new TypeError("Actions must have a type property");super.next(e)}complete(){}ngOnDestroy(){super.complete()}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275prov=U({token:n,factory:n.\u0275fac})}}return n})(),$_=[nn],ah=new y("@ngrx/store Internal Root Guard"),Hp=new y("@ngrx/store Internal Initial State"),or=new y("@ngrx/store Initial State"),rh=new y("@ngrx/store Reducer Factory"),$p=new y("@ngrx/store Internal Reducer Factory Provider"),oh=new y("@ngrx/store Initial Reducers"),Bd=new y("@ngrx/store Internal Initial Reducers"),Gp=new y("@ngrx/store Store Features"),Wp=new y("@ngrx/store Internal Store Reducers"),jd=new y("@ngrx/store Internal Feature Reducers"),Yp=new y("@ngrx/store Internal Feature Configs"),sh=new y("@ngrx/store Internal Store Features"),qp=new y("@ngrx/store Internal Feature Reducers Token"),lh=new y("@ngrx/store Feature Reducers"),Kp=new y("@ngrx/store User Provided Meta Reducers"),Xo=new y("@ngrx/store Meta Reducers"),Xp=new y("@ngrx/store Internal Resolved Meta Reducers"),Zp=new y("@ngrx/store User Runtime Checks Config"),Qp=new y("@ngrx/store Internal User Runtime Checks Config"),ci=new y("@ngrx/store Internal Runtime Checks"),Gd=new y("@ngrx/store Check if Action types are unique"),ar=new y("@ngrx/store Root Store Provider"),Zo=new y("@ngrx/store Feature State Provider");function Wd(n,i={}){let e=Object.keys(n),t={};for(let r=0;r<e.length;r++){let o=e[r];typeof n[o]=="function"&&(t[o]=n[o])}let a=Object.keys(t);return function(o,l){o=o===void 0?i:o;let s=!1,u={};for(let c=0;c<a.length;c++){let m=a[c],p=t[m],h=o[m],_=p(h,l);u[m]=_,s=s||_!==h}return s?u:o}}function G_(n,i){return Object.keys(n).filter(e=>e!==i).reduce((e,t)=>Object.assign(e,{[t]:n[t]}),{})}function dh(...n){return function(i){if(n.length===0)return i;let e=n[n.length-1];return n.slice(0,-1).reduceRight((a,r)=>r(a),e(i))}}function ch(n,i){return Array.isArray(i)&&i.length>0&&(n=dh.apply(null,[...i,n])),(e,t)=>{let a=n(e);return(r,o)=>(r=r===void 0?t:r,a(r,o))}}function W_(n){let i=Array.isArray(n)&&n.length>0?dh(...n):e=>e;return(e,t)=>(e=i(e),(a,r)=>(a=a===void 0?t:a,e(a,r)))}var ui=class extends Oe{},zi=class extends nn{},Jo="@ngrx/store/update-reducers",Qo=(()=>{class n extends ze{get currentReducers(){return this.reducers}constructor(e,t,a,r){super(r(a,t)),this.dispatcher=e,this.initialState=t,this.reducers=a,this.reducerFactory=r}addFeature(e){this.addFeatures([e])}addFeatures(e){let t=e.reduce((a,{reducers:r,reducerFactory:o,metaReducers:l,initialState:s,key:u})=>{let c=typeof r=="function"?W_(l)(r,s):ch(o,l)(r,s);return a[u]=c,a},{});this.addReducers(t)}removeFeature(e){this.removeFeatures([e])}removeFeatures(e){this.removeReducers(e.map(t=>t.key))}addReducer(e,t){this.addReducers({[e]:t})}addReducers(e){this.reducers=b(b({},this.reducers),e),this.updateReducers(Object.keys(e))}removeReducer(e){this.removeReducers([e])}removeReducers(e){e.forEach(t=>{this.reducers=G_(this.reducers,t)}),this.updateReducers(e)}updateReducers(e){this.next(this.reducerFactory(this.reducers,this.initialState)),this.dispatcher.next({type:Jo,features:e})}ngOnDestroy(){this.complete()}static{this.\u0275fac=function(t){return new(t||n)(A(zi),A(or),A(oh),A(rh))}}static{this.\u0275prov=U({token:n,factory:n.\u0275fac})}}return n})(),Y_=[Qo,{provide:ui,useExisting:Qo},{provide:zi,useExisting:nn}],mi=(()=>{class n extends N{ngOnDestroy(){this.complete()}static{this.\u0275fac=(()=>{let e;return function(a){return(e||(e=ye(n)))(a||n)}})()}static{this.\u0275prov=U({token:n,factory:n.\u0275fac})}}return n})(),q_=[mi],Ui=class extends Oe{},Jp=(()=>{class n extends ze{static{this.INIT=rr}constructor(e,t,a,r){super(r);let l=e.pipe(Gr($r)).pipe(Kn(t)),s={state:r},u=l.pipe(Xr(K_,s));this.stateSubscription=u.subscribe(({state:c,action:m})=>{this.next(c),a.next(m)}),this.state=Ko(this,{manualCleanup:!0,requireSync:!0})}ngOnDestroy(){this.stateSubscription.unsubscribe(),this.complete()}static{this.\u0275fac=function(t){return new(t||n)(A(nn),A(ui),A(mi),A(or))}}static{this.\u0275prov=U({token:n,factory:n.\u0275fac})}}return n})();function K_(n={state:void 0},[i,e]){let{state:t}=n;return{state:e(t,i),action:i}}var X_=[Jp,{provide:Ui,useExisting:Jp}],zt=(()=>{class n extends Oe{constructor(e,t,a,r){super(),this.actionsObserver=t,this.reducerManager=a,this.injector=r,this.source=e,this.state=e.state}select(e,...t){return Yd.call(null,e,...t)(this)}selectSignal(e,t){return Ke(()=>e(this.state()),t)}lift(e){let t=new n(this,this.actionsObserver,this.reducerManager);return t.operator=e,t}dispatch(e,t){if(typeof e=="function")return this.processDispatchFn(e,t);this.actionsObserver.next(e)}next(e){this.actionsObserver.next(e)}error(e){this.actionsObserver.error(e)}complete(){this.actionsObserver.complete()}addReducer(e,t){this.reducerManager.addReducer(e,t)}removeReducer(e){this.reducerManager.removeReducer(e)}processDispatchFn(e,t){H_(this.injector,"Store Injector");let a=t?.injector??Q_()??this.injector;return vt(()=>{let r=e();ge(()=>this.dispatch(r))},{injector:a})}static{this.\u0275fac=function(t){return new(t||n)(A(Ui),A(nn),A(Qo),A(re))}}static{this.\u0275prov=U({token:n,factory:n.\u0275fac})}}return n})(),Z_=[zt];function Yd(n,i,...e){return function(a){let r;if(typeof n=="string"){let o=[i,...e].filter(Boolean);r=a.pipe(Yu(n,...o))}else if(typeof n=="function")r=a.pipe(Y(o=>n(o,i)));else throw new TypeError(`Unexpected type '${typeof n}' in select operator, expected 'string' or 'function'`);return r.pipe(wa())}}function Q_(){try{return d(re)}catch{return}}var qd="https://ngrx.io/guide/store/configuration/runtime-checks";function eh(n){return n===void 0}function th(n){return n===null}function uh(n){return Array.isArray(n)}function J_(n){return typeof n=="string"}function e0(n){return typeof n=="boolean"}function t0(n){return typeof n=="number"}function mh(n){return typeof n=="object"&&n!==null}function n0(n){return mh(n)&&!uh(n)}function i0(n){if(!n0(n))return!1;let i=Object.getPrototypeOf(n);return i===Object.prototype||i===null}function Ud(n){return typeof n=="function"}function a0(n){return Ud(n)&&n.hasOwnProperty("\u0275cmp")}function r0(n,i){return Object.prototype.hasOwnProperty.call(n,i)}var o0=!1;function Kd(){return o0}function nh(n,i){return n===i}function s0(n,i,e){for(let t=0;t<n.length;t++)if(!e(n[t],i[t]))return!0;return!1}function ph(n,i=nh,e=nh){let t=null,a=null,r;function o(){t=null,a=null}function l(c=void 0){r={result:c}}function s(){r=void 0}function u(){if(r!==void 0)return r.result;if(!t)return a=n.apply(null,arguments),t=arguments,a;if(!s0(arguments,t,i))return a;let c=n.apply(null,arguments);return t=arguments,e(a,c)?a:(a=c,c)}return{memoized:u,reset:o,setResult:l,clearResult:s}}function gn(...n){return d0(ph)(...n)}function l0(n,i,e,t){if(e===void 0){let r=i.map(o=>o(n));return t.memoized.apply(null,r)}let a=i.map(r=>r(n,e));return t.memoized.apply(null,[...a,e])}function d0(n,i={stateFn:l0}){return function(...e){let t=e;if(Array.isArray(t[0])){let[c,...m]=t;t=[...c,...m]}else t.length===1&&c0(t[0])&&(t=u0(t[0]));let a=t.slice(0,t.length-1),r=t[t.length-1],o=a.filter(c=>c.release&&typeof c.release=="function"),l=n(function(...c){return r.apply(null,c)}),s=ph(function(c,m){return i.stateFn.apply(null,[c,a,m,l])});function u(){s.reset(),l.reset(),o.forEach(c=>c.release())}return Object.assign(s.memoized,{release:u,projector:l.memoized,setResult:s.setResult,clearResult:s.clearResult})}}function Xd(n){return gn(i=>{let e=i[n];return!Kd()&&ni()&&!(n in i)&&console.warn(`@ngrx/store: The feature name "${n}" does not exist in the state, therefore createFeatureSelector cannot access it.  Be sure it is imported in a loaded module using StoreModule.forRoot('${n}', ...) or StoreModule.forFeature('${n}', ...).  If the default state is intended to be undefined, as is the case with router state, this development-only warning message can be ignored.`),e},i=>i)}function c0(n){return!!n&&typeof n=="object"&&Object.values(n).every(i=>typeof i=="function")}function u0(n){let i=Object.values(n),e=Object.keys(n),t=(...a)=>e.reduce((r,o,l)=>G(b({},r),{[o]:a[l]}),{});return[...i,t]}function m0(n){return n instanceof y?d(n):n}function p0(n,i){return i.map((e,t)=>{if(n[t]instanceof y){let a=d(n[t]);return{key:e.key,reducerFactory:a.reducerFactory?a.reducerFactory:Wd,metaReducers:a.metaReducers?a.metaReducers:[],initialState:a.initialState}}return e})}function h0(n){return n.map(i=>i instanceof y?d(i):i)}function hh(n){return typeof n=="function"?n():n}function f0(n,i){return n.concat(i)}function g0(){if(d(zt,{optional:!0,skipSelf:!0}))throw new TypeError("The root Store has been provided more than once. Feature modules should provide feature states instead.");return"guarded"}function b0(n,i){return function(e,t){let a=i.action(t)?Hd(t):t,r=n(e,a);return i.state()?Hd(r):r}}function Hd(n){Object.freeze(n);let i=Ud(n);return Object.getOwnPropertyNames(n).forEach(e=>{if(!e.startsWith("\u0275")&&r0(n,e)&&(!i||e!=="caller"&&e!=="callee"&&e!=="arguments")){let t=n[e];(mh(t)||Ud(t))&&!Object.isFrozen(t)&&Hd(t)}}),n}function y0(n,i){return function(e,t){if(i.action(t)){let r=$d(t);ih(r,"action")}let a=n(e,t);if(i.state()){let r=$d(a);ih(r,"state")}return a}}function $d(n,i=[]){return(eh(n)||th(n))&&i.length===0?{path:["root"],value:n}:Object.keys(n).reduce((t,a)=>{if(t)return t;let r=n[a];return a0(r)?t:eh(r)||th(r)||t0(r)||e0(r)||J_(r)||uh(r)?!1:i0(r)?$d(r,[...i,a]):{path:[...i,a],value:r}},!1)}function ih(n,i){if(n===!1)return;let e=n.path.join("."),t=new Error(`Detected unserializable ${i} at "${e}". ${qd}#strict${i}serializability`);throw t.value=n.value,t.unserializablePath=e,t}function v0(n,i){return function(e,t){if(i.action(t)&&!P.isInAngularZone())throw new Error(`Action '${t.type}' running outside NgZone. ${qd}#strictactionwithinngzone`);return n(e,t)}}function _0(n){return ni()?b({strictStateSerializability:!1,strictActionSerializability:!1,strictStateImmutability:!0,strictActionImmutability:!0,strictActionWithinNgZone:!1,strictActionTypeUniqueness:!1},n):{strictStateSerializability:!1,strictActionSerializability:!1,strictStateImmutability:!1,strictActionImmutability:!1,strictActionWithinNgZone:!1,strictActionTypeUniqueness:!1}}function C0({strictActionSerializability:n,strictStateSerializability:i}){return e=>n||i?y0(e,{action:t=>n&&!Zd(t),state:()=>i}):e}function w0({strictActionImmutability:n,strictStateImmutability:i}){return e=>n||i?b0(e,{action:t=>n&&!Zd(t),state:()=>i}):e}function Zd(n){return n.type.startsWith("@ngrx")}function D0({strictActionWithinNgZone:n}){return i=>n?v0(i,{action:e=>n&&!Zd(e)}):i}function S0(n){return[{provide:Qp,useValue:n},{provide:Zp,useFactory:x0,deps:[Qp]},{provide:ci,deps:[Zp],useFactory:_0},{provide:Xo,multi:!0,deps:[ci],useFactory:w0},{provide:Xo,multi:!0,deps:[ci],useFactory:C0},{provide:Xo,multi:!0,deps:[ci],useFactory:D0}]}function fh(){return[{provide:Gd,multi:!0,deps:[ci],useFactory:E0}]}function x0(n){return n}function E0(n){if(!n.strictActionTypeUniqueness)return;let i=Object.entries(zd).filter(([,e])=>e>1).map(([e])=>e);if(i.length)throw new Error(`Action types are registered more than once, ${i.map(e=>`"${e}"`).join(", ")}. ${qd}#strictactiontypeuniqueness`)}function gh(n,i,e={}){return it([...N0(n,i,e),I0])}function M0(n={},i={}){return[{provide:ah,useFactory:g0},{provide:Hp,useValue:i.initialState},{provide:or,useFactory:hh,deps:[Hp]},{provide:Bd,useValue:n},{provide:Wp,useExisting:n instanceof y?n:Bd},{provide:oh,deps:[Bd,[new Nl(Wp)]],useFactory:m0},{provide:Kp,useValue:i.metaReducers?i.metaReducers:[]},{provide:Xp,deps:[Xo,Kp],useFactory:f0},{provide:$p,useValue:i.reducerFactory?i.reducerFactory:Wd},{provide:rh,deps:[$p,Xp],useFactory:ch},$_,Y_,q_,X_,Z_,S0(i.runtimeChecks),fh()]}function R0(){d(nn),d(ui),d(mi),d(zt),d(ah,{optional:!0}),d(Gd,{optional:!0})}var k0=[{provide:ar,useFactory:R0},Xn(()=>d(ar))];function bh(n,i){return it([...M0(n,i),k0])}function A0(){d(ar);let n=d(sh),i=d(lh),e=d(Qo);d(Gd,{optional:!0});let t=n.map((a,r)=>{let l=i.shift()[r];return G(b({},a),{reducers:l,initialState:hh(a.initialState)})});e.addFeatures(t)}var I0=[{provide:Zo,useFactory:A0},Xn(()=>d(Zo))];function N0(n,i,e={}){return[{provide:Yp,multi:!0,useValue:n instanceof Object?{}:e},{provide:Gp,multi:!0,useValue:{key:n instanceof Object?n.name:n,reducerFactory:!(e instanceof y)&&e.reducerFactory?e.reducerFactory:Wd,metaReducers:!(e instanceof y)&&e.metaReducers?e.metaReducers:[],initialState:!(e instanceof y)&&e.initialState?e.initialState:void 0}},{provide:sh,deps:[Yp,Gp],useFactory:p0},{provide:jd,multi:!0,useValue:n instanceof Object?n.reducer:i},{provide:qp,multi:!0,useExisting:i instanceof y?i:jd},{provide:lh,multi:!0,deps:[jd,[new Nl(qp)]],useFactory:h0},fh()]}function es(...n){let i=n.pop(),e=n.map(t=>t.type);return{reducer:i,types:e}}function yh(n,...i){let e=new Map;for(let t of i)for(let a of t.types){let r=e.get(a);if(r){let o=(l,s)=>t.reducer(r(l,s),s);e.set(a,o)}else e.set(a,t.reducer)}return function(t=n,a){let r=e.get(a.type);return r?r(t,a):t}}var lr="PERFORM_ACTION",T0="REFRESH",Eh="RESET",Mh="ROLLBACK",Rh="COMMIT",kh="SWEEP",Ah="TOGGLE_ACTION",O0="SET_ACTIONS_ACTIVE",Ih="JUMP_TO_STATE",Nh="JUMP_TO_ACTION",uc="IMPORT_STATE",Th="LOCK_CHANGES",Oh="PAUSE_RECORDING",Hi=class{constructor(i,e){if(this.action=i,this.timestamp=e,this.type=lr,typeof i.type>"u")throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?')}},Jd=class{constructor(){this.type=T0}},ec=class{constructor(i){this.timestamp=i,this.type=Eh}},tc=class{constructor(i){this.timestamp=i,this.type=Mh}},nc=class{constructor(i){this.timestamp=i,this.type=Rh}},ic=class{constructor(){this.type=kh}},ac=class{constructor(i){this.id=i,this.type=Ah}};var rc=class{constructor(i){this.index=i,this.type=Ih}},oc=class{constructor(i){this.actionId=i,this.type=Nh}},sc=class{constructor(i){this.nextLiftedState=i,this.type=uc}},lc=class{constructor(i){this.status=i,this.type=Th}},dc=class{constructor(i){this.status=i,this.type=Oh}};var as=new y("@ngrx/store-devtools Options"),vh=new y("@ngrx/store-devtools Initial Config");function Fh(){return null}var F0="NgRx Store DevTools";function P0(n){let i={maxAge:!1,monitor:Fh,actionSanitizer:void 0,stateSanitizer:void 0,actionCreators:void 0,name:F0,serialize:!1,logOnly:!1,autoPause:!1,trace:!1,traceLimit:75,features:{pause:!0,lock:!0,persist:!0,export:!0,import:"custom",jump:!0,skip:!0,reorder:!0,dispatch:!0,test:!0},connectInZone:!1},e=typeof n=="function"?n():n,t=e.logOnly?{pause:!0,export:!0,test:!0}:!1,a=e.features||t||i.features;a.import===!0&&(a.import="custom");let r=Object.assign({},i,{features:a},e);if(r.maxAge&&r.maxAge<2)throw new Error(`Devtools 'maxAge' cannot be less than 2, got ${r.maxAge}`);return r}function _h(n,i){return n.filter(e=>i.indexOf(e)<0)}function Ph(n){let{computedStates:i,currentStateIndex:e}=n;if(e>=i.length){let{state:a}=i[i.length-1];return a}let{state:t}=i[e];return t}function sr(n){return new Hi(n,+Date.now())}function L0(n,i){return Object.keys(i).reduce((e,t)=>{let a=Number(t);return e[a]=Lh(n,i[a],a),e},{})}function Lh(n,i,e){return G(b({},i),{action:n(i.action,e)})}function V0(n,i){return i.map((e,t)=>({state:Vh(n,e.state,t),error:e.error}))}function Vh(n,i,e){return n(i,e)}function Bh(n){return n.predicate||n.actionsSafelist||n.actionsBlocklist}function B0(n,i,e,t){let a=[],r={},o=[];return n.stagedActionIds.forEach((l,s)=>{let u=n.actionsById[l];u&&(s&&mc(n.computedStates[s],u,i,e,t)||(r[l]=u,a.push(l),o.push(n.computedStates[s])))}),G(b({},n),{stagedActionIds:a,actionsById:r,computedStates:o})}function mc(n,i,e,t,a){let r=e&&!e(n,i.action),o=t&&!i.action.type.match(t.map(s=>Ch(s)).join("|")),l=a&&i.action.type.match(a.map(s=>Ch(s)).join("|"));return r||o||l}function Ch(n){return n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function jh(n){return{ngZone:n?d(P):null,connectInZone:n}}var rs=(()=>{class n extends nn{static{this.\u0275fac=(()=>{let e;return function(a){return(e||(e=ye(n)))(a||n)}})()}static{this.\u0275prov=U({token:n,factory:n.\u0275fac})}}return n})(),ts={START:"START",DISPATCH:"DISPATCH",STOP:"STOP",ACTION:"ACTION"},cc=new y("@ngrx/store-devtools Redux Devtools Extension");function j0(n){return typeof n=="object"&&n!==null&&!("type"in n)&&typeof n.selected=="number"&&Array.isArray(n.args)}function wh(n){let i=String(n),e=i.match(/^[^(]*\(([^)]*)\)/);if(!e){let t=i.match(/^\s*([^=\s(]+)\s*=>/);return t?[t[1]]:[]}return e[1].split(",").map(t=>t.replace(/^\s*\.{3}/,"").split("=")[0].trim()).filter(t=>t!=="")}function z0(n){return Array.isArray(n)?n.map(i=>({name:i.type||i.name||"anonymous",func:i,args:wh(i)})):Object.keys(n).map(i=>({name:i,func:n[i],args:wh(n[i])}))}var Dh=n=>n===""?void 0:(0,eval)(`(${n})`),zh=(()=>{class n{constructor(e,t,a){this.config=t,this.dispatcher=a,this.zoneConfig=jh(this.config.connectInZone),this.devtoolsExtension=e,this.actionCreatorDescriptors=t.actionCreators?z0(t.actionCreators):void 0,this.createActionStreams()}notify(e,t){if(this.devtoolsExtension)if(e.type===lr){if(t.isLocked||t.isPaused)return;let a=Ph(t);if(Bh(this.config)&&mc(a,e,this.config.predicate,this.config.actionsSafelist,this.config.actionsBlocklist))return;let r=this.config.stateSanitizer?Vh(this.config.stateSanitizer,a,t.currentStateIndex):a,o=this.config.actionSanitizer?Lh(this.config.actionSanitizer,e,t.nextActionId):e;this.sendToReduxDevtools(()=>this.extensionConnection.send(o,r))}else{let a=G(b({},t),{stagedActionIds:t.stagedActionIds,actionsById:this.config.actionSanitizer?L0(this.config.actionSanitizer,t.actionsById):t.actionsById,computedStates:this.config.stateSanitizer?V0(this.config.stateSanitizer,t.computedStates):t.computedStates});this.sendToReduxDevtools(()=>this.devtoolsExtension.send(null,a,this.getExtensionConfig(this.config)))}}createChangesObservable(){return this.devtoolsExtension?new Oe(e=>{let t=this.zoneConfig.connectInZone?this.zoneConfig.ngZone.runOutsideAngular(()=>this.devtoolsExtension.connect(this.getExtensionConfig(this.config))):this.devtoolsExtension.connect(this.getExtensionConfig(this.config));return this.extensionConnection=t,t.init(),t.subscribe(a=>e.next(a)),t.unsubscribe}):Ze}createActionStreams(){let e=this.createChangesObservable().pipe(qu()),t=e.pipe(be(u=>u.type===ts.START)),a=e.pipe(be(u=>u.type===ts.STOP)),r=e.pipe(be(u=>u.type===ts.DISPATCH),Y(u=>this.unwrapAction(u.payload)),qn(u=>u.type===uc?this.dispatcher.pipe(be(c=>c.type===Jo),ju(1e3),Kt(1e3),Y(()=>u),dn(()=>V(u)),yt(1)):V(u))),l=e.pipe(be(u=>u.type===ts.ACTION),Y(u=>this.unwrapAction(u.payload))).pipe(ce(a)),s=r.pipe(ce(a));this.start$=t.pipe(ce(a)),this.actions$=this.start$.pipe(Qe(()=>l)),this.liftedActions$=this.start$.pipe(Qe(()=>s))}unwrapAction(e){if(typeof e=="string")return(0,eval)(`(${e})`);if(this.actionCreatorDescriptors&&j0(e)){let t=this.actionCreatorDescriptors[e.selected];if(t){let a=e.args.map(Dh);if(e.rest){let r=Dh(e.rest);Array.isArray(r)&&a.push(...r)}return t.func(...a)}}return e}getExtensionConfig(e){let t={name:e.name,features:e.features,serialize:e.serialize,autoPause:e.autoPause??!1,trace:e.trace??!1,traceLimit:e.traceLimit??75};return e.maxAge!==!1&&(t.maxAge=e.maxAge),this.actionCreatorDescriptors&&(t.actionCreators=this.actionCreatorDescriptors),t}sendToReduxDevtools(e){try{e()}catch(t){console.warn("@ngrx/store-devtools: something went wrong inside the redux devtools",t)}}static{this.\u0275fac=function(t){return new(t||n)(A(cc),A(as),A(rs))}}static{this.\u0275prov=U({token:n,factory:n.\u0275fac})}}return n})(),is={type:rr},U0="@ngrx/store-devtools/recompute",H0={type:U0};function Uh(n,i,e,t,a){if(t)return{state:e,error:"Interrupted by an error up the chain"};let r=e,o;try{r=n(e,i)}catch(l){o=l.toString(),a.handleError(l)}return{state:r,error:o}}function ns(n,i,e,t,a,r,o,l,s){if(i>=n.length&&n.length===r.length)return n;let u=n.slice(0,i),c=r.length-(s?1:0);for(let m=i;m<c;m++){let p=r[m],h=a[p].action,_=u[m-1],D=_?_.state:t,C=_?_.error:void 0,x=o.indexOf(p)>-1?_:Uh(e,h,D,C,l);u.push(x)}return s&&u.push(n[n.length-1]),u}function $0(n,i){return{monitorState:i(void 0,{}),nextActionId:1,actionsById:{0:sr(is)},stagedActionIds:[0],skippedActionIds:[],committedState:n,currentStateIndex:0,computedStates:[],isLocked:!1,isPaused:!1}}function G0(n,i,e,t,a={}){return r=>(o,l)=>{let{monitorState:s,actionsById:u,nextActionId:c,stagedActionIds:m,skippedActionIds:p,committedState:h,currentStateIndex:_,computedStates:D,isLocked:C,isPaused:w}=o||i;o||(u=Object.create(u));function x(I){let F=I,me=m.slice(1,F+1);for(let _e=0;_e<me.length;_e++)if(D[_e+1].error){F=_e,me=m.slice(1,F+1);break}else delete u[me[_e]];p=p.filter(_e=>me.indexOf(_e)===-1),m=[0,...m.slice(F+1)],h=D[F].state,D=D.slice(F),_=_>F?_-F:0}function S(){u={0:sr(is)},c=1,m=[0],p=[],h=D[_].state,_=0,D=[]}let k=0;switch(l.type){case Th:{C=l.status,k=1/0;break}case Oh:{w=l.status,w?(m=[...m,c],u[c]=new Hi({type:"@ngrx/devtools/pause"},+Date.now()),c++,k=m.length-1,D=D.concat(D[D.length-1]),_===m.length-2&&_++,k=1/0):S();break}case Eh:{u={0:sr(is)},c=1,m=[0],p=[],h=n,_=0,D=[];break}case Rh:{S();break}case Mh:{u={0:sr(is)},c=1,m=[0],p=[],_=0,D=[];break}case Ah:{let{id:I}=l;p.indexOf(I)===-1?p=[I,...p]:p=p.filter(me=>me!==I),k=m.indexOf(I);break}case O0:{let{start:I,end:F,active:me}=l,_e=[];for(let Ve=I;Ve<F;Ve++)_e.push(Ve);me?p=_h(p,_e):p=[...p,..._e],k=m.indexOf(I);break}case Ih:{_=l.index,k=1/0;break}case Nh:{let I=m.indexOf(l.actionId);I!==-1&&(_=I),k=1/0;break}case kh:{m=_h(m,p),p=[],_=Math.min(_,m.length-1);break}case lr:{if(C)return o||i;if(w||o&&mc(o.computedStates[_],l,a.predicate,a.actionsSafelist,a.actionsBlocklist)){let F=D[D.length-1];D=[...D.slice(0,-1),Uh(r,l.action,F.state,F.error,e)],k=1/0;break}a.maxAge&&m.length===a.maxAge&&x(1),_===m.length-1&&_++;let I=c++;u[I]=l,m=[...m,I],k=m.length-1;break}case uc:{({monitorState:s,actionsById:u,nextActionId:c,stagedActionIds:m,skippedActionIds:p,committedState:h,currentStateIndex:_,computedStates:D,isLocked:C,isPaused:w}=l.nextLiftedState);break}case rr:{k=0,a.maxAge&&m.length>a.maxAge&&(D=ns(D,k,r,h,u,m,p,e,w),x(m.length-a.maxAge),k=1/0);break}case Jo:{if(D.filter(F=>F.error).length>0)k=0,a.maxAge&&m.length>a.maxAge&&(D=ns(D,k,r,h,u,m,p,e,w),x(m.length-a.maxAge),k=1/0);else{if(!w&&!C){_===m.length-1&&_++;let F=c++;u[F]=new Hi(l,+Date.now()),m=[...m,F],k=m.length-1,D=ns(D,k,r,h,u,m,p,e,w)}D=D.map(F=>G(b({},F),{state:r(F.state,H0)})),_=m.length-1,a.maxAge&&m.length>a.maxAge&&x(m.length-a.maxAge),k=1/0}break}default:{k=1/0;break}}return D=ns(D,k,r,h,u,m,p,e,w),s=t(s,l),{monitorState:s,actionsById:u,nextActionId:c,stagedActionIds:m,skippedActionIds:p,committedState:h,currentStateIndex:_,computedStates:D,isLocked:C,isPaused:w}}}var Sh=(()=>{class n{constructor(e,t,a,r,o,l,s,u){let c=$0(s,u.monitor),m=G0(s,c,l,u.monitor,u),p=at(at(t.asObservable().pipe(wn(1)),r.actions$).pipe(Y(sr)),e,r.liftedActions$).pipe(Gr($r)),h=a.pipe(Y(m)),_=jh(u.connectInZone),D=new Lu(1);this.liftedStateSubscription=p.pipe(Kn(h),xh(_),Xr(({state:x},[S,k])=>{let I=k(x,S);return S.type!==lr&&Bh(u)&&(I=B0(I,u.predicate,u.actionsSafelist,u.actionsBlocklist)),r.notify(S,I),{state:I,action:S}},{state:c,action:null})).subscribe(({state:x,action:S})=>{if(D.next(x),S.type===lr){let k=S.action;o.next(k)}}),this.extensionStartSubscription=r.start$.pipe(xh(_)).subscribe(()=>{this.refresh()});let C=D.asObservable(),w=C.pipe(Y(Ph));Object.defineProperty(w,"state",{value:Ko(w,{manualCleanup:!0,requireSync:!0})}),this.dispatcher=e,this.liftedState=C,this.state=w}ngOnDestroy(){this.liftedStateSubscription.unsubscribe(),this.extensionStartSubscription.unsubscribe()}dispatch(e){this.dispatcher.next(e)}next(e){this.dispatcher.next(e)}error(e){}complete(){}performAction(e){this.dispatch(new Hi(e,+Date.now()))}refresh(){this.dispatch(new Jd)}reset(){this.dispatch(new ec(+Date.now()))}rollback(){this.dispatch(new tc(+Date.now()))}commit(){this.dispatch(new nc(+Date.now()))}sweep(){this.dispatch(new ic)}toggleAction(e){this.dispatch(new ac(e))}jumpToAction(e){this.dispatch(new oc(e))}jumpToState(e){this.dispatch(new rc(e))}importState(e){this.dispatch(new sc(e))}lockChanges(e){this.dispatch(new lc(e))}pauseRecording(e){this.dispatch(new dc(e))}static{this.\u0275fac=function(t){return new(t||n)(A(rs),A(nn),A(ui),A(zh),A(mi),A(cn),A(or),A(as))}}static{this.\u0275prov=U({token:n,factory:n.\u0275fac})}}return n})();function xh({ngZone:n,connectInZone:i}){return e=>i?new Oe(t=>e.subscribe({next:a=>n.run(()=>t.next(a)),error:a=>n.run(()=>t.error(a)),complete:()=>n.run(()=>t.complete())})):e}var W0=new y("@ngrx/store-devtools Is Devtools Extension or Monitor Present");function Y0(n,i){return!!n||i.monitor!==Fh}function q0(){let n="__REDUX_DEVTOOLS_EXTENSION__";return typeof window=="object"&&typeof window[n]<"u"?window[n]:null}function K0(n){return n.state}function Hh(n={}){return it([zh,rs,Sh,{provide:vh,useValue:n},{provide:W0,deps:[cc,as],useFactory:Y0},{provide:cc,useFactory:q0},{provide:as,deps:[vh],useFactory:P0},{provide:Ui,deps:[Sh],useFactory:K0},{provide:zi,useExisting:rs}])}var X0={dispatch:!0,functional:!1,useEffectsErrorHandler:!0},os="__@ngrx/effects_create__";function $h(n,i={}){let e=i.functional?n:n(),t=b(b({},X0),i);return Object.defineProperty(e,os,{value:t}),e}function Z0(n){return Object.getOwnPropertyNames(n).filter(t=>n[t]&&n[t].hasOwnProperty(os)?n[t][os].hasOwnProperty("dispatch"):!1).map(t=>{let a=n[t][os];return b({propertyName:t},a)})}function Q0(n){return Z0(n)}function Gh(n){return Object.getPrototypeOf(n)}function J0(n){return!!n.constructor&&n.constructor.name!=="Object"&&n.constructor.name!=="Function"}function Wh(n){return typeof n=="function"}function eC(n){return n.filter(Wh)}function tC(n,i,e){let t=Gh(n),r=!!t&&t.constructor.name!=="Object"?t.constructor.name:null,o=Q0(n).map(({propertyName:l,dispatch:s,useEffectsErrorHandler:u})=>{let c=typeof n[l]=="function"?n[l]():n[l],m=u?e(c,i):c;return s===!1?m.pipe(Hu()):m.pipe(Wu()).pipe(Y(h=>({effect:n[l],notification:h,propertyName:l,sourceName:r,sourceInstance:n})))});return at(...o)}var nC=10;function Yh(n,i,e=nC){return n.pipe(dn(t=>(i&&i.handleError(t),e<=1?n:Yh(n,i,e-1))))}var qh=(()=>{class n extends Oe{constructor(e){super(),e&&(this.source=e)}lift(e){let t=new n;return t.source=this,t.operator=e,t}static{this.\u0275fac=function(t){return new(t||n)(A(mi))}}static{this.\u0275prov=U({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();function Kh(...n){return be(i=>n.some(e=>typeof e=="string"?e===i.type:e.type===i.type))}var iC=new y("@ngrx/effects Effects Error Handler",{providedIn:"root",factory:()=>Yh}),aC="@ngrx/effects/init",rC=Tt(aC);function oC(n,i){if(n.notification.kind==="N"){let e=n.notification.value;!sC(e)&&i.handleError(new Error(`Effect ${lC(n)} dispatched an invalid action: ${dC(e)}`))}}function sC(n){return typeof n!="function"&&n&&n.type&&typeof n.type=="string"}function lC({propertyName:n,sourceInstance:i,sourceName:e}){let t=typeof i[n]=="function";return!!e?`"${e}.${String(n)}${t?"()":""}"`:`"${String(n)}()"`}function dC(n){try{return JSON.stringify(n)}catch{return n}}var cC="ngrxOnIdentifyEffects";function uC(n){return pc(n,cC)}var mC="ngrxOnRunEffects";function pC(n){return pc(n,mC)}var hC="ngrxOnInitEffects";function fC(n){return pc(n,hC)}function pc(n,i){return n&&i in n&&typeof n[i]=="function"}var Xh=(()=>{class n extends N{constructor(e,t){super(),this.errorHandler=e,this.effectsErrorHandler=t}addEffects(e){this.next(e)}toActions(){return this.pipe(El(e=>J0(e)?Gh(e):e),Pt(e=>e.pipe(El(gC))),Pt(e=>{let t=e.pipe(qr(r=>bC(this.errorHandler,this.effectsErrorHandler)(r)),Y(r=>(oC(r,this.errorHandler),r.notification)),be(r=>r.kind==="N"&&r.value!=null),Gu()),a=e.pipe(yt(1),be(fC),Y(r=>r.ngrxOnInitEffects()));return at(t,a)}))}static{this.\u0275fac=function(t){return new(t||n)(A(cn),A(iC))}}static{this.\u0275prov=U({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();function gC(n){return uC(n)?n.ngrxOnIdentifyEffects():""}function bC(n,i){return e=>{let t=tC(e,n,i);return pC(e)?e.ngrxOnRunEffects(t):t}}var yC=(()=>{class n{get isStarted(){return!!this.effectsSubscription}constructor(e,t){this.effectSources=e,this.store=t,this.effectsSubscription=null}start(){this.effectsSubscription||(this.effectsSubscription=this.effectSources.toActions().subscribe(this.store))}ngOnDestroy(){this.effectsSubscription&&(this.effectsSubscription.unsubscribe(),this.effectsSubscription=null)}static{this.\u0275fac=function(t){return new(t||n)(A(Xh),A(zt))}}static{this.\u0275prov=U({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();function Zh(...n){let i=n.flat(),e=eC(i);return it([e,Xn(()=>{d(ar),d(Zo,{optional:!0});let t=d(yC),a=d(Xh),r=!t.isStarted;r&&t.start();for(let o of i){let l=Wh(o)?d(o):o;a.addEffects(l)}r&&d(zt).dispatch(rC())})])}var tf="@ngrx/router-store/request",Pk=Tt(tf,fn()),hc="@ngrx/router-store/navigation",Lk=Tt(hc,fn()),fc="@ngrx/router-store/cancel",Vk=Tt(fc,fn()),gc="@ngrx/router-store/error",Bk=Tt(gc,fn()),nf="@ngrx/router-store/navigated",jk=Tt(nf,fn());function af(n,i){let e=i;switch(e.type){case hc:case gc:case fc:return{state:e.payload.routerState,navigationId:e.payload.event.id};default:return n}}var ss=class{serialize(i){return{root:this.serializeRoute(i.root),url:i.url}}serializeRoute(i){let e=i.children.map(t=>this.serializeRoute(t));return{params:i.params,data:i.data,url:i.url,outlet:i.outlet,title:i.title,routeConfig:i.routeConfig?{path:i.routeConfig.path,pathMatch:i.routeConfig.pathMatch,redirectTo:i.routeConfig.redirectTo,outlet:i.routeConfig.outlet,title:typeof i.routeConfig.title=="string"?i.routeConfig.title:void 0}:null,queryParams:i.queryParams,fragment:i.fragment,firstChild:e[0],children:e}}},bc=(function(n){return n[n.PreActivation=1]="PreActivation",n[n.PostActivation=2]="PostActivation",n})(bc||{}),vC="router",Qh=new y("@ngrx/router-store Internal Configuration"),rf=new y("@ngrx/router-store Configuration"),yc=(function(n){return n[n.Full=0]="Full",n[n.Minimal=1]="Minimal",n})(yc||{});function _C(n){return b({stateKey:vC,serializer:ss,navigationActionTiming:bc.PreActivation},n)}var ls=class{serialize(i){return{root:this.serializeRoute(i.root),url:i.url}}serializeRoute(i){let e=i.children.map(t=>this.serializeRoute(t));return{params:i.params,paramMap:i.paramMap,data:i.data,url:i.url,outlet:i.outlet,title:i.title,routeConfig:i.routeConfig?{component:i.routeConfig.component,path:i.routeConfig.path,pathMatch:i.routeConfig.pathMatch,redirectTo:i.routeConfig.redirectTo,outlet:i.routeConfig.outlet,title:i.routeConfig.title}:null,queryParams:i.queryParams,queryParamMap:i.queryParamMap,fragment:i.fragment,component:i.routeConfig?i.routeConfig.component:void 0,root:void 0,parent:void 0,firstChild:e[0],pathFromRoot:void 0,children:e}}},ds=class{},an=(function(n){return n[n.NONE=1]="NONE",n[n.ROUTER=2]="ROUTER",n[n.STORE=3]="STORE",n})(an||{}),Jh=(()=>{class n{constructor(e,t,a,r,o,l){this.store=e,this.router=t,this.serializer=a,this.errorHandler=r,this.config=o,this.activeRuntimeChecks=l,this.lastEvent=null,this.routerState=null,this.trigger=an.NONE,this.stateKey=this.config.stateKey,!Kd()&&ni()&&(l?.strictActionSerializability||l?.strictStateSerializability)&&this.serializer instanceof ls&&console.warn("@ngrx/router-store: The serializability runtime checks cannot be enabled with the FullRouterStateSerializer. The FullRouterStateSerializer has an unserializable router state and actions that are not serializable. To use the serializability runtime checks either use the MinimalRouterStateSerializer or implement a custom router state serializer."),this.setUpStoreStateListener(),this.setUpRouterEventsListener()}setUpStoreStateListener(){this.store.pipe(Yd(this.stateKey),Kn(this.store)).subscribe(([e,t])=>{this.navigateIfNeeded(e,t)})}navigateIfNeeded(e,t){if(!e||!e.state||this.trigger===an.ROUTER||this.lastEvent instanceof Jt)return;let a=e.state.url;CC(this.router.url,a)||(this.storeState=t,this.trigger=an.STORE,this.router.navigateByUrl(a).catch(r=>{this.errorHandler.handleError(r)}))}setUpRouterEventsListener(){let e=this.config.navigationActionTiming===bc.PostActivation,t;this.router.events.pipe(Kn(this.store)).subscribe(([a,r])=>{this.lastEvent=a,a instanceof Jt?(this.routerState=this.serializer.serialize(this.router.routerState.snapshot),this.trigger!==an.STORE&&(this.storeState=r,this.dispatchRouterRequest(a))):a instanceof Nn?(t=a,!e&&this.trigger!==an.STORE&&this.dispatchRouterNavigation(a)):a instanceof Ct?(this.dispatchRouterCancel(a),this.reset()):a instanceof en?(this.dispatchRouterError(a),this.reset()):a instanceof jt&&(this.trigger!==an.STORE&&(e&&this.dispatchRouterNavigation(t),this.dispatchRouterNavigated(a)),this.reset())})}dispatchRouterRequest(e){this.dispatchRouterAction(tf,{event:e})}dispatchRouterNavigation(e){let t=this.serializer.serialize(e.state);this.dispatchRouterAction(hc,{routerState:t,event:new Nn(e.id,e.url,e.urlAfterRedirects,t)})}dispatchRouterCancel(e){this.dispatchRouterAction(fc,{storeState:this.storeState,event:e})}dispatchRouterError(e){this.dispatchRouterAction(gc,{storeState:this.storeState,event:new en(e.id,e.url,`${e}`)})}dispatchRouterNavigated(e){let t=this.serializer.serialize(this.router.routerState.snapshot);this.dispatchRouterAction(nf,{event:e,routerState:t})}dispatchRouterAction(e,t){this.trigger=an.ROUTER;try{this.store.dispatch({type:e,payload:G(b({routerState:this.routerState},t),{event:this.config.routerState===yc.Full?t.event:{id:t.event.id,url:t.event.url,urlAfterRedirects:t.event.urlAfterRedirects}})})}finally{this.trigger=an.NONE}}reset(){this.trigger=an.NONE,this.storeState=null,this.routerState=null}static{this.\u0275fac=function(t){return new(t||n)(A(zt),A(tn),A(ds),A(cn),A(rf),A(ci))}}static{this.\u0275prov=U({token:n,factory:n.\u0275fac})}}return n})();function CC(n,i){return ef(n)===ef(i)}function ef(n){return n?.length>0&&n[n.length-1]==="/"?n.substring(0,n.length-1):n}function of(n={}){return it([{provide:Qh,useValue:n},{provide:rf,useFactory:_C,deps:[Qh]},{provide:ds,useClass:n.serializer?n.serializer:n.routerState===yc.Full?ls:ss},Xn(()=>d(Jh)),Jh])}var pf=(()=>{class n{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,t){this._renderer=e,this._elementRef=t}setProperty(e,t){this._renderer.setProperty(this._elementRef.nativeElement,e,t)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(t){return new(t||n)(pe(Ie),pe(j))};static \u0275dir=R({type:n})}return n})(),DC=(()=>{class n extends pf{static \u0275fac=(()=>{let e;return function(a){return(e||(e=ye(n)))(a||n)}})();static \u0275dir=R({type:n,features:[ie]})}return n})(),hr=new y("");var SC={provide:hr,useExisting:Mt(()=>on),multi:!0};function xC(){let n=It()?It().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}var EC=new y(""),on=(()=>{class n extends pf{_compositionMode;_composing=!1;constructor(e,t,a){super(e,t),this._compositionMode=a,this._compositionMode==null&&(this._compositionMode=!xC())}writeValue(e){let t=e??"";this.setProperty("value",t)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(t){return new(t||n)(pe(Ie),pe(j),pe(EC,8))};static \u0275dir=R({type:n,selectors:[["input","formControlName","",3,"type","checkbox",3,"ngNoCva",""],["textarea","formControlName","",3,"ngNoCva",""],["input","formControl","",3,"type","checkbox",3,"ngNoCva",""],["textarea","formControl","",3,"ngNoCva",""],["input","ngModel","",3,"type","checkbox",3,"ngNoCva",""],["textarea","ngModel","",3,"ngNoCva",""],["","ngDefaultControl",""]],hostBindings:function(t,a){t&1&&ue("input",function(o){return a._handleInput(o.target.value)})("blur",function(){return a.onTouched()})("compositionstart",function(){return a._compositionStart()})("compositionend",function(o){return a._compositionEnd(o.target.value)})},standalone:!1,features:[ve([SC]),ie]})}return n})();function Dc(n){return n==null||Sc(n)===0}function Sc(n){return n==null?null:Array.isArray(n)||typeof n=="string"?n.length:n instanceof Set?n.size:null}var hi=new y(""),_s=new y(""),MC=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,xe=class{static min(i){return RC(i)}static max(i){return kC(i)}static required(i){return hf(i)}static requiredTrue(i){return AC(i)}static email(i){return IC(i)}static minLength(i){return NC(i)}static maxLength(i){return TC(i)}static pattern(i){return OC(i)}static nullValidator(i){return us()}static compose(i){return _f(i)}static composeAsync(i){return Cf(i)}};function RC(n){return i=>{if(i.value==null||n==null)return null;let e=parseFloat(i.value);return!isNaN(e)&&e<n?{min:{min:n,actual:i.value}}:null}}function kC(n){return i=>{if(i.value==null||n==null)return null;let e=parseFloat(i.value);return!isNaN(e)&&e>n?{max:{max:n,actual:i.value}}:null}}function hf(n){return Dc(n.value)?{required:!0}:null}function AC(n){return n.value===!0?null:{required:!0}}function IC(n){return Dc(n.value)||MC.test(n.value)?null:{email:!0}}function NC(n){return i=>{let e=i.value?.length??Sc(i.value);return e===null||e===0?null:e<n?{minlength:{requiredLength:n,actualLength:e}}:null}}function TC(n){return i=>{let e=i.value?.length??Sc(i.value);return e!==null&&e>n?{maxlength:{requiredLength:n,actualLength:e}}:null}}function OC(n){if(!n)return us;let i,e;return typeof n=="string"?(e="",n.charAt(0)!=="^"&&(e+="^"),e+=n,n.charAt(n.length-1)!=="$"&&(e+="$"),i=new RegExp(e)):(e=n.toString(),i=n),t=>{if(Dc(t.value))return null;let a=t.value;return i.test(a)?null:{pattern:{requiredPattern:e,actualValue:a}}}}function us(n){return null}function ff(n){return n!=null}function gf(n){return Jn(n)?bt(n):n}function bf(n){let i={};return n.forEach(e=>{i=e!=null?b(b({},i),e):i}),Object.keys(i).length===0?null:i}function yf(n,i){return i.map(e=>e(n))}function FC(n){return!n.validate}function vf(n){return n.map(i=>FC(i)?i:e=>i.validate(e))}function _f(n){if(!n)return null;let i=n.filter(ff);return i.length==0?null:function(e){return bf(yf(e,i))}}function xc(n){return n!=null?_f(vf(n)):null}function Cf(n){if(!n)return null;let i=n.filter(ff);return i.length==0?null:function(e){let t=yf(e,i).map(gf);return zu(t).pipe(Y(bf))}}function Ec(n){return n!=null?Cf(vf(n)):null}function sf(n,i){return n===null?[i]:Array.isArray(n)?[...n,i]:[n,i]}function wf(n){return n._rawValidators}function Df(n){return n._rawAsyncValidators}function vc(n){return n?Array.isArray(n)?n:[n]:[]}function ms(n,i){return Array.isArray(n)?n.includes(i):n===i}function lf(n,i){let e=vc(i);return vc(n).forEach(a=>{ms(e,a)||e.push(a)}),e}function df(n,i){return vc(i).filter(e=>!ms(n,e))}var ps=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(i){this._rawValidators=i||[],this._composedValidatorFn=xc(this._rawValidators)}_setAsyncValidators(i){this._rawAsyncValidators=i||[],this._composedAsyncValidatorFn=Ec(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(i){this._onDestroyCallbacks.push(i)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(i=>i()),this._onDestroyCallbacks=[]}reset(i=void 0){this.control?.reset(i)}hasError(i,e){return this.control?this.control.hasError(i,e):!1}getError(i,e){return this.control?this.control.getError(i,e):null}},bn=class extends ps{name;get formDirective(){return null}get path(){return null}};var dr="VALID",cs="INVALID",$i="PENDING",cr="DISABLED",Tn=class{},hs=class extends Tn{value;source;constructor(i,e){super(),this.value=i,this.source=e}},mr=class extends Tn{pristine;source;constructor(i,e){super(),this.pristine=i,this.source=e}},pr=class extends Tn{touched;source;constructor(i,e){super(),this.touched=i,this.source=e}},Gi=class extends Tn{status;source;constructor(i,e){super(),this.status=i,this.source=e}},fs=class extends Tn{source;constructor(i){super(),this.source=i}},pi=class extends Tn{source;constructor(i){super(),this.source=i}};function Mc(n){return(Cs(n)?n.validators:n)||null}function PC(n){return Array.isArray(n)?xc(n):n||null}function Rc(n,i){return(Cs(i)?i.asyncValidators:n)||null}function LC(n){return Array.isArray(n)?Ec(n):n||null}function Cs(n){return n!=null&&!Array.isArray(n)&&typeof n=="object"}function Sf(n,i,e){let t=n.controls;if(!(i?Object.keys(t):t).length)throw new ne(1e3,"");if(!Ef(t,e))throw new ne(1001,"")}function xf(n,i,e){n._forEachChild((t,a)=>{if(e[a]===void 0)throw new ne(-1002,"")})}var Wi=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_hasRequired=Z(!1);_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(i,e){this._assignValidators(i),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(i){this._rawValidators=this._composedValidatorFn=i,this._updateHasRequiredValidator()}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(i){this._rawAsyncValidators=this._composedAsyncValidatorFn=i}get parent(){return this._parent}get status(){return ge(this.statusReactive)}set status(i){ge(()=>this.statusReactive.set(i))}_status=Ke(()=>this.statusReactive());statusReactive=Z(void 0);get valid(){return this.status===dr}get invalid(){return this.status===cs}get pending(){return this.status===$i}get disabled(){return this.status===cr}get enabled(){return this.status!==cr}errors;get pristine(){return ge(this.pristineReactive)}set pristine(i){ge(()=>this.pristineReactive.set(i))}_pristine=Ke(()=>this.pristineReactive());pristineReactive=Z(!0);get dirty(){return!this.pristine}get touched(){return ge(this.touchedReactive)}set touched(i){ge(()=>this.touchedReactive.set(i))}_touched=Ke(()=>this.touchedReactive());touchedReactive=Z(!1);get untouched(){return!this.touched}_events=new N;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(i){this._assignValidators(i)}setAsyncValidators(i){this._assignAsyncValidators(i)}addValidators(i){this.setValidators(lf(i,this._rawValidators))}addAsyncValidators(i){this.setAsyncValidators(lf(i,this._rawAsyncValidators))}removeValidators(i){this.setValidators(df(i,this._rawValidators))}removeAsyncValidators(i){this.setAsyncValidators(df(i,this._rawAsyncValidators))}hasValidator(i){return ms(this._rawValidators,i)}hasAsyncValidator(i){return ms(this._rawAsyncValidators,i)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(i={}){let e=this.touched===!1;this.touched=!0;let t=i.sourceControl??this;i.onlySelf||this._parent?.markAsTouched(G(b({},i),{sourceControl:t})),e&&i.emitEvent!==!1&&this._events.next(new pr(!0,t))}markAllAsDirty(i={}){this.markAsDirty({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(i))}markAllAsTouched(i={}){this.markAsTouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(i))}markAsUntouched(i={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let t=i.sourceControl??this;this._forEachChild(a=>{a.markAsUntouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:t})}),i.onlySelf||this._parent?._updateTouched(i,t),e&&i.emitEvent!==!1&&this._events.next(new pr(!1,t))}markAsDirty(i={}){let e=this.pristine===!0;this.pristine=!1;let t=i.sourceControl??this;i.onlySelf||this._parent?.markAsDirty(G(b({},i),{sourceControl:t})),e&&i.emitEvent!==!1&&this._events.next(new mr(!1,t))}markAsPristine(i={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let t=i.sourceControl??this;this._forEachChild(a=>{a.markAsPristine({onlySelf:!0,emitEvent:i.emitEvent})}),i.onlySelf||this._parent?._updatePristine(i,t),e&&i.emitEvent!==!1&&this._events.next(new mr(!0,t))}markAsPending(i={}){this.status=$i;let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new Gi(this.status,e)),this.statusChanges.emit(this.status)),i.onlySelf||this._parent?.markAsPending(G(b({},i),{sourceControl:e}))}disable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=cr,this.errors=null,this._forEachChild(a=>{a.disable(G(b({},i),{onlySelf:!0}))}),this._updateValue();let t=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new hs(this.value,t)),this._events.next(new Gi(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(G(b({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(a=>a(!0))}enable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=dr,this._forEachChild(t=>{t.enable(G(b({},i),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent}),this._updateAncestors(G(b({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(t=>t(!1))}_updateAncestors(i,e){i.onlySelf||(this._parent?.updateValueAndValidity(i),i.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(i){this._parent=i}getRawValue(){return this.value}updateValueAndValidity(i={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let t=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===dr||this.status===$i)&&this._runAsyncValidator(t,i.emitEvent)}let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new hs(this.value,e)),this._events.next(new Gi(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),i.onlySelf||this._parent?.updateValueAndValidity(G(b({},i),{sourceControl:e}))}_updateTreeValidity(i={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(i)),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?cr:dr}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(i,e){if(this.asyncValidator){this.status=$i,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:i!==!1};let t=gf(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(a=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(a,{emitEvent:e,shouldHaveEmitted:i})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let i=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,i}return!1}setErrors(i,e={}){this.errors=i,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(i){let e=i;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((t,a)=>t&&t._find(a),this)}getError(i,e){let t=e?this.get(e):this;return t?.errors?t.errors[i]:null}hasError(i,e){return!!this.getError(i,e)}get root(){let i=this;for(;i._parent;)i=i._parent;return i}_updateControlsErrors(i,e,t){this.status=this._calculateStatus(),i&&this.statusChanges.emit(this.status),(i||t)&&this._events.next(new Gi(this.status,e)),this._parent&&this._parent._updateControlsErrors(i,e,t)}_initObservables(){this.valueChanges=new T,this.statusChanges=new T}_calculateStatus(){return this._allControlsDisabled()?cr:this.errors?cs:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus($i)?$i:this._anyControlsHaveStatus(cs)?cs:dr}_anyControlsHaveStatus(i){return this._anyControls(e=>e.status===i)}_anyControlsDirty(){return this._anyControls(i=>i.dirty)}_anyControlsTouched(){return this._anyControls(i=>i.touched)}_updatePristine(i,e){let t=!this._anyControlsDirty(),a=this.pristine!==t;this.pristine=t,i.onlySelf||this._parent?._updatePristine(i,e),a&&this._events.next(new mr(this.pristine,e))}_updateTouched(i={},e){this.touched=this._anyControlsTouched(),this._events.next(new pr(this.touched,e)),i.onlySelf||this._parent?._updateTouched(i,e)}_onDisabledChange=[];_registerOnCollectionChange(i){this._onCollectionChange=i}_setUpdateStrategy(i){Cs(i)&&i.updateOn!=null&&(this._updateOn=i.updateOn)}_parentMarkedDirty(i){return!i&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(i){return null}_assignValidators(i){this._rawValidators=Array.isArray(i)?i.slice():i,this._composedValidatorFn=PC(this._rawValidators),this._updateHasRequiredValidator()}_assignAsyncValidators(i){this._rawAsyncValidators=Array.isArray(i)?i.slice():i,this._composedAsyncValidatorFn=LC(this._rawAsyncValidators)}_updateHasRequiredValidator(){ge(()=>this._hasRequired.set(this.hasValidator(xe.required)))}};function Ef(n,i){return Object.hasOwn(n,i)}function VC(n){return n.tagName==="INPUT"||n.tagName==="SELECT"||n.tagName==="TEXTAREA"}function BC(n,i,e,t){switch(e){case"name":n.setAttribute(i,e,t);break;case"disabled":case"readonly":case"required":t?n.setAttribute(i,e,""):n.removeAttribute(i,e);break;case"max":case"min":case"minLength":case"maxLength":t!==void 0?n.setAttribute(i,e,t.toString()):n.removeAttribute(i,e);break}}var _c=class{kind;context;control;message;constructor({kind:i,context:e,control:t}){this.kind=i,this.context=e,this.control=t}};var jC=(()=>{class n{_validator=us;_onChange;_enabled;ngOnChanges(e){if(this.inputName in e){let t=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(t),this._validator=this._enabled?this.createValidator(t):us,this._onChange?.()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n,features:[Me]})}return n})();var zC={provide:hi,useExisting:Mt(()=>Mf),multi:!0};var Mf=(()=>{class n extends jC{required;inputName="required";normalizeInput=K;createValidator=e=>hf;enabled(e){return e}static \u0275fac=(()=>{let e;return function(a){return(e||(e=ye(n)))(a||n)}})();static \u0275dir=R({type:n,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(t,a){t&2&&Se("required",a._enabled?"":null)},inputs:{required:"required"},standalone:!1,features:[ve([zC]),ie]})}return n})();var UC=new y(""),fr=new y("",{factory:()=>ws}),ws="always";function HC(n,i){return[...i.path,n]}function Rf(n,i,e=ws){kc(n,i),i.valueAccessor.writeValue(n.value),(n.disabled||e==="always")&&i.valueAccessor.setDisabledState?.(n.disabled),GC(n,i),YC(n,i),WC(n,i),$C(n,i)}function gs(n,i,e=!0){let t=()=>{};i?.valueAccessor?.registerOnChange(t),i?.valueAccessor?.registerOnTouched(t),ys(n,i),n&&(i._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function bs(n,i){n.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(i)})}function $C(n,i){if(i.valueAccessor.setDisabledState){let e=t=>{i.valueAccessor.setDisabledState(t)};n.registerOnDisabledChange(e),i._registerOnDestroy(()=>{n._unregisterOnDisabledChange(e)})}}function kc(n,i){let e=wf(n);i.validator!==null?n.setValidators(sf(e,i.validator)):typeof e=="function"&&n.setValidators([e]);let t=Df(n);i.asyncValidator!==null?n.setAsyncValidators(sf(t,i.asyncValidator)):typeof t=="function"&&n.setAsyncValidators([t]);let a=()=>n.updateValueAndValidity();bs(i._rawValidators,a),bs(i._rawAsyncValidators,a)}function ys(n,i){let e=!1;if(n!==null){if(i.validator!==null){let a=wf(n);if(Array.isArray(a)&&a.length>0){let r=a.filter(o=>o!==i.validator);r.length!==a.length&&(e=!0,n.setValidators(r))}}if(i.asyncValidator!==null){let a=Df(n);if(Array.isArray(a)&&a.length>0){let r=a.filter(o=>o!==i.asyncValidator);r.length!==a.length&&(e=!0,n.setAsyncValidators(r))}}}let t=()=>{};return bs(i._rawValidators,t),bs(i._rawAsyncValidators,t),e}function GC(n,i){i.valueAccessor.registerOnChange(e=>{n._pendingValue=e,n._pendingChange=!0,n._pendingDirty=!0,n.updateOn==="change"&&kf(n,i)})}function WC(n,i){i.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,n.updateOn==="blur"&&n._pendingChange&&kf(n,i),n.updateOn!=="submit"&&n.markAsTouched()})}function kf(n,i){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),i.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function YC(n,i){let e=(t,a)=>{i.valueAccessor.writeValue(t),a&&i.viewToModelUpdate(t)};n.registerOnChange(e),i._registerOnDestroy(()=>{n._unregisterOnChange(e)})}function Af(n,i){n==null,kc(n,i)}function qC(n,i){return ys(n,i)}function If(n,i){if(!Object.hasOwn(n,"model"))return!1;let e=n.model;return e.isFirstChange()?!0:!Object.is(i,e.currentValue)}function KC(n){return Object.getPrototypeOf(n.constructor)===DC}function Nf(n,i){n._syncPendingControls(),i.forEach(e=>{let t=e.control;t.updateOn==="submit"&&t._pendingChange&&(e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1)})}function XC(n,i){if(!i)return null;Array.isArray(i);let e,t,a;return i.forEach(r=>{r.constructor===on?e=r:KC(r)?t=r:a=r}),a||t||e||null}function ZC(n,i){let e=n.indexOf(i);e>-1&&n.splice(e,1)}var Tf={provide:UC,useFactory:()=>{let n=d(Ut,{self:!0});return{setParseErrors:i=>{n.setParseErrorSource(i)},set onReset(i){n.onReset=i}}}},Ut=class extends ps{_parent=null;name=null;valueAccessor=null;isCustomControlBased=!1;userOnReset;resetSubscription;set onReset(i){this.userOnReset=i,this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.control&&(this.resetSubscription=this.control.events.subscribe(e=>{e instanceof pi&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription?.add(this.resetSubscription))}isNativeFormElement=!1;rawValueAccessors;_selectedValueAccessor=null;get selectedValueAccessor(){return this._selectedValueAccessor??=XC(this,this.rawValueAccessors)}parseErrorsValidator=null;renderer;injector;requiredValidatorViaDi;subscription;customControlBindings=null;constructor(i,e,t){super(),this.injector=i,this.renderer=e,this.rawValueAccessors=t,this.injector?.get(Rt)?.onDestroy(()=>{this.removeParseErrorsValidator(this.control),this.subscription?.unsubscribe()})}setupCustomControl(){this.subscription?.unsubscribe();let i=this.injector?.get(Ae);if(!this.control||!i)return;let e=i.markForCheck.bind(i);this.subscription=new Ee,this.subscription.add(this.control.valueChanges.subscribe(e)),this.subscription.add(this.control.statusChanges.subscribe(e)),this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.userOnReset&&(this.resetSubscription=this.control.events.subscribe(t=>{t instanceof pi&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription.add(this.resetSubscription)),this.parseErrorsValidator&&this.control.addValidators(this.parseErrorsValidator)}ngControlCreate(i){!i.nativeElement.hasAttribute?.("ngNoCva")&&(this.rawValueAccessors&&this.rawValueAccessors.length>0||this.valueAccessor!==null)||!i.customControl||(this.isCustomControlBased=!0,i.listenToCustomControlModel(a=>{this.control?.markAsDirty(),this.control?.setValue(a,{emitModelToViewChange:!1}),this.viewToModelUpdate(a)}),i.listenToCustomControlOutput("touch",()=>{this.control?.markAsTouched()}),this.customControlBindings={},this.isNativeFormElement=VC(i.nativeElement),this.requiredValidatorViaDi=this._rawValidators.find(a=>a instanceof Mf))}ngControlUpdate(i,e){if(!this.isCustomControlBased)return;let t=this.control,a=this.customControlBindings;Object.is(a.value,t.value)||(a.value=t.value,i.setCustomControlModelInput(t.value)),this.bindControlProperty(i,a,"touched",t.touched),this.bindControlProperty(i,a,"dirty",t.dirty),this.bindControlProperty(i,a,"valid",t.valid),this.bindControlProperty(i,a,"invalid",t.invalid),this.bindControlProperty(i,a,"pending",t.pending),this.bindControlProperty(i,a,"disabled",t.disabled),this.shouldBindRequired&&this.bindControlProperty(i,a,"required",this.isRequired);let r=t.errors;if(a.errors!==r){a.errors=r;let o=this._convertErrors(r);i.setInputOnDirectives("errors",o)}}get isRequired(){return(this.requiredValidatorViaDi?._enabled||this.control?._hasRequired())??!1}get shouldBindRequired(){return!0}bindControlProperty(i,e,t,a){if(e[t]===a)return;e[t]=a;let r=i.setInputOnDirectives(t,a);this.isNativeFormElement&&!r&&(t==="disabled"||t==="required")&&this.renderer&&BC(this.renderer,i.nativeElement,t,a)}_convertErrors(i){if(i===null)return[];let e=this.control;return Object.entries(i).map(([t,a])=>new _c({context:a,kind:t,control:e}))}setParseErrorSource(i){if(i===void 0)return;let e=null,t=Ke(()=>{let a=i();return a.length===0?null:a.reduce((r,o)=>(r[o.kind]=o,r),{})});this.parseErrorsValidator=(()=>e).bind(this),vt(()=>{e=t(),this.control?.updateValueAndValidity({emitEvent:!1})},{injector:this.injector})}removeParseErrorsValidator(i){this.parseErrorsValidator&&(i?.removeValidators(this.parseErrorsValidator),i?.updateValueAndValidity({emitEvent:!1}))}},vs=class{_cd;constructor(i){this._cd=i}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var On=(()=>{class n extends vs{constructor(e){super(e)}static \u0275fac=function(t){return new(t||n)(pe(Ut,2))};static \u0275dir=R({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(t,a){t&2&&ee("ng-untouched",a.isUntouched)("ng-touched",a.isTouched)("ng-pristine",a.isPristine)("ng-dirty",a.isDirty)("ng-valid",a.isValid)("ng-invalid",a.isInvalid)("ng-pending",a.isPending)},standalone:!1,features:[ie]})}return n})(),Yi=(()=>{class n extends vs{constructor(e){super(e)}static \u0275fac=function(t){return new(t||n)(pe(bn,10))};static \u0275dir=R({type:n,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(t,a){t&2&&ee("ng-untouched",a.isUntouched)("ng-touched",a.isTouched)("ng-pristine",a.isPristine)("ng-dirty",a.isDirty)("ng-valid",a.isValid)("ng-invalid",a.isInvalid)("ng-pending",a.isPending)("ng-submitted",a.isSubmitted)},standalone:!1,features:[ie]})}return n})(),rn=class extends Wi{constructor(i,e,t){super(Mc(e),Rc(t,e)),this.controls=i,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(i,e){let t=this._find(i);return t||(this.controls[i]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(i,e,t={}){this.registerControl(i,e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}removeControl(i,e={}){let t=this._find(i);t&&t._registerOnCollectionChange(()=>{}),delete this.controls[i],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(i,e,t={}){let a=this._find(i);a&&a._registerOnCollectionChange(()=>{}),delete this.controls[i],e&&this.registerControl(i,e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}contains(i){return this._find(i)?.enabled===!0}setValue(i,e={}){ge(()=>{xf(this,!0,i),Object.keys(i).forEach(t=>{Sf(this,!0,t),this.controls[t].setValue(i[t],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)})}patchValue(i,e={}){i!=null&&(Object.keys(i).forEach(t=>{let a=this._find(t);a&&a.patchValue(i[t],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(i={},e={}){this._forEachChild((t,a)=>{t.reset(i?i[a]:null,G(b({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new pi(this))}getRawValue(){return this._reduceChildren({},(i,e,t)=>(i[t]=e.getRawValue(),i))}_syncPendingControls(){let i=this._reduceChildren(!1,(e,t)=>t._syncPendingControls()?!0:e);return i&&this.updateValueAndValidity({onlySelf:!0}),i}_forEachChild(i){Object.keys(this.controls).forEach(e=>{let t=this.controls[e];t&&i(t,e)})}_setUpControls(){this._forEachChild(i=>{i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(i){for(let[e,t]of Object.entries(this.controls))if(this.contains(e)&&i(t))return!0;return!1}_reduceValue(){let i={};return this._reduceChildren(i,(e,t,a)=>((t.enabled||this.disabled)&&(e[a]=t.value),e))}_reduceChildren(i,e){let t=i;return this._forEachChild((a,r)=>{t=e(t,a,r)}),t}_allControlsDisabled(){for(let i of Object.keys(this.controls))if(this.controls[i].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(i){return Ef(this.controls,i)?this.controls[i]:null}};var Cc=class extends rn{};var QC={provide:bn,useExisting:Mt(()=>qi)},ur=Promise.resolve(),qi=(()=>{class n extends bn{callSetDisabledState;get submitted(){return ge(this.submittedReactive)}_submitted=Ke(()=>this.submittedReactive());submittedReactive=Z(!1);_directives=new Set;form;ngSubmit=new T;options;constructor(e,t,a){super(),this.callSetDisabledState=a,this.form=new rn({},xc(e),Ec(t))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){ur.then(()=>{let t=this._findContainer(e.path);e.control=t.registerControl(e.name,e.control),e._setupWithForm(this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){ur.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){ur.then(()=>{let t=this._findContainer(e.path),a=new rn({});Af(a,e),t.registerControl(e.name,a),a.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){ur.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,t){ur.then(()=>{this.form.get(e.path).setValue(t)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),Nf(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new fs(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(t){return new(t||n)(pe(hi,10),pe(_s,10),pe(fr,8))};static \u0275dir=R({type:n,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(t,a){t&1&&ue("submit",function(o){return a.onSubmit(o)})("reset",function(){return a.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[ve([QC]),ie]})}return n})();function cf(n,i){let e=n.indexOf(i);e>-1&&n.splice(e,1)}function uf(n){return typeof n=="object"&&n!==null&&Object.keys(n).length===2&&"value"in n&&"disabled"in n}var St=class extends Wi{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(i=null,e,t){super(Mc(e),Rc(t,e)),this._applyFormState(i),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Cs(e)&&(e.nonNullable||e.initialValueIsDefault)&&(uf(i)?this.defaultValue=i.value:this.defaultValue=i)}setValue(i,e={}){ge(()=>{this.value=this._pendingValue=i,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(t=>t(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)})}patchValue(i,e={}){this.setValue(i,e)}reset(i=this.defaultValue,e={}){this._applyFormState(i),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new pi(this))}_updateValue(){}_anyControls(i){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(i){this._onChange.push(i)}_unregisterOnChange(i){cf(this._onChange,i)}registerOnDisabledChange(i){this._onDisabledChange.push(i)}_unregisterOnDisabledChange(i){cf(this._onDisabledChange,i)}_forEachChild(i){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(i){uf(i)?(this.value=this._pendingValue=i.value,i.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=i}};var JC=n=>n instanceof St;var ew=(()=>{class n extends bn{callSetDisabledState;get submitted(){return ge(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=Ke(()=>this._submittedReactive());_submittedReactive=Z(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,t,a){super(),this.callSetDisabledState=a,this._setValidators(e),this._setAsyncValidators(t)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),Object.hasOwn(e,"form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(ys(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let t=this.form.get(e.path);return e._setupWithForm(t,this.callSetDisabledState),t.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),t}getControl(e){return this.form.get(e.path)}removeControl(e){gs(e.control||null,e,!1),ZC(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,t){this.form.get(e.path).setValue(t)}onReset(){this.resetForm()}resetForm(e=void 0,t={}){this.form.reset(e,t),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,Nf(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new fs(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let t=e.control,a=this.form.get(e.path);t!==a&&(gs(t||null,e),JC(a)&&e._setupWithForm(a,this.callSetDisabledState))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let t=this.form.get(e.path);Af(t,e),t.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let t=this.form?.get(e.path);t&&qC(t,e)&&t.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){kc(this.form,this),this._oldForm&&ys(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(t){return new(t||n)(pe(hi,10),pe(_s,10),pe(fr,8))};static \u0275dir=R({type:n,features:[ie,Me]})}return n})(),tw={provide:bn,useExisting:Mt(()=>Fn)},Fn=(()=>{class n extends ew{form=null;ngSubmit=new T;get control(){return this.form}static \u0275fac=(()=>{let e;return function(a){return(e||(e=ye(n)))(a||n)}})();static \u0275dir=R({type:n,selectors:[["","formGroup",""]],hostBindings:function(t,a){t&1&&ue("submit",function(o){return a.onSubmit(o)})("reset",function(){return a.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[ve([tw]),ie]})}return n})();var Ki=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return n})();var wc=class extends Wi{constructor(i,e,t){super(Mc(e),Rc(t,e)),this.controls=i,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(i){return this.controls[this._adjustIndex(i)]}push(i,e={}){Array.isArray(i)?i.forEach(t=>{this.controls.push(t),this._registerControl(t)}):(this.controls.push(i),this._registerControl(i)),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(i,e,t={}){this.controls.splice(i,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:t.emitEvent})}removeAt(i,e={}){let t=this._adjustIndex(i);t<0&&(t=0),this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(i,e,t={}){let a=this._adjustIndex(i);a<0&&(a=0),this.controls[a]&&this.controls[a]._registerOnCollectionChange(()=>{}),this.controls.splice(a,1),e&&(this.controls.splice(a,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(i,e={}){ge(()=>{xf(this,!1,i),i.forEach((t,a)=>{Sf(this,!1,a),this.at(a).setValue(t,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)})}patchValue(i,e={}){i!=null&&(i.forEach((t,a)=>{this.at(a)&&this.at(a).patchValue(t,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(i=[],e={}){this._forEachChild((t,a)=>{t.reset(i[a],G(b({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new pi(this))}getRawValue(){return this.controls.map(i=>i.getRawValue())}clear(i={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:i.emitEvent}))}_adjustIndex(i){return i<0?i+this.length:i}_syncPendingControls(){let i=this.controls.reduce((e,t)=>t._syncPendingControls()?!0:e,!1);return i&&this.updateValueAndValidity({onlySelf:!0}),i}_forEachChild(i){this.controls.forEach((e,t)=>{i(e,t)})}_updateValue(){this.value=this.controls.filter(i=>i.enabled||this.disabled).map(i=>i.value)}_anyControls(i){return this.controls.some(e=>e.enabled&&i(e))}_setUpControls(){this._forEachChild(i=>this._registerControl(i))}_allControlsDisabled(){for(let i of this.controls)if(i.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(i){i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange)}_find(i){return this.at(i)??null}};var Ac=new y(""),nw={provide:Ut,useExisting:Mt(()=>gr)},gr=(()=>{class n extends Ut{_ngModelWarningConfig;callSetDisabledState;viewModel;form;set isDisabled(e){}model;update=new T;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,t,a,r,o,l,s){super(s,l,a),this._ngModelWarningConfig=r,this.callSetDisabledState=o,this._setValidators(e),this._setAsyncValidators(t)}ngOnChanges(e){if(this._isControlChanged(e)){let t=e.form.previousValue;t&&(gs(t,this,!1),this.removeParseErrorsValidator(t)),this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,Rf(this.form,this,this.callSetDisabledState)),this.form.updateValueAndValidity({emitEvent:!1})}If(e,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&gs(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_isControlChanged(e){return Object.hasOwn(e,"form")}\u0275ngControlCreate(e){super.ngControlCreate(e)}\u0275ngControlUpdate(e){super.ngControlUpdate(e,!0)}static \u0275fac=function(t){return new(t||n)(pe(hi,10),pe(_s,10),pe(hr,10),pe(Ac,8),pe(fr,8),pe(Ie,8),pe(re,8))};static \u0275dir=R({type:n,selectors:[["","formControl",""]],inputs:{form:[0,"formControl","form"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],standalone:!1,features:[ve([nw,Tf]),ie,Me,Fl(null)]})}return n})();var iw={provide:Ut,useExisting:Mt(()=>br)},br=(()=>{class n extends Ut{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(e){}model;update=new T;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,t,a,r,o,l,s){super(s,l,r),this._ngModelWarningConfig=o,this._parent=e,this._setValidators(t),this._setAsyncValidators(a)}_setupWithForm(e,t){this.control=e,this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,Rf(e,this,t))}ngOnChanges(e){this._added||this._setUpControl(),If(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective?.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return HC(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}\u0275ngControlCreate(e){super.ngControlCreate(e)}\u0275ngControlUpdate(e){this.isCustomControlBased&&(this._added||this._setUpControl(),super.ngControlUpdate(e,!0))}static \u0275fac=function(t){return new(t||n)(pe(bn,13),pe(hi,10),pe(_s,10),pe(hr,10),pe(Ac,8),pe(Ie,8),pe(re,8))};static \u0275dir=R({type:n,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[ve([iw,Tf]),ie,Me,Fl(null)]})}return n})();var Of=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=Q({type:n});static \u0275inj=X({})}return n})();function mf(n){return!!n&&(n.asyncValidators!==void 0||n.validators!==void 0||n.updateOn!==void 0)}var Ff=(()=>{class n{useNonNullable=!1;get nonNullable(){let e=new n;return e.useNonNullable=!0,e}group(e,t=null){let a=this._reduceControls(e),r={};return mf(t)?r=t:t!==null&&(r.validators=t.validator,r.asyncValidators=t.asyncValidator),new rn(a,r)}record(e,t=null){let a=this._reduceControls(e);return new Cc(a,t)}control(e,t,a){let r={};return this.useNonNullable?(mf(t)?r=t:(r.validators=t,r.asyncValidators=a),new St(e,G(b({},r),{nonNullable:!0}))):new St(e,t,a)}array(e,t,a){let r=e.map(o=>this._createControl(o));return new wc(r,t,a)}_reduceControls(e){let t={};return Object.keys(e).forEach(a=>{t[a]=this._createControl(e[a])}),t}_createControl(e){if(e instanceof St)return e;if(e instanceof Wi)return e;if(Array.isArray(e)){let t=e[0],a=e.length>1?e[1]:null,r=e.length>2?e[2]:null;return this.control(t,a,r)}else return this.control(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=O({token:n,factory:n.\u0275fac})}return n})();var Xi=(()=>{class n{static withConfig(e){return{ngModule:n,providers:[{provide:fr,useValue:e.callSetDisabledState??ws}]}}static \u0275fac=function(t){return new(t||n)};static \u0275mod=Q({type:n});static \u0275inj=X({imports:[Of]})}return n})(),Pn=(()=>{class n{static withConfig(e){return{ngModule:n,providers:[{provide:Ac,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:fr,useValue:e.callSetDisabledState??ws}]}}static \u0275fac=function(t){return new(t||n)};static \u0275mod=Q({type:n});static \u0275inj=X({imports:[Of]})}return n})();function yr(n){return n.buttons===0||n.detail===0}function vr(n){let i=n.touches&&n.touches[0]||n.changedTouches&&n.changedTouches[0];return!!i&&i.identifier===-1&&(i.radiusX==null||i.radiusX===1)&&(i.radiusY==null||i.radiusY===1)}var Ic;function Pf(){if(Ic==null){let n=typeof document<"u"?document.head:null;Ic=!!(n&&(n.createShadowRoot||n.attachShadow))}return Ic}function Nc(n){if(Pf()){let i=n.getRootNode?n.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&i instanceof ShadowRoot)return i}return null}function Zi(){let n=typeof document<"u"&&document?document.activeElement:null;for(;n&&n.shadowRoot;){let i=n.shadowRoot.activeElement;if(i===n)break;n=i}return n}function wt(n){if(n.composedPath)try{return n.composedPath()[0]}catch{}return n.target}var Tc;try{Tc=typeof Intl<"u"&&Intl.v8BreakIterator}catch{Tc=!1}var de=(()=>{class n{_platformId=d(wi);isBrowser=this._platformId?Cm(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||Tc)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;static \u0275fac=function(t){return new(t||n)};static \u0275prov=O({token:n,factory:n.\u0275fac})}return n})();var _r;function Lf(){if(_r==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>_r=!0}))}finally{_r=_r||!1}return _r}function Qi(n){return Lf()?n:!!n.capture}function Ln(n,i=0){return Vf(n)?Number(n):arguments.length===2?i:0}function Vf(n){return!isNaN(parseFloat(n))&&!isNaN(Number(n))}function gt(n){return n instanceof j?n.nativeElement:n}var Bf=new y("cdk-input-modality-detector-options"),jf={ignoreKeys:[18,17,224,91,16]},zf=650,Oc={passive:!0,capture:!0},Uf=(()=>{class n{_platform=d(de);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new ze(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(t=>t===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=wt(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<zf||(this._modality.next(yr(e)?"keyboard":"mouse"),this._mostRecentTarget=wt(e))};_onTouchstart=e=>{if(vr(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=wt(e)};constructor(){let e=d(P),t=d(q),a=d(Bf,{optional:!0});if(this._options=b(b({},jf),a),this.modalityDetected=this._modality.pipe(wn(1)),this.modalityChanged=this.modalityDetected.pipe(wa()),this._platform.isBrowser){let r=d(Je).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[r.listen(t,"keydown",this._onKeydown,Oc),r.listen(t,"mousedown",this._onMousedown,Oc),r.listen(t,"touchstart",this._onTouchstart,Oc)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(t){return new(t||n)};static \u0275prov=O({token:n,factory:n.\u0275fac})}return n})(),Cr=(function(n){return n[n.IMMEDIATE=0]="IMMEDIATE",n[n.EVENTUAL=1]="EVENTUAL",n})(Cr||{}),Hf=new y("cdk-focus-monitor-default-options"),Ss=Qi({passive:!0,capture:!0}),fi=(()=>{class n{_ngZone=d(P);_platform=d(de);_inputModalityDetector=d(Uf);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=d(q);_stopInputModalityDetector=new N;constructor(){let e=d(Hf,{optional:!0});this._detectionMode=e?.detectionMode||Cr.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let t=wt(e);for(let a=t;a;a=a.parentElement)e.type==="focus"?this._onFocus(e,a):this._onBlur(e,a)};monitor(e,t=!1){let a=gt(e);if(!this._platform.isBrowser||a.nodeType!==1)return V();let r=Nc(a)||this._document,o=this._elementInfo.get(a);if(o)return t&&(o.checkChildren=!0),o.subject;let l={checkChildren:t,subject:new N,rootNode:r};return this._elementInfo.set(a,l),this._registerGlobalListeners(l),l.subject}stopMonitoring(e){let t=gt(e),a=this._elementInfo.get(t);a&&(a.subject.complete(),this._setClasses(t),this._elementInfo.delete(t),this._removeGlobalListeners(a))}focusVia(e,t,a){let r=gt(e),o=this._document.activeElement;r===o?this._getClosestElementsInfo(r).forEach(([l,s])=>this._originChanged(l,t,s)):(this._setOrigin(t),typeof r.focus=="function"&&r.focus(a))}ngOnDestroy(){this._elementInfo.forEach((e,t)=>this.stopMonitoring(t))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===Cr.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,t){e.classList.toggle("cdk-focused",!!t),e.classList.toggle("cdk-touch-focused",t==="touch"),e.classList.toggle("cdk-keyboard-focused",t==="keyboard"),e.classList.toggle("cdk-mouse-focused",t==="mouse"),e.classList.toggle("cdk-program-focused",t==="program")}_setOrigin(e,t=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&t,this._detectionMode===Cr.IMMEDIATE){clearTimeout(this._originTimeoutId);let a=this._originFromTouchInteraction?zf:1;this._originTimeoutId=setTimeout(()=>this._origin=null,a)}})}_onFocus(e,t){let a=this._elementInfo.get(t),r=wt(e);!a||!a.checkChildren&&t!==r||this._originChanged(t,this._getFocusOrigin(r),a)}_onBlur(e,t){let a=this._elementInfo.get(t);!a||a.checkChildren&&e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||(this._setClasses(t),this._emitOrigin(a,null))}_emitOrigin(e,t){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(t))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let t=e.rootNode,a=this._rootNodeFocusListenerCount.get(t)||0;a||this._ngZone.runOutsideAngular(()=>{t.addEventListener("focus",this._rootNodeFocusAndBlurListener,Ss),t.addEventListener("blur",this._rootNodeFocusAndBlurListener,Ss)}),this._rootNodeFocusListenerCount.set(t,a+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(ce(this._stopInputModalityDetector)).subscribe(r=>{this._setOrigin(r,!0)}))}_removeGlobalListeners(e){let t=e.rootNode;if(this._rootNodeFocusListenerCount.has(t)){let a=this._rootNodeFocusListenerCount.get(t);a>1?this._rootNodeFocusListenerCount.set(t,a-1):(t.removeEventListener("focus",this._rootNodeFocusAndBlurListener,Ss),t.removeEventListener("blur",this._rootNodeFocusAndBlurListener,Ss),this._rootNodeFocusListenerCount.delete(t))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,t,a){this._setClasses(e,t),this._emitOrigin(a,t),this._lastFocusOrigin=t}_getClosestElementsInfo(e){let t=[];return this._elementInfo.forEach((a,r)=>{(r===e||a.checkChildren&&r.contains(e))&&t.push([r,a])}),t}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:t,mostRecentModality:a}=this._inputModalityDetector;if(a!=="mouse"||!t||t===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let r=e.labels;if(r){for(let o=0;o<r.length;o++)if(r[o].contains(t))return!0}return!1}static \u0275fac=function(t){return new(t||n)};static \u0275prov=O({token:n,factory:n.\u0275fac})}return n})(),wr=(()=>{class n{_elementRef=d(j);_focusMonitor=d(fi);_monitorSubscription;_focusOrigin=null;cdkFocusChange=new T;get focusOrigin(){return this._focusOrigin}ngAfterViewInit(){let e=this._elementRef.nativeElement;this._monitorSubscription=this._focusMonitor.monitor(e,e.nodeType===1&&e.hasAttribute("cdkMonitorSubtreeFocus")).subscribe(t=>{this._focusOrigin=t,this.cdkFocusChange.emit(t)})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._monitorSubscription?.unsubscribe()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n,selectors:[["","cdkMonitorElementFocus",""],["","cdkMonitorSubtreeFocus",""]],outputs:{cdkFocusChange:"cdkFocusChange"},exportAs:["cdkMonitorFocus"]})}return n})();var xs=new WeakMap,He=(()=>{class n{_appRef;_injector=d(re);_environmentInjector=d(rt);load(e){let t=this._appRef=this._appRef||this._injector.get(Dn),a=xs.get(t);a||(a={loaders:new Set,refs:[]},xs.set(t,a),t.onDestroy(()=>{xs.get(t)?.refs.forEach(r=>r.destroy()),xs.delete(t)})),a.loaders.has(e)||(a.loaders.add(e),a.refs.push(oo(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=O({token:n,factory:n.\u0275fac})}return n})();var Vn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=L({type:n,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(t,a){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2})}return n})();function Ji(n){return Array.isArray(n)?n:[n]}var $f=new Set,gi,ea=(()=>{class n{_platform=d(de);_nonce=d(Qn,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):rw}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&aw(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=O({token:n,factory:n.\u0275fac})}return n})();function aw(n,i){if(!$f.has(n))try{gi||(gi=document.createElement("style"),i&&gi.setAttribute("nonce",i),gi.setAttribute("type","text/css"),document.head.appendChild(gi)),gi.sheet&&(gi.sheet.insertRule(`@media ${n.replace(/[{}]/g,"")} {body{ }}`,0),$f.add(n))}catch(e){console.error(e)}}function rw(n){return{matches:n==="all"||n==="",media:n,addListener:()=>{},removeListener:()=>{}}}var Fc=(()=>{class n{_mediaMatcher=d(ea);_zone=d(P);_queries=new Map;_destroySubject=new N;ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return Gf(Ji(e)).some(a=>this._registerQuery(a).mql.matches)}observe(e){let a=Gf(Ji(e)).map(o=>this._registerQuery(o).observable),r=qt(a);return r=Wr(r.pipe(yt(1)),r.pipe(wn(1),Kt(0))),r.pipe(Y(o=>{let l={matches:!1,breakpoints:{}};return o.forEach(({matches:s,query:u})=>{l.matches=l.matches||s,l.breakpoints[u]=s}),l}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let t=this._mediaMatcher.matchMedia(e),r={observable:new Oe(o=>{let l=s=>this._zone.run(()=>o.next(s));return t.addListener(l),()=>{t.removeListener(l)}}).pipe(nt(t),Y(({matches:o})=>({query:e,matches:o})),ce(this._destroySubject)),mql:t};return this._queries.set(e,r),r}static \u0275fac=function(t){return new(t||n)};static \u0275prov=O({token:n,factory:n.\u0275fac})}return n})();function Gf(n){return n.map(i=>i.split(",")).reduce((i,e)=>i.concat(e)).map(i=>i.trim())}function ow(n){if(n.type==="characterData"&&n.target instanceof Comment)return!0;if(n.type==="childList"){for(let i=0;i<n.addedNodes.length;i++)if(!(n.addedNodes[i]instanceof Comment))return!1;for(let i=0;i<n.removedNodes.length;i++)if(!(n.removedNodes[i]instanceof Comment))return!1;return!0}return!1}var Wf=(()=>{class n{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=O({token:n,factory:n.\u0275fac})}return n})(),Yf=(()=>{class n{_mutationObserverFactory=d(Wf);_observedElements=new Map;_ngZone=d(P);ngOnDestroy(){this._observedElements.forEach((e,t)=>this._cleanupObserver(t))}observe(e){let t=gt(e);return new Oe(a=>{let o=this._observeElement(t).pipe(Y(l=>l.filter(s=>!ow(s))),be(l=>!!l.length)).subscribe(l=>{this._ngZone.run(()=>{a.next(l)})});return()=>{o.unsubscribe(),this._unobserveElement(t)}})}_observeElement(e){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(e))this._observedElements.get(e).count++;else{let t=new N,a=this._mutationObserverFactory.create(r=>t.next(r));a&&a.observe(e,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(e,{observer:a,stream:t,count:1})}return this._observedElements.get(e).stream})}_unobserveElement(e){this._observedElements.has(e)&&(this._observedElements.get(e).count--,this._observedElements.get(e).count||this._cleanupObserver(e))}_cleanupObserver(e){if(this._observedElements.has(e)){let{observer:t,stream:a}=this._observedElements.get(e);t&&t.disconnect(),a.complete(),this._observedElements.delete(e)}}static \u0275fac=function(t){return new(t||n)};static \u0275prov=O({token:n,factory:n.\u0275fac})}return n})(),qf=(()=>{class n{_contentObserver=d(Yf);_elementRef=d(j);event=new T;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(e){this._debounce=Ln(e),this._subscribe()}_debounce;_currentSubscription=null;ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let e=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?e.pipe(Kt(this.debounce)):e).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n,selectors:[["","cdkObserveContent",""]],inputs:{disabled:[2,"cdkObserveContentDisabled","disabled",K],debounce:"debounce"},outputs:{event:"cdkObserveContent"},exportAs:["cdkObserveContent"]})}return n})(),Es=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=Q({type:n});static \u0275inj=X({providers:[Wf]})}return n})();var sw=(()=>{class n{_platform=d(de);isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return dw(e)&&getComputedStyle(e).visibility==="visible"}isTabbable(e){if(!this._platform.isBrowser)return!1;let t=lw(bw(e));if(t&&(Kf(t)===-1||!this.isVisible(t)))return!1;let a=e.nodeName.toLowerCase(),r=Kf(e);return e.hasAttribute("contenteditable")?r!==-1:a==="iframe"||a==="object"||this._platform.WEBKIT&&this._platform.IOS&&!fw(e)?!1:a==="audio"?e.hasAttribute("controls")?r!==-1:!1:a==="video"?r===-1?!1:r!==null?!0:this._platform.FIREFOX||e.hasAttribute("controls"):e.tabIndex>=0}isFocusable(e,t){return gw(e)&&!this.isDisabled(e)&&(t?.ignoreVisibility||this.isVisible(e))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=O({token:n,factory:n.\u0275fac})}return n})();function lw(n){try{return n.frameElement}catch{return null}}function dw(n){return!!(n.offsetWidth||n.offsetHeight||typeof n.getClientRects=="function"&&n.getClientRects().length)}function cw(n){let i=n.nodeName.toLowerCase();return i==="input"||i==="select"||i==="button"||i==="textarea"}function uw(n){return pw(n)&&n.type=="hidden"}function mw(n){return hw(n)&&n.hasAttribute("href")}function pw(n){return n.nodeName.toLowerCase()=="input"}function hw(n){return n.nodeName.toLowerCase()=="a"}function Qf(n){if(!n.hasAttribute("tabindex")||n.tabIndex===void 0)return!1;let i=n.getAttribute("tabindex");return!!(i&&!isNaN(parseInt(i,10)))}function Kf(n){if(!Qf(n))return null;let i=parseInt(n.getAttribute("tabindex")||"",10);return isNaN(i)?-1:i}function fw(n){let i=n.nodeName.toLowerCase(),e=i==="input"&&n.type;return e==="text"||e==="password"||i==="select"||i==="textarea"}function gw(n){return uw(n)?!1:cw(n)||mw(n)||n.hasAttribute("contenteditable")||Qf(n)}function bw(n){return n.ownerDocument&&n.ownerDocument.defaultView||window}var Lc=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>{!this.focusLastTabbableElement()&&this._checker.isFocusable(this._element)&&this._element.focus()};endAnchorListener=()=>{!this.focusFirstTabbableElement()&&this._checker.isFocusable(this._element)&&this._element.focus()};get enabled(){return this._enabled}set enabled(i){this._enabled=i,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(i,this._startAnchor),this._toggleAnchorTabIndex(i,this._endAnchor))}_enabled=!0;constructor(i,e,t,a,r=!1,o){this._element=i,this._checker=e,this._ngZone=t,this._document=a,this._injector=o,r||this.attachAnchors()}destroy(){let i=this._startAnchor,e=this._endAnchor;i&&(i.removeEventListener("focus",this.startAnchorListener),i.remove()),e&&(e.removeEventListener("focus",this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(i)))})}focusFirstTabbableElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(i)))})}focusLastTabbableElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(i)))})}_getRegionBoundary(i){let e=this._element.querySelectorAll(`[cdk-focus-region-${i}], [cdkFocusRegion${i}], [cdk-focus-${i}]`);return i=="start"?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(i){let e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(e){if(!this._checker.isFocusable(e)){let t=this._getFirstTabbableElement(e);return t?.focus(i),!!t}return e.focus(i),!0}return this.focusFirstTabbableElement(i)}focusFirstTabbableElement(i){let e=this._getRegionBoundary("start");return e&&e.focus(i),!!e}focusLastTabbableElement(i){let e=this._getRegionBoundary("end");return e&&e.focus(i),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(i){if(this._checker.isFocusable(i)&&this._checker.isTabbable(i))return i;let e=i.children;for(let t=0;t<e.length;t++){let a=e[t].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[t]):null;if(a)return a}return null}_getLastTabbableElement(i){if(this._checker.isFocusable(i)&&this._checker.isTabbable(i))return i;let e=i.children;for(let t=e.length-1;t>=0;t--){let a=e[t].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[t]):null;if(a)return a}return null}_createAnchor(){let i=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,i),i.classList.add("cdk-visually-hidden"),i.classList.add("cdk-focus-trap-anchor"),i.setAttribute("aria-hidden","true"),i}_toggleAnchorTabIndex(i,e){i?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(i){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(i,this._startAnchor),this._toggleAnchorTabIndex(i,this._endAnchor))}_executeOnStable(i){Ne(i,{injector:this._injector})}},Jf=(()=>{class n{_checker=d(sw);_ngZone=d(P);_document=d(q);_injector=d(re);constructor(){d(He).load(Vn)}create(e,t=!1){return new Lc(e,this._checker,this._ngZone,this._document,t,this._injector)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=O({token:n,factory:n.\u0275fac})}return n})(),Vc=(()=>{class n{_elementRef=d(j);_focusTrapFactory=d(Jf);focusTrap=void 0;_previouslyFocusedElement=null;get enabled(){return this.focusTrap?.enabled||!1}set enabled(e){this.focusTrap&&(this.focusTrap.enabled=e)}autoCapture=!1;constructor(){d(de).isBrowser&&(this.focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement,!0))}ngOnDestroy(){this.focusTrap?.destroy(),this._previouslyFocusedElement&&(this._previouslyFocusedElement.focus(),this._previouslyFocusedElement=null)}ngAfterContentInit(){this.focusTrap?.attachAnchors(),this.autoCapture&&this._captureFocus()}ngDoCheck(){this.focusTrap&&!this.focusTrap.hasAttached()&&this.focusTrap.attachAnchors()}ngOnChanges(e){let t=e.autoCapture;t&&!t.firstChange&&this.autoCapture&&this.focusTrap?.hasAttached()&&this._captureFocus()}_captureFocus(){this._previouslyFocusedElement=Zi(),this.focusTrap?.focusInitialElementWhenReady()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n,selectors:[["","cdkTrapFocus",""]],inputs:{enabled:[2,"cdkTrapFocus","enabled",K],autoCapture:[2,"cdkTrapFocusAutoCapture","autoCapture",K]},exportAs:["cdkTrapFocus"],features:[Me]})}return n})();var Bn=(function(n){return n[n.NONE=0]="NONE",n[n.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",n[n.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",n})(Bn||{}),Xf="cdk-high-contrast-black-on-white",Zf="cdk-high-contrast-white-on-black",Pc="cdk-high-contrast-active",eg=(()=>{class n{_platform=d(de);_hasCheckedHighContrastMode=!1;_document=d(q);_breakpointSubscription;constructor(){this._breakpointSubscription=d(Fc).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return Bn.NONE;let e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);let t=this._document.defaultView||window,a=t&&t.getComputedStyle?t.getComputedStyle(e):null,r=(a&&a.backgroundColor||"").replace(/ /g,"");switch(e.remove(),r){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return Bn.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return Bn.BLACK_ON_WHITE}return Bn.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let e=this._document.body.classList;e.remove(Pc,Xf,Zf),this._hasCheckedHighContrastMode=!0;let t=this.getHighContrastMode();t===Bn.BLACK_ON_WHITE?e.add(Pc,Xf):t===Bn.WHITE_ON_BLACK&&e.add(Pc,Zf)}}static \u0275fac=function(t){return new(t||n)};static \u0275prov=O({token:n,factory:n.\u0275fac})}return n})(),Bc=(()=>{class n{constructor(){d(eg)._applyBodyHighContrastModeCssClasses()}static \u0275fac=function(t){return new(t||n)};static \u0275mod=Q({type:n});static \u0275inj=X({imports:[Es]})}return n})();var yw=200,Ms=class{_letterKeyStream=new N;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new N;selectedItem=this._selectedItem;constructor(i,e){let t=typeof e?.debounceInterval=="number"?e.debounceInterval:yw;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(i),this._setupKeyHandler(t)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(i){this._selectedItemIndex=i}setItems(i){this._items=i}handleKey(i){let e=i.keyCode;i.key&&i.key.length===1?this._letterKeyStream.next(i.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(i){this._letterKeyStream.pipe(pt(e=>this._pressedLetters.push(e)),Kt(i),be(()=>this._pressedLetters.length>0),Y(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let t=1;t<this._items.length+1;t++){let a=(this._selectedItemIndex+t)%this._items.length,r=this._items[a];if(!this._skipPredicateFn?.(r)&&r.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(r);break}}this._pressedLetters=[]})}};function xt(n,...i){return i.length?i.some(e=>n[e]):n.altKey||n.shiftKey||n.ctrlKey||n.metaKey}var Rs=class{_items;_activeItemIndex=Z(-1);_activeItem=Z(null);_wrap=!1;_typeaheadSubscription=Ee.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=i=>i.disabled;constructor(i,e){this._items=i,i instanceof Ea?this._itemChangesSubscription=i.changes.subscribe(t=>this._itemsChanged(t.toArray())):Xt(i)&&(this._effectRef=vt(()=>this._itemsChanged(i()),{injector:e}))}tabOut=new N;change=new N;skipPredicate(i){return this._skipPredicateFn=i,this}withWrap(i=!0){return this._wrap=i,this}withVerticalOrientation(i=!0){return this._vertical=i,this}withHorizontalOrientation(i){return this._horizontal=i,this}withAllowedModifierKeys(i){return this._allowedModifierKeys=i,this}withTypeAhead(i=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new Ms(e,{debounceInterval:typeof i=="number"?i:void 0,skipPredicate:t=>this._skipPredicateFn(t)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(t=>{this.setActiveItem(t)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(i=!0){return this._homeAndEnd=i,this}withPageUpDown(i=!0,e=10){return this._pageUpAndDown={enabled:i,delta:e},this}setActiveItem(i){let e=this._activeItem();this.updateActiveItem(i),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(i){let e=i.keyCode,a=["altKey","ctrlKey","metaKey","shiftKey"].every(r=>!i[r]||this._allowedModifierKeys.indexOf(r)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&a){this.setNextItemActive();break}else return;case 38:if(this._vertical&&a){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&a){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&a){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&a){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&a){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&a){let r=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(r>0?r:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&a){let r=this._activeItemIndex()+this._pageUpAndDown.delta,o=this._getItemsArray().length;this._setActiveItemByIndex(r<o?r:o-1,-1);break}else return;default:(a||xt(i,"shiftKey"))&&this._typeahead?.handleKey(i);return}this._typeahead?.reset(),i.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(i){let e=this._getItemsArray(),t=typeof i=="number"?i:e.indexOf(i),a=e[t];this._activeItem.set(a??null),this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(i){this._wrap?this._setActiveInWrapMode(i):this._setActiveInDefaultMode(i)}_setActiveInWrapMode(i){let e=this._getItemsArray();for(let t=1;t<=e.length;t++){let a=(this._activeItemIndex()+i*t+e.length)%e.length,r=e[a];if(!this._skipPredicateFn(r)){this.setActiveItem(a);return}}}_setActiveInDefaultMode(i){this._setActiveItemByIndex(this._activeItemIndex()+i,i)}_setActiveItemByIndex(i,e){let t=this._getItemsArray();if(t[i]){for(;this._skipPredicateFn(t[i]);)if(i+=e,!t[i])return;this.setActiveItem(i)}}_getItemsArray(){return Xt(this._items)?this._items():this._items instanceof Ea?this._items.toArray():this._items}_itemsChanged(i){this._typeahead?.setItems(i);let e=this._activeItem();if(e){let t=i.indexOf(e);t>-1&&t!==this._activeItemIndex()&&(this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t))}}};var Mr=class extends Rs{_origin="program";setFocusOrigin(i){return this._origin=i,this}setActiveItem(i){super.setActiveItem(i),this.activeItem&&this.activeItem.focus(this._origin)}};var tg=new Map,ct=class n{_appId=d(Zn);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(i,e=!1){this._appId!=="ng"&&(i+=this._appId);let t=tg.get(i);return t===void 0?t=0:t++,tg.set(i,t),`${i}${e?n._infix+"-":""}${t}`}static \u0275fac=function(e){return new(e||n)};static \u0275prov=O({token:n,factory:n.\u0275fac})};var ig=" ";function vw(n,i,e){let t=Ns(n,i);e=e.trim(),!t.some(a=>a.trim()===e)&&(t.push(e),n.setAttribute(i,t.join(ig)))}function _w(n,i,e){let t=Ns(n,i);e=e.trim();let a=t.filter(r=>r!==e);a.length?n.setAttribute(i,a.join(ig)):n.removeAttribute(i)}function Ns(n,i){return n.getAttribute(i)?.match(/\S+/g)??[]}var ag="cdk-describedby-message",Is="cdk-describedby-host",zc=0,rg=(()=>{class n{_platform=d(de);_document=d(q);_messageRegistry=new Map;_messagesContainer=null;_id=`${zc++}`;constructor(){d(He).load(Vn),this._id=d(Zn)+"-"+zc++}describe(e,t,a){if(!this._canBeDescribed(e,t))return;let r=jc(t,a);typeof t!="string"?(ng(t,this._id),this._messageRegistry.set(r,{messageElement:t,referenceCount:0})):this._messageRegistry.has(r)||this._createMessageElement(t,a),this._isElementDescribedByMessage(e,r)||this._addMessageReference(e,r)}removeDescription(e,t,a){if(!t||!this._isElementNode(e))return;let r=jc(t,a);if(this._isElementDescribedByMessage(e,r)&&this._removeMessageReference(e,r),typeof t=="string"){let o=this._messageRegistry.get(r);o&&o.referenceCount===0&&this._deleteMessageElement(r)}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){let e=this._document.querySelectorAll(`[${Is}="${this._id}"]`);for(let t=0;t<e.length;t++)this._removeCdkDescribedByReferenceIds(e[t]),e[t].removeAttribute(Is);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(e,t){let a=this._document.createElement("div");ng(a,this._id),a.textContent=e,t&&a.setAttribute("role",t),this._createMessagesContainer(),this._messagesContainer.appendChild(a),this._messageRegistry.set(jc(e,t),{messageElement:a,referenceCount:0})}_deleteMessageElement(e){this._messageRegistry.get(e)?.messageElement?.remove(),this._messageRegistry.delete(e)}_createMessagesContainer(){if(this._messagesContainer)return;let e="cdk-describedby-message-container",t=this._document.querySelectorAll(`.${e}[platform="server"]`);for(let r=0;r<t.length;r++)t[r].remove();let a=this._document.createElement("div");a.style.visibility="hidden",a.classList.add(e),a.classList.add("cdk-visually-hidden"),this._platform.isBrowser||a.setAttribute("platform","server"),this._document.body.appendChild(a),this._messagesContainer=a}_removeCdkDescribedByReferenceIds(e){let t=Ns(e,"aria-describedby").filter(a=>a.indexOf(ag)!=0);e.setAttribute("aria-describedby",t.join(" "))}_addMessageReference(e,t){let a=this._messageRegistry.get(t);vw(e,"aria-describedby",a.messageElement.id),e.setAttribute(Is,this._id),a.referenceCount++}_removeMessageReference(e,t){let a=this._messageRegistry.get(t);a.referenceCount--,_w(e,"aria-describedby",a.messageElement.id),e.removeAttribute(Is)}_isElementDescribedByMessage(e,t){let a=Ns(e,"aria-describedby"),r=this._messageRegistry.get(t),o=r&&r.messageElement.id;return!!o&&a.indexOf(o)!=-1}_canBeDescribed(e,t){if(!this._isElementNode(e))return!1;if(t&&typeof t=="object")return!0;let a=t==null?"":`${t}`.trim(),r=e.getAttribute("aria-label");return a?!r||r.trim()!==a:!1}_isElementNode(e){return e.nodeType===this._document.ELEMENT_NODE}static \u0275fac=function(t){return new(t||n)};static \u0275prov=O({token:n,factory:n.\u0275fac})}return n})();function jc(n,i){return typeof n=="string"?`${i||""}/${n}`:n}function ng(n,i){n.id||(n.id=`${ag}-${i}-${zc++}`)}var Cw=new y("cdk-dir-doc",{providedIn:"root",factory:()=>d(q)}),ww=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function og(n){let i=n?.toLowerCase()||"";return i==="auto"&&typeof navigator<"u"&&navigator?.language?ww.test(navigator.language)?"rtl":"ltr":i==="rtl"?"rtl":"ltr"}var Xe=(()=>{class n{get value(){return this.valueSignal()}valueSignal=Z("ltr");change=new T;constructor(){let e=d(Cw,{optional:!0});if(e){let t=e.body?e.body.dir:null,a=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(og(t||a||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(t){return new(t||n)};static \u0275prov=O({token:n,factory:n.\u0275fac})}return n})();var $e=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=Q({type:n});static \u0275inj=X({})}return n})();function Ge(n){return n==null?"":typeof n=="string"?n:`${n}px`}function yn(n){return n!=null&&`${n}`!="false"}function sg(n,i=/\s+/){let e=[];if(n!=null){let t=Array.isArray(n)?n:`${n}`.split(i);for(let a of t){let r=`${a}`.trim();r&&e.push(r)}}return e}var Ht=(function(n){return n[n.NORMAL=0]="NORMAL",n[n.NEGATED=1]="NEGATED",n[n.INVERTED=2]="INVERTED",n})(Ht||{}),Ts,bi;function Os(){if(bi==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return bi=!1,bi;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)bi=!0;else{let n=Element.prototype.scrollTo;n?bi=!/\{\s*\[native code\]\s*\}/.test(n.toString()):bi=!1}}return bi}function ia(){if(typeof document!="object"||!document)return Ht.NORMAL;if(Ts==null){let n=document.createElement("div"),i=n.style;n.dir="rtl",i.width="1px",i.overflow="auto",i.visibility="hidden",i.pointerEvents="none",i.position="absolute";let e=document.createElement("div"),t=e.style;t.width="2px",t.height="1px",n.appendChild(e),document.body.appendChild(n),Ts=Ht.NORMAL,n.scrollLeft===0&&(n.scrollLeft=1,Ts=n.scrollLeft===0?Ht.NEGATED:Ht.INVERTED),n.remove()}return Ts}function Uc(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var aa,lg=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function Hc(){if(aa)return aa;if(typeof document!="object"||!document)return aa=new Set(lg),aa;let n=document.createElement("input");return aa=new Set(lg.filter(i=>(n.setAttribute("type",i),n.type===i))),aa}var cg=Symbol("FIELD_TREE");var ug=Symbol("IS_ASYNC_VALIDATION_RESOURCE"),dg=class{reducer;create;brand;[ug];constructor(i,e){this.reducer=i,this.create=e}};function Rr(n){return typeof n=="function"&&n[cg]===!0}var mg=new y("");var $c=class{_box;_destroyed=new N;_resizeSubject=new N;_resizeObserver;_elementObservables=new Map;constructor(i){this._box=i,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(i){return this._elementObservables.has(i)||this._elementObservables.set(i,new Oe(e=>{let t=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(i,{box:this._box}),()=>{this._resizeObserver?.unobserve(i),t.unsubscribe(),this._elementObservables.delete(i)}}).pipe(be(e=>e.some(t=>t.target===i)),kl({bufferSize:1,refCount:!0}),ce(this._destroyed))),this._elementObservables.get(i)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},Fs=(()=>{class n{_cleanupErrorListener;_observers=new Map;_ngZone=d(P);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,t){let a=t?.box||"content-box";return this._observers.has(a)||this._observers.set(a,new $c(a)),this._observers.get(a).observe(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=O({token:n,factory:n.\u0275fac})}return n})();var Dw=new y("MATERIAL_ANIMATIONS"),pg=null;function Sw(){return d(Dw,{optional:!0})?.animationsDisabled||d(Di,{optional:!0})==="NoopAnimations"?"di-disabled":(pg??=d(ea).matchMedia("(prefers-reduced-motion)").matches,pg?"reduced-motion":"enabled")}function tt(){return Sw()!=="enabled"}var $t=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n,selectors:[["mat-label"]]})}return n})(),xw=new y("MatError");var kr=(()=>{class n{align="start";id=d(ct).getId("mat-mdc-hint-");static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(t,a){t&2&&(Lt("id",a.id),Se("align",null),ee("mat-mdc-form-field-hint-end",a.align==="end"))},inputs:{align:"align",id:"id"}})}return n})(),Ew=new y("MatPrefix");var _g=new y("MatSuffix"),Gc=(()=>{class n{set _isTextSelector(e){this._isText=!0}_isText=!1;static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n,selectors:[["","matSuffix",""],["","matIconSuffix",""],["","matTextSuffix",""]],inputs:{_isTextSelector:[0,"matTextSuffix","_isTextSelector"]},features:[ve([{provide:_g,useExisting:n}])]})}return n})(),Cg=new y("FloatingLabelParent"),hg=(()=>{class n{_elementRef=d(j);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=d(Fs);_ngZone=d(P);_parent=d(Cg);_resizeSubscription=new Ee;ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return Mw(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(t,a){t&2&&ee("mdc-floating-label--float-above",a.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return n})();function Mw(n){let i=n;if(i.offsetParent!==null)return i.scrollWidth;let e=i.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let t=e.scrollWidth;return e.remove(),t}var fg="mdc-line-ripple--active",Ps="mdc-line-ripple--deactivating",gg=(()=>{class n{_elementRef=d(j);_cleanupTransitionEnd;constructor(){let e=d(P),t=d(Ie);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=t.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(Ps),e.add(fg)}deactivate(){this._elementRef.nativeElement.classList.add(Ps)}_handleTransitionEnd=e=>{let t=this._elementRef.nativeElement.classList,a=t.contains(Ps);e.propertyName==="opacity"&&a&&t.remove(fg,Ps)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return n})(),bg=(()=>{class n{_elementRef=d(j);_ngZone=d(P);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,t=e.querySelector(".mdc-floating-label");t?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(t.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>t.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let t=this._notch.nativeElement;!this.open||!e?t.style.width="":t.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=(function(){let e=["notch"];return L({type:n,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(r,o){if(r&1&&qe(e,5),r&2){let l;H(l=$())&&(o._notch=l.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(r,o){r&2&&ee("mdc-notched-outline--notched",o.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},ngContentSelectors:["*"],decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(r,o){r&1&&(je(),kt(0,"div",1),Le(1,"div",2,0),se(3),Be(),kt(4,"div",3))},encapsulation:2})})()}return n})(),Ls=(()=>{class n{id;ngField=null;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;stateChanges=null;value;static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n})}return n})();var Ar=new y("MatFormField"),Rw=new y("MAT_FORM_FIELD_DEFAULT_OPTIONS"),yg="fill",kw="auto",vg="fixed",Aw="translateY(-50%)",sn=(()=>{class n{_elementRef=d(j);_changeDetectorRef=d(Ae);_platform=d(de);_idGenerator=d(ct);_ngZone=d(P);_defaults=d(Rw,{optional:!0});_currentDirection;_unwrapMaybeSignal(e){return Xt(e)?e():e}_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=ka("iconPrefixContainer");_textPrefixContainerSignal=ka("textPrefixContainer");_iconSuffixContainerSignal=ka("iconSuffixContainer");_textSuffixContainerSignal=ka("textSuffixContainer");_prefixSuffixContainers=Ke(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=hm($t);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=yn(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||kw}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let t=e||this._defaults?.appearance||yg;this._appearanceSignal.set(t)}_appearanceSignal=Z(yg);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||vg}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||vg}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new N;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=tt();constructor(){let e=this._defaults,t=d(Xe);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),vt(()=>this._currentDirection=t.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=Rr(this._control.ngField)?null:this._control.ngControl.control.validator),this._previousControl=this._control,this._changeDetectorRef.markForCheck()),this._control.ngControl&&this._control.ngControl.control&&!Rr(this._control.ngField)&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=Ke(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let t=this._control,a="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(a+e.controlType),t.controlType&&this._elementRef.nativeElement.classList.add(a+t.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=t.stateChanges?.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=t.stateChanges?.pipe(nt([void 0,void 0]),Y(()=>[this._unwrapMaybeSignal(t.errorState),t.userAriaDescribedBy]),Rl(),be(([[r,o],[l,s]])=>r!==l||o!==s)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),t.ngControl&&t.ngControl.valueChanges&&!Rr(t.ngField)&&(this._valueChanges=t.ngControl.valueChanges.pipe(ce(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),at(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._unwrapMaybeSignal(this._control.focused);e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){Ul({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=Ke(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._shouldAlwaysFloat()||this._unwrapMaybeSignal(this._control.shouldLabelFloat):!1}_shouldForward(e){let t=this._control?.ngField||this._control?.ngControl;if(!t)return!1;if(Rr(t)){let a=t();return e==="valid"?a.valid():e==="dirty"?a.dirty():e==="touched"?a.touched():e==="pending"?a.pending():e==="untouched"?!a.touched():e==="pristine"?!a.dirty():e==="invalid"?!a.valid():!1}else{let a=t;return e==="valid"?a.valid:e==="dirty"?a.dirty:e==="touched"?a.touched:e==="pending"?a.pending:e==="untouched"?a.untouched:e==="pristine"?a.pristine:e==="invalid"?a.invalid:!1}}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._unwrapMaybeSignal(this._control.errorState)?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let r=this._hintChildren?this._hintChildren.find(l=>l.align==="start"):null,o=this._hintChildren?this._hintChildren.find(l=>l.align==="end"):null;r?e.push(r.id):this._hintLabel&&e.push(this._hintLabelId),o&&e.push(o.id)}else this._errorChildren&&e.push(...this._errorChildren.map(r=>r.id));let t=this._control.describedByIds,a;if(t){let r=this._describedByIds||e;a=e.concat(t.filter(o=>o&&!r.includes(o)))}else a=e;this._control.setDescribedByIds(a),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,t=this._textPrefixContainer?.nativeElement,a=this._iconSuffixContainer?.nativeElement,r=this._textSuffixContainer?.nativeElement,o=e?.getBoundingClientRect().width??0,l=t?.getBoundingClientRect().width??0,s=a?.getBoundingClientRect().width??0,u=r?.getBoundingClientRect().width??0,c=this._currentDirection==="rtl"?"-1":"1",m=`${o+l}px`,h=`calc(${c} * (${m} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,_=`var(--mat-mdc-form-field-label-transform, ${Aw} translateX(${h}))`,D=o+l+s+u;return[_,D]}_writeOutlinedLabelStyles(e){if(e!==null){let[t,a]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=t),a!==null&&this._notchedOutline?._setMaxWidth(a)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let t=e.getRootNode();return t&&t!==e}return document.documentElement.contains(e)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=(function(){let e=["iconPrefixContainer"],t=["textPrefixContainer"],a=["iconSuffixContainer"],r=["textSuffixContainer"],o=["textField"],l=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],s=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function u(J,Ce){J&1&&le(0,"span",21)}function c(J,Ce){if(J&1&&(f(0,"label",20),se(1,1),he(2,u,1,0,"span",21),g()),J&2){let M=oe(2);B("floating",M._shouldLabelFloat())("monitorResize",M._hasOutline())("id",M._labelId),Se("for",M._control.disableAutomaticLabeling?null:M._control.id),v(2),fe(!M.hideRequiredMarker&&M._unwrapMaybeSignal(M._control.required)?2:-1)}}function m(J,Ce){if(J&1&&he(0,c,3,5,"label",20),J&2){let M=oe();fe(M._hasFloatingLabel()?0:-1)}}function p(J,Ce){J&1&&le(0,"div",7)}function h(J,Ce){}function _(J,Ce){if(J&1&&Re(0,h,0,0,"ng-template",13),J&2){oe(2);let M=xn(1);B("ngTemplateOutlet",M)}}function D(J,Ce){if(J&1&&(f(0,"div",9),he(1,_,1,1,null,13),g()),J&2){let M=oe();B("matFormFieldNotchedOutlineOpen",M._shouldLabelFloat()),v(),fe(M._forceDisplayInfixLabel()?-1:1)}}function C(J,Ce){J&1&&(f(0,"div",10,2),se(2,2),g())}function w(J,Ce){J&1&&(f(0,"div",11,3),se(2,3),g())}function x(J,Ce){}function S(J,Ce){if(J&1&&Re(0,x,0,0,"ng-template",13),J&2){oe();let M=xn(1);B("ngTemplateOutlet",M)}}function k(J,Ce){J&1&&(f(0,"div",14,4),se(2,4),g())}function I(J,Ce){J&1&&(f(0,"div",15,5),se(2,5),g())}function F(J,Ce){J&1&&le(0,"div",16)}function me(J,Ce){J&1&&(f(0,"div",18),se(1,6),g())}function _e(J,Ce){if(J&1&&(f(0,"mat-hint",22),E(1),g()),J&2){let M=oe(2);B("id",M._hintLabelId),v(),ke(M.hintLabel)}}function Ve(J,Ce){if(J&1&&(f(0,"div",19),he(1,_e,2,2,"mat-hint",22),se(2,7),le(3,"div",23),se(4,8),g()),J&2){let M=oe();v(),fe(M.hintLabel?1:-1)}}return L({type:n,selectors:[["mat-form-field"]],contentQueries:function(Ce,M,De){if(Ce&1&&(dm(De,M._labelChild,$t,5),Vt(De,Ls,5)(De,Ew,5)(De,_g,5)(De,xw,5)(De,kr,5)),Ce&2){Vl();let mt;H(mt=$())&&(M._formFieldControl=mt.first),H(mt=$())&&(M._prefixChildren=mt),H(mt=$())&&(M._suffixChildren=mt),H(mt=$())&&(M._errorChildren=mt),H(mt=$())&&(M._hintChildren=mt)}},viewQuery:function(Ce,M){if(Ce&1&&(cm(M._iconPrefixContainerSignal,e,5)(M._textPrefixContainerSignal,t,5)(M._iconSuffixContainerSignal,a,5)(M._textSuffixContainerSignal,r,5),qe(o,5)(e,5)(t,5)(a,5)(r,5)(hg,5)(bg,5)(gg,5)),Ce&2){Vl(4);let De;H(De=$())&&(M._textField=De.first),H(De=$())&&(M._iconPrefixContainer=De.first),H(De=$())&&(M._textPrefixContainer=De.first),H(De=$())&&(M._iconSuffixContainer=De.first),H(De=$())&&(M._textSuffixContainer=De.first),H(De=$())&&(M._floatingLabel=De.first),H(De=$())&&(M._notchedOutline=De.first),H(De=$())&&(M._lineRipple=De.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(Ce,M){Ce&2&&ee("mat-mdc-form-field-label-always-float",M._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",M._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",M._hasIconSuffix)("mat-form-field-invalid",M._unwrapMaybeSignal(M._control.errorState))("mat-form-field-disabled",M._unwrapMaybeSignal(M._control.disabled))("mat-form-field-autofilled",M._unwrapMaybeSignal(M._control.autofilled))("mat-form-field-appearance-fill",M.appearance=="fill")("mat-form-field-appearance-outline",M.appearance=="outline")("mat-form-field-hide-placeholder",M._hasFloatingLabel()&&!M._shouldLabelFloat())("mat-primary",M.color!=="accent"&&M.color!=="warn")("mat-accent",M.color==="accent")("mat-warn",M.color==="warn")("ng-untouched",M._shouldForward("untouched"))("ng-touched",M._shouldForward("touched"))("ng-pristine",M._shouldForward("pristine"))("ng-dirty",M._shouldForward("dirty"))("ng-valid",M._shouldForward("valid"))("ng-invalid",M._shouldForward("invalid"))("ng-pending",M._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[ve([{provide:Ar,useExisting:n},{provide:Cg,useExisting:n}])],ngContentSelectors:s,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(Ce,M){if(Ce&1&&(je(l),Re(0,m,1,1,"ng-template",null,0,mm),f(2,"div",6,1),ue("click",function(mt){return M._control.onContainerClick(mt)}),he(4,p,1,0,"div",7),f(5,"div",8),he(6,D,2,2,"div",9),he(7,C,3,0,"div",10),he(8,w,3,0,"div",11),f(9,"div",12),he(10,S,1,1,null,13),se(11),g(),he(12,k,3,0,"div",14),he(13,I,3,0,"div",15),g(),he(14,F,1,0,"div",16),g(),f(15,"div",17),he(16,me,2,0,"div",18)(17,Ve,5,1,"div",19),g()),Ce&2){let De,mt=M._unwrapMaybeSignal(M._control.disabled);v(2),ee("mdc-text-field--filled",!M._hasOutline())("mdc-text-field--outlined",M._hasOutline())("mdc-text-field--no-label",!M._hasFloatingLabel())("mdc-text-field--disabled",mt)("mdc-text-field--invalid",M._unwrapMaybeSignal(M._control.errorState)),v(2),fe(!M._hasOutline()&&!mt?4:-1),v(2),fe(M._hasOutline()?6:-1),v(),fe(M._hasIconPrefix?7:-1),v(),fe(M._hasTextPrefix?8:-1),v(2),fe(!M._hasOutline()||M._forceDisplayInfixLabel()?10:-1),v(2),fe(M._hasTextSuffix?12:-1),v(),fe(M._hasIconSuffix?13:-1),v(),fe(M._hasOutline()?-1:14),v(),ee("mat-mdc-form-field-subscript-dynamic-size",M.subscriptSizing==="dynamic");let ny=M._getSubscriptMessageType();v(),fe((De=ny)==="error"?16:De==="hint"?17:-1)}},dependencies:[hg,bg,Wl,gg,kr],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--%NS%mat-form-field-filled-input-text-color, var(--%NS%mat-sys-on-surface));
  caret-color: var(--%NS%mat-form-field-filled-caret-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--%NS%mat-form-field-outlined-input-text-color, var(--%NS%mat-sys-on-surface));
  caret-color: var(--%NS%mat-form-field-outlined-caret-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--%NS%mat-form-field-filled-error-caret-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--%NS%mat-form-field-outlined-error-caret-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--%NS%mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--%NS%mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-filled-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-top-right-radius: var(--%NS%mat-form-field-filled-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) {
  background-color: var(--%NS%mat-form-field-filled-container-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--%NS%mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-focus-label-text-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-hover-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-focus-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-hover-label-text-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--%NS%mat-form-field-filled-label-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-form-field-filled-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-form-field-filled-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-form-field-filled-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-focus-label-text-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-focus-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-hover-label-text-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--%NS%mat-form-field-outlined-label-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-form-field-outlined-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-form-field-outlined-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-form-field-outlined-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--%NS%required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--%NS%required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-outline-color, var(--%NS%mat-sys-outline));
  border-width: var(--%NS%mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-hover-outline-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-focus-outline-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-outline-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-hover-outline-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-focus-outline-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--%NS%mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--%NS%mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--%NS%mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-active-indicator-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-hover-active-indicator-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-active-indicator-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-hover-active-indicator-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--%NS%mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--%NS%mat-form-field-filled-focus-active-indicator-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-focus-active-indicator-color, var(--%NS%mat-sys-error));
}

.mdc-line-ripple--%NS%active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--%NS%deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--%NS%no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --%NS%mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--%NS%mat-form-field-container-height, 56px);
  padding-top: var(--%NS%mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--%NS%mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--%NS%mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--%NS%mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--%NS%mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--%NS%mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --%NS%mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--%NS%mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--%NS%mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--%NS%mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--%NS%mat-form-field-error-text-color, var(--%NS%mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-form-field-subscript-text-font, var(--%NS%mat-sys-body-small-font));
  line-height: var(--%NS%mat-form-field-subscript-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  font-size: var(--%NS%mat-form-field-subscript-text-size, var(--%NS%mat-sys-body-small-size));
  letter-spacing: var(--%NS%mat-form-field-subscript-text-tracking, var(--%NS%mat-sys-body-small-tracking));
  font-weight: var(--%NS%mat-form-field-subscript-text-weight, var(--%NS%mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--%NS%mat-form-field-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--%NS%mat-form-field-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--%NS%mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--%NS%mat-form-field-select-option-text-color, var(--%NS%mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--%NS%mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--%NS%mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--%NS%mat-form-field-enabled-select-arrow-color, var(--%NS%mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-form-field-focus-select-arrow-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --%NS%mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-form-field-container-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-form-field-container-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-form-field-container-text-size, var(--%NS%mat-sys-body-large-size));
  letter-spacing: var(--%NS%mat-form-field-container-text-tracking, var(--%NS%mat-sys-body-large-tracking));
  font-weight: var(--%NS%mat-form-field-container-text-weight, var(--%NS%mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--%NS%mat-form-field-outlined-label-text-populated-size) * var(--%NS%mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--%NS%mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--%NS%mat-form-field-leading-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--%NS%mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-trailing-icon-color, var(--%NS%mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-hover-trailing-icon-color, var(--%NS%mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-focus-trailing-icon-color, var(--%NS%mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--%NS%filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2})})()}return n})();var Gt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=Q({type:n});static \u0275inj=X({imports:[Es,sn,$e]})}return n})();var Iw=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=L({type:n,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(t,a){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2})}return n})(),Nw={passive:!0},wg=(()=>{class n{_platform=d(de);_ngZone=d(P);_renderer=d(Je).createRenderer(null,null);_styleLoader=d(He);_monitoredElements=new Map;monitor(e){if(!this._platform.isBrowser)return Ze;this._styleLoader.load(Iw);let t=gt(e),a=this._monitoredElements.get(t);if(a)return a.subject;let r=new N,o="cdk-text-field-autofilled",l=u=>{u.animationName==="cdk-text-field-autofill-start"&&!t.classList.contains(o)?(t.classList.add(o),this._ngZone.run(()=>r.next({target:u.target,isAutofilled:!0}))):u.animationName==="cdk-text-field-autofill-end"&&t.classList.contains(o)&&(t.classList.remove(o),this._ngZone.run(()=>r.next({target:u.target,isAutofilled:!1})))},s=this._ngZone.runOutsideAngular(()=>(t.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(t,"animationstart",l,Nw)));return this._monitoredElements.set(t,{subject:r,unlisten:s}),r}stopMonitoring(e){let t=gt(e),a=this._monitoredElements.get(t);a&&(a.unlisten(),a.subject.complete(),t.classList.remove("cdk-text-field-autofill-monitored"),t.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(t))}ngOnDestroy(){this._monitoredElements.forEach((e,t)=>this.stopMonitoring(t))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=O({token:n,factory:n.\u0275fac})}return n})();var Dg=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=Q({type:n});static \u0275inj=X({})}return n})();var Bs=new y("MAT_INPUT_VALUE_ACCESSOR");var Sg=(()=>{class n{isErrorState(e,t){return!!(e&&e.invalid&&(e.touched||t&&t.submitted))}isSignalErrorState(e){if(!e)return!1;let t=e().invalid(),a=e().touched();return t&&a}static \u0275fac=function(t){return new(t||n)};static \u0275prov=O({token:n,factory:n.\u0275fac})}return n})();var js=class{_defaultMatcher;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;ngControl;formField;constructor(i,e,t,a,r){this._defaultMatcher=i,this._parentFormGroup=t,this._parentForm=a,this._stateChanges=r,e?Xt(e.field)&&!e.updateValueAndValidity?(this.formField=e,this.ngControl=null):(this.formField=null,this.ngControl=e):this.ngControl=this.formField=null}updateErrorState(){let i=this.errorState,e=this._getCurrentErrorState(this.matcher||this._defaultMatcher);e!==i&&(this.errorState=e,this._stateChanges.next())}_getCurrentErrorState(i){if(this.formField&&i?.isSignalErrorState)return i.isSignalErrorState(this.formField.field())??!1;let e=this._parentFormGroup||this._parentForm,t=this.ngControl?this.ngControl.control:null;return i?.isErrorState(t,e)??!1}};var Tw=["button","checkbox","file","hidden","image","radio","range","reset","submit"],Ow=new y("MAT_INPUT_CONFIG"),jn=(()=>{class n{_elementRef=d(j);_platform=d(de);ngControl=d(Ut,{optional:!0,self:!0});_autofillMonitor=d(wg);_ngZone=d(P);_formField=d(Ar,{optional:!0});_renderer=d(Ie);_uid=d(ct).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=d(Ow,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new N;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=yn(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(xe.required)??!1}set required(e){this._required=yn(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&Hc().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=yn(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>Hc().has(e));constructor(){let e=d(qi,{optional:!0}),t=d(Fn,{optional:!0}),a=d(Sg),r=d(Bs,{optional:!0,self:!0}),o=d(mg,{optional:!0,self:!0}),l=this._elementRef.nativeElement,s=l.nodeName.toLowerCase();r?Xt(r.value)?this._signalBasedValueAccessor=r:this._inputValueAccessor=r:this._inputValueAccessor=l,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(l,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new js(a,o||this.ngControl,t,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=s==="select",this._isTextarea=s==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=l.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&vt(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let t=this._elementRef.nativeElement;t.type==="number"?(t.type="text",t.setSelectionRange(0,0),t.type="number"):t.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let t=this._elementRef.nativeElement;this._previousPlaceholder=e,e?t.setAttribute("placeholder",e):t.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){Tw.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,t=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&t&&t.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let t=e.target;!t.value&&t.selectionStart===0&&t.selectionEnd===0&&(t.setSelectionRange(1,1),t.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(t,a){t&1&&ue("focus",function(){return a._focusChanged(!0)})("blur",function(){return a._focusChanged(!1)})("input",function(){return a._onInput()}),t&2&&(Lt("id",a.id)("disabled",a.disabled&&!a.disabledInteractive)("required",a.required),Se("name",a.name||null)("readonly",a._getReadonlyAttribute())("aria-disabled",a.disabled&&a.disabledInteractive?"true":null)("aria-invalid",a.empty&&a.required?null:a.errorState)("aria-required",a.required)("id",a.id),ee("mat-input-server",a._isServer)("mat-mdc-form-field-textarea-control",a._isInFormField&&a._isTextarea)("mat-mdc-form-field-input-control",a._isInFormField)("mat-mdc-input-disabled-interactive",a.disabledInteractive)("mdc-text-field__input",a._isInFormField)("mat-mdc-native-select-inline",a._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",K]},exportAs:["matInput"],features:[ve([{provide:Ls,useExisting:n}]),Me]})}return n})(),zn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=Q({type:n});static \u0275inj=X({imports:[Gt,Gt,Dg,$e]})}return n})();var Ot=(function(n){return n[n.FADING_IN=0]="FADING_IN",n[n.VISIBLE=1]="VISIBLE",n[n.FADING_OUT=2]="FADING_OUT",n[n.HIDDEN=3]="HIDDEN",n})(Ot||{}),Wc=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=Ot.HIDDEN;constructor(i,e,t,a=!1){this._renderer=i,this.element=e,this.config=t,this._animationForciblyDisabledThroughCss=a}fadeOut(){this._renderer.fadeOutRipple(this)}},xg=Qi({passive:!0,capture:!0}),Yc=class{_events=new Map;addHandler(i,e,t,a){let r=this._events.get(e);if(r){let o=r.get(t);o?o.add(a):r.set(t,new Set([a]))}else this._events.set(e,new Map([[t,new Set([a])]])),i.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,xg)})}removeHandler(i,e,t){let a=this._events.get(i);if(!a)return;let r=a.get(e);r&&(r.delete(t),r.size===0&&a.delete(e),a.size===0&&(this._events.delete(i),document.removeEventListener(i,this._delegateEventHandler,xg)))}_delegateEventHandler=i=>{let e=wt(i);e&&this._events.get(i.type)?.forEach((t,a)=>{(a===e||a.contains(e))&&t.forEach(r=>r.handleEvent(i))})}},Ir={enterDuration:225,exitDuration:150},Fw=800,Eg=Qi({passive:!0,capture:!0}),Mg=["mousedown","touchstart"],Rg=["mouseup","mouseleave","touchend","touchcancel"],Pw=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=L({type:n,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(t,a){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--%NS%mat-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2})}return n})(),Nr=class n{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new Yc;constructor(i,e,t,a,r){this._target=i,this._ngZone=e,this._platform=a,a.isBrowser&&(this._containerElement=gt(t)),r&&r.get(He).load(Pw)}fadeInRipple(i,e,t={}){let a=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),r=b(b({},Ir),t.animation);t.centered&&(i=a.left+a.width/2,e=a.top+a.height/2);let o=t.radius||Lw(i,e,a),l=i-a.left,s=e-a.top,u=r.enterDuration,c=document.createElement("div");c.classList.add("mat-ripple-element"),c.style.left=`${l-o}px`,c.style.top=`${s-o}px`,c.style.height=`${o*2}px`,c.style.width=`${o*2}px`,t.color!=null&&(c.style.backgroundColor=t.color),c.style.transitionDuration=`${u}ms`,this._containerElement.appendChild(c);let m=window.getComputedStyle(c),p=m.transitionProperty,h=m.transitionDuration,_=p==="none"||h==="0s"||h==="0s, 0s"||a.width===0&&a.height===0,D=new Wc(this,c,t,_);c.style.transform="scale3d(1, 1, 1)",D.state=Ot.FADING_IN,t.persistent||(this._mostRecentTransientRipple=D);let C=null;return!_&&(u||r.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let w=()=>{C&&(C.fallbackTimer=null),clearTimeout(S),this._finishRippleTransition(D)},x=()=>this._destroyRipple(D),S=setTimeout(x,u+100);c.addEventListener("transitionend",w),c.addEventListener("transitioncancel",x),C={onTransitionEnd:w,onTransitionCancel:x,fallbackTimer:S}}),this._activeRipples.set(D,C),(_||!u)&&this._finishRippleTransition(D),D}fadeOutRipple(i){if(i.state===Ot.FADING_OUT||i.state===Ot.HIDDEN)return;let e=i.element,t=b(b({},Ir),i.config.animation);e.style.transitionDuration=`${t.exitDuration}ms`,e.style.opacity="0",i.state=Ot.FADING_OUT,(i._animationForciblyDisabledThroughCss||!t.exitDuration)&&this._finishRippleTransition(i)}fadeOutAll(){this._getActiveRipples().forEach(i=>i.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(i=>{i.config.persistent||i.fadeOut()})}setupTriggerEvents(i){let e=gt(i);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,Mg.forEach(t=>{n._eventManager.addHandler(this._ngZone,t,e,this)}))}handleEvent(i){i.type==="mousedown"?this._onMousedown(i):i.type==="touchstart"?this._onTouchStart(i):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Rg.forEach(e=>{this._triggerElement.addEventListener(e,this,Eg)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(i){i.state===Ot.FADING_IN?this._startFadeOutTransition(i):i.state===Ot.FADING_OUT&&this._destroyRipple(i)}_startFadeOutTransition(i){let e=i===this._mostRecentTransientRipple,{persistent:t}=i.config;i.state=Ot.VISIBLE,!t&&(!e||!this._isPointerDown)&&i.fadeOut()}_destroyRipple(i){let e=this._activeRipples.get(i)??null;this._activeRipples.delete(i),this._activeRipples.size||(this._containerRect=null),i===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),i.state=Ot.HIDDEN,e!==null&&(i.element.removeEventListener("transitionend",e.onTransitionEnd),i.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),i.element.remove()}_onMousedown(i){let e=yr(i),t=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+Fw;!this._target.rippleDisabled&&!e&&!t&&(this._isPointerDown=!0,this.fadeInRipple(i.clientX,i.clientY,this._target.rippleConfig))}_onTouchStart(i){if(!this._target.rippleDisabled&&!vr(i)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=i.changedTouches;if(e)for(let t=0;t<e.length;t++)this.fadeInRipple(e[t].clientX,e[t].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(i=>{let e=i.state===Ot.VISIBLE||i.config.terminateOnPointerUp&&i.state===Ot.FADING_IN;!i.config.persistent&&e&&i.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let i=this._triggerElement;i&&(Mg.forEach(e=>n._eventManager.removeHandler(e,i,this)),this._pointerUpEventsRegistered&&(Rg.forEach(e=>i.removeEventListener(e,this,Eg)),this._pointerUpEventsRegistered=!1))}};function Lw(n,i,e){let t=Math.max(Math.abs(n-e.left),Math.abs(n-e.right)),a=Math.max(Math.abs(i-e.top),Math.abs(i-e.bottom));return Math.sqrt(t*t+a*a)}var Us=new y("mat-ripple-global-options"),qc=(()=>{class n{_elementRef=d(j);_animationsDisabled=tt();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=d(P),t=d(de),a=d(Us,{optional:!0}),r=d(re);this._globalOptions=a||{},this._rippleRenderer=new Nr(this,e,this._elementRef,t,r)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:b(b(b({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,t=0,a){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,t,b(b({},this.rippleConfig),a)):this._rippleRenderer.fadeInRipple(0,0,b(b({},this.rippleConfig),e))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(t,a){t&2&&ee("mat-ripple-unbounded",a.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return n})();var Vw={capture:!0},Bw=["focus","mousedown","mouseenter","touchstart"],Kc="mat-ripple-loader-uninitialized",Xc="mat-ripple-loader-class-name",kg="mat-ripple-loader-centered",Hs="mat-ripple-loader-disabled",Ag=(()=>{class n{_document=d(q);_animationsDisabled=tt();_globalRippleOptions=d(Us,{optional:!0});_platform=d(de);_ngZone=d(P);_injector=d(re);_eventCleanups;_hosts=new Map;constructor(){let e=d(Je).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>Bw.map(t=>e.listen(this._document,t,this._onInteraction,Vw)))}ngOnDestroy(){let e=this._hosts.keys();for(let t of e)this.destroyRipple(t);this._eventCleanups.forEach(t=>t())}configureRipple(e,t){e.setAttribute(Kc,this._globalRippleOptions?.namespace??""),(t.className||!e.hasAttribute(Xc))&&e.setAttribute(Xc,t.className||""),t.centered&&e.setAttribute(kg,""),t.disabled&&e.setAttribute(Hs,"")}setDisabled(e,t){let a=this._hosts.get(e);a?(a.target.rippleDisabled=t,!t&&!a.hasSetUpEvents&&(a.hasSetUpEvents=!0,a.renderer.setupTriggerEvents(e))):t?e.setAttribute(Hs,""):e.removeAttribute(Hs)}_onInteraction=e=>{let t=wt(e);if(t instanceof HTMLElement){let a=t.closest(`[${Kc}="${this._globalRippleOptions?.namespace??""}"]`);a&&this._createRipple(a)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let t=this._document.createElement("span");t.classList.add("mat-ripple",e.getAttribute(Xc)),e.append(t);let a=this._globalRippleOptions,r=this._animationsDisabled?0:a?.animation?.enterDuration??Ir.enterDuration,o=this._animationsDisabled?0:a?.animation?.exitDuration??Ir.exitDuration,l={rippleDisabled:this._animationsDisabled||a?.disabled||e.hasAttribute(Hs),rippleConfig:{centered:e.hasAttribute(kg),terminateOnPointerUp:a?.terminateOnPointerUp,animation:{enterDuration:r,exitDuration:o}}},s=new Nr(l,this._ngZone,t,this._platform,this._injector),u=!l.rippleDisabled;u&&s.setupTriggerEvents(e),this._hosts.set(e,{target:l,renderer:s,hasSetUpEvents:u}),e.removeAttribute(Kc)}destroyRipple(e){let t=this._hosts.get(e);t&&(t.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=O({token:n,factory:n.\u0275fac})}return n})();var ra=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=L({type:n,selectors:[["structural-styles"]],decls:0,vars:0,template:function(t,a){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--%NS%mat-focus-indicator-display, none);
  border-width: var(--%NS%mat-focus-indicator-border-width, 3px);
  border-style: var(--%NS%mat-focus-indicator-border-style, solid);
  border-color: var(--%NS%mat-focus-indicator-border-color, transparent);
  border-radius: var(--%NS%mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --%NS%mat-focus-indicator-display: block;
    --%NS%mat-focus-indicator-fallback-border-style: none;
  }
}
`],encapsulation:2})}return n})();var jw=new y("MAT_BUTTON_CONFIG");function Ig(n){return n==null?void 0:Mi(n)}var Zc=(()=>{class n{_elementRef=d(j);_ngZone=d(P);_animationsDisabled=tt();_config=d(jw,{optional:!0});_focusMonitor=d(fi);_cleanupClick;_renderer=d(Ie);_rippleLoader=d(Ag);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}showProgress=Ei(!1,{transform:K});constructor(){d(He).load(ra);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",t){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,t):this._elementRef.nativeElement.focus(t)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n,hostAttrs:[1,"mat-mdc-button-base"],hostVars:15,hostBindings:function(t,a){t&2&&(Se("disabled",a._getDisabledAttribute())("aria-disabled",a._getAriaDisabled())("tabindex",a._getTabIndex()),At(a.color?"mat-"+a.color:""),ee("mat-mdc-button-progress-indicator-shown",a.showProgress())("mat-mdc-button-disabled",a.disabled)("mat-mdc-button-disabled-interactive",a.disabledInteractive)("mat-unthemed",!a.color)("_mat-animation-noopable",a._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",K],disabled:[2,"disabled","disabled",K],ariaDisabled:[2,"aria-disabled","ariaDisabled",K],disabledInteractive:[2,"disabledInteractive","disabledInteractive",K],tabIndex:[2,"tabIndex","tabIndex",Ig],_tabindex:[2,"tabindex","_tabindex",Ig],showProgress:[1,"showProgress"]}})}return n})(),$s=(()=>{class n extends Zc{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=(function(){let e=["*",[["","progressIndicator",""]]],t=["*","[progressIndicator]"];function a(r,o){r&1&&(Le(0,"div",1),se(1,1),Be())}return L({type:n,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[ie],ngContentSelectors:t,decls:5,vars:1,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-mdc-button-progress-indicator-container"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(o,l){o&1&&(je(e),kt(0,"span",0),se(1),he(2,a,2,0,"div",1),kt(3,"span",2)(4,"span",3)),o&2&&(v(2),fe(l.showProgress()?2:-1))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--%NS%mat-icon-button-container-shape, var(--%NS%mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--%NS%mat-icon-button-state-layer-size, 40px);
  height: var(--%NS%mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--%NS%mat-icon-button-state-layer-size, 40px) - var(--%NS%mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--%NS%mat-icon-button-icon-size, 24px);
  color: var(--%NS%mat-icon-button-icon-color, var(--%NS%mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--%NS%mat-icon-button-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface-variant) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-icon-button-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-icon-button-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-icon-button-touch-target-size, 48px);
  display: var(--%NS%mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--%NS%mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--%NS%mat-icon-button-icon-size, 24px);
  height: var(--%NS%mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-progress-indicator-container .mdc-circular-progress__determinate-circle-graphic {
  width: inherit;
  height: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-progress-indicator-container .mdc-circular-progress__indeterminate-circle-graphic {
  height: 100%;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--%NS%mat-icon-button-container-shape, var(--%NS%mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})})()}return n})();var Ng=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=Q({type:n});static \u0275inj=X({imports:[$e]})}return n})();var Tg=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),vn=(()=>{class n extends Zc{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=zw(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let t=this._elementRef.nativeElement.classList,a=this._appearance?Tg.get(this._appearance):null,r=Tg.get(e);a&&t.remove(...a),t.add(...r),this._appearance=e}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=(function(){let e=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""],["",8,"material-symbols-outlined",3,"iconPositionEnd",""],["",8,"material-symbols-rounded",3,"iconPositionEnd",""],["",8,"material-symbols-sharp",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""],["","iconPositionEnd","",8,"material-symbols-outlined"],["","iconPositionEnd","",8,"material-symbols-rounded"],["","iconPositionEnd","",8,"material-symbols-sharp"]],[["","progressIndicator",""]]],t=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd]), .material-symbols-outlined:not([iconPositionEnd]), .material-symbols-rounded:not([iconPositionEnd]), .material-symbols-sharp:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd], .material-symbols-outlined[iconPositionEnd], .material-symbols-rounded[iconPositionEnd], .material-symbols-sharp[iconPositionEnd]","[progressIndicator]"];function a(r,o){r&1&&(Le(0,"div",2),se(1,3),Be())}return L({type:n,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[ie],ngContentSelectors:t,decls:8,vars:5,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-mdc-button-progress-indicator-container"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(o,l){o&1&&(je(e),kt(0,"span",0),se(1),Le(2,"span",1),se(3,1),Be(),se(4,2),he(5,a,2,0,"div",2),kt(6,"span",3)(7,"span",4)),o&2&&(ee("mdc-button__ripple",!l._isFab)("mdc-fab__ripple",l._isFab),v(5),fe(l.showProgress()?5:-1))},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--%NS%mat-button-text-horizontal-padding, 12px);
  height: var(--%NS%mat-button-text-container-height, 40px);
  font-family: var(--%NS%mat-button-text-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-text-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-text-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-text-label-text-transform);
  font-weight: var(--%NS%mat-button-text-label-text-weight, var(--%NS%mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-text-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--%NS%mat-button-text-label-text-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, .material-symbols-outlined, .material-symbols-rounded,
.material-symbols-sharp, mat-icon, [matButtonIcon]) {
  padding: 0 var(--%NS%mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-offset, -4px);
  margin-left: var(--%NS%mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-offset, -4px);
  margin-left: var(--%NS%mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-text-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-text-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-text-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-text-touch-target-size, 48px);
  display: var(--%NS%mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-filled-container-height, 40px);
  font-family: var(--%NS%mat-button-filled-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-filled-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-filled-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-filled-label-text-transform);
  font-weight: var(--%NS%mat-button-filled-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-filled-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-filled-state-layer-color, var(--%NS%mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-filled-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-filled-touch-target-size, 48px);
  display: var(--%NS%mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--%NS%mat-button-filled-label-text-color, var(--%NS%mat-sys-on-primary));
  background-color: var(--%NS%mat-button-filled-container-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-filled-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-unelevated-button .mat-mdc-button-progress-indicator-container {
  --%NS%mat-progress-spinner-active-indicator-color: var(--%NS%mat-button-filled-progress-active-indicator-color, var(--%NS%mat-sys-on-primary));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-filled-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--%NS%mat-button-protected-container-elevation-shadow, var(--%NS%mat-sys-level1));
  height: var(--%NS%mat-button-protected-container-height, 40px);
  font-family: var(--%NS%mat-button-protected-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-protected-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-protected-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-protected-label-text-transform);
  font-weight: var(--%NS%mat-button-protected-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-protected-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-protected-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-protected-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-protected-touch-target-size, 48px);
  display: var(--%NS%mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--%NS%mat-button-protected-label-text-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-button-protected-container-color, var(--%NS%mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-protected-container-shape, var(--%NS%mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--%NS%mat-button-protected-hover-container-elevation-shadow, var(--%NS%mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--%NS%mat-button-protected-focus-container-elevation-shadow, var(--%NS%mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--%NS%mat-button-protected-pressed-container-elevation-shadow, var(--%NS%mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-protected-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--%NS%mat-button-protected-disabled-container-elevation-shadow, var(--%NS%mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-outlined-container-height, 40px);
  font-family: var(--%NS%mat-button-outlined-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-outlined-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-outlined-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-outlined-label-text-transform);
  font-weight: var(--%NS%mat-button-outlined-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  border-radius: var(--%NS%mat-button-outlined-container-shape, var(--%NS%mat-sys-corner-full));
  border-width: var(--%NS%mat-button-outlined-outline-width, 1px);
  padding: 0 var(--%NS%mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-outlined-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-outlined-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-outlined-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-outlined-touch-target-size, 48px);
  display: var(--%NS%mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--%NS%mat-button-outlined-label-text-color, var(--%NS%mat-sys-primary));
  border-color: var(--%NS%mat-button-outlined-outline-color, var(--%NS%mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: var(--%NS%mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-tonal-container-height, 40px);
  font-family: var(--%NS%mat-button-tonal-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-tonal-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-tonal-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-tonal-label-text-transform);
  font-weight: var(--%NS%mat-button-tonal-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--%NS%mat-button-tonal-label-text-color, var(--%NS%mat-sys-on-secondary-container));
  background-color: var(--%NS%mat-button-tonal-container-color, var(--%NS%mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-tonal-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-tonal-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-secondary-container) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-tonal-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-tonal-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-tonal-touch-target-size, 48px);
  display: var(--%NS%mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 3px) * -1);
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon,
.mat-mdc-button-progress-indicator-shown [matButtonIcon],
.mat-mdc-button-progress-indicator-shown .mdc-button__label {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})})()}return n})();function zw(n){return n.hasAttribute("mat-raised-button")?"elevated":n.hasAttribute("mat-stroked-button")?"outlined":n.hasAttribute("mat-flat-button")?"filled":n.hasAttribute("mat-button")?"text":null}var Un=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=Q({type:n});static \u0275inj=X({imports:[Ng,$e]})}return n})();var Uw=new y("MAT_CARD_CONFIG"),oa=(()=>{class n{appearance;constructor(){let e=d(Uw,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=(function(){return L({type:n,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(a,r){a&2&&ee("mat-mdc-card-outlined",r.appearance==="outlined")("mdc-card--outlined",r.appearance==="outlined")("mat-mdc-card-filled",r.appearance==="filled")("mdc-card--filled",r.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:["*"],decls:1,vars:0,template:function(a,r){a&1&&(je(),se(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--%NS%mat-card-elevated-container-color, var(--%NS%mat-sys-surface-container-low));
  border-color: var(--%NS%mat-card-elevated-container-color, var(--%NS%mat-sys-surface-container-low));
  border-radius: var(--%NS%mat-card-elevated-container-shape, var(--%NS%mat-sys-corner-medium));
  box-shadow: var(--%NS%mat-card-elevated-container-elevation, var(--%NS%mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--%NS%mat-card-elevated-container-shape, var(--%NS%mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--%NS%mat-card-outlined-container-color, var(--%NS%mat-sys-surface));
  border-radius: var(--%NS%mat-card-outlined-container-shape, var(--%NS%mat-sys-corner-medium));
  border-width: var(--%NS%mat-card-outlined-outline-width, 1px);
  border-color: var(--%NS%mat-card-outlined-outline-color, var(--%NS%mat-sys-outline-variant));
  box-shadow: var(--%NS%mat-card-outlined-container-elevation, var(--%NS%mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--%NS%mat-card-filled-container-color, var(--%NS%mat-sys-surface-container-highest));
  border-radius: var(--%NS%mat-card-filled-container-shape, var(--%NS%mat-sys-corner-medium));
  box-shadow: var(--%NS%mat-card-filled-container-elevation, var(--%NS%mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--%NS%mat-card-title-text-font, var(--%NS%mat-sys-title-large-font));
  line-height: var(--%NS%mat-card-title-text-line-height, var(--%NS%mat-sys-title-large-line-height));
  font-size: var(--%NS%mat-card-title-text-size, var(--%NS%mat-sys-title-large-size));
  letter-spacing: var(--%NS%mat-card-title-text-tracking, var(--%NS%mat-sys-title-large-tracking));
  font-weight: var(--%NS%mat-card-title-text-weight, var(--%NS%mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--%NS%mat-card-subtitle-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-card-subtitle-text-font, var(--%NS%mat-sys-title-medium-font));
  line-height: var(--%NS%mat-card-subtitle-text-line-height, var(--%NS%mat-sys-title-medium-line-height));
  font-size: var(--%NS%mat-card-subtitle-text-size, var(--%NS%mat-sys-title-medium-size));
  letter-spacing: var(--%NS%mat-card-subtitle-text-tracking, var(--%NS%mat-sys-title-medium-tracking));
  font-weight: var(--%NS%mat-card-subtitle-text-weight, var(--%NS%mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2})})()}return n})(),Og=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return n})();var Fg=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return n})();var Pg=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=(function(){let e=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"];return L({type:n,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(r,o){r&1&&(je(e),se(0),Le(1,"div",0),se(2,1),Be(),se(3,2))},encapsulation:2})})()}return n})();var sa=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=Q({type:n});static \u0275inj=X({imports:[$e]})}return n})();var la=class n{isLoggedIn=0;reirectUrl=null;login(){return V(!0).pipe($u(2e3),pt(()=>this.isLoggedIn=!0))}logOut(){this.isLoggedIn=!1}static \u0275fac=function(e){return new(e||n)};static \u0275prov=U({token:n,factory:n.\u0275fac,providedIn:"root"})};var Gs=class n{constructor(i,e){this.authService=i;this.router=e}authService;router;loginForm;ngOnInit(){this.loginForm=new rn({username:new St("",[xe.required]),password:new St("",[xe.required])})}onClickLogin(){this.loginForm.valid&&console.log("Form submitted with:",this.loginForm.value),this.authService.login().subscribe(()=>{if(this.authService.isLoggedIn){let i="/dashboard",e={queryParamsHandling:"preserve",preserveFragment:!0};this.router.navigate([i],e)}})}static \u0275fac=function(e){return new(e||n)(pe(la),pe(tn))};static \u0275cmp=L({type:n,selectors:[["app-login"]],decls:33,vars:2,consts:[[1,"container"],[1,"container__login-box"],[2,"display","flex","flex-direction","column","align-items","center"],["src","./assets/ngrx.svg",2,"height","240px","border-radius","50%","padding","16px"],["src","./assets/JSGigsDarkLogo.png",2,"height","120px","border-radius","50%","padding","16px"],[3,"formGroup"],[1,"full-width"],["matInput","","type","text","formControlName","username"],["matInput","","type","password","formControlName","password"],["mat-raised-button","","color","primary",3,"click","disabled"]],template:function(e,t){e&1&&(f(0,"div",0)(1,"div",1)(2,"div",1)(3,"div",2),le(4,"img",3),f(5,"h2"),E(6,"Learn NGRX 18.x"),g(),f(7,"p"),E(8,"With JSGigs and Deepak"),g(),f(9,"p"),E(10,"Here you will learn best practices to implement RxJS 17.x"),g(),f(11,"p"),E(12,"and best practices around NGRX and Angular 17"),g(),f(13,"p"),E(14,"and Angular Material with Material UI"),g()(),f(15,"div")(16,"mat-card"),le(17,"img",4),f(18,"h2"),E(19,"Login"),g(),f(20,"form",5),E(21," Username "),f(22,"mat-form-field",6)(23,"mat-label"),E(24,"Username"),g(),f(25,"input",7),Fe(),g()(),E(26," Password "),f(27,"mat-form-field",6)(28,"mat-label"),E(29,"Password"),g(),f(30,"input",8),Fe(),g()()(),f(31,"button",9),ue("click",function(){return t.onClickLogin()}),E(32,"Login"),g()()()()()()),e&2&&(v(20),B("formGroup",t.loginForm),v(5),Pe(),v(5),Pe(),v(),B("disabled",!t.loginForm.valid))},dependencies:[Gt,sn,$t,zn,jn,Un,vn,sa,oa,Xi,Ki,on,On,Yi,Pn,Fn,br],encapsulation:2})};var Or=class{_attachedHost=null;attach(i){return this._attachedHost=i,i.attach(this)}detach(){let i=this._attachedHost;i!=null&&(this._attachedHost=null,i.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(i){this._attachedHost=i}},Hn=class extends Or{component;viewContainerRef;injector;projectableNodes;bindings;directives;constructor(i,e,t,a,r,o){super(),this.component=i,this.viewContainerRef=e,this.injector=t,this.projectableNodes=a,this.bindings=r||null,this.directives=o||null}},$n=class extends Or{templateRef;viewContainerRef;context;injector;constructor(i,e,t,a){super(),this.templateRef=i,this.viewContainerRef=e,this.context=t,this.injector=a}get origin(){return this.templateRef.elementRef}attach(i,e=this.context){return this.context=e,super.attach(i)}detach(){return this.context=void 0,super.detach()}},eu=class extends Or{element;constructor(i){super(),this.element=i instanceof j?i.nativeElement:i}},Ws=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(i){if(i instanceof Hn)return this._attachedPortal=i,this.attachComponentPortal(i);if(i instanceof $n)return this._attachedPortal=i,this.attachTemplatePortal(i);if(this.attachDomPortal&&i instanceof eu)return this._attachedPortal=i,this.attachDomPortal(i)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(i){this._disposeFn=i}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},Ys=class extends Ws{outletElement;_appRef;_defaultInjector;constructor(i,e,t){super(),this.outletElement=i,this._appRef=e,this._defaultInjector=t}attachComponentPortal(i){let e;if(i.viewContainerRef){let t=i.injector||i.viewContainerRef.injector,a=t.get(Jr,null,{optional:!0})||void 0;e=i.viewContainerRef.createComponent(i.component,{index:i.viewContainerRef.length,injector:t,ngModuleRef:a,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0,directives:i.directives||void 0}),this.setDisposeFn(()=>e.destroy())}else{let t=this._appRef,a=i.injector||this._defaultInjector||re.NULL,r=a.get(rt,t.injector);e=oo(i.component,{elementInjector:a,environmentInjector:r,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0,directives:i.directives||void 0}),t.attachView(e.hostView),this.setDisposeFn(()=>{t.viewCount>0&&t.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=i,e}attachTemplatePortal(i){let e=i.viewContainerRef,t=e.createEmbeddedView(i.templateRef,i.context,{injector:i.injector});return t.rootNodes.forEach(a=>this.outletElement.appendChild(a)),t.detectChanges(),this.setDisposeFn(()=>{let a=e.indexOf(t);a!==-1&&e.remove(a)}),this._attachedPortal=i,t}attachDomPortal=i=>{let e=i.element;e.parentNode;let t=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(t,e),this.outletElement.appendChild(e),this._attachedPortal=i,super.setDisposeFn(()=>{t.parentNode&&t.parentNode.replaceChild(e,t)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(i){return i.hostView.rootNodes[0]}},Lg=(()=>{class n extends $n{constructor(){let e=d(ot),t=d(Ue);super(e,t)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n,selectors:[["","cdkPortal",""]],exportAs:["cdkPortal"],features:[ie]})}return n})(),da=(()=>{class n extends Ws{_moduleRef=d(Jr,{optional:!0});_document=d(q);_viewContainerRef=d(Ue);_isInitialized=!1;_attachedRef=null;get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new T;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let t=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,a=t.createComponent(e.component,{index:t.length,injector:e.injector||t.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0,directives:e.directives||void 0});return t!==this._viewContainerRef&&this._getRootNode().appendChild(a.hostView.rootNodes[0]),super.setDisposeFn(()=>a.destroy()),this._attachedPortal=e,this._attachedRef=a,this.attached.emit(a),a}attachTemplatePortal(e){e.setAttachedHost(this);let t=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=t,this.attached.emit(t),t}attachDomPortal=e=>{let t=e.element;t.parentNode;let a=this._document.createComment("dom-portal");e.setAttachedHost(this),t.parentNode.insertBefore(a,t),this._getRootNode().appendChild(t),this._attachedPortal=e,super.setDisposeFn(()=>{a.parentNode&&a.parentNode.replaceChild(t,a)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static \u0275fac=(()=>{let e;return function(a){return(e||(e=ye(n)))(a||n)}})();static \u0275dir=R({type:n,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[ie]})}return n})(),qs=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=Q({type:n});static \u0275inj=X({})}return n})();function Ks(n){return n&&typeof n.connect=="function"&&!(n instanceof Pu)}var Wt=(function(n){return n[n.REPLACED=0]="REPLACED",n[n.INSERTED=1]="INSERTED",n[n.MOVED=2]="MOVED",n[n.REMOVED=3]="REMOVED",n})(Wt||{}),Xs=class{viewCacheSize=20;_viewCache=[];applyChanges(i,e,t,a,r){i.forEachOperation((o,l,s)=>{let u,c;if(o.previousIndex==null){let m=()=>t(o,l,s);u=this._insertView(m,s,e,a(o)),c=u?Wt.INSERTED:Wt.REPLACED}else s==null?(this._detachAndCacheView(l,e),c=Wt.REMOVED):(u=this._moveView(l,s,e,a(o)),c=Wt.MOVED);r&&r({context:u?.context,operation:c,record:o})})}detach(){for(let i of this._viewCache)i.destroy();this._viewCache=[]}_insertView(i,e,t,a){let r=this._insertViewFromCache(e,t);if(r){r.context.$implicit=a;return}let o=i();return t.createEmbeddedView(o.templateRef,o.context,o.index)}_detachAndCacheView(i,e){let t=e.detach(i);this._maybeCacheView(t,e)}_moveView(i,e,t,a){let r=t.get(i);return t.move(r,e),r.context.$implicit=a,r}_maybeCacheView(i,e){if(this._viewCache.length<this.viewCacheSize)this._viewCache.push(i);else{let t=e.indexOf(i);t===-1?i.destroy():e.remove(t)}}_insertViewFromCache(i,e){let t=this._viewCache.pop();return t&&e.insert(t,i),t||null}};var $w=20,yi=(()=>{class n{_ngZone=d(P);_platform=d(de);_renderer=d(Je).createRenderer(null,null);_cleanupGlobalListener;_scrolled=new N;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let t=this.scrollContainers.get(e);t&&(t.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=$w){return this._platform.isBrowser?new Oe(t=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let a=e>0?this._scrolled.pipe(Ca(e)).subscribe(t):this._scrolled.subscribe(t);return this._scrolledCount++,()=>{a.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):V()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,t)=>this.deregister(t)),this._scrolled.complete()}ancestorScrolled(e,t){let a=this.getAncestorScrollContainers(e);return this.scrolled(t).pipe(be(r=>!r||a.indexOf(r)>-1))}getAncestorScrollContainers(e){let t=[];return this.scrollContainers.forEach((a,r)=>{this._targetContainsElement(r,e)&&t.push(r)}),t}_targetContainsElement(e,t){let a=gt(t),r=e.getElementRef().nativeElement;do if(a==r)return!0;while(a=a.parentElement);return!1}static \u0275fac=function(t){return new(t||n)};static \u0275prov=O({token:n,factory:n.\u0275fac})}return n})(),tu=(()=>{class n{elementRef=d(j);scrollDispatcher=d(yi);ngZone=d(P);dir=d(Xe,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new N;_renderer=d(Ie);_cleanupScroll;_elementScrolled=new N;ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let t=this.elementRef.nativeElement,a=this.dir&&this.dir.value=="rtl";e.left==null&&(e.left=a?e.end:e.start),e.right==null&&(e.right=a?e.start:e.end),e.bottom!=null&&(e.top=t.scrollHeight-t.clientHeight-e.bottom),a&&ia()!=Ht.NORMAL?(e.left!=null&&(e.right=t.scrollWidth-t.clientWidth-e.left),ia()==Ht.INVERTED?e.left=e.right:ia()==Ht.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=t.scrollWidth-t.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let t=this.elementRef.nativeElement;Os()?t.scrollTo(e):(e.top!=null&&(t.scrollTop=e.top),e.left!=null&&(t.scrollLeft=e.left))}measureScrollOffset(e){let t="left",a="right",r=this.elementRef.nativeElement;if(e=="top")return r.scrollTop;if(e=="bottom")return r.scrollHeight-r.clientHeight-r.scrollTop;let o=this.dir&&this.dir.value=="rtl";return e=="start"?e=o?a:t:e=="end"&&(e=o?t:a),o&&ia()==Ht.INVERTED?e==t?r.scrollWidth-r.clientWidth-r.scrollLeft:r.scrollLeft:o&&ia()==Ht.NEGATED?e==t?r.scrollLeft+r.scrollWidth-r.clientWidth:-r.scrollLeft:e==t?r.scrollLeft:r.scrollWidth-r.clientWidth-r.scrollLeft}static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return n})(),Gw=20,ln=(()=>{class n{_platform=d(de);_listeners;_viewportSize=null;_change=new N;_document=d(q);constructor(){let e=d(P),t=d(Je).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let a=r=>this._change.next(r);this._listeners=[t.listen("window","resize",a),t.listen("window","orientationchange",a)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:t,height:a}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+a,right:e.left+t,height:a,width:t}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,t=this._getWindow(),a=e.documentElement,r=a.getBoundingClientRect(),o=-r.top||e.body?.scrollTop||t.scrollY||a.scrollTop||0,l=-r.left||e.body?.scrollLeft||t.scrollX||a.scrollLeft||0;return{top:o,left:l}}change(e=Gw){return e>0?this._change.pipe(Ca(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(t){return new(t||n)};static \u0275prov=O({token:n,factory:n.\u0275fac})}return n})();var Vg=new y("CDK_VIRTUAL_SCROLL_VIEWPORT");var Fr=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=Q({type:n});static \u0275inj=X({})}return n})(),Pr=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=Q({type:n});static \u0275inj=X({imports:[$e,Fr,$e,Fr]})}return n})();var Ww=new y("MatTabContent"),Yw=(()=>{class n{template=d(ot);static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n,selectors:[["","matTabContent",""]],features:[ve([{provide:Ww,useExisting:n}])]})}return n})(),qw=new y("MatTabLabel"),Ug=new y("MAT_TAB"),Kw=(()=>{class n extends Lg{_closestTab=d(Ug,{optional:!0});static \u0275fac=(()=>{let e;return function(a){return(e||(e=ye(n)))(a||n)}})();static \u0275dir=R({type:n,selectors:[["","mat-tab-label",""],["","matTabLabel",""]],features:[ve([{provide:qw,useExisting:n}]),ie]})}return n})(),Hg=new y("MAT_TAB_GROUP"),su=(()=>{class n{_viewContainerRef=d(Ue);_closestTabGroup=d(Hg,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(e){this._setTemplateLabelInput(e)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel="";ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new N;position=null;origin=null;isActive=!1;constructor(){d(He).load(ra)}ngOnChanges(e){(Object.hasOwn(e,"textLabel")||Object.hasOwn(e,"disabled"))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new $n(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(e){e&&e._closestTab===this&&(this._templateLabel=e)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=(function(){let e=["*"];function t(a,r){a&1&&se(0)}return L({type:n,selectors:[["mat-tab"]],contentQueries:function(r,o,l){if(r&1&&Vt(l,Kw,5)(l,Yw,7,ot),r&2){let s;H(s=$())&&(o.templateLabel=s.first),H(s=$())&&(o._explicitContent=s.first)}},viewQuery:function(r,o){if(r&1&&qe(ot,7),r&2){let l;H(l=$())&&(o._implicitContent=l.first)}},hostAttrs:["hidden",""],hostVars:1,hostBindings:function(r,o){r&2&&Se("id",null)},inputs:{disabled:[2,"disabled","disabled",K],textLabel:[0,"label","textLabel"],ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],labelClass:"labelClass",bodyClass:"bodyClass",id:"id"},exportAs:["matTab"],features:[ve([{provide:Ug,useExisting:n}]),Me],ngContentSelectors:e,decls:1,vars:0,template:function(r,o){r&1&&(je(),Pl(0,t,1,0,"ng-template"))},encapsulation:2,changeDetection:1})})()}return n})(),nu="mdc-tab-indicator--active",Bg="mdc-tab-indicator--no-transition",au=class{_items;_currentItem;constructor(i){this._items=i}hide(){this._items.forEach(i=>i.deactivateInkBar()),this._currentItem=void 0}alignToElement(i){let e=this._items.find(a=>a.elementRef.nativeElement===i),t=this._currentItem;if(e!==t&&(t?.deactivateInkBar(),e)){let a=t?.elementRef.nativeElement.getBoundingClientRect?.();e.activateInkBar(a),this._currentItem=e}}},Xw=(()=>{class n{_elementRef=d(j);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(e){this._fitToContent!==e&&(this._fitToContent=e,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(e){let t=this._elementRef.nativeElement;if(!e||!t.getBoundingClientRect||!this._inkBarContentElement){t.classList.add(nu);return}let a=t.getBoundingClientRect(),r=e.width/a.width,o=e.left-a.left;t.classList.add(Bg),this._inkBarContentElement.style.setProperty("transform",`translateX(${o}px) scaleX(${r})`),t.getBoundingClientRect(),t.classList.remove(Bg),t.classList.add(nu),this._inkBarContentElement.style.setProperty("transform","")}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(nu)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let e=this._elementRef.nativeElement.ownerDocument||document,t=this._inkBarElement=e.createElement("span"),a=this._inkBarContentElement=e.createElement("span");t.className="mdc-tab-indicator",a.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",t.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;let e=this._fitToContent?this._elementRef.nativeElement.querySelector(".mdc-tab__content"):this._elementRef.nativeElement;e.appendChild(this._inkBarElement)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n,inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",K]}})}return n})();var $g=(()=>{class n extends Xw{elementRef=d(j);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static \u0275fac=(()=>{let e;return function(a){return(e||(e=ye(n)))(a||n)}})();static \u0275dir=R({type:n,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(t,a){t&2&&(Se("aria-disabled",!!a.disabled),ee("mat-mdc-tab-disabled",a.disabled))},inputs:{disabled:[2,"disabled","disabled",K]},features:[ie]})}return n})(),jg={passive:!0},Zw=650,Qw=100;function iu(n){let i=n+"";return/^[0-9]+(?:\.[0-9]+)?$/.test(i)?`${n}ms`:/^[0-9]+(?:\.[0-9]+)?(?:ms|s)$/.test(i)?i:""}var Jw=(()=>{class n{_elementRef=d(j);_changeDetectorRef=d(Ae);_viewportRuler=d(ln);_dir=d(Xe,{optional:!0});_ngZone=d(P);_platform=d(de);_sharedResizeObserver=d(Fs);_injector=d(re);_renderer=d(Ie);_animationsDisabled=tt();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new N;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new N;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){let t=isNaN(e)?0:e;this._selectedIndex!=t&&(this._selectedIndexChanged=!0,this._selectedIndex=t,this._keyManager&&this._keyManager.updateActiveItem(t))}_selectedIndex=0;selectFocusedIndex=new T;indexFocused=new T;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,"mouseleave",()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("before"),jg),this._renderer.listen(this._nextPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("after"),jg))}ngAfterContentInit(){let e=this._dir?this._dir.change:V("ltr"),t=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(Kt(32),ce(this._destroyed)),a=this._viewportRuler.change(150).pipe(ce(this._destroyed)),r=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new Mr(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),Ne(r,{injector:this._injector}),at(e,a,t,this._items.changes,this._itemsResized()).pipe(ce(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),r()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(o=>{this.indexFocused.emit(o),this._setTabFocus(o)})}_itemsResized(){return typeof ResizeObserver!="function"?Ze:this._items.changes.pipe(nt(this._items),Qe(e=>new Oe(t=>this._ngZone.runOutsideAngular(()=>{let a=new ResizeObserver(r=>t.next(r));return e.forEach(r=>a.observe(r.elementRef.nativeElement)),()=>{a.disconnect()}}))),wn(1),be(e=>e.some(t=>t.contentRect.width>0&&t.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(e){if(!xt(e))switch(e.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let t=this._items.get(this.focusIndex);t&&!t.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(e))}break;default:this._keyManager?.onKeydown(e)}}_onContentChanges(){let e=this._elementRef.nativeElement.textContent;e!==this._currentTextContent&&(this._currentTextContent=e||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(e){!this._isValidIndex(e)||this.focusIndex===e||!this._keyManager||this._keyManager.setActiveItem(e)}_isValidIndex(e){return this._items?!!this._items.toArray()[e]:!0}_setTabFocus(e){if(this._showPaginationControls&&this._scrollToLabel(e),this._items&&this._items.length){this._items.toArray()[e].focus();let t=this._tabListContainer.nativeElement;this._getLayoutDirection()=="ltr"?t.scrollLeft=0:t.scrollLeft=t.scrollWidth-t.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;let e=this.scrollDistance,t=this._getLayoutDirection()==="ltr"?-e:e;this._tabList.nativeElement.style.transform=`translateX(${Math.round(t)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(e){this._scrollTo(e)}_scrollHeader(e){let t=this._tabListContainer.nativeElement.offsetWidth,a=(e=="before"?-1:1)*t/3;return this._scrollTo(this._scrollDistance+a)}_handlePaginatorClick(e){this._stopInterval(),this._scrollHeader(e)}_scrollToLabel(e){if(this.disablePagination)return;let t=this._items?this._items.toArray()[e]:null;if(!t)return;let a=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:r,offsetWidth:o}=t.elementRef.nativeElement,l,s;this._getLayoutDirection()=="ltr"?(l=r,s=l+o):(s=this._tabListInner.nativeElement.offsetWidth-r,l=s-o);let u=this.scrollDistance,c=this.scrollDistance+a;l<u?this.scrollDistance-=u-l:s>c&&(this.scrollDistance+=Math.min(s-c,l-u))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let e=this._tabListInner.nativeElement.scrollWidth,t=this._elementRef.nativeElement.offsetWidth,a=e-t>=5;a||(this.scrollDistance=0),a!==this._showPaginationControls&&(this._showPaginationControls=a,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){let e=this._tabListInner.nativeElement.scrollWidth,t=this._tabListContainer.nativeElement.offsetWidth;return e-t||0}_alignInkBarToSelectedTab(){let e=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,t=e?e.elementRef.nativeElement:null;t?this._inkBar.alignToElement(t):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(e,t){t&&t.button!=null&&t.button!==0||(this._stopInterval(),Uu(Zw,Qw).pipe(ce(at(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:a,distance:r}=this._scrollHeader(e);(r===0||r>=a)&&this._stopInterval()}))}_scrollTo(e){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let t=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(t,e)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:t,distance:this._scrollDistance}}static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n,inputs:{disablePagination:[2,"disablePagination","disablePagination",K],selectedIndex:[2,"selectedIndex","selectedIndex",Mi]},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}})}return n})(),eD=(()=>{class n extends Jw{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new au(this._items),super.ngAfterContentInit()}_itemSelected(e){e.preventDefault()}static \u0275fac=(()=>{let e;return function(a){return(e||(e=ye(n)))(a||n)}})();static \u0275cmp=(function(){let e=["tabListContainer"],t=["tabList"],a=["tabListInner"],r=["nextPaginator"],o=["previousPaginator"];return L({type:n,selectors:[["mat-tab-header"]],contentQueries:function(u,c,m){if(u&1&&Vt(m,$g,4),u&2){let p;H(p=$())&&(c._items=p)}},viewQuery:function(u,c){if(u&1&&qe(e,7)(t,7)(a,7)(r,5)(o,5),u&2){let m;H(m=$())&&(c._tabListContainer=m.first),H(m=$())&&(c._tabList=m.first),H(m=$())&&(c._tabListInner=m.first),H(m=$())&&(c._nextPaginator=m.first),H(m=$())&&(c._previousPaginator=m.first)}},hostAttrs:[1,"mat-mdc-tab-header"],hostVars:4,hostBindings:function(u,c){u&2&&ee("mat-mdc-tab-header-pagination-controls-enabled",c._showPaginationControls)("mat-mdc-tab-header-rtl",c._getLayoutDirection()=="rtl")},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],disableRipple:[2,"disableRipple","disableRipple",K]},features:[ie],ngContentSelectors:["*"],decls:13,vars:10,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-label-container",3,"keydown"],["role","tablist",1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-labels"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(u,c){u&1&&(je(),f(0,"div",5,0),ue("click",function(){return c._handlePaginatorClick("before")})("mousedown",function(p){return c._handlePaginatorPress("before",p)})("touchend",function(){return c._stopInterval()}),le(2,"div",6),g(),f(3,"div",7,1),ue("keydown",function(p){return c._handleKeydown(p)}),f(5,"div",8,2),ue("cdkObserveContent",function(){return c._onContentChanges()}),f(7,"div",9,3),se(9),g()()(),f(10,"div",10,4),ue("mousedown",function(p){return c._handlePaginatorPress("after",p)})("click",function(){return c._handlePaginatorClick("after")})("touchend",function(){return c._stopInterval()}),le(12,"div",6),g()),u&2&&(ee("mat-mdc-tab-header-pagination-disabled",c._disableScrollBefore),B("matRippleDisabled",c._disableScrollBefore||c.disableRipple),v(3),ee("_mat-animation-noopable",c._animationsDisabled),v(2),Se("aria-label",c.ariaLabel||null)("aria-labelledby",c.ariaLabelledby||null),v(5),ee("mat-mdc-tab-header-pagination-disabled",c._disableScrollAfter),B("matRippleDisabled",c._disableScrollAfter||c.disableRipple))},dependencies:[qc,qf],styles:[`.mat-mdc-tab-header {
  display: flex;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
}

.mdc-tab-indicator .mdc-tab-indicator__content {
  transition-duration: var(--%NS%mat-tab-header-animation-duration, 250ms);
}

.mat-mdc-tab-header-pagination {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: none;
  justify-content: center;
  align-items: center;
  min-width: 32px;
  cursor: pointer;
  z-index: 2;
  -webkit-tap-highlight-color: transparent;
  touch-action: none;
  box-sizing: content-box;
  outline: 0;
}
.mat-mdc-tab-header-pagination::-moz-focus-inner {
  border: 0;
}
.mat-mdc-tab-header-pagination .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination {
  display: flex;
}

.mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after {
  padding-left: 4px;
}
.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(-135deg);
}

.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-pagination-after {
  padding-right: 4px;
}
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(45deg);
}

.mat-mdc-tab-header-pagination-chevron {
  border-style: solid;
  border-width: 2px 2px 0 0;
  height: 8px;
  width: 8px;
  border-color: var(--%NS%mat-tab-pagination-icon-color, var(--%NS%mat-sys-on-surface));
}

.mat-mdc-tab-header-pagination-disabled {
  box-shadow: none;
  cursor: default;
  pointer-events: none;
}
.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron {
  opacity: 0.4;
}

.mat-mdc-tab-list {
  flex-grow: 1;
  position: relative;
  transition: transform 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
._mat-animation-noopable .mat-mdc-tab-list {
  transition: none;
}

.mat-mdc-tab-label-container {
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  z-index: 1;
  border-bottom-style: solid;
  border-bottom-width: var(--%NS%mat-tab-divider-height, 1px);
  border-bottom-color: var(--%NS%mat-tab-divider-color, var(--%NS%mat-sys-surface-variant));
}
.mat-mdc-tab-group-inverted-header .mat-mdc-tab-label-container {
  border-bottom: none;
  border-top-style: solid;
  border-top-width: var(--%NS%mat-tab-divider-height, 1px);
  border-top-color: var(--%NS%mat-tab-divider-color, var(--%NS%mat-sys-surface-variant));
}

.mat-mdc-tab-labels {
  display: flex;
  flex: 1 0 auto;
}
[mat-align-tabs=center] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: center;
}
[mat-align-tabs=end] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: flex-end;
}
.cdk-drop-list .mat-mdc-tab-labels, .mat-mdc-tab-labels.cdk-drop-list {
  min-height: var(--%NS%mat-tab-container-height, 48px);
}

.mat-mdc-tab::before {
  margin: 5px;
}
@media (forced-colors: active) {
  .mat-mdc-tab[aria-disabled=true] {
    color: GrayText;
  }
}
`],encapsulation:2,changeDetection:1})})()}return n})(),tD=new y("MAT_TABS_CONFIG"),zg=(()=>{class n extends da{_host=d(ru);_ngZone=d(P);_centeringSub=Ee.EMPTY;_leavingSub=Ee.EMPTY;ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(nt(this._host._isCenterPosition())).subscribe(e=>{this._host._content&&e&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static \u0275fac=(()=>{let e;return function(a){return(e||(e=ye(n)))(a||n)}})();static \u0275dir=R({type:n,selectors:[["","matTabBodyHost",""]],features:[ie]})}return n})(),ru=(()=>{class n{_elementRef=d(j);_dir=d(Xe,{optional:!0});_ngZone=d(P);_injector=d(re);_renderer=d(Ie);_diAnimationsDisabled=tt();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=Ee.EMPTY;_position;_previousPosition;_onCentering=new T;_beforeCentering=new T;_afterLeavingCenter=new T;_onCentered=new T(!0);_portalHost;_contentElement;_content;animationDuration="500ms";preserveContent=!1;set position(e){this._positionIndex=e,this._computePositionAnimationState()}constructor(){if(this._dir){let e=d(Ae);this._dirChangeSubscription=this._dir.change.subscribe(t=>{this._computePositionAnimationState(t),e.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position==="center"&&(this._setActiveClass(!0),Ne(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(e=>e()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let e=this._elementRef.nativeElement,t=a=>{a.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove("mat-tab-body-animating"),a.type==="transitionend"&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(e,"transitionstart",a=>{a.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add("mat-tab-body-animating"),this._transitionStarted())}),this._renderer.listen(e,"transitionend",t),this._renderer.listen(e,"transitioncancel",t)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let e=this._position==="center";this._beforeCentering.emit(e),e&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position==="center"?this._onCentered.emit():this._previousPosition==="center"&&this._afterLeavingCenter.emit()}_setActiveClass(e){this._elementRef.nativeElement.classList.toggle("mat-mdc-tab-body-active",e)}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(e=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=e=="ltr"?"left":"right":this._positionIndex>0?this._position=e=="ltr"?"right":"left":this._position="center",this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position==="center"||this._previousPosition==="center")&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),Ne(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0ms"||this.animationDuration==="0s"}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=(function(){let e=["content"];function t(a,r){}return L({type:n,selectors:[["mat-tab-body"]],viewQuery:function(r,o){if(r&1&&qe(zg,5)(e,5),r&2){let l;H(l=$())&&(o._portalHost=l.first),H(l=$())&&(o._contentElement=l.first)}},hostAttrs:[1,"mat-mdc-tab-body"],hostVars:1,hostBindings:function(r,o){r&2&&Se("inert",o._position==="center"?null:"")},inputs:{_content:[0,"content","_content"],animationDuration:"animationDuration",preserveContent:"preserveContent",position:"position"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_onCentered:"_onCentered"},decls:3,vars:6,consts:[["content",""],["cdkScrollable","",1,"mat-mdc-tab-body-content"],["matTabBodyHost",""]],template:function(r,o){r&1&&(f(0,"div",1,0),Re(2,t,0,0,"ng-template",2),g()),r&2&&ee("mat-tab-body-content-left",o._position==="left")("mat-tab-body-content-right",o._position==="right")("mat-tab-body-content-can-animate",o._position==="center"||o._previousPosition==="center")},dependencies:[zg,tu],styles:[`.mat-mdc-tab-body {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  overflow: hidden;
  outline: 0;
  flex-basis: 100%;
}
.mat-mdc-tab-body.mat-mdc-tab-body-active {
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 1;
  flex-grow: 1;
}
.mat-mdc-tab-group.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body.mat-mdc-tab-body-active {
  overflow-y: hidden;
}

.mat-mdc-tab-body-content {
  height: 100%;
  overflow: auto;
  transform: none;
  visibility: hidden;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content, .mat-mdc-tab-body-active > .mat-mdc-tab-body-content {
  visibility: visible;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content {
  min-height: 1px;
}
.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body-content {
  overflow: hidden;
}

.mat-tab-body-content-can-animate {
  transition: transform var(--%NS%mat-tab-body-animation-duration) 1ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable .mat-tab-body-content-can-animate {
  transition: none;
}

.mat-tab-body-content-left {
  transform: translate3d(-100%, 0, 0);
}

.mat-tab-body-content-right {
  transform: translate3d(100%, 0, 0);
}
`],encapsulation:2,changeDetection:1})})()}return n})(),Gg=(()=>{class n{_elementRef=d(j);_changeDetectorRef=d(Ae);_ngZone=d(P);_tabsSubscription=Ee.EMPTY;_tabLabelSubscription=Ee.EMPTY;_tabBodySubscription=Ee.EMPTY;_diAnimationsDisabled=tt();_bodyAnimationDuration;_headerAnimationDuration;_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new Ea;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(e){this._fitInkBarToContent=e,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){this._indexToSelect=isNaN(e)?null:e}_selectedIndex=null;headerPosition="above";get animationDuration(){return this._animationDuration}set animationDuration(e){this._animationDuration=e,e&&typeof e=="object"?(this._bodyAnimationDuration=iu(e.body),this._headerAnimationDuration=iu(e.header)):this._headerAnimationDuration=this._bodyAnimationDuration=iu(e)}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(e){this._contentTabIndex=isNaN(e)?null:e}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(e){let t=this._elementRef.nativeElement.classList;t.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),e&&t.add("mat-tabs-with-background",`mat-background-${e}`),this._backgroundColor=e}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new T;focusChange=new T;animationDone=new T;selectedTabChange=new T(!0);_groupId;_isServer=!d(de).isBrowser;constructor(){let e=d(tD,{optional:!0});this._groupId=d(ct).getId("mat-tab-group-"),this.animationDuration=e&&e.animationDuration?e.animationDuration:"500ms",this.disablePagination=e&&e.disablePagination!=null?e.disablePagination:!1,this.dynamicHeight=e&&e.dynamicHeight!=null?e.dynamicHeight:!1,e?.contentTabIndex!=null&&(this.contentTabIndex=e.contentTabIndex),this.preserveContent=!!e?.preserveContent,this.fitInkBarToContent=e&&e.fitInkBarToContent!=null?e.fitInkBarToContent:!1,this.stretchTabs=e&&e.stretchTabs!=null?e.stretchTabs:!0,this.alignTabs=e&&e.alignTabs!=null?e.alignTabs:null}ngAfterContentChecked(){let e=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=e){let t=this._selectedIndex==null;if(!t){this.selectedTabChange.emit(this._createChangeEvent(e));let a=this._tabBodyWrapper.nativeElement;a.style.minHeight=a.clientHeight+"px"}Promise.resolve().then(()=>{this._tabs.forEach((a,r)=>a.isActive=r===e),t||(this.selectedIndexChange.emit(e),this._tabBodyWrapper.nativeElement.style.minHeight="")})}this._tabs.forEach((t,a)=>{t.position=a-e,this._selectedIndex!=null&&t.position==0&&!t.origin&&(t.origin=e-this._selectedIndex)}),this._selectedIndex!==e&&(this._selectedIndex=e,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let e=this._clampTabIndex(this._indexToSelect);if(e===this._selectedIndex){let t=this._tabs.toArray(),a;for(let r=0;r<t.length;r++)if(t[r].isActive){this._indexToSelect=this._selectedIndex=r,this._lastFocusedTabIndex=null,a=t[r];break}!a&&t[e]&&Promise.resolve().then(()=>{t[e].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(e))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(nt(this._allTabs)).subscribe(e=>{this._tabs.reset(e.filter(t=>t._closestTabGroup===this||!t._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(e){let t=this._tabHeader;t&&(t.focusIndex=e)}_focusChanged(e){this._lastFocusedTabIndex=e,this.focusChange.emit(this._createChangeEvent(e))}_createChangeEvent(e){let t=new ou;return t.index=e,this._tabs&&this._tabs.length&&(t.tab=this._tabs.toArray()[e]),t}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=at(...this._tabs.map(e=>e._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(e){return Math.min(this._tabs.length-1,Math.max(e||0,0))}_getTabLabelId(e,t){return e.id||`${this._groupId}-label-${t}`}_getTabContentId(e){return`${this._groupId}-content-${e}`}_setTabBodyWrapperHeight(e){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=e;return}let t=this._tabBodyWrapper.nativeElement;t.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(t.style.height=e+"px")}_removeTabBodyWrapperHeight(){let e=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=e.clientHeight,e.style.height="",this._ngZone.run(()=>this.animationDone.emit())}_handleClick(e,t,a){t.focusIndex=a,e.disabled||(this.selectedIndex=a)}_getTabIndex(e){let t=this._lastFocusedTabIndex??this.selectedIndex;return e===t?0:-1}_tabFocusChanged(e,t){e&&e!=="mouse"&&e!=="touch"&&(this._tabHeader.focusIndex=t)}_bodyCentered(e){e&&this._tabBodies?.forEach((t,a)=>t._setActiveClass(a===this._selectedIndex))}_bodyAnimationsDisabled(){return this._diAnimationsDisabled||this._bodyAnimationDuration==="0"||this._bodyAnimationDuration==="0ms"}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=(function(){let e=["tabBodyWrapper"],t=["tabHeader"],a=["*"];function r(m,p){}function o(m,p){if(m&1&&Re(0,r,0,0,"ng-template",12),m&2){let h=oe().$implicit;B("cdkPortalOutlet",h.templateLabel)}}function l(m,p){if(m&1&&E(0),m&2){let h=oe().$implicit;ke(h.textLabel)}}function s(m,p){if(m&1){let h=Sn();f(0,"div",7,2),ue("click",function(){let D=We(h),C=D.$implicit,w=D.$index,x=oe(),S=xn(1);return Ye(x._handleClick(C,S,w))})("cdkFocusChange",function(D){let C=We(h).$index,w=oe();return Ye(w._tabFocusChanged(D,C))}),le(2,"span",8)(3,"div",9),f(4,"span",10)(5,"span",11),he(6,o,1,1,null,12)(7,l,1,1),g()()()}if(m&2){let h=p.$implicit,_=p.$index,D=xn(1),C=oe();At(h.labelClass),ee("mdc-tab--active",C.selectedIndex===_),B("id",C._getTabLabelId(h,_))("disabled",h.disabled)("fitInkBarToContent",C.fitInkBarToContent),Se("tabIndex",C._getTabIndex(_))("aria-posinset",_+1)("aria-setsize",C._tabs.length)("aria-controls",C._getTabContentId(_))("aria-selected",C.selectedIndex===_)("aria-label",h.ariaLabel||null)("aria-labelledby",!h.ariaLabel&&h.ariaLabelledby?h.ariaLabelledby:null),v(3),B("matRippleTrigger",D)("matRippleDisabled",h.disabled||C.disableRipple),v(3),fe(h.templateLabel?6:7)}}function u(m,p){m&1&&se(0)}function c(m,p){if(m&1){let h=Sn();f(0,"mat-tab-body",13),ue("_onCentered",function(){We(h);let D=oe();return Ye(D._removeTabBodyWrapperHeight())})("_onCentering",function(D){We(h);let C=oe();return Ye(C._setTabBodyWrapperHeight(D))})("_beforeCentering",function(D){We(h);let C=oe();return Ye(C._bodyCentered(D))}),g()}if(m&2){let h=p.$implicit,_=p.$index,D=oe();At(h.bodyClass),B("id",D._getTabContentId(_))("content",h.content)("position",h.position)("animationDuration",D._bodyAnimationDuration)("preserveContent",D.preserveContent),Se("tabindex",D.contentTabIndex!=null&&D.selectedIndex===_?D.contentTabIndex:null)("aria-labelledby",D._getTabLabelId(h,_))("aria-hidden",D.selectedIndex!==_)}}return L({type:n,selectors:[["mat-tab-group"]],contentQueries:function(p,h,_){if(p&1&&Vt(_,su,5),p&2){let D;H(D=$())&&(h._allTabs=D)}},viewQuery:function(p,h){if(p&1&&qe(e,5)(t,5)(ru,5),p&2){let _;H(_=$())&&(h._tabBodyWrapper=_.first),H(_=$())&&(h._tabHeader=_.first),H(_=$())&&(h._tabBodies=_)}},hostAttrs:[1,"mat-mdc-tab-group"],hostVars:13,hostBindings:function(p,h){p&2&&(Se("mat-align-tabs",h.alignTabs),At("mat-"+(h.color||"primary")),un("--%NS%mat-tab-body-animation-duration",h._bodyAnimationDuration)("--%NS%mat-tab-header-animation-duration",h._headerAnimationDuration),ee("mat-mdc-tab-group-dynamic-height",h.dynamicHeight)("mat-mdc-tab-group-inverted-header",h.headerPosition==="below")("mat-mdc-tab-group-stretch-tabs",h.stretchTabs))},inputs:{color:"color",fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",K],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",K],alignTabs:[0,"mat-align-tabs","alignTabs"],dynamicHeight:[2,"dynamicHeight","dynamicHeight",K],selectedIndex:[2,"selectedIndex","selectedIndex",Mi],headerPosition:"headerPosition",animationDuration:"animationDuration",contentTabIndex:[2,"contentTabIndex","contentTabIndex",Mi],disablePagination:[2,"disablePagination","disablePagination",K],disableRipple:[2,"disableRipple","disableRipple",K],preserveContent:[2,"preserveContent","preserveContent",K],backgroundColor:"backgroundColor",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"]},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},exportAs:["matTabGroup"],features:[ve([{provide:Hg,useExisting:n}])],ngContentSelectors:a,decls:9,vars:8,consts:[["tabHeader",""],["tabBodyWrapper",""],["tabNode",""],[3,"indexFocused","selectFocusedIndex","selectedIndex","disableRipple","disablePagination","aria-label","aria-labelledby"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"id","mdc-tab--active","class","disabled","fitInkBarToContent"],[1,"mat-mdc-tab-body-wrapper"],["role","tabpanel",3,"id","class","content","position","animationDuration","preserveContent"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"click","cdkFocusChange","id","disabled","fitInkBarToContent"],[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"],[3,"cdkPortalOutlet"],["role","tabpanel",3,"_onCentered","_onCentering","_beforeCentering","id","content","position","animationDuration","preserveContent"]],template:function(p,h){p&1&&(je(),f(0,"mat-tab-header",3,0),ue("indexFocused",function(D){return h._focusChanged(D)})("selectFocusedIndex",function(D){return h.selectedIndex=D}),ei(2,s,8,17,"div",4,Ll),g(),he(4,u,1,0),f(5,"div",5,1),ei(7,c,1,10,"mat-tab-body",6,Ll),g()),p&2&&(B("selectedIndex",h.selectedIndex||0)("disableRipple",h.disableRipple)("disablePagination",h.disablePagination),lm("aria-label",h.ariaLabel)("aria-labelledby",h.ariaLabelledby),v(2),ti(h._tabs),v(2),fe(h._isServer?4:-1),v(),ee("_mat-animation-noopable",h._bodyAnimationsDisabled()),v(2),ti(h._tabs))},dependencies:[eD,$g,wr,qc,da,ru],styles:[`.mdc-tab {
  min-width: 90px;
  padding: 0 24px;
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  box-sizing: border-box;
  border: none;
  outline: none;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  z-index: 1;
  touch-action: manipulation;
}

.mdc-tab__content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
  pointer-events: none;
}

.mdc-tab__text-label {
  transition: 150ms color linear;
  display: inline-block;
  line-height: 1;
  z-index: 2;
}

.mdc-tab--active .mdc-tab__text-label {
  transition-delay: 100ms;
}

._mat-animation-noopable .mdc-tab__text-label {
  transition: none;
}

.mdc-tab-indicator {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.mdc-tab-indicator__content {
  transition: var(--%NS%mat-tab-header-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: left;
  opacity: 0;
}

.mdc-tab-indicator__content--underline {
  align-self: flex-end;
  box-sizing: border-box;
  width: 100%;
  border-top-style: solid;
}

.mdc-tab-indicator--active .mdc-tab-indicator__content {
  opacity: 1;
}

._mat-animation-noopable .mdc-tab-indicator__content, .mdc-tab-indicator--no-transition .mdc-tab-indicator__content {
  transition: none;
}

.mat-mdc-tab-ripple.mat-mdc-tab-ripple {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
}

.mat-mdc-tab {
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-decoration: none;
  background: none;
  height: var(--%NS%mat-tab-container-height, 48px);
  font-family: var(--%NS%mat-tab-label-text-font, var(--%NS%mat-sys-title-small-font));
  font-size: var(--%NS%mat-tab-label-text-size, var(--%NS%mat-sys-title-small-size));
  letter-spacing: var(--%NS%mat-tab-label-text-tracking, var(--%NS%mat-sys-title-small-tracking));
  line-height: var(--%NS%mat-tab-label-text-line-height, var(--%NS%mat-sys-title-small-line-height));
  font-weight: var(--%NS%mat-tab-label-text-weight, var(--%NS%mat-sys-title-small-weight));
}
.mat-mdc-tab.mdc-tab {
  flex-grow: 0;
}
.mat-mdc-tab .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-indicator-color, var(--%NS%mat-sys-primary));
  border-top-width: var(--%NS%mat-tab-active-indicator-height, 2px);
  border-radius: var(--%NS%mat-tab-active-indicator-shape, 0);
}
.mat-mdc-tab:hover .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab:focus .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-focus-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__ripple::before,
.mat-mdc-tab.mdc-tab--active .mat-ripple-element {
  background-color: var(--%NS%mat-tab-active-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--%NS%active:hover .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--%NS%active:hover .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-hover-indicator-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-tab.mdc-tab--%NS%active:focus .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-focus-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--%NS%active:focus .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-focus-indicator-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-tab.mat-mdc-tab-disabled {
  opacity: 0.4;
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__content {
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__ripple::before,
.mat-mdc-tab.mat-mdc-tab-disabled .mat-ripple-element {
  background-color: var(--%NS%mat-tab-disabled-ripple-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-tab .mdc-tab__ripple::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  pointer-events: none;
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-label-text-color, var(--%NS%mat-sys-on-surface));
  display: inline-flex;
  align-items: center;
}
.mat-mdc-tab .mdc-tab__content {
  position: relative;
  pointer-events: auto;
}
.mat-mdc-tab:hover .mdc-tab__ripple::before {
  opacity: 0.04;
}
.mat-mdc-tab.cdk-program-focused .mdc-tab__ripple::before, .mat-mdc-tab.cdk-keyboard-focused .mdc-tab__ripple::before {
  opacity: 0.12;
}
.mat-mdc-tab .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-group.mat-mdc-tab-group-stretch-tabs > .mat-mdc-tab-header .mat-mdc-tab {
  flex-grow: 1;
}

.mat-mdc-tab-group {
  display: flex;
  flex-direction: column;
  max-width: 100%;
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination {
  background-color: var(--%NS%mat-tab-background-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mat-mdc-tab .mdc-tab__text-label {
  color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab__text-label {
  color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-focus-indicator::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-focus-indicator::before {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mdc-tab__ripple::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mdc-tab__ripple::before {
  background-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron {
  color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header {
  flex-direction: column-reverse;
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header .mdc-tab-indicator__content--underline {
  align-self: flex-start;
}

.mat-mdc-tab-body-wrapper {
  position: relative;
  overflow: hidden;
  display: flex;
  transition: height 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
`],encapsulation:2,changeDetection:1})})()}return n})(),ou=class{index;tab};var Wg=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=Q({type:n});static \u0275inj=X({imports:[$e]})}return n})();var Zs=class{applyChanges(i,e,t,a,r){i.forEachOperation((o,l,s)=>{let u,c;if(o.previousIndex==null){let m=t(o,l,s);u=e.createEmbeddedView(m.templateRef,m.context,m.index),c=Wt.INSERTED}else s==null?(e.remove(l),c=Wt.REMOVED):(u=e.get(l),e.move(u,s),c=Wt.MOVED);r&&r({context:u?.context,operation:c,record:o})})}detach(){}};var Yt=new y("CDK_TABLE");var el=(()=>{class n{template=d(ot);static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n,selectors:[["","cdkCellDef",""]]})}return n})(),tl=(()=>{class n{template=d(ot);static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n,selectors:[["","cdkHeaderCellDef",""]]})}return n})(),Xg=(()=>{class n{template=d(ot);static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n,selectors:[["","cdkFooterCellDef",""]]})}return n})(),ca=(()=>{class n{_table=d(Yt,{optional:!0});_hasStickyChanged=!1;get name(){return this._name}set name(e){this._setNameInput(e)}_name;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;get stickyEnd(){return this._stickyEnd}set stickyEnd(e){e!==this._stickyEnd&&(this._stickyEnd=e,this._hasStickyChanged=!0)}_stickyEnd=!1;cell;headerCell;footerCell;cssClassFriendlyName;_columnCssClassName;hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}_updateColumnCssClassName(){this._columnCssClassName=[`cdk-column-${this.cssClassFriendlyName}`]}_setNameInput(e){e&&(this._name=e,this.cssClassFriendlyName=e.replace(/[^a-z0-9_-]/gi,"-"),this._updateColumnCssClassName())}static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n,selectors:[["","cdkColumnDef",""]],contentQueries:function(t,a,r){if(t&1&&Vt(r,el,5)(r,tl,5)(r,Xg,5),t&2){let o;H(o=$())&&(a.cell=o.first),H(o=$())&&(a.headerCell=o.first),H(o=$())&&(a.footerCell=o.first)}},inputs:{name:[0,"cdkColumnDef","name"],sticky:[2,"sticky","sticky",K],stickyEnd:[2,"stickyEnd","stickyEnd",K]}})}return n})(),Js=class{constructor(i,e){e.nativeElement.classList.add(...i._columnCssClassName)}},Zg=(()=>{class n extends Js{constructor(){super(d(ca),d(j))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n,selectors:[["cdk-header-cell"],["th","cdk-header-cell",""]],hostAttrs:["role","columnheader",1,"cdk-header-cell"],features:[ie]})}return n})();var Qg=(()=>{class n extends Js{constructor(){let e=d(ca),t=d(j);super(e,t);let a=e._table?._getCellRole();a&&t.nativeElement.setAttribute("role",a)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n,selectors:[["cdk-cell"],["td","cdk-cell",""]],hostAttrs:[1,"cdk-cell"],features:[ie]})}return n})();var du=(()=>{class n{template=d(ot);_differs=d(Aa);columns;_columnsDiffer;ngOnChanges(e){if(!this._columnsDiffer){let t=e.columns&&e.columns.currentValue||[];this._columnsDiffer=this._differs.find(t).create(),this._columnsDiffer.diff(t)}}getColumnsDiff(){return this._columnsDiffer.diff(this.columns)}extractCellTemplate(e){return this instanceof Vr?e.headerCell.template:this instanceof cu?e.footerCell.template:e.cell.template}static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n,features:[Me]})}return n})(),Vr=(()=>{class n extends du{_table=d(Yt,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static \u0275fac=(()=>{let e;return function(a){return(e||(e=ye(n)))(a||n)}})();static \u0275dir=R({type:n,selectors:[["","cdkHeaderRowDef",""]],inputs:{columns:[0,"cdkHeaderRowDef","columns"],sticky:[2,"cdkHeaderRowDefSticky","sticky",K]},features:[ie,Me]})}return n})(),cu=(()=>{class n extends du{_table=d(Yt,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static \u0275fac=(()=>{let e;return function(a){return(e||(e=ye(n)))(a||n)}})();static \u0275dir=R({type:n,selectors:[["","cdkFooterRowDef",""]],inputs:{columns:[0,"cdkFooterRowDef","columns"],sticky:[2,"cdkFooterRowDefSticky","sticky",K]},features:[ie,Me]})}return n})(),nl=(()=>{class n extends du{_table=d(Yt,{optional:!0});when;static \u0275fac=(()=>{let e;return function(a){return(e||(e=ye(n)))(a||n)}})();static \u0275dir=R({type:n,selectors:[["","cdkRowDef",""]],inputs:{columns:[0,"cdkRowDefColumns","columns"],when:[0,"cdkRowDefWhen","when"]},features:[ie]})}return n})(),vi=(()=>{class n{_viewContainer=d(Ue);cells;context;static mostRecentCellOutlet=null;constructor(){n.mostRecentCellOutlet=this}ngOnDestroy(){n.mostRecentCellOutlet===this&&(n.mostRecentCellOutlet=null)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n,selectors:[["","cdkCellOutlet",""]]})}return n})(),uu=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=L({type:n,selectors:[["cdk-header-row"],["tr","cdk-header-row",""]],hostAttrs:["role","row",1,"cdk-header-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,a){t&1&&_t(0,0)},dependencies:[vi],encapsulation:2,changeDetection:1})}return n})();var mu=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=L({type:n,selectors:[["cdk-row"],["tr","cdk-row",""]],hostAttrs:["role","row",1,"cdk-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,a){t&1&&_t(0,0)},dependencies:[vi],encapsulation:2,changeDetection:1})}return n})(),Jg=(()=>{class n{templateRef=d(ot);_contentClassNames=["cdk-no-data-row","cdk-row"];_cellClassNames=["cdk-cell","cdk-no-data-cell"];_cellSelector="td, cdk-cell, [cdk-cell], .cdk-cell";static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n,selectors:[["ng-template","cdkNoDataRow",""]]})}return n})(),Yg=["top","bottom","left","right"],lu=class{_isNativeHtmlTable;_stickCellCss;_isBrowser;_needsPositionStickyOnElement;direction;_positionListener;_tableInjector;_elemSizeCache=new WeakMap;_resizeObserver=globalThis?.ResizeObserver?new globalThis.ResizeObserver(i=>this._updateCachedSizes(i)):null;_updatedStickyColumnsParamsToReplay=[];_stickyColumnsReplayTimeout=null;_cachedCellWidths=[];_borderCellCss;_destroyed=!1;constructor(i,e,t=!0,a=!0,r,o,l){this._isNativeHtmlTable=i,this._stickCellCss=e,this._isBrowser=t,this._needsPositionStickyOnElement=a,this.direction=r,this._positionListener=o,this._tableInjector=l,this._borderCellCss={top:`${e}-border-elem-top`,bottom:`${e}-border-elem-bottom`,left:`${e}-border-elem-left`,right:`${e}-border-elem-right`}}clearStickyPositioning(i,e){(e.includes("left")||e.includes("right"))&&this._removeFromStickyColumnReplayQueue(i);let t=[];for(let a of i)a.nodeType===a.ELEMENT_NODE&&t.push(a,...Array.from(a.children));Ne({write:()=>{for(let a of t)this._removeStickyStyle(a,e)}},{injector:this._tableInjector})}updateStickyColumns(i,e,t,a=!0,r=!0){if(!i.length||!this._isBrowser||!(e.some(C=>C)||t.some(C=>C))){this._positionListener?.stickyColumnsUpdated({sizes:[]}),this._positionListener?.stickyEndColumnsUpdated({sizes:[]});return}let o=i[0],l=o.children.length,s=this.direction==="rtl",u=s?"right":"left",c=s?"left":"right",m=e.lastIndexOf(!0),p=t.indexOf(!0),h,_,D;r&&this._updateStickyColumnReplayQueue({rows:[...i],stickyStartStates:[...e],stickyEndStates:[...t]}),Ne({earlyRead:()=>{h=this._getCellWidths(o,a),_=this._getStickyStartColumnPositions(h,e),D=this._getStickyEndColumnPositions(h,t)},write:()=>{for(let C of i)for(let w=0;w<l;w++){let x=C.children[w];e[w]&&this._addStickyStyle(x,u,_[w],w===m),t[w]&&this._addStickyStyle(x,c,D[w],w===p)}this._positionListener&&h.some(C=>!!C)&&(this._positionListener.stickyColumnsUpdated({sizes:m===-1?[]:h.slice(0,m+1).map((C,w)=>e[w]?C:null)}),this._positionListener.stickyEndColumnsUpdated({sizes:p===-1?[]:h.slice(p).map((C,w)=>t[w+p]?C:null).reverse()}))}},{injector:this._tableInjector})}stickRows(i,e,t){if(!this._isBrowser)return;let a=t==="bottom"?i.slice().reverse():i,r=t==="bottom"?e.slice().reverse():e,o=[],l=[],s=[];Ne({earlyRead:()=>{for(let u=0,c=0;u<a.length;u++){if(!r[u])continue;o[u]=c;let m=a[u];s[u]=this._isNativeHtmlTable?Array.from(m.children):[m];let p=this._retrieveElementSize(m).height;c+=p,l[u]=p}},write:()=>{let u=r.lastIndexOf(!0);for(let c=0;c<a.length;c++){if(!r[c])continue;let m=o[c],p=c===u;for(let h of s[c])this._addStickyStyle(h,t,m,p)}t==="top"?this._positionListener?.stickyHeaderRowsUpdated({sizes:l,offsets:o,elements:s}):this._positionListener?.stickyFooterRowsUpdated({sizes:l,offsets:o,elements:s})}},{injector:this._tableInjector})}updateStickyFooterContainer(i,e){this._isNativeHtmlTable&&Ne({write:()=>{let t=i.querySelector("tfoot");t&&(e.some(a=>!a)?this._removeStickyStyle(t,["bottom"]):this._addStickyStyle(t,"bottom",0,!1))}},{injector:this._tableInjector})}destroy(){this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._resizeObserver?.disconnect(),this._destroyed=!0}_removeStickyStyle(i,e){if(!i.classList.contains(this._stickCellCss))return;for(let a of e)i.style[a]="",i.classList.remove(this._borderCellCss[a]);Yg.some(a=>e.indexOf(a)===-1&&i.style[a])?i.style.zIndex=this._getCalculatedZIndex(i):(i.style.zIndex="",this._needsPositionStickyOnElement&&(i.style.position=""),i.classList.remove(this._stickCellCss))}_addStickyStyle(i,e,t,a){i.classList.add(this._stickCellCss),a&&i.classList.add(this._borderCellCss[e]),i.style[e]=`${t}px`,i.style.zIndex=this._getCalculatedZIndex(i),this._needsPositionStickyOnElement&&(i.style.cssText+="position: -webkit-sticky; position: sticky; ")}_getCalculatedZIndex(i){let e={top:100,bottom:10,left:1,right:1},t=0;for(let a of Yg)i.style[a]&&(t+=e[a]);return t?`${t}`:""}_getCellWidths(i,e=!0){if(!e&&this._cachedCellWidths.length)return this._cachedCellWidths;let t=[],a=i.children;for(let r=0;r<a.length;r++){let o=a[r];t.push(this._retrieveElementSize(o).width)}return this._cachedCellWidths=t,t}_getStickyStartColumnPositions(i,e){let t=[],a=0;for(let r=0;r<i.length;r++)e[r]&&(t[r]=a,a+=i[r]);return t}_getStickyEndColumnPositions(i,e){let t=[],a=0;for(let r=i.length;r>0;r--)e[r]&&(t[r]=a,a+=i[r]);return t}_retrieveElementSize(i){let e=this._elemSizeCache.get(i);if(e)return e;let t=i.getBoundingClientRect(),a={width:t.width,height:t.height};return this._resizeObserver&&(this._elemSizeCache.set(i,a),this._resizeObserver.observe(i,{box:"border-box"})),a}_updateStickyColumnReplayQueue(i){this._removeFromStickyColumnReplayQueue(i.rows),this._stickyColumnsReplayTimeout||this._updatedStickyColumnsParamsToReplay.push(i)}_removeFromStickyColumnReplayQueue(i){let e=new Set(i);for(let t of this._updatedStickyColumnsParamsToReplay)t.rows=t.rows.filter(a=>!e.has(a));this._updatedStickyColumnsParamsToReplay=this._updatedStickyColumnsParamsToReplay.filter(t=>!!t.rows.length)}_updateCachedSizes(i){let e=!1;for(let t of i){let a=t.borderBoxSize?.length?{width:t.borderBoxSize[0].inlineSize,height:t.borderBoxSize[0].blockSize}:{width:t.contentRect.width,height:t.contentRect.height};a.width!==this._elemSizeCache.get(t.target)?.width&&iD(t.target)&&(e=!0),this._elemSizeCache.set(t.target,a)}e&&this._updatedStickyColumnsParamsToReplay.length&&(this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._stickyColumnsReplayTimeout=setTimeout(()=>{if(!this._destroyed){for(let t of this._updatedStickyColumnsParamsToReplay)this.updateStickyColumns(t.rows,t.stickyStartStates,t.stickyEndStates,!0,!1);this._updatedStickyColumnsParamsToReplay=[],this._stickyColumnsReplayTimeout=null}},0))}};function iD(n){return["cdk-cell","cdk-header-cell","cdk-footer-cell"].some(i=>n.classList.contains(i))}function qg(n){return Error(`Could not find column with id "${n}".`)}var Lr=new y("STICKY_POSITIONING_LISTENER");var pu=(()=>{class n{viewContainer=d(Ue);elementRef=d(j);constructor(){let e=d(Yt);e._rowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n,selectors:[["","rowOutlet",""]]})}return n})(),hu=(()=>{class n{viewContainer=d(Ue);elementRef=d(j);constructor(){let e=d(Yt);e._headerRowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n,selectors:[["","headerRowOutlet",""]]})}return n})(),fu=(()=>{class n{viewContainer=d(Ue);elementRef=d(j);constructor(){let e=d(Yt);e._footerRowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n,selectors:[["","footerRowOutlet",""]]})}return n})(),gu=(()=>{class n{viewContainer=d(Ue);elementRef=d(j);constructor(){let e=d(Yt);e._noDataRowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n,selectors:[["","noDataRowOutlet",""]]})}return n})(),bu=(()=>{class n{_differs=d(Aa);_changeDetectorRef=d(Ae);_elementRef=d(j);_dir=d(Xe,{optional:!0});_platform=d(de);_viewRepeater;_viewportRuler=d(ln);_injector=d(re);_virtualScrollViewport=d(Vg,{optional:!0,host:!0});_positionListener=d(Lr,{optional:!0})||d(Lr,{optional:!0,skipSelf:!0});_document=d(q);_data;_renderedRange;_onDestroy=new N;_renderRows;_renderChangeSubscription=null;_columnDefsByName=new Map;_rowDefs;_headerRowDefs;_footerRowDefs;_dataDiffer;_defaultRowDef=null;_customColumnDefs=new Set;_customRowDefs=new Set;_customHeaderRowDefs=new Set;_customFooterRowDefs=new Set;_customNoDataRow=null;_headerRowDefChanged=!0;_footerRowDefChanged=!0;_stickyColumnStylesNeedReset=!0;_forceRecalculateCellWidths=!0;_cachedRenderRowsMap=new Map;_rowDefsByView=new WeakMap;_isNativeHtmlTable;_stickyStyler;stickyCssClass="cdk-table-sticky";needsPositionStickyOnElement=!0;_isServer;_isShowingNoDataRow=!1;_hasAllOutlets=!1;_hasInitialized=!1;_headerRowStickyUpdates=new N;_footerRowStickyUpdates=new N;_disableVirtualScrolling=!1;_getCellRole(){if(this._cellRoleInternal===void 0){let e=this._elementRef.nativeElement.getAttribute("role");return e==="grid"||e==="treegrid"?"gridcell":"cell"}return this._cellRoleInternal}_cellRoleInternal=void 0;get trackBy(){return this._trackByFn}set trackBy(e){this._trackByFn=e}_trackByFn;get dataSource(){return this._dataSource}set dataSource(e){this._dataSource!==e&&(this._switchDataSource(e),this._changeDetectorRef.markForCheck())}_dataSource;_dataSourceChanges=new N;_dataStream=new N;get multiTemplateDataRows(){return this._multiTemplateDataRows}set multiTemplateDataRows(e){this._multiTemplateDataRows=e,this._rowOutlet&&this._rowOutlet.viewContainer.length&&(this._forceRenderDataRows(),this.updateStickyColumnStyles())}_multiTemplateDataRows=!1;get fixedLayout(){return this._virtualScrollEnabled()?!0:this._fixedLayout}set fixedLayout(e){this._fixedLayout=e,this._forceRecalculateCellWidths=!0,this._stickyColumnStylesNeedReset=!0}_fixedLayout=!1;recycleRows=!1;contentChanged=new T;viewChange=new ze({start:0,end:Number.MAX_VALUE});_rowOutlet;_headerRowOutlet;_footerRowOutlet;_noDataRowOutlet;_contentColumnDefs;_contentRowDefs;_contentHeaderRowDefs;_contentFooterRowDefs;_noDataRow;get renderedRows(){return this._renderRows}constructor(){d(new xi("role"),{optional:!0})||this._elementRef.nativeElement.setAttribute("role","table"),this._isServer=!this._platform.isBrowser,this._isNativeHtmlTable=this._elementRef.nativeElement.nodeName==="TABLE",this._dataDiffer=this._differs.find([]).create((t,a)=>this.trackBy?this.trackBy(a.dataIndex,a.data):a)}ngOnInit(){this._setupStickyStyler(),this._viewportRuler.change().pipe(ce(this._onDestroy)).subscribe(()=>{this._forceRecalculateCellWidths=!0})}ngAfterContentInit(){this._viewRepeater=this.recycleRows||this._virtualScrollEnabled()?new Xs:new Zs,this._virtualScrollEnabled()&&this._setupVirtualScrolling(this._virtualScrollViewport),this._hasInitialized=!0}ngAfterContentChecked(){this._canRender()&&this._render()}ngOnDestroy(){this._stickyStyler?.destroy(),[this._rowOutlet?.viewContainer,this._headerRowOutlet?.viewContainer,this._footerRowOutlet?.viewContainer,this._cachedRenderRowsMap,this._customColumnDefs,this._customRowDefs,this._customHeaderRowDefs,this._customFooterRowDefs,this._columnDefsByName].forEach(e=>{e?.clear()}),this._headerRowDefs=[],this._footerRowDefs=[],this._defaultRowDef=null,this._headerRowStickyUpdates.complete(),this._footerRowStickyUpdates.complete(),this._onDestroy.next(),this._onDestroy.complete(),Ks(this.dataSource)&&this.dataSource.disconnect(this)}renderRows(){this._renderRows=this._getAllRenderRows();let e=this._dataDiffer.diff(this._renderRows);if(!e){this._updateNoDataRow(),this.contentChanged.next();return}let t=this._rowOutlet.viewContainer;this._viewRepeater.applyChanges(e,t,(a,r,o)=>this._getEmbeddedViewArgs(a.item,o),a=>a.item.data,a=>{if(a.operation===Wt.INSERTED&&a.context){this._renderCellTemplateForItem(a.record.item.rowDef,a.context);let r=t.get(a.record.currentIndex);this._rowDefsByView.set(r,a.record.item.rowDef)}}),e.forEachIdentityChange(a=>{let r=a.currentIndex,o=t.get(r);if(this._rowDefsByView.get(o)!==a.item.rowDef){t.remove(r);let l=this._renderRow(this._rowOutlet,a.item.rowDef,r,{$implicit:a.item.data});this._rowDefsByView.set(l,a.item.rowDef)}else o.context.$implicit=a.item.data}),this._updateRowIndexContext(),this._updateNoDataRow(),this.contentChanged.next(),this.updateStickyColumnStyles()}addColumnDef(e){this._customColumnDefs.add(e)}removeColumnDef(e){this._customColumnDefs.delete(e)}addRowDef(e){this._customRowDefs.add(e)}removeRowDef(e){this._customRowDefs.delete(e)}addHeaderRowDef(e){this._customHeaderRowDefs.add(e),this._headerRowDefChanged=!0}removeHeaderRowDef(e){this._customHeaderRowDefs.delete(e),this._headerRowDefChanged=!0}addFooterRowDef(e){this._customFooterRowDefs.add(e),this._footerRowDefChanged=!0}removeFooterRowDef(e){this._customFooterRowDefs.delete(e),this._footerRowDefChanged=!0}setNoDataRow(e){this._customNoDataRow=e}updateStickyHeaderRowStyles(){let e=this._getRenderedRows(this._headerRowOutlet);if(this._isNativeHtmlTable){let a=Kg(this._headerRowOutlet,"thead");a&&(a.style.display=e.length?"":"none")}let t=this._headerRowDefs.map(a=>a.sticky);this._stickyStyler.clearStickyPositioning(e,["top"]),this._stickyStyler.stickRows(e,t,"top"),this._headerRowDefs.forEach(a=>a.resetStickyChanged())}updateStickyFooterRowStyles(){let e=this._getRenderedRows(this._footerRowOutlet);if(this._isNativeHtmlTable){let a=Kg(this._footerRowOutlet,"tfoot");a&&(a.style.display=e.length?"":"none")}let t=this._footerRowDefs.map(a=>a.sticky);this._stickyStyler.clearStickyPositioning(e,["bottom"]),this._stickyStyler.stickRows(e,t,"bottom"),this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement,t),this._footerRowDefs.forEach(a=>a.resetStickyChanged())}updateStickyColumnStyles(){let e=this._getRenderedRows(this._headerRowOutlet),t=this._getRenderedRows(this._rowOutlet),a=this._getRenderedRows(this._footerRowOutlet);(this._isNativeHtmlTable&&!this.fixedLayout||this._stickyColumnStylesNeedReset)&&(this._stickyStyler.clearStickyPositioning([...e,...t,...a],["left","right"]),this._stickyColumnStylesNeedReset=!1),e.forEach((r,o)=>{this._addStickyColumnStyles([r],this._headerRowDefs[o])}),this._rowDefs.forEach(r=>{let o=[];for(let l=0;l<t.length;l++)this._renderRows[l].rowDef===r&&o.push(t[l]);this._addStickyColumnStyles(o,r)}),a.forEach((r,o)=>{this._addStickyColumnStyles([r],this._footerRowDefs[o])}),Array.from(this._columnDefsByName.values()).forEach(r=>r.resetStickyChanged())}stickyColumnsUpdated(e){this._positionListener?.stickyColumnsUpdated(e)}stickyEndColumnsUpdated(e){this._positionListener?.stickyEndColumnsUpdated(e)}stickyHeaderRowsUpdated(e){this._headerRowStickyUpdates.next(e),this._positionListener?.stickyHeaderRowsUpdated(e)}stickyFooterRowsUpdated(e){this._footerRowStickyUpdates.next(e),this._positionListener?.stickyFooterRowsUpdated(e)}_outletAssigned(){!this._hasAllOutlets&&this._rowOutlet&&this._headerRowOutlet&&this._footerRowOutlet&&this._noDataRowOutlet&&(this._hasAllOutlets=!0,this._canRender()&&this._render())}_canRender(){return this._hasAllOutlets&&this._hasInitialized}_render(){this._cacheRowDefs(),this._cacheColumnDefs(),!this._headerRowDefs.length&&!this._footerRowDefs.length&&this._rowDefs.length;let t=this._renderUpdatedColumns()||this._headerRowDefChanged||this._footerRowDefChanged;this._stickyColumnStylesNeedReset=this._stickyColumnStylesNeedReset||t,this._forceRecalculateCellWidths=t,this._headerRowDefChanged&&(this._forceRenderHeaderRows(),this._headerRowDefChanged=!1),this._footerRowDefChanged&&(this._forceRenderFooterRows(),this._footerRowDefChanged=!1),this.dataSource&&this._rowDefs.length>0&&!this._renderChangeSubscription?this._observeRenderChanges():this._stickyColumnStylesNeedReset&&this.updateStickyColumnStyles(),this._checkStickyStates()}_getAllRenderRows(){if(!Array.isArray(this._data)||!this._renderedRange)return[];let e=[],t=Math.min(this._data.length,this._renderedRange.end),a=this._cachedRenderRowsMap;this._cachedRenderRowsMap=new Map;for(let r=this._renderedRange.start;r<t;r++){let o=this._data[r],l=this._getRenderRowsForData(o,r,a.get(o));this._cachedRenderRowsMap.has(o)||this._cachedRenderRowsMap.set(o,new WeakMap);for(let s=0;s<l.length;s++){let u=l[s],c=this._cachedRenderRowsMap.get(u.data);c.has(u.rowDef)?c.get(u.rowDef).push(u):c.set(u.rowDef,[u]),e.push(u)}}return e}_getRenderRowsForData(e,t,a){return this._getRowDefs(e,t).map(o=>{let l=a&&a.has(o)?a.get(o):[];if(l.length){let s=l.shift();return s.dataIndex=t,s}else return{data:e,rowDef:o,dataIndex:t}})}_cacheColumnDefs(){this._columnDefsByName.clear(),Qs(this._getOwnDefs(this._contentColumnDefs),this._customColumnDefs).forEach(t=>{this._columnDefsByName.has(t.name),this._columnDefsByName.set(t.name,t)})}_cacheRowDefs(){this._headerRowDefs=Qs(this._getOwnDefs(this._contentHeaderRowDefs),this._customHeaderRowDefs),this._footerRowDefs=Qs(this._getOwnDefs(this._contentFooterRowDefs),this._customFooterRowDefs),this._rowDefs=Qs(this._getOwnDefs(this._contentRowDefs),this._customRowDefs);let e=this._rowDefs.filter(t=>!t.when);this._defaultRowDef=e[0]}_renderUpdatedColumns(){let e=(o,l)=>{let s=!!l.getColumnsDiff();return o||s},t=this._rowDefs.reduce(e,!1);t&&this._forceRenderDataRows();let a=this._headerRowDefs.reduce(e,!1);a&&this._forceRenderHeaderRows();let r=this._footerRowDefs.reduce(e,!1);return r&&this._forceRenderFooterRows(),t||a||r}_switchDataSource(e){this._data=[],Ks(this.dataSource)&&this.dataSource.disconnect(this),this._renderChangeSubscription&&(this._renderChangeSubscription.unsubscribe(),this._renderChangeSubscription=null),e||(this._dataDiffer&&this._dataDiffer.diff([]),this._rowOutlet&&this._rowOutlet.viewContainer.clear()),this._dataSource=e}_observeRenderChanges(){if(!this.dataSource)return;let e;Ks(this.dataSource)?e=this.dataSource.connect(this):Ci(this.dataSource)?e=this.dataSource:Array.isArray(this.dataSource)&&(e=V(this.dataSource)),this._renderChangeSubscription=qt([e,this.viewChange]).pipe(ce(this._onDestroy)).subscribe(([t,a])=>{this._data=t||[],this._renderedRange=a,this._dataStream.next(t),this.renderRows()})}_forceRenderHeaderRows(){this._headerRowOutlet.viewContainer.length>0&&this._headerRowOutlet.viewContainer.clear(),this._headerRowDefs.forEach((e,t)=>this._renderRow(this._headerRowOutlet,e,t)),this.updateStickyHeaderRowStyles()}_forceRenderFooterRows(){this._footerRowOutlet.viewContainer.length>0&&this._footerRowOutlet.viewContainer.clear(),this._footerRowDefs.forEach((e,t)=>this._renderRow(this._footerRowOutlet,e,t)),this.updateStickyFooterRowStyles()}_addStickyColumnStyles(e,t){let a=Array.from(t?.columns||[]).map(l=>{let s=this._columnDefsByName.get(l);if(!s)throw qg(l);return s}),r=a.map(l=>l.sticky),o=a.map(l=>l.stickyEnd);this._stickyStyler.updateStickyColumns(e,r,o,!this.fixedLayout||this._forceRecalculateCellWidths)}_getRenderedRows(e){let t=[];for(let a=0;a<e.viewContainer.length;a++){let r=e.viewContainer.get(a);t.push(r.rootNodes[0])}return t}_getRowDefs(e,t){if(this._rowDefs.length===1)return[this._rowDefs[0]];let a=[];if(this.multiTemplateDataRows)a=this._rowDefs.filter(r=>!r.when||r.when(t,e));else{let r=this._rowDefs.find(o=>o.when&&o.when(t,e))||this._defaultRowDef;r&&a.push(r)}return a.length,a}_getEmbeddedViewArgs(e,t){let a=e.rowDef,r={$implicit:e.data};return{templateRef:a.template,context:r,index:t}}_renderRow(e,t,a,r={}){let o=e.viewContainer.createEmbeddedView(t.template,r,a);return this._renderCellTemplateForItem(t,r),o}_renderCellTemplateForItem(e,t){for(let a of this._getCellTemplates(e))vi.mostRecentCellOutlet&&vi.mostRecentCellOutlet._viewContainer.createEmbeddedView(a,t);this._changeDetectorRef.markForCheck()}_updateRowIndexContext(){let e=this._rowOutlet.viewContainer;for(let t=0,a=e.length;t<a;t++){let o=e.get(t).context;o.count=a,o.first=t===0,o.last=t===a-1,o.even=t%2===0,o.odd=!o.even,this.multiTemplateDataRows?(o.dataIndex=this._renderRows[t].dataIndex,o.renderIndex=t):o.index=this._renderRows[t].dataIndex}}_getCellTemplates(e){return!e||!e.columns?[]:Array.from(e.columns,t=>{let a=this._columnDefsByName.get(t);if(!a)throw qg(t);return e.extractCellTemplate(a)})}_forceRenderDataRows(){this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear(),this.renderRows()}_checkStickyStates(){let e=(t,a)=>t||a.hasStickyChanged();this._headerRowDefs.reduce(e,!1)&&this.updateStickyHeaderRowStyles(),this._footerRowDefs.reduce(e,!1)&&this.updateStickyFooterRowStyles(),Array.from(this._columnDefsByName.values()).reduce(e,!1)&&(this._stickyColumnStylesNeedReset=!0,this.updateStickyColumnStyles())}_setupStickyStyler(){let e=this._dir?this._dir.value:"ltr",t=this._injector;this._stickyStyler=new lu(this._isNativeHtmlTable,this.stickyCssClass,this._platform.isBrowser,this.needsPositionStickyOnElement,e,this,t),(this._dir?this._dir.change:V()).pipe(ce(this._onDestroy)).subscribe(a=>{this._stickyStyler.direction=a,this.updateStickyColumnStyles()})}_setupVirtualScrolling(e){let t=typeof requestAnimationFrame<"u"?xl:Sl;this.viewChange.next({start:0,end:0}),e.renderedRangeStream.pipe(Ca(0,t),ce(this._onDestroy)).subscribe(this.viewChange),e.attach({dataStream:this._dataStream,measureRangeSize:(a,r)=>this._measureRangeSize(a,r)}),qt([e.renderedContentOffset,this._headerRowStickyUpdates]).pipe(ce(this._onDestroy)).subscribe(([a,r])=>{if(!(!r.sizes||!r.offsets||!r.elements))for(let o=0;o<r.elements.length;o++){let l=r.elements[o];if(l){let s=r.offsets[o],u=a!==0?Math.max(a-s,s):-s;for(let c of l)c.style.top=`${-u}px`}}}),qt([e.renderedContentOffset,this._footerRowStickyUpdates]).pipe(ce(this._onDestroy)).subscribe(([a,r])=>{if(!(!r.sizes||!r.offsets||!r.elements))for(let o=0;o<r.elements.length;o++){let l=r.elements[o];if(l)for(let s of l)s.style.bottom=`${a+r.offsets[o]}px`}})}_getOwnDefs(e){return e.filter(t=>!t._table||t._table===this)}_updateNoDataRow(){let e=this._customNoDataRow||this._noDataRow;if(!e)return;let t=this._rowOutlet.viewContainer.length===0;if(t===this._isShowingNoDataRow)return;let a=this._noDataRowOutlet.viewContainer;if(t){let r=a.createEmbeddedView(e.templateRef),o=r.rootNodes[0];if(r.rootNodes.length===1&&o?.nodeType===this._document.ELEMENT_NODE){o.setAttribute("role","row"),o.classList.add(...e._contentClassNames);let l=o.querySelectorAll(e._cellSelector);for(let s=0;s<l.length;s++)l[s].classList.add(...e._cellClassNames)}}else a.clear();this._isShowingNoDataRow=t,this._changeDetectorRef.markForCheck()}_measureRangeSize(e,t){if(e.start>=e.end||t!=="vertical")return 0;let a=this.viewChange.value,r=this._rowOutlet.viewContainer;e.start<a.start||e.end>a.end;let o=e.start-a.start,l=e.end-e.start,s,u;for(let p=0;p<l;p++){let h=r.get(p+o);if(h&&h.rootNodes.length){s=u=h.rootNodes[0];break}}for(let p=l-1;p>-1;p--){let h=r.get(p+o);if(h&&h.rootNodes.length){u=h.rootNodes[h.rootNodes.length-1];break}}let c=s?.getBoundingClientRect?.(),m=u?.getBoundingClientRect?.();return c&&m?m.bottom-c.top:0}_virtualScrollEnabled(){return!this._disableVirtualScrolling&&this._virtualScrollViewport!=null}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=(function(){let e=[[["caption"]],[["colgroup"],["col"]],"*"],t=["caption","colgroup, col","*"];function a(l,s){l&1&&se(0,2)}function r(l,s){l&1&&(f(0,"thead",0),_t(1,1),g(),f(2,"tbody",0),_t(3,2)(4,3),g(),f(5,"tfoot",0),_t(6,4),g())}function o(l,s){l&1&&_t(0,1)(1,2)(2,3)(3,4)}return L({type:n,selectors:[["cdk-table"],["table","cdk-table",""]],contentQueries:function(s,u,c){if(s&1&&Vt(c,Jg,5)(c,ca,5)(c,nl,5)(c,Vr,5)(c,cu,5),s&2){let m;H(m=$())&&(u._noDataRow=m.first),H(m=$())&&(u._contentColumnDefs=m),H(m=$())&&(u._contentRowDefs=m),H(m=$())&&(u._contentHeaderRowDefs=m),H(m=$())&&(u._contentFooterRowDefs=m)}},hostAttrs:[1,"cdk-table"],hostVars:2,hostBindings:function(s,u){s&2&&ee("cdk-table-fixed-layout",u.fixedLayout)},inputs:{trackBy:"trackBy",dataSource:"dataSource",multiTemplateDataRows:[2,"multiTemplateDataRows","multiTemplateDataRows",K],fixedLayout:[2,"fixedLayout","fixedLayout",K],recycleRows:[2,"recycleRows","recycleRows",K]},outputs:{contentChanged:"contentChanged"},exportAs:["cdkTable"],features:[ve([{provide:Yt,useExisting:n},{provide:Lr,useValue:null}])],ngContentSelectors:t,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(s,u){s&1&&(je(e),se(0),se(1,1),he(2,a,1,0),he(3,r,7,0)(4,o,4,0)),s&2&&(v(2),fe(u._isServer?2:-1),v(),fe(u._isNativeHtmlTable?3:4))},dependencies:[hu,pu,gu,fu],styles:[`.cdk-table-fixed-layout {
  table-layout: fixed;
}
`],encapsulation:2,changeDetection:1})})()}return n})();function Qs(n,i){return n.concat(Array.from(i))}function Kg(n,i){let e=i.toUpperCase(),t=n.viewContainer.element.nativeElement;for(;t;){let a=t.nodeType===1?t.nodeName:null;if(a===e)return t;if(a==="TABLE")break;t=t.parentNode}return null}var eb=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=Q({type:n});static \u0275inj=X({imports:[Pr]})}return n})();var tb=(()=>{class n extends bu{stickyCssClass="mat-mdc-table-sticky";needsPositionStickyOnElement=!1;static \u0275fac=(()=>{let e;return function(a){return(e||(e=ye(n)))(a||n)}})();static \u0275cmp=(function(){let e=[[["caption"]],[["colgroup"],["col"]],"*"],t=["caption","colgroup, col","*"];function a(l,s){l&1&&se(0,2)}function r(l,s){l&1&&(f(0,"thead",0),_t(1,1),g(),f(2,"tbody",2),_t(3,3)(4,4),g(),f(5,"tfoot",0),_t(6,5),g())}function o(l,s){l&1&&_t(0,1)(1,3)(2,4)(3,5)}return L({type:n,selectors:[["mat-table"],["table","mat-table",""]],hostAttrs:[1,"mat-mdc-table","mdc-data-table__table"],hostVars:2,hostBindings:function(s,u){s&2&&ee("mat-table-fixed-layout",u.fixedLayout)},exportAs:["matTable"],features:[ve([{provide:bu,useExisting:n},{provide:Yt,useExisting:n},{provide:Lr,useValue:null}]),ie],ngContentSelectors:t,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["role","rowgroup",1,"mdc-data-table__content"],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(s,u){s&1&&(je(e),se(0),se(1,1),he(2,a,1,0),he(3,r,7,0)(4,o,4,0)),s&2&&(v(2),fe(u._isServer?2:-1),v(),fe(u._isNativeHtmlTable?3:4))},dependencies:[hu,pu,gu,fu],styles:[`.mat-mdc-table-sticky {
  position: sticky !important;
}

mat-table {
  display: block;
}

mat-header-row {
  min-height: var(--%NS%mat-table-header-container-height, 56px);
}

mat-row {
  min-height: var(--%NS%mat-table-row-item-container-height, 52px);
}

mat-footer-row {
  min-height: var(--%NS%mat-table-footer-container-height, 52px);
}

mat-row, mat-header-row, mat-footer-row {
  display: flex;
  border-width: 0;
  border-bottom-width: 1px;
  border-style: solid;
  align-items: center;
  box-sizing: border-box;
}

mat-cell:first-of-type, mat-header-cell:first-of-type, mat-footer-cell:first-of-type {
  padding-left: 24px;
}
[dir=rtl] mat-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type) {
  padding-left: 0;
  padding-right: 24px;
}
mat-cell:last-of-type, mat-header-cell:last-of-type, mat-footer-cell:last-of-type {
  padding-right: 24px;
}
[dir=rtl] mat-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type) {
  padding-right: 0;
  padding-left: 24px;
}

mat-cell, mat-header-cell, mat-footer-cell {
  flex: 1;
  display: flex;
  align-items: center;
  overflow: hidden;
  word-wrap: break-word;
  min-height: inherit;
}

.mat-mdc-table {
  min-width: 100%;
  border: 0;
  border-spacing: 0;
  table-layout: auto;
  white-space: normal;
  background-color: var(--%NS%mat-table-background-color, var(--%NS%mat-sys-surface));
}

.mat-table-fixed-layout {
  table-layout: fixed;
}

.mdc-data-table__cell {
  box-sizing: border-box;
  overflow: hidden;
  text-align: start;
  text-overflow: ellipsis;
}

.mdc-data-table__cell,
.mdc-data-table__header-cell {
  padding: 0 16px;
}

.mat-mdc-header-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--%NS%mat-table-header-container-height, 56px);
  color: var(--%NS%mat-table-header-headline-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--%NS%mat-table-header-headline-font, var(--%NS%mat-sys-title-small-font, Roboto, sans-serif));
  line-height: var(--%NS%mat-table-header-headline-line-height, var(--%NS%mat-sys-title-small-line-height));
  font-size: var(--%NS%mat-table-header-headline-size, var(--%NS%mat-sys-title-small-size, 14px));
  font-weight: var(--%NS%mat-table-header-headline-weight, var(--%NS%mat-sys-title-small-weight, 500));
}

.mat-mdc-row {
  height: var(--%NS%mat-table-row-item-container-height, 52px);
  color: var(--%NS%mat-table-row-item-label-text-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
}

.mat-mdc-row,
.mdc-data-table__content {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-table-row-item-label-text-font, var(--%NS%mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--%NS%mat-table-row-item-label-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-table-row-item-label-text-size, var(--%NS%mat-sys-body-medium-size, 14px));
  font-weight: var(--%NS%mat-table-row-item-label-text-weight, var(--%NS%mat-sys-body-medium-weight));
}

.mat-mdc-footer-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--%NS%mat-table-footer-container-height, 52px);
  color: var(--%NS%mat-table-row-item-label-text-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--%NS%mat-table-footer-supporting-text-font, var(--%NS%mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--%NS%mat-table-footer-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-table-footer-supporting-text-size, var(--%NS%mat-sys-body-medium-size, 14px));
  font-weight: var(--%NS%mat-table-footer-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight));
  letter-spacing: var(--%NS%mat-table-footer-supporting-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
}

.mat-mdc-header-cell {
  border-bottom-color: var(--%NS%mat-table-row-item-outline-color, var(--%NS%mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--%NS%mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--%NS%mat-table-header-headline-tracking, var(--%NS%mat-sys-title-small-tracking));
  font-weight: inherit;
  line-height: inherit;
  box-sizing: border-box;
  text-overflow: ellipsis;
  overflow: hidden;
  outline: none;
  text-align: start;
}
.mdc-data-table__row:last-child > .mat-mdc-header-cell {
  border-bottom: none;
}

.mat-mdc-cell {
  border-bottom-color: var(--%NS%mat-table-row-item-outline-color, var(--%NS%mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--%NS%mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--%NS%mat-table-row-item-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
  line-height: inherit;
}
.mdc-data-table__row:last-child > .mat-mdc-cell {
  border-bottom: none;
}

.mat-mdc-footer-cell {
  letter-spacing: var(--%NS%mat-table-row-item-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
}

mat-row.mat-mdc-row,
mat-header-row.mat-mdc-header-row,
mat-footer-row.mat-mdc-footer-row {
  border-bottom: none;
}

.mat-mdc-table tbody,
.mat-mdc-table tfoot,
.mat-mdc-table thead,
.mat-mdc-cell,
.mat-mdc-footer-cell,
.mat-mdc-header-row,
.mat-mdc-row,
.mat-mdc-footer-row,
.mat-mdc-table .mat-mdc-header-cell {
  background: inherit;
}

.mat-mdc-table mat-header-row.mat-mdc-header-row,
.mat-mdc-table mat-row.mat-mdc-row,
.mat-mdc-table mat-footer-row.mat-mdc-footer-cell {
  height: unset;
}

mat-header-cell.mat-mdc-header-cell,
mat-cell.mat-mdc-cell,
mat-footer-cell.mat-mdc-footer-cell {
  align-self: stretch;
}
`],encapsulation:2,changeDetection:1})})()}return n})(),nb=(()=>{class n extends el{static \u0275fac=(()=>{let e;return function(a){return(e||(e=ye(n)))(a||n)}})();static \u0275dir=R({type:n,selectors:[["","matCellDef",""]],features:[ve([{provide:el,useExisting:n}]),ie]})}return n})(),ib=(()=>{class n extends tl{static \u0275fac=(()=>{let e;return function(a){return(e||(e=ye(n)))(a||n)}})();static \u0275dir=R({type:n,selectors:[["","matHeaderCellDef",""]],features:[ve([{provide:tl,useExisting:n}]),ie]})}return n})();var ab=(()=>{class n extends ca{get name(){return this._name}set name(e){this._setNameInput(e)}_updateColumnCssClassName(){super._updateColumnCssClassName(),this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`)}static \u0275fac=(()=>{let e;return function(a){return(e||(e=ye(n)))(a||n)}})();static \u0275dir=R({type:n,selectors:[["","matColumnDef",""]],inputs:{name:[0,"matColumnDef","name"]},features:[ve([{provide:ca,useExisting:n}]),ie]})}return n})(),rb=(()=>{class n extends Zg{static \u0275fac=(()=>{let e;return function(a){return(e||(e=ye(n)))(a||n)}})();static \u0275dir=R({type:n,selectors:[["mat-header-cell"],["th","mat-header-cell",""]],hostAttrs:["role","columnheader",1,"mat-mdc-header-cell","mdc-data-table__header-cell"],features:[ie]})}return n})();var ob=(()=>{class n extends Qg{static \u0275fac=(()=>{let e;return function(a){return(e||(e=ye(n)))(a||n)}})();static \u0275dir=R({type:n,selectors:[["mat-cell"],["td","mat-cell",""]],hostAttrs:[1,"mat-mdc-cell","mdc-data-table__cell"],features:[ie]})}return n})();var sb=(()=>{class n extends Vr{static \u0275fac=(()=>{let e;return function(a){return(e||(e=ye(n)))(a||n)}})();static \u0275dir=R({type:n,selectors:[["","matHeaderRowDef",""]],inputs:{columns:[0,"matHeaderRowDef","columns"],sticky:[2,"matHeaderRowDefSticky","sticky",K]},features:[ve([{provide:Vr,useExisting:n}]),ie]})}return n})();var lb=(()=>{class n extends nl{static \u0275fac=(()=>{let e;return function(a){return(e||(e=ye(n)))(a||n)}})();static \u0275dir=R({type:n,selectors:[["","matRowDef",""]],inputs:{columns:[0,"matRowDefColumns","columns"],when:[0,"matRowDefWhen","when"]},features:[ve([{provide:nl,useExisting:n}]),ie]})}return n})(),db=(()=>{class n extends uu{static \u0275fac=(()=>{let e;return function(a){return(e||(e=ye(n)))(a||n)}})();static \u0275cmp=L({type:n,selectors:[["mat-header-row"],["tr","mat-header-row",""]],hostAttrs:["role","row",1,"mat-mdc-header-row","mdc-data-table__header-row"],exportAs:["matHeaderRow"],features:[ve([{provide:uu,useExisting:n}]),ie],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,a){t&1&&_t(0,0)},dependencies:[vi],encapsulation:2,changeDetection:1})}return n})();var cb=(()=>{class n extends mu{static \u0275fac=(()=>{let e;return function(a){return(e||(e=ye(n)))(a||n)}})();static \u0275cmp=L({type:n,selectors:[["mat-row"],["tr","mat-row",""]],hostAttrs:["role","row",1,"mat-mdc-row","mdc-data-table__row"],exportAs:["matRow"],features:[ve([{provide:mu,useExisting:n}]),ie],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,a){t&1&&_t(0,0)},dependencies:[vi],encapsulation:2,changeDetection:1})}return n})();var ub=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=Q({type:n});static \u0275inj=X({imports:[eb,$e]})}return n})();function rD(){return{ids:[],entities:{}}}function oD(){function n(i={}){return Object.assign(rD(),i)}return{getInitialState:n}}function sD(){function n(i){let e=o=>o.ids,t=o=>o.entities,a=gn(e,t,(o,l)=>o.map(s=>l[s])),r=gn(e,o=>o.length);return i?{selectIds:gn(i,e),selectEntities:gn(i,t),selectAll:gn(i,a),selectTotal:gn(i,r)}:{selectIds:e,selectEntities:t,selectAll:a,selectTotal:r}}return{getSelectors:n}}var W;(function(n){n[n.EntitiesOnly=0]="EntitiesOnly",n[n.Both=1]="Both",n[n.None=2]="None"})(W||(W={}));function Te(n){return function(e,t){let a={ids:[...t.ids],entities:b({},t.entities)},r=n(e,a);return r===W.Both?Object.assign({},t,a):r===W.EntitiesOnly?G(b({},t),{entities:a.entities}):t}}function _n(n,i){let e=i(n);return ni()&&e===void 0&&console.warn("@ngrx/entity: The entity passed to the `selectId` implementation returned undefined.","You should probably provide your own `selectId` implementation.","The entity that was passed:",n,"The `selectId` implementation:",i.toString()),e}function mb(n){function i(C,w){let x=_n(C,n);return x in w.entities?W.None:(w.ids.push(x),w.entities[x]=C,W.Both)}function e(C,w){let x=!1;for(let S of C)x=i(S,w)!==W.None||x;return x?W.Both:W.None}function t(C,w){return w.ids=[],w.entities={},e(C,w),W.Both}function a(C,w){let x=_n(C,n);return x in w.entities?(w.entities[x]=C,W.EntitiesOnly):(w.ids.push(x),w.entities[x]=C,W.Both)}function r(C,w){let x=C.map(S=>a(S,w));switch(!0){case x.some(S=>S===W.Both):return W.Both;case x.some(S=>S===W.EntitiesOnly):return W.EntitiesOnly;default:return W.None}}function o(C,w){return l([C],w)}function l(C,w){let S=(C instanceof Array?C:w.ids.filter(k=>C(w.entities[k]))).filter(k=>k in w.entities).map(k=>delete w.entities[k]).length>0;return S&&(w.ids=w.ids.filter(k=>k in w.entities)),S?W.Both:W.None}function s(C){return Object.assign({},C,{ids:[],entities:{}})}function u(C,w,x){let S=x.entities[w.id],k=Object.assign({},S,w.changes),I=_n(k,n),F=I!==w.id;return F&&(C[w.id]=I,delete x.entities[w.id]),x.entities[I]=k,F}function c(C,w){return m([C],w)}function m(C,w){let x={};return C=C.filter(k=>k.id in w.entities),C.length>0?C.filter(I=>u(x,I,w)).length>0?(w.ids=w.ids.map(I=>x[I]||I),W.Both):W.EntitiesOnly:W.None}function p(C,w){let S=w.ids.reduce((k,I)=>{let F=C(w.entities[I]);return F!==w.entities[I]&&k.push({id:I,changes:F}),k},[]).filter(({id:k})=>k in w.entities);return m(S,w)}function h({map:C,id:w},x){let S=x.entities[w];if(!S)return W.None;let k=C(S);return c({id:w,changes:k},x)}function _(C,w){return D([C],w)}function D(C,w){let x=[],S=[];for(let F of C){let me=_n(F,n);me in w.entities?S.push({id:me,changes:F}):x.push(F)}let k=m(S,w),I=e(x,w);switch(!0){case(I===W.None&&k===W.None):return W.None;case(I===W.Both||k===W.Both):return W.Both;default:return W.EntitiesOnly}}return{removeAll:s,addOne:Te(i),addMany:Te(e),setAll:Te(t),setOne:Te(a),setMany:Te(r),updateOne:Te(c),updateMany:Te(m),upsertOne:Te(_),upsertMany:Te(D),removeOne:Te(o),removeMany:Te(l),map:Te(p),mapOne:Te(h)}}function lD(n,i){let{removeOne:e,removeMany:t,removeAll:a}=mb(n);function r(x,S){return o([x],S)}function o(x,S){let k=x.filter(I=>!(_n(I,n)in S.entities));return k.length===0?W.None:(w(k,S),W.Both)}function l(x,S){return S.entities={},S.ids=[],o(x,S),W.Both}function s(x,S){let k=_n(x,n);return k in S.entities?(S.ids=S.ids.filter(I=>I!==k),w([x],S),W.Both):r(x,S)}function u(x,S){let k=x.map(I=>s(I,S));switch(!0){case k.some(I=>I===W.Both):return W.Both;case k.some(I=>I===W.EntitiesOnly):return W.EntitiesOnly;default:return W.None}}function c(x,S){return p([x],S)}function m(x,S,k){if(!(S.id in k.entities))return!1;let I=k.entities[S.id],F=Object.assign({},I,S.changes),me=_n(F,n);return delete k.entities[S.id],x.push(F),me!==S.id}function p(x,S){let k=[],I=x.filter(F=>m(k,F,S)).length>0;if(k.length===0)return W.None;{let F=S.ids,me=[];return S.ids=S.ids.filter((_e,Ve)=>_e in S.entities?!0:(me.push(Ve),!1)),w(k,S),!I&&me.every(_e=>S.ids[_e]===F[_e])?W.EntitiesOnly:W.Both}}function h(x,S){let k=S.ids.reduce((I,F)=>{let me=x(S.entities[F]);return me!==S.entities[F]&&I.push({id:F,changes:me}),I},[]);return p(k,S)}function _({map:x,id:S},k){let I=k.entities[S];if(!I)return W.None;let F=x(I);return c({id:S,changes:F},k)}function D(x,S){return C([x],S)}function C(x,S){let k=[],I=[];for(let _e of x){let Ve=_n(_e,n);Ve in S.entities?I.push({id:Ve,changes:_e}):k.push(_e)}let F=p(I,S),me=o(k,S);switch(!0){case(me===W.None&&F===W.None):return W.None;case(me===W.Both||F===W.Both):return W.Both;default:return W.EntitiesOnly}}function w(x,S){x.sort(i);let k=[],I=0,F=0;for(;I<x.length&&F<S.ids.length;){let me=x[I],_e=_n(me,n),Ve=S.ids[F],J=S.entities[Ve];i(me,J)<=0?(k.push(_e),I++):(k.push(Ve),F++)}I<x.length?S.ids=k.concat(x.slice(I).map(n)):S.ids=k.concat(S.ids.slice(F)),x.forEach((me,_e)=>{S.entities[n(me)]=me})}return{removeOne:e,removeMany:t,removeAll:a,addOne:Te(r),updateOne:Te(c),upsertOne:Te(D),setAll:Te(l),setOne:Te(s),setMany:Te(u),addMany:Te(o),updateMany:Te(p),upsertMany:Te(C),map:Te(h),mapOne:Te(_)}}function pb(n={}){let{selectId:i,sortComparer:e}={selectId:n.selectId??(o=>o.id),sortComparer:n.sortComparer??!1},t=oD(),a=sD(),r=e?lD(i,e):mb(i);return b(b(b({selectId:i,sortComparer:e},t),a),r)}var Br=pb(),hb=Br.getInitialState({loading:!1,error:null});var dD=Xd("students"),cD=Br.getSelectors(dD),fb=cD.selectAll,gb=n=>n.students.loading,bb=n=>n.students.error;var ua=Tt("[Students Table] Load student records"),il=Tt("[Students API] Load student records success",fn()),al=Tt("[Students API] Load student records failure",fn());var uD=()=>[];function mD(n,i){n&1&&(f(0,"p"),E(1,"Loading student records..."),g())}function pD(n,i){n&1&&(f(0,"p",2),E(1),g()),n&2&&(v(),ke(i))}function hD(n,i){n&1&&(f(0,"th",21),E(1,"Name"),g())}function fD(n,i){if(n&1&&(f(0,"td",22),E(1),g()),n&2){let e=i.$implicit;v(),ke(e.name)}}function gD(n,i){n&1&&(f(0,"th",21),E(1,"City"),g())}function bD(n,i){if(n&1&&(f(0,"td",22),E(1),g()),n&2){let e=i.$implicit;v(),ke(e.city)}}function yD(n,i){n&1&&(f(0,"th",21),E(1,"Country"),g())}function vD(n,i){if(n&1&&(f(0,"td",22),E(1),g()),n&2){let e=i.$implicit;v(),ke(e.country)}}function _D(n,i){n&1&&(f(0,"th",21),E(1,"Subject"),g())}function CD(n,i){if(n&1&&(f(0,"td",22),E(1),g()),n&2){let e=i.$implicit;v(),ke(e.subjects)}}function wD(n,i){n&1&&(f(0,"th",21),E(1,"Passport Declaration"),g())}function DD(n,i){if(n&1&&(f(0,"td",22),E(1),g()),n&2){let e=i.$implicit;v(),ke(e.passportDeclaration)}}function SD(n,i){n&1&&(f(0,"th",21),E(1,"Fitness Declaration"),g())}function xD(n,i){if(n&1&&(f(0,"td",22),E(1),g()),n&2){let e=i.$implicit;v(),ke(e.fitnessDeclaration)}}function ED(n,i){n&1&&(f(0,"th",21),E(1,"Course Name"),g())}function MD(n,i){if(n&1&&(f(0,"td",22),E(1),g()),n&2){let e=i.$implicit;v(),ke(e.courseName)}}function RD(n,i){n&1&&(f(0,"th",21),E(1,"Date"),g())}function kD(n,i){if(n&1&&(f(0,"td",22),E(1),g()),n&2){let e=i.$implicit;v(),ke(e.date)}}function AD(n,i){n&1&&(f(0,"th",21),E(1,"State"),g())}function ID(n,i){if(n&1&&(f(0,"td",22),E(1),g()),n&2){let e=i.$implicit;v(),ke(e.state)}}function ND(n,i){n&1&&(f(0,"th",21),E(1,"Street"),g())}function TD(n,i){if(n&1&&(f(0,"td",22),E(1),g()),n&2){let e=i.$implicit;v(),ke(e.street)}}function OD(n,i){n&1&&(f(0,"th",21),E(1,"email"),g())}function FD(n,i){if(n&1&&(f(0,"td",22),E(1),g()),n&2){let e=i.$implicit;v(),ke(e.email)}}function PD(n,i){n&1&&(f(0,"th",21),E(1,"Phone"),g())}function LD(n,i){if(n&1&&(f(0,"td",22),E(1),g()),n&2){let e=i.$implicit;v(),ke(e.phone)}}function VD(n,i){n&1&&(f(0,"th",21),E(1,"Postal Code"),g())}function BD(n,i){if(n&1&&(f(0,"td",22),E(1),g()),n&2){let e=i.$implicit;v(),ke(e.postalCode)}}function jD(n,i){n&1&&le(0,"tr",23)}function zD(n,i){n&1&&le(0,"tr",24)}var rl=class n{store=d(zt);studentsControl=new St("",{nonNullable:!0});displayColumns=["name","city","country","subjects","passportDeclaration","fitnessDeclaration","courseName","date","state","street","email","phone","postalCode"];loading$=this.store.select(gb);error$=this.store.select(bb);dataSource$=qt([this.store.select(fb),this.studentsControl.valueChanges.pipe(nt(this.studentsControl.value))]).pipe(Y(([i,e])=>{let t=e.trim().toLowerCase();return t?i.filter(a=>a.name.toLowerCase().includes(t)||String(a.id).includes(t)):i}));ngOnInit(){this.store.dispatch(ua())}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=L({type:n,selectors:[["app-students-table"]],decls:52,vars:13,consts:[[1,"container"],["matInput","","placeholder","Filter Students",3,"formControl"],["role","alert"],["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","name"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","city"],["matColumnDef","country"],["matColumnDef","subjects"],["matColumnDef","passportDeclaration"],["matColumnDef","fitnessDeclaration"],["matColumnDef","courseName"],["matColumnDef","date"],["matColumnDef","state"],["matColumnDef","street"],["matColumnDef","email"],["matColumnDef","phone"],["matColumnDef","postalCode"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row",""]],template:function(e,t){if(e&1&&(f(0,"div",0)(1,"mat-form-field")(2,"mat-label"),E(3,"Students Name/ID"),g(),f(4,"input",1),Fe(),g()(),he(5,mD,2,0,"p"),ao(6,"async"),he(7,pD,2,1,"p",2),ao(8,"async"),f(9,"table",3),ao(10,"async"),st(11,4),Re(12,hD,2,0,"th",5)(13,fD,2,1,"td",6),lt(),st(14,7),Re(15,gD,2,0,"th",5)(16,bD,2,1,"td",6),lt(),st(17,8),Re(18,yD,2,0,"th",5)(19,vD,2,1,"td",6),lt(),st(20,9),Re(21,_D,2,0,"th",5)(22,CD,2,1,"td",6),lt(),st(23,10),Re(24,wD,2,0,"th",5)(25,DD,2,1,"td",6),lt(),st(26,11),Re(27,SD,2,0,"th",5)(28,xD,2,1,"td",6),lt(),st(29,12),Re(30,ED,2,0,"th",5)(31,MD,2,1,"td",6),lt(),st(32,13),Re(33,RD,2,0,"th",5)(34,kD,2,1,"td",6),lt(),st(35,14),Re(36,AD,2,0,"th",5)(37,ID,2,1,"td",6),lt(),st(38,15),Re(39,ND,2,0,"th",5)(40,TD,2,1,"td",6),lt(),st(41,16),Re(42,OD,2,0,"th",5)(43,FD,2,1,"td",6),lt(),st(44,17),Re(45,PD,2,0,"th",5)(46,LD,2,1,"td",6),lt(),st(47,18),Re(48,VD,2,0,"th",5)(49,BD,2,1,"td",6),lt(),Re(50,jD,1,0,"tr",19)(51,zD,1,0,"tr",20),g()()),e&2){let a;v(4),B("formControl",t.studentsControl),Pe(),v(),fe(ro(6,6,t.loading$)?5:-1),v(2),fe((a=ro(8,8,t.error$))?7:-1,a),v(2),B("dataSource",ro(10,10,t.dataSource$)??um(12,uD)),v(41),B("matHeaderRowDef",t.displayColumns),v(),B("matRowDefColumns",t.displayColumns)}},dependencies:[ub,tb,ib,sb,ab,nb,lb,rb,ob,db,cb,zn,jn,sn,$t,Gt,Pn,on,On,gr,Yl],styles:[".container[_ngcontent-%COMP%]{width:min(100%,960px);overflow-x:auto}table[_ngcontent-%COMP%]{width:100%}"]})};var vu=new y("MAT_DATE_LOCALE",{providedIn:"root",factory:()=>d(jl)}),ma="Method not implemented",ut=class{locale;_localeChanges=new N;localeChanges=this._localeChanges;setTime(i,e,t,a){throw new Error(ma)}getHours(i){throw new Error(ma)}getMinutes(i){throw new Error(ma)}getSeconds(i){throw new Error(ma)}parseTime(i,e){throw new Error(ma)}addSeconds(i,e){throw new Error(ma)}getValidDateOrNull(i){return this.isDateInstance(i)&&this.isValid(i)?i:null}deserialize(i){return i==null||this.isDateInstance(i)&&this.isValid(i)?i:this.invalid()}setLocale(i){this.locale=i,this._localeChanges.next()}compareDate(i,e){return this.getYear(i)-this.getYear(e)||this.getMonth(i)-this.getMonth(e)||this.getDate(i)-this.getDate(e)}compareTime(i,e){return this.getHours(i)-this.getHours(e)||this.getMinutes(i)-this.getMinutes(e)||this.getSeconds(i)-this.getSeconds(e)}sameDate(i,e){if(i&&e){let t=this.isValid(i),a=this.isValid(e);return t&&a?!this.compareDate(i,e):t==a}return i==e}sameTime(i,e){if(i&&e){let t=this.isValid(i),a=this.isValid(e);return t&&a?!this.compareTime(i,e):t==a}return i==e}clampDate(i,e,t){return e&&this.compareDate(i,e)<0?e:t&&this.compareDate(i,t)>0?t:i}},Yn=new y("mat-date-formats");var yb=Os();function ml(n){return new ol(n.get(ln),n.get(q))}var ol=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(i,e){this._viewportRuler=i,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let i=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=i.style.left||"",this._previousHTMLStyles.top=i.style.top||"",i.style.left=Ge(-this._previousScrollPosition.left),i.style.top=Ge(-this._previousScrollPosition.top),i.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let i=this._document.documentElement,e=this._document.body,t=i.style,a=e.style,r=t.scrollBehavior||"",o=a.scrollBehavior||"";this._isEnabled=!1,t.left=this._previousHTMLStyles.left,t.top=this._previousHTMLStyles.top,i.classList.remove("cdk-global-scrollblock"),yb&&(t.scrollBehavior=a.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),yb&&(t.scrollBehavior=r,a.scrollBehavior=o)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,t=this._viewportRuler.getViewportSize();return e.scrollHeight>t.height||e.scrollWidth>t.width}};function xb(n,i){return new sl(n.get(yi),n.get(P),n.get(ln),i)}var sl=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(i,e,t,a){this._scrollDispatcher=i,this._ngZone=e,this._viewportRuler=t,this._config=a}attach(i){this._overlayRef,this._overlayRef=i}enable(){if(this._scrollSubscription)return;let i=this._scrollDispatcher.scrolled(0).pipe(be(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=i.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=i.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var jr=class{enable(){}disable(){}attach(){}};function Cu(n,i){return i.some(e=>{let t=n.bottom<e.top,a=n.top>e.bottom,r=n.right<e.left,o=n.left>e.right;return t||a||r||o})}function vb(n,i){return i.some(e=>{let t=n.top<e.top,a=n.bottom>e.bottom,r=n.left<e.left,o=n.right>e.right;return t||a||r||o})}function fa(n,i){return new ll(n.get(yi),n.get(ln),n.get(P),i)}var ll=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(i,e,t,a){this._scrollDispatcher=i,this._viewportRuler=e,this._ngZone=t,this._config=a}attach(i){this._overlayRef,this._overlayRef=i}enable(){if(!this._scrollSubscription){let i=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(i).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:t,height:a}=this._viewportRuler.getViewportSize();Cu(e,[{width:t,height:a,bottom:a,right:t,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},Eb=(()=>{class n{_injector=d(re);noop=()=>new jr;close=e=>xb(this._injector,e);block=()=>ml(this._injector);reposition=e=>fa(this._injector,e);static \u0275fac=function(t){return new(t||n)};static \u0275prov=O({token:n,factory:n.\u0275fac})}return n})(),pa=class{positionStrategy;scrollStrategy=new jr;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(i){if(i){let e=Object.keys(i);for(let t of e)i[t]!==void 0&&(this[t]=i[t])}}};var dl=class{connectionPair;scrollableViewProperties;constructor(i,e){this.connectionPair=i,this.scrollableViewProperties=e}};var Mb=(()=>{class n{_attachedOverlays=[];_document=d(q);_isAttached=!1;ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let t=this._attachedOverlays.indexOf(e);t>-1&&this._attachedOverlays.splice(t,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,t,a){return a.observers.length<1?!1:e.eventPredicate?e.eventPredicate(t):!0}static \u0275fac=function(t){return new(t||n)};static \u0275prov=O({token:n,factory:n.\u0275fac})}return n})(),Rb=(()=>{class n extends Mb{_ngZone=d(P);_renderer=d(Je).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let t=this._attachedOverlays;for(let a=t.length-1;a>-1;a--){let r=t[a];if(this.canReceiveEvent(r,e,r._keydownEvents)){this._ngZone.run(()=>r._keydownEvents.next(e));break}}};static \u0275fac=function(t){return new(t||n)};static \u0275prov=O({token:n,factory:n.\u0275fac})}return n})(),kb=(()=>{class n extends Mb{_platform=d(de);_ngZone=d(P);_renderer=d(Je).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let t=this._document.body,a={capture:!0},r=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[r.listen(t,"pointerdown",this._pointerDownListener,a),r.listen(t,"click",this._clickListener,a),r.listen(t,"auxclick",this._clickListener,a),r.listen(t,"contextmenu",this._clickListener,a)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=t.style.cursor,t.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=wt(e)};_clickListener=e=>{let t=wt(e),a=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:t;this._pointerDownEventTarget=null;let r=this._attachedOverlays.slice();for(let o=r.length-1;o>-1;o--){let l=r[o],s=l._outsidePointerEvents;if(!(!l.hasAttached()||!this.canReceiveEvent(l,e,s))){if(_b(l.overlayElement,t)||_b(l.overlayElement,a))break;this._ngZone?this._ngZone.run(()=>s.next(e)):s.next(e)}}};static \u0275fac=function(t){return new(t||n)};static \u0275prov=O({token:n,factory:n.\u0275fac})}return n})();function _b(n,i){let e=typeof ShadowRoot<"u"&&ShadowRoot,t=i;for(;t;){if(t===n)return!0;t=e&&t instanceof ShadowRoot?t.host:t.parentNode}return!1}var Ab=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=L({type:n,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(t,a){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2})}return n})(),Ib=(()=>{class n{_platform=d(de);_containerElement;_document=d(q);_styleLoader=d(He);ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||Uc()){let a=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let r=0;r<a.length;r++)a[r].remove()}let t=this._document.createElement("div");t.classList.add(e),Uc()?t.setAttribute("platform","test"):this._platform.isBrowser||t.setAttribute("platform","server"),this._document.body.appendChild(t),this._containerElement=t}_loadStyles(){this._styleLoader.load(Ab)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=O({token:n,factory:n.\u0275fac})}return n})(),wu=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(i,e,t,a){this._renderer=e,this._ngZone=t,this.element=i.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",a)}detach(){this._ngZone.runOutsideAngular(()=>{let i=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(i,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),i.style.pointerEvents="none",i.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function Du(n){return n&&n.nodeType===1}var _u=Z([]),cl=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new N;_attachments=new N;_detachments=new N;_positionStrategy;_scrollStrategy;_locationChanges;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new N;_outsidePointerEvents=new N;_afterNextRenderRef;constructor(i,e,t,a,r,o,l,s,u,c=!1,m,p){this._portalOutlet=i,this._host=e,this._pane=t,this._config=a,this._ngZone=r,this._keyboardDispatcher=o,this._document=l,this._location=s,this._outsideClickDispatcher=u,this._animationsDisabled=c,this._injector=m,this._renderer=p,a.scrollStrategy&&(this._scrollStrategy=a.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=a.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(i){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(i);if(this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),ge(()=>{_u.update(t=>t.includes(this)?t:[...t,this])}),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=Ne(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation===!0||this._config.disposeOnNavigation==="pop-state"){let t=this._location.subscribe(()=>this.dispose());this._locationChanges=()=>t.unsubscribe()}else this._config.disposeOnNavigation==="url-change"&&(this._locationChanges=this._location.onUrlChange(()=>this.dispose()));return this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let i=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges?.(),this._outsideClickDispatcher.remove(this),ge(()=>{_u.update(e=>e.filter(t=>t!==this))}),i}dispose(){if(this._disposed)return;let i=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges?.(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,i&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0,ge(()=>{_u.update(e=>e.filter(t=>t!==this))})}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(i){i!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=i,this.hasAttached()&&(i.attach(this),this.updatePosition()))}updateSize(i){this._config=b(b({},this._config),i),this._updateElementSize()}setDirection(i){this._config=G(b({},this._config),{direction:i}),this._updateElementDirection()}addPanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!0)}removePanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!1)}getDirection(){let i=this._config.direction;return i?typeof i=="string"?i:i.value:"ltr"}updateScrollStrategy(i){i!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=i,this.hasAttached()&&(i.attach(this),i.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let i=this._pane.style;i.width=Ge(this._config.width),i.height=Ge(this._config.height),i.minWidth=Ge(this._config.minWidth),i.minHeight=Ge(this._config.minHeight),i.maxWidth=Ge(this._config.maxWidth),i.maxHeight=Ge(this._config.maxHeight)}_togglePointerEvents(i){this._pane.style.pointerEvents=i?"":"none"}_attachHost(){if(!this._host.parentElement){let i=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;Du(i)?i.after(this._host):i?.type==="parent"?i.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let i="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new wu(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(i))}):this._backdropRef.element.classList.add(i)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(i,e,t){let a=Ji(e||[]).filter(r=>!!r);a.length&&(t?i.classList.add(...a):i.classList.remove(...a))}_detachContentWhenEmpty(){let i=!1;try{this._detachContentAfterRenderRef=Ne(()=>{i=!0,this._detachContent()},{injector:this._injector})}catch(e){if(i)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let i=this._scrollStrategy;i?.disable(),i?.detach?.()}},Cb="cdk-overlay-connected-position-bounding-box",UD=/([A-Za-z%]+)$/;function ga(n,i){return new ha(i,n.get(ln),n.get(q),n.get(de),n.get(Ib))}var ha=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new N;_resizeSubscription=Ee.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(i,e,t,a,r){this._viewportRuler=e,this._document=t,this._platform=a,this._overlayContainer=r,this.setOrigin(i)}attach(i){this._overlayRef&&this._overlayRef,this._validatePositions(),i.hostElement.classList.add(Cb),this._overlayRef=i,this._boundingBox=i.hostElement,this._pane=i.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let i=this._originRect,e=this._overlayRect,t=this._viewportRect,a=this._containerRect,r=[],o;for(let l of this._preferredPositions){let s=this._getOriginPoint(i,a,l),u=this._getOverlayPoint(s,e,l),c=this._getOverlayFit(u,e,t,l);if(c.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(l,s);return}if(this._canFitWithFlexibleDimensions(c,u,t)){r.push({position:l,origin:s,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(s,l)});continue}(!o||o.overlayFit.visibleArea<c.visibleArea)&&(o={overlayFit:c,overlayPoint:u,originPoint:s,position:l,overlayRect:e})}if(r.length){let l=null,s=-1;for(let u of r){let c=u.boundingBoxRect.width*u.boundingBoxRect.height*(u.position.weight||1);c>s&&(s=c,l=u)}this._isPushed=!1,this._applyPosition(l.position,l.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(o.position,o.originPoint);return}this._applyPosition(o.position,o.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&_i(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(Cb),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let i=this._lastPosition;i?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(i,this._getOriginPoint(this._originRect,this._containerRect,i))):this.apply()}withScrollableContainers(i){return this._scrollables=i,this}withPositions(i){return this._preferredPositions=i,i.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(i){return this._viewportMargin=i,this}withFlexibleDimensions(i=!0){return this._hasFlexibleDimensions=i,this}withGrowAfterOpen(i=!0){return this._growAfterOpen=i,this}withPush(i=!0){return this._canPush=i,this}withLockedPosition(i=!0){return this._positionLocked=i,this}setOrigin(i){return this._origin=i,this}withDefaultOffsetX(i){return this._offsetX=i,this}withDefaultOffsetY(i){return this._offsetY=i,this}withTransformOriginOn(i){return this._transformOriginSelector=i,this}withPopoverLocation(i){return this._popoverLocation=i,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof j?this._origin.nativeElement:Du(this._origin)?this._origin:null}_getOriginPoint(i,e,t){let a;if(t.originX=="center")a=i.left+i.width/2;else{let o=this._isRtl()?i.right:i.left,l=this._isRtl()?i.left:i.right;a=t.originX=="start"?o:l}e.left<0&&(a-=e.left);let r;return t.originY=="center"?r=i.top+i.height/2:r=t.originY=="top"?i.top:i.bottom,e.top<0&&(r-=e.top),{x:a,y:r}}_getOverlayPoint(i,e,t){let a;t.overlayX=="center"?a=-e.width/2:t.overlayX==="start"?a=this._isRtl()?-e.width:0:a=this._isRtl()?0:-e.width;let r;return t.overlayY=="center"?r=-e.height/2:r=t.overlayY=="top"?0:-e.height,{x:i.x+a,y:i.y+r}}_getOverlayFit(i,e,t,a){let r=Db(e),{x:o,y:l}=i,s=this._getOffset(a,"x"),u=this._getOffset(a,"y");s&&(o+=s),u&&(l+=u);let c=0-o,m=o+r.width-t.width,p=0-l,h=l+r.height-t.height,_=this._subtractOverflows(r.width,c,m),D=this._subtractOverflows(r.height,p,h),C=_*D;return{visibleArea:C,isCompletelyWithinViewport:r.width*r.height===C,fitsInViewportVertically:D===r.height,fitsInViewportHorizontally:_==r.width}}_canFitWithFlexibleDimensions(i,e,t){if(this._hasFlexibleDimensions){let a=t.bottom-e.y,r=t.right-e.x,o=wb(this._overlayRef.getConfig().minHeight),l=wb(this._overlayRef.getConfig().minWidth),s=i.fitsInViewportVertically||o!=null&&o<=a,u=i.fitsInViewportHorizontally||l!=null&&l<=r;return s&&u}return!1}_pushOverlayOnScreen(i,e,t){if(this._previousPushAmount&&this._positionLocked)return{x:i.x+this._previousPushAmount.x,y:i.y+this._previousPushAmount.y};let a=Db(e),r=this._viewportRect,o=Math.max(i.x+a.width-r.width,0),l=Math.max(i.y+a.height-r.height,0),s=Math.max(r.top-t.top-i.y,0),u=Math.max(r.left-t.left-i.x,0),c=0,m=0;return a.width<=r.width?c=u||-o:c=i.x<this._getViewportMarginStart()?r.left-t.left-i.x:0,a.height<=r.height?m=s||-l:m=i.y<this._getViewportMarginTop()?r.top-t.top-i.y:0,this._previousPushAmount={x:c,y:m},{x:i.x+c,y:i.y+m}}_applyPosition(i,e){if(this._setTransformOrigin(i),this._setOverlayElementStyles(e,i),this._setBoundingBoxStyles(e,i),i.panelClass&&this._addPanelClasses(i.panelClass),this._positionChanges.observers.length){let t=this._getScrollVisibility();if(i!==this._lastPosition||!this._lastScrollVisibility||!HD(this._lastScrollVisibility,t)){let a=new dl(i,t);this._positionChanges.next(a)}this._lastScrollVisibility=t}this._lastPosition=i,this._isInitialRender=!1}_setTransformOrigin(i){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),t,a=i.overlayY;i.overlayX==="center"?t="center":this._isRtl()?t=i.overlayX==="start"?"right":"left":t=i.overlayX==="start"?"left":"right";for(let r=0;r<e.length;r++)e[r].style.transformOrigin=`${t} ${a}`}_calculateBoundingBoxRect(i,e){let t=this._viewportRect,a=this._isRtl(),r,o,l;if(e.overlayY==="top")o=i.y,r=t.height-o+this._getViewportMarginBottom();else if(e.overlayY==="bottom")l=t.height-i.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),r=t.height-l+this._getViewportMarginTop();else{let h=Math.min(t.bottom-i.y+t.top,i.y),_=this._lastBoundingBoxSize.height;r=h*2,o=i.y-h,r>_&&!this._isInitialRender&&!this._growAfterOpen&&(o=i.y-_/2)}let s=e.overlayX==="start"&&!a||e.overlayX==="end"&&a,u=e.overlayX==="end"&&!a||e.overlayX==="start"&&a,c,m,p;if(u)p=t.width-i.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),c=i.x-this._getViewportMarginStart();else if(s)m=i.x,c=t.right-i.x-this._getViewportMarginEnd();else{let h=Math.min(t.right-i.x+t.left,i.x),_=this._lastBoundingBoxSize.width;c=h*2,m=i.x-h,c>_&&!this._isInitialRender&&!this._growAfterOpen&&(m=i.x-_/2)}return{top:o,left:m,bottom:l,right:p,width:c,height:r}}_setBoundingBoxStyles(i,e){let t=this._calculateBoundingBoxRect(i,e);!this._isInitialRender&&!this._growAfterOpen&&(t.height=Math.min(t.height,this._lastBoundingBoxSize.height),t.width=Math.min(t.width,this._lastBoundingBoxSize.width));let a={};if(this._hasExactPosition())a.top=a.left="0",a.bottom=a.right="auto",a.maxHeight=a.maxWidth="",a.width=a.height="100%";else{let r=this._overlayRef.getConfig().maxHeight,o=this._overlayRef.getConfig().maxWidth;a.width=Ge(t.width),a.height=Ge(t.height),a.top=Ge(t.top)||"auto",a.bottom=Ge(t.bottom)||"auto",a.left=Ge(t.left)||"auto",a.right=Ge(t.right)||"auto",e.overlayX==="center"?a.alignItems="center":a.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?a.justifyContent="center":a.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",r&&(a.maxHeight=Ge(r)),o&&(a.maxWidth=Ge(o))}this._lastBoundingBoxSize=t,_i(this._boundingBox.style,a)}_resetBoundingBoxStyles(){_i(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){_i(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(i,e){let t={},a=this._hasExactPosition(),r=this._hasFlexibleDimensions,o=this._overlayRef.getConfig();if(a){let c=this._viewportRuler.getViewportScrollPosition();_i(t,this._getExactOverlayY(e,i,c)),_i(t,this._getExactOverlayX(e,i,c))}else t.position="static";let l="",s=this._getOffset(e,"x"),u=this._getOffset(e,"y");s&&(l+=`translateX(${s}px) `),u&&(l+=`translateY(${u}px)`),t.transform=l.trim(),o.maxHeight&&(a?t.maxHeight=Ge(o.maxHeight):r&&(t.maxHeight="")),o.maxWidth&&(a?t.maxWidth=Ge(o.maxWidth):r&&(t.maxWidth="")),_i(this._pane.style,t)}_getExactOverlayY(i,e,t){let a={top:"",bottom:""},r=this._getOverlayPoint(e,this._overlayRect,i);if(this._isPushed&&(r=this._pushOverlayOnScreen(r,this._overlayRect,t)),i.overlayY==="bottom"){let o=this._document.documentElement.clientHeight;a.bottom=`${o-(r.y+this._overlayRect.height)}px`}else a.top=Ge(r.y);return a}_getExactOverlayX(i,e,t){let a={left:"",right:""},r=this._getOverlayPoint(e,this._overlayRect,i);this._isPushed&&(r=this._pushOverlayOnScreen(r,this._overlayRect,t));let o;if(this._isRtl()?o=i.overlayX==="end"?"left":"right":o=i.overlayX==="end"?"right":"left",o==="right"){let l=this._document.documentElement.clientWidth;a.right=`${l-(r.x+this._overlayRect.width)}px`}else a.left=Ge(r.x);return a}_getScrollVisibility(){let i=this._getOriginRect(),e=this._pane.getBoundingClientRect(),t=this._scrollables.map(a=>a.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:vb(i,t),isOriginOutsideView:Cu(i,t),isOverlayClipped:vb(e,t),isOverlayOutsideView:Cu(e,t)}}_subtractOverflows(i,...e){return e.reduce((t,a)=>t-Math.max(a,0),i)}_getNarrowedViewportRect(){let i=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,t=this._viewportRuler.getViewportScrollPosition();return{top:t.top+this._getViewportMarginTop(),left:t.left+this._getViewportMarginStart(),right:t.left+i-this._getViewportMarginEnd(),bottom:t.top+e-this._getViewportMarginBottom(),width:i-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(i,e){return e==="x"?i.offsetX==null?this._offsetX:i.offsetX:i.offsetY==null?this._offsetY:i.offsetY}_validatePositions(){}_addPanelClasses(i){this._pane&&Ji(i).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(i=>{this._pane.classList.remove(i)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let i=this._origin;if(i instanceof j)return i.nativeElement.getBoundingClientRect();if(i instanceof Element)return i.getBoundingClientRect();let e=i.width||0,t=i.height||0;return{top:i.y,bottom:i.y+t,left:i.x,right:i.x+e,height:t,width:e}}_getContainerRect(){let i=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();i&&(e.style.display="block");let t=e.getBoundingClientRect();return i&&(e.style.display=""),t}};function _i(n,i){for(let e in i)Object.hasOwn(i,e)&&(n[e]=i[e]);return n}function wb(n){if(typeof n!="number"&&n!=null){let[i,e]=n.split(UD);return!e||e==="px"?parseFloat(i):null}return n||null}function Db(n){return{top:Math.floor(n.top),right:Math.floor(n.right),bottom:Math.floor(n.bottom),left:Math.floor(n.left),width:Math.floor(n.width),height:Math.floor(n.height)}}function HD(n,i){return n===i?!0:n.isOriginClipped===i.isOriginClipped&&n.isOriginOutsideView===i.isOriginOutsideView&&n.isOverlayClipped===i.isOverlayClipped&&n.isOverlayOutsideView===i.isOverlayOutsideView}var Sb="cdk-global-overlay-wrapper";function pl(n){return new ul}var ul=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(i){let e=i.getConfig();this._overlayRef=i,this._width&&!e.width&&i.updateSize({width:this._width}),this._height&&!e.height&&i.updateSize({height:this._height}),i.hostElement.classList.add(Sb),this._isDisposed=!1}top(i=""){return this._bottomOffset="",this._topOffset=i,this._alignItems="flex-start",this}left(i=""){return this._xOffset=i,this._xPosition="left",this}bottom(i=""){return this._topOffset="",this._bottomOffset=i,this._alignItems="flex-end",this}right(i=""){return this._xOffset=i,this._xPosition="right",this}start(i=""){return this._xOffset=i,this._xPosition="start",this}end(i=""){return this._xOffset=i,this._xPosition="end",this}width(i=""){return this._overlayRef?this._overlayRef.updateSize({width:i}):this._width=i,this}height(i=""){return this._overlayRef?this._overlayRef.updateSize({height:i}):this._height=i,this}centerHorizontally(i=""){return this.left(i),this._xPosition="center",this}centerVertically(i=""){return this.top(i),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let i=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,t=this._overlayRef.getConfig(),{width:a,height:r,maxWidth:o,maxHeight:l}=t,s=(a==="100%"||a==="100vw")&&(!o||o==="100%"||o==="100vw"),u=(r==="100%"||r==="100vh")&&(!l||l==="100%"||l==="100vh"),c=this._xPosition,m=this._xOffset,p=this._overlayRef.getConfig().direction==="rtl",h="",_="",D="";s?D="flex-start":c==="center"?(D="center",p?_=m:h=m):p?c==="left"||c==="end"?(D="flex-end",h=m):(c==="right"||c==="start")&&(D="flex-start",_=m):c==="left"||c==="start"?(D="flex-start",h=m):(c==="right"||c==="end")&&(D="flex-end",_=m),i.position=this._cssPosition,i.marginLeft=s?"0":h,i.marginTop=u?"0":this._topOffset,i.marginBottom=this._bottomOffset,i.marginRight=s?"0":_,e.justifyContent=D,e.alignItems=u?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let i=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,t=e.style;e.classList.remove(Sb),t.justifyContent=t.alignItems=i.marginTop=i.marginBottom=i.marginLeft=i.marginRight=i.position="",this._overlayRef=null,this._isDisposed=!0}},Nb=(()=>{class n{_injector=d(re);global(){return pl()}flexibleConnectedTo(e){return ga(this._injector,e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=O({token:n,factory:n.\u0275fac})}return n})(),Tb=new y("OVERLAY_DEFAULT_CONFIG");function ba(n,i){n.get(He).load(Ab);let e=n.get(Ib),t=n.get(q),a=n.get(ct),r=n.get(Dn),o=n.get(Xe),l=n.get(Ie,null,{optional:!0})||n.get(Je).createRenderer(null,null),s=new pa(i),u=n.get(Tb,null,{optional:!0})?.usePopover??!0;s.direction=s.direction||o.value,!t.body||!("showPopover"in t.body)?s.usePopover=!1:s.usePopover=i?.usePopover??u;let c=t.createElement("div"),m=t.createElement("div");c.id=a.getId("cdk-overlay-"),c.classList.add("cdk-overlay-pane"),m.appendChild(c),s.usePopover&&(m.setAttribute("popover","manual"),m.classList.add("cdk-overlay-popover"));let p=s.usePopover?s.positionStrategy?.getPopoverInsertionPoint?.():null;return Du(p)?p.after(m):p?.type==="parent"?p.element.appendChild(m):e.getContainerElement().appendChild(m),new cl(new Ys(c,r,n),m,c,s,n.get(P),n.get(Rb),t,n.get(Rn),n.get(kb),i?.disableAnimations??n.get(Di,null,{optional:!0})==="NoopAnimations",n.get(rt),l)}var Ob=(()=>{class n{scrollStrategies=d(Eb);_positionBuilder=d(Nb);_injector=d(re);create(e){return ba(this._injector,e)}position(){return this._positionBuilder}static \u0275fac=function(t){return new(t||n)};static \u0275prov=O({token:n,factory:n.\u0275fac})}return n})();var Su=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=Q({type:n});static \u0275inj=X({providers:[Ob],imports:[$e,qs,Pr,Pr]})}return n})();var $D=20;var GD=new y("mat-tooltip-scroll-strategy",{providedIn:"root",factory:()=>{let n=d(re);return()=>fa(n,{scrollThrottle:$D})}}),WD=new y("mat-tooltip-default-options",{providedIn:"root",factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var Fb="tooltip-panel",YD={passive:!0},qD=8,KD=8,XD=24,ZD=200,Pb=(()=>{class n{_elementRef=d(j);_ngZone=d(P);_platform=d(de);_ariaDescriber=d(rg);_focusMonitor=d(fi);_dir=d(Xe);_injector=d(re);_viewContainerRef=d(Ue);_mediaMatcher=d(ea);_document=d(q);_renderer=d(Ie);_animationsDisabled=tt();_defaultOptions=d(WD,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position="below";_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=QD;_viewportMargin=8;_currentPosition;_cssClassPrefix="mat-mdc";_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(e){e!==this._position&&(this._position=e,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(e){this._positionAtOrigin=yn(e),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(e){let t=yn(e);this._disabled!==t&&(this._disabled=t,t?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(e){this._showDelay=Ln(e)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(e){this._hideDelay=Ln(e),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures="auto";get message(){return this._message}set message(e){let t=this._message;this._message=e!=null?String(e).trim():"",!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(t)}_message="";get tooltipClass(){return this._tooltipClass}set tooltipClass(e){this._tooltipClass=e,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new N;_isDestroyed=!1;constructor(){let e=this._defaultOptions;e&&(this._showDelay=e.showDelay,this._hideDelay=e.hideDelay,e.position&&(this.position=e.position),e.positionAtOrigin&&(this.positionAtOrigin=e.positionAtOrigin),e.touchGestures&&(this.touchGestures=e.touchGestures),e.tooltipClass&&(this.tooltipClass=e.tooltipClass)),this._viewportMargin=qD}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(ce(this._destroyed)).subscribe(e=>{e?e==="keyboard"&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let e=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(t=>t()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(e,this.message,"tooltip"),this._focusMonitor.stopMonitoring(e)}show(e=this.showDelay,t){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let a=this._createOverlay(t);this._detach(),this._portal=this._portal||new Hn(this._tooltipComponent,this._viewContainerRef);let r=this._tooltipInstance=a.attach(this._portal).instance;r._triggerElement=this._elementRef.nativeElement,r._mouseLeaveHideDelay=this._hideDelay,r.afterHidden().pipe(ce(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),r.show(e)}hide(e=this.hideDelay){let t=this._tooltipInstance;t&&(t.isVisible()?t.hide(e):(t._cancelPendingAnimations(),this._detach()))}toggle(e){this._isTooltipVisible()?this.hide():this.show(void 0,e)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(e){if(this._overlayRef){let o=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!e)&&o._origin instanceof j)return this._overlayRef;this._detach()}let t=this._injector.get(yi).getAncestorScrollContainers(this._elementRef),a=`${this._cssClassPrefix}-${Fb}`,r=ga(this._injector,this.positionAtOrigin?e||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(t).withPopoverLocation("global");return r.positionChanges.pipe(ce(this._destroyed)).subscribe(o=>{this._updateCurrentPositionClass(o.connectionPair),this._tooltipInstance&&o.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=ba(this._injector,{direction:this._dir,positionStrategy:r,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,a]:a,scrollStrategy:this._injector.get(GD)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(ce(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(ce(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(ce(this._destroyed)).subscribe(o=>{o.preventDefault(),o.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(ce(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(e){let t=e.getConfig().positionStrategy,a=this._getOrigin(),r=this._getOverlayPosition();t.withPositions([this._addOffset(b(b({},a.main),r.main)),this._addOffset(b(b({},a.fallback),r.fallback))])}_addOffset(e){let t=KD,a=!this._dir||this._dir.value=="ltr";return e.originY==="top"?e.offsetY=-t:e.originY==="bottom"?e.offsetY=t:e.originX==="start"?e.offsetX=a?-t:t:e.originX==="end"&&(e.offsetX=a?t:-t),e}_getOrigin(){let e=!this._dir||this._dir.value=="ltr",t=this.position,a;t=="above"||t=="below"?a={originX:"center",originY:t=="above"?"top":"bottom"}:t=="before"||t=="left"&&e||t=="right"&&!e?a={originX:"start",originY:"center"}:(t=="after"||t=="right"&&e||t=="left"&&!e)&&(a={originX:"end",originY:"center"});let{x:r,y:o}=this._invertPosition(a.originX,a.originY);return{main:a,fallback:{originX:r,originY:o}}}_getOverlayPosition(){let e=!this._dir||this._dir.value=="ltr",t=this.position,a;t=="above"?a={overlayX:"center",overlayY:"bottom"}:t=="below"?a={overlayX:"center",overlayY:"top"}:t=="before"||t=="left"&&e||t=="right"&&!e?a={overlayX:"end",overlayY:"center"}:(t=="after"||t=="right"&&e||t=="left"&&!e)&&(a={overlayX:"start",overlayY:"center"});let{x:r,y:o}=this._invertPosition(a.overlayX,a.overlayY);return{main:a,fallback:{overlayX:r,overlayY:o}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),Ne(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(e){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=e instanceof Set?Array.from(e):e,this._tooltipInstance._markForCheck())}_invertPosition(e,t){return this.position==="above"||this.position==="below"?t==="top"?t="bottom":t==="bottom"&&(t="top"):e==="end"?e="start":e==="start"&&(e="end"),{x:e,y:t}}_updateCurrentPositionClass(e){let{overlayY:t,originX:a,originY:r}=e,o;if(t==="center"?this._dir&&this._dir.value==="rtl"?o=a==="end"?"left":"right":o=a==="start"?"left":"right":o=t==="bottom"&&r==="top"?"above":"below",o!==this._currentPosition){let l=this._overlayRef;if(l){let s=`${this._cssClassPrefix}-${Fb}-`;l.removePanelClass(s+this._currentPosition),l.addPanelClass(s+o)}this._currentPosition=o}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!=="off"&&(this._disableNativeGesturesIfNecessary(),this._addListener("touchstart",e=>{let t=e.targetTouches?.[0],a=t?{x:t.clientX,y:t.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let r=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,a)},this._defaultOptions?.touchLongPressShowDelay??r)})):this._addListener("mouseenter",e=>{this._setupPointerExitEventsIfNeeded();let t;e.x!==void 0&&e.y!==void 0&&(t=e),this.show(void 0,t)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener("mouseleave",e=>{let t=e.relatedTarget;(!t||!this._overlayRef?.overlayElement.contains(t))&&this.hide()}),this._addListener("wheel",e=>{if(this._isTooltipVisible()){let t=this._document.elementFromPoint(e.clientX,e.clientY),a=this._elementRef.nativeElement;t!==a&&!a.contains(t)&&this.hide()}});else if(this.touchGestures!=="off"){this._disableNativeGesturesIfNecessary();let e=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener("touchend",e),this._addListener("touchcancel",e)}}}_addListener(e,t){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,e,t,YD))}_isTouchPlatform(){let e=this._defaultOptions?.detectHoverCapability;return typeof e=="function"?!e():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!e&&this._mediaMatcher.matchMedia("(any-hover: none)").matches:!1}_disableNativeGesturesIfNecessary(){let e=this.touchGestures;if(e!=="off"){let t=this._elementRef.nativeElement,a=t.style;(e==="on"||t.nodeName!=="INPUT"&&t.nodeName!=="TEXTAREA")&&(a.userSelect=a.msUserSelect=a.webkitUserSelect=a.MozUserSelect="none"),(e==="on"||!t.draggable)&&(a.webkitUserDrag="none"),a.touchAction="none",a.webkitTapHighlightColor="transparent"}}_syncAriaDescription(e){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,e,"tooltip"),this._isDestroyed||Ne({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,"tooltip")}},{injector:this._injector}))}_overlayEventPredicate=e=>e.type==="keydown"?this._isTooltipVisible()&&e.keyCode===27&&!xt(e):!0;static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n,selectors:[["","matTooltip",""]],hostAttrs:[1,"mat-mdc-tooltip-trigger"],hostVars:2,hostBindings:function(t,a){t&2&&ee("mat-mdc-tooltip-disabled",a.disabled)},inputs:{position:[0,"matTooltipPosition","position"],positionAtOrigin:[0,"matTooltipPositionAtOrigin","positionAtOrigin"],disabled:[0,"matTooltipDisabled","disabled"],showDelay:[0,"matTooltipShowDelay","showDelay"],hideDelay:[0,"matTooltipHideDelay","hideDelay"],touchGestures:[0,"matTooltipTouchGestures","touchGestures"],message:[0,"matTooltip","message"],tooltipClass:[0,"matTooltipClass","tooltipClass"]},exportAs:["matTooltip"]})}return n})(),QD=(()=>{class n{_changeDetectorRef=d(Ae);_elementRef=d(j);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=tt();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new N;_showAnimation="mat-mdc-tooltip-show";_hideAnimation="mat-mdc-tooltip-hide";show(e){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},e)}hide(e){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},e)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:e}){(!e||!this._triggerElement.contains(e))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let e=this._elementRef.nativeElement.getBoundingClientRect();return e.height>XD&&e.width>=ZD}_handleAnimationEnd({animationName:e}){(e===this._showAnimation||e===this._hideAnimation)&&this._finalizeAnimation(e===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(e){e?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(e){let t=this._tooltip.nativeElement,a=this._showAnimation,r=this._hideAnimation;if(t.classList.remove(e?r:a),t.classList.add(e?a:r),this._isVisible!==e&&(this._isVisible=e,this._changeDetectorRef.markForCheck()),e&&!this._animationsDisabled&&typeof getComputedStyle=="function"){let o=getComputedStyle(t);(o.getPropertyValue("animation-duration")==="0s"||o.getPropertyValue("animation-name")==="none")&&(this._animationsDisabled=!0)}e&&this._onShow(),this._animationsDisabled&&(t.classList.add("_mat-animation-noopable"),this._finalizeAnimation(e))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=(function(){let e=["tooltip"];return L({type:n,selectors:[["mat-tooltip-component"]],viewQuery:function(a,r){if(a&1&&qe(e,7),a&2){let o;H(o=$())&&(r._tooltip=o.first)}},hostAttrs:["aria-hidden","true"],hostBindings:function(a,r){a&1&&ue("mouseleave",function(l){return r._handleMouseLeave(l)})},decls:4,vars:5,consts:[["tooltip",""],[1,"mdc-tooltip","mat-mdc-tooltip",3,"animationend"],[1,"mat-mdc-tooltip-surface","mdc-tooltip__surface"]],template:function(a,r){a&1&&(Le(0,"div",1,0),eo("animationend",function(l){return r._handleAnimationEnd(l)}),Le(2,"div",2),E(3),Be()()),a&2&&(At(r.tooltipClass),ee("mdc-tooltip--multiline",r._isMultiline),v(3),ke(r.message))},styles:[`.mat-mdc-tooltip {
  position: relative;
  transform: scale(0);
  display: inline-flex;
}
.mat-mdc-tooltip::before {
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  position: absolute;
}
.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before {
  top: -8px;
}
.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before {
  bottom: -8px;
}
.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before {
  left: -8px;
}
.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before {
  right: -8px;
}
.mat-mdc-tooltip._mat-animation-noopable {
  animation: none;
  transform: scale(1);
}

.mat-mdc-tooltip-surface {
  word-break: normal;
  overflow-wrap: anywhere;
  padding: 4px 8px;
  min-width: 40px;
  max-width: 200px;
  min-height: 24px;
  max-height: 40vh;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  will-change: transform, opacity;
  background-color: var(--%NS%mat-tooltip-container-color, var(--%NS%mat-sys-inverse-surface));
  color: var(--%NS%mat-tooltip-supporting-text-color, var(--%NS%mat-sys-inverse-on-surface));
  border-radius: var(--%NS%mat-tooltip-container-shape, var(--%NS%mat-sys-corner-extra-small));
  font-family: var(--%NS%mat-tooltip-supporting-text-font, var(--%NS%mat-sys-body-small-font));
  font-size: var(--%NS%mat-tooltip-supporting-text-size, var(--%NS%mat-sys-body-small-size));
  font-weight: var(--%NS%mat-tooltip-supporting-text-weight, var(--%NS%mat-sys-body-small-weight));
  line-height: var(--%NS%mat-tooltip-supporting-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  letter-spacing: var(--%NS%mat-tooltip-supporting-text-tracking, var(--%NS%mat-sys-body-small-tracking));
}
.mat-mdc-tooltip-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: left;
}
[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: right;
}

.mat-mdc-tooltip-panel {
  line-height: normal;
}
.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive {
  pointer-events: none;
}

@keyframes mat-mdc-tooltip-show {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes mat-mdc-tooltip-hide {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}
.mat-mdc-tooltip-show {
  animation: mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}

.mat-mdc-tooltip-hide {
  animation: mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}
`],encapsulation:2})})()}return n})();var _a=(()=>{class n{changes=new N;calendarLabel="Calendar";openCalendarLabel="Open calendar";closeCalendarLabel="Close calendar";prevMonthLabel="Previous month";nextMonthLabel="Next month";prevYearLabel="Previous year";nextYearLabel="Next year";prevMultiYearLabel="Previous 24 years";nextMultiYearLabel="Next 24 years";switchToMonthViewLabel="Choose date";switchToMultiYearViewLabel="Choose month and year";startDateLabel="Start date";endDateLabel="End date";comparisonDateLabel="Comparison range";formatYearRange(e,t){return`${e} \u2013 ${t}`}formatYearRangeLabel(e,t){return`${e} to ${t}`}static \u0275fac=function(t){return new(t||n)};static \u0275prov=O({token:n,factory:n.\u0275fac})}return n})(),JD=0,Ur=class{value;displayValue;ariaLabel;enabled;compareValue;rawValue;id=JD++;cssClasses;constructor(i,e,t,a,r,o=i,l){this.value=i,this.displayValue=e,this.ariaLabel=t,this.enabled=a,this.compareValue=o,this.rawValue=l,this.cssClasses=r instanceof Set?Array.from(r):r}},eS={passive:!1,capture:!0},fl={passive:!0,capture:!0},Lb={passive:!0},va=(()=>{class n{_elementRef=d(j);_ngZone=d(P);_platform=d(de);_intl=d(_a);_eventCleanups;_skipNextFocus=!1;_focusActiveCellAfterViewChecked=!1;label;rows;todayValue;startValue;endValue;labelMinRequiredCells;numCols=7;activeCell=0;ngAfterViewChecked(){this._focusActiveCellAfterViewChecked&&(this._focusActiveCell(),this._focusActiveCellAfterViewChecked=!1)}isRange=!1;cellAspectRatio=1;comparisonStart=null;comparisonEnd=null;previewStart=null;previewEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;selectedValueChange=new T;previewChange=new T;activeDateChange=new T;dragStarted=new T;dragEnded=new T;_firstRowOffset;_cellPadding;_cellWidth;_startDateLabelId;_endDateLabelId;_comparisonStartDateLabelId;_comparisonEndDateLabelId;_didDragSinceMouseDown=!1;_injector=d(re);comparisonDateAccessibleName=this._intl.comparisonDateLabel;_trackRow=e=>e;constructor(){let e=d(Ie),t=d(ct);this._startDateLabelId=t.getId("mat-calendar-body-start-"),this._endDateLabelId=t.getId("mat-calendar-body-end-"),this._comparisonStartDateLabelId=t.getId("mat-calendar-body-comparison-start-"),this._comparisonEndDateLabelId=t.getId("mat-calendar-body-comparison-end-"),d(He).load(ra),this._ngZone.runOutsideAngular(()=>{let a=this._elementRef.nativeElement,r=[e.listen(a,"touchmove",this._touchmoveHandler,eS),e.listen(a,"mouseenter",this._enterHandler,fl),e.listen(a,"focus",this._enterHandler,fl),e.listen(a,"mouseleave",this._leaveHandler,fl),e.listen(a,"blur",this._leaveHandler,fl),e.listen(a,"mousedown",this._mousedownHandler,Lb),e.listen(a,"touchstart",this._mousedownHandler,Lb)];this._platform.isBrowser&&r.push(e.listen("window","mouseup",this._mouseupHandler),e.listen("window","touchend",this._touchendHandler)),this._eventCleanups=r})}_cellClicked(e,t){this._didDragSinceMouseDown||e.enabled&&this.selectedValueChange.emit({value:e.value,event:t})}_emitActiveDateChange(e,t){e.enabled&&this.activeDateChange.emit({value:e.value,event:t})}_isSelected(e){return this.startValue===e||this.endValue===e}ngOnChanges(e){let t=e.numCols,{rows:a,numCols:r}=this;(e.rows||t)&&(this._firstRowOffset=a&&a.length&&a[0].length?r-a[0].length:0),(e.cellAspectRatio||t||!this._cellPadding)&&(this._cellPadding=`${50*this.cellAspectRatio/r}%`),(t||!this._cellWidth)&&(this._cellWidth=`${100/r}%`)}ngOnDestroy(){this._eventCleanups.forEach(e=>e())}_isActiveCell(e,t){let a=e*this.numCols+t;return e&&(a-=this._firstRowOffset),a==this.activeCell}_focusActiveCell(e=!0){Ne(()=>{setTimeout(()=>{let t=this._elementRef.nativeElement.querySelector(".mat-calendar-body-active");t&&(e||(this._skipNextFocus=!0),t.focus())})},{injector:this._injector})}_scheduleFocusActiveCellAfterViewChecked(){this._focusActiveCellAfterViewChecked=!0}_isRangeStart(e){return Mu(e,this.startValue,this.endValue)}_isRangeEnd(e){return Ru(e,this.startValue,this.endValue)}_isInRange(e){return ku(e,this.startValue,this.endValue,this.isRange)}_isComparisonStart(e){return Mu(e,this.comparisonStart,this.comparisonEnd)}_isComparisonBridgeStart(e,t,a){if(!this._isComparisonStart(e)||this._isRangeStart(e)||!this._isInRange(e))return!1;let r=this.rows[t][a-1];if(!r){let o=this.rows[t-1];r=o&&o[o.length-1]}return r&&!this._isRangeEnd(r.compareValue)}_isComparisonBridgeEnd(e,t,a){if(!this._isComparisonEnd(e)||this._isRangeEnd(e)||!this._isInRange(e))return!1;let r=this.rows[t][a+1];if(!r){let o=this.rows[t+1];r=o&&o[0]}return r&&!this._isRangeStart(r.compareValue)}_isComparisonEnd(e){return Ru(e,this.comparisonStart,this.comparisonEnd)}_isInComparisonRange(e){return ku(e,this.comparisonStart,this.comparisonEnd,this.isRange)}_isComparisonIdentical(e){return this.comparisonStart===this.comparisonEnd&&e===this.comparisonStart}_isPreviewStart(e){return Mu(e,this.previewStart,this.previewEnd)}_isPreviewEnd(e){return Ru(e,this.previewStart,this.previewEnd)}_isInPreview(e){return ku(e,this.previewStart,this.previewEnd,this.isRange)}_getDescribedby(e){if(!this.isRange)return null;if(this.startValue===e&&this.endValue===e)return`${this._startDateLabelId} ${this._endDateLabelId}`;if(this.startValue===e)return this._startDateLabelId;if(this.endValue===e)return this._endDateLabelId;if(this.comparisonStart!==null&&this.comparisonEnd!==null){if(e===this.comparisonStart&&e===this.comparisonEnd)return`${this._comparisonStartDateLabelId} ${this._comparisonEndDateLabelId}`;if(e===this.comparisonStart)return this._comparisonStartDateLabelId;if(e===this.comparisonEnd)return this._comparisonEndDateLabelId}return null}_enterHandler=e=>{if(this._skipNextFocus&&e.type==="focus"){this._skipNextFocus=!1;return}if(e.target&&this.isRange){let t=this._getCellFromElement(e.target);t&&this._ngZone.run(()=>this.previewChange.emit({value:t.enabled?t:null,event:e}))}};_touchmoveHandler=e=>{if(!this.isRange)return;let t=Vb(e),a=t?this._getCellFromElement(t):null;t!==e.target&&(this._didDragSinceMouseDown=!0),Eu(e.target)&&e.preventDefault(),this._ngZone.run(()=>this.previewChange.emit({value:a?.enabled?a:null,event:e}))};_leaveHandler=e=>{this.previewEnd!==null&&this.isRange&&(e.type!=="blur"&&(this._didDragSinceMouseDown=!0),e.target&&this._getCellFromElement(e.target)&&!(e.relatedTarget&&this._getCellFromElement(e.relatedTarget))&&this._ngZone.run(()=>this.previewChange.emit({value:null,event:e})))};_mousedownHandler=e=>{if(!this.isRange)return;this._didDragSinceMouseDown=!1;let t=e.target&&this._getCellFromElement(e.target);!t||!this._isInRange(t.compareValue)||this._ngZone.run(()=>{this.dragStarted.emit({value:t.rawValue,event:e})})};_mouseupHandler=e=>{if(!this.isRange)return;let t=Eu(e.target);if(!t){this._ngZone.run(()=>{this.dragEnded.emit({value:null,event:e})});return}t.closest(".mat-calendar-body")===this._elementRef.nativeElement&&this._ngZone.run(()=>{let a=this._getCellFromElement(t);this.dragEnded.emit({value:a?.rawValue??null,event:e})})};_touchendHandler=e=>{let t=Vb(e);t&&this._mouseupHandler({target:t})};_getCellFromElement(e){let t=Eu(e);if(t){let a=t.getAttribute("data-mat-row"),r=t.getAttribute("data-mat-col");if(a&&r)return this.rows[parseInt(a)]?.[parseInt(r)]||null}return null}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=(function(){function e(s,u){return this._trackRow(u)}let t=(s,u)=>u.id;function a(s,u){if(s&1&&(Le(0,"tr",0)(1,"td",3),E(2),Be()()),s&2){let c=oe();v(),un("padding-top",c._cellPadding)("padding-bottom",c._cellPadding),Se("colspan",c.numCols),v(),En(" ",c.label," ")}}function r(s,u){if(s&1&&(Le(0,"td",3),E(1),Be()),s&2){let c=oe(2);un("padding-top",c._cellPadding)("padding-bottom",c._cellPadding),Se("colspan",c._firstRowOffset),v(),En(" ",c._firstRowOffset>=c.labelMinRequiredCells?c.label:""," ")}}function o(s,u){if(s&1){let c=Sn();Le(0,"td",6)(1,"button",7),eo("click",function(p){let h=We(c).$implicit,_=oe(2);return Ye(_._cellClicked(h,p))})("focus",function(p){let h=We(c).$implicit,_=oe(2);return Ye(_._emitActiveDateChange(h,p))}),Le(2,"span",8),E(3),Be(),kt(4,"span",9),Be()()}if(s&2){let c=u.$implicit,m=u.$index,p=oe().$index,h=oe();un("width",h._cellWidth)("padding-top",h._cellPadding)("padding-bottom",h._cellPadding),Se("data-mat-row",p)("data-mat-col",m),v(),At(c.cssClasses),ee("mat-calendar-body-disabled",!c.enabled)("mat-calendar-body-active",h._isActiveCell(p,m))("mat-calendar-body-range-start",h._isRangeStart(c.compareValue))("mat-calendar-body-range-end",h._isRangeEnd(c.compareValue))("mat-calendar-body-in-range",h._isInRange(c.compareValue))("mat-calendar-body-comparison-bridge-start",h._isComparisonBridgeStart(c.compareValue,p,m))("mat-calendar-body-comparison-bridge-end",h._isComparisonBridgeEnd(c.compareValue,p,m))("mat-calendar-body-comparison-start",h._isComparisonStart(c.compareValue))("mat-calendar-body-comparison-end",h._isComparisonEnd(c.compareValue))("mat-calendar-body-in-comparison-range",h._isInComparisonRange(c.compareValue))("mat-calendar-body-preview-start",h._isPreviewStart(c.compareValue))("mat-calendar-body-preview-end",h._isPreviewEnd(c.compareValue))("mat-calendar-body-in-preview",h._isInPreview(c.compareValue)),Lt("tabIndex",h._isActiveCell(p,m)?0:-1),Se("aria-label",c.ariaLabel)("aria-disabled",!c.enabled||null)("aria-pressed",h._isSelected(c.compareValue))("aria-current",h.todayValue===c.compareValue?"date":null)("aria-describedby",h._getDescribedby(c.compareValue)),v(),ee("mat-calendar-body-selected",h._isSelected(c.compareValue))("mat-calendar-body-comparison-identical",h._isComparisonIdentical(c.compareValue))("mat-calendar-body-today",h.todayValue===c.compareValue),v(),En(" ",c.displayValue," ")}}function l(s,u){if(s&1&&(Le(0,"tr",1),he(1,r,2,6,"td",4),ei(2,o,5,49,"td",5,t),Be()),s&2){let c=u.$implicit,m=u.$index,p=oe();v(),fe(m===0&&p._firstRowOffset?1:-1),v(),ti(c)}}return L({type:n,selectors:[["","mat-calendar-body",""]],hostAttrs:[1,"mat-calendar-body"],inputs:{label:"label",rows:"rows",todayValue:"todayValue",startValue:"startValue",endValue:"endValue",labelMinRequiredCells:"labelMinRequiredCells",numCols:"numCols",activeCell:"activeCell",isRange:"isRange",cellAspectRatio:"cellAspectRatio",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",previewStart:"previewStart",previewEnd:"previewEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName"},outputs:{selectedValueChange:"selectedValueChange",previewChange:"previewChange",activeDateChange:"activeDateChange",dragStarted:"dragStarted",dragEnded:"dragEnded"},exportAs:["matCalendarBody"],features:[Me],decls:11,vars:11,consts:[["aria-hidden","true"],["role","row"],[1,"mat-calendar-body-hidden-label",3,"id"],[1,"mat-calendar-body-label"],[1,"mat-calendar-body-label",3,"paddingTop","paddingBottom"],["role","gridcell",1,"mat-calendar-body-cell-container",3,"width","paddingTop","paddingBottom"],["role","gridcell",1,"mat-calendar-body-cell-container"],["type","button",1,"mat-calendar-body-cell",3,"click","focus","tabindex"],[1,"mat-calendar-body-cell-content","mat-focus-indicator"],["aria-hidden","true",1,"mat-calendar-body-cell-preview"]],template:function(u,c){u&1&&(he(0,a,3,6,"tr",0),ei(1,l,4,1,"tr",1,e,!0),Le(3,"span",2),E(4),Be(),Le(5,"span",2),E(6),Be(),Le(7,"span",2),E(8),Be(),Le(9,"span",2),E(10),Be()),u&2&&(fe(c._firstRowOffset<c.labelMinRequiredCells?0:-1),v(),ti(c.rows),v(2),Lt("id",c._startDateLabelId),v(),En(" ",c.startDateAccessibleName,`
`),v(),Lt("id",c._endDateLabelId),v(),En(" ",c.endDateAccessibleName,`
`),v(),Lt("id",c._comparisonStartDateLabelId),v(),Bl(" ",c.comparisonDateAccessibleName," ",c.startDateAccessibleName,`
`),v(),Lt("id",c._comparisonEndDateLabelId),v(),Bl(" ",c.comparisonDateAccessibleName," ",c.endDateAccessibleName,`
`))},styles:[`.mat-calendar-body {
  min-width: 224px;
}

.mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  border-color: var(--%NS%mat-datepicker-calendar-date-today-outline-color, var(--%NS%mat-sys-primary));
}

.mat-calendar-body-label {
  height: 0;
  line-height: 0;
  text-align: start;
  padding-left: 4.7142857143%;
  padding-right: 4.7142857143%;
  font-size: var(--%NS%mat-datepicker-calendar-body-label-text-size, var(--%NS%mat-sys-title-small-size));
  font-weight: var(--%NS%mat-datepicker-calendar-body-label-text-weight, var(--%NS%mat-sys-title-small-weight));
  color: var(--%NS%mat-datepicker-calendar-body-label-text-color, var(--%NS%mat-sys-on-surface));
}

.mat-calendar-body-hidden-label {
  display: none;
}

.mat-calendar-body-cell-container {
  position: relative;
  height: 0;
  line-height: 0;
}

.mat-calendar-body-cell {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: none;
  text-align: center;
  outline: none;
  margin: 0;
  font-family: var(--%NS%mat-datepicker-calendar-text-font, var(--%NS%mat-sys-body-medium-font));
  font-size: var(--%NS%mat-datepicker-calendar-text-size, var(--%NS%mat-sys-body-medium-size));
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-calendar-body-cell::-moz-focus-inner {
  border: 0;
}

.mat-calendar-body-cell::before,
.mat-calendar-body-cell::after,
.mat-calendar-body-cell-preview {
  content: "";
  position: absolute;
  top: 5%;
  left: 0;
  z-index: 0;
  box-sizing: border-box;
  display: block;
  height: 90%;
  width: 100%;
}

.mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,
.mat-calendar-body-range-start::after,
.mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,
.mat-calendar-body-comparison-start::after,
.mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  left: 5%;
  width: 95%;
  border-top-left-radius: 999px;
  border-bottom-left-radius: 999px;
}
[dir=rtl] .mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,
[dir=rtl] .mat-calendar-body-range-start::after,
[dir=rtl] .mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,
[dir=rtl] .mat-calendar-body-comparison-start::after,
[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  left: 0;
  border-radius: 0;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}

.mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,
.mat-calendar-body-range-end::after,
.mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,
.mat-calendar-body-comparison-end::after,
.mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  width: 95%;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}
[dir=rtl] .mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,
[dir=rtl] .mat-calendar-body-range-end::after,
[dir=rtl] .mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,
[dir=rtl] .mat-calendar-body-comparison-end::after,
[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  left: 5%;
  border-radius: 0;
  border-top-left-radius: 999px;
  border-bottom-left-radius: 999px;
}

[dir=rtl] .mat-calendar-body-comparison-bridge-start.mat-calendar-body-range-end::after,
[dir=rtl] .mat-calendar-body-comparison-bridge-end.mat-calendar-body-range-start::after {
  width: 95%;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}

.mat-calendar-body-comparison-start.mat-calendar-body-range-end::after, [dir=rtl] .mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,
.mat-calendar-body-comparison-end.mat-calendar-body-range-start::after,
[dir=rtl] .mat-calendar-body-comparison-end.mat-calendar-body-range-start::after {
  width: 90%;
}

.mat-calendar-body-in-preview {
  color: var(--%NS%mat-datepicker-calendar-date-preview-state-outline-color, var(--%NS%mat-sys-primary));
}
.mat-calendar-body-in-preview .mat-calendar-body-cell-preview {
  border-top: dashed 1px;
  border-bottom: dashed 1px;
}

.mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  border-left: dashed 1px;
}
[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  border-left: 0;
  border-right: dashed 1px;
}

.mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  border-right: dashed 1px;
}
[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  border-right: 0;
  border-left: dashed 1px;
}

.mat-calendar-body-disabled {
  cursor: default;
}
.mat-calendar-body-disabled > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  color: var(--%NS%mat-datepicker-calendar-date-disabled-state-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-calendar-body-disabled > .mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  border-color: var(--%NS%mat-datepicker-calendar-date-today-disabled-state-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-calendar-body-disabled {
    opacity: 0.5;
  }
}

.mat-calendar-body-cell-content {
  top: 5%;
  left: 5%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 90%;
  height: 90%;
  line-height: 1;
  border-width: 1px;
  border-style: solid;
  border-radius: 999px;
  color: var(--%NS%mat-datepicker-calendar-date-text-color, var(--%NS%mat-sys-on-surface));
  border-color: var(--%NS%mat-datepicker-calendar-date-outline-color, transparent);
}
.mat-calendar-body-cell-content.mat-focus-indicator {
  position: absolute;
}
.mat-calendar-body-cell-content::before {
  border-radius: 50%;
}
@media (forced-colors: active) {
  .mat-calendar-body-cell-content {
    border: none;
  }
}

.cdk-keyboard-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical), .cdk-program-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  background-color: var(--%NS%mat-datepicker-calendar-date-focus-state-background-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
}

@media (hover: hover) {
  .mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
    background-color: var(--%NS%mat-datepicker-calendar-date-hover-state-background-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
  }
}
.mat-calendar-body-selected {
  background-color: var(--%NS%mat-datepicker-calendar-date-selected-state-background-color, var(--%NS%mat-sys-primary));
  color: var(--%NS%mat-datepicker-calendar-date-selected-state-text-color, var(--%NS%mat-sys-on-primary));
}
.mat-calendar-body-disabled > .mat-calendar-body-selected {
  background-color: var(--%NS%mat-datepicker-calendar-date-selected-disabled-state-background-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-calendar-body-selected.mat-calendar-body-today {
  box-shadow: inset 0 0 0 1px var(--%NS%mat-datepicker-calendar-date-today-selected-state-outline-color, var(--%NS%mat-sys-primary));
}

.mat-calendar-body-in-range::before {
  background: var(--%NS%mat-datepicker-calendar-date-in-range-state-background-color, var(--%NS%mat-sys-primary-container));
}

.mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range::before {
  background: var(--%NS%mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--%NS%mat-sys-tertiary-container));
}

.mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range::before {
  background: var(--%NS%mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--%NS%mat-sys-tertiary-container));
}

.mat-calendar-body-comparison-bridge-start::before,
[dir=rtl] .mat-calendar-body-comparison-bridge-end::before {
  background: linear-gradient(to right, var(--%NS%mat-datepicker-calendar-date-in-range-state-background-color, var(--%NS%mat-sys-primary-container)) 50%, var(--%NS%mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--%NS%mat-sys-tertiary-container)) 50%);
}

.mat-calendar-body-comparison-bridge-end::before,
[dir=rtl] .mat-calendar-body-comparison-bridge-start::before {
  background: linear-gradient(to left, var(--%NS%mat-datepicker-calendar-date-in-range-state-background-color, var(--%NS%mat-sys-primary-container)) 50%, var(--%NS%mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--%NS%mat-sys-tertiary-container)) 50%);
}

.mat-calendar-body-in-range > .mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range.mat-calendar-body-in-range::after {
  background: var(--%NS%mat-datepicker-calendar-date-in-overlap-range-state-background-color, var(--%NS%mat-sys-secondary-container));
}

.mat-calendar-body-comparison-identical.mat-calendar-body-selected,
.mat-calendar-body-in-comparison-range > .mat-calendar-body-selected {
  background: var(--%NS%mat-datepicker-calendar-date-in-overlap-range-selected-state-background-color, var(--%NS%mat-sys-secondary));
}

@media (forced-colors: active) {
  .mat-datepicker-popup:not(:empty),
  .mat-calendar-body-cell:not(.mat-calendar-body-in-range) .mat-calendar-body-selected {
    outline: solid 1px;
  }
  .mat-calendar-body-today {
    outline: dotted 1px;
  }
  .mat-calendar-body-cell::before,
  .mat-calendar-body-cell::after,
  .mat-calendar-body-selected {
    background: none;
  }
  .mat-calendar-body-in-range::before,
  .mat-calendar-body-comparison-bridge-start::before,
  .mat-calendar-body-comparison-bridge-end::before {
    border-top: solid 1px;
    border-bottom: solid 1px;
  }
  .mat-calendar-body-range-start::before {
    border-left: solid 1px;
  }
  [dir=rtl] .mat-calendar-body-range-start::before {
    border-left: 0;
    border-right: solid 1px;
  }
  .mat-calendar-body-range-end::before {
    border-right: solid 1px;
  }
  [dir=rtl] .mat-calendar-body-range-end::before {
    border-right: 0;
    border-left: solid 1px;
  }
  .mat-calendar-body-in-comparison-range::before {
    border-top: dashed 1px;
    border-bottom: dashed 1px;
  }
  .mat-calendar-body-comparison-start::before {
    border-left: dashed 1px;
  }
  [dir=rtl] .mat-calendar-body-comparison-start::before {
    border-left: 0;
    border-right: dashed 1px;
  }
  .mat-calendar-body-comparison-end::before {
    border-right: dashed 1px;
  }
  [dir=rtl] .mat-calendar-body-comparison-end::before {
    border-right: 0;
    border-left: dashed 1px;
  }
}
`],encapsulation:2})})()}return n})();function xu(n){return n?.nodeName==="TD"}function Eu(n){let i;return xu(n)?i=n:xu(n.parentNode)?i=n.parentNode:xu(n.parentNode?.parentNode)&&(i=n.parentNode.parentNode),i?.getAttribute("data-mat-row")!=null?i:null}function Mu(n,i,e){return e!==null&&i!==e&&n<e&&n===i}function Ru(n,i,e){return i!==null&&i!==e&&n>=i&&n===e}function ku(n,i,e,t){return t&&i!==null&&e!==null&&i!==e&&n>=i&&n<=e}function Vb(n){let i=n.changedTouches[0];return document.elementFromPoint(i.clientX,i.clientY)}var Ft=class{start;end;_disableStructuralEquivalency;constructor(i,e){this.start=i,this.end=e}},Hr=(()=>{class n{selection;_adapter;_selectionChanged=new N;selectionChanged=this._selectionChanged;constructor(e,t){this.selection=e,this._adapter=t,this.selection=e}updateSelection(e,t){let a=this.selection;this.selection=e,this._selectionChanged.next({selection:e,source:t,oldValue:a})}ngOnDestroy(){this._selectionChanged.complete()}_isValidDateInstance(e){return this._adapter.isDateInstance(e)&&this._adapter.isValid(e)}static \u0275fac=function(t){Ra()};static \u0275prov=U({token:n,factory:n.\u0275fac})}return n})(),tS=(()=>{class n extends Hr{constructor(e){super(null,e)}add(e){super.updateSelection(e,this)}isValid(){return this.selection!=null&&this._isValidDateInstance(this.selection)}isComplete(){return this.selection!=null}clone(){let e=new n(this._adapter);return e.updateSelection(this.selection,this),e}static \u0275fac=function(t){return new(t||n)(A(ut))};static \u0275prov=U({token:n,factory:n.\u0275fac})}return n})();var Hb={provide:Hr,useFactory:()=>d(Hr,{optional:!0,skipSelf:!0})||new tS(d(ut))};var $b=new y("MAT_DATE_RANGE_SELECTION_STRATEGY");var Au=7,nS=0,Bb=(()=>{class n{_changeDetectorRef=d(Ae);_dateFormats=d(Yn,{optional:!0});_dateAdapter=d(ut,{optional:!0});_dir=d(Xe,{optional:!0});_rangeStrategy=d($b,{optional:!0});_rerenderSubscription=Ee.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,a=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(a,this.minDate,this.maxDate),this._hasSameMonthAndYear(t,this._activeDate)||this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof Ft?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setRanges(this._selected)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;activeDrag=null;selectedChange=new T;_userSelection=new T;dragStarted=new T;dragEnded=new T;activeDateChange=new T;_matCalendarBody;_monthLabel=Z("");_weeks=Z([]);_firstWeekOffset=Z(0);_rangeStart=Z(null);_rangeEnd=Z(null);_comparisonRangeStart=Z(null);_comparisonRangeEnd=Z(null);_previewStart=Z(null);_previewEnd=Z(null);_isRange=Z(!1);_todayDate=Z(null);_weekdays=Z([]);constructor(){d(He).load(Vn),this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(nt(null)).subscribe(()=>this._init())}ngOnChanges(e){let t=e.comparisonStart||e.comparisonEnd;t&&!t.firstChange&&this._setRanges(this.selected),e.activeDrag&&!this.activeDrag&&this._clearPreview()}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_dateSelected(e){let t=e.value,a=this._getDateFromDayOfMonth(t),r,o;this._selected instanceof Ft?(r=this._getDateInCurrentMonth(this._selected.start),o=this._getDateInCurrentMonth(this._selected.end)):r=o=this._getDateInCurrentMonth(this._selected),(r!==t||o!==t)&&this.selectedChange.emit(a),this._userSelection.emit({value:a,event:e.event}),this._clearPreview(),this._changeDetectorRef.markForCheck()}_updateActiveDate(e){let t=e.value,a=this._activeDate;this.activeDate=this._getDateFromDayOfMonth(t),this._dateAdapter.compareDate(a,this.activeDate)&&this.activeDateChange.emit(this._activeDate)}_handleCalendarBodyKeydown(e){let t=this._activeDate,a=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,a?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,a?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,-7);break;case 40:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,7);break;case 36:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,1-this._dateAdapter.getDate(this._activeDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,this._dateAdapter.getNumDaysInMonth(this._activeDate)-this._dateAdapter.getDate(this._activeDate));break;case 33:this.activeDate=e.altKey?this._dateAdapter.addCalendarYears(this._activeDate,-1):this._dateAdapter.addCalendarMonths(this._activeDate,-1);break;case 34:this.activeDate=e.altKey?this._dateAdapter.addCalendarYears(this._activeDate,1):this._dateAdapter.addCalendarMonths(this._activeDate,1);break;case 13:case 32:this._selectionKeyPressed=!0,this._canSelect(this._activeDate)&&e.preventDefault();return;case 27:this._previewEnd()!=null&&!xt(e)&&(this._clearPreview(),this.activeDrag?this.dragEnded.emit({value:null,event:e}):(this.selectedChange.emit(null),this._userSelection.emit({value:null,event:e})),e.preventDefault(),e.stopPropagation());return;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&(this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked()),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._canSelect(this._activeDate)&&this._dateSelected({value:this._dateAdapter.getDate(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_init(){this._setRanges(this.selected),this._todayDate.set(this._getCellCompareValue(this._dateAdapter.today())),this._monthLabel.set(this._dateFormats.display.monthLabel?this._dateAdapter.format(this.activeDate,this._dateFormats.display.monthLabel):this._dateAdapter.getMonthNames("short")[this._dateAdapter.getMonth(this.activeDate)].toLocaleUpperCase());let e=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),1);this._firstWeekOffset.set((Au+this._dateAdapter.getDayOfWeek(e)-this._dateAdapter.getFirstDayOfWeek())%Au),this._initWeekdays(),this._createWeekCells(),this._changeDetectorRef.markForCheck()}_focusActiveCell(e){this._matCalendarBody._focusActiveCell(e)}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_previewChanged({event:e,value:t}){if(this._rangeStrategy){let a=t?t.rawValue:null,r=this._rangeStrategy.createPreview(a,this.selected,e);if(this._previewStart.set(this._getCellCompareValue(r.start)),this._previewEnd.set(this._getCellCompareValue(r.end)),this.activeDrag&&a){let o=this._rangeStrategy.createDrag?.(this.activeDrag.value,this.selected,a,e);o&&(this._previewStart.set(this._getCellCompareValue(o.start)),this._previewEnd.set(this._getCellCompareValue(o.end)))}}}_dragEnded(e){if(this.activeDrag)if(e.value){let t=this._rangeStrategy?.createDrag?.(this.activeDrag.value,this.selected,e.value,e.event);this.dragEnded.emit({value:t??null,event:e.event})}else this.dragEnded.emit({value:null,event:e.event})}_getDateFromDayOfMonth(e){return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),e)}_initWeekdays(){let e=this._dateAdapter.getFirstDayOfWeek(),t=this._dateAdapter.getDayOfWeekNames("narrow"),r=this._dateAdapter.getDayOfWeekNames("long").map((o,l)=>({long:o,narrow:t[l],id:nS++}));this._weekdays.set(r.slice(e).concat(r.slice(0,e)))}_createWeekCells(){let e=this._dateAdapter.getNumDaysInMonth(this.activeDate),t=this._dateAdapter.getDateNames(),a=[[]];for(let r=0,o=this._firstWeekOffset();r<e;r++,o++){o==Au&&(a.push([]),o=0);let l=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),r+1),s=this._shouldEnableDate(l),u=this._dateAdapter.format(l,this._dateFormats.display.dateA11yLabel),c=this.dateClass?this.dateClass(l,"month"):void 0;a[a.length-1].push(new Ur(r+1,t[r],u,s,c,this._getCellCompareValue(l),l))}this._weeks.set(a)}_shouldEnableDate(e){return!!e&&(!this.minDate||this._dateAdapter.compareDate(e,this.minDate)>=0)&&(!this.maxDate||this._dateAdapter.compareDate(e,this.maxDate)<=0)&&(!this.dateFilter||this.dateFilter(e))}_getDateInCurrentMonth(e){return e&&this._hasSameMonthAndYear(e,this.activeDate)?this._dateAdapter.getDate(e):null}_hasSameMonthAndYear(e,t){return!!(e&&t&&this._dateAdapter.getMonth(e)==this._dateAdapter.getMonth(t)&&this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t))}_getCellCompareValue(e){if(e){let t=this._dateAdapter.getYear(e),a=this._dateAdapter.getMonth(e),r=this._dateAdapter.getDate(e);return new Date(t,a,r).getTime()}return null}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setRanges(e){e instanceof Ft?(this._rangeStart.set(this._getCellCompareValue(e.start)),this._rangeEnd.set(this._getCellCompareValue(e.end)),this._isRange.set(!0)):(this._rangeStart.set(this._getCellCompareValue(e)),this._rangeEnd.set(this._rangeStart()),this._isRange.set(!1)),this._comparisonRangeStart.set(this._getCellCompareValue(this.comparisonStart)),this._comparisonRangeEnd.set(this._getCellCompareValue(this.comparisonEnd))}_canSelect(e){return!this.dateFilter||this.dateFilter(e)}_clearPreview(){this._previewStart.set(null),this._previewEnd.set(null)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=(function(){let e=(a,r)=>r.id;function t(a,r){if(a&1&&(f(0,"th",2)(1,"span",6),E(2),g(),f(3,"span",3),E(4),g()()),a&2){let o=r.$implicit;v(2),ke(o.long),v(2),ke(o.narrow)}}return L({type:n,selectors:[["mat-month-view"]],viewQuery:function(r,o){if(r&1&&qe(va,5),r&2){let l;H(l=$())&&(o._matCalendarBody=l.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName",activeDrag:"activeDrag"},outputs:{selectedChange:"selectedChange",_userSelection:"_userSelection",dragStarted:"dragStarted",dragEnded:"dragEnded",activeDateChange:"activeDateChange"},exportAs:["matMonthView"],features:[Me],decls:8,vars:14,consts:[["role","grid",1,"mat-calendar-table"],[1,"mat-calendar-table-header"],["scope","col"],["aria-hidden","true"],["colspan","7",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","previewChange","dragStarted","dragEnded","keyup","keydown","label","rows","todayValue","startValue","endValue","comparisonStart","comparisonEnd","previewStart","previewEnd","isRange","labelMinRequiredCells","activeCell","startDateAccessibleName","endDateAccessibleName"],[1,"cdk-visually-hidden"]],template:function(r,o){r&1&&(f(0,"table",0)(1,"thead",1)(2,"tr"),ei(3,t,5,2,"th",2,e),g(),f(5,"tr",3),le(6,"th",4),g()(),f(7,"tbody",5),ue("selectedValueChange",function(s){return o._dateSelected(s)})("activeDateChange",function(s){return o._updateActiveDate(s)})("previewChange",function(s){return o._previewChanged(s)})("dragStarted",function(s){return o.dragStarted.emit(s)})("dragEnded",function(s){return o._dragEnded(s)})("keyup",function(s){return o._handleCalendarBodyKeyup(s)})("keydown",function(s){return o._handleCalendarBodyKeydown(s)}),g()()),r&2&&(v(3),ti(o._weekdays()),v(4),B("label",o._monthLabel())("rows",o._weeks())("todayValue",o._todayDate())("startValue",o._rangeStart())("endValue",o._rangeEnd())("comparisonStart",o._comparisonRangeStart())("comparisonEnd",o._comparisonRangeEnd())("previewStart",o._previewStart())("previewEnd",o._previewEnd())("isRange",o._isRange())("labelMinRequiredCells",3)("activeCell",o._dateAdapter.getDate(o.activeDate)-1)("startDateAccessibleName",o.startDateAccessibleName)("endDateAccessibleName",o.endDateAccessibleName))},dependencies:[va],encapsulation:2})})()}return n})(),Et=24,Iu=4,jb=(()=>{class n{_changeDetectorRef=d(Ae);_dateAdapter=d(ut,{optional:!0});_dir=d(Xe,{optional:!0});_rerenderSubscription=Ee.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,a=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(a,this.minDate,this.maxDate),Gb(this._dateAdapter,t,this._activeDate,this.minDate,this.maxDate)||this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof Ft?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setSelectedYear(e)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;selectedChange=new T;yearSelected=new T;activeDateChange=new T;_matCalendarBody;_years=Z([]);_todayYear=Z(0);_selectedYear=Z(null);constructor(){this._dateAdapter,this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(nt(null)).subscribe(()=>this._init())}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_init(){this._todayYear.set(this._dateAdapter.getYear(this._dateAdapter.today()));let t=this._dateAdapter.getYear(this._activeDate)-zr(this._dateAdapter,this.activeDate,this.minDate,this.maxDate),a=[];for(let r=0,o=[];r<Et;r++)o.push(t+r),o.length==Iu&&(a.push(o.map(l=>this._createCellForYear(l))),o=[]);this._years.set(a),this._changeDetectorRef.markForCheck()}_yearSelected(e){let t=e.value,a=this._dateAdapter.createDate(t,0,1),r=this._getDateFromYear(t);this.yearSelected.emit(a),this.selectedChange.emit(r)}_updateActiveDate(e){let t=e.value,a=this._activeDate;this.activeDate=this._getDateFromYear(t),this._dateAdapter.compareDate(a,this.activeDate)&&this.activeDateChange.emit(this.activeDate)}_handleCalendarBodyKeydown(e){let t=this._activeDate,a=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,a?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,a?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,-Iu);break;case 40:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,Iu);break;case 36:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,-zr(this._dateAdapter,this.activeDate,this.minDate,this.maxDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,Et-zr(this._dateAdapter,this.activeDate,this.minDate,this.maxDate)-1);break;case 33:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?-Et*10:-Et);break;case 34:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?Et*10:Et);break;case 13:case 32:this._selectionKeyPressed=!0;break;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked(),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._yearSelected({value:this._dateAdapter.getYear(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_getActiveCell(){return zr(this._dateAdapter,this.activeDate,this.minDate,this.maxDate)}_focusActiveCell(){this._matCalendarBody._focusActiveCell()}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_getDateFromYear(e){let t=this._dateAdapter.getMonth(this.activeDate),a=this._dateAdapter.getNumDaysInMonth(this._dateAdapter.createDate(e,t,1));return this._dateAdapter.createDate(e,t,Math.min(this._dateAdapter.getDate(this.activeDate),a))}_createCellForYear(e){let t=this._dateAdapter.createDate(e,0,1),a=this._dateAdapter.getYearName(t),r=this.dateClass?this.dateClass(t,"multi-year"):void 0;return new Ur(e,a,a,this._shouldEnableYear(e),r)}_shouldEnableYear(e){if(e==null||this.maxDate&&e>this._dateAdapter.getYear(this.maxDate)||this.minDate&&e<this._dateAdapter.getYear(this.minDate))return!1;if(!this.dateFilter)return!0;let t=this._dateAdapter.createDate(e,0,1);for(let a=t;this._dateAdapter.getYear(a)==e;a=this._dateAdapter.addCalendarDays(a,1))if(this.dateFilter(a))return!0;return!1}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setSelectedYear(e){if(this._selectedYear.set(null),e instanceof Ft){let t=e.start||e.end;t&&this._selectedYear.set(this._dateAdapter.getYear(t))}else e&&this._selectedYear.set(this._dateAdapter.getYear(e))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=L({type:n,selectors:[["mat-multi-year-view"]],viewQuery:function(t,a){if(t&1&&qe(va,5),t&2){let r;H(r=$())&&(a._matCalendarBody=r.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass"},outputs:{selectedChange:"selectedChange",yearSelected:"yearSelected",activeDateChange:"activeDateChange"},exportAs:["matMultiYearView"],decls:5,vars:7,consts:[["role","grid",1,"mat-calendar-table"],["aria-hidden","true",1,"mat-calendar-table-header"],["colspan","4",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","keyup","keydown","rows","todayValue","startValue","endValue","numCols","cellAspectRatio","activeCell"]],template:function(t,a){t&1&&(f(0,"table",0)(1,"thead",1)(2,"tr"),le(3,"th",2),g()(),f(4,"tbody",3),ue("selectedValueChange",function(o){return a._yearSelected(o)})("activeDateChange",function(o){return a._updateActiveDate(o)})("keyup",function(o){return a._handleCalendarBodyKeyup(o)})("keydown",function(o){return a._handleCalendarBodyKeydown(o)}),g()()),t&2&&(v(4),B("rows",a._years())("todayValue",a._todayYear())("startValue",a._selectedYear())("endValue",a._selectedYear())("numCols",4)("cellAspectRatio",4/7)("activeCell",a._getActiveCell()))},dependencies:[va],encapsulation:2})}return n})();function Gb(n,i,e,t,a){let r=n.getYear(i),o=n.getYear(e),l=Wb(n,t,a);return Math.floor((r-l)/Et)===Math.floor((o-l)/Et)}function zr(n,i,e,t){let a=n.getYear(i);return iS(a-Wb(n,e,t),Et)}function Wb(n,i,e){let t=0;return e?t=n.getYear(e)-Et+1:i&&(t=n.getYear(i)),t}function iS(n,i){return(n%i+i)%i}var zb=(()=>{class n{_changeDetectorRef=d(Ae);_dateFormats=d(Yn,{optional:!0});_dateAdapter=d(ut,{optional:!0});_dir=d(Xe,{optional:!0});_rerenderSubscription=Ee.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,a=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(a,this.minDate,this.maxDate),this._dateAdapter.getYear(t)!==this._dateAdapter.getYear(this._activeDate)&&this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof Ft?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setSelectedMonth(e)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;selectedChange=new T;monthSelected=new T;activeDateChange=new T;_matCalendarBody;_months=Z([]);_yearLabel=Z("");_todayMonth=Z(null);_selectedMonth=Z(null);constructor(){this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(nt(null)).subscribe(()=>this._init())}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_monthSelected(e){let t=e.value,a=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),t,1);this.monthSelected.emit(a);let r=this._getDateFromMonth(t);this.selectedChange.emit(r)}_updateActiveDate(e){let t=e.value,a=this._activeDate;this.activeDate=this._getDateFromMonth(t),this._dateAdapter.compareDate(a,this.activeDate)&&this.activeDateChange.emit(this.activeDate)}_handleCalendarBodyKeydown(e){let t=this._activeDate,a=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,a?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,a?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,-4);break;case 40:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,4);break;case 36:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,-this._dateAdapter.getMonth(this._activeDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,11-this._dateAdapter.getMonth(this._activeDate));break;case 33:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?-10:-1);break;case 34:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?10:1);break;case 13:case 32:this._selectionKeyPressed=!0;break;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&(this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked()),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._monthSelected({value:this._dateAdapter.getMonth(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_init(){this._setSelectedMonth(this.selected),this._todayMonth.set(this._getMonthInCurrentYear(this._dateAdapter.today())),this._yearLabel.set(this._dateAdapter.getYearName(this.activeDate));let e=this._dateAdapter.getMonthNames("short");this._months.set([[0,1,2,3],[4,5,6,7],[8,9,10,11]].map(t=>t.map(a=>this._createCellForMonth(a,e[a])))),this._changeDetectorRef.markForCheck()}_focusActiveCell(){this._matCalendarBody._focusActiveCell()}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_getMonthInCurrentYear(e){return e&&this._dateAdapter.getYear(e)==this._dateAdapter.getYear(this.activeDate)?this._dateAdapter.getMonth(e):null}_getDateFromMonth(e){let t=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,1),a=this._dateAdapter.getNumDaysInMonth(t);return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,Math.min(this._dateAdapter.getDate(this.activeDate),a))}_createCellForMonth(e,t){let a=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,1),r=this._dateAdapter.format(a,this._dateFormats.display.monthYearA11yLabel),o=this.dateClass?this.dateClass(a,"year"):void 0;return new Ur(e,t.toLocaleUpperCase(),r,this._shouldEnableMonth(e),o)}_shouldEnableMonth(e){let t=this._dateAdapter.getYear(this.activeDate);if(e==null||this._isYearAndMonthAfterMaxDate(t,e)||this._isYearAndMonthBeforeMinDate(t,e))return!1;if(!this.dateFilter)return!0;let a=this._dateAdapter.createDate(t,e,1);for(let r=a;this._dateAdapter.getMonth(r)==e;r=this._dateAdapter.addCalendarDays(r,1))if(this.dateFilter(r))return!0;return!1}_isYearAndMonthAfterMaxDate(e,t){if(this.maxDate){let a=this._dateAdapter.getYear(this.maxDate),r=this._dateAdapter.getMonth(this.maxDate);return e>a||e===a&&t>r}return!1}_isYearAndMonthBeforeMinDate(e,t){if(this.minDate){let a=this._dateAdapter.getYear(this.minDate),r=this._dateAdapter.getMonth(this.minDate);return e<a||e===a&&t<r}return!1}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setSelectedMonth(e){e instanceof Ft?this._selectedMonth.set(this._getMonthInCurrentYear(e.start)||this._getMonthInCurrentYear(e.end)):this._selectedMonth.set(this._getMonthInCurrentYear(e))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=L({type:n,selectors:[["mat-year-view"]],viewQuery:function(t,a){if(t&1&&qe(va,5),t&2){let r;H(r=$())&&(a._matCalendarBody=r.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass"},outputs:{selectedChange:"selectedChange",monthSelected:"monthSelected",activeDateChange:"activeDateChange"},exportAs:["matYearView"],decls:5,vars:9,consts:[["role","grid",1,"mat-calendar-table"],["aria-hidden","true",1,"mat-calendar-table-header"],["colspan","4",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","keyup","keydown","label","rows","todayValue","startValue","endValue","labelMinRequiredCells","numCols","cellAspectRatio","activeCell"]],template:function(t,a){t&1&&(f(0,"table",0)(1,"thead",1)(2,"tr"),le(3,"th",2),g()(),f(4,"tbody",3),ue("selectedValueChange",function(o){return a._monthSelected(o)})("activeDateChange",function(o){return a._updateActiveDate(o)})("keyup",function(o){return a._handleCalendarBodyKeyup(o)})("keydown",function(o){return a._handleCalendarBodyKeydown(o)}),g()()),t&2&&(v(4),B("label",a._yearLabel())("rows",a._months())("todayValue",a._todayMonth())("startValue",a._selectedMonth())("endValue",a._selectedMonth())("labelMinRequiredCells",2)("numCols",4)("cellAspectRatio",4/7)("activeCell",a._dateAdapter.getMonth(a.activeDate)))},dependencies:[va],encapsulation:2})}return n})(),Yb=(()=>{class n{_intl=d(_a);calendar=d(Nu);_dateAdapter=d(ut,{optional:!0});_dateFormats=d(Yn,{optional:!0});_periodButtonText;_periodButtonDescription;_periodButtonLabel;_prevButtonLabel;_nextButtonLabel;constructor(){d(He).load(Vn);let e=d(Ae);this._updateLabels(),this.calendar.stateChanges.subscribe(()=>{this._updateLabels(),e.markForCheck()})}get periodButtonText(){return this._periodButtonText}get periodButtonDescription(){return this._periodButtonDescription}get periodButtonLabel(){return this._periodButtonLabel}get prevButtonLabel(){return this._prevButtonLabel}get nextButtonLabel(){return this._nextButtonLabel}currentPeriodClicked(){this.calendar.currentView=this.calendar.currentView=="month"?"multi-year":"month"}previousClicked(){this.previousEnabled()&&(this.calendar.activeDate=this.calendar.currentView=="month"?this._dateAdapter.addCalendarMonths(this.calendar.activeDate,-1):this._dateAdapter.addCalendarYears(this.calendar.activeDate,this.calendar.currentView=="year"?-1:-Et))}nextClicked(){this.nextEnabled()&&(this.calendar.activeDate=this.calendar.currentView=="month"?this._dateAdapter.addCalendarMonths(this.calendar.activeDate,1):this._dateAdapter.addCalendarYears(this.calendar.activeDate,this.calendar.currentView=="year"?1:Et))}previousEnabled(){return this.calendar.minDate?!this.calendar.minDate||!this._isSameView(this.calendar.activeDate,this.calendar.minDate):!0}nextEnabled(){return!this.calendar.maxDate||!this._isSameView(this.calendar.activeDate,this.calendar.maxDate)}_updateLabels(){let e=this.calendar,t=this._intl,a=this._dateAdapter;e.currentView==="month"?(this._periodButtonText=a.format(e.activeDate,this._dateFormats.display.monthYearLabel).toLocaleUpperCase(),this._periodButtonDescription=a.format(e.activeDate,this._dateFormats.display.monthYearLabel).toLocaleUpperCase(),this._periodButtonLabel=t.switchToMultiYearViewLabel,this._prevButtonLabel=t.prevMonthLabel,this._nextButtonLabel=t.nextMonthLabel):e.currentView==="year"?(this._periodButtonText=a.getYearName(e.activeDate),this._periodButtonDescription=a.getYearName(e.activeDate),this._periodButtonLabel=t.switchToMonthViewLabel,this._prevButtonLabel=t.prevYearLabel,this._nextButtonLabel=t.nextYearLabel):(this._periodButtonText=t.formatYearRange(...this._formatMinAndMaxYearLabels()),this._periodButtonDescription=t.formatYearRangeLabel(...this._formatMinAndMaxYearLabels()),this._periodButtonLabel=t.switchToMonthViewLabel,this._prevButtonLabel=t.prevMultiYearLabel,this._nextButtonLabel=t.nextMultiYearLabel)}_isSameView(e,t){return this.calendar.currentView=="month"?this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t)&&this._dateAdapter.getMonth(e)==this._dateAdapter.getMonth(t):this.calendar.currentView=="year"?this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t):Gb(this._dateAdapter,e,t,this.calendar.minDate,this.calendar.maxDate)}_formatMinAndMaxYearLabels(){let t=this._dateAdapter.getYear(this.calendar.activeDate)-zr(this._dateAdapter,this.calendar.activeDate,this.calendar.minDate,this.calendar.maxDate),a=t+Et-1,r=this._dateAdapter.getYearName(this._dateAdapter.createDate(t,0,1)),o=this._dateAdapter.getYearName(this._dateAdapter.createDate(a,0,1));return[r,o]}_periodButtonLabelId=d(ct).getId("mat-calendar-period-label-");static \u0275fac=function(t){return new(t||n)};static \u0275cmp=(function(){return L({type:n,selectors:[["mat-calendar-header"]],exportAs:["matCalendarHeader"],ngContentSelectors:["*"],decls:17,vars:13,consts:[[1,"mat-calendar-header"],[1,"mat-calendar-controls"],["aria-live","polite",1,"cdk-visually-hidden",3,"id"],["matButton","","type","button",1,"mat-calendar-period-button",3,"click"],["aria-hidden","true"],["viewBox","0 0 10 5","focusable","false","aria-hidden","true",1,"mat-calendar-arrow"],["points","0,0 5,5 10,0"],[1,"mat-calendar-spacer"],["matIconButton","","type","button","disabledInteractive","",1,"mat-calendar-previous-button",3,"click","disabled","matTooltip"],["viewBox","0 0 24 24","focusable","false","aria-hidden","true"],["d","M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],["matIconButton","","type","button","disabledInteractive","",1,"mat-calendar-next-button",3,"click","disabled","matTooltip"],["d","M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"]],template:function(a,r){a&1&&(je(),f(0,"div",0)(1,"div",1)(2,"span",2),E(3),g(),f(4,"button",3),ue("click",function(){return r.currentPeriodClicked()}),f(5,"span",4),E(6),g(),Sa(),f(7,"svg",5),le(8,"polygon",6),g()(),Al(),le(9,"div",7),se(10),f(11,"button",8),ue("click",function(){return r.previousClicked()}),Sa(),f(12,"svg",9),le(13,"path",10),g()(),Al(),f(14,"button",11),ue("click",function(){return r.nextClicked()}),Sa(),f(15,"svg",9),le(16,"path",12),g()()()()),a&2&&(v(2),B("id",r._periodButtonLabelId),v(),ke(r.periodButtonDescription),v(),Se("aria-label",r.periodButtonLabel)("aria-describedby",r._periodButtonLabelId),v(2),ke(r.periodButtonText),v(),ee("mat-calendar-invert",r.calendar.currentView!=="month"),v(4),B("disabled",!r.previousEnabled())("matTooltip",r.prevButtonLabel),Se("aria-label",r.prevButtonLabel),v(3),B("disabled",!r.nextEnabled())("matTooltip",r.nextButtonLabel),Se("aria-label",r.nextButtonLabel))},dependencies:[vn,$s,Pb],encapsulation:2})})()}return n})(),Nu=(()=>{class n{_dateAdapter=d(ut,{optional:!0});_dateFormats=d(Yn,{optional:!0});_changeDetectorRef=d(Ae);_elementRef=d(j);headerComponent;_calendarHeaderPortal;_intlChanges;_moveFocusOnNextTick=!1;get startAt(){return this._startAt}set startAt(e){this._startAt=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_startAt=null;startView="month";get selected(){return this._selected}set selected(e){e instanceof Ft?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;selectedChange=new T;yearSelected=new T;monthSelected=new T;viewChanged=new T(!0);_userSelection=new T;_userDragDrop=new T;monthView;yearView;multiYearView;get activeDate(){return this._clampedActiveDate}set activeDate(e){this._clampedActiveDate=this._dateAdapter.clampDate(e,this.minDate,this.maxDate),this.stateChanges.next(),this._changeDetectorRef.markForCheck()}_clampedActiveDate;get currentView(){return this._currentView}set currentView(e){let t=this._currentView!==e?e:null;this._currentView=e,this._moveFocusOnNextTick=!0,this._changeDetectorRef.markForCheck(),t&&(this.stateChanges.next(),this.viewChanged.emit(t))}_currentView;_activeDrag=null;stateChanges=new N;constructor(){this._intlChanges=d(_a).changes.subscribe(()=>{this._changeDetectorRef.markForCheck(),this.stateChanges.next()})}ngAfterContentInit(){this._calendarHeaderPortal=new Hn(this.headerComponent||Yb),this.activeDate=this.startAt||this._dateAdapter.today(),this._currentView=this.startView}ngAfterViewChecked(){this._moveFocusOnNextTick&&(this._moveFocusOnNextTick=!1,this.focusActiveCell())}ngOnDestroy(){this._intlChanges.unsubscribe(),this.stateChanges.complete()}ngOnChanges(e){let t=e.minDate&&!this._dateAdapter.sameDate(e.minDate.previousValue,e.minDate.currentValue)?e.minDate:void 0,a=e.maxDate&&!this._dateAdapter.sameDate(e.maxDate.previousValue,e.maxDate.currentValue)?e.maxDate:void 0,r=t||a||e.dateFilter;if(r&&!r.firstChange){let o=this._getCurrentViewComponent();o&&(this._elementRef.nativeElement.contains(Zi())&&(this._moveFocusOnNextTick=!0),this._changeDetectorRef.detectChanges(),o._init())}this.stateChanges.next()}focusActiveCell(){this._getCurrentViewComponent()?._focusActiveCell(!1)}updateTodaysDate(){this._getCurrentViewComponent()?._init()}_dateSelected(e){let t=e.value;(this.selected instanceof Ft||t&&!this._dateAdapter.sameDate(t,this.selected))&&this.selectedChange.emit(t),this._userSelection.emit(e)}_yearSelectedInMultiYearView(e){this.yearSelected.emit(e)}_monthSelectedInYearView(e){this.monthSelected.emit(e)}_goToDateInView(e,t){this.activeDate=e,this.currentView=t}_dragStarted(e){this._activeDrag=e}_dragEnded(e){this._activeDrag&&(e.value&&this._userDragDrop.emit(e),this._activeDrag=null)}_getCurrentViewComponent(){return this.monthView||this.yearView||this.multiYearView}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=(function(){function e(o,l){}function t(o,l){if(o&1){let s=Sn();f(0,"mat-month-view",4),io("activeDateChange",function(c){We(s);let m=oe();return no(m.activeDate,c)||(m.activeDate=c),Ye(c)}),ue("_userSelection",function(c){We(s);let m=oe();return Ye(m._dateSelected(c))})("dragStarted",function(c){We(s);let m=oe();return Ye(m._dragStarted(c))})("dragEnded",function(c){We(s);let m=oe();return Ye(m._dragEnded(c))}),g()}if(o&2){let s=oe();to("activeDate",s.activeDate),B("selected",s.selected)("dateFilter",s.dateFilter)("maxDate",s.maxDate)("minDate",s.minDate)("dateClass",s.dateClass)("comparisonStart",s.comparisonStart)("comparisonEnd",s.comparisonEnd)("startDateAccessibleName",s.startDateAccessibleName)("endDateAccessibleName",s.endDateAccessibleName)("activeDrag",s._activeDrag)}}function a(o,l){if(o&1){let s=Sn();f(0,"mat-year-view",5),io("activeDateChange",function(c){We(s);let m=oe();return no(m.activeDate,c)||(m.activeDate=c),Ye(c)}),ue("monthSelected",function(c){We(s);let m=oe();return Ye(m._monthSelectedInYearView(c))})("selectedChange",function(c){We(s);let m=oe();return Ye(m._goToDateInView(c,"month"))}),g()}if(o&2){let s=oe();to("activeDate",s.activeDate),B("selected",s.selected)("dateFilter",s.dateFilter)("maxDate",s.maxDate)("minDate",s.minDate)("dateClass",s.dateClass)}}function r(o,l){if(o&1){let s=Sn();f(0,"mat-multi-year-view",6),io("activeDateChange",function(c){We(s);let m=oe();return no(m.activeDate,c)||(m.activeDate=c),Ye(c)}),ue("yearSelected",function(c){We(s);let m=oe();return Ye(m._yearSelectedInMultiYearView(c))})("selectedChange",function(c){We(s);let m=oe();return Ye(m._goToDateInView(c,"year"))}),g()}if(o&2){let s=oe();to("activeDate",s.activeDate),B("selected",s.selected)("dateFilter",s.dateFilter)("maxDate",s.maxDate)("minDate",s.minDate)("dateClass",s.dateClass)}}return L({type:n,selectors:[["mat-calendar"]],viewQuery:function(l,s){if(l&1&&qe(Bb,5)(zb,5)(jb,5),l&2){let u;H(u=$())&&(s.monthView=u.first),H(u=$())&&(s.yearView=u.first),H(u=$())&&(s.multiYearView=u.first)}},hostAttrs:[1,"mat-calendar"],inputs:{headerComponent:"headerComponent",startAt:"startAt",startView:"startView",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName"},outputs:{selectedChange:"selectedChange",yearSelected:"yearSelected",monthSelected:"monthSelected",viewChanged:"viewChanged",_userSelection:"_userSelection",_userDragDrop:"_userDragDrop"},exportAs:["matCalendar"],features:[ve([Hb]),Me],decls:5,vars:2,consts:[[3,"cdkPortalOutlet"],["cdkMonitorSubtreeFocus","","tabindex","-1",1,"mat-calendar-content"],[3,"activeDate","selected","dateFilter","maxDate","minDate","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName","activeDrag"],[3,"activeDate","selected","dateFilter","maxDate","minDate","dateClass"],[3,"activeDateChange","_userSelection","dragStarted","dragEnded","activeDate","selected","dateFilter","maxDate","minDate","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName","activeDrag"],[3,"activeDateChange","monthSelected","selectedChange","activeDate","selected","dateFilter","maxDate","minDate","dateClass"],[3,"activeDateChange","yearSelected","selectedChange","activeDate","selected","dateFilter","maxDate","minDate","dateClass"]],template:function(l,s){if(l&1&&(Re(0,e,0,0,"ng-template",0),f(1,"div",1),he(2,t,1,11,"mat-month-view",2)(3,a,1,6,"mat-year-view",3)(4,r,1,6,"mat-multi-year-view",3),g()),l&2){let u;B("cdkPortalOutlet",s._calendarHeaderPortal),v(2),fe((u=s.currentView)==="month"?2:u==="year"?3:u==="multi-year"?4:-1)}},dependencies:[da,wr,Bb,zb,jb],styles:[`.mat-calendar {
  display: block;
  line-height: normal;
  font-family: var(--%NS%mat-datepicker-calendar-text-font, var(--%NS%mat-sys-body-medium-font));
  font-size: var(--%NS%mat-datepicker-calendar-text-size, var(--%NS%mat-sys-body-medium-size));
}

.mat-calendar-header {
  padding: 8px 8px 0 8px;
}

.mat-calendar-content {
  padding: 0 8px 8px 8px;
  outline: none;
}

.mat-calendar-controls {
  display: flex;
  align-items: center;
  margin: 5% calc(4.7142857143% - 16px);
}

.mat-calendar-spacer {
  flex: 1 1 auto;
}

.mat-calendar-period-button {
  min-width: 0;
  margin: 0 8px;
  font-size: var(--%NS%mat-datepicker-calendar-period-button-text-size, var(--%NS%mat-sys-title-small-size));
  font-weight: var(--%NS%mat-datepicker-calendar-period-button-text-weight, var(--%NS%mat-sys-title-small-weight));
  --%NS%mat-button-text-label-text-color: var(--%NS%mat-datepicker-calendar-period-button-text-color, var(--%NS%mat-sys-on-surface-variant));
}

.mat-calendar-arrow {
  display: inline-block;
  width: 10px;
  height: 5px;
  margin: 0 0 0 5px;
  vertical-align: middle;
  fill: var(--%NS%mat-datepicker-calendar-period-button-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-calendar-arrow.mat-calendar-invert {
  transform: rotate(180deg);
}
[dir=rtl] .mat-calendar-arrow {
  margin: 0 5px 0 0;
}
@media (forced-colors: active) {
  .mat-calendar-arrow {
    fill: CanvasText;
  }
}

.mat-datepicker-content .mat-calendar-previous-button:not(.mat-mdc-button-disabled),
.mat-datepicker-content .mat-calendar-next-button:not(.mat-mdc-button-disabled) {
  color: var(--%NS%mat-datepicker-calendar-navigation-button-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
[dir=rtl] .mat-calendar-previous-button,
[dir=rtl] .mat-calendar-next-button {
  transform: rotate(180deg);
}

.mat-calendar-table {
  border-spacing: 0;
  border-collapse: collapse;
  width: 100%;
}

.mat-calendar-table-header th {
  text-align: center;
  padding: 0 0 8px 0;
  color: var(--%NS%mat-datepicker-calendar-header-text-color, var(--%NS%mat-sys-on-surface-variant));
  font-size: var(--%NS%mat-datepicker-calendar-header-text-size, var(--%NS%mat-sys-title-small-size));
  font-weight: var(--%NS%mat-datepicker-calendar-header-text-weight, var(--%NS%mat-sys-title-small-weight));
}

.mat-calendar-table-header-divider {
  position: relative;
  height: 1px;
}
.mat-calendar-table-header-divider::after {
  content: "";
  position: absolute;
  top: 0;
  left: -8px;
  right: -8px;
  height: 1px;
  background: var(--%NS%mat-datepicker-calendar-header-divider-color, transparent);
}

.mat-calendar-body-cell-content::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 3px) * -1);
}

.mat-calendar-body-cell:focus-visible .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})})()}return n})(),aS=new y("mat-datepicker-scroll-strategy",{providedIn:"root",factory:()=>{let n=d(re);return()=>fa(n)}}),qb=(()=>{class n{_elementRef=d(j);_animationsDisabled=tt();_changeDetectorRef=d(Ae);_globalModel=d(Hr);_dateAdapter=d(ut);_ngZone=d(P);_rangeSelectionStrategy=d($b,{optional:!0});_stateChanges;_model;_eventCleanups;_animationFallback;_calendar;color;datepicker;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;_isAbove=!1;_animationDone=new N;_isAnimating=!1;_closeButtonText;_closeButtonFocused=!1;_actionsPortal=null;_dialogLabelId=null;constructor(){if(d(He).load(Vn),this._closeButtonText=d(_a).closeCalendarLabel,!this._animationsDisabled){let e=this._elementRef.nativeElement,t=d(Ie);this._eventCleanups=this._ngZone.runOutsideAngular(()=>[t.listen(e,"animationstart",this._handleAnimationEvent),t.listen(e,"animationend",this._handleAnimationEvent),t.listen(e,"animationcancel",this._handleAnimationEvent)])}}ngAfterViewInit(){this._stateChanges=this.datepicker.stateChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()}),this._calendar.focusActiveCell()}ngOnDestroy(){clearTimeout(this._animationFallback),this._eventCleanups?.forEach(e=>e()),this._stateChanges?.unsubscribe(),this._animationDone.complete()}_handleUserSelection(e){let t=this._model.selection,a=e.value,r=t instanceof Ft;if(r&&this._rangeSelectionStrategy){let o=this._rangeSelectionStrategy.selectionFinished(a,t,e.event);this._model.updateSelection(o,this)}else a&&(r||!this._dateAdapter.sameDate(a,t))&&this._model.add(a);(!this._model||this._model.isComplete())&&!this._actionsPortal&&this.datepicker.close()}_handleUserDragDrop(e){this._model.updateSelection(e.value,this)}_startExitAnimation(){this._elementRef.nativeElement.classList.add("mat-datepicker-content-exit"),this._animationsDisabled?this._animationDone.next():(clearTimeout(this._animationFallback),this._animationFallback=setTimeout(()=>{this._isAnimating||this._animationDone.next()},200))}_handleAnimationEvent=e=>{let t=this._elementRef.nativeElement;e.target!==t||!e.animationName.startsWith("_mat-datepicker-content")||(clearTimeout(this._animationFallback),this._isAnimating=e.type==="animationstart",t.classList.toggle("mat-datepicker-content-animating",this._isAnimating),this._isAnimating||this._animationDone.next())};_getSelected(){return this._model.selection}_applyPendingSelection(){this._model!==this._globalModel&&this._globalModel.updateSelection(this._model.selection,this)}_assignActions(e,t){this._model=e?this._globalModel.clone():this._globalModel,this._actionsPortal=e,t&&this._changeDetectorRef.detectChanges()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=(function(){function e(t,a){}return L({type:n,selectors:[["mat-datepicker-content"]],viewQuery:function(a,r){if(a&1&&qe(Nu,5),a&2){let o;H(o=$())&&(r._calendar=o.first)}},hostAttrs:[1,"mat-datepicker-content"],hostVars:6,hostBindings:function(a,r){a&2&&(At(r.color?"mat-"+r.color:""),ee("mat-datepicker-content-touch",r.datepicker.touchUi)("mat-datepicker-content-animations-enabled",!r._animationsDisabled))},inputs:{color:"color"},exportAs:["matDatepickerContent"],decls:5,vars:26,consts:[["cdkTrapFocus","","role","dialog",1,"mat-datepicker-content-container"],[3,"yearSelected","monthSelected","viewChanged","_userSelection","_userDragDrop","id","startAt","startView","minDate","maxDate","dateFilter","headerComponent","selected","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName"],[3,"cdkPortalOutlet"],["type","button","matButton","elevated",1,"mat-datepicker-close-button",3,"focus","blur","click","color"]],template:function(a,r){a&1&&(f(0,"div",0)(1,"mat-calendar",1),ue("yearSelected",function(l){return r.datepicker._selectYear(l)})("monthSelected",function(l){return r.datepicker._selectMonth(l)})("viewChanged",function(l){return r.datepicker._viewChanged(l)})("_userSelection",function(l){return r._handleUserSelection(l)})("_userDragDrop",function(l){return r._handleUserDragDrop(l)}),g(),Re(2,e,0,0,"ng-template",2),f(3,"button",3),ue("focus",function(){return r._closeButtonFocused=!0})("blur",function(){return r._closeButtonFocused=!1})("click",function(){return r.datepicker.close()}),E(4),g()()),a&2&&(ee("mat-datepicker-content-container-with-custom-header",r.datepicker.calendarHeaderComponent)("mat-datepicker-content-container-with-actions",r._actionsPortal),Se("aria-modal",!0)("aria-labelledby",r._dialogLabelId??void 0),v(),At(r.datepicker.panelClass),B("id",r.datepicker.id)("startAt",r.datepicker.startAt)("startView",r.datepicker.startView)("minDate",r.datepicker._getMinDate())("maxDate",r.datepicker._getMaxDate())("dateFilter",r.datepicker._getDateFilter())("headerComponent",r.datepicker.calendarHeaderComponent)("selected",r._getSelected())("dateClass",r.datepicker.dateClass)("comparisonStart",r.comparisonStart)("comparisonEnd",r.comparisonEnd)("startDateAccessibleName",r.startDateAccessibleName)("endDateAccessibleName",r.endDateAccessibleName),v(),B("cdkPortalOutlet",r._actionsPortal),v(),ee("cdk-visually-hidden",!r._closeButtonFocused),B("color",r.color||"primary"),v(),ke(r._closeButtonText))},dependencies:[Vc,Nu,da,vn],styles:[`@keyframes _mat-datepicker-content-dropdown-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-datepicker-content-dialog-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-datepicker-content-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-datepicker-content {
  display: block;
  background-color: var(--%NS%mat-datepicker-calendar-container-background-color, var(--%NS%mat-sys-surface-container-high));
  color: var(--%NS%mat-datepicker-calendar-container-text-color, var(--%NS%mat-sys-on-surface));
  box-shadow: var(--%NS%mat-datepicker-calendar-container-elevation-shadow, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12));
  border-radius: var(--%NS%mat-datepicker-calendar-container-shape, var(--%NS%mat-sys-corner-large));
}
.mat-datepicker-content.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-dropdown-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-datepicker-content .mat-calendar {
  width: 296px;
  height: 354px;
}
.mat-datepicker-content .mat-datepicker-content-container-with-custom-header .mat-calendar {
  height: auto;
}
.mat-datepicker-content .mat-datepicker-close-button {
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 8px;
}
.mat-datepicker-content-animating .mat-datepicker-content .mat-datepicker-close-button {
  display: none;
}

.mat-datepicker-content-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.mat-datepicker-content-touch {
  display: block;
  max-height: 80vh;
  box-shadow: var(--%NS%mat-datepicker-calendar-container-touch-elevation-shadow, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12));
  border-radius: var(--%NS%mat-datepicker-calendar-container-touch-shape, var(--%NS%mat-sys-corner-extra-large));
  position: relative;
  overflow: visible;
  min-height: fit-content;
}
.mat-datepicker-content-touch.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-dialog-enter 150ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-datepicker-content-touch .mat-datepicker-content-container {
  min-height: fit-content;
  max-height: 788px;
  min-width: 250px;
  max-width: 750px;
}
.mat-datepicker-content-touch .mat-calendar {
  width: 100%;
  height: auto;
}

.mat-datepicker-content-exit.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-exit 100ms linear;
}

@media all and (orientation: landscape) {
  .mat-datepicker-content-touch .mat-datepicker-content-container {
    width: 64vh;
    height: 80vh;
  }
}
@media all and (orientation: portrait) {
  .mat-datepicker-content-touch .mat-datepicker-content-container {
    width: 80vw;
    height: 100vw;
  }
}
`],encapsulation:2})})()}return n})(),Ub=(()=>{class n{_injector=d(re);_viewContainerRef=d(Ue);_dateAdapter=d(ut,{optional:!0});_dir=d(Xe,{optional:!0});_model=d(Hr);_animationsDisabled=tt();_scrollStrategy=d(aS);_inputStateChanges=Ee.EMPTY;_document=d(q);calendarHeaderComponent;get startAt(){return this._startAt||(this.datepickerInput?this.datepickerInput.getStartValue():null)}set startAt(e){this._startAt=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_startAt=null;startView="month";get color(){return this._color||(this.datepickerInput?this.datepickerInput.getThemePalette():void 0)}set color(e){this._color=e}_color;touchUi=!1;get disabled(){return this._disabled===void 0&&this.datepickerInput?this.datepickerInput.disabled:!!this._disabled}set disabled(e){e!==this._disabled&&(this._disabled=e,this.stateChanges.next(void 0))}_disabled;xPosition="start";yPosition="below";restoreFocus=!0;yearSelected=new T;monthSelected=new T;viewChanged=new T(!0);dateClass;openedStream=new T;closedStream=new T;get panelClass(){return this._panelClass}set panelClass(e){this._panelClass=sg(e)}_panelClass;get opened(){return this._opened}set opened(e){e?this.open():this.close()}_opened=!1;id=d(ct).getId("mat-datepicker-");_getMinDate(){return this.datepickerInput&&this.datepickerInput.min}_getMaxDate(){return this.datepickerInput&&this.datepickerInput.max}_getDateFilter(){return this.datepickerInput&&this.datepickerInput.dateFilter}_overlayRef=null;_componentRef=null;_focusedElementBeforeOpen=null;_backdropHarnessClass=`${this.id}-backdrop`;_actionsPortal=null;datepickerInput;stateChanges=new N;_changeDetectorRef=d(Ae);constructor(){this._dateAdapter,this._model.selectionChanged.subscribe(()=>{this._changeDetectorRef.markForCheck()})}ngOnChanges(e){let t=e.xPosition||e.yPosition;if(t&&!t.firstChange&&this._overlayRef){let a=this._overlayRef.getConfig().positionStrategy;a instanceof ha&&(this._setConnectedPositions(a),this.opened&&this._overlayRef.updatePosition())}this.stateChanges.next(void 0)}ngOnDestroy(){this._destroyOverlay(),this.close(),this._inputStateChanges.unsubscribe(),this.stateChanges.complete()}select(e){this._model.add(e)}_selectYear(e){this.yearSelected.emit(e)}_selectMonth(e){this.monthSelected.emit(e)}_viewChanged(e){this.viewChanged.emit(e)}registerInput(e){return this.datepickerInput,this._inputStateChanges.unsubscribe(),this.datepickerInput=e,this._inputStateChanges=e.stateChanges.subscribe(()=>this.stateChanges.next(void 0)),this._model}registerActions(e){this._actionsPortal,this._actionsPortal=e,this._componentRef?.instance._assignActions(e,!0)}removeActions(e){e===this._actionsPortal&&(this._actionsPortal=null,this._componentRef?.instance._assignActions(null,!0))}open(){this._opened||this.disabled||this._componentRef?.instance._isAnimating||(this.datepickerInput,this._focusedElementBeforeOpen=Zi(),this._openOverlay(),this._opened=!0,this.openedStream.emit())}close(){if(!this._opened||this._componentRef?.instance._isAnimating)return;let e=this.restoreFocus&&this._focusedElementBeforeOpen&&typeof this._focusedElementBeforeOpen.focus=="function",t=()=>{this._opened&&(this._opened=!1,this.closedStream.emit())};if(this._componentRef){let{instance:a,location:r}=this._componentRef;a._animationDone.pipe(yt(1)).subscribe(()=>{let o=this._document.activeElement;e&&(!o||o===this._document.activeElement||r.nativeElement.contains(o))&&this._focusedElementBeforeOpen.focus(),this._focusedElementBeforeOpen=null,this._destroyOverlay()}),a._startExitAnimation()}e?setTimeout(t):t()}_applyPendingSelection(){this._componentRef?.instance?._applyPendingSelection()}_forwardContentValues(e){e.datepicker=this,e.color=this.color,e._dialogLabelId=this.datepickerInput.getOverlayLabelId(),e._assignActions(this._actionsPortal,!1)}_openOverlay(){this._destroyOverlay();let e=this.touchUi,t=new Hn(qb,this._viewContainerRef),a=this._overlayRef=ba(this._injector,new pa({positionStrategy:e?this._getDialogStrategy():this._getDropdownStrategy(),hasBackdrop:!0,backdropClass:[e?"cdk-overlay-dark-backdrop":"mat-overlay-transparent-backdrop",this._backdropHarnessClass],direction:this._dir||"ltr",scrollStrategy:e?ml(this._injector):this._scrollStrategy(),panelClass:`mat-datepicker-${e?"dialog":"popup"}`,disableAnimations:this._animationsDisabled}));this._getCloseStream(a).subscribe(r=>{r&&r.preventDefault(),this.close()}),a.keydownEvents().subscribe(r=>{let o=r.keyCode;(o===38||o===40||o===37||o===39||o===33||o===34)&&r.preventDefault()}),this._componentRef=a.attach(t),this._forwardContentValues(this._componentRef.instance),e||Ne(()=>{a.updatePosition()},{injector:this._injector})}_destroyOverlay(){this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=this._componentRef=null)}_getDialogStrategy(){return pl(this._injector).centerHorizontally().centerVertically()}_getDropdownStrategy(){let e=ga(this._injector,this.datepickerInput.getConnectedOverlayOrigin()).withTransformOriginOn(".mat-datepicker-content").withFlexibleDimensions(!1).withViewportMargin(8).withLockedPosition();return this._setConnectedPositions(e)}_setConnectedPositions(e){let t=this.xPosition==="end"?"end":"start",a=t==="start"?"end":"start",r=this.yPosition==="above"?"bottom":"top",o=r==="top"?"bottom":"top";return e.withPositions([{originX:t,originY:o,overlayX:t,overlayY:r},{originX:t,originY:r,overlayX:t,overlayY:o},{originX:a,originY:o,overlayX:a,overlayY:r},{originX:a,originY:r,overlayX:a,overlayY:o}])}_getCloseStream(e){let t=["ctrlKey","shiftKey","metaKey"];return at(e.backdropClick(),e.detachments(),e.keydownEvents().pipe(be(a=>a.keyCode===27&&!xt(a)||this.datepickerInput&&xt(a,"altKey")&&a.keyCode===38&&t.every(r=>!xt(a,r)))))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n,inputs:{calendarHeaderComponent:"calendarHeaderComponent",startAt:"startAt",startView:"startView",color:"color",touchUi:[2,"touchUi","touchUi",K],disabled:[2,"disabled","disabled",K],xPosition:"xPosition",yPosition:"yPosition",restoreFocus:[2,"restoreFocus","restoreFocus",K],dateClass:"dateClass",panelClass:"panelClass",opened:[2,"opened","opened",K]},outputs:{yearSelected:"yearSelected",monthSelected:"monthSelected",viewChanged:"viewChanged",openedStream:"opened",closedStream:"closed"},features:[Me]})}return n})(),Kb=(()=>{class n extends Ub{static \u0275fac=(()=>{let e;return function(a){return(e||(e=ye(n)))(a||n)}})();static \u0275cmp=L({type:n,selectors:[["mat-datepicker"]],exportAs:["matDatepicker"],features:[ve([Hb,{provide:Ub,useExisting:n}]),ie],decls:0,vars:0,template:function(t,a){},encapsulation:2})}return n})(),ya=class{target;targetElement;value=null;constructor(i,e){this.target=i,this.targetElement=e,this.value=this.target.value}},rS=(()=>{class n{_elementRef=d(j);_dateAdapter=d(ut,{optional:!0});_dateFormats=d(Yn,{optional:!0});_isInitialized=!1;get value(){return this._model?this._getValueFromModel(this._model.selection):this._pendingValue}set value(e){this._assignValueProgrammatically(e,!0)}_model;get disabled(){return!!this._disabled||this._parentDisabled()}set disabled(e){let t=e,a=this._elementRef.nativeElement;this._disabled!==t&&(this._disabled=t,this.stateChanges.next(void 0)),t&&this._isInitialized&&a.blur&&a.blur()}_disabled;dateChange=new T;dateInput=new T;stateChanges=new N;_onTouched=()=>{};_validatorOnChange=()=>{};_cvaOnChange=()=>{};_valueChangesSubscription=Ee.EMPTY;_localeSubscription=Ee.EMPTY;_pendingValue=null;_parseValidator=()=>this._lastValueValid?null:{matDatepickerParse:{text:this._elementRef.nativeElement.value}};_filterValidator=e=>{let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value));return!t||this._matchesFilter(t)?null:{matDatepickerFilter:!0}};_minValidator=e=>{let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value)),a=this._getMinDate();return!a||!t||this._dateAdapter.compareDate(a,t)<=0?null:{matDatepickerMin:{min:a,actual:t}}};_maxValidator=e=>{let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value)),a=this._getMaxDate();return!a||!t||this._dateAdapter.compareDate(a,t)>=0?null:{matDatepickerMax:{max:a,actual:t}}};_getValidators(){return[this._parseValidator,this._minValidator,this._maxValidator,this._filterValidator]}_registerModel(e){this._model=e,this._valueChangesSubscription.unsubscribe(),this._pendingValue&&this._assignValue(this._pendingValue),this._valueChangesSubscription=this._model.selectionChanged.subscribe(t=>{if(this._shouldHandleChangeEvent(t)){let a=this._getValueFromModel(t.selection);this._lastValueValid=this._isValidValue(a),this._cvaOnChange(a),this._onTouched(),this._formatValue(a),this.dateInput.emit(new ya(this,this._elementRef.nativeElement)),this.dateChange.emit(new ya(this,this._elementRef.nativeElement))}})}_lastValueValid=!1;constructor(){this._localeSubscription=this._dateAdapter.localeChanges.subscribe(()=>{this._assignValueProgrammatically(this.value,!0)})}ngAfterViewInit(){this._isInitialized=!0}ngOnChanges(e){oS(e,this._dateAdapter)&&this.stateChanges.next(void 0)}ngOnDestroy(){this._valueChangesSubscription.unsubscribe(),this._localeSubscription.unsubscribe(),this.stateChanges.complete()}registerOnValidatorChange(e){this._validatorOnChange=e}validate(e){return this._validator?this._validator(e):null}writeValue(e){this._assignValueProgrammatically(e,e!==this.value)}registerOnChange(e){this._cvaOnChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}_onKeydown(e){let t=["ctrlKey","shiftKey","metaKey"];xt(e,"altKey")&&e.keyCode===40&&t.every(r=>!xt(e,r))&&!this._elementRef.nativeElement.readOnly&&(this._openPopup(),e.preventDefault())}_onInput(e){let t=e.target.value,a=this._lastValueValid,r=this._dateAdapter.parse(t,this._dateFormats.parse.dateInput);this._lastValueValid=this._isValidValue(r),r=this._dateAdapter.getValidDateOrNull(r);let o=!this._dateAdapter.sameDate(r,this.value);!r||o?this._cvaOnChange(r):(t&&!this.value&&this._cvaOnChange(r),a!==this._lastValueValid&&this._validatorOnChange()),o&&(this._assignValue(r),this.dateInput.emit(new ya(this,this._elementRef.nativeElement)))}_onChange(){this.dateChange.emit(new ya(this,this._elementRef.nativeElement))}_onBlur(){this.value&&this._formatValue(this.value),this._onTouched()}_formatValue(e){this._elementRef.nativeElement.value=e!=null?this._dateAdapter.format(e,this._dateFormats.display.dateInput):""}_assignValue(e){this._model?(this._assignValueToModel(e),this._pendingValue=null):this._pendingValue=e}_isValidValue(e){return!e||this._dateAdapter.isValid(e)}_parentDisabled(){return!1}_assignValueProgrammatically(e,t){e=this._dateAdapter.deserialize(e),this._lastValueValid=this._isValidValue(e),e=this._dateAdapter.getValidDateOrNull(e),this._assignValue(e),t&&this._formatValue(e)}_matchesFilter(e){let t=this._getDateFilter();return!t||t(e)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n,inputs:{value:"value",disabled:[2,"disabled","disabled",K]},outputs:{dateChange:"dateChange",dateInput:"dateInput"},features:[Me]})}return n})();function oS(n,i){let e=Object.keys(n);for(let t of e){let{previousValue:a,currentValue:r}=n[t];if(i.isDateInstance(a)&&i.isDateInstance(r)){if(!i.sameDate(a,r))return!0}else return!0}return!1}var sS={provide:hr,useExisting:Mt(()=>gl),multi:!0},lS={provide:hi,useExisting:Mt(()=>gl),multi:!0},gl=(()=>{class n extends rS{_formField=d(Ar,{optional:!0});_closedSubscription=Ee.EMPTY;_openedSubscription=Ee.EMPTY;set matDatepicker(e){e&&(this._datepicker=e,this._ariaOwns.set(e.opened?e.id:null),this._closedSubscription=e.closedStream.subscribe(()=>{this._onTouched(),this._ariaOwns.set(null)}),this._openedSubscription=e.openedStream.subscribe(()=>{this._ariaOwns.set(e.id)}),this._registerModel(e.registerInput(this)))}_datepicker;_ariaOwns=Z(null);get min(){return this._min}set min(e){let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));this._dateAdapter.sameDate(t,this._min)||(this._min=t,this._validatorOnChange())}_min=null;get max(){return this._max}set max(e){let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));this._dateAdapter.sameDate(t,this._max)||(this._max=t,this._validatorOnChange())}_max=null;get dateFilter(){return this._dateFilter}set dateFilter(e){let t=this._matchesFilter(this.value);this._dateFilter=e,this._matchesFilter(this.value)!==t&&this._validatorOnChange()}_dateFilter;_validator=null;constructor(){super(),this._validator=xe.compose(super._getValidators())}getConnectedOverlayOrigin(){return this._formField?this._formField.getConnectedOverlayOrigin():this._elementRef}getOverlayLabelId(){return this._formField?this._formField.getLabelId():this._elementRef.nativeElement.getAttribute("aria-labelledby")}getThemePalette(){return this._formField?this._formField.color:void 0}getStartValue(){return this.value}ngOnDestroy(){super.ngOnDestroy(),this._closedSubscription.unsubscribe(),this._openedSubscription.unsubscribe()}_openPopup(){this._datepicker&&this._datepicker.open()}_getValueFromModel(e){return e}_assignValueToModel(e){this._model&&this._model.updateSelection(e,this)}_getMinDate(){return this._min}_getMaxDate(){return this._max}_getDateFilter(){return this._dateFilter}_shouldHandleChangeEvent(e){return e.source!==this}static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n,selectors:[["input","matDatepicker",""]],hostAttrs:[1,"mat-datepicker-input"],hostVars:6,hostBindings:function(t,a){t&1&&ue("input",function(o){return a._onInput(o)})("change",function(){return a._onChange()})("blur",function(){return a._onBlur()})("keydown",function(o){return a._onKeydown(o)}),t&2&&(Lt("disabled",a.disabled),Se("aria-haspopup",a._datepicker?"dialog":null)("aria-owns",a._ariaOwns())("min",a.min?a._dateAdapter.toIso8601(a.min):null)("max",a.max?a._dateAdapter.toIso8601(a.max):null)("data-mat-calendar",a._datepicker?a._datepicker.id:null))},inputs:{matDatepicker:"matDatepicker",min:"min",max:"max",dateFilter:[0,"matDatepickerFilter","dateFilter"]},exportAs:["matDatepickerInput"],features:[ve([sS,lS,{provide:Bs,useExisting:n}]),ie]})}return n})(),dS=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n,selectors:[["","matDatepickerToggleIcon",""]]})}return n})(),Tu=(()=>{class n{_intl=d(_a);_changeDetectorRef=d(Ae);_stateChanges=Ee.EMPTY;datepicker;tabIndex=null;ariaLabel;get disabled(){return this._disabled===void 0&&this.datepicker?this.datepicker.disabled:!!this._disabled}set disabled(e){this._disabled=e}_disabled;disableRipple=!1;_customIcon;_button;constructor(){let e=d(new xi("tabindex"),{optional:!0}),t=Number(e);this.tabIndex=t||t===0?t:null}ngOnChanges(e){e.datepicker&&this._watchStateChanges()}ngOnDestroy(){this._stateChanges.unsubscribe()}ngAfterContentInit(){this._watchStateChanges()}_open(e){this.datepicker&&!this.disabled&&(this.datepicker.open(),e.stopPropagation())}_watchStateChanges(){let e=this.datepicker?this.datepicker.stateChanges:V(),t=this.datepicker&&this.datepicker.datepickerInput?this.datepicker.datepickerInput.stateChanges:V(),a=this.datepicker?at(this.datepicker.openedStream,this.datepicker.closedStream):V();this._stateChanges.unsubscribe(),this._stateChanges=at(this._intl.changes,e,t,a).subscribe(()=>this._changeDetectorRef.markForCheck())}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=(function(){let e=["button"],t=[[["","matDatepickerToggleIcon",""]]],a=["[matDatepickerToggleIcon]"];function r(o,l){o&1&&(Sa(),f(0,"svg",2),le(1,"path",3),g())}return L({type:n,selectors:[["mat-datepicker-toggle"]],contentQueries:function(l,s,u){if(l&1&&Vt(u,dS,5),l&2){let c;H(c=$())&&(s._customIcon=c.first)}},viewQuery:function(l,s){if(l&1&&qe(e,5),l&2){let u;H(u=$())&&(s._button=u.first)}},hostAttrs:[1,"mat-datepicker-toggle"],hostVars:8,hostBindings:function(l,s){l&1&&ue("click",function(c){return s._open(c)}),l&2&&(Se("tabindex",null)("data-mat-calendar",s.datepicker?s.datepicker.id:null),ee("mat-datepicker-toggle-active",s.datepicker&&s.datepicker.opened)("mat-accent",s.datepicker&&s.datepicker.color==="accent")("mat-warn",s.datepicker&&s.datepicker.color==="warn"))},inputs:{datepicker:[0,"for","datepicker"],tabIndex:"tabIndex",ariaLabel:[0,"aria-label","ariaLabel"],disabled:[2,"disabled","disabled",K],disableRipple:"disableRipple"},exportAs:["matDatepickerToggle"],features:[Me],ngContentSelectors:a,decls:4,vars:7,consts:[["button",""],["matIconButton","","type","button",3,"tabIndex","disabled","disableRipple"],["viewBox","0 0 24 24","width","24px","height","24px","fill","currentColor","focusable","false","aria-hidden","true",1,"mat-datepicker-toggle-default-icon"],["d","M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"]],template:function(l,s){l&1&&(je(t),f(0,"button",1,0),he(2,r,2,0,":svg:svg",2),se(3),g()),l&2&&(B("tabIndex",s.disabled?-1:s.tabIndex)("disabled",s.disabled)("disableRipple",s.disableRipple),Se("aria-haspopup",s.datepicker?"dialog":null)("aria-label",s.ariaLabel||s._intl.openCalendarLabel)("aria-expanded",s.datepicker?s.datepicker.opened:null),v(2),fe(s._customIcon?-1:2))},dependencies:[$s],styles:[`.mat-datepicker-toggle {
  pointer-events: auto;
  color: var(--%NS%mat-datepicker-toggle-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-datepicker-toggle button {
  color: inherit;
}

.mat-datepicker-toggle-active {
  color: var(--%NS%mat-datepicker-toggle-active-state-icon-color, var(--%NS%mat-sys-primary));
}

@media (forced-colors: active) {
  .mat-datepicker-toggle-default-icon {
    color: CanvasText;
  }
}
`],encapsulation:2})})()}return n})();var Xb=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=Q({type:n});static \u0275inj=X({providers:[_a],imports:[Un,Su,Bc,qs,qb,Tu,Yb,$e,Fr]})}return n})();var bl=class n{constructor(i){this.fb=i;this.studentDetailsForm=this.fb.group({name:this.fb.control("",[xe.required]),country:this.fb.control("",[xe.required]),state:this.fb.control("",[xe.required]),passportDeclaration:this.fb.control("",[xe.required]),fitnessDeclaration:this.fb.control("",[xe.required]),courseName:this.fb.control("",[xe.required]),subjects:this.fb.control("",[xe.required]),date:this.fb.control("",[xe.required]),city:this.fb.control("",[xe.required]),street:this.fb.control("",[xe.required]),address2:this.fb.control("",[xe.required]),email:this.fb.control("",[xe.required]),zip:this.fb.control("",[xe.required])})}fb;studentDetailsForm;closeResult;selectedRecord;get nameControl(){return this.studentDetailsForm.get("name")}get countryControl(){return this.studentDetailsForm.get("country")}get stateControl(){return this.studentDetailsForm.get("state")}get passportDeclarationControl(){return this.studentDetailsForm.get("passportDeclaration")}get fitnessDeclarationControl(){return this.studentDetailsForm.get("fitnessDeclaration")}get courseNameControl(){return this.studentDetailsForm.get("courseName")}get subjectsControl(){return this.studentDetailsForm.get("subjects")}get dateControl(){return this.studentDetailsForm.get("date")}get cityControl(){return this.studentDetailsForm.get("city")}get streetControl(){return this.studentDetailsForm.get("street")}get address2Control(){return this.studentDetailsForm.get("address2")}get emailControl(){return this.studentDetailsForm.get("email")}get zipControl(){return this.studentDetailsForm.get("zip")}static \u0275fac=function(e){return new(e||n)(pe(Ff))};static \u0275cmp=L({type:n,selectors:[["app-student-records"]],decls:93,vars:18,consts:[["picker",""],[2,"padding","16px","display","flex","justify-content","center"],[2,"width","fit-content"],[1,"student-entry-form"],[1,"student-entry-form__form-row"],[1,"student-entry-form__form-row--input-section"],[1,"form-group","full-width"],["matInput","","type","text","name","name","type","text","placeholder","Name",3,"formControl"],[1,"form-group"],["matInput","","type","text","name","country","type","text","placeholder","Country",3,"formControl"],["matInput","","type","text","name","State","type","text","placeholder","State",3,"formControl"],["matInput","","type","text","name","country","type","text","placeholder","Passport Declaration",3,"formControl"],["matInput","","type","text","name","State","type","text","placeholder","Fitness Declaration",3,"formControl"],["matInput","","type","text","name","courseName","type","text","placeholder","Course Name",3,"formControl"],["matInput","","type","text","name","subjects","type","text","placeholder","Subject",3,"formControl"],["matInput","","name","birthDate","placeholder","Birth Date",3,"matDatepicker","formControl"],["matIconSuffix","",3,"for"],[1,"student-entry-form__form-row--input-address"],["matInput","","type","text","placeholder","Street Address",3,"formControl"],["matInput","","type","text","placeholder","Address 2",3,"formControl"],["matInput","","type","text","placeholder","Email",3,"formControl"],["matInput","","disabled","","type","text",1,"field-mat-label",3,"value"],["matInput","","type","text",3,"formControl"],["matInput","","placeholder","Postal code",3,"formControl"],["matInput","","disabled","",1,"field-label",3,"value"],[1,"student-entry-form__form-row--input-buttons"],["type","submit","color","primary","mat-button","",3,"disabled"],["type","submit","color","accent","mat-button",""]],template:function(e,t){if(e&1&&(f(0,"div",1)(1,"mat-card",2)(2,"form",3)(3,"div",4),E(4," Full Name "),f(5,"div",5)(6,"mat-form-field",6)(7,"mat-label"),E(8,"Name"),g(),f(9,"input",7),Fe(),g()()()(),f(10,"div",4),E(11," Origin "),f(12,"div",5)(13,"mat-form-field",8)(14,"mat-label"),E(15,"Country"),g(),f(16,"input",9),Fe(),g()(),f(17,"mat-form-field",8)(18,"mat-label"),E(19,"State"),g(),f(20,"input",10),Fe(),g()()()(),f(21,"div",4),E(22," Declaration "),f(23,"div",5)(24,"mat-form-field",8)(25,"mat-label"),E(26,"Passport Declaration"),g(),f(27,"input",11),Fe(),g()(),f(28,"mat-form-field",8)(29,"mat-label"),E(30,"Fitness Declaration"),g(),f(31,"input",12),Fe(),g()()()(),f(32,"div",4),E(33," Course Name "),f(34,"div",5)(35,"mat-form-field",8)(36,"mat-label"),E(37,"Course Name"),g(),f(38,"input",13),Fe(),g()(),f(39,"mat-form-field",8)(40,"mat-label"),E(41,"Subjects"),g(),f(42,"input",14),Fe(),g()()()(),f(43,"div",4),E(44," Birth Date "),f(45,"div",5)(46,"mat-form-field")(47,"mat-label"),E(48,"Birth Date"),g(),f(49,"input",15),Fe(),g(),f(50,"mat-hint"),E(51,"MM/DD/YYYY"),g(),le(52,"mat-datepicker-toggle",16)(53,"mat-datepicker",null,0),g()()(),f(55,"div",4),E(56," Present Address "),f(57,"div",17)(58,"mat-form-field",8)(59,"mat-label"),E(60,"Street Address"),g(),f(61,"input",18),Fe(),g()(),f(62,"mat-form-field",8)(63,"mat-label"),E(64,"Address 2"),g(),f(65,"input",19),Fe(),g()(),f(66,"mat-form-field",8)(67,"mat-label"),E(68,"Email Address"),g(),f(69,"input",20),Fe(),g()()(),f(70,"div",5)(71,"mat-form-field",8)(72,"mat-label"),E(73,"State"),g(),le(74,"input",21),g(),f(75,"mat-form-field",8)(76,"mat-label"),E(77,"City"),g(),f(78,"input",22),Fe(),g()()(),f(79,"div",5)(80,"mat-form-field",8)(81,"label"),E(82,"Postal Code"),g(),f(83,"input",23),Fe(),g()(),f(84,"mat-form-field",8)(85,"label"),E(86,"Country"),g(),le(87,"input",24),g()(),f(88,"div",25)(89,"button",26),E(90,"Submit"),g(),f(91,"button",27),E(92,"Cancel"),g()()()()()()),e&2){let a=xn(54);v(9),B("formControl",t.nameControl),Pe(),v(7),B("formControl",t.countryControl),Pe(),v(4),B("formControl",t.stateControl),Pe(),v(7),B("formControl",t.passportDeclarationControl),Pe(),v(4),B("formControl",t.fitnessDeclarationControl),Pe(),v(7),B("formControl",t.courseNameControl),Pe(),v(4),B("formControl",t.subjectsControl),Pe(),v(7),B("matDatepicker",a)("formControl",t.dateControl),Pe(),v(3),B("for",a),v(9),B("formControl",t.streetControl),Pe(),v(4),B("formControl",t.address2Control),Pe(),v(4),B("formControl",t.emailControl),Pe(),v(5),B("value",t.stateControl.value),v(4),B("formControl",t.cityControl),Pe(),v(5),B("formControl",t.zipControl),Pe(),v(4),B("value",t.countryControl.value),v(2),B("disabled",t.studentDetailsForm.status==="INVALID")}},dependencies:[ki,Pn,Ki,on,On,Yi,gr,Xi,qi,sa,oa,Xb,Kb,gl,Tu,zn,jn,sn,$t,kr,Gc,Gt,Un,vn],encapsulation:2})};var yl=class n{contactForm;ngOnInit(){this.contactForm=new rn({name:new St("",xe.required),email:new St("",[xe.required,xe.email]),message:new St("",xe.required)})}onSubmit(){this.contactForm.valid&&console.log("Form Submitted:",this.contactForm.value)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=L({type:n,selectors:[["app-contact-us"]],decls:25,vars:2,consts:[[1,"container"],["src","./assets/JSGigs.png",1,"jsgigs-img"],[1,"message-form"],[1,"message-form__content-form",3,"ngSubmit","formGroup"],[1,"row"],[1,"col"],["appearance","fill"],["matInput","","formControlName","name"],["matInput","","type","email","formControlName","email"],["matInput","","formControlName","message"],["mat-raised-button","","color","primary","type","submit",3,"disabled"]],template:function(e,t){e&1&&(f(0,"div",0),le(1,"img",1),f(2,"mat-card",2)(3,"mat-card-header")(4,"mat-card-title"),E(5,"Get in Touch"),g()(),f(6,"mat-card-content")(7,"form",3),ue("ngSubmit",function(){return t.onSubmit()}),f(8,"div",4)(9,"div",5)(10,"mat-form-field",6)(11,"mat-label"),E(12,"Name"),g(),f(13,"input",7),Fe(),g()()(),f(14,"div",5)(15,"mat-form-field",6)(16,"mat-label"),E(17,"Email"),g(),f(18,"input",8),Fe(),g()()()(),f(19,"mat-form-field",6)(20,"mat-label"),E(21,"Message"),g(),f(22,"textarea",9),Fe(),g()(),f(23,"button",10),E(24," Submit "),g()()()()()),e&2&&(v(7),B("formGroup",t.contactForm),v(6),Pe(),v(5),Pe(),v(4),Pe(),v(),B("disabled",!t.contactForm.valid))},dependencies:[ki,sa,oa,Fg,Pg,Og,zn,jn,sn,$t,Un,vn,Gt,Xi,Ki,on,On,Yi,Pn,Fn,br],encapsulation:2})};var vl=class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=L({type:n,selectors:[["app-dashboard"]],decls:7,vars:0,consts:[["label","View students"],["label","Add student"],["label","Contact us"]],template:function(e,t){e&1&&(f(0,"mat-tab-group")(1,"mat-tab",0),le(2,"app-students-table"),g(),f(3,"mat-tab",1),le(4,"app-student-records"),g(),f(5,"mat-tab",2),le(6,"app-contact-us"),g()())},dependencies:[Wg,su,Gg,rl,bl,yl],encapsulation:2})};var Zb=(n,i)=>{let e=d(tn);return d(la).isLoggedIn?!0:e.createUrlTree(["/login"])};var Qb=[{path:"",redirectTo:"login",pathMatch:"full"},{path:"login",component:Gs},{path:"dashboard",component:vl,canMatch:[Zb]}];var Jb=yh(hb,es(ua,n=>G(b({},n),{loading:!0,error:null})),es(il,(n,{payload:i})=>Br.setAll(i,G(b({},n),{loading:!1,error:null}))),es(al,(n,{error:i})=>G(b({},n),{loading:!1,error:i})));var _l=class n{constructor(i){this.http=i}http;getStudentsRecords(){return this.http.get("/api/studentsRecords")}static \u0275fac=function(e){return new(e||n)(A(Co))};static \u0275prov=U({token:n,factory:n.\u0275fac,providedIn:"root"})};var Cl=class n{actions$=d(qh);studentsRecordsService=d(_l);loadStudentsRecords$=$h(()=>this.actions$.pipe(Kh(ua),qr(()=>this.studentsRecordsService.getStudentsRecords().pipe(Y(i=>il({payload:i})),dn(i=>V(al({error:i instanceof Error?i.message:"Unable to load student records."})))))));static \u0275fac=function(e){return new(e||n)};static \u0275prov=U({token:n,factory:n.\u0275fac})};var uS=/^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/,mS=/^(\d?\d)[:.](\d?\d)(?:[:.](\d?\d))?\s*(AM|PM)?$/i;function Ou(n,i){let e=Array(n);for(let t=0;t<n;t++)e[t]=i(t);return e}var pS=(()=>{class n extends ut{_matDateLocale=d(vu,{optional:!0});constructor(){super();let e=d(vu,{optional:!0});e!==void 0&&(this._matDateLocale=e),super.setLocale(this._matDateLocale)}getYear(e){return e.getFullYear()}getMonth(e){return e.getMonth()}getDate(e){return e.getDate()}getDayOfWeek(e){return e.getDay()}getMonthNames(e){let t=new Intl.DateTimeFormat(this.locale,{month:e,timeZone:"utc"});return Ou(12,a=>this._format(t,new Date(2017,a,1)))}getDateNames(){let e=new Intl.DateTimeFormat(this.locale,{day:"numeric",timeZone:"utc"});return Ou(31,t=>this._format(e,new Date(2017,0,t+1)))}getDayOfWeekNames(e){let t=new Intl.DateTimeFormat(this.locale,{weekday:e,timeZone:"utc"});return Ou(7,a=>this._format(t,new Date(2017,0,a+1)))}getYearName(e){let t=new Intl.DateTimeFormat(this.locale,{year:"numeric",timeZone:"utc"});return this._format(t,e)}getFirstDayOfWeek(){if(typeof Intl<"u"&&Intl.Locale){let e=new Intl.Locale(this.locale),t=(e.getWeekInfo?.()||e.weekInfo)?.firstDay??0;return t===7?0:t}return 0}getNumDaysInMonth(e){return this.getDate(this._createDateWithOverflow(this.getYear(e),this.getMonth(e)+1,0))}clone(e){return new Date(e.getTime())}createDate(e,t,a){let r=this._createDateWithOverflow(e,t,a);return r.getMonth()!=t,r}today(){return new Date}parse(e,t){return typeof e=="number"?new Date(e):e?new Date(Date.parse(e)):null}format(e,t){if(!this.isValid(e))throw Error("NativeDateAdapter: Cannot format invalid date.");let a=new Intl.DateTimeFormat(this.locale,G(b({},t),{timeZone:"utc"}));return this._format(a,e)}addCalendarYears(e,t){return this.addCalendarMonths(e,t*12)}addCalendarMonths(e,t){let a=this._createDateWithOverflow(this.getYear(e),this.getMonth(e)+t,this.getDate(e));return this.getMonth(a)!=((this.getMonth(e)+t)%12+12)%12&&(a=this._createDateWithOverflow(this.getYear(a),this.getMonth(a),0)),a}addCalendarDays(e,t){return this._createDateWithOverflow(this.getYear(e),this.getMonth(e),this.getDate(e)+t)}toIso8601(e){return[e.getUTCFullYear(),this._2digit(e.getUTCMonth()+1),this._2digit(e.getUTCDate())].join("-")}deserialize(e){if(typeof e=="string"){if(!e)return null;if(uS.test(e)){let t=new Date(e);if(this.isValid(t))return t}}return super.deserialize(e)}isDateInstance(e){return e instanceof Date}isValid(e){return!isNaN(e.getTime())}invalid(){return new Date(NaN)}setTime(e,t,a,r){let o=this.clone(e);return o.setHours(t,a,r,0),o}getHours(e){return e.getHours()}getMinutes(e){return e.getMinutes()}getSeconds(e){return e.getSeconds()}parseTime(e,t){if(typeof e!="string")return e instanceof Date?new Date(e.getTime()):null;let a=e.trim();if(a.length===0)return null;let r=this._parseTimeString(a);if(r===null){let o=a.replace(/[^0-9:(AM|PM)]/gi,"").trim();o.length>0&&(r=this._parseTimeString(o))}return r||this.invalid()}addSeconds(e,t){return new Date(e.getTime()+t*1e3)}_createDateWithOverflow(e,t,a){let r=new Date;return r.setFullYear(e,t,a),r.setHours(0,0,0,0),r}_2digit(e){return("00"+e).slice(-2)}_format(e,t){let a=new Date;return a.setUTCFullYear(t.getFullYear(),t.getMonth(),t.getDate()),a.setUTCHours(t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()),e.format(a)}_parseTimeString(e){let t=e.toUpperCase().match(mS);if(t){let a=parseInt(t[1]),r=parseInt(t[2]),o=t[3]==null?void 0:parseInt(t[3]),l=t[4];if(a===12?a=l==="AM"?0:a:l==="PM"&&(a+=12),Fu(a,0,23)&&Fu(r,0,59)&&(o==null||Fu(o,0,59)))return this.setTime(this.today(),a,r,o||0)}return null}static \u0275fac=function(t){return new(t||n)};static \u0275prov=O({token:n,factory:n.\u0275fac,autoProvided:!1})}return n})();function Fu(n,i,e){return!isNaN(n)&&n>=i&&n<=e}var hS={parse:{dateInput:null,timeInput:null},display:{dateInput:{year:"numeric",month:"numeric",day:"numeric"},timeInput:{hour:"numeric",minute:"numeric"},monthYearLabel:{year:"numeric",month:"short"},dateA11yLabel:{year:"numeric",month:"long",day:"numeric"},monthYearA11yLabel:{year:"numeric",month:"long"},timeOptionLabel:{hour:"numeric",minute:"numeric"}}};var ey=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=Q({type:n});static \u0275inj=X({providers:[fS()]})}return n})();function fS(n=hS){return[{provide:ut,useClass:pS},{provide:Yn,useValue:n}]}var ty={providers:[Pd(Qb),sd(),Up(),Zh(Cl),bh({router:af}),gh({name:"students",reducer:Jb}),Hh({maxAge:25,logOnly:!1}),of(),Xu(ey)]};var wl=class n{title="students-entry";static \u0275fac=function(e){return new(e||n)};static \u0275cmp=L({type:n,selectors:[["app-root"]],decls:1,vars:0,template:function(e,t){e&1&&le(0,"router-outlet")},dependencies:[er],styles:["[_nghost-%COMP%]{display:block;font-family:Arial,sans-serif}.main[_ngcontent-%COMP%]{margin-top:20px;display:flex;flex-direction:column;align-items:center;min-height:100vh;gap:.3rem;text-align:center}h1[_ngcontent-%COMP%]{margin:10px;font-size:2.5rem}p[_ngcontent-%COMP%]{margin:10px;font-size:1rem;color:#3a3a3a}"]})};td(wl,ty).catch(n=>console.error(n));
