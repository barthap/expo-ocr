import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';
const NativeView = requireNativeViewManager('ExpoOcr');
export default function ExpoOcrView(props) {
    return React.createElement(NativeView, { name: props.name });
}
//# sourceMappingURL=ExpoOcrView.js.map