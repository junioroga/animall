import { useTranslation } from 'react-i18next'
import { GestureResponderEvent } from 'react-native'

import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

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

import { RootStackParamListHome } from '@navigators/Home'
import { CardType, RankingType } from '@services/types'

import { AnimeRanking } from './AnimeRanking/'

type NavigationProps = NativeStackScreenProps<RootStackParamListHome>

type TitleProps = {
  title: string
  onPress: (event: GestureResponderEvent) => void
}

const TitleSection = ({ title, onPress }: TitleProps) => (
  <Button
    unstyled
    fd="row"
    ai="center"
    jc="space-between"
    ml="$4"
    mr="$3"
    onPress={onPress}>
    <H6 fontWeight="$6">{title}</H6>
    <Button unstyled>
      <ChevronRight size="$icon.sm" />
    </Button>
  </Button>
)

export const Home = ({ navigation }: NavigationProps) => {
  const { t } = useTranslation()
  const { bottom } = useSafeAreaInsets()

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
          paddingBottom: getTokens().space[9].val + bottom,
        }}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        <Stack gap="$2">
          <Stack>
            <TitleSection
              title={t('home.airing')}
              onPress={() =>
                navigation.navigate('ListRanking', {
                  rankingType: RankingType.AIRING,
                })
              }
            />
            <AnimeRanking
              rankingType={RankingType.AIRING}
              cardType={CardType.HORIZONTAL}
            />
          </Stack>
          <Stack>
            <TitleSection
              title={t('home.topWatched')}
              onPress={() =>
                navigation.navigate('ListRanking', {
                  rankingType: RankingType.ALL,
                })
              }
            />
            <AnimeRanking
              rankingType={RankingType.ALL}
              cardType={CardType.VERTICAL}
            />
          </Stack>
          <Stack>
            <TitleSection
              title={t('home.upcoming')}
              onPress={() =>
                navigation.navigate('ListRanking', {
                  rankingType: RankingType.UPCOMING,
                })
              }
            />
            <AnimeRanking
              rankingType={RankingType.UPCOMING}
              cardType={CardType.HORIZONTAL}
            />
          </Stack>
          <Stack>
            <TitleSection
              title={t('home.mostPopular')}
              onPress={() =>
                navigation.navigate('ListRanking', {
                  rankingType: RankingType.BY_POPULARITY,
                })
              }
            />
            <AnimeRanking
              rankingType={RankingType.BY_POPULARITY}
              cardType={CardType.VERTICAL}
            />
          </Stack>
          <Stack>
            <TitleSection
              title={t('home.special')}
              onPress={() =>
                navigation.navigate('ListRanking', {
                  rankingType: RankingType.SPECIAL,
                })
              }
            />
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
