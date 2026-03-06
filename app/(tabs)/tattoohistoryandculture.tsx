import { useRouter } from 'expo-router';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function TattooHistoryAndCulture() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Header (NOT scrollable) */}
      <Image
        source={require('@/assets/images/Inkwisyo.png')}
        resizeMode="contain"
        style={styles.logo}
      />

      <Text style={styles.headerTitle}>
        Tattoo History & Culture
      </Text>

      <View style={styles.line} />

      {/* 90% height scroll section */}
      <View style={styles.scrollWrapper}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Image
            source={require('@/assets/images/TC.png')}
            style={styles.topImage}
            resizeMode="contain"
          />

          <Text style={styles.sectionTitle}>
            Where is Buscalan?
          </Text>

          <Text style={styles.description}>
            Located in the northern part of the Philippines, Buscalan Village is situated in the province of Kalinga. This remote village is perched on a mountain ridge, surrounded by lush rice terraces and dramatic landscapes that seem to be pulled straight out of a postcard. Getting to Buscalan requires determination, as the journey involves a combination of long drives and challenging hikes, but the rewards are more than worth it.

            {'\n\n'}

            Buscalan is part of the Tinglayan municipality in Kalinga. The village is accessible by foot, with the nearest road being several kilometers away. This isolation has helped preserve its cultural practices, particularly its traditional tattooing methods. Visitors to Buscalan are often struck by the village’s tranquility, the beauty of its surroundings, and the warmth of its people.
          </Text>

          <Image
            source={require('@/assets/images/TC2.png')}
            style={styles.bottomImage}
            resizeMode="contain"
          />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 40,
    paddingHorizontal: 20,
  },

  scrollWrapper: {
    flex: 0.85, // keeps scroll section at ~90% height
  },

  scrollContent: {
    alignItems: 'center',
    flexGrow: 1,
    paddingBottom: 20,
  },

  logo: {
    width: '90%',
    height: 45,
    marginBottom: 20,
    marginTop: 30,
    alignSelf: 'center',
  },

  headerTitle: {
    fontFamily: 'Denver-Serial-Bold',
    fontSize: 32,
    color: '#E1FF00',
    marginBottom: 10,
    textAlign: 'center',
  },

  line: {
    height: 5,
    width: '100%',
    backgroundColor: '#fff',
    opacity: 0.3,
  },

  topImage: {
    width: '100%',
    height: 300,
    borderRadius: 15,
    marginBottom: -15,
  },

  sectionTitle: {
    fontFamily: 'Denver-Serial-Bold',
    fontSize: 32,
    color: '#E1FF00',
    marginBottom: 10,
    alignSelf: 'flex-start',
  },

  description: {
    color: '#ffffffda',
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'justify',
    marginBottom: 20,
    lineHeight: 18,
  },

  bottomImage: {
    width: '100%',
    height: 500,
    borderRadius: 15,
  },
});