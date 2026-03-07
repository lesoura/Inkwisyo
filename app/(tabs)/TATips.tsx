import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Image, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function TATips() {
  const router = useRouter();

  const tips = [
    {
      id: 1,
      title: "Maintain Strict Sterilization Standards",
      description:
        "Use autoclaves, disposable needles, and medical-grade disinfectants. Hygiene reflects professionalism and protects both artist and client.",
      link: "https://visionztatts.com/9-studio-hygiene-tips-from-professional-tattoo-artists.html"
    },
    {
      id: 2,
      title: "Educate Clients About Cultural Designs",
      description:
        "When working with indigenous Filipino styles like Batok, artists must:\n\n• Explain meanings\n• Avoid misrepresentation\n• Respect traditional symbols and heritage\n\nCultural sensitivity is essential, especially in the Philippines.",
      link: "https://www.allure.com/story/first-tattoo-guide-tips"
    },
    {
      id: 3,
      title: "Conduct Proper Consultations",
      description:
        "Discuss:\n\n• Skin type\n• Placement suitability\n• Design longevity\n• Size-to-detail balance\n\nNot all designs age well in small placements.",
      link: "https://www.moneycontrol.com/lifestyle/tattoo-safety-tips-heres-why-hygiene-and-safety-practices-are-non-negotiable-before-getting-a-tattoo-article-12817786.html"
    },
    {
      id: 4,
      title: "Prioritize Line Quality and Depth Control",
      description:
        "Proper needle depth prevents:\n\n• Blowouts\n• Patchy ink\n• Excessive scarring\n\nTechnical discipline ensures long-lasting results.",
      link: "https://visionztatts.com/9-studio-hygiene-tips-from-professional-tattoo-artists.html"
    },
    {
      id: 5,
      title: "Manage Client Expectations",
      description:
        "Be honest about:\n\n• Pain levels\n• Healing time\n• Possible touch-ups\n• Design limitations\n\nTransparency builds trust.",
      link: "https://www.allure.com/story/first-tattoo-guide-tips"
    },
    {
      id: 6,
      title: "Continue Learning and Improving",
      description:
        "Tattooing evolves. Artists should:\n\n• Study new techniques\n• Attend workshops\n• Research cultural history\n• Improve drawing fundamentals\n\nContinuous development strengthens artistic credibility.",
      link: "https://visionztatts.com/9-studio-hygiene-tips-from-professional-tattoo-artists.html"
    },
    {
      id: 7,
      title: "Practice Ethical Professionalism",
      description:
        "• Never copy another artist’s custom work\n• Avoid tattooing intoxicated clients\n• Refuse inappropriate or offensive designs\n• Respect boundaries and consent\n\nProfessional ethics define long-term reputation.",
      link: "https://www.allure.com/story/first-tattoo-guide-tips"
    }
  ];

  return (
    <View style={{ flex: 1, backgroundColor: '#000' }}>
      <View style={styles.innerContainer}>

        <Image
          source={require('@/assets/images/Inkwisyo.png')}
          resizeMode="contain"
          style={styles.logo}
        />

        <Text style={styles.pageLabel}>Tattoo Artist Tips</Text>

        <View style={styles.line} />

        <ScrollView style={styles.scroll} contentContainerStyle={{ paddingBottom: 20 }}>
          {tips.map((tip) => (
            <View key={tip.id} style={styles.tipContainer}>
              <View style={styles.tipHeader}>
                <Text style={styles.tipTitle}>
                  {tip.id}. {tip.title}
                </Text>

                <TouchableOpacity
                  style={styles.iconContainer}
                  onPress={() => Linking.openURL(tip.link)}
                >
                  <FontAwesome name="link" size={20} color="#fff" />
                </TouchableOpacity>
              </View>

              <Text style={styles.tipDescription}>{tip.description}</Text>
            </View>
          ))}
        </ScrollView>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  innerContainer: {
    height: '90%',
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

  pageLabel: {
    color: '#E1FF00',
    fontSize: 32,
    marginBottom: 10,
    alignSelf: 'center',
    fontFamily: 'Denver-Serial-Bold',
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
    fontSize: 30,
    width: '90%',
    fontFamily: 'Denver-Serial-Bold',
  },

  iconContainer: {
    width: '10%',
    alignItems: 'flex-end',
    marginTop: -30,
  },

  tipDescription: {
    color: '#fff',
    fontSize: 14,
    lineHeight: 22,
    textAlign: 'justify',
  },
});