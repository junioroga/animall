import ContentLoader from 'react-content-loader/native'
import { Dimensions } from 'react-native'

import { Rect } from 'react-native-svg'

import { getTokens, useTheme } from 'tamagui'

const { width } = Dimensions.get('screen')
const CardHeight = getTokens().size[18].val

export const Skeleton = () => {
  const theme = useTheme()

  return (
    <ContentLoader
      speed={2}
      width={width}
      height={CardHeight}
      viewBox={`0 0 ${width} ${CardHeight}`}
      backgroundColor={theme.color5.val}
      foregroundColor={theme.color8.val}
      style={{ position: 'absolute' }}>
      <Rect x="0" y="0" rx="0" ry="0" width={width} height={CardHeight} />
    </ContentLoader>
  )
}
