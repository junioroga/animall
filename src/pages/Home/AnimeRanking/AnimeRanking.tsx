import { useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { FlatList, ListRenderItem } from 'react-native'

import { observer } from '@legendapp/state/react'

import { getTokens, Separator, useTheme, YStack } from 'tamagui'

import { HorizontalCard, Loading, Text, VerticalCard } from '@components'
import { useAnimeRanking } from '@hooks'
import { CardType, RankingType } from '@services/types'

import { AnimeRankingPrepared, preparedData } from './data'

type Props = {
  rankingType: RankingType
  cardType: CardType
}

const LIMIT = 30

export const AnimeRanking = observer(({ rankingType, cardType }: Props) => {
  const { isLoading, data } = useAnimeRanking({ rankingType, limit: LIMIT })
  const { t } = useTranslation()
  const theme = useTheme()

  const renderItem: ListRenderItem<AnimeRankingPrepared> = ({ item }) =>
    cardType === CardType.HORIZONTAL ? (
      <HorizontalCard item={item} />
    ) : (
      <VerticalCard item={item} />
    )

  const renderSeparator = () => <Separator marginHorizontal="$1.5" />

  const renderEmpty = () => {
    return (
      <YStack h="$14" w="100%" ai="center" jc="center">
        {isLoading ? <Loading /> : <Text>{t('anime.notFound')}</Text>}
      </YStack>
    )
  }

  const keyExtractor = useCallback(
    (item: AnimeRankingPrepared, index: number) => `${String(item.id)}${index}`,
    [],
  )

  const formattedData = useMemo(() => preparedData(data?.pages), [data])

  return (
    <FlatList
      keyExtractor={keyExtractor}
      data={isLoading ? [] : formattedData}
      horizontal
      renderItem={renderItem}
      ItemSeparatorComponent={renderSeparator}
      ListEmptyComponent={renderEmpty}
      contentContainerStyle={{
        flexGrow: 1,
        backgroundColor: theme.background.get(),
        paddingVertical: getTokens().space[3].val,
        paddingHorizontal: getTokens().space[4].val,
      }}
      showsHorizontalScrollIndicator={false}
      initialNumToRender={LIMIT}
    />
  )
})
