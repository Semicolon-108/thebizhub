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

const intro_vue_vue_type_style_index_0_scoped_f5e4090c_lang = ".left[data-v-f5e4090c]{align-items:center;display:flex}@media (max-width:768px){.left[data-v-f5e4090c]{text-align:center}}.left .intro h1[data-v-f5e4090c]{font-size:3rem;font-weight:700}@media (max-width:768px){.left .intro h1[data-v-f5e4090c]{line-height:1.5}}.left .intro h3[data-v-f5e4090c]{font-size:1.8rem;font-weight:600;line-height:1.3}@media (max-width:768px){.left .intro h3[data-v-f5e4090c]{font-size:1.5rem;margin-top:10px}}.right .video[data-v-f5e4090c]{width:100%}.right .video iframe[data-v-f5e4090c]{aspect-ratio:16/9;display:block;width:100%}";

const ourServices_vue_vue_type_style_index_0_scoped_65df56cd_lang = '.section[data-v-65df56cd]{position:relative}.section[data-v-65df56cd]:before{background-color:var(--sub-color);content:"";display:block;height:200px;left:0;position:absolute;right:0;top:0;z-index:1}.section .section-header[data-v-65df56cd]{margin-bottom:20px;position:relative;z-index:2}.section .section-header .section-title[data-v-65df56cd]{color:#fff;text-align:center}.section .section-body[data-v-65df56cd]{position:relative;z-index:2}.section .section-body .card[data-v-65df56cd]{background-color:#fff;border:1px solid var(--border-color);border-radius:6px;height:100%;padding:30px;text-align:center}.section .section-body .card .card-icon[data-v-65df56cd]{display:flex;justify-content:center;margin-bottom:20px}.section .section-body .card .card-icon img[data-v-65df56cd]{display:block;-o-object-fit:cover;object-fit:cover;width:80px}.section .section-body .card .card-title[data-v-65df56cd]{font-size:var(--md-font);font-weight:700;margin-bottom:5px;position:relative;text-align:center;text-transform:uppercase}.section .section-body .card .card-title[data-v-65df56cd]:after{background-color:var(--sub-color);border-radius:3px;content:"";display:block;height:3px;margin:.5rem auto;width:30px}.section .section-body .card p[data-v-65df56cd]{font-size:var(--md-font)}';

const whoAreWe_vue_vue_type_style_index_0_scoped_a742b598_lang = 'section[data-v-a742b598]{position:relative}section .right .image a[data-v-a742b598]{align-items:center;display:flex;justify-content:center;position:relative}section .right .image a[data-v-a742b598]:hover:after{background-color:rgba(0,0,0,.4)}section .right .image a:hover i[data-v-a742b598]{transform:scale(1.1)}section .right .image a[data-v-a742b598]:after{background-color:rgba(0,0,0,.3);bottom:0;content:"";left:0;position:absolute;right:0;top:0;transition:all .15s ease-in-out}section .right .image a img[data-v-a742b598]{display:block;max-height:300px}section .right .image a i[data-v-a742b598]{color:hsla(0,0%,100%,.9);cursor:pointer;font-size:3rem;position:absolute;transition:all .15s ease-in-out;z-index:1}.tabs li[data-v-a742b598]:not(:last-child){margin-bottom:5px}.tabs li h1[data-v-a742b598]{align-items:center;background-color:var(--light-color);cursor:pointer;display:flex;font-weight:700;justify-content:space-between;padding:10px 15px}.tabs li h1 i[data-v-a742b598]{font-size:var(--lg-font)}.tabs li p[data-v-a742b598]{background-color:#fff;display:none;padding:15px}.tabs li.open h1[data-v-a742b598]{background-color:var(--sub-color);color:#fff}.tabs li.open p[data-v-a742b598]{display:block}.tabs li:last-child h1[data-v-a742b598]{background-color:var(--light-grey-color)}';

const story_vue_vue_type_style_index_0_scoped_dd508f96_lang = "section[data-v-dd508f96]{background-image:url(" + buildAssetsURL("footer-bg.f96727d2.svg") + ");background-position:50%}section .section-title[data-v-dd508f96]{color:#fff}section ul[data-v-dd508f96]{display:flex;gap:20px}@media (max-width:768px){section ul[data-v-dd508f96]{overflow:auto}section ul li[data-v-dd508f96]{flex:0 0 80%}}";

const columnLayout_vue_vue_type_style_index_0_scoped_7a15e64c_lang = "section ul[data-v-7a15e64c]{display:flex;gap:20px}@media (max-width:768px){section ul[data-v-7a15e64c]{overflow:auto}section ul li[data-v-7a15e64c]{flex:0 0 80%}}.card-title[data-v-7a15e64c]{font-weight:700;line-height:1.8;margin-top:10px}";

const gridsLayout_vue_vue_type_style_index_0_scoped_90050aa7_lang = "ul[data-v-90050aa7]{display:grid;gap:20px;grid-template-columns:repeat(17,1fr)}@media (max-width:768px){ul[data-v-90050aa7]{grid-template-columns:1fr}}ul li[data-v-90050aa7]:first-child{grid-column:span 8;grid-row:span 2}@media (max-width:768px){ul li[data-v-90050aa7]:first-child{grid-column:span 17;grid-template-columns:1fr}}ul li[data-v-90050aa7]:not(:first-child){grid-column:span 4}@media (max-width:768px){ul li[data-v-90050aa7]:not(:first-child){grid-column:span 17;grid-template-columns:1fr}}";

const index_vue_vue_type_style_index_0_lang = "section{padding:3rem 2rem}@media (max-width:768px){section{padding:2rem 1rem}}.container{line-height:1.5;margin-left:auto;margin-right:auto;max-width:1024px}.section-title{font-size:var(--xlg-font);font-weight:700;margin-bottom:10px;text-transform:uppercase}";

const indexStyles_7a05e0b3 = [intro_vue_vue_type_style_index_0_scoped_f5e4090c_lang, ourServices_vue_vue_type_style_index_0_scoped_65df56cd_lang, whoAreWe_vue_vue_type_style_index_0_scoped_a742b598_lang, story_vue_vue_type_style_index_0_scoped_dd508f96_lang, columnLayout_vue_vue_type_style_index_0_scoped_7a15e64c_lang, gridsLayout_vue_vue_type_style_index_0_scoped_90050aa7_lang, index_vue_vue_type_style_index_0_lang, index_vue_vue_type_style_index_0_lang];

export { indexStyles_7a05e0b3 as default };
//# sourceMappingURL=index-styles.7a05e0b3.mjs.map
