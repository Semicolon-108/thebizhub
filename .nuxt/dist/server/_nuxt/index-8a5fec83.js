import { d as useNuxtApp, g as useRoute, _ as _export_sfc } from "../server.mjs";
import { defineComponent, ref, watch, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { C as CategoryCardList } from "./card-list-aa5de6dd.js";
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
import "@vue/devtools-api";
import "devalue";
import "axios";
import "vue-i18n";
import "cookie-es";
import "ohash";
import "./index-2cdcde44.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const axios = useNuxtApp().$axios;
    const info = ref();
    const route = useRoute();
    const page = ref(1);
    const perPage = ref(10);
    const tagId = ref("");
    const categoryFilter = ref("");
    const totals = ref(0);
    const msgError = ref();
    const search = ref("");
    const fetch = async () => {
      await axios.post(
        `get-articles?page=${page.value}&perPage=${perPage.value}&tagId=${tagId.value}&categoryId=${categoryFilter.value}&title=${search.value}`
      ).then((res) => {
        if (res.status === 200) {
          info.value = res.data.info;
          totals.value = res.data.total;
        }
      }).catch((e) => {
        if (e) {
          msgError.value = "Data empty";
        }
      });
    };
    watch(route, (value) => {
      if (value.query.search) {
        search.value = value.query.search;
        fetch();
      }
    }, { immediate: true, deep: true });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(_attrs)} data-v-8bcb80f8><div class="container" data-v-8bcb80f8><div class="page-header" data-v-8bcb80f8><p data-v-8bcb80f8>Search keywords:</p><h1 class="page-title" data-v-8bcb80f8>${ssrInterpolate(unref(search))}</h1></div><div class="search-result" data-v-8bcb80f8>`);
      _push(ssrRenderComponent(CategoryCardList, { info: unref(info) }, null, _parent));
      _push(`</div></div></section>`);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_8bcb80f8_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/search/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8bcb80f8"]]);
export {
  index as default
};
//# sourceMappingURL=index-8a5fec83.js.map
