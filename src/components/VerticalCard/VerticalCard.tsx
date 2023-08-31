import { Dimensions } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { BlurView } from 'expo-blur'

import { Button, Card, getTokens, Image, Stack, XStack, ZStack } from 'tamagui'
import { Star } from '@tamagui/lucide-icons'
import { tokens } from '@tamagui/themes'

import { Text } from '@components/Text'
import { RootStackParamListHome } from '@navigators/Home/Home'
import { Store } from '@store/index'

import { AnimeRankingPrepared } from '../../pages/Home/AnimeRanking/data'

type NavigationProps = NativeStackNavigationProp<RootStackParamListHome>

type Props = {
  item: AnimeRankingPrepared
  pushNavigation?: boolean
}

const WIDTH_SCREEN = Dimensions.get('window').width / 3 - tokens.space[4].val

export const VerticalCard = ({ item, pushNavigation = false }: Props) => {
  const navigation = useNavigation<NavigationProps>()
  const theme = Store.settings.theme.get()
  const navigationType = pushNavigation ? navigation.push : navigation.navigate

  return (
    <Button
      unstyled
      onPress={() => navigationType('AnimeDetails', { animeId: item.id })}>
      <Card
        h="$16"
        w={WIDTH_SCREEN}
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
              resizeMode="stretch"
            />
            {item?.rating && (
              <>
                <BlurView
                  style={{
                    height: getTokens().size[2].val,
                    position: 'absolute',
                    left: 0,
                    bottom: 0,
                    right: 0,
                  }}
                  intensity={50}
                  tint={theme}
                />
                <XStack
                  position="absolute"
                  bottom={2.5}
                  right={2.5}
                  ai="center"
                  gap="$2">
                  <Text fontWeight="$6" fontSize="$4" color="$color12">
                    {item.rating}
                  </Text>
                  <Star size="$1" color="yellow" fill="yellow" />
                </XStack>
              </>
            )}
          </ZStack>
          <Stack p="$2" jc="center">
            <Text
              fontWeight="$4"
              fontSize="$3"
              numberOfLines={1}
              flexWrap="wrap">
              {item?.title || item?.alternative_titles.en}
            </Text>
          </Stack>
        </Card>
      </Card>
    </Button>
  )
}
