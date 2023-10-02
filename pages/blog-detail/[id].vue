<template>
  <div id="blog-detail">
    <section class="has-bg">
      <div class="container">
        <img :src="imageURL + coverPage" alt="" v-if="coverPage" />
      </div>
    </section>
    <div class="container content">
      <h1 class="blog-title">{{ title }}</h1>
      <ul class="blog-info">
        <li>
          <p>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-whatsapp"></i>
            <i class="fa-light fa-link"></i>
          </p>
        </li>
        <li>
          <p>
            <span>{{ tag.name }}</span
            ><span>{{ category.name }}</span>
          </p>
        </li>
        <li>{{ createdAt }}</li>
      </ul>
      <!-- Blog detail -->
      <div class="blog-detail" v-html="detail"></div>

      <div class="blog-footer" v-if="related.length">
        <h3 class="section-title">RELATED ARTICLES</h3>
        <Releted :relate="related" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Releted from "./related.vue";
const imageURL = useNuxtApp().$imageURL;
const axios = useNuxtApp().$axios;
const route = useRoute();
const msgError = ref<any>();
const title = ref<any>();
const coverPage = ref<any>();
const tag = ref<any>();
const category = ref<any>();
const detail = ref<any>();
const createdAt = ref<any>();
const related = ref<any>([]);

const fetch = async () => {
  const id = route.params.id;
  if (!id) return;
  await axios
    .post(`articles-detail/${id}`)
    .then((res) => {
      if (res.status === 200) {
        title.value = res.data.info.title;
        coverPage.value = res.data.info.coverPage;
        tag.value = res.data.info.tag;
        category.value = res.data.info.category;
        detail.value = res.data.info.details;
        createdAt.value = res.data.info.createdAt;
        related.value = res.data.isRelated;
      }
    })
    .catch((e: any) => {
      if (e) {
        msgError.value = "Data empty";
      }
    });
};

fetch();
</script>

<style lang="scss" scoped>
.has-bg {
  background-color: var(--light-grey-color);

  img {
    width: 100%;
    aspect-ratio: 1.9;
    object-fit: cover;
    display: block;
  }
}

.container {
  max-width: 760px;
  margin: 0 auto;

  &.content {
    padding: 2.5rem 0;
  }
}

.blog-title {
  font-size: var(--xlg-font);
  font-weight: 700;
}

.blog-info {
  margin-top: 10px;
  margin-bottom: 10px;

  li {
    line-height: 1.7;

    &:nth-child(1) {
      p {
        display: flex;
        gap: 10px;

        cursor: pointer;

        i {
          font-size: var(--lg-font);

          &:nth-child(1) {
            color: #4267b2;
          }

          &:nth-child(2) {
            color: #25d366;
          }

          &:nth-child(3) {
            color: --var(grey-color);
          }
        }
      }
    }

    &:nth-child(2) {
      display: flex;
      align-items: center;

      p {
        display: flex;
        align-items: center;
        font-size: var(--xsm-font);

        span {
          display: flex;
          align-items: center;
          font-weight: 600;

          &:not(:last-child) {
            &::after {
              content: "";
              display: block;
              border-right: 1px solidvar(--border-color);
              height: 10px;
              margin: 0 5px;
            }
          }
        }
      }
    }

    &:nth-child(3) {
      font-size: var(--xsm-font);
      color: var(--dark-grey-color);
    }
  }
}

// blog-info
.blog-detail {
  font-size: var(--md-font);
  margin-bottom: 40px;
}
</style>
