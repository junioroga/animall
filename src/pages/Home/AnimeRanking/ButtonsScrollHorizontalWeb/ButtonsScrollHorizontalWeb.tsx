import React, { useState } from 'react'

import { observer } from '@legendapp/state/react'

import { Button } from 'tamagui'
import { ArrowLeft, ArrowRight } from '@tamagui/lucide-icons'

import { CardType } from '@/services/types'

import { useResponsiveCardsContext } from '@/context/ResponsiveCards'

type Props = {
  orientation: CardType
  show: boolean
  onPressLeft: () => void
  onPressRight: () => void
}

export const ButtonsScrollHorizontalWeb = observer(
  ({ orientation, show, onPressLeft, onPressRight }: Props) => {
    const { heightHorizontalCard, heightVerticalCard } =
      useResponsiveCardsContext()
    const heightStack =
      orientation === CardType.HORIZONTAL
        ? heightHorizontalCard
        : heightVerticalCard
    const [showIn, setShowIn] = useState(false)
    const showButtons = showIn || show

    return (
      <>
        <Button
          elevate
          pos="absolute"
          t={heightStack / 1.6}
          l={-10}
          h="$8"
          zi="$1"
          br={0}
          btrr={50}
          bbrr={50}
          onHoverIn={() => setShowIn(true)}
          onHoverOut={() => setShowIn(false)}
          onPress={onPressLeft}
          x={showButtons ? 0 : -100}>
          <Button.Icon>
            <ArrowLeft />
          </Button.Icon>
        </Button>
        <Button
          elevate
          pos="absolute"
          t={heightStack / 1.6}
          r={-10}
          h="$8"
          zi="$1"
          br={0}
          btlr={50}
          bblr={50}
          onHoverIn={() => setShowIn(true)}
          onHoverOut={() => setShowIn(false)}
          onPress={onPressRight}
          x={showButtons ? 0 : 100}>
          <Button.Icon>
            <ArrowRight />
          </Button.Icon>
        </Button>
      </>
    )
  },
)
