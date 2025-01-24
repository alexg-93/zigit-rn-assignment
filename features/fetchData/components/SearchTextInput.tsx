import React,{useState} from 'react';
import { StyleSheet, View,TextInput,Dimensions} from 'react-native';

const { width } = Dimensions.get('window');

export type SearchTextInputProps = {
    onChangeText: (text: string) => void;
    value: string;
    placeholder: string;
    textInputStyle? : object;
    textInputContainerStyle? : object;
}

export const SearchTextInput = ({
    onChangeText = () => {},
    value = '',
    placeholder = 'Search...',
    textInputStyle = {},
    textInputContainerStyle = {},
} : SearchTextInputProps) => {

    const [isFocused, setIsFocused] = useState(false);

    const handleOnFocus = () => {
        setIsFocused(true);
    }

    const handleOnBlur = () => {
        setIsFocused(false);
    }

    const handleOnChangeText = (text: string) => {
        onChangeText(text);
    }

    return (
        <View style={[styles.textInputContainer,{borderColor: isFocused ? '#6200ee' : '#ccc'}, textInputContainerStyle]}>
            <TextInput
                style={[styles.input, textInputStyle]}
                placeholder={placeholder}
                onChangeText={handleOnChangeText}
                value={value}
                onFocus={handleOnFocus}
                onBlur={handleOnBlur}
                autoCapitalize='none'
                autoCorrect={false}
                placeholderTextColor={isFocused ? '#6200ee' : '#ccc'}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    textInputContainer: {
        width: width * 0.8,
        height: 50,
        borderWidth: 1.5,
        borderColor: '#ccc',
        borderRadius: 15,
        marginBottom: 20,
        alignSelf: 'center',
    },
    input: {
        fontSize: 16,
        height:'100%',
        marginStart: 10,
        color:'black',
        fontWeight: '600',
    },
})

