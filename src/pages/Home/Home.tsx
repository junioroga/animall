import { useTranslation } from 'react-i18next'

import {
  Button,
  getTokens,
  H4,
  H6,
  ScrollView,
  Stack,
  XStack,
  YStack,
} from 'tamagui'
import { ChevronRight } from '@tamagui/lucide-icons'

import { CardType, RankingType } from '@services/types'

import { AnimeRanking } from './AnimeRanking/'

type TitleProps = {
  title: string
}

const TitleSection = ({ title }: TitleProps) => (
  <XStack ai="center" jc="space-between" ml="$4" mr="$3">
    <H6 fontWeight="$6">{title}</H6>
    <Button unstyled>
      <ChevronRight />
    </Button>
  </XStack>
)

export const Home = () => {
  const { t } = useTranslation()

  return (
    <YStack f={1} bg="$background">
      <YStack px="$4" pb="$3" pt="$1">
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
            <TitleSection title={t('home.airing')} />
            <AnimeRanking
              rankingType={RankingType.AIRING}
              cardType={CardType.HORIZONTAL}
            />
          </Stack>
          <Stack>
            <TitleSection title={t('home.topWatched')} />
            <AnimeRanking
              rankingType={RankingType.ALL}
              cardType={CardType.VERTICAL}
            />
          </Stack>
          <Stack>
            <TitleSection title={t('home.upcoming')} />
            <AnimeRanking
              rankingType={RankingType.UPCOMING}
              cardType={CardType.HORIZONTAL}
            />
          </Stack>
          <Stack>
            <TitleSection title={t('home.mostPopular')} />
            <AnimeRanking
              rankingType={RankingType.BY_POPULARITY}
              cardType={CardType.VERTICAL}
            />
          </Stack>
          <Stack>
            <TitleSection title={t('home.special')} />
            <AnimeRanking
              rankingType={RankingType.SPECIAL}
              cardType={CardType.HORIZONTAL}
            />
          </Stack>
        </Stack>
      </ScrollView>
    </YStack>
  )
}
