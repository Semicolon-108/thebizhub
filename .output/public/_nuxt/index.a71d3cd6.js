import{b as A,c as B,_ as D}from"./entry.c0d1118a.js";import{C as E}from"./card-list.3bf0d572.js";import{j as F,a,a8 as g,b as P,D as b,P as k,Q as m,R as q,u as y,A as L}from"./swiper-vue.6b947493.js";const R={class:"container"},S={class:"page-title"},V=F({__name:"index",async setup(j){let n,c;const _=A().$axios,l=B(),h=a(),u=a(),r=a(),x=a(1),C=a(1e4),w=a(""),s=a(""),$=a(0),I=a(),t=a(""),N=async()=>{const e=await _.post("get-reuses-list/Category"),o=e.data.info.filter(i=>!i.groupStatus);h.value=o,u.value=e.data.info},p=async()=>{r.value=[],await _.post(`get-articles?page=${x.value}&perPage=${C.value}&tagId=${w.value}&categoryId=${s.value}&search=${t.value}`).then(e=>{e.status===200&&(r.value=e.data.info,$.value=e.data.total)}).catch(e=>{e&&(I.value="Data empty")})},f=()=>{const e=l.query.is,o="Update";if(e===o)t.value=o,s.value="";else{t.value="";const i=u.value.find(d=>d.name===e),v=u.value.find(d=>d.laoName===e);i?(s.value=i._id,t.value=""):v?(s.value=v._id,t.value=""):(s.value="",t.value="")}};return[n,c]=g(()=>N()),await n,c(),f(),[n,c]=g(()=>p()),await n,c(),P(()=>l.path,()=>{f(),p()},{deep:!0}),(e,o)=>(b(),k("section",null,[m("div",R,[m("h1",S,q(y(l).query.is),1),L(E,{info:y(r)},null,8,["info"])])]))}});const G=D(V,[["__scopeId","data-v-98459e75"]]);export{G as default};