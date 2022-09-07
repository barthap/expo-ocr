import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoOcr.web.ts
// and on native platforms to ExpoOcr.ts
import ExpoOcr from './ExpoOcrModule';
import ExpoOcrView from './ExpoOcrView';
import { ChangeEventPayload, ExpoOcrViewProps } from './ExpoOcr.types';

// Get the native constant value.
export const PI = ExpoOcr.PI;

export function hello(): string {
  return ExpoOcr.hello();
}

export async function setValueAsync(value: string) {
  return await ExpoOcr.setValueAsync(value);
}

// For now the events are not going through the JSI, so we have to use its bridge equivalent.
// This will be fixed in the stable release and built into the module object.
// Note: On web, NativeModulesProxy.ExpoOcr is undefined, so we fall back to the directly imported implementation
const emitter = new EventEmitter(NativeModulesProxy.ExpoOcr ?? ExpoOcr);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ExpoOcrView, ExpoOcrViewProps, ChangeEventPayload };
