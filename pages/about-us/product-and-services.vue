<template>
  <section>
    <div class="container">
      <h1 class="section-title">ຜະລິດຕະພັນ/ການບໍລິການຂອງເຮົາ</h1>
      <ul class="image-list grids is-3-desktop is-1-mobile gap-20-desktop">
        <li v-for="(i, index) in info" :key="index">
          <img :src="urlImage + i.image" />
          <h3>{{ i.key }}</h3>
          <!-- <p>
            {{ i.desc }}
          </p>
          <NuxtLink :to="{
            path: `/${i.link}`,
          }"> <button class="button main small">{{ $t("more_detail") }}</button>
          </NuxtLink> -->
        </li>

        <!-- <li>
          <img src="../../assets/images/services/biz-coaching.png" />
          <h3>ບໍລິການໃຫ້ຄໍາປຶກສາທາງທຸລະກິດ ( BIZ COACHING )</h3>
        </li>
        <li>
          <img src="../../assets/images/services/project-business-consultancy.png" />
          <h3>Project/Business Consultancy (BIZ CONSULTING)</h3>
        </li> -->
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
const axios = useNuxtApp().$axios;
const https = useNuxtApp().$https
const urlImage = useNuxtApp().$imageURL;
import { useI18n } from "vue-i18n";
const router = useRouter();
const { locale }: any = useI18n();
const info = ref<any>();

const fetchOurService = async () => {
  const isLang = locale.value ? locale.value : "en";
  const data = await axios.post(`get-our-service-api?lang=${isLang}`);
  info.value = data.data.info;
};
watch(
  () => locale.value,
  (value) => {
    fetchOurService();
  },
  { immediate: true, deep: true }
);
fetchOurService();
</script>

<style lang="scss" scoped>
.section-title {
  text-align: center;
  margin-bottom: 20px;
}

.image-list {
  li {
    text-align: center;

    img {
      aspect-ratio: 1/1;
      object-fit: cover;
      max-width: 130px;
    }

    h3 {
      text-align: center;
      margin-top: 10px;
      font-size: var(--md-font);
    }
  }
}
</style>
