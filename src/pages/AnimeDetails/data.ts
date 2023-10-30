import { t } from 'i18next'

import { AnimeData } from '@hooks/useAnimeList/types'

export interface AnimeDetailsPrepared extends AnimeData {
  ratingString: string
  averageTime: number
}

export const preparedData = (data: AnimeData): AnimeDetailsPrepared => {
  return {
    ...data,
    ratingString: data?.mean?.toFixed(2) || t('anime.notEvaluated'),
    averageTime: data?.average_episode_duration
      ? Math.round((data?.average_episode_duration ?? 0) / 60)
      : 0,
  }
}
