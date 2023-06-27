// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: true,
  app: {
    head: {
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
          additionalData: '@import "@/assets/scss/main.scss";',
        },
      },
    },
  }, //vite
  css: ["@/assets/css/font.css", "@/assets/css/all.css"],
});
