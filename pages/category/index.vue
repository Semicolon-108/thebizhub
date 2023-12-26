<template>
  <section>
    <div class="container">
      <h1 class="page-title">{{ routerName }}</h1>
      <p class="category-desc" v-if="detail">{{ detail }}</p>
      <CategoryCardList :info="info" />
    </div>
  </section>
</template>

<script setup lang="ts">
import CategoryCardList from "../../components/category/card-list.vue";

const axios = useNuxtApp().$axios;
const route = useRoute();
const cateInfo = ref<any>();
const isCate = ref<any>();
const info = ref<any>();
const page = ref(1);
const perPage = ref(10000);
const tagId = ref("");
const categoryFilter = ref<any>("");
const totals = ref<any>(0);
const msgError = ref<any>();
const search = ref<any>("");
const routerName = ref<any>("");
const detail = ref<any>("");
import { useI18n } from "vue-i18n";
const { locale }: any = useI18n();
const isLang = ref<any>();

const fetchCategory = async () => {
  const data = await axios.post(`get-reuses-list/Category`);
  const isFilter = data.data.info.filter((f: any) => !f.groupStatus);
  cateInfo.value = isFilter;
  isCate.value = data.data.info;
};
const fetch = async () => {
  info.value = [];
  await axios
    .post(
      `get-articles?page=${page.value}&perPage=${perPage.value}&tagId=${tagId.value}&categoryId=${categoryFilter.value}&search=${search.value}`
    )
    .then((res) => {
      if (res.status === 200) {
        info.value = res.data.info;
        totals.value = res.data.total;
      }
    })
    .catch((e: any) => {
      if (e) {
        msgError.value = "Data empty";
      }
    });
};

const isFilter = () => {
  const cateName = route.query.is;
  // routerName.value = route.query.is
  const events = "Events ";
  const update = "Update";
  if (cateName === update) {
    search.value = update;
    categoryFilter.value = "";
  } else if (cateName === events) {
    // 6514fbff51ce087ae07926dc
    // routerName.value = "Events & Activities"
    categoryFilter.value = "6514fbff51ce087ae07926dc";
    search.value = "";
  } else {
    search.value = "";
    const dataEn = isCate.value.find((i: any) => i.name === cateName);
    const dataLao = isCate.value.find((i: any) => i.laoName === cateName);
    if (dataEn) {
      categoryFilter.value = dataEn._id;
      search.value = "";
    } else if (dataLao) {
      categoryFilter.value = dataLao._id;
      search.value = "";
    } else {
      categoryFilter.value = "";
      search.value = "";
    }
  }
};
const getById = async () => {
  const res = await axios.post(
    `edit-reuse?_id=${categoryFilter.value}&type=Category&lang=${isLang.value}`
  );
  routerName.value = res.data.info.name;
  detail.value = res.data.info.detail;
};
//onMounted(async () => {
await fetchCategory();
isFilter();
await fetch();
// });

watch(
  () => [route.path, locale.value],
  ([value1, value2]) => {
    isLang.value = value2;
    isFilter();
    fetch();
    getById();
  },
  { immediate: true, deep: true }
);
</script>

<style lang="scss" scoped>
.category-desc {
  text-align: center;
  margin-bottom: 30px;
  padding: 20px;
  background-color: var(--sub-color);
  color: #fff;
  border-radius: 10px;
}
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
        color: var(--sub-color);
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
