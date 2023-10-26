import React, { useMemo } from 'react'
import { Dimensions } from 'react-native'

import AnimatedLottieView from 'lottie-react-native'

import { Button, H6, YStack } from 'tamagui'

import { Text } from '@components/Text'

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
  const defineType = useMemo(
    () => ({
      [Types.ERROR]: {
        source: require('../../assets/lottie/error.json'),
        style: { height: height / 5 },
      },
      [Types.NO_DATA]: {
        source: require('../../assets/lottie/no_data.json'),
        style: { height: height / 7 },
      },
      [Types.NO_SEARCH]: {
        source: require('../../assets/lottie/empty_search.json'),
        style: { height: height / 5 },
      },
    }),
    [],
  )

  return (
    <YStack f={1} ai="center" jc="center" gap="$4">
      {alert && <H6>{alert}</H6>}
      <AnimatedLottieView
        source={defineType[type].source}
        style={defineType[type].style}
        autoPlay
        loop={false}
      />
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
