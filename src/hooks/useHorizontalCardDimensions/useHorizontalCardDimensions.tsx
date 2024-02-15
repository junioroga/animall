import { useMemo } from 'react'
import { useWindowDimensions } from 'react-native'

import { useMedia } from 'tamagui'

export const useHorizontalCardDimensions = () => {
  const media = useMedia()
  const { width } = useWindowDimensions()

  const WIDTH_HORIZONTAL_CARD = useMemo(
    () => (media.isHandsetOrTablet ? width / 1.2 : width / 4),
    [media.isHandsetOrTablet, width],
  )
  const HEIGHT_HORIZONTAL_CARD = useMemo(
    () => WIDTH_HORIZONTAL_CARD * 0.5,
    [WIDTH_HORIZONTAL_CARD],
  )

  return {
    WIDTH_HORIZONTAL_CARD,
    HEIGHT_HORIZONTAL_CARD,
  }
}
