import{a as v,e as h,_ as y}from"./entry.900c67b2.js";import{C as x}from"./card-list.934866e6.js";import{j as I,a,b as $,L as S,X as w,Y as s,_ as C,Z as N,u as r,H as B,$ as V,a0 as k}from"./swiper-vue.9087d98d.js";const D=e=>(V("data-v-708ff6d3"),e=e(),k(),e),E={class:"container"},L={class:"tag-title"},P=D(()=>s("span",null,"#",-1)),T={class:"search-result"},b=I({__name:"[id]",setup(e){const c=v().$axios,n=a(),i=a(),d=h(),_=a(1),p=a(10),o=a(""),l=a(""),u=a(0),f=a(),g=async()=>{await c.post(`get-articles?page=${_.value}&perPage=${p.value}&tagId=${o.value}&categoryId=${l.value}`).then(t=>{t.status===200&&(i.value=t.data.info,u.value=t.data.total)}).catch(t=>{t&&(f.value="Data empty")})},m=async()=>{const t=await c.post(`edit-reuse?_id=${o.value}&type=Tags`);n.value=t.data.info.name};return $(d,t=>{t.params.id&&(o.value=t.params.id.toString(),m(),g())},{immediate:!0,deep:!0}),(t,j)=>(S(),w("section",null,[s("div",E,[s("h1",L,[P,C(" "+N(r(n)),1)]),s("div",T,[B(x,{info:r(i)},null,8,["info"])])])]))}});const R=y(b,[["__scopeId","data-v-708ff6d3"]]);export{R as default};