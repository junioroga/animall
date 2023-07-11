import { AnimeRanking } from '@pages/Home/AnimeRanking'
import { RankingType } from '@services/types'
import { useTranslation } from 'react-i18next'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { XStack, YStack, H3, Stack, H4, ScrollView } from 'tamagui'

import { HeaderConfig } from './HeaderConfig'
import { Search } from './Search'

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
        <YStack p="$4">
          <XStack jc="space-between" ai="center">
            <H3 fontWeight="$7">{t('home.itsFunTime')}</H3>
            <HeaderConfig />
          </XStack>
          <Search />
        </YStack>
        <Stack space="$3">
          <H4 fontWeight="$6" ml="$4">
            {t('home.topWatched')}
          </H4>
          <AnimeRanking rankingType={RankingType.ALL} cardType="vertical" />
        </Stack>
        <Stack mt="$4" space="$3">
          <H4 fontWeight="$6" ml="$4">
            {t('home.upcoming')}
          </H4>
          <AnimeRanking
            rankingType={RankingType.UPCOMING}
            cardType="horizontal"
          />
        </Stack>
        <Stack mt="$4" space="$3">
          <H4 fontWeight="$6" ml="$4">
            {t('home.mostPopular')}
          </H4>
          <AnimeRanking
            rankingType={RankingType.BYPOPULARITY}
            cardType="vertical"
          />
        </Stack>
      </YStack>
    </ScrollView>
  )
}
