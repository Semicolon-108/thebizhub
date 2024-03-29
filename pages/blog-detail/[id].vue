<template>
  <div id="blog-detail">
    <section class="has-bg">
      <div class="container">
        <iframe v-if="videoLink" :src="videoLink" class="youtube" title="YouTube video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen></iframe>
        <img v-else :src="coverPage" alt="" v-if="coverPage" />
      </div>
    </section>
    <div class="container content">
      <h1 class="blog-title">{{ title }}</h1>
      <ul class="blog-info">
        <li class="tag">
          <p>
            <span v-for="(c, ind) in category" :key="ind">{{ c.name }}</span>
          </p>
        </li>
        <li class="post-date">{{ createdAt }}</li>
        <li class="social">
          <p>
            <a :href="`https://www.facebook.com/sharer/sharer.php?u=${https}blog-detail/${route.params.id}`"
              onclick="javascript:window.open(this.href,'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;"><i
                class="fa-brands fa-facebook"></i></a>
            <a :href="`whatsapp://send?text=${https}blog-detail/${route.params.id}`"
              onclick="javascript:window.open(this.href,'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;">
              <i class="fa-brands fa-whatsapp"></i></a>
            <i class="fa-light fa-link" @click="isCopy()" v-if="copy"></i>
            <i class="fa-light fa-check checkStatus" v-else></i>
          </p>
        </li>
      </ul>
      <!-- Blog detail -->
      <div class="blog-detail" v-html="detail"></div>
      <div v-if="attachments.length">
        <ul class="document-list">
          <li v-for="(i, index) in attachments" :key="index">
              <button class="button main" @click="clickedDownload(i)">{{ $t("download_document") }} {{index +1}}</button>
          </li>
        </ul>
      </div>
      <div class="tags">
        <strong>TAGS:</strong>
        <a v-for="(t, indx) in tag" :key="indx" @click="router.push(`/tag/${t._id}`)">{{ t.name }}</a>
      </div>

      <div class="follow-us">
        <h1>ສາມາດຕິດຕາມ THEBIZHUB</h1>
        <p>ຜ່ານແອັບພິເຄຊັ້ນຕ່າງໆ ທີ່ທ່ານສະດວກ ຫຼື ໃຊ້ງານຢູ່ແລ້ວໄດ້ເລີຍ</p>
        <ul>
          <li>
            <a href="https://www.facebook.com/profile.php?id=100091801856212" target="_blank">
              <i class="fa-brands fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="https://www.tiktok.com/@thebizhublaos" target="_blank">
              <i class="fa-brands fa-tiktok"></i>
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/@TheBIZHUB" target="_blank">
              <i class="fa-brands fa-youtube"></i>
            </a>
          </li>
        </ul>
      </div>

      <div class="blog-footer" v-if="related.length">
        <h3 class="section-title">RELATED ARTICLES</h3>
        <Releted :relate="related" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Releted from "./related.vue";
const imageURL = useNuxtApp().$imageURL;
const axios = useNuxtApp().$axios;
const https = useNuxtApp().$https;
const route = useRoute();
const router = useRouter();
const msgError = ref<any>();
const title = ref<any>();
const coverPage = ref<any>();
const videoLink = ref<any>("");
const tag = ref<any>();
const category = ref<any>();
const detail = ref<any>();
const createdAt = ref<any>();
const attachments = ref<any>([])
const related = ref<any>([]);
const copy = ref<any>(true);
const authStatus = ref<any>(false)
import { useAuthStore } from '@/stores/store'
const tokenStore = useAuthStore()

