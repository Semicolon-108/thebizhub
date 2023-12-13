import{a as T,c as K,_ as S,b as I,d as W}from"./entry.c0d1118a.js";import{j as x,a as l,b as R,D as r,P as u,Q as t,u as e,R as f,V as M,W as q,U as L,F as C,Y as E,a9 as tt,X as et,A as $,a4 as b,aa as k}from"./swiper-vue.6b947493.js";import{u as Y}from"./cookie.da60654b.js";import{_ as st}from"./team.653815fe.js";const B=n=>(M("data-v-f5e4090c"),n=n(),q(),n),at={class:"section"},ot={class:"container"},nt={class:"grids gap-20-desktop is-5-desktop is-1-mobile"},ct={class:"left span-2-desktop"},it={class:"intro"},lt=B(()=>t("h1",null,"THE BIZ HUB",-1)),dt=B(()=>t("h3",null,[L(" Partner for success "),t("br",{class:"is-hidden-mobile"}),L(" in business and "),t("br",{class:"is-hidden-mobile"}),L(" entrepreneurship ")],-1)),_t=B(()=>t("div",{class:"right span-3-desktop"},[t("div",{class:"video"},[t("iframe",{src:"https://www.youtube.com/embed/HEg8LjkZOaQ?si=dULR1XN-DrTBTyXD",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""})])],-1)),rt=x({__name:"intro",setup(n){const s=T();K();const i=l(),h=Y("lang");return R(h,_=>{i.value},{deep:!0,immediate:!0}),(_,a)=>(r(),u("section",at,[t("div",ot,[t("div",nt,[t("div",ct,[t("div",it,[lt,dt,t("button",{class:"main margin-top-20",onClick:a[0]||(a[0]=d=>e(s).push({path:"/category",query:{is:"Update"}}))},f(_.$t("updates")),1)])]),_t])])]))}});const ut=S(rt,[["__scopeId","data-v-f5e4090c"]]),pt={class:"section"},ht={class:"container"},vt={class:"section-header"},ft={class:"section-title"},mt={class:"section-body"},gt={class:"grids is-3-desktop is-1-mobile gap-10-tablet gap-10-tablet gap-20-desktop gap-10-mobile"},$t={class:"card"},yt={class:"card-icon"},wt=["src"],bt={class:"card-title"},kt=x({__name:"our-services",setup(n){const s=I().$axios,i=I().$imageURL,{locale:h}=W(),_=l(),a=async()=>{const d=h.value?h.value:"en",m=await s.post(`get-our-service-api?lang=${d}`);_.value=m.data.info};return R(()=>h.value,d=>{a()},{immediate:!0,deep:!0}),a(),(d,m)=>(r(),u("section",pt,[t("div",ht,[t("div",vt,[t("div",ft,f(d.$t("products")),1)]),t("div",mt,[t("ul",gt,[(r(!0),u(C,null,E(e(_),(p,g)=>(r(),u("li",{key:g},[t("div",$t,[t("div",yt,[t("img",{src:e(i)+p.image},null,8,wt)]),t("h3",bt,f(p.key),1),t("p",null,f(p.desc),1)])]))),128))])])])]))}});const It=S(kt,[["__scopeId","data-v-65df56cd"]]),G=n=>(M("data-v-a742b598"),n=n(),q(),n),xt={class:"container"},St={class:"section-title margin-bottom-10"},Lt={class:"grids is-2-desktop gap-20-desktop is-1-mobile"},Tt={class:"left"},Ct={class:"tabs"},Et=["onClick"],At=G(()=>t("i",{class:"fa-light fa-angle-down"},null,-1)),Nt=G(()=>t("i",{class:"fa-light fa-angle-right"},null,-1)),Rt=et('<div class="right" data-v-a742b598><div class="image" data-v-a742b598><a target="_blank" href="https://www.youtube.com/watch?v=HEg8LjkZOaQ" data-v-a742b598><i class="fa-solid fa-play" data-v-a742b598></i><img src="'+st+'" data-v-a742b598></a></div></div>',1),Ut=x({__name:"who-are-we",setup(n){const s=T();Y("lang");const i=l("WHO ARE WE?"),h=I().$axios,_=l([]),{locale:a}=W(),d=async()=>{const p=a.value?a.value:"en",g=await h.post(`get-intro-api?lang=${p}`);_.value=g.data.info,i.value=g.data.info[0].key},m=async p=>{i.value=p};return R(()=>a.value,p=>{d()},{immediate:!0,deep:!0}),d(),(p,g)=>(r(),u("section",null,[t("div",xt,[t("h1",St,f(p.$t("who_are_we")),1),t("div",Lt,[t("div",Tt,[t("ul",Ct,[(r(!0),u(C,null,E(e(_),(y,A)=>(r(),u("li",{class:tt({open:e(i)===y.key}),onClick:U=>m(y.key),key:A},[t("h1",null,[L(f(y.key)+" ",1),At]),t("p",null,f(y.desc),1)],10,Et))),128)),t("li",null,[t("h1",{onClick:g[0]||(g[0]=y=>e(s).push({path:"/about-us"}))},[L(f(p.$t("more_about_us")),1),Nt])])])]),Rt])])]))}});const Wt=S(Ut,[["__scopeId","data-v-a742b598"]]),Bt={class:"container"},Pt={class:"section-title"},Dt=["onClick"],Ht={class:"card-image"},Ot=["src"],Vt={class:"card-content"},zt=x({__name:"story",props:["info","title"],setup(n){const s=T(),i=I().$imageURL;return(h,_)=>(r(),u("section",null,[t("div",Bt,[t("h1",Pt,f(n.title),1),t("ul",null,[(r(!0),u(C,null,E(n.info,(a,d)=>(r(),u("li",{key:d},[t("div",{class:"card dark",onClick:m=>e(s).push(`/blog-detail/${a._id}`)},[t("div",Ht,[t("img",{src:e(i)+a.coverPage,alt:""},null,8,Ot)]),t("div",Vt,[t("h3",null,f(a.title),1)])],8,Dt)]))),128))])])]))}});const jt=S(zt,[["__scopeId","data-v-dd508f96"]]),Qt={class:"container"},Xt={class:"section-title"},Zt=["onClick"],Ft={class:"card-image fullheight"},Mt=["src"],qt={class:"card-content"},Yt={class:"card-title"},Gt=x({__name:"column-layout",props:["title","info"],setup(n){const s=I().$imageURL,i=T();return(h,_)=>(r(),u("section",null,[t("div",Qt,[t("h1",Xt,f(n.title),1),t("ul",null,[(r(!0),u(C,null,E(n.info,(a,d)=>(r(),u("li",{key:d},[t("div",{class:"card",onClick:m=>e(i).push(`/blog-detail/${a._id}`)},[t("div",Ft,[t("img",{src:e(s)+a.coverPage,alt:""},null,8,Mt)]),t("div",qt,[t("h3",Yt,f(a.title),1)])],8,Zt)]))),128))])])]))}});const N=S(Gt,[["__scopeId","data-v-7a15e64c"]]),Jt={class:"container"},Kt={class:"section-title"},te=["onClick"],ee={class:"card-image"},se=["src"],ae={class:"card-content"},oe={class:"card-title"},ne=x({__name:"grids-layout",props:["title","info"],setup(n){const s=I().$imageURL,i=T();return(h,_)=>(r(),u("section",null,[t("div",Jt,[t("h1",Kt,f(n.title),1),t("ul",null,[(r(!0),u(C,null,E(n.info,(a,d)=>(r(),u("li",{key:d},[t("div",{class:"card",onClick:m=>e(i).push(`/blog-detail/${a._id}`)},[t("div",ee,[t("img",{src:e(s)+a.coverPage,alt:""},null,8,se)]),t("div",ae,[t("h3",oe,f(a.title),1)])],8,te)]))),128))])])]))}});const F=S(ne,[["__scopeId","data-v-90050aa7"]]),_e=x({__name:"index",setup(n){const s=I().$axios,i=l([]),h=l([]),_=l([]),a=l([]),d=l([]),m=l([]),p=l([]),g=l(""),y=l(""),A=l(""),U=l(""),P=l(""),D=l(""),H=l(""),{locale:J}=W(),w=l(),O=async()=>{const o="654d868d4040f0af2207e5eb";await s.post(`sme-articles/${o}`).then(c=>{c.status===200&&(_.value=c.data.info)});const v=await s.post(`get-section-home-page?_id=${o}&lang=${w.value}`);g.value=v.data.info.name},V=async()=>{const o="651a4ca8c2d5c94d6cc3da9e";await s.post(`reuse-articles/${o}`).then(c=>{c.status===200&&(i.value=c.data.info)});const v=await s.post(`get-section-home-page?_id=${o}&lang=${w.value}`);D.value=v.data.info.name},z=async()=>{const o="651a4cebc2d5c94d6cc3daa7";await s.post(`sme-articles/${o}`).then(c=>{c.status===200&&(h.value=c.data.info)});const v=await s.post(`get-section-home-page?_id=${o}&lang=${w.value}`);y.value=v.data.info.name},j=async()=>{const o="651a4d06c2d5c94d6cc3daba";await s.post(`reuse-articles/${o}`).then(c=>{c.status===200&&(a.value=c.data.info)});const v=await s.post(`get-section-home-page?_id=${o}&lang=${w.value}`);A.value=v.data.info.name},Q=async()=>{const o="651a4d1ac2d5c94d6cc3dac3";await s.post(`reuse-articles/${o}`).then(c=>{c.status===200&&(d.value=c.data.info)});const v=await s.post(`get-section-home-page?_id=${o}&lang=${w.value}`);U.value=v.data.info.name},X=async()=>{const o="654d86c14040f0af2207e5f4";await s.post(`reuse-articles/${o}`).then(c=>{c.status===200&&(p.value=c.data.info)});const v=await s.post(`get-section-home-page?_id=${o}&lang=${w.value}`);P.value=v.data.info.name},Z=async()=>{const o="654d86dc4040f0af2207e5fd";await s.post(`reuse-articles/${o}`).then(c=>{c.status===200&&(m.value=c.data.info)});const v=await s.post(`get-section-home-page?_id=${o}&lang=${w.value}`);H.value=v.data.info.name};return O(),V(),z(),j(),Q(),X(),Z(),R(()=>J.value,o=>{w.value=o,O(),V(),z(),j(),Q(),X(),Z()},{immediate:!0,deep:!0}),(o,v)=>(r(),u("div",null,[$(ut),$(It),$(Wt),b($(F,{title:e(g),info:e(_)},null,8,["title","info"]),[[k,e(_).length]]),b($(jt,{info:e(i),title:e(D)},null,8,["info","title"]),[[k,e(i).length]]),b($(F,{title:e(y),info:e(h)},null,8,["title","info"]),[[k,e(h).length]]),b($(N,{title:e(A),info:e(a)},null,8,["title","info"]),[[k,e(a).length]]),b($(N,{title:e(U),info:e(d)},null,8,["title","info"]),[[k,e(d).length]]),b($(N,{title:e(P),info:e(p)},null,8,["title","info"]),[[k,e(p).length]]),b($(N,{title:e(H),info:e(m)},null,8,["title","info"]),[[k,e(m).length]])]))}});export{_e as default};