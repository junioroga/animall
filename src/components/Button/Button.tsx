import { cloneElement, useContext } from 'react'

import {
  Button as TButton,
  createStyledContext,
  GetProps,
  SizeTokens,
  styled,
  withStaticProperties,
} from 'tamagui'

import { Text } from '@components/Text'

const ButtonContext = createStyledContext({
  type: undefined,
  size: undefined,
})

const ButtonFrame = styled(TButton, {
  context: ButtonContext,
  name: 'Button',

  variants: {
    type: {
      normal: {
        bg: '$blue10',
      },
      outline: {
        bw: '$1',
        boc: '$blue10',
      },
      ghost: {
        chromeless: true,
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
      default: {},
    },
    disabled: {
      true: {
        opacity: 0.5,
        pointerEvents: 'none',
      },
    },
  } as const,

  defaultVariants: {
    type: 'normal',
    buttonSize: 'small',
    disabled: false,
  },
})

const ButtonIcon = (props: { children: any; size: SizeTokens }) => {
  const { type } = useContext(ButtonContext)

  return cloneElement(props.children, {
    size: props.size || '$1',
    color: type === 'normal' ? '$gray1' : '$blue10',
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
