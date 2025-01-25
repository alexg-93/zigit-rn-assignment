import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { useTheme } from '@/features/settings/hooks/useTheme';

interface SearchTextInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

export const SearchTextInput = ({
  value,
  onChangeText,
  placeholder,
}: SearchTextInputProps) => {
    
  const { colors } = useTheme();

  return (
    <TextInput
      style={[
        styles.input,
        {
          backgroundColor: colors.card,
          borderColor: colors.border,
          color: colors.text,
        },
      ]}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={colors.secondary}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
    fontSize: 16,
  },
});
