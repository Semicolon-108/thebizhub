<template>
  <div class="container">
    <div class="work" v-for="(i, index) in work" :key="index">
      <div class="header">
        <h3>{{ i.title }}</h3>
      </div>
      <div class="body">
        <Swiper :modules="[SwiperAutoplay, SwiperPagination, SwiperNavigation]" :slides-per-view="3" :space-between="20"
          :loop="false" :effect="'creative'" navigation :pagination="{
            clickable: true,
            el: '.swiper-pagination',
          }" :autoplay="{
  delay: 5000,
  disableOnInteraction: true,
}">
          <SwiperSlide v-for="o in i.image" @click="isFindIndex(o, i.image)">
            <img :src="urlImage + o" alt="" />
          </SwiperSlide>
          <div class="swiper-pagination"></div>
        </Swiper>
      </div>
      <Gallery :data="isImage" v-if="ShowGallery" @closeShowGallery="ShowGallery = false" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Gallery from "./gallery.vue";
const { work } = defineProps(["work"]);
const urlImage = useNuxtApp().$imageURL;
const ShowGallery = ref<any>(false);
const isImage = ref<any>("")

const isFindIndex = (obj: any, image: any) => {
  const find = image.find((f: any) => f == obj)
  isImage.value = find
  ShowGallery.value = true
}
</script>

<style lang="scss">
.work {
  text-align: center;
  margin-top: 30px;
  margin-bottom: 60px;

  overflow: hidden;

  .header {
    padding: 20px;
    color: #fff;
    background-color: var(--sub-color);
    border-radius: 30px 30px 0 0;

    h3 {
      margin-left: auto;
      margin-right: auto;
      text-align: center;
      margin-top: 10px;
      font-size: var(--lg-font);
      max-width: 850px;
    }
  }

  // header
  .body {
    padding: 20px !important;
    border: 3px solid var(--sub-color);
    border-radius: 0 0 30px 30px;

    img {
      display: block;
      aspect-ratio: 1/1;
      // height: 300px;
      object-fit: cover;
      border-radius: 20px;
    }
  }
}
</style>
