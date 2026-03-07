import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Image, Linking, ScrollView, Text, TouchableOpacity, View } from 'react-native';

export default function ACTips() {
  const router = useRouter();

  const tips = [
    {
      id: 1,
      title: "Research the Artist and Studio",
      description:
        "Choose a licensed, reputable tattoo artist with a strong portfolio. Review healed works not just fresh tattoos to evaluate line quality, shading, and consistency.",
      link: "https://www.teenvogue.com/story/how-to-avoid-an-infected-tattoo",
    },
    {
      id: 2,
      title: "Understand the Meaning of the Design",
      description:
        "Especially when choosing indigenous Filipino designs such as Batok or Fatek, clients should understand the cultural, historical, and symbolic meanings before getting tattooed. Avoid using sacred or earned symbols without proper knowledge or permission.",
      link: "https://www.allure.com/story/first-tattoo-guide-tips",
    },
    {
      id: 3,
      title: "Prioritize Hygiene and Safety",
      description:
        "Ensure the studio:\n\n• Uses sterilized equipment\n• Opens needles in front of you\n• Wears gloves\n• Maintains a clean workspace\n\nHealth safety should never be compromised.",
      link: "https://www.moneycontrol.com/lifestyle/tattoo-safety-tips-heres-why-hygiene-and-safety-practices-are-non-negotiable-before-getting-a-tattoo-article-12817786.html",
    },
    {
      id: 4,
      title: "Be Honest During Consultation",
      description:
        "Inform your artist about:\n\n• Allergies\n• Skin conditions\n• Medical concerns\n• Pain tolerance\n\nClear communication prevents complications.",
      link: "https://www.allure.com/story/first-tattoo-guide-tips",
    },
    {
      id: 5,
      title: "Avoid Alcohol and Blood Thinners Before the Session",
      description:
        "Alcohol and certain medications can thin the blood, causing excessive bleeding and affecting ink retention.",
      link: "https://www.teenvogue.com/story/how-to-avoid-an-infected-tattoo",
    },
    {
      id: 6,
      title: "Follow Proper Aftercare",
      description:
        "Aftercare determines how well the tattoo heals. Follow the artist’s instructions carefully, including:\n\n• Cleaning properly\n• Avoiding sun exposure\n• Not picking scabs\n• Moisturizing as recommended\n\nPoor aftercare can ruin even the best tattoo work.",
      link: "https://www.healthline.com/health/tattoo-aftercare",
    },
    {
      id: 7,
      title: "Do Not Rush the Design Process",
      description:
        "A tattoo is permanent. Take time to finalize size, placement, and details. Avoid impulsive decisions.",
      link: "https://www.allure.com/story/first-tattoo-guide-tips",
    },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: '#000' }}>
      <View
        style={{
          height: '90%',
          backgroundColor: '#000',
          alignItems: 'center',
          paddingTop: 40,
          paddingHorizontal: 20,
        }}
      >
        <Image
          source={require('@/assets/images/Inkwisyo.png')}
          resizeMode="contain"
          style={{ width: '90%', height: 45, alignSelf: 'center', marginBottom: 10, marginTop: 30 }}
        />

        <Text
          style={{
            color: '#E1FF00',
            fontSize: 32,
            marginBottom: 10,
            alignSelf: 'center',
            fontFamily: 'Denver-Serial-Bold',
          }}
        >
          Artist & Client Tips
        </Text>

        <View style={{ height: 5, width: '100%', backgroundColor: '#fff', opacity: 0.3, marginBottom: 20 }} />

        <ScrollView style={{ width: '100%' }} contentContainerStyle={{ paddingBottom: 20 }}>
          {tips.map((tip) => (
            <View key={tip.id} style={{ marginBottom: 25 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
                <Text
                  style={{
                    color: '#E1FF00',
                    fontSize: 30,
                    width: '90%',
                    fontFamily: 'Denver-Serial-Bold',
                  }}
                >
                  {tip.id}. {tip.title}
                </Text>

                <TouchableOpacity
                  style={{ width: '10%', alignItems: 'flex-end', marginTop: -30 }}
                  onPress={() => Linking.openURL(tip.link)}
                >
                  <FontAwesome name="link" size={20} color="#fff" />
                </TouchableOpacity>
              </View>

              <Text style={{ color: '#fff', fontSize: 14, lineHeight: 22, textAlign: 'justify' }}>
                {tip.description}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}