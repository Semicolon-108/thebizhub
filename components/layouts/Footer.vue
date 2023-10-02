<template>
  <section>
    <div class="container">
      <ul class="grids is-14-desktop is-1-mobile">
        <li class="span-5">
          <div class="logo margin-bottom-10">
            <img src="../../assets/images/Logo.png" alt="" />
            <h3>THE BIZ HUB</h3>
          </div>
          <small class="margin-bottom-15"
            >1st Floor, 108Hill Building Dongpaina Road, Saphanthong Village,
            Sisattanak District, Vientiane Capital, Lao PDR.</small
          >
          <small>020 56463959 | 020 56508160</small>
          <small>thebizhub.info@gmail.com</small>
        </li>
        <li class="span-3">
          <h3>Who are we?</h3>
          <h3>BIZ Course</h3>
          <h3>BIZ Coaching</h3>
          <h3>BIZ Tools</h3>
        </li>
        <li class="span-3">
          <h3>Learning</h3>
          <ul>
            <li>- SME & Startup</li>
            <li>- Entrepreneur’s story</li>
            <li>- Self-employment</li>
          </ul>
          <h3>BIZ Laws</h3>
          <h3>NEWS & Event</h3>
        </li>
        <li class="span-3">
          <h3>Follow us on</h3>
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
<style lang="scss" scoped>
section {
  background-image: url("../../assets/images/bg.jpg");
  background-position: bottom right;
  color: #fff;

  ul {
    li {
      padding: 20px;

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
        margin-top: 10px;
        margin-bottom: 10px;

        li {
          padding: 0;
          display: block;
          line-height: 1.5;
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
