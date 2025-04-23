import '@/config/i18n'
import '~/global.css'
import { useFonts } from 'expo-font'
import { useCallback } from 'react'

import { observer } from '@legendapp/state/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context'

import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar'

import { TamaguiProvider } from 'tamagui'

import { Store } from '@/store'

import config from '../tamagui.config'
import Router from './router'

SplashScreen.preventAutoHideAsync()

const queryClient = new QueryClient()

export const App = observer(() => {
  const theme = Store.settings.theme.get()
  const [fontsLoaded, fontError] = useFonts({
    Poppins_100Thin: require('../public/fonts/Poppins_100Thin.ttf'),
    Poppins_200ExtraLight: require('../public/fonts/Poppins_200ExtraLight.ttf'),
    Poppins_300Light: require('../public/fonts/Poppins_300Light.ttf'),
    Poppins_400Regular: require('../public/fonts/Poppins_400Regular.ttf'),
    Poppins_500Medium: require('../public/fonts/Poppins_500Medium.ttf'),
    Poppins_600SemiBold: require('../public/fonts/Poppins_600SemiBold.ttf'),
    Poppins_700Bold: require('../public/fonts/Poppins_700Bold.ttf'),
    Poppins_800ExtraBold: require('../public/fonts/Poppins_800ExtraBold.ttf'),
    Poppins_900Black: require('../public/fonts/Poppins_900Black.ttf'),
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded, fontError])

  if (!fontsLoaded) {
    return <></>
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TamaguiProvider config={config} defaultTheme={theme}>
        <StatusBar style={theme === 'light' ? 'dark' : 'light'} />
        <SafeAreaProvider initialMetrics={initialWindowMetrics} onLayout={onLayoutRootView}>
          <Router />
        </SafeAreaProvider>
      </TamaguiProvider>
    </QueryClientProvider>
  )
})
