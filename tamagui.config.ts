import { createFont, createTamagui } from 'tamagui'
import { createAnimations } from '@tamagui/animations-moti'
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

const media = createMedia({
  xs: { maxWidth: 660 },
  sm: { maxWidth: 800 },
  md: { maxWidth: 1020 },
  lg: { maxWidth: 1280 },
  xl: { maxWidth: 1420 },
  xxl: { maxWidth: 1600 },
  gtXs: { minWidth: 660 + 1 },
  gtSm: { minWidth: 800 + 1 },
  gtMd: { minWidth: 1020 + 1 },
  gtLg: { minWidth: 1280 + 1 },
  short: { maxHeight: 820 },
  tall: { minHeight: 820 },
  hoverNone: { hover: 'none' },
  pointerCoarse: { pointer: 'coarse' },
  isHandset: {},
  isHandsetOrTablet: {},
  isTablet: {},
  isTabletOrDesktop: {},
  isDesktop: {},
  isLargerDesktop: {},
})

media.isHandset = media.xs || media.sm
media.isHandsetOrTablet = media.md
media.isTablet = media.md || media.lg
media.isTabletOrDesktop = media.lg
media.isDesktop = media.xl
media.isLargerDesktop = media.xxl

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
  defaultTheme: 'light',
  shouldAddPrefersColorThemes: false,
  themeClassNameOnRoot: false,
  shorthands,
  onlyAllowShorthands: true,
  fonts: {
    heading: defaultFont,
    body: defaultFont,
  },
  themes,
  tokens,
  media,
})

export type AppConfig = typeof config

declare module 'tamagui' {
  interface TamaguiCustomConfig extends AppConfig {}
}

export default config
