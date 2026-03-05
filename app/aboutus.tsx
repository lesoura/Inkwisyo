import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function AboutUsPage() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Top label */}
      <Text style={styles.header}>About Us</Text>
      <View style={styles.line} />

      {/* Description */}
      <ScrollView style={{ width: '100%' }}>
        <Text style={[styles.description, { textAlign: 'justify' }]}>
            Inkwisyo is a cultural and informative digital platform designed to empower both aspiring tattoo artists and clients by bridging the gap between artistic knowledge, cultural appreciation, and practical guidance in the tattoo community. At its core, Inkwisyo aims to be more than just a resource — it is a space where creativity meets education, where tradition meets innovation, and where enthusiasts can confidently explore the world of tattoo art.

            {"\n\n"}Inkwisyo was born out of a shared passion for tattoos and a desire to elevate the way people learn about this expressive art form. Tattoos carry stories — cultural, personal, and artistic — and we believe that understanding these narratives enriches both the experience and the craft. Our platform provides curated insights, educational content, design walkthroughs, and community-centric features that support users at every step of their tattoo journey.

            {"\n\n"}Whether you are an aspiring artist seeking to refine your skills, a first-time client exploring meaningful designs, or someone who simply appreciates the artistry behind tattoos, Inkwisyo offers a welcoming and informative environment to connect, learn, and grow.
        </Text>

        {/* Back button */}
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <Text style={styles.backButtonText}>Back</Text>
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
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 32,
    color: '#fff',
    fontWeight: '700',
    marginBottom: 10,
  },
  line: {
    height: 5,
    width: '100%',
    backgroundColor: '#fff',
    opacity: 0.3,
    marginBottom: 20,
  },
  description: {
    color: '#fff',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 30,
  },
  backButton: {
    width: '90%',
    alignSelf: 'center',
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#E1FF00',
    borderRadius: 25,
    marginBottom: 30,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});