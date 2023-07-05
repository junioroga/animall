export type PaginationProps = {
  limit: number
  offset: number
}

export enum Fields {
  ID = 'id',
  TITLE = 'title',
  MAIN_PICTURE = 'main_picture',
  START_DATE = 'start_date',
  END_DATE = 'end_date',
  NUM_EPISODES = 'num_episodes',
  MEAN = 'mean',
  ALTERNATIVE_TITLES = 'alternative_titles',
}

export enum RankingType {
  ALL = 'all',
  AIRING = 'airing',
  UPCOMING = 'upcoming',
  TV = 'tv',
  OVA = 'ova',
  MOVIE = 'movie',
  SPECIAL = 'special',
  BYPOPULARITY = 'bypopularity',
  FAVORITE = 'favorite',
}
