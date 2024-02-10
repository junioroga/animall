import React from 'react'
import { useTranslation } from 'react-i18next'
import { useWindowDimensions } from 'react-native'

import { ProgressCircle } from 'react-native-svg-charts'

import {
  getTokens,
  Stack,
  useMedia,
  useTheme,
  XStack,
  YStack,
  ZStack,
} from 'tamagui'
import { PlayCircle, Timer, TimerReset } from '@tamagui/lucide-icons'

import { Image, Text } from '@/components'
import { MainPicture } from '@/hooks/useAnimeList/types'

type Props = {
  mainPicture?: MainPicture
  title?: string
  numEpisodes?: number
  averageTime?: number
  mean?: string
  releaseDay?: string
  releaseHour?: string
}

export const HeaderDetails = ({
  mainPicture,
  title,
  numEpisodes,
  averageTime,
  mean,
  releaseDay,
  releaseHour,
}: Props) => {
  const { t } = useTranslation()
  const theme = useTheme()
  const { width } = useWindowDimensions()
  const media = useMedia()
  const WIDTH_CARD_DETAILS = media.isHandsetOrTablet ? width / 4 : width / 10
  const HEIGHT_CARD = getTokens().size[13].val

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
            width: WIDTH_CARD_DETAILS,
            borderRadius: 3,
          }}
          contentFit="fill"
        />
        <YStack gap="$2" f={1}>
          <Text col="$color12" fow="$6" numberOfLines={3}>
            {title}
          </Text>
          <XStack gap="$2">
            <XStack ai="center" gap="$1.5">
              <PlayCircle size="$icon.sm" />
              <Text fow="$6" fos="$2">
                {t('anime.details.numEpisodes', {
                  numEpisodes,
                })}
              </Text>
            </XStack>
            <XStack ai="center" gap="$1.5">
              <Timer size="$icon.sm" />
              <Text fow="$6" fos="$2">
                {t('anime.details.averageTime', {
                  averageTime,
                })}
              </Text>
            </XStack>
          </XStack>
          {releaseDay && (
            <XStack ai="center" gap="$1.5">
              <TimerReset size="$icon.sm" />
              <Text fow="$6" fos="$2">
                {releaseDay} - {releaseHour}
              </Text>
            </XStack>
          )}
        </YStack>
        <Stack ai="center">
          <Text
            pos="absolute"
            zi={1}
            t={getTokens().size[5].val / 3.4}
            fos="$5"
            fow="500"
            col="$color12">
            {mean}
          </Text>
          <ProgressCircle
            style={{
              height: getTokens().size[5].val,
              width: getTokens().size[5].val,
              backgroundColor: theme.color5.val,
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
