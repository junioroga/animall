import Reactotron from 'reactotron-react-native'

import { IS_DEBUG } from './general'

declare global {
  interface Console {
    tron: any
  }
}

if (IS_DEBUG) {
  const tron = Reactotron.configure({
    host: 'localhost',
  })
    .useReactNative()
    .connect()

  console.tron = tron
  console.tron.clear()
}
