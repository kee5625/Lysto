import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { lystoColors, lystoTypography } from '@/constants/lysto-theme';
import { router, type Href } from 'expo-router';
import { useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function SplashScreen() {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      router.replace('/home' as Href);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.brandBlock}>
        <Text style={styles.brandWordmark}>Harvest{`\n`}&amp; Hearth</Text>
        <Text style={styles.tagline}>The art of domestic curation.</Text>
      </View>

      <View style={styles.imageWrap}>
        <Image
          source={{
            uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBjBELxpTMETzDk7zc1FazlQDFqVIu6cVcu0NWYPDMo5RyMfHmEX7Oucm5iOee2UtJbzTb4CfMdS72YS4Ny9Dtgc3qalkPn8GNsqT3dkyVHbXIjWl3I3Xm6W-niTQdmWFLHqfDPy2K4SUz6P9NvGg9uDAdP0oWDh0v5ts-a2XKMs_4Sib3VmYoAHLygDKAz-X7V59UMwVMFN3_4I1oBGf5RFap6jYXILE1Tj_jiHOQy0cN-W5CzqXets20zBROgqFWGeZDnt76BN5aR',
          }}
          style={styles.image}
          accessibilityLabel="Editorial groceries splash image"
        />
      </View>

      <View style={styles.loaderRow}>
        <MaterialIcons name="restaurant" size={16} color={lystoColors.primary} />
        <Text style={styles.loaderText}>Organizing your pantry</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lystoColors.surfaceContainer,
    justifyContent: 'space-between',
    paddingTop: 100,
    paddingBottom: 56,
    paddingHorizontal: 24,
  },
  brandBlock: {
    alignItems: 'center',
    gap: 12,
  },
  brandWordmark: {
    textAlign: 'center',
    color: '#558e3f',
    fontSize: 58,
    lineHeight: 56,
    fontWeight: '500',
    letterSpacing: -1,
    fontFamily: lystoTypography.brand,
  },
  tagline: {
    color: lystoColors.text,
    fontSize: 16,
  },
  imageWrap: {
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    overflow: 'hidden',
    height: 270,
    backgroundColor: '#fdf2df',
  },
  image: {
    width: '100%',
    height: '100%',
    opacity: 0.72,
  },
  loaderRow: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    flexDirection: 'row',
  },
  loaderText: {
    color: lystoColors.textMuted,
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
});
