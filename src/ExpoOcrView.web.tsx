import * as React from 'react';

import { ExpoOcrViewProps } from './ExpoOcr.types';

function ExpoOcrWebView(props: ExpoOcrViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}

export default ExpoOcrWebView;
