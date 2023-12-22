<template>
  <div>
    <div class="container">
      <section class="section">
        <h1 class="page-title">THE BIZ HUB ແມ່ນຫຍັງ?</h1>
        <div class="grids is-2-desktop is-1-mobile gap-20-desktop">
          <div class="box" v-for="(i, index) in tabs" :key="index">
            <h3 class="margin-bottom-10">{{ i.key }}</h3>
            <p>{{ i.desc }}</p>
          </div>
        </div>
      </section>
    </div>
    <img class="top-image" src="../../assets/images/about-page/team.jpg" />
    <ProductAndServcie />
    <h1 class="section-title">ຜົນງານຂອງ THE BIZ HUB</h1>
    <Works :work="isWork" />
  </div>
</template>

<script lang="ts" setup>
import ProductAndServcie from "./product-and-services.vue";
import Works from "./works.vue";
const axios = useNuxtApp().$axios;
import { useI18n } from "vue-i18n";
const { locale }: any = useI18n();
const isLang = ref<any>();
const isWork = ref<any>([]);
const tabs = ref<any>([]);

const works = ref<any>([
  {
    name: "ຮ່ວມຈັດງານ Job Fest ງານມະຫະກໍາວຽກເຮັດງານທໍາແບບເປີດກ້ວາງ 2023",
    images: [
      {
        img: "Jobfest/jobfest20231.jpg",
      },
      {
        img: "Jobfest/jobfest20232.jpg",
      },
      {
        img: "Jobfest/jobfest20233.jpg",
      },
      {
        img: "Jobfest/jobfest20234.jpg",
      },
      {
        img: "Jobfest/jobfest20235.jpg",
      },
      {
        img: "Jobfest/jobfest20236.jpg",
      },
    ],
  },
  {
    name: "3.	ເປັນຜູ້ໃຫ້ຄໍາປຶກສາ ( Mentor ແລະ Coach ) ໃຫ້ກັບຫຼາຍກ່ວາ 20 ທຸລະກິດ, ພາຍໃຕ້ໂຄງການ ASEAN Mentorship For Entrepreneurs Network ( AMEN )",
    images: [
      {
        img: "amen/amen1.jpg",
      },
      {
        img: "amen/amen2.jpg",
      },
      {
        img: "amen/amen3.jpg",
      },
      {
        img: "amen/amen4.jpg",
      },
      {
        img: "amen/amen5.jpg",
      },
      {
        img: "amen/amen6.jpg",
      },
      {
        img: "amen/amen7.jpg",
      },
    ],
  },
  {
    name: "ຮ່ວມຈັດງານ ມະຫາກໍາວຽກເຮັດງານທໍາທ່າແຂກ, ແຂວງຄໍາມ່ວນ ແລະ ຈັດຝຶກອົບຮົມ ຫົວຂໍ້: ການປະກອບອາຊີບດ້ວຍຕົນເອງ",
    images: [
      {
        img: "Jobfest/jobfest-thakhek1.jpg",
      },
      {
        img: "Jobfest/jobfest-thakhek2.jpg",
      },
      {
        img: "Jobfest/jobfest-thakhek3.jpg",
      },
      {
        img: "Jobfest/jobfest-thakhek4.jpg",
      },
      {
        img: "Jobfest/jobfest-thakhek5.jpg",
      },
      {
        img: "Jobfest/jobfest-thakhek6.jpg",
      },
      {
        img: "Jobfest/jobfest-thakhek7.jpg",
      },
    ],
  },
  {
    name: "ຮ່ວມຈັດງານ ກິດຈະກໍາລະນຶກເຖິງວັນກໍາມະກອນສາກົນ  ແລະ ຈັດຝຶກອົບຮົມ ຫົວຂໍ້: ການປະກອບອາຊີບດ້ວຍຕົນເອງ",
    images: [
      {
        img: "Jobfest/jobfest-labour1.jpg",
      },
      {
        img: "Jobfest/jobfest-labour2.jpg",
      },
      {
        img: "Jobfest/jobfest-labour3.jpg",
      },
    ],
  },
  {
    name: "ການຈັດຝຶກອົບຮົມແບບເຊິ່ງໜ້າ",
    images: [
      {
        img: "coaching/coaching1.jpg",
      },
      {
        img: "coaching/coaching2.jpg",
      },
      {
        img: "coaching/coaching3.jpg",
      },
      {
        img: "coaching/coaching4.jpg",
      },
    ],
  },
  {
    name: "ທີມຄູຝຶກ ແລະ ທີ່ປຶກສາຂອງໂຄງການຝຶກອົບຮົມພຶ້ນຖານການປະກອບທຸລະກິດ ພາຍໃຕ້ໂຄງການ Vtess, Swisscontact",
    images: [
      {
        img: "bet/bet1.jpg",
      },
      {
        img: "bet/bet2.jpg",
      },
      {
        img: "bet/bet3.jpg",
      },
      {
        img: "bet/bet4.jpg",
      },
      {
        img: "bet/bet5.jpg",
      },
      {
        img: "bet/bet6.jpg",
      },
      {
        img: "bet/bet7.jpg",
      },
    ],
  },
]);

const fetch = async () => {
  await axios.post(`get-achievement-api/${isLang.value}`).then((res: any) => {
    if (res) {
      isWork.value = res.data.info;
    }
  });
};
const fetchIntro = async () => {
  const isLang = locale.value ? locale.value : "en";
  const data = await axios.post(`get-intro-api?lang=${isLang}`);
  tabs.value = data.data.info;
};
fetch();
fetchIntro();
watch(
  () => locale.value,
  (value) => {
    isLang.value = value;
    fetch();
    fetchIntro();
  },
  { immediate: true, deep: true }
);
</script>

<style lang="scss" scoped>
// .xx {
//   background-color: var(--sub-color);
// }
.box {
  background-color: var(--sub-color);
  color: #fff;
  padding: 20px;
  border-radius: 20px;

  h1 {
    font-weight: 700;
    font-size: var(--xxlg-font);
  }

  h3 {
    font-weight: 700;
    font-size: var(--lg-font);
  }

  p {
    font-size: var(--md-font);
  }
}

.top-image {
  display: block;
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
  background-position: center;
}

.section-title {
  text-align: center;
  margin-bottom: 20px;
}

.box {
  &:nth-child(1) {
    grid-column: 1 / span 2;
  }
}
</style>
