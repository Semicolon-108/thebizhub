import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { _ as _export_sfc, d as useNuxtApp } from '../server.mjs';
import { useSSRContext, defineComponent, ref, watch, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, createCommentVNode } from 'vue';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { _ as _imports_0 } from './biz-course-07000c11.mjs';
import patternDivider from './pattern-fc7bb63a.mjs';
import Gallery from './gallery-6aa4083d.mjs';
import { useI18n } from 'vue-i18n';
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

const _imports_1 = "" + buildAssetsURL("1.6ad91f65.png");
const _imports_2 = "" + buildAssetsURL("2.43baa1b4.png");
const _imports_3 = "" + buildAssetsURL("3.d2e73160.png");
const _imports_4 = "" + buildAssetsURL("4.f4bab6a5.png");
const _imports_5 = "" + buildAssetsURL("5.162ef6ea.png");
const _imports_6 = "" + buildAssetsURL("biz-course-element-1.40b8274c.png");
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
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-013caa61><section data-v-013caa61><div class="container video-container" data-v-013caa61><div class="grids is-2-desktop gap-30-desktop is-1-mobile gap-10-mobile" data-v-013caa61><div class="image" data-v-013caa61><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-013caa61></div><div class="text" data-v-013caa61><h3 data-v-013caa61>BIZ COURSES \u0EC1\u0EA1\u0EC8\u0E99\u0EAB\u0E8D\u0EB1\u0E87?</h3> \u0EAB\u0EBC\u0EB1\u0E81\u0EAA\u0EB9\u0E94\u0E81\u0EB2\u0E99\u0E9D\u0EB6\u0E81\u0EAD\u0EBB\u0E9A\u0EAE\u0EBB\u0EA1\u0E97\u0EB2\u0E87\u0E97\u0EB8\u0EA5\u0EB0\u0E81\u0EB4\u0E94 \u0EC4\u0EA5\u0E8D\u0EB0\u0EAA\u0EB1\u0EC9\u0E99 \u0EC0\u0E9E\u0EB7\u0EC8\u0EAD\u0E81\u0EBD\u0EA1\u0E84\u0EA7\u0EB2\u0EA1\u0E9E\u0EC9\u0EAD\u0EA1\u0EC3\u0EAB\u0EC9\u0E81\u0EB1\u0E9A\u0E9C\u0EB9\u0EC9\u0E9B\u0EB0\u0E81\u0EAD\u0E9A\u0E81\u0EB2\u0E99\u0E82\u0EB1\u0EC9\u0E99\u0EC0\u0EA5\u0EB5\u0EC8\u0EA1\u0E95\u0EBB\u0EC9\u0E99 \u0EC1\u0EA5\u0EB0 \u0EA7\u0EC8\u0EB2\u0E97\u0EB5\u0EC8\u0E9C\u0EB9\u0EC9\u0E9B\u0EB0\u0E81\u0EAD\u0E9A\u0E81\u0EB2\u0E99 \u0E97\u0EB5\u0EC8\u0EC0\u0E99\u0EB1\u0EC9\u0E99\u0EDC\u0EB1\u0E81\u0E81\u0EB2\u0E99\u0E9E\u0EB1\u0E94\u0E97\u0EB0\u0E99\u0EB2\u0E84\u0EA7\u0EB2\u0EA1\u0EAE\u0EB9\u0EC9\u0E84\u0EA7\u0EB2\u0EA1\u0EAA\u0EB2\u0EA1\u0EB2\u0E94, \u0E9D\u0EB6\u0E81\u0E9D\u0EBB\u0E99\u0E81\u0EB2\u0E99\u0E84\u0EB4\u0E94\u0EA7\u0EB4\u0EC0\u0E84\u0EB2\u0EB0, \u0EA7\u0EB2\u0E87\u0EC1\u0E9C\u0E99 \u0EC1\u0EA5\u0EB0 \u0E81\u0EBD\u0EA1\u0E84\u0EA7\u0EB2\u0EA1\u0E9E\u0EC9\u0EAD\u0EA1\u0EA2\u0EC8\u0EB2\u0E87\u0EC0\u0EDD\u0EB2\u0EB0\u0EAA\u0EBB\u0EA1 \u0EC0\u0E9E\u0EB7\u0EC8\u0EAD\u0EAB\u0EBC\u0EB8\u0E94\u0E9C\u0EC8\u0EAD\u0E99\u0E84\u0EA7\u0EB2\u0EA1\u0EAA\u0EC8\u0EBD\u0E87 \u0EC1\u0EA5\u0EB0 \u0EC0\u0E9E\u0EB5\u0EC8\u0EA1\u0EC2\u0EAD\u0E81\u0EB2\u0E94\u0EC3\u0E99\u0E81\u0EB2\u0E99\u0E9B\u0EB0\u0E81\u0EAD\u0E9A\u0E97\u0EB8\u0EA5\u0EB0\u0E81\u0EB4\u0E94\u0EC3\u0EAB\u0EC9\u0E9B\u0EB0\u0EAA\u0EBB\u0E9A\u0E9C\u0EBB\u0E99\u0EAA\u0EB3\u0EC0\u0EA5\u0EB1\u0E94\u0EAB\u0EBC\u0EB2\u0E8D\u0E82\u0EB6\u0EC9\u0E99. <div class="contact" data-v-013caa61><h3 data-v-013caa61>${ssrInterpolate(_ctx.$t("contact_us"))}</h3><div class="icons" data-v-013caa61><a href="https://wa.me/8562056508160" data-v-013caa61><i class="fa-brands fa-square-whatsapp" data-v-013caa61></i></a><a href="http://m.me/100091801856212" data-v-013caa61><i class="fa-brands fa-facebook-messenger" data-v-013caa61></i></a></div></div></div></div></div></section><section data-v-013caa61><div class="container" data-v-013caa61><blockquote data-v-013caa61><i class="fa-duotone fa-quote-left" data-v-013caa61></i><h3 data-v-013caa61> BIZ Courses ( \u0EAB\u0EBC\u0EB1\u0E81\u0EAA\u0EB9\u0E94\u0E9D\u0EB6\u0E81\u0EAD\u0EBB\u0E9A\u0EAE\u0EBB\u0EA1\u0E97\u0EB2\u0E87\u0E97\u0EB8\u0EA5\u0EB0\u0E81\u0EB4\u0E94 ) \u0EC0\u0E81\u0EB5\u0E94\u0E82\u0EB6\u0EC9\u0E99\u0EA1\u0EB2\u0EC4\u0E94\u0EC9\u0EC1\u0E99\u0EA7\u0EC3\u0E94 ? </h3> \u0EC0\u0E99\u0EB7\u0EC8\u0EAD\u0E87\u0E88\u0EB2\u0E81\u0EAB\u0EBC\u0EB2\u0E8D\u0E9B\u0EB1\u0E94\u0EC4\u0E88 \u0E97\u0EB2\u0E87\u0E94\u0EC9\u0EB2\u0E99\u0EAA\u0EB0\u0E9E\u0EB2\u0E9A\u0EC0\u0EAA\u0E94\u0E96\u0EB0\u0E81\u0EB4\u0E94-\u0EAA\u0EB1\u0E87\u0E84\u0EBB\u0EA1 \u0EC1\u0EA5\u0EB0 \u0E81\u0EB2\u0E99\u0EC0\u0E9B\u0EB1\u0E99\u0EA2\u0EB9\u0EC8 \u0E97\u0EB5\u0EC8\u0EA1\u0EB5\u0E81\u0EB2\u0E99\u0E9B\u0EC8\u0EBD\u0E99\u0EC1\u0E9B\u0E87\u0EA2\u0EC8\u0EB2\u0E87\u0E9A\u0ECD\u0EC8\u0EA2\u0EB8\u0E94\u0E99\u0EB4\u0EC9\u0E87 \u0E97\u0EB5\u0EC8\u0E95\u0EC9\u0EAD\u0E87\u0EAD\u0EB2\u0EC4\u0EAA\u0E81\u0EB2\u0E99\u0E9B\u0EB1\u0E9A\u0E95\u0EBB\u0EA7\u0EC3\u0EAB\u0EC9\u0E97\u0EB1\u0E99\u0E81\u0EB1\u0E9A\u0EAA\u0EB0\u0E96\u0EB2\u0E99\u0EB0\u0E81\u0EB2\u0E99, \u0EC1\u0E99\u0EA7\u0EC2\u0E99\u0EC9\u0EA1\u0EC3\u0E99\u0E81\u0EB2\u0E99\u0E9B\u0EB0\u0E81\u0EAD\u0E9A\u0EAD\u0EB2\u0E8A\u0EB5\u0E9A\u0E82\u0EAD\u0E87\u0E9C\u0EB9\u0EC9\u0E84\u0EBB\u0E99 \u0E88\u0EB6\u0EC8\u0E87\u0EC0\u0EA5\u0EB5\u0EC8\u0EA1\u0EA1\u0EB5\u0E81\u0EB2\u0E99\u0E9B\u0EC8\u0EBD\u0E99\u0EC1\u0E9B\u0E87\u0EC4\u0E9B. \u0E9B\u0EB1\u0E94\u0E88\u0EB8\u0E9A\u0EB1\u0E99, \u0EAE\u0EB9\u0E9A\u0EC1\u0E9A\u0E9A\u0E81\u0EB2\u0E99\u0E9B\u0EB0\u0E81\u0EAD\u0E9A\u0EAD\u0EB2\u0E8A\u0EB5\u0E9A\u0EA1\u0EB5\u0EA2\u0EB9\u0EC8\u0EAB\u0EBC\u0EB2\u0E81\u0EAB\u0EBC\u0EB2\u0E8D \u0EC1\u0E95\u0EC8\u0EC3\u0E99\u0E99\u0EB1\u0EC9\u0E99\u0EAE\u0EB9\u0E9A\u0EC1\u0E9A\u0E9A\u0E97\u0EB5\u0EC8\u0E9C\u0EB9\u0EC9\u0E84\u0EBB\u0E99\u0EA1\u0EB5\u0EC1\u0E99\u0EA7\u0EC2\u0E99\u0EC9\u0EA1\u0EC3\u0EAB\u0EC9\u0E84\u0EA7\u0EB2\u0EA1\u0EAA\u0EBB\u0E99\u0EC3\u0E88\u0EAA\u0EB9\u0E87 \u0EC1\u0EA5\u0EB0 \u0EA2\u0EB2\u0E81\u0EAB\u0EB1\u0E99\u0EA1\u0EB2\u0EC0\u0EAE\u0EB1\u0E94\u0EC0\u0E9E\u0EB5\u0EC8\u0EA1\u0E82\u0EB6\u0EC9\u0E99\u0EC0\u0EA5\u0EB7\u0EC9\u0EAD\u0E8D\u0EC6 \u0E81\u0ECD\u0EC1\u0EA1\u0EC8\u0E99 \u0E81\u0EB2\u0E99\u0EA1\u0EB5\u0E97\u0EB8\u0EA5\u0EB0\u0E81\u0EB4\u0E94\u0EC0\u0E9B\u0EB1\u0E99\u0E82\u0EAD\u0E87\u0E95\u0EBB\u0E99\u0EC0\u0EAD\u0E87 \u0EAB\u0EBC\u0EB7 \u0EC0\u0E9B\u0EB1\u0E99\u0E9C\u0EB9\u0EC9\u0E9B\u0EB0\u0E81\u0EAD\u0E9A\u0E81\u0EB2\u0E99, \u0EAA\u0EB3\u0EA5\u0EB1\u0E9A\u0E9C\u0EB9\u0EC9\u0E97\u0EB5\u0EC8\u0EC0\u0EAE\u0EB1\u0E94\u0EA7\u0EBD\u0E81\u0E9B\u0EB0\u0E88\u0EB3\u0EA2\u0EB9\u0EC8 \u0E81\u0ECD\u0EA1\u0EB5\u0E84\u0EA7\u0EB2\u0EA1\u0E95\u0EC9\u0EAD\u0E87\u0E81\u0EB2\u0E99\u0EA2\u0EB2\u0E81\u0EA1\u0EB5\u0EAD\u0EB2\u0E8A\u0EB5\u0E9A\u0EAA\u0EB3\u0EAE\u0EAD\u0E87 \u0EC0\u0E9B\u0EB1\u0E99\u0E8A\u0EC8\u0EAD\u0E87\u0E97\u0EB2\u0E87\u0EAB\u0EB2\u0EA5\u0EB2\u0E8D\u0EC4\u0E94\u0EC9\u0EC0\u0EAA\u0EB5\u0EA1, \u0EA5\u0EA7\u0EA1\u0EC4\u0E9B\u0EC0\u0E96\u0EB4\u0E87\u0E9C\u0EB9\u0EC9\u0EA7\u0EC8\u0EB2\u0E87\u0E87\u0EB2\u0E99 \u0E97\u0EB5\u0EC8\u0EA1\u0EB5\u0E84\u0EA7\u0EB2\u0EA1\u0E95\u0EC9\u0EAD\u0E87\u0E81\u0EB2\u0E99\u0EA2\u0EB2\u0E81\u0E9B\u0EB0\u0E81\u0EAD\u0E9A\u0EAD\u0EB2\u0E8A\u0EB5\u0E9A\u0E94\u0EC9\u0EA7\u0E8D\u0E95\u0EBB\u0E99\u0EC0\u0EAD\u0E87 \u0EC1\u0E95\u0EC8\u0E81\u0ECD\u0E9A\u0ECD\u0EC8\u0EC1\u0EA1\u0EC8\u0E99\u0EA7\u0EC8\u0EB2\u0E97\u0EB8\u0E81\u0E84\u0EBB\u0E99\u0E88\u0EB0\u0E9B\u0EB0\u0EAA\u0EBB\u0E9A\u0E84\u0EA7\u0EB2\u0EA1\u0EAA\u0EB3\u0EC0\u0EA5\u0EB1\u0E94 \u0EAB\u0EB2\u0E81\u0E82\u0EB2\u0E94\u0E81\u0EB2\u0E99\u0EA7\u0EB4\u0EC0\u0E84\u0EB2\u0EB0, \u0EA7\u0EB2\u0E87\u0EC1\u0E9C\u0E99 \u0EC1\u0EA5\u0EB0 \u0E81\u0EBD\u0EA1\u0E84\u0EA7\u0EB2\u0EA1\u0E9E\u0EC9\u0EAD\u0EA1\u0E97\u0EB5\u0EC8\u0E94\u0EB5. \u0E94\u0EB1\u0EC8\u0E87\u0E99\u0EB1\u0EC9\u0E99, BIZ Courses \u0EAB\u0EBC\u0EB7 \u0EAB\u0EBC\u0EB1\u0E81\u0EAA\u0EB9\u0E94\u0E9D\u0EB6\u0E81\u0EAD\u0EBB\u0E9A\u0EAE\u0EBB\u0EA1\u0E97\u0EB2\u0E87\u0E97\u0EB8\u0EA5\u0EB0\u0E81\u0EB4\u0E94 \u0EC4\u0EA5\u0E8D\u0EB0\u0EAA\u0EB1\u0EC9\u0E99 \u0E88\u0EB6\u0EC8\u0E87\u0EA1\u0EB5\u0E84\u0EA7\u0EB2\u0EA1\u0EAA\u0EB3\u0E84\u0EB1\u0E99\u0EAB\u0EBC\u0EB2\u0E8D \u0EC0\u0E9E\u0EB7\u0EC8\u0EAD\u0E81\u0EBD\u0EA1\u0E84\u0EA7\u0EB2\u0EA1\u0E9E\u0EC9\u0EAD\u0EA1\u0EC3\u0EAB\u0EC9\u0E81\u0EB1\u0E9A\u0E9C\u0EB9\u0EC9\u0E9B\u0EB0\u0E81\u0EAD\u0E9A\u0E81\u0EB2\u0E99\u0E82\u0EB1\u0EC9\u0E99\u0EC0\u0EA5\u0EB5\u0EC8\u0EA1\u0E95\u0EBB\u0EC9\u0E99 \u0EC1\u0EA5\u0EB0 \u0EA7\u0EC8\u0EB2\u0E97\u0EB5\u0EC8\u0E9C\u0EB9\u0EC9\u0E9B\u0EB0\u0E81\u0EAD\u0E9A\u0E81\u0EB2\u0E99. </blockquote></div></section><section data-v-013caa61><div class="container" data-v-013caa61><div class="grids is-5-desktop gap-10-desktop" data-v-013caa61><div class="element" data-v-013caa61><img${ssrRenderAttr("src", _imports_1)} data-v-013caa61><p data-v-013caa61>\u0EA7\u0EC8\u0EB2\u0E97\u0EB5\u0EC8\u0E9C\u0EB9\u0EC9\u0E9B\u0EB0\u0E81\u0EAD\u0E9A\u0E81\u0EB2\u0E99</p><p data-v-013caa61>(Future Entrepreneur)</p></div><div class="element" data-v-013caa61><img${ssrRenderAttr("src", _imports_2)} alt="" data-v-013caa61><p data-v-013caa61>\u0E9C\u0EB9\u0EC9\u0E9B\u0EB0\u0E81\u0EAD\u0E9A\u0EAD\u0EB2\u0E8A\u0EB5\u0E9A\u0E94\u0EC9\u0EA7\u0E8D\u0E95\u0EBB\u0E99\u0EC0\u0EAD\u0E87</p><p data-v-013caa61>(Self-employed)</p></div><div class="element" data-v-013caa61><img${ssrRenderAttr("src", _imports_3)} alt="" data-v-013caa61><p data-v-013caa61>\u0E9C\u0EB9\u0EC9\u0E9B\u0EB0\u0E81\u0EAD\u0E9A\u0E81\u0EB2\u0E99\u0EC3\u0EDD\u0EC8</p><p data-v-013caa61>(New entrepreneur)</p></div><div class="element" data-v-013caa61><img${ssrRenderAttr("src", _imports_4)} alt="" data-v-013caa61><p data-v-013caa61>\u0E88\u0EB8\u0E99\u0EA5\u0EB0\u0EA7\u0EB4\u0EAA\u0EB2\u0EAB\u0EB0\u0E81\u0EB4\u0E94</p><p data-v-013caa61>(Micro entreprise)</p></div><div class="element" data-v-013caa61><img${ssrRenderAttr("src", _imports_5)} alt="" data-v-013caa61><p data-v-013caa61>\u0EA7\u0EB4\u0EAA\u0EB2\u0EAB\u0EB0\u0E81\u0EB4\u0E94\u0E82\u0EB0\u0EDC\u0EB2\u0E94\u0E99\u0EC9\u0EAD\u0E8D</p><p data-v-013caa61>(Small entreprise)</p></div></div></div></section><section data-v-013caa61><div class="container" data-v-013caa61>`);
      _push(ssrRenderComponent(patternDivider, { style: { "margin-bottom": "30px" } }, null, _parent));
      _push(`<div class="grids is-12-desktop gap-50-desktop" data-v-013caa61><div class="span-5-desktop" data-v-013caa61><img${ssrRenderAttr("src", _imports_6)} alt="" data-v-013caa61></div><div class="takeaway span-7-desktop" data-v-013caa61><h3 data-v-013caa61>\u0EC0\u0E82\u0EBB\u0EC9\u0EB2\u0EAE\u0EC8\u0EA7\u0EA1 BIZ Courses \u0E88\u0EB0\u0EC4\u0E94\u0EC9\u0EAB\u0E8D\u0EB1\u0E87?</h3><p data-v-013caa61>\u0E97\u0EB8\u0E81\u0EAB\u0EBC\u0EB1\u0E81\u0EAA\u0EB9\u0E94\u0E82\u0EAD\u0E87 BIZ Courses, \u0E9C\u0EB9\u0EC9\u0EC0\u0E82\u0EBB\u0EC9\u0EB2\u0EAE\u0EC8\u0EA7\u0EA1\u0E9D\u0EB6\u0E81 \u0E95\u0EB2\u0EA1\u0EC0\u0E87\u0EB7\u0EC8\u0EAD\u0E99\u0EC4\u0E82* \u0E88\u0EB0\u0EC4\u0E94\u0EC9</p><ul data-v-013caa61><li data-v-013caa61><i class="fa-solid fa-square-check" data-v-013caa61></i><p data-v-013caa61> \u0E9E\u0EB1\u0E94\u0E97\u0EB0\u0E99\u0EB2\u0E84\u0EA7\u0EB2\u0EA1\u0EAE\u0EB9\u0EC9\u0E84\u0EA7\u0EB2\u0EA1\u0EAA\u0EB2\u0EA1\u0EB2\u0E94, \u0E9D\u0EB6\u0E81\u0E9D\u0EBB\u0E99\u0E81\u0EB2\u0E99\u0E84\u0EB4\u0E94\u0EA7\u0EB4\u0EC0\u0E84\u0EB2\u0EB0, \u0EA7\u0EB2\u0E87\u0EC1\u0E9C\u0E99 \u0EC1\u0EA5\u0EB0 \u0E81\u0EBD\u0EA1\u0E84\u0EA7\u0EB2\u0EA1\u0E9E\u0EC9\u0EAD\u0EA1\u0EA2\u0EC8\u0EB2\u0E87\u0EC0\u0EDD\u0EB2\u0EB0\u0EAA\u0EBB\u0EA1 \u0E9C\u0EC8\u0EB2\u0E99\u0E82\u0EB0\u0E9A\u0EA7\u0E99\u0E81\u0EB2\u0E99 \u0EC1\u0EA5\u0EB0 \u0E82\u0EB1\u0EC9\u0E99\u0E95\u0EAD\u0E99\u0E81\u0EB4\u0E94\u0E88\u0EB0\u0E81\u0EB3\u0E81\u0EB2\u0E99\u0E9D\u0EB6\u0E81\u0EAD\u0EBB\u0E9A\u0EAE\u0EBB\u0EA1 (Competency development) </p></li><li data-v-013caa61><i class="fa-solid fa-square-check" data-v-013caa61></i><p data-v-013caa61> \u0EC0\u0E84\u0EB7\u0EC8\u0EAD\u0E87\u0EA1\u0EB7\u0E97\u0EB5\u0EC8\u0EC0\u0E9B\u0EB1\u0E99\u0E9B\u0EB0\u0EC2\u0EAB\u0E8D\u0E94 \u0EC0\u0E9E\u0EB7\u0EC8\u0EAD\u0E99\u0EB3\u0EC4\u0E9B\u0E9E\u0EB1\u0E94\u0E97\u0EB0\u0E99\u0EB2\u0E97\u0EB8\u0EA5\u0EB0\u0E81\u0EB4\u0E94 (Business tools) </p></li><li data-v-013caa61><i class="fa-solid fa-square-check" data-v-013caa61></i><p data-v-013caa61>\u0E9E\u0EB1\u0E94\u0E97\u0EB0\u0E99\u0EB2\u0EC1\u0E99\u0EA7\u0E84\u0EA7\u0EB2\u0EA1\u0E84\u0EB4\u0E94\u0EC1\u0E9A\u0E9A\u0E9C\u0EB9\u0EC9\u0E9B\u0EB0\u0E81\u0EAD\u0E9A\u0E81\u0EB2\u0E99 (Entrepreneurial mindset)</p></li><li data-v-013caa61><i class="fa-solid fa-square-check" data-v-013caa61></i><p data-v-013caa61> \u0E99\u0EB3\u0EC3\u0E8A\u0EC9\u0EAA\u0EB4\u0EC8\u0E87\u0E97\u0EB5\u0EC8\u0EC4\u0E94\u0EC9\u0EAE\u0EB1\u0E9A\u0E88\u0EB2\u0E81\u0E81\u0EB2\u0E99\u0E9D\u0EB6\u0E81\u0EC4\u0E9B\u0E99\u0EB3\u0EC3\u0E8A\u0EC9 \u0EC0\u0E9E\u0EB7\u0EC8\u0EAD\u0EAB\u0EBC\u0EB8\u0E94\u0E9C\u0EC8\u0EAD\u0E99\u0E84\u0EA7\u0EB2\u0EA1\u0EAA\u0EC8\u0EBD\u0E87 \u0EC1\u0EA5\u0EB0 \u0EC0\u0E9E\u0EB5\u0EC8\u0EA1\u0EC2\u0EAD\u0E81\u0EB2\u0E94\u0EC3\u0E99\u0E81\u0EB2\u0E99\u0E9B\u0EB0\u0E81\u0EAD\u0E9A\u0E97\u0EB8\u0EA5\u0EB0\u0E81\u0EB4\u0E94\u0EC3\u0EAB\u0EC9\u0E9B\u0EB0\u0EAA\u0EBB\u0E9A\u0E9C\u0EBB\u0E99\u0EAA\u0EB3\u0EC0\u0EA5\u0EB1\u0E94\u0EAB\u0EBC\u0EB2\u0E8D\u0E82\u0EB6\u0EC9\u0E99 (Application) </p></li><li data-v-013caa61><i class="fa-solid fa-square-check" data-v-013caa61></i><p data-v-013caa61> \u0EAE\u0EB1\u0E9A\u0EC3\u0E9A\u0EA2\u0EB1\u0EC9\u0E87\u0EA2\u0EB7\u0E99\u0E81\u0EB2\u0E99\u0EC0\u0E82\u0EBB\u0EC9\u0EB2\u0EAE\u0EC8\u0EA7\u0EA1\u0E9D\u0EB6\u0E81\u0EAD\u0EBB\u0E9A\u0EAE\u0EBB\u0EA1 \u0E88\u0EB2\u0E81\u0E9C\u0EB9\u0EC9\u0E88\u0EB1\u0E94 (Certificate of Participation) </p></li></ul></div></div>`);
      _push(ssrRenderComponent(patternDivider, { style: { "margin-top": "30px" } }, null, _parent));
      _push(`</div></section><section data-v-013caa61><div class="container" data-v-013caa61><h3 class="section-title" data-v-013caa61>\u0E9C\u0EBB\u0E99\u0E87\u0EB2\u0E99\u0E97\u0EB5\u0EC8\u0E9C\u0EC8\u0EB2\u0E99\u0EA1\u0EB2</h3><!--[-->`);
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/product-and-services/biz-course.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const bizCourse = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-013caa61"]]);

export { bizCourse as default };
//# sourceMappingURL=biz-course-86427d62.mjs.map
