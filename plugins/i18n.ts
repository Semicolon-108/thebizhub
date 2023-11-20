import { createI18n } from "vue-i18n";
import { language } from "../locales/language";
// import lao from '../locales/laoLanguage.json'

const getKeyFunc = (lang: string) => {
  let object = {};
  for (let i = 0; i < language.length; i++) {
    const obj: any = language[i];
    object = {
      ...object,
      [obj.key]: obj[lang],
    };
  }
  // console.log(object);

  return object;
};

const laKey = getKeyFunc("la");
const enKey = getKeyFunc("en");
// console.log(laKey)

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: "en",
    messages: {
      en: enKey,
      lao: laKey,
    },
  });

  vueApp.use(i18n);
});
