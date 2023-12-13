import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { defineComponent, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { _ as _imports_0 } from "./biz-course-3b1421a5.js";
import { _ as _imports_1, a as _imports_2 } from "./Enterpreneurs-story_Page_2-119f187a.js";
import { _ as _export_sfc } from "../server.mjs";
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
import "vue-i18n";
const _imports_3 = "" + __buildAssetsURL("business-consultant-1.15e19df4.jpg");
const _imports_4 = "" + __buildAssetsURL("business-consultant-2.f3e91453.jpg");
const _imports_5 = "" + __buildAssetsURL("business-consultant-3.1ebc6ea1.jpg");
const _imports_6 = "" + __buildAssetsURL("business-consultant-4.644fd768.jpg");
const _imports_7 = "" + __buildAssetsURL("business-consultant-5.61c7d6b3.jpg");
const _imports_8 = "" + __buildAssetsURL("business-consultant-6.3ad57194.jpg");
const _imports_9 = "" + __buildAssetsURL("business-consultant-7.efafd3f6.jpg");
const _imports_10 = "" + __buildAssetsURL("business-consultant-8.8910cadc.jpg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "project-business-consultant",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Swiper = Swiper;
      const _component_SwiperSlide = SwiperSlide;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-76df840e><section data-v-76df840e><div class="container video-container" data-v-76df840e><div class="grids is-2-desktop gap-30-desktop is-1-mobile gap-10-mobile" data-v-76df840e><div class="image" data-v-76df840e><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-76df840e></div><div class="text" data-v-76df840e><h3 data-v-76df840e> Project / Business Consultancy <br data-v-76df840e> ແມ່ນຫຍັງ? </h3> ບໍລິການທີ່ປຶກສາໂຄງການ ແລະ ທຸລະກິດ ສະໜອງວຽກງານການໃຫ້ຄຳປຶກສາ, ວາງແຜນ, ຈັດຕັ້ງປະຕິບັດ ແລະ ປະເມີນຜົນສຳເລັດຂອງໂຄງການ ທີ່ກ່ຽວຂ້ອງກັບການປະກອບອາຊີບດ້ວຍຕົນເອງ, ການປະກອບທຸລະກິດ ແລະ ການເຕີບໂຕຂອງທຸລະກິດ. </div></div></div></section><section data-v-76df840e><div class="container" data-v-76df840e><div class="grids is-2-desktop gap-10-desktop" data-v-76df840e><div class="element" data-v-76df840e><img${ssrRenderAttr("src", _imports_1)} data-v-76df840e><p data-v-76df840e>ບໍລິສັດ/ອົງກອນ</p></div><div class="element" data-v-76df840e><img${ssrRenderAttr("src", _imports_2)} alt="" data-v-76df840e><p data-v-76df840e> ໂຄງການທີ່ປິ່ນອ້ອມວຽກງານ ການປະກອບອາຊີບດ້ວຍຕົນເອງ ແລະ ການປະກອບທຸລະກິດ </p></div></div></div></section><section data-v-76df840e><div class="container" data-v-76df840e><div class="gallery" data-v-76df840e><h3 data-v-76df840e>ຜົນງານທີ່ຜ່ານມາ</h3>`);
      _push(ssrRenderComponent(_component_Swiper, {
        modules: ["SwiperAutoplay" in _ctx ? _ctx.SwiperAutoplay : unref(Autoplay), "SwiperPagination" in _ctx ? _ctx.SwiperPagination : unref(Pagination), "SwiperNavigation" in _ctx ? _ctx.SwiperNavigation : unref(Navigation)],
        "slides-per-view": 2,
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
            _push2(ssrRenderComponent(_component_SwiperSlide, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_3)} data-v-76df840e${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", { src: _imports_3 })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_SwiperSlide, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_4)} data-v-76df840e${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", { src: _imports_4 })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_SwiperSlide, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_5)} data-v-76df840e${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", { src: _imports_5 })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_SwiperSlide, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_6)} data-v-76df840e${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", { src: _imports_6 })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_SwiperSlide, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_7)} data-v-76df840e${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", { src: _imports_7 })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_SwiperSlide, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_8)} data-v-76df840e${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", { src: _imports_8 })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_SwiperSlide, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_9)} data-v-76df840e${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", { src: _imports_9 })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_SwiperSlide, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_10)} data-v-76df840e${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", { src: _imports_10 })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_SwiperSlide, null, {
                default: withCtx(() => [
                  createVNode("img", { src: _imports_3 })
                ]),
                _: 1
              }),
              createVNode(_component_SwiperSlide, null, {
                default: withCtx(() => [
                  createVNode("img", { src: _imports_4 })
                ]),
                _: 1
              }),
              createVNode(_component_SwiperSlide, null, {
                default: withCtx(() => [
                  createVNode("img", { src: _imports_5 })
                ]),
                _: 1
              }),
              createVNode(_component_SwiperSlide, null, {
                default: withCtx(() => [
                  createVNode("img", { src: _imports_6 })
                ]),
                _: 1
              }),
              createVNode(_component_SwiperSlide, null, {
                default: withCtx(() => [
                  createVNode("img", { src: _imports_7 })
                ]),
                _: 1
              }),
              createVNode(_component_SwiperSlide, null, {
                default: withCtx(() => [
                  createVNode("img", { src: _imports_8 })
                ]),
                _: 1
              }),
              createVNode(_component_SwiperSlide, null, {
                default: withCtx(() => [
                  createVNode("img", { src: _imports_9 })
                ]),
                _: 1
              }),
              createVNode(_component_SwiperSlide, null, {
                default: withCtx(() => [
                  createVNode("img", { src: _imports_10 })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section></div>`);
    };
  }
});
const projectBusinessConsultant_vue_vue_type_style_index_0_scoped_76df840e_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/product-and-services/project-business-consultant.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const projectBusinessConsultant = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-76df840e"]]);
export {
  projectBusinessConsultant as default
};
//# sourceMappingURL=project-business-consultant-d1aa90b9.js.map