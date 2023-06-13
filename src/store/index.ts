import { observable } from '@legendapp/state';
import { configureObservablePersistence, persistObservable } from '@legendapp/state/persist';
import { ObservablePersistLocalStorage } from '@legendapp/state/persist-plugins/local-storage';
import { ObservablePersistMMKV } from '@legendapp/state/persist-plugins/mmkv';
import { Platform } from 'react-native';

import { settingsObs, userObs } from './observers';

// Global configuration
configureObservablePersistence({
  persistLocal: Platform.OS === 'web' ? ObservablePersistLocalStorage : ObservablePersistMMKV,
});

export const Store = observable({ settingsObs, userObs });

persistObservable(Store, {
  local: 'store',
});
