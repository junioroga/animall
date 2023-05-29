import { Search } from '@tamagui/lucide-icons';
import { Button as TButton, styled } from 'tamagui';

export const Button = styled(TButton, {
  w: '$5',
  h: '$5',
  icon: Search,

  variants: {
    variant: {
      normal: {
        bg: '$blue10',
      },
      outline: {
        bw: '$1',
        boc: '$blue10',
      },
    },
  } as const,

  defaultVariants: {
    variant: 'normal',
  },
});
