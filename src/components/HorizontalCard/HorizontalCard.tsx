import { Dimensions } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { Button, Card, getTokens, Stack, XStack, YStack, ZStack } from 'tamagui'
import { CalendarDays, Timer } from '@tamagui/lucide-icons'

import { Image } from '@/components/Image'
import { Text } from '@/components/Text'
import { RootStackParamListHome } from '@/navigators/Home/Home'
import { blurhash } from '@/config/general'

import { AnimeRankingPrepared } from '../../pages/Home/AnimeRanking/data'

type NavigationProps = NativeStackNavigationProp<RootStackParamListHome>

export type HorizontalCardProps = {
  item: AnimeRankingPrepared
}

export const WIDTH_HORIZONTAL_CARD =
  Dimensions.get('window').width - getTokens().size[7].val
export const HEIGHT_HORIZONTAL_CARD = getTokens().size[13].val

export const HorizontalCard = ({ item }: HorizontalCardProps) => {
  const navigation = useNavigation<NavigationProps>()

  return (
    <Button
      testID="card-button-horizontal"
      unstyled
      onPress={() =>
        navigation.navigate('AnimeDetails', {
          animeId: item.id,
        })
      }>
      <Card
        h={HEIGHT_HORIZONTAL_CARD}
        w={WIDTH_HORIZONTAL_CARD}
        elevate
        elevation="$0.75"
        animation="bouncy">
        <Card
          overflow="hidden"
          br="$2"
          pr="$2"
          $platform-android={{ elevation: '$1' }}>
          <Card.Background>
            <ZStack>
              <Image
                source={item?.main_picture?.medium}
                style={{ height: HEIGHT_HORIZONTAL_CARD / 2.6 }}
                contentFit="cover"
                blurRadius={3}
              />
              <Stack h={HEIGHT_HORIZONTAL_CARD / 2.6} o={0.5} bg="$color1" />
            </ZStack>
          </Card.Background>
          <XStack h={HEIGHT_HORIZONTAL_CARD}>
            <Stack ml="$2" w="40%" jc="center">
              <Image
                style={{
                  height: '90%',
                  width: '90%',
                  borderRadius: 3,
                }}
                source={item?.main_picture?.medium}
                contentFit="fill"
                recyclingKey={item?.main_picture?.medium}
                transition={700}
                placeholder={blurhash}
              />
            </Stack>
            <YStack f={1}>
              <Stack f={0.4} jc="center">
                <Text col="$color12" fow="$6" numberOfLines={3}>
                  {item?.title || item?.alternative_titles?.en}
                </Text>
              </Stack>
              <Stack f={0.6} gap="$1.5">
                {item?.genresFormatted && (
                  <Text fow="$5" fos="$1.5" numberOfLines={2}>
                    {item.genresFormatted}
                  </Text>
                )}
                <XStack ai="center" gap="$2">
                  <CalendarDays size="$1" col="$blue10" />
                  <Text fow="$5" fos="$1.5" col="$blue10">
                    {item?.fullDate}
                  </Text>
                </XStack>
                {item.releaseDay && (
                  <XStack ai="center" gap="$2">
                    <Timer size="$1" col="$blue10" />
                    <Text fow="$5" fos="$1.5" col="$blue10">
                      {item?.releaseDay} - {item?.releaseHour}
                    </Text>
                  </XStack>
                )}
              </Stack>
            </YStack>
          </XStack>
        </Card>
      </Card>
    </Button>
  )
}
