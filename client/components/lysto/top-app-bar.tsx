import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { lystoColors, lystoRadius } from '@/constants/lysto-theme';

type TopAppBarProps = {
  title: string;
  onLeftPress?: () => void;
  onRightPress?: () => void;
  leftIcon?: keyof typeof MaterialIcons.glyphMap;
  rightIcon?: keyof typeof MaterialIcons.glyphMap;
  avatarUri?: string;
};

export function TopAppBar({
  title,
  onLeftPress,
  onRightPress,
  leftIcon = 'menu',
  rightIcon = 'notifications-none',
  avatarUri,
}: TopAppBarProps) {
  return (
    <View style={styles.container}>
      <Pressable disabled={!onLeftPress} onPress={onLeftPress} style={styles.iconButton}>
        <MaterialIcons name={leftIcon} size={22} color={lystoColors.primary} />
      </Pressable>

      <Text numberOfLines={1} style={styles.title}>
        {title}
      </Text>

      {avatarUri ? (
        <Image source={{ uri: avatarUri }} style={styles.avatar} />
      ) : (
        <Pressable disabled={!onRightPress} onPress={onRightPress} style={styles.iconButton}>
          <MaterialIcons name={rightIcon} size={22} color={lystoColors.primary} />
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 72,
    borderRadius: lystoRadius.lg,
    backgroundColor: 'rgba(255, 248, 241, 0.9)',
    borderWidth: 1,
    borderColor: '#ece1cf',
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    flex: 1,
    textAlign: 'center',
    marginHorizontal: 12,
    fontSize: 24,
    fontWeight: '600',
    color: lystoColors.primary,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: lystoRadius.pill,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: lystoRadius.pill,
  },
});
