import { Button } from '@components/Button/Button'
import { Input } from '@components/Input/Input'
import { Search as TSearch } from '@tamagui/lucide-icons'
import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Keyboard } from 'react-native'
import { XStack } from 'tamagui'

type Props = {
  handleSearch: () => void
  search: string
  setSearch: (value: string) => void
}

export const Search = ({ handleSearch, search, setSearch }: Props) => {
  const { t } = useTranslation()
  const canSearch = search.length >= 3

  const handleSearchWithParams = useCallback(() => {
    handleSearch()
  }, [handleSearch])

  return (
    <XStack space="$2" mt="$4" ai="center">
      <Input
        variant="full"
        value={search}
        placeholder={t('home.search')}
        onChangeText={setSearch}
        returnKeyType="search"
        onSubmitEditing={canSearch ? handleSearchWithParams : Keyboard.dismiss}
        autoCorrect={false}
      />
      <Button
        type="outline"
        onPress={handleSearchWithParams}
        disabled={!canSearch}>
        <Button.Icon>
          <TSearch />
        </Button.Icon>
      </Button>
    </XStack>
  )
}
