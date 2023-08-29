import { Text } from '@components'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { YStack } from 'tamagui'

type Props = {
  synopsis?: string
}

export const Synopsis = ({ synopsis }: Props) => {
  const { t } = useTranslation()

  return (
    <YStack py="$4" gap="$4">
      <Text fontWeight="$6">{t('anime.details.synopsis')}</Text>
      <Text numberOfLines={3} color="$gray11">
        {synopsis}
      </Text>
    </YStack>
  )
}
