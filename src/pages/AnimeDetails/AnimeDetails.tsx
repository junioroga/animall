import { Header } from '@components/Header'
import { Loading } from '@components/Loading'
import { useAnimeDetails } from '@hooks'
import { RootStackParamList } from '@navigators/Home'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Share } from '@tamagui/lucide-icons'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { ScrollView, YStack } from 'tamagui'

import { AnimeNumbers } from './AnimeNumbers'
import { Genres } from './Genres'
import { HeaderDetails } from './HeaderDetails'
import { MoreInfo } from './MoreInfo'
import { Synopsis } from './Synopsis'
import { Videos } from './Videos'

type Props = NativeStackScreenProps<RootStackParamList, 'AnimeDetails'>

export const AnimeDetails = ({ route }: Props) => {
  const { animeId } = route.params
  const { data, isLoading } = useAnimeDetails({ animeId })

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
      }}
      bg="$background">
      <Header
        right={
          <TouchableOpacity>
            <Share />
          </TouchableOpacity>
        }
      />
      {isLoading ? (
        <YStack f={1} ai="center" jc="center">
          <Loading />
        </YStack>
      ) : (
        <YStack f={1} pt="$4">
          <HeaderDetails
            mainPicture={data?.main_picture}
            averageTime={Math.round((data?.average_episode_duration ?? 0) / 60)}
            numEpisodes={data?.num_episodes ?? 0}
            title={data?.title ?? data?.alternative_titles.en ?? ''}
          />
          <YStack p="$4">
            <AnimeNumbers
              ranking={data?.rank}
              favorites={data?.num_scoring_users}
              members={data?.num_list_users}
              popularity={data?.popularity}
            />
            <Synopsis synopsis={data?.synopsis} />
            <Genres genres={data?.genres} />
            <MoreInfo
              status={data?.status}
              classification={data?.rating}
              source={data?.media_type}
              season={data?.start_season}
              genre={data?.genres![0]?.name}
              studios={data?.studios}
            />
            <Videos videos={data?.videos} />
          </YStack>
        </YStack>
      )}
    </ScrollView>
  )
}
