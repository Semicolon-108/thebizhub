globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import { Swiper, SwiperSlide } from 'swiper/vue';
import { useSSRContext, defineComponent, ref, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList } from 'vue';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { _ as _imports_0, a as _imports_1, b as _imports_2, c as _imports_3, d as _imports_4 } from './Enterpreneurs-story_Page_5-6f27ca3b.mjs';
import patternDivider from './pattern-fc7bb63a.mjs';
import { _ as _export_sfc } from '../server.mjs';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'axios';
import 'vue-i18n';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "biz-course",
  __ssrInlineRender: true,
  setup(__props) {
    const images = ref([
      {
        imgName: "biz-course-1.png"
      },
      {
        imgName: "biz-course-2.png"
      },
      {
        imgName: "biz-course-3.png"
      },
      {
        imgName: "biz-course-4.png"
      },
      {
        imgName: "biz-course-5.png"
      },
      {
        imgName: "biz-course-6.png"
      },
      {
        imgName: "biz-course-7.png"
      },
      {
        imgName: "biz-course-8.png"
      },
      {
        imgName: "biz-course-9.png"
      },
      {
        imgName: "biz-course-10.png"
      },
      {
        imgName: "biz-course-11.png"
      },
      {
        imgName: "biz-course-12.png"
      },
      {
        imgName: "biz-course-13.png"
      },
      {
        imgName: "biz-course-14.png"
      },
      {
        imgName: "biz-course-15.png"
      }
    ]);
    const ImageUrl = (imagename) => {
      const ImageUrl2 = new URL(
        `../../assets/images/biz-course/${imagename}`,
        globalThis._importMeta_.url
      ).href;
      return ImageUrl2;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Swiper = Swiper;
      const _component_SwiperSlide = SwiperSlide;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-6fa8c50c><section data-v-6fa8c50c><div class="container video-container" data-v-6fa8c50c><div class="grids is-2-desktop gap-30-desktop is-1-mobile gap-10-mobile" data-v-6fa8c50c><div class="video" data-v-6fa8c50c><iframe width="560" height="315" src="https://www.youtube.com/embed/HEg8LjkZOaQ?si=dULR1XN-DrTBTyXD" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen data-v-6fa8c50c></iframe></div><div class="text" data-v-6fa8c50c><h3 data-v-6fa8c50c>BIZ Courses \u0EC1\u0EA1\u0EC8\u0E99\u2026</h3> BIZ Courses \u0EC1\u0EA1\u0EC8\u0E99\u2026 \u0EAB\u0EBC\u0EB1\u0E81\u0EAA\u0EB9\u0E94\u0E81\u0EB2\u0E99\u0E9D\u0EB6\u0E81\u0EAD\u0EBB\u0E9A\u0EAE\u0EBB\u0EA1\u0E97\u0EB2\u0E87\u0E97\u0EB8\u0EA5\u0EB0\u0E81\u0EB4\u0E94 \u0EC4\u0EA5\u0E8D\u0EB0\u0EAA\u0EB1\u0EC9\u0E99 \u0EC0\u0E9E\u0EB7\u0EC8\u0EAD\u0E81\u0EBD\u0EA1\u0E84\u0EA7\u0EB2\u0EA1\u0E9E\u0EC9\u0EAD\u0EA1\u0EC3\u0EAB\u0EC9\u0E81\u0EB1\u0E9A\u0E9C\u0EB9\u0EC9\u0E9B\u0EB0\u0E81\u0EAD\u0E9A\u0E81\u0EB2\u0E99\u0E82\u0EB1\u0EC9\u0E99\u0EC0\u0EA5\u0EB5\u0EC8\u0EA1\u0E95\u0EBB\u0EC9\u0E99 \u0EC1\u0EA5\u0EB0 \u0EA7\u0EC8\u0EB2\u0E97\u0EB5\u0EC8\u0E9C\u0EB9\u0EC9\u0E9B\u0EB0\u0E81\u0EAD\u0E9A\u0E81\u0EB2\u0E99 \u0E97\u0EB5\u0EC8\u0EC0\u0E99\u0EB1\u0EC9\u0E99\u0EDC\u0EB1\u0E81\u0E81\u0EB2\u0E99\u0E9E\u0EB1\u0E94\u0E97\u0EB0\u0E99\u0EB2\u0E84\u0EA7\u0EB2\u0EA1\u0EAE\u0EB9\u0EC9\u0E84\u0EA7\u0EB2\u0EA1\u0EAA\u0EB2\u0EA1\u0EB2\u0E94, \u0E9D\u0EB6\u0E81\u0E9D\u0EBB\u0E99\u0E81\u0EB2\u0E99\u0E84\u0EB4\u0E94\u0EA7\u0EB4\u0EC0\u0E84\u0EB2\u0EB0, \u0EA7\u0EB2\u0E87\u0EC1\u0E9C\u0E99 \u0EC1\u0EA5\u0EB0 \u0E81\u0EBD\u0EA1\u0E84\u0EA7\u0EB2\u0EA1\u0E9E\u0EC9\u0EAD\u0EA1\u0EA2\u0EC8\u0EB2\u0E87\u0EC0\u0EDD\u0EB2\u0EB0\u0EAA\u0EBB\u0EA1 \u0EC0\u0E9E\u0EB7\u0EC8\u0EAD\u0EAB\u0EBC\u0EB8\u0E94\u0E9C\u0EC8\u0EAD\u0E99\u0E84\u0EA7\u0EB2\u0EA1\u0EAA\u0EC8\u0EBD\u0E87 \u0EC1\u0EA5\u0EB0 \u0EC0\u0E9E\u0EB5\u0EC8\u0EA1\u0EC2\u0EAD\u0E81\u0EB2\u0E94\u0EC3\u0E99\u0E81\u0EB2\u0E99\u0E9B\u0EB0\u0E81\u0EAD\u0E9A\u0E97\u0EB8\u0EA5\u0EB0\u0E81\u0EB4\u0E94\u0EC3\u0EAB\u0EC9\u0E9B\u0EB0\u0EAA\u0EBB\u0E9A\u0E9C\u0EBB\u0E99\u0EAA\u0EB3\u0EC0\u0EA5\u0EB1\u0E94\u0EAB\u0EBC\u0EB2\u0E8D\u0E82\u0EB6\u0EC9\u0E99. </div></div></div></section><section data-v-6fa8c50c><div class="container" data-v-6fa8c50c><blockquote data-v-6fa8c50c><i class="fa-duotone fa-quote-left" data-v-6fa8c50c></i><h3 data-v-6fa8c50c> BIZ Courses ( \u0EAB\u0EBC\u0EB1\u0E81\u0EAA\u0EB9\u0E94\u0E9D\u0EB6\u0E81\u0EAD\u0EBB\u0E9A\u0EAE\u0EBB\u0EA1\u0E97\u0EB2\u0E87\u0E97\u0EB8\u0EA5\u0EB0\u0E81\u0EB4\u0E94 ) \u0EC0\u0E81\u0EB5\u0E94\u0E82\u0EB6\u0EC9\u0E99\u0EA1\u0EB2\u0EC4\u0E94\u0EC9\u0EC1\u0E99\u0EA7\u0EC3\u0E94 ? </h3> \u0EC0\u0E99\u0EB7\u0EC8\u0EAD\u0E87\u0E88\u0EB2\u0E81\u0EAB\u0EBC\u0EB2\u0E8D\u0E9B\u0EB1\u0E94\u0EC4\u0E88 \u0E97\u0EB2\u0E87\u0E94\u0EC9\u0EB2\u0E99\u0EAA\u0EB0\u0E9E\u0EB2\u0E9A\u0EC0\u0EAA\u0E94\u0E96\u0EB0\u0E81\u0EB4\u0E94-\u0EAA\u0EB1\u0E87\u0E84\u0EBB\u0EA1 \u0EC1\u0EA5\u0EB0 \u0E81\u0EB2\u0E99\u0EC0\u0E9B\u0EB1\u0E99\u0EA2\u0EB9\u0EC8 \u0E97\u0EB5\u0EC8\u0EA1\u0EB5\u0E81\u0EB2\u0E99\u0E9B\u0EC8\u0EBD\u0E99\u0EC1\u0E9B\u0E87\u0EA2\u0EC8\u0EB2\u0E87\u0E9A\u0ECD\u0EC8\u0EA2\u0EB8\u0E94\u0E99\u0EB4\u0EC9\u0E87 \u0E97\u0EB5\u0EC8\u0E95\u0EC9\u0EAD\u0E87\u0EAD\u0EB2\u0EC4\u0EAA\u0E81\u0EB2\u0E99\u0E9B\u0EB1\u0E9A\u0E95\u0EBB\u0EA7\u0EC3\u0EAB\u0EC9\u0E97\u0EB1\u0E99\u0E81\u0EB1\u0E9A\u0EAA\u0EB0\u0E96\u0EB2\u0E99\u0EB0\u0E81\u0EB2\u0E99, \u0EC1\u0E99\u0EA7\u0EC2\u0E99\u0EC9\u0EA1\u0EC3\u0E99\u0E81\u0EB2\u0E99\u0E9B\u0EB0\u0E81\u0EAD\u0E9A\u0EAD\u0EB2\u0E8A\u0EB5\u0E9A\u0E82\u0EAD\u0E87\u0E9C\u0EB9\u0EC9\u0E84\u0EBB\u0E99 \u0E88\u0EB6\u0EC8\u0E87\u0EC0\u0EA5\u0EB5\u0EC8\u0EA1\u0EA1\u0EB5\u0E81\u0EB2\u0E99\u0E9B\u0EC8\u0EBD\u0E99\u0EC1\u0E9B\u0E87\u0EC4\u0E9B. \u0E9B\u0EB1\u0E94\u0E88\u0EB8\u0E9A\u0EB1\u0E99, \u0EAE\u0EB9\u0E9A\u0EC1\u0E9A\u0E9A\u0E81\u0EB2\u0E99\u0E9B\u0EB0\u0E81\u0EAD\u0E9A\u0EAD\u0EB2\u0E8A\u0EB5\u0E9A\u0EA1\u0EB5\u0EA2\u0EB9\u0EC8\u0EAB\u0EBC\u0EB2\u0E81\u0EAB\u0EBC\u0EB2\u0E8D \u0EC1\u0E95\u0EC8\u0EC3\u0E99\u0E99\u0EB1\u0EC9\u0E99\u0EAE\u0EB9\u0E9A\u0EC1\u0E9A\u0E9A\u0E97\u0EB5\u0EC8\u0E9C\u0EB9\u0EC9\u0E84\u0EBB\u0E99\u0EA1\u0EB5\u0EC1\u0E99\u0EA7\u0EC2\u0E99\u0EC9\u0EA1\u0EC3\u0EAB\u0EC9\u0E84\u0EA7\u0EB2\u0EA1\u0EAA\u0EBB\u0E99\u0EC3\u0E88\u0EAA\u0EB9\u0E87 \u0EC1\u0EA5\u0EB0 \u0EA2\u0EB2\u0E81\u0EAB\u0EB1\u0E99\u0EA1\u0EB2\u0EC0\u0EAE\u0EB1\u0E94\u0EC0\u0E9E\u0EB5\u0EC8\u0EA1\u0E82\u0EB6\u0EC9\u0E99\u0EC0\u0EA5\u0EB7\u0EC9\u0EAD\u0E8D\u0EC6 \u0E81\u0ECD\u0EC1\u0EA1\u0EC8\u0E99 \u0E81\u0EB2\u0E99\u0EA1\u0EB5\u0E97\u0EB8\u0EA5\u0EB0\u0E81\u0EB4\u0E94\u0EC0\u0E9B\u0EB1\u0E99\u0E82\u0EAD\u0E87\u0E95\u0EBB\u0E99\u0EC0\u0EAD\u0E87 \u0EAB\u0EBC\u0EB7 \u0EC0\u0E9B\u0EB1\u0E99\u0E9C\u0EB9\u0EC9\u0E9B\u0EB0\u0E81\u0EAD\u0E9A\u0E81\u0EB2\u0E99, \u0EAA\u0EB3\u0EA5\u0EB1\u0E9A\u0E9C\u0EB9\u0EC9\u0E97\u0EB5\u0EC8\u0EC0\u0EAE\u0EB1\u0E94\u0EA7\u0EBD\u0E81\u0E9B\u0EB0\u0E88\u0EB3\u0EA2\u0EB9\u0EC8 \u0E81\u0ECD\u0EA1\u0EB5\u0E84\u0EA7\u0EB2\u0EA1\u0E95\u0EC9\u0EAD\u0E87\u0E81\u0EB2\u0E99\u0EA2\u0EB2\u0E81\u0EA1\u0EB5\u0EAD\u0EB2\u0E8A\u0EB5\u0E9A\u0EAA\u0EB3\u0EAE\u0EAD\u0E87 \u0EC0\u0E9B\u0EB1\u0E99\u0E8A\u0EC8\u0EAD\u0E87\u0E97\u0EB2\u0E87\u0EAB\u0EB2\u0EA5\u0EB2\u0E8D\u0EC4\u0E94\u0EC9\u0EC0\u0EAA\u0EB5\u0EA1, \u0EA5\u0EA7\u0EA1\u0EC4\u0E9B\u0EC0\u0E96\u0EB4\u0E87\u0E9C\u0EB9\u0EC9\u0EA7\u0EC8\u0EB2\u0E87\u0E87\u0EB2\u0E99 \u0E97\u0EB5\u0EC8\u0EA1\u0EB5\u0E84\u0EA7\u0EB2\u0EA1\u0E95\u0EC9\u0EAD\u0E87\u0E81\u0EB2\u0E99\u0EA2\u0EB2\u0E81\u0E9B\u0EB0\u0E81\u0EAD\u0E9A\u0EAD\u0EB2\u0E8A\u0EB5\u0E9A\u0E94\u0EC9\u0EA7\u0E8D\u0E95\u0EBB\u0E99\u0EC0\u0EAD\u0E87 \u0EC1\u0E95\u0EC8\u0E81\u0ECD\u0E9A\u0ECD\u0EC8\u0EC1\u0EA1\u0EC8\u0E99\u0EA7\u0EC8\u0EB2\u0E97\u0EB8\u0E81\u0E84\u0EBB\u0E99\u0E88\u0EB0\u0E9B\u0EB0\u0EAA\u0EBB\u0E9A\u0E84\u0EA7\u0EB2\u0EA1\u0EAA\u0EB3\u0EC0\u0EA5\u0EB1\u0E94 \u0EAB\u0EB2\u0E81\u0E82\u0EB2\u0E94\u0E81\u0EB2\u0E99\u0EA7\u0EB4\u0EC0\u0E84\u0EB2\u0EB0, \u0EA7\u0EB2\u0E87\u0EC1\u0E9C\u0E99 \u0EC1\u0EA5\u0EB0 \u0E81\u0EBD\u0EA1\u0E84\u0EA7\u0EB2\u0EA1\u0E9E\u0EC9\u0EAD\u0EA1\u0E97\u0EB5\u0EC8\u0E94\u0EB5. \u0E94\u0EB1\u0EC8\u0E87\u0E99\u0EB1\u0EC9\u0E99, BIZ Courses \u0EAB\u0EBC\u0EB7 \u0EAB\u0EBC\u0EB1\u0E81\u0EAA\u0EB9\u0E94\u0E9D\u0EB6\u0E81\u0EAD\u0EBB\u0E9A\u0EAE\u0EBB\u0EA1\u0E97\u0EB2\u0E87\u0E97\u0EB8\u0EA5\u0EB0\u0E81\u0EB4\u0E94 \u0EC4\u0EA5\u0E8D\u0EB0\u0EAA\u0EB1\u0EC9\u0E99 \u0E88\u0EB6\u0EC8\u0E87\u0EA1\u0EB5\u0E84\u0EA7\u0EB2\u0EA1\u0EAA\u0EB3\u0E84\u0EB1\u0E99\u0EAB\u0EBC\u0EB2\u0E8D \u0EC0\u0E9E\u0EB7\u0EC8\u0EAD\u0E81\u0EBD\u0EA1\u0E84\u0EA7\u0EB2\u0EA1\u0E9E\u0EC9\u0EAD\u0EA1\u0EC3\u0EAB\u0EC9\u0E81\u0EB1\u0E9A\u0E9C\u0EB9\u0EC9\u0E9B\u0EB0\u0E81\u0EAD\u0E9A\u0E81\u0EB2\u0E99\u0E82\u0EB1\u0EC9\u0E99\u0EC0\u0EA5\u0EB5\u0EC8\u0EA1\u0E95\u0EBB\u0EC9\u0E99 \u0EC1\u0EA5\u0EB0 \u0EA7\u0EC8\u0EB2\u0E97\u0EB5\u0EC8\u0E9C\u0EB9\u0EC9\u0E9B\u0EB0\u0E81\u0EAD\u0E9A\u0E81\u0EB2\u0E99. </blockquote></div></section><section data-v-6fa8c50c><div class="container" data-v-6fa8c50c><div class="grids is-5-desktop gap-10-desktop" data-v-6fa8c50c><div class="element" data-v-6fa8c50c><img${ssrRenderAttr("src", _imports_0)} data-v-6fa8c50c><p data-v-6fa8c50c>\u0EA7\u0EC8\u0EB2\u0E97\u0EB5\u0EC8\u0E9C\u0EB9\u0EC9\u0E9B\u0EB0\u0E81\u0EAD\u0E9A\u0E81\u0EB2\u0E99</p><p data-v-6fa8c50c>(Future Entrepreneur)</p></div><div class="element" data-v-6fa8c50c><img${ssrRenderAttr("src", _imports_1)} alt="" data-v-6fa8c50c><p data-v-6fa8c50c>\u0E9C\u0EB9\u0EC9\u0E9B\u0EB0\u0E81\u0EAD\u0E9A\u0EAD\u0EB2\u0E8A\u0EB5\u0E9A\u0E94\u0EC9\u0EA7\u0E8D\u0E95\u0EBB\u0E99\u0EC0\u0EAD\u0E87</p><p data-v-6fa8c50c>(Self-employed)</p></div><div class="element" data-v-6fa8c50c><img${ssrRenderAttr("src", _imports_2)} alt="" data-v-6fa8c50c><p data-v-6fa8c50c>\u0E9C\u0EB9\u0EC9\u0E9B\u0EB0\u0E81\u0EAD\u0E9A\u0E81\u0EB2\u0E99\u0EC3\u0EDD\u0EC8</p><p data-v-6fa8c50c>(new entrepreneur)</p></div><div class="element" data-v-6fa8c50c><img${ssrRenderAttr("src", _imports_3)} alt="" data-v-6fa8c50c><p data-v-6fa8c50c>\u0E88\u0EB8\u0E99\u0EA5\u0EB0\u0EA7\u0EB4\u0EAA\u0EB2\u0EAB\u0EB0\u0E81\u0EB4\u0E94</p><p data-v-6fa8c50c>(Micro entreprise)</p></div><div class="element" data-v-6fa8c50c><img${ssrRenderAttr("src", _imports_4)} alt="" data-v-6fa8c50c><p data-v-6fa8c50c>\u0EA7\u0EB4\u0EAA\u0EB2\u0EAB\u0EB0\u0E81\u0EB4\u0E94\u0E82\u0EB0\u0EDC\u0EB2\u0E94\u0E99\u0EC9\u0EAD\u0E8D</p><p data-v-6fa8c50c>(Small entreprise)</p></div></div></div></section><section data-v-6fa8c50c><div class="container" data-v-6fa8c50c>`);
      _push(ssrRenderComponent(patternDivider, { style: { "margin-bottom": "50px" } }, null, _parent));
      _push(`<div class="grids is-12-desktop gap-50-desktop" data-v-6fa8c50c><div class="span-5-desktop" data-v-6fa8c50c><img src="https://contentshifu.com/wp-content/uploads/2022/07/in-house-image-1-1024x1024.png.webp" data-v-6fa8c50c></div><div class="takeaway span-7-desktop" data-v-6fa8c50c><h3 data-v-6fa8c50c>\u0EC0\u0E82\u0EBB\u0EC9\u0EB2\u0EAE\u0EC8\u0EA7\u0EA1 BIZ Courses \u0E88\u0EB0\u0EC4\u0E94\u0EC9\u0EAB\u0E8D\u0EB1\u0E87?</h3><p data-v-6fa8c50c>\u0E97\u0EB8\u0E81\u0EAB\u0EBC\u0EB1\u0E81\u0EAA\u0EB9\u0E94\u0E82\u0EAD\u0E87 BIZ Courses, \u0E9C\u0EB9\u0EC9\u0EC0\u0E82\u0EBB\u0EC9\u0EB2\u0EAE\u0EC8\u0EA7\u0EA1\u0E9D\u0EB6\u0E81 \u0E95\u0EB2\u0EA1\u0EC0\u0E87\u0EB7\u0EC8\u0EAD\u0E99\u0EC4\u0E82* \u0E88\u0EB0\u0EC4\u0E94\u0EC9</p><ul data-v-6fa8c50c><li data-v-6fa8c50c><i class="fa-solid fa-square-check" data-v-6fa8c50c></i><p data-v-6fa8c50c> \u0E9E\u0EB1\u0E94\u0E97\u0EB0\u0E99\u0EB2\u0E84\u0EA7\u0EB2\u0EA1\u0EAE\u0EB9\u0EC9\u0E84\u0EA7\u0EB2\u0EA1\u0EAA\u0EB2\u0EA1\u0EB2\u0E94, \u0E9D\u0EB6\u0E81\u0E9D\u0EBB\u0E99\u0E81\u0EB2\u0E99\u0E84\u0EB4\u0E94\u0EA7\u0EB4\u0EC0\u0E84\u0EB2\u0EB0, \u0EA7\u0EB2\u0E87\u0EC1\u0E9C\u0E99 \u0EC1\u0EA5\u0EB0 \u0E81\u0EBD\u0EA1\u0E84\u0EA7\u0EB2\u0EA1\u0E9E\u0EC9\u0EAD\u0EA1\u0EA2\u0EC8\u0EB2\u0E87\u0EC0\u0EDD\u0EB2\u0EB0\u0EAA\u0EBB\u0EA1 \u0E9C\u0EC8\u0EB2\u0E99\u0E82\u0EB0\u0E9A\u0EA7\u0E99\u0E81\u0EB2\u0E99 \u0EC1\u0EA5\u0EB0 \u0E82\u0EB1\u0EC9\u0E99\u0E95\u0EAD\u0E99\u0E81\u0EB4\u0E94\u0E88\u0EB0\u0E81\u0EB3\u0E81\u0EB2\u0E99\u0E9D\u0EB6\u0E81\u0EAD\u0EBB\u0E9A\u0EAE\u0EBB\u0EA1 (Competency development) </p></li><li data-v-6fa8c50c><i class="fa-solid fa-square-check" data-v-6fa8c50c></i><p data-v-6fa8c50c> \u0EC0\u0E84\u0EB7\u0EC8\u0EAD\u0E87\u0EA1\u0EB7\u0E97\u0EB5\u0EC8\u0EC0\u0E9B\u0EB1\u0E99\u0E9B\u0EB0\u0EC2\u0EAB\u0E8D\u0E94 \u0EC0\u0E9E\u0EB7\u0EC8\u0EAD\u0E99\u0EB3\u0EC4\u0E9B\u0E9E\u0EB1\u0E94\u0E97\u0EB0\u0E99\u0EB2\u0E97\u0EB8\u0EA5\u0EB0\u0E81\u0EB4\u0E94 (Business tools) </p></li><li data-v-6fa8c50c><i class="fa-solid fa-square-check" data-v-6fa8c50c></i><p data-v-6fa8c50c>\u0E9E\u0EB1\u0E94\u0E97\u0EB0\u0E99\u0EB2\u0EC1\u0E99\u0EA7\u0E84\u0EA7\u0EB2\u0EA1\u0E84\u0EB4\u0E94\u0EC1\u0E9A\u0E9A\u0E9C\u0EB9\u0EC9\u0E9B\u0EB0\u0E81\u0EAD\u0E9A\u0E81\u0EB2\u0E99 (Entrepreneurial mindset)</p></li><li data-v-6fa8c50c><i class="fa-solid fa-square-check" data-v-6fa8c50c></i><p data-v-6fa8c50c> \u0E99\u0EB3\u0EC3\u0E8A\u0EC9\u0EAA\u0EB4\u0EC8\u0E87\u0E97\u0EB5\u0EC8\u0EC4\u0E94\u0EC9\u0EAE\u0EB1\u0E9A\u0E88\u0EB2\u0E81\u0E81\u0EB2\u0E99\u0E9D\u0EB6\u0E81\u0EC4\u0E9B\u0E99\u0EB3\u0EC3\u0E8A\u0EC9 \u0EC0\u0E9E\u0EB7\u0EC8\u0EAD\u0EAB\u0EBC\u0EB8\u0E94\u0E9C\u0EC8\u0EAD\u0E99\u0E84\u0EA7\u0EB2\u0EA1\u0EAA\u0EC8\u0EBD\u0E87 \u0EC1\u0EA5\u0EB0 \u0EC0\u0E9E\u0EB5\u0EC8\u0EA1\u0EC2\u0EAD\u0E81\u0EB2\u0E94\u0EC3\u0E99\u0E81\u0EB2\u0E99\u0E9B\u0EB0\u0E81\u0EAD\u0E9A\u0E97\u0EB8\u0EA5\u0EB0\u0E81\u0EB4\u0E94\u0EC3\u0EAB\u0EC9\u0E9B\u0EB0\u0EAA\u0EBB\u0E9A\u0E9C\u0EBB\u0E99\u0EAA\u0EB3\u0EC0\u0EA5\u0EB1\u0E94\u0EAB\u0EBC\u0EB2\u0E8D\u0E82\u0EB6\u0EC9\u0E99 (Application) </p></li><li data-v-6fa8c50c><i class="fa-solid fa-square-check" data-v-6fa8c50c></i><p data-v-6fa8c50c> \u0EAE\u0EB1\u0E9A\u0EC3\u0E9A\u0EA2\u0EB1\u0EC9\u0E87\u0EA2\u0EB7\u0E99\u0E81\u0EB2\u0E99\u0EC0\u0E82\u0EBB\u0EC9\u0EB2\u0EAE\u0EC8\u0EA7\u0EA1\u0E9D\u0EB6\u0E81\u0EAD\u0EBB\u0E9A\u0EAE\u0EBB\u0EA1 \u0E88\u0EB2\u0E81\u0E9C\u0EB9\u0EC9\u0E88\u0EB1\u0E94 (Certificate of Participation) </p></li></ul></div></div>`);
      _push(ssrRenderComponent(patternDivider, { style: { "margin-top": "50px" } }, null, _parent));
      _push(`</div></section><section data-v-6fa8c50c><div class="container" data-v-6fa8c50c><div class="gallery" data-v-6fa8c50c><h3 data-v-6fa8c50c>\u0E9C\u0EBB\u0E99\u0E87\u0EB2\u0E99\u0E97\u0EB5\u0EC8\u0E9C\u0EC8\u0EB2\u0E99\u0EA1\u0EB2</h3>`);
      if (unref(images)) {
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
              ssrRenderList(unref(images), (i) => {
                _push2(ssrRenderComponent(_component_SwiperSlide, null, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<img${ssrRenderAttr("src", ImageUrl(i.imgName))} alt="" data-v-6fa8c50c${_scopeId2}>`);
                    } else {
                      return [
                        createVNode("img", {
                          src: ImageUrl(i.imgName),
                          alt: ""
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
                (openBlock(true), createBlock(Fragment, null, renderList(unref(images), (i) => {
                  return openBlock(), createBlock(_component_SwiperSlide, null, {
                    default: withCtx(() => [
                      createVNode("img", {
                        src: ImageUrl(i.imgName),
                        alt: ""
                      }, null, 8, ["src"])
                    ]),
                    _: 2
                  }, 1024);
                }), 256))
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
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
const bizCourse = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6fa8c50c"]]);

export { bizCourse as default };
//# sourceMappingURL=biz-course-9833c258.mjs.map
