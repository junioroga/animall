import { RootStackParamList } from '@navigators/Home'
import { useNavigation } from '@react-navigation/native'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Search as TSearch } from '@tamagui/lucide-icons'
import { useCallback, useState } from 'react'
import { Keyboard } from 'react-native'
import { XStack } from 'tamagui'

import { Button } from './Button'
import { Input } from './Input'

type Props = {
  getAll?: (init: boolean, refreshControl: boolean, search: string) => void
  userSearch?: string
}

type AnimeListScreenNavigationProp =
  NativeStackNavigationProp<RootStackParamList>

export const Search = ({ getAll, userSearch }: Props) => {
  const [search, setSearch] = useState(userSearch ?? '')
  const canSearch = search.length >= 3
  const navigation = useNavigation<AnimeListScreenNavigationProp>()

  const handleSearch = useCallback(() => {
    if (userSearch && getAll) {
      getAll(true, false, search)
    } else {
      navigation.navigate('ListAnime', { userSearch: search })
    }
  }, [getAll, search, userSearch, navigation])

  return (
    <XStack space="$2" mt="$4" ai="center">
      <Input
        variant="full"
        value={search}
        placeholder="Buscar..."
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
}
