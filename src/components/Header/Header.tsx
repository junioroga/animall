import { useNavigation } from '@react-navigation/native'
import { ArrowLeft, Tv } from '@tamagui/lucide-icons'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Stack, XStack } from 'tamagui'

export type HeaderProps = {
  right?: React.ReactNode
}

export const Header = ({ right }: HeaderProps) => {
  const navigation = useNavigation()
  return (
    <XStack w="100%" jc="space-between" px="$4" pt="$2" ai="center">
      <TouchableOpacity onPress={navigation.goBack}>
        <ArrowLeft />
      </TouchableOpacity>
      <Tv />
      <Stack>{right && right}</Stack>
    </XStack>
  )
}
