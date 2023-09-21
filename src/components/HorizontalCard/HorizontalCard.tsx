import { Dimensions } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { Button, Card, getTokens, Stack, XStack, YStack, ZStack } from 'tamagui'
import { CalendarDays, Timer } from '@tamagui/lucide-icons'

import { Image } from '@components/Image'
import { Text } from '@components/Text'
import { RootStackParamListHome } from '@navigators/Home/Home'
import { blurhash } from '@config/general'

import { AnimeRankingPrepared } from '../../pages/Home/AnimeRanking/data'

type NavigationProps = NativeStackNavigationProp<RootStackParamListHome>

type Props = {
  item: AnimeRankingPrepared
}

export const WIDTH_HORIZONTAL_CARD =
  Dimensions.get('window').width - getTokens().size[7].val
export const HEIGHT_HORIZONTAL_CARD = getTokens().size[13].val

export const HorizontalCard = ({ item }: Props) => {
  const navigation = useNavigation<NavigationProps>()
  const transitionTag = String(`${item?.id}${item?.uuid}`)

  return (
    <Button
      unstyled
      onPress={() =>
        navigation.navigate('AnimeDetails', {
          animeId: item.id,
          uuid: item?.uuid,
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
                source={item?.main_picture.medium}
                style={{ height: HEIGHT_HORIZONTAL_CARD / 2.3 }}
                contentFit="cover"
                blurRadius={3}
              />
              <Stack h={HEIGHT_HORIZONTAL_CARD / 2.3} o={0.5} bg="$color1" />
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
                source={item?.main_picture.medium}
                contentFit="fill"
                recyclingKey={item?.main_picture.medium}
                transition={700}
                placeholder={blurhash}
                sharedTransitionTag={transitionTag}
              />
            </Stack>
            <YStack f={1}>
              <Stack f={0.5} jc="center">
                <Text color="$color12" fontWeight="$6" numberOfLines={3}>
                  {item?.title || item?.alternative_titles.en}
                </Text>
              </Stack>
              <Stack f={0.6} gap="$1.5">
                {item?.genresFormatted && (
                  <Text fontWeight="$5" fontSize="$1.5" numberOfLines={2}>
                    {item.genresFormatted}
                  </Text>
                )}
                <XStack ai="center" gap="$1">
                  <CalendarDays size="$icon.sm" color="$blue10" />
                  <Text fontWeight="$5" fontSize="$1.5" color="$blue10">
                    {item?.fullDate}
                  </Text>
                </XStack>
                {item.releaseDay && (
                  <XStack ai="center" gap="$1">
                    <Timer size="$icon.sm" color="$blue10" />
                    <Text fontWeight="$5" fontSize="$1" color="$blue10">
                      {item?.releaseDay} - {item?.broadcast?.start_time}
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
