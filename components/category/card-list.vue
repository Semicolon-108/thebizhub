<template>
  <ul class="grids is-3-desktop is-1-mobile gap-20 margin-top-20">
    <li v-for="(i, index) in 10" :key="index">
      <div class="card" @click="router.push(`/blog-detail/${index}`)">
        <div class="card-image">
          <img src="../../assets/images/img-05.jpg" alt="" />
        </div>
        <div class="card-content">
          <p class="tag-list">
            <span>Learning</span>
            <span>SME & Startup</span>
          </p>
          <h3>
            Home / NETWORK (Wireless) / Range extender & mesh wifi / Whole-home
            mesh tp-link (deco e4) wireless ac1200 dual band (pack 2)
          </h3>
        </div>
      </div>
    </li>
  </ul>
</template>
<script lang="ts" setup>
const router = useRouter();
</script>
<style lang="scss" scoped>
ul {
  li {
    .card {
      cursor: pointer;

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

          &:not(:last-child) {
            span {
              display: flex;
              align-items: center;

              &::after {
                content: "";
                width: 1px;
                height: 15px;
                border-left: 1px solid $grey-color;
                display: block;
                margin: 0 8px;
              }
            }
          }

          span {
            white-space: pre-line;
            display: flex;
            align-items: center;
            @include xsm-font;
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
        @include md-font;
      }
    }

    // card
  }
}
</style>
