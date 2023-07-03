import { Search as TSearch } from '@tamagui/lucide-icons'
import { useCallback, useState } from 'react'
import { Keyboard } from 'react-native'
import { XStack } from 'tamagui'

import { Button } from './Button'
import { Input } from './Input'

type Props = {
  getAll: (init: boolean, refreshControl: boolean, search: string) => void
}

export const Search = ({ getAll }: Props) => {
  const [search, setSearch] = useState('')
  const canSearch = search.length > 3

  const handleSearch = useCallback(() => {
    getAll(true, false, search)
  }, [getAll, search])

  return (
    <XStack space="$2" mt="$4" ai="center">
      <Input
        variant="full"
        placeholder="Buscar..."
        onChangeText={setSearch}
        returnKeyType="search"
        onSubmitEditing={canSearch ? handleSearch : Keyboard.dismiss}
        autoCorrect={false}
      />
      <Button
        variant="outline"
        onPress={handleSearch}
        disabled={!canSearch}
        icon={<TSearch color="$blue10" />}
      />
    </XStack>
  )
}
