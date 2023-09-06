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
      jc="space-between"
      px="$4"
      pb="$2"
      ai="center"
      bg="$background">
      <Button unstyled onPress={navigation.goBack} left="$-2.5">
        <ChevronLeft />
      </Button>
      <Stack>{right && right}</Stack>
    </XStack>
  )
}
