export type PaginationProps = {
  limit: number
  offset: number
}

export enum Fields {
  ID = 'id',
  TITLE = 'title',
  MAIN_PICTURE = 'main_picture',
  ALTERNATIVE_TITLES = 'alternative_titles',
  START_DATE = 'start_date',
  END_DATE = 'end_date',
  SYNOPSIS = 'synopsis',
  MEAN = 'mean',
  RANK = 'rank',
  POPULARITY = 'popularity',
  NUM_LIST_USERS = 'num_list_users',
  NUM_SCORING_USERS = 'num_scoring_users',
  NSFW = 'nsfw',
  CREATED_AT = 'created_at',
  UPDATED_AT = 'updated_at',
  MEDIA_TYPE = 'media_type',
  STATUS = 'status',
  GENRES = 'genres',
  MY_LIST_STATUS = 'my_list_status',
  NUM_EPISODES = 'num_episodes',
  START_SEASON = 'start_season',
  BROADCAST = 'broadcast',
  SOURCE = 'source',
  AVERAGE_EPISODE_DURATION = 'average_episode_duration',
  RATING = 'rating',
  PICTURES = 'pictures',
  BACKGROUND = 'background',
  RELATED_ANIME = 'related_anime',
  RELATED_MANGA = 'related_manga',
  RECOMMENDATIONS = 'recommendations',
  STUDIOS = 'studios',
  STATISTICS = 'statistics',
}

export enum RankingType {
  ALL = 'all',
  AIRING = 'airing',
  UPCOMING = 'upcoming',
  TV = 'tv',
  OVA = 'ova',
  MOVIE = 'movie',
  SPECIAL = 'special',
  BY_POPULARITY = 'bypopularity',
  FAVORITE = 'favorite',
}

export enum CardType {
  HORIZONTAL = 'horizontal',
  VERTICAL = 'vertical',
}

export enum Genres {
  ACTION = 'action',
  ADVENTURE = 'adventure',
  AVANT_GARDE = 'avantgarde',
  AWARD_WINNING = 'awardwinning',
  COMEDY = 'comedy',
  DRAMA = 'drama',
  FANTASY = 'fantasy',
  GOURMET = 'gourmet',
  HORROR = 'horror',
  MYSTERY = 'mystery',
  ROMANCE = 'romance',
  SCI_FI = 'scifi',
  SLICE_OF_LIFE = 'sliceoflife',
  SPORTS = 'sports',
  SUPERNATURAL = 'supernatural',
  SUSPENSE = 'suspense',
}

export enum Seasonal {
  WINTER = 'winter',
  SPRING = 'spring',
  SUMMER = 'summer',
  FALL = 'fall',
}
