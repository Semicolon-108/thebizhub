import { d as useNuxtApp, u as useRouter, e as useRoute, _ as _export_sfc } from '../server.mjs';
import { useSSRContext, defineComponent, ref, unref, watch, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderClass } from 'vue/server-renderer';
import { u as useCookie } from './cookie-9ebd6d73.mjs';
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
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section" }, _attrs))} data-v-e942ec05><div class="container" data-v-e942ec05><div class="grids gap-20-desktop is-5-desktop is-1-mobile" data-v-e942ec05><div class="left span-2-desktop" data-v-e942ec05><div class="intro" data-v-e942ec05><h1 data-v-e942ec05>THE BIZ HUB</h1><h3 data-v-e942ec05> Partner for success <br class="is-hidden-mobile" data-v-e942ec05> in business and <br class="is-hidden-mobile" data-v-e942ec05> entrepreneurship </h3><button class="main margin-top-20 large" data-v-e942ec05>${ssrInterpolate(_ctx.$t("update"))}</button></div></div><div class="right span-3-desktop" data-v-e942ec05><div class="video" data-v-e942ec05><iframe src="https://www.youtube.com/embed/HEg8LjkZOaQ?si=dULR1XN-DrTBTyXD" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen data-v-e942ec05></iframe></div></div></div></div></section>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/homepage/intro.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const Intro = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-e942ec05"]]);
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
    watch(() => locale.value, (value) => {
      fetchOurService();
    }, { immediate: true, deep: true });
    fetchOurService();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section" }, _attrs))} data-v-d4cc75c7><div class="container" data-v-d4cc75c7><div class="section-header" data-v-d4cc75c7><div class="section-title" data-v-d4cc75c7>${ssrInterpolate(_ctx.$t("Our Services"))}</div></div><div class="section-body" data-v-d4cc75c7><ul class="grids is-3-desktop is-1-mobile gap-10-tablet gap-10-tablet gap-20-desktop gap-10-mobile" data-v-d4cc75c7><!--[-->`);
      ssrRenderList(unref(info), (i, index) => {
        _push(`<li data-v-d4cc75c7><div class="card" data-v-d4cc75c7><div class="card-icon" data-v-d4cc75c7><img${ssrRenderAttr("src", unref(urlImage) + i.image)} data-v-d4cc75c7></div><h3 class="card-title" data-v-d4cc75c7>${ssrInterpolate(i.key)}</h3><p data-v-d4cc75c7>${ssrInterpolate(i.desc)}</p></div></li>`);
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
const OurService = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-d4cc75c7"]]);
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
    watch(() => locale.value, (value) => {
      fetchIntro();
    }, { immediate: true, deep: true });
    fetchIntro();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(_attrs)} data-v-3e09e399><div class="container" data-v-3e09e399><h1 class="section-title margin-bottom-10" data-v-3e09e399>${ssrInterpolate(_ctx.$t("who_are_we"))}</h1><div class="grids is-2-desktop gap-20-desktop is-1-mobile" data-v-3e09e399><div class="left" data-v-3e09e399><ul class="tabs" data-v-3e09e399><!--[-->`);
      ssrRenderList(unref(tabs), (i, index) => {
        _push(`<li class="${ssrRenderClass({ open: unref(selectedTab) === i.key })}" data-v-3e09e399><h1 data-v-3e09e399>${ssrInterpolate(i.key)} <i class="fa-light fa-angle-down" data-v-3e09e399></i></h1><p data-v-3e09e399>${ssrInterpolate(i.desc)}</p></li>`);
      });
      _push(`<!--]--><li data-v-3e09e399><h1 data-v-3e09e399>${ssrInterpolate(_ctx.$t("MORE_ABOUT_US"))}<i class="fa-light fa-angle-right" data-v-3e09e399></i></h1></li></ul></div><div class="right" data-v-3e09e399><div class="image" data-v-3e09e399><a target="_blank" href="https://www.youtube.com/watch?v=HEg8LjkZOaQ" data-v-3e09e399><i class="fa-solid fa-play" data-v-3e09e399></i><img${ssrRenderAttr("src", _imports_0)} data-v-3e09e399></a></div></div></div></div></section>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/homepage/who-are-we.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const WhoWeAre = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-3e09e399"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "story",
  __ssrInlineRender: true,
  props: ["info"],
  setup(__props) {
    useRouter();
    const images = useNuxtApp().$imageURL;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(_attrs)} data-v-0d93a1f3><div class="container" data-v-0d93a1f3><h1 class="section-title" data-v-0d93a1f3>Entrepreneur&#39;s Story</h1><ul data-v-0d93a1f3><!--[-->`);
      ssrRenderList(__props.info, (i, index) => {
        _push(`<li data-v-0d93a1f3><div class="card dark" data-v-0d93a1f3><div class="card-image" data-v-0d93a1f3><img${ssrRenderAttr("src", unref(images) + i.coverPage)} alt="" data-v-0d93a1f3></div><div class="card-content" data-v-0d93a1f3><p class="tag-list" data-v-0d93a1f3><!--[-->`);
        ssrRenderList(i.tag, (t, indx) => {
          _push(`<span data-v-0d93a1f3>${ssrInterpolate(t.name)}</span>`);
        });
        _push(`<!--]--><!--[-->`);
        ssrRenderList(i.category, (c, ind) => {
          _push(`<span data-v-0d93a1f3>${ssrInterpolate(c.name)}</span>`);
        });
        _push(`<!--]--></p><h3 data-v-0d93a1f3>${ssrInterpolate(i.title)}</h3></div></div></li>`);
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
const Story = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-0d93a1f3"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "column-layout",
  __ssrInlineRender: true,
  props: ["title", "info"],
  setup(__props) {
    const images = useNuxtApp().$imageURL;
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(_attrs)} data-v-8e7f1306><div class="container" data-v-8e7f1306><h1 class="section-title" data-v-8e7f1306>${ssrInterpolate(__props.title)}</h1><ul data-v-8e7f1306><!--[-->`);
      ssrRenderList(__props.info, (i, index) => {
        _push(`<li data-v-8e7f1306><div class="card" data-v-8e7f1306><div class="card-image fullheight" data-v-8e7f1306><img${ssrRenderAttr("src", unref(images) + i.coverPage)} alt="" data-v-8e7f1306></div><div class="card-content" data-v-8e7f1306><p class="tag-list" data-v-8e7f1306><!--[-->`);
        ssrRenderList(i.tag, (t, indx) => {
          _push(`<span data-v-8e7f1306>${ssrInterpolate(t.name)}</span>`);
        });
        _push(`<!--]--><!--[-->`);
        ssrRenderList(i.category, (c, ind) => {
          _push(`<span data-v-8e7f1306>${ssrInterpolate(c.name)}</span>`);
        });
        _push(`<!--]--></p><h3 data-v-8e7f1306>${ssrInterpolate(i.title)}</h3></div></div></li>`);
      });
      _push(`<!--]--></ul></div></section>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/homepage/reuse/column-layout.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Wing = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-8e7f1306"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "grids-layout",
  __ssrInlineRender: true,
  props: ["title", "info"],
  setup(__props) {
    const images = useNuxtApp().$imageURL;
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(_attrs)} data-v-24467dda><div class="container" data-v-24467dda><h1 class="section-title" data-v-24467dda>${ssrInterpolate(__props.title)}</h1><ul data-v-24467dda><!--[-->`);
      ssrRenderList(__props.info, (i, index) => {
        _push(`<li data-v-24467dda><div class="card" data-v-24467dda><div class="card-image" data-v-24467dda><img${ssrRenderAttr("src", unref(images) + i.coverPage)} alt="" data-v-24467dda></div><div class="card-content" data-v-24467dda><ul class="tag-list" data-v-24467dda><!--[-->`);
        ssrRenderList(i.category, (c, ind) => {
          _push(`<li data-v-24467dda><a data-v-24467dda>${ssrInterpolate(c.name)}</a></li>`);
        });
        _push(`<!--]--></ul><h3 data-v-24467dda>${ssrInterpolate(i.title)}</h3></div></div></li>`);
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
const SelftEmployment = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-24467dda"]]);
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
    const fetchMSMEs = async () => {
      const name = "654d868d4040f0af2207e5eb";
      await axios.post(`sme-articles/${name}`).then((res) => {
        if (res.status === 200) {
          msmes.value = res.data.info;
        }
      });
    };
    const fetchEntrepre = async () => {
      const name = "651a4ca8c2d5c94d6cc3da9e";
      await axios.post(`reuse-articles/${name}`).then((res) => {
        if (res.status === 200) {
          enterPreInfo.value = res.data.info;
        }
      });
    };
    const fetchSelftEmp = async () => {
      const name = "651a4cebc2d5c94d6cc3daa7";
      await axios.post(`sme-articles/${name}`).then((res) => {
        if (res.status === 200) {
          selftEmpInfo.value = res.data.info;
        }
      });
    };
    const fetchNewAndActivities = async () => {
      const name = "651a4d06c2d5c94d6cc3daba";
      await axios.post(`reuse-articles/${name}`).then((res) => {
        if (res.status === 200) {
          newsAndActivitiesInfo.value = res.data.info;
        }
      });
    };
    const fetchBizLaw = async () => {
      const name = "651a4d1ac2d5c94d6cc3dac3";
      await axios.post(`reuse-articles/${name}`).then((res) => {
        if (res.status === 200) {
          bizLawInfo.value = res.data.info;
        }
      });
    };
    const fetchTSNS = async () => {
      const name = "654d86c14040f0af2207e5f4";
      await axios.post(`reuse-articles/${name}`).then((res) => {
        if (res.status === 200) {
          TSNSInfo.value = res.data.info;
        }
      });
    };
    const fetchWing = async () => {
      const name = "654d86dc4040f0af2207e5fd";
      await axios.post(`reuse-articles/${name}`).then((res) => {
        if (res.status === 200) {
          wingInfo.value = res.data.info;
        }
      });
    };
    fetchMSMEs();
    fetchEntrepre();
    fetchSelftEmp();
    fetchNewAndActivities();
    fetchBizLaw();
    fetchTSNS();
    fetchWing();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(Intro, null, null, _parent));
      _push(ssrRenderComponent(OurService, null, null, _parent));
      _push(ssrRenderComponent(WhoWeAre, null, null, _parent));
      _push(ssrRenderComponent(SelftEmployment, {
        title: "MSMEs",
        info: unref(msmes),
        style: unref(msmes).length ? null : { display: "none" }
      }, null, _parent));
      _push(ssrRenderComponent(Story, {
        style: unref(enterPreInfo).length ? null : { display: "none" },
        info: unref(enterPreInfo)
      }, null, _parent));
      _push(ssrRenderComponent(SelftEmployment, {
        title: "Self - Employment",
        info: unref(selftEmpInfo),
        style: unref(selftEmpInfo).length ? null : { display: "none" }
      }, null, _parent));
      _push(ssrRenderComponent(Wing, {
        title: `News & Activities`,
        info: unref(newsAndActivitiesInfo),
        style: unref(newsAndActivitiesInfo).length ? null : { display: "none" }
      }, null, _parent));
      _push(ssrRenderComponent(Wing, {
        title: `BIZ Laws`,
        info: unref(bizLawInfo),
        style: unref(bizLawInfo).length ? null : { display: "none" }
      }, null, _parent));
      _push(ssrRenderComponent(Wing, {
        title: `TSNS - Thao Sang Nang Sa`,
        info: unref(TSNSInfo),
        style: unref(TSNSInfo).length ? null : { display: "none" }
      }, null, _parent));
      _push(ssrRenderComponent(Wing, {
        title: `WINGS - Women's Income Generating Support`,
        info: unref(wingInfo),
        style: unref(wingInfo).length ? null : { display: "none" }
      }, null, _parent));
      _push(`</div>`);
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
//# sourceMappingURL=index-f8a82080.mjs.map
