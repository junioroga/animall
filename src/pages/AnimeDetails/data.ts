import format from 'date-fns/format'
import parse from 'date-fns/parse'
import { t } from 'i18next'

import { AnimeData } from '@/hooks/useAnimeList/types'
import { Store } from '@/store/index'
import { DaysOfWeek } from '@/services/types'

export interface AnimeDetailsPrepared extends AnimeData {
  ratingString: string
  averageTime: number
  releaseDay: string
  releaseHour: string
  customTitle: string
}

export const preparedData = (data: AnimeData): AnimeDetailsPrepared => {
  const daysOfWeek = {
    [DaysOfWeek.MONDAY]: t('daysOfWeek.monday'),
    [DaysOfWeek.TUESDAY]: t('daysOfWeek.tuesday'),
    [DaysOfWeek.WEDNESDAY]: t('daysOfWeek.wednesday'),
    [DaysOfWeek.THURSDAY]: t('daysOfWeek.thursday'),
    [DaysOfWeek.FRIDAY]: t('daysOfWeek.friday'),
    [DaysOfWeek.SATURDAY]: t('daysOfWeek.saturday'),
    [DaysOfWeek.SUNDAY]: t('daysOfWeek.sunday'),
  }
  const language = Store.settings.lang.get()
  const releaseDay = daysOfWeek[(data?.broadcast?.day_of_the_week || '') as DaysOfWeek]
  const releaseHour = format(
    parse(data?.broadcast?.start_time || '00:00', 'HH:mm', new Date()),
    language === 'pt-BR' ? 'HH:mm' : 'hh:mm a'
  )
  const customTitle = data.title || data?.alternative_titles?.en || ''

  return {
    ...data,
    releaseDay,
    releaseHour,
    ratingString: data?.mean?.toFixed(2) || t('anime.notEvaluated'),
    averageTime: data?.average_episode_duration
      ? Math.round((data?.average_episode_duration ?? 0) / 60)
      : 0,
    customTitle,
  }
}
