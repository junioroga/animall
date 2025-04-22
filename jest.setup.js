// include this line for mocking react-native-gesture-handler
import 'react-native-gesture-handler/jestSetup'

import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock'

jest.mock('react-native-safe-area-context', () => mockSafeAreaContext)

jest.useFakeTimers()

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
)

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => {
      return {
        navigate: jest.fn(),
        goBack: jest.fn(),
        pop: jest.fn(),
        push: jest.fn(),
      }
    },
  }
})
