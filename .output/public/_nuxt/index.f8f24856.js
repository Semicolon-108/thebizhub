import{a as A,d as B,_ as D}from"./entry.4b7e5ca5.js";import{C as F}from"./card-list.d8a6ac0d.js";import{j as P,a,a8 as y,b as k,D as q,P as L,Q as h,R,u as x,A as S}from"./swiper-vue.9585ef87.js";const V={class:"container"},j={class:"page-title"},Q=P({__name:"index",async setup(U){let o,n;const _=A().$axios,l=B(),C=a(),u=a(),r=a(),b=a(1),w=a(1e4),N=a(""),s=a(""),$=a(0),E=a(),t=a(""),d=a(""),I=async()=>{const e=await _.post("get-reuses-list/Category"),c=e.data.info.filter(i=>!i.groupStatus);C.value=c,u.value=e.data.info},f=async()=>{r.value=[],await _.post(`get-articles?page=${b.value}&perPage=${w.value}&tagId=${N.value}&categoryId=${s.value}&search=${t.value}`).then(e=>{e.status===200&&(r.value=e.data.info,$.value=e.data.total)}).catch(e=>{e&&(E.value="Data empty")})},p=()=>{const e=l.query.is;d.value=l.query.is;const c="Events ",i="Update";if(e===i)t.value=i,s.value="";else if(e===c)d.value="Events & Activities",s.value="6514fbff51ce087ae07926dc",t.value="";else{t.value="";const g=u.value.find(v=>v.name===e),m=u.value.find(v=>v.laoName===e);g?(s.value=g._id,t.value=""):m?(s.value=m._id,t.value=""):(s.value="",t.value="")}};return[o,n]=y(()=>I()),await o,n(),p(),[o,n]=y(()=>f()),await o,n(),k(()=>l.path,()=>{p(),f()},{deep:!0}),(e,c)=>(q(),L("section",null,[h("div",V,[h("h1",j,R(x(d)),1),S(F,{info:x(r)},null,8,["info"])])]))}});const J=D(Q,[["__scopeId","data-v-d89b12b3"]]);export{J as default};
