import { BottomNavBar } from '@/components/lysto';
import { lystoColors } from '@/constants/lysto-theme';
import { StyleSheet, Text, View } from 'react-native';

export default function MyListScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My List</Text>
      <Text style={styles.subtitle}>Batch 3 will implement this screen.</Text>
      <BottomNavBar activeTab="my-list" />
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
