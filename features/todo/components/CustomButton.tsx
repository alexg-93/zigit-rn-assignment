import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';

interface CustomButtonProps {
    mode?: 'contained' | 'outlined';
    onPress?: () => void;
    buttonText: string;
    disabled: boolean;
}

const CustomButton = ({mode = 'contained', onPress = () => {},buttonText = '', disabled = false}: CustomButtonProps) => {
    return (
        <View>
         <Button disabled={disabled} mode={mode} onPress={onPress}>{buttonText}</Button>
        </View>
    );
}

const styles = StyleSheet.create({})

export default CustomButton;
