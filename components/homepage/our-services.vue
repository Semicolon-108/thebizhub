<template>
  <section class="section">
    <div class="container">
      <div class="section-header">
        <div class="section-title">Our Services</div>
      </div>
      <div class="section-body">
        <ul
          class="grids is-3-desktop is-1-mobile gap-10-tablet gap-10-tablet gap-20-desktop gap-10-mobile"
        >
          <li>
            <div class="card">
              <div class="card-icon">
                <img src="../../assets/images/services/biz-coaching.png" />
              </div>
              <h3 class="card-title">BIZ COACHING</h3>
              <p>
                ບໍລິການໃຫ້ຄຳປຶກສາ ວ່າທີ່ຜູ້ປະກອບການ, ຜູ້ປະກອບການຂັ້ນເລີ່ມຕົ້ນ
                ຫຼື ເຈົ້າຂອງທຸລະກິດຂະໜາດນ້ອຍ ຜ່ານການຮັບຟັງ, ວິເຄາະບັນຫາ,
                ໃຫ້ແນວທາງ ແລະ ເຄື່ອງມືທີ່ຈຳເປັນໃນການແກ້ໄຂບັນຫາທຸລະກິດ.
              </p>
            </div>
          </li>
          <li>
            <div class="card">
              <div class="card-icon">
                <img src="../../assets/images/services/biz-course.png" />
              </div>
              <h3 class="card-title">BIZ COURSES</h3>
              <p>
                ຫຼັກສູດການຝຶກອົບຮົມທາງທຸລະກິດ ໄລຍະສັ້ນ ເພື່ອກຽມຄວາມພ້ອມ ແລະ
                ສ້າງຄວາມເຂັ້ມແຂງ ໃຫ້ກັບວ່າທີ່ຜູ້ປະກອບການ,
                ຜູ້ປະກອບການຂັ້ນເລີ່ມຕົ້ນ ຫຼື ເຈົ້າຂອງທຸລະກິດຂະໜາດນ້ອຍ.
              </p>
            </div>
          </li>
          <li>
            <div class="card">
              <div class="card-icon">
                <img
                  src="../../assets/images/services/project-business-consultancy.png"
                />
              </div>
              <h3 class="card-title">Project Business Consultant</h3>
              <p>
                ບໍລິການທີ່ປຶກສາໂຄງການ ແລະ ທຸລະກິດ ໃຫ້ບໍລິການເປັນທີ່ປຶກສາ
                ໃນການວາງແຜນ, ຈັດຕັ້ງປະຕິບັດ ແລະ ປະເມີນຜົນສຳເລັດຂອງໂຄງການ
                ທີ່ກ່ຽວຂ້ອງກັບການປະກອບອາຊີບດ້ວຍຕົນເອງ, ການປະກອບທຸລະກິດ ແລະ
                ການເຕີບໂຕຂອງທຸລະກິດ.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.section {
  position: relative;
  &::before {
    height: 200px;
    content: "";
    display: block;
    background-color: var(--sub-color);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
  }
  .section-header {
    position: relative;
    z-index: 2;
    margin-bottom: 20px;
    .section-title {
      text-align: center;
      color: #fff;
    }
  } // section-header
  .section-body {
    position: relative;
    z-index: 2;
    .card {
      height: 100%;
      background-color: #fff;
      padding: 30px;
      border: 1px solid var(--border-color);
      border-radius: 6px;
      text-align: center;
      background-color: #fff;
      .card-icon {
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
        img {
          width: 80px;
          object-fit: cover;
          display: block;
        }
      }
      .card-title {
        font-weight: 700;
        text-transform: uppercase;
        font-size: var(--md-font);
        margin-bottom: 5px;
        position: relative;
        text-align: center;
        &::after {
          content: "";
          display: block;
          height: 3px;
          width: 30px;
          border-radius: 3px;
          background-color: var(--sub-color);
          margin: 0.5rem auto;
        }
      }
      p {
        font-size: var(--md-font);
      }
    }
  }
}
</style>
