<template>
  <section class="section">
    <div class="container">
      <div class="section-header">
        <div class="section-title">{{ $t("products") }}</div>
      </div>
      <div class="section-body">
        <ul class="grids is-3-desktop is-1-mobile gap-10-tablet gap-10-tablet gap-20-desktop gap-10-mobile">
          <li v-for="(i, index) in info" :key="index">
            <div class="card">
              <div class="card-icon">
                <img :src="urlImage + i.image" />
              </div>
              <h3 class="card-title">{{ i.key }}</h3>
              <p>
                {{ i.desc }}
              </p>
              <NuxtLink :to="{
                path: `/${i.link}`,
              }"> <button class="button main small">{{ $t("more_detail") }}</button>
              </NuxtLink>

            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// get-our-service-api
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
.section {
  position: relative;

  &::before {
    height: 200px;
    content: "";
    display: block;
    background-color: var(--sub-color);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
  }

  .section-header {
    position: relative;
    z-index: 2;
    margin-bottom: 20px;

    .section-title {
      text-align: center;
      color: #fff;
    }
  }

  // section-header
  .section-body {
    position: relative;
    z-index: 2;

    .card {
      height: 100%;
      background-color: #fff;
      padding: 30px;
      border: 1px solid var(--border-color);
      border-radius: 6px;
      text-align: center;
      background-color: #fff;

      .card-icon {
        display: flex;
        justify-content: center;
        margin-bottom: 20px;

        img {
          width: 80px;
          object-fit: cover;
          display: block;
        }
      }

      .card-title {
        font-weight: 700;
        text-transform: uppercase;
        font-size: var(--md-font);
        margin-bottom: 5px;
        position: relative;
        text-align: center;

        &::after {
          content: "";
          display: block;
          height: 3px;
          width: 30px;
          border-radius: 3px;
          background-color: var(--sub-color);
          margin: 0.5rem auto;
        }
      }

      p {
        font-size: var(--md-font);
      }
    }

    button {
      margin-top: 10px;
    }
  }
}
</style>
