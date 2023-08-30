import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Videos as VideosType } from '@hooks/useAnimeList/types'
import { AnimeDetails } from '@pages/AnimeDetails'
import { Home } from '@pages/Home'
import { ListAnime } from '@pages/ListAnime'
import { Videos } from '@pages/Videos'

export type RootStackParamList = {
  Home: undefined
  ListAnime: undefined
  AnimeDetails: { animeId: number }
  Videos: { videos: VideosType[]; pressedVideo: VideosType }
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
    <Stack.Screen name="Videos" component={Videos} />
  </Stack.Navigator>
)
