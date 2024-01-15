import React from 'react'

import { useNavigation } from '@react-navigation/native'

import { Button, Stack, XStack } from 'tamagui'
import { ChevronLeft } from '@tamagui/lucide-icons'

export type HeaderProps = {
  right?: React.ReactNode
}

export const Header = ({ right }: HeaderProps) => {
  const navigation = useNavigation()

  return (
    <XStack
      w="100%"
      px="$4"
      pb="$2"
      jc="space-between"
      ai="center"
      bg="$background"
      testID="header-container">
      <Button f={1} unstyled onPress={navigation.goBack} left="$-2.5">
        <ChevronLeft />
      </Button>
      <Stack f={1} ai="center" />
      <Stack f={1} ai="flex-end">
        {right && right}
      </Stack>
    </XStack>
  )
}
