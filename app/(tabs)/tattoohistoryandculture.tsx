import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function TattooHistoryAndCulture() {
  const router = useRouter();
  const [showMore, setShowMore] = useState(false);

  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/images/Inkwisyo.png')}
        resizeMode="contain"
        style={styles.logo}
      />

      <Text style={styles.headerTitle}>Tattoo History & Culture</Text>

      <View style={styles.line} />

      <View style={styles.scrollWrapper}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          
          <Image
            source={require('@/assets/images/TC.png')}
            style={styles.topImage}
            resizeMode="contain"
          />

          {/* SECTION 1 */}
          <Text style={styles.sectionTitle}>Where is Buscalan?</Text>
          <Text style={styles.description}>
            Located in the northern part of the Philippines, Buscalan Village is situated in the province of Kalinga. This remote village is perched on a mountain ridge, surrounded by lush rice terraces and dramatic landscapes that seem to be pulled straight out of a postcard. Getting to Buscalan requires determination, as the journey involves a combination of long drives and challenging hikes, but the rewards are more than worth it.
          </Text>
          <Text style={styles.description}>
            Buscalan is part of the Tinglayan municipality in Kalinga. The village is accessible by foot, with the nearest road being several kilometers away. This isolation has helped preserve its cultural practices, particularly its traditional tattooing methods. Visitors to Buscalan are often struck by the village’s tranquility, the beauty of its surroundings, and the warmth of its people.
          </Text>

          <Image
            source={require('@/assets/images/TC3.png')}
            style={styles.bottomImage}
            resizeMode="contain"
          />

          {/* SECTION 2 */}
          <Text style={styles.sectionTitle}>Buscalan Tattoo Tradition</Text>
          <Text style={styles.description}>
            Buscalan is world-renowned for its traditional Kalinga tattoos, known as “batek.” These tattoos are more than just body art; they are deeply embedded in the cultural identity of the Kalinga people. The tattoos symbolize strength, bravery, and social status, and they are often considered a rite of passage.
          </Text>

          <Image
            source={require('@/assets/images/TC4.png')}
            style={styles.bottomImage}
            resizeMode="contain"
          />

          {/* SECTION 3 */}
          <Text style={styles.sectionTitle}>Buscalan Tattoo Village</Text>
          <Text style={styles.description}>
            Buscalan Village has become synonymous with traditional Kalinga tattooing. The village is a living museum of ancient tattoo practices, where artisans still use the traditional method of hand-tapping ink into the skin using a thorn from a pomelo tree and a bamboo stick. This method has been passed down through generations, with Apo Whang-Od being the most famous practitioner.
          </Text>
          <Text style={styles.description}>
            Visitors to the village often seek out Apo Whang-Od or her apprentices to receive a tattoo, not just as a form of body art, but as a way to connect with the rich cultural heritage of the Kalinga people.
          </Text>

          <Image
            source={require('@/assets/images/TC5.png')}
            style={styles.bottomImage}
            resizeMode="contain"
          />

          {/* SECTION 4 */}
          <Text style={styles.sectionTitle}>Tattoo Buscalan Meaning</Text>
          <Text style={styles.description}>
            Each tattoo design in Buscalan carries its own significance. Traditionally, Kalinga tattoos were given to warriors as a mark of their bravery in battle. Over time, the meanings have evolved, but the deep spiritual and cultural significance remains. For many, getting a tattoo in Buscalan is a way to honor and preserve the ancient traditions of the Kalinga people.
          </Text>

          <Image
            source={require('@/assets/images/TC6.png')}
            style={styles.bottomImage}
            resizeMode="contain"
          />

          {/* SECTION 5 */}
          <Text style={styles.sectionTitle}>Buscalan Tattoo Designs</Text>
          <Text style={styles.description}>
          Each tattoo design in Buscalan carries its own significance. Traditionally, Kalinga tattoos were given to warriors as a mark of their bravery in battle. Over time, the meanings have evolved, but the deep spiritual and cultural significance remains. For many, getting a tattoo in Buscalan is a way to honor and preserve the ancient traditions of the Kalinga people.
          </Text>

          <Image
            source={require('@/assets/images/TC7.png')}
            style={styles.bottomImage}
            resizeMode="contain"
          />

          {/* SECTION 6 */}
          <Text style={styles.sectionTitle}>Female Buscalan Tattoo Designs</Text>
          <Text style={styles.description}>
            Female Kalinga tattoos are often intricate and elaborate, covering large portions of the body. Common designs include repetitive geometric patterns, which symbolize fertility, beauty, and status. These designs are traditionally placed on the arms, legs, and back, often forming an intricate web of interconnected patterns.
          </Text>

          <Image
            source={require('@/assets/images/TC8.png')}
            style={styles.bottomImage}
            resizeMode="contain"
          />

          {/* SECTION 7 */}
          <Text style={styles.sectionTitle}>Male Buscalan Tattoo Designs</Text>
          <Text style={styles.description}>
            Male tattoos in Buscalan tend to be bold and straightforward, often representing the wearer’s achievements in battle or their social status. These designs include centipedes, which symbolize protection, and other animal motifs that signify strength and courage. The designs are usually placed on the chest, back, and arms, serving as a mark of honor and respect within the community.
          </Text>

          {/* VIEW MORE / HIDE BUTTON */}
          <Pressable
            style={styles.viewMoreButton}
            onPress={() => setShowMore(!showMore)}
          >
            <Text style={styles.viewMoreText}>
              {showMore ? 'Hide' : 'View More'}
            </Text>
          </Pressable>

          {/* HIDDEN CONTENT */}
          {showMore && (
          <View style={{ width: '100%', alignSelf: 'stretch' }}>
              <Image
                source={require('@/assets/images/TC2.png')}
                style={styles.bottomImage}
                resizeMode="contain"
              />

              <Text style={styles.sectionTitle}>1. Background History of Batok (Indigenous Filipino Tattooing)</Text>
              <Text style={styles.description}>
                Batok (also known as Fatek, Burik, Batek, Patik, Tatak) is a pre-colonial indigenous Filipino tattooing practice, most documented in the Cordillera region of Northern Luzon. It predates Spanish colonization and functioned as a social, spiritual, and communal system, not merely body decoration.
              </Text>

              <Image
                source={require('@/assets/images/TC9.png')}
                style={styles.bottomImage}
                resizeMode="contain"
              />

              <Text style={styles.sectionSubTitle}>Colonial Disruption</Text>

              <Text style={styles.description}>• Spanish era (1565–1898)</Text>
                <Text style={styles.description}>  • Limited control over Cordillera highlands → batok initially survived.</Text>
                <Text style={styles.description}>  • However, Christianized groups (e.g., Ibaloy, Kankana-ey) abandoned tattooing.</Text>

              <Text style={styles.description}>• American era (1898 onward)</Text>
                <Text style={styles.description}>  • Batok associated with “uncivilized,” headhunting cultures.</Text>
                <Text style={styles.description}>  • Headhunting criminalized → tattooing declined.</Text>
                <Text style={styles.description}>  • Western education, Christianity, clothing, and wage labor erased batok’s original functions.</Text>
                <Text style={styles.description}>• Tattoos became stigmatized as shameful (kababain), sinful, or primitive.</Text>
              
              <Text style={styles.description}>
                Despite this, batok survived through family lineages, particularly among Kalinga communities, and is now preserved through practitioners like Whang-Od and cultural advocates.
              </Text>

              <Text style={styles.sectionTitle}>2. Tribe & Regional Information</Text>
              <Text style={styles.description}>Batok was historically practiced across multiple Cordillera ethnolinguistic groups, including:</Text>
                <Text style={styles.description}>• Kalinga (Northern & Southern) – strongest preservation</Text>
                <Text style={styles.description}>• Bontok</Text>
                <Text style={styles.description}>• Ifugao</Text>
                <Text style={styles.description}>• Kankana-ey</Text>
                <Text style={styles.description}>• Itnég (Tingguian)</Text>
                <Text style={styles.description}>• Isneg</Text>
              <Text style={styles.description}>Ibaloy (practice later declined)</Text>

              <Image
                source={require('@/assets/images/TC10.png')}
                style={styles.bottomImage}
                resizeMode="contain"
              />

              <Text style={styles.sectionTitle}>3. Tattoo Process (Batok Method)</Text>
                <Text style={styles.description}>Batok is hand-tapped, not machine-done.</Text>

              <Text style={styles.sectionSubTitle}>Tools & Materials:</Text>
                <Text style={styles.description}>  • Gisi (tattooing implement):</Text>
                <Text style={styles.description}>  • Lemon thorn attached to a stick</Text>
                <Text style={styles.description}>  • Or buffalo horn with metal needles</Text>
                <Text style={styles.description}>  • Ink: charcoal + water</Text>
                <Text style={styles.description}>Method: repeated tapping → ink penetrates skin</Text>

                <Text style={styles.sectionSubTitle}>Process Characteristics:</Text>
                <Text style={styles.description}>• Slow, painful, deliberate</Text>
                <Text style={styles.description}>• Often performed in a ceremonial setting</Text>
                <Text style={styles.description}>• Community or family members are present</Text>
                <Text style={styles.description}>• Pain is meaningful — endurance symbolizes strength and readiness</Text>

              <Image
                source={require('@/assets/images/TC11.png')}
                style={styles.bottomImage}
                resizeMode="contain"
              />

              <Text style={styles.sectionTitle}>4. Design & Symbolism</Text>
              <Text style={styles.description}>Batok designs are not freely chosen. They are:</Text>
                <Text style={styles.description}>• Revealed, not selected</Text>
                <Text style={styles.description}>• Based on ancestral lineage and region</Text>
                <Text style={styles.description}>• Often inspired by nature</Text>

              <Text style={styles.sectionSubTitle}>Common Symbol Types:</Text>
                <Text style={styles.description}>• Crocodile teeth (triangles) – protection, ancestral wrath</Text>
                <Text style={styles.description}>• Lines / bands – journeys, maturity, warrior status</Text>
                <Text style={styles.description}>• Geometric patterns – balance, continuity, lineage</Text>
                <Text style={styles.description}>• Nature motifs – mountains, animals, rivers</Text>

                <Text style={styles.sectionSubTitle}>Meaning System:</Text>
                  <Text style={styles.description}>• Tattoos act as living contracts between:</Text>
                    <Text style={styles.description}>  • The individual</Text>
                    <Text style={styles.description}>  • Their ancestors</Text>
                    <Text style={styles.description}>  • Nature</Text>
                  <Text style={styles.description}>• Symbols carry responsibility, not just protection</Text>
                  <Text style={styles.description}>• Markings are believed to call in ancestral guidance</Text>

              <Text style={styles.sectionTitle}>5. Ritual & Social Meaning</Text>
              <Text style={styles.description}>
                Batok is a collective occupation, meaning its significance exists beyond the individual.
              </Text>

              <Text style={styles.sectionSubTitle}>Ritual Elements</Text>
                <Text style={[styles.description, {  }]}>• Traditionally required elder approval</Text>
                <Text style={[styles.description, {  }]}>• Family/community witnesses the process</Text>
                <Text style={[styles.description, {  }]}>• The act is public, vulnerable, and relational</Text>

              <Text style={styles.sectionSubTitle}>Social Functions</Text>
                <Text style={[styles.description, {  }]}>• Marked:</Text>
                <Text style={[styles.description, {  }]}>  • Bravery (men)</Text>
                <Text style={[styles.description, {  }]}>  • Fertility & maturity (women)</Text>
                <Text style={[styles.description, {  }]}>  • Social rank or achievement</Text>
                <Text style={[styles.description, {  }]}>• Reinforced belonging (kapwa) — shared identity between self, ancestors, and community</Text>

              <Image
                source={require('@/assets/images/TC12.png')}
                style={styles.bottomImage}
                resizeMode="contain"
              />

              <Text style={styles.sectionTitle}>6. Psychological & Cultural Meaning</Text>

              <Text style={styles.sectionSubTitle}>Identity & Mental Resilience</Text>
                <Text style={[styles.description, {  }]}>  • Enduring pain = courage, discipline, emotional regulation</Text>
                <Text style={[styles.description, {  }]}>  • Tattoos grounded individuals in identity and ancestry</Text>
                <Text style={[styles.description, {  }]}>  • Acted as psychological tests of readiness and responsibility</Text>

              <Text style={styles.sectionSubTitle}>Modern Meaning (Diaspora Context)</Text>
                <Text style={[styles.description, {  }]}>• Reclamation of erased identity</Text>
                <Text style={[styles.description, {  }]}>  • Decolonization of the body</Text>
                <Text style={[styles.description, {  }]}>  • Healing generational disconnection</Text>
                <Text style={[styles.description, {  }]}>  • Visible resistance against colonial stigma</Text>

              <Text style={styles.description}>Participants described batok as:</Text>
              <Text style={[styles.description, {  }]}>  • “Always having been there”</Text>
              <Text style={[styles.description, {  }]}>  • A revealing, not an adding</Text>
              <Text style={[styles.description, {  }]}>  • A reconnection to something dormant</Text>

              <Text style={styles.sectionTitle}>7. Why Batok Matters Today (Preservation Context)</Text>
              <Text style={styles.description}>Batok declined because:</Text>
              <Text style={[styles.description, {  }]}>  • Its original social functions were disrupted</Text>
              <Text style={[styles.description, {  }]}>  • Western medicine, currency, clothing, and religion replaced symbolic roles</Text>

              <Text style={styles.description}>It survives today because:</Text>
              <Text style={[styles.description, {  }]}>  • Family transmission</Text>
              <Text style={[styles.description, {  }]}>  • Cultural activism</Text>
              <Text style={[styles.description, {  }]}> • Education (books, apprenticeships, local government support)</Text>

              <Text style={styles.description}>The study emphasizes:</Text>
              <Text style={[styles.description, { }]}>Preservation must include education of meaning, not just the technique</Text>

              <Image
                source={require('@/assets/images/TC13.png')}
                style={styles.bottomImage}
                resizeMode="contain"
              />

              <Text style={styles.sectionTitle}>Guide on Getting a Tattoo From Apo Whang-Od, The Last Mambabatok</Text>
              <Text style={styles.description}>
                Batok is a hand-poke tattoo using pomelo or lemon thorn as a needle and mixed charcoal soot with water in a coconut shell as an ink. The ink is mixed with blood when hand poked against the skin, which creates permanent ink on the body. For people from Kalinga, this body art is more than just an accessory. It originated from the culture of tribal war and headhunting, especially for men. In the past, when a man returned victorious from a tribal war, he received a batok tattoo from a mambabatok (tattoo artist), representing his strength, bravery, and ability. For women, tattoos start at age 12 and represent beauty, wealth, and readiness for marriage. The art of getting a batok tattoo includes fortune telling and chanting rituals performed by the mambabatok for good luck.
              </Text>

              <Text style={styles.description}>
                To be a mambabatok is hereditary. It is not a calling for someone who simply desires it; practitioners must come from a family of mambabatok and pass it down to their descendants. Sadly, many mambabatok have passed away, making the batok tattoo culture almost extinct. However, in the mountain village of Buscalan lives a centenarian woman who still practices batok tattooing. She is considered the Last Mambabatok, Apo Whang-Od, who ensured her culture continues in modern times. Even though she has no children, she passes down her knowledge to her grand nieces and teaches the art of batok tattooing to the new generation of the Butbut tribe. Her dedication earned her numerous awards, appearances in documentaries and shows, and the April 2023 cover of Vogue Philippines. Despite her celebrity status, she remains humble and continues to create her signature 3-dot tattoos for those seeking an authentic batok experience.
              </Text>

              <Text style={styles.description}>
                I personally have looked up to her ever since her image was displayed at the Royal Ontario Museum in 2016. Since then, I have wanted to meet her and receive a tattoo from her, which I finally achieved recently. Based on this experience, I compiled a guide on getting inked by the living legend, Apo Whang-Od.
              </Text>

            </View>
          )}

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
    flex: 0.85,
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
    height: 2,
    width: '100%',
    backgroundColor: '#fff',
    opacity: 0.3,
  },

  topImage: {
    width: '100%',
    height: 300,
    borderRadius: 15,
    marginBottom: -15,
    marginTop: -15,
  },

  sectionTitle: {
    fontFamily: 'Denver-Serial-Bold',
    fontSize: 30,
    color: '#E1FF00',
    marginBottom: 10,
    alignSelf: 'flex-start',
  },

  sectionSubTitle: {
    fontFamily: 'Denver-Serial-Bold',
    fontSize: 24,
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
    borderRadius: 15,
    marginBottom: 20,
  },

  viewMoreButton: {
    marginVertical: 30,
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderWidth: 2,
    borderColor: '#E1FF00',
    borderRadius: 20,
  },

  viewMoreText: {
    color: '#E1FF00',
    fontSize: 16,
    fontWeight: '700',
  },
});