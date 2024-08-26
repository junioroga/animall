import { useInfiniteQuery } from '@tanstack/react-query'

import { renderHook } from '~/test/test-utils'

import { useAnimeList } from '../useAnimeList'
import { useAnimeListMock } from './mock'

jest.mock('@tanstack/react-query', () => {
  return {
    ...jest.requireActual('@tanstack/react-query'),
    useInfiniteQuery: jest.fn(() => ({
      isFetching: false,
      data: [],
    })),
  }
})

describe('useAnimeList', () => {
  it('when enabled is false, don`t call the api', () => {
    const { result } = renderHook(() => useAnimeList({ search: '', enabled: false }))

    expect(result.current.data).toEqual([])
    expect(result.current.isFetching).toBeFalsy()
  })

  it('when enabled is true, call the api', async () => {
    ;(useInfiniteQuery as jest.Mock).mockReturnValueOnce({
      isFetching: false,
      data: useAnimeListMock,
    })

    const { result } = renderHook(() => useAnimeList({ search: 'Hunter', enabled: true }))
    expect(result.current.data).toEqual(useAnimeListMock)
    expect(result.current.isFetching).toBeFalsy()
  })
})
