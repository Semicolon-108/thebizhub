<template>
  <div>
    <section>
      <div class="container">
        <h1 class="section-title">{{ title }}</h1>
        <ul>
          <li v-for="(i, index) in info" :key="index">
            <div class="card" @click="router.push(`/blog-detail/${i._id}`)">
              <div class="card-image">
                <img :src="images + i.coverPage" alt="" />
              </div>
              <div class="card-content">
                <ul class="tag-list">
                  <li v-for="(c, ind) in i.category" :key="ind">
                    <a>{{ c.name }}</a>
                  </li>
                </ul>
                <h3>{{ i.title }}</h3>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
const images = useNuxtApp().$imageURL;
const props = defineProps(["title", "info"]);
const router = useRouter();
</script>
<style lang="scss" scoped>
ul {
  display: grid;
  grid-template-columns: repeat(17, 1fr);
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

    .card {
      .card-image {
        img {
          aspect-ratio: 1.9;
          object-fit: cover;
          display: block;
        }
      }

      .card-content {
        ul.tag-list {
          display: flex;
          padding: 5px 0;
          margin: 5px 0;
          text-transform: uppercase;

          li {
            display: flex;
            align-items: center;
            a {
              text-transform: uppercase !important;
              transition: all ease-in-out 0.3s;
              font-size: var(--sm-font);
              &:hover {
                color: var(--sub-color);
              }
            }
            &:not(:first-child) {
              a {
                display: flex;
                align-items: center;

                &::before {
                  content: "";
                  width: 1px;
                  height: 15px;
                  background-color: var(--grey-color);
                  display: block;
                  margin: 0 8px;
                }
              }
            }
          }

          span {
            white-space: pre-line;
            display: flex;
            align-items: center;
            font-size: var(--xsm-font);
          }
        }

        h3 {
          font-weight: 700;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          font-size: var(--md-font);
        }
      }

      // card-content
    }
  }
}
</style>
