import { useCallback, useMemo, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { FlatList, ListRenderItem } from 'react-native'

import { observer } from '@legendapp/state/react'

import { Separator, getTokens, useMedia, useTheme } from 'tamagui'

import { EmptyState, EmptyStateTypes, HorizontalCard, VerticalCard } from '@/components'
import { QueryKeysRanking, useAnimeRanking, useLegendState } from '@/hooks'
import { CardType, RankingType } from '@/services/types'

import { ButtonsScrollHorizontalWeb } from './ButtonsScrollHorizontalWeb'
import { SkeletonHorizontal } from './SkeletonHorizontal'
import { SkeletonVertical } from './SkeletonVertical'
import { AnimeRankingPrepared, preparedData } from './data'

import { useResponsiveCardsContext } from '@/context/ResponsiveCards'

type Props = {
  rankingType: RankingType
  cardType: CardType
}

export const AnimeRanking = observer(({ rankingType, cardType }: Props) => {
  const { isHandsetOrTablet } = useMedia()
  const [showScrollButtons, setShowScrollButtons] = useLegendState(false)
  const [scrollOffset, setScrollOffset] = useLegendState(0)
  const flatListRef = useRef<FlatList>(null)
  const limit = useMemo(() => (isHandsetOrTablet ? 10 : 20), [isHandsetOrTablet])
  const { isLoading, data } = useAnimeRanking({
    queryKey: QueryKeysRanking.RANKING_HOME,
    rankingType,
    limit,
  })
  const { widthVerticalCard, widthHorizontalCard } = useResponsiveCardsContext()
  const { t } = useTranslation()
  const theme = useTheme()
  const itemWidth = useMemo(
    () => (cardType === CardType.HORIZONTAL ? widthVerticalCard : widthHorizontalCard),
    [cardType, widthVerticalCard, widthHorizontalCard]
  )

  const renderItem: ListRenderItem<AnimeRankingPrepared> = useCallback(
    ({ item }) =>
      cardType === CardType.HORIZONTAL ? (
        <HorizontalCard item={item} />
      ) : (
        <VerticalCard item={item} />
      ),
    [cardType]
  )

  const renderSeparator = useCallback(() => <Separator mx="$1.5" />, [])

  const renderEmpty = useCallback(
    () =>
      isLoading ? (
        cardType === CardType.HORIZONTAL ? (
          <SkeletonHorizontal />
        ) : (
          <SkeletonVertical />
        )
      ) : (
        <EmptyState type={EmptyStateTypes.ERROR} message={t('anime.notFound')} />
      ),
    [isLoading, t, cardType]
  )

  const keyExtractor = useCallback(
    (item: AnimeRankingPrepared, index: number) => `${String(item.id)}${index}`,
    []
  )

  const getItemLayout = useCallback(
    (_: any, index: number) => ({
      length: itemWidth,
      offset: itemWidth * index,
      index,
    }),
    [itemWidth]
  )

  const formattedData = useMemo(() => (data?.pages ? preparedData(data.pages) : []), [data])

  const handlePressLeft = useCallback(() => {
    flatListRef.current?.scrollToOffset({
      animated: true,
      offset: scrollOffset - itemWidth * (cardType === CardType.HORIZONTAL ? 8 : 2),
    })
  }, [scrollOffset, itemWidth, cardType])

  const handlePressRight = useCallback(() => {
    flatListRef.current?.scrollToOffset({
      animated: true,
      offset: scrollOffset + itemWidth * (cardType === CardType.HORIZONTAL ? 8 : 2),
    })
  }, [cardType, scrollOffset, itemWidth])

  return (
    <>
      <ButtonsScrollHorizontalWeb
        orientation={cardType}
        show={showScrollButtons}
        onPressLeft={handlePressLeft}
        onPressRight={handlePressRight}
      />
      <FlatList
        ref={flatListRef}
        keyExtractor={keyExtractor}
        data={isLoading ? [] : formattedData}
        horizontal
        renderItem={renderItem}
        getItemLayout={getItemLayout}
        ItemSeparatorComponent={renderSeparator}
        ListEmptyComponent={renderEmpty}
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: getTokens().space.$4.val,
          paddingVertical: getTokens().space.$3.val,
          backgroundColor: theme.background.val,
        }}
        showsHorizontalScrollIndicator={false}
        initialNumToRender={limit}
        onPointerEnter={() => setShowScrollButtons(true)}
        onPointerLeave={() => setShowScrollButtons(false)}
        onScroll={({ nativeEvent }) => setScrollOffset(nativeEvent.contentOffset.x)}
      />
    </>
  )
})
