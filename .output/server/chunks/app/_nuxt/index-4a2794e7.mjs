import { a as useNuxtApp, u as useRouter, _ as _export_sfc } from '../server.mjs';
import { useSSRContext, defineComponent, ref, withAsyncContext, unref, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './team-2b5e560f.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'h3';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'ufo';
import 'axios';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'klona';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'http-graceful-shutdown';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';

const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "intro",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section" }, _attrs))} data-v-448069eb><div class="container" data-v-448069eb><div class="grids gap-20-desktop is-5-desktop is-1-mobile" data-v-448069eb><div class="left span-2-desktop" data-v-448069eb><div class="intro" data-v-448069eb><h1 data-v-448069eb>THE BIZ HUB</h1><h3 data-v-448069eb> Partner for success <br class="is-hidden-mobile" data-v-448069eb> in business and <br class="is-hidden-mobile" data-v-448069eb> entrepreneurship </h3><button class="main margin-top-20 large" data-v-448069eb> Update </button></div></div><div class="right span-3-desktop" data-v-448069eb><ul class="grids gap-10-desktop is-2-desktop is-1-mobile" data-v-448069eb><li data-v-448069eb><div class="course-info" data-v-448069eb><h3 data-v-448069eb>BIZ COACHING</h3><p data-v-448069eb> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut quibusdam quia recusandae illo rerum voluptates, consequatur fugiat repudiandae cum labore nobis praesentium voluptate hic. Eos, dolorem! Inventore, vitae! At, ipsa. </p></div></li><li data-v-448069eb><div class="course-info" data-v-448069eb><h3 data-v-448069eb>BIZ EVENTS</h3><p data-v-448069eb> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut quibusdam quia recusandae illo rerum voluptates, consequatur fugiat repudiandae cum labore nobis praesentium voluptate hic. Eos, dolorem! Inventore, vitae! At, ipsa. </p></div></li><li data-v-448069eb><div class="course-info" data-v-448069eb><h3 data-v-448069eb>BIZ TOOLS</h3><p data-v-448069eb> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut quibusdam quia recusandae illo rerum voluptates, consequatur fugiat repudiandae cum labore nobis praesentium voluptate hic. Eos, dolorem! Inventore, vitae! At, ipsa. </p></div></li><li data-v-448069eb><div class="course-info" data-v-448069eb><h3 data-v-448069eb>BIZ COURSES</h3><p data-v-448069eb> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut quibusdam quia recusandae illo rerum voluptates, consequatur fugiat repudiandae cum labore nobis praesentium voluptate hic. Eos, dolorem! Inventore, vitae! At, ipsa. </p></div></li></ul></div></div></div></section>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/homepage/intro.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const Intro = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-448069eb"]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "who-are-we",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const selectedTab = ref();
    const tabs = ref([
      {
        name: "WHO ARE WE?",
        desc: "\u0E84\u0EB9\u0EC8\u0EAE\u0EC8\u0EA7\u0EA1\u0E87\u0EB2\u0E99\u0EC0\u0E9E\u0EB7\u0EC8\u0EAD\u0E84\u0EA7\u0EB2\u0EA1\u0EAA\u0EB2\u0EC0\u0EA5\u0E94\u0EC3\u0E99\u0E94\u0EC9\u0EB2\u0E99\u0E97\u0EB8\u0EA5\u0EB0\u0E81\u0EB4\u0E94 \u0EC1\u0EA5\u0EB0 \u0E81\u0EB2\u0E99\u0EC0\u0E9B\u0E99\u0E9C\u0EB9\u0EC9 \u0E9B\u0EB0\u0E81\u0EAD\u0E9A\u0E81\u0EB2\u0E99, \u0E9E\u0EA7\u0E81\u0EC0\u0EAE\u0EB2\u0EA1\u0EB8\u0EC8\u0E87\u0EDD\u0EB1\u0EC9\u0E99\u0EC3\u0E99\u0E81\u0EB2\u0E99\u0EAA\u0EBB\u0EC8\u0E87\u0EC0\u0EAA\u0EB5\u0EA1 \u0EC1\u0EA5\u0EB0 \u0EC0\u0EAA\u0EB5\u0EA1\u0EAA\u0EC9\u0EB2\u0E87 \u0E9C\u0EB9\u0EC9\u0E9B\u0EB0\u0E81\u0EAD\u0E9A\u0E81\u0EB2\u0E99\u0EA5\u0EB8\u0EC9\u0E99\u0EC3\u0EDD\u0EC8 \u0EAB\u0EBC\u0EB7 \u0E9C\u0EB9\u0EC9\u0E97\u0EB5\u0EC8\u0E81\u0EB2\u0EA5\u0EB1\u0E87\u0EC0\u0EA5\u0EB5\u0EC8\u0EA1\u0E95\u0EBB\u0EC9\u0E99\u0EC0\u0EAE\u0E94\u0E97\u0EB8\u0EA5\u0EB0\u0E81\u0EB4\u0E94\u0E97\u0EB5\u0EC8\u0E95\u0EC9\u0EAD\u0E87\u0E81\u0EB2\u0E99\u0E9E\u0EB1\u0E94\u0E97\u0EB0\u0E99\u0EB2\u0E95\u0EBB\u0E99\u0EC0\u0EAD\u0E87 \u0EC1\u0EA5\u0EB0 \u0E97\u0EB8\u0EA5\u0EB0\u0E81\u0EB4\u0E94\u0EC3\u0EAB\u0EC9\u0EC0\u0E95\u0EB5\u0E9A\u0EC2\u0E95\u0EA2\u0EC8\u0EB2\u0E87 \u0E9A\u0EA2\u0EB8\u0E94\u0EA2\u0EB1\u0EC9\u0E87"
      },
      {
        name: "VISION",
        desc: "\u0E84\u0EB9\u0EC8\u0EAE\u0EC8\u0EA7\u0EA1\u0E87\u0EB2\u0E99\u0EC0\u0E9E\u0EB7\u0EC8\u0EAD\u0E84\u0EA7\u0EB2\u0EA1\u0EAA\u0EB2\u0EC0\u0EA5\u0E94\u0EC3\u0E99\u0E94\u0EC9\u0EB2\u0E99\u0E97\u0EB8\u0EA5\u0EB0\u0E81\u0EB4\u0E94 \u0EC1\u0EA5\u0EB0 \u0E81\u0EB2\u0E99\u0EC0\u0E9B\u0E99\u0E9C\u0EB9\u0EC9 \u0E9B\u0EB0\u0E81\u0EAD\u0E9A\u0E81\u0EB2\u0E99, \u0E9E\u0EA7\u0E81\u0EC0\u0EAE\u0EB2\u0EA1\u0EB8\u0EC8\u0E87\u0EDD\u0EB1\u0EC9\u0E99\u0EC3\u0E99\u0E81\u0EB2\u0E99\u0EAA\u0EBB\u0EC8\u0E87\u0EC0\u0EAA\u0EB5\u0EA1 \u0EC1\u0EA5\u0EB0 \u0EC0\u0EAA\u0EB5\u0EA1\u0EAA\u0EC9\u0EB2\u0E87 \u0E9C\u0EB9\u0EC9\u0E9B\u0EB0\u0E81\u0EAD\u0E9A\u0E81\u0EB2\u0E99\u0EA5\u0EB8\u0EC9\u0E99\u0EC3\u0EDD\u0EC8 \u0EAB\u0EBC\u0EB7 \u0E9C\u0EB9\u0EC9\u0E97\u0EB5\u0EC8\u0E81\u0EB2\u0EA5\u0EB1\u0E87\u0EC0\u0EA5\u0EB5\u0EC8\u0EA1\u0E95\u0EBB\u0EC9\u0E99\u0EC0\u0EAE\u0E94\u0E97\u0EB8\u0EA5\u0EB0\u0E81\u0EB4\u0E94\u0E97\u0EB5\u0EC8\u0E95\u0EC9\u0EAD\u0E87\u0E81\u0EB2\u0E99\u0E9E\u0EB1\u0E94\u0E97\u0EB0\u0E99\u0EB2\u0E95\u0EBB\u0E99\u0EC0\u0EAD\u0E87 \u0EC1\u0EA5\u0EB0 \u0E97\u0EB8\u0EA5\u0EB0\u0E81\u0EB4\u0E94\u0EC3\u0EAB\u0EC9\u0EC0\u0E95\u0EB5\u0E9A\u0EC2\u0E95\u0EA2\u0EC8\u0EB2\u0E87 \u0E9A\u0EA2\u0EB8\u0E94\u0EA2\u0EB1\u0EC9\u0E87"
      },
      {
        name: "MISSION",
        desc: "\u0E84\u0EB9\u0EC8\u0EAE\u0EC8\u0EA7\u0EA1\u0E87\u0EB2\u0E99\u0EC0\u0E9E\u0EB7\u0EC8\u0EAD\u0E84\u0EA7\u0EB2\u0EA1\u0EAA\u0EB2\u0EC0\u0EA5\u0E94\u0EC3\u0E99\u0E94\u0EC9\u0EB2\u0E99\u0E97\u0EB8\u0EA5\u0EB0\u0E81\u0EB4\u0E94 \u0EC1\u0EA5\u0EB0 \u0E81\u0EB2\u0E99\u0EC0\u0E9B\u0E99\u0E9C\u0EB9\u0EC9 \u0E9B\u0EB0\u0E81\u0EAD\u0E9A\u0E81\u0EB2\u0E99, \u0E9E\u0EA7\u0E81\u0EC0\u0EAE\u0EB2\u0EA1\u0EB8\u0EC8\u0E87\u0EDD\u0EB1\u0EC9\u0E99\u0EC3\u0E99\u0E81\u0EB2\u0E99\u0EAA\u0EBB\u0EC8\u0E87\u0EC0\u0EAA\u0EB5\u0EA1 \u0EC1\u0EA5\u0EB0 \u0EC0\u0EAA\u0EB5\u0EA1\u0EAA\u0EC9\u0EB2\u0E87 \u0E9C\u0EB9\u0EC9\u0E9B\u0EB0\u0E81\u0EAD\u0E9A\u0E81\u0EB2\u0E99\u0EA5\u0EB8\u0EC9\u0E99\u0EC3\u0EDD\u0EC8 \u0EAB\u0EBC\u0EB7 \u0E9C\u0EB9\u0EC9\u0E97\u0EB5\u0EC8\u0E81\u0EB2\u0EA5\u0EB1\u0E87\u0EC0\u0EA5\u0EB5\u0EC8\u0EA1\u0E95\u0EBB\u0EC9\u0E99\u0EC0\u0EAE\u0E94\u0E97\u0EB8\u0EA5\u0EB0\u0E81\u0EB4\u0E94\u0E97\u0EB5\u0EC8\u0E95\u0EC9\u0EAD\u0E87\u0E81\u0EB2\u0E99\u0E9E\u0EB1\u0E94\u0E97\u0EB0\u0E99\u0EB2\u0E95\u0EBB\u0E99\u0EC0\u0EAD\u0E87 \u0EC1\u0EA5\u0EB0 \u0E97\u0EB8\u0EA5\u0EB0\u0E81\u0EB4\u0E94\u0EC3\u0EAB\u0EC9\u0EC0\u0E95\u0EB5\u0E9A\u0EC2\u0E95\u0EA2\u0EC8\u0EB2\u0E87 \u0E9A\u0EA2\u0EB8\u0E94\u0EA2\u0EB1\u0EC9\u0E87"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(_attrs)} data-v-a46e0dc0><div class="container" data-v-a46e0dc0><h1 class="section-title margin-bottom-10" data-v-a46e0dc0>WHO ARE WE?</h1><div class="grids is-2-desktop gap-20-desktop is-1-mobile" data-v-a46e0dc0><div class="left" data-v-a46e0dc0><ul class="tabs" data-v-a46e0dc0><!--[-->`);
      ssrRenderList(unref(tabs), (i, index) => {
        _push(`<li class="${ssrRenderClass({ open: unref(selectedTab) === i.name })}" data-v-a46e0dc0><h1 data-v-a46e0dc0>${ssrInterpolate(i.name)} <i class="fa-light fa-angle-down" data-v-a46e0dc0></i></h1><p data-v-a46e0dc0>${ssrInterpolate(i.desc)}</p></li>`);
      });
      _push(`<!--]--><li data-v-a46e0dc0><h1 data-v-a46e0dc0> MORE ABOUT US<i class="fa-light fa-angle-right" data-v-a46e0dc0></i></h1></li></ul></div><div class="right" data-v-a46e0dc0><div class="image" data-v-a46e0dc0><a target="_blank" href="https://www.youtube.com/watch?v=HEg8LjkZOaQ" data-v-a46e0dc0><i class="fa-solid fa-play" data-v-a46e0dc0></i><img${ssrRenderAttr("src", _imports_0)} data-v-a46e0dc0></a></div></div></div></div></section>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/homepage/who-are-we.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const WhoWeAre = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-a46e0dc0"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "grids-layout",
  __ssrInlineRender: true,
  props: ["title", "info"],
  setup(__props) {
    const images = useNuxtApp().$imageURL;
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-e16ca813><section data-v-e16ca813><div class="container" data-v-e16ca813><h1 class="section-title" data-v-e16ca813>${ssrInterpolate(__props.title)}</h1><ul data-v-e16ca813><!--[-->`);
      ssrRenderList(__props.info, (i, index) => {
        _push(`<li data-v-e16ca813><div class="card" data-v-e16ca813><div class="card-image" data-v-e16ca813><img${ssrRenderAttr("src", unref(images) + i.coverPage)} alt="" data-v-e16ca813></div><div class="card-content" data-v-e16ca813><ul class="tag-list" data-v-e16ca813><!--[-->`);
        ssrRenderList(i.category, (c, ind) => {
          _push(`<li data-v-e16ca813><a data-v-e16ca813>${ssrInterpolate(c.name)}</a></li>`);
        });
        _push(`<!--]--></ul><h3 data-v-e16ca813>${ssrInterpolate(i.title)}</h3></div></div></li>`);
      });
      _push(`<!--]--></ul></div></section></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/homepage/grids-layout.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const SelftEmployment = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-e16ca813"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "story",
  __ssrInlineRender: true,
  props: ["info"],
  setup(__props) {
    useRouter();
    const images = useNuxtApp().$imageURL;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(_attrs)} data-v-8eaa73b2><div class="container" data-v-8eaa73b2><h1 class="section-title" data-v-8eaa73b2>Entrepreneur&#39;s Story</h1><ul data-v-8eaa73b2><!--[-->`);
      ssrRenderList(__props.info, (i, index) => {
        _push(`<li data-v-8eaa73b2><div class="card dark" data-v-8eaa73b2><div class="card-image" data-v-8eaa73b2><img${ssrRenderAttr("src", unref(images) + i.coverPage)} alt="" data-v-8eaa73b2></div><div class="card-content" data-v-8eaa73b2><p class="tag-list" data-v-8eaa73b2><!--[-->`);
        ssrRenderList(i.tag, (t, indx) => {
          _push(`<span data-v-8eaa73b2>${ssrInterpolate(t.name)}</span>`);
        });
        _push(`<!--]--><!--[-->`);
        ssrRenderList(i.category, (c, ind) => {
          _push(`<span data-v-8eaa73b2>${ssrInterpolate(c.name)}</span>`);
        });
        _push(`<!--]--></p><h3 data-v-8eaa73b2>${ssrInterpolate(i.title)}</h3></div></div></li>`);
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
const Story = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-8eaa73b2"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "event",
  __ssrInlineRender: true,
  props: ["info"],
  setup(__props) {
    const images = useNuxtApp().$imageURL;
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(_attrs)} data-v-8ac47f81><div class="container" data-v-8ac47f81><h1 class="section-title" data-v-8ac47f81>News &amp; Event</h1><ul data-v-8ac47f81><!--[-->`);
      ssrRenderList(__props.info, (i, index) => {
        _push(`<li data-v-8ac47f81><div class="card" data-v-8ac47f81><div class="card-image fullheight" data-v-8ac47f81><img${ssrRenderAttr("src", unref(images) + i.coverPage)} alt="" data-v-8ac47f81></div><div class="card-content" data-v-8ac47f81><p class="tag-list" data-v-8ac47f81><!--[-->`);
        ssrRenderList(i.tag, (t, indx) => {
          _push(`<span data-v-8ac47f81>${ssrInterpolate(t.name)}</span>`);
        });
        _push(`<!--]--><!--[-->`);
        ssrRenderList(i.category, (c, ind) => {
          _push(`<span data-v-8ac47f81>${ssrInterpolate(c.name)}</span>`);
        });
        _push(`<!--]--></p><h3 data-v-8ac47f81>${ssrInterpolate(i.title)}</h3></div></div></li>`);
      });
      _push(`<!--]--></ul></div></section>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/homepage/event.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Event = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-8ac47f81"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "biz-laws",
  __ssrInlineRender: true,
  props: ["info"],
  setup(__props) {
    const images = useNuxtApp().$imageURL;
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(_attrs)} data-v-148b25b6><div class="container" data-v-148b25b6><h1 class="section-title" data-v-148b25b6>BIZ Laws</h1><ul data-v-148b25b6><!--[-->`);
      ssrRenderList(__props.info, (i, index) => {
        _push(`<li data-v-148b25b6><div class="card" data-v-148b25b6><div class="card-image" data-v-148b25b6><img${ssrRenderAttr("src", unref(images) + i.coverPage)} alt="" data-v-148b25b6></div><div class="card-content" data-v-148b25b6><p class="tag-list" data-v-148b25b6><!--[-->`);
        ssrRenderList(i.tag, (t, indx) => {
          _push(`<span data-v-148b25b6>${ssrInterpolate(t.name)}</span>`);
        });
        _push(`<!--]--><!--[-->`);
        ssrRenderList(i.category, (c, ind) => {
          _push(`<span data-v-148b25b6>${ssrInterpolate(c.name)}</span>`);
        });
        _push(`<!--]--></p><h3 data-v-148b25b6>${ssrInterpolate(i.title)}</h3></div></div></li>`);
      });
      _push(`<!--]--></ul></div></section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/homepage/biz-laws.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const BizLaws = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-148b25b6"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const axios = useNuxtApp().$axios;
    const enterPreInfo = ref([]);
    const selftEmpInfo = ref([]);
    const sme = ref([]);
    const eventInfo = ref([]);
    const bizLawInfo = ref([]);
    const fetchSME = async () => {
      const name = "651a4c59c2d5c94d6cc3da8a";
      await axios.post(`sme-articles/${name}`).then((res) => {
        if (res.status === 200) {
          sme.value = res.data.info;
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
    const fetchEvent = async () => {
      const name = "651a4d06c2d5c94d6cc3daba";
      await axios.post(`reuse-articles/${name}`).then((res) => {
        if (res.status === 200) {
          eventInfo.value = res.data.info;
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
    [__temp, __restore] = withAsyncContext(() => fetchSME()), await __temp, __restore();
    [__temp, __restore] = withAsyncContext(() => fetchEntrepre()), await __temp, __restore();
    [__temp, __restore] = withAsyncContext(() => fetchSelftEmp()), await __temp, __restore();
    [__temp, __restore] = withAsyncContext(() => fetchEvent()), await __temp, __restore();
    [__temp, __restore] = withAsyncContext(() => fetchBizLaw()), await __temp, __restore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(Intro, null, null, _parent));
      _push(ssrRenderComponent(WhoWeAre, null, null, _parent));
      _push(ssrRenderComponent(SelftEmployment, {
        title: "SME & Startup",
        info: unref(sme),
        style: unref(sme).length ? null : { display: "none" }
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
      _push(ssrRenderComponent(Event, {
        info: unref(eventInfo),
        style: unref(eventInfo).length ? null : { display: "none" }
      }, null, _parent));
      _push(ssrRenderComponent(BizLaws, {
        info: unref(bizLawInfo),
        style: unref(bizLawInfo).length ? null : { display: "none" }
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
//# sourceMappingURL=index-4a2794e7.mjs.map
