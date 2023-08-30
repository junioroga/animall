import { observer, useObservable } from '@legendapp/state/react'
import { useQueryClient } from '@tanstack/react-query'

import { Stack, YStack } from 'tamagui'

import { Search } from '@components'
import { Header } from '@components/Header'
import { useAnimeList } from '@hooks'
import { Store } from '@store/index'

import { AnimeList } from './AnimeList'

const LIMIT = 10

export const ListAnime = observer(() => {
  const queryClient = useQueryClient()
  const refreshingManualObs = useObservable(false)
  const [refreshingManual, setRefreshingManual] = [
    refreshingManualObs.get(),
    refreshingManualObs.set,
  ]
  const { search } = Store.user

  const {
    refetch,
    isLoading,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
    data,
  } = useAnimeList({ search: search.get() })

  const onRefresh = () => {
    setRefreshingManual(true)
    queryClient.removeQueries({ queryKey: ['anime-list'] })
    setRefreshingManual(false)
  }

  const handleSearch = () => {
    queryClient.removeQueries({ queryKey: ['anime-list'] })
    refetch()
  }

  return (
    <YStack f={1} bg="$background">
      <Header />
      <Stack px="$4" pb="$4">
        <Search onSearch={handleSearch} />
      </Stack>
      <AnimeList
        isLoading={isLoading}
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
