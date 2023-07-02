import { Platform } from 'react-native'

import { expo } from '../../app.json'

// -----------------------------------------------------------------------------
// General
// -----------------------------------------------------------------------------
export const APP_NAME = expo.android
export const APP_VERSION = expo.version
// eslint-disable-next-line no-undef
export const IS_DEBUG = __DEV__

// -----------------------------------------------------------------------------
// Static url app api
// -----------------------------------------------------------------------------
const URLS = {
  PRODUCTION: {
    API: 'https://api.myanimelist.net/v2',
  },
}

// -----------------------------------------------------------------------------
// API
// -----------------------------------------------------------------------------
export const API_URL = URLS.PRODUCTION.API

// -----------------------------------------------------------------------------
// API's
// -----------------------------------------------------------------------------
export const API_TOKEN = 'ba625a5d6bdb9871fc27aaace19e5fe3'

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
