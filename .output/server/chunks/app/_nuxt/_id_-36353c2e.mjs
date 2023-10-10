import { _ as _export_sfc, a as useNuxtApp, b as useRoute, u as useRouter, d as useHead } from '../server.mjs';
import { useSSRContext, defineComponent, ref, withAsyncContext, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import _sfc_main$1 from './related-d5870c9b.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const imageURL = useNuxtApp().$imageURL;
    const axios = useNuxtApp().$axios;
    const https = useNuxtApp().$https;
    const route = useRoute();
    useRouter();
    const msgError = ref();
    const title = ref();
    const coverPage = ref();
    const videoLink = ref("");
    const tag = ref();
    const category = ref();
    const detail = ref();
    const createdAt = ref();
    const related = ref([]);
    const copy = ref(true);
    const fetch = async () => {
      const id = route.params.id;
      if (!id)
        return;
      await axios.post(`articles-detail/${id}`).then((res) => {
        if (res.status === 200) {
          title.value = res.data.info.title;
          coverPage.value = imageURL + res.data.info.coverPage;
          tag.value = res.data.info.tag;
          category.value = res.data.info.category;
          detail.value = res.data.info.details;
          createdAt.value = res.data.info.createdAt;
          related.value = res.data.isRelated;
          if (res.data.info.videoLink) {
            videoLink.value = "https://www.youtube.com/embed/" + res.data.info.videoLink;
          }
        }
      }).catch((e) => {
        if (e) {
          msgError.value = "Data empty";
        }
      });
    };
    [__temp, __restore] = withAsyncContext(() => fetch()), await __temp, __restore();
    useHead({
      title,
      meta: [
        { hid: "og:title", property: "og:title", content: title },
        { hid: "og:description", property: "og:description", content: detail },
        { hid: "og:type", property: "og:type", content: "website" },
        { hid: "og:url", property: "og:url", content: https + "blog-detail/" + route.params.id },
        { hid: "og:image", property: "og:image", content: coverPage }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ id: "blog-detail" }, _attrs))} data-v-72aa8e3b><section class="has-bg" data-v-72aa8e3b><div class="container" data-v-72aa8e3b>`);
      if (unref(videoLink)) {
        _push(`<iframe${ssrRenderAttr("src", unref(videoLink))} class="youtube" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen data-v-72aa8e3b></iframe>`);
      } else {
        _push(`<!--[-->`);
        if (unref(coverPage)) {
          _push(`<img${ssrRenderAttr("src", unref(coverPage))} alt="" data-v-72aa8e3b>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      }
      _push(`</div></section><div class="container content" data-v-72aa8e3b><h1 class="blog-title" data-v-72aa8e3b>${ssrInterpolate(unref(title))}</h1><ul class="blog-info" data-v-72aa8e3b><li class="tag" data-v-72aa8e3b><p data-v-72aa8e3b><!--[-->`);
      ssrRenderList(unref(category), (c, ind) => {
        _push(`<span data-v-72aa8e3b>${ssrInterpolate(c.name)}</span>`);
      });
      _push(`<!--]--></p></li><li class="post-date" data-v-72aa8e3b>${ssrInterpolate(unref(createdAt))}</li><li class="social" data-v-72aa8e3b><p data-v-72aa8e3b><a${ssrRenderAttr("href", `https://www.facebook.com/sharer/sharer.php?u=${unref(https)}blog-detail/${unref(route).params.id}`)} onclick="javascript:window.open(this.href,&#39;&#39;, &#39;menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600&#39;);return false;" data-v-72aa8e3b><i class="fa-brands fa-facebook" data-v-72aa8e3b></i></a><a${ssrRenderAttr("href", `whatsapp://send?text=${unref(https)}blog-detail/${unref(route).params.id}`)} onclick="javascript:window.open(this.href,&#39;&#39;, &#39;menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600&#39;);return false;" data-v-72aa8e3b><i class="fa-brands fa-whatsapp" data-v-72aa8e3b></i></a>`);
      if (unref(copy)) {
        _push(`<i class="fa-light fa-link" data-v-72aa8e3b></i>`);
      } else {
        _push(`<i class="fa-light fa-check checkStatus" data-v-72aa8e3b></i>`);
      }
      _push(`</p></li></ul><div class="blog-detail" data-v-72aa8e3b>${unref(detail)}</div><div class="tags" data-v-72aa8e3b><strong data-v-72aa8e3b>TAGS:</strong><!--[-->`);
      ssrRenderList(unref(tag), (t, indx) => {
        _push(`<a data-v-72aa8e3b>${ssrInterpolate(t.name)}</a>`);
      });
      _push(`<!--]--></div><div class="follow-us" data-v-72aa8e3b><h1 data-v-72aa8e3b>\u0EAA\u0EB2\u0EA1\u0EB2\u0E94\u0E95\u0EB4\u0E94\u0E95\u0EB2\u0EA1 THEBIZHUB</h1><p data-v-72aa8e3b>\u0E9C\u0EC8\u0EB2\u0E99\u0EC1\u0EAD\u0EB1\u0E9A\u0E9E\u0EB4\u0EC0\u0E84\u0E8A\u0EB1\u0EC9\u0E99\u0E95\u0EC8\u0EB2\u0E87\u0EC6 \u0E97\u0EB5\u0EC8\u0E97\u0EC8\u0EB2\u0E99\u0EAA\u0EB0\u0E94\u0EA7\u0E81 \u0EAB\u0EBC\u0EB7 \u0EC3\u0E8A\u0EC9\u0E87\u0EB2\u0E99\u0EA2\u0EB9\u0EC8\u0EC1\u0EA5\u0EC9\u0EA7\u0EC4\u0E94\u0EC9\u0EC0\u0EA5\u0EB5\u0E8D</p><ul data-v-72aa8e3b><li data-v-72aa8e3b><a href="" target="_blank" data-v-72aa8e3b><i class="fa-brands fa-facebook" data-v-72aa8e3b></i></a></li><li data-v-72aa8e3b><a href="" target="_blank" data-v-72aa8e3b><i class="fa-brands fa-instagram" data-v-72aa8e3b></i></a></li><li data-v-72aa8e3b><a href="" target="_blank" data-v-72aa8e3b><i class="fa-brands fa-youtube" data-v-72aa8e3b></i></a></li></ul></div>`);
      if (unref(related).length) {
        _push(`<div class="blog-footer" data-v-72aa8e3b><h3 class="section-title" data-v-72aa8e3b>RELATED ARTICLES</h3>`);
        _push(ssrRenderComponent(_sfc_main$1, { relate: unref(related) }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog-detail/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-72aa8e3b"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-36353c2e.mjs.map
