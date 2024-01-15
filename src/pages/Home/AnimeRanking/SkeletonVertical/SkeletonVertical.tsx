import ContentLoader from 'react-content-loader/native'
import { Dimensions } from 'react-native'

import { Rect } from 'react-native-svg'

import { getTokens, useTheme } from 'tamagui'

const { width } = Dimensions.get('screen')
const widthCard = width / 3 - getTokens().space[4].val
const separator = getTokens().space[2.5].val
const widthCardWithSpacing = widthCard + separator
const borderRadius = getTokens().space[2].val
const heightCard = getTokens().size[14].val

export const SkeletonVertical = () => {
  const theme = useTheme()

  return (
    <ContentLoader
      speed={2}
      width={width}
      height={300}
      viewBox={`0 0 ${width} 300`}
      backgroundColor={theme.color5.val}
      foregroundColor={theme.color8.val}>
      <Rect
        x={0}
        y="60"
        rx={borderRadius}
        ry={borderRadius}
        width={widthCardWithSpacing}
        height={heightCard}
      />
      <Rect
        x={widthCardWithSpacing + separator}
        y="60"
        rx={borderRadius}
        ry={borderRadius}
        width={widthCardWithSpacing}
        height={heightCard}
      />
      <Rect
        x={(widthCardWithSpacing + separator) * 2}
        y="60"
        rx={borderRadius}
        ry={borderRadius}
        width={widthCardWithSpacing}
        height={heightCard}
      />
    </ContentLoader>
  )
}
