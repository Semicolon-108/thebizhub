import { _ as _export_sfc, u as useRouter, d as useNuxtApp } from '../server.mjs';
import { useSSRContext, defineComponent, ref, reactive, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import { I as InfoBox } from './info-box-4a05d697.mjs';
import { helpers, required } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import 'fs';
import 'path';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'axios';
import 'vue-i18n';

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
      occupation: {
        required: helpers.withMessage("Occupation cannot be empty", required)
      },
      province: {
        required: helpers.withMessage("Province cannot be empty", required)
      },
      name: { required: helpers.withMessage("Name cannot be empty", required) },
      birtYear: {
        required: helpers.withMessage("Birt Year cannot be empty", required)
      },
      mobile: { required: helpers.withMessage("Mobile cannot be empty", required) },
      password: {
        required: helpers.withMessage("Password cannot be empty", required)
      },
      confirmPassword: {
        required: helpers.withMessage("Confirm password cannot be empty", required)
      },
      email: {
        required: helpers.withMessage(
          "email cannot be empty and must be email",
          required
        )
      }
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
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section" }, _attrs))} data-v-12723460><div class="bg is-hidden-mobile" data-v-12723460></div><div class="container" data-v-12723460><h1 class="page-title" data-v-12723460>Register</h1><div class="grids is-2-desktop is-1-mobile margin-top-30 gap-30-desktop" data-v-12723460><div class="left" data-v-12723460><form action="" class="grids is-2-desktop is-1-mobile gap-20-desktop" data-v-12723460><div class="field" data-v-12723460><label for="" data-v-12723460>Name <span data-v-12723460>*</span></label><div class="control" data-v-12723460><input type="text"${ssrRenderAttr("value", unref(state).name)} class="input" placeholder="Name" data-v-12723460>`);
      if (unref(v$).name.$error) {
        _push(`<div class="err" data-v-12723460>${ssrInterpolate(unref(v$).name.required.$message)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="field" data-v-12723460><label for="" data-v-12723460>Year Of Birth: <span data-v-12723460>*</span></label><div class="control" data-v-12723460><input type="number"${ssrRenderAttr("value", unref(state).birtYear)} class="input" placeholder="1999" data-v-12723460>`);
      if (unref(v$).birtYear.$error) {
        _push(`<div class="err" data-v-12723460>${ssrInterpolate(unref(v$).birtYear.required.$message)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="field" data-v-12723460><label for="" data-v-12723460>Mobile number (020) <span data-v-12723460>*</span></label><div class="control" data-v-12723460><input type="number"${ssrRenderAttr("value", unref(state).mobile)} class="input" placeholder="12345678" data-v-12723460>`);
      if (unref(v$).mobile.$error) {
        _push(`<div class="err" data-v-12723460>${ssrInterpolate(unref(v$).mobile.required.$message)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="field" data-v-12723460><label for="" data-v-12723460>Email <span data-v-12723460>*</span></label><div class="control" data-v-12723460><input type="text"${ssrRenderAttr("value", unref(state).email)} class="input" placeholder="email@gmail.com" data-v-12723460>`);
      if (unref(v$).email.$error) {
        _push(`<div class="err" data-v-12723460>${ssrInterpolate(unref(v$).email.required.$message)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="field" data-v-12723460><label for="" data-v-12723460>Province <span data-v-12723460>*</span></label><div class="control" data-v-12723460><div class="select" data-v-12723460><select data-v-12723460><option value="" disabled data-v-12723460${ssrIncludeBooleanAttr(Array.isArray(unref(state).province) ? ssrLooseContain(unref(state).province, "") : ssrLooseEqual(unref(state).province, "")) ? " selected" : ""}>Select dropdown</option><!--[-->`);
      ssrRenderList(unref(provinceInfo), (i, index) => {
        _push(`<option${ssrRenderAttr("value", i._id)} data-v-12723460>${ssrInterpolate(i.name)}</option>`);
      });
      _push(`<!--]--></select>`);
      if (unref(v$).province.$error) {
        _push(`<div class="err" data-v-12723460>${ssrInterpolate(unref(v$).province.required.$message)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><div class="field" data-v-12723460><label for="" data-v-12723460>Occupation <span data-v-12723460>*</span></label><div class="control" data-v-12723460><div class="select" data-v-12723460><select data-v-12723460><option value="" disabled data-v-12723460${ssrIncludeBooleanAttr(Array.isArray(unref(state).occupation) ? ssrLooseContain(unref(state).occupation, "") : ssrLooseEqual(unref(state).occupation, "")) ? " selected" : ""}>Select dropdown</option><!--[-->`);
      ssrRenderList(unref(occupationInfo), (i, indx) => {
        _push(`<option${ssrRenderAttr("value", i._id)} data-v-12723460>${ssrInterpolate(i.name)}</option>`);
      });
      _push(`<!--]--></select>`);
      if (unref(v$).occupation.$error) {
        _push(`<div class="err" data-v-12723460>${ssrInterpolate(unref(v$).occupation.required.$message)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><div class="field" data-v-12723460><label for="" data-v-12723460>Password <span data-v-12723460>*</span></label><div class="control" data-v-12723460><input type="text"${ssrRenderAttr("value", unref(state).password)} class="input" placeholder="password" data-v-12723460>`);
      if (unref(v$).password.$error) {
        _push(`<div class="err" data-v-12723460>${ssrInterpolate(unref(v$).password.required.$message)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="field" data-v-12723460><label for="" data-v-12723460>Confirm Password <span data-v-12723460>*</span></label><div class="control" data-v-12723460><input type="text"${ssrRenderAttr("value", unref(state).confirmPassword)} class="input" placeholder="Re-type password again" data-v-12723460>`);
      if (unref(v$).confirmPassword.$error) {
        _push(`<div class="err" data-v-12723460>${ssrInterpolate(unref(v$).confirmPassword.required.$message)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></form><br data-v-12723460>`);
      if (unref(isError)) {
        _push(`<p class="err2" data-v-12723460>${ssrInterpolate(unref(isError))}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(response)) {
        _push(`<p class="response" data-v-12723460>${ssrInterpolate(unref(response))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button type="submit" class="button main margin-top-20 margin-bottom-10" data-v-12723460> Regsiter </button><p class="note" data-v-12723460> Already have an account? <a data-v-12723460>Login</a></p></div><div class="right" data-v-12723460>`);
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
const register = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-12723460"]]);

export { register as default };
//# sourceMappingURL=register-c81428fb.mjs.map
