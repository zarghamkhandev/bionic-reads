/*! For license information please see bundle.js.LICENSE.txt */
(()=>{var t={17:()=>{!function(){"use strict";var t,e=!1,r=[],n=!1;function i(){window.WebComponents.ready=!0,document.dispatchEvent(new CustomEvent("WebComponentsReady",{bubbles:!0}))}function o(){window.customElements&&customElements.polyfillWrapFlushCallback&&customElements.polyfillWrapFlushCallback((function(e){t=e,n&&t()}))}function s(){window.HTMLTemplateElement&&HTMLTemplateElement.bootstrap&&HTMLTemplateElement.bootstrap(window.document),e=!0,a().then(i)}function a(){n=!1;var e=r.map((function(t){return t instanceof Function?t():t}));return r=[],Promise.all(e).then((function(){n=!0,t&&t()})).catch((function(t){console.error(t)}))}window.WebComponents=window.WebComponents||{},window.WebComponents.ready=window.WebComponents.ready||!1,window.WebComponents.waitFor=window.WebComponents.waitFor||function(t){t&&(r.push(t),e&&a())},window.WebComponents._batchCustomElements=o;var c="webcomponents-loader.js",l=[];(!("attachShadow"in Element.prototype)||!("getRootNode"in Element.prototype)||window.ShadyDOM&&window.ShadyDOM.force)&&l.push("sd"),window.customElements&&!window.customElements.forcePolyfill||l.push("ce");var u=function(){var t=document.createElement("template");if(!("content"in t))return!0;if(!(t.content.cloneNode()instanceof DocumentFragment))return!0;var e=document.createElement("template");e.content.appendChild(document.createElement("div")),t.content.appendChild(e);var r=t.cloneNode(!0);return 0===r.content.childNodes.length||0===r.content.firstChild.content.childNodes.length}();if(window.Promise&&Array.from&&window.URL&&window.Symbol&&!u||(l=["sd-ce-pf"]),l.length){var h,d="bundles/webcomponents-"+l.join("-")+".js";if(window.WebComponents.root)h=window.WebComponents.root+d;else{var p=document.querySelector('script[src*="'+c+'"]');h=p.src.replace(c,d)}var f=document.createElement("script");f.src=h,"loading"===document.readyState?(f.setAttribute("onload","window.WebComponents._batchCustomElements()"),document.write(f.outerHTML),document.addEventListener("DOMContentLoaded",s)):(f.addEventListener("load",(function(){o(),s()})),f.addEventListener("error",(function(){throw new Error("Could not load polyfill bundle"+h)})),document.head.appendChild(f))}else"complete"===document.readyState?(e=!0,i()):(window.addEventListener("load",s),window.addEventListener("DOMContentLoaded",(function(){window.removeEventListener("load",s),s()})))}()},484:function(t){t.exports=function(){"use strict";var t=6e4,e=36e5,r="millisecond",n="second",i="minute",o="hour",s="day",a="week",c="month",l="quarter",u="year",h="date",d="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},b=function(t,e,r){var n=String(t);return!n||n.length>=e?t:""+Array(e+1-n.length).join(r)+t},g={s:b,z:function(t){var e=-t.utcOffset(),r=Math.abs(e),n=Math.floor(r/60),i=r%60;return(e<=0?"+":"-")+b(n,2,"0")+":"+b(i,2,"0")},m:function t(e,r){if(e.date()<r.date())return-t(r,e);var n=12*(r.year()-e.year())+(r.month()-e.month()),i=e.clone().add(n,c),o=r-i<0,s=e.clone().add(n+(o?-1:1),c);return+(-(n+(r-i)/(o?i-s:s-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:u,w:a,d:s,D:h,h:o,m:i,s:n,ms:r,Q:l}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",m={};m[y]=v;var w=function(t){return t instanceof E},x=function(t,e,r){var n;if(!t)return y;if("string"==typeof t)m[t]&&(n=t),e&&(m[t]=e,n=t);else{var i=t.name;m[i]=t,n=i}return!r&&n&&(y=n),n||!r&&y},_=function(t,e){if(w(t))return t.clone();var r="object"==typeof e?e:{};return r.date=t,r.args=arguments,new E(r)},$=g;$.l=x,$.i=w,$.w=function(t,e){return _(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var E=function(){function v(t){this.$L=x(t.locale,null,!0),this.parse(t)}var b=v.prototype;return b.parse=function(t){this.$d=function(t){var e=t.date,r=t.utc;if(null===e)return new Date(NaN);if($.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var n=e.match(p);if(n){var i=n[2]-1||0,o=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},b.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},b.$utils=function(){return $},b.isValid=function(){return!(this.$d.toString()===d)},b.isSame=function(t,e){var r=_(t);return this.startOf(e)<=r&&r<=this.endOf(e)},b.isAfter=function(t,e){return _(t)<this.startOf(e)},b.isBefore=function(t,e){return this.endOf(e)<_(t)},b.$g=function(t,e,r){return $.u(t)?this[e]:this.set(r,t)},b.unix=function(){return Math.floor(this.valueOf()/1e3)},b.valueOf=function(){return this.$d.getTime()},b.startOf=function(t,e){var r=this,l=!!$.u(e)||e,d=$.p(t),p=function(t,e){var n=$.w(r.$u?Date.UTC(r.$y,e,t):new Date(r.$y,e,t),r);return l?n:n.endOf(s)},f=function(t,e){return $.w(r.toDate()[t].apply(r.toDate("s"),(l?[0,0,0,0]:[23,59,59,999]).slice(e)),r)},v=this.$W,b=this.$M,g=this.$D,y="set"+(this.$u?"UTC":"");switch(d){case u:return l?p(1,0):p(31,11);case c:return l?p(1,b):p(0,b+1);case a:var m=this.$locale().weekStart||0,w=(v<m?v+7:v)-m;return p(l?g-w:g+(6-w),b);case s:case h:return f(y+"Hours",0);case o:return f(y+"Minutes",1);case i:return f(y+"Seconds",2);case n:return f(y+"Milliseconds",3);default:return this.clone()}},b.endOf=function(t){return this.startOf(t,!1)},b.$set=function(t,e){var a,l=$.p(t),d="set"+(this.$u?"UTC":""),p=(a={},a[s]=d+"Date",a[h]=d+"Date",a[c]=d+"Month",a[u]=d+"FullYear",a[o]=d+"Hours",a[i]=d+"Minutes",a[n]=d+"Seconds",a[r]=d+"Milliseconds",a)[l],f=l===s?this.$D+(e-this.$W):e;if(l===c||l===u){var v=this.clone().set(h,1);v.$d[p](f),v.init(),this.$d=v.set(h,Math.min(this.$D,v.daysInMonth())).$d}else p&&this.$d[p](f);return this.init(),this},b.set=function(t,e){return this.clone().$set(t,e)},b.get=function(t){return this[$.p(t)]()},b.add=function(r,l){var h,d=this;r=Number(r);var p=$.p(l),f=function(t){var e=_(d);return $.w(e.date(e.date()+Math.round(t*r)),d)};if(p===c)return this.set(c,this.$M+r);if(p===u)return this.set(u,this.$y+r);if(p===s)return f(1);if(p===a)return f(7);var v=(h={},h[i]=t,h[o]=e,h[n]=1e3,h)[p]||1,b=this.$d.getTime()+r*v;return $.w(b,this)},b.subtract=function(t,e){return this.add(-1*t,e)},b.format=function(t){var e=this,r=this.$locale();if(!this.isValid())return r.invalidDate||d;var n=t||"YYYY-MM-DDTHH:mm:ssZ",i=$.z(this),o=this.$H,s=this.$m,a=this.$M,c=r.weekdays,l=r.months,u=function(t,r,i,o){return t&&(t[r]||t(e,n))||i[r].substr(0,o)},h=function(t){return $.s(o%12||12,t,"0")},p=r.meridiem||function(t,e,r){var n=t<12?"AM":"PM";return r?n.toLowerCase():n},v={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:$.s(a+1,2,"0"),MMM:u(r.monthsShort,a,l,3),MMMM:u(l,a),D:this.$D,DD:$.s(this.$D,2,"0"),d:String(this.$W),dd:u(r.weekdaysMin,this.$W,c,2),ddd:u(r.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(o),HH:$.s(o,2,"0"),h:h(1),hh:h(2),a:p(o,s,!0),A:p(o,s,!1),m:String(s),mm:$.s(s,2,"0"),s:String(this.$s),ss:$.s(this.$s,2,"0"),SSS:$.s(this.$ms,3,"0"),Z:i};return n.replace(f,(function(t,e){return e||v[t]||i.replace(":","")}))},b.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},b.diff=function(r,h,d){var p,f=$.p(h),v=_(r),b=(v.utcOffset()-this.utcOffset())*t,g=this-v,y=$.m(this,v);return y=(p={},p[u]=y/12,p[c]=y,p[l]=y/3,p[a]=(g-b)/6048e5,p[s]=(g-b)/864e5,p[o]=g/e,p[i]=g/t,p[n]=g/1e3,p)[f]||g,d?y:$.a(y)},b.daysInMonth=function(){return this.endOf(c).$D},b.$locale=function(){return m[this.$L]},b.locale=function(t,e){if(!t)return this.$L;var r=this.clone(),n=x(t,e,!0);return n&&(r.$L=n),r},b.clone=function(){return $.w(this.$d,this)},b.toDate=function(){return new Date(this.valueOf())},b.toJSON=function(){return this.isValid()?this.toISOString():null},b.toISOString=function(){return this.$d.toISOString()},b.toString=function(){return this.$d.toUTCString()},v}(),C=E.prototype;return _.prototype=C,[["$ms",r],["$s",n],["$m",i],["$H",o],["$W",s],["$M",c],["$y",u],["$D",h]].forEach((function(t){C[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),_.extend=function(t,e){return t.$i||(t(e,E,_),t.$i=!0),_},_.locale=x,_.isDayjs=w,_.unix=function(t){return _(1e3*t)},_.en=m[y],_.Ls=m,_.p={},_}()},646:function(t){t.exports=function(){"use strict";var t,e,r=1e3,n=6e4,i=36e5,o=864e5,s=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,a=31536e6,c=2592e6,l=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,u={years:a,months:c,days:o,hours:i,minutes:n,seconds:r,milliseconds:1,weeks:6048e5},h=function(t){return t instanceof y},d=function(t,e,r){return new y(t,r,e.$l)},p=function(t){return e.p(t)+"s"},f=function(t){return t<0},v=function(t){return f(t)?Math.ceil(t):Math.floor(t)},b=function(t){return Math.abs(t)},g=function(t,e){return t?f(t)?{negative:!0,format:""+b(t)+e}:{negative:!1,format:""+t+e}:{negative:!1,format:""}},y=function(){function f(t,e,r){var n=this;if(this.$d={},this.$l=r,void 0===t&&(this.$ms=0,this.parseFromMilliseconds()),e)return d(t*u[p(e)],this);if("number"==typeof t)return this.$ms=t,this.parseFromMilliseconds(),this;if("object"==typeof t)return Object.keys(t).forEach((function(e){n.$d[p(e)]=t[e]})),this.calMilliseconds(),this;if("string"==typeof t){var i=t.match(l);if(i){var o=i.slice(2).map((function(t){return null!=t?Number(t):0}));return this.$d.years=o[0],this.$d.months=o[1],this.$d.weeks=o[2],this.$d.days=o[3],this.$d.hours=o[4],this.$d.minutes=o[5],this.$d.seconds=o[6],this.calMilliseconds(),this}}return this}var b=f.prototype;return b.calMilliseconds=function(){var t=this;this.$ms=Object.keys(this.$d).reduce((function(e,r){return e+(t.$d[r]||0)*u[r]}),0)},b.parseFromMilliseconds=function(){var t=this.$ms;this.$d.years=v(t/a),t%=a,this.$d.months=v(t/c),t%=c,this.$d.days=v(t/o),t%=o,this.$d.hours=v(t/i),t%=i,this.$d.minutes=v(t/n),t%=n,this.$d.seconds=v(t/r),t%=r,this.$d.milliseconds=t},b.toISOString=function(){var t=g(this.$d.years,"Y"),e=g(this.$d.months,"M"),r=+this.$d.days||0;this.$d.weeks&&(r+=7*this.$d.weeks);var n=g(r,"D"),i=g(this.$d.hours,"H"),o=g(this.$d.minutes,"M"),s=this.$d.seconds||0;this.$d.milliseconds&&(s+=this.$d.milliseconds/1e3);var a=g(s,"S"),c=t.negative||e.negative||n.negative||i.negative||o.negative||a.negative,l=i.format||o.format||a.format?"T":"",u=(c?"-":"")+"P"+t.format+e.format+n.format+l+i.format+o.format+a.format;return"P"===u||"-P"===u?"P0D":u},b.toJSON=function(){return this.toISOString()},b.format=function(t){var r=t||"YYYY-MM-DDTHH:mm:ss",n={Y:this.$d.years,YY:e.s(this.$d.years,2,"0"),YYYY:e.s(this.$d.years,4,"0"),M:this.$d.months,MM:e.s(this.$d.months,2,"0"),D:this.$d.days,DD:e.s(this.$d.days,2,"0"),H:this.$d.hours,HH:e.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:e.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:e.s(this.$d.seconds,2,"0"),SSS:e.s(this.$d.milliseconds,3,"0")};return r.replace(s,(function(t,e){return e||String(n[t])}))},b.as=function(t){return this.$ms/u[p(t)]},b.get=function(t){var e=this.$ms,r=p(t);return"milliseconds"===r?e%=1e3:e="weeks"===r?v(e/u[r]):this.$d[r],0===e?0:e},b.add=function(t,e,r){var n;return n=e?t*u[p(e)]:h(t)?t.$ms:d(t,this).$ms,d(this.$ms+n*(r?-1:1),this)},b.subtract=function(t,e){return this.add(t,e,!0)},b.locale=function(t){var e=this.clone();return e.$l=t,e},b.clone=function(){return d(this.$ms,this)},b.humanize=function(e){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!e)},b.milliseconds=function(){return this.get("milliseconds")},b.asMilliseconds=function(){return this.as("milliseconds")},b.seconds=function(){return this.get("seconds")},b.asSeconds=function(){return this.as("seconds")},b.minutes=function(){return this.get("minutes")},b.asMinutes=function(){return this.as("minutes")},b.hours=function(){return this.get("hours")},b.asHours=function(){return this.as("hours")},b.days=function(){return this.get("days")},b.asDays=function(){return this.as("days")},b.weeks=function(){return this.get("weeks")},b.asWeeks=function(){return this.as("weeks")},b.months=function(){return this.get("months")},b.asMonths=function(){return this.as("months")},b.years=function(){return this.get("years")},b.asYears=function(){return this.as("years")},f}();return function(r,n,i){t=i,e=i().$utils(),i.duration=function(t,e){var r=i.locale();return d(t,{$l:r},e)},i.isDuration=h;var o=n.prototype.add,s=n.prototype.subtract;n.prototype.add=function(t,e){return h(t)&&(t=t.asMilliseconds()),o.bind(this)(t,e)},n.prototype.subtract=function(t,e){return h(t)&&(t=t.asMilliseconds()),s.bind(this)(t,e)}}}()},116:function(t,e,r){!function(t){"use strict";function e(t,e,...r){if(!t)throw new TypeError(n(e,r))}function n(t,e){let r=0;return t.replace(/%[os]/gu,(()=>i(e[r++])))}function i(t){return"object"!=typeof t||null===t?String(t):Object.prototype.toString.call(t)}const o="undefined"!=typeof window?window:"undefined"!=typeof self?self:void 0!==r.g?r.g:"undefined"!=typeof globalThis?globalThis:void 0;class s{constructor(t,e){this.code=t,this.message=e}warn(...t){var e;try{const r=(null!==(e=(new Error).stack)&&void 0!==e?e:"").replace(/^(?:.+?\n){2}/gu,"\n");console.warn(this.message,...t,r)}catch(t){}}}const a=new s("W01","Unable to initialize event under dispatching."),c=new s("W02","Assigning any falsy value to 'cancelBubble' property has no effect."),l=new s("W03","Assigning any truthy value to 'returnValue' property has no effect."),u=new s("W04","Unable to preventDefault on non-cancelable events."),h=new s("W05","Unable to preventDefault inside passive event listener invocation."),d=new s("W06","An event listener wasn't added because it has been added already: %o, %o"),p=new s("W07","The %o option value was abandoned because the event listener wasn't added as duplicated."),f=new s("W08","The 'callback' argument must be a function or an object that has 'handleEvent' method: %o"),v=new s("W09","Event attribute handler must be a function: %o");class b{static get NONE(){return g}static get CAPTURING_PHASE(){return y}static get AT_TARGET(){return m}static get BUBBLING_PHASE(){return w}constructor(t,e){Object.defineProperty(this,"isTrusted",{value:!1,enumerable:!0});const r=null!=e?e:{};x.set(this,{type:String(t),bubbles:Boolean(r.bubbles),cancelable:Boolean(r.cancelable),composed:Boolean(r.composed),target:null,currentTarget:null,stopPropagationFlag:!1,stopImmediatePropagationFlag:!1,canceledFlag:!1,inPassiveListenerFlag:!1,dispatchFlag:!1,timeStamp:Date.now()})}get type(){return _(this).type}get target(){return _(this).target}get srcElement(){return _(this).target}get currentTarget(){return _(this).currentTarget}composedPath(){const t=_(this).currentTarget;return t?[t]:[]}get NONE(){return g}get CAPTURING_PHASE(){return y}get AT_TARGET(){return m}get BUBBLING_PHASE(){return w}get eventPhase(){return _(this).dispatchFlag?2:0}stopPropagation(){_(this).stopPropagationFlag=!0}get cancelBubble(){return _(this).stopPropagationFlag}set cancelBubble(t){t?_(this).stopPropagationFlag=!0:c.warn()}stopImmediatePropagation(){const t=_(this);t.stopPropagationFlag=t.stopImmediatePropagationFlag=!0}get bubbles(){return _(this).bubbles}get cancelable(){return _(this).cancelable}get returnValue(){return!_(this).canceledFlag}set returnValue(t){t?l.warn():$(_(this))}preventDefault(){$(_(this))}get defaultPrevented(){return _(this).canceledFlag}get composed(){return _(this).composed}get isTrusted(){return!1}get timeStamp(){return _(this).timeStamp}initEvent(t,e=!1,r=!1){const n=_(this);n.dispatchFlag?a.warn():x.set(this,{...n,type:String(t),bubbles:Boolean(e),cancelable:Boolean(r),target:null,currentTarget:null,stopPropagationFlag:!1,stopImmediatePropagationFlag:!1,canceledFlag:!1})}}const g=0,y=1,m=2,w=3,x=new WeakMap;function _(t,r="this"){const n=x.get(t);return e(null!=n,"'%s' must be an object that Event constructor created, but got another one: %o",r,t),n}function $(t){t.inPassiveListenerFlag?h.warn():t.cancelable?t.canceledFlag=!0:u.warn()}Object.defineProperty(b,"NONE",{enumerable:!0}),Object.defineProperty(b,"CAPTURING_PHASE",{enumerable:!0}),Object.defineProperty(b,"AT_TARGET",{enumerable:!0}),Object.defineProperty(b,"BUBBLING_PHASE",{enumerable:!0});const E=Object.getOwnPropertyNames(b.prototype);for(let t=0;t<E.length;++t)"constructor"!==E[t]&&Object.defineProperty(b.prototype,E[t],{enumerable:!0});let C;void 0!==o&&void 0!==o.Event&&Object.setPrototypeOf(b.prototype,o.Event.prototype);const S={INDEX_SIZE_ERR:1,DOMSTRING_SIZE_ERR:2,HIERARCHY_REQUEST_ERR:3,WRONG_DOCUMENT_ERR:4,INVALID_CHARACTER_ERR:5,NO_DATA_ALLOWED_ERR:6,NO_MODIFICATION_ALLOWED_ERR:7,NOT_FOUND_ERR:8,NOT_SUPPORTED_ERR:9,INUSE_ATTRIBUTE_ERR:10,INVALID_STATE_ERR:11,SYNTAX_ERR:12,INVALID_MODIFICATION_ERR:13,NAMESPACE_ERR:14,INVALID_ACCESS_ERR:15,VALIDATION_ERR:16,TYPE_MISMATCH_ERR:17,SECURITY_ERR:18,NETWORK_ERR:19,ABORT_ERR:20,URL_MISMATCH_ERR:21,QUOTA_EXCEEDED_ERR:22,TIMEOUT_ERR:23,INVALID_NODE_TYPE_ERR:24,DATA_CLONE_ERR:25};function A(t){const e=Object.keys(S);for(let r=0;r<e.length;++r){const n=e[r],i=S[n];Object.defineProperty(t,n,{get:()=>i,configurable:!0,enumerable:!0})}}class k extends b{static wrap(t){return new(R(t))(t)}constructor(t){super(t.type,{bubbles:t.bubbles,cancelable:t.cancelable,composed:t.composed}),t.cancelBubble&&super.stopPropagation(),t.defaultPrevented&&super.preventDefault(),P.set(this,{original:t});const e=Object.keys(t);for(let r=0;r<e.length;++r){const n=e[r];n in this||Object.defineProperty(this,n,M(t,n))}}stopPropagation(){super.stopPropagation();const{original:t}=O(this);"stopPropagation"in t&&t.stopPropagation()}get cancelBubble(){return super.cancelBubble}set cancelBubble(t){super.cancelBubble=t;const{original:e}=O(this);"cancelBubble"in e&&(e.cancelBubble=t)}stopImmediatePropagation(){super.stopImmediatePropagation();const{original:t}=O(this);"stopImmediatePropagation"in t&&t.stopImmediatePropagation()}get returnValue(){return super.returnValue}set returnValue(t){super.returnValue=t;const{original:e}=O(this);"returnValue"in e&&(e.returnValue=t)}preventDefault(){super.preventDefault();const{original:t}=O(this);"preventDefault"in t&&t.preventDefault()}get timeStamp(){const{original:t}=O(this);return"timeStamp"in t?t.timeStamp:super.timeStamp}}const P=new WeakMap;function O(t){const r=P.get(t);return e(null!=r,"'this' is expected an Event object, but got",t),r}const T=new WeakMap;function R(t){const e=Object.getPrototypeOf(t);if(null==e)return k;let r=T.get(e);return null==r&&(r=function(t,e){class r extends t{}const n=Object.keys(e);for(let t=0;t<n.length;++t)Object.defineProperty(r.prototype,n[t],M(e,n[t]));return r}(R(e),e),T.set(e,r)),r}function M(t,e){const r=Object.getOwnPropertyDescriptor(t,e);return{get(){const t=O(this).original,r=t[e];return"function"==typeof r?r.bind(t):r},set(t){O(this).original[e]=t},configurable:r.configurable,enumerable:r.enumerable}}function I(t){return 1==(1&t.flags)}function D(t){return 2==(2&t.flags)}function U(t){return 4==(4&t.flags)}function N(t){return 8==(8&t.flags)}function j({callback:t},e,r){try{"function"==typeof t?t.call(e,r):"function"==typeof t.handleEvent&&t.handleEvent(r)}catch(t){!function(t){try{const e=t instanceof Error?t:new Error(i(t));if("function"==typeof dispatchEvent&&"function"==typeof ErrorEvent)dispatchEvent(new ErrorEvent("error",{error:e,message:e.message}));else if("undefined"!=typeof process&&"function"==typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)}catch(t){}}(t)}}function H({listeners:t},e,r){for(let n=0;n<t.length;++n)if(t[n].callback===e&&I(t[n])===r)return n;return-1}function L(t,e,r,n,i,o){let s;o&&(s=B.bind(null,t,e,r),o.addEventListener("abort",s));const a=function(t,e,r,n,i,o){return{callback:t,flags:(e?1:0)|(r?2:0)|(n?4:0),signal:i,signalListener:o}}(e,r,n,i,o,s);return t.cow?(t.cow=!1,t.listeners=[...t.listeners,a]):t.listeners.push(a),a}function B(t,e,r){const n=H(t,e,r);return-1!==n&&V(t,n)}function V(t,e,r=!1){const n=t.listeners[e];return function(t){t.flags|=8}(n),n.signal&&n.signal.removeEventListener("abort",n.signalListener),t.cow&&!r?(t.cow=!1,t.listeners=t.listeners.filter(((t,r)=>r!==e)),!1):(t.listeners.splice(e,1),!0)}function F(t,e){var r;return null!==(r=t[e])&&void 0!==r?r:t[e]={attrCallback:void 0,attrListener:void 0,cow:!1,listeners:[]}}T.set(Object.prototype,k),void 0!==o&&void 0!==o.Event&&T.set(o.Event.prototype,k);class W{constructor(){z.set(this,Object.create(null))}addEventListener(t,e,r){const n=Y(this),{callback:i,capture:o,once:s,passive:a,signal:c,type:l}=function(t,e,r){var n;return Z(e),"object"==typeof r&&null!==r?{type:String(t),callback:null!=e?e:void 0,capture:Boolean(r.capture),passive:Boolean(r.passive),once:Boolean(r.once),signal:null!==(n=r.signal)&&void 0!==n?n:void 0}:{type:String(t),callback:null!=e?e:void 0,capture:Boolean(r),passive:!1,once:!1,signal:void 0}}(t,e,r);if(null==i||(null==c?void 0:c.aborted))return;const u=F(n,l),h=H(u,i,o);-1===h?L(u,i,o,a,s,c):function(t,e,r,n){d.warn(I(t)?"capture":"bubble",t.callback),D(t)!==e&&p.warn("passive"),U(t)!==r&&p.warn("once"),t.signal!==n&&p.warn("signal")}(u.listeners[h],a,s,c)}removeEventListener(t,e,r){const n=Y(this),{callback:i,capture:o,type:s}=function(t,e,r){return Z(e),"object"==typeof r&&null!==r?{type:String(t),callback:null!=e?e:void 0,capture:Boolean(r.capture)}:{type:String(t),callback:null!=e?e:void 0,capture:Boolean(r)}}(t,e,r),a=n[s];null!=i&&a&&B(a,i,o)}dispatchEvent(t){const e=Y(this)[String(t.type)];if(null==e)return!0;const r=t instanceof b?t:k.wrap(t),n=_(r,"event");if(n.dispatchFlag)throw i="This event has been in dispatching.",o.DOMException?new o.DOMException(i,"InvalidStateError"):(null==C&&(C=class t extends Error{constructor(e){super(e),Error.captureStackTrace&&Error.captureStackTrace(this,t)}get code(){return 11}get name(){return"InvalidStateError"}},Object.defineProperties(C.prototype,{code:{enumerable:!0},name:{enumerable:!0}}),A(C),A(C.prototype)),new C(i));var i;if(n.dispatchFlag=!0,n.target=n.currentTarget=this,!n.stopPropagationFlag){const{cow:t,listeners:i}=e;e.cow=!0;for(let o=0;o<i.length;++o){const s=i[o];if(!N(s)&&(U(s)&&V(e,o,!t)&&(o-=1),n.inPassiveListenerFlag=D(s),j(s,this,r),n.inPassiveListenerFlag=!1,n.stopImmediatePropagationFlag))break}t||(e.cow=!1)}return n.target=null,n.currentTarget=null,n.stopImmediatePropagationFlag=!1,n.stopPropagationFlag=!1,n.dispatchFlag=!1,!n.canceledFlag}}const z=new WeakMap;function Y(t,r="this"){const n=z.get(t);return e(null!=n,"'%s' must be an object that EventTarget constructor created, but got another one: %o",r,t),n}function Z(t){if("function"!=typeof t&&("object"!=typeof t||null===t||"function"!=typeof t.handleEvent)){if(null!=t&&"object"!=typeof t)throw new TypeError(n(f.message,[t]));f.warn(t)}}const G=Object.getOwnPropertyNames(W.prototype);for(let t=0;t<G.length;++t)"constructor"!==G[t]&&Object.defineProperty(W.prototype,G[t],{enumerable:!0});function q(t,e,r){null!=r&&"function"!=typeof r&&v.warn(r),"function"==typeof r||"object"==typeof r&&null!==r?function(t,e,r){const n=F(Y(t,"target"),String(e));n.attrCallback=r,null==n.attrListener&&(n.attrListener=L(n,function(t){return function(e){const r=t.attrCallback;"function"==typeof r&&r.call(this,e)}}(n),!1,!1,!1,void 0))}(t,e,r):function(t,e){const r=Y(t,"target")[String(e)];r&&r.attrListener&&(B(r,r.attrListener.callback,!1),r.attrCallback=r.attrListener=void 0)}(t,e)}function J(t,e,r){Object.defineProperty(t,`on${e}`,{get(){return function(t,e){var r,n;return null!==(n=null===(r=Y(t,"target")[e])||void 0===r?void 0:r.attrCallback)&&void 0!==n?n:null}(this,e)},set(t){q(this,e,t)},configurable:!0,enumerable:!0})}var K;void 0!==o&&void 0!==o.EventTarget&&Object.setPrototypeOf(W.prototype,o.EventTarget.prototype),function(t){t.DATA_AVAILABLE="DATA_AVAILABLE",t.START_RECORDING="START_RECORDING",t.STOP_RECORDING="STOP_RECORDING",t.ERROR="ERROR",t.BLOB_READY="BLOB_READY",t.WORKER_RECORDING="WORKER_RECORDING"}(K||(K={}));const X="audio/mpeg",Q=window.AudioContext||window.webkitAudioContext;class tt extends W{constructor(t,{audioContext:e,worker:r}){if(super(),this.mimeType=X,this.state="inactive",this.audioBitsPerSecond=0,this.videoBitsPerSecond=0,this.isInternalAudioContext=!1,this.onWorkerMessage=t=>{const e=t.data;switch(e.type){case K.WORKER_RECORDING:{const t=new Event("start");this.dispatchEvent(t),this.state="recording";break}case K.ERROR:{const t=new Error(e.error),r=new Event("error");r.error=t,this.dispatchEvent(r),this.state="inactive";break}case K.BLOB_READY:{const t=new Event("stop"),r=new Event("dataavailable");r.data=e.blob,r.timecode=Date.now();const n=window.BlobEvent?new BlobEvent("dataavailable",{data:e.blob,timecode:Date.now()}):r;this.dispatchEvent(n),this.dispatchEvent(t),this.state="inactive";break}case K.ERROR:throw new Error(e.error)}},!r)throw new Error("No worker provided in Mp3MediaRecorder constructor.");var n;this.stream=t,this.isInternalAudioContext=!e,this.audioContext=e||new Q,this.worker=r,this.sourceNode=this.audioContext.createMediaStreamSource(t),this.gainNode=((n=this.audioContext).createGain||n.createGainNode).call(n),this.gainNode.gain.value=1,this.processorNode=(t=>(t.createScriptProcessor||t.createJavaScriptNode).call(t,4096,1,1))(this.audioContext),this.sourceNode.connect(this.gainNode),this.gainNode.connect(this.processorNode),this.worker.onmessage=this.onWorkerMessage}start(){if("inactive"!==this.state)throw this.getStateError("start");var t;this.processorNode.onaudioprocess=t=>{var e;this.worker.postMessage((e=t.inputBuffer.getChannelData(0),{type:K.DATA_AVAILABLE,data:e}))},this.processorNode.connect(this.audioContext.destination),"closed"===this.audioContext.state?this.audioContext=new AudioContext:"suspended"===this.audioContext.state&&this.audioContext.resume(),this.worker.postMessage((t={sampleRate:this.audioContext.sampleRate},{type:K.START_RECORDING,config:t}))}stop(){if("inactive"===this.state)throw this.getStateError("stop");this.processorNode.disconnect(),this.isInternalAudioContext&&this.audioContext.close(),this.worker.postMessage({type:K.STOP_RECORDING})}pause(){if("inactive"===this.state)throw this.getStateError("pause");this.audioContext.suspend().then((()=>{this.state="paused",this.dispatchEvent(new Event("pause"))}))}resume(){if("inactive"===this.state)throw this.getStateError("resume");this.audioContext.resume().then((()=>{this.state="recording",this.dispatchEvent(new Event("resume"))}))}requestData(){}getStateError(t){return new Error(`Failed to execute '${t}' on 'MediaRecorder': The MediaRecorder's state is '${this.state}'.`)}}tt.isTypeSupported=t=>t===X,J(tt.prototype,"start"),J(tt.prototype,"stop"),J(tt.prototype,"pause"),J(tt.prototype,"resume"),J(tt.prototype,"dataavailable"),J(tt.prototype,"error"),t.Mp3MediaRecorder=tt,Object.defineProperty(t,"__esModule",{value:!0})}(e)}},e={};function r(n){var i=e[n];if(void 0!==i)return i.exports;var o=e[n]={exports:{}};return t[n].call(o.exports,o,o.exports,r),o.exports}r.m=t,r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.u=t=>t+".bundle.js",r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.p="",r.b=document.baseURI||self.location.href,(()=>{"use strict";const t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e=Symbol(),n=new Map;class i{constructor(t,r){if(this._$cssResult$=!0,r!==e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let e=n.get(this.cssText);return t&&void 0===e&&(n.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const o=t=>new i("string"==typeof t?t:t+"",e),s=(t,...r)=>{const n=1===t.length?t[0]:r.reduce(((e,r,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[n+1]),t[0]);return new i(n,e)},a=t?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return o(e)})(t):t;var c;const l=window.reactiveElementPolyfillSupport,u={toAttribute(t,e){switch(e){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=null!==t;break;case Number:r=null===t?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch(t){r=null}}return r}},h=(t,e)=>e!==t&&(e==e||t==t),d={attribute:!0,type:String,converter:u,reflect:!1,hasChanged:h};class p extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,r)=>{const n=this._$Eh(r,e);void 0!==n&&(this._$Eu.set(n,r),t.push(n))})),t}static createProperty(t,e=d){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const r="symbol"==typeof t?Symbol():"__"+t,n=this.getPropertyDescriptor(t,r,e);void 0!==n&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,r){return{get(){return this[e]},set(n){const i=this[t];this[e]=n,this.requestUpdate(t,i,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||d}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const r of e)this.createProperty(r,t[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const t of r)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eh(t,e){const r=e.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ev=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Ep(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,r;(null!==(e=this._$Em)&&void 0!==e?e:this._$Em=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(r=t.hostConnected)||void 0===r||r.call(t))}removeController(t){var e;null===(e=this._$Em)||void 0===e||e.splice(this._$Em.indexOf(t)>>>0,1)}_$Ep(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var e;const r=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,r)=>{t?e.adoptedStyleSheets=r.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):r.forEach((t=>{const r=document.createElement("style"),n=window.litNonce;void 0!==n&&r.setAttribute("nonce",n),r.textContent=t.cssText,e.appendChild(r)}))})(r,this.constructor.elementStyles),r}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$Eg(t,e,r=d){var n,i;const o=this.constructor._$Eh(t,r);if(void 0!==o&&!0===r.reflect){const s=(null!==(i=null===(n=r.converter)||void 0===n?void 0:n.toAttribute)&&void 0!==i?i:u.toAttribute)(e,r.type);this._$Ei=t,null==s?this.removeAttribute(o):this.setAttribute(o,s),this._$Ei=null}}_$AK(t,e){var r,n,i;const o=this.constructor,s=o._$Eu.get(t);if(void 0!==s&&this._$Ei!==s){const t=o.getPropertyOptions(s),a=t.converter,c=null!==(i=null!==(n=null===(r=a)||void 0===r?void 0:r.fromAttribute)&&void 0!==n?n:"function"==typeof a?a:null)&&void 0!==i?i:u.fromAttribute;this._$Ei=s,this[s]=c(e,t.type),this._$Ei=null}}requestUpdate(t,e,r){let n=!0;void 0!==t&&(((r=r||this.constructor.getPropertyOptions(t)).hasChanged||h)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===r.reflect&&this._$Ei!==t&&(void 0===this._$ES&&(this._$ES=new Map),this._$ES.set(t,r))):n=!1),!this.isUpdatePending&&n&&(this._$Ev=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ev}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(r)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(r)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Em)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ev}shouldUpdate(t){return!0}update(t){void 0!==this._$ES&&(this._$ES.forEach(((t,e)=>this._$Eg(e,this[e],t))),this._$ES=void 0),this._$EU()}updated(t){}firstUpdated(t){}}var f;p.finalized=!0,p.elementProperties=new Map,p.elementStyles=[],p.shadowRootOptions={mode:"open"},null==l||l({ReactiveElement:p}),(null!==(c=globalThis.reactiveElementVersions)&&void 0!==c?c:globalThis.reactiveElementVersions=[]).push("1.0.1");const v=globalThis.trustedTypes,b=v?v.createPolicy("lit-html",{createHTML:t=>t}):void 0,g=`lit$${(Math.random()+"").slice(9)}$`,y="?"+g,m=`<${y}>`,w=document,x=(t="")=>w.createComment(t),_=t=>null===t||"object"!=typeof t&&"function"!=typeof t,$=Array.isArray,E=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,C=/-->/g,S=/>/g,A=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,k=/'/g,P=/"/g,O=/^(?:script|style|textarea)$/i,T=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),R=T(1),M=T(2),I=Symbol.for("lit-noChange"),D=Symbol.for("lit-nothing"),U=new WeakMap,N=w.createTreeWalker(w,129,null,!1),j=(t,e)=>{const r=t.length-1,n=[];let i,o=2===e?"<svg>":"",s=E;for(let e=0;e<r;e++){const r=t[e];let a,c,l=-1,u=0;for(;u<r.length&&(s.lastIndex=u,c=s.exec(r),null!==c);)u=s.lastIndex,s===E?"!--"===c[1]?s=C:void 0!==c[1]?s=S:void 0!==c[2]?(O.test(c[2])&&(i=RegExp("</"+c[2],"g")),s=A):void 0!==c[3]&&(s=A):s===A?">"===c[0]?(s=null!=i?i:E,l=-1):void 0===c[1]?l=-2:(l=s.lastIndex-c[2].length,a=c[1],s=void 0===c[3]?A:'"'===c[3]?P:k):s===P||s===k?s=A:s===C||s===S?s=E:(s=A,i=void 0);const h=s===A&&t[e+1].startsWith("/>")?" ":"";o+=s===E?r+m:l>=0?(n.push(a),r.slice(0,l)+"$lit$"+r.slice(l)+g+h):r+g+(-2===l?(n.push(void 0),e):h)}const a=o+(t[r]||"<?>")+(2===e?"</svg>":"");return[void 0!==b?b.createHTML(a):a,n]};class H{constructor({strings:t,_$litType$:e},r){let n;this.parts=[];let i=0,o=0;const s=t.length-1,a=this.parts,[c,l]=j(t,e);if(this.el=H.createElement(c,r),N.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(n=N.nextNode())&&a.length<s;){if(1===n.nodeType){if(n.hasAttributes()){const t=[];for(const e of n.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(g)){const r=l[o++];if(t.push(e),void 0!==r){const t=n.getAttribute(r.toLowerCase()+"$lit$").split(g),e=/([.?@])?(.*)/.exec(r);a.push({type:1,index:i,name:e[2],strings:t,ctor:"."===e[1]?W:"?"===e[1]?z:"@"===e[1]?Y:F})}else a.push({type:6,index:i})}for(const e of t)n.removeAttribute(e)}if(O.test(n.tagName)){const t=n.textContent.split(g),e=t.length-1;if(e>0){n.textContent=v?v.emptyScript:"";for(let r=0;r<e;r++)n.append(t[r],x()),N.nextNode(),a.push({type:2,index:++i});n.append(t[e],x())}}}else if(8===n.nodeType)if(n.data===y)a.push({type:2,index:i});else{let t=-1;for(;-1!==(t=n.data.indexOf(g,t+1));)a.push({type:7,index:i}),t+=g.length-1}i++}}static createElement(t,e){const r=w.createElement("template");return r.innerHTML=t,r}}function L(t,e,r=t,n){var i,o,s,a;if(e===I)return e;let c=void 0!==n?null===(i=r._$Cl)||void 0===i?void 0:i[n]:r._$Cu;const l=_(e)?void 0:e._$litDirective$;return(null==c?void 0:c.constructor)!==l&&(null===(o=null==c?void 0:c._$AO)||void 0===o||o.call(c,!1),void 0===l?c=void 0:(c=new l(t),c._$AT(t,r,n)),void 0!==n?(null!==(s=(a=r)._$Cl)&&void 0!==s?s:a._$Cl=[])[n]=c:r._$Cu=c),void 0!==c&&(e=L(t,c._$AS(t,e.values),c,n)),e}class B{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:r},parts:n}=this._$AD,i=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:w).importNode(r,!0);N.currentNode=i;let o=N.nextNode(),s=0,a=0,c=n[0];for(;void 0!==c;){if(s===c.index){let e;2===c.type?e=new V(o,o.nextSibling,this,t):1===c.type?e=new c.ctor(o,c.name,c.strings,this,t):6===c.type&&(e=new Z(o,this,t)),this.v.push(e),c=n[++a]}s!==(null==c?void 0:c.index)&&(o=N.nextNode(),s++)}return i}m(t){let e=0;for(const r of this.v)void 0!==r&&(void 0!==r.strings?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class V{constructor(t,e,r,n){var i;this.type=2,this._$AH=D,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=n,this._$Cg=null===(i=null==n?void 0:n.isConnected)||void 0===i||i}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=L(this,t,e),_(t)?t===D||null==t||""===t?(this._$AH!==D&&this._$AR(),this._$AH=D):t!==this._$AH&&t!==I&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.S(t):(t=>{var e;return $(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.M(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==D&&_(this._$AH)?this._$AA.nextSibling.data=t:this.S(w.createTextNode(t)),this._$AH=t}T(t){var e;const{values:r,_$litType$:n}=t,i="number"==typeof n?this._$AC(t):(void 0===n.el&&(n.el=H.createElement(n.h,this.options)),n);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===i)this._$AH.m(r);else{const t=new B(i,this),e=t.p(this.options);t.m(r),this.S(e),this._$AH=t}}_$AC(t){let e=U.get(t.strings);return void 0===e&&U.set(t.strings,e=new H(t)),e}M(t){$(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,n=0;for(const i of t)n===e.length?e.push(r=new V(this.A(x()),this.A(x()),this,this.options)):r=e[n],r._$AI(i),n++;n<e.length&&(this._$AR(r&&r._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var r;for(null===(r=this._$AP)||void 0===r||r.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class F{constructor(t,e,r,n,i){this.type=1,this._$AH=D,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=i,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=D}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,r,n){const i=this.strings;let o=!1;if(void 0===i)t=L(this,t,e,0),o=!_(t)||t!==this._$AH&&t!==I,o&&(this._$AH=t);else{const n=t;let s,a;for(t=i[0],s=0;s<i.length-1;s++)a=L(this,n[r+s],e,s),a===I&&(a=this._$AH[s]),o||(o=!_(a)||a!==this._$AH[s]),a===D?t=D:t!==D&&(t+=(null!=a?a:"")+i[s+1]),this._$AH[s]=a}o&&!n&&this.k(t)}k(t){t===D?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class W extends F{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===D?void 0:t}}class z extends F{constructor(){super(...arguments),this.type=4}k(t){t&&t!==D?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class Y extends F{constructor(t,e,r,n,i){super(t,e,r,n,i),this.type=5}_$AI(t,e=this){var r;if((t=null!==(r=L(this,t,e,0))&&void 0!==r?r:D)===I)return;const n=this._$AH,i=t===D&&n!==D||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,o=t!==D&&(n===D||i);i&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,r;"function"==typeof this._$AH?this._$AH.call(null!==(r=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==r?r:this.element,t):this._$AH.handleEvent(t)}}class Z{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){L(this,t)}}const G=window.litHtmlPolyfillSupport;var q,J;null==G||G(H,V),(null!==(f=globalThis.litHtmlVersions)&&void 0!==f?f:globalThis.litHtmlVersions=[]).push("2.0.1");class K extends p{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const r=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=r.firstChild),r}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,r)=>{var n,i;const o=null!==(n=null==r?void 0:r.renderBefore)&&void 0!==n?n:e;let s=o._$litPart$;if(void 0===s){const t=null!==(i=null==r?void 0:r.renderBefore)&&void 0!==i?i:null;o._$litPart$=s=new V(e.insertBefore(x(),t),t,void 0,null!=r?r:{})}return s._$AI(t),s})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return I}}K.finalized=!0,K._$litElement$=!0,null===(q=globalThis.litElementHydrateSupport)||void 0===q||q.call(globalThis,{LitElement:K});const X=globalThis.litElementPolyfillSupport;null==X||X({LitElement:K}),(null!==(J=globalThis.litElementVersions)&&void 0!==J?J:globalThis.litElementVersions=[]).push("3.0.1");const Q=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(r){r.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(r){r.createProperty(e.key,t)}};function tt(t){return(e,r)=>void 0!==r?((t,e,r)=>{e.constructor.createProperty(r,t)})(t,e,r):Q(t,e)}const et=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:r,elements:n}=e;return{kind:r,elements:n,finisher(e){window.customElements.define(t,e)}}})(t,e);class rt{constructor(t){this.isPlaying=!1,this.time=0,this.host=t,t.addController(this)}hostConnected(){}setAudio(t){!this.audio&&t&&(this.audio=new Audio(t),this.audio.ontimeupdate=()=>{var t,e,r;const n=Math.floor(null!==(e=null===(t=this.audio)||void 0===t?void 0:t.currentTime)&&void 0!==e?e:0);n!==this.time&&(this.time=n,this.host.requestUpdate()),this.host.dispatchEvent(new CustomEvent("onTimeChange",{detail:null===(r=this.audio)||void 0===r?void 0:r.currentTime,bubbles:!0,composed:!0}))},this.audio.addEventListener("ended",(()=>{this.isPlaying=!1,this.host.requestUpdate()})))}toggle(){var t,e;this.isPlaying?null===(t=this.audio)||void 0===t||t.pause():null===(e=this.audio)||void 0===e||e.play(),this.isPlaying=!this.isPlaying,this.host.requestUpdate()}resetAudio(){this.audio=null}}var nt=function(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s};let it=class extends K{constructor(){super(),this.animation=!1,this.noEvents=!1,this.audio=new rt(this)}updated(t){var e,r,n;super.updated(t),this.audioUrl&&this.audio.setAudio(this.audioUrl),this.style.setProperty("--bg-color",null!==(e=this.bgColor)&&void 0!==e?e:"#fff"),this.style.setProperty("--icon-color",null!==(r=this.iconColor)&&void 0!==r?r:"#a994e8"),this.style.setProperty("--bars-color",null!==(n=this.barsColor)&&void 0!==n?n:"#a994e8")}playIcon(){return M`
    <svg width="100%" height="100%" viewBox="0 0 43 51" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.0246 2.18536C9.05421 -1.93218 0.915039 2.34166 0.915039 9.59427V41.4532C0.915039 48.7058 9.0542 52.9797 15.0246 48.8622L38.1224 32.9327C43.3096 29.3553 43.3096 21.6922 38.1224 18.1148L15.0246 2.18536Z" fill="currentColor"/>
      <path d="M15.0246 2.18536C9.05421 -1.93218 0.915039 2.34166 0.915039 9.59427V41.4532C0.915039 48.7058 9.0542 52.9797 15.0246 48.8622L38.1224 32.9327C43.3096 29.3553 43.3096 21.6922 38.1224 18.1148L15.0246 2.18536Z" stroke="white"/>
    </svg>`}pauseIcon(){return M`
    <svg width="100%" height="100%" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.5 29.5834H8.83333V0.416748H0.5V29.5834ZM17.1667 0.416748V29.5834H25.5V0.416748H17.1667Z" fill="currentColor"></path>
    </svg>`}render(){return R`
      <div
        class="main-block"
        style="${this.noEvents?"pointer-events:none":""}"
      >
        <div class="img-block">
          ${this.imageUrl?R`<img src=${this.imageUrl} class="user-img" />`:R`<div class="user-img"></div>`}
        </div>
        <div class="icon-block" @click=${this._audioHandler}>
          ${this.audio.isPlaying?this.pauseIcon():this.playIcon()}
        </div>
        <div
          class="wave-block"
          data-animate=${this.audio.isPlaying||this.animation?"repeat":"close"}
        >
          <span class="stroke"></span>
          <span class="stroke"></span>
          <span class="stroke"></span>
          <span class="stroke"></span>
          <span class="stroke"></span>
          <span class="stroke"></span>
          <span class="stroke"></span>
        </div>
      </div>
    `}_audioHandler(){this.audio.toggle()}};it.styles=s`
    * {
      box-sizing: border-box;
    }

    :host {
      display: flex !important;
      width: fit-content;
      height: 74px !important;
      border-radius: 47px !important;
      overflow: hidden !important;
      padding: 6px !important;
      box-sizing: border-box !important;
      user-select: none !important;
      background: var(--bg-color) !important;
      border: 1px #e2e8f0 solid;
    }

    .main-block {
      display: flex;
      width: 100%;
      height: 100%;
      padding-right: 20px;
      overflow: hidden;
      align-items: center;
    }

    .img-block {
      height: 58px;
      width: 58px;
    }

    .user-img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      border-radius: 50%;
      background: #fff;
    }

    .icon-block {
      width: 40px;
      margin-left: 5px;
      display: flex;
      padding: 0px 8px;
      cursor: pointer;
      color: var(--icon-color);
    }

    .wave-block {
      flex: 1;
      height: 100%;
      display: flex;
      align-items: center;
      margin-left: 5px;
      padding: 10px 0px;
    }

    .wave-block .stroke {
      display: block;
      position: relative;
      background: var(--bars-color);
      height: 5%;
      width: 3px;
      border-radius: 50px;
      margin: 0 2px;
    }

    [data-animate="repeat"] .stroke {
      animation: animate 1.2s linear forwards;
      animation-iteration-count: infinite;
    }

    @keyframes animate {
      50% {
        height: 100%;
      }
      100% {
        height: 5%;
      }
    }

    .stroke:nth-child(1) {
      animation-delay: 0s;
    }
    .stroke:nth-child(2) {
      animation-delay: 0.3s;
    }
    .stroke:nth-child(3) {
      animation-delay: 0.6s;
    }
    .stroke:nth-child(4) {
      animation-delay: 0.9s;
    }
    .stroke:nth-child(5) {
      animation-delay: 0.6s;
    }
    .stroke:nth-child(6) {
      animation-delay: 0.3s;
    }
    .stroke:nth-child(7) {
      animation-delay: 0s;
    }
  `,nt([tt()],it.prototype,"imageUrl",void 0),nt([tt()],it.prototype,"bgColor",void 0),nt([tt()],it.prototype,"iconColor",void 0),nt([tt()],it.prototype,"barsColor",void 0),nt([tt()],it.prototype,"audioUrl",void 0),nt([tt({type:Boolean})],it.prototype,"animation",void 0),nt([tt({type:Boolean})],it.prototype,"noEvents",void 0),it=nt([et("voicy-cta")],it);const ot=(t,e=1)=>`rgba(${parseInt(t.slice(1,3),16)}, ${parseInt(t.slice(3,5),16)}, ${parseInt(t.slice(5,7),16)}, ${e})`;var st=r(484),at=r.n(st),ct=r(646),lt=function(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s};at().extend(ct);let ut=class extends K{constructor(){super(),this.primaryColor="#3366FF",this.audio=new rt(this)}updated(t){super.updated(t),this.audioUrl&&t.has("audioUrl")&&(this.audio.resetAudio(),this.audio.setAudio(this.audioUrl)),this.style.setProperty("--primary-color",this.primaryColor),this.style.setProperty("--primary-color-rgba",ot(this.primaryColor,.2))}render(){return R` <button class="round-btn primary-btn" @click=${this._toggle}>
      ${this.audio.isPlaying?ht:dt}
    </button>`}_toggle(){this.audio.toggle()}};ut.styles=s`
    * {
      box-sizing: border-box;
      font-family: "Inter", sans-serif;
    }

    p {
      margin: 0px;
      padding: 0px;
    }

    :host {
      display: flex !important;
      justify-content: center;
      align-items: center;
    }

    .round-btn {
      padding: 7px;
      border: 0px;
      border-radius: 1000px;
      min-width: 32px;
      height: 32px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0px 3px;
      cursor: pointer;
    }
    .primary-btn {
      color: var(--primary-color);
      background-color: var(--primary-color-rgba);
    }
  `,lt([tt()],ut.prototype,"audioUrl",void 0),lt([tt()],ut.prototype,"primaryColor",void 0),ut=lt([et("mini-player")],ut);const ht=M`<svg width="100%" height="100%" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 14V6H13V14H11ZM7 14V6H9V14H7ZM10 0C11.3132 0 12.6136 0.258658 13.8268 0.761205C15.0401 1.26375 16.1425 2.00035 17.0711 2.92893C17.9997 3.85752 18.7362 4.95991 19.2388 6.17317C19.7413 7.38642 20 8.68678 20 10C20 12.6522 18.9464 15.1957 17.0711 17.0711C15.1957 18.9464 12.6522 20 10 20C8.68678 20 7.38642 19.7413 6.17317 19.2388C4.95991 18.7362 3.85752 17.9997 2.92893 17.0711C1.05357 15.1957 0 12.6522 0 10C0 7.34784 1.05357 4.8043 2.92893 2.92893C4.8043 1.05357 7.34784 0 10 0V0ZM10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2V2Z" fill="currentColor"/>
</svg>
`,dt=M`
<svg width="100%" height="100%" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.53688 0.978014C0.871153 0.55437 0 1.03258 0 1.82167V9.17833C0 9.96742 0.871151 10.4456 1.53688 10.022L7.3171 6.34366C7.9346 5.95071 7.9346 5.04929 7.3171 4.65634L1.53688 0.978014Z" fill="currentColor"/>
</svg>

`;var pt=function(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s};at().extend(ct);let ft=class extends K{constructor(){super(),this.primaryColor="#3366FF",this.btnText="Reply with voice",this.email=""}updated(t){super.updated(t),this.style.setProperty("--primary-color",this.primaryColor),this.style.setProperty("--primary-color-rgba",ot(this.primaryColor,.2))}render(){let t=R``;return"none"===this.status&&(t=R`<button class="cta-btn" @click=${this._start}>
        <div class="mic-icon">${vt}</div>
        <p class="cta-text">${this.btnText}</p>
      </button>`),"recording"===this.status&&(t=R`
        <button
          class="cta-btn"
          style="background-color:#FFE3E5"
          @click=${this._stop}
        >
          <div class="stop-icon">${bt}</div>
          <p class="stop-text">Stop recording</p>
        </button>
      `),"stopped"===this.status&&(t=R`
        <input
          type="text"
          value=${this.email}
          @input=${this._updateEmail}
          class="input"
          placeholder="Your email"
        />

        <button class="round-btn red" @click=${this._reset}>
          ${gt}
        </button>
        <mini-player
          audioUrl=${this.audioUrl}
          primaryColor=${this.primaryColor}
        ></mini-player>
        <button class="round-btn send-btn" @click=${this._send}>Send</button>
      `),"sent"===this.status&&(t=R`
        <button class="cta-btn" style="cursor:default">
          <p class="feedback-text">Thank you for your feedback.</p>
        </button>
      `),t}_stop(){this.dispatchEvent(new CustomEvent("stop"))}_send(){this.dispatchEvent(new CustomEvent("send",{detail:this.email}))}_reset(){this.dispatchEvent(new CustomEvent("reset"))}_start(){this.dispatchEvent(new CustomEvent("start"))}_updateEmail(t){var e;this.email=null===(e=t.target)||void 0===e?void 0:e.value}};ft.styles=s`
    * {
      box-sizing: border-box;
      font-family: "Inter", sans-serif;
    }

    p {
      margin: 0px;
      padding: 0px;
    }

    :host {
      display: flex !important;
      width: 100% !important;
      height: 32px !important;
      overflow: hidden !important;
      justify-content: space-between;
      align-items: center;
    }

    .cta-btn {
      background-color: var(--primary-color-rgba);
      font-size: 16px;
      width: 100%;
      border: 0px;
      height: 100%;
      border-radius: 500px;
      padding: 6px 0px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }

    .input {
      height: 100%;
      min-width: 0px;
      border-radius: 5000px;
      background-color: rgba(247, 249, 252, 0.2);
      border-color: #e4e9f2;
      color: var(--primary-color);
      transition-duration: 0.15s;
      transition-property: border, background-color, color, box-shadow;
      transition-timing-function: ease-in;
      border-style: solid;
      border-width: 1px;
      padding: 0px 10px;
    }

    .input:hover {
      background-color: rgba(237, 241, 247, 0.5);
      border-color: #e4e9f2;
    }

    .input:focus {
      background-color: rgba(237, 241, 247, 0.5);
      border-color: var(--primary-color);
    }

    .input:focus-visible {
      outline: none;
    }

    .mic-icon {
      width: 14px;
      height: 14px;
      color: var(--primary-color);
      cursor: pointer;
    }

    .cta-text {
      font-size: 14px;
      margin: 0px;
      padding: 0px;
      margin-left: 5px;
      color: var(--primary-color);
    }

    .round-btn {
      padding: 7px;
      border: 0px;
      border-radius: 1000px;
      min-width: 32px;
      height: 32px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0px 2px;
      cursor: pointer;
    }
    .primary-btn {
      color: var(--primary-color);
      background-color: var(--primary-color-rgba);
    }

    .send-btn {
      padding: 0px 19px;
      color: #00b887;
      background-color: #00b88720;
      margin-right: 0px;
    }

    .red {
      background-color: #ff626220;
    }

    .stop-text {
      font-size: 14px;
      margin: 0px;
      padding: 0px;
      margin-left: 5px;
      color: #ff3d71;
    }

    .trash-icon {
      width: 16px;
      height: 16px;
      color: var(--primary-color);

      cursor: pointer;
    }

    .time-text {
      color: var(--primary-color);
    }

    .right-block {
      display: flex;
      align-items: center;
    }

    .stop-icon {
      width: 18px;
      height: 18px;
      color: #ff3d71;
      cursor: pointer;
    }

    .send-icon {
      margin-right: 3px;
      width: 16px;
      height: 16px;
      color: var(--primary-color);

      cursor: pointer;
    }

    .feedback-text {
      font-size: 14px;
      color: var(--primary-color);

      margin: 0 auto;
    }
  `,pt([tt()],ft.prototype,"status",void 0),pt([tt({type:Number})],ft.prototype,"time",void 0),pt([tt()],ft.prototype,"primaryColor",void 0),pt([tt()],ft.prototype,"btnText",void 0),pt([tt()],ft.prototype,"audioUrl",void 0),ft=pt([et("recorder-ui")],ft);const vt=M`<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" class="bi bi-mic-fill" viewBox="0 0 16 16">
<path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z"/>
<path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z"/>
</svg>`,bt=M`
<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" class="bi bi-stop-fill" viewBox="0 0 16 16">
  <path d="M5 3.5h6A1.5 1.5 0 0 1 12.5 5v6a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 11V5A1.5 1.5 0 0 1 5 3.5z"/>
</svg>
`,gt=M`
<svg width="100%" height="100%" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.77778 5C7.77778 4.38889 7.27778 3.88889 6.66667 3.88889C6.05555 3.88889 5.55555 4.38889 5.55555 5C5.55555 5.61111 6.05555 6.11111 6.66667 6.11111C7.27778 6.11111 7.77778 5.61111 7.77778 5ZM6.66667 0C3.90556 0 1.66667 2.23889 1.66667 5H0L2.22222 7.22222L4.44444 5H2.77778C2.77778 2.85 4.51667 1.11111 6.66667 1.11111C8.81666 1.11111 10.5556 2.85 10.5556 5C10.5556 7.15 8.81666 8.88889 6.66667 8.88889C5.82778 8.88889 5.05 8.61667 4.41111 8.16667L3.62222 8.96667C4.46667 9.61111 5.52222 10 6.66667 10C9.42778 10 11.6667 7.76111 11.6667 5C11.6667 2.23889 9.42778 0 6.66667 0Z" fill="#FF6262"/>
</svg>

`;var yt=r(116),mt=function(t,e){return mt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},mt(t,e)};function wt(t,e){function r(){this.constructor=t}mt(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}function xt(t){return"function"==typeof t}var _t=!1,$t={Promise:void 0,set useDeprecatedSynchronousErrorHandling(t){t&&(new Error).stack,_t=t},get useDeprecatedSynchronousErrorHandling(){return _t}};function Et(t){setTimeout((function(){throw t}),0)}var Ct={closed:!0,next:function(t){},error:function(t){if($t.useDeprecatedSynchronousErrorHandling)throw t;Et(t)},complete:function(){}},St=function(){return Array.isArray||function(t){return t&&"number"==typeof t.length}}();function At(t){return null!==t&&"object"==typeof t}var kt=function(){function t(t){return Error.call(this),this.message=t?t.length+" errors occurred during unsubscription:\n"+t.map((function(t,e){return e+1+") "+t.toString()})).join("\n  "):"",this.name="UnsubscriptionError",this.errors=t,this}return t.prototype=Object.create(Error.prototype),t}(),Pt=function(){function t(t){this.closed=!1,this._parentOrParents=null,this._subscriptions=null,t&&(this._ctorUnsubscribe=!0,this._unsubscribe=t)}return t.prototype.unsubscribe=function(){var e;if(!this.closed){var r=this,n=r._parentOrParents,i=r._ctorUnsubscribe,o=r._unsubscribe,s=r._subscriptions;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,n instanceof t)n.remove(this);else if(null!==n)for(var a=0;a<n.length;++a)n[a].remove(this);if(xt(o)){i&&(this._unsubscribe=void 0);try{o.call(this)}catch(t){e=t instanceof kt?Ot(t.errors):[t]}}if(St(s)){a=-1;for(var c=s.length;++a<c;){var l=s[a];if(At(l))try{l.unsubscribe()}catch(t){e=e||[],t instanceof kt?e=e.concat(Ot(t.errors)):e.push(t)}}}if(e)throw new kt(e)}},t.prototype.add=function(e){var r=e;if(!e)return t.EMPTY;switch(typeof e){case"function":r=new t(e);case"object":if(r===this||r.closed||"function"!=typeof r.unsubscribe)return r;if(this.closed)return r.unsubscribe(),r;if(!(r instanceof t)){var n=r;(r=new t)._subscriptions=[n]}break;default:throw new Error("unrecognized teardown "+e+" added to Subscription.")}var i=r._parentOrParents;if(null===i)r._parentOrParents=this;else if(i instanceof t){if(i===this)return r;r._parentOrParents=[i,this]}else{if(-1!==i.indexOf(this))return r;i.push(this)}var o=this._subscriptions;return null===o?this._subscriptions=[r]:o.push(r),r},t.prototype.remove=function(t){var e=this._subscriptions;if(e){var r=e.indexOf(t);-1!==r&&e.splice(r,1)}},t.EMPTY=function(t){return t.closed=!0,t}(new t),t}();function Ot(t){return t.reduce((function(t,e){return t.concat(e instanceof kt?e.errors:e)}),[])}var Tt=function(){return"function"==typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random()}(),Rt=function(t){function e(r,n,i){var o=t.call(this)||this;switch(o.syncErrorValue=null,o.syncErrorThrown=!1,o.syncErrorThrowable=!1,o.isStopped=!1,arguments.length){case 0:o.destination=Ct;break;case 1:if(!r){o.destination=Ct;break}if("object"==typeof r){r instanceof e?(o.syncErrorThrowable=r.syncErrorThrowable,o.destination=r,r.add(o)):(o.syncErrorThrowable=!0,o.destination=new Mt(o,r));break}default:o.syncErrorThrowable=!0,o.destination=new Mt(o,r,n,i)}return o}return wt(e,t),e.prototype[Tt]=function(){return this},e.create=function(t,r,n){var i=new e(t,r,n);return i.syncErrorThrowable=!1,i},e.prototype.next=function(t){this.isStopped||this._next(t)},e.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},e.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this))},e.prototype._next=function(t){this.destination.next(t)},e.prototype._error=function(t){this.destination.error(t),this.unsubscribe()},e.prototype._complete=function(){this.destination.complete(),this.unsubscribe()},e.prototype._unsubscribeAndRecycle=function(){var t=this._parentOrParents;return this._parentOrParents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parentOrParents=t,this},e}(Pt),Mt=function(t){function e(e,r,n,i){var o,s=t.call(this)||this;s._parentSubscriber=e;var a=s;return xt(r)?o=r:r&&(o=r.next,n=r.error,i=r.complete,r!==Ct&&(xt((a=Object.create(r)).unsubscribe)&&s.add(a.unsubscribe.bind(a)),a.unsubscribe=s.unsubscribe.bind(s))),s._context=a,s._next=o,s._error=n,s._complete=i,s}return wt(e,t),e.prototype.next=function(t){if(!this.isStopped&&this._next){var e=this._parentSubscriber;$t.useDeprecatedSynchronousErrorHandling&&e.syncErrorThrowable?this.__tryOrSetError(e,this._next,t)&&this.unsubscribe():this.__tryOrUnsub(this._next,t)}},e.prototype.error=function(t){if(!this.isStopped){var e=this._parentSubscriber,r=$t.useDeprecatedSynchronousErrorHandling;if(this._error)r&&e.syncErrorThrowable?(this.__tryOrSetError(e,this._error,t),this.unsubscribe()):(this.__tryOrUnsub(this._error,t),this.unsubscribe());else if(e.syncErrorThrowable)r?(e.syncErrorValue=t,e.syncErrorThrown=!0):Et(t),this.unsubscribe();else{if(this.unsubscribe(),r)throw t;Et(t)}}},e.prototype.complete=function(){var t=this;if(!this.isStopped){var e=this._parentSubscriber;if(this._complete){var r=function(){return t._complete.call(t._context)};$t.useDeprecatedSynchronousErrorHandling&&e.syncErrorThrowable?(this.__tryOrSetError(e,r),this.unsubscribe()):(this.__tryOrUnsub(r),this.unsubscribe())}else this.unsubscribe()}},e.prototype.__tryOrUnsub=function(t,e){try{t.call(this._context,e)}catch(t){if(this.unsubscribe(),$t.useDeprecatedSynchronousErrorHandling)throw t;Et(t)}},e.prototype.__tryOrSetError=function(t,e,r){if(!$t.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{e.call(this._context,r)}catch(e){return $t.useDeprecatedSynchronousErrorHandling?(t.syncErrorValue=e,t.syncErrorThrown=!0,!0):(Et(e),!0)}return!1},e.prototype._unsubscribe=function(){var t=this._parentSubscriber;this._context=null,this._parentSubscriber=null,t.unsubscribe()},e}(Rt),It=function(){return"function"==typeof Symbol&&Symbol.observable||"@@observable"}();function Dt(t){return t}function Ut(t){return 0===t.length?Dt:1===t.length?t[0]:function(e){return t.reduce((function(t,e){return e(t)}),e)}}var Nt=function(){function t(t){this._isScalar=!1,t&&(this._subscribe=t)}return t.prototype.lift=function(e){var r=new t;return r.source=this,r.operator=e,r},t.prototype.subscribe=function(t,e,r){var n=this.operator,i=function(t,e,r){if(t){if(t instanceof Rt)return t;if(t[Tt])return t[Tt]()}return t||e||r?new Rt(t,e,r):new Rt(Ct)}(t,e,r);if(n?i.add(n.call(i,this.source)):i.add(this.source||$t.useDeprecatedSynchronousErrorHandling&&!i.syncErrorThrowable?this._subscribe(i):this._trySubscribe(i)),$t.useDeprecatedSynchronousErrorHandling&&i.syncErrorThrowable&&(i.syncErrorThrowable=!1,i.syncErrorThrown))throw i.syncErrorValue;return i},t.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(e){$t.useDeprecatedSynchronousErrorHandling&&(t.syncErrorThrown=!0,t.syncErrorValue=e),function(t){for(;t;){var e=t,r=e.closed,n=e.destination,i=e.isStopped;if(r||i)return!1;t=n&&n instanceof Rt?n:null}return!0}(t)?t.error(e):console.warn(e)}},t.prototype.forEach=function(t,e){var r=this;return new(e=jt(e))((function(e,n){var i;i=r.subscribe((function(e){try{t(e)}catch(t){n(t),i&&i.unsubscribe()}}),n,e)}))},t.prototype._subscribe=function(t){var e=this.source;return e&&e.subscribe(t)},t.prototype[It]=function(){return this},t.prototype.pipe=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return 0===t.length?this:Ut(t)(this)},t.prototype.toPromise=function(t){var e=this;return new(t=jt(t))((function(t,r){var n;e.subscribe((function(t){return n=t}),(function(t){return r(t)}),(function(){return t(n)}))}))},t.create=function(e){return new t(e)},t}();function jt(t){if(t||(t=$t.Promise||Promise),!t)throw new Error("no Promise impl found");return t}var Ht=function(){function t(){return Error.call(this),this.message="object unsubscribed",this.name="ObjectUnsubscribedError",this}return t.prototype=Object.create(Error.prototype),t}(),Lt=function(t){function e(e,r){var n=t.call(this)||this;return n.subject=e,n.subscriber=r,n.closed=!1,n}return wt(e,t),e.prototype.unsubscribe=function(){if(!this.closed){this.closed=!0;var t=this.subject,e=t.observers;if(this.subject=null,e&&0!==e.length&&!t.isStopped&&!t.closed){var r=e.indexOf(this.subscriber);-1!==r&&e.splice(r,1)}}},e}(Pt),Bt=function(t){function e(e){var r=t.call(this,e)||this;return r.destination=e,r}return wt(e,t),e}(Rt),Vt=function(t){function e(){var e=t.call(this)||this;return e.observers=[],e.closed=!1,e.isStopped=!1,e.hasError=!1,e.thrownError=null,e}return wt(e,t),e.prototype[Tt]=function(){return new Bt(this)},e.prototype.lift=function(t){var e=new Ft(this,this);return e.operator=t,e},e.prototype.next=function(t){if(this.closed)throw new Ht;if(!this.isStopped)for(var e=this.observers,r=e.length,n=e.slice(),i=0;i<r;i++)n[i].next(t)},e.prototype.error=function(t){if(this.closed)throw new Ht;this.hasError=!0,this.thrownError=t,this.isStopped=!0;for(var e=this.observers,r=e.length,n=e.slice(),i=0;i<r;i++)n[i].error(t);this.observers.length=0},e.prototype.complete=function(){if(this.closed)throw new Ht;this.isStopped=!0;for(var t=this.observers,e=t.length,r=t.slice(),n=0;n<e;n++)r[n].complete();this.observers.length=0},e.prototype.unsubscribe=function(){this.isStopped=!0,this.closed=!0,this.observers=null},e.prototype._trySubscribe=function(e){if(this.closed)throw new Ht;return t.prototype._trySubscribe.call(this,e)},e.prototype._subscribe=function(t){if(this.closed)throw new Ht;return this.hasError?(t.error(this.thrownError),Pt.EMPTY):this.isStopped?(t.complete(),Pt.EMPTY):(this.observers.push(t),new Lt(this,t))},e.prototype.asObservable=function(){var t=new Nt;return t.source=this,t},e.create=function(t,e){return new Ft(t,e)},e}(Nt),Ft=function(t){function e(e,r){var n=t.call(this)||this;return n.destination=e,n.source=r,n}return wt(e,t),e.prototype.next=function(t){var e=this.destination;e&&e.next&&e.next(t)},e.prototype.error=function(t){var e=this.destination;e&&e.error&&this.destination.error(t)},e.prototype.complete=function(){var t=this.destination;t&&t.complete&&this.destination.complete()},e.prototype._subscribe=function(t){return this.source?this.source.subscribe(t):Pt.EMPTY},e}(Vt),Wt=function(t){function e(e,r){var n=t.call(this,e,r)||this;return n.scheduler=e,n.work=r,n.pending=!1,n}return wt(e,t),e.prototype.schedule=function(t,e){if(void 0===e&&(e=0),this.closed)return this;this.state=t;var r=this.id,n=this.scheduler;return null!=r&&(this.id=this.recycleAsyncId(n,r,e)),this.pending=!0,this.delay=e,this.id=this.id||this.requestAsyncId(n,this.id,e),this},e.prototype.requestAsyncId=function(t,e,r){return void 0===r&&(r=0),setInterval(t.flush.bind(t,this),r)},e.prototype.recycleAsyncId=function(t,e,r){if(void 0===r&&(r=0),null!==r&&this.delay===r&&!1===this.pending)return e;clearInterval(e)},e.prototype.execute=function(t,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var r=this._execute(t,e);if(r)return r;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},e.prototype._execute=function(t,e){var r=!1,n=void 0;try{this.work(t)}catch(t){r=!0,n=!!t&&t||new Error(t)}if(r)return this.unsubscribe(),n},e.prototype._unsubscribe=function(){var t=this.id,e=this.scheduler,r=e.actions,n=r.indexOf(this);this.work=null,this.state=null,this.pending=!1,this.scheduler=null,-1!==n&&r.splice(n,1),null!=t&&(this.id=this.recycleAsyncId(e,t,null)),this.delay=null},e}(function(t){function e(e,r){return t.call(this)||this}return wt(e,t),e.prototype.schedule=function(t,e){return void 0===e&&(e=0),this},e}(Pt)),zt=function(){function t(e,r){void 0===r&&(r=t.now),this.SchedulerAction=e,this.now=r}return t.prototype.schedule=function(t,e,r){return void 0===e&&(e=0),new this.SchedulerAction(this,t).schedule(r,e)},t.now=function(){return Date.now()},t}(),Yt=new(function(t){function e(r,n){void 0===n&&(n=zt.now);var i=t.call(this,r,(function(){return e.delegate&&e.delegate!==i?e.delegate.now():n()}))||this;return i.actions=[],i.active=!1,i.scheduled=void 0,i}return wt(e,t),e.prototype.schedule=function(r,n,i){return void 0===n&&(n=0),e.delegate&&e.delegate!==this?e.delegate.schedule(r,n,i):t.prototype.schedule.call(this,r,n,i)},e.prototype.flush=function(t){var e=this.actions;if(this.active)e.push(t);else{var r;this.active=!0;do{if(r=t.execute(t.state,t.delay))break}while(t=e.shift());if(this.active=!1,r){for(;t=e.shift();)t.unsubscribe();throw r}}},e}(zt))(Wt);function Zt(t){var e=t.subscriber,r=t.counter,n=t.period;e.next(r),this.schedule({subscriber:e,counter:r+1,period:n},n)}function Gt(t){return t&&"function"==typeof t.schedule}function qt(t,e){return function(r){if("function"!=typeof t)throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");return r.lift(new Jt(t,e))}}var Jt=function(){function t(t,e){this.project=t,this.thisArg=e}return t.prototype.call=function(t,e){return e.subscribe(new Kt(t,this.project,this.thisArg))},t}(),Kt=function(t){function e(e,r,n){var i=t.call(this,e)||this;return i.project=r,i.count=0,i.thisArg=n||i,i}return wt(e,t),e.prototype._next=function(t){var e;try{e=this.project.call(this.thisArg,t,this.count++)}catch(t){return void this.destination.error(t)}this.destination.next(e)},e}(Rt),Xt=function(t){return function(e){for(var r=0,n=t.length;r<n&&!e.closed;r++)e.next(t[r]);e.complete()}};function Qt(){return"function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator"}var te=Qt(),ee=function(t){return t&&"number"==typeof t.length&&"function"!=typeof t};function re(t){return!!t&&"function"!=typeof t.subscribe&&"function"==typeof t.then}var ne=function(t){if(t&&"function"==typeof t[It])return n=t,function(t){var e=n[It]();if("function"!=typeof e.subscribe)throw new TypeError("Provided object does not correctly implement Symbol.observable");return e.subscribe(t)};if(ee(t))return Xt(t);if(re(t))return r=t,function(t){return r.then((function(e){t.closed||(t.next(e),t.complete())}),(function(e){return t.error(e)})).then(null,Et),t};if(t&&"function"==typeof t[te])return e=t,function(t){for(var r=e[te]();;){var n=void 0;try{n=r.next()}catch(e){return t.error(e),t}if(n.done){t.complete();break}if(t.next(n.value),t.closed)break}return"function"==typeof r.return&&t.add((function(){r.return&&r.return()})),t};var e,r,n,i=At(t)?"an invalid object":"'"+t+"'";throw new TypeError("You provided "+i+" where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.")};function ie(t,e){return new Nt((function(r){var n=new Pt,i=0;return n.add(e.schedule((function(){i!==t.length?(r.next(t[i++]),r.closed||n.add(this.schedule())):r.complete()}))),n}))}function oe(t,e){return e?function(t,e){if(null!=t){if(function(t){return t&&"function"==typeof t[It]}(t))return function(t,e){return new Nt((function(r){var n=new Pt;return n.add(e.schedule((function(){var i=t[It]();n.add(i.subscribe({next:function(t){n.add(e.schedule((function(){return r.next(t)})))},error:function(t){n.add(e.schedule((function(){return r.error(t)})))},complete:function(){n.add(e.schedule((function(){return r.complete()})))}}))}))),n}))}(t,e);if(re(t))return function(t,e){return new Nt((function(r){var n=new Pt;return n.add(e.schedule((function(){return t.then((function(t){n.add(e.schedule((function(){r.next(t),n.add(e.schedule((function(){return r.complete()})))})))}),(function(t){n.add(e.schedule((function(){return r.error(t)})))}))}))),n}))}(t,e);if(ee(t))return ie(t,e);if(function(t){return t&&"function"==typeof t[te]}(t)||"string"==typeof t)return function(t,e){if(!t)throw new Error("Iterable cannot be null");return new Nt((function(r){var n,i=new Pt;return i.add((function(){n&&"function"==typeof n.return&&n.return()})),i.add(e.schedule((function(){n=t[te](),i.add(e.schedule((function(){if(!r.closed){var t,e;try{var i=n.next();t=i.value,e=i.done}catch(t){return void r.error(t)}e?r.complete():(r.next(t),this.schedule())}})))}))),i}))}(t,e)}throw new TypeError((null!==t&&typeof t||t)+" is not observable")}(t,e):t instanceof Nt?t:new Nt(ne(t))}var se=function(t){function e(e){var r=t.call(this)||this;return r.parent=e,r}return wt(e,t),e.prototype._next=function(t){this.parent.notifyNext(t)},e.prototype._error=function(t){this.parent.notifyError(t),this.unsubscribe()},e.prototype._complete=function(){this.parent.notifyComplete(),this.unsubscribe()},e}(Rt),ae=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return wt(e,t),e.prototype.notifyNext=function(t){this.destination.next(t)},e.prototype.notifyError=function(t){this.destination.error(t)},e.prototype.notifyComplete=function(){this.destination.complete()},e}(Rt);function ce(t,e){if(!e.closed){if(t instanceof Nt)return t.subscribe(e);var r;try{r=ne(t)(e)}catch(t){e.error(t)}return r}}function le(t,e,r){return void 0===r&&(r=Number.POSITIVE_INFINITY),"function"==typeof e?function(n){return n.pipe(le((function(r,n){return oe(t(r,n)).pipe(qt((function(t,i){return e(r,t,n,i)})))}),r))}:("number"==typeof e&&(r=e),function(e){return e.lift(new ue(t,r))})}var ue=function(){function t(t,e){void 0===e&&(e=Number.POSITIVE_INFINITY),this.project=t,this.concurrent=e}return t.prototype.call=function(t,e){return e.subscribe(new he(t,this.project,this.concurrent))},t}(),he=function(t){function e(e,r,n){void 0===n&&(n=Number.POSITIVE_INFINITY);var i=t.call(this,e)||this;return i.project=r,i.concurrent=n,i.hasCompleted=!1,i.buffer=[],i.active=0,i.index=0,i}return wt(e,t),e.prototype._next=function(t){this.active<this.concurrent?this._tryNext(t):this.buffer.push(t)},e.prototype._tryNext=function(t){var e,r=this.index++;try{e=this.project(t,r)}catch(t){return void this.destination.error(t)}this.active++,this._innerSub(e)},e.prototype._innerSub=function(t){var e=new se(this),r=this.destination;r.add(e);var n=ce(t,e);n!==e&&r.add(n)},e.prototype._complete=function(){this.hasCompleted=!0,0===this.active&&0===this.buffer.length&&this.destination.complete(),this.unsubscribe()},e.prototype.notifyNext=function(t){this.destination.next(t)},e.prototype.notifyComplete=function(){var t=this.buffer;this.active--,t.length>0?this._next(t.shift()):0===this.active&&this.hasCompleted&&this.destination.complete()},e}(ae);function de(t){return void 0===t&&(t=Number.POSITIVE_INFINITY),le(Dt,t)}function pe(t,e){return e?ie(t,e):new Nt(Xt(t))}function fe(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var r=t[t.length-1];return Gt(r)?(t.pop(),ie(t,r)):pe(t)}function ve(){return de(1)}function be(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return ve()(fe.apply(void 0,t))}function ge(t,e){return"function"==typeof e?function(r){return r.pipe(ge((function(r,n){return oe(t(r,n)).pipe(qt((function(t,i){return e(r,t,n,i)})))})))}:function(e){return e.lift(new ye(t))}}var ye=function(){function t(t){this.project=t}return t.prototype.call=function(t,e){return e.subscribe(new me(t,this.project))},t}(),me=function(t){function e(e,r){var n=t.call(this,e)||this;return n.project=r,n.index=0,n}return wt(e,t),e.prototype._next=function(t){var e,r=this.index++;try{e=this.project(t,r)}catch(t){return void this.destination.error(t)}this._innerSub(e)},e.prototype._innerSub=function(t){var e=this.innerSubscription;e&&e.unsubscribe();var r=new se(this),n=this.destination;n.add(r),this.innerSubscription=ce(t,r),this.innerSubscription!==r&&n.add(this.innerSubscription)},e.prototype._complete=function(){var e=this.innerSubscription;e&&!e.closed||t.prototype._complete.call(this),this.unsubscribe()},e.prototype._unsubscribe=function(){this.innerSubscription=void 0},e.prototype.notifyComplete=function(){this.innerSubscription=void 0,this.isStopped&&t.prototype._complete.call(this)},e.prototype.notifyNext=function(t){this.destination.next(t)},e}(ae),we=function(){function t(t){this.notifier=t}return t.prototype.call=function(t,e){var r=new xe(t),n=ce(this.notifier,new se(r));return n&&!r.seenValue?(r.add(n),e.subscribe(r)):r},t}(),xe=function(t){function e(e){var r=t.call(this,e)||this;return r.seenValue=!1,r}return wt(e,t),e.prototype.notifyNext=function(){this.seenValue=!0,this.complete()},e.prototype.notifyComplete=function(){},e}(ae),_e=function(){function t(t,e,r){void 0===r&&(r=!1),this.accumulator=t,this.seed=e,this.hasSeed=r}return t.prototype.call=function(t,e){return e.subscribe(new $e(t,this.accumulator,this.seed,this.hasSeed))},t}(),$e=function(t){function e(e,r,n,i){var o=t.call(this,e)||this;return o.accumulator=r,o._seed=n,o.hasSeed=i,o.index=0,o}return wt(e,t),Object.defineProperty(e.prototype,"seed",{get:function(){return this._seed},set:function(t){this.hasSeed=!0,this._seed=t},enumerable:!0,configurable:!0}),e.prototype._next=function(t){if(this.hasSeed)return this._tryNext(t);this.seed=t,this.destination.next(t)},e.prototype._tryNext=function(t){var e,r=this.index++;try{e=this.accumulator(this.seed,t,r)}catch(t){this.destination.error(t)}this.seed=e,this.destination.next(e)},e}(Rt);class Ee{constructor(t){this.blobs=[],this.status="none",this._start=new Vt,this.starter$=this._start.asObservable().pipe(function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var r=t[t.length-1];return Gt(r)?(t.pop(),function(e){return be(t,e,r)}):function(e){return be(t,e)}}(0)),this._stop=new Vt,this.stopper$=this._stop.asObservable(),this._reset=new Vt,this.reset$=this._reset.asObservable().pipe(qt((()=>0))),this.interval$=this.starter$.pipe(ge((()=>{return(t=1e3,void 0===t&&(t=0),void 0===e&&(e=Yt),(St(r=t)||!(r-parseFloat(r)+1>=0)||t<0)&&(t=0),e&&"function"==typeof e.schedule||(e=Yt),new Nt((function(r){return r.add(e.schedule(Zt,t,{subscriber:r,counter:0,period:t})),r}))).pipe((n=this.stopper$,function(t){return t.lift(new we(n))}));var t,e,r,n})),qt((()=>1))),this.timer$=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var r=Number.POSITIVE_INFINITY,n=null,i=t[t.length-1];return Gt(i)?(n=t.pop(),t.length>1&&"number"==typeof t[t.length-1]&&(r=t.pop())):"number"==typeof i&&(r=t.pop()),null===n&&1===t.length&&t[0]instanceof Nt?t[0]:de(r)(pe(t,n))}(this.interval$,this.reset$).pipe(function(t,e){var r=!1;return arguments.length>=2&&(r=!0),function(n){return n.lift(new _e(t,e,r))}}(((t,e)=>0===e?0:t+e))),this.host=t,t.addController(this)}hostConnected(){}hostDisconnected(){}async recorderCallback(t){this.recorder=new yt.Mp3MediaRecorder(t,{worker:new Worker(new URL(r.p+r.u(827),r.b))}),this.recorder.onstart=t=>{this.blobs=[]},this.recorder.ondataavailable=t=>{this.blobs.push(t.data)},this.recorder.onpause=t=>{this._stop.next()},this.recorder.onerror=t=>{console.log(t)},this.recorder.onstop=e=>{if(t.getTracks().forEach((t=>t.stop())),"stopped"!==this.status)return;const r=new Blob(this.blobs,{type:"audio/mp3"}),n=URL.createObjectURL(r),i=new Audio;i.controls=!0,i.src=n,this.audioUrl=n,this.host.requestUpdate()}}async start(){await navigator.mediaDevices.getUserMedia({audio:{advanced:[{echoCancellation:!0}]}}).then((t=>{this.recorderCallback(t)})),this.recorder.start(),this._start.next(),this.status="recording",this.host.requestUpdate()}stopTimer(){this._stop.next()}stop(){this.status="stopped",this._stop.next(),this.recorder.stop(),this.host.requestUpdate()}reset(){this._reset.next(),this.start()}send(){this.status="sent",this.host.requestUpdate()}}var Ce=function(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s};let Se=class extends K{constructor(){super(),this.bgColor="#ffffff",this.subtitleColor="#3366FF",this.subtitleText="Hey, Welcome to Voicl,",this.textColor="#3366FF",this.text="Got any ideas to improve the tool?",this.btnText="Reply to Svenja",this.noEvents=!1,this.time=0,this.recorder=new Ee(this)}updated(t){super.updated(t),this.style.setProperty("--bg-color",this.bgColor),this.style.setProperty("--text-color",this.textColor),this.style.setProperty("--subtitle-color",this.subtitleColor),this.style.setProperty("--svg-color",ot(this.textColor,.06))}connectedCallback(){super.connectedCallback(),this.recorder.timer$.subscribe((t=>{this.time=t,this.requestUpdate()})),this.recorder.stopTimer()}render(){return R`
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
        rel="stylesheet"
      />
      <div
        class="container"
        style="${this.noEvents?"pointer-events:none":""}"
      >
        <div class="bg-svg">${Ae}</div>
        <div class="main-block">
          <div class="img-block">
            ${this.imageUrl?R`<img src=${this.imageUrl} class="user-img" />`:R`<div class="user-img"></div>`}
          </div>
          <div class="hero-block">
            <p class="main-text">${this.text}</p>
            <p class="subtitle-text">${this.subtitleText}</p>
          </div>
        </div>
        <recorder-ui
          @reset=${this._reset}
          @stop=${this._stop}
          @send=${this._send}
          @start=${this._start}
          status=${this.recorder.status}
          time=${this.time}
          primaryColor=${this.textColor}
          btnText=${this.btnText}
          audioUrl=${this.recorder.audioUrl}
        ></recorder-ui>
      </div>
    `}_start(){this.recorder.start()}_reset(){this.recorder.reset()}_stop(){this.recorder.stop()}_send(t){this.recorder.send();const e={audio:this.recorder.audioUrl};t.detail&&(e.email=t.detail),this.dispatchEvent(new CustomEvent("send",{detail:e,bubbles:!0,composed:!0}))}};Se.styles=s`
    * {
      box-sizing: border-box;
      font-family: "Inter", sans-serif;
    }

    p {
      margin: 0px;
      padding: 0px;
    }

    :host {
      display: flex !important;
      width: 262px !important;
      height: 118px !important;
      border-radius: 20px !important;
      overflow: hidden !important;
      padding: 0px !important;
      box-sizing: border-box !important;
      user-select: none !important;
      border: 1px #e2e8f0 solid;
    }

    .container {
      position: relative;
      width: 100%;
      height: 100%;
      padding: 10px;
      z-index: 0;
      display: flex;
      flex-direction: column;
      background-color: var(--bg-color) !important;
    }

    .bg-svg {
      position: absolute;
      top: 0px;
      left: 0px;
      z-index: -1;
      color: var(--svg-color);
    }

    .main-block {
      display: flex;
      flex: 1;
    }

    .img-block {
      height: 40px;
      width: 40px;
    }

    .user-img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      border-radius: 50%;
      background: #fff;
    }

    .hero-block {
      flex: 1;
      display: flex;
      flex-direction: column;
      margin-left: 10px;
    }

    .subtitle-text {
      color: var(--subtitle-color);
      font-size: 12px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }

    .main-text {
      color: var(--text-color);
      font-weight: 600;
      font-size: 16px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    /* .cta-btn:hover {
      background-color: #dde6ff;
    } */
  `,Ce([tt()],Se.prototype,"imageUrl",void 0),Ce([tt()],Se.prototype,"bgColor",void 0),Ce([tt()],Se.prototype,"subtitleColor",void 0),Ce([tt()],Se.prototype,"subtitleText",void 0),Ce([tt()],Se.prototype,"textColor",void 0),Ce([tt()],Se.prototype,"text",void 0),Ce([tt()],Se.prototype,"btnText",void 0),Ce([tt({type:Boolean})],Se.prototype,"noEvents",void 0),Se=Ce([et("voicy-momina")],Se);const Ae=M`<svg width="164" height="117" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M163.72 0c-14.236 25.416-42.166 51.328-74.563 73.65-26.006 17.92-54.782 33.589-78.932 42.589C4.176 113.337 0 107.156 0 100V18C0 8.059 8.059 0 18 0h145.72Z" fill="currentColor"/></svg>`;console.warn("The main 'lit-element' module entrypoint is deprecated. Please update your imports to use the 'lit' package: 'lit' and 'lit/decorators.ts' or import from 'lit-element/lit-element.ts'. See https://lit.dev/msg/deprecated-import-path for more information.");const ke=s`
  .ripple {
    width: fit-content;
    position: relative;
  }
  .ripple::before {
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100%);
    height: calc(100%);
    content: "";
    border-radius: 50000px;
    background: var(--pulse-color);
    opacity: 0.3;
    z-index: 0;
  }

  [data-speed="fast"].ripple::before {
    animation: 2.5s noise ease-in-out infinite alternate;
  }

  [data-speed="slow"].ripple::before {
    /* animation: 2.5s noise ease-in-out infinite alternate; */
    animation: 1.5s infinite slow-pulse;
  }

  @keyframes slow-pulse {
    0% {
      transform: scale(0.95);
      opacity: 0.75;
    }
    100% {
      transform: scale(1.2);
      opacity: 0;
    }
  }

  @keyframes noise {
    0%,
    4%,
    27%,
    64%,
    93% {
      transform: scale(1.15);
    }
    10%,
    14%,
    24%,
    37%,
    74%,
    83% {
      transform: scale(1.05);
    }
    21%,
    67%,
    47%,
    69%,
    77%,
    9%,
    30% {
      transform: scale(1);
    }
    5%,
    7%,
    12%,
    32%,
    54%,
    89% {
      transform: scale(1.1);
    }
  }

  @keyframes pulse {
    0%,
    100% {
      transform: scale(1);
    }
    5%,
    20%,
    85% {
      transform: scale(1.15);
    }
    15%,
    30%,
    55%,
    75%,
    90% {
      transform: scale(1.05);
    }
    35%,
    45%,
    60%,
    70% {
      transform: scale(1.2);
    }
    40%,
    67%,
    95% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`;var Pe=function(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s};let Oe=class extends K{constructor(){super(...arguments),this.noEvents=!1,this.audio=new rt(this),this.pauseIcon=M`<svg
            width="100%"
            height="100%"
            viewBox="0 0 22 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
                d="M7.75121 1.71644C6.95336 0.93632 5.87359 0.5 4.75 0.5C3.62641 0.5 2.54664 0.93632 1.74879 1.71644C0.95056 2.49693 0.5 3.55793 0.5 4.66667V19.3333C0.5 20.4421 0.95056 21.5031 1.74879 22.2836C2.54664 23.0637 3.62641 23.5 4.75 23.5C5.87359 23.5 6.95336 23.0637 7.75121 22.2836C8.54944 21.5031 9 20.4421 9 19.3333V4.66667C9 3.55793 8.54944 2.49693 7.75121 1.71644ZM20.2512 1.71644C19.4534 0.93632 18.3736 0.5 17.25 0.5C16.1264 0.5 15.0466 0.93632 14.2488 1.71644C13.4506 2.49693 13 3.55793 13 4.66667V19.3333C13 20.4421 13.4506 21.5031 14.2488 22.2836C15.0466 23.0637 16.1264 23.5 17.25 23.5C18.3736 23.5 19.4534 23.0637 20.2512 22.2836C21.0494 21.5031 21.5 20.4421 21.5 19.3333V4.66667C21.5 3.55793 21.0494 2.49693 20.2512 1.71644Z"
                fill="currentColor"
                stroke="white"
            />
        </svg>`,this.playIcon=M`<svg
            width="100%"
            height="100%"
            viewBox="0 0 26 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
            d="M1 26.478V5.52204C1 2.29866 4.61741 0.39917 7.27093 2.22919L22.464 12.7071C24.7694 14.2971 24.7694 17.7029 22.464 19.2929L7.27093 29.7708C4.61741 31.6008 1 29.7013 1 26.478Z"
            fill="currentColor"
            stroke="white"
            stroke-width="2"
            />
    </svg>`}updated(t){var e,r;super.updated(t),this.audioUrl&&this.audio.setAudio(this.audioUrl),this.style.setProperty("--icon-color",null!==(e=this.iconColor)&&void 0!==e?e:"#a994e8"),this.style.setProperty("--pulse-color",null!==(r=this.pulseColor)&&void 0!==r?r:"#a994e8"),this.style.setProperty("--events",this.noEvents?"none":"all")}render(){return R`
      <div class="container">
        <div
          class="ripple"
          data-speed=${this.audio.isPlaying?"fast":"slow"}
        >
          <div class="circle">
            ${this.imageUrl?R`<img src=${this.imageUrl} class="user-img" />`:null}
          </div>
        </div>
        <div class="icon-block" @click=${this._audioHandler}>
          ${this.audio.isPlaying?this.pauseIcon:this.playIcon}
        </div>
      </div>
    `}_audioHandler(){this.audio.toggle()}};Oe.styles=[ke,s`
      * {
        box-sizing: border-box;
      }

      :host {
        display: flex !important;
        width: 130px !important;
        height: 130px !important;
        overflow: hidden !important;
        box-sizing: border-box !important;
        padding: 5px !important;
      }

      .container {
        width: 100%;
        height: 100%;
        position: relative;
        pointer-events: var(--events);
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .circle {
        width: 104px;
        height: 104px;
        border-radius: 50%;
        border: 3px solid var(--pulse-color);
        background-color: white;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        user-select: none;
        position: relative;
      }
      .user-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .icon-block {
        width: 40px;
        height: 40px;
        position: absolute;
        bottom: 0px;
        right: 10px;
        color: var(--icon-color);
      }

      .icon-block svg {
        cursor: pointer;
      }
    `],Pe([tt()],Oe.prototype,"imageUrl",void 0),Pe([tt()],Oe.prototype,"audioUrl",void 0),Pe([tt()],Oe.prototype,"iconColor",void 0),Pe([tt()],Oe.prototype,"pulseColor",void 0),Pe([tt({type:Boolean})],Oe.prototype,"noEvents",void 0),Oe=Pe([et("voicy-meghan")],Oe);var Te=function(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s};let Re=class extends K{constructor(){super(...arguments),this.text="We have a special offer!",this.hasCta=!0,this.btnText="Show more",this.btnLink="https://wikipedia.com",this.noEvents=!1,this.audio=new rt(this),this.pauseIcon=M`<svg
            width="100%"
            height="100%"
            viewBox="0 0 22 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
                d="M7.75121 1.71644C6.95336 0.93632 5.87359 0.5 4.75 0.5C3.62641 0.5 2.54664 0.93632 1.74879 1.71644C0.95056 2.49693 0.5 3.55793 0.5 4.66667V19.3333C0.5 20.4421 0.95056 21.5031 1.74879 22.2836C2.54664 23.0637 3.62641 23.5 4.75 23.5C5.87359 23.5 6.95336 23.0637 7.75121 22.2836C8.54944 21.5031 9 20.4421 9 19.3333V4.66667C9 3.55793 8.54944 2.49693 7.75121 1.71644ZM20.2512 1.71644C19.4534 0.93632 18.3736 0.5 17.25 0.5C16.1264 0.5 15.0466 0.93632 14.2488 1.71644C13.4506 2.49693 13 3.55793 13 4.66667V19.3333C13 20.4421 13.4506 21.5031 14.2488 22.2836C15.0466 23.0637 16.1264 23.5 17.25 23.5C18.3736 23.5 19.4534 23.0637 20.2512 22.2836C21.0494 21.5031 21.5 20.4421 21.5 19.3333V4.66667C21.5 3.55793 21.0494 2.49693 20.2512 1.71644Z"
                fill="currentColor"
                stroke="white"
            />
        </svg>`,this.playIcon=M`<svg
            width="100%"
            height="100%"
            viewBox="0 0 26 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
            d="M1 26.478V5.52204C1 2.29866 4.61741 0.39917 7.27093 2.22919L22.464 12.7071C24.7694 14.2971 24.7694 17.7029 22.464 19.2929L7.27093 29.7708C4.61741 31.6008 1 29.7013 1 26.478Z"
            fill="currentColor"
            stroke="white"
            stroke-width="2"
            />
    </svg>`}updated(t){var e,r,n,i;super.updated(t),this.audioUrl&&this.audio.setAudio(this.audioUrl),this.style.setProperty("--icon-color",null!==(e=this.iconColor)&&void 0!==e?e:"#a994e8"),this.style.setProperty("--text-color",null!==(r=this.textColor)&&void 0!==r?r:"gray"),this.style.setProperty("--bg-color",null!==(n=this.bgColor)&&void 0!==n?n:"#fff"),this.style.setProperty("--events",this.noEvents?"none":"all"),this.style.setProperty("--pulse-color",null!==(i=this.pulseColor)&&void 0!==i?i:"#a994e8")}render(){return R`
      <div class="container">
        <div
          class="ripple"
          data-speed=${this.audio.isPlaying?"fast":"slow"}
          style="margin-right: -50px; "
        >
          <div class="circle-block">
            ${this.imageUrl?R`<img src=${this.imageUrl} class="user-img" />`:null}
            <div class="icon-block" @click=${this._audioHandler}>
              ${this.audio.isPlaying?this.pauseIcon:this.playIcon}
            </div>
          </div>
        </div>

        <div class="bar-block">
          <p class="bar-text">${this.text}</p>
          ${this.hasCta?R`<button class="bar-btn" @click=${this._btnHandler}>
                ${this.btnText}
              </button>`:null}
        </div>
      </div>
    `}_audioHandler(){this.audio.toggle()}_btnHandler(){window&&window.open(this.btnLink)}};Re.styles=[ke,s`
      * {
        box-sizing: border-box;
      }

      :host {
        display: flex !important;
        overflow: hidden !important;
        box-sizing: border-box !important;
        padding: 5px !important;
      }

      .container {
        position: relative;
        overflow: hidden;
        pointer-events: var(--events);
        display: flex;
        align-items: center;
        /* padding: 2px 5px 12px 5px; */
        padding: 10px;
      }

      .bar-block {
        display: flex;
        max-width: 400px;
        align-items: center;
        padding: 5px 10px 5px 60px;
        background-color: var(--bg-color);
        border-radius: 4000px;
        box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.15);
      }

      .bar-btn {
        background-color: var(--icon-color);
        border: 0px;
        border-radius: 500px;
        color: #fff;
        height: 40px;
        padding: 0px 20px;
        font-size: 18px;
        cursor: pointer;
        margin-left: 10px;
        white-space: nowrap;
      }

      .bar-text {
        font-size: 16px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        color: var(--text-color);
        margin-right: 10px;
      }
      .circle-block {
        width: 80px;
        height: 80px;
        /* margin-right: -50px; */
        border-radius: 50%;
        border: 3px solid var(--bg-color);
        background-color: var(--bg-color);
        box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.25);
        display: flex;
        justify-content: center;
        align-items: center;
        user-select: none;
        position: relative;
        z-index: 2;
      }

      /* .circle-block::before {
      content: "";
      position: absolute;
      top: 7px;
      right: 0px;
      height: 60px;
      width: 40px;
      transform: translateX(10px);
      background-color: var(--bg-color);
      z-index: -1;
    } */
      .user-img {
        border-radius: 5000px;
        overflow: hidden;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .icon-block {
        width: 35px;
        height: 35px;
        position: absolute;
        bottom: -10px;
        right: -10px;
        color: var(--icon-color);
      }

      .icon-block svg {
        filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.25));
        cursor: pointer;
      }
    `],Te([tt()],Re.prototype,"imageUrl",void 0),Te([tt()],Re.prototype,"audioUrl",void 0),Te([tt()],Re.prototype,"bgColor",void 0),Te([tt()],Re.prototype,"text",void 0),Te([tt()],Re.prototype,"textColor",void 0),Te([tt({type:Boolean})],Re.prototype,"hasCta",void 0),Te([tt()],Re.prototype,"btnText",void 0),Te([tt()],Re.prototype,"btnLink",void 0),Te([tt()],Re.prototype,"iconColor",void 0),Te([tt()],Re.prototype,"pulseColor",void 0),Te([tt({type:Boolean})],Re.prototype,"noEvents",void 0),Re=Te([et("voicy-malik")],Re);var Me=function(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s};let Ie=class extends K{constructor(){super(...arguments),this.text="",this.noEvents=!1,this.audio=new rt(this),this.pauseIcon=M`<svg
            width="100%"
            height="100%"
            viewBox="0 0 22 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
                d="M7.75121 1.71644C6.95336 0.93632 5.87359 0.5 4.75 0.5C3.62641 0.5 2.54664 0.93632 1.74879 1.71644C0.95056 2.49693 0.5 3.55793 0.5 4.66667V19.3333C0.5 20.4421 0.95056 21.5031 1.74879 22.2836C2.54664 23.0637 3.62641 23.5 4.75 23.5C5.87359 23.5 6.95336 23.0637 7.75121 22.2836C8.54944 21.5031 9 20.4421 9 19.3333V4.66667C9 3.55793 8.54944 2.49693 7.75121 1.71644ZM20.2512 1.71644C19.4534 0.93632 18.3736 0.5 17.25 0.5C16.1264 0.5 15.0466 0.93632 14.2488 1.71644C13.4506 2.49693 13 3.55793 13 4.66667V19.3333C13 20.4421 13.4506 21.5031 14.2488 22.2836C15.0466 23.0637 16.1264 23.5 17.25 23.5C18.3736 23.5 19.4534 23.0637 20.2512 22.2836C21.0494 21.5031 21.5 20.4421 21.5 19.3333V4.66667C21.5 3.55793 21.0494 2.49693 20.2512 1.71644Z"
                fill="currentColor"
                stroke="white"
            />
        </svg>`,this.playIcon=M`<svg
            width="100%"
            height="100%"
            viewBox="0 0 26 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
            d="M1 26.478V5.52204C1 2.29866 4.61741 0.39917 7.27093 2.22919L22.464 12.7071C24.7694 14.2971 24.7694 17.7029 22.464 19.2929L7.27093 29.7708C4.61741 31.6008 1 29.7013 1 26.478Z"
            fill="currentColor"
            stroke="white"
            stroke-width="2"
            />
    </svg>`}updated(t){var e,r,n;super.updated(t),this.audioUrl&&this.audio.setAudio(this.audioUrl),this.style.setProperty("--icon-color",null!==(e=this.iconColor)&&void 0!==e?e:"#a994e8"),this.style.setProperty("--text-color",null!==(r=this.textColor)&&void 0!==r?r:"gray"),this.style.setProperty("--bg-color",null!==(n=this.bgColor)&&void 0!==n?n:"#fff"),this.style.setProperty("--events",this.noEvents?"none":"all")}render(){return R`
      <div class="container">
        ${this.text?R`<div class="bar-block">
              <p class="bar-text">${this.text}</p>
            </div>`:null}
        <div class="icon-block" @click=${this._audioHandler}>
          ${this.audio.isPlaying?this.pauseIcon:this.playIcon}
        </div>
      </div>
    `}_audioHandler(){this.audio.toggle()}static get styles(){return[ke,s`
        * {
          box-sizing: border-box;
        }

        :host {
          display: flex !important;
          overflow: hidden !important;
          box-sizing: border-box !important;
          padding: 5px !important;
        }

        .container {
          position: relative;
          overflow: hidden;
          pointer-events: var(--events);
          display: flex;
          align-items: center;
          padding: 10px 5px;
          max-width: 280px;
        }

        .bar-block {
          flex: 1;
          background-color: var(--bg-color);
          box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.15);
          padding: 6px 15px;
          border-radius: 400px;
          position: relative;
          min-width: 0;
          margin-right: 14px;
        }

        .bar-block:before {
          content: "";
          position: absolute;
          right: -27px;
          top: 50%;
          transform: translateY(-50%);
          width: 0px;
          height: 0px;
          border-left: solid 15px var(--bg-color);
          border-right: solid 15px transparent;
          border-top: solid 6px transparent;
          border-bottom: solid 6px transparent;
          z-index: 3;
        }

        .bar-text {
          margin: 0px;
          color: var(--text-color);
          font-size: 18px;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          color: var(--text-color);
        }

        .icon-block {
          width: 35px;
          height: 35px;
          color: var(--icon-color);
        }

        .icon-block svg {
          filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.15));
          cursor: pointer;
        }
      `]}};Me([tt()],Ie.prototype,"audioUrl",void 0),Me([tt()],Ie.prototype,"bgColor",void 0),Me([tt()],Ie.prototype,"text",void 0),Me([tt()],Ie.prototype,"textColor",void 0),Me([tt()],Ie.prototype,"iconColor",void 0),Me([tt({type:Boolean})],Ie.prototype,"noEvents",void 0),Ie=Me([et("voicy-nicky")],Ie);var De=function(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s};let Ue=class extends K{constructor(){super(),this.noEvents=!1,this.audio=new rt(this)}updated(t){var e,r;super.updated(t),this.audioUrl&&this.audio.setAudio(this.audioUrl),this.style.setProperty("--bg-color",null!==(e=this.bgColor)&&void 0!==e?e:"white"),this.style.setProperty("--icon-color",null!==(r=this.iconColor)&&void 0!==r?r:"#a994e8")}playIcon(){return M`
    <svg width="100%" height="100%" viewBox="0 0 43 51" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.0246 2.18536C9.05421 -1.93218 0.915039 2.34166 0.915039 9.59427V41.4532C0.915039 48.7058 9.0542 52.9797 15.0246 48.8622L38.1224 32.9327C43.3096 29.3553 43.3096 21.6922 38.1224 18.1148L15.0246 2.18536Z" fill="currentColor"/>
      <path d="M15.0246 2.18536C9.05421 -1.93218 0.915039 2.34166 0.915039 9.59427V41.4532C0.915039 48.7058 9.0542 52.9797 15.0246 48.8622L38.1224 32.9327C43.3096 29.3553 43.3096 21.6922 38.1224 18.1148L15.0246 2.18536Z" stroke="white"/>
    </svg>`}pauseIcon(){return M`
    <svg width="100%" height="100%" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.5 29.5834H8.83333V0.416748H0.5V29.5834ZM17.1667 0.416748V29.5834H25.5V0.416748H17.1667Z" fill="currentColor"></path>
    </svg>`}render(){return R`
      <div
        class="main-block"
        style="${this.noEvents?"pointer-events:none":""}"
      >
        <div class="img-block">
          ${this.imageUrl?R`<img src=${this.imageUrl} class="user-img" />`:R`<div class="user-img"></div>`}
        </div>
        <div class="icon-block" @click=${this._audioHandler}>
          ${this.audio.isPlaying?this.pauseIcon():this.playIcon()}
        </div>
      </div>
    `}_audioHandler(){this.audio.toggle()}};Ue.styles=s`
    * {
      box-sizing: border-box;
    }

    :host {
      display: flex !important;
      width: 108px !important;
      height: 64px !important;
      border-radius: 47px !important;
      box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.25) !important;
      overflow: hidden !important;
      padding: 6px !important;
      box-sizing: border-box !important;
      user-select: none !important;
      background: var(--bg-color) !important;
    }

    .main-block {
      display: flex;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

    .img-block {
      height: 100%;
    }

    .user-img {
      height: 52px;
      width: 52px;
      object-fit: cover;
      border-radius: 50%;
      background: #fff;
    }

    .icon-block {
      width: 50%;
      padding: 10px;
      cursor: pointer;
      color: var(--icon-color);
    }
  `,De([tt()],Ue.prototype,"imageUrl",void 0),De([tt()],Ue.prototype,"bgColor",void 0),De([tt()],Ue.prototype,"iconColor",void 0),De([tt()],Ue.prototype,"audioUrl",void 0),De([tt({type:Boolean})],Ue.prototype,"noEvents",void 0),Ue=De([et("voicy-usman")],Ue),r(17);let Ne=class extends K{static get styles(){return s`
      h1 {
        font-family: serif;
        color: green;
      }
      h3 {
        font-family: Arial, Helvetica, sans-serif;
        color: red;
      }
    `}render(){return R`
      <h3>Test drive</h3>
      <h1>parent component with "conflicting styles"</h1>
    `}};Ne=function(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s}([et("root-el")],Ne)})()})();
//# sourceMappingURL=bundle.js.map