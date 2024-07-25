import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  const theme = darkMode
    ? {
        background: '#121212',
        text: '#ffffff',
        cardBackground: '#1f1f1f',
        border: '#333333',
        dropdown: {
          background: '#1f1f1f',
          text: '#ffffff',
          border: '#333333',
        }
      }
    : {
        background: '#f5f5f5',
        text: '#000000',
        cardBackground: '#ffffff',
        border: '#dddddd',
        dropdown: {
          background: '#ffffff',
          text: '#000000',
          border: '#dddddd',
        }
      };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const ThemeContext = React.createContext({
  background: '#f5f5f5',
  text: '#000000',
  cardBackground: '#ffffff',
  border: '#dddddd',
  dropdown: {
    background: '#ffffff',
    text: '#000000',
    border: '#dddddd',
  },
});

export default ThemeProvider;
