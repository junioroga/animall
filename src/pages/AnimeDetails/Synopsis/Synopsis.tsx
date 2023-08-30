import React from 'react'
import { useTranslation } from 'react-i18next'

import { YStack } from 'tamagui'

import { Text } from '@components'

type Props = {
  synopsis?: string
}

export const Synopsis = ({ synopsis }: Props) => {
  const { t } = useTranslation()

  return (
    <YStack gap="$3">
      <Text fontWeight="$6">{t('anime.details.synopsis')}</Text>
      <Text numberOfLines={3} color="$gray11">
        {synopsis}
      </Text>
    </YStack>
  )
}
