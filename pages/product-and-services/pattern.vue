<template>
  <div class="line"></div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.line {
  height: 5px;
  background: linear-gradient(to right, transparent 50%, var(--sub-color) 50%);
  background-size: 16px 2px, 100% 2px;
}
</style>
