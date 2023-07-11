import { GetProps, Text as TText, styled } from 'tamagui'

export const Text = styled(TText, {
  name: 'Text',
  fontFamily: '$body',
  fontWeight: '$4',
})

export type TextProps = GetProps<typeof Text>
