import React from 'react'

import { useNavigation } from '@react-navigation/native'

import { Button, Stack, XStack } from 'tamagui'
import { ChevronLeft } from '@tamagui/lucide-icons'

import { Text } from '@/components/Text'

export type HeaderProps = {
  title?: string
  right?: React.ReactNode
}

export const Header = ({ title, right }: HeaderProps) => {
  const navigation = useNavigation()

  return (
    <XStack
      px="$4"
      py="$2"
      jc="space-between"
      ai="center"
      bg="$background"
      testID="header-container">
      <Button testID="button-back" onPress={navigation.goBack}>
        <ChevronLeft />
      </Button>
      <Text f={1} numberOfLines={1} px="$2" fow="$6" fos="$7" ta="center">
        {title && title}
      </Text>
      <Stack>{right && right}</Stack>
    </XStack>
  )
}
