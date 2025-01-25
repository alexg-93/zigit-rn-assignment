import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ThemeType, Theme, UseTheme } from '../types/settings.types';

const lightTheme: Theme = {
  background: '#FFFFFF',
  text: '#333333',
  primary: '#2A004E',
  secondary: '#666666',
  border: '#DDDDDD',
  error: '#FF3333',
  card: '#F8F8F8',
  shadow: '#000000',
};

const darkTheme: Theme = {
  background: '#1A1A1A',
  text: '#FFFFFF',
  primary: '#9747FF',
  secondary: '#BBBBBB',
  border: '#444444',
  error: '#FF5555',
  card: '#2D2D2D',
  shadow: '#000000',
};

const THEME_STORAGE_KEY = '@app_theme';

type ThemeContextType = UseTheme;

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<ThemeType>('light');

  useEffect(() => {
    const loadTheme = async () => {
      try {
        const savedTheme = await AsyncStorage.getItem(THEME_STORAGE_KEY);
        if (savedTheme) {
          setTheme(savedTheme as ThemeType);
        }
      } catch (error) {
        console.error('Error loading theme:', error);
      }
    };
    loadTheme();
  }, []);

  const toggleTheme = async () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    try {
      await AsyncStorage.setItem(THEME_STORAGE_KEY, newTheme);
      setTheme(newTheme);
    } catch (error) {
      console.error('Error saving theme:', error);
    }
  };

  const colors = theme === 'light' ? lightTheme : darkTheme;

  const value = {
    theme,
    toggleTheme,
    colors,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}; 