import { ssrRenderAttrs, ssrRenderList, ssrInterpolate } from 'file://D:/Thebizhub/thebizhub/node_modules/vue/server-renderer/index.mjs';
import { useSSRContext } from 'file://D:/Thebizhub/thebizhub/node_modules/vue/index.mjs';
import { _ as _export_sfc } from '../server.mjs';
import 'file://D:/Thebizhub/thebizhub/node_modules/ofetch/dist/node.mjs';
import 'file://D:/Thebizhub/thebizhub/node_modules/hookable/dist/index.mjs';
import 'file://D:/Thebizhub/thebizhub/node_modules/unctx/dist/index.mjs';
import 'file://D:/Thebizhub/thebizhub/node_modules/h3/dist/index.mjs';
import 'file://D:/Thebizhub/thebizhub/node_modules/@unhead/ssr/dist/index.mjs';
import 'file://D:/Thebizhub/thebizhub/node_modules/unhead/dist/index.mjs';
import 'file://D:/Thebizhub/thebizhub/node_modules/@unhead/shared/dist/index.mjs';
import 'file://D:/Thebizhub/thebizhub/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://D:/Thebizhub/thebizhub/node_modules/ufo/dist/index.mjs';
import 'file://D:/Thebizhub/thebizhub/node_modules/defu/dist/defu.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file://D:/Thebizhub/thebizhub/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file://D:/Thebizhub/thebizhub/node_modules/destr/dist/index.mjs';
import 'file://D:/Thebizhub/thebizhub/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://D:/Thebizhub/thebizhub/node_modules/scule/dist/index.mjs';
import 'file://D:/Thebizhub/thebizhub/node_modules/klona/dist/index.mjs';
import 'file://D:/Thebizhub/thebizhub/node_modules/ohash/dist/index.mjs';
import 'file://D:/Thebizhub/thebizhub/node_modules/unstorage/dist/index.mjs';
import 'file://D:/Thebizhub/thebizhub/node_modules/unstorage/drivers/fs.mjs';
import 'file://D:/Thebizhub/thebizhub/node_modules/radix3/dist/index.mjs';

const _sfc_main = {
  __name: "works",
  __ssrInlineRender: true,
  props: ["work"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(_attrs)} data-v-382834e1><div class="container" data-v-382834e1><ul class="image-list grids is-3-desktop is-1-mobile gap-20" data-v-382834e1><!--[-->`);
      ssrRenderList(3, (i, index) => {
        _push(`<li data-v-382834e1><img class="image-card" src="https://envato-shoebox-0.imgix.net/4a65/bbee-cd5c-4859-9db4-f17eda923f6f/2439421.jpg?auto=compress%2Cformat&amp;fit=max&amp;mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&amp;markalign=center%2Cmiddle&amp;markalpha=18&amp;w=1000&amp;s=c07228076b4d4daa82aa19ee9e50e59d" data-v-382834e1></li>`);
      });
      _push(`<!--]--></ul><h3 data-v-382834e1>${ssrInterpolate(__props.work)}</h3></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about-us/works.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Works = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-382834e1"]]);

export { Works as default };
//# sourceMappingURL=works-5a851dff.mjs.map
