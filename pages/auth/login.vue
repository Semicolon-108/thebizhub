<template>
  <section class="section">
    <div class="bg is-hidden-mobile"></div>
    <div class="container">
      <h1 class="page-title">{{ $t("login") }}</h1>

      <div class="grids is-5-desktop is-1-mobile margin-top-30 gap-30-desktop">
        <div class="left span-2-desktop">
          <form action="" class="grids is-1-desktop is-1-mobile gap-20-desktop">
            <div class="field">
              <label for=""> {{ $t("contact_number") }} <span>*</span></label>
              <div class="control">
                <input type="text" class="input" placeholder="922xxx93" v-model="mobile" />
              </div>
            </div>
            <div class="field">
              <label for=""> {{ $t("password") }} <span>*</span></label>
              <div class="control">
                <input type="password" class="input" placeholder="password" v-model="password" @keyup.enter="login()"/>
                <NuxtLink to="password-recovery">
                  {{ $t("forgot_password") }}</NuxtLink>
              </div>
            </div>
          </form>
          <p style="color:red">{{ isError }}</p>
          <button class="button main margin-top-20 margin-bottom-10" @click="login()">
            {{ $t("login") }}
          </button>

          <p class="note">
            {{ $t("dont_have_account") }}
            <a @click="router.push({ path: 'register' })">{{
              $t("register")
            }}</a>
          </p>
        </div>
        <div class="right span-3-desktop">
          <InfoBox />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const axios = useNuxtApp().$axios;
import InfoBox from "../../components/auth/info-box.vue";
const router = useRouter();
const isError = ref<any>("")
const mobile = ref<any>("")
const password = ref<any>("")
const useCookies = useCookie('thebizhub-token')
import { useAuthStore } from '@/stores/store'
const setTokenToStore = useAuthStore()

const login = async () => {
  if (!mobile.value || !password.value) return isError.value = "Please fill mobile or password"
  isError.value = ""
  await axios
    .post(`client-login`, {
      mobile: mobile.value,
      password: password.value
    })
    .then((res: any) => {
      if (res.status === 200) {
        useCookies.value = res.data.token
        setTokenToStore.setToken(res.data.token)
        router.push('/')
      }
    }).catch((e: any) => {
      isError.value = e.response.data.message;
    });
};
</script>
<style lang="scss" scoped>
section {
  position: relative;
}

button {
  width: 100%;
}

.right {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
}

.note {
  a {
    color: var(--sub-color);
    cursor: pointer;
  }
}

.bg {
  content: "";
  width: 30%;
  display: block;
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  background-color: var(--sub-color);
}
</style>
