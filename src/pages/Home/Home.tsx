import { useTranslation } from 'react-i18next'

import { getTokens, H4, H6, ScrollView, Stack, XStack, YStack } from 'tamagui'

import { CardType, RankingType } from '@services/types'

import { AnimeRanking } from './AnimeRanking/'

export const Home = () => {
  const { t } = useTranslation()

  return (
    <YStack f={1} bg="$background">
      <YStack px="$4" py="$3">
        <XStack jc="space-between" ai="center">
          <H4 fontWeight="$7">{t('home.itsFunTime')}</H4>
        </XStack>
      </YStack>
      <ScrollView
        fg={1}
        contentContainerStyle={{
          paddingBottom: getTokens().space[11].val,
        }}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        <Stack gap="$2">
          <Stack>
            <H6 fontWeight="$6" ml="$4">
              {t('home.topWatched')}
            </H6>
            <AnimeRanking
              rankingType={RankingType.ALL}
              cardType={CardType.VERTICAL}
            />
          </Stack>
          <Stack>
            <H6 fontWeight="$6" ml="$4">
              {t('home.upcoming')}
            </H6>
            <AnimeRanking
              rankingType={RankingType.UPCOMING}
              cardType={CardType.HORIZONTAL}
            />
          </Stack>
          <Stack>
            <H6 fontWeight="$6" ml="$4">
              {t('home.mostPopular')}
            </H6>
            <AnimeRanking
              rankingType={RankingType.BY_POPULARITY}
              cardType={CardType.VERTICAL}
            />
          </Stack>
        </Stack>
      </ScrollView>
    </YStack>
  )
}
