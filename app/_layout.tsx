import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFonts } from 'expo-font';
import * as NavigationBar from 'expo-navigation-bar';
import { Stack } from 'expo-router';
import * as ScreenOrientation from 'expo-screen-orientation';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useRef, useState } from 'react';
import { Animated, Image, View } from 'react-native';
import 'react-native-reanimated';

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'Denver-Serial-Bold': require('../assets/images/denver-serial-bold.ttf'),
  });

  const [showSplash, setShowSplash] = useState(true);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Lock to portrait
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
  }, []);

  // inside RootLayout
  useEffect(() => {
    const clearToken = async () => {
      await AsyncStorage.removeItem('token');
    };
    clearToken();
  }, []);

  useEffect(() => {
    NavigationBar.setBackgroundColorAsync('#000');
    NavigationBar.setButtonStyleAsync('light');

    const timer = setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 800, // fade duration
        useNativeDriver: true,
      }).start(() => setShowSplash(false));
    }, 4000); // splash duration

    return () => clearTimeout(timer);
  }, []);

  if (!fontsLoaded) return null;

  if (showSplash) {
    return (
      <Animated.View
        style={{
          flex: 1,
          backgroundColor: '#000',
          justifyContent: 'center',
          alignItems: 'center',
          opacity: fadeAnim,
        }}
      >
        <Image
          source={require('../assets/images/Inkwisyo-splashV3.gif')}
          style={{ height: '100%' }}
          resizeMode="contain"
        />
      </Animated.View>
    );
  }

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