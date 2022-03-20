import * as React from 'react';

import { Alert, StyleSheet, View } from 'react-native';
import { RNButton } from 'rn-ui-toolkit';

export default function App() {
  return (
    <View style={styles.container}>
      <RNButton
        title="Press Me"
        backgroundStyle={{backgroundColor :"red"}}
        onPress={() => {
          Alert.alert('fddf');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
