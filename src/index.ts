import { NitroModules } from 'react-native-nitro-modules';

import type {
  BatteryState,
  DeviceType,
  NavigationMode,
  PowerState,
  ReactNativeNitroDeviceInfo,
} from './ReactNativeNitroDeviceInfo.nitro';

export const DeviceInfoModule =
  NitroModules.createHybridObject<ReactNativeNitroDeviceInfo>(
    'ReactNativeNitroDeviceInfo'
  );

// Re-export types for convenience
export type {
  ReactNativeNitroDeviceInfo,
  PowerState,
  DeviceType,
  BatteryState,
  NavigationMode,
};

// Re-export React hooks for runtime monitoring
export {
  useBatteryLevel,
  useBatteryLevelIsLow,
  usePowerState,
  useIsHeadphonesConnected,
  useIsWiredHeadphonesConnected,
  useIsBluetoothHeadphonesConnected,
  useBrightness,
} from './hooks';
