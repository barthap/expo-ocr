import { NativeModulesProxy, EventEmitter } from 'expo-modules-core';
// Import the native module. On web, it will be resolved to ExpoOcr.web.ts
// and on native platforms to ExpoOcr.ts
import ExpoOcr from './ExpoOcrModule';
import ExpoOcrView from './ExpoOcrView';
// Get the native constant value.
export const PI = ExpoOcr.PI;
export function hello() {
    return ExpoOcr.hello();
}
export async function setValueAsync(value) {
    return await ExpoOcr.setValueAsync(value);
}
// For now the events are not going through the JSI, so we have to use its bridge equivalent.
// This will be fixed in the stable release and built into the module object.
// Note: On web, NativeModulesProxy.ExpoOcr is undefined, so we fall back to the directly imported implementation
const emitter = new EventEmitter(NativeModulesProxy.ExpoOcr ?? ExpoOcr);
export function addChangeListener(listener) {
    return emitter.addListener('onChange', listener);
}
export { ExpoOcrView };
//# sourceMappingURL=ExpoOcr.js.map