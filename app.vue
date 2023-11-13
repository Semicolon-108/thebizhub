<template>
  <NuxtLayout name="main">
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup></script>

<style lang="scss">
html,
body {
  background-color: var(--bg-color);
  font-family: var(--font-family);
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
