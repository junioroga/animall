import { Image } from '@components'
import { AnimeData } from '@hooks/types'
import { useAnimeRanking } from '@hooks/useAnimeRanking'
import { observer } from '@legendapp/state/react'
import { RankingType } from '@services/types'
import { tokens } from '@tamagui/themes'
import { useCallback, useEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { FlatList, ListRenderItem } from 'react-native'
import {
  Spinner,
  YStack,
  Text,
  Separator,
  Card,
  Stack,
  useTheme,
} from 'tamagui'

type Props = {
  rankingType: RankingType
}

export const AnimeRanking = observer(({ rankingType }: Props) => {
  const { getRanking, loading, data } = useAnimeRanking()
  const { t } = useTranslation()
  const theme = useTheme()

  useEffect(() => {
    getRanking({ init: true, rankingType })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const renderItem: ListRenderItem<AnimeData> = ({ item }) => (
    <Card h="$15" w="$11" elevate elevation="$0.75">
      <Card overflow="hidden">
        <YStack ai="center">
          <Stack>
            <Image
              style={{
                height: tokens.size[13].val,
                width: tokens.size[11].val,
              }}
              source={{
                uri: item.node.main_picture.medium,
              }}
              contentFit="fill"
            />
          </Stack>
          <Stack h="$4" jc="center" paddingHorizontal="$1">
            <Text fontSize="$2" numberOfLines={3} textAlign="center">
              {item.node.alternative_titles.en || item.node.title}
            </Text>
          </Stack>
        </YStack>
      </Card>
    </Card>
  )

  const renderSeparator = () => <Separator marginHorizontal="$1.5" />

  const renderEmpty = () => {
    return (
      <YStack h="$14" w="100%" ai="center" jc="center">
        {loading ? (
          <Spinner alignSelf="center" />
        ) : (
          <Text>{t('anime.notFound')}</Text>
        )}
      </YStack>
    )
  }

  const keyExtractor = useCallback(
    (item: AnimeData) => String(item.node.id),
    [],
  )

  const formattedData = useMemo(() => data, [data])

  return (
    <FlatList
      keyExtractor={keyExtractor}
      data={loading ? [] : formattedData}
      horizontal
      renderItem={renderItem}
      ItemSeparatorComponent={renderSeparator}
      ListEmptyComponent={renderEmpty}
      contentContainerStyle={{
        flexGrow: 1,
        backgroundColor: theme.background.get(),
        paddingVertical: tokens.space[3].val,
        paddingHorizontal: tokens.space[4].val,
      }}
      showsHorizontalScrollIndicator={false}
    />
  )
})
