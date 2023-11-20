<template>
  <div>
    <Intro />
    <OurService />
    <WhoWeAre />
    <SmeAndStartup :title="'MSMEs'" :info="msmes" v-show="msmes.length" />
    <Story v-show="enterPreInfo.length" :info="enterPreInfo" />
    <SelftEmployment :title="'Self - Employment'" :info="selftEmpInfo" v-show="selftEmpInfo.length" />

    <NewsAndActivitiesInfo :title="`News & Activities`" :info="newsAndActivitiesInfo"
      v-show="newsAndActivitiesInfo.length" />

    <BizLaws :title="`BIZ Laws`" :info="bizLawInfo" v-show="bizLawInfo.length" />

    <TSNS :title="`TSNS - Thao Sang Nang Sa`" :info="TSNSInfo" v-show="TSNSInfo.length" />

    <Wing :title="`WINGS - Women's Income Generating Support`" :info="wingInfo" v-show="wingInfo.length" />
  </div>
</template>

<script setup lang="ts">
import Intro from "../components/homepage/intro.vue";
import OurService from "../components/homepage/our-services.vue";
import WhoWeAre from "../components/homepage/who-are-we.vue";
import Story from "../components/homepage/story.vue";
import NewsAndActivitiesInfo from "../components/homepage/reuse/column-layout.vue";
import BizLaws from "~/components/homepage/reuse/column-layout.vue";

import SmeAndStartup from "../components/homepage/reuse/grids-layout.vue";
import SelftEmployment from "../components/homepage/reuse/grids-layout.vue";
import Wing from "../components/homepage/reuse/column-layout.vue";
import TSNS from "../components/homepage/reuse/column-layout.vue";

const axios = useNuxtApp().$axios;
const enterPreInfo = ref<any>([]);
const selftEmpInfo = ref<any>([]);
const msmes = ref<any>([]);
const newsAndActivitiesInfo = ref<any>([]);
const bizLawInfo = ref<any>([]);
const wingInfo = ref<any>([]);
const TSNSInfo = ref<any>([]);

const fetchMSMEs = async () => {
  const name = "654d868d4040f0af2207e5eb";
  await axios.post(`sme-articles/${name}`).then((res) => {
    if (res.status === 200) {
      msmes.value = res.data.info;
    }
  });
};
const fetchEntrepre = async () => {
  const name = "651a4ca8c2d5c94d6cc3da9e";
  await axios.post(`reuse-articles/${name}`).then((res) => {
    if (res.status === 200) {
      enterPreInfo.value = res.data.info;
    }
  });
};
const fetchSelftEmp = async () => {
  const name = "651a4cebc2d5c94d6cc3daa7";
  await axios.post(`sme-articles/${name}`).then((res) => {
    if (res.status === 200) {
      selftEmpInfo.value = res.data.info;
    }
  });
};
const fetchNewAndActivities = async () => {
  const name = "651a4d06c2d5c94d6cc3daba";
  await axios.post(`reuse-articles/${name}`).then((res) => {
    if (res.status === 200) {
      newsAndActivitiesInfo.value = res.data.info;
    }
  });
};
const fetchBizLaw = async () => {
  const name = "651a4d1ac2d5c94d6cc3dac3";
  await axios.post(`reuse-articles/${name}`).then((res) => {
    if (res.status === 200) {
      bizLawInfo.value = res.data.info;
    }
  });
};

const fetchTSNS = async () => {
  const name = "654d86c14040f0af2207e5f4";
  await axios.post(`reuse-articles/${name}`).then((res) => {
    if (res.status === 200) {
      TSNSInfo.value = res.data.info;
    }
  });
};

const fetchWing = async () => {
  const name = "654d86dc4040f0af2207e5fd";
  await axios.post(`reuse-articles/${name}`).then((res) => {
    if (res.status === 200) {
      wingInfo.value = res.data.info;
    }
  });
};
fetchMSMEs();
fetchEntrepre();
fetchSelftEmp();
fetchNewAndActivities();
fetchBizLaw();
fetchTSNS();
fetchWing();
</script>

<style lang="scss">
section {
  padding: 3rem 2rem;

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
  font-size: var(--xlg-font);
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 10px;
}
</style>
