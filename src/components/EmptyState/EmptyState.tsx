import { useMemo } from 'react'
import { useWindowDimensions } from 'react-native'

import LottieView from 'lottie-react-native'

import { Button, H6, Stack, YStack } from 'tamagui'

import { Text } from '@/components/Text'

export enum EmptyStateTypes {
  ERROR = 'error',
  NO_DATA = 'no-data',
  NO_SEARCH = 'no-search',
}

export type EmptyStateProps = {
  type: EmptyStateTypes
  message: string
  alert?: string
  action?: string
  onPress?: <T>(value: T) => void
}

export const EmptyState = ({ type, alert, message, action, onPress }: EmptyStateProps) => {
  const { height } = useWindowDimensions()

  const defineType = useMemo(
    () => ({
      [EmptyStateTypes.ERROR]: {
        source: require('@/assets/lottie/error.json'),
        style: { height: height / 5, width: height / 5 },
      },
      [EmptyStateTypes.NO_DATA]: {
        source: require('@/assets/lottie/no_data.json'),
        style: { height: height / 7, width: height / 7 },
      },
      [EmptyStateTypes.NO_SEARCH]: {
        source: require('@/assets/lottie/empty_search.json'),
        style: { height: height / 5, width: height / 5 },
      },
    }),
    [height]
  )

  return (
    <YStack f={1} ai="center" jc="center" gap="$4">
      {alert && <H6>{alert}</H6>}
      <Stack style={defineType[type].style}>
        <LottieView source={defineType[type].source} autoPlay loop={false} />
      </Stack>
      {message && <Text>{message}</Text>}
      {action && onPress && (
        <Button onPress={onPress}>
          <Button.Text col="$blue10" fos="$3">
            {action}
          </Button.Text>
        </Button>
      )}
    </YStack>
  )
}
