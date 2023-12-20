import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useSSRContext, defineComponent, unref, withCtx, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _imports_0 } from './biz-course-3b1421a5.mjs';
import patternDivider from './pattern-fc7bb63a.mjs';
import { _ as _export_sfc } from '../server.mjs';
import 'vue-bundle-renderer/runtime';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import 'fs';
import 'path';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'axios';
import 'vue-i18n';

const _imports_1 = "" + buildAssetsURL("1.1ddedb30.png");
const _imports_2 = "" + buildAssetsURL("2.de8da712.png");
const _imports_3 = "" + buildAssetsURL("3.bf01febe.png");
const _imports_4 = "" + buildAssetsURL("4.9670781e.png");
const _imports_5 = "" + buildAssetsURL("5.6d3ec7b1.png");
const _imports_6 = "" + buildAssetsURL("biz-course-element-1.40b8274c.png");
const _imports_7 = "" + buildAssetsURL("biz-course-1.b46c5bdc.png");
const _imports_8 = "" + buildAssetsURL("biz-course-2.719a2d36.png");
const _imports_9 = "" + buildAssetsURL("biz-course-3.f4622010.png");
const _imports_10 = "" + buildAssetsURL("biz-course-4.ea09e4de.png");
const _imports_11 = "" + buildAssetsURL("biz-course-5.b6ae4e69.jpg");
const _imports_12 = "" + buildAssetsURL("biz-course-6.0072bdbc.jpg");
const _imports_13 = "" + buildAssetsURL("biz-course-7.de8b7cce.jpg");
const _imports_14 = "" + buildAssetsURL("biz-course-8.6e93f714.jpg");
const _imports_15 = "" + buildAssetsURL("biz-course-9.96154596.jpg");
const _imports_16 = "" + buildAssetsURL("biz-course-10.c238a61d.jpg");
const _imports_17 = "" + buildAssetsURL("biz-course-11.8cdd5be1.jpg");
const _imports_18 = "" + buildAssetsURL("biz-course-12.93c3cd71.jpg");
const _imports_19 = "" + buildAssetsURL("biz-course-13.090f23c9.jpg");
const _imports_20 = "" + buildAssetsURL("biz-course-14.6f9c8cee.jpg");
const _imports_21 = "" + buildAssetsURL("biz-course-15.617cf397.jpg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "biz-course",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Swiper = Swiper;
      const _component_SwiperSlide = SwiperSlide;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-86320f2a><section data-v-86320f2a><div class="container video-container" data-v-86320f2a><div class="grids is-2-desktop gap-30-desktop is-1-mobile gap-10-mobile" data-v-86320f2a><div class="image" data-v-86320f2a><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-86320f2a></div><div class="text" data-v-86320f2a><h3 data-v-86320f2a>BIZ Courses \u0EC1\u0EA1\u0EC8\u0E99\u2026</h3> BIZ Courses \u0EC1\u0EA1\u0EC8\u0E99\u2026 \u0EAB\u0EBC\u0EB1\u0E81\u0EAA\u0EB9\u0E94\u0E81\u0EB2\u0E99\u0E9D\u0EB6\u0E81\u0EAD\u0EBB\u0E9A\u0EAE\u0EBB\u0EA1\u0E97\u0EB2\u0E87\u0E97\u0EB8\u0EA5\u0EB0\u0E81\u0EB4\u0E94 \u0EC4\u0EA5\u0E8D\u0EB0\u0EAA\u0EB1\u0EC9\u0E99 \u0EC0\u0E9E\u0EB7\u0EC8\u0EAD\u0E81\u0EBD\u0EA1\u0E84\u0EA7\u0EB2\u0EA1\u0E9E\u0EC9\u0EAD\u0EA1\u0EC3\u0EAB\u0EC9\u0E81\u0EB1\u0E9A\u0E9C\u0EB9\u0EC9\u0E9B\u0EB0\u0E81\u0EAD\u0E9A\u0E81\u0EB2\u0E99\u0E82\u0EB1\u0EC9\u0E99\u0EC0\u0EA5\u0EB5\u0EC8\u0EA1\u0E95\u0EBB\u0EC9\u0E99 \u0EC1\u0EA5\u0EB0 \u0EA7\u0EC8\u0EB2\u0E97\u0EB5\u0EC8\u0E9C\u0EB9\u0EC9\u0E9B\u0EB0\u0E81\u0EAD\u0E9A\u0E81\u0EB2\u0E99 \u0E97\u0EB5\u0EC8\u0EC0\u0E99\u0EB1\u0EC9\u0E99\u0EDC\u0EB1\u0E81\u0E81\u0EB2\u0E99\u0E9E\u0EB1\u0E94\u0E97\u0EB0\u0E99\u0EB2\u0E84\u0EA7\u0EB2\u0EA1\u0EAE\u0EB9\u0EC9\u0E84\u0EA7\u0EB2\u0EA1\u0EAA\u0EB2\u0EA1\u0EB2\u0E94, \u0E9D\u0EB6\u0E81\u0E9D\u0EBB\u0E99\u0E81\u0EB2\u0E99\u0E84\u0EB4\u0E94\u0EA7\u0EB4\u0EC0\u0E84\u0EB2\u0EB0, \u0EA7\u0EB2\u0E87\u0EC1\u0E9C\u0E99 \u0EC1\u0EA5\u0EB0 \u0E81\u0EBD\u0EA1\u0E84\u0EA7\u0EB2\u0EA1\u0E9E\u0EC9\u0EAD\u0EA1\u0EA2\u0EC8\u0EB2\u0E87\u0EC0\u0EDD\u0EB2\u0EB0\u0EAA\u0EBB\u0EA1 \u0EC0\u0E9E\u0EB7\u0EC8\u0EAD\u0EAB\u0EBC\u0EB8\u0E94\u0E9C\u0EC8\u0EAD\u0E99\u0E84\u0EA7\u0EB2\u0EA1\u0EAA\u0EC8\u0EBD\u0E87 \u0EC1\u0EA5\u0EB0 \u0EC0\u0E9E\u0EB5\u0EC8\u0EA1\u0EC2\u0EAD\u0E81\u0EB2\u0E94\u0EC3\u0E99\u0E81\u0EB2\u0E99\u0E9B\u0EB0\u0E81\u0EAD\u0E9A\u0E97\u0EB8\u0EA5\u0EB0\u0E81\u0EB4\u0E94\u0EC3\u0EAB\u0EC9\u0E9B\u0EB0\u0EAA\u0EBB\u0E9A\u0E9C\u0EBB\u0E99\u0EAA\u0EB3\u0EC0\u0EA5\u0EB1\u0E94\u0EAB\u0EBC\u0EB2\u0E8D\u0E82\u0EB6\u0EC9\u0E99. </div></div></div></section><section data-v-86320f2a><div class="container" data-v-86320f2a><blockquote data-v-86320f2a><i class="fa-duotone fa-quote-left" data-v-86320f2a></i><h3 data-v-86320f2a> BIZ Courses ( \u0EAB\u0EBC\u0EB1\u0E81\u0EAA\u0EB9\u0E94\u0E9D\u0EB6\u0E81\u0EAD\u0EBB\u0E9A\u0EAE\u0EBB\u0EA1\u0E97\u0EB2\u0E87\u0E97\u0EB8\u0EA5\u0EB0\u0E81\u0EB4\u0E94 ) \u0EC0\u0E81\u0EB5\u0E94\u0E82\u0EB6\u0EC9\u0E99\u0EA1\u0EB2\u0EC4\u0E94\u0EC9\u0EC1\u0E99\u0EA7\u0EC3\u0E94 ? </h3> \u0EC0\u0E99\u0EB7\u0EC8\u0EAD\u0E87\u0E88\u0EB2\u0E81\u0EAB\u0EBC\u0EB2\u0E8D\u0E9B\u0EB1\u0E94\u0EC4\u0E88 \u0E97\u0EB2\u0E87\u0E94\u0EC9\u0EB2\u0E99\u0EAA\u0EB0\u0E9E\u0EB2\u0E9A\u0EC0\u0EAA\u0E94\u0E96\u0EB0\u0E81\u0EB4\u0E94-\u0EAA\u0EB1\u0E87\u0E84\u0EBB\u0EA1 \u0EC1\u0EA5\u0EB0 \u0E81\u0EB2\u0E99\u0EC0\u0E9B\u0EB1\u0E99\u0EA2\u0EB9\u0EC8 \u0E97\u0EB5\u0EC8\u0EA1\u0EB5\u0E81\u0EB2\u0E99\u0E9B\u0EC8\u0EBD\u0E99\u0EC1\u0E9B\u0E87\u0EA2\u0EC8\u0EB2\u0E87\u0E9A\u0ECD\u0EC8\u0EA2\u0EB8\u0E94\u0E99\u0EB4\u0EC9\u0E87 \u0E97\u0EB5\u0EC8\u0E95\u0EC9\u0EAD\u0E87\u0EAD\u0EB2\u0EC4\u0EAA\u0E81\u0EB2\u0E99\u0E9B\u0EB1\u0E9A\u0E95\u0EBB\u0EA7\u0EC3\u0EAB\u0EC9\u0E97\u0EB1\u0E99\u0E81\u0EB1\u0E9A\u0EAA\u0EB0\u0E96\u0EB2\u0E99\u0EB0\u0E81\u0EB2\u0E99, \u0EC1\u0E99\u0EA7\u0EC2\u0E99\u0EC9\u0EA1\u0EC3\u0E99\u0E81\u0EB2\u0E99\u0E9B\u0EB0\u0E81\u0EAD\u0E9A\u0EAD\u0EB2\u0E8A\u0EB5\u0E9A\u0E82\u0EAD\u0E87\u0E9C\u0EB9\u0EC9\u0E84\u0EBB\u0E99 \u0E88\u0EB6\u0EC8\u0E87\u0EC0\u0EA5\u0EB5\u0EC8\u0EA1\u0EA1\u0EB5\u0E81\u0EB2\u0E99\u0E9B\u0EC8\u0EBD\u0E99\u0EC1\u0E9B\u0E87\u0EC4\u0E9B. \u0E9B\u0EB1\u0E94\u0E88\u0EB8\u0E9A\u0EB1\u0E99, \u0EAE\u0EB9\u0E9A\u0EC1\u0E9A\u0E9A\u0E81\u0EB2\u0E99\u0E9B\u0EB0\u0E81\u0EAD\u0E9A\u0EAD\u0EB2\u0E8A\u0EB5\u0E9A\u0EA1\u0EB5\u0EA2\u0EB9\u0EC8\u0EAB\u0EBC\u0EB2\u0E81\u0EAB\u0EBC\u0EB2\u0E8D \u0EC1\u0E95\u0EC8\u0EC3\u0E99\u0E99\u0EB1\u0EC9\u0E99\u0EAE\u0EB9\u0E9A\u0EC1\u0E9A\u0E9A\u0E97\u0EB5\u0EC8\u0E9C\u0EB9\u0EC9\u0E84\u0EBB\u0E99\u0EA1\u0EB5\u0EC1\u0E99\u0EA7\u0EC2\u0E99\u0EC9\u0EA1\u0EC3\u0EAB\u0EC9\u0E84\u0EA7\u0EB2\u0EA1\u0EAA\u0EBB\u0E99\u0EC3\u0E88\u0EAA\u0EB9\u0E87 \u0EC1\u0EA5\u0EB0 \u0EA2\u0EB2\u0E81\u0EAB\u0EB1\u0E99\u0EA1\u0EB2\u0EC0\u0EAE\u0EB1\u0E94\u0EC0\u0E9E\u0EB5\u0EC8\u0EA1\u0E82\u0EB6\u0EC9\u0E99\u0EC0\u0EA5\u0EB7\u0EC9\u0EAD\u0E8D\u0EC6 \u0E81\u0ECD\u0EC1\u0EA1\u0EC8\u0E99 \u0E81\u0EB2\u0E99\u0EA1\u0EB5\u0E97\u0EB8\u0EA5\u0EB0\u0E81\u0EB4\u0E94\u0EC0\u0E9B\u0EB1\u0E99\u0E82\u0EAD\u0E87\u0E95\u0EBB\u0E99\u0EC0\u0EAD\u0E87 \u0EAB\u0EBC\u0EB7 \u0EC0\u0E9B\u0EB1\u0E99\u0E9C\u0EB9\u0EC9\u0E9B\u0EB0\u0E81\u0EAD\u0E9A\u0E81\u0EB2\u0E99, \u0EAA\u0EB3\u0EA5\u0EB1\u0E9A\u0E9C\u0EB9\u0EC9\u0E97\u0EB5\u0EC8\u0EC0\u0EAE\u0EB1\u0E94\u0EA7\u0EBD\u0E81\u0E9B\u0EB0\u0E88\u0EB3\u0EA2\u0EB9\u0EC8 \u0E81\u0ECD\u0EA1\u0EB5\u0E84\u0EA7\u0EB2\u0EA1\u0E95\u0EC9\u0EAD\u0E87\u0E81\u0EB2\u0E99\u0EA2\u0EB2\u0E81\u0EA1\u0EB5\u0EAD\u0EB2\u0E8A\u0EB5\u0E9A\u0EAA\u0EB3\u0EAE\u0EAD\u0E87 \u0EC0\u0E9B\u0EB1\u0E99\u0E8A\u0EC8\u0EAD\u0E87\u0E97\u0EB2\u0E87\u0EAB\u0EB2\u0EA5\u0EB2\u0E8D\u0EC4\u0E94\u0EC9\u0EC0\u0EAA\u0EB5\u0EA1, \u0EA5\u0EA7\u0EA1\u0EC4\u0E9B\u0EC0\u0E96\u0EB4\u0E87\u0E9C\u0EB9\u0EC9\u0EA7\u0EC8\u0EB2\u0E87\u0E87\u0EB2\u0E99 \u0E97\u0EB5\u0EC8\u0EA1\u0EB5\u0E84\u0EA7\u0EB2\u0EA1\u0E95\u0EC9\u0EAD\u0E87\u0E81\u0EB2\u0E99\u0EA2\u0EB2\u0E81\u0E9B\u0EB0\u0E81\u0EAD\u0E9A\u0EAD\u0EB2\u0E8A\u0EB5\u0E9A\u0E94\u0EC9\u0EA7\u0E8D\u0E95\u0EBB\u0E99\u0EC0\u0EAD\u0E87 \u0EC1\u0E95\u0EC8\u0E81\u0ECD\u0E9A\u0ECD\u0EC8\u0EC1\u0EA1\u0EC8\u0E99\u0EA7\u0EC8\u0EB2\u0E97\u0EB8\u0E81\u0E84\u0EBB\u0E99\u0E88\u0EB0\u0E9B\u0EB0\u0EAA\u0EBB\u0E9A\u0E84\u0EA7\u0EB2\u0EA1\u0EAA\u0EB3\u0EC0\u0EA5\u0EB1\u0E94 \u0EAB\u0EB2\u0E81\u0E82\u0EB2\u0E94\u0E81\u0EB2\u0E99\u0EA7\u0EB4\u0EC0\u0E84\u0EB2\u0EB0, \u0EA7\u0EB2\u0E87\u0EC1\u0E9C\u0E99 \u0EC1\u0EA5\u0EB0 \u0E81\u0EBD\u0EA1\u0E84\u0EA7\u0EB2\u0EA1\u0E9E\u0EC9\u0EAD\u0EA1\u0E97\u0EB5\u0EC8\u0E94\u0EB5. \u0E94\u0EB1\u0EC8\u0E87\u0E99\u0EB1\u0EC9\u0E99, BIZ Courses \u0EAB\u0EBC\u0EB7 \u0EAB\u0EBC\u0EB1\u0E81\u0EAA\u0EB9\u0E94\u0E9D\u0EB6\u0E81\u0EAD\u0EBB\u0E9A\u0EAE\u0EBB\u0EA1\u0E97\u0EB2\u0E87\u0E97\u0EB8\u0EA5\u0EB0\u0E81\u0EB4\u0E94 \u0EC4\u0EA5\u0E8D\u0EB0\u0EAA\u0EB1\u0EC9\u0E99 \u0E88\u0EB6\u0EC8\u0E87\u0EA1\u0EB5\u0E84\u0EA7\u0EB2\u0EA1\u0EAA\u0EB3\u0E84\u0EB1\u0E99\u0EAB\u0EBC\u0EB2\u0E8D \u0EC0\u0E9E\u0EB7\u0EC8\u0EAD\u0E81\u0EBD\u0EA1\u0E84\u0EA7\u0EB2\u0EA1\u0E9E\u0EC9\u0EAD\u0EA1\u0EC3\u0EAB\u0EC9\u0E81\u0EB1\u0E9A\u0E9C\u0EB9\u0EC9\u0E9B\u0EB0\u0E81\u0EAD\u0E9A\u0E81\u0EB2\u0E99\u0E82\u0EB1\u0EC9\u0E99\u0EC0\u0EA5\u0EB5\u0EC8\u0EA1\u0E95\u0EBB\u0EC9\u0E99 \u0EC1\u0EA5\u0EB0 \u0EA7\u0EC8\u0EB2\u0E97\u0EB5\u0EC8\u0E9C\u0EB9\u0EC9\u0E9B\u0EB0\u0E81\u0EAD\u0E9A\u0E81\u0EB2\u0E99. </blockquote></div></section><section data-v-86320f2a><div class="container" data-v-86320f2a><div class="grids is-5-desktop gap-10-desktop" data-v-86320f2a><div class="element" data-v-86320f2a><img${ssrRenderAttr("src", _imports_1)} data-v-86320f2a><p data-v-86320f2a>\u0EA7\u0EC8\u0EB2\u0E97\u0EB5\u0EC8\u0E9C\u0EB9\u0EC9\u0E9B\u0EB0\u0E81\u0EAD\u0E9A\u0E81\u0EB2\u0E99</p><p data-v-86320f2a>(Future Entrepreneur)</p></div><div class="element" data-v-86320f2a><img${ssrRenderAttr("src", _imports_2)} alt="" data-v-86320f2a><p data-v-86320f2a>\u0E9C\u0EB9\u0EC9\u0E9B\u0EB0\u0E81\u0EAD\u0E9A\u0EAD\u0EB2\u0E8A\u0EB5\u0E9A\u0E94\u0EC9\u0EA7\u0E8D\u0E95\u0EBB\u0E99\u0EC0\u0EAD\u0E87</p><p data-v-86320f2a>(Self-employed)</p></div><div class="element" data-v-86320f2a><img${ssrRenderAttr("src", _imports_3)} alt="" data-v-86320f2a><p data-v-86320f2a>\u0E9C\u0EB9\u0EC9\u0E9B\u0EB0\u0E81\u0EAD\u0E9A\u0E81\u0EB2\u0E99\u0EC3\u0EDD\u0EC8</p><p data-v-86320f2a>(New entrepreneur)</p></div><div class="element" data-v-86320f2a><img${ssrRenderAttr("src", _imports_4)} alt="" data-v-86320f2a><p data-v-86320f2a>\u0E88\u0EB8\u0E99\u0EA5\u0EB0\u0EA7\u0EB4\u0EAA\u0EB2\u0EAB\u0EB0\u0E81\u0EB4\u0E94</p><p data-v-86320f2a>(Micro entreprise)</p></div><div class="element" data-v-86320f2a><img${ssrRenderAttr("src", _imports_5)} alt="" data-v-86320f2a><p data-v-86320f2a>\u0EA7\u0EB4\u0EAA\u0EB2\u0EAB\u0EB0\u0E81\u0EB4\u0E94\u0E82\u0EB0\u0EDC\u0EB2\u0E94\u0E99\u0EC9\u0EAD\u0E8D</p><p data-v-86320f2a>(Small entreprise)</p></div></div></div></section><section data-v-86320f2a><div class="container" data-v-86320f2a>`);
      _push(ssrRenderComponent(patternDivider, { style: { "margin-bottom": "30px" } }, null, _parent));
      _push(`<div class="grids is-12-desktop gap-50-desktop" data-v-86320f2a><div class="span-5-desktop" data-v-86320f2a><img${ssrRenderAttr("src", _imports_6)} alt="" data-v-86320f2a></div><div class="takeaway span-7-desktop" data-v-86320f2a><h3 data-v-86320f2a>\u0EC0\u0E82\u0EBB\u0EC9\u0EB2\u0EAE\u0EC8\u0EA7\u0EA1 BIZ Courses \u0E88\u0EB0\u0EC4\u0E94\u0EC9\u0EAB\u0E8D\u0EB1\u0E87?</h3><p data-v-86320f2a>\u0E97\u0EB8\u0E81\u0EAB\u0EBC\u0EB1\u0E81\u0EAA\u0EB9\u0E94\u0E82\u0EAD\u0E87 BIZ Courses, \u0E9C\u0EB9\u0EC9\u0EC0\u0E82\u0EBB\u0EC9\u0EB2\u0EAE\u0EC8\u0EA7\u0EA1\u0E9D\u0EB6\u0E81 \u0E95\u0EB2\u0EA1\u0EC0\u0E87\u0EB7\u0EC8\u0EAD\u0E99\u0EC4\u0E82* \u0E88\u0EB0\u0EC4\u0E94\u0EC9</p><ul data-v-86320f2a><li data-v-86320f2a><i class="fa-solid fa-square-check" data-v-86320f2a></i><p data-v-86320f2a> \u0E9E\u0EB1\u0E94\u0E97\u0EB0\u0E99\u0EB2\u0E84\u0EA7\u0EB2\u0EA1\u0EAE\u0EB9\u0EC9\u0E84\u0EA7\u0EB2\u0EA1\u0EAA\u0EB2\u0EA1\u0EB2\u0E94, \u0E9D\u0EB6\u0E81\u0E9D\u0EBB\u0E99\u0E81\u0EB2\u0E99\u0E84\u0EB4\u0E94\u0EA7\u0EB4\u0EC0\u0E84\u0EB2\u0EB0, \u0EA7\u0EB2\u0E87\u0EC1\u0E9C\u0E99 \u0EC1\u0EA5\u0EB0 \u0E81\u0EBD\u0EA1\u0E84\u0EA7\u0EB2\u0EA1\u0E9E\u0EC9\u0EAD\u0EA1\u0EA2\u0EC8\u0EB2\u0E87\u0EC0\u0EDD\u0EB2\u0EB0\u0EAA\u0EBB\u0EA1 \u0E9C\u0EC8\u0EB2\u0E99\u0E82\u0EB0\u0E9A\u0EA7\u0E99\u0E81\u0EB2\u0E99 \u0EC1\u0EA5\u0EB0 \u0E82\u0EB1\u0EC9\u0E99\u0E95\u0EAD\u0E99\u0E81\u0EB4\u0E94\u0E88\u0EB0\u0E81\u0EB3\u0E81\u0EB2\u0E99\u0E9D\u0EB6\u0E81\u0EAD\u0EBB\u0E9A\u0EAE\u0EBB\u0EA1 (Competency development) </p></li><li data-v-86320f2a><i class="fa-solid fa-square-check" data-v-86320f2a></i><p data-v-86320f2a> \u0EC0\u0E84\u0EB7\u0EC8\u0EAD\u0E87\u0EA1\u0EB7\u0E97\u0EB5\u0EC8\u0EC0\u0E9B\u0EB1\u0E99\u0E9B\u0EB0\u0EC2\u0EAB\u0E8D\u0E94 \u0EC0\u0E9E\u0EB7\u0EC8\u0EAD\u0E99\u0EB3\u0EC4\u0E9B\u0E9E\u0EB1\u0E94\u0E97\u0EB0\u0E99\u0EB2\u0E97\u0EB8\u0EA5\u0EB0\u0E81\u0EB4\u0E94 (Business tools) </p></li><li data-v-86320f2a><i class="fa-solid fa-square-check" data-v-86320f2a></i><p data-v-86320f2a>\u0E9E\u0EB1\u0E94\u0E97\u0EB0\u0E99\u0EB2\u0EC1\u0E99\u0EA7\u0E84\u0EA7\u0EB2\u0EA1\u0E84\u0EB4\u0E94\u0EC1\u0E9A\u0E9A\u0E9C\u0EB9\u0EC9\u0E9B\u0EB0\u0E81\u0EAD\u0E9A\u0E81\u0EB2\u0E99 (Entrepreneurial mindset)</p></li><li data-v-86320f2a><i class="fa-solid fa-square-check" data-v-86320f2a></i><p data-v-86320f2a> \u0E99\u0EB3\u0EC3\u0E8A\u0EC9\u0EAA\u0EB4\u0EC8\u0E87\u0E97\u0EB5\u0EC8\u0EC4\u0E94\u0EC9\u0EAE\u0EB1\u0E9A\u0E88\u0EB2\u0E81\u0E81\u0EB2\u0E99\u0E9D\u0EB6\u0E81\u0EC4\u0E9B\u0E99\u0EB3\u0EC3\u0E8A\u0EC9 \u0EC0\u0E9E\u0EB7\u0EC8\u0EAD\u0EAB\u0EBC\u0EB8\u0E94\u0E9C\u0EC8\u0EAD\u0E99\u0E84\u0EA7\u0EB2\u0EA1\u0EAA\u0EC8\u0EBD\u0E87 \u0EC1\u0EA5\u0EB0 \u0EC0\u0E9E\u0EB5\u0EC8\u0EA1\u0EC2\u0EAD\u0E81\u0EB2\u0E94\u0EC3\u0E99\u0E81\u0EB2\u0E99\u0E9B\u0EB0\u0E81\u0EAD\u0E9A\u0E97\u0EB8\u0EA5\u0EB0\u0E81\u0EB4\u0E94\u0EC3\u0EAB\u0EC9\u0E9B\u0EB0\u0EAA\u0EBB\u0E9A\u0E9C\u0EBB\u0E99\u0EAA\u0EB3\u0EC0\u0EA5\u0EB1\u0E94\u0EAB\u0EBC\u0EB2\u0E8D\u0E82\u0EB6\u0EC9\u0E99 (Application) </p></li><li data-v-86320f2a><i class="fa-solid fa-square-check" data-v-86320f2a></i><p data-v-86320f2a> \u0EAE\u0EB1\u0E9A\u0EC3\u0E9A\u0EA2\u0EB1\u0EC9\u0E87\u0EA2\u0EB7\u0E99\u0E81\u0EB2\u0E99\u0EC0\u0E82\u0EBB\u0EC9\u0EB2\u0EAE\u0EC8\u0EA7\u0EA1\u0E9D\u0EB6\u0E81\u0EAD\u0EBB\u0E9A\u0EAE\u0EBB\u0EA1 \u0E88\u0EB2\u0E81\u0E9C\u0EB9\u0EC9\u0E88\u0EB1\u0E94 (Certificate of Participation) </p></li></ul></div></div>`);
      _push(ssrRenderComponent(patternDivider, { style: { "margin-top": "30px" } }, null, _parent));
      _push(`</div></section><section data-v-86320f2a><div class="container" data-v-86320f2a><div class="gallery" data-v-86320f2a><h3 data-v-86320f2a>\u0E9C\u0EBB\u0E99\u0E87\u0EB2\u0E99\u0E97\u0EB5\u0EC8\u0E9C\u0EC8\u0EB2\u0E99\u0EA1\u0EB2</h3>`);
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
                  _push3(`<img${ssrRenderAttr("src", _imports_7)} data-v-86320f2a${_scopeId2}>`);
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
                  _push3(`<img${ssrRenderAttr("src", _imports_8)} data-v-86320f2a${_scopeId2}>`);
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
                  _push3(`<img${ssrRenderAttr("src", _imports_9)} data-v-86320f2a${_scopeId2}>`);
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
                  _push3(`<img${ssrRenderAttr("src", _imports_10)} data-v-86320f2a${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", { src: _imports_10 })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_SwiperSlide, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_11)} data-v-86320f2a${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", { src: _imports_11 })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_SwiperSlide, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_12)} data-v-86320f2a${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", { src: _imports_12 })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_SwiperSlide, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_13)} data-v-86320f2a${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", { src: _imports_13 })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_SwiperSlide, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_14)} data-v-86320f2a${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", { src: _imports_14 })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_SwiperSlide, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_15)} data-v-86320f2a${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", { src: _imports_15 })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_SwiperSlide, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_16)} data-v-86320f2a${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", { src: _imports_16 })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_SwiperSlide, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_17)} data-v-86320f2a${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", { src: _imports_17 })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_SwiperSlide, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_18)} data-v-86320f2a${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", { src: _imports_18 })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_SwiperSlide, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_19)} data-v-86320f2a${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", { src: _imports_19 })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_SwiperSlide, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_20)} data-v-86320f2a${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", { src: _imports_20 })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_SwiperSlide, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_21)} data-v-86320f2a${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", { src: _imports_21 })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
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
              }),
              createVNode(_component_SwiperSlide, null, {
                default: withCtx(() => [
                  createVNode("img", { src: _imports_11 })
                ]),
                _: 1
              }),
              createVNode(_component_SwiperSlide, null, {
                default: withCtx(() => [
                  createVNode("img", { src: _imports_12 })
                ]),
                _: 1
              }),
              createVNode(_component_SwiperSlide, null, {
                default: withCtx(() => [
                  createVNode("img", { src: _imports_13 })
                ]),
                _: 1
              }),
              createVNode(_component_SwiperSlide, null, {
                default: withCtx(() => [
                  createVNode("img", { src: _imports_14 })
                ]),
                _: 1
              }),
              createVNode(_component_SwiperSlide, null, {
                default: withCtx(() => [
                  createVNode("img", { src: _imports_15 })
                ]),
                _: 1
              }),
              createVNode(_component_SwiperSlide, null, {
                default: withCtx(() => [
                  createVNode("img", { src: _imports_16 })
                ]),
                _: 1
              }),
              createVNode(_component_SwiperSlide, null, {
                default: withCtx(() => [
                  createVNode("img", { src: _imports_17 })
                ]),
                _: 1
              }),
              createVNode(_component_SwiperSlide, null, {
                default: withCtx(() => [
                  createVNode("img", { src: _imports_18 })
                ]),
                _: 1
              }),
              createVNode(_component_SwiperSlide, null, {
                default: withCtx(() => [
                  createVNode("img", { src: _imports_19 })
                ]),
                _: 1
              }),
              createVNode(_component_SwiperSlide, null, {
                default: withCtx(() => [
                  createVNode("img", { src: _imports_20 })
                ]),
                _: 1
              }),
              createVNode(_component_SwiperSlide, null, {
                default: withCtx(() => [
                  createVNode("img", { src: _imports_21 })
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/product-and-services/biz-course.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const bizCourse = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-86320f2a"]]);

export { bizCourse as default };
//# sourceMappingURL=biz-course-89103741.mjs.map
