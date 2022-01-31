/*! For license information please see 827.bundle.js.LICENSE.txt */
(()=>{"use strict";var e={701:(e,t)=>{function n(e,t,n,r){return new(n||(n=Promise))((function(s,o){function i(e){try{c(r.next(e))}catch(e){o(e)}}function a(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((r=r.apply(e,t||[])).next())}))}t.l=({vmsgWasmUrl:e})=>{const t=self,r=new WebAssembly.Memory({initial:2048,maximum:2048});let s=5242880;const o=(i=e,a={env:{memory:r,sbrk:e=>{const t=s;return s+=e,t},exit:()=>t.postMessage({type:"ERROR",error:"internal"}),pow:Math.pow,powf:Math.pow,exp:Math.exp,sqrtf:Math.sqrt,cos:Math.cos,log:Math.log,sin:Math.sin}},WebAssembly.instantiateStreaming?WebAssembly.instantiateStreaming(fetch(i),a).catch((()=>u(i,a))):u(i,a)).then((e=>e.instance.exports));var i,a;let c,f,l=!1;function u(e,t){return fetch(e).then((e=>e.arrayBuffer())).then((e=>WebAssembly.instantiate(e,t)))}t.addEventListener("message",(e=>n(void 0,void 0,void 0,(function*(){const s=e.data;try{switch(s.type){case"START_RECORDING":yield(a=s.config,n(void 0,void 0,void 0,(function*(){const e=yield o;if(l=!0,c=e.vmsg_init(a.sampleRate),!c||!e)throw new Error("init_failed");const t=new Uint32Array(r.buffer,c,1)[0];f=new Float32Array(r.buffer,t)}))),t.postMessage({type:"WORKER_RECORDING"});break;case"DATA_AVAILABLE":yield(i=s.data,n(void 0,void 0,void 0,(function*(){if(l&&(f.set(i),(yield o).vmsg_encode(c,i.length)<0))throw new Error("encoding_failed")})));break;case"STOP_RECORDING":{const e=yield n(void 0,void 0,void 0,(function*(){const e=yield o;if(l=!1,e.vmsg_flush(c)<0)throw new Error("flush_failed");const t=new Uint32Array(r.buffer,c+4,1)[0],n=new Uint32Array(r.buffer,c+8,1)[0],s=new Uint8Array(r.buffer,t,n),i=new Blob([s],{type:"audio/mpeg"});return e.vmsg_free(c),i}));t.postMessage({type:"BLOB_READY",blob:e});break}}}catch(e){t.postMessage({type:"ERROR",error:e.message})}var i,a}))))}}},t={};(0,function n(r){var s=t[r];if(void 0!==s)return s.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}(701).l)({vmsgWasmUrl:"https://unpkg.com/vmsg@0.4.0/vmsg.wasm"})})();
//# sourceMappingURL=827.bundle.js.map