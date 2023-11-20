import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
import 'vue/server-renderer';
import '@unhead/ssr';
import 'vue';
import 'unhead';
import '@unhead/shared';

const intro_vue_vue_type_style_index_0_scoped_8d337e31_lang = ".left[data-v-8d337e31]{align-items:center;display:flex}@media (max-width:768px){.left[data-v-8d337e31]{text-align:center}}.left .intro h1[data-v-8d337e31]{font-size:3rem;font-weight:700}@media (max-width:768px){.left .intro h1[data-v-8d337e31]{line-height:1}}.left .intro h3[data-v-8d337e31]{font-size:2rem;font-weight:600;line-height:1.1}@media (max-width:768px){.left .intro h3[data-v-8d337e31]{font-size:1.5rem;margin-top:10px}}.right .video[data-v-8d337e31]{width:100%}.right .video iframe[data-v-8d337e31]{aspect-ratio:16/9;display:block;width:100%}";

const ourServices_vue_vue_type_style_index_0_scoped_3499611b_lang = '.section[data-v-3499611b]{position:relative}.section[data-v-3499611b]:before{background-color:var(--sub-color);content:"";display:block;height:200px;left:0;position:absolute;right:0;top:0;z-index:1}.section .section-header[data-v-3499611b]{margin-bottom:20px;position:relative;z-index:2}.section .section-header .section-title[data-v-3499611b]{color:#fff;text-align:center}.section .section-body[data-v-3499611b]{position:relative;z-index:2}.section .section-body .card[data-v-3499611b]{background-color:#fff;border:1px solid var(--border-color);border-radius:6px;height:100%;padding:30px;text-align:center}.section .section-body .card .card-icon[data-v-3499611b]{display:flex;justify-content:center;margin-bottom:20px}.section .section-body .card .card-icon img[data-v-3499611b]{display:block;-o-object-fit:cover;object-fit:cover;width:80px}.section .section-body .card .card-title[data-v-3499611b]{font-size:var(--md-font);font-weight:700;margin-bottom:5px;position:relative;text-align:center;text-transform:uppercase}.section .section-body .card .card-title[data-v-3499611b]:after{background-color:var(--sub-color);border-radius:3px;content:"";display:block;height:3px;margin:.5rem auto;width:30px}.section .section-body .card p[data-v-3499611b]{font-size:var(--md-font)}';

const whoAreWe_vue_vue_type_style_index_0_scoped_80a43de6_lang = 'section[data-v-80a43de6]{position:relative}section .right .image a[data-v-80a43de6]{align-items:center;display:flex;justify-content:center;position:relative}section .right .image a[data-v-80a43de6]:hover:after{background-color:rgba(0,0,0,.4)}section .right .image a:hover i[data-v-80a43de6]{transform:scale(1.1)}section .right .image a[data-v-80a43de6]:after{background-color:rgba(0,0,0,.3);bottom:0;content:"";left:0;position:absolute;right:0;top:0;transition:all .15s ease-in-out}section .right .image a img[data-v-80a43de6]{display:block;max-height:300px}section .right .image a i[data-v-80a43de6]{color:hsla(0,0%,100%,.9);cursor:pointer;font-size:3rem;position:absolute;transition:all .15s ease-in-out;z-index:1}.tabs li[data-v-80a43de6]:not(:last-child){margin-bottom:5px}.tabs li h1[data-v-80a43de6]{align-items:center;background-color:var(--light-color);cursor:pointer;display:flex;font-weight:700;justify-content:space-between;padding:10px 15px}.tabs li h1 i[data-v-80a43de6]{font-size:var(--lg-font)}.tabs li p[data-v-80a43de6]{background-color:#fff;display:none;padding:15px}.tabs li.open h1[data-v-80a43de6]{background-color:var(--sub-color);color:#fff}.tabs li.open p[data-v-80a43de6]{display:block}.tabs li:last-child h1[data-v-80a43de6]{background-color:var(--light-grey-color)}';

const story_vue_vue_type_style_index_0_scoped_0d93a1f3_lang = "section[data-v-0d93a1f3]{background-image:url(" + buildAssetsURL("bg.d71fbcd2.jpg") + ");background-position:50%}section .section-title[data-v-0d93a1f3]{color:#fff}section ul[data-v-0d93a1f3]{display:flex;gap:20px}@media (max-width:768px){section ul[data-v-0d93a1f3]{overflow:auto}section ul li[data-v-0d93a1f3]{flex:0 0 80%}}";

const columnLayout_vue_vue_type_style_index_0_scoped_8e7f1306_lang = "section ul[data-v-8e7f1306]{display:flex;gap:20px}@media (max-width:768px){section ul[data-v-8e7f1306]{overflow:auto}section ul li[data-v-8e7f1306]{flex:0 0 80%}}";

const gridsLayout_vue_vue_type_style_index_0_scoped_24467dda_lang = "ul[data-v-24467dda]{display:grid;gap:20px;grid-template-columns:repeat(17,1fr)}@media (max-width:768px){ul[data-v-24467dda]{grid-template-columns:1fr}}ul li[data-v-24467dda]:first-child{grid-column:span 8;grid-row:span 2}@media (max-width:768px){ul li[data-v-24467dda]:first-child{grid-column:span 17;grid-template-columns:1fr}}ul li[data-v-24467dda]:not(:first-child){grid-column:span 4}@media (max-width:768px){ul li[data-v-24467dda]:not(:first-child){grid-column:span 17;grid-template-columns:1fr}}";

const index_vue_vue_type_style_index_0_lang = "section{padding:3rem 2rem}@media (max-width:768px){section{padding:2rem 1rem}}.container{margin-left:auto;margin-right:auto;max-width:1024px}.section-title{font-size:var(--xlg-font);font-weight:700;margin-bottom:10px;text-transform:uppercase}";

const indexStyles_cba4b000 = [intro_vue_vue_type_style_index_0_scoped_8d337e31_lang, ourServices_vue_vue_type_style_index_0_scoped_3499611b_lang, whoAreWe_vue_vue_type_style_index_0_scoped_80a43de6_lang, story_vue_vue_type_style_index_0_scoped_0d93a1f3_lang, columnLayout_vue_vue_type_style_index_0_scoped_8e7f1306_lang, gridsLayout_vue_vue_type_style_index_0_scoped_24467dda_lang, index_vue_vue_type_style_index_0_lang, index_vue_vue_type_style_index_0_lang];

export { indexStyles_cba4b000 as default };
//# sourceMappingURL=index-styles.cba4b000.mjs.map
