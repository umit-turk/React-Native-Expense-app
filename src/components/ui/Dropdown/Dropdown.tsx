import React from 'react';
import { StyleSheet } from 'react-native';
import { Dropdown as RNDropdown } from 'react-native-element-dropdown';
import { ThemeContext } from '../../../theme/themeProvider';

interface CustomDropdownProps {
  data: { label: string; value: string }[];
  placeholder: string;
  value: string;
  onChange: (item: { label: string; value: string }) => void;
  style?: object;
  containerStyle?: object;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  data,
  placeholder,
  value,
  onChange,
  style,
  containerStyle,
}) => {
  const theme = React.useContext(ThemeContext);

  return (
    <RNDropdown
      style={[styles.dropdown, style, { borderColor: theme.border, backgroundColor: theme.dropdown.background }]}
      selectedTextStyle={[styles.dropdownText, { color: theme.dropdown.text }]}
      containerStyle={[styles.dropdownContainer, containerStyle]}
      data={data}
      labelField="label"
      valueField="value"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

const styles = StyleSheet.create({
  dropdown: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
    marginHorizontal: 5,
    maxHeight: 45,
    minHeight: 45,
  },
  dropdownContainer: {
    backgroundColor: 'white',
  },
  dropdownText: {
    fontSize: 16,
  },
});

export default CustomDropdown;
