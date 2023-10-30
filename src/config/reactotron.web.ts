/* eslint-disable no-console */
import Reactotron from 'reactotron-react-js'

import { IS_DEBUG } from './general'

declare global {
  interface Console {
    tron: any
  }
}

if (IS_DEBUG) {
  const tron = Reactotron.configure({
    host: 'localhost',
  }).connect()

  console.tron = tron
  console.tron.clear()
}
