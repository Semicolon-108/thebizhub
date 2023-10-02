<template>
  <div class="container">
    <div class="work" v-for="(i, index) in work" :key="index">
      <div class="images">
        <ul
          class="image-list grids is-3-desktop is-1-mobile gap-20-desktop gap-10-mobile"
        >
          <li v-for="i in i.images" :key="i">
            <img :src="getImageUrl(i.img)" alt="" />
          </li>
        </ul>
      </div>
      <div class="footer">
        <h3>{{ i.name }}</h3>
      </div>
    </div>
  </div>
</template>

<script setup>
const { work } = defineProps(["work"]);

const getImageUrl = (imagename) => {
  const imageUrl = new URL(
    `/assets/images/about-page/${imagename}`,
    import.meta.url
  ).href;
  return imageUrl;
};
</script>

<style lang="scss" scoped>
.work {
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
  border: 1px solid var(--sub-color);

  margin-bottom: 30px;
  .images {
    padding: 20px;
  }
  .footer {
    padding: 20px;
    color: #fff;
    background-color: var(--sub-color);
  }
}
.image-list {
  li {
    img {
      aspect-ratio: 1/1;
      object-fit: cover;
    }
  }
}
h3 {
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  margin-top: 10px;
  font-size: var(--lg-font);
  max-width: 850px;
}
</style>
