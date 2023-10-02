<template>
  <div>
    <section>
      <div class="container">
        <h1 class="page-title">THE BIZ HUB ແມ່ນຫຍັງ?</h1>
        <div class="grids is-2-desktop is-1-mobile gap-20">
          <div class="box span-2-desktop">
            <div class="grids is-5-desktop is-1-mobile gap-20">
              <h1 class="span-2-desktop">
                PARTNER FOR SUCCESS IN BUSINESS AND ENTREPRENEURSHIP
              </h1>
              <p class="span-3-desktop">
                ຄູ່ຮ່ວມງານເພື່ອຄວາມສາເລດໃນດ້ານທຸລະກິດ ແລະ ການເປນຜູ້ ປະກອບການ
                ພວກເຮາມຸ່ງໝັ້ນໃນການສົ່ງເສີມ ແລະ ເສີມສ້າງຜູ້ ປະກອບການລຸ້ນໃໝ່ ຫຼື
                ຜູ້ທີ່ກາລັງເລີ່ມຕົ້ນເຮດທຸລະກິດທີ່ຕ້ອງ ການພັດທະນາຕົນເອງ
                ແລະທຸລະກິດໃຫ້ເຕີບໂຕຢ່າງບຢຸດຢັ້ງ.
              </p>
            </div>
          </div>
          <div class="box">
            <h3 class="margin-bottom-10">ພາລະກິດ ວິໄສທັດ</h3>
            <p>
              ເພື່ອສະໜອງບໍລິການໃຫ້ຄາປຶກສາ,ຂມູນຂ່າວສານ,
              ການຝຶກອົບຮົມແລະເຄື່ອງມືທີ່ຈາເປນໃນການລິເລີ່ມ ທຸລະກິດໃຫ້ເຂ້ມແຂງ ແລະ
              ສ້າງການປ່ຽນແປງທີ່ດີ ສູ່ສັງຄົມ.
            </p>
          </div>
          <div class="box">
            <h3 class="margin-bottom-10">ວິໄສທັດ</h3>
            <p>
              ເປນຂົວຕໃຫ້ກັບບັນດາຜູ້ທີ່ເລີ່ມຕົ້ນເຮດທຸລະກິດສາ
              ມາດກ້າວໄປສູ່ຄວາມສາເລດ
            </p>
          </div>
        </div>
      </div>
    </section>
    <img
      class="top-image"
      src="https://envato-shoebox-0.imgix.net/4a65/bbee-cd5c-4859-9db4-f17eda923f6f/2439421.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=1000&s=c07228076b4d4daa82aa19ee9e50e59d"
    />
    <ProductAndServcie />
    <h1 class="section-title">ຜົນງານຂອງ THE BIZ HUB</h1>
    <Works :work="i.name" v-for="(i, index) in works" :key="index" />
  </div>
</template>

<script lang="ts" setup>
import ProductAndServcie from "./product-and-services.vue";
import Works from "./works.vue";

const works = ref<any>([
  {
    name: "ຮ່ວມຈັດງານ Job Fest ງານມະຫະກໍາວຽກເຮັດງານທໍາແບບເປີດກ້ວາງ 2023",
  },
  {
    name: "ຮ່ວມຈັດງານ ມະຫາກໍາວຽກເຮັດງານທໍາທ່າແຂກ, ແຂວງຄໍາມ່ວນ ແລະ ຈັດຝຶກອົບຮົມ ຫົວຂໍ້: ການປະກອບອາຊີບດ້ວຍຕົນເອງ",
  },
  {
    name: "ຮ່ວມຈັດງານ ກິດຈະກໍາລະນຶກເຖິງວັນກໍາມະກອນສາກົນ  ແລະ ຈັດຝຶກອົບຮົມ ຫົວຂໍ້: ການປະກອບອາຊີບດ້ວຍຕົນເອງ",
  },
  // {
  //   name: "ການຈັດຝຶກອົບຮົມແບບເຊິ່ງໜ້າ",
  // },
  // {
  //   name: "ທີມຄູຝຶກ ແລະ ທີ່ປຶກສາຂອງໂຄງການຝຶກອົບຮົມພຶ້ນຖານການປະກອບທຸລະກິດ ພາຍໃຕ້ໂຄງການ Vtess, Swisscontact",
  // },
]);
</script>

<style lang="scss" scoped>
.box {
  background-color: var(--light-color);
  padding: 20px;

  h1 {
    font-weight: 700;
    font-size: var(--xxlg-font);
  }

  h3 {
    font-weight: 700;
    font-size: var(--lg-font);
  }

  p {
    font-size: var(--md-font);
  }
}

.top-image {
  display: block;
  width: 100%;
  aspect-ratio: 16/5;
  object-fit: cover;
  background-position: center;
}

.section-title {
  text-align: center;
  margin-bottom: 20px;
}
</style>
