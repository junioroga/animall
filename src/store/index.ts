import { observable } from '@legendapp/state'
import {
  configureObservablePersistence,
  persistObservable,
} from '@legendapp/state/persist'
import { ObservablePersistLocalStorage } from '@legendapp/state/persist-plugins/local-storage'
import { Platform } from 'react-native'

import { ObservablePersistAsyncStorage } from './observablePersist'
import { settingsObs } from './observers'

const persistLocal: any =
  Platform.OS === 'web'
    ? ObservablePersistLocalStorage
    : ObservablePersistAsyncStorage

// Global configuration
configureObservablePersistence({
  persistLocal,
})

export const Store = observable({ settingsObs })

persistObservable(Store, {
  local: 'store',
})
