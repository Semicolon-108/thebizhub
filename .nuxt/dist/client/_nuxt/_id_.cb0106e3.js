import{a as m,d as N,c as V,u as D,_ as U}from"./entry.4b7e5ca5.js";import{_ as j}from"./related.vue.89ac1ff7.js";import{j as z,a as i,a8 as P,D as o,P as s,Q as t,u as a,F as y,a0 as A,R as p,X as C,A as F,Y as M,V as Y,W as Z}from"./swiper-vue.9585ef87.js";const h=l=>(Y("data-v-56383a20"),l=l(),Z(),l),G={id:"blog-detail"},Q={class:"has-bg"},W={class:"container"},X=["src"],q=["src"],J={class:"container content"},K={class:"blog-title"},O={class:"blog-info"},tt={class:"tag"},at={class:"post-date"},et={class:"social"},ot=["href"],st=h(()=>t("i",{class:"fa-brands fa-facebook"},null,-1)),it=[st],nt=["href"],ct=h(()=>t("i",{class:"fa-brands fa-whatsapp"},null,-1)),lt=[ct],rt={key:1,class:"fa-light fa-check checkStatus"},dt=["innerHTML"],_t={class:"tags"},pt=h(()=>t("strong",null,"TAGS:",-1)),ht=["onClick"],ut=M('<div class="follow-us" data-v-56383a20><h1 data-v-56383a20>ສາມາດຕິດຕາມ THEBIZHUB</h1><p data-v-56383a20>ຜ່ານແອັບພິເຄຊັ້ນຕ່າງໆ ທີ່ທ່ານສະດວກ ຫຼື ໃຊ້ງານຢູ່ແລ້ວໄດ້ເລີຍ</p><ul data-v-56383a20><li data-v-56383a20><a href="https://www.facebook.com/profile.php?id=100091801856212" target="_blank" data-v-56383a20><i class="fa-brands fa-facebook" data-v-56383a20></i></a></li><li data-v-56383a20><a href="https://www.tiktok.com/@thebizhublaos" target="_blank" data-v-56383a20><i class="fa-brands fa-tiktok" data-v-56383a20></i></a></li><li data-v-56383a20><a href="https://www.youtube.com/@TheBIZHUB" target="_blank" data-v-56383a20><i class="fa-brands fa-youtube" data-v-56383a20></i></a></li></ul></div>',1),ft={key:0,class:"blog-footer"},gt=h(()=>t("h3",{class:"section-title"},"RELATED ARTICLES",-1)),vt=z({__name:"[id]",async setup(l){let w,k;const R=m().$imageURL,S=m().$axios,r=m().$https,n=N(),B=V(),I=i(),d=i(),_=i(),u=i(""),$=i(),x=i(),f=i(),L=i(),g=i([]),T=i(!0),E=async()=>{const v=n.params.id;v&&await S.post(`articles-detail/${v}`).then(e=>{e.status===200&&(d.value=e.data.info.title,_.value=R+e.data.info.coverPage,$.value=e.data.info.tag,x.value=e.data.info.category,f.value=e.data.info.details,L.value=e.data.info.createdAt,g.value=e.data.isRelated,e.data.info.videoLink&&(u.value="https://www.youtube.com/embed/"+e.data.info.videoLink))}).catch(e=>{e&&(I.value="Data empty")})};[w,k]=P(()=>E()),await w,k();const H=()=>{navigator.clipboard.writeText(r+"blog-detail/"+n.params.id),T.value=!1};return D({title:d,meta:[{hid:"og:title",property:"og:title",content:d},{hid:"og:description",property:"og:description",content:f},{hid:"og:type",property:"og:type",content:"website"},{hid:"og:url",property:"og:url",content:r+"blog-detail/"+n.params.id},{hid:"og:image",property:"og:image",content:_}]}),(v,e)=>(o(),s("div",G,[t("section",Q,[t("div",W,[a(u)?(o(),s("iframe",{key:0,src:a(u),class:"youtube",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""},null,8,X)):(o(),s(y,{key:1},[a(_)?(o(),s("img",{key:0,src:a(_),alt:""},null,8,q)):A("",!0)],64))])]),t("div",J,[t("h1",K,p(a(d)),1),t("ul",O,[t("li",tt,[t("p",null,[(o(!0),s(y,null,C(a(x),(c,b)=>(o(),s("span",{key:b},p(c.name),1))),128))])]),t("li",at,p(a(L)),1),t("li",et,[t("p",null,[t("a",{href:`https://www.facebook.com/sharer/sharer.php?u=${a(r)}blog-detail/${a(n).params.id}`,onclick:"javascript:window.open(this.href,'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;"},it,8,ot),t("a",{href:`whatsapp://send?text=${a(r)}blog-detail/${a(n).params.id}`,onclick:"javascript:window.open(this.href,'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;"},lt,8,nt),a(T)?(o(),s("i",{key:0,class:"fa-light fa-link",onClick:e[0]||(e[0]=c=>H())})):(o(),s("i",rt))])])]),t("div",{class:"blog-detail",innerHTML:a(f)},null,8,dt),t("div",_t,[pt,(o(!0),s(y,null,C(a($),(c,b)=>(o(),s("a",{key:b,onClick:bt=>a(B).push(`/tag/${c._id}`)},p(c.name),9,ht))),128))]),ut,a(g).length?(o(),s("div",ft,[gt,F(j,{relate:a(g)},null,8,["relate"])])):A("",!0)])]))}});const kt=U(vt,[["__scopeId","data-v-56383a20"]]);export{kt as default};
