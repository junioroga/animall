import React, { useCallback } from 'react'

import { observer } from '@legendapp/state/react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import YoutubePlayer from 'react-native-youtube-iframe'

import {
  Button,
  Circle,
  getTokens,
  ScrollView,
  Stack,
  Text,
  useTheme,
  XStack,
  YStack,
} from 'tamagui'
import { Play } from '@tamagui/lucide-icons'

import { Header, Image, Loading } from '@components'
import { Videos as VideosType } from '@hooks/useAnimeList/types'
import { useLegendState } from '@hooks/useLegendState'
import { RootStackParamListHome } from '@navigators/Home/Home'
import { getYouTubeVideoIdFromUrl } from '@utils/regex'

type Props = NativeStackScreenProps<RootStackParamListHome, 'Videos'>

export const Videos = observer(({ route }: Props) => {
  const { videos, pressedVideo } = route.params
  const { bottom } = useSafeAreaInsets()
  const theme = useTheme()
  const [videoSelected, setVideoSelected] =
    useLegendState<VideosType>(pressedVideo)
  const [ready, setReady] = useLegendState(false)

  const handlePressVideo = useCallback(
    (video: VideosType) => {
      setReady(false)
      setVideoSelected(video)
      setTimeout(() => setReady(true), 500)
    },
    [setReady, setVideoSelected],
  )

  return (
    <YStack f={1} bg="$background">
      <Stack>
        <Header />
        <Stack h="$17">
          <YoutubePlayer
            height={getTokens().size[17].val}
            videoId={getYouTubeVideoIdFromUrl(
              videoSelected.url ?? pressedVideo?.url,
            )}
            webViewStyle={{ display: ready ? 'flex' : 'none' }}
            onReady={() => setReady(true)}
          />
          {!ready && (
            <Loading
              position="absolute"
              bottom={getTokens().size[19].val / 2}
            />
          )}
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
              <Button
                unstyled
                jc="center"
                ai="center"
                onPress={() => handlePressVideo(video)}>
                <Image
                  source={video.thumbnail}
                  style={{
                    borderRadius: getTokens().size[0.5].val,
                    height: getTokens().size[10].val,
                    width: getTokens().size[14].val,
                  }}
                />
                <Stack position="absolute" ai="center" jc="center">
                  <Circle h="$3" w="$3" bc="$color12" o={0.7} />
                  <Stack position="absolute">
                    <Play
                      size="$icon.sm"
                      color={theme.color1.val}
                      fill={theme.color1.val}
                      style={{ left: 1 }}
                    />
                  </Stack>
                </Stack>
              </Button>
              <Text f={1} fontWeight="$6" numberOfLines={4}>
                {video.title}
              </Text>
            </XStack>
          ))}
        </Stack>
      </ScrollView>
    </YStack>
  )
})
