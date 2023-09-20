import { ssrRenderAttrs, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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

const _sfc_main = {
  __name: "works",
  __ssrInlineRender: true,
  props: ["work"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(_attrs)} data-v-83651061><div class="container" data-v-83651061><ul class="image-list grids is-3-desktop is-1-mobile gap-20" data-v-83651061><!--[-->`);
      ssrRenderList(3, (i, index) => {
        _push(`<li data-v-83651061><img class="image-card" src="https://envato-shoebox-0.imgix.net/4a65/bbee-cd5c-4859-9db4-f17eda923f6f/2439421.jpg?auto=compress%2Cformat&amp;fit=max&amp;mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&amp;markalign=center%2Cmiddle&amp;markalpha=18&amp;w=1000&amp;s=c07228076b4d4daa82aa19ee9e50e59d" data-v-83651061></li>`);
      });
      _push(`<!--]--></ul><h3 data-v-83651061>${ssrInterpolate(__props.work.name)}</h3></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about-us/works.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Works = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-83651061"]]);

export { Works as default };
//# sourceMappingURL=works-6f46f249.mjs.map
