import { useInfiniteQuery } from '@tanstack/react-query'

import { RankingType } from '@/services/types'
import { renderHook } from '~/test/test-utils'

import { QueryKeysRanking, useAnimeRanking } from '../useAnimeRanking'
import { useAnimeRankingMock } from './mock'

jest.mock('@tanstack/react-query', () => {
  return {
    ...jest.requireActual('@tanstack/react-query'),
    useInfiniteQuery: jest.fn(() => ({
      isFetching: false,
      data: [],
    })),
  }
})

describe('useAnimeRanking', () => {
  it('when enabled is false, don`t call the api', () => {
    const { result } = renderHook(() =>
      useAnimeRanking({
        queryKey: QueryKeysRanking.RANKING_LIST,
        rankingType: RankingType.AIRING,
        limit: 4,
        enabled: false,
      })
    )

    expect(result.current.data).toEqual([])
    expect(result.current.isFetching).toBeFalsy()
  })

  it('when enabled is true, call the api', () => {
    ;(useInfiniteQuery as jest.Mock).mockReturnValueOnce({
      isFetching: false,
      data: useAnimeRankingMock,
    })

    const { result } = renderHook(() =>
      useAnimeRanking({
        queryKey: QueryKeysRanking.RANKING_LIST,
        rankingType: RankingType.AIRING,
        limit: 4,
      })
    )
    expect(result.current.data).toEqual(useAnimeRankingMock)
    expect(result.current.isFetching).toBeFalsy()
  })
})
