<template>
  <section>
    <div class="container">
      <div class="page-header">
        <p>Search keywords:</p>
        <h1 class="page-title">Marketing</h1>
      </div>

      <div class="search-result">
        <!-- Import coponent cardlist -->
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

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
