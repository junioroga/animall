interface Studios {
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
}

export interface AnimeRanking extends AnimeData {
  ranking: number
}

export interface Response {
  data: {
    data: AnimeData[]
    paging: {
      next: string
      previous: string
    }
  }
}
