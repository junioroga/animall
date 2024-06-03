import React, { createContext, useContext, useMemo } from 'react'
import { useWindowDimensions } from 'react-native'

import { getTokens, useMedia } from 'tamagui'

type WidthResponsive = {
  width: number
  column: number
}

export interface ResponsiveCardsInterface {
  widthHorizontalCard: number
  heightHorizontalCard: number
  widthVerticalCard: number
  heightVerticalCard: number
  numberVerticalColumns: number
}

export const ResponsiveCardsContext = createContext<ResponsiveCardsInterface>(
  {} as ResponsiveCardsInterface,
)

export const ResponsiveCardsProvider = ({
  children,
}: React.PropsWithChildren) => {
  const { width } = useWindowDimensions()
  const { isWideDesktop, isTablet, isSmallDesktop, isNormalDesktop } =
    useMedia()
  const widthWithoutMargin = width - getTokens().space[4].val * 2
  const spacing = getTokens().space[2.5].val

  const widthResponsive = useMemo(() => {
    switch (true) {
      case isWideDesktop:
        return {
          width: (widthWithoutMargin - spacing * 11) / 12,
          column: 12,
        }
      case isNormalDesktop:
        return {
          width: (widthWithoutMargin - spacing * 8) / 9,
          column: 9,
        }
      case isSmallDesktop:
        return {
          width: (widthWithoutMargin - spacing * 6) / 7,
          column: 7,
        }
      case isTablet:
        return {
          width: (widthWithoutMargin - spacing * 3) / 4,
          column: 4,
        }
      default:
        return {
          width: (widthWithoutMargin - spacing * 2) / 3,
          column: 3,
        }
    }
  }, [
    isWideDesktop,
    isNormalDesktop,
    isSmallDesktop,
    isTablet,
    widthWithoutMargin,
    spacing,
  ]) as WidthResponsive

  const widthVerticalCard = useMemo(
    () => widthResponsive.width,
    [widthResponsive.width],
  )

  const heightVerticalCard = useMemo(
    () => widthVerticalCard * 1.8,
    [widthVerticalCard],
  )

  const numberVerticalColumns = useMemo(
    () => widthResponsive.column,
    [widthResponsive.column],
  )

  const widthDivisor = useMemo(() => {
    switch (true) {
      case isWideDesktop:
        return 4
      case isNormalDesktop:
        return 3
      case isSmallDesktop:
        return 2.5
      case isTablet:
        return 1.6
      default:
        return 1.3
    }
  }, [isWideDesktop, isTablet, isSmallDesktop, isNormalDesktop])

  const widthHorizontalCard = useMemo(
    () => width / widthDivisor,
    [widthDivisor, width],
  )
  const heightHorizontalCard = useMemo(
    () => widthHorizontalCard * 0.5,
    [widthHorizontalCard],
  )

  const value = useMemo(
    () => ({
      widthHorizontalCard,
      heightHorizontalCard,
      widthVerticalCard,
      heightVerticalCard,
      numberVerticalColumns,
    }),
    [
      widthHorizontalCard,
      heightHorizontalCard,
      widthVerticalCard,
      heightVerticalCard,
      numberVerticalColumns,
    ],
  )

  return (
    <ResponsiveCardsContext.Provider value={value}>
      {children}
    </ResponsiveCardsContext.Provider>
  )
}

export const useResponsiveCardsContext = () =>
  useContext(ResponsiveCardsContext)
