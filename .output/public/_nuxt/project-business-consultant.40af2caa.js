import{j as V,a as o,b as x,L as t,X as c,Y as a,_ as v,Z as g,G as f,a1 as w,u as s,ad as C,H as A,N as S,M as y,a2 as G,a3 as R,a4 as U,a5 as F,$ as q,a0 as D,a6 as E,a7 as H}from"./swiper-vue.9087d98d.js";import{a as k,b as M,_ as O}from"./entry.900c67b2.js";import{_ as T}from"./biz-course.81973f94.js";import X from"./gallery.9ff5afcc.js";const Y=""+new URL("1.748220c8.png",import.meta.url).href,Z=""+new URL("2.bb73bd9b.png",import.meta.url).href,_=i=>(q("data-v-22405b7b"),i=i(),D(),i),z={class:"container video-container"},J={class:"grids is-2-desktop gap-30-desktop is-1-mobile gap-10-mobile"},K=_(()=>a("div",{class:"image"},[a("img",{src:T,alt:""})],-1)),Q={class:"text"},W=_(()=>a("h3",null,[v(" Project / Business Consultancy "),a("br"),v(" ແມ່ນຫຍັງ? ")],-1)),aa={class:"contact"},ea=C('<div class="icons" data-v-22405b7b><a href="https://wa.me/8562056508160" data-v-22405b7b><i class="fa-brands fa-square-whatsapp" data-v-22405b7b></i></a><a href="http://m.me/100091801856212" data-v-22405b7b><i class="fa-brands fa-facebook-messenger" data-v-22405b7b></i></a></div>',1),sa=C('<section data-v-22405b7b><div class="container" data-v-22405b7b><h3 class="section-title" data-v-22405b7b>Project / Business Consultancy ເໝາະກັບໃຜ</h3><div class="grids is-2-desktop gap-10-desktop" data-v-22405b7b><div class="element" data-v-22405b7b><img src="'+Y+'" data-v-22405b7b><p data-v-22405b7b>ບໍລິສັດ/ອົງກອນ</p></div><div class="element" data-v-22405b7b><img src="'+Z+'" data-v-22405b7b><p data-v-22405b7b> ໂຄງການທີ່ປິ່ນອ້ອມວຽກງານ ການປະກອບອາຊີບດ້ວຍຕົນເອງ ແລະ ການປະກອບທຸລະກິດ </p></div></div></div></section>',1),ta={class:"container"},oa=_(()=>a("h3",{class:"section-title"},"ຜົນງານທີ່ຜ່ານມາ",-1)),ia={class:"header"},na={class:"body"},ca=["src"],la=V({__name:"project-business-consultant",setup(i){const N=k().$axios,B=k().$imageURL,{locale:I}=M(),b=o(),l=o(!1),m=o([]),$=o("Project/Business Consultancy"),h=o(""),j=(e,n)=>{const d=n.find(r=>r==e);h.value=d,l.value=!0},L=async()=>{await N.post(`get-achievement-api?lang=${b.value}&area=${$.value}`).then(e=>{e&&(m.value=e.data.info)})};return x(()=>I.value,e=>{b.value=e,L()},{immediate:!0,deep:!0}),(e,n)=>{const d=E,r=H;return t(),c("div",null,[a("section",null,[a("div",z,[a("div",J,[K,a("div",Q,[W,v(" ບໍລິການທີ່ປຶກສາໂຄງການ ແລະ ທຸລະກິດ ສະໜອງວຽກງານການໃຫ້ຄຳປຶກສາ, ວາງແຜນ, ຈັດຕັ້ງປະຕິບັດ ແລະ ປະເມີນຜົນສຳເລັດຂອງໂຄງການ ທີ່ກ່ຽວຂ້ອງກັບການປະກອບອາຊີບດ້ວຍຕົນເອງ, ການປະກອບທຸລະກິດ ແລະ ການເຕີບໂຕຂອງທຸລະກິດ. "),a("div",aa,[a("h3",null,g(e.$t("contact_us")),1),ea])])])])]),sa,a("section",null,[a("div",ta,[oa,(t(!0),c(f,null,w(s(m),(p,P)=>(t(),c("div",{class:"work",key:P},[a("div",ia,[a("h3",null,g(p.title),1)]),a("div",na,[A(r,{modules:["SwiperAutoplay"in e?e.SwiperAutoplay:s(G),"SwiperPagination"in e?e.SwiperPagination:s(R),"SwiperNavigation"in e?e.SwiperNavigation:s(U)],"slides-per-view":3,"space-between":20,loop:!1,effect:"creative",navigation:"",pagination:{clickable:!0,el:".swiper-pagination"},autoplay:{delay:8e3,disableOnInteraction:!0}},{default:S(()=>[(t(!0),c(f,null,w(p.image,u=>(t(),y(d,{onClick:da=>j(u,p.image)},{default:S(()=>[a("img",{src:s(B)+u},null,8,ca)]),_:2},1032,["onClick"]))),256))]),_:2},1032,["modules","pagination"])]),s(l)?(t(),y(X,{key:0,data:s(h),onCloseShowGallery:n[0]||(n[0]=u=>l.value=!1)},null,8,["data"])):F("",!0)]))),128))])])])}}});const _a=O(la,[["__scopeId","data-v-22405b7b"]]);export{_a as default};