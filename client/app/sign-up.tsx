import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { AuthFormField } from '@/components/lysto';
import { lystoColors, lystoRadius, lystoShadows, lystoTypography } from '@/constants/lysto-theme';
import { Link, router, useLocalSearchParams } from 'expo-router';
import { useEffect, useMemo, useState } from 'react';
import { useSignUp } from '@clerk/expo';
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
  const formErrors: SignUpErrors = {};

  if (!values.fullName.trim()) {
    formErrors.fullName = 'Full name is required';
  }

  if (!values.email.trim()) {
    formErrors.email = 'Email is required';
  } else if (!/^\S+@\S+\.\S+$/.test(values.email.trim())) {
    formErrors.email = 'Enter a valid email address';
  }

  if (!values.password) {
    formErrors.password = 'Password is required';
  } else if (values.password.length < 6) {
    formErrors.password = 'Use at least 6 characters';
  }

  return formErrors;
}

export default function SignUpScreen() {
  const { signUp, isLoaded, errors: signUpErrors } = useSignUp();
  const params = useLocalSearchParams<{ email?: string; reason?: string }>();
  
  const [values, setValues] = useState<SignUpForm>({
    fullName: '',
    email: params.email || '',
    password: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [showEmailCode, setShowEmailCode] = useState(false);
  const [code, setCode] = useState('');

  const validationErrors = useMemo(() => validateSignUp(values), [values]);

  useEffect(() => {
    if (params.email) {
      setValues(prev => ({ ...prev, email: params.email || '' }));
    }
  }, [params.email]);

  const handleChange = (key: keyof SignUpForm, value: string) => {
    setValues((prev) => ({ ...prev, [key]: value }));
  };

  const handleSignUp = async () => {
    setSubmitted(true);

    if (Object.keys(validationErrors).length > 0 || !isLoaded) {
      return;
    }

    try {
      const { error } = await signUp.password({
        emailAddress: values.email,
        password: values.password,
        firstName: values.fullName.split(' ')[0],
        lastName: values.fullName.split(' ').slice(1).join(' ') || '',
      });

      if (error) {
        console.error('Sign up error:', JSON.stringify(error, null, 2));
        return;
      }

      // Send verification email
      await signUp.verifications.sendEmailCode();
      setShowEmailCode(true);
    } catch (err) {
      console.error('Sign up failed:', err);
    }
  };

  const handleVerify = async () => {
    if (!isLoaded) return;

    try {
      const { error } = await signUp.verifications.verifyEmailCode({
        code,
      });

      if (error) {
        console.error('Verification error:', JSON.stringify(error, null, 2));
        return;
      }

      if (signUp.status === 'complete') {
        await signUp.finalize({
          navigate: async ({ session, decorateUrl }) => {
            if (session?.currentTask) {
              console.log(session?.currentTask);
              return;
            }

            const url = decorateUrl('/');
            if (url.startsWith('http') && typeof window !== 'undefined') {
              window.location.href = url;
              return;
            }

            router.replace(url);
          },
        });
      }
    } catch (err) {
      console.error('Verification failed:', err);
    }
  };

  if (showEmailCode) {
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
              <Text style={styles.brandSubtitle}>Verify your email</Text>
            </View>

            <View style={styles.formCard}>
              <AuthFormField
                label="Verification Code"
                value={code}
                onChangeText={setCode}
                keyboardType="number-pad"
                autoCapitalize="none"
                placeholder="Enter 6-digit code"
                error={submitted ? signUpErrors?.fields?.code?.message : undefined}
              />

              <Pressable accessibilityRole="button" onPress={handleVerify} style={styles.ctaButton}>
                <Text style={styles.ctaLabel}>Verify Email</Text>
              </Pressable>

              <Pressable
                accessibilityRole="button"
                onPress={() => signUp.verifications.sendEmailCode()}
                style={styles.secondaryButton}
              >
                <Text style={styles.secondaryButtonText}>Resend code</Text>
              </Pressable>

              <View style={styles.linkRow}>
                <Text style={styles.linkText}>Already part of the hearth? </Text>
                <Link href="/sign-in" style={styles.link}>
                  Log in
                </Link>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }

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
            {params.reason === 'no_account' ? (
              <View style={styles.notice}>
                <Text style={styles.noticeTitle}>No account found</Text>
                <Text style={styles.noticeBody}>Create an account to continue.</Text>
              </View>
            ) : null}

             <AuthFormField
               label="Full Name"
               value={values.fullName}
               onChangeText={(text) => handleChange('fullName', text)}
               autoCapitalize="words"
               placeholder="Enter your name"
               error={submitted ? validationErrors.fullName : undefined}
             />

             <AuthFormField
               label="Email Address"
               value={values.email}
               onChangeText={(text) => handleChange('email', text)}
               keyboardType="email-address"
               autoCapitalize="none"
               placeholder="hello@hearth.com"
               error={
                 submitted
                   ? validationErrors.email ?? signUpErrors?.fields?.emailAddress?.message
                   : undefined
               }
             />

             <AuthFormField
               label="Password"
               value={values.password}
               onChangeText={(text) => handleChange('password', text)}
               secureTextEntry
               autoCapitalize="none"
               placeholder="••••••••"
               error={submitted ? validationErrors.password ?? signUpErrors?.fields?.password?.message : undefined}
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
  notice: {
    borderRadius: 16,
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: 'rgba(240, 246, 232, 1)',
    borderWidth: 1,
    borderColor: 'rgba(193, 201, 185, 0.55)',
  },
  noticeTitle: {
    color: lystoColors.text,
    fontSize: 14,
    fontWeight: '700',
  },
  noticeBody: {
    marginTop: 2,
    color: lystoColors.textMuted,
    fontSize: 13,
    lineHeight: 18,
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
  secondaryButton: {
    marginTop: 8,
    padding: 12,
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: lystoColors.primary,
    fontSize: 14,
    fontWeight: '600',
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
