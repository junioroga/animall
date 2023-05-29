import { XStack, Input } from 'tamagui';

import { Button } from './Button';

export const Search = () => {
  return (
    <XStack space="$2" mt="$8" ai="center">
      <Input
        f={1}
        w="$5"
        h="$5"
        placeholder="Buscar..."
        focusStyle={{
          bw: '$1',
          boc: '$blue10',
        }}
      />
      <Button variant="outline" />
    </XStack>
  );
};
