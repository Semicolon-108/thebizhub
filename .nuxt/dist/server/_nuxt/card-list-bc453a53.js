import { u as useSeoMeta } from "./index-3b0293e6.js";
import { a as useNuxtApp, u as useRouter, _ as _export_sfc } from "../server.mjs";
import { defineComponent, mergeProps, unref, useSSRContext } from "vue";
import "destr";
import "devalue";
import "klona";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
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
const cardList_vue_vue_type_style_index_0_scoped_916298a2_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/category/card-list.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CategoryCardList = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-916298a2"]]);
export {
  CategoryCardList as C
};
//# sourceMappingURL=card-list-bc453a53.js.map
