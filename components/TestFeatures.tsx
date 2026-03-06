
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function TestFeatures() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 18, textAlign: 'center', marginTop: 40 }}>
        Please use the app entry point (App.tsx) for navigation.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
});
