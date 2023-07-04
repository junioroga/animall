import { observer } from '@legendapp/state/react'
import { Store } from '@store'
import { Moon, Sun } from '@tamagui/lucide-icons'
import { XStack } from 'tamagui'

import { Switch, SwitchProps } from './Switch'

export const ChangeTheme = observer(({ ...rest }: SwitchProps) => {
  const isChecked = Store.settingsObs.settings.theme.get() === 'dark'

  const onCheckedChange = () =>
    Store.settingsObs.settings.theme.set((theme) =>
      theme === 'light' ? 'dark' : 'light',
    )

  return (
    <XStack space="$2" ai="center">
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
