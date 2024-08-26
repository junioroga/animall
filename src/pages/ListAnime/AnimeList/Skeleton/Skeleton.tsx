import { useMemo } from 'react'
import ContentLoader from 'react-content-loader/native'
import { useWindowDimensions } from 'react-native'

import { Rect } from 'react-native-svg'

import { getTokens, useTheme } from 'tamagui'

import { useResponsiveCardsContext } from '@/context/ResponsiveCards'

export const Skeleton = () => {
  const theme = useTheme()
  const { width, height } = useWindowDimensions()
  const { widthVerticalCard, heightVerticalCard, numberVerticalColumns } =
    useResponsiveCardsContext()
  const widthCardWithSpacing = useMemo(
    () => widthVerticalCard + getTokens().space['$2.5'].val,
    [widthVerticalCard]
  )
  const paddingHorizontal = useMemo(() => getTokens().space.$4.val, [])
  const borderRadius = useMemo(() => getTokens().space.$2.val, [])
  const heightCardWithSpacing = useMemo(
    () => heightVerticalCard + getTokens().space['$2.5'].val,
    [heightVerticalCard]
  )
  const lengthVerticalItems = useMemo(
    () => Math.round(height / heightVerticalCard),
    [height, heightVerticalCard]
  )
  const contentHeight = useMemo(
    () => (heightVerticalCard + getTokens().space['$2.5'].val) * lengthVerticalItems,
    [heightVerticalCard, lengthVerticalItems]
  )

  return (
    <ContentLoader
      speed={2}
      width={width}
      height={contentHeight}
      viewBox={`0 0 ${width} ${contentHeight}`}
      backgroundColor={theme.color5.val}
      foregroundColor={theme.color8.val}
    >
      {Array.from({ length: lengthVerticalItems }).map((_, verticalIndex) =>
        Array.from({ length: numberVerticalColumns }).map((_, horizontalIndex) => (
          <Rect
            key={`${verticalIndex}${horizontalIndex}`}
            x={widthCardWithSpacing * horizontalIndex + paddingHorizontal}
            y={verticalIndex * heightCardWithSpacing}
            rx={borderRadius}
            ry={borderRadius}
            width={widthVerticalCard}
            height={heightVerticalCard}
          />
        ))
      )}
    </ContentLoader>
  )
}
