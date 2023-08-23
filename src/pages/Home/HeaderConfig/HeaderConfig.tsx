import { Button, Switch, SwitchProps } from '@components'
import { observer } from '@legendapp/state/react'
import { Store } from '@store'
import { Languages, Moon, Sun } from '@tamagui/lucide-icons'
import { enUS, ptBR } from 'date-fns/locale'
import setDefaultOptions from 'date-fns/setDefaultOptions'
import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Stack, Popover, XStack } from 'tamagui'

export const HeaderConfig = observer(({ ...rest }: SwitchProps) => {
  const { t, i18n } = useTranslation()
  const isChecked = Store.settings.theme.get() === 'dark'
  const language = Store.settings.lang.get()

  const onCheckedChange = () =>
    Store.settings.theme.set((theme) => (theme === 'light' ? 'dark' : 'light'))

  const changeLanguage = useCallback(
    (value: 'pt' | 'en') => {
      i18n.changeLanguage(value).then(() => {
        Store.settings.lang.set(value)

        setDefaultOptions({ locale: value === 'en' ? enUS : ptBR })
      })
    },
    [i18n],
  )

  return (
    <XStack ai="center" space="$3">
      <Popover size="$4" allowFlip>
        <Popover.Trigger asChild>
          <Button size="$3" buttonSize="small" circular>
            <Button.Icon size="$1">
              <Languages />
            </Button.Icon>
          </Button>
        </Popover.Trigger>
        <Popover.Content
          borderWidth={1}
          borderColor="$gray10"
          f={1}
          enterStyle={{ x: 0, y: -10, opacity: 0 }}
          exitStyle={{ x: 0, y: -10, opacity: 0 }}
          x={0}
          y={0}
          opacity={1}
          animation={[
            'quick',
            {
              opacity: {
                overshootClamping: true,
              },
            },
          ]}
          elevate>
          <Popover.Arrow borderWidth={1} borderColor="$gray10" />
          <XStack space="$3">
            <Stack>
              <Popover.Close asChild>
                <Button
                  buttonSize="large"
                  type={language === 'pt' ? 'outline' : 'ghost'}
                  onPress={() => changeLanguage('pt')}>
                  <Button.Text>{t('language.portuguese')}</Button.Text>
                </Button>
              </Popover.Close>
            </Stack>
            <Stack>
              <Popover.Close asChild>
                <Button
                  buttonSize="large"
                  type={language === 'en' ? 'outline' : 'ghost'}
                  onPress={() => changeLanguage('en')}>
                  <Button.Text>{t('language.english')}</Button.Text>
                </Button>
              </Popover.Close>
            </Stack>
          </XStack>
        </Popover.Content>
      </Popover>
      <Switch
        checked={isChecked}
        onCheckedChange={onCheckedChange}
        iconChecked={<Moon size="$1" color="$blue9" />}
        iconUnchecked={<Sun size="$1" color="$yellow8" />}
        {...rest}
      />
    </XStack>
  )
})
