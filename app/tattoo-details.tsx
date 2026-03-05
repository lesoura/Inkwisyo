import { tattoos } from '@/data/tattoos';
import { FontAwesome } from '@expo/vector-icons'; // make sure expo/vector-icons is installed
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Dimensions, Image, Linking, ScrollView, Text, TouchableOpacity, View } from 'react-native';

export default function TattooDetailsPage() {
  const router = useRouter();
  const params = useLocalSearchParams<{ id: string }>();
  const tattoo = tattoos.find((t) => t.id === Number(params.id));
  const screenWidth = Dimensions.get('window').width;

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
    <View style={{ flex: 1, backgroundColor: '#000', padding: 10 }}>
      {/* App Icon */}
      <Image
        source={require('@/assets/images/Inkwisyo.png')}
        resizeMode="contain"
        style={{
          width: '90%',
          height: 45,
          alignSelf: 'center',
          marginBottom: 20,
          marginTop: 60,
        }}
      />

      {/* Tattoo Image */}
      <Image
        source={tattoo.image}
        style={{
          width: '100%',
          height: screenWidth, // 1:1
          borderRadius: 15,
          marginBottom: 20,
        }}
        resizeMode="cover"
      />

      {/* Title row with chain/link icon */}
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <Text style={{ color: '#E1FF00', fontSize: 30, fontWeight: '700' }}>
                {tattoo.title}
            </Text>
            <TouchableOpacity
                onPress={() => Linking.openURL('https://lakbaypinas.com/buscalan-kalinga-village-tattoo-apo-whang-od/')}
            >
                <FontAwesome name="link" size={24} color="#fff" />
            </TouchableOpacity>
        </View>
      <Text style={{ color: '#ffffffda', fontSize: 14, fontWeight: '600', marginBottom: 10 }}>
        {tattoo.meaning}
      </Text>

      {/* Horizontal line */}
      <View style={{ height: 1, backgroundColor: '#fff', marginVertical: 10, opacity: 0.3 }} />

      {/* Description with fixed height, scrollable, and gray background */}
        <View
        style={{
            height: 140,
            marginBottom: 20,
            backgroundColor: '#333', // gray background
            borderRadius: 10,
            padding: 10,
        }}
        >
        <ScrollView showsVerticalScrollIndicator={true} nestedScrollEnabled={true}>
            <Text style={{ color: '#fff', fontSize: 14, lineHeight: 22, textAlign: 'justify' }}>
            {tattoo.description}
            </Text>
        </ScrollView>
        </View>

      {/* Back Button */}
      <TouchableOpacity
        onPress={() => router.back()}
        style={{
          width: '90%',
          alignSelf: 'center',
          paddingVertical: 12,
          borderWidth: 1,
          borderColor: '#fff',
          borderRadius: 25,
          marginBottom: 30,
        }}
      >
        <Text style={{ color: '#E1FF00', fontSize: 16, textAlign: 'center' }}>Back</Text>
      </TouchableOpacity>
    </View>
  );
}