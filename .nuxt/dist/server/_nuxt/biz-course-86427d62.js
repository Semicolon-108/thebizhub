import { Swiper, SwiperSlide } from "swiper/vue";
import { d as useNuxtApp, _ as _export_sfc } from "../server.mjs";
import { defineComponent, ref, watch, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from "vue";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { _ as _imports_0 } from "./biz-course-07000c11.js";
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
const _imports_1 = "" + __buildAssetsURL("1.6ad91f65.png");
const _imports_2 = "" + __buildAssetsURL("2.43baa1b4.png");
const _imports_3 = "" + __buildAssetsURL("3.d2e73160.png");
const _imports_4 = "" + __buildAssetsURL("4.f4bab6a5.png");
const _imports_5 = "" + __buildAssetsURL("5.162ef6ea.png");
const _imports_6 = "" + __buildAssetsURL("biz-course-element-1.40b8274c.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "biz-course",
  __ssrInlineRender: true,
  setup(__props) {
    const axios = useNuxtApp().$axios;
    const urlImage = useNuxtApp().$imageURL;
    const { locale } = useI18n();
    const isLang = ref();
    const ShowGallery = ref(false);
    const info = ref([]);
    const area = ref("Business Courses");
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
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-013caa61><section data-v-013caa61><div class="container video-container" data-v-013caa61><div class="grids is-2-desktop gap-30-desktop is-1-mobile gap-10-mobile" data-v-013caa61><div class="image" data-v-013caa61><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-013caa61></div><div class="text" data-v-013caa61><h3 data-v-013caa61>BIZ COURSES ແມ່ນຫຍັງ?</h3> ຫຼັກສູດການຝຶກອົບຮົມທາງທຸລະກິດ ໄລຍະສັ້ນ ເພື່ອກຽມຄວາມພ້ອມໃຫ້ກັບຜູ້ປະກອບການຂັ້ນເລີ່ມຕົ້ນ ແລະ ວ່າທີ່ຜູ້ປະກອບການ ທີ່ເນັ້ນໜັກການພັດທະນາຄວາມຮູ້ຄວາມສາມາດ, ຝຶກຝົນການຄິດວິເຄາະ, ວາງແຜນ ແລະ ກຽມຄວາມພ້ອມຢ່າງເໝາະສົມ ເພື່ອຫຼຸດຜ່ອນຄວາມສ່ຽງ ແລະ ເພີ່ມໂອກາດໃນການປະກອບທຸລະກິດໃຫ້ປະສົບຜົນສຳເລັດຫຼາຍຂຶ້ນ. <div class="contact" data-v-013caa61><h3 data-v-013caa61>${ssrInterpolate(_ctx.$t("contact_us"))}</h3><div class="icons" data-v-013caa61><a href="https://wa.me/8562056508160" data-v-013caa61><i class="fa-brands fa-square-whatsapp" data-v-013caa61></i></a><a href="http://m.me/100091801856212" data-v-013caa61><i class="fa-brands fa-facebook-messenger" data-v-013caa61></i></a></div></div></div></div></div></section><section data-v-013caa61><div class="container" data-v-013caa61><blockquote data-v-013caa61><i class="fa-duotone fa-quote-left" data-v-013caa61></i><h3 data-v-013caa61> BIZ Courses ( ຫຼັກສູດຝຶກອົບຮົມທາງທຸລະກິດ ) ເກີດຂຶ້ນມາໄດ້ແນວໃດ ? </h3> ເນື່ອງຈາກຫຼາຍປັດໄຈ ທາງດ້ານສະພາບເສດຖະກິດ-ສັງຄົມ ແລະ ການເປັນຢູ່ ທີ່ມີການປ່ຽນແປງຢ່າງບໍ່ຢຸດນິ້ງ ທີ່ຕ້ອງອາໄສການປັບຕົວໃຫ້ທັນກັບສະຖານະການ, ແນວໂນ້ມໃນການປະກອບອາຊີບຂອງຜູ້ຄົນ ຈຶ່ງເລີ່ມມີການປ່ຽນແປງໄປ. ປັດຈຸບັນ, ຮູບແບບການປະກອບອາຊີບມີຢູ່ຫຼາກຫຼາຍ ແຕ່ໃນນັ້ນຮູບແບບທີ່ຜູ້ຄົນມີແນວໂນ້ມໃຫ້ຄວາມສົນໃຈສູງ ແລະ ຢາກຫັນມາເຮັດເພີ່ມຂຶ້ນເລື້ອຍໆ ກໍແມ່ນ ການມີທຸລະກິດເປັນຂອງຕົນເອງ ຫຼື ເປັນຜູ້ປະກອບການ, ສຳລັບຜູ້ທີ່ເຮັດວຽກປະຈຳຢູ່ ກໍມີຄວາມຕ້ອງການຢາກມີອາຊີບສຳຮອງ ເປັນຊ່ອງທາງຫາລາຍໄດ້ເສີມ, ລວມໄປເຖິງຜູ້ວ່າງງານ ທີ່ມີຄວາມຕ້ອງການຢາກປະກອບອາຊີບດ້ວຍຕົນເອງ ແຕ່ກໍບໍ່ແມ່ນວ່າທຸກຄົນຈະປະສົບຄວາມສຳເລັດ ຫາກຂາດການວິເຄາະ, ວາງແຜນ ແລະ ກຽມຄວາມພ້ອມທີ່ດີ. ດັ່ງນັ້ນ, BIZ Courses ຫຼື ຫຼັກສູດຝຶກອົບຮົມທາງທຸລະກິດ ໄລຍະສັ້ນ ຈຶ່ງມີຄວາມສຳຄັນຫຼາຍ ເພື່ອກຽມຄວາມພ້ອມໃຫ້ກັບຜູ້ປະກອບການຂັ້ນເລີ່ມຕົ້ນ ແລະ ວ່າທີ່ຜູ້ປະກອບການ. </blockquote></div></section><section data-v-013caa61><div class="container" data-v-013caa61><div class="grids is-5-desktop gap-10-desktop" data-v-013caa61><div class="element" data-v-013caa61><img${ssrRenderAttr("src", _imports_1)} data-v-013caa61><p data-v-013caa61>ວ່າທີ່ຜູ້ປະກອບການ</p><p data-v-013caa61>(Future Entrepreneur)</p></div><div class="element" data-v-013caa61><img${ssrRenderAttr("src", _imports_2)} alt="" data-v-013caa61><p data-v-013caa61>ຜູ້ປະກອບອາຊີບດ້ວຍຕົນເອງ</p><p data-v-013caa61>(Self-employed)</p></div><div class="element" data-v-013caa61><img${ssrRenderAttr("src", _imports_3)} alt="" data-v-013caa61><p data-v-013caa61>ຜູ້ປະກອບການໃໝ່</p><p data-v-013caa61>(New entrepreneur)</p></div><div class="element" data-v-013caa61><img${ssrRenderAttr("src", _imports_4)} alt="" data-v-013caa61><p data-v-013caa61>ຈຸນລະວິສາຫະກິດ</p><p data-v-013caa61>(Micro entreprise)</p></div><div class="element" data-v-013caa61><img${ssrRenderAttr("src", _imports_5)} alt="" data-v-013caa61><p data-v-013caa61>ວິສາຫະກິດຂະໜາດນ້ອຍ</p><p data-v-013caa61>(Small entreprise)</p></div></div></div></section><section data-v-013caa61><div class="container" data-v-013caa61>`);
      _push(ssrRenderComponent(patternDivider, { style: { "margin-bottom": "30px" } }, null, _parent));
      _push(`<div class="grids is-12-desktop gap-50-desktop" data-v-013caa61><div class="span-5-desktop" data-v-013caa61><img${ssrRenderAttr("src", _imports_6)} alt="" data-v-013caa61></div><div class="takeaway span-7-desktop" data-v-013caa61><h3 data-v-013caa61>ເຂົ້າຮ່ວມ BIZ Courses ຈະໄດ້ຫຍັງ?</h3><p data-v-013caa61>ທຸກຫຼັກສູດຂອງ BIZ Courses, ຜູ້ເຂົ້າຮ່ວມຝຶກ ຕາມເງື່ອນໄຂ* ຈະໄດ້</p><ul data-v-013caa61><li data-v-013caa61><i class="fa-solid fa-square-check" data-v-013caa61></i><p data-v-013caa61> ພັດທະນາຄວາມຮູ້ຄວາມສາມາດ, ຝຶກຝົນການຄິດວິເຄາະ, ວາງແຜນ ແລະ ກຽມຄວາມພ້ອມຢ່າງເໝາະສົມ ຜ່ານຂະບວນການ ແລະ ຂັ້ນຕອນກິດຈະກຳການຝຶກອົບຮົມ (Competency development) </p></li><li data-v-013caa61><i class="fa-solid fa-square-check" data-v-013caa61></i><p data-v-013caa61> ເຄື່ອງມືທີ່ເປັນປະໂຫຍດ ເພື່ອນຳໄປພັດທະນາທຸລະກິດ (Business tools) </p></li><li data-v-013caa61><i class="fa-solid fa-square-check" data-v-013caa61></i><p data-v-013caa61>ພັດທະນາແນວຄວາມຄິດແບບຜູ້ປະກອບການ (Entrepreneurial mindset)</p></li><li data-v-013caa61><i class="fa-solid fa-square-check" data-v-013caa61></i><p data-v-013caa61> ນຳໃຊ້ສິ່ງທີ່ໄດ້ຮັບຈາກການຝຶກໄປນຳໃຊ້ ເພື່ອຫຼຸດຜ່ອນຄວາມສ່ຽງ ແລະ ເພີ່ມໂອກາດໃນການປະກອບທຸລະກິດໃຫ້ປະສົບຜົນສຳເລັດຫຼາຍຂຶ້ນ (Application) </p></li><li data-v-013caa61><i class="fa-solid fa-square-check" data-v-013caa61></i><p data-v-013caa61> ຮັບໃບຢັ້ງຢືນການເຂົ້າຮ່ວມຝຶກອົບຮົມ ຈາກຜູ້ຈັດ (Certificate of Participation) </p></li></ul></div></div>`);
      _push(ssrRenderComponent(patternDivider, { style: { "margin-top": "30px" } }, null, _parent));
      _push(`</div></section><section data-v-013caa61><div class="container" data-v-013caa61><h3 class="section-title" data-v-013caa61>ຜົນງານທີ່ຜ່ານມາ</h3><!--[-->`);
      ssrRenderList(unref(info), (i, indx) => {
        _push(`<div class="work" data-v-013caa61><div class="header" data-v-013caa61><h3 data-v-013caa61>${ssrInterpolate(i.title)}</h3></div><div class="body" data-v-013caa61>`);
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
                      _push3(`<img${ssrRenderAttr("src", unref(urlImage) + o)} data-v-013caa61${_scopeId2}>`);
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
              if (unref(ShowGallery)) {
                _push2(ssrRenderComponent(Gallery, {
                  data: i.image,
                  onCloseShowGallery: ($event) => ShowGallery.value = false
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
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
                }), 256)),
                unref(ShowGallery) ? (openBlock(), createBlock(Gallery, {
                  key: 0,
                  data: i.image,
                  onCloseShowGallery: ($event) => ShowGallery.value = false
                }, null, 8, ["data", "onCloseShowGallery"])) : createCommentVNode("", true)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div>`);
      });
      _push(`<!--]--></div></section></div>`);
    };
  }
});
const bizCourse_vue_vue_type_style_index_0_scoped_013caa61_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/product-and-services/biz-course.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const bizCourse = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-013caa61"]]);
export {
  bizCourse as default
};
//# sourceMappingURL=biz-course-86427d62.js.map
