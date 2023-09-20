import { defineComponent, mergeProps, useSSRContext, unref } from "vue";
import "hookable";
import { u as useRouter, _ as _export_sfc, a as useRoute } from "../server.mjs";
import "destr";
import "devalue";
import "klona";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { _ as _imports_0 } from "./img-05-a01997b4.js";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "h3";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "ufo";
import "defu";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "card-list",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<ul${ssrRenderAttrs(mergeProps({ class: "grids is-3-desktop is-1-mobile gap-20 margin-top-20" }, _attrs))} data-v-5bdc65af><!--[-->`);
      ssrRenderList(10, (i, index2) => {
        _push(`<li data-v-5bdc65af><div class="card" data-v-5bdc65af><div class="card-image" data-v-5bdc65af><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-5bdc65af></div><div class="card-content" data-v-5bdc65af><p class="tag-list" data-v-5bdc65af><span data-v-5bdc65af>Learning</span><span data-v-5bdc65af>SME &amp; Startup</span></p><h3 data-v-5bdc65af> Home / NETWORK (Wireless) / Range extender &amp; mesh wifi / Whole-home mesh tp-link (deco e4) wireless ac1200 dual band (pack 2) </h3></div></div></li>`);
      });
      _push(`<!--]--></ul>`);
    };
  }
});
const cardList_vue_vue_type_style_index_0_scoped_5bdc65af_lang = "";
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/category/card-list.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const CategoryCardList = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-5bdc65af"]]);
const index_vue_vue_type_style_index_0_scoped_377c0044_lang = "";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(_attrs)} data-v-377c0044><div class="container" data-v-377c0044><h1 class="page-title" data-v-377c0044>${ssrInterpolate(unref(route).query.is)}</h1><div class="tabs-container" data-v-377c0044><ul class="tabs" data-v-377c0044><li data-v-377c0044>Update</li><li data-v-377c0044>News &amp; Event</li><li class="current" data-v-377c0044> Learning <i class="fa-light fa-angle-down" data-v-377c0044></i></li><li data-v-377c0044>BIZ Laws</li><li data-v-377c0044>|</li><li data-v-377c0044>Product &amp; Services <i class="fa-light fa-angle-down" data-v-377c0044></i></li></ul><p data-v-377c0044><i class="fa-regular fa-angle-right" data-v-377c0044></i></p></div>`);
      _push(ssrRenderComponent(CategoryCardList, null, null, _parent));
      _push(`</div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/category/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-377c0044"]]);
export {
  index as default
};
//# sourceMappingURL=index-6b726982.js.map
