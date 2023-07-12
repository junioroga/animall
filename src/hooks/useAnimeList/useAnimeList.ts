import { AnimeData } from '@hooks/types'
import { FetchProps, usePagination } from '@hooks/usePagination'
import { animeService } from '@services'
import { Fields } from '@services/types'
import map from 'lodash/map'
import { useMemo } from 'react'

export type GetAnimeListProps = Omit<FetchProps, 'variables' | 'service'> & {
  search?: string
}

export type AnimeListHookProps = {
  getAll: ({ init, refreshControl, search }: GetAnimeListProps) => void
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

export const useAnimeList = (): AnimeListHookProps => {
  const {
    fetch,
    loading,
    refreshingManual,
    refreshing,
    canPaginate,
    pagination,
    data: response,
  } = usePagination({})

  const getAll = ({ init, refreshControl, search }: GetAnimeListProps) => {
    fetch({
      init,
      refreshControl,
      variables: {
        q: search,
        fields: `${Fields.ID},${Fields.TITLE},${Fields.MAIN_PICTURE},${Fields.START_DATE},${Fields.END_DATE},${Fields.NUM_EPISODES},${Fields.MEAN}`,
      },
      service: animeService.getAll,
    })
  }

  const data = useMemo(
    () => map(response, (item) => item.node) as unknown as AnimeData[],
    [response],
  )

  return {
    getAll,
    loading,
    refreshingManual,
    refreshing,
    canPaginate,
    pagination,
    data,
  }
}
