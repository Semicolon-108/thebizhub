import { a as useSeoMeta } from './index-2cdcde44.mjs';
import { _ as _export_sfc, d as useNuxtApp, u as useRouter } from '../server.mjs';
import { useSSRContext, defineComponent, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "card-list",
  __ssrInlineRender: true,
  props: ["info"],
  setup(__props) {
    useSeoMeta({
      title: "TheBIZHub",
      ogTitle: "Partner for success in business and entrepreneurship",
      description: "Partner for success in business and entrepreneurship",
      ogDescription: "Partner for success in business and entrepreneurship"
    });
    const imageURL = useNuxtApp().$imageURL;
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-e0dea387><ul class="grids is-3-desktop is-1-mobile gap-20-desktop margin-top-20" data-v-e0dea387><!--[-->`);
      ssrRenderList(__props.info, (i, index) => {
        _push(`<li data-v-e0dea387><div class="card" data-v-e0dea387><div class="card-image" data-v-e0dea387><img${ssrRenderAttr("src", unref(imageURL) + i.coverPage)} alt="" data-v-e0dea387></div><div class="card-content" data-v-e0dea387><ul class="tag-list" data-v-e0dea387><!--[-->`);
        ssrRenderList(i.category, (c, ind) => {
          _push(`<li data-v-e0dea387><a data-v-e0dea387>${ssrInterpolate(c.name)}</a></li>`);
        });
        _push(`<!--]--></ul><h3 data-v-e0dea387>${ssrInterpolate(i.title)}</h3></div></div></li>`);
      });
      _push(`<!--]--></ul></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/category/card-list.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CategoryCardList = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e0dea387"]]);

export { CategoryCardList as C };
//# sourceMappingURL=card-list-aa5de6dd.mjs.map
