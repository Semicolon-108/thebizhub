import{_ as P}from"./nuxt-link.71aae4ad.js";import{b as V,a as z,e as G,_ as O}from"./entry.e94430b8.js";import{j as M,a as u,D as h,P as C,Q as t,a9 as E,u as i,R as c,A as d,G as _,U as p,F as R,Y as D,a4 as F,a5 as H,z as x,ab as q,E as J,a6 as Q,B as X,V as W,W as j,X as Y,ac as tt}from"./swiper-vue.6b947493.js";import{u as B}from"./cookie.4a2852a6.js";const at={class:"mobile-navbar"},st={class:"burger"},et={class:"lang-switch"},ot={class:"navbar"},nt={class:"navbar-start"},lt={class:"nabar-item-list"},it={class:"parant"},ut={class:"navbar-item"},rt={class:"parant"},ct={class:"navbar-item"},dt={class:"navbar-end"},pt=["placeholder"],vt={class:"button-groups"},ft=M({__name:"MobileNavbar",emits:["closeMobileNavbar"],setup(v,{emit:m}){const f=V().$axios,b=z(),T=u([]),k=u([]),N=u(),$=u(),g=u(!1),S=u(!1),w=B("lang"),I=G();I.locale.value=w.value||"en",g.value=w.value==="en",S.value=w.value==="lao";const y=m,n=async()=>{y("closeMobileNavbar")},U=async()=>{const o="Product & Services";await f.post(`get-group/${o}`).then(a=>{a.status===200&&(T.value=a.data.info.items)})},L=async()=>{const o="Learning";await f.post(`get-group/${o}`).then(a=>{a.status===200&&(k.value=a.data.info.items)})},e=async()=>{const o=await f.post("get-category-filter/Category");$.value=o.data.info},s=o=>{if(I.locale.value=o,o==="lao"){const a=B("lang");a.value=o,S.value=!0,g.value=!1}if(o==="en"){const a=B("lang");a.value=o,S.value=!1,g.value=!0}};return e(),U(),L(),(o,a)=>{const l=P;return h(),C("div",at,[t("div",st,[t("i",{class:"fa-regular fa-bars",onClick:a[0]||(a[0]=r=>n())}),t("p",et,[t("a",{class:E([{current:i(g)}]),onClick:a[1]||(a[1]=r=>s("en"))},"EN",2),t("a",{class:E([{current:i(S)}]),onClick:a[2]||(a[2]=r=>s("lao"))},"LA",2)])]),t("div",ot,[t("div",nt,[t("ul",lt,[t("li",it,[t("a",ut,c(o.$t("products")),1),t("ul",null,[t("li",null,[d(l,{to:{path:"/product-and-services/biz-coaching"},onClick:a[3]||(a[3]=r=>n())},{default:_(()=>[p("BIZ COACHING")]),_:1})]),t("li",null,[d(l,{to:{path:"/product-and-services/biz-course"},onClick:a[4]||(a[4]=r=>n())},{default:_(()=>[p("BIZ COURSES")]),_:1})]),t("li",null,[d(l,{to:{path:"/product-and-services/project-business-consultant"},onClick:a[5]||(a[5]=r=>n())},{default:_(()=>[p("BUSINESS CONSULTANT")]),_:1})])])]),t("li",rt,[t("a",ct,c(o.$t("learning")),1),t("ul",null,[(h(!0),C(R,null,D(i(k),(r,K)=>(h(),C("li",{key:K},[d(l,{to:{path:"/category",query:{is:`${r.name}`}},onClick:a[6]||(a[6]=ta=>n())},{default:_(()=>[p(c(r.name),1)]),_:2},1032,["to"])]))),128))])]),t("li",null,[t("a",{onClick:a[7]||(a[7]=r=>(o.$router.replace("/category?is=TSNS - Thao Sang Nang Sa"),n()))},c(o.$t("article_tsns")),1)]),t("li",null,[t("a",{onClick:a[8]||(a[8]=r=>(o.$router.replace("/category?is=WINGS - Women's Income Generating Support"),n()))},c(o.$t("article_wing")),1)]),t("li",null,[d(l,{to:"/about-us",onClick:a[9]||(a[9]=r=>n())},{default:_(()=>[p(c(o.$t("about_us")),1)]),_:1})])])]),t("div",dt,[F(t("input",{type:"text","onUpdate:modelValue":a[10]||(a[10]=r=>x(N)?N.value=r:null),class:"input small",placeholder:o.$t("search"),onKeyup:a[11]||(a[11]=q(r=>(i(b).push({path:"/search",query:{search:i(N)}}),n()),["enter"]))},null,40,pt),[[H,i(N)]]),t("div",vt,[t("button",{class:"button small",onClick:a[12]||(a[12]=r=>(i(b).push({path:"/auth/login"}),n()))},c(o.$t("login")),1),t("button",{class:"button main small",onClick:a[13]||(a[13]=r=>(i(b).push({path:"/auth/register"}),n()))},c(o.$t("register")),1)])])])])}}});const _t=O(ft,[["__scopeId","data-v-28b8138e"]]),gt=""+new URL("thebizhub-logo.b61d510f.jpg",import.meta.url).href,A=v=>(W("data-v-3872b947"),v=v(),j(),v),ht={class:"top-navbar"},mt={class:"mobile-only"},bt=A(()=>t("p",{class:"left"},[t("i",{class:"fa-regular fa-magnifying-glass"})],-1)),$t=A(()=>t("i",{class:"fa-regular fa-bars"},null,-1)),St=[$t],yt=A(()=>t("img",{src:gt},null,-1)),Ct=[yt],kt={class:"navbar is-hidden-mobile"},Nt={class:"navbar-start"},wt={class:"has-dropdown"},It={class:"hoverable"},Lt=A(()=>t("i",{class:"fa-light fa-angle-down"},null,-1)),Bt={class:"dropdown"},At={class:"has-dropdown"},Tt={class:"hoverable"},Ut=A(()=>t("i",{class:"fa-light fa-angle-down"},null,-1)),Et={class:"dropdown"},Rt={class:"navbar-end"},Ot=["placeholder"],Pt=A(()=>t("hr",{class:"v"},null,-1)),Vt={class:"lang-switch"},zt=A(()=>t("hr",{class:"v"},null,-1)),Gt={class:"button-groups"},Mt=M({__name:"Navbar",setup(v){const m=V().$axios,f=z(),b=u([]),T=u([]),k=u(),N=u(),$=u(!1),g=u(!1),S=B("lang"),w=G();w.locale.value=S.value||"en",$.value=S.value==="en",g.value=S.value==="lao";const I=u(!1),y=async()=>{const e="Product & Services";await m.post(`get-group/${e}`).then(s=>{s.status===200&&(b.value=s.data.info.items)})},n=async()=>{const e="Learning";await m.post(`get-group/${e}`).then(s=>{s.status===200&&(T.value=s.data.info.items)})},U=async()=>{const e=await m.post("get-category-filter/Category");N.value=e.data.info},L=e=>{if(w.locale.value=e,e==="lao"){const s=B("lang");s.value=e,g.value=!0,$.value=!1}if(e==="en"){const s=B("lang");s.value=e,g.value=!1,$.value=!0}};return U(),y(),n(),(e,s)=>{const o=_t,a=P;return h(),C("div",null,[t("div",ht,[t("div",mt,[bt,t("p",{class:"right",onClick:s[0]||(s[0]=l=>I.value=!0)},St)]),t("div",{class:"logo",onClick:s[1]||(s[1]=l=>i(f).push({path:"/"}))},Ct),t("h1",null,c(e.$t("slogan")),1),d(X,{name:"slide-down"},{default:_(()=>[i(I)?(h(),J(o,{key:0,onCloseMobileNavbar:s[2]||(s[2]=l=>I.value=!1)})):Q("",!0)]),_:1})]),t("div",kt,[t("div",Nt,[t("ul",null,[t("li",wt,[t("a",It,[p(c(e.$t("products")),1),Lt,t("ul",Bt,[t("li",null,[d(a,{to:{path:"/product-and-services/biz-coaching"}},{default:_(()=>[p("BIZ COACHING")]),_:1})]),t("li",null,[d(a,{to:{path:"/product-and-services/biz-course"}},{default:_(()=>[p("BIZ COURSES")]),_:1})]),t("li",null,[d(a,{to:{path:"/product-and-services/project-business-consultant"}},{default:_(()=>[p("BUSINESS CONSULTANT")]),_:1})])])])]),t("li",At,[t("a",Tt,[p(c(e.$t("learning"))+" ",1),Ut,t("ul",Et,[(h(!0),C(R,null,D(i(T),(l,r)=>(h(),C("li",{key:r},[d(a,{to:{path:"/category",query:{is:`${l.name}`}}},{default:_(()=>[p(c(l.name),1)]),_:2},1032,["to"])]))),128))])])]),t("li",null,[t("a",{onClick:s[3]||(s[3]=l=>e.$router.replace("/category?is=TSNS - Thao Sang Nang Sa"))},c(e.$t("article_tsns")),1)]),t("li",null,[t("a",{onClick:s[4]||(s[4]=l=>e.$router.replace("/category?is=WINGS - Women's Income Generating Support"))},c(e.$t("article_wing")),1)]),t("li",null,[d(a,{to:"/about-us"},{default:_(()=>[p(c(e.$t("about_us")),1)]),_:1})])])]),t("div",Rt,[F(t("input",{type:"text","onUpdate:modelValue":s[5]||(s[5]=l=>x(k)?k.value=l:null),class:"input small",placeholder:e.$t("search"),onKeyup:s[6]||(s[6]=q(l=>i(f).push({path:"/search",query:{search:i(k)}}),["enter"]))},null,40,Ot),[[H,i(k)]]),Pt,t("p",Vt,[t("a",{class:E([{current:i($)}]),onClick:s[7]||(s[7]=l=>L("en"))},"EN",2),t("a",{class:E([{current:i(g)}]),onClick:s[8]||(s[8]=l=>L("lao"))},"LA",2)]),zt,t("div",Gt,[t("button",{class:"button small",onClick:s[9]||(s[9]=l=>i(f).push({path:"/auth/login"}))},c(e.$t("login")),1),t("button",{class:"button main small",onClick:s[10]||(s[10]=l=>i(f).push({path:"/auth/register"}))},c(e.$t("register")),1)])])])])}}});const Dt=O(Mt,[["__scopeId","data-v-3872b947"]]),Zt=""+new URL("Logo.d939d081.png",import.meta.url).href,Z=v=>(W("data-v-f0afa01d"),v=v(),j(),v),Ft={class:"container"},Ht={class:"grids is-14-desktop is-1-mobile"},xt=Z(()=>t("li",{class:"span-4-desktop"},[t("div",{class:"logo margin-bottom-10"},[t("img",{src:Zt,alt:""}),t("h3",null,"THE BIZ HUB")]),t("small",{class:"margin-bottom-15"},"1st Floor, 108Hill Building Dongpaina Road, Saphanthong Village, Sisattanak District, Vientiane Capital, Lao PDR."),t("small",null,"020 56463959 | 020 56508160"),t("small",null,"thebizhub.info@gmail.com")],-1)),qt={class:"span-5-desktop"},Wt=Z(()=>t("h3",null,"Learning",-1)),jt=Y('<li class="span-5-desktop" data-v-f0afa01d><h3 data-v-f0afa01d>Product &amp; Services</h3><ul data-v-f0afa01d><li data-v-f0afa01d>BIZ COACHING</li><li data-v-f0afa01d>BIZ COURSES</li><li data-v-f0afa01d>PROJECT BUSINESS CONSULTANT</li></ul><div class="socials" data-v-f0afa01d><h3 data-v-f0afa01d>Follow us on</h3><ul data-v-f0afa01d><li data-v-f0afa01d><a href="https://www.facebook.com/profile.php?id=100091801856212" target="_blank" data-v-f0afa01d><i class="fa-brands fa-facebook" data-v-f0afa01d></i></a></li><li data-v-f0afa01d><a href="https://www.tiktok.com/@thebizhublaos" target="_blank" data-v-f0afa01d><i class="fa-brands fa-tiktok" data-v-f0afa01d></i></a></li><li data-v-f0afa01d><a href="https://www.youtube.com/@TheBIZHUB" target="_blank" data-v-f0afa01d><i class="fa-brands fa-youtube" data-v-f0afa01d></i></a></li></ul></div></li>',1),Kt=Z(()=>t("div",{class:"footer"},[t("p",null," Copyright © 108-1009 Group Co., Ltd. | Designed and Developed by Semicolon Sole Co., Ltd. ")],-1)),Jt=M({__name:"Footer",setup(v){const m=V().$axios;z();const f=u([]),b=u([]);u();const T=u(),k=u(!1),N=u(!1),$=B("lang"),g=G();g.locale.value=$.value||"en",k.value=$.value==="en",N.value=$.value==="lao";const S=async()=>{const y="Product & Services";await m.post(`get-group/${y}`).then(n=>{n.status===200&&(f.value=n.data.info.items)})},w=async()=>{const y="Learning";await m.post(`get-group/${y}`).then(n=>{n.status===200&&(b.value=n.data.info.items)})};return(async()=>{const y=await m.post("get-category-filter/Category");T.value=y.data.info})(),S(),w(),(y,n)=>{const U=P;return h(),C(R,null,[t("section",null,[t("div",Ft,[t("ul",Ht,[xt,t("li",qt,[Wt,t("ul",null,[(h(!0),C(R,null,D(i(b),(L,e)=>(h(),C("li",{key:e},[d(U,{to:{path:"/category",query:{is:`${L.name}`}}},{default:_(()=>[p(c(L.name),1)]),_:2},1032,["to"])]))),128))])]),jt])])]),Kt],64)}}});const Qt=O(Jt,[["__scopeId","data-v-f0afa01d"]]),Xt={};function Yt(v,m){const f=Dt,b=Qt;return h(),C("div",null,[d(f),t("main",null,[tt(v.$slots,"default")]),d(b)])}const na=O(Xt,[["render",Yt]]);export{na as default};
