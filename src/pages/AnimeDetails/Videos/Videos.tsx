import React, { useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import {
  Button,
  Circle,
  getTokens,
  Image,
  ScrollView,
  Stack,
  useTheme,
  XStack,
  YStack,
} from 'tamagui'
import { Play } from '@tamagui/lucide-icons'

import { Text } from '@components'
import { Videos as VideosType } from '@hooks/useAnimeList/types'
import { RootStackParamList } from '@navigators/Home'

type Props = {
  videos: VideosType[]
}

type NavigationProps = NativeStackNavigationProp<RootStackParamList>

export const Videos = ({ videos }: Props) => {
  const theme = useTheme()
  const { t } = useTranslation()
  const navigation = useNavigation<NavigationProps>()

  const handlePressVideo = useCallback(
    (pressedVideo: VideosType) => {
      navigation.navigate('Videos', { videos, pressedVideo })
    },
    [navigation, videos],
  )

  return (
    <YStack>
      <Text fontWeight="$6">{t('anime.details.videos')}</Text>
      {videos.length ? (
        <ScrollView
          horizontal
          contentContainerStyle={{
            flexGrow: 1,
            paddingTop: getTokens().space[4].val,
          }}
          showsHorizontalScrollIndicator={false}>
          <XStack gap="$4">
            {videos?.map((video) => (
              <Button
                key={video.id}
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
            ))}
          </XStack>
        </ScrollView>
      ) : (
        <Text color="$gray11">{t('anime.details.emptyVideos')}</Text>
      )}
    </YStack>
  )
}
