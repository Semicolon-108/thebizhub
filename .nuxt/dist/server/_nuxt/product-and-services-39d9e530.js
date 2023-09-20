import { ssrRenderAttrs, ssrRenderList } from "vue/server-renderer";
import { useSSRContext } from "vue";
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
const productAndServices_vue_vue_type_style_index_0_scoped_c9a6c7a0_lang = "";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(_attrs)} data-v-c9a6c7a0><div class="container" data-v-c9a6c7a0><h1 class="section-title" data-v-c9a6c7a0>ຜະລິດຕະພັນ/ການບໍລິການຂອງເຮົາ</h1><ul class="image-list grids is-3-desktop is-1-mobile gap-20" data-v-c9a6c7a0><!--[-->`);
  ssrRenderList(3, (i, index) => {
    _push(`<li data-v-c9a6c7a0><img class="image-card" src="https://envato-shoebox-0.imgix.net/4a65/bbee-cd5c-4859-9db4-f17eda923f6f/2439421.jpg?auto=compress%2Cformat&amp;fit=max&amp;mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&amp;markalign=center%2Cmiddle&amp;markalpha=18&amp;w=1000&amp;s=c07228076b4d4daa82aa19ee9e50e59d" data-v-c9a6c7a0><h3 data-v-c9a6c7a0>ບໍລິການໃຫ້ຄາປຶກສາ ກ່ຽວກັບທຸລະກິດ</h3></li>`);
  });
  _push(`<!--]--></ul></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about-us/product-and-services.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ProductAndServcie = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-c9a6c7a0"]]);
export {
  ProductAndServcie as default
};
//# sourceMappingURL=product-and-services-39d9e530.js.map
