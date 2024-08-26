import ContentLoader from 'react-content-loader/native'
import { Dimensions } from 'react-native'

import { Rect } from 'react-native-svg'

import { useTheme } from 'tamagui'

const { width } = Dimensions.get('window')

type Props = {
  heightContent: number
}

export const Skeleton = ({ heightContent }: Props) => {
  const theme = useTheme()

  return (
    <ContentLoader
      speed={2}
      width={width}
      height={heightContent}
      viewBox={`0 0 ${width} ${heightContent}`}
      backgroundColor={theme.color5.val}
      foregroundColor={theme.color8.val}
      style={{ position: 'absolute' }}
    >
      <Rect x="0" y="0" rx="0" ry="0" width={width} height={heightContent} />
    </ContentLoader>
  )
}
