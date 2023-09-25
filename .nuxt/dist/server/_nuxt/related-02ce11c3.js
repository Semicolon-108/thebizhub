import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_0 } from "./img-05-a01997b4.js";
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
const related_vue_vue_type_style_index_0_scoped_64e5dd0e_lang = "";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<ul${ssrRenderAttrs(_attrs)} data-v-64e5dd0e><!--[-->`);
  ssrRenderList(3, (i, index) => {
    _push(`<li data-v-64e5dd0e><div class="card" data-v-64e5dd0e><div class="card-image" data-v-64e5dd0e><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-64e5dd0e></div><div class="card-content" data-v-64e5dd0e><p class="tag-list" data-v-64e5dd0e><span data-v-64e5dd0e>Learning</span><span data-v-64e5dd0e>SME &amp; Startup</span></p><h3 data-v-64e5dd0e>Home / NETWORK (Wireless) / Range extender &amp; mesh wifi / Whole-home mesh tp-link (deco e4) wireless ac1200 dual band (pack 2) </h3></div></div></li>`);
  });
  _push(`<!--]--></ul>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog-detail/related.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Releted = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-64e5dd0e"]]);
export {
  Releted as default
};
//# sourceMappingURL=related-02ce11c3.js.map
