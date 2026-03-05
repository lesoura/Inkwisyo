// app/login.tsx
import { useRouter } from 'expo-router';
import React from 'react';
import { Dimensions, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function LoginPage() {
  const router = useRouter();
  const screenWidth = Dimensions.get('window').width;

  const handleLogin = () => router.replace('/(tabs)');
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
          marginBottom: 30,
        }}
        resizeMode="cover"
      />

      {/* Welcome Text */}
      <Text style={{ fontSize: 30, fontWeight: 'bold', marginBottom: 30, color: '#fff' }}>
        WELCOME TO INKWISYO
      </Text>

      {/* Username */}
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
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 2,
        }}
      />

      {/* Password */}
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
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 2,
        }}
      />

      {/* Sign In Button */}
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

      {/* Create Account */}
      <TouchableOpacity onPress={handleCreateAccount} style={{ paddingVertical: 10, marginBottom: 0, width: '100%', alignItems: 'center' }}>
        <Text style={{ color: '#fff', fontWeight: '500', textAlign: 'center' }}>
          New on Inkwisyo? <Text style={{ fontWeight: 'bold', color: '#8C8ECF', textDecorationLine: 'underline' }}>Create an Account</Text>
        </Text>
      </TouchableOpacity>

      {/* Separator */}
      <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 0, width: '100%' }}>
        <View style={{ flex: 1, height: 1, backgroundColor: '#ccc' }} />
        <Text style={{ marginHorizontal: 10, color: '#999' }}>or</Text>
        <View style={{ flex: 1, height: 1, backgroundColor: '#ccc' }} />
      </View>

      {/* Social Login Images */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '45%', marginTop: 15 }}>
        {/* Gmail */}
        <TouchableOpacity>
          <Image
            source={require('../assets/images/Gmail.png')}
            style={{ width: 60, height: 60, borderRadius: 30 }}
            resizeMode="contain"
          />
        </TouchableOpacity>

        {/* Facebook */}
        <TouchableOpacity>
          <Image
            source={require('../assets/images/Facebook.png')}
            style={{ width: 60, height: 60, borderRadius: 30 }}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}