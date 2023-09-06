import { Dimensions } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import {
  Button,
  Card,
  getTokens,
  Image,
  Stack,
  useTheme,
  XStack,
  ZStack,
} from 'tamagui'
import { Star } from '@tamagui/lucide-icons'
import { tokens } from '@tamagui/themes'

import { Text } from '@components/Text'
import { RootStackParamListHome } from '@navigators/Home/Home'

import { AnimeRankingPrepared } from '../../pages/Home/AnimeRanking/data'

type NavigationProps = NativeStackNavigationProp<RootStackParamListHome>

type Props = {
  item: AnimeRankingPrepared
  pushNavigation?: boolean
}

const WIDTH_CARD = Dimensions.get('window').width / 3 - tokens.space[4].val
const HEIGHT_CARD = tokens.size[15].val

export const VerticalCard = ({ item, pushNavigation = false }: Props) => {
  const theme = useTheme()
  const navigation = useNavigation<NavigationProps>()
  const navigationType = pushNavigation ? navigation.push : navigation.navigate

  return (
    <Button
      unstyled
      onPress={() => navigationType('AnimeDetails', { animeId: item.id })}>
      <Card
        h={HEIGHT_CARD}
        w={WIDTH_CARD}
        elevate
        elevation="$0.75"
        animation="bouncy">
        <Card f={1} overflow="hidden" br="$2">
          <ZStack f={1}>
            <Image
              style={{
                height: '100%',
                width: WIDTH_CARD,
              }}
              source={{
                uri: item?.main_picture.medium,
              }}
              resizeMode="stretch"
            />
            {item?.rating && (
              <Stack
                h={getTokens().size[1.5].val}
                position="absolute"
                left={0}
                bottom={0}
                right={0}
                jc="center">
                <Stack h={getTokens().size[1.5].val} bg="$color1" o={0.7} />
                <XStack position="absolute" right={2.5} ai="center" gap="$2">
                  <Text fontWeight="$6" fontSize="$4" color="$color12" top={2}>
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
          <Stack m="$2" h="$1" jc="center">
            <Text fontWeight="$4" fontSize="$3" numberOfLines={1}>
              {item?.title || item?.alternative_titles.en}
            </Text>
          </Stack>
        </Card>
      </Card>
    </Button>
  )
}
