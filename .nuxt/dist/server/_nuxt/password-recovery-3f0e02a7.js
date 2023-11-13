import { defineComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { I as InfoBox } from "./info-box-4a05d697.js";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "devalue";
import "h3";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "ufo";
import "destr";
import "klona";
import "axios";
import "defu";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "password-recovery",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section" }, _attrs))} data-v-d48ef35d><div class="bg is-hidden-mobile" data-v-d48ef35d></div><div class="container" data-v-d48ef35d><h1 class="page-title" data-v-d48ef35d>Reset Password</h1><div class="grids is-2-desktop is-1-mobile margin-top-30 gap-30" data-v-d48ef35d><div class="left" data-v-d48ef35d><form action="" class="grids is-1-desktop is-1-mobile gap-20" data-v-d48ef35d><div class="field" data-v-d48ef35d><label for="" data-v-d48ef35d>Mobile number (020) <span data-v-d48ef35d>*</span></label><div class="control has-addon" data-v-d48ef35d><input type="text" class="input" placeholder="123456678" data-v-d48ef35d><a data-v-d48ef35d>Get Code</a></div></div><div class="field" data-v-d48ef35d><label for="" data-v-d48ef35d>Enter OTP code from SMS<span data-v-d48ef35d>*</span></label><div class="control" data-v-d48ef35d><input type="text" class="input" placeholder="1234" data-v-d48ef35d></div></div><div class="field" data-v-d48ef35d><label for="" data-v-d48ef35d>Set new password <span data-v-d48ef35d>*</span></label><div class="control" data-v-d48ef35d><input type="text" class="input" placeholder="Password" disabled data-v-d48ef35d></div></div></form><button class="button main margin-top-20 margin-bottom-10" data-v-d48ef35d> Reset Password </button></div><div class="right" data-v-d48ef35d>`);
      _push(ssrRenderComponent(InfoBox, null, null, _parent));
      _push(`</div></div></div></section>`);
    };
  }
});
const passwordRecovery_vue_vue_type_style_index_0_scoped_d48ef35d_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/password-recovery.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const passwordRecovery = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d48ef35d"]]);
export {
  passwordRecovery as default
};
//# sourceMappingURL=password-recovery-3f0e02a7.js.map
