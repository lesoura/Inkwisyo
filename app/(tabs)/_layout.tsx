// app/(tabs)/_layout.tsx
import { Ionicons } from '@expo/vector-icons';
import { Tabs, usePathname, useRouter } from 'expo-router';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';

export default function TabLayout() {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <View style={{ flex: 1 }}>
      <Tabs screenOptions={{ headerShown: false, tabBarStyle: { display: 'none' } }}>
        <Tabs.Screen name="index" />
        <Tabs.Screen name="explore" />
        <Tabs.Screen name="settings" />
      </Tabs>

      <View
        style={{
          position: 'absolute',
          bottom: 20,
          left: 100,
          right: 100,
          height: 50,
          backgroundColor: '#212121',
          borderRadius: 40,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 20,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.15,
          shadowRadius: 20,
          elevation: 10,
        }}
      >
        <TouchableOpacity onPress={() => router.push('/(tabs)')}>
          <Ionicons name="home-outline" size={28} color={isActive('/(tabs)') ? '#fff' : '#626262'} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/(tabs)/explore')}>
          <Ionicons
            name="compass-outline"
            size={28}
            color={isActive('/(tabs)/explore') ? '#fff' : '#626262'}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/(tabs)/settings')}>
          <Ionicons
            name="settings-outline"
            size={28}
            color={isActive('/(tabs)/settings') ? '#fff' : '#626262'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}