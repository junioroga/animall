import { useInfiniteQuery } from '@tanstack/react-query'
import flatMap from 'lodash/flatMap'
import map from 'lodash/map'

import { animeService } from '@services'
import { Fields } from '@services/types'

import { AnimeData } from './types'

type AnimeListHookProps = {
  search: string
  limit?: number
  enabled?: boolean
}

export const useAnimeList = ({
  search,
  limit = 10,
  enabled = true,
}: AnimeListHookProps) => {
  const getListAnimes = async ({ pageParam = 0 }) => {
    const data = await animeService.getAll({
      q: search,
      fields: `${Fields.ID},${Fields.TITLE},${Fields.ALTERNATIVE_TITLES},${Fields.MAIN_PICTURE},${Fields.START_DATE},${Fields.END_DATE},${Fields.NUM_EPISODES},${Fields.MEAN}`,
      limit,
      offset: pageParam,
    })

    return {
      data: data.data,
      paging: data.paging,
      nextPage: pageParam + limit,
    }
  }

  return useInfiniteQuery(['anime-list'], getListAnimes, {
    select: (data) => {
      const flattenData = flatMap(data?.pages, (page) => page.data)
      const newData: AnimeData[] = map(flattenData, (item) => ({
        ...item.node,
      }))

      return {
        pages: newData,
        pageParams: data.pageParams,
      }
    },
    enabled,
    getNextPageParam: (lastPage) =>
      lastPage.paging?.next ? lastPage.nextPage : false,
    staleTime: Infinity,
  })
}
