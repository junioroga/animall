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
  Loading,
  VerticalCard,
} from '@/components'
import { useVerticalCardDimensions } from '@/hooks'
import { AnimeData } from '@/hooks/useAnimeList/types'

import { Skeleton } from '../Skeleton'
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
    const { HEIGHT_VERTICAL_CARD, NUM_VERTICAL_COLUMNS } =
      useVerticalCardDimensions()

    const renderItem: ListRenderItem<AnimeRankingPrepared> = useCallback(
      ({ item }) => (
        <Stack mr="$2.5">
          <VerticalCard item={item} />
        </Stack>
      ),
      [],
    )

    const renderSeparator = useCallback(() => <Separator m="$1.5" />, [])

    const renderEmpty = useCallback(
      () => (
        <YStack f={1} ai="center" jc="center">
          {isLoading ? (
            <Skeleton />
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
          <YStack ai="center" jc="center" my="$3">
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
      [HEIGHT_VERTICAL_CARD],
    )

    return (
      <FlatList
        key={NUM_VERTICAL_COLUMNS}
        keyExtractor={keyExtractor}
        data={isLoading ? [] : formattedData}
        numColumns={NUM_VERTICAL_COLUMNS}
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
