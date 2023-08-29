import { Text } from '@components'
import { MainPicture } from '@hooks/useAnimeList/types'
import { Store } from '@store/index'
import { PlayCircle, Timer } from '@tamagui/lucide-icons'
import { BlurView } from 'expo-blur'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Dimensions } from 'react-native'
import {
  YStack,
  Image,
  ZStack,
  XStack,
  Progress,
  Stack,
  getTokens,
} from 'tamagui'

const { height, width } = Dimensions.get('screen')

type Props = {
  mainPicture?: MainPicture
  title?: string
  numEpisodes?: number
  averageTime?: number
}

export const HeaderDetails = ({
  mainPicture,
  title,
  numEpisodes,
  averageTime,
}: Props) => {
  const { t } = useTranslation()
  const theme = Store.settings.theme.get()

  return (
    <Stack>
      <ZStack>
        <Image
          h={getTokens().size[14].val}
          w={width}
          source={{
            uri: mainPicture?.medium,
          }}
          resizeMode="cover"
        />
        <BlurView style={{ height, width }} intensity={80} tint={theme} />
      </ZStack>
      <XStack p="$4" gap="$2">
        <Image
          h={getTokens().size[12].val}
          w={getTokens().size[10].val}
          source={{
            uri: mainPicture?.medium,
          }}
          borderRadius={3}
          resizeMode="stretch"
        />
        <YStack f={1} gap="$2">
          <Text color="$color12" fontWeight="$6" numberOfLines={3}>
            {title}
          </Text>
          <XStack gap="$2">
            <XStack ai="center" gap="$1.5">
              <PlayCircle size="$1" />
              <Text fontWeight="$4" fontSize="$2">
                {t('anime.details.numEpisodes', {
                  numEpisodes,
                })}
              </Text>
            </XStack>
            <XStack ai="center" gap="$1.5">
              <Timer size="$1" />
              <Text fontWeight="$4" fontSize="$2">
                {t('anime.details.averageTime', {
                  averageTime,
                })}
              </Text>
            </XStack>
          </XStack>
        </YStack>
        <Progress value={5} max={10} circular>
          <Progress.Indicator circular />
        </Progress>
      </XStack>
    </Stack>
  )
}
