import Animated, { AnimatedProps } from 'react-native-reanimated'

import { Image as TamaguiImage, ImageProps } from 'tamagui'

const AnimatedImage = Animated.createAnimatedComponent(TamaguiImage)

export const Image = (props: AnimatedProps<ImageProps>) => <AnimatedImage {...props} />
