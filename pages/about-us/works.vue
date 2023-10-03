<template>
  <div class="container">
    <div class="work" v-for="(i, index) in work" :key="index">
      <div class="header">
        <h3>{{ i.name }}</h3>
      </div>
      <div class="images">
        <ul
          class="image-list grids is-3-desktop is-1-mobile gap-10-desktop gap-10-mobile"
        >
          <li v-for="i in i.images" :key="i">
            <img :src="getImageUrl(i.img)" alt="" />
            <p>12</p>
          </li>
        </ul>
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
  margin-bottom: 60px;
  border: 3px solid var(--sub-color);
  .header {
    padding: 20px;
    color: #fff;
    background-color: var(--sub-color);
  }

  .images {
    padding: 10px;
  }
}
.image-list {
  position: relative;
  li {
    position: relative;
    cursor: pointer;
    p {
      display: none;
    }
    &:last-child {
      display: flex;
      align-items: center;
      justify-content: center;
      p {
        display: block !important;
        font-size: 30px;
        font-weight: 700;
        position: absolute;
        z-index: 88;
        color: #fff;
      }
      &::after {
        content: "";
        display: block;
        position: absolute;
        z-index: 8;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(#000, 0.7);
      }
    }
    img {
      display: block;
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
