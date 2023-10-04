globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
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
import 'axios';
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
    const getImageUrl = (imagename) => {
      const imageUrl = new URL(
        `/assets/images/about-page/${imagename}`,
        globalThis._importMeta_.url
      ).href;
      return imageUrl;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-23dc6a9e><!--[-->`);
      ssrRenderList(__props.work, (i, index) => {
        _push(`<div class="work" data-v-23dc6a9e><div class="header" data-v-23dc6a9e><h3 data-v-23dc6a9e>${ssrInterpolate(i.name)}</h3></div><div class="images" data-v-23dc6a9e><ul class="image-list grids is-3-desktop is-1-mobile gap-10-desktop gap-10-mobile" data-v-23dc6a9e><!--[-->`);
        ssrRenderList(i.images, (i2) => {
          _push(`<li data-v-23dc6a9e><img${ssrRenderAttr("src", getImageUrl(i2.img))} alt="" data-v-23dc6a9e><p data-v-23dc6a9e>12</p></li>`);
        });
        _push(`<!--]--></ul></div></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about-us/works.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Works = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-23dc6a9e"]]);

export { Works as default };
//# sourceMappingURL=works-4939ed38.mjs.map
