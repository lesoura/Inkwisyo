import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function SettingsPage() {
  const router = useRouter();

  const options = [
    { label: 'Account', icon: 'user' },
    { label: 'Notifications', icon: 'bell' },
    { label: 'Help & Support', icon: 'headphones' },
    { label: 'About Us', icon: 'question' },
  ];

  return (
    <View style={styles.container}>
      {/* Top label */}
      <Text style={styles.header}>Settings</Text>
      <View style={styles.line} />

      {/* Options list */}
      <ScrollView style={{ width: '100%' }}>
        {options.map((opt, idx) => (
        <TouchableOpacity
          key={idx}
          style={styles.option}
          onPress={() => {
            if (opt.label === 'About Us') {
              router.push('/aboutus'); // navigate to About Us page
            }
            // add other navigations here if needed
          }}
        >
          <View style={styles.optionRow}>
            <FontAwesome name={opt.icon as any} size={24} color="#fff" />
            <Text style={styles.optionText}>{opt.label}</Text>
            <FontAwesome name="angle-right" size={24} color="#000" />
          </View>
        </TouchableOpacity>
      ))}

        {/* Logout button */}
        <TouchableOpacity
          style={styles.logout}
          onPress={() => router.push('/login')}
        >
          <Text style={styles.logoutText}>Logout</Text>
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
  option: {
    width: '100%',
    backgroundColor: '#436270',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  optionText: {
    color: '#fff',
    fontSize: 16,
    flex: 1,
    marginLeft: 15,
  },
  logout: {
    width: '30%',
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderRadius: 25,
    alignSelf: 'center',
    marginTop: 40,
  },
  logoutText: {
    color: '#000',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
  },
});