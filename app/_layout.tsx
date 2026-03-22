import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

export default function RootLayout() {
  return (
    <>
      <Stack screenOptions={{ headerTitleAlign: 'center' }}>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="sign-in" options={{ title: 'Sign In' }} />
        <Stack.Screen name="sign-up" options={{ title: 'Sign Up' }} />
        <Stack.Screen name="home" options={{ title: 'Grocery List' }} />
      </Stack>
      <StatusBar style="dark" />
    </>
  );
}
