import{_ as D}from"./nuxt-link.467ac89e.js";import{a as E,c as G,b as M,_ as V}from"./entry.4b7e5ca5.js";import{j as P,a as r,b as W,D as b,P as w,Q as t,a9 as U,u,R as n,A as v,G as $,U as h,F as R,X as F,a5 as j,a6 as q,z as H,ab as O,E as X,a0 as Y,B as x,V as K,W as Z,Y as tt,ac as et}from"./swiper-vue.9585ef87.js";import{u as z}from"./cookie.bdaa00b5.js";const at={class:"mobile-navbar"},st={class:"burger"},ot={class:"lang-switch"},nt={class:"navbar"},lt={class:"navbar-start"},it={class:"nabar-item-list"},ut={class:"parant"},rt={class:"navbar-item"},ct={class:"parant"},dt={class:"navbar-item"},pt={class:"navbar-end"},vt=["placeholder"],_t={class:"button-groups"},gt=P({__name:"MobileNavbar",emits:["closeMobileNavbar"],setup(_,{emit:y}){const g=E().$axios,C=G(),B=r([]),N=r([]),I=r(),f=r(),p=r(!1),S=r(!1),m=z("lang"),k=M();k.locale.value=m.value||"en",p.value=m.value==="en",S.value=m.value==="lao";const d=y,l=async()=>{d("closeMobileNavbar")},L=async()=>{const o="Product & Services";await g.post(`get-group?type=${o}&lang=${k.locale.value}`).then(e=>{e.status===200&&(B.value=e.data.info)})},A=async()=>{const o="Learning";await g.post(`get-group?type=${o}&lang=${k.locale.value}`).then(e=>{e.status===200&&(N.value=e.data.info)})},s=async()=>{const o=await g.post("get-category-filter/Category");f.value=o.data.info},a=o=>{if(k.locale.value=o,o==="lao"){const e=z("lang");e.value=o,S.value=!0,p.value=!1}if(o==="en"){const e=z("lang");e.value=o,S.value=!1,p.value=!0}};return W(()=>k.locale.value,o=>{A(),L()},{immediate:!0,deep:!0}),s(),L(),A(),(o,e)=>{const i=D;return b(),w("div",at,[t("div",st,[t("i",{class:"fa-regular fa-bars",onClick:e[0]||(e[0]=c=>l())}),t("p",ot,[t("a",{class:U([{current:u(p)}]),onClick:e[1]||(e[1]=c=>a("en"))},"EN",2),t("a",{class:U([{current:u(S)}]),onClick:e[2]||(e[2]=c=>a("lao"))},"LA",2)])]),t("div",nt,[t("div",lt,[t("ul",it,[t("li",ut,[t("a",rt,n(o.$t("products")),1),t("ul",null,[t("li",null,[v(i,{to:{path:"/product-and-services/biz-coaching"},onClick:e[3]||(e[3]=c=>l())},{default:$(()=>[h("BIZ COACHING")]),_:1})]),t("li",null,[v(i,{to:{path:"/product-and-services/biz-course"},onClick:e[4]||(e[4]=c=>l())},{default:$(()=>[h("BIZ COURSES")]),_:1})]),t("li",null,[v(i,{to:{path:"/product-and-services/project-business-consultant"},onClick:e[5]||(e[5]=c=>l())},{default:$(()=>[h("BUSINESS CONSULTANT")]),_:1})])])]),t("li",ct,[t("a",dt,n(o.$t("learning")),1),t("ul",null,[(b(!0),w(R,null,F(u(N),(c,J)=>(b(),w("li",{key:J},[v(i,{to:{path:"/category",query:{is:`${c.name}`}},onClick:e[6]||(e[6]=xt=>l())},{default:$(()=>[h(n(c.name),1)]),_:2},1032,["to"])]))),128))])]),t("li",null,[t("a",{onClick:e[7]||(e[7]=c=>(o.$router.replace("/category?is=TSNS - Thao Sang Nang Sa"),l()))},n(o.$t("article_tsns")),1)]),t("li",null,[t("a",{onClick:e[8]||(e[8]=c=>(o.$router.replace("/category?is=WINGS - Women's Income Generating Support"),l()))},n(o.$t("article_wing")),1)]),t("li",null,[v(i,{to:"/about-us",onClick:e[9]||(e[9]=c=>l())},{default:$(()=>[h(n(o.$t("about_us")),1)]),_:1})])])]),t("div",pt,[j(t("input",{type:"text","onUpdate:modelValue":e[10]||(e[10]=c=>H(I)?I.value=c:null),class:"input small",placeholder:o.$t("search"),onKeyup:e[11]||(e[11]=O(c=>(u(C).push({path:"/search",query:{search:u(I)}}),l()),["enter"]))},null,40,vt),[[q,u(I)]]),t("div",_t,[t("button",{class:"button small",onClick:e[12]||(e[12]=c=>(u(C).push({path:"/auth/login"}),l()))},n(o.$t("login")),1),t("button",{class:"button main small",onClick:e[13]||(e[13]=c=>(u(C).push({path:"/auth/register"}),l()))},n(o.$t("register")),1)])])])])}}});const ft=V(gt,[["__scopeId","data-v-25ed88e3"]]),$t=""+new URL("thebizhub-logo.b61d510f.jpg",import.meta.url).href,T=_=>(K("data-v-92e6d536"),_=_(),Z(),_),ht={class:"top-navbar"},mt={class:"mobile-only"},bt=T(()=>t("p",{class:"left"},[t("i",{class:"fa-regular fa-magnifying-glass"})],-1)),yt=T(()=>t("i",{class:"fa-regular fa-bars"},null,-1)),Ct=[yt],St=T(()=>t("img",{src:$t},null,-1)),kt=[St],wt={class:"navbar is-hidden-mobile"},Nt={class:"navbar-start"},Lt={class:"has-dropdown"},It={class:"hoverable"},At=T(()=>t("i",{class:"fa-light fa-angle-down"},null,-1)),zt={class:"dropdown"},Bt={href:"https://docs.google.com/forms/d/e/1FAIpQLSfsRhORbsNje2WzOdWGCLJAdKuyEGDlUejL2qr4e-gzencLcw/viewform",target:"_blank"},Tt={class:"navbar-end"},Ut=["placeholder"],Rt=T(()=>t("hr",{class:"v"},null,-1)),Vt={class:"lang-switch"},Dt=T(()=>t("hr",{class:"v"},null,-1)),Et={class:"button-groups"},Gt=P({__name:"Navbar",setup(_){const y=E().$axios,g=G(),C=r([]),B=r([]),N=r(),I=r(),f=r(!1),p=r(!1),S=z("lang"),m=M();m.locale.value=S.value||"en",f.value=S.value==="en",p.value=S.value==="lao",!f.value&&!p.value&&(f.value=!0);const k=r(!1),d=async()=>{const s="Product & Services";await y.post(`get-group?type=${s}&lang=${m.locale.value}`).then(a=>{a.status===200&&(C.value=a.data.info)})},l=async()=>{const s="Learning";await y.post(`get-group?type=${s}&lang=${m.locale.value}`).then(a=>{a.status===200&&(B.value=a.data.info)})},L=async()=>{const s=await y.post("get-category-filter/Category");I.value=s.data.info};W(()=>m.locale.value,s=>{l(),d()},{immediate:!0,deep:!0});const A=s=>{if(m.locale.value=s,s==="lao"){const a=z("lang");a.value=s,p.value=!0,f.value=!1}if(s==="en"){const a=z("lang");a.value=s,p.value=!1,f.value=!0}};return L(),d(),l(),(s,a)=>{const o=ft,e=D;return b(),w("div",null,[t("div",ht,[t("div",mt,[bt,t("p",{class:"right",onClick:a[0]||(a[0]=i=>k.value=!0)},Ct)]),t("div",{class:"logo",onClick:a[1]||(a[1]=i=>u(g).push({path:"/"}))},kt),t("h1",null,n(s.$t("slogan")),1),v(x,{name:"slide-down"},{default:$(()=>[u(k)?(b(),X(o,{key:0,onCloseMobileNavbar:a[2]||(a[2]=i=>k.value=!1)})):Y("",!0)]),_:1})]),t("div",wt,[t("div",Nt,[t("ul",null,[t("li",Lt,[t("a",It,[h(n(s.$t("navbar_learning"))+" ",1),At,t("ul",zt,[(b(!0),w(R,null,F(u(B),(i,c)=>(b(),w("li",{key:c},[v(e,{to:{path:"/category",query:{is:`${i.name}`}}},{default:$(()=>[h(n(i.name),1)]),_:2},1032,["to"])]))),128))])])]),t("li",null,[t("a",{onClick:a[3]||(a[3]=i=>s.$router.replace("/category?is=TSNS - Thao Sang Nang Sa"))},n(s.$t("navbar_tsns")),1)]),t("li",null,[t("a",{onClick:a[4]||(a[4]=i=>s.$router.replace("/category?is=WINGS - Women's Income Generating Support"))},n(s.$t("navbar_wing")),1)]),t("li",null,[t("a",{onClick:a[5]||(a[5]=i=>s.$router.replace("/category?is=Events & Activities"))},n(s.$t("article_events")),1)]),t("li",null,[t("a",Bt,n(s.$t("navbar_partner_with_us")),1)]),t("li",null,[v(e,{to:"/about-us"},{default:$(()=>[h(n(s.$t("navbar_bussiness_supporter")),1)]),_:1})])])]),t("div",Tt,[j(t("input",{type:"text","onUpdate:modelValue":a[6]||(a[6]=i=>H(N)?N.value=i:null),class:"input small",placeholder:s.$t("search"),onKeyup:a[7]||(a[7]=O(i=>u(g).push({path:"/search",query:{search:u(N)}}),["enter"]))},null,40,Ut),[[q,u(N)]]),Rt,t("p",Vt,[t("a",{class:U([{current:u(f)}]),onClick:a[8]||(a[8]=i=>A("en"))},"EN",2),t("a",{class:U([{current:u(p)}]),onClick:a[9]||(a[9]=i=>A("lao"))},"LA",2)]),Dt,t("div",Et,[t("button",{class:"button small",onClick:a[10]||(a[10]=i=>u(g).push({path:"/auth/login"}))},n(s.$t("login")),1),t("button",{class:"button main small",onClick:a[11]||(a[11]=i=>u(g).push({path:"/auth/register"}))},n(s.$t("register")),1)])])])])}}});const Mt=V(Gt,[["__scopeId","data-v-92e6d536"]]),Pt=""+new URL("Logo.d939d081.png",import.meta.url).href,Q=_=>(K("data-v-e1771e64"),_=_(),Z(),_),Ft={class:"container"},Wt={class:"grids is-14-desktop is-1-mobile"},jt=Q(()=>t("li",{class:"span-4-desktop"},[t("div",{class:"logo margin-bottom-10"},[t("img",{src:Pt,alt:""}),t("h3",null,"THE BIZ HUB")]),t("small",{class:"margin-bottom-15"},"1st Floor, 108Hill Building Dongpaina Road, Saphanthong Village, Sisattanak District, Vientiane Capital, Lao PDR."),t("small",null,"020 56463959 | 020 56508160"),t("small",null,"thebizhub.info@gmail.com")],-1)),qt={class:"span-5-desktop"},Ht={class:"span-5-desktop"},Ot={class:"socials"},Kt=tt('<ul data-v-e1771e64><li data-v-e1771e64><a href="https://www.facebook.com/profile.php?id=100091801856212" target="_blank" data-v-e1771e64><i class="fa-brands fa-facebook" data-v-e1771e64></i></a></li><li data-v-e1771e64><a href="https://www.tiktok.com/@thebizhublaos" target="_blank" data-v-e1771e64><i class="fa-brands fa-tiktok" data-v-e1771e64></i></a></li><li data-v-e1771e64><a href="https://www.youtube.com/@TheBIZHUB" target="_blank" data-v-e1771e64><i class="fa-brands fa-youtube" data-v-e1771e64></i></a></li></ul>',1),Zt=Q(()=>t("div",{class:"footer"},[t("p",null," Copyright © 108-1009 Group Co., Ltd. | Designed and Developed by Semicolon Sole Co., Ltd. ")],-1)),Qt=P({__name:"Footer",setup(_){const y=E().$axios;G();const g=r([]),C=r([]);r();const B=r(),N=r(!1),I=r(!1),f=z("lang"),p=M();p.locale.value=f.value||"en",N.value=f.value==="en",I.value=f.value==="lao";const S=async()=>{const d="Product & Services";await y.post(`get-group?type=${d}&lang=${p.locale.value}`).then(l=>{l.status===200&&(g.value=l.data.info)})},m=async()=>{const d="Learning";await y.post(`get-group?type=${d}&lang=${p.locale.value}`).then(l=>{l.status===200&&(C.value=l.data.info)})};return(async()=>{const d=await y.post("get-category-filter/Category");B.value=d.data.info})(),S(),m(),(d,l)=>{const L=D;return b(),w(R,null,[t("section",null,[t("div",Ft,[t("ul",Wt,[jt,t("li",qt,[t("h3",null,n(d.$t("navbar_learning")),1),t("ul",null,[(b(!0),w(R,null,F(u(C),(A,s)=>(b(),w("li",{key:s},[v(L,{to:{path:"/category",query:{is:`${A.name}`}}},{default:$(()=>[h(n(A.name),1)]),_:2},1032,["to"])]))),128))])]),t("li",Ht,[t("h3",null,n(d.$t("products")),1),t("ul",null,[t("li",null,[v(L,{to:{path:"/product-and-services/biz-coaching"}},{default:$(()=>[h(n(d.$t("product_biz_coaching")),1)]),_:1})]),t("li",null,[v(L,{to:{path:"/product-and-services/biz-course"}},{default:$(()=>[h(n(d.$t("product_biz_course")),1)]),_:1})]),t("li",null,[v(L,{to:{path:"/product-and-services/project-business-consultant"}},{default:$(()=>[h(n(d.$t("product_business_consultant")),1)]),_:1})])]),t("div",Ot,[t("h3",null,n(d.$t("follow_us")),1),Kt])])])])]),Zt],64)}}});const Jt=V(Qt,[["__scopeId","data-v-e1771e64"]]),Xt={};function Yt(_,y){const g=Mt,C=Jt;return b(),w("div",null,[v(g),t("main",null,[et(_.$slots,"default")]),v(C)])}const oe=V(Xt,[["render",Yt]]);export{oe as default};
