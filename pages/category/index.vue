<template>
  <section>
    <div class="container">
      <h1 class="page-title">{{ this.$route.query.is }}</h1>

      <div class="tabs-container">
        <ul class="tabs">
          <li>Update</li>
          <li>News & Event</li>
          <li class="current">
            Learning <i class="fa-light fa-angle-down"></i>
          </li>
          <li>BIZ Laws</li>
          <li>|</li>
          <li>Product & Services <i class="fa-light fa-angle-down"></i></li>
        </ul>
        <p><i class="fa-regular fa-angle-right"></i></p>
      </div>

      <cardList />
    </div>
  </section>
</template>
<script setup>
import cardList from "./card-list.vue";
</script>
<style lang="scss" scoped>
.tabs-container {
  display: flex;
  align-items: center;
  position: relative;

  .tabs {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-x: auto;
    overflow-y: hidden;
    position: relative;

    @include mobile {
      justify-content: flex-start;
    }

    li {
      padding: 5px 10px;
      cursor: pointer;
      display: flex;
      align-items: flex-end;
      white-space: pre !important;

      &.current {
        color: $sub-color;
      }

      i {
        line-height: 1;
        margin-left: 5px;
      }
    }
  }

  p {
    display: none;
    position: absolute;
    right: 0;
    width: 50px;
    align-items: center;
    justify-content: flex-end;
    background: linear-gradient(
      270deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 100%
    );

    @include mobile {
      display: flex;
    }

    @include tablet {
      display: flex;
    }
  }
}
</style>
