import { createAnimations } from '@tamagui/animations-react-native'
import { createInterFont } from '@tamagui/font-inter'
import { createMedia } from '@tamagui/react-native-media-driver'
import { shorthands } from '@tamagui/shorthands'
import { themes, tokens } from '@tamagui/themes'
import { createTamagui } from 'tamagui'

const animations = createAnimations({
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

const media = {
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
}

media.isHandset = media.xs || media.sm
media.isHandsetOrTablet = media.md
media.isTablet = media.md || media.lg
media.isTabletOrDesktop = media.lg
media.isDesktop = media.xl
media.isLargerDesktop = media.xxl

const interFont = createInterFont()

const defaultFont = {
  ...interFont,
  letterSpacing: {
    0.25: 0.25,
    0.5: 0.5,
    0.75: 0.75,
    1: 1,
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
    100: { normal: 'InterExtraLight' },
    200: { normal: 'InterExtraLight' },
    300: { normal: 'InterLight' },
    400: { normal: 'InterRegular' },
    500: { normal: 'InterMedium' },
    600: { normal: 'InterSemiBold' },
    700: { normal: 'InterBold' },
    800: { normal: 'InterExtraBold' },
    900: { normal: 'InterBlack' },
  },
}

const config = createTamagui({
  animations,
  defaultTheme: 'light',
  shouldAddPrefersColorThemes: false,
  themeClassNameOnRoot: false,
  shorthands,
  fonts: {
    heading: defaultFont,
    body: defaultFont,
  },
  themes,
  tokens,
  media: createMedia(media),
})

export type AppConfig = typeof config

declare module 'tamagui' {
  interface TamaguiCustomConfig extends AppConfig {}
}

export default config
