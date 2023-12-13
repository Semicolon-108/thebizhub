<template>
  <div>
    <Intro />
    <OurService />
    <WhoWeAre />
    <p>Event and Activity</p>
    <p>BIZ Tool</p>
    <Story
      v-show="enterPreInfo.length"
      :info="enterPreInfo"
      :title="enterPreInfoTitle"
    />
    <BizLaws
      :title="bizLawInfoTItle"
      :info="bizLawInfo"
      v-show="bizLawInfo.length"
    />
    <TSNS :title="TSNSInfoTItle" :info="TSNSInfo" v-show="TSNSInfo.length" />
    <TricksAndTips :title="smeTitle" :info="msmes" v-show="msmes.length" />
    <Wing :title="wingInfoTitle" :info="wingInfo" v-show="wingInfo.length" />

    <SelftEmployment
      :title="selftEmpInfoTitle"
      :info="selftEmpInfo"
      v-show="selftEmpInfo.length"
    />

    <p>Business Supporters</p>
    <!-- <NewsAndActivitiesInfo
      :title="newActivityTitle"
      :info="newsAndActivitiesInfo"
      v-show="newsAndActivitiesInfo.length"
    /> -->
  </div>
</template>

<script setup lang="ts">
import Intro from "../components/homepage/intro.vue";
import OurService from "../components/homepage/our-services.vue";
import WhoWeAre from "../components/homepage/who-are-we.vue";
import Story from "../components/homepage/story.vue";
import NewsAndActivitiesInfo from "../components/homepage/reuse/column-layout.vue";
import BizLaws from "~/components/homepage/reuse/column-layout.vue";

import TricksAndTips from "../components/homepage/reuse/grids-layout.vue";
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
//title
const smeTitle = ref<any>("");
const selftEmpInfoTitle = ref<any>("");
const newActivityTitle = ref<any>("");
const bizLawInfoTItle = ref<any>("");
const TSNSInfoTItle = ref<any>("");
const enterPreInfoTitle = ref<any>("");
const wingInfoTitle = ref<any>("");
//end title
import { useI18n } from "vue-i18n";
const { locale }: any = useI18n();
const isLang = ref<any>();
const fetchMSMEs = async () => {
  const name = "654d868d4040f0af2207e5eb";
  await axios.post(`sme-articles/${name}`).then((res) => {
    if (res.status === 200) {
      msmes.value = res.data.info;
    }
  });
  const res = await axios.post(
    `get-section-home-page?_id=${name}&lang=${isLang.value}`
  );
  smeTitle.value = res.data.info.name;
};
const fetchEntrepre = async () => {
  const name = "651a4ca8c2d5c94d6cc3da9e";
  await axios.post(`reuse-articles/${name}`).then((res) => {
    if (res.status === 200) {
      console.log(res.data.info);
      enterPreInfo.value = res.data.info;
    }
  });
  const res = await axios.post(
    `get-section-home-page?_id=${name}&lang=${isLang.value}`
  );
  enterPreInfoTitle.value = res.data.info.name;
};
const fetchSelftEmp = async () => {
  const name = "651a4cebc2d5c94d6cc3daa7";
  await axios.post(`sme-articles/${name}`).then((res) => {
    if (res.status === 200) {
      selftEmpInfo.value = res.data.info;
    }
  });
  const res = await axios.post(
    `get-section-home-page?_id=${name}&lang=${isLang.value}`
  );
  selftEmpInfoTitle.value = res.data.info.name;
};
const fetchNewAndActivities = async () => {
  const name = "651a4d06c2d5c94d6cc3daba";
  await axios.post(`reuse-articles/${name}`).then((res) => {
    if (res.status === 200) {
      newsAndActivitiesInfo.value = res.data.info;
    }
  });
  const res = await axios.post(
    `get-section-home-page?_id=${name}&lang=${isLang.value}`
  );
  newActivityTitle.value = res.data.info.name;
};
const fetchBizLaw = async () => {
  const name = "651a4d1ac2d5c94d6cc3dac3";
  await axios.post(`reuse-articles/${name}`).then((res) => {
    if (res.status === 200) {
      bizLawInfo.value = res.data.info;
    }
  });
  const res = await axios.post(
    `get-section-home-page?_id=${name}&lang=${isLang.value}`
  );
  bizLawInfoTItle.value = res.data.info.name;
};

const fetchTSNS = async () => {
  const name = "654d86c14040f0af2207e5f4";
  await axios.post(`reuse-articles/${name}`).then((res) => {
    if (res.status === 200) {
      TSNSInfo.value = res.data.info;
    }
  });
  const res = await axios.post(
    `get-section-home-page?_id=${name}&lang=${isLang.value}`
  );
  TSNSInfoTItle.value = res.data.info.name;
};

const fetchWing = async () => {
  const name = "654d86dc4040f0af2207e5fd";
  await axios.post(`reuse-articles/${name}`).then((res) => {
    if (res.status === 200) {
      wingInfo.value = res.data.info;
    }
  });
  const res = await axios.post(
    `get-section-home-page?_id=${name}&lang=${isLang.value}`
  );
  wingInfoTitle.value = res.data.info.name;
};
fetchMSMEs();
fetchEntrepre();
fetchSelftEmp();
fetchNewAndActivities();
fetchBizLaw();
fetchTSNS();
fetchWing();
watch(
  () => locale.value,
  (value) => {
    isLang.value = value;
    fetchMSMEs();
    fetchEntrepre();
    fetchSelftEmp();
    fetchNewAndActivities();
    fetchBizLaw();
    fetchTSNS();
    fetchWing();
  },
  { immediate: true, deep: true }
);
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
  line-height: 1.5;
}

.section-title {
  font-size: var(--xlg-font);
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 10px;
}
</style>
