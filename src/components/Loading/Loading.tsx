import { GetProps, Spinner, styled } from 'tamagui'

export const Loading = styled(Spinner, {
  name: 'Loading',
  als: 'center',

  variants: {
    variant: {
      rounded: {
        p: '$5',
        br: '$3',
        bg: '$color12',
      },
      circular: {
        p: '$5',
        br: '$12',
        bg: '$color12',
      },
      ghost: {},
    },
  } as const,

  defaultVariants: {
    variant: 'ghost',
  },
})

export type LoadingProps = GetProps<typeof Loading>
