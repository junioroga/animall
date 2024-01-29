import { ResponseAnimeDetails } from '@/hooks/useAnimeDetails/types'
import { ResponseAnimeList } from '@/hooks/useAnimeList/types'
import { ResponseAnimeRanking } from '@/hooks/useAnimeRanking/types'

export const animeListMock: ResponseAnimeList = {
  data: [
    {
      node: {
        id: 11061,
        title: 'Hunter x Hunter (2011)',
        main_picture: {
          medium: 'https://cdn.myanimelist.net/images/anime/1337/99013.jpg',
          large: 'https://cdn.myanimelist.net/images/anime/1337/99013l.jpg',
        },
        alternative_titles: {
          synonyms: ['HxH (2011)'],
          en: 'Hunter x Hunter',
          ja: 'HUNTER×HUNTER（ハンター×ハンター）',
        },
        start_date: '2011-10-02',
        end_date: '2014-09-24',
        mean: 9.04,
        num_episodes: 148,
      },
    },
    {
      node: {
        id: 136,
        title: 'Hunter x Hunter',
        main_picture: {
          medium: 'https://cdn.myanimelist.net/images/anime/1305/132237.jpg',
          large: 'https://cdn.myanimelist.net/images/anime/1305/132237l.jpg',
        },
        alternative_titles: {
          synonyms: ['HxH'],
          en: 'Hunter x Hunter',
          ja: 'HUNTER×HUNTER（ハンター×ハンター）',
        },
        start_date: '1999-10-16',
        end_date: '2001-03-31',
        mean: 8.41,
        num_episodes: 62,
      },
    },
    {
      node: {
        id: 13271,
        title: 'Hunter x Hunter Movie 1: Phantom Rouge',
        main_picture: {
          medium: 'https://cdn.myanimelist.net/images/anime/6/53073.jpg',
          large: 'https://cdn.myanimelist.net/images/anime/6/53073l.jpg',
        },
        alternative_titles: {
          synonyms: ['Gekijouban Hunter x Hunter: Hiiro no Genei', 'HxH Movie'],
          en: 'Hunter x Hunter: Phantom Rouge',
          ja: '劇場版 HUNTER×HUNTER 緋色の幻影（ファントム・ルージュ）',
        },
        start_date: '2013-01-12',
        end_date: '2013-01-12',
        mean: 7.27,
        num_episodes: 1,
      },
    },
    {
      node: {
        id: 19951,
        title: 'Hunter x Hunter Movie 2: The Last Mission',
        main_picture: {
          medium: 'https://cdn.myanimelist.net/images/anime/10/62337.jpg',
          large: 'https://cdn.myanimelist.net/images/anime/10/62337l.jpg',
        },
        alternative_titles: {
          synonyms: ['Gekijouban Hunter x Hunter'],
          en: 'Hunter x Hunter: The Last Mission',
          ja: '劇場版 HUNTERxHUNTER THE LAST MISSION',
        },
        start_date: '2013-12-27',
        end_date: '2013-12-27',
        mean: 7.28,
        num_episodes: 1,
      },
    },
  ],
  paging: {
    next: 'https://api.myanimelist.net/v2/anime?offset=4&q=Hunter&limit=4&fields=id%2Ctitle%2Cmain_picture%2Calternative_titles%2Cstart_date%2Cend_date%2Cmean%2Cnum_episodes&order=rank',
  },
}

