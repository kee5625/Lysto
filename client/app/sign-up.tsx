import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { AuthFormField } from '@/components/lysto';
import { lystoColors, lystoRadius, lystoShadows, lystoTypography } from '@/constants/lysto-theme';
import { Link, router } from 'expo-router';
import { useMemo, useState } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

type SignUpForm = {
  fullName: string;
  email: string;
  password: string;
};

type SignUpErrors = Partial<Record<keyof SignUpForm, string>>;

const editorialImages = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuA3cY6M9HbyvV0cYVh2vcBM-zM1Q4Ww43YBuVipPmPKIZ6uvlwtKS0ycR_mOg1nWl65wSOxci8GZLntkIVFmUBJw0zz_jb6RjglVfZ7H-mo17vHuWKBrDIxhdQGgsdAfD6JPRQj5S70XuJc2Zc6wrGseFXwYPDbXlfAec60AgnaW_yZ-jpidxbqolET-LnKxLWIhH7NJESol0yUjsM_5rx_Ae2l4aoruI2Oz_T1p94v6EdvuSloLGtqEPNmA_0AxJe4RtMqNnPmi5UM',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCaFKAYlGJ3owEEO9kz2JVTcGaVEqpL31SMpgoAn8U1EDKnfROu4sNnNaafmYSftweVcFIewy7D-ZZt2KKQmzuPkDi9uUpJgNEEj5MipWxiGn210gL5F-QLLWNnTWPpUHaBUCF3kvuBxuPtqzE1IQCeexRoU2EQd5obW54tE4rhtE3A8MqBzvSt-jcks5wK8YZzK6JEkNk204r2oDO7z4ApT4IfTTj1a5UZbDf4R3CJ-m3vEXvSdPz9Om3LDiLMWj0Cji9aigHADBJ_',
] as const;

function validateSignUp(values: SignUpForm): SignUpErrors {
  const errors: SignUpErrors = {};

  if (!values.fullName.trim()) {
    errors.fullName = 'Full name is required';
  }

  if (!values.email.trim()) {
    errors.email = 'Email is required';
  } else if (!/^\S+@\S+\.\S+$/.test(values.email.trim())) {
    errors.email = 'Enter a valid email address';
  }

  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 6) {
    errors.password = 'Use at least 6 characters';
  }

  return errors;
}

export default function SignUpScreen() {
  const [values, setValues] = useState<SignUpForm>({
    fullName: '',
    email: '',
    password: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const errors = useMemo(() => validateSignUp(values), [values]);

  const handleChange = (key: keyof SignUpForm, value: string) => {
    setValues((prev) => ({ ...prev, [key]: value }));
  };

  const handleSignUp = () => {
    setSubmitted(true);

    if (Object.keys(errors).length > 0) {
      return;
    }

    router.replace('/home');
  };

  return (
    <KeyboardAvoidingView
      style={styles.screen}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.main}>
          <View style={styles.brandBlock}>
            <View style={styles.logoWrap}>
              <MaterialIcons name="restaurant" size={36} color="#f8ffee" />
            </View>
            <Text style={styles.brandTitle}>Harvest &amp; Hearth</Text>
            <Text style={styles.brandSubtitle}>Curate your kitchen sanctuary.</Text>
          </View>

          <View style={styles.formCard}>
            <AuthFormField
              label="Full Name"
              value={values.fullName}
              onChangeText={(text) => handleChange('fullName', text)}
              autoCapitalize="words"
              placeholder="Enter your name"
              error={submitted ? errors.fullName : undefined}
            />

            <AuthFormField
              label="Email Address"
              value={values.email}
              onChangeText={(text) => handleChange('email', text)}
              keyboardType="email-address"
              autoCapitalize="none"
              placeholder="hello@hearth.com"
              error={submitted ? errors.email : undefined}
            />

            <AuthFormField
              label="Password"
              value={values.password}
              onChangeText={(text) => handleChange('password', text)}
              secureTextEntry
              autoCapitalize="none"
              placeholder="••••••••"
              error={submitted ? errors.password : undefined}
            />

            <Pressable accessibilityRole="button" onPress={handleSignUp} style={styles.ctaButton}>
              <Text style={styles.ctaLabel}>Create Account</Text>
            </Pressable>

            <View style={styles.linkRow}>
              <Text style={styles.linkText}>Already part of the hearth? </Text>
              <Link href="/sign-in" style={styles.link}>
                Log in
              </Link>
            </View>
          </View>

          <View style={styles.editorialRow}>
            {editorialImages.map((imageUri) => (
              <View key={imageUri} style={styles.editorialFrame}>
                <Image source={{ uri: imageUri }} style={styles.editorialImage} />
              </View>
            ))}
          </View>

          <Text style={styles.policyText}>
            By creating an account, you agree to our Terms of Service and Editorial Privacy Standards.
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: lystoColors.surfaceContainer,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 30,
  },
  main: {
    gap: 22,
    width: '100%',
    maxWidth: 480,
    alignSelf: 'center',
  },
  brandBlock: {
    alignItems: 'center',
    gap: 8,
  },
  logoWrap: {
    width: 80,
    height: 80,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: lystoColors.primaryContainer,
  },
  brandTitle: {
    color: lystoColors.primary,
    fontSize: 40,
    fontWeight: '600',
    letterSpacing: -0.5,
    textAlign: 'center',
    fontFamily: lystoTypography.brand,
  },
  brandSubtitle: {
    color: lystoColors.textMuted,
    fontSize: 18,
    textAlign: 'center',
  },
  formCard: {
    backgroundColor: lystoColors.white,
    borderRadius: lystoRadius.md,
    padding: 22,
    gap: 14,
    ...lystoShadows.card,
  },
  ctaButton: {
    marginTop: 6,
    minHeight: 62,
    borderRadius: lystoRadius.pill,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: lystoColors.primary,
  },
  ctaLabel: {
    color: lystoColors.white,
    fontSize: 20,
    fontWeight: '700',
  },
  linkRow: {
    marginTop: 6,
    paddingTop: 18,
    borderTopWidth: 1,
    borderTopColor: 'rgba(193, 201, 185, 0.25)',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  linkText: {
    color: lystoColors.textMuted,
    fontSize: 14,
  },
  link: {
    color: lystoColors.primary,
    fontSize: 14,
    fontWeight: '700',
  },
  editorialRow: {
    flexDirection: 'row',
    gap: 10,
    height: 124,
    opacity: 0.84,
  },
  editorialFrame: {
    flex: 1,
    borderRadius: lystoRadius.sm,
    overflow: 'hidden',
  },
  editorialImage: {
    width: '100%',
    height: '100%',
  },
  policyText: {
    color: 'rgba(66, 73, 60, 0.65)',
    textAlign: 'center',
    fontSize: 11,
    textTransform: 'uppercase',
    letterSpacing: 1,
    lineHeight: 16,
    paddingHorizontal: 10,
  },
});
