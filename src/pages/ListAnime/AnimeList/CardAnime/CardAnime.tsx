import React from 'react'
import { useTranslation } from 'react-i18next'

import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { Button, Card, getTokens, Image, XStack, YStack } from 'tamagui'

import { Text } from '@components'
import { RootStackParamListHome } from '@navigators/Home'

import { AnimeDataPrepared } from '../data'

type NavigationProps = NativeStackNavigationProp<RootStackParamListHome>

type Props = {
  item: AnimeDataPrepared
}

export const CardAnime = ({ item }: Props) => {
  const navigation = useNavigation<NavigationProps>()
  const { t } = useTranslation()

  return (
    <Button
      unstyled
      onPress={() => navigation.navigate('AnimeDetails', { animeId: item.id })}>
      <Card elevation="$4" elevate animation="bouncy">
        <Card overflow="hidden" br="$1" pr="$2">
          <XStack gap="$3">
            <Image
              style={{
                height: getTokens().size[11].val,
                width: getTokens().size[10].val,
              }}
              source={{
                uri: item?.main_picture?.medium,
              }}
              resizeMode="stretch"
            />
            <YStack f={1} jc="center" gap="$1">
              <Text fontWeight="$6" numberOfLines={1}>
                {item.alternative_titles?.en || item.title}
              </Text>
              <XStack ai="center" gap="$2">
                <Text w="$7">{t('anime.list.startDate')}</Text>
                <Text>{item.startAt}</Text>
              </XStack>
              <XStack ai="center" gap="$2">
                <Text w="$7">{t('anime.list.endDate')}</Text>
                <Text>{item.endAt}</Text>
              </XStack>
              <XStack ai="center" gap="$2">
                <Text w="$7">{t('anime.list.episodes')}</Text>
                <Text>{item.num_episodes}</Text>
              </XStack>
              <XStack ai="center" gap="$2">
                <Text w="$7">{t('anime.list.rating')}</Text>
                <Text>{item.rating}</Text>
              </XStack>
            </YStack>
          </XStack>
        </Card>
      </Card>
    </Button>
  )
}

export default Card
