import { Platform } from 'react-native'

import { observable } from '@legendapp/state'
import { persistObservable } from '@legendapp/state/persist'
import { ObservablePersistLocalStorage } from '@legendapp/state/persist-plugins/local-storage'

import { ObservablePersistAsyncStorage } from './observablePersist'
import { settings } from './observers'

const pluginLocal: any =
  Platform.OS === 'web' ? ObservablePersistLocalStorage : ObservablePersistAsyncStorage

export const Store = observable({ settings })

persistObservable(Store, {
  local: 'store',
  pluginLocal,
})
