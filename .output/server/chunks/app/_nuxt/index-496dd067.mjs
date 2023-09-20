import { useSSRContext, defineComponent, ref, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import ProductAndServcie from './product-and-services-39d9e530.mjs';
import Works from './works-6f46f249.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const works = ref([
      {
        name: "\u0EA1\u0EB5\u0EAA\u0EC8\u0EA7\u0E99\u0EAE\u0EC8\u0EA7\u0EA1\u0EC3\u0E99\u0E81\u0EB2\u0E99\u0E88\u0EB1\u0E94\u0E87\u0EB2\u0E99 Job fest \u0E87\u0EB2\u0E99\u0EA1\u0EB0\u0EAB\u0EB0\u0E81\u0EB2\u0EA7\u0EBD\u0E81\u0EC0\u0EAE\u0E94\u0E87\u0EB2\u0E99\u0E97\u0EB2\u0EC1\u0E9A\u0E9A\u0EC0\u0E9B\u0EB5\u0E94\u0E81\u0EC9\u0EA7\u0EB2\u0E87 \u0E9B\u0EB5 2023"
      },
      {
        name: "\u0E81\u0EB2\u0E99\u0EC3\u0EAB\u0EC9\u0E84\u0EB2\u0E9B\u0EB6\u0E81\u0EAA\u0EB2\u0E97\u0EB2\u0E87\u0E94\u0EC9\u0EB2\u0E99\u0E97\u0EB8\u0EA5\u0EB0\u0E81\u0EB4\u0E94 (BIZ Coaching) \u0EC3\u0EAB\u0EC9\u0E81\u0EB1\u0E9A\u0EAB\u0EBC\u0EB2\u0E8D\u0E81\u0EC8\u0EA7\u0EB2 15 \u0E97\u0EB8\u0EA5\u0EB0\u0E81\u0EB4\u0E94"
      },
      {
        name: "\u0EC0\u0E9B\u0E99\u0E9C\u0EB9\u0EC9\u0EC3\u0EAB\u0EC9\u0E84\u0EB2\u0E9B\u0EB6\u0E81\u0EAA\u0EB2 (Mentor \u0EC1\u0EA5\u0EB0 Coach) \u0EC3\u0EAB\u0EC9\u0E81\u0EB1\u0E9A\u0EAB\u0EBC\u0EB2\u0E8D\u0E81\u0EC8\u0EA7\u0EB2 20\u0E97\u0EB8\u0EA5\u0EB0\u0E81\u0EB4\u0E94, \u0E9E\u0EB2\u0E8D\u0EC3\u0E95\u0EC9\u0EC2\u0E84\u0E87\u0E81\u0EB2\u0E99 ASEAN Mentorship For Entrepreneurs Network (AMEN)"
      },
      {
        name: "\u0E81\u0EB2\u0E99\u0E88\u0EB1\u0E94\u0E9D\u0EB6\u0E81\u0EAD\u0EBB\u0E9A\u0EAE\u0EBB\u0EA1\u0EC1\u0E9A\u0E9A\u0EC0\u0E8A\u0EB4\u0EC8\u0E87\u0EDC\u0EC9\u0EB2"
      },
      {
        name: "\u0E97\u0EB5\u0EA1\u0E84\u0EB9\u0E9D\u0EB6\u0E81 \u0EC1\u0EA5\u0EB0 \u0E97\u0EB5\u0EC8\u0E9B\u0EB6\u0E81\u0EAA\u0EB2\u0E82\u0EAD\u0E87\u0EC2\u0E84\u0E87\u0E81\u0EB2\u0E99\u0E9D\u0EB6\u0E81\u0EAD\u0EBB\u0E9A\u0EAE\u0EBB\u0EA1\u0E9E\u0EB6\u0EC9\u0E99\u0E96\u0EB2\u0E99\u0E81\u0EB2\u0E99\u0E9B\u0EB0\u0E81\u0EAD\u0E9A\u0E97\u0EB8\u0EA5\u0EB0\u0E81\u0EB4\u0E94 \u0E9E\u0EB2\u0E8D\u0EC3\u0E95\u0EC9\u0EC2\u0E84\u0E87\u0E81\u0EB2\u0E99 Vtess, Swisscontact"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-78b5f01a><section data-v-78b5f01a><div class="container" data-v-78b5f01a><h1 class="page-title" data-v-78b5f01a>THE BIZ HUB \u0EC1\u0EA1\u0EC8\u0E99\u0EAB\u0E8D\u0EB1\u0E87?</h1><div class="grids is-2-desktop is-1-mobile gap-20" data-v-78b5f01a><div class="box span-2" data-v-78b5f01a><div class="grids is-5-desktop is-1-mobile gap-20" data-v-78b5f01a><h1 class="span-2" data-v-78b5f01a> PARTNER FOR SUCCESS IN BUSINESS AND ENTREPRENEURSHIP </h1><p class="span-3" data-v-78b5f01a> \u0E84\u0EB9\u0EC8\u0EAE\u0EC8\u0EA7\u0EA1\u0E87\u0EB2\u0E99\u0EC0\u0E9E\u0EB7\u0EC8\u0EAD\u0E84\u0EA7\u0EB2\u0EA1\u0EAA\u0EB2\u0EC0\u0EA5\u0E94\u0EC3\u0E99\u0E94\u0EC9\u0EB2\u0E99\u0E97\u0EB8\u0EA5\u0EB0\u0E81\u0EB4\u0E94 \u0EC1\u0EA5\u0EB0 \u0E81\u0EB2\u0E99\u0EC0\u0E9B\u0E99\u0E9C\u0EB9\u0EC9 \u0E9B\u0EB0\u0E81\u0EAD\u0E9A\u0E81\u0EB2\u0E99 \u0E9E\u0EA7\u0E81\u0EC0\u0EAE\u0EB2\u0EA1\u0EB8\u0EC8\u0E87\u0EDD\u0EB1\u0EC9\u0E99\u0EC3\u0E99\u0E81\u0EB2\u0E99\u0EAA\u0EBB\u0EC8\u0E87\u0EC0\u0EAA\u0EB5\u0EA1 \u0EC1\u0EA5\u0EB0 \u0EC0\u0EAA\u0EB5\u0EA1\u0EAA\u0EC9\u0EB2\u0E87\u0E9C\u0EB9\u0EC9 \u0E9B\u0EB0\u0E81\u0EAD\u0E9A\u0E81\u0EB2\u0E99\u0EA5\u0EB8\u0EC9\u0E99\u0EC3\u0EDD\u0EC8 \u0EAB\u0EBC\u0EB7 \u0E9C\u0EB9\u0EC9\u0E97\u0EB5\u0EC8\u0E81\u0EB2\u0EA5\u0EB1\u0E87\u0EC0\u0EA5\u0EB5\u0EC8\u0EA1\u0E95\u0EBB\u0EC9\u0E99\u0EC0\u0EAE\u0E94\u0E97\u0EB8\u0EA5\u0EB0\u0E81\u0EB4\u0E94\u0E97\u0EB5\u0EC8\u0E95\u0EC9\u0EAD\u0E87 \u0E81\u0EB2\u0E99\u0E9E\u0EB1\u0E94\u0E97\u0EB0\u0E99\u0EB2\u0E95\u0EBB\u0E99\u0EC0\u0EAD\u0E87 \u0EC1\u0EA5\u0EB0\u0E97\u0EB8\u0EA5\u0EB0\u0E81\u0EB4\u0E94\u0EC3\u0EAB\u0EC9\u0EC0\u0E95\u0EB5\u0E9A\u0EC2\u0E95\u0EA2\u0EC8\u0EB2\u0E87\u0E9A\u0EA2\u0EB8\u0E94\u0EA2\u0EB1\u0EC9\u0E87. </p></div></div><div class="box" data-v-78b5f01a><h3 class="margin-bottom-10" data-v-78b5f01a>\u0E9E\u0EB2\u0EA5\u0EB0\u0E81\u0EB4\u0E94 \u0EA7\u0EB4\u0EC4\u0EAA\u0E97\u0EB1\u0E94</h3><p data-v-78b5f01a> \u0EC0\u0E9E\u0EB7\u0EC8\u0EAD\u0EAA\u0EB0\u0EDC\u0EAD\u0E87\u0E9A\u0ECD\u0EA5\u0EB4\u0E81\u0EB2\u0E99\u0EC3\u0EAB\u0EC9\u0E84\u0EB2\u0E9B\u0EB6\u0E81\u0EAA\u0EB2,\u0E82\u0EA1\u0EB9\u0E99\u0E82\u0EC8\u0EB2\u0EA7\u0EAA\u0EB2\u0E99, \u0E81\u0EB2\u0E99\u0E9D\u0EB6\u0E81\u0EAD\u0EBB\u0E9A\u0EAE\u0EBB\u0EA1\u0EC1\u0EA5\u0EB0\u0EC0\u0E84\u0EB7\u0EC8\u0EAD\u0E87\u0EA1\u0EB7\u0E97\u0EB5\u0EC8\u0E88\u0EB2\u0EC0\u0E9B\u0E99\u0EC3\u0E99\u0E81\u0EB2\u0E99\u0EA5\u0EB4\u0EC0\u0EA5\u0EB5\u0EC8\u0EA1 \u0E97\u0EB8\u0EA5\u0EB0\u0E81\u0EB4\u0E94\u0EC3\u0EAB\u0EC9\u0EC0\u0E82\u0EC9\u0EA1\u0EC1\u0E82\u0E87 \u0EC1\u0EA5\u0EB0 \u0EAA\u0EC9\u0EB2\u0E87\u0E81\u0EB2\u0E99\u0E9B\u0EC8\u0EBD\u0E99\u0EC1\u0E9B\u0E87\u0E97\u0EB5\u0EC8\u0E94\u0EB5 \u0EAA\u0EB9\u0EC8\u0EAA\u0EB1\u0E87\u0E84\u0EBB\u0EA1. </p></div><div class="box" data-v-78b5f01a><h3 class="margin-bottom-10" data-v-78b5f01a>\u0EA7\u0EB4\u0EC4\u0EAA\u0E97\u0EB1\u0E94</h3><p data-v-78b5f01a> \u0EC0\u0E9B\u0E99\u0E82\u0EBB\u0EA7\u0E95\u0EC3\u0EAB\u0EC9\u0E81\u0EB1\u0E9A\u0E9A\u0EB1\u0E99\u0E94\u0EB2\u0E9C\u0EB9\u0EC9\u0E97\u0EB5\u0EC8\u0EC0\u0EA5\u0EB5\u0EC8\u0EA1\u0E95\u0EBB\u0EC9\u0E99\u0EC0\u0EAE\u0E94\u0E97\u0EB8\u0EA5\u0EB0\u0E81\u0EB4\u0E94\u0EAA\u0EB2 \u0EA1\u0EB2\u0E94\u0E81\u0EC9\u0EB2\u0EA7\u0EC4\u0E9B\u0EAA\u0EB9\u0EC8\u0E84\u0EA7\u0EB2\u0EA1\u0EAA\u0EB2\u0EC0\u0EA5\u0E94 </p></div></div></div></section><img class="top-image" src="https://envato-shoebox-0.imgix.net/4a65/bbee-cd5c-4859-9db4-f17eda923f6f/2439421.jpg?auto=compress%2Cformat&amp;fit=max&amp;mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&amp;markalign=center%2Cmiddle&amp;markalpha=18&amp;w=1000&amp;s=c07228076b4d4daa82aa19ee9e50e59d" data-v-78b5f01a>`);
      _push(ssrRenderComponent(ProductAndServcie, null, null, _parent));
      _push(`<h1 class="section-title" data-v-78b5f01a>\u0E9C\u0EBB\u0E99\u0E87\u0EB2\u0E99\u0E82\u0EAD\u0E87 THE BIZ HUB</h1><!--[-->`);
      ssrRenderList(unref(works), (i, index2) => {
        _push(ssrRenderComponent(Works, {
          work: i,
          key: index2
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about-us/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-78b5f01a"]]);

export { index as default };
//# sourceMappingURL=index-496dd067.mjs.map
