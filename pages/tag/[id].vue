<template>
  <section>
    <div class="container">
      <h1 class="tag-title"><span>#</span> {{tag}}</h1>
      <div class="search-result">
        <CategoryCardList :info="info" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import CategoryCardList from "../../components/category/card-list.vue";
const axios = useNuxtApp().$axios;
const tag = ref<any>()
const info = ref<any>();
const route = useRoute()
const page = ref(1);
const perPage = ref(10);
const tagId = ref("");
const categoryFilter = ref<any>("");
const totals = ref<any>(0);
const msgError = ref<any>();

const fetch = async () => {
  await axios.post(
    `get-articles?page=${page.value}&perPage=${perPage.value}&tagId=${tagId.value}&categoryId=${categoryFilter.value}`
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
const tagInfo = async () => {
  // edit-reuse
  const res = await axios.post(`edit-reuse?_id=${tagId.value}&type=Tags`)
  tag.value = res.data.info.name
}
watch(route, (value) => {
  if (value.params.id) {
    tagId.value = value.params.id.toString()
    tagInfo()
    fetch()
  }
}, { immediate: true, deep: true })

</script>

<style lang="scss" scoped>
.tag-title {
  font-size: var(--xxlg-font);
  font-weight: 700;
  margin-bottom: 10px;
}

.search-result {
  width: 100%;
  border-top: 5px solid var(--sub-color);
  padding-top: 20px;
}
</style>
