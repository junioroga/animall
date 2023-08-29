import { Text } from '@components/Text'
import { useDeviceType } from '@hooks'
import { RootStackParamList } from '@navigators/Home'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Store } from '@store/index'
import { Star } from '@tamagui/lucide-icons'
import { BlurView } from 'expo-blur'
import { Dimensions } from 'react-native'
import { Card, Stack, ZStack, XStack, Button, Image, getTokens } from 'tamagui'

import { AnimeRankingPrepared } from '../../pages/Home/AnimeRanking/data'

type NavigationProps = NativeStackNavigationProp<RootStackParamList>

type Props = {
  item: AnimeRankingPrepared
}

const WIDTH_SCREEN =
  Dimensions.get('window').width / 3 - getTokens().space[4].val
const WIDTH_TABLET = WIDTH_SCREEN - getTokens().size[18].val

export const VerticalCard = ({ item }: Props) => {
  const { isHandset } = useDeviceType()
  const navigation = useNavigation<NavigationProps>()
  const theme = Store.settings.theme.get()

  return (
    <Button
      unstyled
      onPress={() => navigation.navigate('AnimeDetails', { animeId: item.id })}>
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
              resizeMode="stretch"
            />
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
            {item?.rating && (
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
