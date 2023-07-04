import { ChangeTheme } from '@components/ChangeTheme'
import { Search } from '@components/Search'
import { Store } from '@store'
import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { XStack, YStack, H3 } from 'tamagui'

const Home = () => {
  const { t, i18n } = useTranslation()

  const changeLanguage = useCallback(
    (value: 'pt' | 'en') => {
      i18n
        .changeLanguage(value)
        .then(() => Store.settingsObs.settings.lang.set(value))
    },
    [i18n],
  )

  console.log(changeLanguage)
  return (
    <YStack f={1} bg="$background">
      <YStack p="$4">
        <XStack jc="space-between" ai="center">
          <H3>{t('home.itsFunTime')}</H3>
          <ChangeTheme />
        </XStack>
        <Search />
      </YStack>
    </YStack>
  )
}

export default Home
