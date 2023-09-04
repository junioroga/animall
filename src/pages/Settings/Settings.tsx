import React, { useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { observer } from '@legendapp/state/react'
import { enUS, ptBR } from 'date-fns/locale'
import setDefaultOptions from 'date-fns/setDefaultOptions'

import {
  getTokens,
  ScrollView,
  Separator,
  Stack,
  XStack,
  YStack,
} from 'tamagui'
import { Moon, Sun } from '@tamagui/lucide-icons'

import Brazil from '@assets/brazil.svg'
import Usa from '@assets/usa.svg'
import { Switch, Text } from '@components'
import { Store } from '@store/index'

export const Settings = observer(() => {
  const { t, i18n } = useTranslation()
  const isCheckedTheme = Store.settings.theme.get() === 'dark'
  const language = Store.settings.lang.get()
  const isCheckedLanguage = language === 'pt'

  const onCheckedThemeChange = () =>
    Store.settings.theme.set((theme) => (theme === 'light' ? 'dark' : 'light'))

  const onCheckedLanguageChange = useCallback(() => {
    const defineLanguage = language === 'pt' ? 'en' : 'pt'
    i18n.changeLanguage(defineLanguage).then(() => {
      Store.settings.lang.set(defineLanguage)

      setDefaultOptions({ locale: defineLanguage === 'en' ? enUS : ptBR })
    })
  }, [i18n, language])

  return (
    <YStack f={1} bg="$background" pt="$4">
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: getTokens().space[4].val,
          paddingBottom: getTokens().space[12].val,
        }}
        showsVerticalScrollIndicator={false}>
        <Stack gap="$4">
          <XStack jc="space-between" ai="center">
            <Text fontWeight="$6">{t('settings.theme')}</Text>
            <Switch
              checked={isCheckedTheme}
              onCheckedChange={onCheckedThemeChange}>
              <Switch.Thumb>
                {isCheckedTheme ? (
                  <Moon size={16} color="$blue10" />
                ) : (
                  <Sun size={16} color="$yellow8" />
                )}
              </Switch.Thumb>
            </Switch>
          </XStack>
          <Separator />
          <XStack jc="space-between" ai="center">
            <Text fontWeight="$6">{t('settings.language')}</Text>
            <Switch
              checked={isCheckedLanguage}
              onCheckedChange={onCheckedLanguageChange}>
              <Switch.Thumb>
                {isCheckedTheme ? (
                  <Brazil height={10} width={15} />
                ) : (
                  <Usa height={10} width={15} />
                )}
              </Switch.Thumb>
            </Switch>
          </XStack>
        </Stack>
      </ScrollView>
    </YStack>
  )
})
