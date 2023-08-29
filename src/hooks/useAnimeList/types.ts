export interface Studios {
  id: string
  name: string
}

export interface Genres {
  id: string
  name: string
}

interface AlternativeTitles {
  synonyms: string[]
  en: string
  ja: string
}

export interface MainPicture {
  medium: string
  large: string
}

interface RelatedAnime {
  node: {
    id: number
    title: string
    main_picture: MainPicture
  }
}

export interface Season {
  year: string
  season: string
}

export interface Videos {
  id: number
  title: string
  url: string
  created_at: number
  updated_at: number
  thumbnail: string
}

export interface AnimeData {
  id: number
  title: string
  main_picture: MainPicture
  alternative_titles: AlternativeTitles
  start_date: string
  end_date: string
  studios: Studios[]
  genres: Genres[]
  synopsis: string
  mean: number
  rank: number
  popularity: number
  num_list_users: number
  num_episodes: number
  start_season: Season
  num_scoring_users: number
  created_at: string
  updated_at: string
  media_type: string
  status: string
  source: string
  average_episode_duration: number
  rating: string
  pictures: MainPicture[]
  background: string
  related_anime: RelatedAnime[]
  related_manga: RelatedAnime[]
  recommendations: RelatedAnime[]
  videos: Videos[]
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
