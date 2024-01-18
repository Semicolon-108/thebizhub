<template>
  <section>
    <div class="container">
      <h1 class="section-title">News & Event</h1>
      <ul>
        <li v-for="(i, index) in info" :key="index">
          <div class="card" @click="router.push(`/blog-detail/${i._id}`)">
            <div class="card-image fullheight">
              <img :src="images + i.coverPage" alt="" />
            </div>
            <div class="card-content">
              <p class="tag-list">
                <span v-for="(t, indx) in i.tag" :key="indx">{{ t.name }}</span>
                <span v-for="(c, ind) in i.category" :key="ind">{{ c.name }}</span>
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
const images = useNuxtApp().$imageURL;
const router = useRouter()
defineProps(["info"]);
</script>

<style lang="scss" scoped>
section {
  ul {
    display: flex;
    gap: 20px;

    @include mobile {
      overflow: auto;

      li {
        flex: 0 0 80%;
      }
    }

    li {
      .card {
        .card-image {
          img {
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

      // card
    }
  }
}
</style>
