import { d as useNuxtApp, u as useRouter, e as useRoute, _ as _export_sfc } from '../server.mjs';
import { useSSRContext, defineComponent, ref, watch, unref, mergeProps, withCtx, createVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderClass } from 'vue/server-renderer';
import { u as useCookie } from './cookie-9ebd6d73.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-691e5b50.mjs';
import { useI18n } from 'vue-i18n';
import { _ as _imports_0 } from './team-2b5e560f.mjs';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'axios';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';

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
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section" }, _attrs))} data-v-20849af3><div class="container" data-v-20849af3><div class="grids gap-20-desktop is-5-desktop is-1-mobile gap-10-mobile" data-v-20849af3><div class="left span-2-desktop" data-v-20849af3><div class="intro" data-v-20849af3><h1 data-v-20849af3>THE BIZ HUB</h1><h3 data-v-20849af3> Partner for success <br class="is-hidden-mobile" data-v-20849af3> in business and <br class="is-hidden-mobile" data-v-20849af3> entrepreneurship </h3><button class="main margin-top-20" data-v-20849af3>${ssrInterpolate(_ctx.$t("updates"))}</button></div></div><div class="right span-3-desktop" data-v-20849af3><div class="video" data-v-20849af3><iframe src="https://www.youtube.com/embed/PezSDxa0vrs?si=h07PGaZbGmI8jwC2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen data-v-20849af3></iframe></div></div></div></div></section>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/homepage/intro.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const Intro = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-20849af3"]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "our-services",
  __ssrInlineRender: true,
  setup(__props) {
    const axios = useNuxtApp().$axios;
    useNuxtApp().$https;
    const urlImage = useNuxtApp().$imageURL;
    useRouter();
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
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section" }, _attrs))} data-v-533ab5d4><div class="container" data-v-533ab5d4><div class="section-header" data-v-533ab5d4><div class="section-title" data-v-533ab5d4>${ssrInterpolate(_ctx.$t("products"))}</div></div><div class="section-body" data-v-533ab5d4><ul class="grids is-3-desktop is-1-mobile gap-10-tablet gap-10-tablet gap-20-desktop gap-10-mobile" data-v-533ab5d4><!--[-->`);
      ssrRenderList(unref(info), (i, index) => {
        _push(`<li data-v-533ab5d4><div class="card" data-v-533ab5d4><div class="card-icon" data-v-533ab5d4><img${ssrRenderAttr("src", unref(urlImage) + i.image)} data-v-533ab5d4></div><h3 class="card-title" data-v-533ab5d4>${ssrInterpolate(i.key)}</h3><p data-v-533ab5d4>${ssrInterpolate(i.desc)}</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: {
            path: `/${i.link}`
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<button class="button main small" data-v-533ab5d4${_scopeId}>${ssrInterpolate(_ctx.$t("more_detail"))}</button>`);
            } else {
              return [
                createVNode("button", { class: "button main small" }, toDisplayString(_ctx.$t("more_detail")), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></li>`);
      });
      _push(`<!--]--></ul></div></div></section>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/homepage/our-services.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const OurService = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-533ab5d4"]]);
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
      _push(`<section${ssrRenderAttrs(_attrs)} data-v-8e8cbcf6><div class="container" data-v-8e8cbcf6><h1 class="section-title margin-bottom-10" data-v-8e8cbcf6>${ssrInterpolate(_ctx.$t("who_are_we"))}</h1><div class="grids is-2-desktop gap-20-desktop is-1-mobile" data-v-8e8cbcf6><div class="left" data-v-8e8cbcf6><ul class="tabs" data-v-8e8cbcf6><!--[-->`);
      ssrRenderList(unref(tabs), (i, index) => {
        _push(`<li class="${ssrRenderClass({ open: unref(selectedTab) === i.key })}" data-v-8e8cbcf6><h1 data-v-8e8cbcf6>${ssrInterpolate(i.key)} <i class="fa-light fa-angle-down" data-v-8e8cbcf6></i></h1><p data-v-8e8cbcf6>${ssrInterpolate(i.desc)}</p></li>`);
      });
      _push(`<!--]--><li data-v-8e8cbcf6><h1 data-v-8e8cbcf6>${ssrInterpolate(_ctx.$t("more_about_us"))}<i class="fa-light fa-angle-right" data-v-8e8cbcf6></i></h1></li></ul></div><div class="right" data-v-8e8cbcf6><div class="image" data-v-8e8cbcf6><a target="_blank" href="https://www.youtube.com/watch?v=HEg8LjkZOaQ" data-v-8e8cbcf6><i class="fa-solid fa-play" data-v-8e8cbcf6></i><img${ssrRenderAttr("src", _imports_0)} data-v-8e8cbcf6></a></div></div></div></div></section>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/homepage/who-are-we.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const WhoWeAre = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-8e8cbcf6"]]);
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-15360664><h1 class="section-title" data-v-15360664>${ssrInterpolate(__props.title)}</h1><ul data-v-15360664><!--[-->`);
      ssrRenderList(__props.info, (i, index) => {
        _push(`<li data-v-15360664><div class="card" data-v-15360664><div class="card-image fullheight" data-v-15360664><img${ssrRenderAttr("src", unref(images) + i.coverPage)} alt="" data-v-15360664></div><div class="card-content" data-v-15360664><h3 class="card-title" data-v-15360664>${ssrInterpolate(i.title)}</h3></div></div></li>`);
      });
      _push(`<!--]--></ul></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/homepage/reuse/column-layout.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const BusinessSupporters = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-15360664"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "grids-layout",
  __ssrInlineRender: true,
  props: ["title", "info"],
  setup(__props) {
    const images = useNuxtApp().$imageURL;
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(_attrs)} data-v-1c392809><div class="container" data-v-1c392809><h1 class="section-title" data-v-1c392809>${ssrInterpolate(__props.title)}</h1><ul data-v-1c392809><!--[-->`);
      ssrRenderList(__props.info, (i, index) => {
        _push(`<li data-v-1c392809><div class="card" data-v-1c392809><div class="card-image" data-v-1c392809><img${ssrRenderAttr("src", unref(images) + i.coverPage)} alt="" data-v-1c392809></div><div class="card-content" data-v-1c392809><h3 class="card-title" data-v-1c392809>${ssrInterpolate(i.title)}</h3></div></div></li>`);
      });
      _push(`<!--]--></ul></div></section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/homepage/reuse/grids-layout.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const TricksAndTips = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-1c392809"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const axios = useNuxtApp().$axios;
    const eventsAndActivityInfo = ref([]);
    const bizToolInfo = ref([]);
    const enterPreInfo = ref([]);
    const selftEmpInfo = ref([]);
    const msmes = ref([]);
    const bizLawInfo = ref([]);
    const wingInfo = ref([]);
    const TSNSInfo = ref([]);
    const businessSupportersInfo = ref([]);
    const eventsAndActivityTitle = ref("");
    const bizToolTitle = ref("");
    const smeTitle = ref("");
    const selftEmpInfoTitle = ref("");
    ref("");
    const bizLawInfoTItle = ref("");
    const TSNSInfoTItle = ref("");
    const enterPreInfoTitle = ref("");
    const wingInfoTitle = ref("");
    const businessSupportersTitle = ref("");
    const { locale } = useI18n();
    const isLang = ref();
    const fetchMSMEs = async () => {
      const name = "654d868d4040f0af2207e5eb";
      await axios.post(`sme-articles/${name}`).then((res2) => {
        if (res2.status === 200) {
          msmes.value = res2.data.info;
        }
      });
      const res = await axios.post(
        `get-section-home-page?_id=${name}&lang=${isLang.value}`
      );
      smeTitle.value = res.data.info.name;
    };
    const fetchEntrepre = async () => {
      const name = "651a4ca8c2d5c94d6cc3da9e";
      await axios.post(`reuse-articles/${name}`).then((res2) => {
        if (res2.status === 200) {
          enterPreInfo.value = res2.data.info;
        }
      });
      const res = await axios.post(
        `get-section-home-page?_id=${name}&lang=${isLang.value}`
      );
      enterPreInfoTitle.value = res.data.info.name;
    };
    const fetchSelftEmp = async () => {
      const name = "651a4cebc2d5c94d6cc3daa7";
      await axios.post(`sme-articles/${name}`).then((res2) => {
        if (res2.status === 200) {
          selftEmpInfo.value = res2.data.info;
        }
      });
      const res = await axios.post(
        `get-section-home-page?_id=${name}&lang=${isLang.value}`
      );
      selftEmpInfoTitle.value = res.data.info.name;
    };
    const fetchBizLaw = async () => {
      const name = "651a4d1ac2d5c94d6cc3dac3";
      await axios.post(`reuse-articles/${name}`).then((res2) => {
        if (res2.status === 200) {
          bizLawInfo.value = res2.data.info;
        }
      });
      const res = await axios.post(
        `get-section-home-page?_id=${name}&lang=${isLang.value}`
      );
      bizLawInfoTItle.value = res.data.info.name;
    };
    const fetchTSNS = async () => {
      const name = "654d86c14040f0af2207e5f4";
      await axios.post(`reuse-articles/${name}`).then((res2) => {
        if (res2.status === 200) {
          TSNSInfo.value = res2.data.info;
        }
      });
      const res = await axios.post(
        `get-section-home-page?_id=${name}&lang=${isLang.value}`
      );
      TSNSInfoTItle.value = res.data.info.name;
    };
    const fetchWing = async () => {
      const name = "654d86dc4040f0af2207e5fd";
      await axios.post(`reuse-articles/${name}`).then((res2) => {
        if (res2.status === 200) {
          wingInfo.value = res2.data.info;
        }
      });
      const res = await axios.post(
        `get-section-home-page?_id=${name}&lang=${isLang.value}`
      );
      wingInfoTitle.value = res.data.info.name;
    };
    const fetchEventAndActivity = async () => {
      const name = "651a4d06c2d5c94d6cc3daba";
      await axios.post(`reuse-articles/${name}`).then((res2) => {
        if (res2.status === 200) {
          eventsAndActivityInfo.value = res2.data.info;
        }
      });
      const res = await axios.post(
        `get-section-home-page?_id=${name}&lang=${isLang.value}`
      );
      eventsAndActivityTitle.value = res.data.info.name;
    };
    const fetchBizTool = async () => {
      const name = "654d866a4040f0af2207e5db";
      await axios.post(`reuse-articles/${name}`).then((res2) => {
        if (res2.status === 200) {
          bizToolInfo.value = res2.data.info;
        }
      });
      const res = await axios.post(
        `get-section-home-page?_id=${name}&lang=${isLang.value}`
      );
      bizToolTitle.value = res.data.info.name;
    };
    const fetchBusinessSupporters = async () => {
      const name = "657aa122bc4e6513beed5630";
      await axios.post(`reuse-articles/${name}`).then((res2) => {
        if (res2.status === 200) {
          businessSupportersInfo.value = res2.data.info;
        }
      });
      const res = await axios.post(
        `get-section-home-page?_id=${name}&lang=${isLang.value}`
      );
      businessSupportersTitle.value = res.data.info.name;
    };
    fetchEventAndActivity();
    fetchBizTool();
    fetchMSMEs();
    fetchEntrepre();
    fetchSelftEmp();
    fetchBizLaw();
    fetchTSNS();
    fetchWing();
    fetchBusinessSupporters();
    watch(
      () => locale.value,
      (value) => {
        isLang.value = value;
        fetchEventAndActivity();
        fetchBizTool();
        fetchMSMEs();
        fetchEntrepre();
        fetchSelftEmp();
        fetchBizLaw();
        fetchTSNS();
        fetchWing();
        fetchBusinessSupporters();
      },
      { immediate: true, deep: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(Intro, null, null, _parent));
      _push(ssrRenderComponent(OurService, null, null, _parent));
      _push(ssrRenderComponent(WhoWeAre, null, null, _parent));
      _push(ssrRenderComponent(TricksAndTips, {
        title: unref(eventsAndActivityTitle),
        info: unref(eventsAndActivityInfo),
        style: unref(eventsAndActivityInfo).length ? null : { display: "none" }
      }, null, _parent));
      _push(ssrRenderComponent(TricksAndTips, {
        title: unref(bizToolTitle),
        info: unref(bizToolInfo),
        style: unref(bizToolInfo).length ? null : { display: "none" }
      }, null, _parent));
      _push(ssrRenderComponent(Story, {
        style: unref(enterPreInfo).length ? null : { display: "none" },
        info: unref(enterPreInfo),
        title: unref(enterPreInfoTitle)
      }, null, _parent));
      _push(`<section class="section">`);
      _push(ssrRenderComponent(BusinessSupporters, {
        title: unref(bizLawInfoTItle),
        info: unref(bizLawInfo),
        style: unref(bizLawInfo).length ? null : { display: "none" }
      }, null, _parent));
      _push(`</section><section class="section tsns-bg">`);
      _push(ssrRenderComponent(BusinessSupporters, {
        title: unref(TSNSInfoTItle),
        info: unref(TSNSInfo),
        style: unref(TSNSInfo).length ? null : { display: "none" }
      }, null, _parent));
      _push(`</section><section class="section">`);
      _push(ssrRenderComponent(TricksAndTips, {
        title: unref(smeTitle),
        info: unref(msmes),
        style: unref(msmes).length ? null : { display: "none" }
      }, null, _parent));
      _push(`</section><section class="section wing-bg">`);
      _push(ssrRenderComponent(BusinessSupporters, {
        title: unref(wingInfoTitle),
        info: unref(wingInfo),
        style: unref(wingInfo).length ? null : { display: "none" }
      }, null, _parent));
      _push(`</section><section class="section">`);
      _push(ssrRenderComponent(BusinessSupporters, {
        title: unref(businessSupportersTitle),
        info: unref(businessSupportersInfo),
        style: unref(businessSupportersInfo).length ? null : { display: "none" }
      }, null, _parent));
      _push(`</section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-853ad9ef.mjs.map
