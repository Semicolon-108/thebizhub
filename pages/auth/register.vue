<template>
  <section class="section">
    <div class="bg is-hidden-mobile"></div>
    <div class="container">
      <h1 class="page-title">Register</h1>

      <div class="grids is-2-desktop is-1-mobile margin-top-30 gap-30">
        <div class="left">
          <form action="" class="grids is-2-desktop is-1-mobile gap-20">
            <div class="field">
              <label for="">Name <span>*</span></label>
              <div class="control">
                <input type="text" class="input" placeholder="Name" />
              </div>
            </div>
            <div class="field">
              <label for="">Birt Year <span>*</span></label>
              <div class="control">
                <input type="text" class="input" placeholder="1999" />
              </div>
            </div>
            <div class="field">
              <label for="">Mobile number (020) <span>*</span></label>
              <div class="control">
                <input type="text" class="input" placeholder="123456678" />
              </div>
            </div>
            <div class="field">
              <label for="">Email <span>*</span></label>
              <div class="control">
                <input
                  type="text"
                  class="input"
                  placeholder="email@gmail.com"
                />
              </div>
            </div>
            <div class="field">
              <label for="">Province <span>*</span></label>
              <div class="control">
                <div class="select">
                  <select>
                    <option>Select dropdown</option>
                    <option>With options</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="field">
              <label for="">Occupation <span>*</span></label>
              <div class="control">
                <div class="select">
                  <select>
                    <option>Select dropdown</option>
                    <option>With options</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="field">
              <label for="">Password <span>*</span></label>
              <div class="control">
                <input type="text" class="input" placeholder="password" />
              </div>
            </div>
            <div class="field">
              <label for="">Confirm Password <span>*</span></label>
              <div class="control">
                <input
                  type="text"
                  class="input"
                  placeholder="Re-type password again"
                />
              </div>
            </div>
          </form>
          <button class="button main margin-top-20 margin-bottom-10">
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
const router = useRouter();
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
</style>
