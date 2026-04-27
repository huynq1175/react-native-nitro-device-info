#include <jni.h>
#include "abeman_reactnativenitrodeviceinfoOnLoad.hpp"

#include <fbjni/fbjni.h>


JNIEXPORT jint JNICALL JNI_OnLoad(JavaVM* vm, void*) {
  return facebook::jni::initialize(vm, []() {
    margelo::nitro::abeman_reactnativenitrodeviceinfo::registerAllNatives();
  });
}