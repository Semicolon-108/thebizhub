import { d as useNuxtApp, f as useRoute, _ as _export_sfc } from "../server.mjs";
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
import "./index-2cdcde44.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const axios = useNuxtApp().$axios;
    const tag = ref();
    const info = ref();
    const route = useRoute();
    const page = ref(1);
    const perPage = ref(10);
    const tagId = ref("");
    const categoryFilter = ref("");
    const totals = ref(0);
    const msgError = ref();
    const fetch = async () => {
      await axios.post(
        `get-articles?page=${page.value}&perPage=${perPage.value}&tagId=${tagId.value}&categoryId=${categoryFilter.value}`
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
    const tagInfo = async () => {
      const res = await axios.post(`edit-reuse?_id=${tagId.value}&type=Tags`);
      tag.value = res.data.info.name;
    };
    watch(
      route,
      (value) => {
        if (value.params.id) {
          tagId.value = value.params.id.toString();
          tagInfo();
          fetch();
        }
      },
      { immediate: true, deep: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(_attrs)} data-v-708ff6d3><div class="container" data-v-708ff6d3><h1 class="tag-title" data-v-708ff6d3><span data-v-708ff6d3>#</span> ${ssrInterpolate(unref(tag))}</h1><div class="search-result" data-v-708ff6d3>`);
      _push(ssrRenderComponent(CategoryCardList, { info: unref(info) }, null, _parent));
      _push(`</div></div></section>`);
    };
  }
});
const _id__vue_vue_type_style_index_0_scoped_708ff6d3_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tag/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-708ff6d3"]]);
export {
  _id_ as default
};
//# sourceMappingURL=_id_-bfc0b3cb.js.map
