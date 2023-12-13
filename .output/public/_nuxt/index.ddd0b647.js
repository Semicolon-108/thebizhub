import{a as E,c as K,_ as L,b as S,d as B}from"./entry.b9ba48c5.js";import{j as T,a as u,b as R,D as n,P as o,Q as e,u as t,R as h,V as F,W as q,U as C,F as y,Y as w,a9 as ee,X as te,A as $,a4 as I,aa as x}from"./swiper-vue.6b947493.js";import{u as Y}from"./cookie.2e37706f.js";import{_ as se}from"./team.09c005f0.js";const O=d=>(F("data-v-f5e4090c"),d=d(),q(),d),ae={class:"section"},ne={class:"container"},oe={class:"grids gap-20-desktop is-5-desktop is-1-mobile"},ce={class:"left span-2-desktop"},ie={class:"intro"},le=O(()=>e("h1",null,"THE BIZ HUB",-1)),de=O(()=>e("h3",null,[C(" Partner for success "),e("br",{class:"is-hidden-mobile"}),C(" in business and "),e("br",{class:"is-hidden-mobile"}),C(" entrepreneurship ")],-1)),_e=O(()=>e("div",{class:"right span-3-desktop"},[e("div",{class:"video"},[e("iframe",{src:"https://www.youtube.com/embed/HEg8LjkZOaQ?si=dULR1XN-DrTBTyXD",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""})])],-1)),re=T({__name:"intro",setup(d){const a=E();K();const _=u(),f=Y("lang");return R(f,v=>{_.value},{deep:!0,immediate:!0}),(v,s)=>(n(),o("section",ae,[e("div",ne,[e("div",oe,[e("div",ce,[e("div",ie,[le,de,e("button",{class:"main margin-top-20",onClick:s[0]||(s[0]=p=>t(a).push({path:"/category",query:{is:"Update"}}))},h(v.$t("updates")),1)])]),_e])])]))}});const ue=L(re,[["__scopeId","data-v-f5e4090c"]]),pe={class:"section"},he={class:"container"},ve={class:"section-header"},fe={class:"section-title"},ge={class:"section-body"},me={class:"grids is-3-desktop is-1-mobile gap-10-tablet gap-10-tablet gap-20-desktop gap-10-mobile"},$e={class:"card"},ye={class:"card-icon"},we=["src"],be={class:"card-title"},ke=T({__name:"our-services",setup(d){const a=S().$axios,_=S().$imageURL,{locale:f}=B(),v=u(),s=async()=>{const p=f.value?f.value:"en",r=await a.post(`get-our-service-api?lang=${p}`);v.value=r.data.info};return R(()=>f.value,p=>{s()},{immediate:!0,deep:!0}),s(),(p,r)=>(n(),o("section",pe,[e("div",he,[e("div",ve,[e("div",fe,h(p.$t("Our Services")),1)]),e("div",ge,[e("ul",me,[(n(!0),o(y,null,w(t(v),(c,m)=>(n(),o("li",{key:m},[e("div",$e,[e("div",ye,[e("img",{src:t(_)+c.image},null,8,we)]),e("h3",be,h(c.key),1),e("p",null,h(c.desc),1)])]))),128))])])])]))}});const Ie=L(ke,[["__scopeId","data-v-66f6b2d5"]]),G=d=>(F("data-v-3e09e399"),d=d(),q(),d),xe={class:"container"},Se={class:"section-title margin-bottom-10"},Te={class:"grids is-2-desktop gap-20-desktop is-1-mobile"},Le={class:"left"},Ce={class:"tabs"},Ee=["onClick"],Ae=G(()=>e("i",{class:"fa-light fa-angle-down"},null,-1)),Ne=G(()=>e("i",{class:"fa-light fa-angle-right"},null,-1)),Re=te('<div class="right" data-v-3e09e399><div class="image" data-v-3e09e399><a target="_blank" href="https://www.youtube.com/watch?v=HEg8LjkZOaQ" data-v-3e09e399><i class="fa-solid fa-play" data-v-3e09e399></i><img src="'+se+'" data-v-3e09e399></a></div></div>',1),Ue=T({__name:"who-are-we",setup(d){const a=E();Y("lang");const _=u("WHO ARE WE?"),f=S().$axios,v=u([]),{locale:s}=B(),p=async()=>{const c=s.value?s.value:"en",m=await f.post(`get-intro-api?lang=${c}`);v.value=m.data.info,_.value=m.data.info[0].key},r=async c=>{_.value=c};return R(()=>s.value,c=>{p()},{immediate:!0,deep:!0}),p(),(c,m)=>(n(),o("section",null,[e("div",xe,[e("h1",Se,h(c.$t("who_are_we")),1),e("div",Te,[e("div",Le,[e("ul",Ce,[(n(!0),o(y,null,w(t(v),(b,A)=>(n(),o("li",{class:ee({open:t(_)===b.key}),onClick:U=>r(b.key),key:A},[e("h1",null,[C(h(b.key)+" ",1),Ae]),e("p",null,h(b.desc),1)],10,Ee))),128)),e("li",null,[e("h1",{onClick:m[0]||(m[0]=b=>t(a).push({path:"/about-us"}))},[C(h(c.$t("MORE_ABOUT_US")),1),Ne])])])]),Re])])]))}});const Be=L(Ue,[["__scopeId","data-v-3e09e399"]]),Oe={class:"container"},We={class:"section-title"},Pe=["onClick"],De={class:"card-image"},He=["src"],Ve={class:"card-content"},ze={class:"tag-list"},je=T({__name:"story",props:["info","title"],setup(d){const a=E(),_=S().$imageURL;return(f,v)=>(n(),o("section",null,[e("div",Oe,[e("h1",We,h(d.title),1),e("ul",null,[(n(!0),o(y,null,w(d.info,(s,p)=>(n(),o("li",{key:p},[e("div",{class:"card dark",onClick:r=>t(a).push(`/blog-detail/${s._id}`)},[e("div",De,[e("img",{src:t(_)+s.coverPage,alt:""},null,8,He)]),e("div",Ve,[e("p",ze,[(n(!0),o(y,null,w(s.category,(r,c)=>(n(),o("span",{key:c},h(r.name),1))),128))]),e("h3",null,h(s.title),1)])],8,Pe)]))),128))])])]))}});const Me=L(je,[["__scopeId","data-v-610446b3"]]),Qe={class:"container"},Xe={class:"section-title"},Ze=["onClick"],Fe={class:"card-image fullheight"},qe=["src"],Ye={class:"card-content"},Ge={class:"tag-list"},Je=T({__name:"column-layout",props:["title","info"],setup(d){const a=S().$imageURL,_=E();return(f,v)=>(n(),o("section",null,[e("div",Qe,[e("h1",Xe,h(d.title),1),e("ul",null,[(n(!0),o(y,null,w(d.info,(s,p)=>(n(),o("li",{key:p},[e("div",{class:"card",onClick:r=>t(_).push(`/blog-detail/${s._id}`)},[e("div",Fe,[e("img",{src:t(a)+s.coverPage,alt:""},null,8,qe)]),e("div",Ye,[e("p",Ge,[(n(!0),o(y,null,w(s.tag,(r,c)=>(n(),o("span",{key:c},h(r.name),1))),128)),(n(!0),o(y,null,w(s.category,(r,c)=>(n(),o("span",{key:c},h(r.name),1))),128))]),e("h3",null,h(s.title),1)])],8,Ze)]))),128))])])]))}});const N=L(Je,[["__scopeId","data-v-8e7f1306"]]),Ke={class:"container"},et={class:"section-title"},tt=["onClick"],st={class:"card-image"},at=["src"],nt={class:"card-content"},ot={class:"tag-list"},ct=T({__name:"grids-layout",props:["title","info"],setup(d){const a=S().$imageURL,_=E();return(f,v)=>(n(),o("section",null,[e("div",Ke,[e("h1",et,h(d.title),1),e("ul",null,[(n(!0),o(y,null,w(d.info,(s,p)=>(n(),o("li",{key:p},[e("div",{class:"card",onClick:r=>t(_).push(`/blog-detail/${s._id}`)},[e("div",st,[e("img",{src:t(a)+s.coverPage,alt:""},null,8,at)]),e("div",nt,[e("ul",ot,[(n(!0),o(y,null,w(s.category,(r,c)=>(n(),o("li",{key:c},[e("a",null,h(r.name),1)]))),128))]),e("h3",null,h(s.title),1)])],8,tt)]))),128))])])]))}});const Z=L(ct,[["__scopeId","data-v-24467dda"]]),rt=T({__name:"index",setup(d){const a=S().$axios,_=u([]),f=u([]),v=u([]),s=u([]),p=u([]),r=u([]),c=u([]),m=u(""),b=u(""),A=u(""),U=u(""),W=u(""),P=u(""),D=u(""),{locale:J}=B(),k=u(),H=async()=>{const i="654d868d4040f0af2207e5eb";await a.post(`sme-articles/${i}`).then(l=>{l.status===200&&(v.value=l.data.info)});const g=await a.post(`get-section-home-page?_id=${i}&lang=${k.value}`);m.value=g.data.info.name},V=async()=>{const i="651a4ca8c2d5c94d6cc3da9e";await a.post(`reuse-articles/${i}`).then(l=>{l.status===200&&(console.log(l.data.info),_.value=l.data.info)});const g=await a.post(`get-section-home-page?_id=${i}&lang=${k.value}`);P.value=g.data.info.name},z=async()=>{const i="651a4cebc2d5c94d6cc3daa7";await a.post(`sme-articles/${i}`).then(l=>{l.status===200&&(f.value=l.data.info)});const g=await a.post(`get-section-home-page?_id=${i}&lang=${k.value}`);b.value=g.data.info.name},j=async()=>{const i="651a4d06c2d5c94d6cc3daba";await a.post(`reuse-articles/${i}`).then(l=>{l.status===200&&(s.value=l.data.info)});const g=await a.post(`get-section-home-page?_id=${i}&lang=${k.value}`);A.value=g.data.info.name},M=async()=>{const i="651a4d1ac2d5c94d6cc3dac3";await a.post(`reuse-articles/${i}`).then(l=>{l.status===200&&(p.value=l.data.info)});const g=await a.post(`get-section-home-page?_id=${i}&lang=${k.value}`);U.value=g.data.info.name},Q=async()=>{const i="654d86c14040f0af2207e5f4";await a.post(`reuse-articles/${i}`).then(l=>{l.status===200&&(c.value=l.data.info)});const g=await a.post(`get-section-home-page?_id=${i}&lang=${k.value}`);W.value=g.data.info.name},X=async()=>{const i="654d86dc4040f0af2207e5fd";await a.post(`reuse-articles/${i}`).then(l=>{l.status===200&&(r.value=l.data.info)});const g=await a.post(`get-section-home-page?_id=${i}&lang=${k.value}`);D.value=g.data.info.name};return H(),V(),z(),j(),M(),Q(),X(),R(()=>J.value,i=>{k.value=i,H(),V(),z(),j(),M(),Q(),X()},{immediate:!0,deep:!0}),(i,g)=>(n(),o("div",null,[$(ue),$(Ie),$(Be),I($(Z,{title:t(m),info:t(v)},null,8,["title","info"]),[[x,t(v).length]]),I($(Me,{info:t(_),title:t(P)},null,8,["info","title"]),[[x,t(_).length]]),I($(Z,{title:t(b),info:t(f)},null,8,["title","info"]),[[x,t(f).length]]),I($(N,{title:t(A),info:t(s)},null,8,["title","info"]),[[x,t(s).length]]),I($(N,{title:t(U),info:t(p)},null,8,["title","info"]),[[x,t(p).length]]),I($(N,{title:t(W),info:t(c)},null,8,["title","info"]),[[x,t(c).length]]),I($(N,{title:t(D),info:t(r)},null,8,["title","info"]),[[x,t(r).length]])]))}});export{rt as default};
