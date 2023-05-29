import { XStack, YStack } from 'tamagui';

import { ChangeTheme } from '../components/ChangeTheme';
import { Search } from '../components/Search';
import { User } from '../components/User';

const Home = () => {
  return (
    <YStack f={1} p="$4" bg="$background">
      <XStack jc="space-between" ai="center">
        <User />
        <ChangeTheme />
      </XStack>
      <Search />
    </YStack>
  );
};

export default Home;
