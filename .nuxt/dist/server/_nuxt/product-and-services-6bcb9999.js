import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_1, a as _imports_0, b as _imports_2 } from "./project-business-consultancy-b808dbae.js";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../server.mjs";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "ufo";
import "destr";
import "defu";
import "klona";
import "devalue";
import "axios";
import "vue-i18n";
const productAndServices_vue_vue_type_style_index_0_scoped_172188cf_lang = "";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(_attrs)} data-v-172188cf><div class="container" data-v-172188cf><h1 class="section-title" data-v-172188cf>ຜະລິດຕະພັນ/ການບໍລິການຂອງເຮົາ</h1><ul class="image-list grids is-3-desktop is-1-mobile gap-20-desktop" data-v-172188cf><li data-v-172188cf><img${ssrRenderAttr("src", _imports_1)} data-v-172188cf><h3 data-v-172188cf>ຫຼັກສູດຝຶກອົບຮົມທາງທຸລະກິດ (BIZ COURSES)</h3></li><li data-v-172188cf><img${ssrRenderAttr("src", _imports_0)} data-v-172188cf><h3 data-v-172188cf>ບໍລິການໃຫ້ຄໍາປຶກສາທາງທຸລະກິດ ( BIZ COACHING )</h3></li><li data-v-172188cf><img${ssrRenderAttr("src", _imports_2)} data-v-172188cf><h3 data-v-172188cf>Project/Business Consultancy (BIZ CONSULTING)</h3></li></ul></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about-us/product-and-services.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ProductAndServcie = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-172188cf"]]);
export {
  ProductAndServcie as default
};
//# sourceMappingURL=product-and-services-6bcb9999.js.map
