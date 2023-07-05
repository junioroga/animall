import { AnimeData } from '@hooks/types'
import { AnimeListHookProps } from '@hooks/useAnimeList'
import { tokens } from '@tamagui/themes'
import { format } from 'date-fns'
import { t } from 'i18next'
import { useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { FlatList, ListRenderItem } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Spinner, XStack, YStack, Text, Separator, Image, Card } from 'tamagui'

const preparedData = (data: AnimeData[]) =>
  data.map((item) => {
    const startAt = item.node.start_date
      ? format(new Date(item.node.start_date), 'dd/MM/yyyy')
      : ''
    const endAt = item.node.end_date
      ? format(new Date(item.node.end_date), 'dd/MM/yyyy')
      : t('anime.producing')

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
  const { t } = useTranslation()
  const insets = useSafeAreaInsets()

  const renderItem: ListRenderItem<AnimeData> = ({ item }) => (
    <Card elevation="$4" elevate animation="bouncy">
      <Card overflow="hidden">
        <XStack space="$2">
          <Image
            source={{
              width: tokens.size[10].val,
              height: tokens.size[10].val,
              uri: item.node.main_picture.medium,
            }}
          />
          <YStack jc="center">
            <Text>{item.node.title}</Text>
            <Text>{item.node.start_date}</Text>
            <Text>{item.node.end_date}</Text>
            <Text>{item.node.num_episodes}</Text>
            <Text>{item.node.mean}</Text>
          </YStack>
        </XStack>
      </Card>
    </Card>
  )

  const renderSeparator = () => <Separator marginVertical="$2" />

  const renderEmpty = () => {
    return (
      <YStack f={1} ai="center" jc="center">
        {loading ? (
          <Spinner alignSelf="center" />
        ) : (
          <Text>{t('anime.notFound')}</Text>
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
      contentContainerStyle={{
        flexGrow: 1,
        paddingHorizontal: tokens.space[4].val,
        paddingBottom: insets.bottom,
      }}
      showsVerticalScrollIndicator={false}
    />
  )
}
