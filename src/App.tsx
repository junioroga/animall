import { observer } from '@legendapp/state/react'
import { Store } from '@store'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar'
import { useCallback } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { TamaguiProvider, Theme } from 'tamagui'
import './i18n'

import Router from './router'
import config from '../tamagui.config'

process.env.TAMAGUI_TARGET === 'native' && require('@config/reactotron')

SplashScreen.preventAutoHideAsync()

export const App = observer(() => {
  const theme = Store.settings.theme.get()
  const [loaded] = useFonts({
    InterThin: require('@tamagui/font-inter/otf/Inter-Thin.otf'),
    InterExtraLight: require('@tamagui/font-inter/otf/Inter-ExtraLight.otf'),
    InterLight: require('@tamagui/font-inter/otf/Inter-Light.otf'),
    InterRegular: require('@tamagui/font-inter/otf/Inter-Regular.otf'),
    InterMedium: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterSemiBold: require('@tamagui/font-inter/otf/Inter-SemiBold.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
    InterExtraBold: require('@tamagui/font-inter/otf/Inter-ExtraBold.otf'),
    InterBlack: require('@tamagui/font-inter/otf/Inter-Black.otf'),
  })

  const onLayoutRootView = useCallback(async () => {
    if (loaded) {
      await SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return <></>
  }

  return (
    <TamaguiProvider config={config}>
      <StatusBar style={theme === 'light' ? 'dark' : 'light'} />
      <Theme name={theme}>
        <SafeAreaProvider onLayout={onLayoutRootView}>
          <Router />
        </SafeAreaProvider>
      </Theme>
    </TamaguiProvider>
  )
})
