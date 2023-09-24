import { useSSRContext, defineComponent, mergeProps } from 'file://D:/Thebizhub/thebizhub/node_modules/vue/index.mjs';
import { _ as _export_sfc, u as useRouter } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file://D:/Thebizhub/thebizhub/node_modules/vue/server-renderer/index.mjs';
import { I as InfoBox } from './info-box-68e943ba.mjs';
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
  __name: "register",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section" }, _attrs))} data-v-58d45ee2><div class="bg is-hidden-mobile" data-v-58d45ee2></div><div class="container" data-v-58d45ee2><h1 class="page-title" data-v-58d45ee2>Register</h1><div class="grids is-2-desktop is-1-mobile margin-top-30 gap-30" data-v-58d45ee2><div class="left" data-v-58d45ee2><form action="" class="grids is-2-desktop is-1-mobile gap-20" data-v-58d45ee2><div class="field" data-v-58d45ee2><label for="" data-v-58d45ee2>Name <span data-v-58d45ee2>*</span></label><div class="control" data-v-58d45ee2><input type="text" class="input" placeholder="Name" data-v-58d45ee2></div></div><div class="field" data-v-58d45ee2><label for="" data-v-58d45ee2>Birt Year <span data-v-58d45ee2>*</span></label><div class="control" data-v-58d45ee2><input type="text" class="input" placeholder="1999" data-v-58d45ee2></div></div><div class="field" data-v-58d45ee2><label for="" data-v-58d45ee2>Mobile number (020) <span data-v-58d45ee2>*</span></label><div class="control" data-v-58d45ee2><input type="text" class="input" placeholder="123456678" data-v-58d45ee2></div></div><div class="field" data-v-58d45ee2><label for="" data-v-58d45ee2>Email <span data-v-58d45ee2>*</span></label><div class="control" data-v-58d45ee2><input type="text" class="input" placeholder="email@gmail.com" data-v-58d45ee2></div></div><div class="field" data-v-58d45ee2><label for="" data-v-58d45ee2>Province <span data-v-58d45ee2>*</span></label><div class="control" data-v-58d45ee2><div class="select" data-v-58d45ee2><select data-v-58d45ee2><option data-v-58d45ee2>Select dropdown</option><option data-v-58d45ee2>With options</option></select></div></div></div><div class="field" data-v-58d45ee2><label for="" data-v-58d45ee2>Occupation <span data-v-58d45ee2>*</span></label><div class="control" data-v-58d45ee2><div class="select" data-v-58d45ee2><select data-v-58d45ee2><option data-v-58d45ee2>Select dropdown</option><option data-v-58d45ee2>With options</option></select></div></div></div><div class="field" data-v-58d45ee2><label for="" data-v-58d45ee2>Password <span data-v-58d45ee2>*</span></label><div class="control" data-v-58d45ee2><input type="text" class="input" placeholder="password" data-v-58d45ee2></div></div><div class="field" data-v-58d45ee2><label for="" data-v-58d45ee2>Confirm Password <span data-v-58d45ee2>*</span></label><div class="control" data-v-58d45ee2><input type="text" class="input" placeholder="Re-type password again" data-v-58d45ee2></div></div></form><button class="button main margin-top-20 margin-bottom-10" data-v-58d45ee2> Regsiter </button><p class="note" data-v-58d45ee2> Already have an account? <a data-v-58d45ee2>Login</a></p></div><div class="right" data-v-58d45ee2>`);
      _push(ssrRenderComponent(InfoBox, null, null, _parent));
      _push(`</div></div></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const register = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-58d45ee2"]]);

export { register as default };
//# sourceMappingURL=register-deafa11c.mjs.map
