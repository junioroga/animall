import { Image, Text } from '@components'
import { useDeviceType } from '@hooks'
import { Star } from '@tamagui/lucide-icons'
import { tokens } from '@tamagui/themes'
import { Dimensions } from 'react-native'
import { Card, Stack, ZStack, XStack } from 'tamagui'

import { AnimeRankingPrepared } from '../../pages/Home/AnimeRanking/data'

type Props = {
  item: AnimeRankingPrepared
}

const WIDTH_SCREEN = Dimensions.get('window').width / 3 - tokens.space[4].val
const WIDTH_TABLET = WIDTH_SCREEN - tokens.size[18].val

export const VerticalCard = ({ item }: Props) => {
  const { isHandset } = useDeviceType()

  return (
    <Card
      h="$16"
      w={isHandset ? WIDTH_SCREEN : WIDTH_TABLET}
      elevate
      elevation="$0.75"
      animation="bouncy">
      <Card f={1} overflow="hidden" br="$1">
        <ZStack f={1}>
          <Image
            style={{
              height: '100%',
              width: WIDTH_SCREEN,
            }}
            source={{
              uri: item?.main_picture.medium,
            }}
            contentFit="fill"
          />
          <Stack
            position="absolute"
            left={0}
            bottom={0}
            right={0}
            height={tokens.size[2].val}
            backgroundColor="black"
            opacity={0.5}
          />
          {item?.rating && (
            <XStack
              position="absolute"
              bottom={5}
              right={5}
              ai="center"
              space="$2">
              <Text fontWeight="$6" fontSize="$4" color="white">
                {item.rating}
              </Text>
              <Star size="$1" color="yellow" fill="yellow" />
            </XStack>
          )}
        </ZStack>
        <Stack p="$2" jc="center">
          <Text fontWeight="$4" fontSize="$3" numberOfLines={1} flexWrap="wrap">
            {item?.alternative_titles.en || item?.title}
          </Text>
        </Stack>
      </Card>
    </Card>
  )
}
