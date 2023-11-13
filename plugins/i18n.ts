import { createI18n } from 'vue-i18n'
import Lan from '../locales/Language.json'
// import lao from '../locales/laoLanguage.json'

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'en',
    messages: {
      en: Lan.en,
      lao: Lan.lao
    }
  })

  vueApp.use(i18n)
})
