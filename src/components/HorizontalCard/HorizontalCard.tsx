import { Dimensions } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { Button, Card, Image, Stack, XStack, YStack, ZStack } from 'tamagui'
import { CalendarDays } from '@tamagui/lucide-icons'
import { tokens } from '@tamagui/themes'

import { Text } from '@components/Text'
import { RootStackParamListHome } from '@navigators/Home/Home'

import { AnimeRankingPrepared } from '../../pages/Home/AnimeRanking/data'

type NavigationProps = NativeStackNavigationProp<RootStackParamListHome>

type Props = {
  item: AnimeRankingPrepared
}

const WIDTH_CARD = Dimensions.get('window').width - tokens.size[9].val
const HEIGHT_CARD = Dimensions.get('window').height / 4

export const HorizontalCard = ({ item }: Props) => {
  const navigation = useNavigation<NavigationProps>()

  return (
    <Button
      unstyled
      onPress={() => navigation.navigate('AnimeDetails', { animeId: item.id })}>
      <Card
        h={HEIGHT_CARD}
        w={WIDTH_CARD}
        elevate
        elevation="$0.75"
        animation="bouncy">
        <Card overflow="hidden" br="$2" pr="$2">
          <Card.Background>
            <ZStack>
              <Image
                h={HEIGHT_CARD / 2}
                source={{
                  uri: item?.main_picture.medium,
                }}
                resizeMode="cover"
                blurRadius={3}
              />
              <Stack h={HEIGHT_CARD / 2} o={0.5} bg="$color1" />
            </ZStack>
          </Card.Background>
          <XStack h={HEIGHT_CARD}>
            <Stack ml="$2" w="40%" jc="center">
              <Image
                style={{
                  height: '90%',
                  width: '90%',
                  borderRadius: 3,
                }}
                source={{
                  uri: item?.main_picture.medium,
                }}
                resizeMode="stretch"
              />
            </Stack>
            <YStack f={1}>
              <Stack f={0.5} jc="center">
                <Text color="$color12" fontWeight="$6" numberOfLines={3}>
                  {item?.title || item?.alternative_titles.en}
                </Text>
              </Stack>
              <Stack f={0.5} gap="$2" mt="$5">
                {item?.genresFormatted && (
                  <Text fontWeight="$5" fontSize="$2" numberOfLines={2}>
                    {item.genresFormatted}
                  </Text>
                )}
                <XStack ai="center" gap="$1">
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
    </Button>
  )
}
