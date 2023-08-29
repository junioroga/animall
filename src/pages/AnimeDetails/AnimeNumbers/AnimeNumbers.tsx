import { Text } from '@components'
import { BarChart2, ThumbsUp, TrendingUp, Users2 } from '@tamagui/lucide-icons'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { YStack, XStack } from 'tamagui'

type Props = {
  ranking?: number
  favorites?: number
  members?: number
  popularity?: number
}

const missingText = '-'

export const AnimeNumbers = ({
  ranking,
  favorites,
  members,
  popularity,
}: Props) => {
  const { t } = useTranslation()

  return (
    <XStack py="$4" px="$2" gap="$4" jc="space-between" ai="center">
      <YStack ai="center" gap="$1.5">
        <BarChart2
          size="$1"
          strokeWidth={3}
          color={ranking ? '$blue10' : '$blue6'}
        />
        <Text fontWeight="$6" mt="$2">
          {ranking ? `#${ranking.toLocaleString()}` : missingText}
        </Text>
        <Text color="$gray11">{t('anime.details.ranking')}</Text>
      </YStack>
      <YStack ai="center" gap="$1.5">
        <ThumbsUp size="$1" color={favorites ? '$blue10' : '$blue6'} />
        <Text fontWeight="$6" mt="$2">
          {favorites ? `${favorites.toLocaleString()}K` : missingText}
        </Text>
        <Text color="$gray11">{t('anime.details.favorites')}</Text>
      </YStack>
      <YStack ai="center" gap="$1.5">
        <Users2 size="$1" color={members ? '$blue10' : '$blue6'} />
        <Text fontWeight="$6" mt="$2">
          {members ? `${members.toLocaleString()}K` : missingText}
        </Text>
        <Text color="$gray11">{t('anime.details.members')}</Text>
      </YStack>
      <YStack ai="center" gap="$1.5">
        <TrendingUp size="$1" color={popularity ? '$blue10' : '$blue6'} />
        <Text fontWeight="$6" mt="$2">
          {popularity ? `#${popularity.toLocaleString()}` : missingText}
        </Text>
        <Text color="$gray11">{t('anime.details.popularity')}</Text>
      </YStack>
    </XStack>
  )
}
