import { useQuery } from '@tanstack/react-query'

import { animeDetailsMock } from '~/test/mocks/animeListMock'
import { renderHook } from '~/test/test-utils'

import { useAnimeDetails } from '../useAnimeDetails'

jest.mock('@tanstack/react-query', () => {
  return {
    ...jest.requireActual('@tanstack/react-query'),
    useQuery: jest.fn(() => ({
      isFetching: false,
      data: [],
    })),
  }
})

describe('useAnimeDetails', () => {
  it('when no passing animeId parameter, don`t call the api', () => {
    const { result } = renderHook(() =>
      useAnimeDetails({ animeId: undefined } as any),
    )

    expect(result.current.data).toEqual([])
    expect(result.current.isFetching).toBeFalsy()
  })

  it('when enabled is true, call the api', async () => {
    ;(useQuery as jest.Mock).mockReturnValueOnce({
      isFetching: false,
      data: animeDetailsMock,
    })

    const { result } = renderHook(() => useAnimeDetails({ animeId: 11061 }))
    expect(result.current.data).toEqual(animeDetailsMock)
    expect(result.current.isFetching).toBeFalsy()
  })
})
