<template>
  <section>
    <div class="container">
      <h1 class="section-title">ຜະລິດຕະພັນ/ການບໍລິການຂອງເຮົາ</h1>
      <ul class="image-list grids is-3-desktop is-1-mobile gap-20-desktop">
        <li>
          <img src="../../assets/images/services/biz-course.png" />
          <h3>ຫຼັກສູດຝຶກອົບຮົມທາງທຸລະກິດ (BIZ COURSES)</h3>
        </li>
        <li>
          <img src="../../assets/images/services/biz-coaching.png" />
          <h3>ບໍລິການໃຫ້ຄໍາປຶກສາທາງທຸລະກິດ ( BIZ COACHING )</h3>
        </li>
        <li>
          <img
            src="../../assets/images/services/project-business-consultancy.png"
          />
          <h3>Project/Business Consultancy (BIZ CONSULTING)</h3>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.section-title {
  text-align: center;
  margin-bottom: 20px;
}

.image-list {
  li {
    text-align: center;
    img {
      aspect-ratio: 1/1;
      object-fit: cover;
      max-width: 130px;
    }
    h3 {
      text-align: center;
      margin-top: 10px;
      font-size: var(--md-font);
    }
  }
}
</style>
