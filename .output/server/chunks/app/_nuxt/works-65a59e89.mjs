import { Swiper, SwiperSlide } from 'swiper/vue';
import { d as useNuxtApp } from '../server.mjs';
import { defineComponent, ref, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import Gallery from './gallery-6aa4083d.mjs';
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
import 'vue-i18n';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "works",
  __ssrInlineRender: true,
  props: ["work"],
  setup(__props) {
    const urlImage = useNuxtApp().$imageURL;
    const ShowGallery = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Swiper = Swiper;
      const _component_SwiperSlide = SwiperSlide;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))}><!--[-->`);
      ssrRenderList(__props.work, (i, index) => {
        _push(`<div class="work"><div class="header"><h3>${ssrInterpolate(i.title)}</h3></div><div class="body">`);
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
            delay: 5e3,
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
                      _push3(`<img${ssrRenderAttr("src", unref(urlImage) + o)} alt=""${_scopeId2}>`);
                    } else {
                      return [
                        createVNode("img", {
                          src: unref(urlImage) + o,
                          alt: ""
                        }, null, 8, ["src"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]--><div class="swiper-pagination"${_scopeId}></div>`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(i.image, (o) => {
                  return openBlock(), createBlock(_component_SwiperSlide, {
                    onClick: ($event) => ShowGallery.value = true
                  }, {
                    default: withCtx(() => [
                      createVNode("img", {
                        src: unref(urlImage) + o,
                        alt: ""
                      }, null, 8, ["src"])
                    ]),
                    _: 2
                  }, 1032, ["onClick"]);
                }), 256)),
                createVNode("div", { class: "swiper-pagination" })
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
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about-us/works.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=works-65a59e89.mjs.map
