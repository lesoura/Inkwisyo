import { modernTattoos } from '@/data/moderntattoos';
import { useRouter } from 'expo-router';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ModernTattoo() {
  const router = useRouter();

  const openDetails = (id: number) => {
    router.push(`/moderntattoodetails?id=${id}`);
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require('@/assets/images/Inkwisyo.png')}
        resizeMode="contain"
        style={styles.logo}
      />
      
      {/* Label above line */}
      <Text
        style={{
            fontFamily: 'Denver-Serial-Bold',
            fontSize: 32,
            color: '#E1FF00', // optional, keep your color
            marginBottom: 10,
        }}
        >
        Modern Tattoo Styles
      </Text>

      <View style={styles.line} />

      <ScrollView style={styles.scroll}>
        {modernTattoos.map((tattoo) => (
          <TouchableOpacity
            key={tattoo.id}
            style={styles.option}
            onPress={() => openDetails(tattoo.id)}
          >
            <Image
              source={tattoo.image}
              style={styles.mainImage}
              resizeMode="contain"
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    paddingTop: 40,
    paddingHorizontal: 20,
  },

  logo: {
    width: '90%',
    height: 45,
    alignSelf: 'center',
    marginBottom: 10,
    marginTop: 30,
  },

  line: {
    height: 5,
    width: '100%',
    backgroundColor: '#fff',
    opacity: 0.3,
    marginBottom: 20,
  },

  scroll: {
    width: '100%',
  },

  option: {
    width: '100%',
    height: 80,
    marginBottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },

  mainImage: {
    width: '100%',
    height: '100%',
  },
});