export const animeDetailsMock: ResponseAnimeDetails = {
  id: 11061,
  title: 'Hunter x Hunter (2011)',
  main_picture: {
    medium: 'https://cdn.myanimelist.net/images/anime/1337/99013.jpg',
    large: 'https://cdn.myanimelist.net/images/anime/1337/99013l.jpg',
  },
  alternative_titles: {
    synonyms: ['HxH (2011)'],
    en: 'Hunter x Hunter',
    ja: 'HUNTER×HUNTER（ハンター×ハンター）',
  },
  start_date: '2011-10-02',
  end_date: '2014-09-24',
  synopsis:
    "Hunters devote themselves to accomplishing hazardous tasks, all from traversing the world's uncharted territories to locating rare items and monsters. Before becoming a Hunter, one must pass the Hunter Examination—a high-risk selection process in which most applicants end up handicapped or worse, deceased.\n\nAmbitious participants who challenge the notorious exam carry their own reason. What drives 12-year-old Gon Freecss is finding Ging, his father and a Hunter himself. Believing that he will meet his father by becoming a Hunter, Gon takes the first step to walk the same path.\n\nDuring the Hunter Examination, Gon befriends the medical student Leorio Paladiknight, the vindictive Kurapika, and ex-assassin Killua Zoldyck. While their motives vastly differ from each other, they band together for a common goal and begin to venture into a perilous world.\n\n[Written by MAL Rewrite]",
  mean: 9.04,
  rank: 7,
  popularity: 10,
  num_list_users: 2732106,
  num_scoring_users: 1699123,
  nsfw: 'white',
  created_at: '2011-07-27T08:41:39+00:00',
  updated_at: '2023-09-30T15:05:19+00:00',
  media_type: 'tv',
  status: 'finished_airing',
  genres: [
    {
      id: 1,
      name: 'Action',
    },
    {
      id: 2,
      name: 'Adventure',
    },
    {
      id: 10,
      name: 'Fantasy',
    },
    {
      id: 27,
      name: 'Shounen',
    },
  ],
  num_episodes: 148,
  start_season: {
    year: 2011,
    season: 'fall',
  },
  broadcast: {
    day_of_the_week: 'sunday',
    start_time: '10:55',
  },
  source: 'manga',
  average_episode_duration: 1417,
  rating: 'pg_13',
  pictures: [
    {
      medium: 'https://cdn.myanimelist.net/images/anime/5/37973.jpg',
      large: 'https://cdn.myanimelist.net/images/anime/5/37973l.jpg',
    },
    {
      medium: 'https://cdn.myanimelist.net/images/anime/13/47129.jpg',
      large: 'https://cdn.myanimelist.net/images/anime/13/47129l.jpg',
    },
    {
      medium: 'https://cdn.myanimelist.net/images/anime/4/49303.jpg',
      large: 'https://cdn.myanimelist.net/images/anime/4/49303l.jpg',
    },
    {
      medium: 'https://cdn.myanimelist.net/images/anime/6/65771.jpg',
      large: 'https://cdn.myanimelist.net/images/anime/6/65771l.jpg',
    },
    {
      medium: 'https://cdn.myanimelist.net/images/anime/10/66303.jpg',
      large: 'https://cdn.myanimelist.net/images/anime/10/66303l.jpg',
    },
    {
      medium: 'https://cdn.myanimelist.net/images/anime/2/71839.jpg',
      large: 'https://cdn.myanimelist.net/images/anime/2/71839l.jpg',
    },
    {
      medium: 'https://cdn.myanimelist.net/images/anime/1639/92662.jpg',
      large: 'https://cdn.myanimelist.net/images/anime/1639/92662l.jpg',
    },
    {
      medium: 'https://cdn.myanimelist.net/images/anime/1337/99013.jpg',
      large: 'https://cdn.myanimelist.net/images/anime/1337/99013l.jpg',
    },
    {
      medium: 'https://cdn.myanimelist.net/images/anime/1813/109433.jpg',
      large: 'https://cdn.myanimelist.net/images/anime/1813/109433l.jpg',
    },
    {
      medium: 'https://cdn.myanimelist.net/images/anime/1097/110402.jpg',
      large: 'https://cdn.myanimelist.net/images/anime/1097/110402l.jpg',
    },
    {
      medium: 'https://cdn.myanimelist.net/images/anime/1735/117788.jpg',
      large: 'https://cdn.myanimelist.net/images/anime/1735/117788l.jpg',
    },
  ],
  videos: [
    {
      id: 2270,
      title: 'PV Leorio version',
      url: 'https://youtu.be/D9iTQRB4XRk',
      created_at: 1452182192000,
      updated_at: 1455894529000,
      thumbnail: 'https://i.ytimg.com/vi/D9iTQRB4XRk/mqdefault.jpg',
    },
    {
      id: 2272,
      title: 'PV Kurapika version',
      url: 'https://youtu.be/7nJfsCGC-cs',
      created_at: 1452182234000,
      updated_at: 1455894571000,
      thumbnail: 'https://i.ytimg.com/vi/7nJfsCGC-cs/mqdefault.jpg',
    },
    {
      id: 2273,
      title: 'PV Killua version',
      url: 'https://youtu.be/AJXr03DG7rM',
      created_at: 1452182246000,
      updated_at: 1455894557000,
      thumbnail: 'https://i.ytimg.com/vi/AJXr03DG7rM/mqdefault.jpg',
    },
    {
      id: 2271,
      title: 'PV Gon version',
      url: 'https://youtu.be/p5-Is3sjnBY',
      created_at: 1452182200000,
      updated_at: 1455894544000,
      thumbnail: 'https://i.ytimg.com/vi/p5-Is3sjnBY/mqdefault.jpg',
    },
    {
      id: 6557,
      title: 'PV Box Set 2',
      url: 'https://youtu.be/2M29n0JpQNk',
      created_at: 1489952835000,
      updated_at: 1637782322000,
      thumbnail: 'https://i.ytimg.com/vi/2M29n0JpQNk/mqdefault.jpg',
    },
  ],
  background: '',
  related_anime: [
    {
      node: {
        id: 136,
        title: 'Hunter x Hunter',
        main_picture: {
          medium: 'https://cdn.myanimelist.net/images/anime/1305/132237.jpg',
          large: 'https://cdn.myanimelist.net/images/anime/1305/132237l.jpg',
        },
      },
      relation_type: 'alternative_version',
      relation_type_formatted: 'Alternative version',
    },
    {
      node: {
        id: 137,
        title: 'Hunter x Hunter: Original Video Animation',
        main_picture: {
          medium: 'https://cdn.myanimelist.net/images/anime/1/137.jpg',
          large: 'https://cdn.myanimelist.net/images/anime/1/137l.jpg',
        },
      },
      relation_type: 'alternative_version',
      relation_type_formatted: 'Alternative version',
    },
    {
      node: {
        id: 138,
        title: 'Hunter x Hunter: Greed Island',
        main_picture: {
          medium: 'https://cdn.myanimelist.net/images/anime/1902/122320.jpg',
          large: 'https://cdn.myanimelist.net/images/anime/1902/122320l.jpg',
        },
      },
      relation_type: 'alternative_version',
      relation_type_formatted: 'Alternative version',
    },
    {
      node: {
        id: 139,
        title: 'Hunter x Hunter: Greed Island Final',
        main_picture: {
          medium: 'https://cdn.myanimelist.net/images/anime/1/139.jpg',
          large: 'https://cdn.myanimelist.net/images/anime/1/139l.jpg',
        },
      },
      relation_type: 'alternative_version',
      relation_type_formatted: 'Alternative version',
    },
    {
      node: {
        id: 13271,
        title: 'Hunter x Hunter Movie 1: Phantom Rouge',
        main_picture: {
          medium: 'https://cdn.myanimelist.net/images/anime/6/53073.jpg',
          large: 'https://cdn.myanimelist.net/images/anime/6/53073l.jpg',
        },
      },
      relation_type: 'side_story',
      relation_type_formatted: 'Side story',
    },
    {
      node: {
        id: 19951,
        title: 'Hunter x Hunter Movie 2: The Last Mission',
        main_picture: {
          medium: 'https://cdn.myanimelist.net/images/anime/10/62337.jpg',
          large: 'https://cdn.myanimelist.net/images/anime/10/62337l.jpg',
        },
      },
      relation_type: 'side_story',
      relation_type_formatted: 'Side story',
    },
    {
      node: {
        id: 22049,
        title: 'Just Awake',
        main_picture: {
          medium: 'https://cdn.myanimelist.net/images/anime/5/57897.jpg',
          large: 'https://cdn.myanimelist.net/images/anime/5/57897l.jpg',
        },
      },
      relation_type: 'other',
      relation_type_formatted: 'Other',
    },
  ],
  related_manga: [],
  recommendations: [
    {
      node: {
        id: 5114,
        title: 'Fullmetal Alchemist: Brotherhood',
        main_picture: {
          medium: 'https://cdn.myanimelist.net/images/anime/1208/94745.jpg',
          large: 'https://cdn.myanimelist.net/images/anime/1208/94745l.jpg',
        },
      },
      num_recommendations: 100,
    },
    {
      node: {
        id: 21,
        title: 'One Piece',
        main_picture: {
          medium: 'https://cdn.myanimelist.net/images/anime/6/73245.jpg',
          large: 'https://cdn.myanimelist.net/images/anime/6/73245l.jpg',
        },
      },
      num_recommendations: 66,
    },
    {
      node: {
        id: 392,
        title: 'Yuu☆Yuu☆Hakusho',
        main_picture: {
          medium: 'https://cdn.myanimelist.net/images/anime/1228/111372.jpg',
          large: 'https://cdn.myanimelist.net/images/anime/1228/111372l.jpg',
        },
      },
      num_recommendations: 58,
    },
    {
      node: {
        id: 20,
        title: 'Naruto',
        main_picture: {
          medium: 'https://cdn.myanimelist.net/images/anime/13/17405.jpg',
          large: 'https://cdn.myanimelist.net/images/anime/13/17405l.jpg',
        },
      },
      num_recommendations: 42,
    },
    {
      node: {
        id: 34599,
        title: 'Made in Abyss',
        main_picture: {
          medium: 'https://cdn.myanimelist.net/images/anime/6/86733.jpg',
          large: 'https://cdn.myanimelist.net/images/anime/6/86733l.jpg',
        },
      },
      num_recommendations: 28,
    },
    {
      node: {
        id: 40221,
        title: 'Kami no Tou',
        main_picture: {
          medium: 'https://cdn.myanimelist.net/images/anime/1702/106229.jpg',
          large: 'https://cdn.myanimelist.net/images/anime/1702/106229l.jpg',
        },
      },
      num_recommendations: 27,
    },
    {
      node: {
        id: 31964,
        title: 'Boku no Hero Academia',
        main_picture: {
          medium: 'https://cdn.myanimelist.net/images/anime/10/78745.jpg',
          large: 'https://cdn.myanimelist.net/images/anime/10/78745l.jpg',
        },
      },
      num_recommendations: 26,
    },
    {
      node: {
        id: 14719,
        title: 'JoJo no Kimyou na Bouken (TV)',
        main_picture: {
          medium: 'https://cdn.myanimelist.net/images/anime/3/40409.jpg',
          large: 'https://cdn.myanimelist.net/images/anime/3/40409l.jpg',
        },
      },
      num_recommendations: 21,
    },
    {
      node: {
        id: 14513,
        title: 'Magi: The Labyrinth of Magic',
        main_picture: {
          medium: 'https://cdn.myanimelist.net/images/anime/11/42773.jpg',
          large: 'https://cdn.myanimelist.net/images/anime/11/42773l.jpg',
        },
      },
      num_recommendations: 20,
    },
    {
      node: {
        id: 20899,
        title: 'JoJo no Kimyou na Bouken Part 3: Stardust Crusaders',
        main_picture: {
          medium: 'https://cdn.myanimelist.net/images/anime/11/55267.jpg',
          large: 'https://cdn.myanimelist.net/images/anime/11/55267l.jpg',
        },
      },
      num_recommendations: 15,
    },
  ],
  studios: [
    {
      id: 11,
      name: 'Madhouse',
    },
  ],
  statistics: {
    status: {
      watching: 346110,
      completed: 1842111,
      on_hold: 134375,
      dropped: 57302,
      plan_to_watch: 352172,
    },
    num_list_users: 2732070,
  },
}

