<template>
  <section class="section">
    <div class="container">
      <div class="grids gap-20-desktop is-5-desktop is-1-mobile gap-10-mobile">
        <div class="left span-2-desktop">
          <div class="intro">
            <h1>THE BIZ HUB</h1>
            <h3>
              {{ $t("partnerforsuccess") }} <br class="is-hidden-mobile" />
              {{ $t("inBusiness") }} <br class="is-hidden-mobile" />
              {{ $t("entrepreneurship") }}
            </h3>
            <button class="main margin-top-20" @click="
              router.push({ path: '/category', query: { is: 'Update' } })
              ">
              {{ $t("updates") }}
            </button>
          </div>
        </div>
        <div class="right span-3-desktop">
          <div class="video">
            <!-- <i class="fa-solid fa-play"></i> -->
            <iframe src="https://www.youtube.com/embed/PezSDxa0vrs?si=h07PGaZbGmI8jwC2" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
const router = useRouter();
const route = useRoute();
const language = ref<any>();
const useCookies = useCookie("lang");
watch(
  useCookies,
  (value) => {
    if (value === "lao") {
      language.value;
    } else if (value === "en") {
      language.value;
    } else {
      language.value;
    }
  },
  { deep: true, immediate: true }
);
</script>
<style lang="scss" scoped>
.left {
  display: flex;
  align-items: center;

  @include mobile {
    text-align: center;
  }

  .intro {
    h1 {
      font-size: 3rem;
      font-weight: 700;

      @include mobile {
        line-height: 1.5;
      }
    }

    h3 {
      font-size: 1.8rem;
      line-height: 1.3;
      font-weight: 600;

      @include mobile {
        margin-top: 10px;
        font-size: 1.5rem;
      }
    }
  }
}

.right {
  .video {
    width: 100%;

    iframe {
      width: 100%;
      aspect-ratio: 16/9;
      display: block;
    }
  }

  // ul {
  //   li {
  //     overflow: hidden;
  //     cursor: pointer;
  //     position: relative;
  //     aspect-ratio: 5/3;
  //     padding: 20px;
  //     border-radius: 10px;
  //     background-position: center !important;
  //     background-size: cover !important;
  //     color: #fff;
  //     background-blend-mode: multiply;
  //     display: flex;
  //     align-items: flex-end;

  //     &:nth-child(1) {
  //       background: url("../../assets/images/bg.jpg")
  //         rgba(var(--main-color-rgb), 0.7);
  //     }

  //     &:nth-child(2) {
  //       background: url("../../assets/images/bg.jpg")
  //         rgba(var(--main-color-rgb), 0.7);
  //     }

  //     &:nth-child(3) {
  //       background: url("../../assets/images/bg.jpg")
  //         rgba(var(--main-color-rgb), 0.7);
  //     }

  //     &:nth-child(4) {
  //       background: url("../../assets/images/bg.jpg")
  //         rgba(var(--main-color-rgb), 0.7);
  //     }

  //     &:hover {
  //       .course-info {
  //         p,
  //         h3 {
  //           display: block;
  //           animation: slideUp ease-in-out 0.3s;
  //           display: -webkit-box;
  //           -webkit-line-clamp: 4;
  //           -webkit-box-orient: vertical;
  //           overflow: hidden;

  //           @keyframes slideUp {
  //             from {
  //               transform: translateY(100px);
  //             }

  //             to {
  //               transform: translateY(0px);
  //             }
  //           }
  //         }
  //       }
  //     }

  //     .course-info {
  //       display: inline-block;

  //       h3 {
  //         font-weight: 600;
  //         font-size: var(--md-font);
  //       }

  //       p {
  //         transition: ease 0.5s;
  //         margin-top: 5px;
  //         font-size: var(--sm-font);
  //         overflow: hidden;
  //         display: none;
  //       }
  //     }
  //   }
  // }
}
</style>
