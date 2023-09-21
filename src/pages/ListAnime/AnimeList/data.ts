import format from 'date-fns/format'
import { t } from 'i18next'
import map from 'lodash/map'
import uniqueId from 'lodash/uniqueId'

import { AnimeData } from '@hooks/useAnimeList/types'

export interface AnimeDataPrepared extends AnimeData {
  rating: string
  startAt: string
  endAt: string
  uuid: string
}

export const preparedData = (data: AnimeData[]): AnimeDataPrepared[] =>
  map(data, (item) => {
    const startAt = item.start_date
      ? format(new Date(item.start_date), 'dd/MM/yyyy')
      : ''
    const endAt = item.end_date
      ? format(new Date(item.end_date), 'dd/MM/yyyy')
      : t('anime.producing')

    const uuid = uniqueId()

    return {
      ...item,
      rating: item?.mean?.toFixed(2) || t('anime.notEvaluated'),
      startAt,
      endAt,
      uuid,
    }
  })
