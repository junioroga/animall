import React from 'react'

import { useNavigation } from '@react-navigation/native'

import { Button, H5, Stack, XStack } from 'tamagui'
import { ChevronLeft } from '@tamagui/lucide-icons'

export type HeaderProps = {
  title?: string
  right?: React.ReactNode
}

export const Header = ({ title, right }: HeaderProps) => {
  const navigation = useNavigation()

  return (
    <XStack
      w="100%"
      px="$4"
      py="$2"
      jc="space-between"
      ai="center"
      bg="$background"
      testID="header-container">
      <Button
        testID="button-back"
        $isHandsetOrTablet={{ unstyled: true }}
        onPress={navigation.goBack}>
        <ChevronLeft />
      </Button>
      <H5>{title && title}</H5>
      <Stack>{right && right}</Stack>
    </XStack>
  )
}
