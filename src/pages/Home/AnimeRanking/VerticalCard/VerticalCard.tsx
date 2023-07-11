import { Image, Text } from '@components'
import { AnimeData } from '@hooks/types'
import { Star } from '@tamagui/lucide-icons'
import { tokens } from '@tamagui/themes'
import { Ref } from 'react'
import { View } from 'react-native'
import { YStack, Card, Stack, XStack } from 'tamagui'

type Props = {
  item: AnimeData
  refCard: Ref<View>
}

export const VerticalCard = ({ item, refCard }: Props) => {
  return (
    <Card
      h="$20"
      w="$13"
      elevate
      elevation="$0.75"
      onLayout={() => {
        // refCard.current.height = tokens.size[20].val
        // refCard.current.width = tokens.size[13].val
      }}>
      <Card overflow="hidden">
        <YStack>
          <Image
            style={{
              height: '70%',
              width: tokens.size[13].val,
            }}
            source={{
              uri: item.node.main_picture.medium,
            }}
            contentFit="fill"
          />
          <Stack h="30%" padding="$2" space="$1">
            <Text fontWeight="$6" numberOfLines={3} flexWrap="wrap">
              {item.node.alternative_titles.en || item.node.title}
            </Text>
            {item.node.mean && (
              <XStack ai="center" space="$1">
                <Star size="$1" color="$green10" fill="green" />
                <Text fontWeight="$6" fontSize="$4" color="$green10">
                  {item.node.mean}
                </Text>
              </XStack>
            )}
          </Stack>
        </YStack>
      </Card>
    </Card>
  )
}
