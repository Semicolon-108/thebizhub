import { _ as _export_sfc, d as useNuxtApp } from '../server.mjs';
import { useSSRContext, defineComponent, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import 'fs';
import 'path';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'axios';
import 'vue-i18n';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "gallery",
  __ssrInlineRender: true,
  props: ["data"],
  setup(__props) {
    const showImage = useNuxtApp().$imageURL;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "gallery-container" }, _attrs))} data-v-80583498><div class="close" data-v-80583498><i class="fa-regular fa-xmark" data-v-80583498></i></div><div class="bg" data-v-80583498></div><div class="gallery" data-v-80583498><ul data-v-80583498><!--[-->`);
      ssrRenderList(__props.data, (i, index) => {
        _push(`<li data-v-80583498><img${ssrRenderAttr("src", unref(showImage) + i)} alt="" data-v-80583498></li>`);
      });
      _push(`<!--]--></ul></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about-us/gallery.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Gallery = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-80583498"]]);

export { Gallery as default };
//# sourceMappingURL=gallery-6aa4083d.mjs.map
