import { modernTattoos } from '@/data/moderntattoos';
import { FontAwesome } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Dimensions, Image, Linking, ScrollView, Text, TouchableOpacity, View } from 'react-native';

export default function ModernTattooDetails() {
  const router = useRouter();
  const params = useLocalSearchParams<{ id: string }>();
  const tattoo = modernTattoos.find((t) => t.id === Number(params.id));
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  if (!tattoo) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' }}>
        <Text style={{ color: '#fff' }}>Tattoo not found</Text>
        <TouchableOpacity onPress={() => router.back()} style={{ marginTop: 20 }}>
          <Text style={{ color: '#ff5a5f' }}>Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#000', alignItems: 'center', padding: 15 }}>
      <View style={{ height: screenHeight * 0.90, width: '100%' }}>
        <ScrollView>
          {/* App Icon */}
          <Image
            source={require('@/assets/images/Inkwisyo.png')}
            resizeMode="contain"
            style={{
              width: '90%',
              height: 45,
              alignSelf: 'center',
              marginTop: 60,
              marginBottom: 20,
            }}
          />

          <View style={{
            height: 5,
            width: '100%',
            backgroundColor: '#fff',
            opacity: 0.3,
            marginBottom: 20,
          }} />

          {/* Title and Description */}
          <View style={{ marginBottom: 20, flexDirection: 'row', alignItems: 'flex-start' }}>
            <Text style={{ color: '#E1FF00', fontSize: 30, fontWeight: '700', flex: 1, flexWrap: 'wrap' }}>
                {tattoo.title}
            </Text>
            <TouchableOpacity
                onPress={() => Linking.openURL('https://tattoodesign.com/modern-tattoos')}
                style={{ marginLeft: 10 }}
            >
                <FontAwesome name="link" size={24} color="#fff" />
            </TouchableOpacity>
            </View>
            <Text
            style={{
                color: '#ffffffda',
                fontSize: 14,
                fontWeight: '600',
                textAlign: 'justify',
                marginTop: -10,
            }}
            >
            {tattoo.description}
            </Text>

          {/* Tattoo Image fully visible */}
          <Image
            source={tattoo.image2}
            style={{
              width: '100%',
              height: screenWidth,
              borderRadius: 15,
              marginBottom: 20,
              marginTop: 20,
            }}
            resizeMode="contain"
          />
        </ScrollView>
      </View>
    </View>
  );
}