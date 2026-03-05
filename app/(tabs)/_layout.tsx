// app/(tabs)/_layout.tsx
import { Ionicons } from '@expo/vector-icons';
import { Tabs, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';

export default function TabLayout() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'home' | 'explore' | 'settings'>('home');

  const paths = {
  home: '/(tabs)',
  explore: '/(tabs)/explore',
  settings: '/(tabs)/settings',
} as const;

const handlePress = (tab: keyof typeof paths) => {
  setActiveTab(tab);
  router.push(paths[tab]);
};

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
        <TouchableOpacity onPress={() => handlePress('home')}>
          <Ionicons
            name="home-outline"
            size={28}
            color={activeTab === 'home' ? '#fff' : '#626262'}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handlePress('explore')}>
          <Ionicons
            name="compass-outline"
            size={28}
            color={activeTab === 'explore' ? '#fff' : '#626262'}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handlePress('settings')}>
          <Ionicons
            name="settings-outline"
            size={28}
            color={activeTab === 'settings' ? '#fff' : '#626262'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}