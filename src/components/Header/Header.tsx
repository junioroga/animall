import { useNavigation } from '@react-navigation/native'
import { ChevronLeft } from '@tamagui/lucide-icons'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Stack, XStack, getTokens } from 'tamagui'

export type HeaderProps = {
  right?: React.ReactNode
}

export const Header = ({ right }: HeaderProps) => {
  const navigation = useNavigation()
  return (
    <XStack w="100%" jc="space-between" px="$4" pt="$2" ai="center">
      <TouchableOpacity
        onPress={navigation.goBack}
        style={{ left: -getTokens()?.size[0.75].val }}>
        <ChevronLeft />
      </TouchableOpacity>
      <Stack>{right && right}</Stack>
    </XStack>
  )
}
