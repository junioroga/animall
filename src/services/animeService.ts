import { ResponseAnimeDetails } from '@hooks/useAnimeDetails/types'
import { ResponseAnimeList } from '@hooks/useAnimeList/types'
import { ResponseAnimeRanking } from '@hooks/useAnimeRanking/types'
import { api } from '@config/api'

import { PaginationProps, RankingType } from './types'

const basePath = 'anime'

interface GetAllProps extends PaginationProps {
  q: string
  fields: string
}

interface GetRankingProps extends PaginationProps {
  ranking_type: RankingType
  fields: string
}

interface GetDetailsProps {
  animeId: number
  fields: string
}

const getAll = async (options: GetAllProps): Promise<ResponseAnimeList> => {
  const params = []
  let paramsQs = ''

  if (Object.prototype.hasOwnProperty.call(options, 'offset')) {
    params.push(`offset=${options.offset}`)
  }

  if (Object.prototype.hasOwnProperty.call(options, 'limit')) {
    params.push(`limit=${options.limit}`)
  }

  if (Object.prototype.hasOwnProperty.call(options, 'q')) {
    params.push(`q=${options.q}`)
  }

  if (Object.prototype.hasOwnProperty.call(options, 'fields')) {
    params.push(`fields=${options.fields}`)
  }

  if (params.length) {
    paramsQs = `?${params.join('&')}`
  }

  const response = await api.get<ResponseAnimeList>(`${basePath}${paramsQs}`)

  return response.data
}

const getDetails = async (options: GetDetailsProps) => {
  const params = []
  let paramsQs = ''

  if (Object.prototype.hasOwnProperty.call(options, 'fields')) {
    params.push(`fields=${options.fields}`)
  }

  if (params.length) {
    paramsQs = `?${params.join('&')}`
  }

  const response = await api.get<ResponseAnimeDetails>(
    `${basePath}/${options.animeId}${paramsQs}`,
  )

  return response.data
}

const getRanking = async (
  options: GetRankingProps,
): Promise<ResponseAnimeRanking> => {
  const params = []
  let paramsQs = ''

  if (Object.prototype.hasOwnProperty.call(options, 'offset')) {
    params.push(`offset=${options.offset}`)
  }

  if (Object.prototype.hasOwnProperty.call(options, 'limit')) {
    params.push(`limit=${options.limit}`)
  }

  if (Object.prototype.hasOwnProperty.call(options, 'ranking_type')) {
    params.push(`ranking_type=${options.ranking_type}`)
  }

  if (Object.prototype.hasOwnProperty.call(options, 'fields')) {
    params.push(`fields=${options.fields}`)
  }

  if (params.length) {
    paramsQs = `?${params.join('&')}`
  }

  const response = await api.get<ResponseAnimeRanking>(
    `${basePath}/ranking${paramsQs}`,
  )

  return response.data
}

export { getAll, getDetails, getRanking }
