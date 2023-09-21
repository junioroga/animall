import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Videos as VideosType } from '@hooks/useAnimeList/types'
import { AnimeDetails } from '@pages/AnimeDetails'
import { Home } from '@pages/Home'
import { ListRanking } from '@pages/ListRanking'
import { Videos } from '@pages/Videos'
import { RankingType } from '@services/types'

export type RootStackParamListHome = {
  HomePage: undefined
  ListAnime: undefined
  AnimeDetails: { animeId: number; uuid: string }
  Videos: { videos: VideosType[]; pressedVideo: VideosType }
  ListRanking: { rankingType: RankingType }
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
    <Stack.Screen name="ListRanking" component={ListRanking} />
  </Stack.Navigator>
)
