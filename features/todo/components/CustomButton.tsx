import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { useTheme } from '@/features/settings/hooks/useTheme';

interface CustomButtonProps {
    mode?: 'contained' | 'outlined';
    onPress?: () => void;
    buttonText: string;
    disabled: boolean;
}

const CustomButton = ({
    mode = 'contained',
    onPress = () => {},
    buttonText = '',
    disabled = false
}: CustomButtonProps) => {
    const { colors } = useTheme();

    return (
        <Button
            disabled={disabled}
            mode={mode}
            onPress={onPress}
            style={[
                styles.button,
                { borderColor: colors.primary }
            ]}
            labelStyle={{ color: mode === 'contained' ? colors.card : colors.primary }}
            buttonColor={mode === 'contained' ? colors.primary : 'transparent'}
        >
            {buttonText}
        </Button>
    );
};

const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
    }
});

export default CustomButton;
