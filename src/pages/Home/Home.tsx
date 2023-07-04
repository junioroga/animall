import { Search } from '@components'
import { useTranslation } from 'react-i18next'
import { XStack, YStack, H3 } from 'tamagui'

import { HeaderConfig } from './HeaderConfig'

export const Home = () => {
  const { t } = useTranslation()

  return (
    <YStack f={1} bg="$background">
      <YStack p="$4">
        <XStack jc="space-between" ai="center">
          <H3>{t('home.itsFunTime')}</H3>
          <HeaderConfig />
        </XStack>
        <Search />
      </YStack>
    </YStack>
  )
}
