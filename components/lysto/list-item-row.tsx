import { Image, StyleSheet, Text, View } from 'react-native';
import type { ListItem } from '@/context/list-context';
import { lystoColors, lystoRadius } from '@/constants/lysto-theme';
import { QuantityStepper } from '@/components/lysto/quantity-stepper';

type ListItemRowProps = {
  item: ListItem;
  onIncrement: () => void;
  onDecrement: () => void;
};

export function ListItemRow({ item, onIncrement, onDecrement }: ListItemRowProps) {
  return (
    <View style={styles.row}>
      <View style={styles.main}>
        <Image source={{ uri: item.imageUri }} style={styles.image} />
        <View style={styles.copy}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.meta}>{[item.note, item.unitLabel].filter(Boolean).join(' • ')}</Text>
        </View>
      </View>
      <QuantityStepper quantity={item.quantity} onIncrement={onIncrement} onDecrement={onDecrement} />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
  },
  image: {
    width: 72,
    height: 72,
    borderRadius: lystoRadius.sm,
    backgroundColor: lystoColors.surfaceContainer,
  },
  copy: {
    flex: 1,
    gap: 2,
  },
  name: {
    fontSize: 17,
    fontWeight: '700',
    color: lystoColors.text,
  },
  meta: {
    fontSize: 12,
    color: lystoColors.textMuted,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },
});
