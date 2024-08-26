import { useMemo } from 'react'
import ContentLoader from 'react-content-loader/native'
import { useWindowDimensions } from 'react-native'

import { Rect } from 'react-native-svg'

import { getTokens, useTheme } from 'tamagui'

import { useResponsiveCardsContext } from '@/context/ResponsiveCards'

export const SkeletonVertical = () => {
  const theme = useTheme()
  const { width } = useWindowDimensions()
  const { widthVerticalCard, heightVerticalCard } = useResponsiveCardsContext()
  const separator = useMemo(() => getTokens().space['$2.5'].val, [])
  const widthCardWithSpacing = useMemo(
    () => widthVerticalCard + separator,
    [widthVerticalCard, separator]
  )
  const borderRadius = useMemo(() => getTokens().space.$2.val, [])
  const length = useMemo(() => Math.round(width / widthVerticalCard), [width, widthVerticalCard])

  return (
    <ContentLoader
      speed={2}
      width={width}
      height={heightVerticalCard}
      viewBox={`0 0 ${width} ${heightVerticalCard}`}
      backgroundColor={theme.color5.val}
      foregroundColor={theme.color8.val}
    >
      {Array.from({ length }).map((_, index) => (
        <Rect
          key={index}
          x={widthCardWithSpacing * index}
          y={0}
          rx={borderRadius}
          ry={borderRadius}
          width={widthVerticalCard}
          height={heightVerticalCard}
        />
      ))}
    </ContentLoader>
  )
}
