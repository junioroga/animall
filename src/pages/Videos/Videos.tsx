import React, { useCallback, useMemo } from 'react'
import { Platform, Pressable, useWindowDimensions } from 'react-native'

import { observer } from '@legendapp/state/react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import YoutubePlayer from 'react-native-youtube-iframe'

import * as ScreenOrientation from 'expo-screen-orientation'

import {
  Circle,
  getTokens,
  ScrollView,
  Stack,
  Text,
  useMedia,
  useTheme,
  XStack,
  YStack,
} from 'tamagui'
import { Play } from '@tamagui/lucide-icons'

import { Header, Image } from '@/components'
import { Videos as VideosType } from '@/hooks/useAnimeList/types'
import { useLegendState } from '@/hooks/useLegendState'
import { RootStackParamListHome } from '@/navigators/Home/Home'
import { getYouTubeVideoIdFromUrl } from '@/utils/regex'

import { Skeleton } from './Skeleton'

type Props = NativeStackScreenProps<RootStackParamListHome, 'Videos'>

export const Videos = observer(({ route }: Props) => {
  const { videos, pressedVideo } = route.params
  const { bottom } = useSafeAreaInsets()
  const theme = useTheme()
  const [videoSelected, setVideoSelected] =
    useLegendState<VideosType>(pressedVideo)
  const [ready, setReady] = useLegendState(false)
  const { height, width } = useWindowDimensions()
  const { isHandsetOrTablet } = useMedia()
  const HEIGHT_PLAYER = useMemo(
    () => (isHandsetOrTablet ? getTokens().size[18].val : height / 2),
    [isHandsetOrTablet, height],
  )
  const WIDTH_PLAYER = useMemo(
    () => (isHandsetOrTablet ? width : width / 2),
    [isHandsetOrTablet, width],
  )

  const handlePressVideo = useCallback(
    (video: VideosType) => {
      setReady(false)
      setVideoSelected(video)
      setReady(true)
    },
    [setReady, setVideoSelected],
  )

  const handlePressFullScreen = useCallback((isFullScreen: boolean) => {
    ScreenOrientation.lockAsync(
      isFullScreen
        ? ScreenOrientation.OrientationLock.LANDSCAPE
        : ScreenOrientation.OrientationLock.PORTRAIT,
    )
  }, [])

  return (
    <YStack f={1} bg="$background">
      <Stack>
        <Header />
        <Stack h={HEIGHT_PLAYER} ai="center" jc="center">
          <YoutubePlayer
            height={ready ? HEIGHT_PLAYER : 0}
            width={WIDTH_PLAYER}
            videoId={getYouTubeVideoIdFromUrl(videoSelected.url)}
            onReady={() => setReady(true)}
            onFullScreenChange={(isFullScreen: boolean) =>
              Platform.OS !== 'web'
                ? handlePressFullScreen(isFullScreen)
                : undefined
            }
          />
          {!ready && <Skeleton heightContent={HEIGHT_PLAYER} />}
        </Stack>
      </Stack>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: getTokens().space[4].val,
          paddingBottom: getTokens().space[11].val + bottom,
          paddingTop: getTokens().space[4].val,
        }}
        showsVerticalScrollIndicator={false}>
        <Stack gap="$2">
          {videos?.map((video) => (
            <XStack key={video.id} ai="flex-start" gap="$3">
              <Pressable
                testID={`button-video-${video.id}`}
                style={{ alignItems: 'center', justifyContent: 'center' }}
                onPress={() => handlePressVideo(video)}>
                <Image
                  source={video.thumbnail}
                  style={{
                    borderRadius: getTokens().size[0.5].val,
                    height: getTokens().size[10].val,
                    width: getTokens().size[14].val,
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
              <Text f={1} fow="$6" numberOfLines={4}>
                {video.title}
              </Text>
            </XStack>
          ))}
        </Stack>
      </ScrollView>
    </YStack>
  )
})
