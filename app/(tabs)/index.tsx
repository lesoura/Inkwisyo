import { tattoos } from '@/data/tattoos';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { Dimensions, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();
  const [category, setCategory] = useState('All');
  const { height: SCREEN_HEIGHT } = Dimensions.get('window');
  const categories = ['All', 'Animals', 'Directional & Journey'];
  
  // ------------------ CHECK TOKEN ------------------
  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token'); // or 'userToken' / whatever key you store
      if (!token) {
        router.replace('/login'); // redirect to login if no token
      }
    };
    checkToken();
  }, []);

  // Filtered tattoos based on category
  const filtered =
    category === 'All'
      ? tattoos
      : category === 'Directional & Journey'
      ? tattoos.filter(
          (item) => item.category === 'Directional' || item.category === 'Journey'
        )
      : tattoos.filter((item) => item.category === category);

  // Split into two columns for masonry
  const leftColumn: typeof tattoos = [];
  const rightColumn: typeof tattoos = [];
  let leftHeight = 0;
  let rightHeight = 0;

  filtered.forEach((item) => {
    if (leftHeight <= rightHeight) {
      leftColumn.push(item);
      leftHeight += item.height;
    } else {
      rightColumn.push(item);
      rightHeight += item.height;
    }
  });

  // Function to navigate to details page
  const openDetails = (id: number) => {
    router.push(`/tattoo-details?id=${id}`);
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#000', paddingTop: 60 }}>
      {/* App Icon */}
      <Image
        source={require('@/assets/images/Inkwisyo.png')}
        resizeMode="contain"
        style={{
          width: '90%',
          height: 45,
          alignSelf: 'center',
          marginBottom: 40,
          marginTop: 20,
        }}
      />

      {/* Categories */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginBottom: 20,
          paddingHorizontal: 20,
        }}
      >
        {categories.map((item) => {
          const isActive = category === item;
          return (
            <TouchableOpacity
              key={item}
              onPress={() => setCategory(item)}
              style={{
                backgroundColor: isActive ? '#fff' : '#313131',
                paddingVertical: 8,
                paddingHorizontal: 16,
                borderRadius: 10,
              }}
            >
              <Text
                style={{
                  color: isActive ? '#000' : '#fff',
                  fontSize: 14,
                  fontWeight: '600',
                }}
              >
                {item}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Image Gallery (90% of screen height) */}
      <View style={{ height: SCREEN_HEIGHT * 0.67 }}>
        <ScrollView contentContainerStyle={{ paddingHorizontal: 20 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ flex: 1, marginRight: 10 }}>
              {leftColumn.map((item) => (
                <TouchableOpacity key={item.id} onPress={() => openDetails(item.id)}>
                  <Image
                    source={item.image}
                    style={{ width: '100%', height: item.height, borderRadius: 10, marginBottom: 10 }}
                  />
                </TouchableOpacity>
              ))}
            </View>

            <View style={{ flex: 1, marginLeft: 10 }}>
              {rightColumn.map((item) => (
                <TouchableOpacity key={item.id} onPress={() => openDetails(item.id)}>
                  <Image
                    source={item.image}
                    style={{ width: '100%', height: item.height, borderRadius: 10, marginBottom: 10 }}
                  />
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}