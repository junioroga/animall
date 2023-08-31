import { useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { FlatList, ListRenderItem } from 'react-native'

import { observer } from '@legendapp/state/react'
import { useInfiniteQuery } from '@tanstack/react-query'

import { getTokens, Separator, YStack } from 'tamagui'

import { Loading, Text } from '@components'
import { AnimeData } from '@hooks/useAnimeList/types'

import { CardAnime } from './CardAnime'
import { AnimeDataPrepared, preparedData } from './data'

type Props = Partial<Omit<ReturnType<typeof useInfiniteQuery>, 'data'>> & {
  limit: number
  data?: AnimeData[]
  onRefresh: () => void
  refreshingManual: boolean
}

export const AnimeList = observer(
  ({
    isLoading,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
    data,
    onRefresh,
    refreshingManual,
    limit,
  }: Props) => {
    const { t } = useTranslation()

    const renderItem: ListRenderItem<AnimeDataPrepared> = useCallback(
      ({ item }) => <CardAnime item={item} />,
      [],
    )

    const renderSeparator = useCallback(() => <Separator py="$1.5" />, [])

    const renderEmpty = useCallback(
      () => (
        <YStack f={1} ai="center" jc="center">
          {isLoading ? <Loading /> : <Text>{t('anime.notFound')}</Text>}
        </YStack>
      ),
      [isLoading, t],
    )

    const renderFooter = useCallback(() => {
      if (isFetchingNextPage) {
        return (
          <YStack ai="center" jc="center" marginVertical="$3">
            <Loading />
          </YStack>
        )
      }

      return null
    }, [isFetchingNextPage])

    const keyExtractor = useCallback(
      (item: AnimeDataPrepared, index: number) => `${String(item.id)}${index}`,
      [],
    )

    const formattedData = useMemo(
      () => (data ? preparedData(data) : []),
      [data],
    )

    const onEndReached = () => {
      if (hasNextPage) {
        if (!isFetchingNextPage) {
          fetchNextPage?.()
        }
      }
    }

    return (
      <FlatList
        keyExtractor={keyExtractor}
        data={isLoading ? [] : formattedData}
        renderItem={renderItem}
        ItemSeparatorComponent={renderSeparator}
        ListEmptyComponent={renderEmpty}
        ListFooterComponent={renderFooter}
        refreshing={refreshingManual}
        onRefresh={onRefresh}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.5}
        initialNumToRender={limit}
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: getTokens().space[4].val,
          paddingBottom: getTokens().size[6].val,
        }}
        showsVerticalScrollIndicator={false}
      />
    )
  },
)
