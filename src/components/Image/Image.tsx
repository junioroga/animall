import React from 'react'

import Animated, { AnimatedProps } from 'react-native-reanimated'

import { Image as ExpoImage, ImageProps } from 'expo-image'

const AnimatedImage = Animated.createAnimatedComponent(ExpoImage)

export const Image = (props: AnimatedProps<ImageProps>) => (
  <AnimatedImage {...props} />
)
