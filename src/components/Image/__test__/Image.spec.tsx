import Animated from 'react-native-reanimated'

import { ImageProps } from 'expo-image'

import { render } from '~/test/test-utils'

import { Image } from '../Image'

describe('Image', () => {
  const setup = (props: Animated.AnimateProps<ImageProps>) => {
    return render(<Image {...props} />)
  }

  it('renders correctly', () => {
    const rendered = setup({})

    expect(rendered).toBeTruthy()
  })
})
