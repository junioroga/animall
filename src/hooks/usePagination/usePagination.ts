import { useObservable } from '@legendapp/state/react'
import { AxiosResponse } from 'axios'

type VariablesProps = Record<string, unknown>

export type FetchProps = {
  init?: boolean
  refreshControl?: boolean
  variables: VariablesProps
  service: (variables: any) => Promise<AxiosResponse>
}

type Data = {
  node: object
  ranking: object
}

export type UsePaginationProps = {
  fetch: ({ init, refreshControl, variables, service }: FetchProps) => void
  loading: boolean
  refreshingManual: boolean
  refreshing: boolean
  canPaginate: boolean
  pagination: {
    offset: number
    limit: number
    finished: boolean
  }
  data: Data[]
}

type Props = {
  limit?: number
}

export const usePagination = ({ limit = 10 }: Props): UsePaginationProps => {
  const loadingObs = useObservable(false)
  const refreshingManualObs = useObservable(false)
  const refreshingObs = useObservable(false)
  const canPaginateObs = useObservable(true)
  const paginationObs = useObservable({
    offset: 0,
    limit,
    finished: false,
  })
  const dataObs = useObservable([])

  const [loading, setLoading] = [loadingObs.get(), loadingObs.set]
  const [refreshingManual, setRefreshingManual] = [
    refreshingManualObs.get(),
    refreshingManualObs.set,
  ]
  const [refreshing, setRefreshing] = [refreshingObs.get(), refreshingObs.set]
  const [canPaginate, setCanPaginate] = [
    canPaginateObs.get(),
    canPaginateObs.set,
  ]
  const [pagination, setPagination] = [paginationObs.get(), paginationObs.set]
  const [data, setData] = [dataObs.get(), dataObs.set]

  const fetch = ({
    init = false,
    refreshControl = false,
    variables,
    service,
  }: FetchProps) => {
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

    const variablesLocal = {
      offset: init ? 0 : pagination.offset + pagination.limit,
      limit: pagination.limit,
      ...variables,
    }

    service(variablesLocal)
      .then((response) => {
        setRefreshingManual(false)
        setRefreshing(false)
        setCanPaginate(!!response.data.paging.next)
        setPagination({
          ...pagination,
          offset: Number(variablesLocal.offset),
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
    fetch,
    loading,
    refreshingManual,
    refreshing,
    canPaginate,
    pagination,
    data,
  }
}
