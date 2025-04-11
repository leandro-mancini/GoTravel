import React, { createContext, ReactNode, useState } from 'react'
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import { useColorScheme } from 'react-native'
import { darkTheme, lightTheme } from './index'

type ThemeMode = 'light' | 'dark';

interface ThemeContextType {
  themeMode: ThemeMode;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>('light');

  const toggleTheme = () => {
    setThemeMode((prev) => {
      // console.log('prev', prev)

      return (prev === 'light' ? 'dark' : 'light')
    });
  };

  const theme = themeMode === 'dark' ? darkTheme : lightTheme;

  console.log('themeMode', themeMode)
  console.log('theme', theme)
  
  return (
    <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
      <EmotionThemeProvider theme={theme}>
        {children}
      </EmotionThemeProvider>
    </ThemeContext.Provider>
  );
}