import { useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { FlatList, ListRenderItem } from 'react-native'

import { observer } from '@legendapp/state/react'

import { getTokens, Separator, useTheme, YStack } from 'tamagui'

import {
  HorizontalCard,
  Loading,
  Text,
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
  const itemHeight = useMemo(
    () =>
      cardType === CardType.HORIZONTAL
        ? WIDTH_HORIZONTAL_CARD
        : WIDTH_VERTICAL_CARD,
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

  const renderSeparator = useCallback(
    () => <Separator marginHorizontal="$1.5" />,
    [],
  )

  const renderEmpty = useCallback(() => {
    return (
      <YStack h="$14" w="100%" ai="center" jc="center">
        {isLoading ? <Loading /> : <Text>{t('anime.notFound')}</Text>}
      </YStack>
    )
  }, [t, isLoading])

  const keyExtractor = useCallback(
    (item: AnimeRankingPrepared, index: number) => `${String(item.id)}${index}`,
    [],
  )

  const getItemLayout = useCallback(
    (_: any, index: number) => ({
      length: itemHeight,
      offset: itemHeight * index,
      index,
    }),
    [itemHeight],
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
