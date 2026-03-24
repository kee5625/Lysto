import { ListItemRow } from '@/components/lysto';
import { useList } from '@/context/list-context';
import { lystoColors } from '@/constants/lysto-theme';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Linking, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function MyListScreen() {
  const { listItems, totalDistinctItems, increment, decrement, buildShareText } = useList();

  const freshProduceItems = listItems.filter(
    (item) => item.category === 'vegetables' || item.category === 'fruits',
  );

  const pantryEssentialItems = listItems.filter(
    (item) => item.category === 'pantry' || item.category === 'dairy' || item.category === 'bakery',
  );

  const handleShare = async () => {
    const payload = buildShareText();
    const url = `https://wa.me/?text=${encodeURIComponent(payload)}`;
    await Linking.openURL(url);
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <View style={styles.heroBlock}>
          <Text style={styles.heroEyebrow}>Current Selection</Text>
          <Text style={styles.heroTitle}>My List</Text>
        </View>

        {!!freshProduceItems.length && (
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Fresh Produce</Text>
              <Text style={styles.sectionCount}>{freshProduceItems.length} Items</Text>
            </View>
            <View style={styles.sectionItems}>
              {freshProduceItems.map((item) => (
                <ListItemRow
                  key={item.id}
                  item={item}
                  onIncrement={() => increment(item.id)}
                  onDecrement={() => decrement(item.id)}
                />
              ))}
            </View>
          </View>
        )}

        {!!pantryEssentialItems.length && (
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Pantry Essentials</Text>
              <Text style={styles.sectionCount}>{pantryEssentialItems.length} Items</Text>
            </View>
            <View style={styles.sectionItems}>
              {pantryEssentialItems.map((item) => (
                <ListItemRow
                  key={item.id}
                  item={item}
                  onIncrement={() => increment(item.id)}
                  onDecrement={() => decrement(item.id)}
                />
              ))}
            </View>
          </View>
        )}

        {!listItems.length && (
          <View style={styles.emptyState}>
            <Text style={styles.emptyTitle}>No items in your list yet</Text>
            <Text style={styles.emptySubtitle}>Add items from Home to start curating your next list.</Text>
          </View>
        )}

        <View style={styles.shareWrap}>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Share list via WhatsApp"
            accessibilityHint="Opens WhatsApp with your current list message"
            onPress={handleShare}
            style={styles.shareButton}
          >
            <MaterialIcons name="share" size={20} color={lystoColors.white} />
            <Text style={styles.shareText}>Share via WhatsApp</Text>
          </Pressable>
          <Text style={styles.shareMeta}>{totalDistinctItems} distinct items ready to share</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lystoColors.surface,
  },
  scrollContent: {
    paddingTop: 18,
    paddingHorizontal: 20,
    paddingBottom: 132,
    gap: 28,
  },
  heroBlock: {
    gap: 6,
  },
  heroEyebrow: {
    fontSize: 10,
    letterSpacing: 1.2,
    textTransform: 'uppercase',
    color: lystoColors.primary,
    fontWeight: '700',
  },
  heroTitle: {
    fontSize: 42,
    lineHeight: 44,
    fontWeight: '500',
    color: lystoColors.text,
  },
  section: {
    gap: 14,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    gap: 10,
  },
  sectionTitle: {
    fontSize: 26,
    lineHeight: 28,
    fontWeight: '600',
    color: lystoColors.text,
  },
  sectionCount: {
    fontSize: 12,
    color: lystoColors.textMuted,
    fontWeight: '500',
  },
  sectionItems: {
    gap: 12,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#ece1cf',
    backgroundColor: '#fffdf9',
    paddingHorizontal: 20,
    paddingVertical: 26,
  },
  emptyTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: lystoColors.text,
  },
  emptySubtitle: {
    fontSize: 13,
    color: lystoColors.textMuted,
    textAlign: 'center',
  },
  shareWrap: {
    alignItems: 'center',
    gap: 10,
    paddingTop: 10,
  },
  shareButton: {
    minHeight: 56,
    borderRadius: 999,
    backgroundColor: lystoColors.primary,
    width: '100%',
    maxWidth: 420,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  shareText: {
    color: lystoColors.white,
    fontSize: 16,
    fontWeight: '700',
  },
  shareMeta: {
    fontSize: 11,
    color: lystoColors.textMuted,
  },
});
