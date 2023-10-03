<template>
  <section>
    <div class="container">
      <div class="page-header">
        <p>Search keywords:</p>
        <h1 class="page-title">{{ search }}</h1>
      </div>

      <div class="search-result">
        <CategoryCardList :info="info" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import CategoryCardList from "../../components/category/card-list.vue";
const axios = useNuxtApp().$axios;
const info = ref<any>();
const route = useRoute()
const page = ref(1);
const perPage = ref(10);
const tagId = ref("");
const categoryFilter = ref<any>("");
const totals = ref<any>(0);
const msgError = ref<any>();
const search = ref<any>("")
const fetch = async () => {
  await axios.post(
    `get-articles?page=${page.value}&perPage=${perPage.value}&tagId=${tagId.value}&categoryId=${categoryFilter.value}&title=${search.value}`
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
watch(route, (value) => {
  if (value.query.search) {
    search.value = value.query.search
    fetch()
  }
}, { immediate: true, deep: true })


</script>

<style lang="scss" scoped>
.page-header {
  text-align: center;
  margin-bottom: 30px;

  p {
    font-size: var(--md-font);
    margin-bottom: 5px;
  }
}

.search-result {
  width: 100%;
  border-top: 5px solid var(--sub-color);
  padding-top: 20px;
}
</style>
