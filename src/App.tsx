import {
  useFonts,
  Poppins_100Thin,
  Poppins_200ExtraLight,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
  Poppins_900Black,
} from '@expo-google-fonts/poppins'
import { observer } from '@legendapp/state/react'
import { Store } from '@store'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
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

const queryCliente = new QueryClient()

export const App = observer(() => {
  const theme = Store.settings.theme.get()
  const [fontsLoaded] = useFonts({
    Poppins_100Thin,
    Poppins_200ExtraLight,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
    Poppins_900Black,
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return <></>
  }

  return (
    <QueryClientProvider client={queryCliente}>
      <TamaguiProvider config={config}>
        <StatusBar style={theme === 'light' ? 'dark' : 'light'} />
        <Theme name={theme}>
          <SafeAreaProvider onLayout={onLayoutRootView}>
            <Router />
          </SafeAreaProvider>
        </Theme>
      </TamaguiProvider>
    </QueryClientProvider>
  )
})
