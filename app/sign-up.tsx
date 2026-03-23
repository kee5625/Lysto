import { Link, router } from 'expo-router';
import { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function SignUpScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    router.replace('/home');
  };

  return (
    <View style={styles.container}>
      <View style={styles.brandRow}>
        <Image source={require('../assets/images/logo.jpg')} style={styles.logo} resizeMode="contain" />
        <Text style={styles.brandName}>Lysto</Text>
      </View>
      <Text style={styles.title}>Create account</Text>
      <Text style={styles.subtitle}>Set up your grocery list starter profile.</Text>

      <TextInput
        value={name}
        onChangeText={setName}
        style={styles.input}
        placeholder="Full name"
        autoCapitalize="words"
      />
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

      <Pressable onPress={handleSignUp} style={styles.primaryButton}>
        <Text style={styles.primaryButtonText}>Sign Up</Text>
      </Pressable>

      <Text style={styles.helperText}>
        Already have an account? <Link href="/sign-in" style={styles.link}>Sign in</Link>
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
    fontSize: 30,
    fontWeight: '800',
    color: '#23402b',
  },
  brandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 4,
  },
  logo: {
    width: 36,
    height: 36,
  },
  brandName: {
    fontSize: 32,
    fontWeight: '800',
    color: '#23402b',
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
