import { _ as __nuxt_component_0$2 } from "./nuxt-link-691e5b50.js";
import { d as useNuxtApp, u as useRouter, _ as _export_sfc } from "../server.mjs";
import { defineComponent, ref, watch, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { u as useCookie } from "./cookie-9ebd6d73.js";
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrRenderSlot } from "vue/server-renderer";
import { useI18n } from "vue-i18n";
import "ufo";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "destr";
import "defu";
import "klona";
import "devalue";
import "axios";
import "cookie-es";
import "ohash";
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "MobileNavbar",
  __ssrInlineRender: true,
  emits: ["closeMobileNavbar"],
  setup(__props, { emit: __emit }) {
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
    const emit = __emit;
    const closeMobileNavbar = async () => {
      emit("closeMobileNavbar");
    };
    const fetchProductAndService = async () => {
      const type = "Product & Services";
      await axios.post(`get-group?type=${type}&lang=${i18n.locale.value}`).then((res) => {
        if (res.status === 200) {
          productAndService.value = res.data.info;
        }
      });
    };
    const fetchLearning = async () => {
      const type = "Learning";
      await axios.post(`get-group?type=${type}&lang=${i18n.locale.value}`).then((res) => {
        if (res.status === 200) {
          learing.value = res.data.info;
        }
      });
    };
    const fetchCategory = async () => {
      const data = await axios.post(`get-category-filter/Category`);
      cateInfo.value = data.data.info;
    };
    watch(() => i18n.locale.value, (value) => {
      fetchLearning();
      fetchProductAndService();
    }, { immediate: true, deep: true });
    fetchCategory();
    fetchProductAndService();
    fetchLearning();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mobile-navbar" }, _attrs))} data-v-25ed88e3><div class="burger" data-v-25ed88e3><i class="fa-regular fa-bars" data-v-25ed88e3></i><p class="lang-switch" data-v-25ed88e3><a class="${ssrRenderClass([{ current: unref(enStatus) }])}" data-v-25ed88e3>EN</a><a class="${ssrRenderClass([{ current: unref(laoStatus) }])}" data-v-25ed88e3>LA</a></p></div><div class="navbar" data-v-25ed88e3><div class="navbar-start" data-v-25ed88e3><ul class="nabar-item-list" data-v-25ed88e3><li class="parant" data-v-25ed88e3><a class="navbar-item" data-v-25ed88e3>${ssrInterpolate(_ctx.$t("products"))}</a><ul data-v-25ed88e3><li data-v-25ed88e3>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: {
          path: "/product-and-services/biz-coaching"
        },
        onClick: ($event) => closeMobileNavbar()
      }, {
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
      _push(`</li><li data-v-25ed88e3>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: {
          path: "/product-and-services/biz-course"
        },
        onClick: ($event) => closeMobileNavbar()
      }, {
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
      _push(`</li><li data-v-25ed88e3>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: {
          path: "/product-and-services/project-business-consultant"
        },
        onClick: ($event) => closeMobileNavbar()
      }, {
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
      _push(`</li></ul></li><li class="parant" data-v-25ed88e3><a class="navbar-item" data-v-25ed88e3>${ssrInterpolate(_ctx.$t("learning"))}</a><ul data-v-25ed88e3><!--[-->`);
      ssrRenderList(unref(learing), (o, index) => {
        _push(`<li data-v-25ed88e3>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: { path: "/category", query: { is: `${o.name}` } },
          onClick: ($event) => closeMobileNavbar()
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
      _push(`<!--]--></ul></li><li data-v-25ed88e3><a data-v-25ed88e3>${ssrInterpolate(_ctx.$t("article_tsns"))}</a></li><li data-v-25ed88e3><a data-v-25ed88e3>${ssrInterpolate(_ctx.$t("article_wing"))}</a></li><li data-v-25ed88e3>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/about-us",
        onClick: ($event) => closeMobileNavbar()
      }, {
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
      _push(`</li></ul></div><div class="navbar-end" data-v-25ed88e3><input type="text"${ssrRenderAttr("value", unref(search))} class="input small"${ssrRenderAttr("placeholder", _ctx.$t("search"))} data-v-25ed88e3><div class="button-groups" data-v-25ed88e3><button class="button small" data-v-25ed88e3>${ssrInterpolate(_ctx.$t("login"))}</button><button class="button main small" data-v-25ed88e3>${ssrInterpolate(_ctx.$t("register"))}</button></div></div></div></div>`);
    };
  }
});
const MobileNavbar_vue_vue_type_style_index_0_scoped_25ed88e3_lang = "";
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layouts/MobileNavbar.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-25ed88e3"]]);
const _imports_0$1 = "" + __buildAssetsURL("thebizhub-logo.b61d510f.jpg");
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
    if (!enStatus.value && !laoStatus.value)
      enStatus.value = true;
    const openMobileNav = ref(false);
    const fetchProductAndService = async () => {
      const type = "Product & Services";
      await axios.post(`get-group?type=${type}&lang=${i18n.locale.value}`).then((res) => {
        if (res.status === 200) {
          productAndService.value = res.data.info;
        }
      });
    };
    const fetchLearning = async () => {
      const type = "Learning";
      await axios.post(`get-group?type=${type}&lang=${i18n.locale.value}`).then((res) => {
        if (res.status === 200) {
          learing.value = res.data.info;
        }
      });
    };
    const fetchCategory = async () => {
      const data = await axios.post(`get-category-filter/Category`);
      cateInfo.value = data.data.info;
    };
    watch(() => i18n.locale.value, (value) => {
      fetchLearning();
      fetchProductAndService();
    }, { immediate: true, deep: true });
    fetchCategory();
    fetchProductAndService();
    fetchLearning();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutsMobileNavbar = __nuxt_component_0$1;
      const _component_NuxtLink = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-1994fe9a><div class="top-navbar" data-v-1994fe9a><div class="mobile-only" data-v-1994fe9a><p class="left" data-v-1994fe9a><i class="fa-regular fa-magnifying-glass" data-v-1994fe9a></i></p><p class="right" data-v-1994fe9a><i class="fa-regular fa-bars" data-v-1994fe9a></i></p></div><div class="logo" data-v-1994fe9a><img${ssrRenderAttr("src", _imports_0$1)} data-v-1994fe9a></div><h1 data-v-1994fe9a>${ssrInterpolate(_ctx.$t("slogan"))}</h1>`);
      if (unref(openMobileNav)) {
        _push(ssrRenderComponent(_component_LayoutsMobileNavbar, {
          onCloseMobileNavbar: ($event) => openMobileNav.value = false
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="navbar is-hidden-mobile" data-v-1994fe9a><div class="navbar-start" data-v-1994fe9a><ul data-v-1994fe9a><li class="has-dropdown" data-v-1994fe9a><a class="hoverable" data-v-1994fe9a>${ssrInterpolate(_ctx.$t("products"))}<i class="fa-light fa-angle-down" data-v-1994fe9a></i><ul class="dropdown" data-v-1994fe9a><li data-v-1994fe9a>`);
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
      _push(`</li><li data-v-1994fe9a>`);
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
      _push(`</li><li data-v-1994fe9a>`);
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
      _push(`</li></ul></a></li><li class="has-dropdown" data-v-1994fe9a><a class="hoverable" data-v-1994fe9a>${ssrInterpolate(_ctx.$t("navbar_learning"))} <i class="fa-light fa-angle-down" data-v-1994fe9a></i><ul class="dropdown" data-v-1994fe9a><!--[-->`);
      ssrRenderList(unref(learing), (o, index) => {
        _push(`<li data-v-1994fe9a>`);
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
      _push(`<!--]--></ul></a></li><li data-v-1994fe9a><a data-v-1994fe9a>${ssrInterpolate(_ctx.$t("navbar_tsns"))}</a></li><li data-v-1994fe9a><a data-v-1994fe9a>${ssrInterpolate(_ctx.$t("navbar_wing"))}</a></li><li data-v-1994fe9a>`);
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
      _push(`</li></ul></div><div class="navbar-end" data-v-1994fe9a><input type="text"${ssrRenderAttr("value", unref(search))} class="input small"${ssrRenderAttr("placeholder", _ctx.$t("search"))} data-v-1994fe9a><hr class="v" data-v-1994fe9a><p class="lang-switch" data-v-1994fe9a><a class="${ssrRenderClass([{ current: unref(enStatus) }])}" data-v-1994fe9a>EN</a><a class="${ssrRenderClass([{ current: unref(laoStatus) }])}" data-v-1994fe9a>LA</a></p><hr class="v" data-v-1994fe9a><div class="button-groups" data-v-1994fe9a><button class="button small" data-v-1994fe9a>${ssrInterpolate(_ctx.$t("login"))}</button><button class="button main small" data-v-1994fe9a>${ssrInterpolate(_ctx.$t("register"))}</button></div></div></div></div>`);
    };
  }
});
const Navbar_vue_vue_type_style_index_0_scoped_1994fe9a_lang = "";
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layouts/Navbar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-1994fe9a"]]);
const _imports_0 = "" + __buildAssetsURL("Logo.d939d081.png");
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
      await axios.post(`get-group?type=${type}&lang=${i18n.locale.value}`).then((res) => {
        if (res.status === 200) {
          productAndService.value = res.data.info;
        }
      });
    };
    const fetchLearning = async () => {
      const type = "Learning";
      await axios.post(`get-group?type=${type}&lang=${i18n.locale.value}`).then((res) => {
        if (res.status === 200) {
          learing.value = res.data.info;
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
      const _component_NuxtLink = __nuxt_component_0$2;
      _push(`<!--[--><section data-v-8611fe05><div class="container" data-v-8611fe05><ul class="grids is-14-desktop is-1-mobile" data-v-8611fe05><li class="span-4-desktop" data-v-8611fe05><div class="logo margin-bottom-10" data-v-8611fe05><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-8611fe05><h3 data-v-8611fe05>THE BIZ HUB</h3></div><small class="margin-bottom-15" data-v-8611fe05>1st Floor, 108Hill Building Dongpaina Road, Saphanthong Village, Sisattanak District, Vientiane Capital, Lao PDR.</small><small data-v-8611fe05>020 56463959 | 020 56508160</small><small data-v-8611fe05>thebizhub.info@gmail.com</small></li><li class="span-5-desktop" data-v-8611fe05><h3 data-v-8611fe05>${ssrInterpolate(_ctx.$t("navbar_learning"))}</h3><ul data-v-8611fe05><!--[-->`);
      ssrRenderList(unref(learing), (o, index) => {
        _push(`<li data-v-8611fe05>`);
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
      _push(`<!--]--></ul></li><li class="span-5-desktop" data-v-8611fe05><h3 data-v-8611fe05>${ssrInterpolate(_ctx.$t("products"))}</h3><ul data-v-8611fe05><li data-v-8611fe05>${ssrInterpolate(_ctx.$t("product_biz_coaching"))}</li><li data-v-8611fe05>${ssrInterpolate(_ctx.$t("product_biz_course"))}</li><li data-v-8611fe05>${ssrInterpolate(_ctx.$t("product_business_consultant"))}</li></ul><div class="socials" data-v-8611fe05><h3 data-v-8611fe05>${ssrInterpolate(_ctx.$t("follow_us"))}</h3><ul data-v-8611fe05><li data-v-8611fe05><a href="https://www.facebook.com/profile.php?id=100091801856212" target="_blank" data-v-8611fe05><i class="fa-brands fa-facebook" data-v-8611fe05></i></a></li><li data-v-8611fe05><a href="https://www.tiktok.com/@thebizhublaos" target="_blank" data-v-8611fe05><i class="fa-brands fa-tiktok" data-v-8611fe05></i></a></li><li data-v-8611fe05><a href="https://www.youtube.com/@TheBIZHUB" target="_blank" data-v-8611fe05><i class="fa-brands fa-youtube" data-v-8611fe05></i></a></li></ul></div></li></ul></div></section><div class="footer" data-v-8611fe05><p data-v-8611fe05> Copyright © 108-1009 Group Co., Ltd. | Designed and Developed by Semicolon Sole Co., Ltd. </p></div><!--]-->`);
    };
  }
});
const Footer_vue_vue_type_style_index_0_scoped_8611fe05_lang = "";
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layouts/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-8611fe05"]]);
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
export {
  main as default
};
//# sourceMappingURL=main-41b20b9f.js.map
