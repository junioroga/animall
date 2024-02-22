import { useMemo } from 'react'
import { useWindowDimensions } from 'react-native'

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

import { useResponsiveCardsContext } from '@/context/ResponsiveCards'

type Props = NativeStackScreenProps<RootStackParamListHome, 'ListRanking'>

export const ListRanking = observer(({ route }: Props) => {
  const { rankingType, sectionTitle } = route.params
  const queryClient = useQueryClient()
  const [refreshingManual, setRefreshingManual] = useLegendState(false)
  const [sheetOpen, setSheetOpen] = useLegendState(false)
  const [rankingSelected, setRankingSelected] = useLegendState(rankingType)
  const { height } = useWindowDimensions()
  const { heightVerticalCard, numberVerticalColumns } =
    useResponsiveCardsContext()
  const limit = useMemo(
    () => Math.round((height / heightVerticalCard) * numberVerticalColumns),
    [height, heightVerticalCard, numberVerticalColumns],
  )

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
    limit,
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
        title={sectionTitle}
        right={
          <Button onPress={() => setSheetOpen(true)}>
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
        limit={limit}
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
