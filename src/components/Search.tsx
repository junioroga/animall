import { useObservable } from '@legendapp/state/react'
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
  getAll?: (init: boolean, refreshControl: boolean, search: string) => void
  userSearch?: string
}

type AnimeListScreenNavigationProp =
  NativeStackNavigationProp<RootStackParamList>

export const Search = ({ getAll, userSearch }: Props) => {
  const search = useObservable<string>(userSearch ?? '')
  const navigation = useNavigation<AnimeListScreenNavigationProp>()
  const { t } = useTranslation()
  const canSearch = search.get().length >= 3

  const handleSearch = useCallback(() => {
    if (userSearch && getAll) {
      getAll(true, false, search.get())
    } else {
      navigation.navigate('ListAnime', { userSearch: search.get() })
    }
  }, [getAll, search, userSearch, navigation])

  return (
    <XStack space="$2" mt="$4" ai="center">
      <Input
        variant="full"
        value={search.get()}
        placeholder={t('home.search')}
        onChangeText={search.set}
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
