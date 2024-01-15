import { useMemo } from 'react'
import { Dimensions } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import {
  Button,
  Card,
  getTokens,
  Stack,
  useTheme,
  XStack,
  ZStack,
} from 'tamagui'
import { Star } from '@tamagui/lucide-icons'

import { Image } from '@components/Image'
import { Text } from '@components/Text'
import { RootStackParamListHome } from '@navigators/Home/Home'
import { AnimeDataPrepared } from '@pages/ListAnime/AnimeList/data'
import { blurhash } from '@config/general'

import { AnimeRankingPrepared } from '../../pages/Home/AnimeRanking/data'

type NavigationProps = NativeStackNavigationProp<RootStackParamListHome>

export type VerticalCardProps = {
  item: AnimeRankingPrepared | AnimeDataPrepared
  pushNavigation?: boolean
}

export const HEIGHT_VERTICAL_CARD = getTokens().size[14].val
export const WIDTH_VERTICAL_CARD =
  Dimensions.get('screen').width / 3 - getTokens().space[4].val

export const VerticalCard = ({
  item,
  pushNavigation = false,
}: VerticalCardProps) => {
  const theme = useTheme()
  const navigation = useNavigation<NavigationProps>()
  const navigationType = useMemo(
    () => (pushNavigation ? navigation.push : navigation.navigate),
    [pushNavigation, navigation],
  )

  return (
    <Button
      unstyled
      onPress={() => navigationType('AnimeDetails', { animeId: item.id })}
      testID="card-button">
      <Card
        h={HEIGHT_VERTICAL_CARD}
        w={WIDTH_VERTICAL_CARD}
        elevation="$0.75"
        animation="bouncy">
        <Card
          f={1}
          overflow="hidden"
          br="$2"
          $platform-android={{ elevation: 1 }}>
          <ZStack f={1}>
            <Image
              style={{
                height: '100%',
                width: WIDTH_VERTICAL_CARD,
              }}
              source={item?.main_picture?.medium}
              contentFit="fill"
              recyclingKey={item?.main_picture?.medium}
              transition={700}
              placeholder={blurhash}
            />
            {item?.rating && (
              <Stack
                h={getTokens().size[1.5].val}
                pos="absolute"
                l={0}
                b={0}
                r={0}
                jc="center">
                <Stack h={getTokens().size[1.5].val} bg="$color1" o={0.7} />
                <XStack position="absolute" right={2.5} ai="center" gap="$2">
                  <Text fontWeight="$6" fontSize="$4" color="$color12" top={1}>
                    {item.rating}
                  </Text>
                  <Star
                    size="$icon.sm"
                    color="$yellow10"
                    fill={theme.yellow6.val}
                  />
                </XStack>
              </Stack>
            )}
          </ZStack>
          <Stack mx="$2" mt="$1" h="$3" jc="center">
            <Text fontWeight="$4" fontSize="$1.5" numberOfLines={2}>
              {item?.title || item?.alternative_titles?.en}
            </Text>
          </Stack>
        </Card>
      </Card>
    </Button>
  )
}
