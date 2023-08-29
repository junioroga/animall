import { Text } from '@components/Text'
import { useDeviceType } from '@hooks'
import { RootStackParamList } from '@navigators/Home'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Store } from '@store/index'
import { CalendarDays } from '@tamagui/lucide-icons'
import { BlurView } from 'expo-blur'
import { Dimensions } from 'react-native'
import {
  Card,
  Stack,
  XStack,
  YStack,
  ZStack,
  Button,
  Image,
  getTokens,
} from 'tamagui'

import { AnimeRankingPrepared } from '../../pages/Home/AnimeRanking/data'

type NavigationProps = NativeStackNavigationProp<RootStackParamList>

type Props = {
  item: AnimeRankingPrepared
}

const WIDTH_SCREEN = Dimensions.get('window').width - getTokens().size[9].val
const WIDTH_TABLET = WIDTH_SCREEN - getTokens().size[18].val

export const HorizontalCard = ({ item }: Props) => {
  const { isHandset } = useDeviceType()
  const navigation = useNavigation<NavigationProps>()
  const theme = Store.settings.theme.get()

  return (
    <Button
      unstyled
      onPress={() => navigation.navigate('AnimeDetails', { animeId: item.id })}>
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
                h={getTokens().size[14].val / 2}
                source={{
                  uri: item?.main_picture.medium,
                }}
                resizeMode="cover"
                blurRadius={1}
              />
              <BlurView
                style={{
                  height: getTokens().size[14].val / 2,
                }}
                intensity={70}
                tint={theme}
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
