import 'resize-observer-polyfill'

import { observer } from '@legendapp/state/react'
import { Store } from '@store'
import { useFonts } from 'expo-font'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { TamaguiProvider, Theme } from 'tamagui'
import './i18n'

import Router from './router'
import config from '../tamagui.config'
require('@config/reactotron')

export const App = observer(() => {
  const theme = Store.settings.theme.get()
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  })

  if (!loaded) {
    return null
  }

  return (
    <TamaguiProvider config={config}>
      <StatusBar style={theme === 'light' ? 'dark' : 'light'} />
      <Theme name={theme}>
        <SafeAreaProvider>
          <Router />
        </SafeAreaProvider>
      </Theme>
    </TamaguiProvider>
  )
})
