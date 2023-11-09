import { http, HttpResponse } from 'msw'

import { API_URL } from '@config/general'
import {
  animeDetailsMock,
  animeListMock,
  animeListRankingMock,
} from '@test/mocks/animeListMock'

export const handlers = [
  http.get(`${API_URL}anime`, ({ request }) => {
    const url = new URL(request.url)

    if (!url.searchParams.get('q')) {
      return HttpResponse.text('401') as any
    }
    return HttpResponse.json(animeListMock)
  }),
  http.get(`${API_URL}anime/ranking`, ({ request }) => {
    const url = new URL(request.url)

    if (!url.searchParams.get('ranking_type')) {
      return HttpResponse.text('401') as any
    }
    return HttpResponse.json(animeListRankingMock)
  }),
  http.get(`${API_URL}anime/:animeId`, ({ params }) => {
    const { animeId } = params

    if (!Number(animeId)) {
      return HttpResponse.text('401') as any
    }
    return HttpResponse.json(animeDetailsMock)
  }),
]
