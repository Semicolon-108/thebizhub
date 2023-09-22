import { defineComponent, ref, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import ProductAndServcie from "./product-and-services-39d9e530.js";
import Works from "./works-5a851dff.js";
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
import "defu";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const works = ref([
      {
        name: "ມີສ່ວນຮ່ວມໃນການຈັດງານ Job fest ງານມະຫະກາວຽກເຮດງານທາແບບເປີດກ້ວາງ ປີ 2023"
      },
      {
        name: "ການໃຫ້ຄາປຶກສາທາງດ້ານທຸລະກິດ (BIZ Coaching) ໃຫ້ກັບຫຼາຍກ່ວາ 15 ທຸລະກິດ"
      },
      {
        name: "ເປນຜູ້ໃຫ້ຄາປຶກສາ (Mentor ແລະ Coach) ໃຫ້ກັບຫຼາຍກ່ວາ 20ທຸລະກິດ, ພາຍໃຕ້ໂຄງການ ASEAN Mentorship For Entrepreneurs Network (AMEN)"
      },
      {
        name: "ການຈັດຝຶກອົບຮົມແບບເຊິ່ງໜ້າ"
      },
      {
        name: "ທີມຄູຝຶກ ແລະ ທີ່ປຶກສາຂອງໂຄງການຝຶກອົບຮົມພຶ້ນຖານການປະກອບທຸລະກິດ ພາຍໃຕ້ໂຄງການ Vtess, Swisscontact"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-4f35e499><section data-v-4f35e499><div class="container" data-v-4f35e499><h1 class="page-title" data-v-4f35e499>THE BIZ HUB ແມ່ນຫຍັງ?</h1><div class="grids is-2-desktop is-1-mobile gap-20" data-v-4f35e499><div class="box span-2" data-v-4f35e499><div class="grids is-5-desktop is-1-mobile gap-20" data-v-4f35e499><h1 class="span-2" data-v-4f35e499> PARTNER FOR SUCCESS IN BUSINESS AND ENTREPRENEURSHIP </h1><p class="span-3" data-v-4f35e499> ຄູ່ຮ່ວມງານເພື່ອຄວາມສາເລດໃນດ້ານທຸລະກິດ ແລະ ການເປນຜູ້ ປະກອບການ ພວກເຮາມຸ່ງໝັ້ນໃນການສົ່ງເສີມ ແລະ ເສີມສ້າງຜູ້ ປະກອບການລຸ້ນໃໝ່ ຫຼື ຜູ້ທີ່ກາລັງເລີ່ມຕົ້ນເຮດທຸລະກິດທີ່ຕ້ອງ ການພັດທະນາຕົນເອງ ແລະທຸລະກິດໃຫ້ເຕີບໂຕຢ່າງບຢຸດຢັ້ງ. </p></div></div><div class="box" data-v-4f35e499><h3 class="margin-bottom-10" data-v-4f35e499>ພາລະກິດ ວິໄສທັດ</h3><p data-v-4f35e499> ເພື່ອສະໜອງບໍລິການໃຫ້ຄາປຶກສາ,ຂມູນຂ່າວສານ, ການຝຶກອົບຮົມແລະເຄື່ອງມືທີ່ຈາເປນໃນການລິເລີ່ມ ທຸລະກິດໃຫ້ເຂ້ມແຂງ ແລະ ສ້າງການປ່ຽນແປງທີ່ດີ ສູ່ສັງຄົມ. </p></div><div class="box" data-v-4f35e499><h3 class="margin-bottom-10" data-v-4f35e499>ວິໄສທັດ</h3><p data-v-4f35e499> ເປນຂົວຕໃຫ້ກັບບັນດາຜູ້ທີ່ເລີ່ມຕົ້ນເຮດທຸລະກິດສາ ມາດກ້າວໄປສູ່ຄວາມສາເລດ </p></div></div></div></section><img class="top-image" src="https://envato-shoebox-0.imgix.net/4a65/bbee-cd5c-4859-9db4-f17eda923f6f/2439421.jpg?auto=compress%2Cformat&amp;fit=max&amp;mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&amp;markalign=center%2Cmiddle&amp;markalpha=18&amp;w=1000&amp;s=c07228076b4d4daa82aa19ee9e50e59d" data-v-4f35e499>`);
      _push(ssrRenderComponent(ProductAndServcie, null, null, _parent));
      _push(`<h1 class="section-title" data-v-4f35e499>ຜົນງານຂອງ THE BIZ HUB</h1><!--[-->`);
      ssrRenderList(unref(works), (i, index2) => {
        _push(ssrRenderComponent(Works, {
          work: i.name,
          key: index2
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_4f35e499_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about-us/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4f35e499"]]);
export {
  index as default
};
//# sourceMappingURL=index-8b224a68.js.map
