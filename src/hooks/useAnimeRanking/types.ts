import { AnimeData } from '@hooks/useAnimeList/types'

export interface AnimeRanking extends AnimeData {
  rank: number
}

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
