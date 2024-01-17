import { Swiper, SwiperSlide } from "swiper/vue";
import { d as useNuxtApp, _ as _export_sfc } from "../server.mjs";
import { defineComponent, ref, watch, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import patternDivider from "./pattern-fc7bb63a.js";
import Gallery from "./gallery-6aa4083d.js";
import { useI18n } from "vue-i18n";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "ufo";
import "destr";
import "defu";
import "klona";
import "devalue";
import "axios";
const _imports_0 = "" + __buildAssetsURL("biz-coaching.2ce610ee.png");
const _imports_1 = "" + __buildAssetsURL("1.6ad91f65.png");
const _imports_2 = "" + __buildAssetsURL("2.43baa1b4.png");
const _imports_3 = "" + __buildAssetsURL("3.d2e73160.png");
const _imports_4 = "" + __buildAssetsURL("4.f4bab6a5.png");
const _imports_5 = "" + __buildAssetsURL("5.162ef6ea.png");
const _imports_6 = "" + __buildAssetsURL("Artwork-02.b02b8676.png");
const _imports_7 = "" + __buildAssetsURL("Artwork-01.77080ea4.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "biz-coaching",
  __ssrInlineRender: true,
  setup(__props) {
    const axios = useNuxtApp().$axios;
    const urlImage = useNuxtApp().$imageURL;
    const { locale } = useI18n();
    const isLang = ref();
    const ShowGallery = ref(false);
    const info = ref([]);
    const area = ref("Business Coaching");
    const fetch = async () => {
      await axios.post(`get-achievement-api?lang=${isLang.value}&area=${area.value}`).then((res) => {
        if (res) {
          info.value = res.data.info;
        }
      });
    };
    watch(
      () => locale.value,
      (value) => {
        isLang.value = value;
        fetch();
      },
      { immediate: true, deep: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Swiper = Swiper;
      const _component_SwiperSlide = SwiperSlide;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-2bc569e8><section data-v-2bc569e8><div class="container video-container" data-v-2bc569e8><div class="grids is-2-desktop gap-30-desktop is-1-mobile gap-10-mobile" data-v-2bc569e8><div class="image" data-v-2bc569e8><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-2bc569e8></div><div class="text" data-v-2bc569e8><h3 data-v-2bc569e8>ສິ່ງທີ່ຈະໄດ້ຮັບຈາກ BIZ COACHING</h3><ul data-v-2bc569e8><li data-v-2bc569e8><i class="fa-solid fa-square-check" data-v-2bc569e8></i>ມຸມມອງ ແລະ ແນວທາງໃນການເຮັດທຸລະກິດ </li><li data-v-2bc569e8><i class="fa-solid fa-square-check" data-v-2bc569e8></i>ເຄື່ອງມືໃນການບໍລິຫານທຸລະກິດ </li><li data-v-2bc569e8><i class="fa-solid fa-square-check" data-v-2bc569e8></i>ເສີມສ້າງຄວາມເຂັ້ມແຂງໃນການບໍລິຫານທຸລະກິດ </li></ul><div class="contact" data-v-2bc569e8><h3 data-v-2bc569e8>${ssrInterpolate(_ctx.$t("contact_us"))}</h3><div class="icons" data-v-2bc569e8><a href="https://wa.me/8562056508160" data-v-2bc569e8><i class="fa-brands fa-square-whatsapp" data-v-2bc569e8></i></a><a href="http://m.me/100091801856212" data-v-2bc569e8><i class="fa-brands fa-facebook-messenger" data-v-2bc569e8></i></a></div></div></div></div></div></section><section data-v-2bc569e8><div class="container" data-v-2bc569e8><blockquote data-v-2bc569e8><i class="fa-duotone fa-quote-left" data-v-2bc569e8></i><h3 data-v-2bc569e8>BIZ COACHING ( ບໍລິການໃຫ້ຄໍາປຶກສາທາງທຸລະກິດ ) ແມ່ນຫຍັງ?</h3> ບໍລິການໃຫ້ຄໍາປຶກສາທາງທຸລະກິດ (BIZ Coaching) ແມ່ນບໍລິການທີ່ຊ່ວຍສະໜັບສະໜຸນ ວ່າທີ່ຜູ້ປະກອບການ, ຜູ້ປະກອບການຂັ້ນເລີ່ມຕົ້ນ ຫຼື ເຈົ້າຂອງທຸລະກິດຂະໜາດນ້ອຍ ໂດຍຜ່ານການຮັບຟັງ ແລະ ວິເຄາະບັນຫາ, ໃຫ້ຄໍາແນະນໍາ ແລະ ຂໍ້ສະເໜີແນະ ກ່ຽວກັບວິທີການ, ແນວທາງ ແລະ ເຄື່ອງມືໃນການເຮັດທຸລະກິດເພື່ອເອົາຊະນະອຸປະສັກ, ເພື່ອຊ່ວຍສະໜັບສະໜຸນໃຫ້ທຸລະກິດສາມາດບັນລຸເປົ້າໝາຍໃຫ້ປະສົບຜົນສໍາເລັດເພື່ອການເຕີບໂຕທີ່ຍືນຍົງ. </blockquote></div></section><section data-v-2bc569e8><div class="container" data-v-2bc569e8><h3 class="section-title" data-v-2bc569e8>BIZ Coaching ເໝາະກັບໃຜ</h3><div class="grids is-5-desktop gap-10-desktop" data-v-2bc569e8><div class="element" data-v-2bc569e8><img${ssrRenderAttr("src", _imports_1)} data-v-2bc569e8><p data-v-2bc569e8>ວ່າທີ່ຜູ້ປະກອບການ</p><p data-v-2bc569e8>(Future Entrepreneur)</p></div><div class="element" data-v-2bc569e8><img${ssrRenderAttr("src", _imports_2)} alt="" data-v-2bc569e8><p data-v-2bc569e8>ຜູ້ປະກອບອາຊີບດ້ວຍຕົນເອງ</p><p data-v-2bc569e8>(Self-employed)</p></div><div class="element" data-v-2bc569e8><img${ssrRenderAttr("src", _imports_3)} alt="" data-v-2bc569e8><p data-v-2bc569e8>ຜູ້ປະກອບການໃໝ່</p><p data-v-2bc569e8>(New entrepreneur)</p></div><div class="element" data-v-2bc569e8><img${ssrRenderAttr("src", _imports_4)} alt="" data-v-2bc569e8><p data-v-2bc569e8>ຈຸນລະວິສາຫະກິດ</p><p data-v-2bc569e8>(Micro entreprise)</p></div><div class="element" data-v-2bc569e8><img${ssrRenderAttr("src", _imports_5)} alt="" data-v-2bc569e8><p data-v-2bc569e8>ວິສາຫະກິດຂະໜາດນ້ອຍ</p><p data-v-2bc569e8>(Small entreprise)</p></div></div></div></section><section data-v-2bc569e8><div class="container" data-v-2bc569e8>`);
      _push(ssrRenderComponent(patternDivider, { style: { "margin-bottom": "30px" } }, null, _parent));
      _push(`<div class="grids is-2-desktop gap-50-desktop" data-v-2bc569e8><div class="benefits" data-v-2bc569e8><h3 data-v-2bc569e8>ເນື້ອຫາທີ່ຈະໄດ້ຮັບ</h3><ul data-v-2bc569e8><li data-v-2bc569e8><i class="fa-solid fa-square-check" data-v-2bc569e8></i>ການກໍານົດເອກະລັກທຸລະກິດ (Business Identity) </li><li data-v-2bc569e8><i class="fa-solid fa-square-check" data-v-2bc569e8></i>ການສໍາຫຼວດຕະຫຼາດສໍາລັບທຸລະກິດ (Market Survey) </li><li data-v-2bc569e8><i class="fa-solid fa-square-check" data-v-2bc569e8></i>ທໍາຄວາມເຂົ້າໃຈກັບລູກຄ້າ (Get to Know your customer) </li><li data-v-2bc569e8><i class="fa-solid fa-square-check" data-v-2bc569e8></i>ໂຄງສ້າງຕົ້ນທຶນ ແລະ ລາຍໄດ້ (Cost &amp; revenue) </li><li data-v-2bc569e8><i class="fa-solid fa-square-check" data-v-2bc569e8></i>ການເຮັດການຕະຫຼາດ (Marketing) </li><li data-v-2bc569e8><i class="fa-solid fa-square-check" data-v-2bc569e8></i>ການບໍລິຫານທີມ ແລະ ໜ້າທີ່ຫຼັກຂອງການເຮັດທຸລະກິດ (Team &amp; key roles) </li><li data-v-2bc569e8><i class="fa-solid fa-square-check" data-v-2bc569e8></i>ການວາງແຜນທຸລະກິດສໍາລັບທຸລະກິດ (Future thinking) </li></ul></div><div data-v-2bc569e8><img${ssrRenderAttr("src", _imports_6)} data-v-2bc569e8></div></div>`);
      _push(ssrRenderComponent(patternDivider, { style: { "margin-top": "30px" } }, null, _parent));
      _push(`</div></section><section data-v-2bc569e8><div class="container" data-v-2bc569e8><div class="grids is-2-desktop gap-50-desktop" data-v-2bc569e8><div data-v-2bc569e8><img${ssrRenderAttr("src", _imports_7)} data-v-2bc569e8></div><div class="takeaway" data-v-2bc569e8><h3 data-v-2bc569e8>ສິ່ງທີ່ຈະໄດ້ຮັບຈາກ BIZ COACHING</h3><ul data-v-2bc569e8><li data-v-2bc569e8><i class="fa-solid fa-square-check" data-v-2bc569e8></i><p data-v-2bc569e8>ມຸມມອງ ແລະ ແນວທາງໃໝ່ໆ ໃນການດຳເນີນທຸລະກິດ</p></li><li data-v-2bc569e8><i class="fa-solid fa-square-check" data-v-2bc569e8></i><p data-v-2bc569e8>ເຄື່ອງມືທີ່ເປັນປະໂຫຍດໃນການບໍລິຫານທຸລະກິດ</p></li><li data-v-2bc569e8><i class="fa-solid fa-square-check" data-v-2bc569e8></i><p data-v-2bc569e8> ເສີມສ້າງຄວາມເຂັ້ນແຂງໃນການບໍລິຫານທຸລະກິດ, ການຕະຫຼາດ, ການພັດທະນາຜະລິດຕະພັນ, ການເງິນ ແລະ ການບໍລິການລູກຄ້າ. </p></li></ul></div></div></div></section><section data-v-2bc569e8><div class="container" data-v-2bc569e8><h3 class="section-title" data-v-2bc569e8>ຜົນງານທີ່ຜ່ານມາ</h3><!--[-->`);
      ssrRenderList(unref(info), (i, indx) => {
        _push(`<div class="work" data-v-2bc569e8><div class="header" data-v-2bc569e8><h3 data-v-2bc569e8>${ssrInterpolate(i.title)}</h3></div><div class="body" data-v-2bc569e8>`);
        _push(ssrRenderComponent(_component_Swiper, {
          modules: ["SwiperAutoplay" in _ctx ? _ctx.SwiperAutoplay : unref(Autoplay), "SwiperPagination" in _ctx ? _ctx.SwiperPagination : unref(Pagination), "SwiperNavigation" in _ctx ? _ctx.SwiperNavigation : unref(Navigation)],
          "slides-per-view": 3,
          "space-between": 20,
          loop: false,
          effect: "creative",
          navigation: "",
          pagination: {
            clickable: true,
            el: ".swiper-pagination"
          },
          autoplay: {
            delay: 8e3,
            disableOnInteraction: true
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(i.image, (o) => {
                _push2(ssrRenderComponent(_component_SwiperSlide, {
                  onClick: ($event) => ShowGallery.value = true
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<img${ssrRenderAttr("src", unref(urlImage) + o)} data-v-2bc569e8${_scopeId2}>`);
                    } else {
                      return [
                        createVNode("img", {
                          src: unref(urlImage) + o
                        }, null, 8, ["src"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(i.image, (o) => {
                  return openBlock(), createBlock(_component_SwiperSlide, {
                    onClick: ($event) => ShowGallery.value = true
                  }, {
                    default: withCtx(() => [
                      createVNode("img", {
                        src: unref(urlImage) + o
                      }, null, 8, ["src"])
                    ]),
                    _: 2
                  }, 1032, ["onClick"]);
                }), 256))
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
        if (unref(ShowGallery)) {
          _push(ssrRenderComponent(Gallery, {
            data: i.image,
            onCloseShowGallery: ($event) => ShowGallery.value = false
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></section></div>`);
    };
  }
});
const bizCoaching_vue_vue_type_style_index_0_scoped_2bc569e8_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/product-and-services/biz-coaching.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const bizCoaching = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2bc569e8"]]);
export {
  bizCoaching as default
};
//# sourceMappingURL=biz-coaching-5d59926d.js.map
