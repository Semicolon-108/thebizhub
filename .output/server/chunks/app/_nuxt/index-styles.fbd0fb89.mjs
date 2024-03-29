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

const intro_vue_vue_type_style_index_0_scoped_1f47b4b6_lang = ".left[data-v-1f47b4b6]{align-items:center;display:flex}@media (max-width:768px){.left[data-v-1f47b4b6]{text-align:center}}.left .intro h1[data-v-1f47b4b6]{font-size:3rem;font-weight:700}@media (max-width:768px){.left .intro h1[data-v-1f47b4b6]{line-height:1.5}}.left .intro h3[data-v-1f47b4b6]{font-size:1.8rem;font-weight:600;line-height:1.3}@media (max-width:768px){.left .intro h3[data-v-1f47b4b6]{font-size:1.5rem;margin-top:10px}}.right .video[data-v-1f47b4b6]{width:100%}.right .video iframe[data-v-1f47b4b6]{aspect-ratio:16/9;display:block;width:100%}";

const ourServices_vue_vue_type_style_index_0_scoped_533ab5d4_lang = '.section[data-v-533ab5d4]{position:relative}.section[data-v-533ab5d4]:before{background-color:var(--sub-color);content:"";display:block;height:200px;left:0;position:absolute;right:0;top:0;z-index:1}.section .section-header[data-v-533ab5d4]{margin-bottom:20px;position:relative;z-index:2}.section .section-header .section-title[data-v-533ab5d4]{color:#fff;text-align:center}.section .section-body[data-v-533ab5d4]{position:relative;z-index:2}.section .section-body .card[data-v-533ab5d4]{background-color:#fff;border:1px solid var(--border-color);border-radius:6px;height:100%;padding:30px;text-align:center}.section .section-body .card .card-icon[data-v-533ab5d4]{display:flex;justify-content:center;margin-bottom:20px}.section .section-body .card .card-icon img[data-v-533ab5d4]{display:block;-o-object-fit:cover;object-fit:cover;width:80px}.section .section-body .card .card-title[data-v-533ab5d4]{font-size:var(--md-font);font-weight:700;margin-bottom:5px;position:relative;text-align:center;text-transform:uppercase}.section .section-body .card .card-title[data-v-533ab5d4]:after{background-color:var(--sub-color);border-radius:3px;content:"";display:block;height:3px;margin:.5rem auto;width:30px}.section .section-body .card p[data-v-533ab5d4]{font-size:var(--md-font)}.section .section-body button[data-v-533ab5d4]{margin-top:10px}';

const whoAreWe_vue_vue_type_style_index_0_scoped_8e8cbcf6_lang = 'section[data-v-8e8cbcf6]{position:relative}section .right .image a[data-v-8e8cbcf6]{align-items:center;display:flex;justify-content:center;position:relative}section .right .image a[data-v-8e8cbcf6]:hover:after{background-color:rgba(0,0,0,.4)}section .right .image a:hover i[data-v-8e8cbcf6]{transform:scale(1.1)}section .right .image a[data-v-8e8cbcf6]:after{background-color:rgba(0,0,0,.3);bottom:0;content:"";left:0;position:absolute;right:0;top:0;transition:all .15s ease-in-out}section .right .image a img[data-v-8e8cbcf6]{display:block;max-height:300px}section .right .image a i[data-v-8e8cbcf6]{color:hsla(0,0%,100%,.9);cursor:pointer;font-size:3rem;position:absolute;transition:all .15s ease-in-out;z-index:1}.tabs li[data-v-8e8cbcf6]:not(:last-child){margin-bottom:5px}.tabs li h1[data-v-8e8cbcf6]{align-items:center;background-color:var(--light-color);cursor:pointer;display:flex;font-weight:700;justify-content:space-between;padding:10px 15px}.tabs li h1 i[data-v-8e8cbcf6]{font-size:var(--lg-font)}.tabs li p[data-v-8e8cbcf6]{background-color:#fff;display:none;padding:15px}.tabs li.open h1[data-v-8e8cbcf6]{background-color:var(--sub-color);color:#fff}.tabs li.open p[data-v-8e8cbcf6]{display:block}.tabs li:last-child h1[data-v-8e8cbcf6]{background-color:var(--light-grey-color)}';

const story_vue_vue_type_style_index_0_scoped_8e6aa68f_lang = "section[data-v-8e6aa68f]{background-image:url(" + buildAssetsURL("footer-bg.f96727d2.svg") + ");background-position:50%}section .section-header .section-title[data-v-8e6aa68f],section .section-header a[data-v-8e6aa68f]{color:#fff}section ul[data-v-8e6aa68f]{display:flex;gap:20px}@media (max-width:768px){section ul[data-v-8e6aa68f]{overflow:auto}section ul li[data-v-8e6aa68f]{flex:0 0 80%}}";

const columnLayout_vue_vue_type_style_index_0_scoped_8fce892e_lang = "ul[data-v-8fce892e]{display:grid;gap:20px;grid-template-columns:1fr 1fr 1fr}@media (max-width:768px){ul[data-v-8fce892e]{overflow:auto}ul li[data-v-8fce892e]{flex:0 0 80%}}.card-title[data-v-8fce892e]{font-weight:700;line-height:1.8;margin-top:10px}";

const gridsLayout_vue_vue_type_style_index_0_scoped_63177450_lang = "ul[data-v-63177450]{display:grid;gap:20px;grid-template-columns:repeat(16,1fr)}@media (max-width:768px){ul[data-v-63177450]{grid-template-columns:1fr}}ul li[data-v-63177450]:first-child{grid-column:span 8;grid-row:span 2}@media (max-width:768px){ul li[data-v-63177450]:first-child{grid-column:span 17;grid-template-columns:1fr}}ul li[data-v-63177450]:not(:first-child){grid-column:span 4}@media (max-width:768px){ul li[data-v-63177450]:not(:first-child){grid-column:span 17;grid-template-columns:1fr}}.card-title[data-v-63177450]{font-weight:700;line-height:1.8;margin-top:10px}";

const index_vue_vue_type_style_index_0_lang = "section{padding:3rem 2rem}@media (max-width:768px){section{padding:2rem 1rem}}section.tsns-bg{background-image:url(" + buildAssetsURL("tsns-bg.0658f6fe.jpg") + ")}section.tsns-bg,section.wing-bg{background-position:cover;background-size:cover;color:#fff}section.wing-bg{background-image:url(" + buildAssetsURL("wing-bg.985bf2a8.png") + ")}.container{line-height:1.5;margin-left:auto;margin-right:auto;max-width:1024px}.section-header{align-items:center;display:flex;gap:10px;justify-content:space-between;margin-bottom:10px}.section-header .section-title{font-size:var(--xlg-font);font-weight:700;margin:0;text-transform:uppercase}.section-header a{align-items:center;border-bottom:1px solid var(--border-color);display:flex;gap:5px;margin:0}";

const indexStyles_fbd0fb89 = [intro_vue_vue_type_style_index_0_scoped_1f47b4b6_lang, ourServices_vue_vue_type_style_index_0_scoped_533ab5d4_lang, whoAreWe_vue_vue_type_style_index_0_scoped_8e8cbcf6_lang, story_vue_vue_type_style_index_0_scoped_8e6aa68f_lang, columnLayout_vue_vue_type_style_index_0_scoped_8fce892e_lang, gridsLayout_vue_vue_type_style_index_0_scoped_63177450_lang, index_vue_vue_type_style_index_0_lang, index_vue_vue_type_style_index_0_lang];

export { indexStyles_fbd0fb89 as default };
//# sourceMappingURL=index-styles.fbd0fb89.mjs.map
