import React from 'react'

import { Button, XStack } from 'tamagui'

import { Genres as GenresType } from '@hooks/useAnimeList/types'

type Props = {
  genres?: GenresType[]
}

export const Genres = ({ genres }: Props) => (
  <XStack gap="$3" fw="wrap">
    {genres?.map((genre) => (
      <Button key={genre.id} size="$2" bg="$blue5Light" br="$10">
        <Button.Text size="$2" fontWeight="$5" p="$1" color="$blue10">
          {genre.name}
        </Button.Text>
      </Button>
    ))}
  </XStack>
)
