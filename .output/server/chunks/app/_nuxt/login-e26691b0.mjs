import { _ as __nuxt_component_0 } from './nuxt-link-15b2078b.mjs';
import { useSSRContext, defineComponent, mergeProps, withCtx, createTextVNode } from 'vue';
import { _ as _export_sfc, u as useRouter } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { I as InfoBox } from './info-box-68e943ba.mjs';
import 'ufo';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'h3';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
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
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section" }, _attrs))} data-v-2d681666><div class="bg is-hidden-mobile" data-v-2d681666></div><div class="container" data-v-2d681666><h1 class="page-title" data-v-2d681666>Login</h1><div class="grids is-5-desktop is-1-mobile margin-top-30 gap-30" data-v-2d681666><div class="left span-2" data-v-2d681666><form action="" class="grids is-1-desktop is-1-mobile gap-20" data-v-2d681666><div class="field" data-v-2d681666><label for="" data-v-2d681666>Mobile number (020) <span data-v-2d681666>*</span></label><div class="control" data-v-2d681666><input type="text" class="input" placeholder="123456678" data-v-2d681666></div></div><div class="field" data-v-2d681666><label for="" data-v-2d681666>Password <span data-v-2d681666>*</span></label><div class="control" data-v-2d681666><input type="text" class="input" placeholder="password" data-v-2d681666>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "password-recovery" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Forgot Password`);
          } else {
            return [
              createTextVNode("Forgot Password")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></form><button class="button main margin-top-20 margin-bottom-10" data-v-2d681666> Login </button><p class="note" data-v-2d681666> Don&#39;t have an account? <a data-v-2d681666>Register</a></p></div><div class="right span-3" data-v-2d681666>`);
      _push(ssrRenderComponent(InfoBox, null, null, _parent));
      _push(`</div></div></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const login = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2d681666"]]);

export { login as default };
//# sourceMappingURL=login-e26691b0.mjs.map
