import ContentLoader from 'react-content-loader/native'
import { Dimensions } from 'react-native'

import { Circle, Rect } from 'react-native-svg'

import { useTheme } from 'tamagui'

const { width, height } = Dimensions.get('screen')

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
      <Rect x="20" y="15" rx="5" ry="5" width="130" height="180" />
      <Rect x="160" y="17" rx="5" ry="5" width="120" height="20" />
      <Rect x="160" y="50" rx="5" ry="5" width="150" height="15" />
      <Circle cx="355" cy="40" r="25" />
      <Rect x="40" y="220" rx="5" ry="5" width="20" height="20" />
      <Rect x="25" y="245" rx="5" ry="5" width="50" height="50" />
      <Rect x="20" y="300" rx="5" ry="5" width="60" height="15" />
      <Rect x="140" y="220" rx="5" ry="5" width="20" height="20" />
      <Rect x="125" y="245" rx="5" ry="5" width="50" height="50" />
      <Rect x="120" y="300" rx="5" ry="5" width="60" height="15" />
      <Rect x="240" y="220" rx="5" ry="5" width="20" height="20" />
      <Rect x="225" y="245" rx="5" ry="5" width="50" height="50" />
      <Rect x="220" y="300" rx="5" ry="5" width="60" height="15" />
      <Rect x="340" y="220" rx="5" ry="5" width="20" height="20" />
      <Rect x="325" y="245" rx="5" ry="5" width="50" height="50" />
      <Rect x="320" y="300" rx="5" ry="5" width="60" height="15" />
      <Rect x="320" y="300" rx="5" ry="5" width="60" height="15" />
      <Rect x="20" y="340" rx="5" ry="5" width="300" height="15" />
      <Rect x="20" y="365" rx="5" ry="5" width="320" height="15" />
      <Rect x="20" y="390" rx="5" ry="5" width="340" height="15" />
      <Rect x="20" y="415" rx="5" ry="5" width="350" height="15" />
    </ContentLoader>
  )
}
