import React, { useMemo } from 'react'
import { Dimensions } from 'react-native'

import { Button, H6, YStack } from 'tamagui'

import Dinosaur from '@assets/dinosaur.svg'
import { Text } from '@components/Text'
import { Store } from '@store/index'

export enum Types {
  ERROR = 'error',
  NO_DATA = 'no-data',
  NO_SEARCH = 'no-search',
}

type EmptyStateProps = {
  type: Types
  message: string
  alert?: string
  action?: string
  onPress?: <T>(value: T) => void
}

const { height } = Dimensions.get('screen')

export const EmptyState = ({
  type,
  alert,
  message,
  action,
  onPress,
}: EmptyStateProps) => {
  const theme = Store.settings.theme.get()

  const DinosaurThemed = useMemo(
    () => (theme === 'light' ? Dinosaur : Dinosaur),
    [theme],
  )

  const renderSvg = useMemo(
    () => ({
      [Types.ERROR]: <DinosaurThemed height={height / 4} />,
      [Types.NO_DATA]: <DinosaurThemed height={height / 4} />,
      [Types.NO_SEARCH]: <DinosaurThemed height={height / 4} />,
    }),
    [DinosaurThemed],
  )

  return (
    <YStack f={1} ai="center" jc="center" gap="$4">
      {alert && <H6>{alert}</H6>}
      {renderSvg[type]}
      {message && <Text>{message}</Text>}
      {action && onPress && (
        <Button onPress={onPress}>
          <Button.Text color="$blue10" fontSize="$3">
            {action}
          </Button.Text>
        </Button>
      )}
    </YStack>
  )
}
