import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setDarkMode } from '../../store/slices/themeSlice';

const SettingsScreen: React.FC = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  const toggleTheme = () => {
    dispatch(setDarkMode(!darkMode));
  };

  return (
    <View style={styles.container}>
      <Button title="Toggle Theme" onPress={toggleTheme} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SettingsScreen;
