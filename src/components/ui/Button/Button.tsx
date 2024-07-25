import React from 'react';
import { TouchableOpacity, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import MyText from '../MyText/MyText';

type ButtonProps = {
  title: string;
  onPress: () => void;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({ title, onPress, buttonStyle, textStyle, disabled = false }) => {
  return (
    <TouchableOpacity
      style={[styles.button, buttonStyle, disabled && styles.disabled]}
      onPress={onPress}
      disabled={disabled}
    >
      <MyText style={[styles.buttonText, textStyle]}>{title}</MyText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#007bff',
    elevation: 3,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  disabled: {
    backgroundColor: '#cccccc',
  },
});

export default Button;
