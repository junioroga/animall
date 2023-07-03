import { GetProps, Button as TButton, styled } from 'tamagui'

export const Button = styled(TButton, {
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
    buttonSize: {
      small: {
        h: '$5',
        w: '$5',
      },
      medium: {
        h: '$5',
        w: '$10',
      },
      large: {
        h: '$5',
        f: 1,
      },
    },
    disabled: {
      true: {
        opacity: 0.5,
        pointerEvents: 'none',
      },
      false: {
        opacity: 1,
      },
    },
  } as const,

  defaultVariants: {
    variant: 'normal',
    buttonSize: 'small',
    disabled: false,
  },
})

export type ButtonProps = GetProps<typeof Button>
