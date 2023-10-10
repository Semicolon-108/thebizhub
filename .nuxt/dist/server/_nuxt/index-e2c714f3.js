import { a as useNuxtApp, b as useRoute, _ as _export_sfc } from "../server.mjs";
import { defineComponent, ref, withAsyncContext, watch, unref, useSSRContext } from "vue";
import "destr";
import "devalue";
import "klona";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { C as CategoryCardList } from "./card-list-bc453a53.js";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "h3";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "ufo";
import "axios";
import "defu";
import "./index-3b0293e6.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const axios = useNuxtApp().$axios;
    const route = useRoute();
    const cateInfo = ref();
    const isCate = ref();
    const info = ref();
    const page = ref(1);
    const perPage = ref(1e4);
    const tagId = ref("");
    const categoryFilter = ref("");
    const totals = ref(0);
    const msgError = ref();
    const search = ref("");
    const fetchCategory = async () => {
      const data = await axios.post(`get-reuses-list/Category`);
      const isFilter2 = data.data.info.filter((f) => !f.groupStatus);
      cateInfo.value = isFilter2;
      isCate.value = data.data.info;
    };
    const fetch = async () => {
      await axios.post(
        `get-articles?page=${page.value}&perPage=${perPage.value}&tagId=${tagId.value}&categoryId=${categoryFilter.value}&search=${search.value}`
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
    const isFilter = () => {
      const cateName = route.query.is;
      const update = "Update";
      if (cateName === update) {
        search.value = update;
        categoryFilter.value = "";
      } else {
        search.value = "";
        const data = isCate.value.find((i) => i.name === cateName);
        if (data) {
          categoryFilter.value = data._id;
          search.value = "";
        } else {
          categoryFilter.value = "";
          search.value = "";
        }
      }
    };
    [__temp, __restore] = withAsyncContext(() => fetchCategory()), await __temp, __restore();
    watch(
      route,
      (value) => {
        if (value.query.is) {
          isFilter();
          fetch();
        }
      },
      { immediate: true, deep: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(_attrs)} data-v-40519706><div class="container" data-v-40519706><h1 class="page-title" data-v-40519706>${ssrInterpolate(unref(route).query.is)}</h1>`);
      _push(ssrRenderComponent(CategoryCardList, { info: unref(info) }, null, _parent));
      _push(`</div></section>`);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_40519706_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/category/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-40519706"]]);
export {
  index as default
};
//# sourceMappingURL=index-e2c714f3.js.map
