import{a as g,d as v,_ as m}from"./entry.4b7e5ca5.js";import{C as y}from"./card-list.d8a6ac0d.js";import{j as x,a as t,b,D as I,P as $,Q as a,R as S,u as n,A as w,V as C,W as k}from"./swiper-vue.9585ef87.js";const B=s=>(C("data-v-8bcb80f8"),s=s(),k(),s),D={class:"container"},N={class:"page-header"},P=B(()=>a("p",null,"Search keywords:",-1)),V={class:"page-title"},q={class:"search-result"},A=x({__name:"index",setup(s){const r=g().$axios,c=t(),i=v(),d=t(1),_=t(10),l=t(""),p=t(""),u=t(0),f=t(),o=t(""),h=async()=>{await r.post(`get-articles?page=${d.value}&perPage=${_.value}&tagId=${l.value}&categoryId=${p.value}&title=${o.value}`).then(e=>{e.status===200&&(c.value=e.data.info,u.value=e.data.total)}).catch(e=>{e&&(f.value="Data empty")})};return b(i,e=>{e.query.search&&(o.value=e.query.search,h())},{immediate:!0,deep:!0}),(e,E)=>(I(),$("section",null,[a("div",D,[a("div",N,[P,a("h1",V,S(n(o)),1)]),a("div",q,[w(y,{info:n(c)},null,8,["info"])])])]))}});const L=m(A,[["__scopeId","data-v-8bcb80f8"]]);export{L as default};
