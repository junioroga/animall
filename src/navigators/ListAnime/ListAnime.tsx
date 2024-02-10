import { useTranslation } from 'react-i18next'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Videos as VideosType } from '@/hooks/useAnimeList/types'
import { AnimeDetails } from '@/pages/AnimeDetails'
import { ListAnime } from '@/pages/ListAnime'
import { Videos } from '@/pages/Videos'

export type RootStackParamListSearch = {
  ListAnimePage: undefined
  AnimeDetails: { animeId: number }
  Videos: { videos: VideosType[]; pressedVideo: VideosType }
}

const Stack = createNativeStackNavigator<RootStackParamListSearch>()

export const ListAnimeNavigator = () => {
  const { t } = useTranslation()

  return (
    <Stack.Navigator
      initialRouteName="ListAnimePage"
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}>
      <Stack.Screen
        name="ListAnimePage"
        component={ListAnime}
        options={{ title: t('web.routes.animeList') }}
      />
      <Stack.Screen
        name="AnimeDetails"
        component={AnimeDetails}
        options={{ title: t('web.routes.details') }}
      />
      <Stack.Screen
        name="Videos"
        component={Videos}
        options={{ title: t('web.routes.videos') }}
      />
    </Stack.Navigator>
  )
}
