import { useSSRContext, defineComponent, mergeProps } from 'file://D:/Thebizhub/thebizhub/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file://D:/Thebizhub/thebizhub/node_modules/vue/server-renderer/index.mjs';
import { I as InfoBox } from './info-box-68e943ba.mjs';
import { _ as _export_sfc } from '../server.mjs';
import 'file://D:/Thebizhub/thebizhub/node_modules/ofetch/dist/node.mjs';
import 'file://D:/Thebizhub/thebizhub/node_modules/hookable/dist/index.mjs';
import 'file://D:/Thebizhub/thebizhub/node_modules/unctx/dist/index.mjs';
import 'file://D:/Thebizhub/thebizhub/node_modules/h3/dist/index.mjs';
import 'file://D:/Thebizhub/thebizhub/node_modules/@unhead/ssr/dist/index.mjs';
import 'file://D:/Thebizhub/thebizhub/node_modules/unhead/dist/index.mjs';
import 'file://D:/Thebizhub/thebizhub/node_modules/@unhead/shared/dist/index.mjs';
import 'file://D:/Thebizhub/thebizhub/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://D:/Thebizhub/thebizhub/node_modules/ufo/dist/index.mjs';
import 'file://D:/Thebizhub/thebizhub/node_modules/defu/dist/defu.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file://D:/Thebizhub/thebizhub/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file://D:/Thebizhub/thebizhub/node_modules/destr/dist/index.mjs';
import 'file://D:/Thebizhub/thebizhub/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://D:/Thebizhub/thebizhub/node_modules/scule/dist/index.mjs';
import 'file://D:/Thebizhub/thebizhub/node_modules/klona/dist/index.mjs';
import 'file://D:/Thebizhub/thebizhub/node_modules/ohash/dist/index.mjs';
import 'file://D:/Thebizhub/thebizhub/node_modules/unstorage/dist/index.mjs';
import 'file://D:/Thebizhub/thebizhub/node_modules/unstorage/drivers/fs.mjs';
import 'file://D:/Thebizhub/thebizhub/node_modules/radix3/dist/index.mjs';

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
