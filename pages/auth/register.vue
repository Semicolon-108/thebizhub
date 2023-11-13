<template>
  <section class="section">
    <div class="bg is-hidden-mobile"></div>
    <div class="container">
      <h1 class="page-title">Register</h1>
      <div class="grids is-2-desktop is-1-mobile margin-top-30 gap-30-desktop">
        <div class="left">
          <form
            action=""
            class="grids is-2-desktop is-1-mobile gap-20-desktop"
            @submit.prevent="register()"
          >
            <div class="field">
              <label for="">Name <span>*</span></label>
              <div class="control">
                <input
                  type="text"
                  v-model="state.name"
                  class="input"
                  placeholder="Name"
                />
                <div v-if="v$.name.$error" class="err">
                  {{ v$.name.required.$message }}
                </div>
              </div>
            </div>
            <div class="field">
              <label for="">Year Of Birth: <span>*</span></label>
              <div class="control">
                <input
                  type="number"
                  v-model="state.birtYear"
                  class="input"
                  placeholder="1999"
                />
                <div v-if="v$.birtYear.$error" class="err">
                  {{ v$.birtYear.required.$message }}
                </div>
              </div>
            </div>
            <div class="field">
              <label for="">Mobile number (020) <span>*</span></label>
              <div class="control">
                <input
                  type="number"
                  v-model="state.mobile"
                  class="input"
                  placeholder="12345678"
                />
                <div v-if="v$.mobile.$error" class="err">
                  {{ v$.mobile.required.$message }}
                </div>
              </div>
            </div>
            <div class="field">
              <label for="">Email <span>*</span></label>
              <div class="control">
                <input
                  type="text"
                  v-model="state.email"
                  class="input"
                  placeholder="email@gmail.com"
                />
                <div v-if="v$.email.$error" class="err">
                  {{ v$.email.required.$message }}
                </div>
              </div>
            </div>
            <div class="field">
              <label for="">Province <span>*</span></label>
              <div class="control">
                <div class="select">
                  <select v-model="state.province">
                    <option value="" disabled>Select dropdown</option>
                    <option
                      v-for="(i, index) in provinceInfo"
                      :key="index"
                      :value="i._id"
                    >
                      {{ i.name }}
                    </option>
                  </select>
                  <div v-if="v$.province.$error" class="err">
                    {{ v$.province.required.$message }}
                  </div>
                </div>
              </div>
            </div>
            <div class="field">
              <label for="">Occupation <span>*</span></label>
              <div class="control">
                <div class="select">
                  <select v-model="state.occupation">
                    <option value="" disabled>Select dropdown</option>
                    <option
                      v-for="(i, indx) in occupationInfo"
                      :key="indx"
                      :value="i._id"
                    >
                      {{ i.name }}
                    </option>
                  </select>
                  <div v-if="v$.occupation.$error" class="err">
                    {{ v$.occupation.required.$message }}
                  </div>
                </div>
              </div>
            </div>
            <div class="field">
              <label for="">Password <span>*</span></label>
              <div class="control">
                <input
                  type="text"
                  v-model="state.password"
                  class="input"
                  placeholder="password"
                />
                <div v-if="v$.password.$error" class="err">
                  {{ v$.password.required.$message }}
                </div>
              </div>
            </div>
            <div class="field">
              <label for="">Confirm Password <span>*</span></label>
              <div class="control">
                <input
                  type="text"
                  v-model="state.confirmPassword"
                  class="input"
                  placeholder="Re-type password again"
                />
                <div v-if="v$.confirmPassword.$error" class="err">
                  {{ v$.confirmPassword.required.$message }}
                </div>
              </div>
            </div>
          </form>
          <br />
          <p v-if="isError" class="err2">{{ isError }}</p>
          <p v-if="response" class="response">{{ response }}</p>
          <button
            type="submit"
            class="button main margin-top-20 margin-bottom-10"
            @click="register()"
          >
            Regsiter
          </button>

          <p class="note">
            Already have an account?
            <a @click="router.push({ path: 'login' })">Login</a>
          </p>
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
import { required, helpers } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
const router = useRouter();
const axios = useNuxtApp().$axios;
const occupationInfo = ref<any>();
const provinceInfo = ref<any>();
const isError = ref<any>("");
const response = ref<any>("");
const state = reactive({
  occupation: "",
  province: "",
  name: "",
  birtYear: "",
  mobile: "",
  email: "",
  password: "",
  confirmPassword: "",
});
const rules = {
  occupation: {
    required: helpers.withMessage("Occupation cannot be empty", required),
  },
  province: {
    required: helpers.withMessage("Province cannot be empty", required),
  },
  name: { required: helpers.withMessage("Name cannot be empty", required) },
  birtYear: {
    required: helpers.withMessage("Birt Year cannot be empty", required),
  },
  mobile: { required: helpers.withMessage("Mobile cannot be empty", required) },
  password: {
    required: helpers.withMessage("Password cannot be empty", required),
  },
  confirmPassword: {
    required: helpers.withMessage("Confirm password cannot be empty", required),
  },
  email: {
    required: helpers.withMessage(
      "email cannot be empty and must be email",
      required
    ),
  },
};
const v$ = useVuelidate(rules, state);
const fetchCategory = async () => {
  const data = await axios.post(`get-reuses-list/Occupation`);
  occupationInfo.value = data.data.info;
};
const fetchProvince = async () => {
  const data = await axios.post(`get-reuses-list/Province`);
  provinceInfo.value = data.data.info;
};
const register = async () => {
  const result = await v$.value.$validate();
  if (!result) return;
  await axios
    .post(`user-register`, {
      name: state.name,
      dob: state.birtYear,
      mobile: state.mobile,
      email: state.email,
      password: state.password,
      confirmPassword: state.confirmPassword,
      provinceId: state.province,
      occupationId: state.occupation,
    })
    .then((res: any) => {
      if (res.status === 201) {
        response.value = "Register succeed";
        isError.value = "";
        setTimeout(() => {
          state.occupation = "";
          state.province = "";
          state.name = "";
          state.birtYear = "";
          state.mobile = "";
          state.email = "";
          state.password = "";
          state.confirmPassword = "";
          response.value = "";
        }, 1500);
      }
    })
    .catch((e: any) => {
      isError.value = e.response.data.message;
    });
};

fetchCategory();
fetchProvince();
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

.left {
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

.err {
  font-size: 13px;
  color: red;
}

.err2 {
  font-size: 16px;
  color: red;
}

.response {
  font-size: 16px;
  color: rgb(18, 190, 56);
}
</style>
