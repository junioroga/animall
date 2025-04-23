import { PixelRatio } from 'react-native'

import { createAnimations } from '@tamagui/animations-moti'
import { media } from '@tamagui/config'
import { shorthands } from '@tamagui/shorthands'
import { themes, tokens } from '@tamagui/themes'
import { createFont, createTamagui } from 'tamagui'

const fontScale = PixelRatio.getFontScale()

const getFontSize = (size: number) => size / fontScale

const animations = createAnimations({
  fast: {
    type: 'spring',
    damping: 20,
    mass: 1.2,
    stiffness: 250,
  },
  medium: {
    type: 'spring',
    damping: 15,
    mass: 0.9,
    stiffness: 100,
  },
  slow: {
    type: 'spring',
    damping: 20,
    stiffness: 60,
  },
  bouncy: {
    type: 'spring',
    damping: 10,
    mass: 0.9,
    stiffness: 100,
  },
  lazy: {
    type: 'spring',
    damping: 20,
    stiffness: 60,
  },
  quick: {
    type: 'spring',
    damping: 20,
    mass: 1.2,
    stiffness: 250,
  },
})

const defaultFont = createFont({
  family: 'Poppins',
  letterSpacing: {
    0.25: 0.25,
    0.5: 0.5,
    0.75: 0.75,
    1: 1,
  },
  size: {
    1: getFontSize(10),
    1.5: getFontSize(11),
    2: getFontSize(12),
    3: getFontSize(13),
    4: getFontSize(14),
    true: getFontSize(14),
    5: getFontSize(16),
    6: getFontSize(18),
    7: getFontSize(20),
    8: getFontSize(23),
    9: getFontSize(30),
    10: getFontSize(46),
    11: getFontSize(55),
    12: getFontSize(62),
    13: getFontSize(72),
    14: getFontSize(92),
    15: getFontSize(114),
    16: getFontSize(134),
  },
  weight: {
    1: '100',
    2: '200',
    3: '300',
    4: '400',
    5: '500',
    6: '600',
    7: '700',
    8: '800',
    9: '900',
  },
  face: {
    100: { normal: 'Poppins_100Thin' },
    200: { normal: 'Poppins_200ExtraLight' },
    300: { normal: 'Poppins_300Light' },
    400: { normal: 'Poppins_400Regular' },
    500: { normal: 'Poppins_500Medium' },
    600: { normal: 'Poppins_600SemiBold' },
    700: { normal: 'Poppins_700Bold' },
    800: { normal: 'Poppins_800ExtraBold' },
    900: { normal: 'Poppins_900Black' },
  },
})

const config = createTamagui({
  animations,
  shouldAddPrefersColorThemes: false,
  themeClassNameOnRoot: false,
  shorthands,
  onlyAllowShorthands: true,
  defaultFont: 'body',
  fonts: {
    heading: defaultFont,
    body: defaultFont,
  },
  themes: {
    ...themes,
    dark: {
      ...themes.dark,
      shadowColor: themes.dark.gray5,
    },
    light: {
      ...themes.light,
      shadowColor: themes.light.color10,
    },
  },
  tokens,
  media: {
    ...media,
    hoverNone: { hover: 'none' },
    pointerCoarse: { pointer: 'coarse' },
    isHandset: { minWidth: 320, maxWidth: 480 },
    isTablet: { minWidth: 481, maxWidth: 768 },
    isHandsetOrTablet: { maxWidth: 768 },
    isSmallDesktop: { minWidth: 769, maxWidth: 1024 },
    isNormalDesktop: { minWidth: 1025, maxWidth: 1440 },
    isWideDesktop: { minWidth: 1441 },
    isDesktop: { minWidth: 769 },
  },
})

export type AppConfig = typeof config

declare module 'tamagui' {
  interface TamaguiCustomConfig extends AppConfig {}
}

export default config
