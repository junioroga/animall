import React, { Suspense } from 'react'

import Animated, { AnimatedProps } from 'react-native-reanimated'

import { Image as ExpoImage, ImageProps } from 'expo-image'

import { Loading } from '../Loading'

const AnimatedImage = Animated.createAnimatedComponent(ExpoImage)

export const Image = (props: AnimatedProps<ImageProps>) => (
  <Suspense fallback={<Loading />}>
    <AnimatedImage {...props} />
  </Suspense>
)
