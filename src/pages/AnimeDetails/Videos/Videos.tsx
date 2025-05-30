import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Pressable } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { Play } from '@tamagui/lucide-icons'
import { Circle, ScrollView, Stack, XStack, YStack, getTokens, useTheme } from 'tamagui'

import { Image, Text } from '@/components'
import { Videos as VideosType } from '@/hooks/useAnimeList/types'
import { RootStackParamListHome } from '@/navigators/Home/Home'

type Props = {
  videos: VideosType[]
}

type NavigationProps = NativeStackNavigationProp<RootStackParamListHome>

export const Videos = ({ videos }: Props) => {
  const theme = useTheme()
  const { t } = useTranslation()
  const navigation = useNavigation<NavigationProps>()

  const handlePressVideo = useCallback(
    (pressedVideo: VideosType) => {
      navigation.navigate('Videos', { videos, pressedVideo })
    },
    [navigation, videos]
  )

  return (
    <YStack testID="videos-carousel">
      <Text fow="$6">{t('anime.details.videos')}</Text>
      {videos.length ? (
        <ScrollView
          horizontal
          contentContainerStyle={{
            fg: 1,
            pt: getTokens().space.$4.val,
          }}
          showsHorizontalScrollIndicator={false}
        >
          <XStack gap="$2">
            {videos?.map((video) => (
              <Pressable
                testID="youtube-card"
                key={video.id}
                style={{ justifyContent: 'center', alignItems: 'center' }}
                onPress={() => handlePressVideo(video)}
              >
                <Image
                  source={{ uri: video.thumbnail }}
                  style={{
                    opacity: 0.7,
                    borderRadius: getTokens().size['$0.5'].val,
                    height: getTokens().size.$10.val,
                    width: getTokens().size.$14.val,
                  }}
                />
                <Stack pos="absolute" ai="center" jc="center">
                  <Circle h="$3" w="$3" bc="$color12" o={0.7} />
                  <Stack pos="absolute">
                    <Play
                      size="$icon.sm"
                      col={theme.color1.val}
                      fill={theme.color1.val}
                      style={{ left: 1 }}
                    />
                  </Stack>
                </Stack>
              </Pressable>
            ))}
          </XStack>
        </ScrollView>
      ) : (
        <Text col="$gray11">{t('anime.details.emptyVideos')}</Text>
      )}
    </YStack>
  )
}
