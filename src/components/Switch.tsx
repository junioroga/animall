import { GetProps, Switch as TSwitch, styled } from 'tamagui'

export type SwitchProps = GetProps<typeof TSwitch> & {
  iconChecked?: JSX.Element
  iconUnchecked?: JSX.Element
}

const StyledSwitch = styled(TSwitch)

const SwitchFrame = StyledSwitch.styleable((props: SwitchProps, ref) => {
  const icons = props.iconChecked && props.iconUnchecked

  return (
    <TSwitch ref={ref} {...props}>
      <TSwitch.Thumb
        animation="bouncy"
        ai="center"
        jc="center"
        bg="$background">
        {icons && (props.checked ? props.iconChecked : props.iconUnchecked)}
      </TSwitch.Thumb>
    </TSwitch>
  )
})

export const Switch = styled(SwitchFrame, {
  name: 'Switch',
  bg: '$gray5',
  bw: 0.3,
  boc: '$gray10',
  ai: 'center',

  variants: {
    size: {
      '...size': (size) => {
        return {
          size,
        }
      },
    },
  } as const,

  defaultVariants: {
    size: '$3.5',
  },
})
