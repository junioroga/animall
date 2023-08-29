import { Videos as VideosType } from '@hooks/useAnimeList/types'
import { Play } from '@tamagui/lucide-icons'
import React from 'react'
import { useTranslation } from 'react-i18next'
import {
  XStack,
  Button,
  ScrollView,
  Image,
  getTokens,
  useTheme,
  Circle,
  Stack,
  Text,
} from 'tamagui'

type Props = {
  videos?: VideosType[]
}

export const Videos = ({ videos }: Props) => {
  const theme = useTheme()
  const { t } = useTranslation()
  return (
    <ScrollView
      horizontal
      contentContainerStyle={{
        flexGrow: 1,
        paddingVertical: getTokens().space[2].val,
      }}
      showsHorizontalScrollIndicator={false}>
      <XStack gap="$3">
        <Text fontWeight="$6">{t('anime.details.moreInfo')}</Text>
        {videos?.map((video) => (
          <Button key={video.id} unstyled jc="center" ai="center">
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
  )
}
