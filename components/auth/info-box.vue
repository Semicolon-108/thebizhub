<template>
  <div class="box">
    <h3 class="box-title margin-bottom-10">Contact Information</h3>
    <ul>
      <li>
        <span><i class="fa-solid fa-mobile"></i></span>
        <p>020 56463959 | 020 56508160</p>
      </li>
      <li>
        <span><i class="fa-solid fa-mobile"></i></span>
        <p>thebizhub.info@gmail.com</p>
      </li>
      <li>
        <span><i class="fa-solid fa-mobile"></i></span>
        <p>
          CircularX Dongpaina Road, <br />
          Saphanthong Village,<br />
          Sisattanak District,<br />
          Vientiane Capital, Lao PDR.
        </p>
      </li>
    </ul>
  </div>

  <p class="social-icons margin-top-10">
    <span
      ><a href="https://www.youtube.com/@TheBIZHUB" target="_blank"
        ><i class="fa-brands fa-youtube"></i></a
    ></span>
    <span>
      <a
        href="https://www.facebook.com/profile.php?id=100091801856212"
        target="_blank"
        ><i class="fa-brands fa-facebook"></i>
      </a>
    </span>
  </p>
</template>

<script setup></script>

<style lang="scss" scoped>
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
</style>
