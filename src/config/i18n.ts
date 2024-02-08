import { initReactI18next } from 'react-i18next'

import { whenReady } from '@legendapp/state'
import { enUS, ptBR } from 'date-fns/locale'
import setDefaultOptions from 'date-fns/setDefaultOptions'
import i18n, { Module } from 'i18next'

import { Store } from '@/store'

import en from '@/lang/en.json'
import pt from '@/lang/pt.json'

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: (callback: (lng: string) => void) => {
    const lang = Store.settings.lang.get()

    if (lang) {
      setDefaultOptions({ locale: lang === 'en-US' ? enUS : ptBR })
      return callback(lang)
    }
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
