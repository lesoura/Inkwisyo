import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFonts } from 'expo-font';
import * as NavigationBar from 'expo-navigation-bar';
import { Stack, useRouter } from 'expo-router';
import * as ScreenOrientation from 'expo-screen-orientation';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useRef, useState } from 'react';
import { Animated, AppState, AppStateStatus, Image, TouchableWithoutFeedback, View } from 'react-native';
import 'react-native-reanimated';

export default function RootLayout() {
  const router = useRouter();
  const [fontsLoaded] = useFonts({
    'Denver-Serial-Bold': require('../assets/images/denver-serial-bold.ttf'),
  });

  const [showSplash, setShowSplash] = useState(true);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  // --- Lock timer ---
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const appState = useRef<AppStateStatus>(AppState.currentState);

  const startLockTimer = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(async () => {
      // optional: clear token on lock
      await AsyncStorage.removeItem('token');
      router.replace('/lock' as any);
    }, 3 * 60 * 1000); // 3 minutes
  };

  const resetLockTimer = () => startLockTimer();

  useEffect(() => {
    startLockTimer();

    const subscription = AppState.addEventListener('change', (nextAppState) => {
      if (appState.current.match(/inactive|background/) && nextAppState === 'active') {
        startLockTimer();
      }
      appState.current = nextAppState;
    });

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      subscription.remove();
    };
  }, []);

  // --- Splash & fonts ---
  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
  }, []);

  useEffect(() => {
    NavigationBar.setBackgroundColorAsync('#000');
    NavigationBar.setButtonStyleAsync('light');

    const timer = setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }).start(() => setShowSplash(false));
    }, 4000);

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

  // --- Wrap entire app with TouchableWithoutFeedback to detect taps and reset timer ---
  return (
    <TouchableWithoutFeedback onPress={resetLockTimer}>
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
    </TouchableWithoutFeedback>
  );
}