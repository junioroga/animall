export type PaginationProps = {
  limit: number
  offset: number
}

export enum StatisticsTypes {
  WATCHING = 'watching',
  DROPPED = 'dropped',
  ON_HOLD = 'on_hold',
  COMPLETED = 'completed',
  PLAN_TO_WATCH = 'plan_to_watch',
}

export enum DaysOfWeek {
  MONDAY = 'monday',
  TUESDAY = 'tuesday',
  WEDNESDAY = 'wednesday',
  THURSDAY = 'thursday',
  FRIDAY = 'friday',
  SATURDAY = 'saturday',
  SUNDAY = 'sunday',
}

export enum Seasons {
  WINTER = 'winter',
  SPRING = 'spring',
  SUMMER = 'summer',
  FALL = 'fall',
}

export enum Status {
  FINISHED = 'finished_airing',
  AIRING = 'currently_airing',
  NOT_YET_AIRED = 'not_yet_aired',
}

export enum Rating {
  ALL_AGES = 'g',
  CHILDREN = 'pg',
  TEENS = 'pg_13',
  YOUNG = 'r',
  YOUNG_MAN = 'r+',
  ADULT = 'rx',
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
  VIDEOS = 'videos',
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
