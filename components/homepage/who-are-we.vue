<template>
  <section>
    <div class="container">
      <h1 class="section-title margin-bottom-10">{{ $t("who_are_we") }}</h1>
      <div class="grids is-2-desktop gap-20-desktop is-1-mobile">
        <div class="left">
          <ul class="tabs">
            <li :class="{ open: selectedTab === i.key }" @click="selectTab(i.key)" v-for="(i, index) in tabs"
              :key="index">
              <h1>{{ i.key }} <i class="fa-light fa-angle-down"></i></h1>
              <p>{{ i.desc }}</p>
            </li>
            <li>
              <h1 @click="router.push({ path: '/about-us' })">
                {{ $t("more_about_us") }}<i class="fa-light fa-angle-right"></i>
              </h1>
            </li>
          </ul>
        </div>
        <div class="right">
          <div class="image">
            <a target="_blank" href="https://www.youtube.com/watch?v=HEg8LjkZOaQ">
              <i class="fa-solid fa-play"></i>
              <img src="../../assets/images/about-page/team.jpg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const router = useRouter();
const useCookies: any = useCookie("lang");
const selectedTab = ref("WHO ARE WE?");
const axios = useNuxtApp().$axios;
import { useI18n } from "vue-i18n";

const tabs = ref<any>([]);
const { locale }: any = useI18n();
// const tabs = ref<any>([
//   {
//     name: "WHO ARE WE?",
//     desc: "ຄູ່ຮ່ວມງານເພື່ອຄວາມສາເລດໃນດ້ານທຸລະກິດ ແລະ ການເປນຜູ້ ປະກອບການ, ພວກເຮາມຸ່ງໝັ້ນໃນການສົ່ງເສີມ ແລະ ເສີມສ້າງ ຜູ້ປະກອບການລຸ້ນໃໝ່ ຫຼື ຜູ້ທີ່ກາລັງເລີ່ມຕົ້ນເຮດທຸລະກິດທີ່ຕ້ອງການພັດທະນາຕົນເອງ ແລະ ທຸລະກິດໃຫ້ເຕີບໂຕຢ່າງ ບຢຸດຢັ້ງ",
//   },
//   {
//     name: "VISION",
//     desc: "ຄູ່ຮ່ວມງານເພື່ອຄວາມສາເລດໃນດ້ານທຸລະກິດ ແລະ ການເປນຜູ້ ປະກອບການ, ພວກເຮາມຸ່ງໝັ້ນໃນການສົ່ງເສີມ ແລະ ເສີມສ້າງ ຜູ້ປະກອບການລຸ້ນໃໝ່ ຫຼື ຜູ້ທີ່ກາລັງເລີ່ມຕົ້ນເຮດທຸລະກິດທີ່ຕ້ອງການພັດທະນາຕົນເອງ ແລະ ທຸລະກິດໃຫ້ເຕີບໂຕຢ່າງ ບຢຸດຢັ້ງ",
//   },
//   {
//     name: "MISSION",
//     desc: "ຄູ່ຮ່ວມງານເພື່ອຄວາມສາເລດໃນດ້ານທຸລະກິດ ແລະ ການເປນຜູ້ ປະກອບການ, ພວກເຮາມຸ່ງໝັ້ນໃນການສົ່ງເສີມ ແລະ ເສີມສ້າງ ຜູ້ປະກອບການລຸ້ນໃໝ່ ຫຼື ຜູ້ທີ່ກາລັງເລີ່ມຕົ້ນເຮດທຸລະກິດທີ່ຕ້ອງການພັດທະນາຕົນເອງ ແລະ ທຸລະກິດໃຫ້ເຕີບໂຕຢ່າງ ບຢຸດຢັ້ງ",
//   },
// ]);
const fetchIntro = async () => {
  const isLang = locale.value ? locale.value : "en";
  const data = await axios.post(`get-intro-api?lang=${isLang}`);
  tabs.value = data.data.info;
  selectedTab.value = data.data.info[0].key;
};
const selectTab = async (e: any) => {
  selectedTab.value = e;
};

watch(
  () => locale.value,
  (value) => {
    fetchIntro();
  },
  { immediate: true, deep: true }
);
fetchIntro();
</script>

<style lang="scss" scoped>
section {
  position: relative;

  .right {
    .image {
      a {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;

        &:hover {
          &::after {
            background-color: rgba(#000, 0.4);
          }

          i {
            transform: scale(1.1);
          }
        }

        &::after {
          content: "";
          background-color: rgba(#000, 0.3);
          transition: all ease-in-out 0.15s;
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          top: 0;
        }

        img {
          display: block;
          max-height: 300px;
        }

        i {
          transition: all ease-in-out 0.15s;
          z-index: 1;
          cursor: pointer;
          position: absolute;
          color: rgba(#fff, 0.9);
          font-size: 3rem;
        }
      }
    }
  }
}

.tabs {
  li {
    &:not(:last-child) {
      margin-bottom: 5px;
    }

    h1 {
      cursor: pointer;
      background-color: var(--light-color);
      padding: 10px 15px;
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: space-between;

      i {
        font-size: var(--lg-font);
      }
    }

    p {
      display: none;
      padding: 15px;
      background-color: #fff;
    }

    &.open {
      h1 {
        background-color: var(--sub-color);
        color: #fff;
      }

      p {
        display: block;
      }
    }

    &:last-child h1 {
      background-color: var(--light-grey-color);
    }
  }

  //li
}
</style>
