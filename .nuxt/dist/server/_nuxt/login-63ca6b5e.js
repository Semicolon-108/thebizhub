import { _ as __nuxt_component_0 } from "./nuxt-link-15b2078b.js";
import { defineComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import "hookable";
import { u as useRouter, _ as _export_sfc } from "../server.mjs";
import "destr";
import "devalue";
import "klona";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { I as InfoBox } from "./info-box-f8c745d5.js";
import "ufo";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "h3";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "axios";
import "defu";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section" }, _attrs))} data-v-5f659b3c><div class="bg is-hidden-mobile" data-v-5f659b3c></div><div class="container" data-v-5f659b3c><h1 class="page-title" data-v-5f659b3c>Login</h1><div class="grids is-5-desktop is-1-mobile margin-top-30 gap-30-desktop" data-v-5f659b3c><div class="left span-2-desktop" data-v-5f659b3c><form action="" class="grids is-1-desktop is-1-mobile gap-20-desktop" data-v-5f659b3c><div class="field" data-v-5f659b3c><label for="" data-v-5f659b3c>Mobile number (020) <span data-v-5f659b3c>*</span></label><div class="control" data-v-5f659b3c><input type="text" class="input" placeholder="123456678" data-v-5f659b3c></div></div><div class="field" data-v-5f659b3c><label for="" data-v-5f659b3c>Password <span data-v-5f659b3c>*</span></label><div class="control" data-v-5f659b3c><input type="text" class="input" placeholder="password" data-v-5f659b3c>`);
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
      _push(`</div></div></form><button class="button main margin-top-20 margin-bottom-10" data-v-5f659b3c> Login </button><p class="note" data-v-5f659b3c> Don&#39;t have an account? <a data-v-5f659b3c>Register</a></p></div><div class="right span-3-desktop" data-v-5f659b3c>`);
      _push(ssrRenderComponent(InfoBox, null, null, _parent));
      _push(`</div></div></div></section>`);
    };
  }
});
const login_vue_vue_type_style_index_0_scoped_5f659b3c_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const login = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5f659b3c"]]);
export {
  login as default
};
//# sourceMappingURL=login-63ca6b5e.js.map
