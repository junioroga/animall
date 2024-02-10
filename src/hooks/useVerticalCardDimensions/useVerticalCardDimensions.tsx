import { useMemo } from 'react'
import { useWindowDimensions } from 'react-native'

import { getTokens, useMedia } from 'tamagui'

export const useVerticalCardDimensions = () => {
  const media = useMedia()
  const { width } = useWindowDimensions()

  const HEIGHT_VERTICAL_CARD = useMemo(() => getTokens().size[15].val, [])
  const WIDTH_VERTICAL_CARD = useMemo(
    () =>
      media.isHandsetOrTablet
        ? width / 3 - getTokens().space[4].val
        : (width -
            getTokens().space[2.5].val * 11 -
            getTokens().space[4].val * 2) /
          12,
    [media.isHandsetOrTablet, width],
  )
  const NUM_VERTICAL_COLUMNS = media.isHandsetOrTablet ? 3 : 12

  return {
    WIDTH_VERTICAL_CARD,
    HEIGHT_VERTICAL_CARD,
    NUM_VERTICAL_COLUMNS,
  }
}
