import { useSSRContext } from 'vue';
import { _ as _export_sfc } from '../server.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><div class="box" data-v-739081fc><h3 class="box-title margin-bottom-10" data-v-739081fc>Contact Information</h3><ul data-v-739081fc><li data-v-739081fc><span data-v-739081fc><i class="fa-solid fa-mobile" data-v-739081fc></i></span><p data-v-739081fc>020 56463959 | 020 56508160</p></li><li data-v-739081fc><span data-v-739081fc><i class="fa-solid fa-mobile" data-v-739081fc></i></span><p data-v-739081fc>thebizhub.info@gmail.com</p></li><li data-v-739081fc><span data-v-739081fc><i class="fa-solid fa-mobile" data-v-739081fc></i></span><p data-v-739081fc> CircularX Dongpaina Road, <br data-v-739081fc> Saphanthong Village,<br data-v-739081fc> Sisattanak District,<br data-v-739081fc> Vientiane Capital, Lao PDR. </p></li></ul></div><p class="social-icons margin-top-10" data-v-739081fc><span data-v-739081fc><a href="https://www.youtube.com/@TheBIZHUB" target="_blank" data-v-739081fc><i class="fa-brands fa-youtube" data-v-739081fc></i></a></span><span data-v-739081fc><a href="https://www.facebook.com/profile.php?id=100091801856212" target="_blank" data-v-739081fc><i class="fa-brands fa-facebook" data-v-739081fc></i></a></span></p><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/auth/info-box.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const InfoBox = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-739081fc"]]);

export { InfoBox as I };
//# sourceMappingURL=info-box-4a05d697.mjs.map
