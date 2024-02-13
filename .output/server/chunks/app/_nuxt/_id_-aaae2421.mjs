import { _ as _export_sfc, d as useNuxtApp, f as useRoute, u as useRouter, e as useAuthStore } from '../server.mjs';
import { useSSRContext, defineComponent, ref, withAsyncContext, watch, mergeProps, unref } from 'vue';
import { u as useHead } from './index-2cdcde44.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import _sfc_main$1 from './related-8493758d.mjs';
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

const _imports_0 = "data:image/png;base64,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";
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
    const attachments = ref([]);
    const related = ref([]);
    const copy = ref(true);
    const authStatus = ref(false);
    const tokenStore = useAuthStore();
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
          attachments.value = res.data.info.attachments;
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
        {
          hid: "og:url",
          property: "og:url",
          content: https + "blog-detail/" + route.params.id
        },
        { hid: "og:image", property: "og:image", content: coverPage }
      ]
    });
    watch(() => tokenStore.token, (token) => {
      if (token) {
        authStatus.value = true;
      }
    }, { immediate: true, deep: true });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ id: "blog-detail" }, _attrs))} data-v-73507f68><section class="has-bg" data-v-73507f68><div class="container" data-v-73507f68>`);
      if (unref(videoLink)) {
        _push(`<iframe${ssrRenderAttr("src", unref(videoLink))} class="youtube" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen data-v-73507f68></iframe>`);
      } else {
        _push(`<!--[-->`);
        if (unref(coverPage)) {
          _push(`<img${ssrRenderAttr("src", unref(coverPage))} alt="" data-v-73507f68>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      }
      _push(`</div></section><div class="container content" data-v-73507f68><h1 class="blog-title" data-v-73507f68>${ssrInterpolate(unref(title))}</h1><ul class="blog-info" data-v-73507f68><li class="tag" data-v-73507f68><p data-v-73507f68><!--[-->`);
      ssrRenderList(unref(category), (c, ind) => {
        _push(`<span data-v-73507f68>${ssrInterpolate(c.name)}</span>`);
      });
      _push(`<!--]--></p></li><li class="post-date" data-v-73507f68>${ssrInterpolate(unref(createdAt))}</li><li class="social" data-v-73507f68><p data-v-73507f68><a${ssrRenderAttr("href", `https://www.facebook.com/sharer/sharer.php?u=${unref(https)}blog-detail/${unref(route).params.id}`)} onclick="javascript:window.open(this.href,&#39;&#39;, &#39;menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600&#39;);return false;" data-v-73507f68><i class="fa-brands fa-facebook" data-v-73507f68></i></a><a${ssrRenderAttr("href", `whatsapp://send?text=${unref(https)}blog-detail/${unref(route).params.id}`)} onclick="javascript:window.open(this.href,&#39;&#39;, &#39;menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600&#39;);return false;" data-v-73507f68><i class="fa-brands fa-whatsapp" data-v-73507f68></i></a>`);
      if (unref(copy)) {
        _push(`<i class="fa-light fa-link" data-v-73507f68></i>`);
      } else {
        _push(`<i class="fa-light fa-check checkStatus" data-v-73507f68></i>`);
      }
      _push(`</p></li></ul><div class="blog-detail" data-v-73507f68>${unref(detail)}</div><div class="tags" data-v-73507f68><strong data-v-73507f68>TAGS:</strong><!--[-->`);
      ssrRenderList(unref(tag), (t, indx) => {
        _push(`<a data-v-73507f68>${ssrInterpolate(t.name)}</a>`);
      });
      _push(`<!--]--></div>`);
      if (unref(attachments).length) {
        _push(`<div data-v-73507f68><h1 data-v-73507f68>${ssrInterpolate(_ctx.$t("attachment"))}</h1><ul data-v-73507f68><!--[-->`);
        ssrRenderList(unref(attachments), (i, index) => {
          _push(`<li data-v-73507f68><img${ssrRenderAttr("src", _imports_0)} class="isFile" title="Click for download" data-v-73507f68></li>`);
        });
        _push(`<!--]--></ul></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="follow-us" data-v-73507f68><h1 data-v-73507f68>\u0EAA\u0EB2\u0EA1\u0EB2\u0E94\u0E95\u0EB4\u0E94\u0E95\u0EB2\u0EA1 THEBIZHUB</h1><p data-v-73507f68>\u0E9C\u0EC8\u0EB2\u0E99\u0EC1\u0EAD\u0EB1\u0E9A\u0E9E\u0EB4\u0EC0\u0E84\u0E8A\u0EB1\u0EC9\u0E99\u0E95\u0EC8\u0EB2\u0E87\u0EC6 \u0E97\u0EB5\u0EC8\u0E97\u0EC8\u0EB2\u0E99\u0EAA\u0EB0\u0E94\u0EA7\u0E81 \u0EAB\u0EBC\u0EB7 \u0EC3\u0E8A\u0EC9\u0E87\u0EB2\u0E99\u0EA2\u0EB9\u0EC8\u0EC1\u0EA5\u0EC9\u0EA7\u0EC4\u0E94\u0EC9\u0EC0\u0EA5\u0EB5\u0E8D</p><ul data-v-73507f68><li data-v-73507f68><a href="https://www.facebook.com/profile.php?id=100091801856212" target="_blank" data-v-73507f68><i class="fa-brands fa-facebook" data-v-73507f68></i></a></li><li data-v-73507f68><a href="https://www.tiktok.com/@thebizhublaos" target="_blank" data-v-73507f68><i class="fa-brands fa-tiktok" data-v-73507f68></i></a></li><li data-v-73507f68><a href="https://www.youtube.com/@TheBIZHUB" target="_blank" data-v-73507f68><i class="fa-brands fa-youtube" data-v-73507f68></i></a></li></ul></div>`);
      if (unref(related).length) {
        _push(`<div class="blog-footer" data-v-73507f68><h3 class="section-title" data-v-73507f68>RELATED ARTICLES</h3>`);
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
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-73507f68"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-aaae2421.mjs.map
