import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { observer } from '@legendapp/state/react'
import { enUS, ptBR } from 'date-fns/locale'
import setDefaultOptions from 'date-fns/setDefaultOptions'

import { ScrollView, Separator, Stack, XStack } from 'tamagui'
import { Moon, Sun } from '@tamagui/lucide-icons'

import Brazil from '@/assets/brazil.svg'
import Usa from '@/assets/usa.svg'
import { Switch, Text } from '@/components'
import { Store } from '@/store/index'

export const Settings = observer(() => {
  const { t, i18n } = useTranslation()
  const theme = Store.settings.theme.get()
  const isCheckedTheme = theme === 'dark'
  const language = Store.settings.lang.get()
  const isCheckedLanguage = language === 'pt-BR'

  const onCheckedThemeChange = useCallback(() => {
    const definedTheme = theme === 'light' ? 'dark' : 'light'
    Store.settings.theme.set(definedTheme)
  }, [theme])

  const onCheckedLanguageChange = useCallback(() => {
    const definedLanguage = language === 'pt-BR' ? 'en-US' : 'pt-BR'
    i18n.changeLanguage(definedLanguage).then(() => {
      Store.settings.lang.set(definedLanguage)

      setDefaultOptions({ locale: definedLanguage === 'en-US' ? enUS : ptBR })
    })
  }, [i18n, language])

  return (
    <ScrollView
      fg={1}
      pt="$4"
      px="$4"
      pb="$12"
      bg="$background"
      showsVerticalScrollIndicator={false}
    >
      <Stack gap="$4">
        <XStack jc="space-between" ai="center">
          <Text fow="$6">{t('settings.theme')}</Text>
          <Switch
            checked={isCheckedTheme}
            onCheckedChange={onCheckedThemeChange}
            testID="switch-theme"
          >
            <Switch.Thumb>
              {isCheckedTheme ? <Moon size="$1" col="$blue10" /> : <Sun size="$1" col="$yellow8" />}
            </Switch.Thumb>
          </Switch>
        </XStack>
        <Separator />
        <XStack jc="space-between" ai="center">
          <Text fow="$6">{t('settings.language')}</Text>
          <Switch
            checked={isCheckedLanguage}
            onCheckedChange={onCheckedLanguageChange}
            testID="switch-language"
          >
            <Switch.Thumb ai="center" jc="center">
              {isCheckedLanguage ? (
                <Brazil height={10} width={15} />
              ) : (
                <Usa height={10} width={15} />
              )}
            </Switch.Thumb>
          </Switch>
        </XStack>
      </Stack>
    </ScrollView>
  )
})
