import { memo, useMemo } from 'react'
import { Pressable } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { Star } from '@tamagui/lucide-icons'
import { Card, Stack, XStack, ZStack, getTokens, useTheme } from 'tamagui'

import { Image } from '@/components/Image'
import { Text } from '@/components/Text'
import { blurhash } from '@/config/general'
import { RootStackParamListHome } from '@/navigators/Home/Home'
import { AnimeDataPrepared } from '@/pages/ListAnime/AnimeList/data'

import { AnimeRankingPrepared } from '../../pages/Home/AnimeRanking/data'

import { useResponsiveCardsContext } from '@/context/ResponsiveCards'

type NavigationProps = NativeStackNavigationProp<RootStackParamListHome>

export type VerticalCardProps = {
  item: AnimeRankingPrepared | AnimeDataPrepared
  pushNavigation?: boolean
}

const VerticalCard = ({ item, pushNavigation = false }: VerticalCardProps) => {
  const theme = useTheme()
  const navigation = useNavigation<NavigationProps>()
  const { widthVerticalCard, heightVerticalCard } = useResponsiveCardsContext()
  const navigationType = useMemo(
    () => (pushNavigation ? navigation.push : navigation.navigate),
    [pushNavigation, navigation]
  )

  const handleNavigate = () => {
    navigationType('AnimeDetails', {
      animeId: item.id,
      title: item?.title || item?.alternative_titles?.en || '',
      image: item?.main_picture?.medium || '',
      customId: item.customId,
    })
  }

  return (
    <Pressable testID="card-button-vertical" onPress={handleNavigate}>
      <Card h={heightVerticalCard} w={widthVerticalCard} elevation={2} br="$2" bg="$color1">
        <ZStack f={1} ov="hidden">
          <Image
            style={{
              height: '100%',
              width: widthVerticalCard,
              borderTopLeftRadius: getTokens().radius[2].val,
              borderTopRightRadius: getTokens().radius[2].val,
            }}
            source={{ uri: item?.main_picture?.medium }}
            contentFit="fill"
            recyclingKey={item?.main_picture?.medium}
            transition={700}
            placeholder={blurhash}
            defaultSource={require('@/assets/loading.png')}
          />
          {item?.rating && (
            <Stack h={getTokens().size['$1.5'].val} pos="absolute" l={0} b={0} r={0} jc="center">
              <Stack h={getTokens().size['$1.5'].val} bg="$color1" o={0.7} />
              <XStack pos="absolute" r={2.5} ai="center" gap="$2">
                <Text fow="$6" fos="$4" col="$color12" t={1}>
                  {item.rating}
                </Text>
                <Star size="$icon.sm" col="$yellow10" fill={theme.yellow6.val} />
              </XStack>
            </Stack>
          )}
        </ZStack>
        <Stack mx="$2" mt="$1" h="$3" jc="center">
          <Text fow="$4" fos="$1.5" numberOfLines={2}>
            {item.customTitle}
          </Text>
        </Stack>
      </Card>
    </Pressable>
  )
}

export default memo(VerticalCard)
