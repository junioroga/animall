import { Store } from '@store/index'

export const formatString = (value: number) => {
  const language = Store.settings.lang.get() === 'pt' ? 'pt-BR' : 'en-US'

  return value.toLocaleString(language)
}
