<template>
  <div>
    <div class="top-navbar">
      <div class="mobile-only">
        <p class="left">
          <i class="fa-regular fa-magnifying-glass"></i>
        </p>
        <p class="right" @click="openMobileNav = true">
          <i class="fa-regular fa-bars"></i>
        </p>
      </div>
      <div class="logo" @click="router.push({ path: '/' })">
        <img src="../../assets/images/thebizhub-logo.jpg" />
      </div>
      <h1>{{ $t("slogan") }}</h1>

      <Transition name="slide-down">
        <LayoutsMobileNavbar v-if="openMobileNav" @closeMobileNavbar="openMobileNav = false" />
      </Transition>
    </div>
    <div class="navbar is-hidden-mobile">
      <div class="navbar-start">
        <ul>
          <li class="has-dropdown">
            <a class="hoverable">{{ $t("products") }}<i class="fa-light fa-angle-down"></i>
              <ul class="dropdown">
                <li>
                  <NuxtLink :to="{
                    path: '/product-and-services/biz-coaching',
                  }">BIZ COACHING</NuxtLink>
                </li>
                <li>
                  <NuxtLink :to="{
                    path: '/product-and-services/biz-course',
                  }">BIZ COURSES</NuxtLink>
                </li>
                <li>
                  <NuxtLink :to="{
                    path: '/product-and-services/project-business-consultant',
                  }">BUSINESS CONSULTANT</NuxtLink>
                </li>
              </ul>
            </a>
          </li>
          <li class="has-dropdown">
            <a class="hoverable">{{ $t("learning") }} <i class="fa-light fa-angle-down"></i>
              <ul class="dropdown">
                <li v-for="(o, index) in learing" :key="index">
                  <NuxtLink :to="{ path: '/category', query: { is: `${o.name}` } }">{{ o.name }}</NuxtLink>
                </li>
              </ul>
            </a>
          </li>
          <li>
            <a @click="$router.replace('/category?is=TSNS - Thao Sang Nang Sa')">{{ $t("article_tsns") }}</a>
          </li>
          <li>
            <a @click="
              $router.replace(
                `/category?is=WINGS - Women's Income Generating Support`
              )
              ">{{ $t("article_wing") }}</a>
          </li>
          <li>
            <NuxtLink to="/about-us">{{ $t("about_us") }}</NuxtLink>
          </li>
        </ul>
      </div>
      <div class="navbar-end">
        <input type="text" v-model="search" class="input small" :placeholder="$t('search')" @keyup.enter="
          router.push({ path: '/search', query: { search: search } })
          " />
        <hr class="v" />
        <p class="lang-switch">
          <a :class="[{ current: enStatus }]" @click="setLan('en')">EN</a>
          <a :class="[{ current: laoStatus }]" @click="setLan('lao')">LA</a>
        </p>
        <hr class="v" />
        <div class="button-groups">
          <button class="button small" @click="router.push({ path: '/auth/login' })">
            {{ $t("login") }}
          </button>
          <button class="button main small" @click="router.push({ path: '/auth/register' })">
            {{ $t("register") }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";

const axios = useNuxtApp().$axios;
const router = useRouter();
const productAndService = ref<any>([]);
const learing = ref<any>([]);
const search = ref<any>();
const cateInfo = ref<any>();
 
const enStatus = ref<any>(false);
const laoStatus = ref<any>(false);
const useCookies: any = useCookie("lang");
const i18n = useI18n();
i18n.locale.value = useCookies.value || "en";
enStatus.value = useCookies.value === "en";
laoStatus.value = useCookies.value === "lao";
if (!enStatus.value && !laoStatus.value) enStatus.value = true
const openMobileNav = ref(false);

const fetchProductAndService = async () => {
  const type = "Product & Services";
  await axios.post(`get-group/${type}`).then((res) => {
    if (res.status === 200) {
      productAndService.value = res.data.info.items;
    }
  });
};
const fetchLearning = async () => {
  const type = "Learning";
  await axios.post(`get-group/${type}`).then((res) => {
    if (res.status === 200) {
      learing.value = res.data.info.items;
    }
  });
};
const fetchCategory = async () => {
  const data = await axios.post(`get-category-filter/Category`);
  cateInfo.value = data.data.info;
};

//Language syntax
const setLan = (key: any) => {
  i18n.locale.value = key;
  if (key === "lao") {
    const lang = useCookie("lang");
    lang.value = key;
    laoStatus.value = true;
    enStatus.value = false;
  }
  if (key === "en") {
    const cookies = useCookie("lang");
    cookies.value = key;
    laoStatus.value = false;
    enStatus.value = true;
  }
};

fetchCategory();
fetchProductAndService();
fetchLearning();
</script>

<style lang="scss" scoped>
.top-navbar {
  background-color: #000;
  padding: 15px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url("../../assets/images/bg.jpg");
  background-size: cover;
  background-position: bottom right;

  .mobile-only {
    color: #fff;
    position: absolute;
    left: 15px;
    right: 15px;
    top: 15px;
    font-size: var(--xlg-font);
    display: none;

    @include mobile {
      display: block;
    }

    @include tablet {
      display: block;
    }

    p {
      position: absolute;
      min-width: 40px;
      min-height: 40px;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(#fff, 0.1);
      cursor: pointer;

      @include mobile {
        min-width: 35px;
        min-height: 35px;
        width: 35px;
        height: 35px;
      }

      &.left {
        left: 0;
      }

      &.right {
        right: 0;
      }
    }
  }

  .logo {
    margin-bottom: 10px;
    cursor: pointer;

    img {
      height: 7rem;
      object-fit: contain;
      display: block;

      @include mobile {
        height: 5rem;
      }
    }
  }

  h1 {
    color: #fff;
    font-size: var(--lg-font);
    text-align: center;

    @include mobile {
      font-size: var(--sm-font);
    }
  }
}

.navbar {
  border-bottom: 1px solid var(--border-color);
  display: flex;
  padding: 0 10px;
  // Mobile Navbar

  // &.mobile-nav-active {
  //   background-color: #000;
  //   position: fixed;
  //   top: 0;
  //   left: 0;
  //   right: 0;
  //   bottom: 0;
  //   z-index: 999;
  //   display: flex;
  //   flex-direction: column;
  //   align-items: center;
  //   justify-self: center;
  //   padding: 30px 50px;
  //   overflow-y: auto;

  //   .navbar-start {
  //     align-self: flex-start;
  //     ul {
  //       display: flex;
  //       flex-direction: column;
  //       li {
  //         align-self: flex-start;
  //         flex-direction: column;
  //         text-align: left;
  //         display: flex;
  //         &.has-dropdown {
  //           margin-bottom: 10px;
  //           &:hover ul.dropdown {
  //             display: none !important;
  //           }

  //           ul {
  //             &.dropdown {
  //               display: none !important;
  //             }
  //             &.is-mobile {
  //               display: block !important;
  //             }
  //           }

  //           a {
  //             &.hoverable {
  //               text-transform: uppercase;
  //             }
  //           }
  //         }
  //         a {
  //           height: 2rem;
  //           padding: 0 !important;
  //           color: #fff;
  //           i {
  //             display: none !important;
  //           }
  //         }
  //         ul {
  //           margin-left: 15px;
  //           li {
  //             a {
  //               display: flex;
  //               gap: 5px;
  //               &::before {
  //                 content: "";
  //                 width: 10px;
  //                 height: 1px;
  //                 background-color: #fff;
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   } // navbar-start
  //   .navbar-end {
  //     display: flex;
  //     flex-direction: column;
  //     align-items: flex-start;
  //     justify-content: flex-start;
  //     margin: 0 !important;
  //     padding: 20px 0;
  //     width: 100%;
  //     .lang-switch {
  //       text-align: left;
  //       align-self: flex-start;
  //       margin: 10px 0;
  //     }
  //     .button-groups {
  //       align-self: flex-start;
  //     }
  //     hr {
  //       display: none !important;
  //     }
  //   }
  // }

  @include tablet {
    display: none;
  }

  .navbar-start {
    ul {
      height: 100%;
      display: flex;
      align-items: center;

      li {
        a {
          padding: 20px 10px;
          font-size: var(--sm-font);
          transition: all ease-in-out 0.15s;
          white-space: nowrap;
          display: flex;
          align-items: center;
          cursor: pointer;

          i {
            margin-left: 5px;
            position: relative;
            display: flex;
            justify-content: center;

            &::after {
              content: "";
              position: absolute;
              bottom: -5px;
              width: 0;
              height: 0;
              display: none;
              border-left: 8px solid transparent;
              border-right: 8px solid transparent;
              border-bottom: 8px solid var(--sub-color);
            }
          }

          &:hover {
            color: var(--sub-color);

            i::after {
              display: flex !important;
            }
          }
        }

        &.has-dropdown {
          position: absolute;
          position: relative;
          z-index: 999;

          &:hover ul.dropdown {
            display: flex !important;
          }

          ul.dropdown {
            display: none;
            position: absolute;
            z-index: 999;
            top: 2.7rem;
            left: 0;
            border-radius: 5px;
            background-color: var(--sub-color);
            color: #fff;
            padding: 15px;
            height: auto;
            flex-direction: column;
            align-items: flex-start;

            li {
              white-space: pre;
              line-height: 2;
              cursor: pointer;

              a {
                transition: all ease-in-out 0.3s;
                padding: 0;

                &:hover {
                  color: #fff !important;
                  text-decoration: underline;
                }
              }
            }
          }
        }
      }
    }
  }

  .navbar-end {
    display: flex;
    align-items: center;
    margin-left: auto;

    hr.v {
      height: 1.5rem;
      width: 1px;
      border-width: 0 1px 0 0;
      border-color: var(--light-grey-color) !important;
      margin: 0 20px;
      display: block;
    }

    .lang-switch {
      display: flex;

      a {
        background-color: var(--light-grey-color);
        cursor: pointer;
        width: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 30px;
        font-size: var(--xsm-font);

        &.current {
          background-color: var(--sub-color);
          color: #fff;
        }
      }
    }

    .button-groups {
      display: flex;
      gap: 10px;
    }
  }
}
</style>