export const animeListRankingMock: ResponseAnimeRanking = {
  data: [
    {
      node: {
        id: 5114,
        title: 'Fullmetal Alchemist: Brotherhood',
        main_picture: {
          medium: 'https://cdn.myanimelist.net/images/anime/1208/94745.jpg',
          large: 'https://cdn.myanimelist.net/images/anime/1208/94745l.jpg',
        },
        alternative_titles: {
          synonyms: [
            'Hagane no Renkinjutsushi: Fullmetal Alchemist',
            'Fullmetal Alchemist (2009)',
            'FMA',
            'FMAB',
          ],
          en: 'Fullmetal Alchemist: Brotherhood',
          ja: '鋼の錬金術師 FULLMETAL ALCHEMIST',
        },
        mean: 9.1,
        start_date: '2009-04-05',
        genres: [
          {
            id: 1,
            name: 'Action',
          },
          {
            id: 2,
            name: 'Adventure',
          },
          {
            id: 8,
            name: 'Drama',
          },
          {
            id: 10,
            name: 'Fantasy',
          },
          {
            id: 38,
            name: 'Military',
          },
          {
            id: 27,
            name: 'Shounen',
          },
        ],
        broadcast: {
          day_of_the_week: 'sunday',
          start_time: '17:00',
        },
      },
      ranking: {
        rank: 1,
      },
    },
    {
      node: {
        id: 9253,
        title: 'Steins;Gate',
        main_picture: {
          medium: 'https://cdn.myanimelist.net/images/anime/1935/127974.jpg',
          large: 'https://cdn.myanimelist.net/images/anime/1935/127974l.jpg',
        },
        alternative_titles: {
          synonyms: [],
          en: 'Steins;Gate',
          ja: 'STEINS;GATE',
        },
        mean: 9.07,
        start_date: '2011-04-06',
        genres: [
          {
            id: 8,
            name: 'Drama',
          },
          {
            id: 40,
            name: 'Psychological',
          },
          {
            id: 24,
            name: 'Sci-Fi',
          },
          {
            id: 41,
            name: 'Suspense',
          },
          {
            id: 78,
            name: 'Time Travel',
          },
        ],
        broadcast: {
          day_of_the_week: 'wednesday',
          start_time: '02:05',
        },
      },
      ranking: {
        rank: 2,
      },
    },
    {
      node: {
        id: 28977,
        title: 'Gintama°',
        main_picture: {
          medium: 'https://cdn.myanimelist.net/images/anime/3/72078.jpg',
          large: 'https://cdn.myanimelist.net/images/anime/3/72078l.jpg',
        },
        alternative_titles: {
          synonyms: ["Gintama' (2015)"],
          en: 'Gintama Season 4',
          ja: '銀魂°',
        },
        mean: 9.06,
        start_date: '2015-04-08',
        genres: [
          {
            id: 1,
            name: 'Action',
          },
          {
            id: 4,
            name: 'Comedy',
          },
          {
            id: 57,
            name: 'Gag Humor',
          },
          {
            id: 13,
            name: 'Historical',
          },
          {
            id: 20,
            name: 'Parody',
          },
          {
            id: 21,
            name: 'Samurai',
          },
          {
            id: 24,
            name: 'Sci-Fi',
          },
          {
            id: 27,
            name: 'Shounen',
          },
        ],
        broadcast: {
          day_of_the_week: 'wednesday',
          start_time: '18:00',
        },
      },
      ranking: {
        rank: 3,
      },
    },
    {
      node: {
        id: 38524,
        title: 'Shingeki no Kyojin Season 3 Part 2',
        main_picture: {
          medium: 'https://cdn.myanimelist.net/images/anime/1517/100633.jpg',
          large: 'https://cdn.myanimelist.net/images/anime/1517/100633l.jpg',
        },
        alternative_titles: {
          synonyms: [],
          en: 'Attack on Titan Season 3 Part 2',
          ja: '進撃の巨人 Season3 Part.2',
        },
        mean: 9.05,
        start_date: '2019-04-29',
        genres: [
          {
            id: 1,
            name: 'Action',
          },
          {
            id: 8,
            name: 'Drama',
          },
          {
            id: 58,
            name: 'Gore',
          },
          {
            id: 38,
            name: 'Military',
          },
          {
            id: 27,
            name: 'Shounen',
          },
          {
            id: 76,
            name: 'Survival',
          },
          {
            id: 41,
            name: 'Suspense',
          },
        ],
        broadcast: {
          day_of_the_week: 'monday',
          start_time: '00:10',
        },
      },
      ranking: {
        rank: 4,
      },
    },
  ],
  paging: {
    next: 'https://api.myanimelist.net/v2/anime/ranking?offset=4&limit=4&ranking_type=all&fields=id%2Ctitle%2Calternative_titles%2Cmain_picture%2Cmean%2Cstart_date%2Cgenres%2Cbroadcast',
  },
}
