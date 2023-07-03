import { GetProps, Switch as TSwitch, styled } from 'tamagui'

const StyledText = styled(TSwitch)

const HigherOrderSwitch = StyledText.styleable((props, ref) => (
  <TSwitch ref={ref} {...props}>
    <TSwitch.Thumb animation="bouncy" />
  </TSwitch>
))

export const Switch = styled(HigherOrderSwitch, {
  name: 'Switch',

  variants: {
    checked: {
      true: {
        bg: '$green8Light',
      },
      false: {
        bg: '$gray8Light',
      },
    },
    size: {
      '...size': (size) => {
        return {
          size,
        }
      },
    },
  } as const,

  defaultVariants: {
    checked: false,
    size: '$2',
  },
})

export type SwitchProps = GetProps<typeof Switch>
