import{a as R,q as g,s as L,r as s,o as d,b as _,j as t,u as e,v,t as n,e as A,p as E,i as I,k as S}from"./entry.cd90e034.js";import N from"./related.4f3fd6c9.js";const m=o=>(E("data-v-83f1f8e4"),o=o(),I(),o),T={id:"blog-detail"},w={class:"has-bg"},B={class:"container"},C=["src"],D={class:"container content"},V={class:"blog-title"},$={class:"blog-info"},H=m(()=>t("li",null,[t("p",null,[t("i",{class:"fa-brands fa-facebook"}),t("i",{class:"fa-brands fa-whatsapp"}),t("i",{class:"fa-light fa-link"})])],-1)),M=["innerHTML"],P={key:0,class:"blog-footer"},U=m(()=>t("h3",{class:"section-title"},"RELATED ARTICLES",-1)),j=R({__name:"[id]",setup(o){const b=g().$imageURL,y=g().$axios,k=L(),x=s(),r=s(),c=s(),u=s(),f=s(),p=s(),h=s(),l=s([]);return(async()=>{const i=k.params.id;i&&await y.post(`articles-detail/${i}`).then(a=>{a.status===200&&(r.value=a.data.info.title,c.value=a.data.info.coverPage,u.value=a.data.info.tag,f.value=a.data.info.category,p.value=a.data.info.details,h.value=a.data.info.createdAt,l.value=a.data.isRelated)}).catch(a=>{a&&(x.value="Data empty")})})(),(i,a)=>(d(),_("div",T,[t("section",w,[t("div",B,[e(c)?(d(),_("img",{key:0,src:e(b)+e(c),alt:""},null,8,C)):v("",!0)])]),t("div",D,[t("h1",V,n(e(r)),1),t("ul",$,[H,t("li",null,[t("p",null,[t("span",null,n(e(u)),1),t("span",null,n(e(f)),1)])]),t("li",null,n(e(h)),1)]),t("div",{class:"blog-detail",innerHTML:e(p)},null,8,M),e(l).length?(d(),_("div",P,[U,A(N,{relate:e(l)},null,8,["relate"])])):v("",!0)])]))}});const G=S(j,[["__scopeId","data-v-83f1f8e4"]]);export{G as default};