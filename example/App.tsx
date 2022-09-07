import { StyleSheet, Text, View } from 'react-native';

import * as ExpoOcr from 'expo-ocr';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ExpoOcr.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
