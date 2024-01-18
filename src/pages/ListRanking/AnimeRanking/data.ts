import format from 'date-fns/format'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import isValid from 'date-fns/isValid'
import parse from 'date-fns/parse'
import { t } from 'i18next'
import map from 'lodash/map'

import { AnimeRanking } from '@hooks/useAnimeRanking/types'
import { DaysOfWeek } from '@services/types'

export interface AnimeRankingPrepared extends AnimeRanking {
  genresFormatted: string
  rating: string
  fullDate: string
  releaseDay: string
  releaseHour: string
}

const daysOfWeek = {
  [DaysOfWeek.MONDAY]: t('daysOfWeek.monday'),
  [DaysOfWeek.TUESDAY]: t('daysOfWeek.tuesday'),
  [DaysOfWeek.WEDNESDAY]: t('daysOfWeek.wednesday'),
  [DaysOfWeek.THURSDAY]: t('daysOfWeek.thursday'),
  [DaysOfWeek.FRIDAY]: t('daysOfWeek.friday'),
  [DaysOfWeek.SATURDAY]: t('daysOfWeek.saturday'),
  [DaysOfWeek.SUNDAY]: t('daysOfWeek.sunday'),
}

export const preparedData = (data: AnimeRanking[]): AnimeRankingPrepared[] =>
  map(data, (item) => {
    const fullDate =
      item?.start_date && isValid(new Date(item?.start_date))
        ? formatDistanceToNow(new Date(item.start_date), {
            includeSeconds: true,
            addSuffix: true,
          })
        : t('anime.noReleaseDate')

    const genresFormatted = item?.genres
      ? map(item?.genres, 'name').join(', ')
      : ''

    const releaseDay =
      daysOfWeek[(item?.broadcast?.day_of_the_week || '') as DaysOfWeek]

    const releaseHour = format(
      parse(item?.broadcast?.start_time || '00:00', 'HH:mm', new Date()),
      'HH:mm',
    )

    return {
      ...item,
      genresFormatted,
      rating: item?.mean?.toFixed(2) || t('anime.notEvaluated'),
      fullDate,
      releaseDay,
      releaseHour,
    }
  })
