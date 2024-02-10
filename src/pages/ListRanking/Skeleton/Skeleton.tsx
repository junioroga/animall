import { useMemo } from 'react'
import ContentLoader from 'react-content-loader/native'
import { useWindowDimensions } from 'react-native'

import { Rect } from 'react-native-svg'

import { getTokens, useTheme } from 'tamagui'

import { useVerticalCardDimensions } from '@/hooks'

export const Skeleton = () => {
  const theme = useTheme()
  const { width, height } = useWindowDimensions()
  const { HEIGHT_VERTICAL_CARD, WIDTH_VERTICAL_CARD } =
    useVerticalCardDimensions()
  const widthCardWithSpacing = useMemo(
    () => WIDTH_VERTICAL_CARD + getTokens().space[2.5].val,
    [WIDTH_VERTICAL_CARD],
  )
  const paddingHorizontal = useMemo(() => getTokens().space[4].val, [])
  const borderRadius = useMemo(() => getTokens().space[2].val, [])
  const heightCardWithSpacing = useMemo(
    () => HEIGHT_VERTICAL_CARD + getTokens().space[2.5].val,
    [HEIGHT_VERTICAL_CARD],
  )
  const lengthVerticalItems = useMemo(
    () => Math.round(height / HEIGHT_VERTICAL_CARD),
    [height, HEIGHT_VERTICAL_CARD],
  )
  const lengthHorizontalItems = useMemo(
    () => Math.round(width / WIDTH_VERTICAL_CARD),
    [width, WIDTH_VERTICAL_CARD],
  )
  const contentHeight = useMemo(
    () =>
      (HEIGHT_VERTICAL_CARD + getTokens().space[2.5].val) * lengthVerticalItems,
    [HEIGHT_VERTICAL_CARD, lengthVerticalItems],
  )

  return (
    <ContentLoader
      speed={2}
      width={width}
      height={contentHeight}
      viewBox={`0 0 ${width} ${contentHeight}`}
      backgroundColor={theme.color5.val}
      foregroundColor={theme.color8.val}>
      {Array.from({ length: lengthVerticalItems }).map((_, verticalIndex) =>
        Array.from({ length: lengthHorizontalItems }).map(
          (_, horizontalIndex) => (
            <Rect
              key={`${verticalIndex}${horizontalIndex}`}
              x={widthCardWithSpacing * horizontalIndex + paddingHorizontal}
              y={verticalIndex * heightCardWithSpacing}
              rx={borderRadius}
              ry={borderRadius}
              width={WIDTH_VERTICAL_CARD}
              height={HEIGHT_VERTICAL_CARD}
            />
          ),
        ),
      )}
    </ContentLoader>
  )
}
