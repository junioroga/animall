import React from 'react'

import { Button, XStack } from 'tamagui'

import { Genres as GenresType } from '@/hooks/useAnimeList/types'

type Props = {
  genres?: GenresType[]
}

export const Genres = ({ genres }: Props) => (
  <XStack
    gap="$3"
    fw="wrap"
    // animation="lazy"
    // enterStyle={{
    //   y: -20,
    //   o: 0,
    // }}
    // o={1}
    // y={0}
  >
    {genres?.map((genre) => (
      <Button
        key={genre.id}
        disabled={true}
        size="$2"
        bg="$blue5Light"
        br="$10">
        <Button.Text size="$2" fow="$5" p="$1" col="$blue10">
          {genre.name}
        </Button.Text>
      </Button>
    ))}
  </XStack>
)
