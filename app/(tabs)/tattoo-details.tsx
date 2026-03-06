import { tattoos } from '@/data/tattoos';
import { FontAwesome } from '@expo/vector-icons';
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
    <View style={{ flex: 1, backgroundColor: '#000', paddingHorizontal: 10, paddingTop: 40 }}>
      
      {/* FIXED HEADER */}
      <Image
        source={require('@/assets/images/Inkwisyo.png')}
        resizeMode="contain"
        style={{
          width: '90%',
          height: 45,
          alignSelf: 'center',
          marginBottom: 20,
          marginTop: 30,
        }}
      />

      {/* SCROLL AREA */}
      <View style={{ flex: 0.88 }}>
        <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>

          {/* Tattoo Image */}
          <Image
            source={tattoo.image}
            style={{
              width: '100%',
              height: screenWidth,
              borderRadius: 15,
              marginBottom: 20,
            }}
            resizeMode="cover"
          />

          {/* Title + Link */}
          <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginBottom: 10 }}>
            <Text
              style={{
                fontFamily: 'Denver-Serial-Bold',
                color: '#E1FF00',
                fontSize: 32,
                flex: 1,
              }}
            >
              {tattoo.title}
            </Text>

            <TouchableOpacity
              onPress={() =>
                Linking.openURL(
                  'https://lakbaypinas.com/buscalan-kalinga-village-tattoo-apo-whang-od/'
                )
              }
              style={{ marginLeft: 10, marginTop: 10 }}
            >
              <FontAwesome name="link" size={24} color="#fff" />
            </TouchableOpacity>
          </View>

          {/* Meaning */}
          <Text style={{ color: '#ffffffda', fontSize: 14, fontWeight: '600', marginBottom: 5 }}>
            {tattoo.meaning}
          </Text>

          {/* Divider */}
          <View style={{ height: 1, backgroundColor: '#fff', marginVertical: 10, opacity: 0.3 }} />

          {/* Description */}
          <Text style={{ color: '#fff', fontSize: 14, lineHeight: 22, textAlign: 'justify', marginBottom: 30 }}>
            {tattoo.description}
          </Text>

        </ScrollView>
      </View>
    </View>
  );
}