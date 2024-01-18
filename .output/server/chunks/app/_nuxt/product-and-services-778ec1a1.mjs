import { _ as __nuxt_component_0 } from './nuxt-link-691e5b50.mjs';
import { _ as _export_sfc, d as useNuxtApp, u as useRouter } from '../server.mjs';
import { useSSRContext, defineComponent, ref, watch, unref, withCtx, createVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
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
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(_attrs)} data-v-b96580f8><div class="container" data-v-b96580f8><h1 class="section-title" data-v-b96580f8>\u0E9C\u0EB0\u0EA5\u0EB4\u0E94\u0E95\u0EB0\u0E9E\u0EB1\u0E99/\u0E81\u0EB2\u0E99\u0E9A\u0ECD\u0EA5\u0EB4\u0E81\u0EB2\u0E99\u0E82\u0EAD\u0E87\u0EC0\u0EAE\u0EBB\u0EB2</h1><ul class="image-list grids is-3-desktop is-1-mobile gap-20-desktop" data-v-b96580f8><!--[-->`);
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about-us/product-and-services.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ProductAndServcie = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b96580f8"]]);

export { ProductAndServcie as default };
//# sourceMappingURL=product-and-services-778ec1a1.mjs.map
