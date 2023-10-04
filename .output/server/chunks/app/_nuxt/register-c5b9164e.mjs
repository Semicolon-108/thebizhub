import { _ as _export_sfc, u as useRouter, a as useNuxtApp } from '../server.mjs';
import { useSSRContext, defineComponent, ref, reactive, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import { I as InfoBox } from './info-box-f8c745d5.mjs';
import { helpers, required } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'h3';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'ufo';
import 'axios';
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
  __name: "register",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const axios = useNuxtApp().$axios;
    const occupationInfo = ref();
    const provinceInfo = ref();
    const isError = ref("");
    const response = ref("");
    const state = reactive({
      occupation: "",
      province: "",
      name: "",
      birtYear: "",
      mobile: "",
      email: "",
      password: "",
      confirmPassword: ""
    });
    const rules = {
      occupation: { required: helpers.withMessage("Occupation cannot be empty", required) },
      province: { required: helpers.withMessage("Province cannot be empty", required) },
      name: { required: helpers.withMessage("Name cannot be empty", required) },
      birtYear: { required: helpers.withMessage("Birt Year cannot be empty", required) },
      mobile: { required: helpers.withMessage("Mobile cannot be empty", required) },
      password: { required: helpers.withMessage("Password cannot be empty", required) },
      confirmPassword: { required: helpers.withMessage("Confirm password cannot be empty", required) },
      email: { required: helpers.withMessage("email cannot be empty and must be email", required) }
    };
    const v$ = useVuelidate(rules, state);
    const fetchCategory = async () => {
      const data = await axios.post(`get-reuses-list/Occupation`);
      occupationInfo.value = data.data.info;
    };
    const fetchProvince = async () => {
      const data = await axios.post(`get-reuses-list/Province`);
      provinceInfo.value = data.data.info;
    };
    fetchCategory();
    fetchProvince();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section" }, _attrs))} data-v-a5924e35><div class="bg is-hidden-mobile" data-v-a5924e35></div><div class="container" data-v-a5924e35><h1 class="page-title" data-v-a5924e35>Register</h1><div class="grids is-2-desktop is-1-mobile margin-top-30 gap-30-desktop" data-v-a5924e35><div class="left" data-v-a5924e35><form action="" class="grids is-2-desktop is-1-mobile gap-20-desktop" data-v-a5924e35><div class="field" data-v-a5924e35><label for="" data-v-a5924e35>Name <span data-v-a5924e35>*</span></label><div class="control" data-v-a5924e35><input type="text"${ssrRenderAttr("value", unref(state).name)} class="input" placeholder="Name" data-v-a5924e35>`);
      if (unref(v$).name.$error) {
        _push(`<div class="err" data-v-a5924e35>${ssrInterpolate(unref(v$).name.required.$message)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="field" data-v-a5924e35><label for="" data-v-a5924e35>Year Of Birth: <span data-v-a5924e35>*</span></label><div class="control" data-v-a5924e35><input type="number"${ssrRenderAttr("value", unref(state).birtYear)} class="input" placeholder="1999" data-v-a5924e35>`);
      if (unref(v$).birtYear.$error) {
        _push(`<div class="err" data-v-a5924e35>${ssrInterpolate(unref(v$).birtYear.required.$message)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="field" data-v-a5924e35><label for="" data-v-a5924e35>Mobile number (020) <span data-v-a5924e35>*</span></label><div class="control" data-v-a5924e35><input type="number"${ssrRenderAttr("value", unref(state).mobile)} class="input" placeholder="12345678" data-v-a5924e35>`);
      if (unref(v$).mobile.$error) {
        _push(`<div class="err" data-v-a5924e35>${ssrInterpolate(unref(v$).mobile.required.$message)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="field" data-v-a5924e35><label for="" data-v-a5924e35>Email <span data-v-a5924e35>*</span></label><div class="control" data-v-a5924e35><input type="text"${ssrRenderAttr("value", unref(state).email)} class="input" placeholder="email@gmail.com" data-v-a5924e35>`);
      if (unref(v$).email.$error) {
        _push(`<div class="err" data-v-a5924e35>${ssrInterpolate(unref(v$).email.required.$message)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="field" data-v-a5924e35><label for="" data-v-a5924e35>Province <span data-v-a5924e35>*</span></label><div class="control" data-v-a5924e35><div class="select" data-v-a5924e35><select data-v-a5924e35><option value="" disabled data-v-a5924e35>Select dropdown</option><!--[-->`);
      ssrRenderList(unref(provinceInfo), (i, index) => {
        _push(`<option${ssrRenderAttr("value", i._id)} data-v-a5924e35>${ssrInterpolate(i.name)}</option>`);
      });
      _push(`<!--]--></select>`);
      if (unref(v$).province.$error) {
        _push(`<div class="err" data-v-a5924e35>${ssrInterpolate(unref(v$).province.required.$message)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><div class="field" data-v-a5924e35><label for="" data-v-a5924e35>Occupation <span data-v-a5924e35>*</span></label><div class="control" data-v-a5924e35><div class="select" data-v-a5924e35><select data-v-a5924e35><option value="" disabled data-v-a5924e35>Select dropdown</option><!--[-->`);
      ssrRenderList(unref(occupationInfo), (i, indx) => {
        _push(`<option${ssrRenderAttr("value", i._id)} data-v-a5924e35>${ssrInterpolate(i.name)}</option>`);
      });
      _push(`<!--]--></select>`);
      if (unref(v$).occupation.$error) {
        _push(`<div class="err" data-v-a5924e35>${ssrInterpolate(unref(v$).occupation.required.$message)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><div class="field" data-v-a5924e35><label for="" data-v-a5924e35>Password <span data-v-a5924e35>*</span></label><div class="control" data-v-a5924e35><input type="text"${ssrRenderAttr("value", unref(state).password)} class="input" placeholder="password" data-v-a5924e35>`);
      if (unref(v$).password.$error) {
        _push(`<div class="err" data-v-a5924e35>${ssrInterpolate(unref(v$).password.required.$message)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="field" data-v-a5924e35><label for="" data-v-a5924e35>Confirm Password <span data-v-a5924e35>*</span></label><div class="control" data-v-a5924e35><input type="text"${ssrRenderAttr("value", unref(state).confirmPassword)} class="input" placeholder="Re-type password again" data-v-a5924e35>`);
      if (unref(v$).confirmPassword.$error) {
        _push(`<div class="err" data-v-a5924e35>${ssrInterpolate(unref(v$).confirmPassword.required.$message)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></form><br data-v-a5924e35>`);
      if (unref(isError)) {
        _push(`<p class="err2" data-v-a5924e35>${ssrInterpolate(unref(isError))}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(response)) {
        _push(`<p class="response" data-v-a5924e35>${ssrInterpolate(unref(response))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button type="submit" class="button main margin-top-20 margin-bottom-10" data-v-a5924e35> Regsiter </button><p class="note" data-v-a5924e35> Already have an account? <a data-v-a5924e35>Login</a></p></div><div class="right" data-v-a5924e35>`);
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
const register = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a5924e35"]]);

export { register as default };
//# sourceMappingURL=register-c5b9164e.mjs.map
