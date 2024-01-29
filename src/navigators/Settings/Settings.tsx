import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Settings } from '@/pages/Settings'

export type RootStackParamListSettings = {
  SettingsPage: undefined
}

const Stack = createNativeStackNavigator<RootStackParamListSettings>()

export const SettingsNavigator = () => (
  <Stack.Navigator
    initialRouteName="SettingsPage"
    screenOptions={{
      headerShown: false,
      fullScreenGestureEnabled: true,
    }}>
    <Stack.Screen name="SettingsPage" component={Settings} />
  </Stack.Navigator>
)
