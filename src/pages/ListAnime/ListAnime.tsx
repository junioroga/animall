import { AnimeList, Search } from '@components'
import { useAnimeList } from '@hooks/useAnimeList'
import { RootStackParamList } from '@navigators/Home'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useCallback, useEffect } from 'react'
import { YStack, Stack } from 'tamagui'

type Props = NativeStackScreenProps<RootStackParamList, 'ListAnime'>

export const ListAnime = ({ route }: Props) => {
  const { getAll, loading, refreshingManual, refreshing, pagination, data } =
    useAnimeList()

  const userSearch = route.params.userSearch || ''

  const handleSearch = useCallback(() => {
    if (userSearch) {
      getAll(true, false, userSearch)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userSearch])

  useEffect(() => {
    handleSearch()
  }, [handleSearch])

  return (
    <YStack f={1} bg="$background">
      <Stack p="$4">
        <Search getAll={getAll} userSearch={userSearch} />
      </Stack>
      <AnimeList
        getAll={getAll}
        loading={loading}
        refreshingManual={refreshingManual}
        refreshing={refreshing}
        pagination={pagination}
        data={data}
      />
    </YStack>
  )
}
