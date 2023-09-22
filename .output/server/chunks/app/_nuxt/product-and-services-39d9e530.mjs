import { ssrRenderAttrs, ssrRenderList } from 'vue/server-renderer';
import { useSSRContext } from 'vue';
import { _ as _export_sfc } from '../server.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'h3';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'ufo';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'klona';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'http-graceful-shutdown';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(_attrs)} data-v-c9a6c7a0><div class="container" data-v-c9a6c7a0><h1 class="section-title" data-v-c9a6c7a0>\u0E9C\u0EB0\u0EA5\u0EB4\u0E94\u0E95\u0EB0\u0E9E\u0EB1\u0E99/\u0E81\u0EB2\u0E99\u0E9A\u0ECD\u0EA5\u0EB4\u0E81\u0EB2\u0E99\u0E82\u0EAD\u0E87\u0EC0\u0EAE\u0EBB\u0EB2</h1><ul class="image-list grids is-3-desktop is-1-mobile gap-20" data-v-c9a6c7a0><!--[-->`);
  ssrRenderList(3, (i, index) => {
    _push(`<li data-v-c9a6c7a0><img class="image-card" src="https://envato-shoebox-0.imgix.net/4a65/bbee-cd5c-4859-9db4-f17eda923f6f/2439421.jpg?auto=compress%2Cformat&amp;fit=max&amp;mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&amp;markalign=center%2Cmiddle&amp;markalpha=18&amp;w=1000&amp;s=c07228076b4d4daa82aa19ee9e50e59d" data-v-c9a6c7a0><h3 data-v-c9a6c7a0>\u0E9A\u0ECD\u0EA5\u0EB4\u0E81\u0EB2\u0E99\u0EC3\u0EAB\u0EC9\u0E84\u0EB2\u0E9B\u0EB6\u0E81\u0EAA\u0EB2 \u0E81\u0EC8\u0EBD\u0EA7\u0E81\u0EB1\u0E9A\u0E97\u0EB8\u0EA5\u0EB0\u0E81\u0EB4\u0E94</h3></li>`);
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

export { ProductAndServcie as default };
//# sourceMappingURL=product-and-services-39d9e530.mjs.map
