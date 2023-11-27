import{_ as M}from"./nuxt-link.aa1fafc7.js";import{b as R,a as D,e as G,_ as E}from"./entry.66577091.js";import{j as P,a as r,D as m,P as C,Q as t,a9 as z,u,R as n,A as p,G as h,U as v,F as V,Y as F,a4 as H,a5 as O,z as Z,ab as q,E as X,a6 as Y,B as x,V as W,W as j,X as J,ac as tt}from"./swiper-vue.6b947493.js";import{u as B}from"./cookie.da4aa4ff.js";const et={class:"mobile-navbar"},st={class:"burger"},at={class:"lang-switch"},ot={class:"navbar"},nt={class:"navbar-start"},lt={class:"nabar-item-list"},it={class:"parant"},ut={class:"navbar-item"},rt={class:"parant"},ct={class:"navbar-item"},dt={class:"navbar-end"},pt=["placeholder"],vt={class:"button-groups"},_t=P({__name:"MobileNavbar",emits:["closeMobileNavbar"],setup(_,{emit:$}){const f=R().$axios,y=D(),T=r([]),k=r([]),w=r(),b=r(),g=r(!1),S=r(!1),N=B("lang"),I=G();I.locale.value=N.value||"en",g.value=N.value==="en",S.value=N.value==="lao";const d=$,l=async()=>{d("closeMobileNavbar")},U=async()=>{const o="Product & Services";await f.post(`get-group/${o}`).then(e=>{e.status===200&&(T.value=e.data.info.items)})},L=async()=>{const o="Learning";await f.post(`get-group/${o}`).then(e=>{e.status===200&&(k.value=e.data.info.items)})},a=async()=>{const o=await f.post("get-category-filter/Category");b.value=o.data.info},s=o=>{if(I.locale.value=o,o==="lao"){const e=B("lang");e.value=o,S.value=!0,g.value=!1}if(o==="en"){const e=B("lang");e.value=o,S.value=!1,g.value=!0}};return a(),U(),L(),(o,e)=>{const i=M;return m(),C("div",et,[t("div",st,[t("i",{class:"fa-regular fa-bars",onClick:e[0]||(e[0]=c=>l())}),t("p",at,[t("a",{class:z([{current:u(g)}]),onClick:e[1]||(e[1]=c=>s("en"))},"EN",2),t("a",{class:z([{current:u(S)}]),onClick:e[2]||(e[2]=c=>s("lao"))},"LA",2)])]),t("div",ot,[t("div",nt,[t("ul",lt,[t("li",it,[t("a",ut,n(o.$t("products")),1),t("ul",null,[t("li",null,[p(i,{to:{path:"/product-and-services/biz-coaching"},onClick:e[3]||(e[3]=c=>l())},{default:h(()=>[v("BIZ COACHING")]),_:1})]),t("li",null,[p(i,{to:{path:"/product-and-services/biz-course"},onClick:e[4]||(e[4]=c=>l())},{default:h(()=>[v("BIZ COURSES")]),_:1})]),t("li",null,[p(i,{to:{path:"/product-and-services/project-business-consultant"},onClick:e[5]||(e[5]=c=>l())},{default:h(()=>[v("BUSINESS CONSULTANT")]),_:1})])])]),t("li",rt,[t("a",ct,n(o.$t("learning")),1),t("ul",null,[(m(!0),C(V,null,F(u(k),(c,Q)=>(m(),C("li",{key:Q},[p(i,{to:{path:"/category",query:{is:`${c.name}`}},onClick:e[6]||(e[6]=ee=>l())},{default:h(()=>[v(n(c.name),1)]),_:2},1032,["to"])]))),128))])]),t("li",null,[t("a",{onClick:e[7]||(e[7]=c=>(o.$router.replace("/category?is=TSNS - Thao Sang Nang Sa"),l()))},n(o.$t("article_tsns")),1)]),t("li",null,[t("a",{onClick:e[8]||(e[8]=c=>(o.$router.replace("/category?is=WINGS - Women's Income Generating Support"),l()))},n(o.$t("article_wing")),1)]),t("li",null,[p(i,{to:"/about-us",onClick:e[9]||(e[9]=c=>l())},{default:h(()=>[v(n(o.$t("about_us")),1)]),_:1})])])]),t("div",dt,[H(t("input",{type:"text","onUpdate:modelValue":e[10]||(e[10]=c=>Z(w)?w.value=c:null),class:"input small",placeholder:o.$t("search"),onKeyup:e[11]||(e[11]=q(c=>(u(y).push({path:"/search",query:{search:u(w)}}),l()),["enter"]))},null,40,pt),[[O,u(w)]]),t("div",vt,[t("button",{class:"button small",onClick:e[12]||(e[12]=c=>(u(y).push({path:"/auth/login"}),l()))},n(o.$t("login")),1),t("button",{class:"button main small",onClick:e[13]||(e[13]=c=>(u(y).push({path:"/auth/register"}),l()))},n(o.$t("register")),1)])])])])}}});const ft=E(_t,[["__scopeId","data-v-28b8138e"]]),bt=""+new URL("thebizhub-logo.b61d510f.jpg",import.meta.url).href,A=_=>(W("data-v-22e2e399"),_=_(),j(),_),gt={class:"top-navbar"},ht={class:"mobile-only"},mt=A(()=>t("p",{class:"left"},[t("i",{class:"fa-regular fa-magnifying-glass"})],-1)),$t=A(()=>t("i",{class:"fa-regular fa-bars"},null,-1)),yt=[$t],St=A(()=>t("img",{src:bt},null,-1)),Ct=[St],kt={class:"navbar is-hidden-mobile"},wt={class:"navbar-start"},Nt={class:"has-dropdown"},It={class:"hoverable"},Lt=A(()=>t("i",{class:"fa-light fa-angle-down"},null,-1)),Bt={class:"dropdown"},At={class:"has-dropdown"},Tt={class:"hoverable"},Ut=A(()=>t("i",{class:"fa-light fa-angle-down"},null,-1)),zt={class:"dropdown"},Vt={class:"navbar-end"},Et=["placeholder"],Mt=A(()=>t("hr",{class:"v"},null,-1)),Rt={class:"lang-switch"},Dt=A(()=>t("hr",{class:"v"},null,-1)),Gt={class:"button-groups"},Pt=P({__name:"Navbar",setup(_){const $=R().$axios,f=D(),y=r([]),T=r([]),k=r(),w=r(),b=r(!1),g=r(!1),S=B("lang"),N=G();N.locale.value=S.value||"en",b.value=S.value==="en",g.value=S.value==="lao",!b.value&&!g.value&&(b.value=!0);const I=r(!1),d=async()=>{const a="Product & Services";await $.post(`get-group/${a}`).then(s=>{s.status===200&&(y.value=s.data.info.items)})},l=async()=>{const a="Learning";await $.post(`get-group/${a}`).then(s=>{s.status===200&&(T.value=s.data.info.items)})},U=async()=>{const a=await $.post("get-category-filter/Category");w.value=a.data.info},L=a=>{if(N.locale.value=a,a==="lao"){const s=B("lang");s.value=a,g.value=!0,b.value=!1}if(a==="en"){const s=B("lang");s.value=a,g.value=!1,b.value=!0}};return U(),d(),l(),(a,s)=>{const o=ft,e=M;return m(),C("div",null,[t("div",gt,[t("div",ht,[mt,t("p",{class:"right",onClick:s[0]||(s[0]=i=>I.value=!0)},yt)]),t("div",{class:"logo",onClick:s[1]||(s[1]=i=>u(f).push({path:"/"}))},Ct),t("h1",null,n(a.$t("slogan")),1),p(x,{name:"slide-down"},{default:h(()=>[u(I)?(m(),X(o,{key:0,onCloseMobileNavbar:s[2]||(s[2]=i=>I.value=!1)})):Y("",!0)]),_:1})]),t("div",kt,[t("div",wt,[t("ul",null,[t("li",Nt,[t("a",It,[v(n(a.$t("products")),1),Lt,t("ul",Bt,[t("li",null,[p(e,{to:{path:"/product-and-services/biz-coaching"}},{default:h(()=>[v("BIZ COACHING")]),_:1})]),t("li",null,[p(e,{to:{path:"/product-and-services/biz-course"}},{default:h(()=>[v("BIZ COURSES")]),_:1})]),t("li",null,[p(e,{to:{path:"/product-and-services/project-business-consultant"}},{default:h(()=>[v("BUSINESS CONSULTANT")]),_:1})])])])]),t("li",At,[t("a",Tt,[v(n(a.$t("navbar_learning"))+" ",1),Ut,t("ul",zt,[(m(!0),C(V,null,F(u(T),(i,c)=>(m(),C("li",{key:c},[p(e,{to:{path:"/category",query:{is:`${i.name}`}}},{default:h(()=>[v(n(i.name),1)]),_:2},1032,["to"])]))),128))])])]),t("li",null,[t("a",{onClick:s[3]||(s[3]=i=>a.$router.replace("/category?is=TSNS - Thao Sang Nang Sa"))},n(a.$t("navbar_tsns")),1)]),t("li",null,[t("a",{onClick:s[4]||(s[4]=i=>a.$router.replace("/category?is=WINGS - Women's Income Generating Support"))},n(a.$t("navbar_wing")),1)]),t("li",null,[p(e,{to:"/about-us"},{default:h(()=>[v(n(a.$t("about_us")),1)]),_:1})])])]),t("div",Vt,[H(t("input",{type:"text","onUpdate:modelValue":s[5]||(s[5]=i=>Z(k)?k.value=i:null),class:"input small",placeholder:a.$t("search"),onKeyup:s[6]||(s[6]=q(i=>u(f).push({path:"/search",query:{search:u(k)}}),["enter"]))},null,40,Et),[[O,u(k)]]),Mt,t("p",Rt,[t("a",{class:z([{current:u(b)}]),onClick:s[7]||(s[7]=i=>L("en"))},"EN",2),t("a",{class:z([{current:u(g)}]),onClick:s[8]||(s[8]=i=>L("lao"))},"LA",2)]),Dt,t("div",Gt,[t("button",{class:"button small",onClick:s[9]||(s[9]=i=>u(f).push({path:"/auth/login"}))},n(a.$t("login")),1),t("button",{class:"button main small",onClick:s[10]||(s[10]=i=>u(f).push({path:"/auth/register"}))},n(a.$t("register")),1)])])])])}}});const Ft=E(Pt,[["__scopeId","data-v-22e2e399"]]),Ht=""+new URL("Logo.d939d081.png",import.meta.url).href,K=_=>(W("data-v-b0be63f1"),_=_(),j(),_),Ot={class:"container"},Zt={class:"grids is-14-desktop is-1-mobile"},qt=K(()=>t("li",{class:"span-4-desktop"},[t("div",{class:"logo margin-bottom-10"},[t("img",{src:Ht,alt:""}),t("h3",null,"THE BIZ HUB")]),t("small",{class:"margin-bottom-15"},"1st Floor, 108Hill Building Dongpaina Road, Saphanthong Village, Sisattanak District, Vientiane Capital, Lao PDR."),t("small",null,"020 56463959 | 020 56508160"),t("small",null,"thebizhub.info@gmail.com")],-1)),Wt={class:"span-5-desktop"},jt={class:"span-5-desktop"},Kt={class:"socials"},Qt=J('<ul data-v-b0be63f1><li data-v-b0be63f1><a href="https://www.facebook.com/profile.php?id=100091801856212" target="_blank" data-v-b0be63f1><i class="fa-brands fa-facebook" data-v-b0be63f1></i></a></li><li data-v-b0be63f1><a href="https://www.tiktok.com/@thebizhublaos" target="_blank" data-v-b0be63f1><i class="fa-brands fa-tiktok" data-v-b0be63f1></i></a></li><li data-v-b0be63f1><a href="https://www.youtube.com/@TheBIZHUB" target="_blank" data-v-b0be63f1><i class="fa-brands fa-youtube" data-v-b0be63f1></i></a></li></ul>',1),Xt=K(()=>t("div",{class:"footer"},[t("p",null," Copyright © 108-1009 Group Co., Ltd. | Designed and Developed by Semicolon Sole Co., Ltd. ")],-1)),Yt=P({__name:"Footer",setup(_){const $=R().$axios;D();const f=r([]),y=r([]);r();const T=r(),k=r(!1),w=r(!1),b=B("lang"),g=G();g.locale.value=b.value||"en",k.value=b.value==="en",w.value=b.value==="lao";const S=async()=>{const d="Product & Services";await $.post(`get-group/${d}`).then(l=>{l.status===200&&(f.value=l.data.info.items)})},N=async()=>{const d="Learning";await $.post(`get-group/${d}`).then(l=>{l.status===200&&(y.value=l.data.info.items)})};return(async()=>{const d=await $.post("get-category-filter/Category");T.value=d.data.info})(),S(),N(),(d,l)=>{const U=M;return m(),C(V,null,[t("section",null,[t("div",Ot,[t("ul",Zt,[qt,t("li",Wt,[t("h3",null,n(d.$t("navbar_learning")),1),t("ul",null,[(m(!0),C(V,null,F(u(y),(L,a)=>(m(),C("li",{key:a},[p(U,{to:{path:"/category",query:{is:`${L.name}`}}},{default:h(()=>[v(n(L.name),1)]),_:2},1032,["to"])]))),128))])]),t("li",jt,[t("h3",null,n(d.$t("products")),1),t("ul",null,[t("li",null,n(d.$t("product_biz_coaching")),1),t("li",null,n(d.$t("product_biz_course")),1),t("li",null,n(d.$t("product_business_consultant")),1)]),t("div",Kt,[t("h3",null,n(d.$t("follow_us")),1),Qt])])])])]),Xt],64)}}});const xt=E(Yt,[["__scopeId","data-v-b0be63f1"]]),Jt={};function te(_,$){const f=Ft,y=xt;return m(),C("div",null,[p(f),t("main",null,[tt(_.$slots,"default")]),p(y)])}const le=E(Jt,[["render",te]]);export{le as default};
