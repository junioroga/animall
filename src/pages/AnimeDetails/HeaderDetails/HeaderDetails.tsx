import React from 'react'
import { useTranslation } from 'react-i18next'

import { BlurView } from 'expo-blur'

import {
  Circle,
  getTokens,
  Image,
  Stack,
  XStack,
  YStack,
  ZStack,
} from 'tamagui'
import { PlayCircle, Timer } from '@tamagui/lucide-icons'

import { Text } from '@components'
import { MainPicture } from '@hooks/useAnimeList/types'
import { Store } from '@store/index'

type Props = {
  mainPicture?: MainPicture
  title?: string
  numEpisodes?: number
  averageTime?: number
  mean?: number
}

export const HeaderDetails = ({
  mainPicture,
  title,
  numEpisodes,
  averageTime,
  mean,
}: Props) => {
  const { t } = useTranslation()
  const theme = Store.settings.theme.get()

  return (
    <Stack>
      <ZStack>
        <Image
          h={getTokens().size[14].val}
          source={{
            uri: mainPicture?.medium,
          }}
          resizeMode="cover"
        />
        <BlurView
          style={{ height: getTokens().size[14].val }}
          intensity={80}
          tint={theme}
        />
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
        <Circle size="$4" backgroundColor="$blue10">
          <Circle size="$3" backgroundColor="white">
            <Text fontWeight="$6" fontSize="$3">
              {mean?.toFixed(2)}
            </Text>
          </Circle>
        </Circle>
      </XStack>
    </Stack>
  )
}
