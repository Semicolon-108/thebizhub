import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useSSRContext, defineComponent, unref, withCtx, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _imports_0 } from './biz-coaching-a3c25516.mjs';
import patternDivider from './pattern-fc7bb63a.mjs';
import { _ as _export_sfc } from '../server.mjs';
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

const _imports_1 = "" + buildAssetsURL("1.1ddedb30.png");
const _imports_2 = "" + buildAssetsURL("2.de8da712.png");
const _imports_3 = "" + buildAssetsURL("3.bf01febe.png");
const _imports_4 = "" + buildAssetsURL("4.9670781e.png");
const _imports_5 = "" + buildAssetsURL("5.6d3ec7b1.png");
const _imports_6 = "" + buildAssetsURL("biz-coaching-1.b5df5077.jpg");
const _imports_7 = "" + buildAssetsURL("biz-coaching-2.633a2d35.jpg");
const _imports_8 = "" + buildAssetsURL("biz-coaching-3.73d55445.jpg");
const _imports_9 = "" + buildAssetsURL("biz-coaching-4.2e401f5d.jpg");
const _imports_10 = "" + buildAssetsURL("biz-coaching-5.e7d45df2.jpg");
const _imports_11 = "" + buildAssetsURL("biz-coaching-6.ff1ceee5.jpg");
const _imports_12 = "" + buildAssetsURL("biz-coaching-7.4a3ca400.jpg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "biz-coaching",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Swiper = Swiper;
      const _component_SwiperSlide = SwiperSlide;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-41d0aa52><section data-v-41d0aa52><div class="container video-container" data-v-41d0aa52><div class="grids is-2-desktop gap-30-desktop is-1-mobile gap-10-mobile" data-v-41d0aa52><div class="image" data-v-41d0aa52><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-41d0aa52></div><div class="text" data-v-41d0aa52><h3 data-v-41d0aa52>\u0EAA\u0EB4\u0EC8\u0E87\u0E97\u0EB5\u0EC8\u0E88\u0EB0\u0EC4\u0E94\u0EC9\u0EAE\u0EB1\u0E9A\u0E88\u0EB2\u0E81 BIZ COACHING</h3><ul data-v-41d0aa52><li data-v-41d0aa52><i class="fa-solid fa-square-check" data-v-41d0aa52></i>\u0EA1\u0EB8\u0EA1\u0EA1\u0EAD\u0E87 \u0EC1\u0EA5\u0EB0 \u0EC1\u0E99\u0EA7\u0E97\u0EB2\u0E87\u0EC3\u0E99\u0E81\u0EB2\u0E99\u0EC0\u0EAE\u0EB1\u0E94\u0E97\u0EB8\u0EA5\u0EB0\u0E81\u0EB4\u0E94 </li><li data-v-41d0aa52><i class="fa-solid fa-square-check" data-v-41d0aa52></i>\u0EC0\u0E84\u0EB7\u0EC8\u0EAD\u0E87\u0EA1\u0EB7\u0EC3\u0E99\u0E81\u0EB2\u0E99\u0E9A\u0ECD\u0EA5\u0EB4\u0EAB\u0EB2\u0E99\u0E97\u0EB8\u0EA5\u0EB0\u0E81\u0EB4\u0E94 </li><li data-v-41d0aa52><i class="fa-solid fa-square-check" data-v-41d0aa52></i>\u0EC0\u0EAA\u0EB5\u0EA1\u0EAA\u0EC9\u0EB2\u0E87\u0E84\u0EA7\u0EB2\u0EA1\u0EC0\u0E82\u0EB1\u0EC9\u0EA1\u0EC1\u0E82\u0E87\u0EC3\u0E99\u0E81\u0EB2\u0E99\u0E9A\u0ECD\u0EA5\u0EB4\u0EAB\u0EB2\u0E99\u0E97\u0EB8\u0EA5\u0EB0\u0E81\u0EB4\u0E94 </li></ul></div></div></div></section><section data-v-41d0aa52><div class="container" data-v-41d0aa52><blockquote data-v-41d0aa52><i class="fa-duotone fa-quote-left" data-v-41d0aa52></i><h3 data-v-41d0aa52>BIZ COACHING ( \u0E9A\u0ECD\u0EA5\u0EB4\u0E81\u0EB2\u0E99\u0EC3\u0EAB\u0EC9\u0E84\u0ECD\u0EB2\u0E9B\u0EB6\u0E81\u0EAA\u0EB2\u0E97\u0EB2\u0E87\u0E97\u0EB8\u0EA5\u0EB0\u0E81\u0EB4\u0E94 ) \u0EC1\u0EA1\u0EC8\u0E99\u0EAB\u0E8D\u0EB1\u0E87?</h3> \u0E9A\u0ECD\u0EA5\u0EB4\u0E81\u0EB2\u0E99\u0EC3\u0EAB\u0EC9\u0E84\u0ECD\u0EB2\u0E9B\u0EB6\u0E81\u0EAA\u0EB2\u0E97\u0EB2\u0E87\u0E97\u0EB8\u0EA5\u0EB0\u0E81\u0EB4\u0E94 (BIZ Coaching) \u0EC1\u0EA1\u0EC8\u0E99\u0E9A\u0ECD\u0EA5\u0EB4\u0E81\u0EB2\u0E99\u0E97\u0EB5\u0EC8\u0E8A\u0EC8\u0EA7\u0E8D\u0EAA\u0EB0\u0EDC\u0EB1\u0E9A\u0EAA\u0EB0\u0EDC\u0EB8\u0E99 \u0EA7\u0EC8\u0EB2\u0E97\u0EB5\u0EC8\u0E9C\u0EB9\u0EC9\u0E9B\u0EB0\u0E81\u0EAD\u0E9A\u0E81\u0EB2\u0E99, \u0E9C\u0EB9\u0EC9\u0E9B\u0EB0\u0E81\u0EAD\u0E9A\u0E81\u0EB2\u0E99\u0E82\u0EB1\u0EC9\u0E99\u0EC0\u0EA5\u0EB5\u0EC8\u0EA1\u0E95\u0EBB\u0EC9\u0E99 \u0EAB\u0EBC\u0EB7 \u0EC0\u0E88\u0EBB\u0EC9\u0EB2\u0E82\u0EAD\u0E87\u0E97\u0EB8\u0EA5\u0EB0\u0E81\u0EB4\u0E94\u0E82\u0EB0\u0EDC\u0EB2\u0E94\u0E99\u0EC9\u0EAD\u0E8D \u0EC2\u0E94\u0E8D\u0E9C\u0EC8\u0EB2\u0E99\u0E81\u0EB2\u0E99\u0EAE\u0EB1\u0E9A\u0E9F\u0EB1\u0E87 \u0EC1\u0EA5\u0EB0 \u0EA7\u0EB4\u0EC0\u0E84\u0EB2\u0EB0\u0E9A\u0EB1\u0E99\u0EAB\u0EB2, \u0EC3\u0EAB\u0EC9\u0E84\u0ECD\u0EB2\u0EC1\u0E99\u0EB0\u0E99\u0ECD\u0EB2 \u0EC1\u0EA5\u0EB0 \u0E82\u0ECD\u0EC9\u0EAA\u0EB0\u0EC0\u0EDC\u0EB5\u0EC1\u0E99\u0EB0 \u0E81\u0EC8\u0EBD\u0EA7\u0E81\u0EB1\u0E9A\u0EA7\u0EB4\u0E97\u0EB5\u0E81\u0EB2\u0E99, \u0EC1\u0E99\u0EA7\u0E97\u0EB2\u0E87 \u0EC1\u0EA5\u0EB0 \u0EC0\u0E84\u0EB7\u0EC8\u0EAD\u0E87\u0EA1\u0EB7\u0EC3\u0E99\u0E81\u0EB2\u0E99\u0EC0\u0EAE\u0EB1\u0E94\u0E97\u0EB8\u0EA5\u0EB0\u0E81\u0EB4\u0E94\u0EC0\u0E9E\u0EB7\u0EC8\u0EAD\u0EC0\u0EAD\u0EBB\u0EB2\u0E8A\u0EB0\u0E99\u0EB0\u0EAD\u0EB8\u0E9B\u0EB0\u0EAA\u0EB1\u0E81, \u0EC0\u0E9E\u0EB7\u0EC8\u0EAD\u0E8A\u0EC8\u0EA7\u0E8D\u0EAA\u0EB0\u0EDC\u0EB1\u0E9A\u0EAA\u0EB0\u0EDC\u0EB8\u0E99\u0EC3\u0EAB\u0EC9\u0E97\u0EB8\u0EA5\u0EB0\u0E81\u0EB4\u0E94\u0EAA\u0EB2\u0EA1\u0EB2\u0E94\u0E9A\u0EB1\u0E99\u0EA5\u0EB8\u0EC0\u0E9B\u0EBB\u0EC9\u0EB2\u0EDD\u0EB2\u0E8D\u0EC3\u0EAB\u0EC9\u0E9B\u0EB0\u0EAA\u0EBB\u0E9A\u0E9C\u0EBB\u0E99\u0EAA\u0ECD\u0EB2\u0EC0\u0EA5\u0EB1\u0E94\u0EC0\u0E9E\u0EB7\u0EC8\u0EAD\u0E81\u0EB2\u0E99\u0EC0\u0E95\u0EB5\u0E9A\u0EC2\u0E95\u0E97\u0EB5\u0EC8\u0E8D\u0EB7\u0E99\u0E8D\u0EBB\u0E87. </blockquote></div></section><section data-v-41d0aa52><div class="container" data-v-41d0aa52><h3 class="section-title" data-v-41d0aa52>\u0EC0\u0E99\u0EB7\u0EC9\u0EAD\u0EAB\u0EB2\u0E97\u0EB5\u0EC8\u0E88\u0EB0\u0EC4\u0E94\u0EC9\u0EAE\u0EB1\u0E9A</h3><div class="grids is-5-desktop gap-10-desktop" data-v-41d0aa52><div class="element" data-v-41d0aa52><img${ssrRenderAttr("src", _imports_1)} data-v-41d0aa52><p data-v-41d0aa52>\u0EA7\u0EC8\u0EB2\u0E97\u0EB5\u0EC8\u0E9C\u0EB9\u0EC9\u0E9B\u0EB0\u0E81\u0EAD\u0E9A\u0E81\u0EB2\u0E99</p><p data-v-41d0aa52>(Future Entrepreneur)</p></div><div class="element" data-v-41d0aa52><img${ssrRenderAttr("src", _imports_2)} alt="" data-v-41d0aa52><p data-v-41d0aa52>\u0E9C\u0EB9\u0EC9\u0E9B\u0EB0\u0E81\u0EAD\u0E9A\u0EAD\u0EB2\u0E8A\u0EB5\u0E9A\u0E94\u0EC9\u0EA7\u0E8D\u0E95\u0EBB\u0E99\u0EC0\u0EAD\u0E87</p><p data-v-41d0aa52>(Self-employed)</p></div><div class="element" data-v-41d0aa52><img${ssrRenderAttr("src", _imports_3)} alt="" data-v-41d0aa52><p data-v-41d0aa52>\u0E9C\u0EB9\u0EC9\u0E9B\u0EB0\u0E81\u0EAD\u0E9A\u0E81\u0EB2\u0E99\u0EC3\u0EDD\u0EC8</p><p data-v-41d0aa52>(New entrepreneur)</p></div><div class="element" data-v-41d0aa52><img${ssrRenderAttr("src", _imports_4)} alt="" data-v-41d0aa52><p data-v-41d0aa52>\u0E88\u0EB8\u0E99\u0EA5\u0EB0\u0EA7\u0EB4\u0EAA\u0EB2\u0EAB\u0EB0\u0E81\u0EB4\u0E94</p><p data-v-41d0aa52>(Micro entreprise)</p></div><div class="element" data-v-41d0aa52><img${ssrRenderAttr("src", _imports_5)} alt="" data-v-41d0aa52><p data-v-41d0aa52>\u0EA7\u0EB4\u0EAA\u0EB2\u0EAB\u0EB0\u0E81\u0EB4\u0E94\u0E82\u0EB0\u0EDC\u0EB2\u0E94\u0E99\u0EC9\u0EAD\u0E8D</p><p data-v-41d0aa52>(Small entreprise)</p></div></div></div></section><section data-v-41d0aa52><div class="container" data-v-41d0aa52>`);
      _push(ssrRenderComponent(patternDivider, { style: { "margin-bottom": "30px" } }, null, _parent));
      _push(`<div class="grids is-2-desktop gap-50-desktop" data-v-41d0aa52><div class="benefits" data-v-41d0aa52><h3 data-v-41d0aa52>\u0EC0\u0E99\u0EB7\u0EC9\u0EAD\u0EAB\u0EB2\u0E97\u0EB5\u0EC8\u0E88\u0EB0\u0EC4\u0E94\u0EC9\u0EAE\u0EB1\u0E9A</h3><ul data-v-41d0aa52><li data-v-41d0aa52><i class="fa-solid fa-square-check" data-v-41d0aa52></i>\u0E81\u0EB2\u0E99\u0E81\u0ECD\u0EB2\u0E99\u0EBB\u0E94\u0EC0\u0EAD\u0E81\u0EB0\u0EA5\u0EB1\u0E81\u0E97\u0EB8\u0EA5\u0EB0\u0E81\u0EB4\u0E94 (Business Identity) </li><li data-v-41d0aa52><i class="fa-solid fa-square-check" data-v-41d0aa52></i>\u0E81\u0EB2\u0E99\u0EAA\u0ECD\u0EB2\u0EAB\u0EBC\u0EA7\u0E94\u0E95\u0EB0\u0EAB\u0EBC\u0EB2\u0E94\u0EAA\u0ECD\u0EB2\u0EA5\u0EB1\u0E9A\u0E97\u0EB8\u0EA5\u0EB0\u0E81\u0EB4\u0E94 (Market Survey) </li><li data-v-41d0aa52><i class="fa-solid fa-square-check" data-v-41d0aa52></i>\u0E97\u0ECD\u0EB2\u0E84\u0EA7\u0EB2\u0EA1\u0EC0\u0E82\u0EBB\u0EC9\u0EB2\u0EC3\u0E88\u0E81\u0EB1\u0E9A\u0EA5\u0EB9\u0E81\u0E84\u0EC9\u0EB2 (Get to Know your customer) </li><li data-v-41d0aa52><i class="fa-solid fa-square-check" data-v-41d0aa52></i>\u0EC2\u0E84\u0E87\u0EAA\u0EC9\u0EB2\u0E87\u0E95\u0EBB\u0EC9\u0E99\u0E97\u0EB6\u0E99 \u0EC1\u0EA5\u0EB0 \u0EA5\u0EB2\u0E8D\u0EC4\u0E94\u0EC9 (Cost &amp; revenue) </li><li data-v-41d0aa52><i class="fa-solid fa-square-check" data-v-41d0aa52></i>\u0E81\u0EB2\u0E99\u0EC0\u0EAE\u0EB1\u0E94\u0E81\u0EB2\u0E99\u0E95\u0EB0\u0EAB\u0EBC\u0EB2\u0E94 (Marketing) </li><li data-v-41d0aa52><i class="fa-solid fa-square-check" data-v-41d0aa52></i>\u0E81\u0EB2\u0E99\u0E9A\u0ECD\u0EA5\u0EB4\u0EAB\u0EB2\u0E99\u0E97\u0EB5\u0EA1 \u0EC1\u0EA5\u0EB0 \u0EDC\u0EC9\u0EB2\u0E97\u0EB5\u0EC8\u0EAB\u0EBC\u0EB1\u0E81\u0E82\u0EAD\u0E87\u0E81\u0EB2\u0E99\u0EC0\u0EAE\u0EB1\u0E94\u0E97\u0EB8\u0EA5\u0EB0\u0E81\u0EB4\u0E94 (Team &amp; key roles) </li><li data-v-41d0aa52><i class="fa-solid fa-square-check" data-v-41d0aa52></i>\u0E81\u0EB2\u0E99\u0EA7\u0EB2\u0E87\u0EC1\u0E9C\u0E99\u0E97\u0EB8\u0EA5\u0EB0\u0E81\u0EB4\u0E94\u0EAA\u0ECD\u0EB2\u0EA5\u0EB1\u0E9A\u0E97\u0EB8\u0EA5\u0EB0\u0E81\u0EB4\u0E94 (Future thinking) </li></ul></div><div data-v-41d0aa52><img src="https://contentshifu.com/wp-content/uploads/2023/07/LP_Banner01.png.webp" data-v-41d0aa52></div></div>`);
      _push(ssrRenderComponent(patternDivider, { style: { "margin-top": "30px" } }, null, _parent));
      _push(`</div></section><section data-v-41d0aa52><div class="container" data-v-41d0aa52><div class="grids is-2-desktop gap-50-desktop" data-v-41d0aa52><div data-v-41d0aa52><img src="https://contentshifu.com/wp-content/uploads/2022/07/in-house-image-1-1024x1024.png.webp" data-v-41d0aa52></div><div class="takeaway" data-v-41d0aa52><h3 data-v-41d0aa52>\u0EAA\u0EB4\u0EC8\u0E87\u0E97\u0EB5\u0EC8\u0E88\u0EB0\u0EC4\u0E94\u0EC9\u0EAE\u0EB1\u0E9A\u0E88\u0EB2\u0E81 BIZ COACHING</h3><ul data-v-41d0aa52><li data-v-41d0aa52><i class="fa-solid fa-square-check" data-v-41d0aa52></i><p data-v-41d0aa52>\u0EA1\u0EB8\u0EA1\u0EA1\u0EAD\u0E87 \u0EC1\u0EA5\u0EB0 \u0EC1\u0E99\u0EA7\u0E97\u0EB2\u0E87\u0EC3\u0EDD\u0EC8\u0EC6 \u0EC3\u0E99\u0E81\u0EB2\u0E99\u0E94\u0EB3\u0EC0\u0E99\u0EB5\u0E99\u0E97\u0EB8\u0EA5\u0EB0\u0E81\u0EB4\u0E94</p></li><li data-v-41d0aa52><i class="fa-solid fa-square-check" data-v-41d0aa52></i><p data-v-41d0aa52>\u0EC0\u0E84\u0EB7\u0EC8\u0EAD\u0E87\u0EA1\u0EB7\u0E97\u0EB5\u0EC8\u0EC0\u0E9B\u0EB1\u0E99\u0E9B\u0EB0\u0EC2\u0EAB\u0E8D\u0E94\u0EC3\u0E99\u0E81\u0EB2\u0E99\u0E9A\u0ECD\u0EA5\u0EB4\u0EAB\u0EB2\u0E99\u0E97\u0EB8\u0EA5\u0EB0\u0E81\u0EB4\u0E94</p></li><li data-v-41d0aa52><i class="fa-solid fa-square-check" data-v-41d0aa52></i><p data-v-41d0aa52> \u0EC0\u0EAA\u0EB5\u0EA1\u0EAA\u0EC9\u0EB2\u0E87\u0E84\u0EA7\u0EB2\u0EA1\u0EC0\u0E82\u0EB1\u0EC9\u0E99\u0EC1\u0E82\u0E87\u0EC3\u0E99\u0E81\u0EB2\u0E99\u0E9A\u0ECD\u0EA5\u0EB4\u0EAB\u0EB2\u0E99\u0E97\u0EB8\u0EA5\u0EB0\u0E81\u0EB4\u0E94, \u0E81\u0EB2\u0E99\u0E95\u0EB0\u0EAB\u0EBC\u0EB2\u0E94, \u0E81\u0EB2\u0E99\u0E9E\u0EB1\u0E94\u0E97\u0EB0\u0E99\u0EB2\u0E9C\u0EB0\u0EA5\u0EB4\u0E94\u0E95\u0EB0\u0E9E\u0EB1\u0E99, \u0E81\u0EB2\u0E99\u0EC0\u0E87\u0EB4\u0E99 \u0EC1\u0EA5\u0EB0 \u0E81\u0EB2\u0E99\u0E9A\u0ECD\u0EA5\u0EB4\u0E81\u0EB2\u0E99\u0EA5\u0EB9\u0E81\u0E84\u0EC9\u0EB2. </p></li></ul></div></div></div></section><section data-v-41d0aa52><div class="container" data-v-41d0aa52><div class="gallery" data-v-41d0aa52><h3 data-v-41d0aa52>\u0E9C\u0EBB\u0E99\u0E87\u0EB2\u0E99\u0E97\u0EB5\u0EC8\u0E9C\u0EC8\u0EB2\u0E99\u0EA1\u0EB2</h3>`);
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
                  _push3(`<img${ssrRenderAttr("src", _imports_6)} data-v-41d0aa52${_scopeId2}>`);
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
                  _push3(`<img${ssrRenderAttr("src", _imports_7)} data-v-41d0aa52${_scopeId2}>`);
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
                  _push3(`<img${ssrRenderAttr("src", _imports_8)} data-v-41d0aa52${_scopeId2}>`);
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
                  _push3(`<img${ssrRenderAttr("src", _imports_9)} data-v-41d0aa52${_scopeId2}>`);
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
                  _push3(`<img${ssrRenderAttr("src", _imports_10)} data-v-41d0aa52${_scopeId2}>`);
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
                  _push3(`<img${ssrRenderAttr("src", _imports_11)} data-v-41d0aa52${_scopeId2}>`);
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
                  _push3(`<img${ssrRenderAttr("src", _imports_12)} data-v-41d0aa52${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", { src: _imports_12 })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/product-and-services/biz-coaching.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const bizCoaching = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-41d0aa52"]]);

export { bizCoaching as default };
//# sourceMappingURL=biz-coaching-87ef3135.mjs.map
