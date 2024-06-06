import { Platform } from 'react-native'

import app from '../../app.json'

const { name, version } = app.expo

// -----------------------------------------------------------------------------
// General
// -----------------------------------------------------------------------------
export const APP_NAME = name
export const APP_VERSION = version
// eslint-disable-next-line no-undef
export const IS_DEBUG = __DEV__

// -----------------------------------------------------------------------------
// Static url app api
// -----------------------------------------------------------------------------
const URLS = {
  PRODUCTION: {
    API:
      Platform.OS === 'web'
        ? 'http://localhost:8080/api.myanimelist.net/v2/'
        : 'https://api.myanimelist.net/v2/',
  },
}

// -----------------------------------------------------------------------------
// API
// -----------------------------------------------------------------------------
export const API_URL = URLS.PRODUCTION.API

// -----------------------------------------------------------------------------
// Errors
// -----------------------------------------------------------------------------
export const API_ERROR_TYPE_BAD_REQUEST = 'bad_request'
export const API_ERROR_TYPE_NOT_FOUND = 'not_found'
export const API_ERROR_TYPE_FORBIDDEN = 'forbidden'
export const API_ERROR_TYPE_CONNECTION = 'connection'
export const API_ERROR_TYPE_OTHER = 'other'
export const API_ERROR_TYPE_CANCEL = 'cancel'

// -----------------------------------------------------------------------------
// Keyboard
// -----------------------------------------------------------------------------
export const KEYBOARD_NUMERIC_PAD =
  Platform.OS === 'ios' ? 'number-pad' : 'numeric'
export const KEYBOARD_PHONE_PAD =
  Platform.OS === 'ios' ? 'number-pad' : 'phone-pad'

export const blurhash = {
  blurhash:
    '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[',
  width: 30,
  height: 20,
}
