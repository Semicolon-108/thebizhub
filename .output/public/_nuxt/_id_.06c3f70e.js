import{a as v,d as h,_ as y}from"./entry.e2b7d354.js";import{C as x}from"./card-list.468f978e.js";import{j as I,a,b as $,D as S,P as w,Q as s,U as C,R as N,u as r,A as V,V as B,W as D}from"./swiper-vue.f59f6eb8.js";const P=e=>(B("data-v-708ff6d3"),e=e(),D(),e),k={class:"container"},A={class:"tag-title"},E=P(()=>s("span",null,"#",-1)),R={class:"search-result"},T=I({__name:"[id]",setup(e){const c=v().$axios,n=a(),i=a(),d=h(),_=a(1),p=a(10),o=a(""),l=a(""),u=a(0),f=a(),g=async()=>{await c.post(`get-articles?page=${_.value}&perPage=${p.value}&tagId=${o.value}&categoryId=${l.value}`).then(t=>{t.status===200&&(i.value=t.data.info,u.value=t.data.total)}).catch(t=>{t&&(f.value="Data empty")})},m=async()=>{const t=await c.post(`edit-reuse?_id=${o.value}&type=Tags`);n.value=t.data.info.name};return $(d,t=>{t.params.id&&(o.value=t.params.id.toString(),m(),g())},{immediate:!0,deep:!0}),(t,b)=>(S(),w("section",null,[s("div",k,[s("h1",A,[E,C(" "+N(r(n)),1)]),s("div",R,[V(x,{info:r(i)},null,8,["info"])])])]))}});const Q=y(T,[["__scopeId","data-v-708ff6d3"]]);export{Q as default};
