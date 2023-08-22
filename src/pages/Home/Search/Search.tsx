import { Button, Input } from '@components'
import { observer, useObservable } from '@legendapp/state/react'
import { RootStackParamList } from '@navigators/Home'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Search as TSearch } from '@tamagui/lucide-icons'
import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Keyboard } from 'react-native'
import { XStack } from 'tamagui'

type AnimeListScreenNavigationProp =
  NativeStackNavigationProp<RootStackParamList>

export const Search = observer(() => {
  const searchObs = useObservable('')
  const [search, setSearch] = [searchObs.get(), searchObs.set]
  const { t } = useTranslation()
  const canSearch = search.length >= 3
  const navigation = useNavigation<AnimeListScreenNavigationProp>()

  const handleSearch = useCallback(() => {
    navigation.navigate('ListAnime', { userSearch: search })
  }, [search, navigation])

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
      <Button type="outline" onPress={handleSearch} disabled={!canSearch}>
        <Button.Icon>
          <TSearch />
        </Button.Icon>
      </Button>
    </XStack>
  )
})
