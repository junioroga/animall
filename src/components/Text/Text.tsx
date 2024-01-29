import { GetProps, styled, Text as TText } from 'tamagui'

export const Text = styled(TText, {
  name: 'Text',
  ff: '$body',
  fow: '$4',
  fos: '$3',
})

export type TextProps = GetProps<typeof Text>
