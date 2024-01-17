<template>
  <div class="mobile-navbar">
    <div class="burger">
      <i class="fa-regular fa-bars" @click="closeMobileNavbar()"></i>
      <p class="lang-switch">
        <a :class="[{ current: enStatus }]" @click="setLan('en')">EN</a>
        <a :class="[{ current: laoStatus }]" @click="setLan('lao')">LA</a>
      </p>
    </div>

    <div class="navbar">
      <div class="navbar-start">
        <ul class="nabar-item-list">
          <li class="parant">
            <a class="navbar-item">{{ $t("products") }}</a>
            <ul>
              <li>
                <NuxtLink :to="{
                  path: '/product-and-services/biz-coaching',
                }" @click="closeMobileNavbar()">BIZ COACHING</NuxtLink>
              </li>
              <li>
                <NuxtLink :to="{
                  path: '/product-and-services/biz-course',
                }" @click="closeMobileNavbar()">BIZ COURSES</NuxtLink>
              </li>
              <li>
                <NuxtLink :to="{
                  path: '/product-and-services/project-business-consultant',
                }" @click="closeMobileNavbar()">BUSINESS CONSULTANT</NuxtLink>
              </li>
            </ul>
          </li>
          <li class="parant">
            <a class="navbar-item">{{ $t("learning") }}</a>
            <ul>
              <li v-for="(o, index) in learing" :key="index">
                <NuxtLink :to="{ path: '/category', query: { is: `${o.name}` } }" @click="closeMobileNavbar()">{{ o.name
                }}</NuxtLink>
              </li>
            </ul>
          </li>
          <li>
            <a @click="$router.replace('/category?is=TSNS - Thao Sang Nang Sa'), closeMobileNavbar()">{{
              $t("article_tsns")
            }}</a>
          </li>
          <li>
            <a @click="$router.replace(`/category?is=WINGS - Women's Income Generating Support`), closeMobileNavbar()
              ">{{ $t("article_wing") }}
            </a>
          </li>
          <li>
            <NuxtLink to="/about-us" @click="closeMobileNavbar()">{{ $t("about_us") }}</NuxtLink>
          </li>
        </ul>
      </div>
      <div class="navbar-end">
        <input type="text" v-model="search" class="input small" :placeholder="$t('search')" @keyup.enter="
          router.push({ path: '/search', query: { search: search } }), closeMobileNavbar()
          " />
        <div class="button-groups">
          <button class="button small" @click="router.push({ path: '/auth/login' }), closeMobileNavbar()">
            {{ $t("login") }}
          </button>
          <button class="button main small" @click="router.push({ path: '/auth/register' }), closeMobileNavbar()">
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
const useCookies: any = useCookie("lang")
const i18n = useI18n()
i18n.locale.value = useCookies.value || "lao"
enStatus.value = useCookies.value === "en"
laoStatus.value = useCookies.value === "lao"
if (!enStatus.value && !laoStatus.value) laoStatus.value = true;
const emit = defineEmits(["closeMobileNavbar"])

const closeMobileNavbar = async () => {
  emit("closeMobileNavbar");
};

const fetchProductAndService = async () => {
  const type = "Product & Services";
  await axios.post(`get-group?type=${type}&lang=${i18n.locale.value}`).then((res) => {
    if (res.status === 200) {
      productAndService.value = res.data.info;
    }
  });
};
const fetchLearning = async () => {
  const type = "Learning";
  await axios.post(`get-group?type=${type}&lang=${i18n.locale.value}`).then((res) => {
    if (res.status === 200) {
      learing.value = res.data.info;
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
watch(() => i18n.locale.value, (value) => {
  fetchLearning()
  fetchProductAndService()
}, { immediate: true, deep: true })

fetchCategory();
fetchProductAndService();
fetchLearning();
</script>

<style lang="scss" scoped>
.burger {
  padding: 10px 20px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(#fff, 0.15);
  background-color: #000;
  justify-content: space-between;
  cursor: pointer;

  i {
    color: #fff;
  }
}

.mobile-navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  height: 100%;
  display: flex;
  background-color: #000;
  flex-direction: column;

  .navbar {
    padding: 20px 30px;
    display: flex;
    flex-direction: column;
    height: 100%;
    flex-grow: 1;
    overflow-y: auto;
  }

  a {
    color: #fff;
    line-height: 2.3;
    cursor: pointer;
  }

  .nabar-item-list {
    color: #fff;

    .parant {
      position: relative;

      .navbar-item {
        display: flex;
        align-items: center;
      }

      ul {
        li {
          margin-left: 20px;
          display: flex;
          align-items: center;
          position: relative;

          &::before {
            content: "";
            display: block;
            width: 10px;
            height: 0.5px;
            background-color: #fff;
            left: -10px;
            margin-right: 10px;
          }
        }
      }
    }

    .navbar-item {
      display: block;
    }
  }

  // nabar-item-list

  input {
    margin: 20px 0;
  }

  .button-groups {
    display: flex;
    gap: 10px;
  }
}

.lang-switch {
  a {
    font-size: var(--xsm-font);
    cursor: pointer;
    padding: 5px 10px;

    &.current {
      background-color: var(--sub-color);
    }
  }
}
</style>
