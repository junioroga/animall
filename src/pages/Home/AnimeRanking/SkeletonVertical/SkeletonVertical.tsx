import { useMemo } from 'react'
import ContentLoader from 'react-content-loader/native'
import { useWindowDimensions } from 'react-native'

import { Rect } from 'react-native-svg'

import { getTokens, useTheme } from 'tamagui'

import { useVerticalCardDimensions } from '@/hooks'

export const SkeletonVertical = () => {
  const theme = useTheme()
  const { width } = useWindowDimensions()
  const { WIDTH_VERTICAL_CARD, HEIGHT_VERTICAL_CARD } =
    useVerticalCardDimensions()
  const separator = useMemo(() => getTokens().space[2.5].val, [])
  const widthCardWithSpacing = useMemo(
    () => WIDTH_VERTICAL_CARD + separator,
    [WIDTH_VERTICAL_CARD, separator],
  )
  const borderRadius = useMemo(() => getTokens().space[2].val, [])
  const length = useMemo(
    () => Math.round(width / WIDTH_VERTICAL_CARD),
    [width, WIDTH_VERTICAL_CARD],
  )

  return (
    <ContentLoader
      speed={2}
      width={width}
      height={HEIGHT_VERTICAL_CARD}
      viewBox={`0 0 ${width} ${HEIGHT_VERTICAL_CARD}`}
      backgroundColor={theme.color5.val}
      foregroundColor={theme.color8.val}>
      {Array.from({ length }).map((_, index) => (
        <Rect
          key={index}
          x={widthCardWithSpacing * index}
          y={0}
          rx={borderRadius}
          ry={borderRadius}
          width={WIDTH_VERTICAL_CARD}
          height={HEIGHT_VERTICAL_CARD}
        />
      ))}
    </ContentLoader>
  )
}
