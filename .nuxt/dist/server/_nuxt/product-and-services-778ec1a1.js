import { _ as __nuxt_component_0 } from "./nuxt-link-691e5b50.js";
import { d as useNuxtApp, u as useRouter, _ as _export_sfc } from "../server.mjs";
import { defineComponent, ref, watch, unref, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "product-and-services",
  __ssrInlineRender: true,
  setup(__props) {
    const axios = useNuxtApp().$axios;
    useNuxtApp().$https;
    const urlImage = useNuxtApp().$imageURL;
    useRouter();
    const { locale } = useI18n();
    const info = ref();
    const fetchOurService = async () => {
      const isLang = locale.value ? locale.value : "en";
      const data = await axios.post(`get-our-service-api?lang=${isLang}`);
      info.value = data.data.info;
    };
    watch(
      () => locale.value,
      (value) => {
        fetchOurService();
      },
      { immediate: true, deep: true }
    );
    fetchOurService();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(_attrs)} data-v-b96580f8><div class="container" data-v-b96580f8><h1 class="section-title" data-v-b96580f8>ຜະລິດຕະພັນ/ການບໍລິການຂອງເຮົາ</h1><ul class="image-list grids is-3-desktop is-1-mobile gap-20-desktop" data-v-b96580f8><!--[-->`);
      ssrRenderList(unref(info), (i, index) => {
        _push(`<li data-v-b96580f8><img${ssrRenderAttr("src", unref(urlImage) + i.image)} data-v-b96580f8><h3 data-v-b96580f8>${ssrInterpolate(i.key)}</h3><br data-v-b96580f8>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: {
            path: `/${i.link}`
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<button class="button main small" data-v-b96580f8${_scopeId}>${ssrInterpolate(_ctx.$t("more_detail"))}</button>`);
            } else {
              return [
                createVNode("button", { class: "button main small" }, toDisplayString(_ctx.$t("more_detail")), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div></section>`);
    };
  }
});
const productAndServices_vue_vue_type_style_index_0_scoped_b96580f8_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about-us/product-and-services.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ProductAndServcie = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b96580f8"]]);
export {
  ProductAndServcie as default
};
//# sourceMappingURL=product-and-services-778ec1a1.js.map
