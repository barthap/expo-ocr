import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoOcrViewProps } from './ExpoOcr.types';

const NativeView: React.ComponentType<ExpoOcrViewProps> =
  requireNativeViewManager('ExpoOcr');

export default function ExpoOcrView(props: ExpoOcrViewProps) {
  return <NativeView name={props.name} />;
}
