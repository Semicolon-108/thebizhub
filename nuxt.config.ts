// https://nuxt.com/docs/api/configuration/nuxt-config
const title = `thebizhub.la`;
const keywords = `thebizhub, Thebizhub, TheBizHub, thebizhub.la, Thebizhub.la, Bizhub, bizhub.la`;
const meta = [
  { charset: "utf-8" },
  {
    name: "viewport",
    viewport: "width=device-width, initial-scale=1",
  },
  {
    name: "The BIZ HUB",
    content: "thebizhub bizhub",
  },
  {
    hid: "og:title",
    property: "og:title",
    content: title,
  },
  {
    hid: "keywords",
    name: "keywords",
    content: keywords,
  },
];

export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: true,
  modules: ["nuxt-gtag", "nuxt-swiper", '@pinia/nuxt',],
  gtag: {
    id: "G-CVJQT1XPN2",
    config: {
      page_title: "Thex BIZ HUB",
    },
  },
  app: {
    head: {
      script: [
        {
          src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8866188728269533",
          async: true,
        },
      ],
      // title: process.env.npm_package_name || "dfgsdafsdafsdf",
      title: "The BIZ HUB",
      meta,
      link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
    },
    pageTransition: { name: "page", mode: "out-in" },
  },
  experimental: {
    watcher: "chokidar",
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/_media.scss";',
        },
      },
    },
  },
  css: [
    "@/assets/css/font.css",
    "@/assets/css/all.min.css",
    "@/assets/css/main.css",
  ],
});
