import React from 'react'

import Animated, { AnimatedProps } from 'react-native-reanimated'

import { Image as ExpoImage, ImageProps } from 'expo-image'

const AnimatedImage = Animated.createAnimatedComponent(ExpoImage)

export const Image = (props: AnimatedProps<ImageProps>) => {
  const expoProps = { ...props }

  if (Object.keys(props).some((prop) => prop === 'defaultSource'))
    delete expoProps.defaultSource

  return <AnimatedImage {...expoProps} />
}
