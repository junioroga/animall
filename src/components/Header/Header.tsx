import React from 'react'
import { TouchableOpacity } from 'react-native'

import { useNavigation } from '@react-navigation/native'

import { getTokens, Stack, XStack } from 'tamagui'
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
      <TouchableOpacity
        onPress={navigation.goBack}
        style={{ left: -getTokens()?.size[0.75].val }}>
        <ChevronLeft />
      </TouchableOpacity>
      <Stack>{right && right}</Stack>
    </XStack>
  )
}
