<template>
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
          <div class="card-image fullheight">
            <img :src="images + i.coverPage" alt="" />
          </div>
          <div class="card-content">
            <!-- <p class="tag-list">
                <span v-for="(t, indx) in i.tag" :key="indx">{{ t.name }}</span>
                <span v-for="(c, ind) in i.category" :key="ind">{{
                  c.name
                }}</span>
              </p> -->
            <h3 class="card-title">{{ i.title }}</h3>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
const images = useNuxtApp().$imageURL;
const router = useRouter();
defineProps(["title", "info"]);
</script>

<style lang="scss" scoped>
ul {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  @include mobile {
    overflow: auto;
    li {
      flex: 0 0 80%;
    }
  }
}

.card-title {
  font-weight: 700;
  margin-top: 10px;
  line-height: 1.8;
}
</style>
