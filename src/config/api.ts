import axios from 'axios'

import {
  API_ERROR_TYPE_BAD_REQUEST,
  API_ERROR_TYPE_CANCEL,
  API_ERROR_TYPE_CONNECTION,
  API_ERROR_TYPE_FORBIDDEN,
  API_ERROR_TYPE_NOT_FOUND,
  API_ERROR_TYPE_OTHER,
  API_TOKEN,
  API_URL,
  APP_VERSION,
} from './general'

// -----------------------------------------------------------------------------
// General
// -----------------------------------------------------------------------------
export const API_HEADER_DEFAULT = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  'App-Version': APP_VERSION,
  'X-MAL-CLIENT-ID': API_TOKEN,
}

// -----------------------------------------------------------------------------
// Instance
// -----------------------------------------------------------------------------
export const api = axios.create({
  baseURL: API_URL,
  timeout: 3 * 60 * 1000, // 3 minutes
  headers: API_HEADER_DEFAULT,
})

type Error = {
  data: {
    message: string
    error: string
  }
}

/**
 * Get error to response
 *
 * @param error
 * @returns {{ error_type: string, error_message: string, error_errors }}
 */
export function getError(error: Error) {
  let errorType = ''
  let errorMessage = ''
  const errorErrors = {}

  // Has response from server
  if (error.data) {
    const { data } = error

    // Key message on data
    if (Object.prototype.hasOwnProperty.call(data, 'message') || data) {
      errorMessage = data.message
    }

    if (data.error === API_ERROR_TYPE_BAD_REQUEST) {
      // 400-499 with message
      errorType = API_ERROR_TYPE_BAD_REQUEST

      if (!errorMessage) {
        errorMessage = 'Parâmetros inválidos.'
      }
    } else if (data.error === API_ERROR_TYPE_FORBIDDEN) {
      // 403 with message
      errorType = API_ERROR_TYPE_FORBIDDEN

      if (!errorMessage) {
        errorMessage =
          'Ocorreu um erro de autorização, por favor tente novamente.'
      }
    } else if (data.error === API_ERROR_TYPE_NOT_FOUND) {
      // 404 with message
      errorType = API_ERROR_TYPE_NOT_FOUND

      if (!errorMessage) {
        errorMessage = 'A url acessada não existe.'
      }
    } else {
      errorType = API_ERROR_TYPE_OTHER

      if (!errorMessage) {
        errorMessage = 'Ocorreu um erro, por favor tente novamente.'
      }
    }
  } else {
    errorType = API_ERROR_TYPE_CONNECTION
    errorMessage =
      'Falha de comunicação com o servidor, ' +
      'verifique sua conexão com a internet e tente novamente.'
  }

  return {
    error_type: errorType,
    error_message: errorMessage,
    error_errors: errorErrors,
  }
}

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (axios.isCancel(error)) {
      const errorReturn = {
        error,
        error_type: API_ERROR_TYPE_CANCEL,
        error_message: 'Requisição cancelada.',
        error_errors: {},
      }

      errorReturn.toString = () => errorReturn.error_message

      return Promise.reject(errorReturn)
    }

    const errorReturn = {
      error,
      ...getError(error),
    }

    errorReturn.toString = () => errorReturn.error_message
    return Promise.reject(errorReturn)
  },
)
