import { Button } from '@components/Button/Button'
import { Input } from '@components/Input/Input'
import { Search as TSearch } from '@tamagui/lucide-icons'
import { useTranslation } from 'react-i18next'
import { Keyboard } from 'react-native'
import { XStack } from 'tamagui'

export type Props = {
  handleSearch: () => void
  search: string
  setSearch: (value: string) => void
}

export const Search = ({ handleSearch, search, setSearch }: Props) => {
  const { t } = useTranslation()
  const canSearch = search.length >= 3

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
}
