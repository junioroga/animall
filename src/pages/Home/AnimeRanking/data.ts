import { AnimeRanking } from '@hooks/types'
import { formatDistanceToNow, isValid } from 'date-fns'
import map from 'lodash/map'

export interface AnimeRankingPrepared extends AnimeRanking {
  fullDate: string
}

export const preparedData = (data: AnimeRanking[]): AnimeRankingPrepared[] =>
  map(data, (item) => {
    const fullDate = isValid(new Date(item.start_date))
      ? formatDistanceToNow(new Date(item.start_date), {
          includeSeconds: true,
          addSuffix: true,
        })
      : ''

    return {
      ...item,
      fullDate,
    }
  })
