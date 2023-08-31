import React from 'react'
import { TouchableOpacity } from 'react-native'

import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { ScrollView, Stack, YStack } from 'tamagui'
import { Share } from '@tamagui/lucide-icons'

import { Header } from '@components/Header'
import { Loading } from '@components/Loading'
import { useAnimeDetails } from '@hooks'
import { RootStackParamListHome } from '@navigators/Home/Home'

import { AnimeNumbers } from './AnimeNumbers'
import { Genres } from './Genres'
import { HeaderDetails } from './HeaderDetails'
import { MoreInfo } from './MoreInfo'
import { Recommendations } from './Recommendations'
import { RelatedAnime } from './RelatedAnime'
import { Synopsis } from './Synopsis'
import { Videos } from './Videos'

type Props = NativeStackScreenProps<RootStackParamListHome, 'AnimeDetails'>

export const AnimeDetails = ({ route }: Props) => {
  const { animeId } = route.params
  const { data, isLoading } = useAnimeDetails({ animeId })

  return (
    <Stack f={1} bg="$background">
      <Header
        right={
          <TouchableOpacity>
            <Share />
          </TouchableOpacity>
        }
      />
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        showsVerticalScrollIndicator={false}>
        {isLoading ? (
          <YStack f={1} ai="center" jc="center">
            <Loading />
          </YStack>
        ) : (
          <YStack f={1}>
            <HeaderDetails
              mainPicture={data?.main_picture}
              averageTime={Math.round(
                (data?.average_episode_duration ?? 0) / 60,
              )}
              numEpisodes={data?.num_episodes ?? 0}
              title={data?.title ?? data?.alternative_titles.en ?? ''}
              mean={data?.mean}
            />
            <YStack p="$4" gap="$4">
              <AnimeNumbers
                ranking={data?.rank}
                favorites={data?.num_scoring_users}
                members={data?.num_list_users}
                popularity={data?.popularity}
              />
              <Synopsis synopsis={data?.synopsis} />
              <Genres genres={data?.genres} />
              <MoreInfo
                status={data?.status}
                classification={data?.rating}
                source={data?.media_type}
                season={data?.start_season}
                genre={data?.genres![0]?.name}
                studios={data?.studios}
              />
              {!!data?.videos.length && <Videos videos={data.videos} />}
              {!!data?.related_anime.length && (
                <RelatedAnime relatedAnime={data.related_anime} />
              )}
              {!!data?.recommendations.length && (
                <Recommendations recommendations={data.recommendations} />
              )}
            </YStack>
          </YStack>
        )}
      </ScrollView>
    </Stack>
  )
}
