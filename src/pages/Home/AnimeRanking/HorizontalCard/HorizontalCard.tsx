import { Image, Text } from '@components'
import { AnimeData } from '@hooks/types'
import { useDeviceType } from '@hooks/useDeviceType'
import { CalendarDays, Star } from '@tamagui/lucide-icons'
import { tokens } from '@tamagui/themes'
import { Dimensions } from 'react-native'
import { Card, Stack, XStack } from 'tamagui'

type Props = {
  item: AnimeData
}

const WIDTH_SCREEN = Dimensions.get('window').width - tokens.space[4].val * 2
const WIDTH_TABLET = WIDTH_SCREEN - tokens.size[18].val

export const HorizontalCard = ({ item }: Props) => {
  const { isHandset } = useDeviceType()

  return (
    <Card
      h="$14"
      w={isHandset ? WIDTH_SCREEN : WIDTH_TABLET}
      elevate
      elevation="$0.75">
      <Card overflow="hidden">
        <XStack>
          <Image
            style={{
              height: tokens.size[14].val,
              width: isHandset ? '40%' : '30%',
            }}
            source={{
              uri: item.node.main_picture.medium,
            }}
            contentFit="fill"
          />
          <Stack w={isHandset ? '60%' : '70%'} padding="$2" space="$1">
            <Text fontWeight="$6" numberOfLines={3} flexWrap="wrap">
              {item.node.alternative_titles.en || item.node.title}
            </Text>
            {item.node.mean && (
              <XStack ai="center" space="$1">
                <Star size="$1" color="$green10" fill="green" />
                <Text fontWeight="$6" fontSize="$3" color="$green10">
                  {item.node.mean}
                </Text>
              </XStack>
            )}
            <XStack ai="center" space="$1">
              <CalendarDays size="$1" color="$blue10" />
              <Text fontWeight="$6" fontSize="$3" color="$blue10">
                {item.node.start_date}
              </Text>
            </XStack>
          </Stack>
        </XStack>
      </Card>
    </Card>
  )
}
