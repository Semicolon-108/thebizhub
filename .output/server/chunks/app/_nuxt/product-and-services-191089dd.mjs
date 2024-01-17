import { _ as _export_sfc, d as useNuxtApp, u as useRouter } from '../server.mjs';
import { useSSRContext, defineComponent, ref, watch, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { useI18n } from 'vue-i18n';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'axios';

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
      _push(`<section${ssrRenderAttrs(_attrs)} data-v-11e8e6d5><div class="container" data-v-11e8e6d5><h1 class="section-title" data-v-11e8e6d5>\u0E9C\u0EB0\u0EA5\u0EB4\u0E94\u0E95\u0EB0\u0E9E\u0EB1\u0E99/\u0E81\u0EB2\u0E99\u0E9A\u0ECD\u0EA5\u0EB4\u0E81\u0EB2\u0E99\u0E82\u0EAD\u0E87\u0EC0\u0EAE\u0EBB\u0EB2</h1><ul class="image-list grids is-3-desktop is-1-mobile gap-20-desktop" data-v-11e8e6d5><!--[-->`);
      ssrRenderList(unref(info), (i, index) => {
        _push(`<li data-v-11e8e6d5><img${ssrRenderAttr("src", unref(urlImage) + i.image)} data-v-11e8e6d5><h3 data-v-11e8e6d5>${ssrInterpolate(i.key)}</h3></li>`);
      });
      _push(`<!--]--></ul></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about-us/product-and-services.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ProductAndServcie = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-11e8e6d5"]]);

export { ProductAndServcie as default };
//# sourceMappingURL=product-and-services-191089dd.mjs.map
