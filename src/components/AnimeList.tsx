import { AnimeListHookProps } from '@hooks/useAnimeList'
import { AnimeData } from '@hooks/useAnimeList/types'
import { format } from 'date-fns'
import { useCallback, useMemo } from 'react'
import { FlatList, ListRenderItem } from 'react-native'
import { Spinner, XStack, YStack, Text, Separator, Image, Card } from 'tamagui'

const preparedData = (data: AnimeData[]) =>
  data.map((item) => {
    const startAt = format(new Date(item.node.start_date), 'dd/MM/yyyy')
    const endAt = format(new Date(item.node.end_date), 'dd/MM/yyyy')

    return {
      node: {
        ...item.node,
        start_date: startAt,
        end_date: endAt,
      },
    }
  })

type Props = Omit<AnimeListHookProps, 'canPaginate'>

export const AnimeList = ({
  getAll,
  loading,
  refreshingManual,
  refreshing,
  pagination,
  data,
}: Props) => {
  const renderItem: ListRenderItem<AnimeData> = ({ item }) => {
    return (
      <Card elevation="$1">
        <XStack space="$2">
          <Image
            source={{
              width: 100,
              height: 100,
              uri: item.node.main_picture.medium,
            }}
          />
          <YStack>
            <Text>{item.node.title}</Text>
            <Text>{item.node.start_date}</Text>
            <Text>{item.node.end_date}</Text>
            <Text>{item.node.num_episodes}</Text>
            <Text>{item.node.mean}</Text>
          </YStack>
        </XStack>
      </Card>
    )
  }

  const renderSeparator = () => <Separator marginVertical="$2" />

  const renderEmpty = () => {
    return (
      <YStack f={1} ai="center" jc="center">
        {loading ? (
          <Spinner alignSelf="center" />
        ) : (
          <Text>Não há animes disponíveis</Text>
        )}
      </YStack>
    )
  }

  const renderFooter = () => {
    if (refreshing) {
      return (
        <YStack ai="center" jc="center" marginVertical="$3">
          <Spinner />
        </YStack>
      )
    }

    return null
  }

  const keyExtractor = useCallback(
    (item: AnimeData) => String(item.node.id),
    [],
  )

  const formattedData = useMemo(() => preparedData(data), [data])

  return (
    <FlatList
      keyExtractor={keyExtractor}
      data={loading ? [] : formattedData}
      renderItem={renderItem}
      ItemSeparatorComponent={renderSeparator}
      ListEmptyComponent={renderEmpty}
      ListFooterComponent={renderFooter}
      refreshing={refreshingManual}
      onRefresh={() => getAll(true, true)}
      onEndReached={() => getAll()}
      onEndReachedThreshold={0.5}
      initialNumToRender={pagination.limit}
      contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 20 }}
    />
  )
}
