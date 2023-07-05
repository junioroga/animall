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
  Image,
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
    <Card w="$11">
      <Card overflow="hidden">
        <YStack space="$1.5">
          <Stack>
            <Image
              source={{
                width: tokens.size[11].val,
                height: tokens.size[15].val,
                uri: item.node.main_picture.medium,
              }}
            />
          </Stack>
          <Text numberOfLines={2}>
            {item.node.alternative_titles.en || item.node.title}
          </Text>
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
        paddingVertical: tokens.space[2].val,
        paddingHorizontal: tokens.space[4].val,
      }}
      showsHorizontalScrollIndicator={false}
    />
  )
})
