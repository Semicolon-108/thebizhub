import { _ as _export_sfc, d as useNuxtApp, u as useRouter, e as useCookie } from '../server.mjs';
import { useSSRContext, defineComponent, ref, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderStyle, ssrIncludeBooleanAttr, ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "password-recovery",
  __ssrInlineRender: true,
  setup(__props) {
    useNuxtApp().$axios;
    useRouter();
    const email = ref();
    const verifyCode = ref();
    const emailError = ref("");
    const emailSucceed = ref("");
    const password = ref();
    const isResetPassword = ref(false);
    const passwordError = ref("");
    const resetSucceed = ref("");
    const otpError = ref("");
    useCookie("verifyToken");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section" }, _attrs))} data-v-63b02884><div class="bg is-hidden-mobile" data-v-63b02884></div><div class="container" data-v-63b02884><h1 class="page-title" data-v-63b02884>Reset Password</h1><div class="grids is-2-desktop is-1-mobile margin-top-30 gap-30" data-v-63b02884><div class="left" data-v-63b02884><form action="" class="grids is-1-desktop is-1-mobile gap-20" data-v-63b02884><div class="field" data-v-63b02884><label for="" data-v-63b02884>${ssrInterpolate(_ctx.$t("email"))} <span data-v-63b02884>*</span></label><div class="control has-addon" data-v-63b02884><input type="text" class="input" placeholder="E-mail"${ssrRenderAttr("value", unref(email))} data-v-63b02884><a data-v-63b02884>Get Code</a></div>`);
      if (unref(emailSucceed)) {
        _push(`<p style="${ssrRenderStyle({ "color": "#0eb56d" })}" data-v-63b02884>${ssrInterpolate(unref(emailSucceed))}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(emailError)) {
        _push(`<p style="${ssrRenderStyle({ "color": "red" })}" data-v-63b02884>${ssrInterpolate(unref(emailError))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="field" data-v-63b02884><label for="" data-v-63b02884>Enter OTP code from Inbox<span data-v-63b02884>*</span></label><div class="control" data-v-63b02884><input type="text" class="input" placeholder="Fill OTP and Press Enter"${ssrRenderAttr("value", unref(verifyCode))} data-v-63b02884></div>`);
      if (unref(otpError)) {
        _push(`<p style="${ssrRenderStyle({ "color": "red" })}" data-v-63b02884>${ssrInterpolate(unref(otpError))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="field" data-v-63b02884><label for="" data-v-63b02884>Set new password <span data-v-63b02884>*</span></label><div class="control" data-v-63b02884><input type="text" class="input" placeholder="Password"${ssrIncludeBooleanAttr(!unref(isResetPassword)) ? " disabled" : ""}${ssrRenderAttr("value", unref(password))} data-v-63b02884></div></div>`);
      if (unref(passwordError)) {
        _push(`<p style="${ssrRenderStyle({ "color": "red" })}" data-v-63b02884>${ssrInterpolate(unref(passwordError))}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(resetSucceed)) {
        _push(`<p style="${ssrRenderStyle({ "color": "#0eb56d" })}" data-v-63b02884>${ssrInterpolate(unref(resetSucceed))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</form><button class="button main margin-top-20 margin-bottom-10" data-v-63b02884> Reset Password </button></div><div class="right" data-v-63b02884>`);
      _push(ssrRenderComponent(InfoBox, null, null, _parent));
      _push(`</div></div></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/password-recovery.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const passwordRecovery = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-63b02884"]]);

export { passwordRecovery as default };
//# sourceMappingURL=password-recovery-b277a77e.mjs.map
