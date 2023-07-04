import { whenReady } from '@legendapp/state'
import * as Localization from 'expo-localization'
import i18n, { Module } from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './lang/en.json'
import pt from './lang/pt.json'
import { Store } from './store'

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: (callback: (lng: string) => void) => {
    const lang = Store.settings.lang.get()
    if (lang) {
      return callback(lang)
    }

    return callback(Localization.locale)
  },
}

whenReady(() => {
  i18n
    .use(initReactI18next)
    .use(languageDetector as Module)
    .init({
      compatibilityJSON: 'v3',
      fallbackLng: 'pt',
      resources: {
        en,
        pt,
      },
      react: {
        useSuspense: false,
      },
      interpolation: {
        escapeValue: false,
      },
    })
})

export default i18n
