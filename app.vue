<template>
  <NuxtLayout name="main" v-if="protector">
    <NuxtPage />
  </NuxtLayout>
  <Protect v-else />
</template>
<script setup lang="ts">
import Protect from './pages/auth/protect.vue'
const protector = ref<any>(false)
const useCookies = useCookie('protector')
watch(() => (useCookies.value), (value) => {
  if (value) protector.value = true
}, { immediate: true, deep: true });
</script>

<style lang="scss">
html,
body {
  background-color: var(--bg-color);
  font-family: var(--font-family);
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.4s;
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

.swiper-pagination {
  background-image: linear-gradient(transparent, rgba(#000, 0.7));
  bottom: 0 !important;

  .swiper-pagination-bullet {
    background-color: rgba(#fff, 0.9);

    &.swiper-pagination-bullet-active {
      background-color: #fff;
    }
  }
}

.swiper-button-next,
.swiper-button-prev {
  padding: 20px !important;
  background-color: rgba(#fff, 0.8) !important;

  &::after {
    padding: 10px;
    font-size: var(--lg-font);
  }
}
</style>
