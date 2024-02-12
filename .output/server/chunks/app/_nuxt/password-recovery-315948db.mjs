import { useSSRContext, defineComponent, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { I as InfoBox } from './info-box-65a61f5f.mjs';
import { _ as _export_sfc } from '../server.mjs';
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
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section" }, _attrs))} data-v-8892b2a8><div class="bg is-hidden-mobile" data-v-8892b2a8></div><div class="container" data-v-8892b2a8><h1 class="page-title" data-v-8892b2a8>Reset Password</h1><div class="grids is-2-desktop is-1-mobile margin-top-30 gap-30" data-v-8892b2a8><div class="left" data-v-8892b2a8><form action="" class="grids is-1-desktop is-1-mobile gap-20" data-v-8892b2a8><div class="field" data-v-8892b2a8><label for="" data-v-8892b2a8>Mobile number (020) <span data-v-8892b2a8>*</span></label><div class="control has-addon" data-v-8892b2a8><input type="text" class="input" placeholder="123456678" data-v-8892b2a8><a data-v-8892b2a8>Get Code</a></div></div><div class="field" data-v-8892b2a8><label for="" data-v-8892b2a8>Enter OTP code from SMS<span data-v-8892b2a8>*</span></label><div class="control" data-v-8892b2a8><input type="text" class="input" placeholder="1234" data-v-8892b2a8></div></div><div class="field" data-v-8892b2a8><label for="" data-v-8892b2a8>Set new password <span data-v-8892b2a8>*</span></label><div class="control" data-v-8892b2a8><input type="text" class="input" placeholder="Password" disabled data-v-8892b2a8></div></div></form><button class="button main margin-top-20 margin-bottom-10" data-v-8892b2a8> Reset Password </button></div><div class="right" data-v-8892b2a8>`);
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
const passwordRecovery = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8892b2a8"]]);

export { passwordRecovery as default };
//# sourceMappingURL=password-recovery-315948db.mjs.map
