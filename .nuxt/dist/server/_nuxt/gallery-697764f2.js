import { d as useNuxtApp, _ as _export_sfc } from "../server.mjs";
import { defineComponent, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
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
import "devalue";
import "axios";
import "vue-i18n";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "gallery",
  __ssrInlineRender: true,
  props: ["data"],
  setup(__props) {
    const showImage = useNuxtApp().$imageURL;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "gallery-container" }, _attrs))} data-v-dd35ccd0><div class="close" data-v-dd35ccd0><i class="fa-regular fa-xmark" data-v-dd35ccd0></i></div><div class="bg" data-v-dd35ccd0></div><div class="gallery" data-v-dd35ccd0><img${ssrRenderAttr("src", unref(showImage) + __props.data)} alt="" data-v-dd35ccd0></div></div>`);
    };
  }
});
const gallery_vue_vue_type_style_index_0_scoped_dd35ccd0_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about-us/gallery.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Gallery = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-dd35ccd0"]]);
export {
  Gallery as default
};
//# sourceMappingURL=gallery-697764f2.js.map
