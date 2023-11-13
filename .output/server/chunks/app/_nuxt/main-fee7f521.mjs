import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-15b2078b.mjs';
import { _ as _export_sfc, a as useNuxtApp, u as useRouter } from '../server.mjs';
import { useSSRContext, defineComponent, ref, unref, withCtx, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import 'vue-bundle-renderer/runtime';
import 'h3';
import 'devalue';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'ofetch';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'klona';
import 'defu';
import 'ohash';
import 'ufo';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'http-graceful-shutdown';
import 'unctx';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'axios';

const _imports_0$1 = "" + buildAssetsURL("thebizhub-logo.b61d510f.jpg");
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Navbar",
  __ssrInlineRender: true,
  setup(__props) {
    const axios = useNuxtApp().$axios;
    useRouter();
    const productAndService = ref([]);
    const learing = ref([]);
    const search = ref();
    const cateInfo = ref();
    const fetchProductAndService = async () => {
      const type = "Product & Services";
      await axios.post(`get-group/${type}`).then((res) => {
        if (res.status === 200) {
          productAndService.value = res.data.info.items;
        }
      });
    };
    const fetchLearning = async () => {
      const type = "Learning";
      await axios.post(`get-group/${type}`).then((res) => {
        if (res.status === 200) {
          learing.value = res.data.info.items;
        }
      });
    };
    const fetchCategory = async () => {
      const data = await axios.post(`get-category-filter/Category`);
      cateInfo.value = data.data.info;
    };
    fetchCategory();
    fetchProductAndService();
    fetchLearning();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-c50e6b93><div class="top-navbar" data-v-c50e6b93><div class="mobile-only" data-v-c50e6b93><p class="left" data-v-c50e6b93><i class="fa-regular fa-magnifying-glass" data-v-c50e6b93></i></p><p class="right" data-v-c50e6b93><i class="fa-regular fa-bars" data-v-c50e6b93></i></p></div><div class="logo" data-v-c50e6b93><img${ssrRenderAttr("src", _imports_0$1)} data-v-c50e6b93></div><h1 data-v-c50e6b93>Partner for Success in Business and Entrepreneurship</h1></div><div class="navbar" data-v-c50e6b93><div class="navbar-start" data-v-c50e6b93><ul data-v-c50e6b93><li class="has-dropdown" data-v-c50e6b93><a data-v-c50e6b93>Product &amp; Services <i class="fa-light fa-angle-down" data-v-c50e6b93></i></a><ul class="dropdown" data-v-c50e6b93><!--[-->`);
      ssrRenderList(unref(productAndService), (i, indx) => {
        _push(`<li data-v-c50e6b93>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: { path: "/category", query: { is: `${i.name}` } }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(i.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(i.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></li><li class="has-dropdown" data-v-c50e6b93><a data-v-c50e6b93>Learning <i class="fa-light fa-angle-down" data-v-c50e6b93></i></a><ul class="dropdown" data-v-c50e6b93><!--[-->`);
      ssrRenderList(unref(learing), (o, index) => {
        _push(`<li data-v-c50e6b93>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: { path: "/category", query: { is: `${o.name}` } }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(o.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(o.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></li><!--[-->`);
      ssrRenderList(unref(cateInfo), (i, indx) => {
        _push(`<li data-v-c50e6b93>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: { path: "/category", query: { is: `${i.name}` } }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(i.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(i.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--><li data-v-c50e6b93>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/about-us" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`About Us`);
          } else {
            return [
              createTextVNode("About Us")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div><div class="navbar-end" data-v-c50e6b93><input type="text"${ssrRenderAttr("value", unref(search))} class="input small" placeholder="Enter keyword and press Enter" data-v-c50e6b93><hr class="v" data-v-c50e6b93><p class="lang-switch" data-v-c50e6b93><a class="current" data-v-c50e6b93>EN</a><a data-v-c50e6b93>LA</a></p><hr class="v" data-v-c50e6b93><div class="button-groups" data-v-c50e6b93><button data-v-c50e6b93>Login</button><button class="main" data-v-c50e6b93> Register </button></div></div></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layouts/Navbar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-c50e6b93"]]);
const _imports_0 = "" + buildAssetsURL("Logo.d939d081.png");
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><section data-v-3c5711cc><div class="container" data-v-3c5711cc><ul class="grids is-14-desktop is-1-mobile" data-v-3c5711cc><li class="span-5-desktop" data-v-3c5711cc><div class="logo margin-bottom-10" data-v-3c5711cc><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-3c5711cc><h3 data-v-3c5711cc>THE BIZ HUB</h3></div><small class="margin-bottom-15" data-v-3c5711cc>1st Floor, 108Hill Building Dongpaina Road, Saphanthong Village, Sisattanak District, Vientiane Capital, Lao PDR.</small><small data-v-3c5711cc>020 56463959 | 020 56508160</small><small data-v-3c5711cc>thebizhub.info@gmail.com</small></li><li class="span-3-desktop" data-v-3c5711cc><h3 data-v-3c5711cc>Who are we?</h3><h3 data-v-3c5711cc>BIZ Course</h3><h3 data-v-3c5711cc>BIZ Coaching</h3><h3 data-v-3c5711cc>BIZ Tools</h3></li><li class="span-3-desktop" data-v-3c5711cc><h3 data-v-3c5711cc>Learning</h3><ul data-v-3c5711cc><li data-v-3c5711cc>- SME &amp; Startup</li><li data-v-3c5711cc>- Entrepreneur\u2019s story</li><li data-v-3c5711cc>- Self-employment</li></ul><h3 data-v-3c5711cc>BIZ Laws</h3><h3 data-v-3c5711cc>NEWS &amp; Event</h3></li><li class="span-3-desktop" data-v-3c5711cc><h3 data-v-3c5711cc>Follow us on</h3><ul class="socials" data-v-3c5711cc><li data-v-3c5711cc><a href="https://www.facebook.com/profile.php?id=100091801856212" target="_blank" data-v-3c5711cc><i class="fa-brands fa-facebook" data-v-3c5711cc></i></a></li><li data-v-3c5711cc><a href="https://www.tiktok.com/@thebizhublaos" target="_blank" data-v-3c5711cc><i class="fa-brands fa-tiktok" data-v-3c5711cc></i></a></li><li data-v-3c5711cc><a href="https://www.youtube.com/@TheBIZHUB" target="_blank" data-v-3c5711cc><i class="fa-brands fa-youtube" data-v-3c5711cc></i></a></li></ul></li></ul></div></section><div class="footer" data-v-3c5711cc><p data-v-3c5711cc> Copyright \xA9 108-1009 Group Co., Ltd. | Designed and Developed by Semicolon Sole Co., Ltd. </p></div><!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layouts/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-3c5711cc"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_LayoutsNavbar = __nuxt_component_0;
  const _component_LayoutsFooter = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_LayoutsNavbar, null, null, _parent));
  _push(`<main>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</main>`);
  _push(ssrRenderComponent(_component_LayoutsFooter, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/main.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const main = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { main as default };
//# sourceMappingURL=main-fee7f521.mjs.map
