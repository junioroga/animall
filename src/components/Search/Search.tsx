import { useTranslation } from 'react-i18next'

import { observer } from '@legendapp/state/react'

import { XStack } from 'tamagui'

import { Input } from '@/components/Input'

export type SearchProps = {
  search: string
  setSearch: (value: string) => void
}

export const Search = observer(({ search, setSearch }: SearchProps) => {
  const { t } = useTranslation()

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
      />
    </XStack>
  )
})
