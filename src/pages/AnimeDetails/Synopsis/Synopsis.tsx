import React, { useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { observer } from '@legendapp/state/react'

import { Button, YStack } from 'tamagui'

import { Text } from '@/components'
import { useLegendState } from '@/hooks/useLegendState'

type Props = {
  synopsis?: string
}

export const Synopsis = observer(({ synopsis }: Props) => {
  const { t } = useTranslation()
  const synopsisReduced =
    (synopsis?.length ?? 0) > 100
      ? synopsis?.substring(0, 100).concat(' ...')
      : synopsis
  const [open, setOpen] = useLegendState<boolean>(false)
  const [text, setText] = useLegendState<string>(synopsisReduced ?? '')
  const canExpand = (synopsis?.length ?? 0) > 104

  const toggleExpanded = useCallback(() => {
    setText(open ? synopsisReduced : synopsis)
    setOpen((old: boolean) => !old)
  }, [open, setOpen, setText, synopsis, synopsisReduced])

  return (
    <YStack
      gap="$3"
      animation="lazy"
      enterStyle={{
        y: -20,
        o: 0,
      }}
      o={1}
      y={0}>
      <Text fow="$6">{t('anime.details.synopsis')}</Text>
      <YStack py="$2" onPress={canExpand ? toggleExpanded : undefined}>
        <Text col="$gray11">{text}</Text>
      </YStack>
      {canExpand && (
        <Button onPress={toggleExpanded} als="flex-end" mt="$-1">
          <Button.Text fos="$2" col="$blue10">
            {open ? t('anime.details.showLess') : t('anime.details.showMore')}
          </Button.Text>
        </Button>
      )}
    </YStack>
  )
})
