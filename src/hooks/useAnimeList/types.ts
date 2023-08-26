interface Studios {
  id: string
  name: string
}

interface Genres {
  id: string
  name: string
}

interface AlternativeTitles {
  synonyms: string[]
  en: string
  ja: string
}

interface MainPicture {
  medium: string
  large: string
}

export interface AnimeData {
  id: number
  title: string
  main_picture: MainPicture
  alternative_titles: AlternativeTitles
  start_date: string
  end_date: string
  num_episodes: number
  mean: number
  studios: Studios[]
  genres: Genres[]
}

export type Page = {
  page: AnimeData
  pageParam: number
}

export interface ResponseAnimeList {
  data: {
    node: AnimeData
  }
  paging: {
    next: string
    previous: string
  }
}
