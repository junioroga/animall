import { useTranslation } from 'react-i18next'

import { getTokens, ScrollView, XStack, YStack } from 'tamagui'

import { Text, VerticalCard } from '@/components'
import { Recommendations as RecommendationsType } from '@/hooks/useAnimeList/types'
import { AnimeRankingPrepared } from '@/pages/Home/AnimeRanking/data'

type Props = {
  recommendations: RecommendationsType[]
}

export const Recommendations = ({ recommendations }: Props) => {
  const { t } = useTranslation()

  return (
    <YStack pt="$4">
      <Text fow="$6" ml="$4">
        {t('anime.details.recommendations')}
      </Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          fg: 1,
          py: getTokens().space.$3.val,
          px: getTokens().space.$4.val,
        }}
        showsHorizontalScrollIndicator={false}
      >
        <XStack gap="$2">
          {recommendations.map((anime) => {
            const animeRanking = {
              customTitle: anime.node.title,
              ...anime.node,
            } as unknown as AnimeRankingPrepared

            return <VerticalCard key={anime.node.id} item={animeRanking} pushNavigation />
          })}
        </XStack>
      </ScrollView>
    </YStack>
  )
}
