import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Login from '../pages/Login'

type RootStackParamList = {
  Login: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function LoginNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  )
}
