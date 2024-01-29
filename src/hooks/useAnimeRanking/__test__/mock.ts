import { InfiniteData } from '@tanstack/react-query'

import { AnimeData } from '@/hooks/useAnimeList/types'

export const useAnimeRankingMock: InfiniteData<AnimeData> = {
  pages: [
    {
      id: 52991,
      title: 'Sousou no Frieren',
      main_picture: {
        medium: 'https://cdn.myanimelist.net/images/anime/1015/138006.jpg',
        large: 'https://cdn.myanimelist.net/images/anime/1015/138006l.jpg',
      },
      alternative_titles: {
        synonyms: ['Frieren at the Funeral'],
        en: "Frieren: Beyond Journey's End",
        ja: '葬送のフリーレン',
      },
      mean: 9.02,
      start_date: '2023-09-29',
      genres: [
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
          id: 27,
          name: 'Shounen',
        },
      ],
      broadcast: {
        day_of_the_week: 'friday',
        start_time: '23:00',
      },
      rank: 1,
    },
    {
      id: 51009,
      title: 'Jujutsu Kaisen 2nd Season',
      main_picture: {
        medium: 'https://cdn.myanimelist.net/images/anime/1792/138022.jpg',
        large: 'https://cdn.myanimelist.net/images/anime/1792/138022l.jpg',
      },
      alternative_titles: {
        synonyms: [
          'Jujutsu Kaisen: Kaigyoku Gyokusetsu',
          'Jujutsu Kaisen: Shibuya Jihen',
          'Sorcery Fight',
          'JJK',
        ],
        en: 'Jujutsu Kaisen Season 2',
        ja: '呪術廻戦 懐玉・玉折／渋谷事変',
      },
      mean: 8.85,
      start_date: '2023-07-06',
      genres: [
        {
          id: 1,
          name: 'Action',
        },
        {
          id: 10,
          name: 'Fantasy',
        },
        {
          id: 23,
          name: 'School',
        },
        {
          id: 27,
          name: 'Shounen',
        },
      ],
      broadcast: {
        day_of_the_week: 'thursday',
        start_time: '23:56',
      },
      rank: 2,
    },
    {
      id: 50399,
      title: 'Tian Guan Cifu Er',
      main_picture: {
        medium: 'https://cdn.myanimelist.net/images/anime/1280/138635.jpg',
        large: 'https://cdn.myanimelist.net/images/anime/1280/138635l.jpg',
      },
      alternative_titles: {
        synonyms: ['Tian Guan Cifu 2nd Season', 'Tian Guan Ci Fu'],
        en: "Heaven Official's Blessing Season 2",
        ja: '天官賜福 貳',
      },
      mean: 8.83,
      start_date: '2023-10-18',
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
          id: 13,
          name: 'Historical',
        },
        {
          id: 6,
          name: 'Mythology',
        },
      ],
      rank: 3,
    },
    {
      id: 21,
      title: 'One Piece',
      main_picture: {
        medium: 'https://cdn.myanimelist.net/images/anime/6/73245.jpg',
        large: 'https://cdn.myanimelist.net/images/anime/6/73245l.jpg',
      },
      alternative_titles: {
        synonyms: ['OP'],
        en: 'One Piece',
        ja: 'ONE PIECE',
      },
      mean: 8.71,
      start_date: '1999-10-20',
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
      broadcast: {
        day_of_the_week: 'sunday',
        start_time: '09:30',
      },
      rank: 4,
    },
    {
      id: 54492,
      title: 'Kusuriya no Hitorigoto',
      main_picture: {
        medium: 'https://cdn.myanimelist.net/images/anime/1708/138033.jpg',
        large: 'https://cdn.myanimelist.net/images/anime/1708/138033l.jpg',
      },
      alternative_titles: {
        synonyms: ["The Pharmacist's Monologue", 'Drugstore Soliloquy'],
        en: 'The Apothecary Diaries',
        ja: '薬屋のひとりごと',
      },
      mean: 8.65,
      start_date: '2023-10-22',
      genres: [
        {
          id: 8,
          name: 'Drama',
        },
        {
          id: 13,
          name: 'Historical',
        },
        {
          id: 67,
          name: 'Medical',
        },
        {
          id: 7,
          name: 'Mystery',
        },
      ],
      broadcast: {
        day_of_the_week: 'sunday',
        start_time: '01:05',
      },
      rank: 5,
    },
    {
      id: 54595,
      title: 'Kage no Jitsuryokusha ni Naritakute! 2nd Season',
      main_picture: {
        medium: 'https://cdn.myanimelist.net/images/anime/1622/139331.jpg',
        large: 'https://cdn.myanimelist.net/images/anime/1622/139331l.jpg',
      },
      alternative_titles: {
        synonyms: ['Shadow Garden 2nd Season'],
        en: 'The Eminence in Shadow Season 2',
        ja: '陰の実力者になりたくて！ 2nd Season',
      },
      mean: 8.64,
      start_date: '2023-10-04',
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
          id: 10,
          name: 'Fantasy',
        },
        {
          id: 62,
          name: 'Isekai',
        },
        {
          id: 72,
          name: 'Reincarnation',
        },
      ],
      broadcast: {
        day_of_the_week: 'wednesday',
        start_time: '22:30',
      },
      rank: 6,
    },
    {
      id: 55644,
      title: 'Dr. Stone: New World Part 2',
      main_picture: {
        medium: 'https://cdn.myanimelist.net/images/anime/1236/138696.jpg',
        large: 'https://cdn.myanimelist.net/images/anime/1236/138696l.jpg',
      },
      alternative_titles: {
        synonyms: ['Dr. Stone 3rd Season Part 2'],
        en: '',
        ja: 'Dr.STONE NEW WORLD',
      },
      mean: 8.42,
      start_date: '2023-10-12',
      genres: [
        {
          id: 2,
          name: 'Adventure',
        },
        {
          id: 4,
          name: 'Comedy',
        },
        {
          id: 24,
          name: 'Sci-Fi',
        },
        {
          id: 27,
          name: 'Shounen',
        },
        {
          id: 78,
          name: 'Time Travel',
        },
      ],
      broadcast: {
        day_of_the_week: 'thursday',
        start_time: '22:30',
      },
      rank: 7,
    },
    {
      id: 44042,
      title: 'Holo no Graffiti',
      main_picture: {
        medium: 'https://cdn.myanimelist.net/images/anime/1259/110227.jpg',
        large: 'https://cdn.myanimelist.net/images/anime/1259/110227l.jpg',
      },
      alternative_titles: {
        synonyms: ['Horogura', 'HoloGra'],
        en: 'Holo Graffiti',
        ja: 'ホロのぐらふぃてぃ',
      },
      mean: 8.21,
      start_date: '2019-05-05',
      genres: [
        {
          id: 4,
          name: 'Comedy',
        },
      ],
      rank: 8,
    },
    {
      id: 53887,
      title: 'Spy x Family Season 2',
      main_picture: {
        medium: 'https://cdn.myanimelist.net/images/anime/1506/138982.jpg',
        large: 'https://cdn.myanimelist.net/images/anime/1506/138982l.jpg',
      },
      alternative_titles: {
        synonyms: [],
        en: '',
        ja: 'SPY×FAMILY Season 2',
      },
      mean: 8.2,
      start_date: '2023-10-07',
      genres: [
        {
          id: 1,
          name: 'Action',
        },
        {
          id: 53,
          name: 'Childcare',
        },
        {
          id: 4,
          name: 'Comedy',
        },
        {
          id: 27,
          name: 'Shounen',
        },
      ],
      broadcast: {
        day_of_the_week: 'saturday',
        start_time: '23:00',
      },
      rank: 9,
    },
    {
      id: 235,
      title: 'Detective Conan',
      main_picture: {
        medium: 'https://cdn.myanimelist.net/images/anime/7/75199.jpg',
        large: 'https://cdn.myanimelist.net/images/anime/7/75199l.jpg',
      },
      alternative_titles: {
        synonyms: ['Meitantei Conan'],
        en: 'Case Closed',
        ja: '名探偵コナン',
      },
      mean: 8.17,
      start_date: '1996-01-08',
      genres: [
        {
          id: 2,
          name: 'Adventure',
        },
        {
          id: 4,
          name: 'Comedy',
        },
        {
          id: 39,
          name: 'Detective',
        },
        {
          id: 7,
          name: 'Mystery',
        },
        {
          id: 27,
          name: 'Shounen',
        },
      ],
      broadcast: {
        day_of_the_week: 'saturday',
        start_time: '18:00',
      },
      rank: 10,
    },
    {
      id: 51039,
      title: 'Doupo Cangqiong: Nian Fan',
      main_picture: {
        medium: 'https://cdn.myanimelist.net/images/anime/1419/126374.jpg',
        large: 'https://cdn.myanimelist.net/images/anime/1419/126374l.jpg',
      },
      alternative_titles: {
        synonyms: ['Battle Through The Heavens 5th Season'],
        en: 'Fights Break Sphere 5th Season',
        ja: '斗破苍穹年番',
      },
      mean: 8.07,
      start_date: '2022-07-31',
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
          id: 17,
          name: 'Martial Arts',
        },
      ],
      rank: 11,
    },
    {
      id: 54112,
      title: 'Zom 100: Zombie ni Naru made ni Shitai 100 no Koto',
      main_picture: {
        medium: 'https://cdn.myanimelist.net/images/anime/1384/136408.jpg',
        large: 'https://cdn.myanimelist.net/images/anime/1384/136408l.jpg',
      },
      alternative_titles: {
        synonyms: [
          'Bucket List of The Dead, Zombie 100: 100 Things I Want to do Before I Become a Zombie',
        ],
        en: 'Zom 100: Bucket List of the Dead',
        ja: 'ゾン100～ゾンビになるまでにしたい100のこと～',
      },
      mean: 8.04,
      start_date: '2023-07-09',
      genres: [
        {
          id: 1,
          name: 'Action',
        },
        {
          id: 50,
          name: 'Adult Cast',
        },
        {
          id: 4,
          name: 'Comedy',
        },
        {
          id: 14,
          name: 'Horror',
        },
        {
          id: 42,
          name: 'Seinen',
        },
        {
          id: 37,
          name: 'Supernatural',
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
        day_of_the_week: 'sunday',
        start_time: '17:00',
      },
      rank: 12,
    },
    {
      id: 52347,
      title: 'Shangri-La Frontier: Kusoge Hunter, Kamige ni Idoman to su',
      main_picture: {
        medium: 'https://cdn.myanimelist.net/images/anime/1591/137973.jpg',
        large: 'https://cdn.myanimelist.net/images/anime/1591/137973l.jpg',
      },
      alternative_titles: {
        synonyms: [
          'Shangri-La Frontier: Crappy Game Hunter Challenges God-Tier Game',
          'Shanfro',
        ],
        en: 'Shangri-La Frontier',
        ja: 'シャングリラ・フロンティア～クソゲーハンター、神ゲーに挑まんとす～',
      },
      mean: 8.02,
      start_date: '2023-10-01',
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
        {
          id: 79,
          name: 'Video Game',
        },
      ],
      broadcast: {
        day_of_the_week: 'sunday',
        start_time: '17:00',
      },
      rank: 13,
    },
    {
      id: 52741,
      title: 'Undead Unluck',
      main_picture: {
        medium: 'https://cdn.myanimelist.net/images/anime/1136/138410.jpg',
        large: 'https://cdn.myanimelist.net/images/anime/1136/138410l.jpg',
      },
      alternative_titles: {
        synonyms: [],
        en: '',
        ja: 'アンデッドアンラック',
      },
      mean: 7.97,
      start_date: '2023-10-07',
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
          id: 27,
          name: 'Shounen',
        },
        {
          id: 31,
          name: 'Super Power',
        },
        {
          id: 37,
          name: 'Supernatural',
        },
      ],
      broadcast: {
        day_of_the_week: 'saturday',
        start_time: '01:23',
      },
      rank: 14,
    },
    {
      id: 54918,
      title: 'Tokyo Revengers: Tenjiku-hen',
      main_picture: {
        medium: 'https://cdn.myanimelist.net/images/anime/1790/138322.jpg',
        large: 'https://cdn.myanimelist.net/images/anime/1790/138322l.jpg',
      },
      alternative_titles: {
        synonyms: [],
        en: '',
        ja: '東京リベンジャーズ 天竺編',
      },
      mean: 7.96,
      start_date: '2023-10-04',
      genres: [
        {
          id: 1,
          name: 'Action',
        },
        {
          id: 55,
          name: 'Delinquents',
        },
        {
          id: 8,
          name: 'Drama',
        },
        {
          id: 27,
          name: 'Shounen',
        },
        {
          id: 37,
          name: 'Supernatural',
        },
        {
          id: 78,
          name: 'Time Travel',
        },
      ],
      broadcast: {
        day_of_the_week: 'wednesday',
        start_time: '00:00',
      },
      rank: 15,
    },
  ],
  pageParams: [null],
}
