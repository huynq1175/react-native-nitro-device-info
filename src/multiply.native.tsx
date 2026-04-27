import { NitroModules } from 'react-native-nitro-modules';
import type { ReactNativeNitroDeviceInfo } from './ReactNativeNitroDeviceInfo.nitro';

const ReactNativeNitroDeviceInfoHybridObject =
  NitroModules.createHybridObject<ReactNativeNitroDeviceInfo>('ReactNativeNitroDeviceInfo');

export function multiply(a: number, b: number): number {
  return ReactNativeNitroDeviceInfoHybridObject.multiply(a, b);
}
