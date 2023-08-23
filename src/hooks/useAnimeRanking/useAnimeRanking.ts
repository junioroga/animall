import { animeService } from '@services'
import { Fields, RankingType } from '@services/types'
import { useInfiniteQuery } from '@tanstack/react-query'
import flatMap from 'lodash/flatMap'
import map from 'lodash/map'

import { AnimeRanking } from './types'

type AnimeRankingHookProps = {
  rankingType: RankingType
  limit?: number
  enabled?: boolean
}

export const useAnimeRanking = ({
  rankingType,
  limit = 6,
  enabled = true,
}: AnimeRankingHookProps) => {
  const getRankingAnimes = async ({ pageParam = 0 }) => {
    const data = await animeService.getRanking({
      ranking_type: rankingType,
      fields: `${Fields.ID},${Fields.TITLE},${Fields.ALTERNATIVE_TITLES},${Fields.MAIN_PICTURE},${Fields.MEAN},${Fields.START_DATE},${Fields.STUDIOS}`,
      limit,
      offset: pageParam,
    })

    return {
      data: data.data,
      paging: data.paging,
      nextPage: pageParam + limit,
    }
  }

  return useInfiniteQuery(['ranking-list'], getRankingAnimes, {
    select: (data) => {
      const flattenData = flatMap(data?.pages, (page) => page.data)
      const newData: AnimeRanking[] = map(flattenData, (item) => ({
        ...item.node,
        ...item.ranking,
      }))

      return {
        pages: newData,
        pageParams: data.pageParams,
      }
    },
    enabled,
    getNextPageParam: (lastPage) =>
      lastPage.paging?.next ? lastPage.nextPage : false,
  })
}
