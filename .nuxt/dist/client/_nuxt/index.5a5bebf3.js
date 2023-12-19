import{c as L,d as ot,_ as x,a as I,b as z}from"./entry.4b7e5ca5.js";import{j as S,a as c,b as R,D as u,P as p,Q as t,u as e,R as v,V as tt,W as et,U as T,F as C,X as E,Y as ct,a9 as it,A as m,a5 as w,aa as k}from"./swiper-vue.9585ef87.js";import{u as st}from"./cookie.bdaa00b5.js";import{_ as lt}from"./team.2b4e9449.js";const P=i=>(tt("data-v-f5e4090c"),i=i(),et(),i),dt={class:"section"},_t={class:"container"},rt={class:"grids gap-20-desktop is-5-desktop is-1-mobile"},ut={class:"left span-2-desktop"},pt={class:"intro"},ft=P(()=>t("h1",null,"THE BIZ HUB",-1)),ht=P(()=>t("h3",null,[T(" Partner for success "),t("br",{class:"is-hidden-mobile"}),T(" in business and "),t("br",{class:"is-hidden-mobile"}),T(" entrepreneurship ")],-1)),vt=P(()=>t("div",{class:"right span-3-desktop"},[t("div",{class:"video"},[t("iframe",{src:"https://www.youtube.com/embed/HEg8LjkZOaQ?si=dULR1XN-DrTBTyXD",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""})])],-1)),mt=S({__name:"intro",setup(i){const s=L();ot();const l=c(),h=st("lang");return R(h,r=>{l.value},{deep:!0,immediate:!0}),(r,o)=>(u(),p("section",dt,[t("div",_t,[t("div",rt,[t("div",ut,[t("div",pt,[ft,ht,t("button",{class:"main margin-top-20",onClick:o[0]||(o[0]=d=>e(s).push({path:"/category",query:{is:"Update"}}))},v(r.$t("updates")),1)])]),vt])])]))}});const gt=x(mt,[["__scopeId","data-v-f5e4090c"]]),$t={class:"section"},yt={class:"container"},bt={class:"section-header"},wt={class:"section-title"},kt={class:"section-body"},It={class:"grids is-3-desktop is-1-mobile gap-10-tablet gap-10-tablet gap-20-desktop gap-10-mobile"},St={class:"card"},xt={class:"card-icon"},Tt=["src"],Lt={class:"card-title"},Ct=S({__name:"our-services",setup(i){const s=I().$axios,l=I().$imageURL,{locale:h}=z(),r=c(),o=async()=>{const d=h.value?h.value:"en",g=await s.post(`get-our-service-api?lang=${d}`);r.value=g.data.info};return R(()=>h.value,d=>{o()},{immediate:!0,deep:!0}),o(),(d,g)=>(u(),p("section",$t,[t("div",yt,[t("div",bt,[t("div",wt,v(d.$t("products")),1)]),t("div",kt,[t("ul",It,[(u(!0),p(C,null,E(e(r),(f,$)=>(u(),p("li",{key:$},[t("div",St,[t("div",xt,[t("img",{src:e(l)+f.image},null,8,Tt)]),t("h3",Lt,v(f.key),1),t("p",null,v(f.desc),1)])]))),128))])])])]))}});const Et=x(Ct,[["__scopeId","data-v-65df56cd"]]),at=i=>(tt("data-v-8e8cbcf6"),i=i(),et(),i),At={class:"container"},Bt={class:"section-title margin-bottom-10"},Nt={class:"grids is-2-desktop gap-20-desktop is-1-mobile"},Rt={class:"left"},Ut={class:"tabs"},zt=["onClick"],Pt=at(()=>t("i",{class:"fa-light fa-angle-down"},null,-1)),Wt=at(()=>t("i",{class:"fa-light fa-angle-right"},null,-1)),Dt=ct('<div class="right" data-v-8e8cbcf6><div class="image" data-v-8e8cbcf6><a target="_blank" href="https://www.youtube.com/watch?v=HEg8LjkZOaQ" data-v-8e8cbcf6><i class="fa-solid fa-play" data-v-8e8cbcf6></i><img src="'+lt+'" data-v-8e8cbcf6></a></div></div>',1),Ht=S({__name:"who-are-we",setup(i){const s=L();st("lang");const l=c("WHO ARE WE?"),h=I().$axios,r=c([]),{locale:o}=z(),d=async()=>{const f=o.value?o.value:"en",$=await h.post(`get-intro-api?lang=${f}`);r.value=$.data.info,l.value=$.data.info[0].key},g=async f=>{l.value=f};return R(()=>o.value,f=>{d()},{immediate:!0,deep:!0}),d(),(f,$)=>(u(),p("section",null,[t("div",At,[t("h1",Bt,v(f.$t("who_are_we")),1),t("div",Nt,[t("div",Rt,[t("ul",Ut,[(u(!0),p(C,null,E(e(r),(b,A)=>(u(),p("li",{class:it({open:e(l)===b.key}),onClick:U=>g(b.key),key:A},[t("h1",null,[T(v(b.key)+" ",1),Pt]),t("p",null,v(b.desc),1)],10,zt))),128)),t("li",null,[t("h1",{onClick:$[0]||($[0]=b=>e(s).push({path:"/about-us"}))},[T(v(f.$t("more_about_us")),1),Wt])])])]),Dt])])]))}});const Ot=x(Ht,[["__scopeId","data-v-8e8cbcf6"]]),Vt={class:"container"},jt={class:"section-title"},Qt=["onClick"],Xt={class:"card-image"},Zt=["src"],Ft={class:"card-content"},Mt=S({__name:"story",props:["info","title"],setup(i){const s=L(),l=I().$imageURL;return(h,r)=>(u(),p("section",null,[t("div",Vt,[t("h1",jt,v(i.title),1),t("ul",null,[(u(!0),p(C,null,E(i.info,(o,d)=>(u(),p("li",{key:d},[t("div",{class:"card dark",onClick:g=>e(s).push(`/blog-detail/${o._id}`)},[t("div",Xt,[t("img",{src:e(l)+o.coverPage,alt:""},null,8,Zt)]),t("div",Ft,[t("h3",null,v(o.title),1)])],8,Qt)]))),128))])])]))}});const qt=x(Mt,[["__scopeId","data-v-dd508f96"]]),Yt={class:"container"},Gt={class:"section-title"},Jt=["onClick"],Kt={class:"card-image fullheight"},te=["src"],ee={class:"card-content"},se={class:"card-title"},ae=S({__name:"column-layout",props:["title","info"],setup(i){const s=I().$imageURL,l=L();return(h,r)=>(u(),p("section",null,[t("div",Yt,[t("h1",Gt,v(i.title),1),t("ul",null,[(u(!0),p(C,null,E(i.info,(o,d)=>(u(),p("li",{key:d},[t("div",{class:"card",onClick:g=>e(l).push(`/blog-detail/${o._id}`)},[t("div",Kt,[t("img",{src:e(s)+o.coverPage,alt:""},null,8,te)]),t("div",ee,[t("h3",se,v(o.title),1)])],8,Jt)]))),128))])])]))}});const B=x(ae,[["__scopeId","data-v-90b035e7"]]),ne={class:"container"},oe={class:"section-title"},ce=["onClick"],ie={class:"card-image"},le=["src"],de={class:"card-content"},_e={class:"card-title"},re=S({__name:"grids-layout",props:["title","info"],setup(i){const s=I().$imageURL,l=L();return(h,r)=>(u(),p("section",null,[t("div",ne,[t("h1",oe,v(i.title),1),t("ul",null,[(u(!0),p(C,null,E(i.info,(o,d)=>(u(),p("li",{key:d},[t("div",{class:"card",onClick:g=>e(l).push(`/blog-detail/${o._id}`)},[t("div",ie,[t("img",{src:e(s)+o.coverPage,alt:""},null,8,le)]),t("div",de,[t("h3",_e,v(o.title),1)])],8,ce)]))),128))])])]))}});const N=x(re,[["__scopeId","data-v-1c392809"]]),ve=S({__name:"index",setup(i){const s=I().$axios,l=c([]),h=c([]),r=c([]),o=c([]),d=c([]),g=c([]),f=c([]),$=c([]),b=c([]),A=c(""),U=c(""),W=c(""),D=c("");c("");const H=c(""),O=c(""),V=c(""),j=c(""),Q=c(""),{locale:nt}=z(),y=c(),X=async()=>{const a="654d868d4040f0af2207e5eb";await s.post(`sme-articles/${a}`).then(n=>{n.status===200&&(d.value=n.data.info)});const _=await s.post(`get-section-home-page?_id=${a}&lang=${y.value}`);W.value=_.data.info.name},Z=async()=>{const a="651a4ca8c2d5c94d6cc3da9e";await s.post(`reuse-articles/${a}`).then(n=>{n.status===200&&(r.value=n.data.info)});const _=await s.post(`get-section-home-page?_id=${a}&lang=${y.value}`);V.value=_.data.info.name},F=async()=>{const a="651a4cebc2d5c94d6cc3daa7";await s.post(`sme-articles/${a}`).then(n=>{n.status===200&&(o.value=n.data.info)});const _=await s.post(`get-section-home-page?_id=${a}&lang=${y.value}`);D.value=_.data.info.name},M=async()=>{const a="651a4d1ac2d5c94d6cc3dac3";await s.post(`reuse-articles/${a}`).then(n=>{n.status===200&&(g.value=n.data.info)});const _=await s.post(`get-section-home-page?_id=${a}&lang=${y.value}`);H.value=_.data.info.name},q=async()=>{const a="654d86c14040f0af2207e5f4";await s.post(`reuse-articles/${a}`).then(n=>{n.status===200&&($.value=n.data.info)});const _=await s.post(`get-section-home-page?_id=${a}&lang=${y.value}`);O.value=_.data.info.name},Y=async()=>{const a="654d86dc4040f0af2207e5fd";await s.post(`reuse-articles/${a}`).then(n=>{n.status===200&&(f.value=n.data.info)});const _=await s.post(`get-section-home-page?_id=${a}&lang=${y.value}`);j.value=_.data.info.name},G=async()=>{const a="651a4d06c2d5c94d6cc3daba";await s.post(`reuse-articles/${a}`).then(n=>{n.status===200&&(l.value=n.data.info)});const _=await s.post(`get-section-home-page?_id=${a}&lang=${y.value}`);A.value=_.data.info.name},J=async()=>{const a="654d866a4040f0af2207e5db";await s.post(`reuse-articles/${a}`).then(n=>{n.status===200&&(h.value=n.data.info)});const _=await s.post(`get-section-home-page?_id=${a}&lang=${y.value}`);U.value=_.data.info.name},K=async()=>{const a="657aa122bc4e6513beed5630";await s.post(`reuse-articles/${a}`).then(n=>{n.status===200&&(b.value=n.data.info)});const _=await s.post(`get-section-home-page?_id=${a}&lang=${y.value}`);Q.value=_.data.info.name};return G(),J(),X(),Z(),F(),M(),q(),Y(),K(),R(()=>nt.value,a=>{y.value=a,G(),J(),X(),Z(),F(),M(),q(),Y(),K()},{immediate:!0,deep:!0}),(a,_)=>(u(),p("div",null,[m(gt),m(Et),m(Ot),w(m(N,{title:e(A),info:e(l)},null,8,["title","info"]),[[k,e(l).length]]),w(m(N,{title:e(U),info:e(h)},null,8,["title","info"]),[[k,e(h).length]]),w(m(qt,{info:e(r),title:e(V)},null,8,["info","title"]),[[k,e(r).length]]),w(m(B,{title:e(H),info:e(g)},null,8,["title","info"]),[[k,e(g).length]]),w(m(B,{title:e(O),info:e($)},null,8,["title","info"]),[[k,e($).length]]),w(m(N,{title:e(W),info:e(d)},null,8,["title","info"]),[[k,e(d).length]]),w(m(B,{title:e(j),info:e(f)},null,8,["title","info"]),[[k,e(f).length]]),w(m(N,{title:e(D),info:e(o)},null,8,["title","info"]),[[k,e(o).length]]),w(m(B,{title:e(Q),info:e(b)},null,8,["title","info"]),[[k,e(b).length]])]))}});export{ve as default};
