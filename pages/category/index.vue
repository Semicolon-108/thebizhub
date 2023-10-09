<template>
  <section>
    <div class="container">
      <h1 class="page-title">{{ route.query.is }}</h1>
      <!-- <div class="tabs-container">
        <ul class="tabs">
          <li v-for="(i, index) in cateInfo" :key="index" @click="(categoryFilter = i._id), fetch()">
            {{ i.name }}
          </li>
        </ul>
        <p><i class="fa-regular fa-angle-right"></i></p>
      </div> -->
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
const search = ref<any>("")
const fetchCategory = async () => {
  const data = await axios.post(`get-reuses-list/Category`);
  const isFilter = data.data.info.filter((f: any) => !f.groupStatus);
  cateInfo.value = isFilter;
  isCate.value = data.data.info;
}
const fetch = async () => {
  await axios.post(
    `get-articles?page=${page.value}&perPage=${perPage.value}&tagId=${tagId.value}&categoryId=${categoryFilter.value}&search=${search.value}`
  ).then((res) => {
    if (res.status === 200) {
      info.value = res.data.info;
      totals.value = res.data.total;
    }
  }).catch((e: any) => {
    if (e) {
      msgError.value = "Data empty";
    }
  })
}

const isFilter = () => {
  const cateName = route.query.is;
  const update = "Update"
  if (cateName === update) {
    search.value = update
    categoryFilter.value = ""
  } else {
    search.value = ""
    const data = isCate.value.find((i: any) => i.name === cateName);
    if (data) {
      categoryFilter.value = data._id;
      search.value = ""
    } else {
      categoryFilter.value = ""
      search.value = ""
    }
  }
}
await fetchCategory()

watch(
  route,
  (value) => {
    if (value.query.is) {
      isFilter();
      fetch();
    }
  },
  { immediate: true, deep: true }
);
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
    background: linear-gradient(270deg,
        rgba(255, 255, 255, 1) 0%,
        rgba(255, 255, 255, 0) 100%);

    @include mobile {
      display: flex;
    }

    @include tablet {
      display: flex;
    }
  }
}
</style>
