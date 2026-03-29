import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { AuthFormField } from '@/components/lysto';
import { lystoColors, lystoRadius, lystoTypography } from '@/constants/lysto-theme';
import { Link, router, type Href } from 'expo-router';
import { useState } from 'react';
import { useSignIn } from '@clerk/expo';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';

export default function SignInScreen() {
  const { signIn, isLoaded, errors, fetchStatus } = useSignIn();

  const { width } = useWindowDimensions();
  const showDecorativeImages = width >= 960;
  
  const [emailAddress, setEmailAddress] = useState('')
  const [password, setPassword] = useState('')
  const [code, setCode] = useState('')
  
  const [rememberMe, setRememberMe] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  const needsEmailCode = signIn?.status === 'needs_client_trust' || signIn?.status === 'needs_second_factor';

  const handleSignIn = async () => {
    setSubmitted(true);

    if (!isLoaded) return;

    const { error } = await signIn.password({
      emailAddress,
      password,
    });
     
    if (error) {
      console.error(JSON.stringify(error, null, 2));
      
      if (error.errors?.[0]?.code === 'form_identifier_not_found') {
        // User doesn't have an account - redirect to sign-up with pre-filled email
        router.replace({
          pathname: '/sign-up',
          params: { email: emailAddress, reason: 'no_account' },
        });
        return;
      }

      return;
    }
     
    if (signIn.status === 'complete') {
      await signIn.finalize({
        navigate: ({ session, decorateUrl }) => {
          if (session?.currentTask) {
            console.log(session?.currentTask);
            return;
          }
           
          const url = decorateUrl('/');
          if (url.startsWith('http') && typeof window !== 'undefined') {
            window.location.href = url;
            return;
          }

          router.replace(url as Href);
        },
      });
      return;
    }

    if (signIn.status === 'needs_second_factor' || signIn.status === 'needs_client_trust') {
      const emailCodeFactor = signIn.supportedSecondFactors.find(
        (factor) => factor.strategy === 'email_code',
      )

      if (emailCodeFactor) {
        await signIn.mfa.sendEmailCode();
      }
    }

    // Check why the sign-in is not complete
    console.error('Sign-in attempt not complete. Status:', signIn.status);
  };
  
  const handleVerify = async () => {
    setSubmitted(true);

    if (!isLoaded) return;

    const { error } = await signIn.mfa.verifyEmailCode({
      code,
    })
    if (error) {
      console.error(JSON.stringify(error, null, 2))
      return
    }

    if (signIn.status === 'complete') {
      await signIn.finalize({
        navigate: async ({ session, decorateUrl }) => {
          if (session?.currentTask) {
            // Handle session tasks
            // See https://clerk.com/docs/guides/development/custom-flows/authentication/session-tasks
            console.log(session?.currentTask)
            return
          }

          const url = decorateUrl('/');
          if (url.startsWith('http') && typeof window !== 'undefined') {
            window.location.href = url;
            return;
          }

          router.replace(url as Href);
        },
      })
    } else {
      // Check why the sign-in is not complete
      console.error('Sign-in attempt not complete. Status:', signIn.status)
    }
  }

  if (needsEmailCode) {
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
            <View style={styles.hero}>
              <Text style={styles.brandTitle}>Harvest &amp; Hearth</Text>
              <Text style={styles.heroHeading}>Verify your account</Text>
              <Text style={styles.heroSubheading}>
                Enter the verification code sent to your email
              </Text>
            </View>

            <View style={styles.formCard}>
                <AuthFormField
                  label="Verification Code"
                  icon="confirmation-number"
                  value={code}
                  onChangeText={setCode}
                  keyboardType="number-pad"
                  autoCapitalize="none"
                  placeholder="Enter 6-digit code"
                  error={submitted ? errors?.fields?.code?.message : undefined}
                />

              <Pressable
                accessibilityRole="button"
                onPress={handleVerify}
                style={({ pressed }) => [
                  styles.ctaButton,
                  (!code || fetchStatus === 'fetching') && styles.buttonDisabled,
                  pressed && styles.buttonPressed,
                ]}
                disabled={!code || fetchStatus === 'fetching'}
              >
                <Text style={styles.ctaLabel}>Verify</Text>
              </Pressable>

                <Pressable
                  accessibilityRole="button"
                  onPress={() => signIn.mfa.sendEmailCode()}
                  style={({ pressed }) => [styles.secondaryButton, pressed && styles.buttonPressed]}
                >
                  <Text style={styles.secondaryButtonText}>Resend code</Text>
                </Pressable>

                <Pressable
                  accessibilityRole="button"
                  onPress={() => signIn.reset()}
                  style={({ pressed }) => [styles.secondaryButton, pressed && styles.buttonPressed]}
                >
                  <Text style={styles.secondaryButtonText}>Start over</Text>
                </Pressable>
            </View>

            <View style={styles.footerMutedItems}>
              <Text style={styles.footerMutedText}>Private pantry</Text>
              <Text style={styles.footerDot}>•</Text>
              <Text style={styles.footerMutedText}>Curated weekly</Text>
              <Text style={styles.footerDot}>•</Text>
              <Text style={styles.footerMutedText}>Soft reminders</Text>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    )
  }

  return (
    <KeyboardAvoidingView
      style={styles.screen}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      {showDecorativeImages ? (
        <>
          <Image
            source={{
              uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3cY6M9HbyvV0cYVh2vcBM-zM1Q4Ww43YBuVipPmPKIZ6uvlwtKS0ycR_mOg1nWl65wSOxci8GZLntkIVFmUBJw0zz_jb6RjglVfZ7H-mo17vHuWKBrDIxhdQGgsdAfD6JPRQj5S70XuJc2Zc6wrGseFXwYPDbXlfAec60AgnaW_yZ-jpidxbqolET-LnKxLWIhH7NJESol0yUjsM_5rx_Ae2l4aoruI2Oz_T1p94v6EdvuSloLGtqEPNmA_0AxJe4RtMqNnPmi5UM',
            }}
            style={[styles.floatingImage, styles.floatingImageLeft]}
          />
          <Image
            source={{
              uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCaFKAYlGJ3owEEO9kz2JVTcGaVEqpL31SMpgoAn8U1EDKnfROu4sNnNaafmYSftweVcFIewy7D-ZZt2KKQmzuPkDi9uUpJgNEEj5MipWxiGn210gL5F-QLLWNnTWPpUHaBUCF3kvuBxuPtqzE1IQCeexRoU2EQd5obW54tE4rhtE3A8MqBzvSt-jcks5wK8YZzK6JEkNk204r2oDO7z4ApT4IfTTj1a5UZbDf4R3CJ-m3vEXvSdPz9Om3LDiLMWj0Cji9aigHADBJ_',
            }}
            style={[styles.floatingImage, styles.floatingImageRight]}
          />
        </>
      ) : null}

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.main}>
          <View style={styles.hero}>
            <Text style={styles.brandTitle}>Harvest &amp; Hearth</Text>
            <Text style={styles.heroHeading}>Welcome back.</Text>
            <Text style={styles.heroSubheading}>Step back into your curated pantry ritual.</Text>
          </View>

          <View style={styles.formCard}>
             <AuthFormField
               label="Email Address"
               icon="mail-outline"
               value={emailAddress}
               onChangeText={setEmailAddress}
               keyboardType="email-address"
               autoCapitalize="none"
               placeholder="hello@hearth.com"
               error={submitted ? errors?.fields?.emailAddress?.message : undefined}
             />

             <AuthFormField
               label="Password"
               icon="lock-outline"
               value={password}
               onChangeText={setPassword}
               secureTextEntry
               autoCapitalize="none"
               placeholder="••••••••"
               error={submitted ? errors?.fields?.password?.message : undefined}
             />

            <View style={styles.metaRow}>
              <Pressable
                accessibilityRole="checkbox"
                accessibilityState={{ checked: rememberMe }}
                onPress={() => setRememberMe((prev) => !prev)}
                style={styles.rememberToggle}
              >
                <MaterialIcons
                  name={rememberMe ? 'check-box' : 'check-box-outline-blank'}
                  size={20}
                  color={rememberMe ? lystoColors.primary : lystoColors.outline}
                />
                <Text style={styles.rememberText}>Remember me</Text>
              </Pressable>

              <Pressable accessibilityRole="button" style={styles.forgotButton}>
                <Text style={styles.forgotText}>Forgot password?</Text>
              </Pressable>
            </View>

            <Pressable accessibilityRole="button" onPress={handleSignIn} style={styles.ctaButton}>
              <Text style={styles.ctaLabel}>Sign In</Text>
            </Pressable>

            <View style={styles.signupRow}>
              <Text style={styles.signupText}>New to the hearth? </Text>
              <Link href="/sign-up" style={styles.signupLink}>
                Create account
              </Link>
            </View>
          </View>

          <View style={styles.footerMutedItems}>
            <Text style={styles.footerMutedText}>Private pantry</Text>
            <Text style={styles.footerDot}>•</Text>
            <Text style={styles.footerMutedText}>Curated weekly</Text>
            <Text style={styles.footerDot}>•</Text>
            <Text style={styles.footerMutedText}>Soft reminders</Text>
          </View>
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
    width: '100%',
    maxWidth: 510,
    alignSelf: 'center',
    gap: 20,
  },
  hero: {
    alignItems: 'center',
    gap: 2,
  },
  brandTitle: {
    color: lystoColors.primary,
    fontSize: 38,
    fontWeight: '600',
    fontFamily: lystoTypography.brand,
    textAlign: 'center',
    letterSpacing: -0.5,
  },
  heroHeading: {
    color: lystoColors.text,
    fontSize: 30,
    fontWeight: '700',
  },
  heroSubheading: {
    color: lystoColors.textMuted,
    fontSize: 16,
    textAlign: 'center',
  },
  formCard: {
    borderRadius: 26,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.55)',
    backgroundColor: 'rgba(255, 255, 255, 0.48)',
    padding: 22,
    gap: 14,
    shadowColor: '#42493c',
    shadowOpacity: 0.1,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 10 },
    elevation: 4,
  },
  metaRow: {
    marginTop: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
  },
  rememberToggle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  rememberText: {
    color: lystoColors.textMuted,
    fontSize: 13,
    fontWeight: '500',
  },
  forgotButton: {
    paddingVertical: 2,
  },
  forgotText: {
    color: lystoColors.primary,
    fontSize: 13,
    fontWeight: '700',
  },
  ctaButton: {
    marginTop: 6,
    minHeight: 58,
    borderRadius: lystoRadius.pill,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: lystoColors.primary,
  },
  ctaLabel: {
    color: lystoColors.white,
    fontSize: 19,
    fontWeight: '700',
  },
  signupRow: {
    marginTop: 6,
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  signupText: {
    color: lystoColors.textMuted,
    fontSize: 14,
  },
  signupLink: {
    color: lystoColors.primary,
    fontSize: 14,
    fontWeight: '700',
  },
  footerMutedItems: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 7,
    opacity: 0.7,
  },
  footerMutedText: {
    fontSize: 11,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    color: lystoColors.textMuted,
  },
  footerDot: {
    fontSize: 10,
    color: lystoColors.outline,
  },
  floatingImage: {
    position: 'absolute',
    width: 250,
    height: 250,
    borderRadius: 24,
    opacity: 0.25,
  },
  floatingImageLeft: {
    left: 38,
    top: 130,
    transform: [{ rotate: '-8deg' }],
  },
  floatingImageRight: {
    right: 42,
    bottom: 90,
    transform: [{ rotate: '7deg' }],
  },
});
