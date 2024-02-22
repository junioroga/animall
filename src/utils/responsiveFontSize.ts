import { PixelRatio } from 'react-native'

const fontScale = PixelRatio.getFontScale()

export const getFontSize = (size: number) => size / fontScale
