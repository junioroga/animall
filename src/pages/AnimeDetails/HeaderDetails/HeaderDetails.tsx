import React from 'react'
import { useTranslation } from 'react-i18next'
import { Dimensions } from 'react-native'

import { Circle, Image, Stack, XStack, YStack, ZStack } from 'tamagui'
import { PlayCircle, Timer } from '@tamagui/lucide-icons'
import { tokens } from '@tamagui/themes'

import { Text } from '@components'
import { MainPicture } from '@hooks/useAnimeList/types'

type Props = {
  mainPicture?: MainPicture
  title?: string
  numEpisodes?: number
  averageTime?: number
  mean?: string
}

const WIDTH_CARD = Dimensions.get('window').width / 4
const HEIGHT_CARD = Dimensions.get('window').height / 5 - tokens.size[1].val

export const HeaderDetails = ({
  mainPicture,
  title,
  numEpisodes,
  averageTime,
  mean,
}: Props) => {
  const { t } = useTranslation()

  return (
    <Stack>
      <ZStack>
        <Image
          h={HEIGHT_CARD + tokens.size[3].val}
          source={{
            uri: mainPicture?.medium,
          }}
          resizeMode="cover"
          blurRadius={6}
        />
        <Stack h={HEIGHT_CARD + tokens.size[3].val} bg="$color1" o={0.4} />
      </ZStack>
      <XStack p="$4" gap="$2">
        <Image
          h={HEIGHT_CARD}
          w={WIDTH_CARD}
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
        <Circle size="$5" bg="$blue10">
          <Circle size="$4" bg="white">
            <Text fontWeight="$7" fontSize="$4" color="black" top={1}>
              {mean}
            </Text>
          </Circle>
        </Circle>
      </XStack>
    </Stack>
  )
}
