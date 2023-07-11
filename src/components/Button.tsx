import { cloneElement, useContext } from 'react'
import {
  GetProps,
  SizeTokens,
  Button as TButton,
  createStyledContext,
  styled,
  withStaticProperties,
} from 'tamagui'

import { Text } from './Text'

const ButtonContext = createStyledContext({
  variant: undefined,
  size: undefined,
})

const ButtonFrame = styled(TButton, {
  context: ButtonContext,
  name: 'Button',

  variants: {
    variant: {
      normal: {
        bg: '$blue10',
      },
      outline: {
        bw: '$1',
        boc: '$blue10',
      },
      ghost: {
        bw: '$1',
        boc: 'transparent',
      },
    },
    buttonSize: {
      small: {
        h: '$5',
        w: '$5',
      },
      medium: {
        h: '$5',
        f: 0.5,
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
    },
  } as const,

  defaultVariants: {
    variant: 'normal',
    buttonSize: 'small',
    disabled: false,
  },
})

const ButtonIcon = (props: { children: any; size: SizeTokens }) => {
  const { variant } = useContext(ButtonContext)

  return cloneElement(props.children, {
    size: props.size || '$1',
    color: variant === 'normal' ? '$gray1' : '$blue10',
  })
}

const ButtonText = styled(Text, {
  context: ButtonContext,
  name: 'ButtonText',
})

export const Button = withStaticProperties(ButtonFrame, {
  Icon: ButtonIcon,
  Text: ButtonText,
  Props: ButtonContext.Provider,
})

export type ButtonProps = GetProps<typeof Button>
