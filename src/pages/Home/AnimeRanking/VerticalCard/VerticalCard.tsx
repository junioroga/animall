import { Image, Text } from '@components'
import { Star } from '@tamagui/lucide-icons'
import { tokens } from '@tamagui/themes'
import { YStack, Card, Stack, XStack } from 'tamagui'

import { AnimeRankingPrepared } from '../data'

type Props = {
  item: AnimeRankingPrepared
}

export const VerticalCard = ({ item }: Props) => {
  return (
    <Card h="$20" w="$13" elevate elevation="$0.75">
      <Card overflow="hidden">
        <YStack>
          <Image
            style={{
              height: '70%',
              width: tokens.size[13].val,
            }}
            source={{
              uri: item.main_picture.medium,
            }}
            contentFit="fill"
          />
          <Stack h="30%" padding="$2" space="$1">
            <Text fontWeight="$6" numberOfLines={3} flexWrap="wrap">
              {item.alternative_titles.en || item.title}
            </Text>
            {item.mean && (
              <XStack ai="center" space="$1">
                <Star size="$1" color="$green10" fill="green" />
                <Text fontWeight="$6" fontSize="$4" color="$green10">
                  {item.mean}
                </Text>
              </XStack>
            )}
          </Stack>
        </YStack>
      </Card>
    </Card>
  )
}
