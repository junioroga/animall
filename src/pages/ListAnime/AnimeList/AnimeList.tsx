import { useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { ListRenderItem } from 'react-native'

import { observer } from '@legendapp/state/react'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { getTokens, Separator, Stack, YStack } from 'tamagui'

import { EmptyState, EmptyStateTypes, Loading, VerticalCard } from '@/components'
import { AnimeData } from '@/hooks/useAnimeList/types'

import { AnimeDataPrepared, preparedData } from './data'
import { Skeleton } from './Skeleton'

import { useResponsiveCardsContext } from '@/context/ResponsiveCards'
import Animated, { LinearTransition } from 'react-native-reanimated'

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
    const { bottom } = useSafeAreaInsets()
    const { numberVerticalColumns, heightVerticalCard } = useResponsiveCardsContext()

    const renderItem: ListRenderItem<AnimeDataPrepared> = useCallback(
      ({ item }) => (
        <Stack mr="$2.5">
          <VerticalCard item={item} />
        </Stack>
      ),
      []
    )

    const renderSeparator = useCallback(() => <Separator my="$2" />, [])

    const renderEmpty = useCallback(
      () => (
        <YStack f={1} ai="center" jc="center">
          {isLoading ? (
            <Skeleton />
          ) : (
            <EmptyState type={EmptyStateTypes.NO_SEARCH} message={t('anime.notSearched')} />
          )}
        </YStack>
      ),
      [isLoading, t]
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
      (item: AnimeDataPrepared, index: number) => `${String(item.id)}${index}`,
      []
    )

    const formattedData = useMemo(() => (data ? preparedData(data) : []), [data])

    const onEndReached = useCallback(() => {
      if (hasNextPage) {
        if (!isFetchingNextPage) {
          fetchNextPage?.()
        }
      }
    }, [isFetchingNextPage, hasNextPage, fetchNextPage])

    const getItemLayout = useCallback(
      (_: any, index: number) => ({
        length: heightVerticalCard,
        offset: heightVerticalCard * index,
        index,
      }),
      [heightVerticalCard]
    )

    return (
      <Animated.FlatList
        key={numberVerticalColumns}
        keyExtractor={keyExtractor}
        data={isLoading ? [] : formattedData}
        numColumns={numberVerticalColumns}
        renderItem={renderItem}
        getItemLayout={getItemLayout}
        ItemSeparatorComponent={renderSeparator}
        ListEmptyComponent={renderEmpty}
        ListFooterComponent={renderFooter}
        refreshing={refreshingManual}
        onRefresh={onRefresh}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.5}
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: getTokens().space.$4.val,
          paddingBottom: getTokens().space.$11.val + bottom,
        }}
        initialNumToRender={limit}
        showsVerticalScrollIndicator={false}
        keyboardDismissMode="on-drag"
        itemLayoutAnimation={LinearTransition}
      />
    )
  }
)
