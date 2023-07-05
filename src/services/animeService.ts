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
  id: number
}

export const getAll = (options: GetAllProps) => {
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

  return api.get(`${basePath}${paramsQs}`)
}

export const getDetails = (options: GetDetailsProps) =>
  api.get(`${basePath}/${options.id}`)

export const getRanking = (options: GetRankingProps) => {
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

  return api.get(`${basePath}/ranking${paramsQs}`)
}
