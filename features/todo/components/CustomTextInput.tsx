import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';
import { StyleSheet } from 'react-native';

interface CustomTextInputProps {
    onChangeText: (text: string) => void;
    value: string;
    label: string;
    mode: 'outlined' | 'flat';
}

export const CustomTextInput = ({onChangeText = () => {}, value = '', label = '',mode = 'outlined'}: CustomTextInputProps) => {

    return (
      <TextInput
        label={label}
        value={value}
        onChangeText={text => onChangeText(text)}
        mode={mode}
        style={styles.input}
        autoCapitalize="none"
      />
    );
}

const styles = StyleSheet.create({
    input: {
        flex: 0.9
      },
});


export default TextInput;
