import { InfiniteData } from '@tanstack/react-query'

import { AnimeData } from '../types'

export const useAnimeListMock: InfiniteData<AnimeData> = {
  pages: [
    {
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
      num_episodes: 148,
      mean: 9.04,
    },
    {
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
      num_episodes: 62,
      mean: 8.41,
    },
    {
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
      num_episodes: 1,
      mean: 7.27,
    },
    {
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
      num_episodes: 1,
      mean: 7.28,
    },
    {
      id: 1473,
      title: "City Hunter '91",
      main_picture: {
        medium: 'https://cdn.myanimelist.net/images/anime/7/50531.jpg',
        large: 'https://cdn.myanimelist.net/images/anime/7/50531l.jpg',
      },
      alternative_titles: {
        synonyms: ['City Hunter 4'],
        en: '',
        ja: "シティーハンター'91",
      },
      start_date: '1991-04-28',
      end_date: '1991-10-10',
      num_episodes: 13,
      mean: 7.75,
    },
    {
      id: 1472,
      title: 'City Hunter 3',
      main_picture: {
        medium: 'https://cdn.myanimelist.net/images/anime/1147/94393.jpg',
        large: 'https://cdn.myanimelist.net/images/anime/1147/94393l.jpg',
      },
      alternative_titles: {
        synonyms: [],
        en: '',
        ja: 'シティーハンター3',
      },
      start_date: '1989-10-15',
      end_date: '1990-01-21',
      num_episodes: 13,
      mean: 7.8,
    },
    {
      id: 1108,
      title: 'Senkaiden Houshin Engi',
      main_picture: {
        medium: 'https://cdn.myanimelist.net/images/anime/1004/94169.jpg',
        large: 'https://cdn.myanimelist.net/images/anime/1004/94169l.jpg',
      },
      alternative_titles: {
        synonyms: [
          'Romances of Sealed Gods',
          'Soul Hunter: Battle of the Immortals',
        ],
        en: 'Soul Hunter',
        ja: '仙界伝 封神演義',
      },
      start_date: '1999-07-03',
      end_date: '1999-12-25',
      num_episodes: 26,
      mean: 7.08,
    },
    {
      id: 495,
      title: 'Bakuretsu Hunters',
      main_picture: {
        medium: 'https://cdn.myanimelist.net/images/anime/1607/96463.jpg',
        large: 'https://cdn.myanimelist.net/images/anime/1607/96463l.jpg',
      },
      alternative_titles: {
        synonyms: ['Spell Wars: Sorcerer Hunters Revenge'],
        en: 'Sorcerer Hunters',
        ja: '爆れつハンター',
      },
      start_date: '1995-10-03',
      end_date: '1996-03-26',
      num_episodes: 26,
      mean: 6.66,
    },
    {
      id: 543,
      title: 'Vampire Hunter D (2000)',
      main_picture: {
        medium: 'https://cdn.myanimelist.net/images/anime/1571/135153.jpg',
        large: 'https://cdn.myanimelist.net/images/anime/1571/135153l.jpg',
      },
      alternative_titles: {
        synonyms: ['Vampire Hunter D (2001)', 'Vampire Hunter D Movie'],
        en: 'Vampire Hunter D: Bloodlust',
        ja: 'バンパイアハンターD',
      },
      start_date: '2000-08-25',
      end_date: '2000-08-25',
      num_episodes: 1,
      mean: 7.92,
    },
    {
      id: 1280,
      title: 'Mamono Hunter Youko',
      main_picture: {
        medium: 'https://cdn.myanimelist.net/images/anime/1276/97039.jpg',
        large: 'https://cdn.myanimelist.net/images/anime/1276/97039l.jpg',
      },
      alternative_titles: {
        synonyms: ['Demon Hunter Youko', 'Mamono Hunter Yohko'],
        en: 'Devil Hunter Yohko',
        ja: '魔物ハンター妖子',
      },
      start_date: '1990-12-01',
      end_date: '1995-07-01',
      num_episodes: 5,
      mean: 6.23,
    },
  ],
  pageParams: [null],
}
