import { Audio } from 'expo-av';
import { useRouter } from 'expo-router';
import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

export default function ExplorePage() {
  const router = useRouter();

  const playClick = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require('@/assets/images/click.wav')
    );
    await sound.playAsync();
  };

  return (
    <View style={styles.container}>

      {/* Top Explore Image */}
      <Image
        source={require('@/assets/images/Explore Pic.png')}
        resizeMode="cover"
        style={styles.exploreImage}
      />

      {/* Logo */}
      <Image
        source={require('@/assets/images/Inkwisyo.png')}
        resizeMode="contain"
        style={styles.logo}
      />

      <View style={styles.line} />

      <ScrollView style={styles.scroll}>
        {/* Tattoo History */}
        <TouchableOpacity
          style={styles.option}
                  onPress={async () => {
            await playClick();
            router.push('/tattoohistoryandculture');
          }}
        >
          <Image
            source={require('@/assets/images/Tattoo History.png')}
            style={styles.mainImage}
            resizeMode="contain"
          />
        </TouchableOpacity>

        {/* Modern Tattoos */}
        <TouchableOpacity
          style={styles.option}
          onPress={async () => {
            await playClick();
            router.push('/moderntattoos');
          }}
        >
          <Image
            source={require('@/assets/images/Modern Tattoo.png')}
            style={styles.mainImage}
            resizeMode="contain"
          />
        </TouchableOpacity>

        {/* Artist & Clients */}
        <TouchableOpacity
          style={styles.option}
          onPress={async () => {
            await playClick();
            router.push('/artistandclienttips');
          }}
        >
          <Image
            source={require('@/assets/images/Artist & Clients.png')}
            style={styles.mainImage}
            resizeMode="contain"
          />
        </TouchableOpacity>
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

  exploreImage: {
    width: '100%',
    aspectRatio: 1.3,
    borderRadius: 15,
    marginTop: 30,
    marginBottom: 20,
  },

  logo: {
    width: '90%',
    height: 45,
    alignSelf: 'center',
    marginBottom: 20,
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
    marginBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  mainImage: {
    width: '100%',
    height: '100%',
  },
});