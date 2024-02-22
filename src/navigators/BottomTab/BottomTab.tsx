import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Platform } from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { selectionAsync } from 'expo-haptics'

import { getTokens, useTheme } from 'tamagui'
import { Home, Search, Settings } from '@tamagui/lucide-icons'

import { Text } from '@/components'
import { SettingsNavigator } from '@/navigators/Settings'

import { HomeNavigator } from '../Home'
import { ListAnimeNavigator } from '../ListAnime'

const Tab = createBottomTabNavigator()

type TabLabelProps = {
  label: string
  color: string
}

const TabLabel = ({ label, color }: TabLabelProps) => (
  <Text col={color} fos="$1" fow="$6">
    {label}
  </Text>
)

export const BottomTab = () => {
  const theme = useTheme()
  const { t } = useTranslation()
  const { bottom } = useSafeAreaInsets()
  const bottomDistance = useMemo(() => (bottom > 0 ? bottom - 8 : 8), [bottom])

  return (
    <Tab.Navigator
      initialRouteName="Home"
      backBehavior="initialRoute"
      screenListeners={() => ({
        tabPress: () => {
          selectionAsync()
        },
      })}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.backgroundHover.val,
          position: 'absolute',
          paddingBottom: getTokens().space[1].val,
          paddingTop: getTokens().space[1.5].val,
          bottom: bottomDistance,
          left: getTokens().space[3].val,
          right: getTokens().space[3].val,
          elevation: 3,
          borderRadius: getTokens().size[6].val,
          height: getTokens().size[5].val,
          borderColor: theme.backgroundHover.val,
          borderTopWidth: 0,
          shadowColor: theme.color12.val,
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.17,
          shadowRadius: 3.05,
        },
        tabBarItemStyle: {
          gap: Platform.OS === 'web' ? 15 : 0,
        },
        tabBarActiveTintColor: theme.blue10.val,
        tabBarInactiveTintColor: theme.gray11.val,
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarTestID: 'home-tab',
          tabBarIcon: ({ color, focused }) => (
            <Home
              size="$icon.sm"
              col={color}
              fill={focused ? theme.blue6.val : theme.background.val}
            />
          ),
          tabBarLabel: ({ color }) => (
            <TabLabel label={t('bottom-tabs.home')} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="ListAnime"
        component={ListAnimeNavigator}
        options={{
          tabBarTestID: 'search-tab',
          tabBarIcon: ({ color, focused }) => (
            <Search
              size="$icon.sm"
              col={color}
              fill={focused ? theme.blue6.val : theme.background.val}
            />
          ),
          tabBarLabel: ({ color }) => (
            <TabLabel label={t('bottom-tabs.discover')} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsNavigator}
        options={{
          tabBarTestID: 'settings-tab',
          tabBarIcon: ({ color, focused }) => (
            <Settings
              size="$icon.sm"
              col={color}
              fill={focused ? theme.blue6.val : theme.background.val}
            />
          ),
          tabBarLabel: ({ color }) => (
            <TabLabel label={t('bottom-tabs.settings')} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
