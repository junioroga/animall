import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { useTheme } from 'tamagui'
import { Home, Search } from '@tamagui/lucide-icons'

import { HomeNavigator } from '../Home'
import { ListAnimeNavigator } from '../ListAnime'

const Tab = createBottomTabNavigator()

export const BottomTab = () => {
  const theme = useTheme()

  return (
    <Tab.Navigator
      initialRouteName="Home"
      backBehavior="initialRoute"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.background.val,
        },
        tabBarActiveTintColor: theme.blue10.val,
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <Home size="$icon.md" color={color} />,
          // tabBarLabel: ({ color }) => <Text color={color} />,
        }}
      />
      <Tab.Screen
        name="ListAnime"
        component={ListAnimeNavigator}
        options={{
          tabBarIcon: ({ color }) => <Search size="$icon.md" color={color} />,
          // tabBarLabel: ({ color }) => <Text color={color} />,
        }}
      />
    </Tab.Navigator>
  )
}
