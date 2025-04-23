import { useTranslation } from 'react-i18next'

import { Separator, YStack, getTokens, useTheme } from 'tamagui'

import { ButtonsScrollHorizontalWeb, Text, VerticalCard } from '@/components'
import { useResponsiveCardsContext } from '@/context/ResponsiveCards'
import { useLegendState } from '@/hooks'
import { Recommendations as RecommendationsType } from '@/hooks/useAnimeList/types'
import { AnimeRankingPrepared } from '@/pages/Home/AnimeRanking/data'
import { CardType } from '@/services/types'
import { observer } from '@legendapp/state/react'
import { useCallback, useRef } from 'react'
import { FlatList, ListRenderItem } from 'react-native'

type Props = {
  recommendations: RecommendationsType[]
}

export const Recommendations = observer(({ recommendations }: Props) => {
  const { t } = useTranslation()
  const theme = useTheme()
  const [showScrollButtons, setShowScrollButtons] = useLegendState(false)
  const [scrollOffset, setScrollOffset] = useLegendState(0)
  const flatListRef = useRef<FlatList>(null)
  const { widthVerticalCard } = useResponsiveCardsContext()

  const renderItem: ListRenderItem<RecommendationsType> = useCallback(
    ({ item }) => (
      <VerticalCard
        item={
          {
            customTitle: item.node.title,
            ...item.node,
          } as any as AnimeRankingPrepared
        }
        pushNavigation
      />
    ),
    []
  )

  const renderSeparator = useCallback(() => <Separator mx="$1.5" />, [])

  const keyExtractor = useCallback(
    (item: RecommendationsType, index: number) => `${String(item.node.id)}${index}`,
    []
  )

  const getItemLayout = useCallback(
    (_: any, index: number) => ({
      length: widthVerticalCard,
      offset: widthVerticalCard * index,
      index,
    }),
    [widthVerticalCard]
  )

  const handlePressLeft = useCallback(() => {
    flatListRef.current?.scrollToOffset({
      animated: true,
      offset: scrollOffset - widthVerticalCard,
    })
  }, [scrollOffset, widthVerticalCard])

  const handlePressRight = useCallback(() => {
    flatListRef.current?.scrollToOffset({
      animated: true,
      offset: scrollOffset + widthVerticalCard,
    })
  }, [scrollOffset, widthVerticalCard])

  return (
    <YStack pt="$4">
      <Text fow="$6" ml="$4">
        {t('anime.details.recommendations')}
      </Text>

      <ButtonsScrollHorizontalWeb
        orientation={CardType.HORIZONTAL}
        show={showScrollButtons}
        onPressLeft={handlePressLeft}
        onPressRight={handlePressRight}
      />
      <FlatList
        ref={flatListRef}
        keyExtractor={keyExtractor}
        data={recommendations}
        horizontal
        renderItem={renderItem}
        getItemLayout={getItemLayout}
        ItemSeparatorComponent={renderSeparator}
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: getTokens().space.$4.val,
          paddingVertical: getTokens().space.$3.val,
          backgroundColor: theme.background.val,
        }}
        showsHorizontalScrollIndicator={false}
        initialNumToRender={10}
        onPointerEnter={() => setShowScrollButtons(true)}
        onPointerLeave={() => setShowScrollButtons(false)}
        onScroll={({ nativeEvent }) => setScrollOffset(nativeEvent.contentOffset.x)}
      />
    </YStack>
  )
})
