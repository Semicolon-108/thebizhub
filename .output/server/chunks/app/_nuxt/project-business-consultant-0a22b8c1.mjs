import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { _ as _export_sfc, d as useNuxtApp } from '../server.mjs';
import { useSSRContext, defineComponent, ref, watch, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList } from 'vue';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _imports_0 } from './biz-course-07000c11.mjs';
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

const _imports_1 = "" + buildAssetsURL("1.748220c8.png");
const _imports_2 = "" + buildAssetsURL("2.bb73bd9b.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "project-business-consultant",
  __ssrInlineRender: true,
  setup(__props) {
    const axios = useNuxtApp().$axios;
    const urlImage = useNuxtApp().$imageURL;
    const { locale } = useI18n();
    const isLang = ref();
    const ShowGallery = ref(false);
    const info = ref([]);
    const area = ref("Project/Business Consultancy");
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
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-f95735cb><section data-v-f95735cb><div class="container video-container" data-v-f95735cb><div class="grids is-2-desktop gap-30-desktop is-1-mobile gap-10-mobile" data-v-f95735cb><div class="image" data-v-f95735cb><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-f95735cb></div><div class="text" data-v-f95735cb><h3 data-v-f95735cb> Project / Business Consultancy <br data-v-f95735cb> \u0EC1\u0EA1\u0EC8\u0E99\u0EAB\u0E8D\u0EB1\u0E87? </h3> \u0E9A\u0ECD\u0EA5\u0EB4\u0E81\u0EB2\u0E99\u0E97\u0EB5\u0EC8\u0E9B\u0EB6\u0E81\u0EAA\u0EB2\u0EC2\u0E84\u0E87\u0E81\u0EB2\u0E99 \u0EC1\u0EA5\u0EB0 \u0E97\u0EB8\u0EA5\u0EB0\u0E81\u0EB4\u0E94 \u0EAA\u0EB0\u0EDC\u0EAD\u0E87\u0EA7\u0EBD\u0E81\u0E87\u0EB2\u0E99\u0E81\u0EB2\u0E99\u0EC3\u0EAB\u0EC9\u0E84\u0EB3\u0E9B\u0EB6\u0E81\u0EAA\u0EB2, \u0EA7\u0EB2\u0E87\u0EC1\u0E9C\u0E99, \u0E88\u0EB1\u0E94\u0E95\u0EB1\u0EC9\u0E87\u0E9B\u0EB0\u0E95\u0EB4\u0E9A\u0EB1\u0E94 \u0EC1\u0EA5\u0EB0 \u0E9B\u0EB0\u0EC0\u0EA1\u0EB5\u0E99\u0E9C\u0EBB\u0E99\u0EAA\u0EB3\u0EC0\u0EA5\u0EB1\u0E94\u0E82\u0EAD\u0E87\u0EC2\u0E84\u0E87\u0E81\u0EB2\u0E99 \u0E97\u0EB5\u0EC8\u0E81\u0EC8\u0EBD\u0EA7\u0E82\u0EC9\u0EAD\u0E87\u0E81\u0EB1\u0E9A\u0E81\u0EB2\u0E99\u0E9B\u0EB0\u0E81\u0EAD\u0E9A\u0EAD\u0EB2\u0E8A\u0EB5\u0E9A\u0E94\u0EC9\u0EA7\u0E8D\u0E95\u0EBB\u0E99\u0EC0\u0EAD\u0E87, \u0E81\u0EB2\u0E99\u0E9B\u0EB0\u0E81\u0EAD\u0E9A\u0E97\u0EB8\u0EA5\u0EB0\u0E81\u0EB4\u0E94 \u0EC1\u0EA5\u0EB0 \u0E81\u0EB2\u0E99\u0EC0\u0E95\u0EB5\u0E9A\u0EC2\u0E95\u0E82\u0EAD\u0E87\u0E97\u0EB8\u0EA5\u0EB0\u0E81\u0EB4\u0E94. <div class="contact" data-v-f95735cb><h3 data-v-f95735cb>${ssrInterpolate(_ctx.$t("contact_us"))}</h3><div class="icons" data-v-f95735cb><a href="https://wa.me/8562056508160" data-v-f95735cb><i class="fa-brands fa-square-whatsapp" data-v-f95735cb></i></a><a href="http://m.me/100091801856212" data-v-f95735cb><i class="fa-brands fa-facebook-messenger" data-v-f95735cb></i></a></div></div></div></div></div></section><section data-v-f95735cb><div class="container" data-v-f95735cb><h3 class="section-title" data-v-f95735cb>Project / Business Consultancy \u0EC0\u0EDD\u0EB2\u0EB0\u0E81\u0EB1\u0E9A\u0EC3\u0E9C</h3><div class="grids is-2-desktop gap-10-desktop" data-v-f95735cb><div class="element" data-v-f95735cb><img${ssrRenderAttr("src", _imports_1)} data-v-f95735cb><p data-v-f95735cb>\u0E9A\u0ECD\u0EA5\u0EB4\u0EAA\u0EB1\u0E94/\u0EAD\u0EBB\u0E87\u0E81\u0EAD\u0E99</p></div><div class="element" data-v-f95735cb><img${ssrRenderAttr("src", _imports_2)} data-v-f95735cb><p data-v-f95735cb> \u0EC2\u0E84\u0E87\u0E81\u0EB2\u0E99\u0E97\u0EB5\u0EC8\u0E9B\u0EB4\u0EC8\u0E99\u0EAD\u0EC9\u0EAD\u0EA1\u0EA7\u0EBD\u0E81\u0E87\u0EB2\u0E99 \u0E81\u0EB2\u0E99\u0E9B\u0EB0\u0E81\u0EAD\u0E9A\u0EAD\u0EB2\u0E8A\u0EB5\u0E9A\u0E94\u0EC9\u0EA7\u0E8D\u0E95\u0EBB\u0E99\u0EC0\u0EAD\u0E87 \u0EC1\u0EA5\u0EB0 \u0E81\u0EB2\u0E99\u0E9B\u0EB0\u0E81\u0EAD\u0E9A\u0E97\u0EB8\u0EA5\u0EB0\u0E81\u0EB4\u0E94 </p></div></div></div></section><section data-v-f95735cb><div class="container" data-v-f95735cb><h3 class="section-title" data-v-f95735cb>\u0E9C\u0EBB\u0E99\u0E87\u0EB2\u0E99\u0E97\u0EB5\u0EC8\u0E9C\u0EC8\u0EB2\u0E99\u0EA1\u0EB2</h3><!--[-->`);
      ssrRenderList(unref(info), (i, indx) => {
        _push(`<div class="work" data-v-f95735cb><div class="header" data-v-f95735cb><h3 data-v-f95735cb>${ssrInterpolate(i.title)}</h3></div><div class="body" data-v-f95735cb>`);
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
                      _push3(`<img${ssrRenderAttr("src", unref(urlImage) + o)} data-v-f95735cb${_scopeId2}>`);
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
                }), 256))
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
        if (unref(ShowGallery)) {
          _push(ssrRenderComponent(Gallery, {
            data: i.image,
            onCloseShowGallery: ($event) => ShowGallery.value = false
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/product-and-services/project-business-consultant.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const projectBusinessConsultant = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f95735cb"]]);

export { projectBusinessConsultant as default };
//# sourceMappingURL=project-business-consultant-0a22b8c1.mjs.map
