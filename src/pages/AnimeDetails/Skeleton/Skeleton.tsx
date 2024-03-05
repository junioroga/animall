import ContentLoader from 'react-content-loader/native'
import { useWindowDimensions } from 'react-native'

import { Circle, Rect } from 'react-native-svg'

import { getTokens, useTheme } from 'tamagui'

import { Image } from '@/components'

import { useResponsiveCardsContext } from '@/context/ResponsiveCards'

type Props = {
  picture: string
  sharedTransitionId: string
}

export const Skeleton = ({ picture, sharedTransitionId }: Props) => {
  const theme = useTheme()
  const { width, height } = useWindowDimensions()
  const { heightHorizontalCard, widthHorizontalCard } =
    useResponsiveCardsContext()
  const WIDTH_CARD_DETAILS = widthHorizontalCard / 2.5
  const HEIGHT_CARD = heightHorizontalCard * 1.1

  return (
    <ContentLoader
      speed={2}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      backgroundColor={theme.color5.val}
      foregroundColor={theme.color8.val}>
      <Image
        source={picture}
        style={{
          borderRadius: 3,
          height: heightHorizontalCard * 1.1,
          width: widthHorizontalCard / 2.5,
          left: getTokens().space[4].val,
          top: getTokens().space[4].val,
        }}
        contentFit="fill"
        sharedTransitionTag={sharedTransitionId}
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
