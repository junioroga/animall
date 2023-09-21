import React, { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import { Text as TextSVG } from 'react-native-svg'
import { AccessorFunction, BarChart, YAxis } from 'react-native-svg-charts'

import { getFontSize, useTheme, XStack, YStack } from 'tamagui'

import { Text } from '@components'
import { Statistics } from '@hooks/useAnimeList/types'
import { formatString } from '@utils/formatters'
import { StatisticsTypes } from '@services/types'

type Props = {
  statistics: Statistics
}

type LabelProps = {
  x: AccessorFunction
  y: AccessorFunction
  bandwidth: number
  data: number[]
}

export const Chart = ({ statistics }: Props) => {
  const theme = useTheme()
  const { t } = useTranslation()
  const labels = useMemo(
    () => ({
      [StatisticsTypes.COMPLETED]: t('anime.details.statistics.completed'),
      [StatisticsTypes.DROPPED]: t('anime.details.statistics.dropped'),
      [StatisticsTypes.ON_HOLD]: t('anime.details.statistics.onHold'),
      [StatisticsTypes.PLAN_TO_WATCH]: t(
        'anime.details.statistics.planToWatch',
      ),
      [StatisticsTypes.WATCHING]: t('anime.details.statistics.watching'),
    }),
    [t],
  )
  const dataValues = useMemo(
    () => Object.values(statistics.status).map((values) => Number(values)),
    [statistics],
  )
  const dataNames = useMemo(
    () =>
      Object.entries(statistics.status).map((values) => ({
        label: labels[values[0] as StatisticsTypes],
        value: values[1],
      })),
    [statistics, labels],
  )

  const CUT_OFF = useMemo(() => Math.max(...dataValues), [dataValues])

  const Labels = ({ x, y, bandwidth, data }: LabelProps) =>
    data.map((status, index) => (
      <TextSVG
        key={index}
        x={status >= CUT_OFF ? x(status * 0.8) : x(status) + 4}
        y={y(index) + bandwidth / 1.8}
        fontSize={getFontSize('$1')}
        fontWeight="400"
        fontFamily="Poppins_500Medium"
        fill={status >= CUT_OFF ? theme.color1.val : theme.color12.val}
        alignmentBaseline="middle">
        {formatString(status)}
      </TextSVG>
    ))

  return (
    <YStack py="$3" gap="$2">
      <Text fontWeight="$6">{t('anime.details.statistics.title')}</Text>
      <XStack h={100} gap="$2">
        <YAxis
          data={dataNames}
          yAccessor={({ index }) => index}
          contentInset={{ top: -62, bottom: 10 }}
          formatLabel={(_, index) =>
            dataNames[index] ? dataNames[index].label : ''
          }
          svg={{
            fill: theme.gray11.val,
            fontSize: getFontSize('$1.5'),
            fontFamily: 'Poppins_500Medium',
          }}
          style={{
            height: 100,
            bottom: 1,
          }}
        />
        <BarChart
          style={{ flex: 1 }}
          data={dataValues}
          horizontal={true}
          contentInset={{ top: 0, bottom: 0 }}
          spacingInner={0.1}
          spacingOuter={0.2}
          svg={{ fill: theme.blue10.val }}>
          <Labels />
        </BarChart>
      </XStack>
      <Text fontSize="$1" als="flex-end">
        {t('anime.details.statistics.allMembers', {
          total: formatString(statistics.num_list_users),
        })}
      </Text>
    </YStack>
  )
}
