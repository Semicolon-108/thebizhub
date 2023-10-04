import { _ as _export_sfc, a as useNuxtApp, b as useRoute } from '../server.mjs';
import { useSSRContext, defineComponent, ref, watch, unref } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { C as CategoryCardList } from './card-list-bc453a53.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'h3';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'ufo';
import 'axios';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'klona';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'http-graceful-shutdown';

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
    watch(route, (value) => {
      if (value.params.id) {
        tagId.value = value.params.id.toString();
        tagInfo();
        fetch();
      }
    }, { immediate: true, deep: true });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(_attrs)} data-v-fa9881ae><div class="container" data-v-fa9881ae><h1 class="tag-title" data-v-fa9881ae><span data-v-fa9881ae>#</span> ${ssrInterpolate(unref(tag))}</h1><div class="search-result" data-v-fa9881ae>`);
      _push(ssrRenderComponent(CategoryCardList, { info: unref(info) }, null, _parent));
      _push(`</div></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tag/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-fa9881ae"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-7cae1f37.mjs.map
