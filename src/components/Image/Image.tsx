import React from 'react'

import Animated from 'react-native-reanimated'

import { Image as ExpoImage, ImageProps } from 'expo-image'

const AnimatedImage = Animated.createAnimatedComponent(ExpoImage)

export const Image = (props: Animated.AnimateProps<ImageProps>) => (
  <AnimatedImage {...props} />
)
