import { observer } from '@legendapp/state/react'
import { Store } from '@store'
import { Moon, Sun } from '@tamagui/lucide-icons'
import { XStack, SwitchThumb } from 'tamagui'

import { Switch, SwitchProps } from './Switch'

export const ChangeTheme = observer(({ ...rest }: SwitchProps) => {
  const isChecked = Store.settingsObs.settings.theme.get() === 'dark'

  const onCheckedChange = () =>
    Store.settingsObs.settings.theme.set((theme) =>
      theme === 'light' ? 'dark' : 'light',
    )

  return (
    <XStack space="$2" ai="center">
      <Sun size="$2" />
      <Switch checked={isChecked} onCheckedChange={onCheckedChange} {...rest}>
        <SwitchThumb />
      </Switch>
      <Moon size="$2" />
    </XStack>
  )
})
