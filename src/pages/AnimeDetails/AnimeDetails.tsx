import React, { useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Alert, Platform, Share, useWindowDimensions } from 'react-native'

import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { Button, getTokens, ScrollView, Stack, useTheme, YStack } from 'tamagui'
import { LinearGradient } from 'tamagui/linear-gradient'
import { Share as ShareIcon } from '@tamagui/lucide-icons'

import { Header } from '@/components'
import { useAnimeDetails } from '@/hooks'
import { RootStackParamListHome } from '@/navigators/Home/Home'
import { hexToRgb } from '@/utils/color'

import { AnimeNumbers } from './AnimeNumbers'
import { Chart } from './Chart'
import { AnimeDetailsPrepared, preparedData } from './data'
import { Genres } from './Genres'
import { HeaderDetails } from './HeaderDetails'
import { MoreInfo } from './MoreInfo'
import { Recommendations } from './Recommendations'
import { RelatedAnime } from './RelatedAnime'
import { Skeleton } from './Skeleton'
import { Synopsis } from './Synopsis'
import { Videos } from './Videos'

import { useResponsiveCardsContext } from '@/context/ResponsiveCards'

type Props = NativeStackScreenProps<RootStackParamListHome, 'AnimeDetails'>

export const AnimeDetails = ({ route }: Props) => {
  const { animeId, title, image, customId } = route.params
  const { data, isLoading } = useAnimeDetails({ animeId })
  const { bottom } = useSafeAreaInsets()
  const theme = useTheme()
  const { t } = useTranslation()
  const { heightHorizontalCard } = useResponsiveCardsContext()
  const { width } = useWindowDimensions()

  const formattedData = useMemo(
    () => (data ? preparedData(data) : {}),
    [data]
  ) as unknown as AnimeDetailsPrepared

  const onShareAnime = useCallback(async () => {
    try {
      await Share.share({
        message: t('anime.details.share.message', {
          title: formattedData.title || formattedData.alternative_titles?.en,
        }),
        url: `https://myanimelist.net/anime/${formattedData.id}`,
      })
    } catch (error: any) {
      Alert.alert(error.message)
    }
  }, [formattedData, t])

  return (
    <ScrollView
      testID="scroll-anime-details"
      fg={1}
      bg="$background"
      contentContainerStyle={{
        pb: getTokens().space.$13.val + bottom,
      }}
      showsVerticalScrollIndicator={false}
      stickyHeaderIndices={[0]}
      stickyHeaderHiddenOnScroll
    >
      <Header
        right={
          Platform.OS !== 'web' && (
            <Button onPress={onShareAnime}>
              <ShareIcon size="$1" />
            </Button>
          )
        }
        title={title}
      />
      {isLoading && !Object.keys(formattedData).length ? (
        <Skeleton picture={image} sharedTransitionId={customId} />
      ) : (
        <YStack f={1}>
          <Stack>
            <HeaderDetails
              mainPicture={formattedData?.main_picture}
              averageTime={formattedData?.averageTime}
              numEpisodes={formattedData?.num_episodes || 0}
              title={formattedData.customTitle}
              mean={formattedData?.ratingString}
              releaseDay={formattedData?.releaseDay}
              releaseHour={formattedData?.releaseHour}
            />
            <LinearGradient
              colors={[
                'transparent',
                `rgba(${hexToRgb(theme.color1.val)}, 0.5)`,
                `rgba(${hexToRgb(theme.background.val)}, 1)`,
              ]}
              w={width}
              h={heightHorizontalCard * 0.6}
              pos="absolute"
              t={heightHorizontalCard * 0.7}
              start={{ x: 0, y: 0.3 }}
              end={{ x: 0, y: 1 }}
            />
          </Stack>
          <YStack pt="$4" px="$4" gap="$4">
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
            {formattedData.videos && !!formattedData?.videos.length && (
              <Videos videos={formattedData.videos} />
            )}
            {formattedData?.statistics && !!formattedData?.statistics && (
              <Chart statistics={formattedData?.statistics} />
            )}
            {formattedData?.related_anime && !!formattedData?.related_anime.length && (
              <RelatedAnime relatedAnime={formattedData.related_anime} />
            )}
          </YStack>
          {formattedData?.recommendations && !!formattedData?.recommendations.length && (
            <Recommendations recommendations={formattedData.recommendations} />
          )}
        </YStack>
      )}
    </ScrollView>
  )
}
