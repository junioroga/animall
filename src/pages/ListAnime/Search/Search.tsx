import { observer, useObservable } from '@legendapp/state/react'
import { Search as TSearch } from '@tamagui/lucide-icons'
import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Keyboard } from 'react-native'
import { XStack } from 'tamagui'

import { Button } from '../../../components/Button'
import { Input } from '../../../components/Input'

type Props = {
  handleSearch: (value: any) => void
  search?: string
}

export const Search = observer(({ handleSearch, search }: Props) => {
  const searchObs = useObservable<string>(search ?? '')
  const [localSearch, setLocalSearch] = [searchObs.get(), searchObs.set]
  const { t } = useTranslation()
  const canSearch = localSearch.length >= 3

  const handleSearchWithParams = useCallback(() => {
    handleSearch({ init: true, search: localSearch })
  }, [handleSearch, localSearch])

  return (
    <XStack space="$2" mt="$4" ai="center">
      <Input
        variant="full"
        value={localSearch}
        placeholder={t('home.search')}
        onChangeText={setLocalSearch}
        returnKeyType="search"
        onSubmitEditing={canSearch ? handleSearchWithParams : Keyboard.dismiss}
        autoCorrect={false}
      />
      <Button
        variant="outline"
        onPress={handleSearchWithParams}
        disabled={!canSearch}>
        <Button.Icon>
          <TSearch />
        </Button.Icon>
      </Button>
    </XStack>
  )
})
