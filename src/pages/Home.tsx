import { ChangeTheme } from '@components/ChangeTheme'
import { Search } from '@components/Search'
import { XStack, YStack, H3 } from 'tamagui'

const Home = () => (
  <YStack f={1} bg="$background">
    <YStack p="$4">
      <XStack jc="space-between" ai="center">
        <H3>I`ts Fun Time!</H3>
        <ChangeTheme />
      </XStack>
      <Search />
    </YStack>
  </YStack>
)

export default Home
