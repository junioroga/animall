import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Videos as VideosType } from '@hooks/useAnimeList/types'
import { AnimeDetails } from '@pages/AnimeDetails'
import { Home } from '@pages/Home'
import { Videos } from '@pages/Videos'

export type RootStackParamListHome = {
  HomePage: undefined
  ListAnime: undefined
  AnimeDetails: { animeId: number }
  Videos: { videos: VideosType[]; pressedVideo: VideosType }
}

const Stack = createNativeStackNavigator<RootStackParamListHome>()

export const HomeNavigator = () => (
  <Stack.Navigator
    initialRouteName="HomePage"
    screenOptions={{
      headerShown: false,
      fullScreenGestureEnabled: true,
    }}>
    <Stack.Screen name="HomePage" component={Home} />
    <Stack.Screen name="AnimeDetails" component={AnimeDetails} />
    <Stack.Screen name="Videos" component={Videos} />
  </Stack.Navigator>
)
