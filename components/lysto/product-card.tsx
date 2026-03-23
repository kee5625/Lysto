import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import type { Product } from '@/constants/catalog';
import { lystoColors, lystoRadius } from '@/constants/lysto-theme';
import { QuantityStepper } from '@/components/lysto/quantity-stepper';

type ProductCardProps = {
  product: Product;
  quantity: number;
  onAdd: () => void;
  onIncrement: () => void;
  onDecrement: () => void;
};

export function ProductCard({
  product,
  quantity,
  onAdd,
  onIncrement,
  onDecrement,
}: ProductCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.imageWrap}>
        <Image
          source={{ uri: product.imageUri }}
          style={styles.image}
          accessibilityLabel={`${product.name} image`}
        />
      </View>

      <View style={styles.content}>
        <Text numberOfLines={2} style={styles.name}>
          {product.name}
        </Text>
        <Text style={styles.meta}>{product.unitLabel}</Text>
      </View>

      {quantity > 0 ? (
        <QuantityStepper
          compact
          itemLabel={product.name}
          quantity={quantity}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
        />
      ) : (
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={`Add ${product.name}`}
          accessibilityHint="Adds one quantity to your list"
          onPress={onAdd}
          style={styles.addButton}
        >
          <MaterialIcons name="add" size={18} color={lystoColors.white} />
          <Text style={styles.addButtonText}>Add</Text>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '48.5%',
    borderRadius: lystoRadius.md,
    backgroundColor: lystoColors.white,
    padding: 10,
    gap: 10,
  },
  imageWrap: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: lystoRadius.sm,
    overflow: 'hidden',
    backgroundColor: lystoColors.surfaceContainer,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  content: {
    gap: 3,
  },
  name: {
    fontSize: 15,
    fontWeight: '700',
    color: lystoColors.text,
  },
  meta: {
    fontSize: 12,
    color: lystoColors.textMuted,
  },
  addButton: {
    height: 36,
    borderRadius: lystoRadius.pill,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 4,
    backgroundColor: lystoColors.primary,
  },
  addButtonText: {
    color: lystoColors.white,
    fontSize: 13,
    fontWeight: '600',
  },
});
