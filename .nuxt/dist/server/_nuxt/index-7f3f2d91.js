import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { defineComponent, mergeProps, useSSRContext, ref, unref } from "vue";
import "hookable";
import { u as useRouter, _ as _export_sfc } from "../server.mjs";
import "destr";
import "devalue";
import "klona";
import { _ as _imports_0$3 } from "./img-05-a01997b4.js";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "h3";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "ufo";
import "defu";
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "intro",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section" }, _attrs))} data-v-7a1572a2><div class="container" data-v-7a1572a2><div class="grids gap-20 is-5-desktop is-1-mobile" data-v-7a1572a2><div class="left span-2" data-v-7a1572a2><div class="intro" data-v-7a1572a2><h1 data-v-7a1572a2>THE BIZ HUB</h1><h3 data-v-7a1572a2> Partner for success <br class="is-hidden-mobile" data-v-7a1572a2> in business and <br class="is-hidden-mobile" data-v-7a1572a2> entrepreneurship </h3><button class="main margin-top-20 large" data-v-7a1572a2> Update </button></div></div><div class="right span-3" data-v-7a1572a2><ul class="grids gap-10 is-2-desktop is-1-mobile" data-v-7a1572a2><li data-v-7a1572a2><div class="course-info" data-v-7a1572a2><h3 data-v-7a1572a2>BIZ COACHING</h3><p data-v-7a1572a2> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut quibusdam quia recusandae illo rerum voluptates, consequatur fugiat repudiandae cum labore nobis praesentium voluptate hic. Eos, dolorem! Inventore, vitae! At, ipsa. </p></div></li><li data-v-7a1572a2><div class="course-info" data-v-7a1572a2><h3 data-v-7a1572a2>BIZ EVENTS</h3><p data-v-7a1572a2> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut quibusdam quia recusandae illo rerum voluptates, consequatur fugiat repudiandae cum labore nobis praesentium voluptate hic. Eos, dolorem! Inventore, vitae! At, ipsa. </p></div></li><li data-v-7a1572a2><div class="course-info" data-v-7a1572a2><h3 data-v-7a1572a2>BIZ TOOLS</h3><p data-v-7a1572a2> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut quibusdam quia recusandae illo rerum voluptates, consequatur fugiat repudiandae cum labore nobis praesentium voluptate hic. Eos, dolorem! Inventore, vitae! At, ipsa. </p></div></li><li data-v-7a1572a2><div class="course-info" data-v-7a1572a2><h3 data-v-7a1572a2>BIZ COURSES</h3><p data-v-7a1572a2> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut quibusdam quia recusandae illo rerum voluptates, consequatur fugiat repudiandae cum labore nobis praesentium voluptate hic. Eos, dolorem! Inventore, vitae! At, ipsa. </p></div></li></ul></div></div></div></section>`);
    };
  }
});
const intro_vue_vue_type_style_index_0_scoped_7a1572a2_lang = "";
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/homepage/intro.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const Intro = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-7a1572a2"]]);
const _imports_0$2 = "" + __buildAssetsURL("about.faed9c12.png");
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "who-are-we",
  __ssrInlineRender: true,
  setup(__props) {
    const selectedTab = ref();
    const tabs = ref([
      {
        name: "WHO WE ARE?",
        desc: "ຄູ່ຮ່ວມງານເພື່ອຄວາມສາເລດໃນດ້ານທຸລະກິດ ແລະ ການເປນຜູ້ ປະກອບການ, ພວກເຮາມຸ່ງໝັ້ນໃນການສົ່ງເສີມ ແລະ ເສີມສ້າງ ຜູ້ປະກອບການລຸ້ນໃໝ່ ຫຼື ຜູ້ທີ່ກາລັງເລີ່ມຕົ້ນເຮດທຸລະກິດທີ່ຕ້ອງການພັດທະນາຕົນເອງ ແລະ ທຸລະກິດໃຫ້ເຕີບໂຕຢ່າງ ບຢຸດຢັ້ງ"
      },
      {
        name: "VISION",
        desc: "ຄູ່ຮ່ວມງານເພື່ອຄວາມສາເລດໃນດ້ານທຸລະກິດ ແລະ ການເປນຜູ້ ປະກອບການ, ພວກເຮາມຸ່ງໝັ້ນໃນການສົ່ງເສີມ ແລະ ເສີມສ້າງ ຜູ້ປະກອບການລຸ້ນໃໝ່ ຫຼື ຜູ້ທີ່ກາລັງເລີ່ມຕົ້ນເຮດທຸລະກິດທີ່ຕ້ອງການພັດທະນາຕົນເອງ ແລະ ທຸລະກິດໃຫ້ເຕີບໂຕຢ່າງ ບຢຸດຢັ້ງ"
      },
      {
        name: "MISSION",
        desc: "ຄູ່ຮ່ວມງານເພື່ອຄວາມສາເລດໃນດ້ານທຸລະກິດ ແລະ ການເປນຜູ້ ປະກອບການ, ພວກເຮາມຸ່ງໝັ້ນໃນການສົ່ງເສີມ ແລະ ເສີມສ້າງ ຜູ້ປະກອບການລຸ້ນໃໝ່ ຫຼື ຜູ້ທີ່ກາລັງເລີ່ມຕົ້ນເຮດທຸລະກິດທີ່ຕ້ອງການພັດທະນາຕົນເອງ ແລະ ທຸລະກິດໃຫ້ເຕີບໂຕຢ່າງ ບຢຸດຢັ້ງ"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(_attrs)} data-v-b12d4e53><div class="container" data-v-b12d4e53><h1 class="section-title margin-bottom-10" data-v-b12d4e53>WHO ARE WE?</h1><div class="grids is-2-desktop gap-20 is-1-mobile" data-v-b12d4e53><div class="left" data-v-b12d4e53><ul class="tabs" data-v-b12d4e53><!--[-->`);
      ssrRenderList(unref(tabs), (i, index) => {
        _push(`<li class="${ssrRenderClass({ open: unref(selectedTab) === i.name })}" data-v-b12d4e53><h1 data-v-b12d4e53>${ssrInterpolate(i.name)} <i class="fa-light fa-angle-down" data-v-b12d4e53></i></h1><p data-v-b12d4e53>${ssrInterpolate(i.desc)}</p></li>`);
      });
      _push(`<!--]--><li data-v-b12d4e53><h1 data-v-b12d4e53>MORE ABOUT US<i class="fa-light fa-angle-right" data-v-b12d4e53></i></h1></li></ul></div><div class="right" data-v-b12d4e53><div class="image" data-v-b12d4e53><img${ssrRenderAttr("src", _imports_0$2)} alt="" data-v-b12d4e53></div></div></div></div></section>`);
    };
  }
});
const whoAreWe_vue_vue_type_style_index_0_scoped_b12d4e53_lang = "";
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/homepage/who-are-we.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const WhoWeAre = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-b12d4e53"]]);
const _imports_0$1 = "" + __buildAssetsURL("img-06.d615458b.jpg");
const gridsLayout_vue_vue_type_style_index_0_scoped_8f8de589_lang = "";
const _sfc_main$4 = {
  __name: "grids-layout",
  __ssrInlineRender: true,
  props: ["title"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(_attrs)} data-v-8f8de589><div class="container" data-v-8f8de589><h1 class="section-title" data-v-8f8de589>${ssrInterpolate(__props.title)}</h1><ul data-v-8f8de589><!--[-->`);
      ssrRenderList(5, (index, i) => {
        _push(`<li data-v-8f8de589><div class="card" data-v-8f8de589><div class="card-image" data-v-8f8de589><img${ssrRenderAttr("src", _imports_0$1)} alt="" data-v-8f8de589></div><div class="card-content" data-v-8f8de589><p class="tag-list" data-v-8f8de589><span data-v-8f8de589>Learning</span><span data-v-8f8de589>SME &amp; Startup</span></p><h3 data-v-8f8de589>Home / NETWORK (Wireless) / Range extender &amp; mesh wifi / Whole-home mesh tp-link (deco e4) wireless ac1200 dual band (pack 2)</h3></div></div></li>`);
      });
      _push(`<!--]--></ul></div></section>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/homepage/grids-layout.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const SelftEmployment = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-8f8de589"]]);
const story_vue_vue_type_style_index_0_scoped_0ef6a637_lang = "";
const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(_attrs)} data-v-0ef6a637><div class="container" data-v-0ef6a637><h1 class="section-title" data-v-0ef6a637>Entrepreneur&#39;s Story</h1><ul data-v-0ef6a637><!--[-->`);
  ssrRenderList(3, (i, index) => {
    _push(`<li data-v-0ef6a637><div class="card dark" data-v-0ef6a637><div class="card-image" data-v-0ef6a637><img${ssrRenderAttr("src", _imports_0$3)} alt="" data-v-0ef6a637></div><div class="card-content" data-v-0ef6a637><p class="tag-list" data-v-0ef6a637><span data-v-0ef6a637>Learning</span><span data-v-0ef6a637>SME &amp; Startup</span></p><h3 data-v-0ef6a637>Home / NETWORK (Wireless) / Range extender &amp; mesh wifi / Whole-home mesh tp-link (deco e4) wireless ac1200 dual band (pack 2) </h3></div></div></li>`);
  });
  _push(`<!--]--></ul></div></section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/homepage/story.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Story = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-0ef6a637"]]);
const _imports_0 = "" + __buildAssetsURL("event1.d5edfd8e.png");
const event_vue_vue_type_style_index_0_scoped_c96181be_lang = "";
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(_attrs)} data-v-c96181be><div class="container" data-v-c96181be><h1 class="section-title" data-v-c96181be>News &amp; Event</h1><ul data-v-c96181be><!--[-->`);
  ssrRenderList(3, (i, index) => {
    _push(`<li data-v-c96181be><div class="card" data-v-c96181be><div class="card-image fullheight" data-v-c96181be><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-c96181be></div><div class="card-content" data-v-c96181be><p class="tag-list" data-v-c96181be><span data-v-c96181be>Learning</span><span data-v-c96181be>SME &amp; Startup</span></p><h3 data-v-c96181be>Home / NETWORK (Wireless) / Range extender &amp; mesh wifi / Whole-home mesh tp-link (deco e4) wireless ac1200 dual band (pack 2) </h3></div></div></li>`);
  });
  _push(`<!--]--></ul></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/homepage/event.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Event = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-c96181be"]]);
const bizLaws_vue_vue_type_style_index_0_scoped_b3494950_lang = "";
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(_attrs)} data-v-b3494950><div class="container" data-v-b3494950><h1 class="section-title" data-v-b3494950>BIZ Laws</h1><ul data-v-b3494950><!--[-->`);
  ssrRenderList(3, (i, index) => {
    _push(`<li data-v-b3494950><div class="card" data-v-b3494950><div class="card-image" data-v-b3494950><img${ssrRenderAttr("src", _imports_0$3)} alt="" data-v-b3494950></div><div class="card-content" data-v-b3494950><p class="tag-list" data-v-b3494950><span data-v-b3494950>Learning</span><span data-v-b3494950>SME &amp; Startup</span></p><h3 data-v-b3494950>Home / NETWORK (Wireless) / Range extender &amp; mesh wifi / Whole-home mesh tp-link (deco e4) wireless ac1200 dual band (pack 2) </h3></div></div></li>`);
  });
  _push(`<!--]--></ul></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/homepage/biz-laws.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const BizLaws = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-b3494950"]]);
const index_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(Intro, null, null, _parent));
      _push(ssrRenderComponent(WhoWeAre, null, null, _parent));
      _push(ssrRenderComponent(SelftEmployment, { title: "SME & Startup" }, null, _parent));
      _push(ssrRenderComponent(Story, null, null, _parent));
      _push(ssrRenderComponent(SelftEmployment, { title: "Self - Employment" }, null, _parent));
      _push(ssrRenderComponent(Event, null, null, _parent));
      _push(ssrRenderComponent(BizLaws, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-7f3f2d91.js.map
