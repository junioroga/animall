import { AnimeList } from '@components/AnimeList'
import { ChangeTheme } from '@components/ChangeTheme'
import { Search } from '@components/Search'
import { User } from '@components/User'
import { useAnimeList } from '@hooks/useAnimeList'
import { XStack, YStack } from 'tamagui'

const Home = () => {
  const { getAll, loading, refreshingManual, refreshing, pagination, data } =
    useAnimeList()

  return (
    <YStack f={1} bg="$background">
      <YStack p="$4">
        <XStack jc="space-between" ai="center">
          <User />
          <ChangeTheme />
        </XStack>
        <Search getAll={getAll} />
      </YStack>
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

export default Home
