import { useMemo } from 'react'
import ContentLoader from 'react-content-loader/native'
import { useWindowDimensions } from 'react-native'

import { Rect } from 'react-native-svg'

import { getTokens, useTheme } from 'tamagui'

import { useResponsiveCardsContext } from '@/context/ResponsiveCards'

export const SkeletonHorizontal = () => {
  const theme = useTheme()
  const { width } = useWindowDimensions()
  const { heightHorizontalCard, widthHorizontalCard } =
    useResponsiveCardsContext()
  const separator = useMemo(() => getTokens().space['$2.5'].val, [])
  const widthCardWithSpacing = useMemo(
    () => widthHorizontalCard + separator,
    [widthHorizontalCard, separator],
  )
  const borderRadius = useMemo(() => getTokens().space.$2.val, [])
  const widthContentLoader = useMemo(
    () => width + widthHorizontalCard - getTokens().size.$6.val,
    [width, widthHorizontalCard],
  )
  const length = useMemo(
    () => Math.round(width / widthCardWithSpacing),
    [width, widthCardWithSpacing],
  )

  return (
    <ContentLoader
      speed={2}
      width={widthContentLoader}
      height={heightHorizontalCard}
      viewBox={`0 0 ${widthContentLoader} ${heightHorizontalCard}`}
      backgroundColor={theme.color5.val}
      foregroundColor={theme.color8.val}>
      {Array.from({ length }).map((_, index) => (
        <Rect
          key={index}
          x={index === 0 ? 0 : widthCardWithSpacing * index}
          y="0"
          rx={borderRadius}
          ry={borderRadius}
          width={widthHorizontalCard}
          height={heightHorizontalCard}
        />
      ))}
    </ContentLoader>
  )
}
