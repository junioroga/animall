import { AnimeData } from '@hooks/useAnimeList/types'

export type AnimeRanking = AnimeData

export interface ResponseAnimeRanking {
  data: {
    node: AnimeData
    ranking: {
      rank: number
    }
  }
  paging: {
    next: string
    previous: string
  }
}
