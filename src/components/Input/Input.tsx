import { GetProps, Input as TInput, styled } from 'tamagui'

export const Input = styled(TInput, {
  size: '$3',
  bw: '$1',
  boc: '$gray11',
  br: '$3',
  pl: '$3',
  placeholderTextColor: '$gray11',
  focusStyle: {
    bw: '$1',
    boc: '$blue10',
  },

  variants: {
    variant: {
      small: {
        h: '$5',
        w: '$5',
      },
      medium: {
        h: '$5',
        w: '$10',
      },
      full: {
        h: '$5',
        f: 1,
      },
    },
    editable: {
      true: {
        opacity: 1,
      },
      false: {
        opacity: 0.5,
        pointerEvents: 'none',
      },
    },
  } as const,

  defaultVariants: {
    variant: 'small',
    editable: true,
  },
})

export type InputProps = GetProps<typeof Input>
