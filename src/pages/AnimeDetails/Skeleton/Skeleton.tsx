import ContentLoader from 'react-content-loader/native'
import { useWindowDimensions } from 'react-native'

import { Circle, Rect } from 'react-native-svg'

import { getTokens, useMedia, useTheme } from 'tamagui'

export const Skeleton = () => {
  const theme = useTheme()
  const { width, height } = useWindowDimensions()
  const media = useMedia()
  const WIDTH_CARD_DETAILS = media.isHandsetOrTablet ? width / 4 : width / 10
  const HEIGHT_CARD = getTokens().size[13].val

  return (
    <ContentLoader
      speed={2}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      backgroundColor={theme.color5.val}
      foregroundColor={theme.color8.val}>
      <Rect
        x="20"
        y="15"
        rx="5"
        ry="5"
        width={WIDTH_CARD_DETAILS}
        height={HEIGHT_CARD}
      />
      <Rect
        x={WIDTH_CARD_DETAILS + 30}
        y="17"
        rx="5"
        ry="5"
        width="120"
        height="20"
      />
      <Rect
        x={WIDTH_CARD_DETAILS + 30}
        y="50"
        rx="5"
        ry="5"
        width="150"
        height="15"
      />
      <Circle cx={width - 40} cy="40" r="25" />
      <Rect
        x={20}
        y={HEIGHT_CARD + 40}
        rx="5"
        ry="5"
        width={width - 40}
        height="15"
      />
      <Rect
        x={20}
        y={HEIGHT_CARD + 70}
        rx="5"
        ry="5"
        width={width - 40}
        height="15"
      />
      <Rect
        x={20}
        y={HEIGHT_CARD + 100}
        rx="5"
        ry="5"
        width={width - 40}
        height="15"
      />
      <Rect
        x={20}
        y={HEIGHT_CARD + 130}
        rx="5"
        ry="5"
        width={width - 40}
        height="15"
      />
      <Rect
        x={20}
        y={HEIGHT_CARD + 160}
        rx="5"
        ry="5"
        width={width - 40}
        height="15"
      />
    </ContentLoader>
  )
}
