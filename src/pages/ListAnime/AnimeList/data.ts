import format from 'date-fns/format'
import { t } from 'i18next'
import map from 'lodash/map'
import uniqueId from 'lodash/uniqueId'

import { AnimeData } from '@/hooks/useAnimeList/types'

export interface AnimeDataPrepared extends AnimeData {
  rating: string
  startAt: string
  endAt: string
  customId: string
  customTitle: string
}

export const preparedData = (data: AnimeData[]): AnimeDataPrepared[] =>
  map(data, (item) => {
    const startAt = item.start_date
      ? format(new Date(item.start_date), 'dd/MM/yyyy')
      : ''
    const endAt = item.end_date
      ? format(new Date(item.end_date), 'dd/MM/yyyy')
      : t('anime.producing')

    const customTitle = item.title || item?.alternative_titles?.en || ''
    const customId = uniqueId(customTitle)

    return {
      ...item,
      rating: item?.mean?.toFixed(2) || t('anime.notEvaluated'),
      startAt,
      endAt,
      customId,
      customTitle,
    }
  })
