import { _ as _export_sfc, d as useNuxtApp, u as useRouter } from '../server.mjs';
import { useSSRContext, defineComponent, ref, mergeProps, unref } from 'vue';
import { u as useCookie } from './cookie-9ebd6d73.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { I as InfoBox } from './info-box-65a61f5f.mjs';
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
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section" }, _attrs))} data-v-6b71aa29><div class="bg is-hidden-mobile" data-v-6b71aa29></div><div class="container" data-v-6b71aa29><h1 class="page-title" data-v-6b71aa29>Verify OTP</h1><div class="grids is-2-desktop is-1-mobile margin-top-30 gap-30" data-v-6b71aa29><div class="left" data-v-6b71aa29><form action="" class="grids is-1-desktop is-1-mobile gap-20" data-v-6b71aa29><div class="field" data-v-6b71aa29><label for="" data-v-6b71aa29>Enter OTP code from Inbox <span data-v-6b71aa29>*</span></label><div class="control has-addon" data-v-6b71aa29><input type="text" class="input"${ssrRenderAttr("value", unref(isVerifyCode))} placeholder="1234" data-v-6b71aa29><a data-v-6b71aa29>Resend Code</a></div> <small style="${ssrRenderStyle({ "color": "red" })}" data-v-6b71aa29>Your OTP will expire in 15 minutes from now</small></div></form>`);
      if (unref(succesMsg)) {
        _push(`<small style="${ssrRenderStyle({ "color": "green" })}" data-v-6b71aa29>${ssrInterpolate(unref(succesMsg))}</small>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(erMsg)) {
        _push(`<small style="${ssrRenderStyle({ "color": "red" })}" data-v-6b71aa29>${ssrInterpolate(unref(erMsg))}</small>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button class="button main margin-top-20 margin-bottom-10" data-v-6b71aa29> Verify </button></div><div class="right" data-v-6b71aa29>`);
      _push(ssrRenderComponent(InfoBox, null, null, _parent));
      _push(`</div></div></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/otp.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const otp = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6b71aa29"]]);

export { otp as default };
//# sourceMappingURL=otp-fa738ed3.mjs.map
