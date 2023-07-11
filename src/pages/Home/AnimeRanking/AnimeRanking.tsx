import { Text } from '@components'
import { AnimeData } from '@hooks/types'
import { useAnimeRanking } from '@hooks/useAnimeRanking'
import { observer } from '@legendapp/state/react'
import { RankingType } from '@services/types'
import { tokens } from '@tamagui/themes'
import { useCallback, useEffect, useMemo, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { FlatList, ListRenderItem } from 'react-native'
import { Spinner, YStack, Separator, useTheme } from 'tamagui'

import { HorizontalCard } from './HorizontalCard'
import { VerticalCard } from './VerticalCard'

type Props = {
  rankingType: RankingType
  cardType: 'horizontal' | 'vertical'
}

export const AnimeRanking = observer(({ rankingType, cardType }: Props) => {
  const { getRanking, loading, data } = useAnimeRanking()
  const { t } = useTranslation()
  const theme = useTheme()
  const refCard = useRef({ height: 0, width: 0 })

  useEffect(() => {
    getRanking({ init: true, rankingType })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const renderItem: ListRenderItem<AnimeData> = ({ item }) =>
    cardType === 'horizontal' ? (
      <HorizontalCard item={item} refCard={refCard} />
    ) : (
      <VerticalCard item={item} refCard={refCard} />
    )

  const renderSeparator = () => <Separator marginHorizontal="$1.5" />

  const renderEmpty = () => {
    return (
      <YStack h="$14" w="100%" ai="center" jc="center">
        {loading ? (
          <Spinner alignSelf="center" />
        ) : (
          <Text>{t('anime.notFound')}</Text>
        )}
      </YStack>
    )
  }

  const keyExtractor = useCallback(
    (item: AnimeData, index: number) => `${String(item.node.id)}${index}`,
    [],
  )

  const formattedData = useMemo(() => data, [data])

  return (
    <FlatList
      keyExtractor={keyExtractor}
      data={loading ? [] : formattedData}
      horizontal
      renderItem={renderItem}
      ItemSeparatorComponent={renderSeparator}
      ListEmptyComponent={renderEmpty}
      contentContainerStyle={{
        flexGrow: 1,
        backgroundColor: theme.background.get(),
        paddingVertical: tokens.space[3].val,
        paddingHorizontal: tokens.space[4].val,
      }}
      showsHorizontalScrollIndicator={false}
    />
  )
})
