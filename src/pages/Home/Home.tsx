import { useTranslation } from 'react-i18next'
import { GestureResponderEvent } from 'react-native'

import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { Button, getTokens, H3, H6, ScrollView, Stack, YStack } from 'tamagui'
import { ChevronRight } from '@tamagui/lucide-icons'

import { RootStackParamListHome } from '@/navigators/Home'
import { CardType, RankingType } from '@/services/types'

import { AnimeRanking } from './AnimeRanking/'

type NavigationProps = NativeStackScreenProps<RootStackParamListHome>

type TitleProps = {
  title: string
  onPress: (event: GestureResponderEvent) => void
}

const TitleSection = ({ title, onPress }: TitleProps) => (
  <Button
    $isHandsetOrTablet={{
      unstyled: true,
    }}
    my="$2"
    fd="row"
    ai="center"
    jc="space-between"
    ml="$4"
    mr="$3"
    onPress={onPress}>
    <H6 fow="$6">{title}</H6>
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
      <ScrollView
        fg={1}
        contentContainerStyle={{
          paddingBottom: getTokens().space[9].val + bottom,
        }}
        showsVerticalScrollIndicator={false}>
        <Stack>
          <YStack px="$4" py="$2">
            <H3>{t('home.itsFunTime')}</H3>
          </YStack>
          <Stack>
            <TitleSection
              title={t('home.airing')}
              onPress={() =>
                navigation.navigate('ListRanking', {
                  rankingType: RankingType.AIRING,
                  sectionTitle: t('home.airing'),
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
                  sectionTitle: t('home.topWatched'),
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
                  sectionTitle: t('home.upcoming'),
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
                  sectionTitle: t('home.mostPopular'),
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
                  sectionTitle: t('home.special'),
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
