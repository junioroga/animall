import { renderHook, waitFor } from '@test/test-utils'

import { useAnimeList } from '../useAnimeList'
import { useAnimeListMock } from './mock'

describe('useAnimeList', () => {
  it('when enabled is false, don`t call the api', () => {
    const { result } = renderHook(() =>
      useAnimeList({ search: '', enabled: false }),
    )

    expect(result.current.data).toEqual([])
    expect(result.current.isFetching).toBeFalsy()
  })

  it('when enabled is true, call the api', async () => {
    const { result } = renderHook(() =>
      useAnimeList({ search: 'Hunter', enabled: true }),
    )

    await waitFor(() => expect(result.current.isSuccess).toBe(true))

    expect(result.current.data).toEqual(useAnimeListMock)
    expect(result.current.isFetching).toBeFalsy()
  })
})
