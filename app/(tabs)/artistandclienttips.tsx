import { useRouter } from 'expo-router';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ArtistAndClientTips() {
  const router = useRouter();
  const screenHeight = Dimensions.get('window').height;

  const openDetails = (id: number) => {
    if (id === 1) {
      router.push('/ACTips');
    } else if (id === 2) {
      router.push('/TATips');
    }
  };

  const options = [
    { id: 1, image: require('@/assets/images/AC1.png') },
    { id: 2, image: require('@/assets/images/AC2.png') },
  ];

  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/images/Inkwisyo.png')}
        resizeMode="contain"
        style={styles.logo}
      />

      <Text
        style={{
          fontFamily: 'Denver-Serial-Bold',
          fontSize: 32,
          color: '#E1FF00',
          marginBottom: 10,
        }}
      >
        Artist & Client Tips
      </Text>
      <View style={styles.line} />

      <ScrollView style={[styles.scroll, { height: screenHeight * 0.9 }]}>
        {options.map((option) => (
          <TouchableOpacity
            key={option.id}
            style={styles.option}
            onPress={() => openDetails(option.id)}
          >
            <Image
              source={option.image}
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
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainImage: {
    width: '100%',
    height: '100%',
  },
});