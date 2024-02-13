<template>
  <section class="section">
    <div class="bg is-hidden-mobile"></div>
    <div class="container">
      <h1 class="page-title">Reset Password</h1>

      <div class="grids is-2-desktop is-1-mobile margin-top-30 gap-30">
        <div class="left">
          <form action="" class="grids is-1-desktop is-1-mobile gap-20">
            <div class="field">
              <label for="">{{ $t('email') }} <span>*</span></label>
              <div class="control has-addon">
                <input type="text" class="input" placeholder="E-mail" v-model="email" />
                <a @click="sendRequest()">Get Code</a>
              </div>
              <p v-if="emailSucceed" style="color:#0eb56d">{{ emailSucceed }}</p>
              <p v-if="emailError" style="color:red">{{ emailError }}</p>
            </div>
            <div class="field">
              <label for="">Enter OTP code from Inbox<span>*</span></label>
              <div class="control">
                <input type="text" class="input" placeholder="Fill OTP and Press Enter" v-model="verifyCode"
                  @keyup.enter="verify" />
              </div>
              <p v-if="otpError" style="color:red">{{ otpError }}</p>
            </div>
            <div class="field">
              <label for="">Set new password <span>*</span></label>
              <div class="control">
                <input type="text" class="input" placeholder="Password" :disabled="!isResetPassword" v-model="password" />
              </div>
            </div>
            <p v-if="passwordError" style="color: red;">{{ passwordError }}</p>
            <p v-if="resetSucceed" style="color:#0eb56d">{{ resetSucceed }}</p>
          </form>

          <button class="button main margin-top-20 margin-bottom-10" @click="changePassword()">
            Reset Password
          </button>
        </div>
        <div class="right">
          <InfoBox />
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import InfoBox from "~/components/auth/info-box.vue";
const axios = useNuxtApp().$axios;
const router = useRouter();

const email = ref<any>()
const verifyCode = ref<any>()

const emailError = ref<any>("")
const emailSucceed = ref<any>("")

const password = ref<any>()
const isResetPassword = ref<any>(false)
const passwordError = ref<any>("")
const resetSucceed = ref<any>("")

const otpError = ref<any>("")
const useCookies = useCookie('verifyToken')
const sendRequest = async () => {
  if (!email.value) return emailError.value = "Please fill email first"
  emailError.value = ""
  await axios.get(`request-toverify?email=${email.value}`).then((res: any) => {
    if (res.status === 200) {
      useCookies.value = res.data.token
      emailSucceed.value = "OTP has sent, Please check your email"
      setTimeout(() => {
        emailSucceed.value = ""
      }, 4500)
    }
  }).catch((e: any) => {
    emailError.value = e.response.data.message
    if (e.response.status === 429) {
      emailError.value = "Sorry, You have too many request, please try again after 10 minutes"
    }
  })
}
const verify = async () => {
  if (!useCookies.value) return otpError.value = "Not found your verifyTOken yet"
  if (!verifyCode.value) return otpError.value = "Please fill your verifyCode"
  await axios.post(`verify-from-request`, {
    verifyCode: verifyCode.value,
    verifyToken: useCookies.value
  }).then((res: any) => {
    if (res.status === 201) {
      useCookies.value = res.data.token
      isResetPassword.value = true
      otpError.value = ""
    }
  }).catch((e: any) => {
    otpError.value = ""
    if (e.response.status === 501) {
      otpError.value = "Can not verify"
    } else {
      otpError.value = e.response.data.message
    }

  })
}
const changePassword = async () => {
  if (!useCookies.value || !password.value) return passwordError.value = "Please fill password"
  passwordError.value = ""
  await axios.post(`reset-password`, {
    newPassword: password.value,
    token: useCookies.value
  }).then((res: any) => {
    if (res.status === 201) {
      resetSucceed.value = res.data.message
      setTimeout(() => {
        router.push('/auth/login')
      }, 3000)
    }
  }).catch((e: any) => {
    if (e.response.status === 501) {
      passwordError.value = "Can not reset password, Please try again"
    }
  })
}
</script>

<style lang="scss" scoped>
section {
  position: relative;
}

button {
  width: 100%;
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

.right {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  .box {
    position: relative;
    display: inline-block;
    background-color: var(--main-color);
    color: #fff;
    border-radius: 10px;
    padding: 30px 40px;

    &::before {
      content: "";
      display: block;
      position: absolute;
      left: -15px;
      top: -15px;
      height: 30px;
      width: 30px;
      background-color: var(--sub-color);
      border-radius: 5px;
    }

    .box-title {
      font-size: var(--xlg-font);
      font-weight: 700;
      text-transform: uppercase;
    }

    ul {
      li {
        display: flex;
        margin-bottom: 10px;

        span {
          min-width: 20px;
          max-width: 20px;
          color: var(--sub-color);
        }

        p {
          line-height: 1.5;
        }
      }
    }
  }

  //box

  .social-icons {
    display: flex;
    gap: 20px;

    a {
      cursor: pointer;

      i {
        color: #fff;
        font-size: var(--xlg-font);
      }
    }
  }
}

.note {
  a {
    color: var(--sub-color);
    cursor: pointer;
  }
}
</style>
