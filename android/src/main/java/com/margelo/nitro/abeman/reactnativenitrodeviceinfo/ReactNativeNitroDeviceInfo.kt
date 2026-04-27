package com.margelo.nitro.abeman.reactnativenitrodeviceinfo
  
import com.facebook.proguard.annotations.DoNotStrip

@DoNotStrip
class ReactNativeNitroDeviceInfo : HybridReactNativeNitroDeviceInfoSpec() {
  override fun multiply(a: Double, b: Double): Double {
    return a * b
  }
}
