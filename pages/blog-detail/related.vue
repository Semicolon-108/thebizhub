<template>
  <ul class="grids is-3-desktop gap-20-desktop">
    <li v-for="(i, index) in relate" :key="index">
      <div class="card" @click="clickHandler(i._id)">
        <div class="card-image">
          <img :src="imageURL + i.coverPage" alt="" />
        </div>
        <div class="card-content">
          <ul class="tag-list">
            <li v-for="(c, ind) in i.category" :key="ind">{{ c.name }}</li>
          </ul>
          <h3>{{ i.title }}</h3>
        </div>
      </div>
    </li>
  </ul>
</template>
<script setup lang="ts">
const imageURL = useNuxtApp().$imageURL;
const router = useRouter();
defineProps(["relate"]);

const clickHandler = (id: any) => {
  router.push(`/blog-detail/${id}`);
  // window.location.reload();
};
</script>
<style lang="scss" scoped></style>
