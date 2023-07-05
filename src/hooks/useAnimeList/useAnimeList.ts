import { AnimeData } from '@hooks/types'
import { animeService } from '@services'
import { Fields } from '@services/types'
import { useState } from 'react'

export type AnimeListHookProps = {
  getAll: (init?: boolean, refreshControl?: boolean, search?: string) => void
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
  const [loading, setLoading] = useState(false)
  const [refreshingManual, setRefreshingManual] = useState(false)
  const [refreshing, setRefreshing] = useState(false)
  const [canPaginate, setCanPaginate] = useState(true)
  const [pagination, setPagination] = useState({
    offset: 0,
    limit: 10,
    finished: false,
  })
  const [data, setData] = useState<AnimeData[]>([])

  const getAll = (init = false, refreshControl = false, search = '') => {
    if (init) {
      if (refreshControl) {
        setRefreshingManual(true)
      } else {
        setLoading(true)
        setData([])
      }
    } else {
      if (loading || !canPaginate || refreshing || pagination.finished) {
        return false
      }

      setRefreshing(true)
    }

    const options = {
      limit: pagination.limit,
      offset: init ? 0 : pagination.offset + 1,
      q: search,
      fields: `${Fields.ID},${Fields.TITLE},${Fields.MAIN_PICTURE},${Fields.START_DATE},${Fields.END_DATE},${Fields.NUM_EPISODES},${Fields.MEAN}`,
    }

    animeService
      .getAll(options)
      .then((response) => {
        setRefreshingManual(false)
        setRefreshing(false)
        setCanPaginate(!!response.data.paging.next)
        setPagination({
          ...pagination,
          offset: options.offset,
          finished: !response.data.paging.next,
        })
        setData(init ? response.data.data : [...data, ...response.data.data])
      })
      .catch(() => {
        setRefreshingManual(false)
        setCanPaginate(false)
        setRefreshing(false)

        if (init) {
          setData([])
        }
      })
      .finally(() => {
        setLoading(false)
      })
  }

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
