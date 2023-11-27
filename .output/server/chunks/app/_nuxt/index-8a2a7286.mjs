import { _ as _export_sfc, d as useNuxtApp, e as useRoute } from '../server.mjs';
import { useSSRContext, defineComponent, ref, withAsyncContext, watch, unref } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { C as CategoryCardList } from './card-list-aa5de6dd.mjs';
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
import 'vue-i18n';
import './index-2cdcde44.mjs';

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
      info.value = [];
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
    isFilter();
    [__temp, __restore] = withAsyncContext(() => fetch()), await __temp, __restore();
    watch(
      () => route.path,
      () => {
        isFilter();
        fetch();
      },
      { deep: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(_attrs)} data-v-e084cd2a><div class="container" data-v-e084cd2a><h1 class="page-title" data-v-e084cd2a>${ssrInterpolate(unref(route).query.is)}</h1>`);
      _push(ssrRenderComponent(CategoryCardList, { info: unref(info) }, null, _parent));
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/category/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e084cd2a"]]);

export { index as default };
//# sourceMappingURL=index-8a2a7286.mjs.map
