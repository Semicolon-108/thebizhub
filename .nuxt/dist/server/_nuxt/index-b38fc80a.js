import { u as useRouter, e as useRoute, _ as _export_sfc, d as useNuxtApp } from "../server.mjs";
import { defineComponent, ref, watch, mergeProps, useSSRContext, unref } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrRenderComponent } from "vue/server-renderer";
import { u as useCookie } from "./cookie-9ebd6d73.js";
import { useI18n } from "vue-i18n";
import { _ as _imports_0 } from "./team-2b5e560f.js";
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
import "cookie-es";
import "ohash";
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "intro",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    useRoute();
    const language = ref();
    const useCookies = useCookie("lang");
    watch(
      useCookies,
      (value) => {
        if (value === "lao") {
          language.value;
        } else if (value === "en") {
          language.value;
        } else {
          language.value;
        }
      },
      { deep: true, immediate: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section" }, _attrs))} data-v-f5e4090c><div class="container" data-v-f5e4090c><div class="grids gap-20-desktop is-5-desktop is-1-mobile" data-v-f5e4090c><div class="left span-2-desktop" data-v-f5e4090c><div class="intro" data-v-f5e4090c><h1 data-v-f5e4090c>THE BIZ HUB</h1><h3 data-v-f5e4090c> Partner for success <br class="is-hidden-mobile" data-v-f5e4090c> in business and <br class="is-hidden-mobile" data-v-f5e4090c> entrepreneurship </h3><button class="main margin-top-20" data-v-f5e4090c>${ssrInterpolate(_ctx.$t("updates"))}</button></div></div><div class="right span-3-desktop" data-v-f5e4090c><div class="video" data-v-f5e4090c><iframe src="https://www.youtube.com/embed/HEg8LjkZOaQ?si=dULR1XN-DrTBTyXD" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen data-v-f5e4090c></iframe></div></div></div></div></section>`);
    };
  }
});
const intro_vue_vue_type_style_index_0_scoped_f5e4090c_lang = "";
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/homepage/intro.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const Intro = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-f5e4090c"]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "our-services",
  __ssrInlineRender: true,
  setup(__props) {
    const axios = useNuxtApp().$axios;
    const urlImage = useNuxtApp().$imageURL;
    const { locale } = useI18n();
    const info = ref();
    const fetchOurService = async () => {
      const isLang = locale.value ? locale.value : "en";
      const data = await axios.post(`get-our-service-api?lang=${isLang}`);
      info.value = data.data.info;
    };
    watch(
      () => locale.value,
      (value) => {
        fetchOurService();
      },
      { immediate: true, deep: true }
    );
    fetchOurService();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section" }, _attrs))} data-v-65df56cd><div class="container" data-v-65df56cd><div class="section-header" data-v-65df56cd><div class="section-title" data-v-65df56cd>${ssrInterpolate(_ctx.$t("products"))}</div></div><div class="section-body" data-v-65df56cd><ul class="grids is-3-desktop is-1-mobile gap-10-tablet gap-10-tablet gap-20-desktop gap-10-mobile" data-v-65df56cd><!--[-->`);
      ssrRenderList(unref(info), (i, index) => {
        _push(`<li data-v-65df56cd><div class="card" data-v-65df56cd><div class="card-icon" data-v-65df56cd><img${ssrRenderAttr("src", unref(urlImage) + i.image)} data-v-65df56cd></div><h3 class="card-title" data-v-65df56cd>${ssrInterpolate(i.key)}</h3><p data-v-65df56cd>${ssrInterpolate(i.desc)}</p></div></li>`);
      });
      _push(`<!--]--></ul></div></div></section>`);
    };
  }
});
const ourServices_vue_vue_type_style_index_0_scoped_65df56cd_lang = "";
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/homepage/our-services.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const OurService = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-65df56cd"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "who-are-we",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    useCookie("lang");
    const selectedTab = ref("WHO ARE WE?");
    const axios = useNuxtApp().$axios;
    const tabs = ref([]);
    const { locale } = useI18n();
    const fetchIntro = async () => {
      const isLang = locale.value ? locale.value : "en";
      const data = await axios.post(`get-intro-api?lang=${isLang}`);
      tabs.value = data.data.info;
      selectedTab.value = data.data.info[0].key;
    };
    watch(
      () => locale.value,
      (value) => {
        fetchIntro();
      },
      { immediate: true, deep: true }
    );
    fetchIntro();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(_attrs)} data-v-a742b598><div class="container" data-v-a742b598><h1 class="section-title margin-bottom-10" data-v-a742b598>${ssrInterpolate(_ctx.$t("who_are_we"))}</h1><div class="grids is-2-desktop gap-20-desktop is-1-mobile" data-v-a742b598><div class="left" data-v-a742b598><ul class="tabs" data-v-a742b598><!--[-->`);
      ssrRenderList(unref(tabs), (i, index) => {
        _push(`<li class="${ssrRenderClass({ open: unref(selectedTab) === i.key })}" data-v-a742b598><h1 data-v-a742b598>${ssrInterpolate(i.key)} <i class="fa-light fa-angle-down" data-v-a742b598></i></h1><p data-v-a742b598>${ssrInterpolate(i.desc)}</p></li>`);
      });
      _push(`<!--]--><li data-v-a742b598><h1 data-v-a742b598>${ssrInterpolate(_ctx.$t("more_about_us"))}<i class="fa-light fa-angle-right" data-v-a742b598></i></h1></li></ul></div><div class="right" data-v-a742b598><div class="image" data-v-a742b598><a target="_blank" href="https://www.youtube.com/watch?v=HEg8LjkZOaQ" data-v-a742b598><i class="fa-solid fa-play" data-v-a742b598></i><img${ssrRenderAttr("src", _imports_0)} data-v-a742b598></a></div></div></div></div></section>`);
    };
  }
});
const whoAreWe_vue_vue_type_style_index_0_scoped_a742b598_lang = "";
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/homepage/who-are-we.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const WhoWeAre = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-a742b598"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "story",
  __ssrInlineRender: true,
  props: ["info", "title"],
  setup(__props) {
    useRouter();
    const images = useNuxtApp().$imageURL;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(_attrs)} data-v-dd508f96><div class="container" data-v-dd508f96><h1 class="section-title" data-v-dd508f96>${ssrInterpolate(__props.title)}</h1><ul data-v-dd508f96><!--[-->`);
      ssrRenderList(__props.info, (i, index) => {
        _push(`<li data-v-dd508f96><div class="card dark" data-v-dd508f96><div class="card-image" data-v-dd508f96><img${ssrRenderAttr("src", unref(images) + i.coverPage)} alt="" data-v-dd508f96></div><div class="card-content" data-v-dd508f96><h3 data-v-dd508f96>${ssrInterpolate(i.title)}</h3></div></div></li>`);
      });
      _push(`<!--]--></ul></div></section>`);
    };
  }
});
const story_vue_vue_type_style_index_0_scoped_dd508f96_lang = "";
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/homepage/story.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Story = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-dd508f96"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "column-layout",
  __ssrInlineRender: true,
  props: ["title", "info"],
  setup(__props) {
    const images = useNuxtApp().$imageURL;
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(_attrs)} data-v-7a15e64c><div class="container" data-v-7a15e64c><h1 class="section-title" data-v-7a15e64c>${ssrInterpolate(__props.title)}</h1><ul data-v-7a15e64c><!--[-->`);
      ssrRenderList(__props.info, (i, index) => {
        _push(`<li data-v-7a15e64c><div class="card" data-v-7a15e64c><div class="card-image fullheight" data-v-7a15e64c><img${ssrRenderAttr("src", unref(images) + i.coverPage)} alt="" data-v-7a15e64c></div><div class="card-content" data-v-7a15e64c><h3 class="card-title" data-v-7a15e64c>${ssrInterpolate(i.title)}</h3></div></div></li>`);
      });
      _push(`<!--]--></ul></div></section>`);
    };
  }
});
const columnLayout_vue_vue_type_style_index_0_scoped_7a15e64c_lang = "";
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/homepage/reuse/column-layout.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Wing = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-7a15e64c"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "grids-layout",
  __ssrInlineRender: true,
  props: ["title", "info"],
  setup(__props) {
    const images = useNuxtApp().$imageURL;
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(_attrs)} data-v-90050aa7><div class="container" data-v-90050aa7><h1 class="section-title" data-v-90050aa7>${ssrInterpolate(__props.title)}</h1><ul data-v-90050aa7><!--[-->`);
      ssrRenderList(__props.info, (i, index) => {
        _push(`<li data-v-90050aa7><div class="card" data-v-90050aa7><div class="card-image" data-v-90050aa7><img${ssrRenderAttr("src", unref(images) + i.coverPage)} alt="" data-v-90050aa7></div><div class="card-content" data-v-90050aa7><h3 class="card-title" data-v-90050aa7>${ssrInterpolate(i.title)}</h3></div></div></li>`);
      });
      _push(`<!--]--></ul></div></section>`);
    };
  }
});
const gridsLayout_vue_vue_type_style_index_0_scoped_90050aa7_lang = "";
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/homepage/reuse/grids-layout.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const SelftEmployment = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-90050aa7"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const axios = useNuxtApp().$axios;
    const enterPreInfo = ref([]);
    const selftEmpInfo = ref([]);
    const msmes = ref([]);
    const newsAndActivitiesInfo = ref([]);
    const bizLawInfo = ref([]);
    const wingInfo = ref([]);
    const TSNSInfo = ref([]);
    const smeTitle = ref("");
    const selftEmpInfoTitle = ref("");
    const newActivityTitle = ref("");
    const bizLawInfoTItle = ref("");
    const TSNSInfoTItle = ref("");
    const enterPreInfoTitle = ref("");
    const wingInfoTitle = ref("");
    const { locale } = useI18n();
    const isLang = ref();
    const fetchMSMEs = async () => {
      const name = "654d868d4040f0af2207e5eb";
      await axios.post(`sme-articles/${name}`).then((res2) => {
        if (res2.status === 200) {
          msmes.value = res2.data.info;
        }
      });
      const res = await axios.post(`get-section-home-page?_id=${name}&lang=${isLang.value}`);
      smeTitle.value = res.data.info.name;
    };
    const fetchEntrepre = async () => {
      const name = "651a4ca8c2d5c94d6cc3da9e";
      await axios.post(`reuse-articles/${name}`).then((res2) => {
        if (res2.status === 200) {
          enterPreInfo.value = res2.data.info;
        }
      });
      const res = await axios.post(`get-section-home-page?_id=${name}&lang=${isLang.value}`);
      enterPreInfoTitle.value = res.data.info.name;
    };
    const fetchSelftEmp = async () => {
      const name = "651a4cebc2d5c94d6cc3daa7";
      await axios.post(`sme-articles/${name}`).then((res2) => {
        if (res2.status === 200) {
          selftEmpInfo.value = res2.data.info;
        }
      });
      const res = await axios.post(`get-section-home-page?_id=${name}&lang=${isLang.value}`);
      selftEmpInfoTitle.value = res.data.info.name;
    };
    const fetchNewAndActivities = async () => {
      const name = "651a4d06c2d5c94d6cc3daba";
      await axios.post(`reuse-articles/${name}`).then((res2) => {
        if (res2.status === 200) {
          newsAndActivitiesInfo.value = res2.data.info;
        }
      });
      const res = await axios.post(`get-section-home-page?_id=${name}&lang=${isLang.value}`);
      newActivityTitle.value = res.data.info.name;
    };
    const fetchBizLaw = async () => {
      const name = "651a4d1ac2d5c94d6cc3dac3";
      await axios.post(`reuse-articles/${name}`).then((res2) => {
        if (res2.status === 200) {
          bizLawInfo.value = res2.data.info;
        }
      });
      const res = await axios.post(`get-section-home-page?_id=${name}&lang=${isLang.value}`);
      bizLawInfoTItle.value = res.data.info.name;
    };
    const fetchTSNS = async () => {
      const name = "654d86c14040f0af2207e5f4";
      await axios.post(`reuse-articles/${name}`).then((res2) => {
        if (res2.status === 200) {
          TSNSInfo.value = res2.data.info;
        }
      });
      const res = await axios.post(`get-section-home-page?_id=${name}&lang=${isLang.value}`);
      TSNSInfoTItle.value = res.data.info.name;
    };
    const fetchWing = async () => {
      const name = "654d86dc4040f0af2207e5fd";
      await axios.post(`reuse-articles/${name}`).then((res2) => {
        if (res2.status === 200) {
          wingInfo.value = res2.data.info;
        }
      });
      const res = await axios.post(`get-section-home-page?_id=${name}&lang=${isLang.value}`);
      wingInfoTitle.value = res.data.info.name;
    };
    fetchMSMEs();
    fetchEntrepre();
    fetchSelftEmp();
    fetchNewAndActivities();
    fetchBizLaw();
    fetchTSNS();
    fetchWing();
    watch(
      () => locale.value,
      (value) => {
        isLang.value = value;
        fetchMSMEs();
        fetchEntrepre();
        fetchSelftEmp();
        fetchNewAndActivities();
        fetchBizLaw();
        fetchTSNS();
        fetchWing();
      },
      { immediate: true, deep: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(Intro, null, null, _parent));
      _push(ssrRenderComponent(OurService, null, null, _parent));
      _push(ssrRenderComponent(WhoWeAre, null, null, _parent));
      _push(ssrRenderComponent(SelftEmployment, {
        title: unref(smeTitle),
        info: unref(msmes),
        style: unref(msmes).length ? null : { display: "none" }
      }, null, _parent));
      _push(ssrRenderComponent(Story, {
        style: unref(enterPreInfo).length ? null : { display: "none" },
        info: unref(enterPreInfo),
        title: unref(enterPreInfoTitle)
      }, null, _parent));
      _push(ssrRenderComponent(SelftEmployment, {
        title: unref(selftEmpInfoTitle),
        info: unref(selftEmpInfo),
        style: unref(selftEmpInfo).length ? null : { display: "none" }
      }, null, _parent));
      _push(ssrRenderComponent(Wing, {
        title: unref(newActivityTitle),
        info: unref(newsAndActivitiesInfo),
        style: unref(newsAndActivitiesInfo).length ? null : { display: "none" }
      }, null, _parent));
      _push(ssrRenderComponent(Wing, {
        title: unref(bizLawInfoTItle),
        info: unref(bizLawInfo),
        style: unref(bizLawInfo).length ? null : { display: "none" }
      }, null, _parent));
      _push(ssrRenderComponent(Wing, {
        title: unref(TSNSInfoTItle),
        info: unref(TSNSInfo),
        style: unref(TSNSInfo).length ? null : { display: "none" }
      }, null, _parent));
      _push(ssrRenderComponent(Wing, {
        title: unref(wingInfoTitle),
        info: unref(wingInfo),
        style: unref(wingInfo).length ? null : { display: "none" }
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const index_vue_vue_type_style_index_0_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-b38fc80a.js.map
