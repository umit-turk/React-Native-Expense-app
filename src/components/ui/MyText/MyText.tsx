import React, { useContext } from 'react';
import { Text, TextProps, StyleSheet } from 'react-native';
import { ThemeContext } from '../../../theme/themeProvider';

interface CustomTextProps extends TextProps {
    style?: object;
}

const MyText: React.FC<CustomTextProps> = ({ style, children, ...props }) => {
    const theme = useContext(ThemeContext);

    return (
        <Text style={[styles.defaultText, { color: theme.text }, style]} {...props}>
            {children}
        </Text>
    );
};

const styles = StyleSheet.create({
    defaultText: {
        fontSize: 16, // Varsayılan font boyutu
        fontWeight: '400', // Varsayılan font kalınlığı
    },
});

export default MyText;
