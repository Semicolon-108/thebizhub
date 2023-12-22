<template>
  <div>
    <Intro />
    <OurService />
    <WhoWeAre />
    <!-- <p>Event and Activity</p>
    <p>BIZ Tool</p> -->
    <EventsAndActivitys
      :title="eventsAndActivityTitle"
      :info="eventsAndActivityInfo"
      v-show="eventsAndActivityInfo.length"
    />
    <BizTool
      :title="bizToolTitle"
      :info="bizToolInfo"
      v-show="bizToolInfo.length"
    />
    <Story
      v-show="enterPreInfo.length"
      :info="enterPreInfo"
      :title="enterPreInfoTitle"
    />

    <section class="section">
      <BizLaws
        :title="bizLawInfoTItle"
        :info="bizLawInfo"
        v-show="bizLawInfo.length"
      />
    </section>

    <section class="section tsns-bg">
      <TSNS :title="TSNSInfoTItle" :info="TSNSInfo" v-show="TSNSInfo.length" />
    </section>

    <section class="section">
      <TricksAndTips :title="smeTitle" :info="msmes" v-show="msmes.length" />
    </section>

    <section class="section wing-bg">
      <Wing :title="wingInfoTitle" :info="wingInfo" v-show="wingInfo.length" />
    </section>

    <!-- <section class="section">
      <SelftEmployment
        :title="selftEmpInfoTitle"
        :info="selftEmpInfo"
        v-show="selftEmpInfo.length"
      />
    </section> -->

    <section class="section">
      <BusinessSupporters
        :title="businessSupportersTitle"
        :info="businessSupportersInfo"
        v-show="businessSupportersInfo.length"
      />
    </section>
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
// import NewsAndActivitiesInfo from "../components/homepage/reuse/column-layout.vue";
import BizLaws from "~/components/homepage/reuse/column-layout.vue";

import EventsAndActivitys from "../components/homepage/reuse/grids-layout.vue";
import BizTool from "../components/homepage/reuse/grids-layout.vue";
import TricksAndTips from "../components/homepage/reuse/grids-layout.vue";
import SelftEmployment from "../components/homepage/reuse/grids-layout.vue";
import Wing from "../components/homepage/reuse/column-layout.vue";
import TSNS from "../components/homepage/reuse/column-layout.vue";
import BusinessSupporters from "../components/homepage/reuse/column-layout.vue";

const axios = useNuxtApp().$axios;
const eventsAndActivityInfo = ref<any>([]);
const bizToolInfo = ref<any>([]);
const enterPreInfo = ref<any>([]);
const selftEmpInfo = ref<any>([]);
const msmes = ref<any>([]);
// const newsAndActivitiesInfo = ref<any>([]);
const bizLawInfo = ref<any>([]);
const wingInfo = ref<any>([]);
const TSNSInfo = ref<any>([]);
const businessSupportersInfo = ref<any>([]);
//title
const eventsAndActivityTitle = ref<any>("");
const bizToolTitle = ref<any>("");
const smeTitle = ref<any>("");
const selftEmpInfoTitle = ref<any>("");
const newActivityTitle = ref<any>("");
const bizLawInfoTItle = ref<any>("");
const TSNSInfoTItle = ref<any>("");
const enterPreInfoTitle = ref<any>("");
const wingInfoTitle = ref<any>("");
const businessSupportersTitle = ref<any>("");
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
// const fetchNewAndActivities = async () => {
//   const name = "651a4d06c2d5c94d6cc3daba";
//   await axios.post(`reuse-articles/${name}`).then((res) => {
//     if (res.status === 200) {
//       newsAndActivitiesInfo.value = res.data.info;
//     }
//   });
//   const res = await axios.post(
//     `get-section-home-page?_id=${name}&lang=${isLang.value}`
//   );
//   newActivityTitle.value = res.data.info.name;
// };
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
const fetchEventAndActivity = async () => {
  const name = "651a4d06c2d5c94d6cc3daba";
  await axios.post(`reuse-articles/${name}`).then((res) => {
    if (res.status === 200) {
      eventsAndActivityInfo.value = res.data.info;
    }
  });
  const res = await axios.post(
    `get-section-home-page?_id=${name}&lang=${isLang.value}`
  );
  eventsAndActivityTitle.value = res.data.info.name;
};
const fetchBizTool = async () => {
  const name = "654d866a4040f0af2207e5db";
  await axios.post(`reuse-articles/${name}`).then((res) => {
    if (res.status === 200) {
      bizToolInfo.value = res.data.info;
    }
  });
  const res = await axios.post(
    `get-section-home-page?_id=${name}&lang=${isLang.value}`
  );
  bizToolTitle.value = res.data.info.name;
};
const fetchBusinessSupporters = async () => {
  const name = "657aa122bc4e6513beed5630";
  await axios.post(`reuse-articles/${name}`).then((res) => {
    if (res.status === 200) {
      businessSupportersInfo.value = res.data.info;
    }
  });
  const res = await axios.post(
    `get-section-home-page?_id=${name}&lang=${isLang.value}`
  );
  businessSupportersTitle.value = res.data.info.name;
};

fetchEventAndActivity();
fetchBizTool();
fetchMSMEs();
fetchEntrepre();
fetchSelftEmp();
// fetchNewAndActivities();
fetchBizLaw();
fetchTSNS();
fetchWing();
fetchBusinessSupporters();
watch(
  () => locale.value,
  (value) => {
    isLang.value = value;
    fetchEventAndActivity();
    fetchBizTool();
    fetchMSMEs();
    fetchEntrepre();
    fetchSelftEmp();
    // fetchNewAndActivities();
    fetchBizLaw();
    fetchTSNS();
    fetchWing();
    fetchBusinessSupporters();
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
  &.tsns-bg {
    background-image: url("../assets/images/bg/tsns-bg.jpg");
    background-position: cover;
    background-size: cover;
    color: #fff;
  }
  &.wing-bg {
    background-image: url("../assets/images/bg/wing-bg.jpg");
    background-position: cover;
    background-size: cover;
    color: #fff;
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
