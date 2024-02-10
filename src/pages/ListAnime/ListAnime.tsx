import { useMemo } from 'react'
import { useWindowDimensions } from 'react-native'

import { observer } from '@legendapp/state/react'
import { useQueryClient } from '@tanstack/react-query'

import { Stack, YStack } from 'tamagui'

import { Search } from '@/components'
import { useAnimeList, useVerticalCardDimensions } from '@/hooks'
import { useLegendState } from '@/hooks/useLegendState'

import { AnimeList } from './AnimeList'

export const ListAnime = observer(() => {
  const { height } = useWindowDimensions()
  const { HEIGHT_VERTICAL_CARD, NUM_VERTICAL_COLUMNS } =
    useVerticalCardDimensions()
  const queryClient = useQueryClient()
  const [refreshingManual, setRefreshingManual] = useLegendState(false)
  const [search, setSearch] = useLegendState('')
  const limit = useMemo(
    () => Math.round((height / HEIGHT_VERTICAL_CARD) * NUM_VERTICAL_COLUMNS),
    [height, HEIGHT_VERTICAL_CARD, NUM_VERTICAL_COLUMNS],
  )

  const {
    refetch,
    isFetching,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
    data,
  } = useAnimeList({ limit, search, enabled: false })

  const refetchQuery = () => {
    queryClient.removeQueries({ queryKey: ['anime-list'] })
    refetch()
  }

  const onRefresh = () => {
    if (data?.pages.length) {
      setRefreshingManual(true)
      refetchQuery()
      setRefreshingManual(false)
    }
  }

  return (
    <YStack f={1} bg="$background">
      <Stack p="$4">
        <Search search={search} setSearch={setSearch} onSearch={refetchQuery} />
      </Stack>
      <AnimeList
        isLoading={isFetching && !isFetchingNextPage}
        isFetchingNextPage={isFetchingNextPage}
        hasNextPage={hasNextPage}
        fetchNextPage={fetchNextPage}
        data={data?.pages}
        onRefresh={onRefresh}
        refreshingManual={refreshingManual}
        limit={limit}
      />
    </YStack>
  )
})
