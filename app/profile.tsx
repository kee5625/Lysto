import { BottomNavBar } from '@/components/lysto';
import { lystoColors } from '@/constants/lysto-theme';
import { StyleSheet, Text, View } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Text style={styles.subtitle}>Batch 4 can refine this screen if needed.</Text>
      <BottomNavBar activeTab="profile" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lystoColors.surface,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: lystoColors.text,
  },
  subtitle: {
    marginTop: 8,
    fontSize: 14,
    color: lystoColors.textMuted,
  },
});
