<template>
  <div>
    <section>
      <div class="container">
        <h1 class="section-title">{{ title }}</h1>
        <ul>
          <li v-for="(i, index) in info" :key="index">
            <div class="card">
              <div class="card-image">
                <img :src="images + i.coverPage" alt="" />
              </div>
              <div class="card-content">
                <p class="tag-list">
                  <span>{{ i.tag }}</span>
                  <span>{{ i.category }}</span>
                </p>
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
        .tag-list {
          display: flex;
          padding: 5px 0;
          margin: 5px 0;

          @include mobile {
            padding: 0;
          }

          &:not(:last-child) {
            span {
              display: flex;
              align-items: center;

              &::after {
                content: "";
                width: 1px;
                height: 15px;
                border-left: 1px solid--var(grey-color);
                display: block;
                margin: 0 8px;
              }
            }
          }

          span {
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
