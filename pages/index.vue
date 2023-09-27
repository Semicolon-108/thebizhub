<template>
  <div>
    <Intro />
    <WhoWeAre />
    <SmeAndStartup :title="'SMEs & Startup'" />
    <Story />
    <SelftEmployment :title="'Self - Employment'" />
    <Event />
    <BizLaws />
  </div>
</template>

<script setup>
import Intro from "../components/homepage/intro.vue";
import WhoWeAre from "../components/homepage/who-are-we.vue";
import SmeAndStartup from "../components/homepage/grids-layout.vue";
import Story from "../components/homepage/story.vue";
import SelftEmployment from "../components/homepage/grids-layout.vue";
import Event from "../components/homepage/event.vue";
import BizLaws from "~/components/homepage/biz-laws.vue";
</script>

<style lang="scss">
section {
  padding: 3.25rem 2rem;

  @include mobile {
    padding: 2rem 1rem;
  }
}

.container {
  margin-left: auto;
  margin-right: auto;
  max-width: 1024px;
}

.section-title {
  @include xxlg-font;
  font-weight: 700;
  //   text-transform: uppercase;
  margin-bottom: 10px;
}
</style>
