import { useFonts } from 'expo-font';
import * as NavigationBar from 'expo-navigation-bar';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { View } from 'react-native';
import 'react-native-reanimated';

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'Denver-Serial-Bold': require('../assets/images/denver-serial-bold.ttf'),
  });

  useEffect(() => {
    NavigationBar.setBackgroundColorAsync('#000');
    NavigationBar.setButtonStyleAsync('light');
  }, []);

  if (!fontsLoaded) return null; // wait until font is loaded

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