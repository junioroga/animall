import { GetAnimeListProps } from '@hooks/useAnimeList'
import { observer, useObservable } from '@legendapp/state/react'
import { RootStackParamList } from '@navigators/Home'
import { useNavigation } from '@react-navigation/native'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Search as TSearch } from '@tamagui/lucide-icons'
import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Keyboard } from 'react-native'
import { XStack } from 'tamagui'

import { Button } from './Button'
import { Input } from './Input'

type Props = {
  getAll?: ({ init, refreshControl, search }: GetAnimeListProps) => void
  userSearch?: string
}

type AnimeListScreenNavigationProp =
  NativeStackNavigationProp<RootStackParamList>

export const Search = observer(({ getAll, userSearch }: Props) => {
  const searchObs = useObservable<string>(userSearch ?? '')
  const [search, setSearch] = [searchObs.get(), searchObs.set]
  const navigation = useNavigation<AnimeListScreenNavigationProp>()
  const { t } = useTranslation()
  const canSearch = search.length >= 3

  const handleSearch = useCallback(() => {
    if (userSearch && getAll) {
      getAll({ init: true, search })
    } else {
      navigation.navigate('ListAnime', { userSearch: search })
    }
  }, [getAll, search, userSearch, navigation])

  return (
    <XStack space="$2" mt="$4" ai="center">
      <Input
        variant="full"
        value={search}
        placeholder={t('home.search')}
        onChangeText={setSearch}
        returnKeyType="search"
        onSubmitEditing={canSearch ? handleSearch : Keyboard.dismiss}
        autoCorrect={false}
      />
      <Button variant="outline" onPress={handleSearch} disabled={!canSearch}>
        <Button.Icon>
          <TSearch />
        </Button.Icon>
      </Button>
    </XStack>
  )
})
