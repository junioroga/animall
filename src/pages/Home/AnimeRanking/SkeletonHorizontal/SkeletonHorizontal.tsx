import { useMemo } from 'react'
import ContentLoader from 'react-content-loader/native'
import { useWindowDimensions } from 'react-native'

import { Rect } from 'react-native-svg'

import { getTokens, useTheme } from 'tamagui'

import { useHorizontalCardDimensions } from '@/hooks'

export const SkeletonHorizontal = () => {
  const theme = useTheme()
  const { width } = useWindowDimensions()
  const { HEIGHT_HORIZONTAL_CARD, WIDTH_HORIZONTAL_CARD } =
    useHorizontalCardDimensions()
  const separator = useMemo(() => getTokens().space[2.5].val, [])
  const widthCardWithSpacing = useMemo(
    () => WIDTH_HORIZONTAL_CARD + separator,
    [WIDTH_HORIZONTAL_CARD, separator],
  )
  const borderRadius = useMemo(() => getTokens().space[2].val, [])
  const widthContentLoader = useMemo(
    () => width + WIDTH_HORIZONTAL_CARD - getTokens().size[6].val,
    [width, WIDTH_HORIZONTAL_CARD],
  )
  const length = useMemo(
    () => Math.round(width / widthCardWithSpacing),
    [width, widthCardWithSpacing],
  )

  return (
    <ContentLoader
      speed={2}
      width={widthContentLoader}
      height={HEIGHT_HORIZONTAL_CARD}
      viewBox={`0 0 ${widthContentLoader} ${HEIGHT_HORIZONTAL_CARD}`}
      backgroundColor={theme.color5.val}
      foregroundColor={theme.color8.val}>
      {Array.from({ length }).map((_, index) => (
        <Rect
          key={index}
          x={index === 0 ? 0 : widthCardWithSpacing * index}
          y="0"
          rx={borderRadius}
          ry={borderRadius}
          width={WIDTH_HORIZONTAL_CARD}
          height={HEIGHT_HORIZONTAL_CARD}
        />
      ))}
    </ContentLoader>
  )
}
