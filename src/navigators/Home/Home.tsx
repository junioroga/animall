import { useTranslation } from 'react-i18next'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Videos as VideosType } from '@/hooks/useAnimeList/types'
import { AnimeDetails } from '@/pages/AnimeDetails'
import { Home } from '@/pages/Home'
import { ListRanking } from '@/pages/ListRanking'
import { Videos } from '@/pages/Videos'
import { RankingType } from '@/services/types'

export type RootStackParamListHome = {
  HomePage: undefined
  ListAnime: undefined
  AnimeDetails: {
    animeId: number
    title: string
    image: string
    customId: string
  }
  Videos: { videos: VideosType[]; pressedVideo: VideosType }
  ListRanking: { rankingType: RankingType; sectionTitle: string }
}

const Stack = createNativeStackNavigator<RootStackParamListHome>()

export const HomeNavigator = () => {
  const { t } = useTranslation()

  return (
    <Stack.Navigator
      initialRouteName="HomePage"
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}
    >
      <Stack.Screen name="HomePage" component={Home} options={{ title: t('web.routes.home') }} />
      <Stack.Screen
        name="AnimeDetails"
        component={AnimeDetails}
        options={{ title: t('web.routes.details') }}
      />
      <Stack.Screen name="Videos" component={Videos} options={{ title: t('web.routes.videos') }} />
      <Stack.Screen
        name="ListRanking"
        component={ListRanking}
        options={{ title: t('web.routes.ranking') }}
      />
    </Stack.Navigator>
  )
}
