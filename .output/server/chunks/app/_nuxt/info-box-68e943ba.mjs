import { useSSRContext } from 'vue';
import { _ as _export_sfc } from '../server.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><div class="box" data-v-37bbed3b><h3 class="box-title margin-bottom-10" data-v-37bbed3b>Contact Information</h3><ul data-v-37bbed3b><li data-v-37bbed3b><span data-v-37bbed3b><i class="fa-solid fa-mobile" data-v-37bbed3b></i></span><p data-v-37bbed3b>020 56463959 | 020 56508160</p></li><li data-v-37bbed3b><span data-v-37bbed3b><i class="fa-solid fa-mobile" data-v-37bbed3b></i></span><p data-v-37bbed3b>thebizhub.info@gmail.com</p></li><li data-v-37bbed3b><span data-v-37bbed3b><i class="fa-solid fa-mobile" data-v-37bbed3b></i></span><p data-v-37bbed3b> CircularX Dongpaina Road, <br data-v-37bbed3b> Saphanthong Village,<br data-v-37bbed3b> Sisattanak District,<br data-v-37bbed3b> Vientiane Capital, Lao PDR. </p></li></ul></div><p class="social-icons margin-top-10" data-v-37bbed3b><span data-v-37bbed3b><a data-v-37bbed3b><i class="fa-brands fa-youtube" data-v-37bbed3b></i></a></span><span data-v-37bbed3b><a data-v-37bbed3b><i class="fa-brands fa-facebook" data-v-37bbed3b></i></a></span></p><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/auth/info-box.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const InfoBox = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-37bbed3b"]]);

export { InfoBox as I };
//# sourceMappingURL=info-box-68e943ba.mjs.map
