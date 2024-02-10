import React from 'react'
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
  const [open, setOpen] = useLegendState<boolean>(false)

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
      <Button
        $isHandsetOrTablet={{ unstyled: true }}
        h="auto"
        py="$2"
        onPress={() => setOpen((old: boolean) => !old)}>
        <Text numberOfLines={open ? undefined : 5} col="$gray11">
          {synopsis}
        </Text>
      </Button>
      {synopsis!.length > 200 && (
        <Button
          $isHandsetOrTablet={{ unstyled: true }}
          onPress={() => setOpen((old: boolean) => !old)}
          als="flex-end"
          mt="$-1">
          <Button.Text fos="$2" col="$blue10">
            {open ? t('anime.details.showLess') : t('anime.details.showMore')}
          </Button.Text>
        </Button>
      )}
    </YStack>
  )
})
