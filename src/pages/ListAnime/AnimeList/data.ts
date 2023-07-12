import { AnimeData } from '@hooks/types'
import format from 'date-fns/format'
import { t } from 'i18next'
import map from 'lodash/map'

export interface AnimeDataPrepared extends AnimeData {
  startAt: string
  endAt: string
}

export const preparedData = (data: AnimeData[]): AnimeDataPrepared[] =>
  map(data, (item) => {
    const startAt = item.start_date
      ? format(new Date(item.start_date), 'dd/MM/yyyy')
      : ''
    const endAt = item.end_date
      ? format(new Date(item.end_date), 'dd/MM/yyyy')
      : t('anime.producing')

    return {
      ...item,
      startAt,
      endAt,
    }
  })
