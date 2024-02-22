import { Pressable } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { Card, Stack, XStack, YStack, ZStack } from 'tamagui'
import { CalendarDays, Timer } from '@tamagui/lucide-icons'

import { Image } from '@/components/Image'
import { Text } from '@/components/Text'
import { RootStackParamListHome } from '@/navigators/Home/Home'
import { AnimeRankingPrepared } from '@/pages/Home/AnimeRanking/data'
import { blurhash } from '@/config/general'

import { useResponsiveCardsContext } from '@/context/ResponsiveCards'

type NavigationProps = NativeStackNavigationProp<RootStackParamListHome>

export type HorizontalCardProps = {
  item: AnimeRankingPrepared
}

export const HorizontalCard = ({ item }: HorizontalCardProps) => {
  const navigation = useNavigation<NavigationProps>()
  const { heightHorizontalCard, widthHorizontalCard } =
    useResponsiveCardsContext()

  return (
    <Pressable
      testID="card-button-horizontal"
      onPress={() =>
        navigation.navigate('AnimeDetails', {
          animeId: item.id,
          title: item?.title || item?.alternative_titles?.en || '',
        })
      }>
      <Card
        h={heightHorizontalCard}
        w={widthHorizontalCard}
        br="$2"
        pr="$2"
        elevation={2}
        bg="$color1">
        <Card.Background br="$2">
          <ZStack>
            <Image
              source={item?.main_picture?.medium}
              style={{ height: heightHorizontalCard / 2 }}
              contentFit="cover"
              blurRadius={2}
            />
            <Stack h={heightHorizontalCard / 2} o={0.4} bg="$color1" />
          </ZStack>
        </Card.Background>
        <XStack h={heightHorizontalCard}>
          <Stack ml="$2" w="35%" jc="center">
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
            <Stack h={heightHorizontalCard / 2} jc="center">
              <Text col="$color12" fow="$6" fos="$5" numberOfLines={3}>
                {item?.title || item?.alternative_titles?.en}
              </Text>
            </Stack>
            <Stack h={heightHorizontalCard / 2} gap="$1.5" mt="$2">
              {item?.genresFormatted && (
                <Text fow="$5" fos="$1.5" numberOfLines={1}>
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
    </Pressable>
  )
}
