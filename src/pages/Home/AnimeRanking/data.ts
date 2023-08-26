import { AnimeRanking } from '@hooks/useAnimeRanking/types'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import isValid from 'date-fns/isValid'
import { t } from 'i18next'
import map from 'lodash/map'

export interface AnimeRankingPrepared extends AnimeRanking {
  genresFormatted: string
  rating: string
  fullDate: string
}

export const preparedData = (data?: AnimeRanking[]): AnimeRankingPrepared[] =>
  map(data, (item) => {
    const fullDate = isValid(new Date(item?.start_date))
      ? formatDistanceToNow(new Date(item.start_date), {
          includeSeconds: true,
          addSuffix: true,
        })
      : t('anime.noReleaseDate')

    const genresFormatted = item?.genres
      ? map(item?.genres, 'name').join(', ')
      : ''

    return {
      ...item,
      genresFormatted,
      rating: item?.mean?.toFixed(2) || t('anime.notEvaluated'),
      fullDate,
    }
  })
