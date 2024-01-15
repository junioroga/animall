import ContentLoader from 'react-content-loader/native'
import { Dimensions } from 'react-native'

import { Rect } from 'react-native-svg'

import { getTokens, useTheme } from 'tamagui'

const { width } = Dimensions.get('screen')
const widthCard = width - getTokens().size[7].val
const separator = getTokens().space[2.5].val
const widthCardWithSpacing = widthCard + separator
const borderRadius = getTokens().space[2].val
const heightCard = getTokens().size[13].val
const widthContentLoader = width + widthCard - getTokens().size[6].val

export const SkeletonHorizontal = () => {
  const theme = useTheme()

  return (
    <ContentLoader
      speed={2}
      width={widthContentLoader}
      height={300}
      viewBox={`0 0 ${widthContentLoader} 300`}
      backgroundColor={theme.color5.val}
      foregroundColor={theme.color8.val}>
      <Rect
        x="0"
        y="70"
        rx={borderRadius}
        ry={borderRadius}
        width={widthCard}
        height={heightCard}
      />
      <Rect
        x={widthCardWithSpacing}
        y="70"
        rx={borderRadius}
        ry={borderRadius}
        width={widthCard}
        height={heightCard}
      />
    </ContentLoader>
  )
}
