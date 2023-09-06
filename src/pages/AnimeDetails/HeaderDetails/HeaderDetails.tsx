import React from 'react'
import { useTranslation } from 'react-i18next'
import { Dimensions } from 'react-native'

import { Text as TextSVG } from 'react-native-svg'
import { ProgressCircle } from 'react-native-svg-charts'

import {
  getFontSize,
  Image,
  Stack,
  useTheme,
  XStack,
  YStack,
  ZStack,
} from 'tamagui'
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

const WIDTH_CARD = Dimensions.get('window').width / 3.5
const HEIGHT_CARD = tokens.size[13].val

export const HeaderDetails = ({
  mainPicture,
  title,
  numEpisodes,
  averageTime,
  mean,
}: Props) => {
  const { t } = useTranslation()
  const theme = useTheme()

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
      <XStack p="$4" gap="$2" f={1}>
        <Image
          h={HEIGHT_CARD}
          w={WIDTH_CARD}
          source={{
            uri: mainPicture?.medium,
          }}
          borderRadius={3}
          resizeMode="stretch"
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
        <ProgressCircle
          style={{
            height: tokens.size[5].val,
            width: tokens.size[5].val,
            backgroundColor: 'white',
            borderRadius: tokens.size[5].val,
          }}
          progress={Number(mean) / 10}
          progressColor={theme.blue10.val}
          backgroundColor={theme.blue7.val}
          startAngle={-Math.PI}
          endAngle={Math.PI}
          animate>
          <TextSVG
            x={-0.5}
            y={1.5}
            fill="black"
            textAnchor="middle"
            alignmentBaseline="middle"
            fontSize={getFontSize('$4')}>
            {mean}
          </TextSVG>
        </ProgressCircle>
      </XStack>
    </Stack>
  )
}
