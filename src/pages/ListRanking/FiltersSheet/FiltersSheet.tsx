import React, { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import { Button, H6, Sheet, XStack, YStack } from 'tamagui'

import { RankingType } from '@services/types'

type Props = {
  open: boolean
  setOpen: (value: boolean) => void
  selected: RankingType
  setSelected: (value: RankingType) => void
}

export const FiltersSheet = ({
  open,
  setOpen,
  selected,
  setSelected,
}: Props) => {
  const { t } = useTranslation()
  const rankings = useMemo(() => Object.values(RankingType), [])
  const rankingTypes = useMemo(
    () => ({
      [RankingType.AIRING]: t('rankingTypes.airing'),
      [RankingType.ALL]: t('rankingTypes.all'),
      [RankingType.BY_POPULARITY]: t('rankingTypes.bypopularity'),
      [RankingType.MOVIE]: t('rankingTypes.movie'),
      [RankingType.OVA]: t('rankingTypes.ova'),
      [RankingType.TV]: t('rankingTypes.tv'),
      [RankingType.UPCOMING]: t('rankingTypes.upcoming'),
      [RankingType.SPECIAL]: t('rankingTypes.special'),
    }),
    [t],
  )

  const handleSelectRanking = (ranking: RankingType) => {
    setSelected(ranking)
    setOpen(false)
  }

  return (
    <Sheet
      open={open}
      snapPointsMode="fit"
      modal
      dismissOnSnapToBottom
      onOpenChange={setOpen}>
      <Sheet.Overlay />
      <Sheet.Handle h="$0.5" w="$4" als="center" />
      <Sheet.Frame>
        <YStack pb="$8" pt="$4" px="$4" gap="$3">
          <H6>{t('anime.rankingList.filtersType')}</H6>
          <XStack gap="$3" fw="wrap">
            {rankings?.map((ranking) => (
              <Button
                key={ranking}
                size="$2"
                bg={selected === ranking ? '$blue10' : '$blue5Light'}
                br="$10"
                onPress={() => handleSelectRanking(ranking)}>
                <Button.Text
                  size="$2"
                  fontWeight="$5"
                  p="$1"
                  color={selected === ranking ? '$blue5Light' : '$blue10'}>
                  {rankingTypes[ranking]}
                </Button.Text>
              </Button>
            ))}
          </XStack>
        </YStack>
      </Sheet.Frame>
    </Sheet>
  )
}
