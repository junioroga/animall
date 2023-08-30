import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Keyboard } from 'react-native'

import { observer } from '@legendapp/state/react'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { Button, XStack } from 'tamagui'
import { Search as TSearch } from '@tamagui/lucide-icons'

import { Input } from '@components/Input'
import { RootStackParamList } from '@navigators/Home'
import { Store } from '@store/index'

type NavigationProps = NativeStackNavigationProp<RootStackParamList>

type Props = {
  onSearch?: () => void
}

export const Search = observer(({ onSearch }: Props) => {
  const { t } = useTranslation()
  const { search: searchObs } = Store.user
  const [search, setSearch] = [searchObs.get(), searchObs.set]
  const disabled = search.length < 3
  const navigation = useNavigation<NavigationProps>()

  const handleSearch = useCallback(() => {
    if (onSearch) {
      onSearch()
    } else {
      navigation.navigate('ListAnime')
    }
  }, [navigation, onSearch])

  return (
    <XStack gap="$2" mt="$4" ai="center">
      <Input
        testID="test-input-search"
        clearButtonMode="always"
        variant="full"
        value={search}
        placeholder={t('home.search')}
        onChangeText={setSearch}
        returnKeyType="search"
        onSubmitEditing={disabled ? Keyboard.dismiss : handleSearch}
        autoCorrect={false}
      />
      <Button
        h="$5"
        w="$5"
        variant="outlined"
        borderColor={disabled ? '$gray10' : '$blue10'}
        opacity={disabled ? 0.5 : 1}
        testID="test-button-search"
        onPress={handleSearch}
        disabled={disabled}>
        <Button.Icon>
          <TSearch color={disabled ? '$gray10' : '$blue10'} size="$icon.sm" />
        </Button.Icon>
      </Button>
    </XStack>
  )
})
