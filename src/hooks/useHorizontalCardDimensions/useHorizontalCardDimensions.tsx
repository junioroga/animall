import { useMemo } from 'react'
import { useWindowDimensions } from 'react-native'

import { getTokens, useMedia } from 'tamagui'

export const useHorizontalCardDimensions = () => {
  const media = useMedia()
  const { width } = useWindowDimensions()

  const WIDTH_HORIZONTAL_CARD = useMemo(
    () =>
      media.isHandsetOrTablet ? width - getTokens().size[7].val : width / 4,
    [media.isHandsetOrTablet, width],
  )
  const HEIGHT_HORIZONTAL_CARD = useMemo(() => getTokens().size[14].val, [])

  return {
    WIDTH_HORIZONTAL_CARD,
    HEIGHT_HORIZONTAL_CARD,
  }
}
