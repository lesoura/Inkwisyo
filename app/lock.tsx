import { useFocusEffect } from '@react-navigation/native';
import { BackHandler, StyleSheet, Text, View } from 'react-native';

export default function LockScreen() {
  // Disable Android hardware back button
  useFocusEffect(() => {
    const subscription = BackHandler.addEventListener('hardwareBackPress', () => true);
    return () => subscription.remove(); // modern way to clean up
  });

  // iOS gestures are usually disabled by default in Expo Router

  return (
    <View style={styles.container}>
      <Text style={styles.text}>App Locked</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },
});