import { ssrInterpolate } from 'vue/server-renderer';
import { useSSRContext } from 'vue';
import { _ as _export_sfc } from '../server.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><div class="box" data-v-e2a89c69><h3 class="box-title margin-bottom-10" data-v-e2a89c69>${ssrInterpolate(_ctx.$t("contact_information"))}</h3><ul data-v-e2a89c69><li data-v-e2a89c69><span data-v-e2a89c69><i class="fa-solid fa-mobile" data-v-e2a89c69></i></span><p data-v-e2a89c69>020 56463959 | 020 56508160</p></li><li data-v-e2a89c69><span data-v-e2a89c69><i class="fa-solid fa-mobile" data-v-e2a89c69></i></span><p data-v-e2a89c69>thebizhub.info@gmail.com</p></li><li data-v-e2a89c69><span data-v-e2a89c69><i class="fa-solid fa-mobile" data-v-e2a89c69></i></span><p data-v-e2a89c69> CircularX Dongpaina Road, <br data-v-e2a89c69> Saphanthong Village,<br data-v-e2a89c69> Sisattanak District,<br data-v-e2a89c69> Vientiane Capital, Lao PDR. </p></li></ul></div><p class="social-icons margin-top-10" data-v-e2a89c69><span data-v-e2a89c69><a href="https://www.youtube.com/@TheBIZHUB" target="_blank" data-v-e2a89c69><i class="fa-brands fa-youtube" data-v-e2a89c69></i></a></span><span data-v-e2a89c69><a href="https://www.facebook.com/profile.php?id=100091801856212" target="_blank" data-v-e2a89c69><i class="fa-brands fa-facebook" data-v-e2a89c69></i></a></span></p><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/auth/info-box.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const InfoBox = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-e2a89c69"]]);

export { InfoBox as I };
//# sourceMappingURL=info-box-ebbad602.mjs.map
