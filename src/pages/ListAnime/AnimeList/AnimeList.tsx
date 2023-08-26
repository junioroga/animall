import { Image, Text, Loading } from '@components'
import { AnimeData } from '@hooks/useAnimeList/types'
import { observer } from '@legendapp/state/react'
import { tokens } from '@tamagui/themes'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { FlatList, ListRenderItem } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { XStack, YStack, Separator, Card } from 'tamagui'

import { AnimeDataPrepared, preparedData } from './data'

type Props = Partial<Omit<ReturnType<typeof useInfiniteQuery>, 'data'>> & {
  limit: number
  data?: AnimeData[]
  onRefresh: () => void
  refreshingManual: boolean
}

export const AnimeList = observer(
  ({
    isLoading,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
    data,
    onRefresh,
    refreshingManual,
    limit,
  }: Props) => {
    const { t } = useTranslation()
    const insets = useSafeAreaInsets()

    const renderItem: ListRenderItem<AnimeDataPrepared> = useCallback(
      ({ item }) => (
        <Card elevation="$4" elevate animation="bouncy">
          <Card overflow="hidden" br="$1" pr="$2">
            <XStack space="$3">
              <Image
                style={{
                  height: tokens.size[11].val,
                  width: tokens.size[10].val,
                }}
                source={{
                  uri: item?.main_picture?.medium,
                }}
                contentFit="fill"
              />
              <YStack f={1} jc="center" space="$1">
                <Text fontWeight="$6" numberOfLines={1}>
                  {item?.alternative_titles?.en || item?.title}
                </Text>
                <XStack ai="center" space="$2">
                  <Text w="$7">{t('anime.list.startDate')}</Text>
                  <Text>{item?.startAt}</Text>
                </XStack>
                <XStack ai="center" space="$2">
                  <Text w="$7">{t('anime.list.endDate')}</Text>
                  <Text>{item?.endAt}</Text>
                </XStack>
                <XStack ai="center" space="$2">
                  <Text w="$7">{t('anime.list.episodes')}</Text>
                  <Text>{item?.num_episodes}</Text>
                </XStack>
                <XStack ai="center" space="$2">
                  <Text w="$7">{t('anime.list.rating')}</Text>
                  <Text>{item?.rating}</Text>
                </XStack>
              </YStack>
            </XStack>
          </Card>
        </Card>
      ),
      [t],
    )

    const renderSeparator = useCallback(() => <Separator />, [])

    const renderEmpty = useCallback(
      () => (
        <YStack f={1} ai="center" jc="center">
          {isLoading ? <Loading /> : <Text>{t('anime.notFound')}</Text>}
        </YStack>
      ),
      [isLoading, t],
    )

    const renderFooter = useCallback(() => {
      if (isFetchingNextPage) {
        return (
          <YStack ai="center" jc="center" marginVertical="$3">
            <Loading />
          </YStack>
        )
      }

      return null
    }, [isFetchingNextPage])

    const keyExtractor = useCallback(
      (item: AnimeDataPrepared, index: number) => `${String(item.id)}${index}`,
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

    const onEndReached = () => {
      if (hasNextPage) {
        if (!isFetchingNextPage) {
          fetchNextPage?.()
        }
      }
    }

    return (
      <FlatList
        keyExtractor={keyExtractor}
        data={isLoading ? [] : formattedData}
        renderItem={renderItem}
        getItemLayout={getItemLayout}
        ItemSeparatorComponent={renderSeparator}
        ListEmptyComponent={renderEmpty}
        ListFooterComponent={renderFooter}
        refreshing={refreshingManual}
        onRefresh={onRefresh}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.5}
        initialNumToRender={limit}
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
