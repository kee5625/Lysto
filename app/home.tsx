import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { BottomNavBar, CategoryChip, ProductCard } from '@/components/lysto';
import { categories } from '@/constants/catalog';
import { lystoColors } from '@/constants/lysto-theme';
import { useList } from '@/context/list-context';
import { router, type Href } from 'expo-router';
import { useMemo, useState } from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const {
    selectedCategory,
    setSelectedCategory,
    filteredProducts,
    getQuantity,
    increment,
    decrement,
    totalUnits,
  } = useList();

  const [searchText, setSearchText] = useState('');

  const visibleProducts = useMemo(() => {
    const query = searchText.trim().toLowerCase();

    if (!query) {
      return filteredProducts;
    }

    return filteredProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(query) ||
        product.unitLabel.toLowerCase().includes(query) ||
        product.note?.toLowerCase().includes(query),
    );
  }, [filteredProducts, searchText]);

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.topHeader}>
        <View style={styles.headerLeft}>
          <Image
            source={{
              uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCOBdY9vPIAPlA0FVG6bQYzgWw8C38Li4Im92GR3H-MxBnhha0yxfZftMIIiXKu5Kr1ZJshUmmDq9zmgpbNbkNFiks8ffrtWTIPSm3LnmCO9SkfDRlABM4fQXWrwOed2N3cuTX4hLHyY-NQr7shA0WQSRfD-ewGwVYJIOQbOENnDDzqXXnzu0C83QMZKfahYs0CIvXgcue6dWNBOyYuOTYVUK4QxHdoCzxeFNNAMwKS3ptjdCtyUhOaYPpy9emrb-JmwCThsyq8Ohvh',
            }}
            style={styles.avatar}
          />
          <Text style={styles.brand}>Harvest & Hearth</Text>
        </View>

        <Pressable style={styles.notificationButton}>
          <MaterialIcons name="notifications-none" size={22} color={lystoColors.primary} />
        </Pressable>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <View style={styles.greetingBlock}>
          <Text style={styles.greeting}>Good morning,</Text>
          <Text style={styles.greetingAccent}>Ready to build ur list?</Text>
        </View>

        <View style={styles.searchSection}>
          <View style={styles.searchWrap}>
            <MaterialIcons name="search" size={21} color={lystoColors.textMuted} />
            <TextInput
              value={searchText}
              onChangeText={setSearchText}
              placeholder="Search essentials..."
              placeholderTextColor="rgba(114, 121, 107, 0.8)"
              style={styles.searchInput}
            />
          </View>

          <View style={styles.actionRow}>
            <Pressable style={styles.actionSecondaryButton}>
              <MaterialIcons name="pending-actions" size={20} color="#486e34" />
              <Text style={styles.actionSecondaryText}>In Progress</Text>
            </Pressable>

            <Pressable style={styles.actionPrimaryButton}>
              <MaterialIcons name="add-circle" size={20} color={lystoColors.white} />
              <Text style={styles.actionPrimaryText}>New List</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.chipsContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.chipsRow}>
            {categories.map((category) => (
              <CategoryChip
                key={category.key}
                label={category.label}
                active={selectedCategory === category.key}
                onPress={() => setSelectedCategory(category.key)}
              />
            ))}
          </ScrollView>
        </View>

        <View style={styles.grid}>
          {visibleProducts.map((product) => {
            const quantity = getQuantity(product.id);

            return (
              <ProductCard
                key={product.id}
                product={product}
                quantity={quantity}
                onAdd={() => increment(product.id)}
                onIncrement={() => increment(product.id)}
                onDecrement={() => decrement(product.id)}
              />
            );
          })}
        </View>

        {!visibleProducts.length && (
          <View style={styles.emptyState}>
            <Text style={styles.emptyTitle}>No results in this category</Text>
            <Text style={styles.emptySubtitle}>Try another search term or switch a category.</Text>
          </View>
        )}
      </ScrollView>

      {totalUnits > 0 && (
        <View style={styles.floatingWrap}>
          <Pressable onPress={() => router.push('/my-list' as Href)} style={styles.floatingButton}>
            <View style={styles.floatingLeft}>
              <View style={styles.floatingBadge}>
                <Text style={styles.floatingBadgeText}>{totalUnits}</Text>
              </View>
              <Text style={styles.floatingText}>View your list</Text>
            </View>
            <View style={styles.floatingRight}>
              <Text style={styles.floatingHint}>Drafting...</Text>
              <MaterialIcons name="chevron-right" size={20} color="#fbefdc" />
            </View>
          </Pressable>
        </View>
      )}

      <BottomNavBar activeTab="home" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lystoColors.surface,
  },
  topHeader: {
    position: 'absolute',
    top: 8,
    left: 16,
    right: 16,
    zIndex: 10,
    backgroundColor: 'rgba(255, 248, 241, 0.85)',
    borderRadius: 24,
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#ece1cf',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 999,
    borderWidth: 2,
    borderColor: '#b4f398',
  },
  brand: {
    color: lystoColors.primary,
    fontSize: 24,
    fontWeight: '600',
    letterSpacing: -0.3,
  },
  notificationButton: {
    width: 40,
    height: 40,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContent: {
    paddingTop: 104,
    paddingBottom: 172,
    paddingHorizontal: 16,
    gap: 18,
  },
  greetingBlock: {
    gap: 4,
  },
  greeting: {
    fontSize: 44,
    lineHeight: 46,
    fontWeight: '500',
    color: lystoColors.text,
  },
  greetingAccent: {
    fontSize: 44,
    lineHeight: 46,
    fontWeight: '500',
    color: lystoColors.primary,
  },
  searchSection: {
    gap: 12,
  },
  searchWrap: {
    minHeight: 56,
    borderRadius: 24,
    backgroundColor: lystoColors.surfaceContainerHighest,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    gap: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    color: lystoColors.text,
  },
  actionRow: {
    flexDirection: 'row',
    gap: 10,
  },
  actionSecondaryButton: {
    flex: 1,
    minHeight: 52,
    borderRadius: 999,
    backgroundColor: lystoColors.secondaryContainer,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  actionSecondaryText: {
    color: '#486e34',
    fontSize: 14,
    fontWeight: '600',
  },
  actionPrimaryButton: {
    flex: 1,
    minHeight: 52,
    borderRadius: 999,
    backgroundColor: lystoColors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  actionPrimaryText: {
    color: lystoColors.white,
    fontSize: 14,
    fontWeight: '600',
  },
  chipsContainer: {
    marginHorizontal: -16,
  },
  chipsRow: {
    paddingHorizontal: 16,
    gap: 8,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 12,
  },
  emptyState: {
    marginTop: 4,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#ece1cf',
    paddingHorizontal: 20,
    paddingVertical: 22,
    alignItems: 'center',
    gap: 6,
  },
  emptyTitle: {
    color: lystoColors.text,
    fontSize: 17,
    fontWeight: '700',
  },
  emptySubtitle: {
    color: lystoColors.textMuted,
    fontSize: 13,
    textAlign: 'center',
  },
  floatingWrap: {
    position: 'absolute',
    left: 16,
    right: 16,
    bottom: 98,
    zIndex: 20,
  },
  floatingButton: {
    minHeight: 58,
    borderRadius: 999,
    backgroundColor: '#353023',
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  floatingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 9,
  },
  floatingBadge: {
    width: 30,
    height: 30,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#b4f398',
  },
  floatingBadgeText: {
    color: '#052100',
    fontWeight: '700',
    fontSize: 12,
  },
  floatingText: {
    color: '#fbefdc',
    fontWeight: '600',
    fontSize: 15,
  },
  floatingRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  floatingHint: {
    color: '#fbefdc',
    opacity: 0.7,
    fontSize: 12,
  },
});
