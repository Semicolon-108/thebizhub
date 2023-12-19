import{c as Se,a as ze,_ as Ie}from"./entry.4b7e5ca5.js";import{u as o,g as qe,a as x,y as ke,b as D,z as ee,r as W,o as Le,k as _,a3 as Ne,m as Me,i as ae,p as oe,n as ie,j as Te,D as w,P as O,Q as u,a4 as De,a5 as S,a6 as T,R as j,a0 as E,a7 as le,F as ce,X as ue,U as V,A as Fe,V as Ue,W as Ye}from"./swiper-vue.9585ef87.js";import{I as Be}from"./info-box.4c4379a4.js";function de(e,s){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);s&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function F(e){for(var s=1;s<arguments.length;s++){var r=arguments[s]!=null?arguments[s]:{};s%2?de(Object(r),!0).forEach(function(t){Ge(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):de(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function Ge(e,s,r){return s in e?Object.defineProperty(e,s,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[s]=r,e}function B(e){return typeof e=="function"}function te(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)}function Z(e){return B(e.$validator)?F({},e):{$validator:e}}function he(e){return typeof e=="object"?e.$valid:e}function ye(e){return e.$validator||e}function We(e,s){if(!te(e))throw new Error(`[@vuelidate/validators]: First parameter to "withParams" should be an object, provided ${typeof e}`);if(!te(s)&&!B(s))throw new Error("[@vuelidate/validators]: Validator must be a function or object with $validator parameter");const r=Z(s);return r.$params=F(F({},r.$params||{}),e),r}function Ze(e,s){if(!B(e)&&typeof o(e)!="string")throw new Error(`[@vuelidate/validators]: First parameter to "withMessage" should be string or a function returning a string, provided ${typeof e}`);if(!te(s)&&!B(s))throw new Error("[@vuelidate/validators]: Validator must be a function or object with $validator parameter");const r=Z(s);return r.$message=e,r}function He(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];const r=Z(e);return F(F({},r),{},{$async:!0,$watchTargets:s})}function Ke(e){return{$validator(s){for(var r=arguments.length,t=new Array(r>1?r-1:0),l=1;l<r;l++)t[l-1]=arguments[l];return o(s).reduce((d,g,a)=>{const p=Object.entries(g).reduce((c,v)=>{let[$,h]=v;const m=e[$]||{},n=Object.entries(m).reduce((i,f)=>{let[y,M]=f;const P=ye(M).call(this,h,g,a,...t),L=he(P);if(i.$data[y]=P,i.$data.$invalid=!L||!!i.$data.$invalid,i.$data.$error=i.$data.$invalid,!L){let C=M.$message||"";const U=M.$params||{};typeof C=="function"&&(C=C({$pending:!1,$invalid:!L,$params:U,$model:h,$response:P})),i.$errors.push({$property:$,$message:C,$params:U,$response:P,$model:h,$pending:!1,$validator:y})}return{$valid:i.$valid&&L,$data:i.$data,$errors:i.$errors}},{$valid:!0,$data:{},$errors:[]});return c.$data[$]=n.$data,c.$errors[$]=n.$errors,{$valid:c.$valid&&n.$valid,$data:c.$data,$errors:c.$errors}},{$valid:!0,$data:{},$errors:{}});return{$valid:d.$valid&&p.$valid,$data:d.$data.concat(p.$data),$errors:d.$errors.concat(p.$errors)}},{$valid:!0,$data:[],$errors:[]})},$message:s=>{let{$response:r}=s;return r?r.$errors.map(t=>Object.values(t).map(l=>l.map(d=>d.$message)).reduce((l,d)=>l.concat(d),[])):[]}}}const ne=e=>{if(e=o(e),Array.isArray(e))return!!e.length;if(e==null)return!1;if(e===!1)return!0;if(e instanceof Date)return!isNaN(e.getTime());if(typeof e=="object"){for(let s in e)return!0;return!1}return!!String(e).length},Qe=e=>(e=o(e),Array.isArray(e)?e.length:typeof e=="object"?Object.keys(e).length:String(e).length);function k(){for(var e=arguments.length,s=new Array(e),r=0;r<e;r++)s[r]=arguments[r];return t=>(t=o(t),!ne(t)||s.every(l=>(l.lastIndex=0,l.test(t))))}var z=Object.freeze({__proto__:null,forEach:Ke,len:Qe,normalizeValidatorObject:Z,regex:k,req:ne,unwrap:o,unwrapNormalizedValidator:ye,unwrapValidatorResponse:he,withAsync:He,withMessage:Ze,withParams:We});k(/^[a-zA-Z]*$/);k(/^[a-zA-Z0-9]*$/);k(/^\d*(\.\d+)?$/);const Xe=/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;k(Xe);function Je(e){return typeof e=="string"&&(e=e.trim()),ne(e)}var I={$validator:Je,$message:"Value is required",$params:{type:"required"}};const et=/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;k(et);k(/(^[0-9]*$)|(^-[0-9]+$)/);k(/^[-]?\d*(\.\d+)?$/);function fe(e,s){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);s&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function q(e){for(var s=1;s<arguments.length;s++){var r=arguments[s]!=null?arguments[s]:{};s%2?fe(Object(r),!0).forEach(function(t){tt(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):fe(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function tt(e,s,r){return s in e?Object.defineProperty(e,s,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[s]=r,e}function pe(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return Object.keys(e).reduce((r,t)=>(s.includes(t)||(r[t]=o(e[t])),r),{})}function G(e){return typeof e=="function"}function rt(e){return Ne(e)||Me(e)}function _e(e,s,r){let t=e;const l=s.split(".");for(let d=0;d<l.length;d++){if(!t[l[d]])return r;t=t[l[d]]}return t}function J(e,s,r){return _(()=>e.some(t=>_e(s,t,{[r]:!1})[r]))}function $e(e,s,r){return _(()=>e.reduce((t,l)=>{const d=_e(s,l,{[r]:!1})[r]||[];return t.concat(d)},[]))}function be(e,s,r,t){return e.call(t,o(s),o(r),t)}function we(e){return e.$valid!==void 0?!e.$valid:!e}function nt(e,s,r,t,l,d,g){let{$lazy:a,$rewardEarly:p}=l,c=arguments.length>7&&arguments[7]!==void 0?arguments[7]:[],v=arguments.length>8?arguments[8]:void 0,$=arguments.length>9?arguments[9]:void 0,h=arguments.length>10?arguments[10]:void 0;const m=x(!!t.value),n=x(0);r.value=!1;const i=D([s,t].concat(c,h),()=>{if(a&&!t.value||p&&!$.value&&!r.value)return;let f;try{f=be(e,s,v,g)}catch(y){f=Promise.reject(y)}n.value++,r.value=!!n.value,m.value=!1,Promise.resolve(f).then(y=>{n.value--,r.value=!!n.value,d.value=y,m.value=we(y)}).catch(y=>{n.value--,r.value=!!n.value,d.value=y,m.value=!0})},{immediate:!0,deep:typeof s=="object"});return{$invalid:m,$unwatch:i}}function st(e,s,r,t,l,d,g,a){let{$lazy:p,$rewardEarly:c}=t;const v=()=>({}),$=_(()=>{if(p&&!r.value||c&&!a.value)return!1;let h=!0;try{const m=be(e,s,g,d);l.value=m,h=we(m)}catch(m){l.value=m}return h});return{$unwatch:v,$invalid:$}}function at(e,s,r,t,l,d,g,a,p,c,v){const $=x(!1),h=e.$params||{},m=x(null);let n,i;e.$async?{$invalid:n,$unwatch:i}=nt(e.$validator,s,$,r,t,m,l,e.$watchTargets,p,c,v):{$invalid:n,$unwatch:i}=st(e.$validator,s,r,t,m,l,p,c);const f=e.$message;return{$message:G(f)?_(()=>f(pe({$pending:$,$invalid:n,$params:pe(h),$model:s,$response:m,$validator:d,$propertyPath:a,$property:g}))):f||"",$params:h,$pending:$,$invalid:n,$response:m,$unwatch:i}}function ot(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const s=o(e),r=Object.keys(s),t={},l={},d={};let g=null;return r.forEach(a=>{const p=s[a];switch(!0){case G(p.$validator):t[a]=p;break;case G(p):t[a]={$validator:p};break;case a==="$validationGroups":g=p;break;case a.startsWith("$"):d[a]=p;break;default:l[a]=p}}),{rules:t,nestedValidators:l,config:d,validationGroups:g}}const it="__root";function lt(e,s,r,t,l,d,g,a,p){const c=Object.keys(e),v=t.get(l,e),$=x(!1),h=x(!1),m=x(0);if(v){if(!v.$partial)return v;v.$unwatch(),$.value=v.$dirty.value}const n={$dirty:$,$path:l,$touch:()=>{$.value||($.value=!0)},$reset:()=>{$.value&&($.value=!1)},$commit:()=>{}};return c.length?(c.forEach(i=>{n[i]=at(e[i],s,n.$dirty,d,g,i,r,l,p,h,m)}),n.$externalResults=_(()=>a.value?[].concat(a.value).map((i,f)=>({$propertyPath:l,$property:r,$validator:"$externalResults",$uid:`${l}-externalResult-${f}`,$message:i,$params:{},$response:null,$pending:!1})):[]),n.$invalid=_(()=>{const i=c.some(f=>o(n[f].$invalid));return h.value=i,!!n.$externalResults.value.length||i}),n.$pending=_(()=>c.some(i=>o(n[i].$pending))),n.$error=_(()=>n.$dirty.value?n.$pending.value||n.$invalid.value:!1),n.$silentErrors=_(()=>c.filter(i=>o(n[i].$invalid)).map(i=>{const f=n[i];return W({$propertyPath:l,$property:r,$validator:i,$uid:`${l}-${i}`,$message:f.$message,$params:f.$params,$response:f.$response,$pending:f.$pending})}).concat(n.$externalResults.value)),n.$errors=_(()=>n.$dirty.value?n.$silentErrors.value:[]),n.$unwatch=()=>c.forEach(i=>{n[i].$unwatch()}),n.$commit=()=>{h.value=!0,m.value=Date.now()},t.set(l,e,n),n):(v&&t.set(l,e,n),n)}function ct(e,s,r,t,l,d,g){const a=Object.keys(e);return a.length?a.reduce((p,c)=>(p[c]=re({validations:e[c],state:s,key:c,parentKey:r,resultsCache:t,globalConfig:l,instance:d,externalResults:g}),p),{}):{}}function ut(e,s,r){const t=_(()=>[s,r].filter(n=>n).reduce((n,i)=>n.concat(Object.values(o(i))),[])),l=_({get(){return e.$dirty.value||(t.value.length?t.value.every(n=>n.$dirty):!1)},set(n){e.$dirty.value=n}}),d=_(()=>{const n=o(e.$silentErrors)||[],i=t.value.filter(f=>(o(f).$silentErrors||[]).length).reduce((f,y)=>f.concat(...y.$silentErrors),[]);return n.concat(i)}),g=_(()=>{const n=o(e.$errors)||[],i=t.value.filter(f=>(o(f).$errors||[]).length).reduce((f,y)=>f.concat(...y.$errors),[]);return n.concat(i)}),a=_(()=>t.value.some(n=>n.$invalid)||o(e.$invalid)||!1),p=_(()=>t.value.some(n=>o(n.$pending))||o(e.$pending)||!1),c=_(()=>t.value.some(n=>n.$dirty)||t.value.some(n=>n.$anyDirty)||l.value),v=_(()=>l.value?p.value||a.value:!1),$=()=>{e.$touch(),t.value.forEach(n=>{n.$touch()})},h=()=>{e.$commit(),t.value.forEach(n=>{n.$commit()})},m=()=>{e.$reset(),t.value.forEach(n=>{n.$reset()})};return t.value.length&&t.value.every(n=>n.$dirty)&&$(),{$dirty:l,$errors:g,$invalid:a,$anyDirty:c,$error:v,$pending:p,$touch:$,$reset:m,$silentErrors:d,$commit:h}}function re(e){let{validations:s,state:r,key:t,parentKey:l,childResults:d,resultsCache:g,globalConfig:a={},instance:p,externalResults:c}=e;const v=l?`${l}.${t}`:t,{rules:$,nestedValidators:h,config:m,validationGroups:n}=ot(s),i=q(q({},a),m),f=t?_(()=>{const b=o(r);return b?o(b[t]):void 0}):r,y=q({},o(c)||{}),M=_(()=>{const b=o(c);return t?b?o(b[t]):void 0:b}),H=lt($,f,t,g,v,i,p,M,r),P=ct(h,f,v,g,i,p,M),L={};n&&Object.entries(n).forEach(b=>{let[N,A]=b;L[N]={$invalid:J(A,P,"$invalid"),$error:J(A,P,"$error"),$pending:J(A,P,"$pending"),$errors:$e(A,P,"$errors"),$silentErrors:$e(A,P,"$silentErrors")}});const{$dirty:C,$errors:U,$invalid:K,$anyDirty:xe,$error:Re,$pending:Q,$touch:X,$reset:Pe,$silentErrors:je,$commit:se}=ut(H,P,d),Ee=t?_({get:()=>o(f),set:b=>{C.value=!0;const N=o(r),A=o(c);A&&(A[t]=y[t]),ee(N[t])?N[t].value=b:N[t]=b}}):null;t&&i.$autoDirty&&D(f,()=>{C.value||X();const b=o(c);b&&(b[t]=y[t])},{flush:"sync"});async function Ve(){return X(),i.$rewardEarly&&(se(),await ie()),await ie(),new Promise(b=>{if(!Q.value)return b(!K.value);const N=D(Q,()=>{b(!K.value),N()})})}function Ce(b){return(d.value||{})[b]}function Ae(){ee(c)?c.value=y:Object.keys(y).length===0?Object.keys(c).forEach(b=>{delete c[b]}):Object.assign(c,y)}return W(q(q(q({},H),{},{$model:Ee,$dirty:C,$error:Re,$errors:U,$invalid:K,$anyDirty:xe,$pending:Q,$touch:X,$reset:Pe,$path:v||it,$silentErrors:je,$validate:Ve,$commit:se},d&&{$getResultsForChild:Ce,$clearExternalResults:Ae,$validationGroups:L}),P))}class dt{constructor(){this.storage=new Map}set(s,r,t){this.storage.set(s,{rules:r,result:t})}checkRulesValidity(s,r,t){const l=Object.keys(t),d=Object.keys(r);return d.length!==l.length||!d.every(a=>l.includes(a))?!1:d.every(a=>r[a].$params?Object.keys(r[a].$params).every(p=>o(t[a].$params[p])===o(r[a].$params[p])):!0)}get(s,r){const t=this.storage.get(s);if(!t)return;const{rules:l,result:d}=t,g=this.checkRulesValidity(s,r,l),a=d.$unwatch?d.$unwatch:()=>({});return g?d:{$dirty:d.$dirty,$partial:!0,$unwatch:a}}}const Y={COLLECT_ALL:!0,COLLECT_NONE:!1},me=Symbol("vuelidate#injectChildResults"),ve=Symbol("vuelidate#removeChildResults");function ft(e){let{$scope:s,instance:r}=e;const t={},l=x([]),d=_(()=>l.value.reduce((v,$)=>(v[$]=o(t[$]),v),{}));function g(v,$){let{$registerAs:h,$scope:m,$stopPropagation:n}=$;n||s===Y.COLLECT_NONE||m===Y.COLLECT_NONE||s!==Y.COLLECT_ALL&&s!==m||(t[h]=v,l.value.push(h))}r.__vuelidateInjectInstances=[].concat(r.__vuelidateInjectInstances||[],g);function a(v){l.value=l.value.filter($=>$!==v),delete t[v]}r.__vuelidateRemoveInstances=[].concat(r.__vuelidateRemoveInstances||[],a);const p=ae(me,[]);oe(me,r.__vuelidateInjectInstances);const c=ae(ve,[]);return oe(ve,r.__vuelidateRemoveInstances),{childResults:d,sendValidationResultsToParent:p,removeValidationResultsFromParent:c}}function Oe(e){return new Proxy(e,{get(s,r){return typeof s[r]=="object"?Oe(s[r]):_(()=>s[r])}})}let ge=0;function pt(e,s){var r;let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};arguments.length===1&&(t=e,e=void 0,s=void 0);let{$registerAs:l,$scope:d=Y.COLLECT_ALL,$stopPropagation:g,$externalResults:a,currentVueInstance:p}=t;const c=p||((r=qe())===null||r===void 0?void 0:r.proxy),v=c?c.$options:{};l||(ge+=1,l=`_vuelidate_${ge}`);const $=x({}),h=new dt,{childResults:m,sendValidationResultsToParent:n,removeValidationResultsFromParent:i}=c?ft({$scope:d,instance:c}):{childResults:x({})};if(!e&&v.validations){const f=v.validations;s=x({}),ke(()=>{s.value=c,D(()=>G(f)?f.call(s.value,new Oe(s.value)):f,y=>{$.value=re({validations:y,state:s,childResults:m,resultsCache:h,globalConfig:t,instance:c,externalResults:a||c.vuelidateExternalResults})},{immediate:!0})}),t=v.validationsConfig||t}else{const f=ee(e)||rt(e)?e:W(e||{});D(f,y=>{$.value=re({validations:y,state:s,childResults:m,resultsCache:h,globalConfig:t,instance:c??{},externalResults:a})},{immediate:!0})}return c&&(n.forEach(f=>f($,{$registerAs:l,$scope:d,$stopPropagation:g})),Le(()=>i.forEach(f=>f(l)))),_(()=>q(q({},o($.value)),m.value))}const R=e=>(Ue("data-v-12723460"),e=e(),Ye(),e),$t={class:"section"},mt=R(()=>u("div",{class:"bg is-hidden-mobile"},null,-1)),vt={class:"container"},gt=R(()=>u("h1",{class:"page-title"},"Register",-1)),ht={class:"grids is-2-desktop is-1-mobile margin-top-30 gap-30-desktop"},yt={class:"left"},_t={class:"field"},bt=R(()=>u("label",{for:""},[V("Name "),u("span",null,"*")],-1)),wt={class:"control"},Ot={key:0,class:"err"},xt={class:"field"},Rt=R(()=>u("label",{for:""},[V("Year Of Birth: "),u("span",null,"*")],-1)),Pt={class:"control"},jt={key:0,class:"err"},Et={class:"field"},Vt=R(()=>u("label",{for:""},[V("Mobile number (020) "),u("span",null,"*")],-1)),Ct={class:"control"},At={key:0,class:"err"},St={class:"field"},zt=R(()=>u("label",{for:""},[V("Email "),u("span",null,"*")],-1)),It={class:"control"},qt={key:0,class:"err"},kt={class:"field"},Lt=R(()=>u("label",{for:""},[V("Province "),u("span",null,"*")],-1)),Nt={class:"control"},Mt={class:"select"},Tt=R(()=>u("option",{value:"",disabled:""},"Select dropdown",-1)),Dt=["value"],Ft={key:0,class:"err"},Ut={class:"field"},Yt=R(()=>u("label",{for:""},[V("Occupation "),u("span",null,"*")],-1)),Bt={class:"control"},Gt={class:"select"},Wt=R(()=>u("option",{value:"",disabled:""},"Select dropdown",-1)),Zt=["value"],Ht={key:0,class:"err"},Kt={class:"field"},Qt=R(()=>u("label",{for:""},[V("Password "),u("span",null,"*")],-1)),Xt={class:"control"},Jt={key:0,class:"err"},er={class:"field"},tr=R(()=>u("label",{for:""},[V("Confirm Password "),u("span",null,"*")],-1)),rr={class:"control"},nr={key:0,class:"err"},sr=R(()=>u("br",null,null,-1)),ar={key:0,class:"err2"},or={key:1,class:"response"},ir={class:"note"},lr={class:"right"},cr=Te({__name:"register",setup(e){const s=Se(),r=ze().$axios,t=x(),l=x(),d=x(""),g=x(""),a=W({occupation:"",province:"",name:"",birtYear:"",mobile:"",email:"",password:"",confirmPassword:""}),p={occupation:{required:z.withMessage("Occupation cannot be empty",I)},province:{required:z.withMessage("Province cannot be empty",I)},name:{required:z.withMessage("Name cannot be empty",I)},birtYear:{required:z.withMessage("Birt Year cannot be empty",I)},mobile:{required:z.withMessage("Mobile cannot be empty",I)},password:{required:z.withMessage("Password cannot be empty",I)},confirmPassword:{required:z.withMessage("Confirm password cannot be empty",I)},email:{required:z.withMessage("email cannot be empty and must be email",I)}},c=pt(p,a),v=async()=>{const m=await r.post("get-reuses-list/Occupation");t.value=m.data.info},$=async()=>{const m=await r.post("get-reuses-list/Province");l.value=m.data.info},h=async()=>{await c.value.$validate()&&await r.post("user-register",{name:a.name,dob:a.birtYear,mobile:a.mobile,email:a.email,password:a.password,confirmPassword:a.confirmPassword,provinceId:a.province,occupationId:a.occupation}).then(n=>{n.status===201&&(g.value="Register succeed",d.value="",setTimeout(()=>{a.occupation="",a.province="",a.name="",a.birtYear="",a.mobile="",a.email="",a.password="",a.confirmPassword="",g.value=""},1500))}).catch(n=>{d.value=n.response.data.message})};return v(),$(),(m,n)=>(w(),O("section",$t,[mt,u("div",vt,[gt,u("div",ht,[u("div",yt,[u("form",{action:"",class:"grids is-2-desktop is-1-mobile gap-20-desktop",onSubmit:n[8]||(n[8]=De(i=>h(),["prevent"]))},[u("div",_t,[bt,u("div",wt,[S(u("input",{type:"text","onUpdate:modelValue":n[0]||(n[0]=i=>o(a).name=i),class:"input",placeholder:"Name"},null,512),[[T,o(a).name]]),o(c).name.$error?(w(),O("div",Ot,j(o(c).name.required.$message),1)):E("",!0)])]),u("div",xt,[Rt,u("div",Pt,[S(u("input",{type:"number","onUpdate:modelValue":n[1]||(n[1]=i=>o(a).birtYear=i),class:"input",placeholder:"1999"},null,512),[[T,o(a).birtYear]]),o(c).birtYear.$error?(w(),O("div",jt,j(o(c).birtYear.required.$message),1)):E("",!0)])]),u("div",Et,[Vt,u("div",Ct,[S(u("input",{type:"number","onUpdate:modelValue":n[2]||(n[2]=i=>o(a).mobile=i),class:"input",placeholder:"12345678"},null,512),[[T,o(a).mobile]]),o(c).mobile.$error?(w(),O("div",At,j(o(c).mobile.required.$message),1)):E("",!0)])]),u("div",St,[zt,u("div",It,[S(u("input",{type:"text","onUpdate:modelValue":n[3]||(n[3]=i=>o(a).email=i),class:"input",placeholder:"email@gmail.com"},null,512),[[T,o(a).email]]),o(c).email.$error?(w(),O("div",qt,j(o(c).email.required.$message),1)):E("",!0)])]),u("div",kt,[Lt,u("div",Nt,[u("div",Mt,[S(u("select",{"onUpdate:modelValue":n[4]||(n[4]=i=>o(a).province=i)},[Tt,(w(!0),O(ce,null,ue(o(l),(i,f)=>(w(),O("option",{key:f,value:i._id},j(i.name),9,Dt))),128))],512),[[le,o(a).province]]),o(c).province.$error?(w(),O("div",Ft,j(o(c).province.required.$message),1)):E("",!0)])])]),u("div",Ut,[Yt,u("div",Bt,[u("div",Gt,[S(u("select",{"onUpdate:modelValue":n[5]||(n[5]=i=>o(a).occupation=i)},[Wt,(w(!0),O(ce,null,ue(o(t),(i,f)=>(w(),O("option",{key:f,value:i._id},j(i.name),9,Zt))),128))],512),[[le,o(a).occupation]]),o(c).occupation.$error?(w(),O("div",Ht,j(o(c).occupation.required.$message),1)):E("",!0)])])]),u("div",Kt,[Qt,u("div",Xt,[S(u("input",{type:"text","onUpdate:modelValue":n[6]||(n[6]=i=>o(a).password=i),class:"input",placeholder:"password"},null,512),[[T,o(a).password]]),o(c).password.$error?(w(),O("div",Jt,j(o(c).password.required.$message),1)):E("",!0)])]),u("div",er,[tr,u("div",rr,[S(u("input",{type:"text","onUpdate:modelValue":n[7]||(n[7]=i=>o(a).confirmPassword=i),class:"input",placeholder:"Re-type password again"},null,512),[[T,o(a).confirmPassword]]),o(c).confirmPassword.$error?(w(),O("div",nr,j(o(c).confirmPassword.required.$message),1)):E("",!0)])])],32),sr,o(d)?(w(),O("p",ar,j(o(d)),1)):E("",!0),o(g)?(w(),O("p",or,j(o(g)),1)):E("",!0),u("button",{type:"submit",class:"button main margin-top-20 margin-bottom-10",onClick:n[9]||(n[9]=i=>h())}," Regsiter "),u("p",ir,[V(" Already have an account? "),u("a",{onClick:n[10]||(n[10]=i=>o(s).push({path:"login"}))},"Login")])]),u("div",lr,[Fe(Be)])])])]))}});const pr=Ie(cr,[["__scopeId","data-v-12723460"]]);export{pr as default};
