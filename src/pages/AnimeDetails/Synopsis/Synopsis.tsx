import React from 'react'
import { useTranslation } from 'react-i18next'

import { observer } from '@legendapp/state/react'

import { Button, YStack } from 'tamagui'

import { Text } from '@components'
import { useLegendState } from '@hooks/useLegendState'

type Props = {
  synopsis?: string
}

export const Synopsis = observer(({ synopsis }: Props) => {
  const { t } = useTranslation()
  const [open, setOpen] = useLegendState<boolean>(false)

  return (
    <YStack
      gap="$3"
      animation="lazy"
      enterStyle={{
        y: -20,
        opacity: 0,
      }}
      opacity={1}
      y={0}>
      <Text fontWeight="$6">{t('anime.details.synopsis')}</Text>
      <Button unstyled onPress={() => setOpen((old: boolean) => !old)}>
        <Text numberOfLines={open ? undefined : 5} color="$gray11">
          {synopsis}
        </Text>
      </Button>
      {synopsis!.length > 200 && (
        <Button
          unstyled
          onPress={() => setOpen((old: boolean) => !old)}
          mt="$-1">
          <Button.Text fontSize="$2" color="$blue10" als="flex-end">
            {open ? t('anime.details.showLess') : t('anime.details.showMore')}
          </Button.Text>
        </Button>
      )}
    </YStack>
  )
})
