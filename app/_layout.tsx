import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { ListProvider } from '@/context/list-context';
import '../global.css';

export default function RootLayout() {
  return (
    <>
      <ListProvider>
        <Stack screenOptions={{ headerShown: false, headerTitleAlign: 'center' }}>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="sign-in" options={{ headerShown: false }} />
          <Stack.Screen name="sign-up" options={{ headerShown: false }} />
          <Stack.Screen name="splash" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </ListProvider>
      <StatusBar style="dark" />
    </>
  );
}
