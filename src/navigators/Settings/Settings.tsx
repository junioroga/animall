import { useTranslation } from 'react-i18next'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Settings } from '@/pages/Settings'

export type RootStackParamListSettings = {
  SettingsPage: undefined
}

const Stack = createNativeStackNavigator<RootStackParamListSettings>()

export const SettingsNavigator = () => {
  const { t } = useTranslation()

  return (
    <Stack.Navigator
      initialRouteName="SettingsPage"
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}
    >
      <Stack.Screen
        name="SettingsPage"
        component={Settings}
        options={{ title: t('web.routes.settings') }}
      />
    </Stack.Navigator>
  )
}
