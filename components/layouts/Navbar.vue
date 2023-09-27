<template>
  <div>
    <div class="top-navbar">
      <div class="mobile-only">
        <p class="left">
          <i class="fa-regular fa-magnifying-glass"></i>
        </p>
        <p class="right">
          <i class="fa-regular fa-bars"></i>
        </p>
      </div>
      <div class="logo" @click="router.push({ path: '/' })">
        <img src="../../assets/images/thebizhub-logo.jpg" />
      </div>
      <h1>Partner for Success in Business and Entrepreneurship</h1>
    </div>
    <div class="navbar">
      <div class="navbar-start">
        <ul>
          <li>
            <NuxtLink :to="{ path: '/category', query: { is: 'News & Event' } }"
              >BIZ Laws</NuxtLink
            >
          </li>
          <li class="has-dropdown">
            <a>Product & Services <i class="fa-light fa-angle-down"></i></a>
            <ul class="dropdown">
              <li>
                <NuxtLink
                  :to="{ path: '/category', query: { is: 'BIZ COACHING' } }"
                  >BIZ COACHING</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  :to="{ path: '/category', query: { is: 'BIZ EVENTS' } }"
                  >BIZ EVENTS</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  :to="{ path: '/category', query: { is: 'BIZ TOOLS' } }"
                  >BIZ TOOLS</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  :to="{ path: '/category', query: { is: 'BIZ COURSES' } }"
                  >BIZ COURSES</NuxtLink
                >
              </li>
            </ul>
          </li>

          <li class="has-dropdown">
            <a>Learning <i class="fa-light fa-angle-down"></i></a>
            <ul class="dropdown">
              <li>SME & Startup</li>
              <li>Entrepreneur’s Story</li>
              <li>Self-Employment</li>
            </ul>
          </li>
          <!-- <li>
            <NuxtLink :to="{ path: '/category', query: { is: 'BIZ Laws' } }"
              >BIZ Laws</NuxtLink
            >
          </li> -->
          <li>
            <NuxtLink :to="{ path: '/category', query: { is: 'update' } }"
              >Update</NuxtLink
            >
          </li>
          <li><NuxtLink to="/about-us">About Us</NuxtLink></li>
        </ul>
      </div>
      <div class="navbar-end">
        <input
          type="text"
          class="input small"
          placeholder="Enter keyword and press Enter"
        />
        <hr class="v" />
        <p class="lang-switch">
          <a class="current">EN</a>
          <a>LA</a>
        </p>
        <hr class="v" />
        <div class="button-groups">
          <button @click="router.push({ path: '/auth/login' })">Login</button>
          <button class="main" @click="router.push({ path: '/auth/register' })">
            Register
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const router = useRouter();
</script>
<style lang="scss" scoped>
.top-navbar {
  background-color: #000;
  padding: 15px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .mobile-only {
    color: #fff;
    position: absolute;
    left: 15px;
    right: 15px;
    top: 15px;
    @include xlg-font;
    display: none;

    @include mobile {
      display: block;
    }

    @include tablet {
      display: block;
    }

    p {
      position: absolute;
      min-width: 40px;
      min-height: 40px;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(#fff, 0.1);
      cursor: pointer;

      @include mobile {
        min-width: 35px;
        min-height: 35px;
        width: 35px;
        height: 35px;
      }

      &.left {
        left: 0;
      }

      &.right {
        right: 0;
      }
    }
  }

  .logo {
    margin-bottom: 10px;
    cursor: pointer;

    img {
      height: 4rem;
      object-fit: contain;
      display: block;

      @include mobile {
        height: 3rem;
      }
    }
  }

  h1 {
    color: #fff;
    @include lg-font;
    text-align: center;

    @include mobile {
      @include sm-font;
    }
  }
}

.navbar {
  border-bottom: 1px solid $border-color;
  display: flex;
  align-items: center;
  padding: 0 10px;

  @include mobile {
    display: none;
  }

  @include tablet {
    display: none;
  }

  .navbar-start {
    ul {
      height: 100%;
      display: flex;
      align-items: center;

      li {
        a {
          padding: 20px 10px;
          @include sm-font;
          transition: all ease-in-out 0.15s;
          white-space: nowrap;
          display: flex;
          align-items: flex-end;
          cursor: pointer;

          i {
            margin-left: 5px;
          }

          &:hover {
            color: $sub-color;
          }
        }

        &.has-dropdown {
          position: absolute;
          position: relative;
          z-index: 999;

          &:hover ul.dropdown {
            display: flex !important;
          }

          ul.dropdown {
            display: none;
            position: absolute;
            z-index: 999;
            top: 2.5rem;
            right: 0;
            border-radius: 5px;
            background-color: $sub-color;
            color: #fff;
            padding: 15px;
            height: auto;
            // display: flex;
            flex-direction: column;
            align-items: flex-start;

            &::after {
              content: "";
              position: absolute;
              top: -7px;
              right: 10px;
              width: 0;
              height: 0;
              border-left: 8px solid transparent;
              border-right: 8px solid transparent;
              border-bottom: 8px solid $sub-color;
            }

            li {
              white-space: pre;
              line-height: 2;
              cursor: pointer;
              a {
                transition: all ease-in-out 0.3s;
                padding: 0;
                &:hover {
                  color: #fff !important;
                  text-decoration: underline;
                }
              }
            }
          }
        }
      }
    }
  }

  .navbar-end {
    display: flex;
    align-items: center;
    margin-left: auto;

    hr.v {
      height: 1.5rem;
      width: 1px;
      border-width: 0 1px 0 0;
      border-color: $light-grey-color !important;
      margin: 0 20px;
      display: block;
    }

    .lang-switch {
      display: flex;

      a {
        background-color: $light-grey-color;
        padding: 5px;
        cursor: pointer;
        @include xsm-font;

        &.current {
          background-color: $sub-color;
          color: #fff;
        }
      }
    }

    .button-groups {
      display: flex;
      gap: 10px;
    }
  }
}
</style>
