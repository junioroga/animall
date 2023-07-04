import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../pages/Home'
import ListAnime from '../pages/ListAnime'

export type RootStackParamList = {
  Home: undefined
  ListAnime: { userSearch: string }
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export const HomeNavigator = () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen
      name="ListAnime"
      component={ListAnime}
      initialParams={{ userSearch: '' }}
    />
  </Stack.Navigator>
)
