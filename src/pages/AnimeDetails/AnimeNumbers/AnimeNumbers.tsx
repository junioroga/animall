import React from 'react'
import { useTranslation } from 'react-i18next'

import { useTheme, XStack, YStack } from 'tamagui'
import { BarChart2, ThumbsUp, TrendingUp, Users2 } from '@tamagui/lucide-icons'

import { Text } from '@components'

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
  const theme = useTheme()

  return (
    <XStack px="$2" jc="space-between" ai="center">
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
        <ThumbsUp
          size="$1"
          color={favorites ? '$blue10' : '$blue6'}
          fill={favorites ? theme.blue10.val : theme.blue6.val}
        />
        <Text fontWeight="$6" mt="$2">
          {favorites ? `${favorites.toLocaleString()}K` : missingText}
        </Text>
        <Text color="$gray11">{t('anime.details.favorites')}</Text>
      </YStack>
      <YStack ai="center" gap="$1.5">
        <Users2
          size="$1"
          color={members ? '$blue10' : '$blue6'}
          fill={members ? theme.blue10.val : theme.blue6.val}
        />
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
