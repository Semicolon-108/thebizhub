import{j as A,a as o,b as L,D as t,P as c,Q as a,U as v,R as g,F as f,X as w,u as s,a2 as C,A as x,G as S,E as y,Y as G,Z as R,_ as U,$ as F,V as D,W as E,a0 as q,a1 as O}from"./swiper-vue.f59f6eb8.js";import{a as k,b as Q,_ as T}from"./entry.e2b7d354.js";import{_ as W}from"./biz-course.93952e5b.js";import X from"./gallery.b2286b47.js";const Y=""+new URL("1.748220c8.png",import.meta.url).href,Z=""+new URL("2.bb73bd9b.png",import.meta.url).href,_=i=>(D("data-v-22405b7b"),i=i(),E(),i),z={class:"container video-container"},H={class:"grids is-2-desktop gap-30-desktop is-1-mobile gap-10-mobile"},J=_(()=>a("div",{class:"image"},[a("img",{src:W,alt:""})],-1)),K={class:"text"},M=_(()=>a("h3",null,[v(" Project / Business Consultancy "),a("br"),v(" ແມ່ນຫຍັງ? ")],-1)),aa={class:"contact"},ea=C('<div class="icons" data-v-22405b7b><a href="https://wa.me/8562056508160" data-v-22405b7b><i class="fa-brands fa-square-whatsapp" data-v-22405b7b></i></a><a href="http://m.me/100091801856212" data-v-22405b7b><i class="fa-brands fa-facebook-messenger" data-v-22405b7b></i></a></div>',1),sa=C('<section data-v-22405b7b><div class="container" data-v-22405b7b><h3 class="section-title" data-v-22405b7b>Project / Business Consultancy ເໝາະກັບໃຜ</h3><div class="grids is-2-desktop gap-10-desktop" data-v-22405b7b><div class="element" data-v-22405b7b><img src="'+Y+'" data-v-22405b7b><p data-v-22405b7b>ບໍລິສັດ/ອົງກອນ</p></div><div class="element" data-v-22405b7b><img src="'+Z+'" data-v-22405b7b><p data-v-22405b7b> ໂຄງການທີ່ປິ່ນອ້ອມວຽກງານ ການປະກອບອາຊີບດ້ວຍຕົນເອງ ແລະ ການປະກອບທຸລະກິດ </p></div></div></div></section>',1),ta={class:"container"},oa=_(()=>a("h3",{class:"section-title"},"ຜົນງານທີ່ຜ່ານມາ",-1)),ia={class:"header"},na={class:"body"},ca=["src"],la=A({__name:"project-business-consultant",setup(i){const B=k().$axios,I=k().$imageURL,{locale:N}=Q(),b=o(),l=o(!1),m=o([]),$=o("Project/Business Consultancy"),h=o(""),j=(e,n)=>{const d=n.find(r=>r==e);h.value=d,l.value=!0},P=async()=>{await B.post(`get-achievement-api?lang=${b.value}&area=${$.value}`).then(e=>{e&&(m.value=e.data.info)})};return L(()=>N.value,e=>{b.value=e,P()},{immediate:!0,deep:!0}),(e,n)=>{const d=q,r=O;return t(),c("div",null,[a("section",null,[a("div",z,[a("div",H,[J,a("div",K,[M,v(" ບໍລິການທີ່ປຶກສາໂຄງການ ແລະ ທຸລະກິດ ສະໜອງວຽກງານການໃຫ້ຄຳປຶກສາ, ວາງແຜນ, ຈັດຕັ້ງປະຕິບັດ ແລະ ປະເມີນຜົນສຳເລັດຂອງໂຄງການ ທີ່ກ່ຽວຂ້ອງກັບການປະກອບອາຊີບດ້ວຍຕົນເອງ, ການປະກອບທຸລະກິດ ແລະ ການເຕີບໂຕຂອງທຸລະກິດ. "),a("div",aa,[a("h3",null,g(e.$t("contact_us")),1),ea])])])])]),sa,a("section",null,[a("div",ta,[oa,(t(!0),c(f,null,w(s(m),(p,V)=>(t(),c("div",{class:"work",key:V},[a("div",ia,[a("h3",null,g(p.title),1)]),a("div",na,[x(r,{modules:["SwiperAutoplay"in e?e.SwiperAutoplay:s(G),"SwiperPagination"in e?e.SwiperPagination:s(R),"SwiperNavigation"in e?e.SwiperNavigation:s(U)],"slides-per-view":3,"space-between":20,loop:!1,effect:"creative",navigation:"",pagination:{clickable:!0,el:".swiper-pagination"},autoplay:{delay:8e3,disableOnInteraction:!0}},{default:S(()=>[(t(!0),c(f,null,w(p.image,u=>(t(),y(d,{onClick:da=>j(u,p.image)},{default:S(()=>[a("img",{src:s(I)+u},null,8,ca)]),_:2},1032,["onClick"]))),256))]),_:2},1032,["modules","pagination"])]),s(l)?(t(),y(X,{key:0,data:s(h),onCloseShowGallery:n[0]||(n[0]=u=>l.value=!1)},null,8,["data"])):F("",!0)]))),128))])])])}}});const _a=T(la,[["__scopeId","data-v-22405b7b"]]);export{_a as default};
