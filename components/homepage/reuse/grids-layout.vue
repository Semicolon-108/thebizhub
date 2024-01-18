<template>
  <section>
    <div class="container">
      <div class="section-header">
        <h1 class="section-title">{{ title }}</h1>
        <NuxtLink :to="{ path: '/category', query: { is: `${title}` } }">
          {{ $t("more") }}<i class="fa-regular fa-arrow-right"></i>
        </NuxtLink>
      </div>
      <ul>
        <li v-for="(i, index) in info" :key="index">
          <div class="card" @click="router.push(`/blog-detail/${i._id}`)">
            <div class="card-image">
              <img :src="images + i.coverPage" alt="" />
            </div>
            <div class="card-content">
              <!-- <ul class="tag-list">
                <li v-for="(c, ind) in i.category" :key="ind">
                  <a>{{ c.name }}</a>
                </li>
              </ul> -->
              <h3 class="card-title">{{ i.title }}</h3>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>
<script setup lang="ts">
const images = useNuxtApp().$imageURL;
const props = defineProps(["title", "info"]);
const router = useRouter();
</script>
<style lang="scss" scoped>
ul {
  display: grid;
  grid-template-columns: repeat(16, 1fr);
  gap: 20px;

  @include mobile {
    grid-template-columns: 1fr;
  }

  li {
    &:first-child {
      grid-row: span 2;
      grid-column: span 8;

      @include mobile {
        grid-column: span 17;
        grid-template-columns: 1fr;
      }
    }

    &:not(:first-child) {
      grid-column: span 4;

      @include mobile {
        grid-template-columns: 1fr;
        grid-column: span 17;
      }
    }
  }
}

.card-title {
  font-weight: 700;
  margin-top: 10px;
  line-height: 1.8;
}
</style>
