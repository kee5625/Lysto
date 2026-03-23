import { Link, router } from 'expo-router';
import { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function SignInScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    router.replace('/home');
  };

  return (
    <View style={styles.container}>
      <View style={styles.brandRow}>
        <Image source={require('../assets/images/logo.jpg')} style={styles.logo} resizeMode="contain" />
        <Text style={styles.title}>Lysto</Text>
      </View>
      <Text style={styles.subtitle}>Sign in to start planning your groceries.</Text>

      <TextInput
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        placeholder="Password"
        secureTextEntry
      />

      <Pressable onPress={handleSignIn} style={styles.primaryButton}>
        <Text style={styles.primaryButtonText}>Sign In</Text>
      </Pressable>

      <Text style={styles.helperText}>
        New here? <Link href="/sign-up" style={styles.link}>Create an account</Link>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8eddb',
    paddingHorizontal: 20,
    justifyContent: 'center',
    gap: 12,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: '#23402b',
  },
  brandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  logo: {
    width: 36,
    height: 36,
  },
  subtitle: {
    fontSize: 15,
    color: '#4b5f50',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#d6e2d5',
    backgroundColor: '#f8eddb',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 15,
  },
  primaryButton: {
    backgroundColor: '#f8eddb',
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 4,
  },
  primaryButtonText: {
    color: '#2f7a43',
    fontSize: 16,
    fontWeight: '700',
  },
  helperText: {
    color: '#4b5f50',
    fontSize: 14,
  },
  link: {
    color: '#2f7a43',
    fontWeight: '700',
  },
});
