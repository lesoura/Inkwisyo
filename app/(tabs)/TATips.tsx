import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ACTips() {
  const router = useRouter();

  const tips = [
    {
      id: 1,
      title: "Maintain Strict Sterilization Standards",
      description: "Use autoclaves, disposable needles, and medical-grade disinfectants. Hygiene reflects professionalism and protects both artist and client.",
      link: "https://visionztatts.com/9-studio-hygiene-tips-from-professional-tattoo-artists.html"
    },
    {
      id: 2,
      title: "Educate Clients About Cultural Designs",
      description: "When working with indigenous Filipino styles like Batok, artists must:\n\n• Explain meanings\n• Avoid misrepresentation\n• Respect traditional symbols and heritage\n\nCultural sensitivity is essential, especially in the Philippines.",
      link: "https://www.allure.com/story/first-tattoo-guide-tips"
    },
    {
      id: 3,
      title: "Conduct Proper Consultations",
      description: "Discuss:",
      link: "https://www.moneycontrol.com/lifestyle/tattoo-safety-tips-heres-why-hygiene-and-safety-practices-are-non-negotiable-before-getting-a-tattoo-article-12817786.html"
    }
  ];

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require('@/assets/images/Inkwisyo.png')}
        resizeMode="contain"
        style={styles.logo}
      />

      {/* Label above line */}
      <Text style={styles.label}>Tattoo Artist Tips</Text>

      <View style={styles.line} />

      <ScrollView style={styles.scroll}>
        {tips.map((tip) => (
          <View key={tip.id} style={styles.tipContainer}>
            <View style={styles.tipHeader}>
                <Text style={styles.tipTitle}>{tip.id}. {tip.title}</Text>
                <TouchableOpacity style={styles.iconContainer} onPress={() => {}}>
                    <FontAwesome name="link" size={20} color="#fff" />
                </TouchableOpacity>
                </View>
            <Text style={styles.tipDescription}>{tip.description}</Text>
          </View>
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

  label: {
    color: '#E1FF00',
    fontSize: 30,
    fontWeight: '700',
    marginBottom: 5,
    alignSelf: 'center',
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

  tipContainer: {
    marginBottom: 25,
  },

  tipHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    },

    tipTitle: {
    color: '#E1FF00',
    fontSize: 28,
    fontWeight: '700',
    width: '90%',
    },

    iconContainer: {
    width: '10%',       // icon takes 10%
    alignItems: 'flex-end',  // align icon to right
    },

  tipDescription: {
    color: '#fff',
    fontSize: 14,
    lineHeight: 22,
    textAlign: 'justify',
  },
});