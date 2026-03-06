
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import LoginPage from './LoginPage';
import MainPage from './MainPage';

export default function TestFeatures() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <View style={styles.container}>
      {!loggedIn ? (
        <LoginPage onLogin={() => setLoggedIn(true)} />
      ) : (
        <MainPage />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
});
