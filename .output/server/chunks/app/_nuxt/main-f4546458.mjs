import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-691e5b50.mjs';
import { _ as _export_sfc, d as useNuxtApp, u as useRouter } from '../server.mjs';
import { useSSRContext, defineComponent, ref, withCtx, createTextVNode, unref, toDisplayString } from 'vue';
import { u as useCookie } from './cookie-9ebd6d73.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrRenderSlot } from 'vue/server-renderer';
import { useI18n } from 'vue-i18n';
import 'vue-bundle-renderer/runtime';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
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
    const enStatus = ref(false);
    const laoStatus = ref(false);
    const useCookies = useCookie("lang");
    const i18n = useI18n();
    i18n.locale.value = useCookies.value || "en";
    enStatus.value = useCookies.value === "en";
    laoStatus.value = useCookies.value === "lao";
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
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-a73ea784><div class="top-navbar" data-v-a73ea784><div class="mobile-only" data-v-a73ea784><p class="left" data-v-a73ea784><i class="fa-regular fa-magnifying-glass" data-v-a73ea784></i></p><p class="right" data-v-a73ea784><i class="fa-regular fa-bars" data-v-a73ea784></i></p></div><div class="logo" data-v-a73ea784><img${ssrRenderAttr("src", _imports_0$1)} data-v-a73ea784></div><h1 data-v-a73ea784>${ssrInterpolate(_ctx.$t("slogan"))}</h1></div><div class="navbar" data-v-a73ea784><div class="navbar-start" data-v-a73ea784><ul data-v-a73ea784><li class="has-dropdown" data-v-a73ea784><a data-v-a73ea784>${ssrInterpolate(_ctx.$t("products"))}<i class="fa-light fa-angle-down" data-v-a73ea784></i></a><ul class="dropdown" data-v-a73ea784><li data-v-a73ea784>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: {
        path: "/product-and-services/biz-coaching"
      } }, {
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
      _push(`</li><li data-v-a73ea784>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: {
        path: "/product-and-services/biz-course"
      } }, {
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
      _push(`</li><li data-v-a73ea784>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: {
        path: "/product-and-services/project-business-consultant"
      } }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`BUSINESS CONSULTANT`);
          } else {
            return [
              createTextVNode("BUSINESS CONSULTANT")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></li><li class="has-dropdown" data-v-a73ea784><a data-v-a73ea784>${ssrInterpolate(_ctx.$t("learning"))} <i class="fa-light fa-angle-down" data-v-a73ea784></i></a><ul class="dropdown" data-v-a73ea784><!--[-->`);
      ssrRenderList(unref(learing), (o, index) => {
        _push(`<li data-v-a73ea784>`);
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
      _push(`<!--]--></ul></li><li data-v-a73ea784><a data-v-a73ea784>${ssrInterpolate(_ctx.$t("article_tsns"))}</a></li><li data-v-a73ea784><a data-v-a73ea784>${ssrInterpolate(_ctx.$t("article_wing"))}</a></li><li data-v-a73ea784>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/about-us" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("about_us"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("about_us")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div><div class="navbar-end" data-v-a73ea784><input type="text"${ssrRenderAttr("value", unref(search))} class="input small"${ssrRenderAttr("placeholder", _ctx.$t("search"))} data-v-a73ea784><hr class="v" data-v-a73ea784><p class="lang-switch" data-v-a73ea784><a class="${ssrRenderClass([{ current: unref(enStatus) }])}" data-v-a73ea784>EN</a><a class="${ssrRenderClass([{ current: unref(laoStatus) }])}" data-v-a73ea784>LA</a></p><hr class="v" data-v-a73ea784><div class="button-groups" data-v-a73ea784><button data-v-a73ea784>${ssrInterpolate(_ctx.$t("login"))}</button><button class="main" data-v-a73ea784>${ssrInterpolate(_ctx.$t("register"))}</button></div></div></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layouts/Navbar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-a73ea784"]]);
const _imports_0 = "" + buildAssetsURL("Logo.d939d081.png");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    const axios = useNuxtApp().$axios;
    useRouter();
    const productAndService = ref([]);
    const learing = ref([]);
    ref();
    const cateInfo = ref();
    const enStatus = ref(false);
    const laoStatus = ref(false);
    const useCookies = useCookie("lang");
    const i18n = useI18n();
    i18n.locale.value = useCookies.value || "en";
    enStatus.value = useCookies.value === "en";
    laoStatus.value = useCookies.value === "lao";
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
      _push(`<!--[--><section data-v-1d54ce4e><div class="container" data-v-1d54ce4e><ul class="grids is-14-desktop is-1-mobile" data-v-1d54ce4e><li class="span-4-desktop" data-v-1d54ce4e><div class="logo margin-bottom-10" data-v-1d54ce4e><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-1d54ce4e><h3 data-v-1d54ce4e>THE BIZ HUB</h3></div><small class="margin-bottom-15" data-v-1d54ce4e>1st Floor, 108Hill Building Dongpaina Road, Saphanthong Village, Sisattanak District, Vientiane Capital, Lao PDR.</small><small data-v-1d54ce4e>020 56463959 | 020 56508160</small><small data-v-1d54ce4e>thebizhub.info@gmail.com</small></li><li class="span-5-desktop" data-v-1d54ce4e><h3 data-v-1d54ce4e>Learning</h3><ul data-v-1d54ce4e><!--[-->`);
      ssrRenderList(unref(learing), (o, index) => {
        _push(`<li data-v-1d54ce4e>`);
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
      _push(`<!--]--></ul></li><li class="span-5-desktop" data-v-1d54ce4e><h3 data-v-1d54ce4e>roduct &amp; Services</h3><ul data-v-1d54ce4e><li data-v-1d54ce4e>BIZ COACHING</li><li data-v-1d54ce4e>BIZ COURSES</li><li data-v-1d54ce4e>PROJECT BUSINESS CONSULTANT</li></ul><div class="socials" data-v-1d54ce4e><h3 data-v-1d54ce4e>Follow us on</h3><ul data-v-1d54ce4e><li data-v-1d54ce4e><a href="https://www.facebook.com/profile.php?id=100091801856212" target="_blank" data-v-1d54ce4e><i class="fa-brands fa-facebook" data-v-1d54ce4e></i></a></li><li data-v-1d54ce4e><a href="https://www.tiktok.com/@thebizhublaos" target="_blank" data-v-1d54ce4e><i class="fa-brands fa-tiktok" data-v-1d54ce4e></i></a></li><li data-v-1d54ce4e><a href="https://www.youtube.com/@TheBIZHUB" target="_blank" data-v-1d54ce4e><i class="fa-brands fa-youtube" data-v-1d54ce4e></i></a></li></ul></div></li></ul></div></section><div class="footer" data-v-1d54ce4e><p data-v-1d54ce4e> Copyright \xA9 108-1009 Group Co., Ltd. | Designed and Developed by Semicolon Sole Co., Ltd. </p></div><!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layouts/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-1d54ce4e"]]);
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
//# sourceMappingURL=main-f4546458.mjs.map
