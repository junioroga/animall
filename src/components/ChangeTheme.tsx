import { Moon, Sun } from '@tamagui/lucide-icons';
import { Switch, SwitchProps, XStack } from 'tamagui';

export const ChangeTheme = ({ ...rest }: SwitchProps) => {
  return (
    <XStack space="$2" ai="center">
      <Sun size="$2" />
      <Switch size="$2" bg="$gray6" {...rest}>
        <Switch.Thumb animation="bouncy" />
      </Switch>
      <Moon size="$2" />
    </XStack>
  );
};
