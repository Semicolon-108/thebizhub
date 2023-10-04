import { defineComponent, ref, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { _ as _imports_0 } from "./team-2b5e560f.js";
import ProductAndServcie from "./product-and-services-9ba6848e.js";
import Works from "./works-4939ed38.js";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "devalue";
import "h3";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "ufo";
import "destr";
import "klona";
import "axios";
import "defu";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const works = ref([
      {
        name: "ຮ່ວມຈັດງານ Job Fest ງານມະຫະກໍາວຽກເຮັດງານທໍາແບບເປີດກ້ວາງ 2023",
        images: [
          {
            img: "Jobfest/jobfest20231.jpg"
          },
          {
            img: "Jobfest/jobfest20232.jpg"
          },
          {
            img: "Jobfest/jobfest20233.jpg"
          },
          {
            img: "Jobfest/jobfest20234.jpg"
          },
          {
            img: "Jobfest/jobfest20235.jpg"
          },
          {
            img: "Jobfest/jobfest20236.jpg"
          }
        ]
      },
      {
        name: "3.	ເປັນຜູ້ໃຫ້ຄໍາປຶກສາ ( Mentor ແລະ Coach ) ໃຫ້ກັບຫຼາຍກ່ວາ 20 ທຸລະກິດ, ພາຍໃຕ້ໂຄງການ ASEAN Mentorship For Entrepreneurs Network ( AMEN )",
        images: [
          {
            img: "amen/amen1.jpg"
          },
          {
            img: "amen/amen2.jpg"
          },
          {
            img: "amen/amen3.jpg"
          },
          {
            img: "amen/amen4.jpg"
          },
          {
            img: "amen/amen5.jpg"
          },
          {
            img: "amen/amen6.jpg"
          },
          {
            img: "amen/amen7.jpg"
          }
        ]
      },
      {
        name: "ຮ່ວມຈັດງານ ມະຫາກໍາວຽກເຮັດງານທໍາທ່າແຂກ, ແຂວງຄໍາມ່ວນ ແລະ ຈັດຝຶກອົບຮົມ ຫົວຂໍ້: ການປະກອບອາຊີບດ້ວຍຕົນເອງ",
        images: [
          {
            img: "Jobfest/jobfest-thakhek1.jpg"
          },
          {
            img: "Jobfest/jobfest-thakhek2.jpg"
          },
          {
            img: "Jobfest/jobfest-thakhek3.jpg"
          },
          {
            img: "Jobfest/jobfest-thakhek4.jpg"
          },
          {
            img: "Jobfest/jobfest-thakhek5.jpg"
          },
          {
            img: "Jobfest/jobfest-thakhek6.jpg"
          },
          {
            img: "Jobfest/jobfest-thakhek7.jpg"
          }
        ]
      },
      {
        name: "ຮ່ວມຈັດງານ ກິດຈະກໍາລະນຶກເຖິງວັນກໍາມະກອນສາກົນ  ແລະ ຈັດຝຶກອົບຮົມ ຫົວຂໍ້: ການປະກອບອາຊີບດ້ວຍຕົນເອງ",
        images: [
          {
            img: "Jobfest/jobfest-labour1.jpg"
          },
          {
            img: "Jobfest/jobfest-labour2.jpg"
          },
          {
            img: "Jobfest/jobfest-labour3.jpg"
          }
        ]
      },
      {
        name: "ການຈັດຝຶກອົບຮົມແບບເຊິ່ງໜ້າ",
        images: [
          {
            img: "coaching/coaching1.jpg"
          },
          {
            img: "coaching/coaching2.jpg"
          },
          {
            img: "coaching/coaching3.jpg"
          },
          {
            img: "coaching/coaching4.jpg"
          }
        ]
      },
      {
        name: "ທີມຄູຝຶກ ແລະ ທີ່ປຶກສາຂອງໂຄງການຝຶກອົບຮົມພຶ້ນຖານການປະກອບທຸລະກິດ ພາຍໃຕ້ໂຄງການ Vtess, Swisscontact",
        images: [
          {
            img: "bet/bet1.jpg"
          },
          {
            img: "bet/bet2.jpg"
          },
          {
            img: "bet/bet3.jpg"
          },
          {
            img: "bet/bet4.jpg"
          },
          {
            img: "bet/bet5.jpg"
          },
          {
            img: "bet/bet6.jpg"
          },
          {
            img: "bet/bet7.jpg"
          }
        ]
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-34edd90d><section data-v-34edd90d><div class="container" data-v-34edd90d><h1 class="page-title" data-v-34edd90d>THE BIZ HUB ແມ່ນຫຍັງ?</h1><div class="grids is-2-desktop is-1-mobile gap-20-desktop" data-v-34edd90d><div class="box span-2-desktop" data-v-34edd90d><div class="grids is-5-desktop is-1-mobile gap-20-desktop" data-v-34edd90d><h1 class="span-2-desktop" data-v-34edd90d> PARTNER FOR SUCCESS IN BUSINESS AND ENTREPRENEURSHIP </h1><p class="span-3-desktop" data-v-34edd90d> ຄູ່ຮ່ວມງານເພື່ອຄວາມສາເລດໃນດ້ານທຸລະກິດ ແລະ ການເປນຜູ້ ປະກອບການ ພວກເຮາມຸ່ງໝັ້ນໃນການສົ່ງເສີມ ແລະ ເສີມສ້າງຜູ້ ປະກອບການລຸ້ນໃໝ່ ຫຼື ຜູ້ທີ່ກາລັງເລີ່ມຕົ້ນເຮດທຸລະກິດທີ່ຕ້ອງ ການພັດທະນາຕົນເອງ ແລະທຸລະກິດໃຫ້ເຕີບໂຕຢ່າງບຢຸດຢັ້ງ. </p></div></div><div class="box" data-v-34edd90d><h3 class="margin-bottom-10" data-v-34edd90d>ພາລະກິດ ວິໄສທັດ</h3><p data-v-34edd90d> ເພື່ອສະໜອງບໍລິການໃຫ້ຄາປຶກສາ,ຂມູນຂ່າວສານ, ການຝຶກອົບຮົມແລະເຄື່ອງມືທີ່ຈາເປນໃນການລິເລີ່ມ ທຸລະກິດໃຫ້ເຂ້ມແຂງ ແລະ ສ້າງການປ່ຽນແປງທີ່ດີ ສູ່ສັງຄົມ. </p></div><div class="box" data-v-34edd90d><h3 class="margin-bottom-10" data-v-34edd90d>ວິໄສທັດ</h3><p data-v-34edd90d> ເປນຂົວຕໃຫ້ກັບບັນດາຜູ້ທີ່ເລີ່ມຕົ້ນເຮດທຸລະກິດສາ ມາດກ້າວໄປສູ່ຄວາມສາເລດ </p></div></div></div></section><img class="top-image"${ssrRenderAttr("src", _imports_0)} data-v-34edd90d>`);
      _push(ssrRenderComponent(ProductAndServcie, null, null, _parent));
      _push(`<h1 class="section-title" data-v-34edd90d>ຜົນງານຂອງ THE BIZ HUB</h1>`);
      _push(ssrRenderComponent(Works, { work: unref(works) }, null, _parent));
      _push(`</div>`);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_34edd90d_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about-us/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-34edd90d"]]);
export {
  index as default
};
//# sourceMappingURL=index-c49b9120.js.map
