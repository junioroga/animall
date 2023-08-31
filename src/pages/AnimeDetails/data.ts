import { t } from 'i18next'

import { AnimeData } from '@hooks/useAnimeList/types'

export interface AnimeDetailsPrepared extends AnimeData {
  rating: string
}

export const preparedData = (data: AnimeData): AnimeDetailsPrepared => {
  return {
    ...data,
    rating: data?.mean?.toFixed(2) ?? t('anime.notEvaluated'),
  }
}
