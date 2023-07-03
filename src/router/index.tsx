import { HomeNavigator } from '@navigators/Home'
import { NavigationContainer } from '@react-navigation/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { XStack } from 'tamagui'

export default function Router() {
  const insets = useSafeAreaInsets()

  return (
    <XStack flex={1} bg="$background" pt={insets.top}>
      <NavigationContainer>
        <HomeNavigator />
      </NavigationContainer>
    </XStack>
  )
}
