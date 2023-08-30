import React from 'react'
import { useTranslation } from 'react-i18next'

import { XStack, YStack } from 'tamagui'

import { Text } from '@components'
import { Season, Studios } from '@hooks/useAnimeList/types'
import { Rating, Seasons, Status } from '@services/types'

type Props = {
  status?: string
  season?: Season
  studios?: Studios[]
  source?: string
  genre?: string
  classification?: string
}

const missingText = '-'

export const MoreInfo = ({
  status,
  season,
  studios,
  source,
  genre,
  classification,
}: Props) => {
  const { t } = useTranslation()
  const seasonTranslated = {
    [Seasons.FALL]: t('anime.details.seasons.fall'),
    [Seasons.SPRING]: t('anime.details.seasons.spring'),
    [Seasons.SUMMER]: t('anime.details.seasons.summer'),
    [Seasons.WINTER]: t('anime.details.seasons.winter'),
  }[season?.season ?? '']

  const statusTranslated = {
    [Status.AIRING]: t('anime.details.statusLabel.airing'),
    [Status.FINISHED]: t('anime.details.statusLabel.finished'),
    [Status.NOT_YET_AIRED]: t('anime.details.statusLabel.not_yet_aired'),
  }[status ?? '']

  const classificationTranslated = {
    [Rating.ALL_AGES]: t('anime.details.rating.all_ages'),
    [Rating.CHILDREN]: t('anime.details.rating.children'),
    [Rating.TEENS]: t('anime.details.rating.teens'),
    [Rating.YOUNG]: t('anime.details.rating.young'),
    [Rating.YOUNG_MAN]: t('anime.details.rating.young_man'),
  }[classification ?? '']

  return (
    <YStack py="$3" gap="$1.5">
      <Text fontWeight="$6" mb="$2">
        {t('anime.details.moreInfo')}
      </Text>
      <XStack ai="center" jc="space-between">
        <Text color="$gray11">{t('anime.details.status')}</Text>
        <Text>{statusTranslated ?? missingText}</Text>
      </XStack>
      <XStack ai="center" jc="space-between">
        <Text color="$gray11">{t('anime.details.season')}</Text>
        <Text>
          {season ? `${seasonTranslated} ${season?.year}` : missingText}
        </Text>
      </XStack>
      <XStack ai="center" jc="space-between">
        <Text color="$gray11">{t('anime.details.studios')}</Text>
        <Text>
          {studios ? studios?.map((item) => item.name).join(', ') : missingText}
        </Text>
      </XStack>
      <XStack ai="center" jc="space-between">
        <Text color="$gray11">{t('anime.details.source')}</Text>
        <Text>{source?.toUpperCase() ?? missingText}</Text>
      </XStack>
      <XStack ai="center" jc="space-between">
        <Text color="$gray11">{t('anime.details.genre')}</Text>
        <Text>{genre ?? missingText}</Text>
      </XStack>
      <XStack ai="center" jc="space-between">
        <Text color="$gray11">{t('anime.details.classification')}</Text>
        <Text>{classificationTranslated ?? missingText}</Text>
      </XStack>
    </YStack>
  )
}
