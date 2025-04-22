import { useTranslation } from 'react-i18next'

import { useTheme, XStack, YStack } from 'tamagui'
import { BarChart2, ThumbsUp, TrendingUp, Users } from '@tamagui/lucide-icons'

import { Text } from '@/components'
import { formatString } from '@/utils/formatters'

type Props = {
  ranking?: number
  favorites?: number
  members?: number
  popularity?: number
}

const missingText = '-'

export const AnimeNumbers = ({ ranking, favorites, members, popularity }: Props) => {
  const { t } = useTranslation()
  const theme = useTheme()

  return (
    <XStack
      px="$2"
      jc="space-between"
      ai="center"
      animation="lazy"
      enterStyle={{
        y: -20,
        o: 0,
      }}
      o={1}
      y={0}
    >
      <YStack ai="center" gap="$1.5">
        <BarChart2 size="$icon.sm" strokeWidth={3} col={ranking ? '$blue10' : '$blue6'} />
        <Text fow="$6" mt="$2">
          {ranking ? `#${formatString(ranking)}` : missingText}
        </Text>
        <Text col="$gray11">{t('anime.details.ranking')}</Text>
      </YStack>
      <YStack ai="center" gap="$1.5">
        <ThumbsUp
          size="$icon.sm"
          col={favorites ? '$blue10' : '$blue6'}
          fill={favorites ? theme.blue10.val : theme.blue6.val}
        />
        <Text fow="$6" mt="$2">
          {favorites ? `${formatString(favorites)}K` : missingText}
        </Text>
        <Text col="$gray11">{t('anime.details.favorites')}</Text>
      </YStack>
      <YStack ai="center" gap="$1.5">
        <Users
          size="$icon.sm"
          col={members ? '$blue10' : '$blue6'}
          fill={members ? theme.blue10.val : theme.blue6.val}
        />
        <Text fow="$6" mt="$2">
          {members ? `${formatString(members)}K` : missingText}
        </Text>
        <Text col="$gray11">{t('anime.details.members')}</Text>
      </YStack>
      <YStack ai="center" gap="$1.5">
        <TrendingUp size="$icon.sm" col={popularity ? '$blue10' : '$blue6'} />
        <Text fow="$6" mt="$2">
          {popularity ? `#${formatString(popularity)}` : missingText}
        </Text>
        <Text col="$gray11">{t('anime.details.popularity')}</Text>
      </YStack>
    </XStack>
  )
}
