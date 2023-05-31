import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { TamaguiProvider, Theme } from 'tamagui';

import Router from './router';
import config from '../tamagui.config';

export const App = () => {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <TamaguiProvider config={config}>
      <StatusBar style={colorScheme === 'light' ? 'dark' : 'light'} />
      <Theme name={colorScheme}>
        <SafeAreaProvider>
          <Router />
        </SafeAreaProvider>
      </Theme>
    </TamaguiProvider>
  );
};
