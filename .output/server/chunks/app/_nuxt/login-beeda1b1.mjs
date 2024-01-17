import { _ as __nuxt_component_0 } from './nuxt-link-691e5b50.mjs';
import { _ as _export_sfc, u as useRouter } from '../server.mjs';
import { useSSRContext, defineComponent, mergeProps, withCtx, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { I as InfoBox } from './info-box-9371ccc0.mjs';
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
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section" }, _attrs))} data-v-9dba61fa><div class="bg is-hidden-mobile" data-v-9dba61fa></div><div class="container" data-v-9dba61fa><h1 class="page-title" data-v-9dba61fa>${ssrInterpolate(_ctx.$t("login"))}</h1><div class="grids is-5-desktop is-1-mobile margin-top-30 gap-30-desktop" data-v-9dba61fa><div class="left span-2-desktop" data-v-9dba61fa><form action="" class="grids is-1-desktop is-1-mobile gap-20-desktop" data-v-9dba61fa><div class="field" data-v-9dba61fa><label for="" data-v-9dba61fa>${ssrInterpolate(_ctx.$t("contact_number"))} <span data-v-9dba61fa>*</span></label><div class="control" data-v-9dba61fa><input type="text" class="input" placeholder="123456678" data-v-9dba61fa></div></div><div class="field" data-v-9dba61fa><label for="" data-v-9dba61fa>${ssrInterpolate(_ctx.$t("password"))} <span data-v-9dba61fa>*</span></label><div class="control" data-v-9dba61fa><input type="text" class="input" placeholder="password" data-v-9dba61fa>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "password-recovery" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("forgot_password"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("forgot_password")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></form><button class="button main margin-top-20 margin-bottom-10" data-v-9dba61fa>${ssrInterpolate(_ctx.$t("login"))}</button><p class="note" data-v-9dba61fa>${ssrInterpolate(_ctx.$t("dont_have_account"))} <a data-v-9dba61fa>${ssrInterpolate(_ctx.$t("register"))}</a></p></div><div class="right span-3-desktop" data-v-9dba61fa>`);
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
const login = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9dba61fa"]]);

export { login as default };
//# sourceMappingURL=login-beeda1b1.mjs.map
