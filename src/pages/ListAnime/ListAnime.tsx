import { Search } from '@components'
import { useAnimeList } from '@hooks/useAnimeList'
import { observer } from '@legendapp/state/react'
import { RootStackParamList } from '@navigators/Home'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useEffect } from 'react'
import { YStack, Stack } from 'tamagui'

import { AnimeList } from './AnimeList'

type Props = NativeStackScreenProps<RootStackParamList, 'ListAnime'>

export const ListAnime = observer(({ route }: Props) => {
  const { getAll, loading, refreshingManual, refreshing, pagination, data } =
    useAnimeList()

  const userSearch = route.params.userSearch || ''

  useEffect(() => {
    if (userSearch) {
      getAll({ init: true, search: userSearch })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userSearch])

  return (
    <YStack f={1} bg="$background">
      <Stack p="$4">
        <Search getAll={getAll} userSearch={userSearch} />
      </Stack>
      <AnimeList
        getAll={getAll}
        userSearch={userSearch}
        loading={loading}
        refreshingManual={refreshingManual}
        refreshing={refreshing}
        pagination={pagination}
        data={data}
      />
    </YStack>
  )
})
