import React from 'react';
import { TextInput } from 'react-native-paper';
import { StyleSheet, Dimensions } from 'react-native';
import { useTheme } from '@/features/settings/hooks/useTheme';

interface CustomTextInputProps {
    onChangeText: (text: string) => void;
    value: string;
    label: string;
    mode?: 'flat' | 'outlined';
}

export const CustomTextInput = ({
    onChangeText,
    value,
    label,
    mode = 'flat',
}: CustomTextInputProps) => {
    const { colors } = useTheme();

    return (
        <TextInput
            style={[styles.input, { backgroundColor: colors.card }]}
            mode={mode}
            label={label}
            value={value}
            onChangeText={onChangeText}
            textColor={colors.text}
            placeholderTextColor={colors.secondary}
            outlineColor={colors.border}
            activeOutlineColor={colors.primary}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        width: Dimensions.get('window').width * 0.6,
    },
});
