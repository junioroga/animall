import { useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { FlatList, ListRenderItem } from 'react-native'

import { observer } from '@legendapp/state/react'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { getTokens, Separator, Stack, YStack } from 'tamagui'

import {
  EmptyState,
  EmptyStateTypes,
  HEIGHT_VERTICAL_CARD,
  Loading,
  VerticalCard,
} from '@components'
import { AnimeData } from '@hooks/useAnimeList/types'

import { AnimeRankingPrepared, preparedData } from './data'

type Props = Partial<Omit<ReturnType<typeof useInfiniteQuery>, 'data'>> & {
  limit: number
  data?: AnimeData[]
  onRefresh: () => void
  refreshingManual: boolean
}

export const AnimeRanking = observer(
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
    const { bottom } = useSafeAreaInsets()

    const renderItem: ListRenderItem<AnimeRankingPrepared> = useCallback(
      ({ item }) => (
        <Stack mr="$2.5">
          <VerticalCard item={item} />
        </Stack>
      ),
      [],
    )

    const renderSeparator = useCallback(() => <Separator py="$1.5" />, [])

    const renderEmpty = useCallback(
      () => (
        <YStack f={1} ai="center" jc="center">
          {isLoading ? (
            <Loading />
          ) : (
            <EmptyState
              type={EmptyStateTypes.ERROR}
              message={t('anime.notFound')}
            />
          )}
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
      (item: AnimeRankingPrepared, index: number) =>
        `${String(item.id)}${index}`,
      [],
    )

    const formattedData = useMemo(
      () => (data ? preparedData(data) : []),
      [data],
    )

    const onEndReached = useCallback(() => {
      if (hasNextPage) {
        if (!isFetchingNextPage) {
          fetchNextPage?.()
        }
      }
    }, [hasNextPage, isFetchingNextPage, fetchNextPage])

    const getItemLayout = useCallback(
      (_: any, index: number) => ({
        length: HEIGHT_VERTICAL_CARD,
        offset: HEIGHT_VERTICAL_CARD * index,
        index,
      }),
      [],
    )

    return (
      <FlatList
        keyExtractor={keyExtractor}
        data={isLoading ? [] : formattedData}
        numColumns={3}
        renderItem={renderItem}
        getItemLayout={getItemLayout}
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
          paddingBottom: getTokens().space[11].val + bottom,
        }}
        showsVerticalScrollIndicator={false}
      />
    )
  },
)
