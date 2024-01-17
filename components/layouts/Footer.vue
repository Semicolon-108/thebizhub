<template>
  <section>
    <div class="container">
      <ul class="grids is-14-desktop is-1-mobile">
        <li class="span-4-desktop">
          <div class="logo margin-bottom-10">
            <img src="../../assets/images/transparant-bg-logo.png" alt="" />
            <!-- <h3>THE BIZ HUB</h3> -->
          </div>
          <small class="margin-bottom-15">1st Floor, 108Hill Building Dongpaina Road, Saphanthong Village,
            Sisattanak District, Vientiane Capital, Lao PDR.</small>
          <small>020 56463959 | 020 56508160</small>
          <small>thebizhub.info@gmail.com</small>
        </li>
        <li class="span-5-desktop">
          <h3>{{ $t("navbar_learning") }}</h3>
          <ul>
            <li v-for="(o, index) in learing" :key="index">
              <NuxtLink :to="{ path: '/category', query: { is: `${o.name}` } }">{{ o.name }}</NuxtLink>
            </li>
          </ul>
        </li>
        <li class="span-5-desktop">
          <h3>{{ $t("products") }}</h3>
          <ul>
            <li>
              <NuxtLink :to="{
                path: '/product-and-services/biz-coaching',
              }">{{ $t("product_biz_coaching") }}</NuxtLink>
            </li>
            <li>
              <NuxtLink :to="{
                path: '/product-and-services/biz-course',
              }">{{ $t("product_biz_course") }}</NuxtLink>
            </li>
            <li>
              <NuxtLink :to="{
                path: '/product-and-services/project-business-consultant',
              }">{{ $t("product_business_consultant") }}</NuxtLink>
            </li>
          </ul>

          <div class="socials">
            <h3>{{ $t("follow_us") }}</h3>
            <ul>
              <li>
                <a href="https://www.facebook.com/profile.php?id=100091801856212" target="_blank">
                  <i class="fa-brands fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@thebizhublaos" target="_blank">
                  <i class="fa-brands fa-tiktok"></i>
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@TheBIZHUB" target="_blank">
                  <i class="fa-brands fa-youtube"></i>
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </section>
  <div class="footer">
    <p>
      Copyright © 108-1009 Group Co., Ltd. | Designed and Developed by Semicolon
      Sole Co., Ltd.
    </p>
  </div>
</template>
<script lang="ts" setup>
import { useI18n } from "vue-i18n";

const axios = useNuxtApp().$axios;
const router = useRouter();
const productAndService = ref<any>([]);
const learing = ref<any>([]);
const search = ref<any>();
const cateInfo = ref<any>();

const enStatus = ref<any>(false);
const laoStatus = ref<any>(false);
const useCookies: any = useCookie("lang");
const i18n = useI18n();
i18n.locale.value = useCookies.value || "lao";
enStatus.value = useCookies.value === "en";
laoStatus.value = useCookies.value === "lao";
if (!enStatus.value && !laoStatus.value) laoStatus.value = true;
const fetchProductAndService = async () => {
  const type = "Product & Services";
  await axios
    .post(`get-group?type=${type}&lang=${i18n.locale.value}`)
    .then((res) => {
      if (res.status === 200) {
        productAndService.value = res.data.info;
      }
    });
};
const fetchLearning = async () => {
  const type = "Learning";
  await axios
    .post(`get-group?type=${type}&lang=${i18n.locale.value}`)
    .then((res) => {
      if (res.status === 200) {
        learing.value = res.data.info;
      }
    });
};
const fetchCategory = async () => {
  const data = await axios.post(`get-category-filter/Category`);
  cateInfo.value = data.data.info;
};

//Language syntax
const setLan = (key: any) => {
  i18n.locale.value = key;
  if (key === "lao") {
    const lang = useCookie("lang");
    lang.value = key;
    laoStatus.value = true;
    enStatus.value = false;
  }
  if (key === "en") {
    const cookies = useCookie("lang");
    cookies.value = key;
    laoStatus.value = false;
    enStatus.value = true;
  }
};

fetchCategory();
fetchProductAndService();
fetchLearning();
</script>
<style lang="scss" scoped>
.socials {
  display: flex;
  flex-direction: column;

  &::before {
    content: "";
    display: block;
    width: 30px;
    height: 2px;
    background-color: #fff;
    margin: 20px 0 10px;
  }

  h3 {
    text-transform: capitalize;
    font-weight: normal;
  }

  ul {
    display: flex;
    gap: 20px;

    li {
      i {
        font-size: var(--xlg-font);
      }
    }
  }
}

section {
  background-image: url("../../assets/images/footer-bg.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  color: #fff;

  ul {
    li {
      padding: 20px;
      line-height: 1.5;

      .logo {
        display: flex;
        align-items: center;
        gap: 10px;

        img {
          height: 4rem;
        }

        h3 {
          font-size: var(--xlg-font);
        }
      }

      h3 {
        font-weight: 700;
        text-transform: uppercase;
      }

      small {
        line-height: 1.5;
        font-weight: 500;
        display: block;
        font-size: var(--sm-font);
      }

      ul {
        margin-top: 5px;
        margin-bottom: 5px;

        li {
          padding: 0;
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
        }
      }
    }
  }
}

.footer {
  background-color: #000;
  color: #fff;
  padding: 10px;
  text-align: center;

  p {
    font-size: var(--xsm-font);
  }
}
</style>
