import{c as S,d as nt,_ as T,a as I,b as R}from"./entry.f9c24189.js";import{j as x,a as n,b as N,D as u,P as p,Q as t,u as e,R as h,V as Y,W as tt,U as C,F as L,X as A,A as g,G as ct,a2 as it,a9 as lt,a5 as w,aa as k}from"./swiper-vue.f59f6eb8.js";import{u as et}from"./cookie.68a8fa46.js";import{_ as dt}from"./nuxt-link.dc66d391.js";import{_ as _t}from"./team.d0711bf7.js";const U=i=>(Y("data-v-20849af3"),i=i(),tt(),i),rt={class:"section"},ut={class:"container"},pt={class:"grids gap-20-desktop is-5-desktop is-1-mobile gap-10-mobile"},ht={class:"left span-2-desktop"},ft={class:"intro"},vt=U(()=>t("h1",null,"THE BIZ HUB",-1)),mt=U(()=>t("h3",null,[C(" Partner for success "),t("br",{class:"is-hidden-mobile"}),C(" in business and "),t("br",{class:"is-hidden-mobile"}),C(" entrepreneurship ")],-1)),gt=U(()=>t("div",{class:"right span-3-desktop"},[t("div",{class:"video"},[t("iframe",{src:"https://www.youtube.com/embed/PezSDxa0vrs?si=h07PGaZbGmI8jwC2",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""})])],-1)),$t=x({__name:"intro",setup(i){const s=S();nt();const l=n(),f=et("lang");return N(f,r=>{l.value},{deep:!0,immediate:!0}),(r,c)=>(u(),p("section",rt,[t("div",ut,[t("div",pt,[t("div",ht,[t("div",ft,[vt,mt,t("button",{class:"main margin-top-20",onClick:c[0]||(c[0]=d=>e(s).push({path:"/category",query:{is:"Update"}}))},h(r.$t("updates")),1)])]),gt])])]))}});const bt=T($t,[["__scopeId","data-v-20849af3"]]),yt={class:"section"},wt={class:"container"},kt={class:"section-header"},It={class:"section-title"},xt={class:"section-body"},St={class:"grids is-3-desktop is-1-mobile gap-10-tablet gap-10-tablet gap-20-desktop gap-10-mobile"},Tt={class:"card"},Ct={class:"card-icon"},Lt=["src"],At={class:"card-title"},Et={class:"button main small"},Bt=x({__name:"our-services",setup(i){const s=I().$axios;I().$https;const l=I().$imageURL;S();const{locale:f}=R(),r=n(),c=async()=>{const d=f.value?f.value:"en",$=await s.post(`get-our-service-api?lang=${d}`);r.value=$.data.info};return N(()=>f.value,d=>{c()},{immediate:!0,deep:!0}),c(),(d,$)=>{const m=dt;return u(),p("section",yt,[t("div",wt,[t("div",kt,[t("div",It,h(d.$t("products")),1)]),t("div",xt,[t("ul",St,[(u(!0),p(L,null,A(e(r),(v,b)=>(u(),p("li",{key:b},[t("div",Tt,[t("div",Ct,[t("img",{src:e(l)+v.image},null,8,Lt)]),t("h3",At,h(v.key),1),t("p",null,h(v.desc),1),g(m,{to:{path:`/${v.link}`}},{default:ct(()=>[t("button",Et,h(d.$t("more_detail")),1)]),_:2},1032,["to"])])]))),128))])])])])}}});const Nt=T(Bt,[["__scopeId","data-v-533ab5d4"]]),st=i=>(Y("data-v-8e8cbcf6"),i=i(),tt(),i),Pt={class:"container"},zt={class:"section-title margin-bottom-10"},Rt={class:"grids is-2-desktop gap-20-desktop is-1-mobile"},Ut={class:"left"},Wt={class:"tabs"},Vt=["onClick"],Dt=st(()=>t("i",{class:"fa-light fa-angle-down"},null,-1)),Ht=st(()=>t("i",{class:"fa-light fa-angle-right"},null,-1)),Ot=it('<div class="right" data-v-8e8cbcf6><div class="image" data-v-8e8cbcf6><a target="_blank" href="https://www.youtube.com/watch?v=HEg8LjkZOaQ" data-v-8e8cbcf6><i class="fa-solid fa-play" data-v-8e8cbcf6></i><img src="'+_t+'" data-v-8e8cbcf6></a></div></div>',1),jt=x({__name:"who-are-we",setup(i){const s=S();et("lang");const l=n("WHO ARE WE?"),f=I().$axios,r=n([]),{locale:c}=R(),d=async()=>{const m=c.value?c.value:"en",v=await f.post(`get-intro-api?lang=${m}`);r.value=v.data.info,l.value=v.data.info[0].key},$=async m=>{l.value=m};return N(()=>c.value,m=>{d()},{immediate:!0,deep:!0}),d(),(m,v)=>(u(),p("section",null,[t("div",Pt,[t("h1",zt,h(m.$t("who_are_we")),1),t("div",Rt,[t("div",Ut,[t("ul",Wt,[(u(!0),p(L,null,A(e(r),(b,E)=>(u(),p("li",{class:lt({open:e(l)===b.key}),onClick:P=>$(b.key),key:E},[t("h1",null,[C(h(b.key)+" ",1),Dt]),t("p",null,h(b.desc),1)],10,Vt))),128)),t("li",null,[t("h1",{onClick:v[0]||(v[0]=b=>e(s).push({path:"/about-us"}))},[C(h(m.$t("more_about_us")),1),Ht])])])]),Ot])])]))}});const Gt=T(jt,[["__scopeId","data-v-8e8cbcf6"]]),Zt={class:"container"},Ft={class:"section-title"},Mt=["onClick"],Qt={class:"card-image"},qt=["src"],Xt={class:"card-content"},Jt=x({__name:"story",props:["info","title"],setup(i){const s=S(),l=I().$imageURL;return(f,r)=>(u(),p("section",null,[t("div",Zt,[t("h1",Ft,h(i.title),1),t("ul",null,[(u(!0),p(L,null,A(i.info,(c,d)=>(u(),p("li",{key:d},[t("div",{class:"card dark",onClick:$=>e(s).push(`/blog-detail/${c._id}`)},[t("div",Qt,[t("img",{src:e(l)+c.coverPage,alt:""},null,8,qt)]),t("div",Xt,[t("h3",null,h(c.title),1)])],8,Mt)]))),128))])])]))}});const Kt=T(Jt,[["__scopeId","data-v-dd508f96"]]),Yt={class:"container"},te={class:"section-title"},ee=["onClick"],se={class:"card-image fullheight"},ae=["src"],oe={class:"card-content"},ne={class:"card-title"},ce=x({__name:"column-layout",props:["title","info"],setup(i){const s=I().$imageURL,l=S();return(f,r)=>(u(),p("div",Yt,[t("h1",te,h(i.title),1),t("ul",null,[(u(!0),p(L,null,A(i.info,(c,d)=>(u(),p("li",{key:d},[t("div",{class:"card",onClick:$=>e(l).push(`/blog-detail/${c._id}`)},[t("div",se,[t("img",{src:e(s)+c.coverPage,alt:""},null,8,ae)]),t("div",oe,[t("h3",ne,h(c.title),1)])],8,ee)]))),128))])]))}});const B=T(ce,[["__scopeId","data-v-15360664"]]),ie={class:"container"},le={class:"section-title"},de=["onClick"],_e={class:"card-image"},re=["src"],ue={class:"card-content"},pe={class:"card-title"},he=x({__name:"grids-layout",props:["title","info"],setup(i){const s=I().$imageURL,l=S();return(f,r)=>(u(),p("section",null,[t("div",ie,[t("h1",le,h(i.title),1),t("ul",null,[(u(!0),p(L,null,A(i.info,(c,d)=>(u(),p("li",{key:d},[t("div",{class:"card",onClick:$=>e(l).push(`/blog-detail/${c._id}`)},[t("div",_e,[t("img",{src:e(s)+c.coverPage,alt:""},null,8,re)]),t("div",ue,[t("h3",pe,h(c.title),1)])],8,de)]))),128))])])]))}});const z=T(he,[["__scopeId","data-v-1c392809"]]),fe={class:"section"},ve={class:"section tsns-bg"},me={class:"section"},ge={class:"section wing-bg"},$e={class:"section"},xe=x({__name:"index",setup(i){const s=I().$axios,l=n([]),f=n([]),r=n([]),c=n([]),d=n([]),$=n([]),m=n([]),v=n([]),b=n([]),E=n(""),P=n(""),W=n(""),at=n("");n("");const V=n(""),D=n(""),H=n(""),O=n(""),j=n(""),{locale:ot}=R(),y=n(),G=async()=>{const a="654d868d4040f0af2207e5eb";await s.post(`sme-articles/${a}`).then(o=>{o.status===200&&(d.value=o.data.info)});const _=await s.post(`get-section-home-page?_id=${a}&lang=${y.value}`);W.value=_.data.info.name},Z=async()=>{const a="651a4ca8c2d5c94d6cc3da9e";await s.post(`reuse-articles/${a}`).then(o=>{o.status===200&&(r.value=o.data.info)});const _=await s.post(`get-section-home-page?_id=${a}&lang=${y.value}`);H.value=_.data.info.name},F=async()=>{const a="651a4cebc2d5c94d6cc3daa7";await s.post(`sme-articles/${a}`).then(o=>{o.status===200&&(c.value=o.data.info)});const _=await s.post(`get-section-home-page?_id=${a}&lang=${y.value}`);at.value=_.data.info.name},M=async()=>{const a="651a4d1ac2d5c94d6cc3dac3";await s.post(`reuse-articles/${a}`).then(o=>{o.status===200&&($.value=o.data.info)});const _=await s.post(`get-section-home-page?_id=${a}&lang=${y.value}`);V.value=_.data.info.name},Q=async()=>{const a="654d86c14040f0af2207e5f4";await s.post(`reuse-articles/${a}`).then(o=>{o.status===200&&(v.value=o.data.info)});const _=await s.post(`get-section-home-page?_id=${a}&lang=${y.value}`);D.value=_.data.info.name},q=async()=>{const a="654d86dc4040f0af2207e5fd";await s.post(`reuse-articles/${a}`).then(o=>{o.status===200&&(m.value=o.data.info)});const _=await s.post(`get-section-home-page?_id=${a}&lang=${y.value}`);O.value=_.data.info.name},X=async()=>{const a="651a4d06c2d5c94d6cc3daba";await s.post(`reuse-articles/${a}`).then(o=>{o.status===200&&(l.value=o.data.info)});const _=await s.post(`get-section-home-page?_id=${a}&lang=${y.value}`);E.value=_.data.info.name},J=async()=>{const a="654d866a4040f0af2207e5db";await s.post(`reuse-articles/${a}`).then(o=>{o.status===200&&(f.value=o.data.info)});const _=await s.post(`get-section-home-page?_id=${a}&lang=${y.value}`);P.value=_.data.info.name},K=async()=>{const a="657aa122bc4e6513beed5630";await s.post(`reuse-articles/${a}`).then(o=>{o.status===200&&(b.value=o.data.info)});const _=await s.post(`get-section-home-page?_id=${a}&lang=${y.value}`);j.value=_.data.info.name};return X(),J(),G(),Z(),F(),M(),Q(),q(),K(),N(()=>ot.value,a=>{y.value=a,X(),J(),G(),Z(),F(),M(),Q(),q(),K()},{immediate:!0,deep:!0}),(a,_)=>(u(),p("div",null,[g(bt),g(Nt),g(Gt),w(g(z,{title:e(E),info:e(l)},null,8,["title","info"]),[[k,e(l).length]]),w(g(z,{title:e(P),info:e(f)},null,8,["title","info"]),[[k,e(f).length]]),w(g(Kt,{info:e(r),title:e(H)},null,8,["info","title"]),[[k,e(r).length]]),t("section",fe,[w(g(B,{title:e(V),info:e($)},null,8,["title","info"]),[[k,e($).length]])]),t("section",ve,[w(g(B,{title:e(D),info:e(v)},null,8,["title","info"]),[[k,e(v).length]])]),t("section",me,[w(g(z,{title:e(W),info:e(d)},null,8,["title","info"]),[[k,e(d).length]])]),t("section",ge,[w(g(B,{title:e(O),info:e(m)},null,8,["title","info"]),[[k,e(m).length]])]),t("section",$e,[w(g(B,{title:e(j),info:e(b)},null,8,["title","info"]),[[k,e(b).length]])])]))}});export{xe as default};
