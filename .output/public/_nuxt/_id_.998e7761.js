import{a as v,H as h,r as t,N as y,v as x,o as I,b as $,i as s,m as N,t as S,u as r,e as w,p as C,h as B,j as V}from"./entry.ec7abcfb.js";import{C as k}from"./card-list.1b66cdcb.js";const D=e=>(C("data-v-fa9881ae"),e=e(),B(),e),E={class:"container"},P={class:"tag-title"},T=D(()=>s("span",null,"#",-1)),b={class:"search-result"},j=v({__name:"[id]",setup(e){const c=h().$axios,n=t(),i=t(),d=y(),_=t(1),p=t(10),o=t(""),l=t(""),u=t(0),f=t(),g=async()=>{await c.post(`get-articles?page=${_.value}&perPage=${p.value}&tagId=${o.value}&categoryId=${l.value}`).then(a=>{a.status===200&&(i.value=a.data.info,u.value=a.data.total)}).catch(a=>{a&&(f.value="Data empty")})},m=async()=>{const a=await c.post(`edit-reuse?_id=${o.value}&type=Tags`);n.value=a.data.info.name};return x(d,a=>{a.params.id&&(o.value=a.params.id.toString(),m(),g())},{immediate:!0,deep:!0}),(a,A)=>(I(),$("section",null,[s("div",E,[s("h1",P,[T,N(" "+S(r(n)),1)]),s("div",b,[w(k,{info:r(i)},null,8,["info"])])])]))}});const L=V(j,[["__scopeId","data-v-fa9881ae"]]);export{L as default};
