import { AnimeData } from '@hooks/types'
import { FetchProps, usePagination } from '@hooks/usePagination'
import { animeService } from '@services'
import { Fields, RankingType } from '@services/types'
import { useMemo } from 'react'

type GetRankingProps = Omit<FetchProps, 'variables' | 'service'> & {
  rankingType: RankingType
}

export type AnimeRankingHookProps = {
  getRanking: ({ init, rankingType }: GetRankingProps) => void
  loading: boolean
  refreshingManual: boolean
  refreshing: boolean
  canPaginate: boolean
  pagination: {
    offset: number
    limit: number
    finished: boolean
  }
  data: AnimeData[]
}

export const useAnimeRanking = (): AnimeRankingHookProps => {
  const {
    fetch,
    loading,
    refreshingManual,
    refreshing,
    canPaginate,
    pagination,
    data: response,
  } = usePagination()

  const getRanking = ({ init, rankingType }: GetRankingProps) => {
    fetch({
      init,
      variables: {
        ranking_type: rankingType,
        fields: `${Fields.ID},${Fields.TITLE},${Fields.ALTERNATIVE_TITLES},${Fields.MAIN_PICTURE}`,
      },
      service: animeService.getRanking,
    })
  }

  const data = useMemo(() => response as unknown as AnimeData[], [response])

  return {
    getRanking,
    loading,
    refreshingManual,
    refreshing,
    canPaginate,
    pagination,
    data,
  }
}
