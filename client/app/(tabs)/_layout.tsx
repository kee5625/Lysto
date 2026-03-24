import { BottomNavBar, type BottomTabKey } from '@/components/lysto';
import { Tabs } from 'expo-router';

const tabToRouteName: Record<BottomTabKey, string> = {
  home: 'home',
  search: 'search',
  'my-list': 'my-list',
  saved: 'saved',
  profile: 'profile',
};

const routeNameToTab: Record<string, BottomTabKey> = {
  home: 'home',
  search: 'search',
  'my-list': 'my-list',
  saved: 'saved',
  profile: 'profile',
};

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        animation: 'none',
      }}
      tabBar={({ state, navigation }) => {
        const activeRouteName = state.routes[state.index]?.name;
        const activeTab = routeNameToTab[activeRouteName] ?? 'home';

        return (
          <BottomNavBar
            activeTab={activeTab}
            onTabPress={(tab) => {
              navigation.navigate(tabToRouteName[tab] as never);
            }}
          />
        );
      }}
    >
      <Tabs.Screen name="home" />
      <Tabs.Screen name="search" />
      <Tabs.Screen name="my-list" />
      <Tabs.Screen name="saved" />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
}
