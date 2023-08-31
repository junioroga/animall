import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Videos as VideosType } from '@hooks/useAnimeList/types'
import { AnimeDetails } from '@pages/AnimeDetails'
import { ListAnime } from '@pages/ListAnime'
import { Videos } from '@pages/Videos'

export type RootStackParamListSearch = {
  ListAnimePage: undefined
  AnimeDetails: { animeId: number }
  Videos: { videos: VideosType[]; pressedVideo: VideosType }
}

const Stack = createNativeStackNavigator<RootStackParamListSearch>()

export const ListAnimeNavigator = () => (
  <Stack.Navigator
    initialRouteName="ListAnimePage"
    screenOptions={{
      headerShown: false,
      fullScreenGestureEnabled: true,
    }}>
    <Stack.Screen name="ListAnimePage" component={ListAnime} />
    <Stack.Screen name="AnimeDetails" component={AnimeDetails} />
    <Stack.Screen name="Videos" component={Videos} />
  </Stack.Navigator>
)
