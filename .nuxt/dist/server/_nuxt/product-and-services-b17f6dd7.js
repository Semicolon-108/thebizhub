import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_0 } from "./biz-course-3b1421a5.js";
import { _ as _imports_0$1 } from "./biz-coaching-a3c25516.js";
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
const _imports_2 = "" + __buildAssetsURL("project-business-consultancy.5f79db5e.png");
const productAndServices_vue_vue_type_style_index_0_scoped_10e5499e_lang = "";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(_attrs)} data-v-10e5499e><div class="container" data-v-10e5499e><h1 class="section-title" data-v-10e5499e>ຜະລິດຕະພັນ/ການບໍລິການຂອງເຮົາ</h1><ul class="image-list grids is-3-desktop is-1-mobile gap-20-desktop" data-v-10e5499e><li data-v-10e5499e><img${ssrRenderAttr("src", _imports_0)} data-v-10e5499e><h3 data-v-10e5499e>ຫຼັກສູດຝຶກອົບຮົມທາງທຸລະກິດ (BIZ COURSES)</h3></li><li data-v-10e5499e><img${ssrRenderAttr("src", _imports_0$1)} data-v-10e5499e><h3 data-v-10e5499e>ບໍລິການໃຫ້ຄໍາປຶກສາທາງທຸລະກິດ ( BIZ COACHING )</h3></li><li data-v-10e5499e><img${ssrRenderAttr("src", _imports_2)} data-v-10e5499e><h3 data-v-10e5499e>Project/Business Consultancy (BIZ CONSULTING)</h3></li></ul></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about-us/product-and-services.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ProductAndServcie = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-10e5499e"]]);
export {
  ProductAndServcie as default
};
//# sourceMappingURL=product-and-services-b17f6dd7.js.map
