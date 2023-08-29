import { AnimeDetails } from '@pages/AnimeDetails'
import { Home } from '@pages/Home'
import { ListAnime } from '@pages/ListAnime'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

export type RootStackParamList = {
  Home: undefined
  ListAnime: undefined
  AnimeDetails: { animeId: number }
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export const HomeNavigator = () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="ListAnime" component={ListAnime} />
    <Stack.Screen name="AnimeDetails" component={AnimeDetails} />
  </Stack.Navigator>
)
