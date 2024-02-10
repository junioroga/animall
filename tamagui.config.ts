import { createFont, createTamagui } from 'tamagui'
import { createAnimations } from '@tamagui/animations-moti'
import { media } from '@tamagui/config'
import { createMedia } from '@tamagui/react-native-media-driver'
import { shorthands } from '@tamagui/shorthands'
import { themes, tokens } from '@tamagui/themes'

const animations = createAnimations({
  fast: {
    type: 'spring',
    damping: 20,
    mass: 1.2,
    stiffness: 250,
  },
  medium: {
    type: 'spring',
    damping: 10,
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

const customMedia = createMedia({
  ...media,
  hoverNone: { hover: 'none' },
  pointerCoarse: { pointer: 'coarse' },
  isHandset: { maxWidth: media.sm.maxWidth },
  isTablet: { minWidth: media.sm.maxWidth, maxWidth: media.md.maxWidth },
  isHandsetOrTablet: { maxWidth: media.md.maxWidth },
  isDesktop: { minWidth: media.md.maxWidth, maxWidth: media.xl.maxWidth },
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
    1: 10,
    1.5: 11,
    2: 12,
    3: 13,
    4: 14,
    true: 14,
    5: 16,
    6: 18,
    7: 20,
    8: 23,
    9: 30,
    10: 46,
    11: 55,
    12: 62,
    13: 72,
    14: 92,
    15: 114,
    16: 134,
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
      shadowColor: themes.light.shadowColor,
    },
  },
  tokens,
  media: customMedia,
})

export type AppConfig = typeof config

declare module 'tamagui' {
  interface TamaguiCustomConfig extends AppConfig {}
}

export default config
