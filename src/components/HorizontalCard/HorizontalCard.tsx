import { useDeviceType } from '@hooks'
import { CalendarDays } from '@tamagui/lucide-icons'
import { tokens } from '@tamagui/themes'
import { Dimensions } from 'react-native'
import { Card, Stack, XStack, YStack, ZStack } from 'tamagui'

import { AnimeRankingPrepared } from '../../pages/Home/AnimeRanking/data'
import { Image } from '../Image'
import { Text } from '../Text'

type Props = {
  item: AnimeRankingPrepared
}

const WIDTH_SCREEN = Dimensions.get('window').width - tokens.size[9].val
const WIDTH_TABLET = WIDTH_SCREEN - tokens.size[18].val

export const HorizontalCard = ({ item }: Props) => {
  const { isHandset } = useDeviceType()

  return (
    <Card
      h="$14"
      w={isHandset ? WIDTH_SCREEN : WIDTH_TABLET}
      elevate
      elevation="$0.75"
      animation="bouncy">
      <Card overflow="hidden" br="$1" pr="$2">
        <Card.Background>
          <ZStack>
            <Image
              style={{
                height: tokens.size[14].val / 2,
                width: '100%',
              }}
              source={{
                uri: item?.main_picture.medium,
              }}
              contentFit="cover"
              blurRadius={1}
            />
            <Stack
              height={tokens.size[14].val / 2}
              backgroundColor="black"
              opacity={0.6}
            />
          </ZStack>
        </Card.Background>
        <XStack h="$14">
          <Stack ml="$2" w={isHandset ? '40%' : '30%'} jc="center">
            <Image
              style={{
                height: '90%',
                width: '90%',
                borderRadius: 3,
              }}
              source={{
                uri: item?.main_picture.medium,
              }}
              contentFit="fill"
            />
          </Stack>
          <YStack f={1}>
            <Stack f={0.5} jc="center">
              <Text color="white" fontWeight="$6" numberOfLines={3}>
                {item?.alternative_titles.en || item?.title}
              </Text>
            </Stack>
            <Stack f={0.5} space="$2" mt="$5">
              {item?.genresFormatted && (
                <Text fontWeight="$5" fontSize="$2" numberOfLines={2}>
                  {item.genresFormatted}
                </Text>
              )}
              <XStack ai="center" space="$1">
                <CalendarDays size="$1" color="$blue10" />
                <Text fontWeight="$5" fontSize="$2" color="$blue10">
                  {item?.fullDate}
                </Text>
              </XStack>
            </Stack>
          </YStack>
        </XStack>
      </Card>
    </Card>
  )
}
