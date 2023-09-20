import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-15b2078b.mjs';
import { useSSRContext, defineComponent, withCtx, createTextVNode } from 'vue';
import { _ as _export_sfc, u as useRouter } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
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

const _imports_0$1 = "" + buildAssetsURL("thebizhub-logo.b61d510f.jpg");
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Navbar",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-c1ca4a74><div class="top-navbar" data-v-c1ca4a74><div class="mobile-only" data-v-c1ca4a74><p class="left" data-v-c1ca4a74><i class="fa-regular fa-magnifying-glass" data-v-c1ca4a74></i></p><p class="right" data-v-c1ca4a74><i class="fa-regular fa-bars" data-v-c1ca4a74></i></p></div><div class="logo" data-v-c1ca4a74><img${ssrRenderAttr("src", _imports_0$1)} data-v-c1ca4a74></div><h1 data-v-c1ca4a74>Partner for Success in Business and Entrepreneurship</h1></div><div class="navbar" data-v-c1ca4a74><div class="navbar-start" data-v-c1ca4a74><ul data-v-c1ca4a74><li data-v-c1ca4a74>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: { path: "/category", query: { is: "News & Event" } } }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`BIZ Laws`);
          } else {
            return [
              createTextVNode("BIZ Laws")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="has-dropdown" data-v-c1ca4a74><a data-v-c1ca4a74>Product &amp; Services <i class="fa-light fa-angle-down" data-v-c1ca4a74></i></a><ul class="dropdown" data-v-c1ca4a74><li data-v-c1ca4a74>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: { path: "/category", query: { is: "BIZ COACHING" } } }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`BIZ COACHING`);
          } else {
            return [
              createTextVNode("BIZ COACHING")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-c1ca4a74>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: { path: "/category", query: { is: "BIZ EVENTS" } } }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`BIZ EVENTS`);
          } else {
            return [
              createTextVNode("BIZ EVENTS")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-c1ca4a74>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: { path: "/category", query: { is: "BIZ TOOLS" } } }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`BIZ TOOLS`);
          } else {
            return [
              createTextVNode("BIZ TOOLS")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-c1ca4a74>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: { path: "/category", query: { is: "BIZ COURSES" } } }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`BIZ COURSES`);
          } else {
            return [
              createTextVNode("BIZ COURSES")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></li><li class="has-dropdown" data-v-c1ca4a74><a data-v-c1ca4a74>Learning <i class="fa-light fa-angle-down" data-v-c1ca4a74></i></a><ul class="dropdown" data-v-c1ca4a74><li data-v-c1ca4a74>SME &amp; Startup</li><li data-v-c1ca4a74>Entrepreneur\u2019s Story</li><li data-v-c1ca4a74>Self-Employment</li></ul></li><li data-v-c1ca4a74>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: { path: "/category", query: { is: "BIZ Laws" } } }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`BIZ Laws`);
          } else {
            return [
              createTextVNode("BIZ Laws")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-c1ca4a74>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: { path: "/category", query: { is: "update" } } }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Update`);
          } else {
            return [
              createTextVNode("Update")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-c1ca4a74>`);
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
      _push(`</li></ul></div><div class="navbar-end" data-v-c1ca4a74><input type="text" class="input small" placeholder="Enter keyword and press Enter" data-v-c1ca4a74><hr class="v" data-v-c1ca4a74><p class="lang-switch" data-v-c1ca4a74><a class="current" data-v-c1ca4a74>EN</a><a data-v-c1ca4a74>LA</a></p><hr class="v" data-v-c1ca4a74><div class="button-groups" data-v-c1ca4a74><button data-v-c1ca4a74>Login</button><button class="main" data-v-c1ca4a74> Register </button></div></div></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layouts/Navbar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-c1ca4a74"]]);
const _imports_0 = "" + buildAssetsURL("Logo.d939d081.png");
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><section data-v-7e0d09ee><div class="container" data-v-7e0d09ee><ul class="grids is-14-desktop is-1-mobile" data-v-7e0d09ee><li class="span-5" data-v-7e0d09ee><div class="logo margin-bottom-10" data-v-7e0d09ee><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-7e0d09ee><h3 data-v-7e0d09ee>THE BIZ HUB</h3></div><small class="margin-bottom-15" data-v-7e0d09ee>1st Floor, 108Hill Building Dongpaina Road, Saphanthong Village, Sisattanak District, Vientiane Capital, Lao PDR.</small><small data-v-7e0d09ee>020 56463959 | 020 56508160</small><small data-v-7e0d09ee>thebizhub.info@gmail.com</small></li><li class="span-3" data-v-7e0d09ee><h3 data-v-7e0d09ee>Who we are?</h3><h3 data-v-7e0d09ee>BIZ Course</h3><h3 data-v-7e0d09ee>BIZ Coaching</h3><h3 data-v-7e0d09ee>BIZ Tools</h3></li><li class="span-3" data-v-7e0d09ee><h3 data-v-7e0d09ee>Learning</h3><ul data-v-7e0d09ee><li data-v-7e0d09ee>- SME &amp; Startup</li><li data-v-7e0d09ee>- Entrepreneur\u2019s story</li><li data-v-7e0d09ee>- Self-employment</li></ul><h3 data-v-7e0d09ee>BIZ Laws</h3><h3 data-v-7e0d09ee>NEWS &amp; Event</h3></li><li class="span-3" data-v-7e0d09ee><h3 data-v-7e0d09ee>Follow us on</h3></li></ul></div></section><div class="footer" data-v-7e0d09ee><p data-v-7e0d09ee>Copyright \xA9 108-1009 Group Co., Ltd. | Designed and Developed by Semicolon Sole Co., Ltd.</p></div><!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layouts/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-7e0d09ee"]]);
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
//# sourceMappingURL=main-38bf409a.mjs.map
