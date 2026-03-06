import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ACTips() {
  const router = useRouter();

  const tips = [
    {
      id: 1,
      title: "Research the Artist and Studio",
      description: "Choose a licensed, reputable tattoo artist with a strong portfolio. Review healed works not just fresh tattoos to evaluate line quality, shading, and consistency.",
      link: "https://www.teenvogue.com/story/how-to-avoid-an-infected-tattoo"
    },
    {
      id: 2,
      title: "Understand the Meaning of the Design",
      description: "Especially when choosing indigenous Filipino designs such as Batok or Fatek, clients should understand the cultural, historical, and symbolic meanings before getting tattooed. Avoid using sacred or earned symbols without proper knowledge or permission.",
      link: "https://www.allure.com/story/first-tattoo-guide-tips"
    },
    {
      id: 3,
      title: "Prioritize Hygiene and Safety",
      description: "Ensure the studio:\n\n• Uses sterilized equipment\n• Opens needles in front of you\n• Wears gloves",
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
      <Text style={styles.label}>Artist & Client Tips</Text>

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