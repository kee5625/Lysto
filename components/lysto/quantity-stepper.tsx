import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { lystoColors, lystoRadius } from '@/constants/lysto-theme';

type QuantityStepperProps = {
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
  compact?: boolean;
  itemLabel?: string;
};

export function QuantityStepper({
  quantity,
  onIncrement,
  onDecrement,
  compact = false,
  itemLabel,
}: QuantityStepperProps) {
  const buttonSize = compact ? 32 : 34;
  const labelPrefix = itemLabel ? `${itemLabel} quantity` : 'Quantity';

  return (
    <View style={styles.wrapper}>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={`Decrease ${labelPrefix}`}
        onPress={onDecrement}
        style={[styles.minusButton, { width: buttonSize, height: buttonSize }]}
      >
        <MaterialIcons name="remove" size={18} color={lystoColors.primary} />
      </Pressable>
      <Text style={[styles.quantityText, compact && styles.quantityTextCompact]}>{quantity}</Text>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={`Increase ${labelPrefix}`}
        onPress={onIncrement}
        style={[styles.plusButton, { width: buttonSize, height: buttonSize }]}
      >
        <MaterialIcons name="add" size={18} color={lystoColors.white} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: lystoRadius.pill,
    backgroundColor: lystoColors.surfaceContainerHighest,
    padding: 4,
    gap: 6,
  },
  minusButton: {
    borderRadius: lystoRadius.pill,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: lystoColors.surface,
  },
  plusButton: {
    borderRadius: lystoRadius.pill,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: lystoColors.primary,
  },
  quantityText: {
    minWidth: 24,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '700',
    color: lystoColors.text,
  },
  quantityTextCompact: {
    fontSize: 14,
  },
});
