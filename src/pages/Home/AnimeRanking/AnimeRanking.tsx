import { useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { FlatList, ListRenderItem } from 'react-native'

import { observer } from '@legendapp/state/react'

import { getTokens, Separator, useMedia, useTheme } from 'tamagui'

import {
  EmptyState,
  EmptyStateTypes,
  HorizontalCard,
  VerticalCard,
} from '@/components'
import {
  QueryKeysRanking,
  useAnimeRanking,
  useHorizontalCardDimensions,
  useVerticalCardDimensions,
} from '@/hooks'
import { CardType, RankingType } from '@/services/types'

import { AnimeRankingPrepared, preparedData } from './data'
import { SkeletonHorizontal } from './SkeletonHorizontal'
import { SkeletonVertical } from './SkeletonVertical'

type Props = {
  rankingType: RankingType
  cardType: CardType
}

export const AnimeRanking = observer(({ rankingType, cardType }: Props) => {
  const media = useMedia()
  const limit = useMemo(() => (media.isHandsetOrTablet ? 10 : 20), [media])
  const { isLoading, data } = useAnimeRanking({
    queryKey: QueryKeysRanking.RANKING_HOME,
    rankingType,
    limit,
  })
  const { WIDTH_VERTICAL_CARD } = useVerticalCardDimensions()
  const { WIDTH_HORIZONTAL_CARD } = useHorizontalCardDimensions()
  const { t } = useTranslation()
  const theme = useTheme()
  const itemWidth = useMemo(
    () =>
      cardType === CardType.HORIZONTAL
        ? WIDTH_VERTICAL_CARD
        : WIDTH_HORIZONTAL_CARD,
    [cardType, WIDTH_VERTICAL_CARD, WIDTH_HORIZONTAL_CARD],
  )

  const renderItem: ListRenderItem<AnimeRankingPrepared> = useCallback(
    ({ item }) =>
      cardType === CardType.HORIZONTAL ? (
        <HorizontalCard item={item} />
      ) : (
        <VerticalCard item={item} />
      ),
    [cardType],
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
        <EmptyState
          type={EmptyStateTypes.ERROR}
          message={t('anime.notFound')}
        />
      ),
    [isLoading, t, cardType],
  )

  const keyExtractor = useCallback(
    (item: AnimeRankingPrepared, index: number) => `${String(item.id)}${index}`,
    [],
  )

  const getItemLayout = useCallback(
    (_: any, index: number) => ({
      length: itemWidth,
      offset: itemWidth * index,
      index,
    }),
    [itemWidth],
  )

  const formattedData = useMemo(
    () => (data?.pages ? preparedData(data.pages) : []),
    [data],
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
        flexGrow: 1,
        paddingHorizontal: getTokens().space[4].val,
        paddingVertical: getTokens().space[3].val,
        backgroundColor: theme.background.get(),
      }}
      showsHorizontalScrollIndicator={false}
      initialNumToRender={limit}
    />
  )
})
