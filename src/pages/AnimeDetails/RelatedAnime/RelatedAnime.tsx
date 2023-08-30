import React, { useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import groupBy from 'lodash/groupBy'

import { Button, YStack } from 'tamagui'

import { Text } from '@components'
import { RelatedAnime as RelatedAnimeType } from '@hooks/useAnimeList/types'
import { RootStackParamList } from '@navigators/Home'

type Props = {
  relatedAnime: RelatedAnimeType[]
}

type NavigationProps = NativeStackNavigationProp<RootStackParamList>

export const RelatedAnime = ({ relatedAnime }: Props) => {
  const { t } = useTranslation()
  const navigation = useNavigation<NavigationProps>()
  const animeGrouped = groupBy(relatedAnime, 'relation_type_formatted')
  const relationArray = Object.keys(animeGrouped)

  const handleRelatedItem = useCallback(
    (animeId: number) => {
      navigation.push('AnimeDetails', { animeId })
    },
    [navigation],
  )

  return (
    <YStack>
      <Text fontWeight="$6">{t('anime.details.relatedAnime')}</Text>
      {relationArray.map((relationType) =>
        animeGrouped[relationType].map((anime, index) => (
          <YStack gap="$1" key={anime.node.id}>
            {index === 0 && (
              <Text color="$gray11" mt="$3">
                {relationType}
              </Text>
            )}
            <Button unstyled onPress={() => handleRelatedItem(anime.node.id)}>
              <Text key={anime.node.id} color="$blue10">
                {anime.node.title}
              </Text>
            </Button>
          </YStack>
        )),
      )}
    </YStack>
  )
}
