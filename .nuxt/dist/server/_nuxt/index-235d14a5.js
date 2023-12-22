import { d as useNuxtApp, _ as _export_sfc } from "../server.mjs";
import { defineComponent, ref, watch, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { _ as _imports_0 } from "./team-2b5e560f.js";
import ProductAndServcie from "./product-and-services-b17f6dd7.js";
import _sfc_main$1 from "./works-65a59e89.js";
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
import "./biz-course-3b1421a5.js";
import "./biz-coaching-a3c25516.js";
import "swiper/vue";
import "swiper/modules";
import "./gallery-6aa4083d.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const axios = useNuxtApp().$axios;
    const { locale } = useI18n();
    const isLang = ref();
    const isWork = ref([]);
    const tabs = ref([]);
    ref([
      {
        name: "ຮ່ວມຈັດງານ Job Fest ງານມະຫະກໍາວຽກເຮັດງານທໍາແບບເປີດກ້ວາງ 2023",
        images: [
          {
            img: "Jobfest/jobfest20231.jpg"
          },
          {
            img: "Jobfest/jobfest20232.jpg"
          },
          {
            img: "Jobfest/jobfest20233.jpg"
          },
          {
            img: "Jobfest/jobfest20234.jpg"
          },
          {
            img: "Jobfest/jobfest20235.jpg"
          },
          {
            img: "Jobfest/jobfest20236.jpg"
          }
        ]
      },
      {
        name: "3.	ເປັນຜູ້ໃຫ້ຄໍາປຶກສາ ( Mentor ແລະ Coach ) ໃຫ້ກັບຫຼາຍກ່ວາ 20 ທຸລະກິດ, ພາຍໃຕ້ໂຄງການ ASEAN Mentorship For Entrepreneurs Network ( AMEN )",
        images: [
          {
            img: "amen/amen1.jpg"
          },
          {
            img: "amen/amen2.jpg"
          },
          {
            img: "amen/amen3.jpg"
          },
          {
            img: "amen/amen4.jpg"
          },
          {
            img: "amen/amen5.jpg"
          },
          {
            img: "amen/amen6.jpg"
          },
          {
            img: "amen/amen7.jpg"
          }
        ]
      },
      {
        name: "ຮ່ວມຈັດງານ ມະຫາກໍາວຽກເຮັດງານທໍາທ່າແຂກ, ແຂວງຄໍາມ່ວນ ແລະ ຈັດຝຶກອົບຮົມ ຫົວຂໍ້: ການປະກອບອາຊີບດ້ວຍຕົນເອງ",
        images: [
          {
            img: "Jobfest/jobfest-thakhek1.jpg"
          },
          {
            img: "Jobfest/jobfest-thakhek2.jpg"
          },
          {
            img: "Jobfest/jobfest-thakhek3.jpg"
          },
          {
            img: "Jobfest/jobfest-thakhek4.jpg"
          },
          {
            img: "Jobfest/jobfest-thakhek5.jpg"
          },
          {
            img: "Jobfest/jobfest-thakhek6.jpg"
          },
          {
            img: "Jobfest/jobfest-thakhek7.jpg"
          }
        ]
      },
      {
        name: "ຮ່ວມຈັດງານ ກິດຈະກໍາລະນຶກເຖິງວັນກໍາມະກອນສາກົນ  ແລະ ຈັດຝຶກອົບຮົມ ຫົວຂໍ້: ການປະກອບອາຊີບດ້ວຍຕົນເອງ",
        images: [
          {
            img: "Jobfest/jobfest-labour1.jpg"
          },
          {
            img: "Jobfest/jobfest-labour2.jpg"
          },
          {
            img: "Jobfest/jobfest-labour3.jpg"
          }
        ]
      },
      {
        name: "ການຈັດຝຶກອົບຮົມແບບເຊິ່ງໜ້າ",
        images: [
          {
            img: "coaching/coaching1.jpg"
          },
          {
            img: "coaching/coaching2.jpg"
          },
          {
            img: "coaching/coaching3.jpg"
          },
          {
            img: "coaching/coaching4.jpg"
          }
        ]
      },
      {
        name: "ທີມຄູຝຶກ ແລະ ທີ່ປຶກສາຂອງໂຄງການຝຶກອົບຮົມພຶ້ນຖານການປະກອບທຸລະກິດ ພາຍໃຕ້ໂຄງການ Vtess, Swisscontact",
        images: [
          {
            img: "bet/bet1.jpg"
          },
          {
            img: "bet/bet2.jpg"
          },
          {
            img: "bet/bet3.jpg"
          },
          {
            img: "bet/bet4.jpg"
          },
          {
            img: "bet/bet5.jpg"
          },
          {
            img: "bet/bet6.jpg"
          },
          {
            img: "bet/bet7.jpg"
          }
        ]
      }
    ]);
    const fetch = async () => {
      await axios.post(`get-achievement-api/${isLang.value}`).then((res) => {
        if (res) {
          isWork.value = res.data.info;
        }
      });
    };
    const fetchIntro = async () => {
      const isLang2 = locale.value ? locale.value : "en";
      const data = await axios.post(`get-intro-api?lang=${isLang2}`);
      tabs.value = data.data.info;
    };
    fetch();
    fetchIntro();
    watch(
      () => locale.value,
      (value) => {
        isLang.value = value;
        fetch();
        fetchIntro();
      },
      { immediate: true, deep: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-00ddc5fb><div class="container" data-v-00ddc5fb><section class="section" data-v-00ddc5fb><h1 class="page-title" data-v-00ddc5fb>THE BIZ HUB ແມ່ນຫຍັງ?</h1><div class="grids is-2-desktop is-1-mobile gap-20-desktop" data-v-00ddc5fb><!--[-->`);
      ssrRenderList(unref(tabs), (i, index2) => {
        _push(`<div class="box" data-v-00ddc5fb><h3 class="margin-bottom-10" data-v-00ddc5fb>${ssrInterpolate(i.key)}</h3><p data-v-00ddc5fb>${ssrInterpolate(i.desc)}</p></div>`);
      });
      _push(`<!--]--></div></section></div><img class="top-image"${ssrRenderAttr("src", _imports_0)} data-v-00ddc5fb>`);
      _push(ssrRenderComponent(ProductAndServcie, null, null, _parent));
      _push(`<h1 class="section-title" data-v-00ddc5fb>ຜົນງານຂອງ THE BIZ HUB</h1>`);
      _push(ssrRenderComponent(_sfc_main$1, { work: unref(isWork) }, null, _parent));
      _push(`</div>`);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_00ddc5fb_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about-us/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-00ddc5fb"]]);
export {
  index as default
};
//# sourceMappingURL=index-235d14a5.js.map
