import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { router, type Href } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { lystoColors, lystoRadius } from '@/constants/lysto-theme';

export type BottomTabKey = 'home' | 'search' | 'my-list' | 'saved' | 'profile';

type BottomNavBarProps = {
  activeTab: BottomTabKey;
  onTabPress?: (tab: BottomTabKey) => void;
};

const tabs: {
  key: BottomTabKey;
  label: string;
  icon: keyof typeof MaterialIcons.glyphMap;
  href: Href;
}[] = [
  { key: 'home', label: 'Home', icon: 'home-filled', href: '/home' as Href },
  { key: 'search', label: 'Search', icon: 'search', href: '/search' as Href },
  { key: 'my-list', label: 'My List', icon: 'receipt-long', href: '/my-list' as Href },
  { key: 'saved', label: 'Saved', icon: 'bookmark-border', href: '/saved' as Href },
  { key: 'profile', label: 'Profile', icon: 'person-outline', href: '/profile' as Href },
];

export function BottomNavBar({ activeTab, onTabPress }: BottomNavBarProps) {
  return (
    <View style={styles.container}>
      {tabs.map((tab) => {
        const active = tab.key === activeTab;

        return (
          <Pressable
            key={tab.key}
            accessibilityRole="tab"
            accessibilityState={{ selected: active }}
            accessibilityLabel={`${tab.label} tab`}
            onPress={() => {
              if (onTabPress) {
                onTabPress(tab.key);
                return;
              }

              router.replace(tab.href);
            }}
            style={[styles.tab, active && styles.tabActive]}
          >
            <MaterialIcons
              name={tab.icon}
              size={20}
              color={active ? lystoColors.primary : 'rgba(32, 27, 16, 0.55)'}
            />
            <Text style={[styles.tabLabel, active && styles.tabLabelActive]}>{tab.label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 16,
    right: 16,
    bottom: 16,
    backgroundColor: lystoColors.white,
    borderRadius: lystoRadius.xl,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
    shadowColor: '#42493c',
    shadowOpacity: 0.1,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 8 },
    elevation: 4,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 3,
    borderRadius: lystoRadius.pill,
    paddingVertical: 8,
  },
  tabActive: {
    backgroundColor: lystoColors.secondaryContainer,
  },
  tabLabel: {
    fontSize: 11,
    color: 'rgba(32, 27, 16, 0.55)',
    fontWeight: '500',
  },
  tabLabelActive: {
    color: lystoColors.primary,
  },
});