const fetch = async () => {
  const id = route.params.id;
  if (!id) return;
  await axios
    .post(`articles-detail/${id}`)
    .then((res) => {
      if (res.status === 200) {
        title.value = res.data.info.title;
        coverPage.value = imageURL + res.data.info.coverPage;
        tag.value = res.data.info.tag;
        category.value = res.data.info.category;
        detail.value = res.data.info.details;
        createdAt.value = res.data.info.createdAt;
        attachments.value = res.data.info.attachments;
        related.value = res.data.isRelated;
        if (res.data.info.videoLink) {
          videoLink.value =
            "https://www.youtube.com/embed/" + res.data.info.videoLink;
        }
      }
    })
    .catch((e: any) => {
      if (e) {
        msgError.value = "Data empty";
      }
    });
};
await fetch();
const isCopy = () => {
  navigator.clipboard.writeText(https + "blog-detail/" + route.params.id);
  copy.value = false;
};
useHead({
  title: title,
  meta: [
    { hid: "og:title", property: "og:title", content: title },
    { hid: "og:description", property: "og:description", content: detail },
    { hid: "og:type", property: "og:type", content: "website" },
    {
      hid: "og:url",
      property: "og:url",
      content: https + "blog-detail/" + route.params.id,
    },
    { hid: "og:image", property: "og:image", content: coverPage },
  ],
});

watch(() => tokenStore.token, (token) => {
  if (token) {
    authStatus.value = true
  }
}, { immediate: true, deep: true });

const clickedDownload = (url: any) => {
  if (!authStatus.value) {
    if (confirm("Please Login!")) {
      router.push('/auth/login')
    }
    return
  }
  const link = document.createElement('a');
  link.href = url
  link.setAttribute('download', 'file.pdf');
  document.body.appendChild(link);
  link.click();
}
</script>

<style lang="scss" scoped>

.document-list{
  display: flex;
  flex-wrap: wrap;
  gap: .5rem;
  button{
    padding-left: 1rem !important;
    padding-right: 1rem !important;
  }
}

.has-bg {
  background-color: var(--light-grey-color);

  .youtube {
    width: 100%;
    aspect-ratio: 1.9;
    object-fit: cover;
    display: block;
  }

  img {
    width: 100%;
    aspect-ratio: 1.9;
    object-fit: cover;
    display: block;
  }
}

.tags {
  display: flex;
  margin: 20px 0;

  strong {
    margin-right: 10px;
  }

  a {
    cursor: pointer;
    display: flex;
    white-space: nowrap;
    transition: all ease-in-out 0.3s;

    &:hover {
      color: var(--sub-color);
      text-decoration: underline !important;
    }

    &::before {
      content: "#";
      margin-left: 05px;
      display: block;
    }
  }
}

.follow-us {
  padding: 40px 0;
  text-align: center;

  h1 {
    font-weight: 700;
    font-size: var(--lg-font);
    line-height: 2;
  }

  p {
    font-size: var(--lg-font);
  }

  ul {
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    li i {
      font-size: var(--xxlg-font);
    }
  }
}

.container {
  max-width: 760px;
  margin: 0 auto;

  @include fullhd {
    max-width: 1140px;
  }

  &.content {
    padding: 2.5rem 0;
  }
}

.blog-title {
  font-size: var(--xlg-font);
  font-weight: 700;
}

.blog-info {
  padding: 10px 0 30px;
  font-size: var(--md-font);

  li {
    line-height: 1.5;

    &:not(:last-child) {
      margin-bottom: 5px;
    }

    &.social {
      p {
        display: flex;
        gap: 10px;

        cursor: pointer;

        i {
          font-size: var(--xlg-font);

          &:nth-child(1) {
            color: #4267b2;
          }

          &:nth-child(2) {
            color: #25d366;
          }

          &:nth-child(3) {
            color: --var(grey-color);
          }
        }

        i.checkStatus {
          background-color: rgb(255, 255, 255);
          border-style: ridge;
          border: 2px solid rgba(26, 17, 196, 0.6);
          font-size: auto;
          padding: 1px 4px;
        }
      }
    }

    &.tag {
      display: flex;
      align-items: center;

      p {
        display: flex;
        align-items: center;
        font-size: var(--sm-font);

        span {
          display: flex;
          align-items: center;
          font-weight: 600;
          text-transform: uppercase;

          &:not(:last-child) {
            &::after {
              content: "";
              display: block;
              border-right: 1px solid var(--grey-color);
              height: 10px;
              margin: 0 10px;
            }
          }
        }
      }
    }

    &.post-date {
      font-weight: 500;
      font-size: var(--sm-font);
      color: var(--dark-grey-color);
    }
  }
}

// blog-info
.blog-detail {
  font-size: var(--md-font);
  margin-bottom: 40px;
}
</style>
