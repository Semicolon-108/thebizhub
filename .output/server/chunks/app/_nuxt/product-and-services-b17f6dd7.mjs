import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './biz-course-3b1421a5.mjs';
import { _ as _imports_0$1 } from './biz-coaching-a3c25516.mjs';
import { useSSRContext } from 'vue';
import { _ as _export_sfc } from '../server.mjs';
import 'vue-bundle-renderer/runtime';
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
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'axios';
import 'vue-i18n';

const _imports_2 = "" + buildAssetsURL("project-business-consultancy.5f79db5e.png");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(_attrs)} data-v-10e5499e><div class="container" data-v-10e5499e><h1 class="section-title" data-v-10e5499e>\u0E9C\u0EB0\u0EA5\u0EB4\u0E94\u0E95\u0EB0\u0E9E\u0EB1\u0E99/\u0E81\u0EB2\u0E99\u0E9A\u0ECD\u0EA5\u0EB4\u0E81\u0EB2\u0E99\u0E82\u0EAD\u0E87\u0EC0\u0EAE\u0EBB\u0EB2</h1><ul class="image-list grids is-3-desktop is-1-mobile gap-20-desktop" data-v-10e5499e><li data-v-10e5499e><img${ssrRenderAttr("src", _imports_0)} data-v-10e5499e><h3 data-v-10e5499e>\u0EAB\u0EBC\u0EB1\u0E81\u0EAA\u0EB9\u0E94\u0E9D\u0EB6\u0E81\u0EAD\u0EBB\u0E9A\u0EAE\u0EBB\u0EA1\u0E97\u0EB2\u0E87\u0E97\u0EB8\u0EA5\u0EB0\u0E81\u0EB4\u0E94 (BIZ COURSES)</h3></li><li data-v-10e5499e><img${ssrRenderAttr("src", _imports_0$1)} data-v-10e5499e><h3 data-v-10e5499e>\u0E9A\u0ECD\u0EA5\u0EB4\u0E81\u0EB2\u0E99\u0EC3\u0EAB\u0EC9\u0E84\u0ECD\u0EB2\u0E9B\u0EB6\u0E81\u0EAA\u0EB2\u0E97\u0EB2\u0E87\u0E97\u0EB8\u0EA5\u0EB0\u0E81\u0EB4\u0E94 ( BIZ COACHING )</h3></li><li data-v-10e5499e><img${ssrRenderAttr("src", _imports_2)} data-v-10e5499e><h3 data-v-10e5499e>Project/Business Consultancy (BIZ CONSULTING)</h3></li></ul></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about-us/product-and-services.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ProductAndServcie = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-10e5499e"]]);

export { ProductAndServcie as default };
//# sourceMappingURL=product-and-services-b17f6dd7.mjs.map
