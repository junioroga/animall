import { GetProps, styled, Text as TText } from 'tamagui'

export const Text = styled(TText, {
  name: 'Text',
  fontFamily: '$body',
  fontWeight: '$4',
  fontSize: '$3',
})

export type TextProps = GetProps<typeof Text>
