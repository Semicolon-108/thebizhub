<template>
  <section class="section">
    <div class="bg is-hidden-mobile"></div>
    <div class="container">
      <h1 class="page-title">Reset Password</h1>

      <div class="grids is-2-desktop is-1-mobile margin-top-30 gap-30">
        <div class="left">
          <form action="" class="grids is-1-desktop is-1-mobile gap-20">
            <div class="field">
              <label for="">Mobile number (020) <span>*</span></label>
              <div class="control has-addon">
                <input type="text" class="input" placeholder="123456678" />
                <a>Get Code</a>
              </div>
            </div>
            <div class="field">
              <label for="">Enter OTP code from SMS<span>*</span></label>
              <div class="control">
                <input type="text" class="input" placeholder="1234" />
              </div>
            </div>
            <div class="field">
              <label for="">Set new password <span>*</span></label>
              <div class="control">
                <input
                  type="text"
                  class="input"
                  placeholder="Password"
                  disabled
                />
              </div>
            </div>
          </form>
          <button class="button main margin-top-20 margin-bottom-10">
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
  background-color: $sub-color;
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
    background-color: $main-color;
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
      background-color: $sub-color;
      border-radius: 5px;
    }

    .box-title {
      @include xlg-font;
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
          color: $sub-color;
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
        @include xlg-font;
      }
    }
  }
}

.note {
  a {
    color: $sub-color;
    cursor: pointer;
  }
}
</style>
