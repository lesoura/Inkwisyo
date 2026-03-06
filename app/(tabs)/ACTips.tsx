import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

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
        "Ensure the studio:\n\n• Uses sterilized equipment\n• Opens needles in front of you\n• Wears gloves",
      link: "https://www.moneycontrol.com/lifestyle/tattoo-safety-tips-heres-why-hygiene-and-safety-practices-are-non-negotiable-before-getting-a-tattoo-article-12817786.html",
    },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: '#000' }}>
        <View
        style={{
            height: '90%', // changed from flex: 1
            backgroundColor: '#000',
            alignItems: 'center',
            paddingTop: 40,
            paddingHorizontal: 20,
        }}
        >
        {/* Logo */}
        <Image
            source={require('@/assets/images/Inkwisyo.png')}
            resizeMode="contain"
            style={{ width: '90%', height: 45, alignSelf: 'center', marginBottom: 10, marginTop: 30 }}
        />

        {/* Page label */}
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

        {/* Scrollable tips */}
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
                <TouchableOpacity style={{ width: '10%', alignItems: 'flex-end', marginTop: -40 }} onPress={() => {}}>
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