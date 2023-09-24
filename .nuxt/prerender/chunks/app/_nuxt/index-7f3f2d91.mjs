import { b as buildAssetsURL } from '../../renderer.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr } from 'file://D:/Thebizhub/thebizhub/node_modules/vue/server-renderer/index.mjs';
import { useSSRContext, defineComponent, mergeProps, ref, unref } from 'file://D:/Thebizhub/thebizhub/node_modules/vue/index.mjs';
import { u as useRouter, _ as _export_sfc } from '../server.mjs';
import { _ as _imports_0$3 } from './img-05-a01997b4.mjs';
import 'file://D:/Thebizhub/thebizhub/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://D:/Thebizhub/thebizhub/node_modules/h3/dist/index.mjs';
import 'file://D:/Thebizhub/thebizhub/node_modules/devalue/index.js';
import 'file://D:/Thebizhub/thebizhub/node_modules/ufo/dist/index.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file://D:/Thebizhub/thebizhub/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file://D:/Thebizhub/thebizhub/node_modules/ofetch/dist/node.mjs';
import 'file://D:/Thebizhub/thebizhub/node_modules/destr/dist/index.mjs';
import 'file://D:/Thebizhub/thebizhub/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://D:/Thebizhub/thebizhub/node_modules/hookable/dist/index.mjs';
import 'file://D:/Thebizhub/thebizhub/node_modules/scule/dist/index.mjs';
import 'file://D:/Thebizhub/thebizhub/node_modules/klona/dist/index.mjs';
import 'file://D:/Thebizhub/thebizhub/node_modules/defu/dist/defu.mjs';
import 'file://D:/Thebizhub/thebizhub/node_modules/ohash/dist/index.mjs';
import 'file://D:/Thebizhub/thebizhub/node_modules/unstorage/dist/index.mjs';
import 'file://D:/Thebizhub/thebizhub/node_modules/unstorage/drivers/fs.mjs';
import 'file://D:/Thebizhub/thebizhub/node_modules/radix3/dist/index.mjs';
import 'file://D:/Thebizhub/thebizhub/node_modules/unctx/dist/index.mjs';
import 'file://D:/Thebizhub/thebizhub/node_modules/@unhead/ssr/dist/index.mjs';
import 'file://D:/Thebizhub/thebizhub/node_modules/unhead/dist/index.mjs';
import 'file://D:/Thebizhub/thebizhub/node_modules/@unhead/shared/dist/index.mjs';
import 'file://D:/Thebizhub/thebizhub/node_modules/vue-router/dist/vue-router.node.mjs';

