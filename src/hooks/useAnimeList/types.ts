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

export interface RelatedAnime {
  node: {
    id: number
    title: string
    main_picture: MainPicture
  }
  relation_type: string
  relation_type_formatted: string
}

export interface Recommendations {
  node: {
    id: number
    title: string
    main_picture: MainPicture
  }
  num_recommendations: number
}

interface StatusStatistics {
  watching: number
  completed: number
  on_hold: number
  dropped: number
  plan_to_watch: number
}

export interface Statistics {
  status: StatusStatistics
  num_list_users: number
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

export interface Broadcast {
  day_of_the_week: string
  start_time: string
}

export interface AnimeData {
  id: number
  title: string
  main_picture: MainPicture
  alternative_titles: AlternativeTitles
  start_date: string
  end_date: string
  studios: Studios[]
  statistics: Statistics
  genres: Genres[]
  synopsis: string
  mean: number
  rank: number
  popularity: number
  num_list_users: number
  num_episodes: number
  start_season: Season
  num_scoring_users: number
  broadcast: Broadcast
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
  recommendations: Recommendations[]
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
