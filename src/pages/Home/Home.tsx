import { useTranslation } from 'react-i18next'

import { getTokens, H3, H4, ScrollView, Stack, XStack, YStack } from 'tamagui'

import { CardType, RankingType } from '@services/types'

import { AnimeRanking } from './AnimeRanking/'
import { HeaderConfig } from './HeaderConfig'

export const Home = () => {
  const { t } = useTranslation()

  return (
    <YStack bg="$background">
      <YStack px="$4" py="$2">
        <XStack jc="space-between" ai="center">
          <H3 fontWeight="$7">{t('home.itsFunTime')}</H3>
          <HeaderConfig />
        </XStack>
      </YStack>
      <ScrollView
        fg={1}
        contentContainerStyle={{
          paddingBottom: getTokens().size[6].val,
        }}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        <Stack gap="$2">
          <Stack>
            <H4 fontWeight="$6" ml="$4">
              {t('home.topWatched')}
            </H4>
            <AnimeRanking
              rankingType={RankingType.ALL}
              cardType={CardType.VERTICAL}
            />
          </Stack>
          <Stack>
            <H4 fontWeight="$6" ml="$4">
              {t('home.upcoming')}
            </H4>
            <AnimeRanking
              rankingType={RankingType.UPCOMING}
              cardType={CardType.HORIZONTAL}
            />
          </Stack>
          <Stack>
            <H4 fontWeight="$6" ml="$4">
              {t('home.mostPopular')}
            </H4>
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
