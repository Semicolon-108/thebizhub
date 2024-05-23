import { Swiper, SwiperSlide } from "swiper/vue";
import { d as useNuxtApp, _ as _export_sfc } from "../server.mjs";
import { defineComponent, ref, watch, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { _ as _imports_0 } from "./biz-course-07000c11.js";
import Gallery from "./gallery-2023e299.js";
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
import "@vue/devtools-api";
import "devalue";
import "axios";
import "cookie-es";
import "ohash";
const _imports_1 = "" + __buildAssetsURL("1.748220c8.png");
const _imports_2 = "" + __buildAssetsURL("2.bb73bd9b.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "project-business-consultant",
  __ssrInlineRender: true,
  setup(__props) {
    const axios = useNuxtApp().$axios;
    const urlImage = useNuxtApp().$imageURL;
    const { locale } = useI18n();
    const isLang = ref();
    const ShowGallery = ref(false);
    const info = ref([]);
    const area = ref("Project/Business Consultancy");
    const isImage = ref("");
    const isFindIndex = (obj, image) => {
      const find = image.find((f) => f == obj);
      isImage.value = find;
      ShowGallery.value = true;
    };
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
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-22405b7b><section data-v-22405b7b><div class="container video-container" data-v-22405b7b><div class="grids is-2-desktop gap-30-desktop is-1-mobile gap-10-mobile" data-v-22405b7b><div class="image" data-v-22405b7b><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-22405b7b></div><div class="text" data-v-22405b7b><h3 data-v-22405b7b> Project / Business Consultancy <br data-v-22405b7b> ແມ່ນຫຍັງ? </h3> ບໍລິການທີ່ປຶກສາໂຄງການ ແລະ ທຸລະກິດ ສະໜອງວຽກງານການໃຫ້ຄຳປຶກສາ, ວາງແຜນ, ຈັດຕັ້ງປະຕິບັດ ແລະ ປະເມີນຜົນສຳເລັດຂອງໂຄງການ ທີ່ກ່ຽວຂ້ອງກັບການປະກອບອາຊີບດ້ວຍຕົນເອງ, ການປະກອບທຸລະກິດ ແລະ ການເຕີບໂຕຂອງທຸລະກິດ. <div class="contact" data-v-22405b7b><h3 data-v-22405b7b>${ssrInterpolate(_ctx.$t("contact_us"))}</h3><div class="icons" data-v-22405b7b><a href="https://wa.me/8562056508160" data-v-22405b7b><i class="fa-brands fa-square-whatsapp" data-v-22405b7b></i></a><a href="http://m.me/100091801856212" data-v-22405b7b><i class="fa-brands fa-facebook-messenger" data-v-22405b7b></i></a></div></div></div></div></div></section><section data-v-22405b7b><div class="container" data-v-22405b7b><h3 class="section-title" data-v-22405b7b>Project / Business Consultancy ເໝາະກັບໃຜ</h3><div class="grids is-2-desktop gap-10-desktop" data-v-22405b7b><div class="element" data-v-22405b7b><img${ssrRenderAttr("src", _imports_1)} data-v-22405b7b><p data-v-22405b7b>ບໍລິສັດ/ອົງກອນ</p></div><div class="element" data-v-22405b7b><img${ssrRenderAttr("src", _imports_2)} data-v-22405b7b><p data-v-22405b7b> ໂຄງການທີ່ປິ່ນອ້ອມວຽກງານ ການປະກອບອາຊີບດ້ວຍຕົນເອງ ແລະ ການປະກອບທຸລະກິດ </p></div></div></div></section><section data-v-22405b7b><div class="container" data-v-22405b7b><h3 class="section-title" data-v-22405b7b>ຜົນງານທີ່ຜ່ານມາ</h3><!--[-->`);
      ssrRenderList(unref(info), (i, indx) => {
        _push(`<div class="work" data-v-22405b7b><div class="header" data-v-22405b7b><h3 data-v-22405b7b>${ssrInterpolate(i.title)}</h3></div><div class="body" data-v-22405b7b>`);
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
                  onClick: ($event) => isFindIndex(o, i.image)
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<img${ssrRenderAttr("src", unref(urlImage) + o)} data-v-22405b7b${_scopeId2}>`);
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
                    onClick: ($event) => isFindIndex(o, i.image)
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
            data: unref(isImage),
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
const projectBusinessConsultant_vue_vue_type_style_index_0_scoped_22405b7b_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/product-and-services/project-business-consultant.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const projectBusinessConsultant = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-22405b7b"]]);
export {
  projectBusinessConsultant as default
};
//# sourceMappingURL=project-business-consultant-77d4c351.js.map
