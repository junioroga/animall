import { useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { FlatList, ListRenderItem } from 'react-native'

import { observer } from '@legendapp/state/react'

import { getTokens, Separator, useTheme, YStack } from 'tamagui'

import {
  EmptyState,
  HorizontalCard,
  Loading,
  Types,
  VerticalCard,
  WIDTH_HORIZONTAL_CARD,
  WIDTH_VERTICAL_CARD,
} from '@components'
import { QueryKeysRanking, useAnimeRanking } from '@hooks'
import { CardType, RankingType } from '@services/types'

import { AnimeRankingPrepared, preparedData } from './data'

type Props = {
  rankingType: RankingType
  cardType: CardType
}

export const AnimeRanking = observer(({ rankingType, cardType }: Props) => {
  const { isLoading, data } = useAnimeRanking({
    queryKey: QueryKeysRanking.RANKING_HOME,
    rankingType,
  })
  const { t } = useTranslation()
  const theme = useTheme()
  const itemWidth = useMemo(
    () =>
      cardType === CardType.HORIZONTAL
        ? WIDTH_VERTICAL_CARD
        : WIDTH_HORIZONTAL_CARD,
    [cardType],
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
    () => (
      <YStack h="$14" w="100%" ai="center" jc="center">
        {isLoading ? (
          <Loading />
        ) : (
          <EmptyState type={Types.ERROR} message={t('anime.notFound')} />
        )}
      </YStack>
    ),
    [isLoading, t],
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
        backgroundColor: theme.background.get(),
        paddingVertical: getTokens().space[3].val,
        paddingHorizontal: getTokens().space[4].val,
      }}
      showsHorizontalScrollIndicator={false}
      initialNumToRender={10}
    />
  )
})
