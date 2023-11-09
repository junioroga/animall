import { AnimeData } from '@hooks/useAnimeList/types'

export type AnimeRanking = AnimeData

type Node = {
  node: AnimeData
  ranking: {
    rank: number
  }
}

export interface ResponseAnimeRanking {
  data: Node[]
  paging: {
    next: string
    previous?: string
  }
}
