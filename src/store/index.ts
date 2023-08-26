import { observable } from '@legendapp/state'
import { persistObservable } from '@legendapp/state/persist'
import { ObservablePersistLocalStorage } from '@legendapp/state/persist-plugins/local-storage'
import { Platform } from 'react-native'

import { ObservablePersistAsyncStorage } from './observablePersist'
import { settings, user } from './observers'

const persistLocal: any =
  Platform.OS === 'web'
    ? ObservablePersistLocalStorage
    : ObservablePersistAsyncStorage

export const Store = observable({ settings, user })

persistObservable(Store, {
  local: 'store',
  persistLocal,
})
