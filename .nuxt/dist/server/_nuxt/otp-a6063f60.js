import { d as useNuxtApp, e as useCookie, u as useRouter, _ as _export_sfc } from "../server.mjs";
import { defineComponent, ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { I as InfoBox } from "./info-box-65a61f5f.js";
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "otp",
  __ssrInlineRender: true,
  setup(__props) {
    useNuxtApp().$axios;
    const succesMsg = ref();
    const erMsg = ref();
    const isVerifyCode = ref();
    useCookie("verifyToken");
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section" }, _attrs))} data-v-0fbed77d><div class="bg is-hidden-mobile" data-v-0fbed77d></div><div class="container" data-v-0fbed77d><h1 class="page-title" data-v-0fbed77d>Verify OTP</h1><div class="grids is-2-desktop is-1-mobile margin-top-30 gap-30" data-v-0fbed77d><div class="left" data-v-0fbed77d><form action="" class="grids is-1-desktop is-1-mobile gap-20" data-v-0fbed77d><div class="field" data-v-0fbed77d><label for="" data-v-0fbed77d>Enter OTP code from Inbox <span data-v-0fbed77d>*</span></label><div class="control has-addon" data-v-0fbed77d><input type="text" class="input"${ssrRenderAttr("value", unref(isVerifyCode))} placeholder="1234" data-v-0fbed77d><a data-v-0fbed77d>Resend Code</a></div> <small style="${ssrRenderStyle({ "color": "red" })}" data-v-0fbed77d>Your OTP will expire in 15 minutes from now</small></div></form>`);
      if (unref(succesMsg)) {
        _push(`<small style="${ssrRenderStyle({ "color": "green" })}" data-v-0fbed77d>${ssrInterpolate(unref(succesMsg))}</small>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(erMsg)) {
        _push(`<small style="${ssrRenderStyle({ "color": "red" })}" data-v-0fbed77d>${ssrInterpolate(unref(erMsg))}</small>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button class="button main margin-top-20 margin-bottom-10" data-v-0fbed77d> Verify </button></div><div class="right" data-v-0fbed77d>`);
      _push(ssrRenderComponent(InfoBox, null, null, _parent));
      _push(`</div></div></div></section>`);
    };
  }
});
const otp_vue_vue_type_style_index_0_scoped_0fbed77d_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/otp.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const otp = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0fbed77d"]]);
export {
  otp as default
};
//# sourceMappingURL=otp-a6063f60.js.map
