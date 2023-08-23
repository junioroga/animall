import { useAnimeList } from '@hooks'
import { observer, useObservable } from '@legendapp/state/react'
import { RootStackParamList } from '@navigators/Home'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useQueryClient } from '@tanstack/react-query'
import { YStack, Stack } from 'tamagui'

import { AnimeList } from './AnimeList'
import { Search } from './Search'

type Props = NativeStackScreenProps<RootStackParamList, 'ListAnime'>

const LIMIT = 10

export const ListAnime = observer(({ route }: Props) => {
  const queryClient = useQueryClient()
  const userSearch = route.params.userSearch
  const refreshingManualObs = useObservable(false)
  const [refreshingManual, setRefreshingManual] = [
    refreshingManualObs.get(),
    refreshingManualObs.set,
  ]
  const searchObs = useObservable(userSearch ?? '')
  const [search, setSearch] = [searchObs.get(), searchObs.set]
  const {
    refetch,
    isLoading,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
    data,
  } = useAnimeList({ search })

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
      <Stack p="$4">
        <Search
          handleSearch={handleSearch}
          search={search}
          setSearch={setSearch}
        />
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
