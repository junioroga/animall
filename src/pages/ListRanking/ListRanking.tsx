import { observer } from '@legendapp/state/react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useQueryClient } from '@tanstack/react-query'

import { Button, YStack } from 'tamagui'
import { SlidersHorizontal } from '@tamagui/lucide-icons'

import { Header } from '@/components'
import { QueryKeysRanking, useAnimeRanking } from '@/hooks'
import { useLegendState } from '@/hooks/useLegendState'
import { RootStackParamListHome } from '@/navigators/Home'

import { AnimeRanking } from './AnimeRanking'
import { FiltersSheet } from './FiltersSheet'

type Props = NativeStackScreenProps<RootStackParamListHome, 'ListRanking'>

const LIMIT = 15

export const ListRanking = observer(({ route }: Props) => {
  const { rankingType } = route.params
  const queryClient = useQueryClient()
  const [refreshingManual, setRefreshingManual] = useLegendState(false)
  const [sheetOpen, setSheetOpen] = useLegendState(false)
  const [rankingSelected, setRankingSelected] = useLegendState(rankingType)

  const {
    refetch,
    isFetching,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
    data,
  } = useAnimeRanking({
    queryKey: QueryKeysRanking.RANKING_LIST,
    rankingType: rankingSelected,
    limit: LIMIT,
  })

  const refetchQuery = () => {
    queryClient.removeQueries({ queryKey: [QueryKeysRanking.RANKING_LIST] })
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
      <Header
        right={
          <Button unstyled onPress={() => setSheetOpen(true)}>
            <SlidersHorizontal size="$1" />
          </Button>
        }
      />
      <AnimeRanking
        isLoading={isFetching && !isFetchingNextPage}
        isFetchingNextPage={isFetchingNextPage}
        hasNextPage={hasNextPage}
        fetchNextPage={fetchNextPage}
        data={data?.pages}
        onRefresh={onRefresh}
        refreshingManual={refreshingManual}
        limit={LIMIT}
      />
      <FiltersSheet
        open={sheetOpen}
        selected={rankingSelected}
        setOpen={setSheetOpen}
        setSelected={setRankingSelected}
      />
    </YStack>
  )
})
