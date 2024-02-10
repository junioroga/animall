import { registerRootComponent } from 'expo'

import { App } from './src/App'

__DEV__ && require('@expo/metro-runtime')

registerRootComponent(App)
