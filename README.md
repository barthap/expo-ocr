# expo-ocr

> **Work in progress**

OCR text recognition for React Native, basically the same as [`react-native-mlkit-ocr`](https://github.com/agoldis/react-native-mlkit-ocr), but with a few key differences:

- On iOS it is possible to use the [built-in Vision framework](https://developer.apple.com/documentation/vision) instead of Google MLKit
- Uses [Expo Modules architecture](https://docs.expo.dev/modules/overview/) (it's JSI by default)
- A few minor tweaks, e.g. `detectFromUri()` and `detectFromFile()` are joined together - proper implementation is detected automatically
