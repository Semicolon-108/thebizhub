import{a as I,q as m,s as S,r as s,o,b as n,j as t,u as a,v as b,t as l,F as y,f as k,e as N,p as T,i as w,k as B}from"./entry.d86015b9.js";import C from"./related.dd091766.js";const x=c=>(T("data-v-bbc33651"),c=c(),w(),c),D={id:"blog-detail"},V={class:"has-bg"},$={class:"container"},F=["src"],H={class:"container content"},M={class:"blog-title"},P={class:"blog-info"},U=x(()=>t("li",null,[t("p",null,[t("i",{class:"fa-brands fa-facebook"}),t("i",{class:"fa-brands fa-whatsapp"}),t("i",{class:"fa-light fa-link"})])],-1)),j=["innerHTML"],q={key:0,class:"blog-footer"},z=x(()=>t("h3",{class:"section-title"},"RELATED ARTICLES",-1)),G=I({__name:"[id]",setup(c){const L=m().$imageURL,R=m().$axios,A=S(),E=s(),p=s(),i=s(),f=s(),h=s(),g=s(),v=s(),d=s([]);return(async()=>{const r=A.params.id;r&&await R.post(`articles-detail/${r}`).then(e=>{e.status===200&&(p.value=e.data.info.title,i.value=e.data.info.coverPage,f.value=e.data.info.tag,h.value=e.data.info.category,g.value=e.data.info.details,v.value=e.data.info.createdAt,d.value=e.data.isRelated)}).catch(e=>{e&&(E.value="Data empty")})})(),(r,e)=>(o(),n("div",D,[t("section",V,[t("div",$,[a(i)?(o(),n("img",{key:0,src:a(L)+a(i),alt:""},null,8,F)):b("",!0)])]),t("div",H,[t("h1",M,l(a(p)),1),t("ul",P,[U,t("li",null,[t("p",null,[(o(!0),n(y,null,k(a(f),(_,u)=>(o(),n("span",{key:u},l(_.name),1))),128)),(o(!0),n(y,null,k(a(h),(_,u)=>(o(),n("span",{key:u},l(_.name),1))),128))])]),t("li",null,l(a(v)),1)]),t("div",{class:"blog-detail",innerHTML:a(g)},null,8,j),a(d).length?(o(),n("div",q,[z,N(C,{relate:a(d)},null,8,["relate"])])):b("",!0)])]))}});const Q=B(G,[["__scopeId","data-v-bbc33651"]]);export{Q as default};