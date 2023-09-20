import { useSSRContext, defineComponent, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { I as InfoBox } from './info-box-68e943ba.mjs';
import { _ as _export_sfc } from '../server.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'h3';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'ufo';
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
  __name: "password-recovery",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section" }, _attrs))} data-v-c1733541><div class="bg is-hidden-mobile" data-v-c1733541></div><div class="container" data-v-c1733541><h1 class="page-title" data-v-c1733541>Reset Password</h1><div class="grids is-2-desktop is-1-mobile margin-top-30 gap-30" data-v-c1733541><div class="left" data-v-c1733541><form action="" class="grids is-1-desktop is-1-mobile gap-20" data-v-c1733541><div class="field" data-v-c1733541><label for="" data-v-c1733541>Mobile number (020) <span data-v-c1733541>*</span></label><div class="control has-addon" data-v-c1733541><input type="text" class="input" placeholder="123456678" data-v-c1733541><a data-v-c1733541>Get Code</a></div></div><div class="field" data-v-c1733541><label for="" data-v-c1733541>Enter OTP code from SMS<span data-v-c1733541>*</span></label><div class="control" data-v-c1733541><input type="text" class="input" placeholder="1234" data-v-c1733541></div></div><div class="field" data-v-c1733541><label for="" data-v-c1733541>Set new password <span data-v-c1733541>*</span></label><div class="control" data-v-c1733541><input type="text" class="input" placeholder="Password" disabled data-v-c1733541></div></div></form><button class="button main margin-top-20 margin-bottom-10" data-v-c1733541> Reset Password </button></div><div class="right" data-v-c1733541>`);
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
const passwordRecovery = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c1733541"]]);

export { passwordRecovery as default };
//# sourceMappingURL=password-recovery-288ec391.mjs.map
