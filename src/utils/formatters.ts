import { Store } from '@/store/index'

export const formatString = (value: number) => {
  const language = Store.settings.lang.get()

  return value.toLocaleString(language)
}
