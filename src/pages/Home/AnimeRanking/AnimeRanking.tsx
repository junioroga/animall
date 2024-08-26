import { useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { FlatList, ListRenderItem } from 'react-native'

import { observer } from '@legendapp/state/react'

import { getTokens, Separator, useMedia, useTheme } from 'tamagui'

import { EmptyState, EmptyStateTypes, HorizontalCard, VerticalCard } from '@/components'
import { QueryKeysRanking, useAnimeRanking } from '@/hooks'
import { CardType, RankingType } from '@/services/types'

import { AnimeRankingPrepared, preparedData } from './data'
import { SkeletonHorizontal } from './SkeletonHorizontal'
import { SkeletonVertical } from './SkeletonVertical'

import { useResponsiveCardsContext } from '@/context/ResponsiveCards'

type Props = {
  rankingType: RankingType
  cardType: CardType
}

export const AnimeRanking = observer(({ rankingType, cardType }: Props) => {
  const { isHandsetOrTablet } = useMedia()
  const limit = useMemo(() => (isHandsetOrTablet ? 10 : 20), [isHandsetOrTablet])
  const { isLoading, data } = useAnimeRanking({
    queryKey: QueryKeysRanking.RANKING_HOME,
    rankingType,
    limit,
  })
  const { widthHorizontalCard, widthVerticalCard } = useResponsiveCardsContext()
  const itemWidth = useMemo(
    () => (cardType === CardType.HORIZONTAL ? widthVerticalCard : widthHorizontalCard),
    [cardType, widthVerticalCard, widthHorizontalCard]
  )

  const { t } = useTranslation()
  const theme = useTheme()

  const renderItem: ListRenderItem<AnimeRankingPrepared> = useCallback(
    ({ item }) =>
      cardType === CardType.HORIZONTAL ? (
        <HorizontalCard item={item} />
      ) : (
        <VerticalCard item={item} />
      ),
    [cardType]
  )

  const renderSeparator = useCallback(() => <Separator mx="$1.5" />, [])

  const renderEmpty = useCallback(
    () =>
      isLoading ? (
        cardType === CardType.HORIZONTAL ? (
          <SkeletonHorizontal />
        ) : (
          <SkeletonVertical />
        )
      ) : (
        <EmptyState type={EmptyStateTypes.ERROR} message={t('anime.notFound')} />
      ),
    [isLoading, t, cardType]
  )

  const keyExtractor = useCallback(
    (item: AnimeRankingPrepared, index: number) => `${String(item.id)}${index}`,
    []
  )

  const formattedData = useMemo(() => (data?.pages ? preparedData(data.pages) : []), [data])

  const getItemLayout = useCallback(
    (_: any, index: number) => ({
      length: itemWidth,
      offset: itemWidth * index,
      index,
    }),
    [itemWidth]
  )

  return (
    <FlatList
      keyExtractor={keyExtractor}
      data={isLoading ? [] : formattedData}
      horizontal
      renderItem={renderItem}
      getItemLayout={getItemLayout}
      ItemSeparatorComponent={renderSeparator}
      ListEmptyComponent={renderEmpty}
      contentContainerStyle={{
        paddingHorizontal: getTokens().space.$4.val,
        paddingVertical: getTokens().space.$3.val,
        backgroundColor: theme.background.val,
      }}
      initialNumToRender={10}
      showsHorizontalScrollIndicator={false}
    />
  )
})
