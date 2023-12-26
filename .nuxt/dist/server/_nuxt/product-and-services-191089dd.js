import { d as useNuxtApp, u as useRouter, _ as _export_sfc } from "../server.mjs";
import { defineComponent, ref, watch, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { useI18n } from "vue-i18n";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "ufo";
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
      _push(`<section${ssrRenderAttrs(_attrs)} data-v-11e8e6d5><div class="container" data-v-11e8e6d5><h1 class="section-title" data-v-11e8e6d5>ຜະລິດຕະພັນ/ການບໍລິການຂອງເຮົາ</h1><ul class="image-list grids is-3-desktop is-1-mobile gap-20-desktop" data-v-11e8e6d5><!--[-->`);
      ssrRenderList(unref(info), (i, index) => {
        _push(`<li data-v-11e8e6d5><img${ssrRenderAttr("src", unref(urlImage) + i.image)} data-v-11e8e6d5><h3 data-v-11e8e6d5>${ssrInterpolate(i.key)}</h3></li>`);
      });
      _push(`<!--]--></ul></div></section>`);
    };
  }
});
const productAndServices_vue_vue_type_style_index_0_scoped_11e8e6d5_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about-us/product-and-services.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ProductAndServcie = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-11e8e6d5"]]);
export {
  ProductAndServcie as default
};
//# sourceMappingURL=product-and-services-191089dd.js.map
