import { api } from '@config/api'

import { PaginationProps } from './types'

const basePath = 'anime'

interface GetAllProps extends PaginationProps {
  q: string
  fields: string
}

interface ShowProps {
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

  const data = {}

  return api.get(`${basePath}${paramsQs}`, data)
}

export const show = (options: ShowProps) => api.get(`${basePath}/${options.id}`)
