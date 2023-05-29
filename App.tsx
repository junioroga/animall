import { useFonts } from 'expo-font';
import { useState } from 'react';
import { TamaguiProvider, Theme, XStack, YStack } from 'tamagui';

import { ChangeTheme } from './src/components/ChangeTheme';
import { Search } from './src/components/Search';
import { User } from './src/components/User';
import config from './tamagui.config';

export default function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <TamaguiProvider config={config}>
      <Theme name={isDarkTheme ? 'dark' : 'light'}>
        <YStack bg="$background" f={1} p="$4" pt="$10">
          <XStack jc="space-between" ai="center">
            <User />
            <ChangeTheme onCheckedChange={setIsDarkTheme} />
          </XStack>
          <Search />
        </YStack>
      </Theme>
    </TamaguiProvider>
  );
}
