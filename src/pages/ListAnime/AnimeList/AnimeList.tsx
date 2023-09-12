import { useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { FlatList, ListRenderItem } from 'react-native'

import { observer } from '@legendapp/state/react'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { getTokens, Separator, Stack, YStack } from 'tamagui'

import {
  EmptyState,
  HEIGHT_VERTICAL_CARD,
  Loading,
  Types,
  VerticalCard,
} from '@components'
import { AnimeData } from '@hooks/useAnimeList/types'

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
    const { bottom } = useSafeAreaInsets()

    const renderItem: ListRenderItem<AnimeDataPrepared> = useCallback(
      ({ item }) => (
        <Stack mr="$2.5">
          <VerticalCard item={item} />
        </Stack>
      ),
      [],
    )

    const renderSeparator = useCallback(() => <Separator my="$1.5" />, [])

    const renderEmpty = useCallback(
      () => (
        <YStack f={1} ai="center" jc="center">
          {isLoading ? (
            <Loading />
          ) : (
            <EmptyState type={Types.ERROR} message={t('anime.notFound')} />
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
      (item: AnimeDataPrepared, index: number) => `${String(item.id)}${index}`,
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
    }, [isFetchingNextPage, hasNextPage, fetchNextPage])

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
