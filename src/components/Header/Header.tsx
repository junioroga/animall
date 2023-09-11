import React, { useMemo } from 'react'

import { useNavigation } from '@react-navigation/native'

import { Button, Stack, XStack } from 'tamagui'
import { ChevronLeft } from '@tamagui/lucide-icons'

import AsepriteDark from '@assets/aseprite_dark.svg'
import AsepriteLight from '@assets/aseprite_light.svg'
import { Store } from '@store/index'

export type HeaderProps = {
  right?: React.ReactNode
}

export const Header = ({ right }: HeaderProps) => {
  const navigation = useNavigation()
  const theme = Store.settings.theme.get()

  const AsepriteTheme = useMemo(
    () => (theme === 'light' ? AsepriteLight : AsepriteDark),
    [theme],
  )

  return (
    <XStack
      w="100%"
      px="$4"
      pb="$2"
      jc="space-between"
      ai="center"
      bg="$background">
      <Button f={1} unstyled onPress={navigation.goBack} left="$-2.5">
        <ChevronLeft />
      </Button>
      <Stack f={1} ai="center">
        <AsepriteTheme height={30} width={30} />
      </Stack>
      <Stack f={1} ai="flex-end">
        {right && right}
      </Stack>
    </XStack>
  )
}
