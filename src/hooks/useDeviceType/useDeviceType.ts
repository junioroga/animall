import { Platform } from 'react-native'
import { useMedia } from 'tamagui'

enum DeviceType {
  HANDSET = 'handset',
  TABLET = 'tablet',
  DESKTOP = 'desktop',
}

type DeviceTypeReturn = {
  deviceTypeName: DeviceType
  isHandset: boolean
  isTablet: boolean
  isDesktop: boolean
}

export const useDeviceType = (): DeviceTypeReturn => {
  const { isHandset, isHandsetOrTablet } = useMedia()

  const deviceTypeName = isHandset
    ? DeviceType.HANDSET
    : Platform.select({
        native: DeviceType.TABLET,
        default: isHandsetOrTablet ? DeviceType.TABLET : DeviceType.DESKTOP,
      })

  return {
    deviceTypeName,
    isHandset: deviceTypeName === DeviceType.HANDSET,
    isTablet: deviceTypeName === DeviceType.TABLET,
    isDesktop: deviceTypeName === DeviceType.DESKTOP,
  }
}
