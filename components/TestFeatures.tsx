import React, { useState } from 'react';
import { ActivityIndicator, Animated, Image, Modal, Pressable, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';

const BOUNDED_HEIGHT = 200;

export default function TestFeatures() {
  const [modalVisible, setModalVisible] = useState(false);
  const [slideAnim] = useState(new Animated.Value(300));
  const [showStatusBar, setShowStatusBar] = useState(true);
  const [loading, setLoading] = useState(false);

  const openModal = () => {
    setModalVisible(true);
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const closeModal = () => {
    Animated.timing(slideAnim, {
      toValue: 300,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setModalVisible(false));
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden={!showStatusBar} />
      <Text style={styles.header}>ScrollView with Bounded Height</Text>
      <ScrollView style={{ height: BOUNDED_HEIGHT, borderWidth: 1, borderColor: '#ccc', marginBottom: 16 }}>
        {[...Array(20)].map((_, i) => (
          <Text key={i} style={styles.scrollItem}>Item {i + 1}</Text>
        ))}
      </ScrollView>

      <Text style={styles.header}>Custom Pressable Buttons</Text>
      <View style={styles.row}>
        <Pressable style={styles.button} onPress={() => setLoading(l => !l)}>
          <Image source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} style={styles.icon} />
          <Text style={styles.buttonText}>Toggle Loading</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={openModal}>
          <Text style={styles.buttonText}>Open Modal</Text>
        </Pressable>
      </View>

      <Text style={styles.header}>StatusBar & ActivityIndicator</Text>
      <View style={styles.row}>
        <Pressable style={styles.button} onPress={() => setShowStatusBar(s => !s)}>
          <Text style={styles.buttonText}>{showStatusBar ? 'Hide' : 'Show'} StatusBar</Text>
        </Pressable>
        {loading && <ActivityIndicator size="large" color="#007AFF" style={{ marginLeft: 16 }} />}
      </View>

      <Modal
        visible={modalVisible}
        transparent
        animationType="none"
        onRequestClose={closeModal}
      >
        <Pressable style={styles.modalBackdrop} onPress={closeModal}>
          <Animated.View style={[styles.modalContent, { transform: [{ translateY: slideAnim }] }]}
            onStartShouldSetResponder={() => true}
          >
            <Text style={styles.modalText}>This is a toggleable Modal!</Text>
            <Pressable style={styles.closeButton} onPress={closeModal}>
              <Text style={styles.closeButtonText}>Close</Text>
            </Pressable>
          </Animated.View>
        </Pressable>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: '#fff' },
  header: { fontSize: 18, fontWeight: 'bold', marginVertical: 8 },
  scrollItem: { padding: 8, borderBottomWidth: 1, borderColor: '#eee' },
  row: { flexDirection: 'row', alignItems: 'center', marginVertical: 8 },
  button: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#eee', padding: 10, borderRadius: 8, marginRight: 12 },
  buttonText: { marginLeft: 8, fontSize: 16 },
  icon: { width: 24, height: 24 },
  modalBackdrop: { flex: 1, backgroundColor: 'rgba(0,0,0,0.3)', justifyContent: 'flex-end' },
  modalContent: { backgroundColor: '#fff', padding: 24, borderTopLeftRadius: 16, borderTopRightRadius: 16 },
  modalText: { fontSize: 16, marginBottom: 16 },
  closeButton: { alignSelf: 'flex-end', backgroundColor: '#007AFF', padding: 10, borderRadius: 8 },
  closeButtonText: { color: '#fff', fontWeight: 'bold' },
});
