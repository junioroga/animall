import {
  GetProps,
  styled,
  Switch as TSwitch,
  withStaticProperties,
} from 'tamagui'

const SwitchFrame = styled(TSwitch, {
  name: 'Switch',
  ai: 'center',
  size: '$3',
})

const SwitchThumb = styled(TSwitch.Thumb, {
  name: 'SwitchThumb',
  ai: 'center',
  jc: 'center',
  animation: 'bouncy',
  bg: '$color1',
})

export const Switch = withStaticProperties(SwitchFrame, {
  Thumb: SwitchThumb,
})

export type SwitchProps = GetProps<typeof TSwitch>
