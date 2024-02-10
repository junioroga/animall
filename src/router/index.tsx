import { NavigationContainer } from '@react-navigation/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { XStack } from 'tamagui'

import { BottomTab } from '@/navigators'

export default function Router() {
  const insets = useSafeAreaInsets()

  return (
    <XStack f={1} bg="$background" $isDesktop={{ pt: '$2' }} pt={insets.top}>
      <NavigationContainer>
        <BottomTab />
      </NavigationContainer>
    </XStack>
  )
}
