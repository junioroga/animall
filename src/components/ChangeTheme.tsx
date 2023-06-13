import { observer } from '@legendapp/state/react';
import { Store } from '@store';
import { Moon, Sun } from '@tamagui/lucide-icons';
import { Switch, SwitchProps, XStack } from 'tamagui';

export const ChangeTheme = observer(({ ...rest }: SwitchProps) => {
  const onCheckedChange = () =>
    Store.settingsObs.settings.theme.set((theme) => (theme === 'light' ? 'dark' : 'light'));

  return (
    <XStack space="$2" ai="center">
      <Sun size="$2" />
      <Switch
        size="$2"
        bg="$gray6"
        checked={Store.settingsObs.settings.theme.get() === 'dark'}
        onCheckedChange={onCheckedChange}
        {...rest}>
        <Switch.Thumb animation="bouncy" />
      </Switch>
      <Moon size="$2" />
    </XStack>
  );
});
