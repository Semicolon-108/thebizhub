<template>
  <section>
    <div class="container">
      <ul class="image-list grids is-3-desktop is-1-mobile gap-20">
        <li v-for="(i, index) in 3" :key="index">
          <img
            class="image-card"
            src="https://envato-shoebox-0.imgix.net/4a65/bbee-cd5c-4859-9db4-f17eda923f6f/2439421.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=1000&s=c07228076b4d4daa82aa19ee9e50e59d"
          />
        </li>
      </ul>
      <h3>
        {{ work }}
      </h3>
    </div>
  </section>
</template>

<script setup>
const { work } = defineProps(["work"]);
</script>

<style lang="scss" scoped>
.image-list {
  li {
    img {
      aspect-ratio: 1/1;
      object-fit: cover;
    }
  }
}
h3 {
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  margin-top: 10px;
  font-size: var(--lg-font);
  max-width: 550px;
}
</style>
