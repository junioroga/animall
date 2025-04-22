import { useState } from 'react'

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
    const { heightHorizontalCard, heightVerticalCard } = useResponsiveCardsContext()
    const heightCard =
      orientation === CardType.HORIZONTAL ? heightHorizontalCard : heightVerticalCard
    const [showIn, setShowIn] = useState(false)
    const showButtons = showIn || show

    return (
      <>
        <Button
          elevate
          pos="absolute"
          t={heightCard / 2}
          l={-10}
          h="$12"
          w="$7"
          zi="$1"
          br={0}
          btrr={1000}
          bbrr={1000}
          onHoverIn={() => setShowIn(true)}
          onHoverOut={() => setShowIn(false)}
          onPress={onPressLeft}
          animation="medium"
          x={showButtons ? 0 : -100}
        >
          <Button.Icon>
            <ArrowLeft />
          </Button.Icon>
        </Button>
        <Button
          elevate
          pos="absolute"
          t={heightCard / 2}
          r={-10}
          h="$12"
          w="$7"
          zi="$1"
          br={0}
          btlr={1000}
          bblr={1000}
          onHoverIn={() => setShowIn(true)}
          onHoverOut={() => setShowIn(false)}
          onPress={onPressRight}
          animation="medium"
          x={showButtons ? 0 : 100}
        >
          <Button.Icon>
            <ArrowRight />
          </Button.Icon>
        </Button>
      </>
    )
  }
)
