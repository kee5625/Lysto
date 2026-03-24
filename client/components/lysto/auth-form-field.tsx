import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { StyleSheet, Text, TextInput, type TextInputProps, View } from 'react-native';
import { lystoColors, lystoRadius } from '@/constants/lysto-theme';

type AuthFormFieldProps = TextInputProps & {
  label: string;
  icon?: keyof typeof MaterialIcons.glyphMap;
  error?: string;
};

export function AuthFormField({ label, icon, error, ...textInputProps }: AuthFormFieldProps) {
  return (
    <View style={styles.wrap}>
      <Text style={styles.label}>{label}</Text>
      <View style={[styles.inputWrap, !!error && styles.inputWrapError]}>
        {icon ? <MaterialIcons name={icon} size={20} color={lystoColors.textMuted} /> : null}
        <TextInput
          placeholderTextColor="rgba(114, 121, 107, 0.7)"
          style={styles.input}
          autoCorrect={false}
          {...textInputProps}
        />
      </View>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    gap: 8,
  },
  label: {
    color: lystoColors.text,
    fontSize: 14,
    fontWeight: '600',
    paddingLeft: 4,
  },
  inputWrap: {
    borderRadius: lystoRadius.md,
    backgroundColor: lystoColors.surfaceContainerHighest,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    minHeight: 54,
    paddingHorizontal: 16,
  },
  inputWrapError: {
    borderWidth: 1,
    borderColor: '#ba1a1a',
  },
  input: {
    flex: 1,
    color: lystoColors.text,
    fontSize: 15,
    paddingVertical: 12,
  },
  errorText: {
    color: '#ba1a1a',
    fontSize: 12,
    paddingLeft: 4,
  },
});
