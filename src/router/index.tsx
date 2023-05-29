import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { XStack } from 'tamagui';

import { routesSigned } from './routes';

const Stack = createNativeStackNavigator();

export default function Router() {
  const insets = useSafeAreaInsets();

  return (
    <XStack flex={1} bg="$background" pt={insets.top}>
      <NavigationContainer>
        <Stack.Navigator>
          {routesSigned.map((route) => (
            <Stack.Screen
              key={route.name}
              name={route.name}
              component={route.component}
              options={route.options}
            />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </XStack>
  );
}
