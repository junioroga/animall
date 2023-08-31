import React, { useCallback } from 'react'

import { observer } from '@legendapp/state/react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import YoutubePlayer from 'react-native-youtube-iframe'

import {
  Button,
  Circle,
  getTokens,
  Image,
  ScrollView,
  Stack,
  Text,
  useTheme,
  XStack,
  YStack,
} from 'tamagui'
import { Play } from '@tamagui/lucide-icons'

import { Header, Loading } from '@components'
import { Videos as VideosType } from '@hooks/useAnimeList/types'
import { useLegendState } from '@hooks/useLegendState'
import { RootStackParamListHome } from '@navigators/Home/Home'
import { getYouTubeVideoIdFromUrl } from '@utils/regex'

type Props = NativeStackScreenProps<RootStackParamListHome, 'Videos'>

export const Videos = observer(({ route }: Props) => {
  const { videos, pressedVideo } = route.params
  const theme = useTheme()
  const insets = useSafeAreaInsets()
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
      <Stack gap="$4">
        <Header />
        <Stack h="$19">
          <YoutubePlayer
            height={getTokens().size[19].val}
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
          paddingBottom: insets.bottom,
        }}
        showsVerticalScrollIndicator={false}>
        <Stack gap="$4">
          {videos?.map((video) => (
            <XStack key={video.id} ai="flex-start" gap="$3">
              <Button
                unstyled
                jc="center"
                ai="center"
                onPress={() => handlePressVideo(video)}>
                <Image
                  h={getTokens().size[10].val}
                  w={getTokens().size[14].val}
                  source={{ uri: video.thumbnail }}
                  style={{ borderRadius: getTokens().size[0.25].val }}
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