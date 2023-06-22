<template>
  <NuxtLayout name="main">
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup>


</script>

<style lang="scss">
html,
body {
  font-family: $font-family;
}

section {
  padding: 3.25rem 2rem;

  @include mobile {
    padding: 2rem 1rem;
  }

  .container {
    margin-left: auto;
    margin-right: auto;
    max-width: 1024px;
  }

  .section-title {
    @include xxlg-font;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 10px;
  }
}
</style>