const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "intro",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section" }, _attrs))} data-v-7a1572a2><div class="container" data-v-7a1572a2><div class="grids gap-20 is-5-desktop is-1-mobile" data-v-7a1572a2><div class="left span-2" data-v-7a1572a2><div class="intro" data-v-7a1572a2><h1 data-v-7a1572a2>THE BIZ HUB</h1><h3 data-v-7a1572a2> Partner for success <br class="is-hidden-mobile" data-v-7a1572a2> in business and <br class="is-hidden-mobile" data-v-7a1572a2> entrepreneurship </h3><button class="main margin-top-20 large" data-v-7a1572a2> Update </button></div></div><div class="right span-3" data-v-7a1572a2><ul class="grids gap-10 is-2-desktop is-1-mobile" data-v-7a1572a2><li data-v-7a1572a2><div class="course-info" data-v-7a1572a2><h3 data-v-7a1572a2>BIZ COACHING</h3><p data-v-7a1572a2> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut quibusdam quia recusandae illo rerum voluptates, consequatur fugiat repudiandae cum labore nobis praesentium voluptate hic. Eos, dolorem! Inventore, vitae! At, ipsa. </p></div></li><li data-v-7a1572a2><div class="course-info" data-v-7a1572a2><h3 data-v-7a1572a2>BIZ EVENTS</h3><p data-v-7a1572a2> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut quibusdam quia recusandae illo rerum voluptates, consequatur fugiat repudiandae cum labore nobis praesentium voluptate hic. Eos, dolorem! Inventore, vitae! At, ipsa. </p></div></li><li data-v-7a1572a2><div class="course-info" data-v-7a1572a2><h3 data-v-7a1572a2>BIZ TOOLS</h3><p data-v-7a1572a2> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut quibusdam quia recusandae illo rerum voluptates, consequatur fugiat repudiandae cum labore nobis praesentium voluptate hic. Eos, dolorem! Inventore, vitae! At, ipsa. </p></div></li><li data-v-7a1572a2><div class="course-info" data-v-7a1572a2><h3 data-v-7a1572a2>BIZ COURSES</h3><p data-v-7a1572a2> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut quibusdam quia recusandae illo rerum voluptates, consequatur fugiat repudiandae cum labore nobis praesentium voluptate hic. Eos, dolorem! Inventore, vitae! At, ipsa. </p></div></li></ul></div></div></div></section>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/homepage/intro.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const Intro = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-7a1572a2"]]);
const _imports_0$2 = "" + buildAssetsURL("about.faed9c12.png");
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "who-are-we",
  __ssrInlineRender: true,
  setup(__props) {
    const selectedTab = ref();
    const tabs = ref([
      {
        name: "WHO WE ARE?",
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
      _push(`<section${ssrRenderAttrs(_attrs)} data-v-b12d4e53><div class="container" data-v-b12d4e53><h1 class="section-title margin-bottom-10" data-v-b12d4e53>WHO ARE WE?</h1><div class="grids is-2-desktop gap-20 is-1-mobile" data-v-b12d4e53><div class="left" data-v-b12d4e53><ul class="tabs" data-v-b12d4e53><!--[-->`);
      ssrRenderList(unref(tabs), (i, index) => {
        _push(`<li class="${ssrRenderClass({ open: unref(selectedTab) === i.name })}" data-v-b12d4e53><h1 data-v-b12d4e53>${ssrInterpolate(i.name)} <i class="fa-light fa-angle-down" data-v-b12d4e53></i></h1><p data-v-b12d4e53>${ssrInterpolate(i.desc)}</p></li>`);
      });
      _push(`<!--]--><li data-v-b12d4e53><h1 data-v-b12d4e53>MORE ABOUT US<i class="fa-light fa-angle-right" data-v-b12d4e53></i></h1></li></ul></div><div class="right" data-v-b12d4e53><div class="image" data-v-b12d4e53><img${ssrRenderAttr("src", _imports_0$2)} alt="" data-v-b12d4e53></div></div></div></div></section>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/homepage/who-are-we.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const WhoWeAre = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-b12d4e53"]]);
const _imports_0$1 = "" + buildAssetsURL("img-06.d615458b.jpg");
const _sfc_main$4 = {
  __name: "grids-layout",
  __ssrInlineRender: true,
  props: ["title"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(_attrs)} data-v-8f8de589><div class="container" data-v-8f8de589><h1 class="section-title" data-v-8f8de589>${ssrInterpolate(__props.title)}</h1><ul data-v-8f8de589><!--[-->`);
      ssrRenderList(5, (index, i) => {
        _push(`<li data-v-8f8de589><div class="card" data-v-8f8de589><div class="card-image" data-v-8f8de589><img${ssrRenderAttr("src", _imports_0$1)} alt="" data-v-8f8de589></div><div class="card-content" data-v-8f8de589><p class="tag-list" data-v-8f8de589><span data-v-8f8de589>Learning</span><span data-v-8f8de589>SME &amp; Startup</span></p><h3 data-v-8f8de589>Home / NETWORK (Wireless) / Range extender &amp; mesh wifi / Whole-home mesh tp-link (deco e4) wireless ac1200 dual band (pack 2)</h3></div></div></li>`);
      });
      _push(`<!--]--></ul></div></section>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/homepage/grids-layout.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const SelftEmployment = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-8f8de589"]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(_attrs)} data-v-0ef6a637><div class="container" data-v-0ef6a637><h1 class="section-title" data-v-0ef6a637>Entrepreneur&#39;s Story</h1><ul data-v-0ef6a637><!--[-->`);
  ssrRenderList(3, (i, index) => {
    _push(`<li data-v-0ef6a637><div class="card dark" data-v-0ef6a637><div class="card-image" data-v-0ef6a637><img${ssrRenderAttr("src", _imports_0$3)} alt="" data-v-0ef6a637></div><div class="card-content" data-v-0ef6a637><p class="tag-list" data-v-0ef6a637><span data-v-0ef6a637>Learning</span><span data-v-0ef6a637>SME &amp; Startup</span></p><h3 data-v-0ef6a637>Home / NETWORK (Wireless) / Range extender &amp; mesh wifi / Whole-home mesh tp-link (deco e4) wireless ac1200 dual band (pack 2) </h3></div></div></li>`);
  });
  _push(`<!--]--></ul></div></section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/homepage/story.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Story = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-0ef6a637"]]);
const _imports_0 = "" + buildAssetsURL("event1.d5edfd8e.png");
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(_attrs)} data-v-c96181be><div class="container" data-v-c96181be><h1 class="section-title" data-v-c96181be>News &amp; Event</h1><ul data-v-c96181be><!--[-->`);
  ssrRenderList(3, (i, index) => {
    _push(`<li data-v-c96181be><div class="card" data-v-c96181be><div class="card-image fullheight" data-v-c96181be><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-c96181be></div><div class="card-content" data-v-c96181be><p class="tag-list" data-v-c96181be><span data-v-c96181be>Learning</span><span data-v-c96181be>SME &amp; Startup</span></p><h3 data-v-c96181be>Home / NETWORK (Wireless) / Range extender &amp; mesh wifi / Whole-home mesh tp-link (deco e4) wireless ac1200 dual band (pack 2) </h3></div></div></li>`);
  });
  _push(`<!--]--></ul></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/homepage/event.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Event = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-c96181be"]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(_attrs)} data-v-b3494950><div class="container" data-v-b3494950><h1 class="section-title" data-v-b3494950>BIZ Laws</h1><ul data-v-b3494950><!--[-->`);
  ssrRenderList(3, (i, index) => {
    _push(`<li data-v-b3494950><div class="card" data-v-b3494950><div class="card-image" data-v-b3494950><img${ssrRenderAttr("src", _imports_0$3)} alt="" data-v-b3494950></div><div class="card-content" data-v-b3494950><p class="tag-list" data-v-b3494950><span data-v-b3494950>Learning</span><span data-v-b3494950>SME &amp; Startup</span></p><h3 data-v-b3494950>Home / NETWORK (Wireless) / Range extender &amp; mesh wifi / Whole-home mesh tp-link (deco e4) wireless ac1200 dual band (pack 2) </h3></div></div></li>`);
  });
  _push(`<!--]--></ul></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/homepage/biz-laws.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const BizLaws = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-b3494950"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(Intro, null, null, _parent));
      _push(ssrRenderComponent(WhoWeAre, null, null, _parent));
      _push(ssrRenderComponent(SelftEmployment, { title: "SME & Startup" }, null, _parent));
      _push(ssrRenderComponent(Story, null, null, _parent));
      _push(ssrRenderComponent(SelftEmployment, { title: "Self - Employment" }, null, _parent));
      _push(ssrRenderComponent(Event, null, null, _parent));
      _push(ssrRenderComponent(BizLaws, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-7f3f2d91.mjs.map
