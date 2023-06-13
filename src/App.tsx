import 'resize-observer-polyfill';

import { observer } from '@legendapp/state/react';
import { Store } from '@store';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { TamaguiProvider, Theme } from 'tamagui';

import Router from './router';
import config from '../tamagui.config';

export const App = observer(() => {
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <TamaguiProvider config={config}>
      <StatusBar style={Store.settingsObs.settings.theme.get() === 'light' ? 'dark' : 'light'} />
      <Theme name={Store.settingsObs.settings.theme.get()}>
        <SafeAreaProvider>
          <Router />
        </SafeAreaProvider>
      </Theme>
    </TamaguiProvider>
  );
});
