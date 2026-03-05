// app/login.tsx
import { useRouter } from 'expo-router';
import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = () => {
    // just navigate to tabs, no token stored
    router.replace('/(tabs)');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Login</Text>

      <TextInput
        placeholder="Username"
        style={{ borderWidth: 1, width: '100%', padding: 10, marginBottom: 10, borderRadius: 5 }}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        style={{ borderWidth: 1, width: '100%', padding: 10, marginBottom: 20, borderRadius: 5 }}
      />

      <TouchableOpacity
        onPress={handleLogin}
        style={{ backgroundColor: '#212121', padding: 15, borderRadius: 10 }}
      >
        <Text style={{ color: '#fff', fontWeight: 'bold' }}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}