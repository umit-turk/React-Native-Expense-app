// components/ui/CustomInput/CustomInput.tsx
import React from 'react';
import { TextInput, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { ThemeContext } from '../../../theme/themeProvider';

type CustomInputProps = {
    value: string;
    onChangeText: (text: string) => void;
    placeholder?: string;
    placeholderTextColor?: string;
    keyboardType?: 'default' | 'numeric' | 'email-address' | 'phone-pad';
    style?: ViewStyle | TextStyle;
};

const CustomInput: React.FC<CustomInputProps> = ({
    value,
    onChangeText,
    placeholder,
    placeholderTextColor,
    keyboardType = 'default',
    style,
}) => {
    const theme = React.useContext(ThemeContext);
    return (
        <TextInput
            style={[
                styles.input,
                {
                    borderColor: theme.border,
                    backgroundColor: theme.cardBackground,
                    color: theme.text,
                },
                style,
            ]}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor || theme.text}
            keyboardType={keyboardType}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderRadius: 10,
        padding: 12,
        fontSize: 16,
        height: 45,
        marginBottom: 15,
    },
});

export default CustomInput;
