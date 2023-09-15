import { Appearance } from 'react-native'

import * as Localization from 'expo-localization'

export const settings = {
  theme: Appearance.getColorScheme() as 'light' | 'dark',
  lang: Localization.locale as 'pt-BR' | 'en-US',
}
