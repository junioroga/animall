import { Platform } from 'react-native'

import { observable } from '@legendapp/state'
import { persistObservable } from '@legendapp/state/persist'
import { ObservablePersistLocalStorage } from '@legendapp/state/persist-plugins/local-storage'
import { ObservablePersistMMKV } from '@legendapp/state/persist-plugins/mmkv'

import { settings } from './observers'

const persistLocal: any =
  Platform.OS === 'web' ? ObservablePersistLocalStorage : ObservablePersistMMKV

export const Store = observable({ settings })

persistObservable(Store, {
  local: 'store',
  persistLocal,
})
