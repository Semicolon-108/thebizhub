// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: false,
  app: {
    head: {
      title: "Thebizhub",
      meta: [{ name: "Thebizhub", content: "thebizhub bizhub" }],
      link: [{ rel: "icon", type: "image/png", href: "/favicon.ico" }],
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
