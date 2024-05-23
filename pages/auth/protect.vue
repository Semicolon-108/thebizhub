<template>
    <section class="section">
        <div class="bg is-hidden-mobile"></div>
        <div class="container">
            <h1 class="page-title">Welcome to Thebizhub </h1>

            <div class="grids is-2-desktop is-1-mobile margin-top-30 gap-30">
                <div class="left">
                    <form action="" class="grids is-1-desktop is-1-mobile gap-20">
                        <div class="field">
                            <label for="">Enter Email <span>*</span></label>
                            <div class="control has-addon">
                                <input type="email" class="input" v-model="email" placeholder="protect@gmail.com" />
                            </div>
                        </div>
                        <div class="field">
                            <label for="">Enter Password <span>*</span></label>
                            <div class="control has-addon">
                                <input type="password" class="input" v-model="password" placeholder="123456787" />
                            </div>
                        </div>
                    </form>
                    <small v-if="succesMsg" style="color:green">{{ succesMsg }}</small>
                    <small v-if="erMsg" style="color:red;">{{ erMsg }}</small>
                    <button class="button main margin-top-20 margin-bottom-10" @click="login()">
                        Login
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>
<script lang="ts" setup>
const axios = useNuxtApp().$axios
const succesMsg = ref<any>()
const email = ref<any>()
const password = ref<any>()
const erMsg = ref<any>()
const useCookies = useCookie('protector')
const userInfo = reactive({
    email: "thebizhub.pro@gmail.com",
    password: "321@2024"
})
const login = () => {
    if (email.value !== userInfo.email) return erMsg.value = "Email incurrect"
    if (password.value !== userInfo.password) return erMsg.value = "Password incurrect"
    useCookies.value = 'true'
}
</script>
<style lang="scss" scoped>
section {
    position: relative;
}

button {
    width: 100%;
}
</style>