import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import React from 'react';
import { Dimensions, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function LoginPage() {
  const router = useRouter();
  const screenWidth = Dimensions.get('window').width;

  const handleLogin = async () => {
    // Set fixed token
    await AsyncStorage.setItem('token', 'my-fixed-token-123');

    // Navigate to tabs
    router.replace('/(tabs)');
  };

  const handleCreateAccount = () => router.push('/registration');

  return (
    <View style={{ flex: 1, alignItems: 'center', padding: 20, backgroundColor: '#121212' }}>
      {/* Top Image */}
      <Image
        source={require('../assets/images/login-pic.png')}
        style={{
          marginTop: 60,
          width: screenWidth * 0.75,
          height: screenWidth * 0.75,
          aspectRatio: 1,
          borderRadius: 30,
          marginBottom: 20,
        }}
        resizeMode="cover"
      />

      <Text style={{ fontSize: 32, marginBottom: 20, color: '#fff', fontFamily: 'Denver-Serial-Bold' }}>
        WELCOME TO INKWISYO
      </Text>

      <TextInput
        placeholder="Nickname/Email"
        placeholderTextColor="#FFFFFF"
        style={{
          color: '#FFFFFF',
          borderWidth: 1,
          borderColor: '#ccc',
          width: '100%',
          padding: 12,
          marginBottom: 15,
          borderRadius: 25,
          backgroundColor: 'rgba(244, 244, 244, 0.27)',
        }}
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
        placeholderTextColor="#FFFFFF"
        style={{
          color: '#FFFFFF',
          borderWidth: 1,
          borderColor: '#ccc',
          width: '100%',
          padding: 12,
          marginBottom: 25,
          borderRadius: 25,
          backgroundColor: 'rgba(244, 244, 244, 0.27)',
        }}
      />

      <TouchableOpacity
        onPress={handleLogin}
        style={{
          backgroundColor: '#436270',
          paddingVertical: 15,
          paddingHorizontal: 40,
          borderRadius: 25,
          marginBottom: 5,
          width: '100%',
          alignItems: 'center',
        }}
      >
        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleCreateAccount} style={{ paddingVertical: 10, width: '100%', alignItems: 'center' }}>
        <Text style={{ color: '#fff', fontWeight: '500', textAlign: 'center' }}>
          New on Inkwisyo? <Text style={{ fontWeight: 'bold', color: '#8C8ECF', textDecorationLine: 'underline' }}>Create an Account</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}