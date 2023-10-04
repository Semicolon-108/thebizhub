import { a as useNuxtApp, b as useRoute, d as useHead, u as useRouter, _ as _export_sfc } from "../server.mjs";
import "./index-3b0293e6.js";
import { defineComponent, ref, withAsyncContext, mergeProps, unref, useSSRContext } from "vue";
import "destr";
import "devalue";
import "klona";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import _sfc_main$1 from "./related-d5870c9b.js";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "h3";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "ufo";
import "axios";
import "defu";
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
      _push(`<div${ssrRenderAttrs(mergeProps({ id: "blog-detail" }, _attrs))} data-v-e66e69c8><section class="has-bg" data-v-e66e69c8><div class="container" data-v-e66e69c8>`);
      if (unref(videoLink)) {
        _push(`<iframe${ssrRenderAttr("src", unref(videoLink))} class="youtube" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen data-v-e66e69c8></iframe>`);
      } else {
        _push(`<!--[-->`);
        if (unref(coverPage)) {
          _push(`<img${ssrRenderAttr("src", unref(coverPage))} alt="" data-v-e66e69c8>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      }
      _push(`</div></section><div class="container content" data-v-e66e69c8><h1 class="blog-title" data-v-e66e69c8>${ssrInterpolate(unref(title))}</h1><ul class="blog-info" data-v-e66e69c8><li class="tag" data-v-e66e69c8><p data-v-e66e69c8><!--[-->`);
      ssrRenderList(unref(category), (c, ind) => {
        _push(`<span data-v-e66e69c8>${ssrInterpolate(c.name)}</span>`);
      });
      _push(`<!--]--></p></li><li class="post-date" data-v-e66e69c8>${ssrInterpolate(unref(createdAt))}</li><li class="social" data-v-e66e69c8><p data-v-e66e69c8><i class="fa-brands fa-facebook" data-v-e66e69c8></i><i class="fa-brands fa-whatsapp" data-v-e66e69c8></i><i class="fa-light fa-link" data-v-e66e69c8></i></p></li></ul><div class="blog-detail" data-v-e66e69c8>${unref(detail)}</div><div class="tags" data-v-e66e69c8><strong data-v-e66e69c8>TAGS:</strong><!--[-->`);
      ssrRenderList(unref(tag), (t, indx) => {
        _push(`<a data-v-e66e69c8>${ssrInterpolate(t.name)}</a>`);
      });
      _push(`<!--]--></div><div class="follow-us" data-v-e66e69c8><h1 data-v-e66e69c8>ສາມາດຕິດຕາມ THEBIZHUB</h1><p data-v-e66e69c8>ຜ່ານແອັບພິເຄຊັ້ນຕ່າງໆ ທີ່ທ່ານສະດວກ ຫຼື ໃຊ້ງານຢູ່ແລ້ວໄດ້ເລີຍ</p><ul data-v-e66e69c8><li data-v-e66e69c8><a href="" target="_blank" data-v-e66e69c8><i class="fa-brands fa-facebook" data-v-e66e69c8></i></a></li><li data-v-e66e69c8><a href="" target="_blank" data-v-e66e69c8><i class="fa-brands fa-instagram" data-v-e66e69c8></i></a></li><li data-v-e66e69c8><a href="" target="_blank" data-v-e66e69c8><i class="fa-brands fa-youtube" data-v-e66e69c8></i></a></li></ul></div>`);
      if (unref(related).length) {
        _push(`<div class="blog-footer" data-v-e66e69c8><h3 class="section-title" data-v-e66e69c8>RELATED ARTICLES</h3>`);
        _push(ssrRenderComponent(_sfc_main$1, { relate: unref(related) }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _id__vue_vue_type_style_index_0_scoped_e66e69c8_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog-detail/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e66e69c8"]]);
export {
  _id_ as default
};
//# sourceMappingURL=_id_-234140a3.js.map
