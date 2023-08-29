import { Search } from '@components'
import { CardType, RankingType } from '@services/types'
import { useTranslation } from 'react-i18next'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { XStack, YStack, H3, Stack, H4, ScrollView } from 'tamagui'

import { AnimeRanking } from './AnimeRanking/'
import { HeaderConfig } from './HeaderConfig'

export const Home = () => {
  const { t } = useTranslation()
  const insets = useSafeAreaInsets()

  return (
    <ScrollView
      fg={1}
      contentContainerStyle={{
        paddingBottom: insets.bottom,
      }}
      bg="$background"
      showsVerticalScrollIndicator={false}>
      <YStack>
        <YStack px="$4">
          <XStack jc="space-between" ai="center">
            <H3 fontWeight="$7">{t('home.itsFunTime')}</H3>
            <HeaderConfig />
          </XStack>
          <Search />
        </YStack>
        <Stack gap="$3" pt="$4">
          <H4 fontWeight="$6" ml="$4">
            {t('home.topWatched')}
          </H4>
          <AnimeRanking
            rankingType={RankingType.ALL}
            cardType={CardType.VERTICAL}
          />
        </Stack>
        <Stack mt="$4" gap="$3">
          <H4 fontWeight="$6" ml="$4">
            {t('home.upcoming')}
          </H4>
          <AnimeRanking
            rankingType={RankingType.UPCOMING}
            cardType={CardType.HORIZONTAL}
          />
        </Stack>
        <Stack mt="$4" gap="$3">
          <H4 fontWeight="$6" ml="$4">
            {t('home.mostPopular')}
          </H4>
          <AnimeRanking
            rankingType={RankingType.BY_POPULARITY}
            cardType={CardType.VERTICAL}
          />
        </Stack>
      </YStack>
    </ScrollView>
  )
}
