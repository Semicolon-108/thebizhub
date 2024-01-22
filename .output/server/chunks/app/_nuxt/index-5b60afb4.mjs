import { _ as _export_sfc, d as useNuxtApp } from '../server.mjs';
import { useSSRContext, defineComponent, ref, watch, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _imports_0 } from './team-2b5e560f.mjs';
import ProductAndServcie from './product-and-services-778ec1a1.mjs';
import _sfc_main$1 from './works-94940a94.mjs';
import { useI18n } from 'vue-i18n';
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
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'axios';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import './nuxt-link-691e5b50.mjs';
import 'swiper/vue';
import 'swiper/modules';
import './gallery-697764f2.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const axios = useNuxtApp().$axios;
    const { locale } = useI18n();
    const isLang = ref();
    const isWork = ref([]);
    const tabs = ref([]);
    ref([
      {
        name: "\u0EAE\u0EC8\u0EA7\u0EA1\u0E88\u0EB1\u0E94\u0E87\u0EB2\u0E99 Job Fest \u0E87\u0EB2\u0E99\u0EA1\u0EB0\u0EAB\u0EB0\u0E81\u0ECD\u0EB2\u0EA7\u0EBD\u0E81\u0EC0\u0EAE\u0EB1\u0E94\u0E87\u0EB2\u0E99\u0E97\u0ECD\u0EB2\u0EC1\u0E9A\u0E9A\u0EC0\u0E9B\u0EB5\u0E94\u0E81\u0EC9\u0EA7\u0EB2\u0E87 2023",
        images: [
          {
            img: "Jobfest/jobfest20231.jpg"
          },
          {
            img: "Jobfest/jobfest20232.jpg"
          },
          {
            img: "Jobfest/jobfest20233.jpg"
          },
          {
            img: "Jobfest/jobfest20234.jpg"
          },
          {
            img: "Jobfest/jobfest20235.jpg"
          },
          {
            img: "Jobfest/jobfest20236.jpg"
          }
        ]
      },
      {
        name: "3.	\u0EC0\u0E9B\u0EB1\u0E99\u0E9C\u0EB9\u0EC9\u0EC3\u0EAB\u0EC9\u0E84\u0ECD\u0EB2\u0E9B\u0EB6\u0E81\u0EAA\u0EB2 ( Mentor \u0EC1\u0EA5\u0EB0 Coach ) \u0EC3\u0EAB\u0EC9\u0E81\u0EB1\u0E9A\u0EAB\u0EBC\u0EB2\u0E8D\u0E81\u0EC8\u0EA7\u0EB2 20 \u0E97\u0EB8\u0EA5\u0EB0\u0E81\u0EB4\u0E94, \u0E9E\u0EB2\u0E8D\u0EC3\u0E95\u0EC9\u0EC2\u0E84\u0E87\u0E81\u0EB2\u0E99 ASEAN Mentorship For Entrepreneurs Network ( AMEN )",
        images: [
          {
            img: "amen/amen1.jpg"
          },
          {
            img: "amen/amen2.jpg"
          },
          {
            img: "amen/amen3.jpg"
          },
          {
            img: "amen/amen4.jpg"
          },
          {
            img: "amen/amen5.jpg"
          },
          {
            img: "amen/amen6.jpg"
          },
          {
            img: "amen/amen7.jpg"
          }
        ]
      },
      {
        name: "\u0EAE\u0EC8\u0EA7\u0EA1\u0E88\u0EB1\u0E94\u0E87\u0EB2\u0E99 \u0EA1\u0EB0\u0EAB\u0EB2\u0E81\u0ECD\u0EB2\u0EA7\u0EBD\u0E81\u0EC0\u0EAE\u0EB1\u0E94\u0E87\u0EB2\u0E99\u0E97\u0ECD\u0EB2\u0E97\u0EC8\u0EB2\u0EC1\u0E82\u0E81, \u0EC1\u0E82\u0EA7\u0E87\u0E84\u0ECD\u0EB2\u0EA1\u0EC8\u0EA7\u0E99 \u0EC1\u0EA5\u0EB0 \u0E88\u0EB1\u0E94\u0E9D\u0EB6\u0E81\u0EAD\u0EBB\u0E9A\u0EAE\u0EBB\u0EA1 \u0EAB\u0EBB\u0EA7\u0E82\u0ECD\u0EC9: \u0E81\u0EB2\u0E99\u0E9B\u0EB0\u0E81\u0EAD\u0E9A\u0EAD\u0EB2\u0E8A\u0EB5\u0E9A\u0E94\u0EC9\u0EA7\u0E8D\u0E95\u0EBB\u0E99\u0EC0\u0EAD\u0E87",
        images: [
          {
            img: "Jobfest/jobfest-thakhek1.jpg"
          },
          {
            img: "Jobfest/jobfest-thakhek2.jpg"
          },
          {
            img: "Jobfest/jobfest-thakhek3.jpg"
          },
          {
            img: "Jobfest/jobfest-thakhek4.jpg"
          },
          {
            img: "Jobfest/jobfest-thakhek5.jpg"
          },
          {
            img: "Jobfest/jobfest-thakhek6.jpg"
          },
          {
            img: "Jobfest/jobfest-thakhek7.jpg"
          }
        ]
      },
      {
        name: "\u0EAE\u0EC8\u0EA7\u0EA1\u0E88\u0EB1\u0E94\u0E87\u0EB2\u0E99 \u0E81\u0EB4\u0E94\u0E88\u0EB0\u0E81\u0ECD\u0EB2\u0EA5\u0EB0\u0E99\u0EB6\u0E81\u0EC0\u0E96\u0EB4\u0E87\u0EA7\u0EB1\u0E99\u0E81\u0ECD\u0EB2\u0EA1\u0EB0\u0E81\u0EAD\u0E99\u0EAA\u0EB2\u0E81\u0EBB\u0E99  \u0EC1\u0EA5\u0EB0 \u0E88\u0EB1\u0E94\u0E9D\u0EB6\u0E81\u0EAD\u0EBB\u0E9A\u0EAE\u0EBB\u0EA1 \u0EAB\u0EBB\u0EA7\u0E82\u0ECD\u0EC9: \u0E81\u0EB2\u0E99\u0E9B\u0EB0\u0E81\u0EAD\u0E9A\u0EAD\u0EB2\u0E8A\u0EB5\u0E9A\u0E94\u0EC9\u0EA7\u0E8D\u0E95\u0EBB\u0E99\u0EC0\u0EAD\u0E87",
        images: [
          {
            img: "Jobfest/jobfest-labour1.jpg"
          },
          {
            img: "Jobfest/jobfest-labour2.jpg"
          },
          {
            img: "Jobfest/jobfest-labour3.jpg"
          }
        ]
      },
      {
        name: "\u0E81\u0EB2\u0E99\u0E88\u0EB1\u0E94\u0E9D\u0EB6\u0E81\u0EAD\u0EBB\u0E9A\u0EAE\u0EBB\u0EA1\u0EC1\u0E9A\u0E9A\u0EC0\u0E8A\u0EB4\u0EC8\u0E87\u0EDC\u0EC9\u0EB2",
        images: [
          {
            img: "coaching/coaching1.jpg"
          },
          {
            img: "coaching/coaching2.jpg"
          },
          {
            img: "coaching/coaching3.jpg"
          },
          {
            img: "coaching/coaching4.jpg"
          }
        ]
      },
      {
        name: "\u0E97\u0EB5\u0EA1\u0E84\u0EB9\u0E9D\u0EB6\u0E81 \u0EC1\u0EA5\u0EB0 \u0E97\u0EB5\u0EC8\u0E9B\u0EB6\u0E81\u0EAA\u0EB2\u0E82\u0EAD\u0E87\u0EC2\u0E84\u0E87\u0E81\u0EB2\u0E99\u0E9D\u0EB6\u0E81\u0EAD\u0EBB\u0E9A\u0EAE\u0EBB\u0EA1\u0E9E\u0EB6\u0EC9\u0E99\u0E96\u0EB2\u0E99\u0E81\u0EB2\u0E99\u0E9B\u0EB0\u0E81\u0EAD\u0E9A\u0E97\u0EB8\u0EA5\u0EB0\u0E81\u0EB4\u0E94 \u0E9E\u0EB2\u0E8D\u0EC3\u0E95\u0EC9\u0EC2\u0E84\u0E87\u0E81\u0EB2\u0E99 Vtess, Swisscontact",
        images: [
          {
            img: "bet/bet1.jpg"
          },
          {
            img: "bet/bet2.jpg"
          },
          {
            img: "bet/bet3.jpg"
          },
          {
            img: "bet/bet4.jpg"
          },
          {
            img: "bet/bet5.jpg"
          },
          {
            img: "bet/bet6.jpg"
          },
          {
            img: "bet/bet7.jpg"
          }
        ]
      }
    ]);
    const fetch = async () => {
      await axios.post(`get-achievement-api?lang=${isLang.value}`).then((res) => {
        if (res) {
          isWork.value = res.data.info;
        }
      });
    };
    const fetchIntro = async () => {
      const isLang2 = locale.value ? locale.value : "en";
      const data = await axios.post(`get-intro-api?lang=${isLang2}`);
      tabs.value = data.data.info;
    };
    fetch();
    fetchIntro();
    watch(
      () => locale.value,
      (value) => {
        isLang.value = value;
        fetch();
        fetchIntro();
      },
      { immediate: true, deep: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-ab25f69b><div class="container" data-v-ab25f69b><section class="section" data-v-ab25f69b><h1 class="page-title" data-v-ab25f69b>THE BIZ HUB \u0EC1\u0EA1\u0EC8\u0E99\u0EAB\u0E8D\u0EB1\u0E87?</h1><div class="grids is-2-desktop is-1-mobile gap-20-desktop" data-v-ab25f69b><!--[-->`);
      ssrRenderList(unref(tabs), (i, index2) => {
        _push(`<div class="box" data-v-ab25f69b><h3 class="margin-bottom-10" data-v-ab25f69b>${ssrInterpolate(i.key)}</h3><p data-v-ab25f69b>${ssrInterpolate(i.desc)}</p></div>`);
      });
      _push(`<!--]--></div></section></div><img class="top-image"${ssrRenderAttr("src", _imports_0)} data-v-ab25f69b>`);
      _push(ssrRenderComponent(ProductAndServcie, null, null, _parent));
      _push(`<h1 class="section-title" data-v-ab25f69b>\u0E9C\u0EBB\u0E99\u0E87\u0EB2\u0E99\u0E82\u0EAD\u0E87 THE BIZ HUB</h1>`);
      _push(ssrRenderComponent(_sfc_main$1, { work: unref(isWork) }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about-us/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ab25f69b"]]);

export { index as default };
//# sourceMappingURL=index-5b60afb4.mjs.map
