import { useObservable } from '@legendapp/state/react'
import { AxiosResponse } from 'axios'

type VariablesProps = Record<string, string | number>
type DataProps = Record<string, string | number>

export type FetchProps = {
  init?: boolean
  refreshControl?: boolean
  variables: VariablesProps
  service: (variables: any) => Promise<AxiosResponse>
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
  data: DataProps[]
}

interface ResponseProps extends AxiosResponse {
  data: {
    paging: {
      next: string
      previous: string
    }
    data: []
  }
}

export const usePagination = (): UsePaginationProps => {
  const loadingObs = useObservable(false)
  const refreshingManualObs = useObservable(false)
  const refreshingObs = useObservable(false)
  const canPaginateObs = useObservable(true)
  const paginationObs = useObservable({
    offset: 0,
    limit: 10,
    finished: false,
  })
  const dataObs = useObservable([])

  const [setLoading, loading] = [loadingObs.set, loadingObs.get()]
  const [setRefreshingManual, refreshingManual] = [
    refreshingManualObs.set,
    refreshingManualObs.get(),
  ]
  const [setRefreshing, refreshing] = [refreshingObs.set, refreshingObs.get()]
  const [setCanPaginate, canPaginate] = [
    canPaginateObs.set,
    canPaginateObs.get(),
  ]
  const [setPagination, pagination] = [paginationObs.set, paginationObs.get()]
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
      offset: init ? 0 : pagination.offset + 1,
      limit: pagination.limit,
      ...variables,
    }

    service(variablesLocal)
      .then((response: ResponseProps) => {
        setRefreshingManual(false)
        setRefreshing(false)
        setCanPaginate(!!response.data.paging.next)
        setPagination({
          ...pagination,
          offset: Number(variables.offset),
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
