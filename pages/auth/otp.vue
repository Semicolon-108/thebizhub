<template>
    <section class="section">
        <div class="bg is-hidden-mobile"></div>
        <div class="container">
            <h1 class="page-title">Verify OTP</h1>

            <div class="grids is-2-desktop is-1-mobile margin-top-30 gap-30">
                <div class="left">
                    <form action="" class="grids is-1-desktop is-1-mobile gap-20">
                        <div class="field">
                            <label for="">Enter OTP code from Inbox <span>*</span></label>
                            <div class="control has-addon">
                                <input type="text" class="input" v-model="isVerifyCode" placeholder="1234" />
                                <a @click="resendCode">Resend Code</a>
                            </div> <small style="color:red">Your OTP will expire in 15 minutes from now</small>
                        </div>
                    </form>
                    <small v-if="succesMsg" style="color:green">{{ succesMsg }}</small>
                    <small v-if="erMsg" style="color:red;">{{ erMsg }}</small>
                    <button class="button main margin-top-20 margin-bottom-10" @click="verifyCode()">
                        Verify
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
const axios = useNuxtApp().$axios
const succesMsg = ref<any>()
const erMsg = ref<any>()
const isVerifyCode = ref<any>()
const useCookies = useCookie('verifyToken')
const router = useRouter();
const verifyCode = async () => {
    if (!useCookies.value) return erMsg.value = "Not found your verifyTOken yet"
    if (!isVerifyCode.value) return erMsg.value = "Please fill your verifyCode"
    await axios.post(`verify-code`, {
        verifyCode: isVerifyCode.value,
        verifyToken: useCookies.value
    }).then((res: any) => {
        if (res.status === 201) {
            succesMsg.value = res.data.message
            erMsg.value = ""
            setTimeout(() => {
                router.push('/auth/login')
            }, 1500);
        }
    }).catch((e: any) => {
        succesMsg.value = ""
        if (e.response.status === 501) {
            erMsg.value = "Can not verify"
        } else {
            erMsg.value = e.response.data.message
        }

    })
}

const resendCode = async () => {
    if (!useCookies.value) return erMsg.value = "Not found your verifyTOken yet"
    await axios.post(`resend-verify-code`, {
        verifyToken: useCookies.value
    }).then((res: any) => {
        if (res.status === 201) {
            useCookies.value = res.data.token
            succesMsg.value = "OTP has sent, Please check your email"
            erMsg.value = ""
        }
    }).catch((e: any) => {
        succesMsg.value = ""
        if (e.response.status === 501) {
            erMsg.value = "Can not verify"
        } else if (e.response.status === 429) {
            erMsg.value = "Sorry, You have too many request, please try again after 10 minutes"
        } else {
            erMsg.value = e.response.data.message
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
  