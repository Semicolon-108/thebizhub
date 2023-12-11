<template>
  <section>
    <div class="container">
      <h1 class="section-title">Entrepreneur's Story</h1>
      <ul>
        <li v-for="(i, index) in info" :key="index">
          <div class="card dark" @click="router.push(`/blog-detail/${i._id}`)">
            <div class="card-image">
              <img :src="images + i.coverPage" alt="" />
            </div>
            <div class="card-content">
              <p class="tag-list">
                <span v-for="(t, indx) in i.tag" :key="indx">{{ t.name }}</span>
                <span v-for="(c, ind) in i.category" :key="ind">{{
                  c.name
                }}</span>
              </p>
              <h3>{{ i.title }}</h3>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>
<script setup lang="ts">
defineProps(["info"]);
const router = useRouter();
const images = useNuxtApp().$imageURL;
</script>

<style lang="scss" scoped>
section {
  background-image: url("../../assets/images/footer-bg.svg");
  // background-repeat: no-repeat;
  // background-size: cover;
  background-position: center center;

  .section-title {
    color: #fff;
  }

  ul {
    display: flex;
    gap: 20px;

    @include mobile {
      overflow: auto;

      li {
        flex: 0 0 80%;
      }
    }
  }
}
</style>
