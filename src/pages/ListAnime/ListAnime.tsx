import { observer } from '@legendapp/state/react'
import { useQueryClient } from '@tanstack/react-query'

import { Stack, YStack } from 'tamagui'

import { Search } from '@components'
import { useAnimeList } from '@hooks'
import { useLegendState } from '@hooks/useLegendState'

import { AnimeList } from './AnimeList'

const LIMIT = 10

export const ListAnime = observer(() => {
  const queryClient = useQueryClient()
  const [refreshingManual, setRefreshingManual] = useLegendState(false)
  const [search, setSearch] = useLegendState('')

  const {
    refetch,
    isFetching,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
    data,
  } = useAnimeList({ search, enabled: false })

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
      <Stack px="$4" py="$4">
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
        limit={LIMIT}
      />
    </YStack>
  )
})
