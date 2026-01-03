import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import en from '../locales/en/common.json'
import zhCN from '../locales/zh-CN/common.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { common: en },
      'zh-CN': { common: zhCN },
      zh: { common: zhCN },
    },
    supportedLngs: ['en', 'zh', 'zh-CN'],
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['cookie', 'navigator'],
      caches: ['cookie'],
    },
  })

export default i18n
