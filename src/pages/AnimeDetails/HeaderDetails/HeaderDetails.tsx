import React from 'react'
import { useTranslation } from 'react-i18next'

import { ProgressCircle } from 'react-native-svg-charts'

import { getTokens, Stack, useTheme, XStack, YStack, ZStack } from 'tamagui'
import { PlayCircle, Timer, TimerReset } from '@tamagui/lucide-icons'

import { Image, Text } from '@/components'
import { MainPicture } from '@/hooks/useAnimeList/types'

import { useResponsiveCardsContext } from '@/context/ResponsiveCards'

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
  const { heightHorizontalCard, widthHorizontalCard } =
    useResponsiveCardsContext()

  return (
    <Stack>
      <ZStack>
        <Image
          source={mainPicture?.medium}
          style={{ height: heightHorizontalCard * 1.3 }}
          contentFit="cover"
          blurRadius={2}
        />
        <Stack h={heightHorizontalCard * 1.3} bg="$color1" o={0.5} />
      </ZStack>
      <XStack p="$4" gap="$2" f={1}>
        <Image
          source={mainPicture?.medium}
          style={{
            borderRadius: 3,
            height: heightHorizontalCard * 1.1,
            width: widthHorizontalCard / 2.5,
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
            t={getTokens().size.$5.val / 3.4}
            fos="$5"
            fow="500"
            col="$color12">
            {mean}
          </Text>
          <ProgressCircle
            style={{
              height: getTokens().size.$5.val,
              width: getTokens().size.$5.val,
              backgroundColor: theme.color5.val,
              borderRadius: getTokens().size.$5.val,
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
