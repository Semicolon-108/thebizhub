import{a as k,b as v,_ as J}from"./entry.c8633c9f.js";import{_ as x}from"./team.d88c3c20.js";import w from"./product-and-services.0c58c869.js";import{_ as I}from"./works.vue.9b45478b.js";import{j as y,a,b as B,D as i,P as g,Q as e,F as S,X as A,u as h,A as l,R as d,V as E,W as N}from"./swiper-vue.f59f6eb8.js";import"./gallery.27058e3d.js";const n=s=>(E("data-v-ab25f69b"),s=s(),N(),s),F={class:"container"},H={class:"section"},V=n(()=>e("h1",{class:"page-title"},"THE BIZ HUB ແມ່ນຫຍັງ?",-1)),$={class:"grids is-2-desktop is-1-mobile gap-20-desktop"},L={class:"margin-bottom-10"},M=n(()=>e("img",{class:"top-image",src:x},null,-1)),C=n(()=>e("h1",{class:"section-title"},"ຜົນງານຂອງ THE BIZ HUB",-1)),D=y({__name:"index",setup(s){const m=k().$axios,{locale:o}=v(),c=a(),p=a([]),b=a([]);a([{name:"ຮ່ວມຈັດງານ Job Fest ງານມະຫະກໍາວຽກເຮັດງານທໍາແບບເປີດກ້ວາງ 2023",images:[{img:"Jobfest/jobfest20231.jpg"},{img:"Jobfest/jobfest20232.jpg"},{img:"Jobfest/jobfest20233.jpg"},{img:"Jobfest/jobfest20234.jpg"},{img:"Jobfest/jobfest20235.jpg"},{img:"Jobfest/jobfest20236.jpg"}]},{name:"3.	ເປັນຜູ້ໃຫ້ຄໍາປຶກສາ ( Mentor ແລະ Coach ) ໃຫ້ກັບຫຼາຍກ່ວາ 20 ທຸລະກິດ, ພາຍໃຕ້ໂຄງການ ASEAN Mentorship For Entrepreneurs Network ( AMEN )",images:[{img:"amen/amen1.jpg"},{img:"amen/amen2.jpg"},{img:"amen/amen3.jpg"},{img:"amen/amen4.jpg"},{img:"amen/amen5.jpg"},{img:"amen/amen6.jpg"},{img:"amen/amen7.jpg"}]},{name:"ຮ່ວມຈັດງານ ມະຫາກໍາວຽກເຮັດງານທໍາທ່າແຂກ, ແຂວງຄໍາມ່ວນ ແລະ ຈັດຝຶກອົບຮົມ ຫົວຂໍ້: ການປະກອບອາຊີບດ້ວຍຕົນເອງ",images:[{img:"Jobfest/jobfest-thakhek1.jpg"},{img:"Jobfest/jobfest-thakhek2.jpg"},{img:"Jobfest/jobfest-thakhek3.jpg"},{img:"Jobfest/jobfest-thakhek4.jpg"},{img:"Jobfest/jobfest-thakhek5.jpg"},{img:"Jobfest/jobfest-thakhek6.jpg"},{img:"Jobfest/jobfest-thakhek7.jpg"}]},{name:"ຮ່ວມຈັດງານ ກິດຈະກໍາລະນຶກເຖິງວັນກໍາມະກອນສາກົນ  ແລະ ຈັດຝຶກອົບຮົມ ຫົວຂໍ້: ການປະກອບອາຊີບດ້ວຍຕົນເອງ",images:[{img:"Jobfest/jobfest-labour1.jpg"},{img:"Jobfest/jobfest-labour2.jpg"},{img:"Jobfest/jobfest-labour3.jpg"}]},{name:"ການຈັດຝຶກອົບຮົມແບບເຊິ່ງໜ້າ",images:[{img:"coaching/coaching1.jpg"},{img:"coaching/coaching2.jpg"},{img:"coaching/coaching3.jpg"},{img:"coaching/coaching4.jpg"}]},{name:"ທີມຄູຝຶກ ແລະ ທີ່ປຶກສາຂອງໂຄງການຝຶກອົບຮົມພຶ້ນຖານການປະກອບທຸລະກິດ ພາຍໃຕ້ໂຄງການ Vtess, Swisscontact",images:[{img:"bet/bet1.jpg"},{img:"bet/bet2.jpg"},{img:"bet/bet3.jpg"},{img:"bet/bet4.jpg"},{img:"bet/bet5.jpg"},{img:"bet/bet6.jpg"},{img:"bet/bet7.jpg"}]}]);const r=async()=>{await m.post(`get-achievement-api?lang=${c.value}`).then(t=>{t&&(p.value=t.data.info)})},f=async()=>{const t=o.value?o.value:"en",j=await m.post(`get-intro-api?lang=${t}`);b.value=j.data.info};return r(),f(),B(()=>o.value,t=>{c.value=t,r(),f()},{immediate:!0,deep:!0}),(t,j)=>(i(),g("div",null,[e("div",F,[e("section",H,[V,e("div",$,[(i(!0),g(S,null,A(h(b),(_,u)=>(i(),g("div",{class:"box",key:u},[e("h3",L,d(_.key),1),e("p",null,d(_.desc),1)]))),128))])])]),M,l(w),C,l(I,{work:h(p)},null,8,["work"])]))}});const R=J(D,[["__scopeId","data-v-ab25f69b"]]);export{R as default};
