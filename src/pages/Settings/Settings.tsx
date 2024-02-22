import React, { useCallback } from 'react'
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
  const isCheckedTheme = Store.settings.theme.get() === 'dark'
  const language = Store.settings.lang.get()
  const isCheckedLanguage = language === 'pt-BR'

  const onCheckedThemeChange = useCallback(() => {
    const defineTheme = theme === 'light' ? 'dark' : 'light'
    Store.settings.theme.set(defineTheme)
  }, [theme])

  const onCheckedLanguageChange = useCallback(() => {
    const defineLanguage = language === 'pt-BR' ? 'en-US' : 'pt-BR'
    i18n.changeLanguage(defineLanguage).then(() => {
      Store.settings.lang.set(defineLanguage)

      setDefaultOptions({ locale: defineLanguage === 'en-US' ? enUS : ptBR })
    })
  }, [i18n, language])

  return (
    <ScrollView
      fg={1}
      pt="$4"
      px="$4"
      pb="$12"
      bg="$background"
      showsVerticalScrollIndicator={false}>
      <Stack gap="$4">
        <XStack jc="space-between" ai="center">
          <Text fow="$6">{t('settings.theme')}</Text>
          <Switch
            checked={isCheckedTheme}
            onCheckedChange={onCheckedThemeChange}
            testID="switch-theme">
            <Switch.Thumb>
              {isCheckedTheme ? (
                <Moon size="$1" col="$blue10" />
              ) : (
                <Sun size="$1" col="$yellow8" />
              )}
            </Switch.Thumb>
          </Switch>
        </XStack>
        <Separator />
        <XStack jc="space-between" ai="center">
          <Text fow="$6">{t('settings.language')}</Text>
          <Switch
            checked={isCheckedLanguage}
            onCheckedChange={onCheckedLanguageChange}
            testID="switch-language">
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
