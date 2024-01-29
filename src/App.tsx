import './i18n'
import { useCallback } from 'react'
import { Platform } from 'react-native'

import {
  Poppins_100Thin,
  Poppins_200ExtraLight,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
  Poppins_900Black,
  useFonts,
} from '@expo-google-fonts/poppins'
import { observer } from '@legendapp/state/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context'

import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar'

import { TamaguiProvider, Theme } from 'tamagui'

import { Store } from '@/store'

import config from '../tamagui.config'
import Router from './router'

if (Platform.OS === 'web') require('@/config/reactotron.web')
else require('@/config/reactotron')

SplashScreen.preventAutoHideAsync()

const queryClient = new QueryClient()

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
    <QueryClientProvider client={queryClient}>
      <TamaguiProvider config={config}>
        <StatusBar style={theme === 'light' ? 'dark' : 'light'} />
        <Theme name={theme}>
          <SafeAreaProvider
            initialMetrics={initialWindowMetrics}
            onLayout={onLayoutRootView}>
            <Router />
          </SafeAreaProvider>
        </Theme>
      </TamaguiProvider>
    </QueryClientProvider>
  )
})
