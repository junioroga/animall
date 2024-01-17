import React, { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Dimensions } from 'react-native'

import { ProgressCircle } from 'react-native-svg-charts'

import { getTokens, Stack, useTheme, XStack, YStack, ZStack } from 'tamagui'
import { PlayCircle, Timer } from '@tamagui/lucide-icons'

import { Image, Text } from '@components'
import { MainPicture } from '@hooks/useAnimeList/types'

type Props = {
  mainPicture?: MainPicture
  title?: string
  numEpisodes?: number
  averageTime?: number
  mean?: string
}

export const HeaderDetails = ({
  mainPicture,
  title,
  numEpisodes,
  averageTime,
  mean,
}: Props) => {
  const { t } = useTranslation()
  const theme = useTheme()
  const WIDTH_CARD = useMemo(() => Dimensions.get('window').width / 3.5, [])
  const HEIGHT_CARD = useMemo(() => getTokens().size[13].val, [])

  return (
    <Stack>
      <ZStack>
        <Image
          source={mainPicture?.medium}
          style={{ height: HEIGHT_CARD + getTokens().size[3].val }}
          contentFit="cover"
          blurRadius={6}
        />
        <Stack h={HEIGHT_CARD + getTokens().size[3].val} bg="$color1" o={0.4} />
      </ZStack>
      <XStack p="$4" gap="$2" f={1}>
        <Image
          source={mainPicture?.medium}
          style={{
            height: HEIGHT_CARD,
            width: WIDTH_CARD,
            borderRadius: 3,
          }}
          contentFit="fill"
        />
        <YStack gap="$2" f={1}>
          <Text color="$color12" fontWeight="$6" numberOfLines={3}>
            {title}
          </Text>
          <XStack gap="$2">
            <XStack ai="center" gap="$1.5">
              <PlayCircle size="$icon.sm" />
              <Text fontWeight="$4" fontSize="$2">
                {t('anime.details.numEpisodes', {
                  numEpisodes,
                })}
              </Text>
            </XStack>
            <XStack ai="center" gap="$1.5">
              <Timer size="$icon.sm" />
              <Text fontWeight="$4" fontSize="$2">
                {t('anime.details.averageTime', {
                  averageTime,
                })}
              </Text>
            </XStack>
          </XStack>
        </YStack>
        <Stack ai="center">
          <Text
            pos="absolute"
            zi={1}
            t={getTokens().size[5].val / 3.4}
            fontSize="$5"
            fontWeight="500">
            {mean}
          </Text>
          <ProgressCircle
            style={{
              height: getTokens().size[5].val,
              width: getTokens().size[5].val,
              backgroundColor: 'white',
              borderRadius: getTokens().size[5].val,
            }}
            progress={Number(mean) / 10}
            progressColor={theme.blue10.val}
            backgroundColor={theme.blue7.val}
            startAngle={-Math.PI}
            endAngle={Math.PI}
            animate
          />
        </Stack>
      </XStack>
    </Stack>
  )
}
