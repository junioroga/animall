import { Image, Text } from '@components'
import { AnimeData } from '@hooks/types'
import { AnimeListHookProps } from '@hooks/useAnimeList'
import { observer } from '@legendapp/state/react'
import { tokens } from '@tamagui/themes'
import { format } from 'date-fns'
import { t } from 'i18next'
import { useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { FlatList, ListRenderItem } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Spinner, XStack, YStack, Separator, Card } from 'tamagui'

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

type Props = Omit<AnimeListHookProps, 'canPaginate'> & {
  userSearch: string
}

export const AnimeList = observer(
  ({
    getAll,
    loading,
    refreshingManual,
    refreshing,
    pagination,
    data,
    userSearch,
  }: Props) => {
    const { t } = useTranslation()
    const insets = useSafeAreaInsets()

    const renderItem: ListRenderItem<AnimeData> = useCallback(
      ({ item }) => (
        <Card elevation="$4" elevate animation="bouncy">
          <Card overflow="hidden">
            <XStack space="$2">
              <Image
                style={{
                  height: tokens.size[11].val,
                  width: tokens.size[10].val,
                }}
                source={{
                  uri: item.node.main_picture.medium,
                }}
                contentFit="fill"
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
      ),
      [],
    )

    const renderSeparator = useCallback(
      () => <Separator marginVertical="$2" />,
      [],
    )

    const renderEmpty = useCallback(
      () => (
        <YStack f={1} ai="center" jc="center">
          {loading ? (
            <Spinner alignSelf="center" />
          ) : (
            <Text>{t('anime.notFound')}</Text>
          )}
        </YStack>
      ),
      [loading, t],
    )

    const renderFooter = useCallback(() => {
      if (refreshing) {
        return (
          <YStack ai="center" jc="center" marginVertical="$3">
            <Spinner />
          </YStack>
        )
      }

      return null
    }, [refreshing])

    const keyExtractor = useCallback(
      (item: AnimeData, index: number) => `${String(item.node.id)}${index}`,
      [],
    )

    const formattedData = useMemo(() => preparedData(data), [data])

    const getItemLayout = useCallback((_: any, index: number) => {
      return {
        length: tokens.size[10].val,
        offset: tokens.size[10].val * index,
        index,
      }
    }, [])

    return (
      <FlatList
        keyExtractor={keyExtractor}
        data={loading ? [] : formattedData}
        renderItem={renderItem}
        getItemLayout={getItemLayout}
        ItemSeparatorComponent={renderSeparator}
        ListEmptyComponent={renderEmpty}
        ListFooterComponent={renderFooter}
        refreshing={refreshingManual}
        onRefresh={() =>
          getAll({ init: true, refreshControl: true, search: userSearch })
        }
        onEndReached={() => getAll({ search: userSearch })}
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
  },
)
