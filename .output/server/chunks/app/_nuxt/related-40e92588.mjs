import { d as useNuxtApp, u as useRouter } from '../server.mjs';
import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'axios';
import 'vue-i18n';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "related",
  __ssrInlineRender: true,
  props: ["relate"],
  setup(__props) {
    const imageURL = useNuxtApp().$imageURL;
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<ul${ssrRenderAttrs(mergeProps({ class: "grids is-3-desktop gap-20-desktop" }, _attrs))}><!--[-->`);
      ssrRenderList(__props.relate, (i, index) => {
        _push(`<li><div class="card"><div class="card-image"><img${ssrRenderAttr("src", unref(imageURL) + i.coverPage)} alt=""></div><div class="card-content"><ul class="tag-list"><!--[-->`);
        ssrRenderList(i.category, (c, ind) => {
          _push(`<li>${ssrInterpolate(c.name)}</li>`);
        });
        _push(`<!--]--></ul><h3>${ssrInterpolate(i.title)}</h3></div></div></li>`);
      });
      _push(`<!--]--></ul>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog-detail/related.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=related-40e92588.mjs.map
