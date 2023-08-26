import { Button, Input } from '@components'
import { observer } from '@legendapp/state/react'
import { RootStackParamList } from '@navigators/Home'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Store } from '@store/index'
import { Search as TSearch } from '@tamagui/lucide-icons'
import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Keyboard } from 'react-native'
import { XStack } from 'tamagui'

type AnimeListScreenNavigationProp =
  NativeStackNavigationProp<RootStackParamList>

type Props = {
  onSearch?: () => void
}

export const Search = observer(({ onSearch }: Props) => {
  const { t } = useTranslation()
  const { search: searchObs } = Store.user
  const [search, setSearch] = [searchObs.get(), searchObs.set]
  const canSearch = search.length >= 3
  const navigation = useNavigation<AnimeListScreenNavigationProp>()

  const handleSearch = useCallback(() => {
    if (onSearch) {
      onSearch()
    } else {
      navigation.navigate('ListAnime')
    }
  }, [navigation, onSearch])

  return (
    <XStack space="$2" mt="$4" ai="center">
      <Input
        testID="test-input-search"
        variant="full"
        value={search}
        placeholder={t('home.search')}
        onChangeText={setSearch}
        returnKeyType="search"
        onSubmitEditing={canSearch ? handleSearch : Keyboard.dismiss}
        autoCorrect={false}
      />
      <Button
        testID="test-button-search"
        type="outline"
        onPress={handleSearch}
        disabled={!canSearch}>
        <Button.Icon>
          <TSearch />
        </Button.Icon>
      </Button>
    </XStack>
  )
})
