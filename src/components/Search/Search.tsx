import { useTranslation } from 'react-i18next'
import { Keyboard } from 'react-native'

import { observer } from '@legendapp/state/react'

import { Button, XStack } from 'tamagui'
import { Search as TSearch } from '@tamagui/lucide-icons'

import { Input } from '@components/Input'

type Props = {
  search: string
  setSearch: (value: string) => void
  onSearch?: () => void
}

export const Search = observer(({ search, setSearch, onSearch }: Props) => {
  const { t } = useTranslation()
  const disabled = search.length < 3

  return (
    <XStack gap="$2" ai="center">
      <Input
        testID="test-input-search"
        clearButtonMode="always"
        variant="full"
        value={search}
        placeholder={t('home.search')}
        onChangeText={setSearch}
        autoCapitalize="words"
        autoCorrect={false}
        autoComplete="off"
        returnKeyType="search"
        onSubmitEditing={disabled ? Keyboard.dismiss : onSearch}
      />
      <Button
        h="$5"
        w="$5"
        variant="outlined"
        borderColor={disabled ? '$gray11' : '$blue10'}
        opacity={disabled ? 0.5 : 1}
        testID="test-button-search"
        onPress={onSearch}
        disabled={disabled}>
        <Button.Icon>
          <TSearch color={disabled ? '$gray11' : '$blue10'} size="$icon.sm" />
        </Button.Icon>
      </Button>
    </XStack>
  )
})
