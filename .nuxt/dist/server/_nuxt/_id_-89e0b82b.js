import { d as useNuxtApp, f as useRoute, u as useRouter, e as useAuthStore, _ as _export_sfc } from "../server.mjs";
import { defineComponent, ref, withAsyncContext, watch, mergeProps, unref, useSSRContext } from "vue";
import { u as useHead } from "./index-2cdcde44.js";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import _sfc_main$1 from "./related-8493758d.js";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "ufo";
import "destr";
import "defu";
import "klona";
import "@vue/devtools-api";
import "devalue";
import "axios";
import "vue-i18n";
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
      _push(`<div${ssrRenderAttrs(mergeProps({ id: "blog-detail" }, _attrs))} data-v-fcb73953><section class="has-bg" data-v-fcb73953><div class="container" data-v-fcb73953>`);
      if (unref(videoLink)) {
        _push(`<iframe${ssrRenderAttr("src", unref(videoLink))} class="youtube" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen data-v-fcb73953></iframe>`);
      } else {
        _push(`<!--[-->`);
        if (unref(coverPage)) {
          _push(`<img${ssrRenderAttr("src", unref(coverPage))} alt="" data-v-fcb73953>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      }
      _push(`</div></section><div class="container content" data-v-fcb73953><h1 class="blog-title" data-v-fcb73953>${ssrInterpolate(unref(title))}</h1><ul class="blog-info" data-v-fcb73953><li class="tag" data-v-fcb73953><p data-v-fcb73953><!--[-->`);
      ssrRenderList(unref(category), (c, ind) => {
        _push(`<span data-v-fcb73953>${ssrInterpolate(c.name)}</span>`);
      });
      _push(`<!--]--></p></li><li class="post-date" data-v-fcb73953>${ssrInterpolate(unref(createdAt))}</li><li class="social" data-v-fcb73953><p data-v-fcb73953><a${ssrRenderAttr("href", `https://www.facebook.com/sharer/sharer.php?u=${unref(https)}blog-detail/${unref(route).params.id}`)} onclick="javascript:window.open(this.href,&#39;&#39;, &#39;menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600&#39;);return false;" data-v-fcb73953><i class="fa-brands fa-facebook" data-v-fcb73953></i></a><a${ssrRenderAttr("href", `whatsapp://send?text=${unref(https)}blog-detail/${unref(route).params.id}`)} onclick="javascript:window.open(this.href,&#39;&#39;, &#39;menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600&#39;);return false;" data-v-fcb73953><i class="fa-brands fa-whatsapp" data-v-fcb73953></i></a>`);
      if (unref(copy)) {
        _push(`<i class="fa-light fa-link" data-v-fcb73953></i>`);
      } else {
        _push(`<i class="fa-light fa-check checkStatus" data-v-fcb73953></i>`);
      }
      _push(`</p></li></ul><div class="blog-detail" data-v-fcb73953>${unref(detail)}</div>`);
      if (unref(attachments).length) {
        _push(`<div data-v-fcb73953><ul class="document-list" data-v-fcb73953><!--[-->`);
        ssrRenderList(unref(attachments), (i, index) => {
          _push(`<li data-v-fcb73953><button class="button main" data-v-fcb73953>${ssrInterpolate(_ctx.$t("download_document"))} ${ssrInterpolate(index + 1)}</button></li>`);
        });
        _push(`<!--]--></ul></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="tags" data-v-fcb73953><strong data-v-fcb73953>TAGS:</strong><!--[-->`);
      ssrRenderList(unref(tag), (t, indx) => {
        _push(`<a data-v-fcb73953>${ssrInterpolate(t.name)}</a>`);
      });
      _push(`<!--]--></div><div class="follow-us" data-v-fcb73953><h1 data-v-fcb73953>ສາມາດຕິດຕາມ THEBIZHUB</h1><p data-v-fcb73953>ຜ່ານແອັບພິເຄຊັ້ນຕ່າງໆ ທີ່ທ່ານສະດວກ ຫຼື ໃຊ້ງານຢູ່ແລ້ວໄດ້ເລີຍ</p><ul data-v-fcb73953><li data-v-fcb73953><a href="https://www.facebook.com/profile.php?id=100091801856212" target="_blank" data-v-fcb73953><i class="fa-brands fa-facebook" data-v-fcb73953></i></a></li><li data-v-fcb73953><a href="https://www.tiktok.com/@thebizhublaos" target="_blank" data-v-fcb73953><i class="fa-brands fa-tiktok" data-v-fcb73953></i></a></li><li data-v-fcb73953><a href="https://www.youtube.com/@TheBIZHUB" target="_blank" data-v-fcb73953><i class="fa-brands fa-youtube" data-v-fcb73953></i></a></li></ul></div>`);
      if (unref(related).length) {
        _push(`<div class="blog-footer" data-v-fcb73953><h3 class="section-title" data-v-fcb73953>RELATED ARTICLES</h3>`);
        _push(ssrRenderComponent(_sfc_main$1, { relate: unref(related) }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _id__vue_vue_type_style_index_0_scoped_fcb73953_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog-detail/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-fcb73953"]]);
export {
  _id_ as default
};
//# sourceMappingURL=_id_-89e0b82b.js.map
