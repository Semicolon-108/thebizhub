<template>
  <div>
    <Intro />
    <WhoWeAre />
    <SmeAndStartup :title="'SME & Startup'" :info="sme" v-show="sme.length" />
    <Story v-show="enterPreInfo.length" :info="enterPreInfo" />
    <SelftEmployment
      :title="'Self - Employment'"
      :info="selftEmpInfo"
      v-show="selftEmpInfo.length"
    />
    <Event :info="eventInfo" v-show="eventInfo.length" />
    <BizLaws :info="bizLawInfo" v-show="bizLawInfo.length" />
  </div>
</template>

<script setup lang="ts">
import Intro from "../components/homepage/intro.vue";
import WhoWeAre from "../components/homepage/who-are-we.vue";
import SmeAndStartup from "../components/homepage/grids-layout.vue";
import Story from "../components/homepage/story.vue";
import SelftEmployment from "../components/homepage/grids-layout.vue";
import Event from "../components/homepage/event.vue";
import BizLaws from "~/components/homepage/biz-laws.vue";
const axios = useNuxtApp().$axios;
const enterPreInfo = ref<any>([]);
const selftEmpInfo = ref<any>([]);
const sme = ref<any>([]);
const eventInfo = ref<any>([]);
const bizLawInfo = ref<any>([]);

const fetchSME = async () => {
  const name = "SME & Startup";
  await axios.post(`sme-articles/${name}`).then((res) => {
    if (res.status === 200) {
      sme.value = res.data.info;
    }
  });
};
const fetchEntrepre = async () => {
  const name = "Entrepreneur’s Story";
  await axios.post(`reuse-articles/${name}`).then((res) => {
    if (res.status === 200) {
      enterPreInfo.value = res.data.info;
    }
  });
};
const fetchSelftEmp = async () => {
  const name = "Self-Employment";
  await axios.post(`sme-articles/${name}`).then((res) => {
    if (res.status === 200) {
      selftEmpInfo.value = res.data.info;
    }
  });
};
const fetchEvent = async () => {
  const name = "NEWS & EVENT";
  await axios.post(`reuse-articles/${name}`).then((res) => {
    if (res.status === 200) {
      eventInfo.value = res.data.info;
    }
  });
};
const fetchBizLaw = async () => {
  const name = "BIZ Laws";
  await axios.post(`reuse-articles/${name}`).then((res) => {
    if (res.status === 200) {
      bizLawInfo.value = res.data.info;
    }
  });
};
await fetchSME();
await fetchEntrepre();
await fetchSelftEmp();
await fetchEvent();
await fetchBizLaw();
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
