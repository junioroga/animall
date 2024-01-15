import ContentLoader from 'react-content-loader/native'
import { Dimensions } from 'react-native'

import { Rect } from 'react-native-svg'

import { getTokens, useTheme } from 'tamagui'

const { width, height } = Dimensions.get('screen')

const widthCard = width / 3 - getTokens().space[4].val
const widthCardWithSpacing = widthCard + getTokens().space[2.5].val
const paddingHorizontal = getTokens().space[4].val
const borderRadius = getTokens().space[2].val
const heightCard = getTokens().size[14].val
const heightCardWithSpacing =
  getTokens().size[14].val + getTokens().space[1.5].val

export const Skeleton = () => {
  const theme = useTheme()

  return (
    <ContentLoader
      speed={2}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      backgroundColor={theme.color5.val}
      foregroundColor={theme.color8.val}>
      <Rect
        x={paddingHorizontal}
        y="0"
        rx={borderRadius}
        ry={borderRadius}
        width={widthCard}
        height={heightCard}
      />
      <Rect
        x={widthCardWithSpacing + paddingHorizontal}
        y="0"
        rx={borderRadius}
        ry={borderRadius}
        width={widthCard}
        height={heightCard}
      />
      <Rect
        x={widthCardWithSpacing * 2 + paddingHorizontal}
        y="0"
        rx={borderRadius}
        ry={borderRadius}
        width={widthCard}
        height={heightCard}
      />
      <Rect
        x={paddingHorizontal}
        y={heightCardWithSpacing}
        rx={borderRadius}
        ry={borderRadius}
        width={widthCard}
        height={heightCard}
      />
      <Rect
        x={widthCardWithSpacing + paddingHorizontal}
        y={heightCardWithSpacing}
        rx={borderRadius}
        ry={borderRadius}
        width={widthCard}
        height={heightCard}
      />
      <Rect
        x={widthCardWithSpacing * 2 + paddingHorizontal}
        y={heightCardWithSpacing}
        rx={borderRadius}
        ry={borderRadius}
        width={widthCard}
        height={heightCard}
      />
      <Rect
        x={paddingHorizontal}
        y={heightCardWithSpacing * 2}
        rx={borderRadius}
        ry={borderRadius}
        width={widthCard}
        height={heightCard}
      />
      <Rect
        x={widthCardWithSpacing + paddingHorizontal}
        y={heightCardWithSpacing * 2}
        rx={borderRadius}
        ry={borderRadius}
        width={widthCard}
        height={heightCard}
      />
      <Rect
        x={widthCardWithSpacing * 2 + paddingHorizontal}
        y={heightCardWithSpacing * 2}
        rx={borderRadius}
        ry={borderRadius}
        width={widthCard}
        height={heightCard}
      />
      <Rect
        x={paddingHorizontal}
        y={heightCardWithSpacing * 3}
        rx={borderRadius}
        ry={borderRadius}
        width={widthCard}
        height={heightCard}
      />
      <Rect
        x={widthCardWithSpacing + paddingHorizontal}
        y={heightCardWithSpacing * 3}
        rx={borderRadius}
        ry={borderRadius}
        width={widthCard}
        height={heightCard}
      />
      <Rect
        x={widthCardWithSpacing * 2 + paddingHorizontal}
        y={heightCardWithSpacing * 3}
        rx={borderRadius}
        ry={borderRadius}
        width={widthCard}
        height={heightCard}
      />
    </ContentLoader>
  )
}
