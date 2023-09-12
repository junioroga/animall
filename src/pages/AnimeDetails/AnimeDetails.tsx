import React, { useMemo } from 'react'
import { Dimensions } from 'react-native'

import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { Button, getTokens, ScrollView, Stack, YStack } from 'tamagui'
import { Share } from '@tamagui/lucide-icons'

import { Header, Loading } from '@components'
import { useAnimeDetails } from '@hooks'
import { RootStackParamListHome } from '@navigators/Home/Home'

import { AnimeNumbers } from './AnimeNumbers'
import { Chart } from './Chart'
import { AnimeDetailsPrepared, preparedData } from './data'
import { Genres } from './Genres'
import { HeaderDetails } from './HeaderDetails'
import { MoreInfo } from './MoreInfo'
import { Recommendations } from './Recommendations'
import { RelatedAnime } from './RelatedAnime'
import { Synopsis } from './Synopsis'
import { Videos } from './Videos'

const { height } = Dimensions.get('window')

type Props = NativeStackScreenProps<RootStackParamListHome, 'AnimeDetails'>

export const AnimeDetails = ({ route }: Props) => {
  const { animeId } = route.params
  const { data, isLoading } = useAnimeDetails({ animeId })
  const { bottom } = useSafeAreaInsets()

  const formattedData = useMemo(
    () => (data ? preparedData(data) : {}),
    [data],
  ) as unknown as AnimeDetailsPrepared

  return (
    <Stack bg="$background">
      <Header
        right={
          <Button unstyled>
            <Share size="$icon.sm" />
          </Button>
        }
      />
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: getTokens().space[13].val + bottom,
        }}
        showsVerticalScrollIndicator={false}>
        {isLoading && !Object.keys(formattedData).length ? (
          <YStack h={height * 0.8} ai="center" jc="center">
            <Loading />
          </YStack>
        ) : (
          <YStack f={1}>
            <HeaderDetails
              mainPicture={formattedData?.main_picture}
              averageTime={formattedData?.averageTime}
              numEpisodes={formattedData?.num_episodes || 0}
              title={
                formattedData?.title || formattedData?.alternative_titles.en
              }
              mean={formattedData?.ratingString}
            />
            <YStack pt="$4" gap="$4">
              <YStack px="$4" gap="$4">
                <AnimeNumbers
                  ranking={formattedData?.rank}
                  favorites={formattedData?.num_scoring_users}
                  members={formattedData?.num_list_users}
                  popularity={formattedData?.popularity}
                />
                <Synopsis synopsis={formattedData?.synopsis} />
                <Genres genres={formattedData?.genres} />
                <MoreInfo
                  status={formattedData?.status}
                  classification={formattedData?.rating}
                  source={formattedData?.media_type}
                  season={formattedData?.start_season}
                  genre={formattedData?.genres![0]?.name}
                  studios={formattedData?.studios}
                />
                {!!formattedData?.videos.length && (
                  <Videos videos={formattedData.videos} />
                )}
                {!!formattedData?.statistics && (
                  <Chart statistics={formattedData?.statistics} />
                )}
                {!!formattedData?.related_anime.length && (
                  <RelatedAnime relatedAnime={formattedData.related_anime} />
                )}
              </YStack>
              {!!formattedData?.recommendations.length && (
                <Recommendations
                  recommendations={formattedData.recommendations}
                />
              )}
            </YStack>
          </YStack>
        )}
      </ScrollView>
    </Stack>
  )
}
