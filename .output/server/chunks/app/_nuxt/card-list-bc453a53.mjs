import { unpackMeta, composableNames } from 'unhead';
import { r as resolveUnrefHeadInput, d as useHead, _ as _export_sfc, a as useNuxtApp, u as useRouter } from '../server.mjs';
import { ref, watchEffect, useSSRContext, defineComponent, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';

function useSeoMeta(input, options) {
  const headInput = ref({});
  watchEffect(() => {
    const resolvedMeta = resolveUnrefHeadInput(input);
    const { title, titleTemplate, ...meta } = resolvedMeta;
    headInput.value = {
      title,
      titleTemplate,
      meta: unpackMeta(meta)
    };
  });
  return useHead(headInput, options);
}
const coreComposableNames = [
  "injectHead"
];
({
  "@unhead/vue": [...coreComposableNames, ...composableNames]
});

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "card-list",
  __ssrInlineRender: true,
  props: ["info"],
  setup(__props) {
    useSeoMeta({
      title: "thebizhub",
      ogTitle: "bizhub",
      description: "bizhub",
      ogDescription: "bizhub, thebizhub, Thebizhub"
    });
    const imageURL = useNuxtApp().$imageURL;
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<ul${ssrRenderAttrs(mergeProps({ class: "grids is-3-desktop is-1-mobile gap-20-desktop margin-top-20" }, _attrs))} data-v-916298a2><!--[-->`);
      ssrRenderList(__props.info, (i, index) => {
        _push(`<li data-v-916298a2><div class="card" data-v-916298a2><div class="card-image" data-v-916298a2><img${ssrRenderAttr("src", unref(imageURL) + i.coverPage)} alt="" data-v-916298a2></div><div class="card-content" data-v-916298a2><ul class="tag-list" data-v-916298a2><!--[-->`);
        ssrRenderList(i.category, (c, ind) => {
          _push(`<li data-v-916298a2><a data-v-916298a2>${ssrInterpolate(c.name)}</a></li>`);
        });
        _push(`<!--]--></ul><h3 data-v-916298a2>${ssrInterpolate(i.title)}</h3></div></div></li>`);
      });
      _push(`<!--]--></ul>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/category/card-list.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CategoryCardList = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-916298a2"]]);

export { CategoryCardList as C };
//# sourceMappingURL=card-list-bc453a53.mjs.map
