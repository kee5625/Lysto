import { Pressable, StyleSheet, Text } from 'react-native';
import { lystoColors, lystoRadius } from '@/constants/lysto-theme';

type CategoryChipProps = {
  label: string;
  active?: boolean;
  onPress: () => void;
};

export function CategoryChip({ label, active = false, onPress }: CategoryChipProps) {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={[styles.chip, active ? styles.chipActive : styles.chipInactive]}
    >
      <Text style={[styles.label, active ? styles.labelActive : styles.labelInactive]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  chip: {
    borderRadius: lystoRadius.pill,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  chipActive: {
    backgroundColor: lystoColors.primary,
  },
  chipInactive: {
    backgroundColor: lystoColors.surfaceContainer,
  },
  label: {
    fontSize: 13,
    fontWeight: '600',
  },
  labelActive: {
    color: lystoColors.white,
  },
  labelInactive: {
    color: lystoColors.textMuted,
  },
});
