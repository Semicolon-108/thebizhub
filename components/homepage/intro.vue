<template>
  <section class="section">
    <div class="container">
      <div class="grids gap-20-desktop is-5-desktop is-1-mobile">
        <div class="left span-2-desktop">
          <div class="intro">
            <h1>THE BIZ HUB</h1>
            <h3>
              Partner for success <br class="is-hidden-mobile" />
              in business and <br class="is-hidden-mobile" />
              entrepreneurship
            </h3>
            <button
              class="main margin-top-20 large"
              @click="
                router.push({ path: '/category', query: { is: 'Update' } })
              "
            >
              Update
            </button>
          </div>
        </div>
        <div class="right span-3-desktop">
          <ul class="grids gap-10-desktop is-2-desktop is-1-mobile">
            <li>
              <div class="course-info">
                <h3>BIZ COACHING</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                  quibusdam quia recusandae illo rerum voluptates, consequatur
                  fugiat repudiandae cum labore nobis praesentium voluptate hic.
                  Eos, dolorem! Inventore, vitae! At, ipsa.
                </p>
              </div>
            </li>
            <li>
              <div class="course-info">
                <h3>BIZ EVENTS</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                  quibusdam quia recusandae illo rerum voluptates, consequatur
                  fugiat repudiandae cum labore nobis praesentium voluptate hic.
                  Eos, dolorem! Inventore, vitae! At, ipsa.
                </p>
              </div>
            </li>
            <li>
              <div class="course-info">
                <h3>BIZ TOOLS</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                  quibusdam quia recusandae illo rerum voluptates, consequatur
                  fugiat repudiandae cum labore nobis praesentium voluptate hic.
                  Eos, dolorem! Inventore, vitae! At, ipsa.
                </p>
              </div>
            </li>
            <li>
              <div class="course-info">
                <h3>BIZ COURSES</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                  quibusdam quia recusandae illo rerum voluptates, consequatur
                  fugiat repudiandae cum labore nobis praesentium voluptate hic.
                  Eos, dolorem! Inventore, vitae! At, ipsa.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
const router = useRouter();
</script>
<style lang="scss" scoped>
.left {
  display: flex;
  align-items: center;

  @include mobile {
    text-align: center;
  }

  .intro {
    h1 {
      font-size: 3rem;
      font-weight: 700;

      @include mobile {
        line-height: 1;
      }
    }

    h3 {
      font-size: 2rem;
      line-height: 1.1;
      font-weight: 600;

      @include mobile {
        margin-top: 10px;
        font-size: 1.5rem;
      }
    }
  }
}

.right {
  ul {
    li {
      cursor: pointer;
      position: relative;
      aspect-ratio: 5/3;
      padding: 20px;
      border-radius: 10px;
      background-position: center !important;
      background-size: cover !important;
      color: #fff;
      background-blend-mode: multiply;

      display: flex;
      align-items: flex-end;

      &:nth-child(1) {
        background: url("../../assets/images/img-05.jpg")
          rgba(var(--main-color-rgb), 0.7);
      }

      &:nth-child(2) {
        background: url("../../assets/images/img-09.jpg")
          rgba(var(--main-color-rgb), 0.7);
      }

      &:nth-child(3) {
        background: url("../../assets/images/img-06.jpg")
          rgba(var(--main-color-rgb), 0.7);
      }

      &:nth-child(4) {
        background: url("../../assets/images/img-08.jpg")
          rgba(var(--main-color-rgb), 0.7);
      }

      &:hover {
        .course-info {
          p {
            display: block;
            animation: slideUp ease-in-out 0.3s;

            @keyframes slideUp {
              from {
                opacity: 0;
                transform: translateY(100px);
              }

              to {
                opacity: 1;
                transform: translateY(0px);
              }
            }
          }
        }
      }

      .course-info {
        display: inline-block;

        h3 {
          font-weight: 600;
          font-size: var(--md-font);
        }

        p {
          transition: ease 0.5s;
          margin-top: 5px;
          font-size: var(--sm-font);
          overflow: hidden;
          display: none;
        }
      }
    }
  }
}
</style>
