import * as NavigationBar from 'expo-navigation-bar';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { View } from 'react-native';
import 'react-native-reanimated';

export default function RootLayout() {
  useEffect(() => {
    NavigationBar.setBackgroundColorAsync('#000'); // dark background
    NavigationBar.setButtonStyleAsync('light');    // white icons
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: '#121212' }}>
      <Stack>
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="registration" options={{ headerShown: false }} />
        <Stack.Screen name="aboutus" options={{ headerShown: false }} />
        <Stack.Screen name="tattoo-details" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
      </Stack>
      <StatusBar style="light" />
    </View>
  );
}