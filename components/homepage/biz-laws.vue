<template>
  <section>
    <div class="container">
      <h1 class="section-title">BIZ Laws</h1>
      <ul>
        <li v-for="(i, index) in 3" :key="index">
          <div class="card">
            <div class="card-image">
              <img
                src="https://scontent-kul2-2.xx.fbcdn.net/v/t39.30808-6/366378554_193401983729862_6842164027066760414_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGYhO6rT3O1Q2pMPySVffRsycEj0IwMsOvJwSPQjAyw61mg8nQ03y-syJ8UkwV290hil_KXuc4QetD-DTE6n2jB&_nc_ohc=V8yWxL9HEUEAX8s7Fop&_nc_ht=scontent-kul2-2.xx&oh=00_AfB23eZItvgXA4lYdmPnVrmomCKX2osRYreBiQ5yFH38gA&oe=64F01200"
                alt=""
              />
            </div>
            <div class="card-content">
              <p class="tag-list">
                <span>Learning</span>
                <span>SME & Startup</span>
              </p>
              <h3>
                Home / NETWORK (Wireless) / Range extender & mesh wifi /
                Whole-home mesh tp-link (deco e4) wireless ac1200 dual band
                (pack 2)
              </h3>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>
<style lang="scss" scoped>
section {
  ul {
    display: flex;
    gap: 20px;

    @include mobile {
      overflow: auto;

      li {
        flex: 0 0 80%;
      }
    }
  }
}
</style>
